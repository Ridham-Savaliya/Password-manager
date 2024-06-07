import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";

<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition="Bounce"
/>
{/* Same as */}
<ToastContainer />

const Manager = () => {
  const ref = useRef();
  const notify = () => toast("Wow so easy!");
  const passwordref = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {

      setpasswordArray(JSON.parse(passwords))
      // setpasswordArray(JSON.parse(passwords));
      //    toast(" Welcome to passop manager!", {
      //     position: "top-center",
      //     autoClose: 1000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //     theme: "dark",
      //   });
    }
  }, []);

  const showpassword = () => {
    passwordref.current.type = "text";
    console.log(ref.current.src);
    if (ref.current.src.includes("icons/eyecross.png")) {
      ref.current.src = "icons/eye.png";
      passwordref.current.type = "text";
    } else {
      ref.current.src = "../icons/eyecross.png";
      passwordref.current.type = "password";
    }
  };

  const savepassword = () => {
    if(form.site.length >3 && form.username.length >3 &&form.password.length >3){

        setpasswordArray([...passwordArray, {...form, id: uuidv4()}])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form, id: uuidv4()}]))
        console.log([...passwordArray, form])
        setform({ site: "", username: "", password: "" })
      //     toast('Password saved!', {
      //     position: "top-right",
      //     autoClose: 1000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //     theme: "dark",
      // });
}
else{
  toast('Password not saved!', {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
});    
}

}


  const deletepassword = (id) => {
 
    console.log("deleteting with id's", id);
    let c = confirm("do you really want to delete your password!")
    if(c)
      {
        setpasswordArray(passwordArray.filter((item) => item.id !== id));
        localStorage.setItem("passwords",JSON.stringify(passwordArray.filter((item) => item.id != id)));
        // toast(" Password Deleted Successfully!", {
        //   position: "top-center",
        //   autoClose: 1000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "dark",
        // });
      }
  };

  const editpassword = (id) => {

    console.log("editing with id's", id);
    let e= confirm("do you really want to edit!")
    if(e)
      {
        setform(passwordArray.filter((i) => i.id === id)[0]);
        setpasswordArray(passwordArray.filter((item) => item.id !== id));
      }

   
  
  };

  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const copytext = (text) => {
    toast(" Copied to ClipBoard!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      {/* <button onClick={notify}>click me</button> */}
      <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="Bounce"
            />
            {/* Same as */}
            <ToastContainer />
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-100 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
      </div>

      <div className="px-2 py-2 md:mycontainer max-w-4xl">
        <h1 className="text-4xl text-green-700 font-bold text-center">
          <span className="text-green-700 "> &lt;</span>
          <span className="text-black">Pass</span>
          <span className="text-green-700">OP&gt;</span>
        </h1>

        <p className="text-center m-2 font-bold">
          Your Own <span className="text-green-700 text-xl">Password</span>{" "}
          Manager
        </p>
        <input
          value={form.site}
          onChange={handlechange}
          className="rounded-full center w-full border font-bold border-green-700 py-1 px-4 text-black"
          type="text"
          name="site"
          id="site"
          placeholder="Enter Website URL Here!"
        />
        <div className="text-black flex flext-col p-2 gap-8 justify-center">
          <div className="flex flex-col md:flex-row w-full gap-2 justify-around ">
            <input
              value={form.username}
              onChange={handlechange}
              className="rounded-full w-full center border font-bold border-green-700 px-4 text-black"
              type="text"
              name="username"
              id="username"
              placeholder="Enter Username"
            />

            <div className="relative">
              <input
                value={form.password}
                onChange={handlechange}
                ref={passwordref}
                className="rounded-full w-full border font-bold  border-green-700 py-1 px-4 text-black"
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
              />
              <span
                className="absolute right-0 ms-1 cursor-pointer  "
                onClick={showpassword}
              >
                <img
                  ref={ref}
                  className="w-8 center p-1"
                  src="./icons/eye.png"
                  alt="eye"
                />
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={savepassword}
          className="flex  items-center bg-green-500 rounded-full  font-bold p-2  hover:text-white hover:bg-green-600  mx-auto      "
        >
          <lord-icon
            src="https://cdn.lordicon.com/jgnvfzqg.json"
            trigger="hover"
          ></lord-icon>
          Save Password
        </button>
      </div>

      <div className="passwords sm:ms-0">
        <h2 className="center text-xl font-bold hover:text-green-700">
          Your Passwords
        </h2>
        {passwordArray.length === 0 && (
          <div className="font-bold text-2xl center my-4">
            No passwords to show!
          </div>
        )}
        {passwordArray.length != 0 && (
          <table class=" ms-auto me-auto min-w-[80%]  md:table-auto w-1/2 center overflow-hidden rounded-md  m-2 mb-2 p-4 ">
            <thead className=" ">
              <tr className="bg-green-700 mx-auto text-white font-bold">
                <th className="py-2">site</th>
                <th>username</th>
                <th className="me-32">password</th>
                <th className="me-32">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-green-200 ">
              {passwordArray.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="py-2 flex items-center justify-center border border-slate-400 text-center cursor-pointer  w-42">
                      <a target="_blank" href={item.site}>
                        <div className="flex  items-center justify-center"></div>

                        <span>{item.site}</span>
                      </a>
                      <div
                        className="cursor-pointer  lordicon-copy flex pt-1 ps-2"
                        onClick={() => {
                          copytext(item.site);
                        }}
                      >
                        <lord-icon
                          src="https://cdn.lordicon.com/iykgtsbt.json"
                          trigger="hover"
                        ></lord-icon>
                      </div>
                    </td>
                    <td className="py-2 border  border-slate-400 text-center w-42">
                      <div className="flex lordicon-copy items-center justify-center">
                        <span>{item.username}</span>

                        <div
                          className="cursor-pointer   border-slate-400 pt-1 ps-2"
                          onClick={() => {
                            copytext(item.username);
                          }}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/iykgtsbt.json"
                            trigger="hover"
                          ></lord-icon>
                        </div>
                      </div>
                    </td>
                    <td className="py-2 border flex justify-center items-center border-slate-400 text-center w-42">
                      <div className="flex items-center justify-center">
                        <span>{item.password}</span>
                        <div
                          className="cursor-pointer  lordicon-copy justify-center  flex pt- ps-"
                          onClick={() => {
                            copytext(item.password);
                          }}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/iykgtsbt.json"
                            trigger="hover"
                          ></lord-icon>
                        </div>
                      </div>
                    </td>

                    <td className=" items-center justify-center py-2 border border-white center">
                      <span
                        className="cursor-pointer mx-2"
                        onClick={() => {
                          editpassword(item.id);
                        }}
                      >
                        <lord-icon
                          src="https://cdn.lordicon.com/gwlusjdu.json"
                          // src="https://cdn.lordicon.com/gwlusjdu.json"
                          trigger="hover"
                        ></lord-icon>
                      </span>
                      <span
                        className=" m-0 md:cursor-pointer mx-2"
                        onClick={() => {
                          deletepassword(item.id);
                        }}
                      >
                        <lord-icon
                          src="https://cdn.lordicon.com/skkahier.json"
                          // src="https://cdn.lordicon.com/gwlusjdu.json"
                          trigger="hover"
                        ></lord-icon>
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default Manager;
