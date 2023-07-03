// import responsive styles
import "./../styles/css/TeamStyle.css";

const Team = () => {
  const team = [
    {
      name: "Aditya Rawat",
      title: "President",
      linkedIn: "https://www.linkedin.com/in/aditya-r-1a607a114",
      gitHub: "https://github.com/theadityarawat",
      img: "https://media.licdn.com/dms/image/D4D03AQH8rC8fU6w1cg/profile-displayphoto-shrink_400_400/0/1680752943485?e=1693440000&v=beta&t=9reUN2dt-g95CGwqYMOjjI70FDMbafF0dsjYL-i4Blw",
    },
    {
      name: "Prashant Kumar",
      title: "Technical Lead",
      linkedin: "https://www.linkedin.com/in/devprashantt/",
      github: "https://github.com/devprashantt",
      img: "https://res.cloudinary.com/dfjag3udo/image/upload/v1688158114/team/photo1685485087-modified_pqifla.png",
    },
    {
      name: "Prateek",
      title: "Social Media Lead",
      linkedin: "https://www.linkedin.com/in/prateek-yaduvanshi-3bb847226/",
      github: "https://github.com/okprateek",
      img: "https://res.cloudinary.com/dfjag3udo/image/upload/v1688370179/team/1641880243216_1_-_Prateek_Yaduvanshi_wuvzp8.jpg",
    },
    {
      name: "Nil Mani",
      title: "Sponsorship & PR",
      linkedin: "https://in.linkedin.com/in/nil-mani-7723a0157",
      github: "https://github.com/nilmani9430",
      img: "https://res.cloudinary.com/dfjag3udo/image/upload/v1688370180/team/web_-_Nil_Mani_kxtark.jpg",
    },

    {
      name: "Pratik Gupta",
      title: "Events Lead",
      linkedin: "https://www.linkedin.com/in/pratik-gupta-8a34a2229",
      github: "https://github.com/Pratik1603",
      img: "https://res.cloudinary.com/dfjag3udo/image/upload/v1688370178/team/Pratik_Gupta_-_Pratik_Gupta_ulrnmq.png",
    },
    {
      name: "Tanishk Bhardwaj",
      title: "Member",
      linkedin: "https://www.linkedin.com/in/tanishk-bhardwaj-9602a11b3",
      github: "https://github.com/10ishk",
      img: "https://res.cloudinary.com/dfjag3udo/image/upload/v1688156705/team/Tanishk_-_Tanishk_Bhardwaj_okhhgm.jpg",
    },
    {
      name: "Mohit Singh",
      title: "Member",
      linkedIn: "https://www.linkedin.com/in/mohit-singh-74a31b246",
      github: "https://github.com/West-Tiwan",
      img: "https://res.cloudinary.com/dfjag3udo/image/upload/v1688156706/team/IMG-20230630-WA0037_-_Mohit_Singh_j2089x.jpg",
    },
    {
      name: "Zohra Ahmad",
      title: "Member",
      linkedIn: "https://www.linkedin.com/in/zohra-ahmad",
      gitHub: "https://github.com/zohra-ahmad",
      img: "https://res.cloudinary.com/dfjag3udo/image/upload/v1688156707/team/IMG_5086_-_Zohra_Ahmad_eel22s.png",
    },
    {
      name: "Arnav Gupta",
      title: "Member",
      linkedin: "https://www.linkedin.com/in/arnav-gupta-8351641b6",
      github: "https://github.com/arnavgupta27",
      img: "https://res.cloudinary.com/dfjag3udo/image/upload/v1688156706/team/IMG_20230321_210442_012_-_Arnav_Gupta_vbocvn.jpg",
    },
    {
      name: "Prince",
      title: "Member",
      linkedin: "https://in.linkedin.com/in/prince-1b7a8924a",
      github: "https://github.com/Catabolic-Neuron",
      img: "https://res.cloudinary.com/dfjag3udo/image/upload/v1688156706/team/IMG_20230701_002140_507_-_Prince_chm2ij.jpg",
    },
    {
      name: "Anurag Daksh",
      title: "Member",
      linkedIn: "https://www.linkedin.com/in/anurag-daksh-42b692228",
      gitHub: "https://github.com/anuragdaksh7",
      img: "https://res.cloudinary.com/dfjag3udo/image/upload/v1688370180/team/pfp_-_Anurag_Daksh_crbvql.jpg",
    },
    {
      name: "Sahil Yadav",
      title: "Member",
      linkedIn: "https://www.linkedin.com/in/sahil-yadav-054b54223",
      gitHub: "https://github.com/Sahil-Yadav-2505",
      img: "https://res.cloudinary.com/dfjag3udo/image/upload/v1688370179/team/Sahil_Yadav_1_-_Sahil_Yadav_iawsaq.png",
    },
    {
      name: "Jayesh Yadav",
      title: "Member",
      linkedin: "https://www.linkedin.com/in/jayesh-yadav-6aab06265",
      github: "https://github.com/jayeshyadav31",
      img: "https://res.cloudinary.com/dfjag3udo/image/upload/v1688370178/team/Jayesh_Yadav_-_Jayesh_Yadav_jygefk.jpg",
    },
    {
      name: "Devesh Jangir",
      title: "Member",
      linkedin: "https://www.linkedin.com/in/deveshjangir",
      github: "https://github.com/imdevesh01",
      img: "https://res.cloudinary.com/dfjag3udo/image/upload/v1688370178/team/Devesh_Jangir_-_Devesh_Jangir_nqthmf.png",
    },
    {
      name: "Nikshitha",
      title: "Member",
      linkedin: "https://www.linkedin.com/in/v-nikshitha-860655258/",
      github: "https://github.com/nikshitha1312",
      img: "https://res.cloudinary.com/dfjag3udo/image/upload/v1688370181/team/WhatsApp_Image_2023-07-01_at_7.25.13_PM_-_V_Nikshitha_uc7hcn.jpg",
    },
    {
      name: "Ashwin Jharia",
      title: "Member",
      linkedin: "https://www.linkedin.com/in/ashwin-jharia-05a813234",
      github: "https://github.com/AshwinJharia",
      img: "https://res.cloudinary.com/dfjag3udo/image/upload/v1688370180/team/20220403_195738_-_Ashwin_Jharia_yp5kcn.png",
    },
    {
      name: "Medhavini mathur",
      title: "Member",
      linkedin: "https://www.linkedin.com/in/medhavini-mathur-06688b204",
      github: "https://github.com/MedhaviniMathur1804",
      img: "https://res.cloudinary.com/dfjag3udo/image/upload/v1688370181/team/IMG_20230701_194358_-_MEDHAVINI_MATHUR_ifcemk.jpg",
    },
    {
      name: "Shreeya khatri",
      title: "Member",
      linkedin: "https://www.linkedin.com/in/shreeya-khatri-860650258",
      github: "https://github.com/shreeya1-23",
      img: "https://res.cloudinary.com/dfjag3udo/image/upload/v1688370180/team/Photo_from_Shreeya_-_Shreeya_Khatri_jpko64.jpg",
    },
    {
      name: "Shikhar Gupta",
      title: "Member",
      linkedin: "https://www.linkedin.com/in/shikhar-gupta-389552251",
      github: "https://github.com/aalugupta",
      img: "https://res.cloudinary.com/dfjag3udo/image/upload/v1688370178/team/IMG_1708_-_Shikhar_Gupta_oq7jzx.jpg",
    },
    {
      name: "Akshat Trivedi",
      title: "Member",
      linkedin: "https://www.linkedin.com/in/akshat-trivedi-859147255",
      github: "https://github.com/atrivedi1611",
      img: "",
    },
    {
      name: " Prabhneet Singh",
      title: "Member",
      linkedin: "https://www.linkedin.com/in/prabhneet-singh-75786722b",
      github: "https://github.com/PrabhneetSingh02",
      img: "",
    },
    {
      name: "Priyanshu Kumawat",
      title: "Member",
      linkedIn: "https://www.linkedin.com/in/priyanshu-kumawat-b61195220",
      gitHub: "https://github.com/Priya434",
      img: "",
    },

    {
      name: "Archit Anand",
      title: "Member",
      linkedIn: "https://www.linkedin.com/in/archit-anand-49494a257",
      gitHub: "https://github.com/architanand8986",
      img: "",
    },
    {
      name: "Abhisek Tiwari",
      title: "Member",
      linkedin: "https://www.linkedin.com/in/abhisek-tiwari-a06315262",
      github: "https://github.com/Abhisek-Tiwari",
      img: "",
    },

    {
      name: "Tamish Bajaj",
      title: "Marketing Lead",
      linkedin: "https://www.linkedin.com/in/tamish-bajaj-81979a222",
      github: "https://github.com/TamishBajaj",
      img: "",
    },
    {
      name: "Dhruv Thakur",
      title: "Member",
      linkedin: " https://www.linkedin.com/in/dhruv-thakur-6b5194258",
      github: "https://github.com/dhruvThakur203",
      img: "",
    },
    {
      name: "Gaurav Kumar Singh",
      title: "Member",
      linkedin: "https://www.linkedin.com/in/gaurav-kumar-singh-74724a25b",
      github: "https://github.com/gaurav-2622",
      img: "",
    },

    {
      name: "RAJKUMAR",
      title: "Member",
      linkedin: "https://www.linkedin.com/in/raj-vachhani-053854256/",
      github: "https://github.com/Rj1510",
      img: "",
    },

    {
      name: "Aaryan Yadav",
      title: "Member",
      linkedin: "https://www.linkedin.com/in/aryan-yadav-33b693275",
      github: "https://github.com/Aaryanyd06",
      img: "",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 3%",
        gap: "2rem",
      }}
      className="team--component"
    >
      <h1
        style={{
          margin: "0",
          textAlign: "center",
        }}
      >
        Introducing the IIIT Sonepat E-Cell Team!
      </h1>
      <p
        style={{
          textAlign: "center",
          maxWidth: "800px",
        }}
      >
        Our team at IIIT Sonepat E-Cell is composed of dedicated individuals who
        are passionate about entrepreneurship and fostering a culture of
        innovation. Together, we work towards creating a supportive and
        inspiring environment for students to explore their entrepreneurial
        potential.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "4rem",
          flexWrap: "wrap",
          maxWidth: "100%",
        }}
        className="team--block-members"
      >
        {team.map((member) => (
          <a
            href={member.linkedin}
            key={member.name}
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
              className="team--block-member-info"
            >
              <img
                src={member.img}
                alt={member.name}
                style={{
                  width: "150px",
                  height: " 150px",
                  borderRadius: "50%",
                  backgroundColor: "lightgray",
                  objectFit: "cover",
                }}
              />
              <h3
                style={{
                  margin: "0",
                }}
              >
                {member.name}
              </h3>
              <p
                style={{
                  margin: "0",
                  color: "rgba(0, 0, 0, 0.5)",
                }}
              >
                {member.title}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Team;
