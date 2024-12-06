// Importing assets
import appointment_img from "./appointment_img.png";
import header_img from "./header_img.png";
import group_profiles from "./group_profiles.png";
import profile_pic from "./profile_pic.png";
import contact_image from "./contact_image.png";
import about_image from "./about_image.png";
import logo from "./logo.svg";
import dropdown_icon from "./dropdown_icon.svg";
import menu_icon from "./menu_icon.svg";
import cross_icon from "./cross_icon.png";
import chats_icon from "./chats_icon.svg";
import verified_icon from "./verified_icon.svg";
import arrow_icon from "./arrow_icon.svg";
import info_icon from "./info_icon.svg";
import upload_icon from "./upload_icon.png";
import stripe_logo from "./stripe_logo.png";
import razorpay_logo from "./razorpay_logo.png";

// Importing images for Zimbabwe cities
import Harare from "./harare.jpeg";
import Bulawayo from "./bulawayo.jpeg";
import Gweru from "./gweru.jpeg";
import Mutare from "./mutare.jpeg";
import Masvingo from "./masvingo.jpeg";
import Chinhoyi from "./chinhoyi.jpeg";

// Plumber images
import plumber1 from "./plumber-.png";
import plumber2 from "./plumber (2).png";
import plumber3 from "./plumber6 (1).png";
import plumber4 from "./plumber6 (2).png";
import plumber5 from "./plumber6 (3).png";
import plumber6 from "./plumber6 (4).png";

export const assets = {
  appointment_img,
  header_img,
  group_profiles,
  logo,
  chats_icon,
  verified_icon,
  info_icon,
  profile_pic,
  arrow_icon,
  contact_image,
  about_image,
  menu_icon,
  cross_icon,
  dropdown_icon,
  upload_icon,
  stripe_logo,
  razorpay_logo,
};

// Data representing places (cities in Zimbabwe) with matched images
export const specialityData = [
  {
    place: "Harare",
    image: Harare,
  },
  {
    place: "Bulawayo",
    image: Bulawayo,
  },
  {
    place: "Gweru",
    image: Gweru,
  },
  {
    place: "Mutare",
    image: Mutare,
  },
  {
    place: "Masvingo",
    image: Masvingo,
  },
  {
    place: "Chinhoyi",
    image: Chinhoyi,
  },
];

