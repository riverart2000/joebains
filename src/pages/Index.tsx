import { Sidebar } from "@/components/Sidebar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Portfolio } from "@/components/Portfolio";
import { Contact } from "@/components/Contact";
import portfolioData from "@/data/portfolio.json";

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Sidebar navigation={portfolioData.navigation} />
      
      <main className="transition-all duration-300 ml-0 md:ml-64">
        <Hero
          subtitle={portfolioData.hero.subtitle}
          title={portfolioData.hero.title}
          roles={portfolioData.hero.roles}
          description={portfolioData.hero.description}
          experience={portfolioData.hero.experience}
        />
        
        <About description={portfolioData.about.description} />
        
        <Services services={portfolioData.services} />
        
        <Skills skills={portfolioData.skills} />
        
        <Experience experience={portfolioData.experience} />
        
        <Portfolio />
        
        <Contact
          title={portfolioData.contact.title}
          location={portfolioData.contact.location}
        />

        <footer className="py-8 px-6 text-center text-muted-foreground border-t border-border">
          <p>© {new Date().getFullYear()} Joe Bains. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
