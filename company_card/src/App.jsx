import Card from "./components/Card";

const App = () => {
  const jobOpenings = [
    {
      brandLogo:
        "https://crystalpng.com/wp-content/uploads/2025/05/google-logo-png.png",
      companyName: "Google",
      datePosted: "3 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://crystalpng.com/wp-content/uploads/2025/02/meta_logo.png",
      companyName: "Meta",
      datePosted: "1 week ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo:
        "https://icon2.cleanpng.com/20180803/ubx/5ba055fe0b3b79a8f55892cc8186c6b6.webp",
      companyName: "Amazon",
      datePosted: "5 days ago",
      post: "Software Development Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$50/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "https://e7.pngegg.com/pngimages/123/106/png-clipart-apple-logo-logo-apple-icon-information-apple-logo-logo-monochrome-thumbnail.png",
      companyName: "Apple",
      datePosted: "2 weeks ago",
      post: "UI Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$70/hr",
      location: "Pune, India",
    },
    {
      brandLogo:
        "https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png",
      companyName: "Netflix",
      datePosted: "4 days ago",
      post: "Frontend Engineer",
      tag1: "Remote",
      tag2: "Senior Level",
      pay: "$85/hr",
      location: "Remote, India",
    },
    {
      brandLogo: "https://icon2.cleanpng.com/20180324/orq/avdfk99op.webp",
      companyName: "Microsoft",
      datePosted: "10 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$60/hr",
      location: "Noida, India",
    },
    {
      brandLogo: "https://cdn-icons-png.flaticon.com/512/5436/5436922.png",
      companyName: "Adobe",
      datePosted: "3 weeks ago",
      post: "Frontend Developer",
      tag1: "Hybrid",
      tag2: "Junior Level",
      pay: "$48/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo: "https://cdn.worldvectorlogo.com/logos/uber-15.svg",
      companyName: "Uber",
      datePosted: "6 days ago",
      post: "React Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$58/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://miro.medium.com/1*-_Oy1F9RhlYwtRGSyNEj9w.png",
      companyName: "Airbnb",
      datePosted: "8 days ago",
      post: "Frontend Software Engineer",
      tag1: "Remote",
      tag2: "Senior Level",
      pay: "$75/hr",
      location: "Remote, India",
    },
    {
      brandLogo:
        "https://simg.nicepng.com/png/small/14-143196_moravian-college-linkedin-linkedin-circle-logo-transparent.png",
      companyName: "LinkedIn",
      datePosted: "2 days ago",
      post: "Web Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$52/hr",
      location: "Bangalore, India",
    },
  ];
  return (
    <div className="parent">
      {jobOpenings.map((elem) => {
        return (
          <Card
            brandLogo={elem.brandLogo}
            companyName={elem.companyName}
            datePosted={elem.datePosted}
            post={elem.post}
            tag1={elem.tag1}
            tag2={elem.tag2}
            pay={elem.pay}
            location={elem.location}
          />
        );
      })}
    </div>
  );
};

export default App;
