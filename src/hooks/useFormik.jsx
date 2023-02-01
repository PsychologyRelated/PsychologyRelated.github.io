import { useState } from "react";

export default function UseFormik() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setIsLoading] = useState(false)

  function Submit() {
    const formEle = document.querySelector("form");
    const formData = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbyluX1fZbikrwqYKPp_qC3ZN7N9GV5laEyoTdVbBXDzD2M6As6YgGb9HAxDvbOM35vl/exec",
      {
        method: "POST",
        body: formData
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

      })
      .catch((error) => {
        console.log(error);
      });
  }


  return {
    isSubmitted, setIsSubmitted, loading, setIsLoading, Submit
  };
}


