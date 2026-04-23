export default function AboutMe() {
  return (
    <div className="flex flex-col items-center w-[300px] lg:w-[500px] gap-7">
      <h1 className="text-2xl underline">about_me</h1>
      <div className="flex justify-center mb-10">
        <img
          src="/images/fotoku.jpg"
          alt="Labib Fauzi"
          className="rounded-full h-[150px] w-[150px] object-cover object-top"
        />
      </div>

      <div className="flex flex-col gap-16 mb-20 px-2">
        <div className="text-justify text-sm sm:text-base space-y-6">
          <p className="leading-loose">
            Hi, my name is Labib Fauzi Khoirul Anam. I’m a student
            at Informatics Engineering at Politeknik Negeri Semarang (Polines).
          </p>

          <p className="leading-loose">
            My journey in tech started during my time at SMK 8 Semarang, where I
            built a strong foundation in programming and developed a deep
            interest in web development. Since then, I’ve continued to grow
            through hands-on experience, including real-world projects during my
            internship and academic work.
          </p>

          <p className="leading-loose">
            With over 3 years of experience in frontend development, I focus on
            building responsive, user-friendly, and visually engaging web
            applications. I enjoy turning ideas into interactive digital
            experiences and continuously improving both my technical and
            problem-solving skills.
          </p>

          <p className="leading-loose">
            I’m highly adaptable, detail-oriented, and always eager to learn new
            technologies to stay relevant in the ever-evolving world of software
            development.
          </p>
        </div>

        <div>
          <hr className="border-border" />
          <p className="mt-6 text-center text-xs sm:text-base leading-8">
            Any fool can write code that a computer can understand.
            Good programmers write code that humans can understand. <br />
            Martin_Fowler
          </p>
        </div>
      </div>
    </div>
  );
}
