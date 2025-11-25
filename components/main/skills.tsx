import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  OTHER_SKILL,
  SKILL_DATA,
} from "@/constants";

export const Skills = () => {
  return (
<section id="skills" className="flex flex-col items-center py-20 relative">
  <SkillText />

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 mt-10 z-10">
    {[...SKILL_DATA, ...FRONTEND_SKILL, ...BACKEND_SKILL, ...FULLSTACK_SKILL]
      .map((skill, i) => (
        <SkillDataProvider
          key={skill.skill_name}
          src={skill.image}
          name={skill.skill_name}
          width={skill.width}
          height={skill.height}
          index={i}
          color={skill.color}
        />
      ))}
  </div>

  <div className="absolute inset-0 opacity-30 -z-10">
    <video
      className="w-full h-full object-cover"
      preload="false"
      playsInline
      loop
      muted
      autoPlay
    >
      <source src="/videos/skills-bg.webm" type="video/webm" />
    </video>
  </div>
</section>
  );
};
