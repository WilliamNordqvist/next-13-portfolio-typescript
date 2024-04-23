import { CV } from "@/components/cv/cv";
import { Chat } from "@/components/chat/chat";
import { Footer } from "@/components/footer/footer";
import { Hero } from "@/components/hero/hero";
import { Section } from "@/components/section/section";
import { Skills } from "@/components/skills/skills";
import { Work } from "@/components/work/work";
import { getCases } from "@/services/casesService";

const Page = async () => {
  const data = await getCases();

  return (
    <>
      <Section>
        <Hero />
      </Section>
      <Section>
        <Chat />
      </Section>
      <Section>
        <Work data={data} />
      </Section>
      <Section>
        <Skills />
      </Section>
      <Section>
        <CV />
      </Section>
      <Footer />
    </>
  );
};

export default Page;
