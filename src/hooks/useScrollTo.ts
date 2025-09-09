export function useScrollTo() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const scrollToProjects = () => {
    scrollToSection('projects');
  };

  const scrollToContact = () => {
    scrollToSection('contact');
  };

  return {
    scrollToNext,
    scrollToSection,
    scrollToProjects,
    scrollToContact
  };
}