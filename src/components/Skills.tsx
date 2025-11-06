import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  level: number;
}

interface SkillsProps {
  skills: Skill[];
}

export const Skills = ({ skills }: SkillsProps) => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-2">My Expertise</p>
          <h2 className="text-4xl md:text-5xl font-bold">Skills & Technologies</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-foreground">{skill.name}</span>
                <span className="text-sm text-primary">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
