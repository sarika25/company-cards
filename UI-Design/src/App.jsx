import Section2 from "./components/Section2";

const App = () => {
  const user = [
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dignissimos perferendis corrupti porro officia",
      button_text: "Satisfied",
      color: "teal",
    },
    {
      img: "https://images.squarespace-cdn.com/content/v1/5e223c59f9e62c2c0116b636/07400060-9d76-40a8-ad84-d7074edf2821/_12A9298-3%281%29.jpg",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dignissimos perferendis corrupti porro officia",
      button_text: "Underserved",
      color: "indianred",
    },
    {
      img: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?w=1260&h=750&dpr=1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dignissimos perferendis corrupti porro officia",
      button_text: "Underbanked",
      color: "olivedrab",
    },
    {
      img: "https://img.magnific.com/free-photo/portrait-smiling-successful-businesswoman-looking-into-camera-sitting-restaurant-business-lady-with-stylish-hairstyle-wears-elegant-suit-business-meeting-attractive-appearance_8353-12611.jpg?semt=ais_hybrid&w=740&q=80",
      button_text: "Satisfied",
      color: "teal",
    },
    {
      img: "https://www.mattrobertsphoto.com/wp-content/uploads/2024/11/Female-Professional-Headshots-1.webp",
      button_text: "Underserved",
      color: "indianred",
    },
  ];

  return (
    <div>
      <Section2 users={user} />
    </div>
  );
};

export default App;
