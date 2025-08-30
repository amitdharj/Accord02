import React from "react";

const classes = [
  {
    title: "English Class",
    description: "Lorem ipsum dolor consectetur the adipiscing elit...",
    image: "/images/english.jpg", // replace with your images
    age: "(2-5 years)",
    weekly: "5 Days",
    time: "4.30 Hrs",
  },
  {
    title: "Chemistry Class",
    description: "Lorem ipsum dolor consectetur the adipiscing elit...",
    image: "/images/chemistry.jpg",
    age: "(2-5 years)",
    weekly: "5 Days",
    time: "4.30 Hrs",
  },
  {
    title: "Drawing Class",
    description: "Lorem ipsum dolor consectetur the adipiscing elit...",
    image: "/images/drawing.jpg",
    age: "(2-5 years)",
    weekly: "5 Days",
    time: "4.30 Hrs",
  },
  {
    title: "Yoga Classes",
    description: "Lorem ipsum dolor consectetur the adipiscing elit...",
    image: "/images/english.jpg", // replace with your images
    age: "(2-5 years)",
    weekly: "5 Days",
    time: "4.30 Hrs",
  },
  {
    title: "Art and Craft Classes",
    description: "Lorem ipsum dolor consectetur the adipiscing elit...",
    image: "/images/chemistry.jpg",
    age: "(2-5 years)",
    weekly: "5 Days",
    time: "4.30 Hrs",
  },
  {
    title: "Imagination Classes",
    description: "Lorem ipsum dolor consectetur the adipiscing elit...",
    image: "/images/drawing.jpg",
    age: "(2-5 years)",
    weekly: "5 Days",
    time: "4.30 Hrs",
  },
];

export default function Classes() {
  return (
    <section className="py-12 pt-16 bg-gradient-to-b from-white to-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Our Classes</h2>
          <p className="text-gray-500 mt-2">
            Fun and engaging classes for kids aged 2-5 years
          </p>
        </div>



        
        <div className="grid md:grid-cols-3 gap-8">
          {classes.map((item, index) => (
            <div
              key={index}
              className="bg-stone-100 rounded-3xl shadow hover:shadow-lg shadow-stone-400 transition overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover rounded-t-3xl"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-500 mt-2 mb-4">{item.description}</p>
                <div className="border-t border-dotted border-orange-400 mb-4"></div>
                <div className="flex justify-between text-sm text-gray-700">
                  <div>
                    <span className="text-orange-500 font-medium">age</span>
                    <p>{item.age}</p>
                  </div>
                  <div>
                    <span className="text-orange-500 font-medium">weekly</span>
                    <p>{item.weekly}</p>
                  </div>
                  <div>
                    <span className="text-orange-500 font-medium">time</span>
                    <p>{item.time}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        

      

      </div>
    </section>
  );
}
