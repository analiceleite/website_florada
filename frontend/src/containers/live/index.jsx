import Reminder from "../../components/global/reminder";
import Navbar from "../../components/global/navbar";
import Footer from "../../components/global/footer";
import Call from "../../components/live/call";
import Card from "../../components/live/card";

const Live = () => {
  return (
    <>
     <Reminder/>
     <Navbar />
     <Call/>
     <Card />
     {/* <Footer /> */}
    </>
  )
} 

export default Live;