export const plumbers = [
  {
    _id: "plumber1",
    name: "John Doe",
    image:
      "https://media.istockphoto.com/id/1994885281/photo/portrait-of-african-american-handyman-holding-toolbox-in-the-kitchen.webp?s=2048x2048&w=is&k=20&c=Zxl6jm-78kQ_Ng7Ae-_bW1k8EML9TpMvMDZLOoQuQZs=",
    speciality: "Residential Plumbing",
    experience: "5 Years",
    about:
      "John is a skilled plumber specializing in residential repairs, pipe installation, and maintenance. His attention to detail and commitment to customer satisfaction make him a top choice for homeowners.",
    fees: 75,
    address: { line1: "123 Maple St", line2: "Harare" },
    city: "Harare",
  },
  {
    _id: "plumber2",
    name: "Jane Smith",
    image:
      "https://media.istockphoto.com/id/1413637919/photo/woman-engineer-or-woman-technician-work-at-construction-site-area-portrait-of-african.jpg?s=2048x2048&w=is&k=20&c=7KJ2uRz_kezEPUPMma830_74RQAthHyC-z9REWCTz4Y=",
    speciality: "Commercial Plumbing",
    experience: "8 Years",
    about:
      "Jane has extensive experience in commercial plumbing systems, including complex piping and high-volume repairs. She is known for her efficient work and professionalism on site.",
    fees: 90,
    address: { line1: "456 Oak Ave", line2: "Bulawayo" },
    city: "Bulawayo",
  },
  {
    _id: "plumber3",
    name: "Sam Wilson",
    image:
      "https://media.istockphoto.com/id/665042914/photo/plumber-with-a-wrench-showing-ok-hand-sign.jpg?s=612x612&w=0&k=20&c=6jWFcPa8ApBSVK4Gh-4AwyK0AIA9OCQvn4kmDHhvTqU=",
    speciality: "Emergency Plumbing",
    experience: "6 Years",
    about:
      "Sam specializes in emergency plumbing, with quick response times and expertise in urgent repairs like burst pipes and severe leaks. Clients appreciate his reliable and swift service.",
    fees: 100,
    address: { line1: "789 Pine Blvd", line2: "Gweru" },
    city: "Gweru",
  },
  {
    _id: "plumber4",
    name: "Emily Johnson",
    image:
      "https://media.istockphoto.com/id/526355001/photo/portrait-of-a-craftsman.jpg?s=2048x2048&w=is&k=20&c=kjdiV2U0aR4pWWJTeslH77cDJwjmV_yovKwI1QL0PEE=",
    speciality: "Water Heater Installation",
    experience: "4 Years",
    about:
      "Emily is skilled in water heater installation and repairs, with a focus on energy-efficient solutions.",
    fees: 85,
    address: { line1: "321 Elm St", line2: "Mutare" },
    city: "Mutare",
  },
  {
    _id: "plumber5",
    name: "Michael Brown",
    image:
      "https://media.istockphoto.com/id/1165408804/photo/high-access-worker.jpg?s=2048x2048&w=is&k=20&c=0y41ogxVjNU9vgLd1m5et-CCvOvtuV4EuQwsvRtEHfs=",
    speciality: "Sewer Line Repair",
    experience: "7 Years",
    about:
      "Michael has expertise in sewer line repairs, tackling complex underground issues with advanced diagnostic tools.",
    fees: 120,
    address: { line1: "654 Cedar Rd", line2: "Masvingo" },
    city: "Masvingo",
  },
  {
    _id: "plumber6",
    name: "Sarah Lee",
    image:
      "https://media.istockphoto.com/id/1437430064/photo/electrician-giving-thumbs-up-in-approval.jpg?s=2048x2048&w=is&k=20&c=2ZBjePiYDt6ci6AM_aSo4Tqgmico744DcAxf2sWsIyM=",
    speciality: "Pipe Inspection & Leak Detection",
    experience: "5 Years",
    about:
      "Sarah specializes in pipe inspection and leak detection, using technology to locate and resolve hidden leaks efficiently.",
    fees: 95,
    address: { line1: "987 Spruce Ln", line2: "Chinhoyi" },
    city: "Chinhoyi",
  },
  {
    _id: "plumber7",
    name: "David White",
    image:
      "https://media.istockphoto.com/id/1358182682/photo/professional-worker-in-overalls-sets-up-gas-boiler-repairs-a-hot-water-boiler.jpg?s=2048x2048&w=is&k=20&c=_-Wj7tAvMB3Fho4MLfatgiXlXMtFZ_piNKsQeDovEnI=",
    speciality: "Drain Cleaning",
    experience: "3 Years",
    about:
      "David is an expert in drain cleaning services, ensuring that your plumbing systems run smoothly.",
    fees: 70,
    address: { line1: "111 Birch St", line2: "Harare" },
    city: "Harare",
  },
  {
    _id: "plumber8",
    name: "Anna Green",
    image:
      "https://media.istockphoto.com/id/620390182/photo/handyman-with-assistant-at-entrance.jpg?s=612x612&w=0&k=20&c=7zGuz6yI9cYKcFI2o_Rrl7uBd6fSyUtxCwpbOZwo57o=",
    speciality: "Gas Fitting",
    experience: "9 Years",
    about:
      "Anna specializes in gas fitting services, ensuring safety and compliance with regulations.",
    fees: 110,
    address: { line1: "222 Willow St", line2: "Bulawayo" },
    city: "Bulawayo",
  },
  {
    _id: "plumber9",
    name: "Chris Black",
    image:
      "https://media.istockphoto.com/id/1492305477/photo/african-man-engineer-working-at-factory-construction-site.jpg?s=612x612&w=0&k=20&c=XgdP9OKTaY85lzf8x7i-9NTEvWmA2jk9buqNxp83drs=",
    speciality: "Leak Repair",
    experience: "4 Years",
    about:
      "Chris is skilled in leak repair services, providing quick solutions to prevent water damage.",
    fees: 80,
    address: { line1: "333 Fir St", line2: "Gweru" },
    city: "Gweru",
  },
  {
    _id: "plumber10",
    name: "Linda Brown",
    image:
      "https://media.istockphoto.com/id/469911965/photo/handyman-fixing-radiator.jpg?s=2048x2048&w=is&k=20&c=EgztATOnjl8xvcKVxZQl-M45dib4QxmcVrLCDMYwBGg=",
    speciality: "Bathroom Remodeling",
    experience: "6 Years",
    about:
      "Linda specializes in bathroom remodeling projects, creating beautiful and functional spaces.",
    fees: 150,
    address: { line1: "444 Cedar St", line2: "Mutare" },
    city: "Mutare",
  },
  {
    _id: "plumber11",
    name: "Tom Harris",
    image:
      "https://media.istockphoto.com/id/1457797334/photo/handyman.webp?s=2048x2048&w=is&k=20&c=VvVCs1QsmqTJyNo9QbTiafZHxjSyc0HUnKXKciQ6xEE=",
    speciality: "Commercial Drainage",
    experience: "8 Years",
    about:
      "Tom provides expert commercial drainage services for businesses of all sizes.",
    fees: 130,
    address: { line1: "555 Pine St", line2: "Masvingo" },
    city: "Masvingo",
  },
  {
    _id: "plumber12",
    name: "Rachel Adams",
    image:
      "https://media.istockphoto.com/id/1346150992/photo/young-worker-during-vent-hood-repair-service.jpg?s=2048x2048&w=is&k=20&c=SdSjEb0MFuGSlPkvY3_U4y0hD7BIH9qfKQTWTW251Ec=",
    speciality: "Emergency Repairs",
    experience: "7 Years",
    about:
      "Rachel specializes in emergency plumbing repairs with fast response times.",
    fees: 120,
    address: { line1: "666 Maple St", line2: "Chinhoyi" },
    city: "Chinhoyi",
  },
  {
    _id: "plumber13",
    name: "Peter Parker",
    image:
      "https://media.istockphoto.com/id/1345523525/photo/woman-with-male-profession-breaking-gender-steretypes.jpg?s=1024x1024&w=is&k=20&c=0tdJDBTop9dUhmqJd0RTVSuBnlVLM3BXzn14R45iIfo=",
    speciality: "Pipe Replacement",
    experience: "5 Years",
    about:
      "Peter provides pipe replacement services using high-quality materials.",
    fees: 90,
    address: { line1: "777 Oak St", line2: "Harare" },
    city: "Harare",
  },
  {
    _id: "plumber14",
    name: "Sophie Turner",
    image:
      "https://media.istockphoto.com/id/1097584460/photo/african-black-plumber-man-pointing-away-side-with-finger.jpg?s=1024x1024&w=is&k=20&c=JIqOzcTZ-Pf2rWyNhubToStTwTM7XDjqaZwluHyRCp0=",
    speciality: "Water Filtration Systems",
    experience: "4 Years",
    about: "Sophie installs water filtration systems for clean drinking water.",
    fees: 115,
    address: { line1: "888 Birch St", line2: "Bulawayo" },
    city: "Bulawayo",
  },
  {
    _id: "plumber15",
    name: "Bruce Wayne",
    image:
      "https://media.istockphoto.com/id/506860702/photo/young-african-repairman-looking-at-the-camera.jpg?s=1024x1024&w=is&k=20&c=v4FW7foDVR9lsQPnHngVonquAzC4sW96norxkwbEzTM=",
    speciality: "Sprinkler Systems Installation",
    experience: "6 Years",
    about:
      "Bruce specializes in installing sprinkler systems for residential properties.",
    fees: 135,
    address: { line1: "999 Elm St", line2: "Gweru" },
    city: "Gweru",
  },
  {
    _id: "plumber16",
    name: "Natasha Romanoff",
    image:
      "https://media.istockphoto.com/id/1511329859/photo/portrait-man-and-plumber-with-smile-maintenance-and-installation-with-home-repairs-face.jpg?s=1024x1024&w=is&k=20&c=Wz_LHmk9DP-ynUoJouO9AYtZvdEsEXYmdPBTDN8UOIk=",
    speciality: "Kitchen Remodeling",
    experience: "8 Years",
    about:
      "Natasha provides kitchen remodeling services tailored to client needs.",
    fees: 140,
    address: { line1: "1010 Cedar St", line2: "Mutare" },
    city: "Mutare",
  },
  {
    _id: "plumber17",
    name: "Clark Kent",
    image:
      "https://media.istockphoto.com/id/1400648509/photo/serious-black-worker-stands-in-confident-posture-with-suitcase-tools-in-his-hand.jpg?s=1024x1024&w=is&k=20&c=NtUglWOVvKVnWo00rH3X5_dLp7aUCyd5odAE8V7Xr-s=",
    speciality: "Fixture Replacement",
    experience: "3 Years",
    about: "Clark replaces old fixtures with modern, efficient ones.",
    fees: 65,
    address: { line1: "1111 Spruce Ln", line2: "Masvingo" },
    city: "Masvingo",
  },
  {
    _id: "plumber18",
    name: "Diana Prince",
    image:
      "https://media.istockphoto.com/id/1135554359/photo/plumber.jpg?s=1024x1024&w=is&k=20&c=QSH8vGo7DUiJqR01MEzAs-C8Dik_QCqdqVCaroKblMQ=",
    speciality: "Shower Installation",
    experience: "5 Years",
    about:
      "Diana is an expert in shower installations, offering various styles.",
    fees: 125,
    address: { line1: "1212 Willow St", line2: "Chinhoyi" },
    city: "Chinhoyi",
  },
  {
    _id: "plumber19",
    name: "Barry Allen",
    image:
      "https://images.pexels.com/photos/8487773/pexels-photo-8487773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    speciality: "Water Leak Detection",
    experience: "4 Years",
    about: "Barry uses advanced tools to detect and repair hidden leaks.",
    fees: 100,
    address: { line1: "1313 Maple St", line2: "Harare" },
    city: "Harare",
  },
  {
    _id: "plumber20",
    name: "Wanda Maximoff",
    image:
      "https://images.pexels.com/photos/8486975/pexels-photo-8486975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    speciality: "Faucet Installation",
    experience: "3 Years",
    about: "Wanda installs various faucet styles to match client aesthetics.",
    fees: 60,
    address: { line1: "1414 Oak St", line2: "Bulawayo" },
    city: "Bulawayo",
  },
];
