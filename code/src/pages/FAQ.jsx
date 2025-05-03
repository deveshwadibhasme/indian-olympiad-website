import React, { useEffect } from "react";

const FAQ = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const schoolQA = [
    {
      que: "What curriculum will the school follow?",
      ans: "We are affiliated to CBSE curriculum.",
    },
    {
      que: "What is the fee structure?",
      ans: "Please call the school for fee details (Contact No. 9923647869)",
    },
    {
      que: "How can the school be located / How can we reach the school?",
      ans: `1. Kindly follow the given link for Google Map / Map Location.
            2. Indora Square (Jaswant Tuli Mall) → Automotive Square (Maruti Suzuki Showroom & Service Station) → Octrio Post No.2 (Naka No.2) → Bhilgaon Gate (Yashodhara Lawns) → Gangwani Garden → Indian Olympiad School.`,
    },
    {
      que: "What will be the school timings?",
      ans: "School timings:\n- Grade nursery to Kindergarten: 10:00 am to 12:30 pm\n- Grade I & II: 8:00 am to 12:30 pm\n- Grade III to XII: 8:00 am to 2:30 pm\n- Administration office: 8:00 am to 3:00 pm",
    },
    {
      que: "What is the admission procedure?",
      ans: "For those seeking admissions, a formal interaction and a written test will be conducted in which pupil and both the parents have to be present. The final decision of the admission committee will be binding.",
    },
    {
      que: "Will the school authorities be taking adequate measures to ensure hygiene in the school?",
      ans: "We maintains a high standard of cleanliness and hygiene. There are regular checks and monitoring by the school administration as well as periodic sanitization drives.",
    },
    {
      que: "What is the kind of security offered to the students?",
      ans: "The school has installed 136 CCTV cameras in the complete campus including the classrooms. Students are always accompanied by teachers or the class monitors when they are moving from one block to the other.",
    },
    {
      que: "How often will there be PTMs?",
      ans: "After each term assessment.",
    },
  ];

  const [activeIndex, setActiveIndex] = React.useState(true);

  return (
    <section className="w-full flex-center min-h-screen h-full mt-2 md:mt-14 flex-col relative mx-auto bg-gray-100">
      <h1 className="text-2xl md:mt-2 md:text-5xl relative hori-strip after:top-10 md:after:top-15 text-blue-600 text-center font-bold mb-10">
        Faculty Details
      </h1>
      {schoolQA.map((qa, index) => (
        <div
          key={index}
          className="max-w-3xl w-full mx-auto rounded-md mb-5 p-2 relative perspective bg-white duration-300 ease-in-out"
        >
          <div className="flex justify-between items-center">
            <span
              className={`text-lg md:text-xl transition-[height,transform] origin-bottom duration-400 ${
                activeIndex === index
                  ? "-rotate-x-180 h-0"
                  : "rotate-x-0"
              } backface-hidden`}
            >
              {qa.que}
            </span>
            <button
              className="text-xl absolute right-2 bottom-2 cursor-pointer bg-blue-500 text-white rounded-md px-2 z-10"
              onClick={() => {
                setActiveIndex(index === activeIndex ? null : index);
              }}
            >
              {activeIndex === index ? "-" : "+"}
            </button>
          </div>
          <p
            className={`text-lg md:text-xl  top-0 left-0 transition-[height,transform] origin-top duration-400 ${
              activeIndex === index ? "rotate-x-0 opacity-100 h-full relative" : "opacity-0 -rotate-x-180 h-0 absolute"
            } backface-hidden`}
          >
            Ans : {qa.ans}
          </p>
        </div>
      ))}
    </section>
  );
};

export default FAQ;
