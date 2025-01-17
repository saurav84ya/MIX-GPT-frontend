import React, { useEffect, useState } from "react";
import { FaCamera, FaEdit, FaTrash, FaKey, FaSignOutAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getOtpForReg, getUserData, updateUserEmail, updateUserName } from "../store/authSlice";
import { deleteAllPrompt } from "../store/promptSlice";
import AskUi from "./ui/AskUi";
import toast from "react-hot-toast";

export default function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [askDeletePrompt, setaskDeletePrompt] = useState(false);
  const [askDeleteAccount, setaskDeleteAccount] = useState(false);
  const [countdown, setCountdown] = useState(30); // Countdown for the delete confirmation
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const suggestions = ["Change Password", "Change Email", "Settings", "Logout"];
  const dispatch = useDispatch();
  const [askOtp , setAskOtp] = useState(false);
  const [reqOtp , setReqOtp] = useState("");
  const [userData, setUserData] = useState(null);
  const { user ,otpLoading} = useSelector((state) => state.authSlice);

  // console.log(otpLoading,"otpLoading")

  useEffect(() => {
    if (!userData) {
      dispatch(getUserData(user?.email)).then((data) => {
        const userInfo = data?.payload.user;
        setUserData(userInfo);
        setNewName(userInfo?.name);
        setNewEmail(userInfo?.email);
      });
    }
  }, [userData, dispatch, user]);

  useEffect(() => {
    let timer;
    if (askDeleteAccount) {
      setCountdown(30); // Reset countdown
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [askDeleteAccount]);

  const handleUpdateEmailOtpRequest = () => {
    const formdata = {
      id: user.id,
      email: newEmail,
    };
    if(user.email != newEmail){
      dispatch(getOtpForReg(formdata.email))
      .then((x) => {
        if (x?.payload.success) {
          setAskOtp(true);
          toast.success(x?.payload.message || "done");
        } else {
          toast.error(x?.payload.message || "error");
        }
      });
    } else {
      toast.error("You did't change your Email");
    }
  };

  const handleUpdateEmail = () => {
    const formdata = {
      id: user.id,
      email: newEmail,
      otp : reqOtp
    }
    dispatch(updateUserEmail(formdata))
    .then((x) => {
      if (x?.payload.success) {
        setAskOtp(true);
        toast.success(x?.payload.message || "done");
        
        setTimeout(() => {
          window.location.href = "/";
        } , 2000)

      } else {
        toast.error(x?.payload.message || "error");
      }
    });
  }

  const handleUpdateName = () => {
    const formdata = {
      id: user.id,
      newName: newName,
    };
    if (user.name != newName) {
      dispatch(updateUserName(formdata)).then((x) => {
        if (x?.payload.success) {
          setIsEditing(false);
          toast.success(x?.payload.message || "done");
          window.location.href = "/";
        } else {
          toast.error(x?.payload.message || "error");
        }
      });
    } else {
      toast.error("You did't change your name");
    }
  };

  const handleDeleteAccount = () => {
    dispatch(deleteUser(user?.id)).then((data) => {
      if (data?.payload.success) {
        window.location.href = "/";
      } else {
        toast.error(data?.payload.message || "Error while Deleting Account");
      }
    });
    setaskDeleteAccount(false);
  };

  const deletAllPromptFun = () => {
    dispatch(deleteAllPrompt(user?.id)).then((data) => {
      if (data?.payload.success) {
        toast.success(data?.payload?.message);
        setaskDeletePrompt(false);
      } else {
        toast.error(data?.payload?.message || "Something went wrong");
      }
    });
  };

  return (
    <div className="flex justify-center items-center relative min-h-screen">
      {askDeletePrompt && (
        <div className="absolute">
          <AskUi
            title={"Delete All Prompt"}
            setFun={setaskDeletePrompt}
            fun={deletAllPromptFun}
          />
        </div>
      )}
      {askDeleteAccount && (
        <div className="absolute">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Are you sure you want to delete your account?
            </h2>
            <div className="flex gap-4 justify-center">
              <button
                onClick={handleDeleteAccount}
                disabled={countdown > 0}
                className={`py-2 px-4 rounded-md text-white ${
                  countdown > 0
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-red-500 hover:bg-red-700"
                }`}
              >
                {countdown > 0 ? countdown : "Yes"}
              </button>
              <button
                onClick={() => setaskDeleteAccount(false)}
                className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <div className="flex justify-center mb-6 relative">
          <div className="relative">
            <img
              src="https://avatar.iran.liara.run/public/boy?username=test1"
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-lg"
            />
            <label
              htmlFor="profileImage"
              className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-2 cursor-pointer hover:bg-blue-700"
            >
              <FaCamera />
            </label>
          </div>
        </div>
        <div className="text-center mb-8">
          {isEditing ? (
            <div>
              <div className="mb-4">
                <div className="flex items-center justify-between gap-4 ">
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="w-full p-2 border rounded-lg"
                  />
                  <button
                    className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300"
                    onClick={handleUpdateName}
                  >
                    update Name
                  </button>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex justify-between gap-4">
                  {
                    !askOtp ? <input
                    type="email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    className="w-full p-2 border rounded-lg"
                  /> : <input
                  type="number"
                  placeholder="Enter otp here"
                  value={reqOtp}
                  onChange={(e) => setReqOtp(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                />
                  }

                  {!askOtp ? <button  disabled={otpLoading}
                    className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300"
                    onClick={handleUpdateEmailOtpRequest}
                  >
                    { otpLoading ? "Loading..." : "update Email"}
                  </button> : <button  onClick={handleUpdateEmail} className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300"
                     >VerifyOtp</button>}
                </div>
              </div>

              <button
                onClick={() => setIsEditing(false)}
                className="bg-red-500 ml-4 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-xl font-semibold text-gray-800">
                {userData?.name}
              </h2>
              <p className="text-gray-600 mb-4">{userData?.email}</p>
              <div className="flex justify-center gap-6">
                <button
                  onClick={() => setaskDeleteAccount(true)}
                  className="flex items-center gap-2 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300"
                >
                  <FaTrash /> Delete Account
                </button>
                <button
                  onClick={() => setaskDeletePrompt(true)}
                  className="flex items-center gap-2 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300"
                >
                  <FaTrash /> Delete All Prompts
                </button>
              </div>
              <div className="mt-6 text-center">
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  <div className="flex items-center gap-2">
                    <FaEdit /> <h1>Edit Info</h1>
                  </div>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
