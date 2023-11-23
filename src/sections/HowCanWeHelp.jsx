// import { FaGlobe } from "react-icons/fa";

export function HowCanWeHelp() {
  const data = [
    {
      img: "/img/help/1.png",
      title: "Search Engine Optimization",
      description:
        "Maecenas elementum sapien in metus placerat finibus. Lorem ipsum dolor sit amet, vix an natum labitur eleif.",
    },
    {
      img: "/img/help/2.png",
      title: "Social Media Strategy",
      description:
        "Maecenas elementum sapien in metus placerat finibus. Lorem ipsum dolor sit amet, vix an natum labitur eleif.",
    },
    {
      img: "/img/help/3.png",
      title: "Real Time and Data",
      description:
        "Maecenas elementum sapien in metus placerat finibus. Lorem ipsum dolor sit amet, vix an natum labitur eleif.",
    },
    {
      img: "/img/help/4.png",
      title: "Online Media Management",
      description:
        "Maecenas elementum sapien in metus placerat finibus. Lorem ipsum dolor sit amet, vix an natum labitur eleif.",
    },
    {
      img: "/img/help/5.png",
      title: "Reporting & Analysis",
      description:
        "Maecenas elementum sapien in metus placerat finibus. Lorem ipsum dolor sit amet, vix an natum labitur eleif.",
    },
    {
      img: "/img/help/6.png",
      title: "Penalty Recovery",
      description:
        "Maecenas elementum sapien in metus placerat finibus. Lorem ipsum dolor sit amet, vix an natum labitur eleif.",
    },
  ];

  fetch("http://localhost:3001/")
    .then((res) => res.text())
    .then((data) => console.log(data));

  return (
    <div className="container px-4 py-5 text-center" id="featured-3">
      <h2 className="pb-2 text-center">How we can help?</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        {data.map((service, idx) => (
          <div key={idx} className="col">
            <div className="d-inline-flex align-items-center justify-content-center fs-2 mb-3">
              <img src={service.img} alt="Service icon" />
            </div>
            <h3 className="fs-2 text-body-emphasis">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
