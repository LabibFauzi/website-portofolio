export default function AboutMe() {
  return (
    <div className="flex flex-col items-center w-[300px] lg:w-[500px]">
      <div className="flex justify-center mb-10">
        <img
          src="/images/fotoku.jpg"
          alt="Labib Fauzi"
          className="rounded-full h-[150px] w-[150px] object-cover object-top"
        />
      </div>

      <div className="flex flex-col gap-16 mb-20 px-2">
        <div>
          <p className="text-justify text-sm leading-8 sm:text-base">
            hi, my name is labib fauzi khoirul anam. <br /> i’m an 18 year old
            frontend developer from semarang, central java, indonesia. <br />
            <br />i graduated from smk 8 semarang in 2021, which marked the
            beginning of my coding journey. <br /> <br />
            With 3 years of experience in frontend development, I’ve had the
            opportunity to work on real projects during my high school
            internship and school assignments. <br /> <br />
            I’m currently pursuing a degree in Informatics Engineering at
            Politeknik Negeri Semarang, where I continue to expand my knowledge
            and technical skills. <br /> <br />
            i’m highly adaptable and dedicated to learning and improve my skill.
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
