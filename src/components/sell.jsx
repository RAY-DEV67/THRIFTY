import { Profile } from "./profile";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";
import db from "../config/firebase";
import { storage } from "../config/firebase";
import { updateDoc, addDoc, collection } from "firebase/firestore";

export function Sell() {
  const [user] = useAuthState(auth);

  const [categories, setcategories] = useState(false);
  const [location, setlocation] = useState(false);
  const [condition, setcondition] = useState(false);
  const [gender, setgender] = useState(false);
  const [size, setsize] = useState(false);
  const [isfile, setfile1] = useState("");
  const [file2, setfile2] = useState("");
  const [file3, setfile3] = useState("");
  const [file4, setfile4] = useState("");
  const [file5, setfile5] = useState("");
  const [vendorlogo, setvendorlogo] = useState("");
  const [url, seturl] = useState("");
  const [top, settop] = useState(false);
  const [id, setid] = useState(0);

  // settop()

  console.log(url);

  const [values, setvalues] = useState({
    title: "",
    description: "",
    price: null,
    phone: null,
    category: "Categories",
    condition: "Condition",
    gender: "Gender",
    size: "Size",
    location: "Location",
    instagram: "",
    twitter: "",
    madeInNigeria: false,
    handmade: false,
    warranty: false,
    under5k: false,
    Top: top,
    brand: "",
    color: "",
    vendor: "",
  });

  const [errors, seterrors] = useState({});

  const handleChange = (event) => {
    setvalues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!isfile) {
      tempErrors.file1 = "Please select a title Picture";
    }
    if (isfile.size > 500000) {
      tempErrors.file1 = "file size must not exceed 5 MB";
    }
    if (!file2) {
      tempErrors.file2 = "Please select a Picture";
    }
    if (file2.size > 500000) {
      tempErrors.file2 = "file size must not exceed 5 MB";
    }
    if (file3.size > 500000) {
      tempErrors.file3 = "file size must not exceed 5 MB";
    }
    if (!values.title) {
      tempErrors.title = "Please add a title";
    }
    if (!values.description) {
      tempErrors.description = "Please input a description for the product";
    }
    if (!values.price) {
      tempErrors.price = "Please input a price for the product";
    }
    if (values.price > 20000) {
      tempErrors.price = "Maximum price on Thrift NG is 20,000 NGN";
    }
    // if (isNaN(values.price)) {
    //   tempErrors.price = "Please input a number";
    // }

    if (values.category === "Categories") {
      tempErrors.category = "Please select category";
    }
    if (values.condition === "Condition") {
      tempErrors.condition = "Please select condition";
    }
    if (values.gender === "Gender") {
      tempErrors.gender = "Please select Gender";
    }
    if (values.location === "Location") {
      tempErrors.location = "Please select location";
    }
    if (!values.phone) {
      tempErrors.phone = "Please input your Phone Number ";
    }
    if (!/^\d{11}$/.test(values.phone) || `${values.phone}`.charAt(0) !== "0") {
      tempErrors.phone = "Invalid Phone Number";
    }
    seterrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const upload = async () => {
    setid(id + 1);
    const docRef = await addDoc(collection(db, "Products"), {
      ...values,
      useid: id,
      userId: user?.uid,
      searchKeywords:
        `${values.title.toLowerCase()} ${values.description.toLowerCase()} ${values.brand.toLowerCase()} ${values.vendor?.toLowerCase()}`.split(
          " "
        ),
    });

    console.log(id);
    if (isfile == null) return;
    seturl("getting link");
    storage
      .ref("/images/" + isfile.name)
      .put(isfile)
      .on("state_changed", alert("success"), alert, () => {
        storage
          .ref("images")
          .child(isfile.name)
          .getDownloadURL()
          .then((imgUrl) => {
            updateDoc(docRef, {
              images: imgUrl,
              username: user?.displayName,
            });
          });
      });

    if (file2 == null) return;
    seturl("getting link");
    storage
      .ref("/images/" + file2.name)
      .put(file2)
      .on("state_changed", () => {
        storage
          .ref("images")
          .child(file2.name)
          .getDownloadURL()
          .then((imgUrl) => {
            updateDoc(docRef, {
              images2: imgUrl,
            });
          });
      });

    if (file3 == null) return;
    seturl("getting link");
    storage
      .ref("/images/" + file3.name)
      .put(file3)
      .on("state_changed", () => {
        storage
          .ref("images")
          .child(file3.name)
          .getDownloadURL()
          .then((imgUrl) => {
            updateDoc(docRef, {
              images3: imgUrl,
            });
          });
      });

      if (file4 == null) return;
    seturl("getting link");
    storage
      .ref("/images/" + file4.name)
      .put(file4)
      .on("state_changed", () => {
        storage
          .ref("images")
          .child(file4.name)
          .getDownloadURL()
          .then((imgUrl) => {
            updateDoc(docRef, {
              images4: imgUrl,
            });
          });
      });

      if (file5 == null) return;
    seturl("getting link");
    storage
      .ref("/images/" + file5.name)
      .put(file5)
      .on("state_changed", () => {
        storage
          .ref("images")
          .child(file5.name)
          .getDownloadURL()
          .then((imgUrl) => {
            updateDoc(docRef, {
              images5: imgUrl,
            });
          });
      });

    if (vendorlogo == null) return;
    seturl("getting link");
    storage
      .ref("/images/" + vendorlogo.name)
      .put(vendorlogo)
      .on("state_changed", () => {
        storage
          .ref("images")
          .child(vendorlogo.name)
          .getDownloadURL()
          .then((imgUrl) => {
            updateDoc(docRef, {
              vendorlogo: imgUrl,
            });
          });
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      upload();

      console.log("form is valid");
      console.log(values);
      // console.log(isfile.name);
    } else {
      console.log("form is invalid");
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <p className="text-center py-[1rem] ">Post An AD</p>
          <div className="flex flex-col items-center">
            <form
              onSubmit={handleSubmit}
              className="w-[90%] bg-red-400 flex flex-col px-[1rem] pb-[2.5rem]"
            >
              <div
                onClick={() => {
                  setcategories(!categories);
                }}
                className="flex mt-[2rem] px-[1rem] justify-between border py-[0.5rem] rounded-[10px] items-center bg-white"
              >
                <p>{values.category}</p>
                <p>&#8964;</p>
              </div>
              {errors.category && <p>{errors.category}</p>}

              {categories ? (
                <div className="flex flex-col items-center mt-[1rem] bg-blue-300 py-[1rem] rounded-[10px]">
                  <p
                    onClick={() => {
                      setcategories(false);
                      values.category = "Cloths";
                    }}
                    className="w-[100%] text-center pb-[0.5rem]"
                  >
                    Clothes
                  </p>
                  <p
                    onClick={() => {
                      setcategories(false);
                      values.category = "Shoes";
                    }}
                    className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
                  >
                    Shoes
                  </p>
                  <p
                    onClick={() => {
                      setcategories(false);
                      values.category = "Hair";
                    }}
                    className="w-[100%] border-b-[2px] text-center py-[0.5rem]"
                  >
                    Hair
                  </p>
                  <p
                    onClick={() => {
                      setcategories(false);
                      values.category = "Bags";
                    }}
                    className="w-[100%] border-b-[2px] text-center py-[0.5rem]"
                  >
                    Bags
                  </p>

                  <p
                    onClick={() => {
                      setcategories(false);
                      values.category = "Accessories";
                    }}
                    className="w-[100%] border-b-[2px] pb-[0.5rem] text-center pt-[0.5rem]"
                  >
                    Accesories
                  </p>
                  <p
                    onClick={() => {
                      setcategories(false);
                      values.category = "Skin-Care";
                    }}
                    className="w-[100%] border-b-[2px] text-center py-[0.5rem]"
                  >
                    Skin Care
                  </p>
                  <p
                    onClick={() => {
                      setcategories(false);
                      values.category = "Pastries";
                    }}
                    className="w-[100%] border-b-[2px] text-center py-[0.5rem]"
                  >
                    Pastries
                  </p>
                  <p
                    onClick={() => {
                      setcategories(false);
                      values.category = "Fragrances";
                    }}
                    className="w-[100%] border-b-[2px] text-center py-[0.5rem]"
                  >
                    Fragrances
                  </p>
                </div>
              ) : (
                ""
              )}

              <div className="mt-[2rem]">
                <h2>Add photo</h2>
                <p className="text-[12px] mt-[1rem]">
                  First picture is the title picture
                </p>
                <div className="flex flex-col">
                  <div>
                    <input
                      className="mt-[1rem]"
                      multiple
                      type="file"
                      accept="image/png , image/jpg"
                      name="photos"
                      onChange={(event) => {
                        setfile1(event.target.files[0]);
                      }}
                    />
                    {errors.file1 && <p>{errors.file1}</p>}
                  </div>

                  <div>
                    <input
                      className="mt-[1rem]"
                      multiple
                      type="file"
                      accept="image/png , image/jpg"
                      name="photos2"
                      onChange={(event) => {
                        setfile2(event.target.files[0]);
                        console.log(event.target.files[0]);
                      }}
                    />
                    {errors.file2 && <p>{errors.file2}</p>}
                  </div>

                  <div>
                    <input
                      className="mt-[1rem]"
                      multiple
                      type="file"
                      accept="image/png , image/jpg"
                      name="photos3"
                      onChange={(event) => {
                        setfile3(event.target.files[0]);
                      }}
                    />
                    {errors.file3 && <p>{errors.file3}</p>}
                  </div>

                  <div>
                    <input
                      className="mt-[1rem]"
                      multiple
                      type="file"
                      accept="image/png , image/jpg"
                      name="photos4"
                      onChange={(event) => {
                        setfile4(event.target.files[0]);
                      }}
                    />
                  </div>

                  <div>
                    <input
                      className="mt-[1rem]"
                      multiple
                      type="file"
                      accept="image/png , image/jpg"
                      name="photos5"
                      onChange={(event) => {
                        setfile5(event.target.files[0]);
                      }}
                    />
                  </div>
                </div>
                <p className="text-[12px] mt-[1rem]">
                  Each picture must not exceed 5MB
                </p>
                <p className="text-[12px]">
                  Supported formats are *.jpg and *jpeg
                </p>
              </div>

              <div
                onClick={() => {
                  setlocation(!location);
                }}
                className="flex px-[1rem] mt-[2rem] justify-between border py-[0.5rem] rounded-[10px] items-center bg-white"
              >
                <p>{values.location}</p>
                <p>&#8964;</p>
              </div>
              {errors.location && <p>{errors.location}</p>}
              {location ? (
                <div className="flex flex-col items-center mt-[1rem] bg-blue-300 py-[1rem] rounded-[10px]">
                  <p
                    onClick={() => {
                      setlocation(false);
                      values.location = "Abia State";
                    }}
                    className="w-[100%] text-center pb-[0.5rem]"
                  >
                    Abia State
                  </p>
                  <p
                    onClick={() => {
                      setlocation(false);
                      values.location = "Adamawa State";
                    }}
                    className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
                  >
                    Adamawa State
                  </p>
                  <p
                    onClick={() => {
                      setlocation(false);
                      values.location = "AkwaIbom State";
                    }}
                    className="w-[100%] text-center py-[0.5rem]"
                  >
                    Akwa Ibom State
                  </p>
                  <p
                    onClick={() => {
                      setlocation(false);
                      values.location = "Anambra State";
                    }}
                    className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
                  >
                    Anambra State
                  </p>
                  <p
                    onClick={() => {
                      setlocation(false);
                      values.location = "Bauchi State";
                    }}
                    className="w-[100%] text-center py-[0.5rem]"
                  >
                    Bauchi State
                  </p>
                  <p
                    onClick={() => {
                      setlocation(false);
                      values.location = "Bayelsa State";
                    }}
                    className="border-t-[2px] w-[100%] text-center py-[0.5rem]"
                  >
                    Bayelsa State
                  </p>
                  <p
                    onClick={() => {
                      setlocation(false);
                      values.location = "Benue State";
                    }}
                    className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
                  >
                    Benue State
                  </p>
                  <p
                    onClick={() => {
                      setlocation(false);
                      values.location = "Borno State";
                    }}
                    className="w-[100%] text-center py-[0.5rem]"
                  >
                    Borno State
                  </p>
                  <p
                    onClick={() => {
                      setlocation(false);
                      values.location = "Cross River State";
                    }}
                    className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
                  >
                    Cross River State
                  </p>
                  <p
                    onClick={() => {
                      setlocation(false);
                      values.location = "Delta State";
                    }}
                    className="w-[100%] text-center pt-[0.5rem]"
                  >
                    Delta State
                  </p>
                  <p
                    onClick={() => {
                      setlocation(false);
                      values.location = "Ebonyi State";
                    }}
                    className="border-t-[2px] w-[100%] text-center py-[0.5rem]"
                  >
                    Ebonyi State
                  </p>
                  <p
                    onClick={() => {
                      setlocation(false);
                      values.location = "Edo State";
                    }}
                    className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
                  >
                    Edo State
                  </p>
                  <p
                    onClick={() => {
                      setlocation(false);
                      values.location = "Ekiti State";
                    }}
                    className="w-[100%] text-center py-[0.5rem]"
                  >
                    Ekiti State
                  </p>
                  <p
                    onClick={() => {
                      setlocation(false);
                      values.location = "Enugu State";
                    }}
                    className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
                  >
                    Enugu State
                  </p>
                  <p
                    onClick={() => {
                      setlocation(false);
                      values.location = "Gombe State";
                    }}
                    className="w-[100%] text-center pt-[0.5rem]"
                  >
                    Gombe State
                  </p>

                  <p
                    onClick={() => {
                      setlocation(false);
                      values.location = "Imo State";
                    }}
                    className="border-t-[2px] w-[100%] text-center py-[0.5rem]"
                  >
                    Imo state
                  </p>
                  <p
                    onClick={() => {
                      setlocation(false);
                      values.location = "Jigawa State";
                    }}
                    className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
                  >
                    Jigawa State
                  </p>
                  <p
                    onClick={() => {
                      setlocation(false);
                      values.location = "Kaduna State";
                    }}
                    className="w-[100%] text-center py-[0.5rem]"
                  >
                    Kaduna State
                  </p>
                  <p
                    onClick={() => {
                      setlocation(false);
                      values.location = "Kano State";
                    }}
                    className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
                  >
                    Kano State
                  </p>
                  <p
                    onClick={() => {
                      setlocation(false);
                      values.location = "Kastina State";
                    }}
                    className="w-[100%] text-center pt-[0.5rem] py-[0.5rem]"
                  >
                    Kastina State
                  </p>

                  <p
                    onClick={() => {
                      setlocation(false);
                      values.location = "Kebbi State";
                    }}
                    className="border-t-[2px] w-[100%] text-center py-[0.5rem]"
                  >
                    Kebbi State
                  </p>
                  <p
                    onClick={() => {
                      setlocation(false);
                      values.location = "Kogi State";
                    }}
                    className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
                  >
                    Kogi State
                  </p>
                  <p
                    onClick={() => {
                      setlocation(false);
                      values.location = "Kwara State";
                    }}
                    className="w-[100%] border-b-[2px] text-center py-[0.5rem]"
                  >
                    Kwara State
                  </p>
                  <p
                    onClick={() => {
                      setlocation(false);
                      values.location = "Lagos State";
                    }}
                    className="w-[100%] text-center py-[0.5rem]"
                  >
                    Lagos State
                  </p>
                  <p
                    onClick={() => {
                      setlocation(false);
                      values.location = "Nasarawa State";
                    }}
                    className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
                  >
                    Nasarawa State
                  </p>
                  <p
                    onClick={() => {
                      setlocation(false);
                      values.location = "Niger State";
                    }}
                    className="w-[100%] text-center pt-[0.5rem]"
                  >
                    Niger State
                  </p>

                  <p
                    onClick={() => {
                      setlocation(false);
                      values.location = "Ondo State";
                    }}
                    className="border-t-[2px] w-[100%] text-center py-[0.5rem]"
                  >
                    Ondo State
                  </p>
                  <p
                    onClick={() => {
                      setlocation(false);
                      values.location = "Osun State";
                    }}
                    className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
                  >
                    Osun State
                  </p>
                  <p
                    onClick={() => {
                      setlocation(false);
                      values.location = "Plateau State";
                    }}
                    className="w-[100%] text-center py-[0.5rem]"
                  >
                    Plateau State
                  </p>
                  <p
                    onClick={() => {
                      setlocation(false);
                      values.location = "Sokoto State";
                    }}
                    className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
                  >
                    Sokoto State
                  </p>
                  <p
                    onClick={() => {
                      setlocation(false);
                      values.location = "Taraba State";
                    }}
                    className="w-[100%] text-center pt-[0.5rem]"
                  >
                    Taraba State
                  </p>
                  <p
                    onClick={() => {
                      setlocation(false);
                      values.location = "Yobe State";
                    }}
                    className="border-t-[2px] w-[100%] text-center py-[0.5rem]"
                  >
                    Yobe State
                  </p>
                  <p
                    onClick={() => {
                      setlocation(false);
                      values.location = "Zamfara State";
                    }}
                    className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
                  >
                    Zamfara State
                  </p>
                  <p
                    onClick={() => {
                      setlocation(false);
                      values.location = "Abuja State";
                    }}
                    className="w-[100%] text-center pt-[0.5rem]"
                  >
                    Abuja (FCT) State
                  </p>
                </div>
              ) : (
                ""
              )}

              <input
                className="mt-[1rem] py-[0.5rem] rounded-[10px] px-[1rem]"
                type="text"
                placeholder="TITLE*"
                name="title"
                onChange={handleChange}
                value={values.title}
                // {...register("title")}
              />
              {errors.title && <p>{errors.title}</p>}
              <input
                className="mt-[1rem] py-[0.5rem] rounded-[10px] px-[1rem]"
                type="text"
                placeholder="BRAND*"
                value={values.brand}
                name="brand"
                onChange={handleChange}
              />
              <input
                className="mt-[1rem] py-[0.5rem] rounded-[10px] px-[1rem]"
                type="text"
                placeholder="COLOR*"
                value={values.color}
                name="color"
                onChange={handleChange}
              />

              <div
                onClick={() => {
                  setcondition(!condition);
                }}
                className="flex px-[1rem] mt-[1rem] justify-between border py-[0.5rem] rounded-[10px] items-center bg-white"
              >
                <p>{values.condition}</p>
                <p>&#8964;</p>
              </div>
              {errors.condition && <p>{errors.condition}</p>}

              {condition ? (
                <div className="flex flex-col items-center mt-[1rem] bg-blue-300 py-[1rem] rounded-[10px]">
                  <p
                    onClick={() => {
                      setcondition(false);
                      values.condition = "Brand New";
                    }}
                    className="w-[100%] text-center pb-[0.5rem]"
                  >
                    Brand New
                  </p>
                  <p
                    onClick={() => {
                      setcondition(false);
                      values.condition = "Thrift";
                    }}
                    className="w-[100%] border-t-[1.5px] text-center pt-[0.5rem]"
                  >
                    Thrift
                  </p>
                </div>
              ) : (
                ""
              )}

              <div
                onClick={() => {
                  setgender(!gender);
                }}
                className="flex px-[1rem] mt-[1rem] justify-between border py-[0.5rem] rounded-[10px] items-center bg-white"
              >
                <p>{values.gender}</p>
                <p>&#8964;</p>
              </div>
              {errors.gender && <p>{errors.gender}</p>}

              {gender ? (
                <div className="flex flex-col items-center mt-[1rem] bg-blue-300 py-[1rem] rounded-[10px]">
                  <p
                    onClick={() => {
                      setgender(false);
                      values.gender = "Male";
                    }}
                    className="w-[100%] text-center pb-[0.5rem]"
                  >
                    Male
                  </p>
                  <p
                    onClick={() => {
                      setgender(false);
                      values.gender = "Female";
                    }}
                    className="w-[100%] border-t-[1.5px] text-center pt-[0.5rem] pb-[0.5rem]"
                  >
                    Female
                  </p>
                  <p
                    onClick={() => {
                      setgender(false);
                      values.gender = "Unisex";
                    }}
                    className="w-[100%] border-t-[1.5px] text-center pt-[0.5rem]"
                  >
                    Unisex
                  </p>
                </div>
              ) : (
                ""
              )}

              <div
                onClick={() => {
                  setsize(!size);
                }}
                className="flex px-[1rem] mt-[1rem] justify-between border py-[0.5rem] rounded-[10px] items-center bg-white"
              >
                <p>{values.size}</p>
                <p>&#8964;</p>
              </div>

              {size ? (
                <div className="flex flex-col items-center mt-[1rem] bg-blue-300 py-[1rem] rounded-[10px]">
                  <p
                    onClick={() => {
                      setsize(false);
                      values.size = "XS";
                    }}
                    className="w-[100%] text-center pb-[0.5rem]"
                  >
                    XS
                  </p>
                  <p
                    onClick={() => {
                      setsize(false);
                      values.size = "S";
                    }}
                    className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
                  >
                    s
                  </p>
                  <p
                    onClick={() => {
                      setsize(false);
                      values.size = "M";
                    }}
                    className="w-[100%] text-center py-[0.5rem]"
                  >
                    M
                  </p>
                  <p
                    onClick={() => {
                      setsize(false);
                      values.size = "L";
                    }}
                    className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
                  >
                    L
                  </p>
                  <p
                    onClick={() => {
                      setsize(false);
                      values.size = "XL";
                    }}
                    className="w-[100%] text-center py-[0.5rem]"
                  >
                    XL
                  </p>
                  <p
                    onClick={() => {
                      setsize(false);
                      values.size = "XXL";
                    }}
                    className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
                  >
                    XXL
                  </p>
                  <p
                    onClick={() => {
                      setsize(false);
                      values.size = "3XL";
                    }}
                    className="w-[100%] text-center pt-[0.5rem]"
                  >
                    3XL
                  </p>
                </div>
              ) : (
                ""
              )}

              <input
                className="mt-[1rem] py-[0.5rem] rounded-[10px] px-[1rem]"
                type="text"
                placeholder="Name of Vendor*"
                name="vendor"
                onChange={handleChange}
                value={values.vendor}
                // {...register("title")}
              />
              <input
                className="mt-[1rem]"
                multiple
                type="file"
                accept="image/png , image/jpg"
                name="vendorLogo"
                onChange={(event) => {
                  setvendorlogo(event.target.files[0]);
                }}
              />

              <h2 className="mt-[1rem]">Made in Nigeria</h2>
              <div>
                <input
                  type="checkbox"
                  id="MIN"
                  name="MIN"
                  className="mr-[0.5rem]"
                  onChange={() => {
                    values.madeInNigeria = !values.madeInNigeria;
                  }}
                />
                <label for="MIN">YES</label>
              </div>

              <h2 className="mt-[1rem]">Handmade</h2>
              <div>
                <input
                  type="checkbox"
                  id="MIN"
                  name="MIN"
                  className="mr-[0.5rem]"
                  onChange={() => {
                    values.handmade = !values.handmade;
                  }}
                />
                <label for="MIN">YES</label>
              </div>

              <h2 className="mt-[1rem]">Warranty</h2>
              <div>
                <input
                  type="checkbox"
                  id="MIN"
                  name="MIN"
                  className="mr-[0.5rem]"
                  onChange={() => {
                    values.warranty = !values.warranty;
                  }}
                />
                <label for="MIN">YES</label>
              </div>

              <h2 className="mt-[1rem]">Under 5 kay</h2>
              <div>
                <input
                  type="checkbox"
                  id="MIN"
                  name="MIN"
                  className="mr-[0.5rem]"
                  onChange={() => {
                    values.under5k = !values.under5k;
                  }}
                />
                <label for="MIN">YES</label>
              </div>

              <h2 className="mt-[1rem]">Top Product</h2>
              <div>
                <input
                  type="checkbox"
                  id="Top"
                  name="Top"
                  className="mr-[0.5rem]"
                  onChange={() => {
                    settop(!top);
                  }}
                />
                <label for="MIN">YES</label>
              </div>

              <textarea
                rows="4"
                cols="50"
                className="mt-[1rem] p-[0.5rem] rounded-[10px]"
                placeholder="Description*"
                name="description"
                onChange={handleChange}
                value={values.description}
                // {...register("description")}
              />
              {errors.description && <p>{errors.description}</p>}

              <div className="relative">
                <input
                  className="mt-[1rem] py-[0.5rem] rounded-[10px] px-[3rem] w-[100%]"
                  type="text"
                  placeholder="Price*"
                  name="price"
                  onChange={handleChange}
                  value={values.price}
                  // {...register("price")}
                />
                <svg
                  fill="#000000"
                  width="20"
                  height="20"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496.262 496.262"
                  className="absolute top-[48%] left-[2%]"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path d="M477.832,274.28h-67.743v-65.106h67.743c10.179,0,18.43-8.243,18.43-18.424c0-10.182-8.251-18.43-18.43-18.43h-67.743 V81.982c0-13.187-2.606-22.866-7.743-28.762c-4.882-5.609-11.301-8.219-20.19-8.219c-8.482,0-14.659,2.592-19.447,8.166 c-5.077,5.902-7.654,15.599-7.654,28.821v90.343H227.627l-54.181-81.988c-4.637-7.317-8.997-14.171-13.231-20.75 c-3.812-5.925-7.53-10.749-11.042-14.351c-3.109-3.189-6.652-5.657-10.796-7.554c-3.91-1.785-8.881-2.681-14.762-2.681 c-7.501,0-14.31,2.055-20.83,6.277c-6.452,4.176-10.912,9.339-13.636,15.785c-2.391,6.126-3.656,15.513-3.656,27.63v77.626h-67.07 C8.246,172.326,0,180.574,0,190.755c0,10.181,8.246,18.424,18.424,18.424h67.07v65.113h-67.07C8.246,274.292,0,282.538,0,292.722 C0,302.9,8.246,311.14,18.424,311.14h67.07v103.143c0,12.797,2.689,22.378,8.015,28.466c5.065,5.805,11.487,8.5,20.208,8.5 c8.414,0,14.786-2.707,20.07-8.523c5.411-5.958,8.148-15.533,8.148-28.442V311.14h115.308l62.399,95.683 c4.339,6.325,8.819,12.709,13.287,18.969c4.031,5.621,8.429,10.574,13.069,14.711c4.179,3.742,8.659,6.484,13.316,8.157 c4.794,1.726,10.397,2.601,16.615,2.601c16.875,0,34.158-5.166,34.158-43.479V311.14h67.743c10.179,0,18.43-8.252,18.43-18.43 C496.262,282.532,488.011,274.28,477.832,274.28z M355.054,209.173v65.106h-60.041l-43.021-65.106H355.054z M141.936,134.364 l24.76,37.956h-24.76V134.364z M141.936,274.28v-65.106h48.802l42.466,65.106H141.936z M355.054,365.153l-35.683-54.013h35.683 V365.153z"></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
              {errors.price && <p>{errors.price}</p>}

              <h3 className="mt-[1rem]">YOUR CONTACT DETAILS</h3>
              <input
                className="mt-[1rem] py-[0.5rem] rounded-[10px] px-[1rem] w-[100%]"
                type="tel"
                placeholder="Phone Number*"
                name="phone"
                onChange={handleChange}
                value={values.phone}
                // {...register("phone")}
              />
              {errors.phone && <p>{errors.phone}</p>}

              <input
                className="mt-[1rem] py-[0.5rem] rounded-[10px] px-[1rem] w-[100%]"
                type="text"
                placeholder="Instagram Link*"
                name="instagram"
                onChange={handleChange}
                value={values.instagram}
              />

              <input
                className="mt-[1rem] py-[0.5rem] rounded-[10px] px-[1rem] w-[100%]"
                type="text"
                placeholder="Twitter Link*"
                name="twitter"
                onChange={handleChange}
                value={values.twitter}
              />

              <input
                type="submit"
                value="POST AD"
                className="text-center create-ad mt-[2rem] border py-[0.5rem] rounded-[10px] items-center bg-white"
              />

              <p className="text-[12px] mt-[0.5rem] mb-[2rem]">
                By Clicking on Post Ad, you accept the Terms of Use, Confirm
                that you will abide by the safety tips, and declare that this
                poisting does not include any prohibited items{" "}
              </p>
            </form>
          </div>
        </div>
      ) : (
        <Profile />
      )}
    </div>
  );
}
