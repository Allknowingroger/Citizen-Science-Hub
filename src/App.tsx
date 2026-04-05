import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Search, 
  Leaf, 
  Stars, 
  CloudRain, 
  Activity, 
  Library, 
  Gamepad2, 
  Building2, 
  AlertTriangle,
  ExternalLink,
  ArrowRight,
  Filter,
  Globe,
  Beaker,
  Heart,
  X,
  Clock,
  BarChart3,
  Mail,
  CheckCircle2
} from "lucide-react";
import { CATEGORIES, PROJECTS } from "./constants";
import { cn } from "./lib/utils";
import { Project } from "./types";

const ICON_MAP: Record<string, any> = {
  Stars,
  Leaf,
  CloudRain,
  Activity,
  Library,
  Gamepad2,
  Building2,
  AlertTriangle,
};

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem("citizen-science-favorites");
    return saved ? JSON.parse(saved) : [];
  });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [isNewsletterSubscribed, setIsNewsletterSubscribed] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("citizen-science-favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (e: React.MouseEvent, projectName: string) => {
    e.stopPropagation();
    setFavorites(prev => 
      prev.includes(projectName) 
        ? prev.filter(name => name !== projectName) 
        : [...prev, projectName]
    );
  };

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesSearch = 
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = !selectedCategory || project.category === selectedCategory;
      const matchesFavorites = !showFavoritesOnly || favorites.includes(project.name);
      
      return matchesSearch && matchesCategory && matchesFavorites;
    });
  }, [searchQuery, selectedCategory, favorites, showFavoritesOnly]);

  return (
    <div className="min-h-screen font-sans bg-slate-50/50 bg-grid-pattern">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-200/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-200/20 blur-[120px] rounded-full animate-pulse delay-700" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 glass-card border-b border-slate-200/60 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center text-white shadow-lg shadow-brand-200 group-hover:scale-110 transition-transform animate-float">
              <Beaker size={24} />
            </div>
            <h1 className="text-xl font-display font-bold tracking-tight text-slate-900">
              Citizen<span className="text-brand-600">Science</span> Hub
            </h1>
          </div>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <button 
              onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
              className={cn(
                "flex items-center gap-2 transition-colors",
                showFavoritesOnly ? "text-brand-600" : "hover:text-brand-600"
              )}
            >
              <Heart size={18} fill={showFavoritesOnly ? "currentColor" : "none"} />
              My Collection ({favorites.length})
            </button>
            <a href="#" className="hover:text-brand-600 transition-colors">Explore</a>
            <button 
              onClick={() => setShowSubmitModal(true)}
              className="px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors shadow-md shadow-brand-100"
            >
              Submit Project
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="mb-20 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-wider uppercase bg-brand-100 text-brand-700 rounded-full">
              Empowering Public Research
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight text-slate-900">
              Science is for <span className="gradient-text">Everyone</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Discover and contribute to real scientific research. From tracking climate change to discovering new planets, your participation makes a difference.
            </p>
            
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400">
                <Search size={20} />
              </div>
              <input
                type="text"
                placeholder="Search projects, topics, or tags..."
                className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all outline-none text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-slate-900">3,000+</p>
                <p className="text-sm text-slate-500">Active Projects</p>
              </div>
              <div className="text-center border-x border-slate-200 px-8 md:px-16">
                <p className="text-3xl font-display font-bold text-slate-900">1.5M</p>
                <p className="text-sm text-slate-500">Volunteers</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-slate-900">500+</p>
                <p className="text-sm text-slate-500">Scientific Papers</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Categories */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-display font-bold text-slate-900">Browse by Domain</h3>
            <button 
              onClick={() => setSelectedCategory(null)}
              className={cn(
                "text-sm font-medium transition-colors",
                selectedCategory ? "text-brand-600 hover:text-brand-700" : "text-slate-400 cursor-default"
              )}
            >
              Clear Filters
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {CATEGORIES.map((category) => {
              const Icon = ICON_MAP[category.icon];
              const isActive = selectedCategory === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(isActive ? null : category.id)}
                  className={cn(
                    "flex flex-col items-center gap-3 p-4 rounded-2xl transition-all border",
                    isActive 
                      ? "bg-brand-600 border-brand-600 text-white shadow-lg shadow-brand-200 scale-105" 
                      : "bg-white border-slate-100 text-slate-600 hover:border-brand-200 hover:bg-brand-50/50"
                  )}
                >
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center",
                    isActive ? "bg-white/20" : "bg-slate-50"
                  )}>
                    <Icon size={24} />
                  </div>
                  <span className="text-xs font-bold text-center leading-tight">
                    {category.name}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* How it Works */}
        <section className="mb-24 py-16 px-8 bg-slate-900 rounded-[3rem] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-display font-bold mb-12">How You Can Help</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 border border-white/10">
                  <Search className="text-brand-400" size={32} />
                </div>
                <h4 className="text-lg font-bold mb-3">Find a Project</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Browse our curated list of projects across various scientific domains that match your interests.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 border border-white/10">
                  <Activity className="text-brand-400" size={32} />
                </div>
                <h4 className="text-lg font-bold mb-3">Contribute Data</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Follow project guidelines to collect data, classify images, or solve puzzles from anywhere.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 border border-white/10">
                  <Globe className="text-brand-400" size={32} />
                </div>
                <h4 className="text-lg font-bold mb-3">Impact Science</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Your contributions help scientists publish papers, discover new species, and protect our planet.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-display font-bold text-slate-900">
              {showFavoritesOnly ? "My Collection" : (selectedCategory 
                ? CATEGORIES.find(c => c.id === selectedCategory)?.name 
                : "Featured Projects")}
              <span className="ml-3 text-sm font-normal text-slate-400">
                ({filteredProjects.length} results)
              </span>
            </h3>
            <div className="flex items-center gap-4">
              {showFavoritesOnly && (
                <button 
                  onClick={() => setShowFavoritesOnly(false)}
                  className="text-sm font-medium text-brand-600 hover:underline"
                >
                  Show all projects
                </button>
              )}
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Filter size={16} />
                <span>Sort by: Relevance</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard 
                  key={project.name} 
                  project={project} 
                  index={index} 
                  isFavorite={favorites.includes(project.name)}
                  onToggleFavorite={(e) => toggleFavorite(e, project.name)}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </AnimatePresence>
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                <Search size={32} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">No projects found</h4>
              <p className="text-slate-500">Try adjusting your search or filters to find what you're looking for.</p>
              <button 
                onClick={() => { setSearchQuery(""); setSelectedCategory(null); setShowFavoritesOnly(false); }}
                className="mt-6 text-brand-600 font-bold hover:underline"
              >
                Reset all filters
              </button>
            </div>
          )}
        </section>

        {/* Newsletter Section */}
        <section className="mt-32 py-20 px-8 glass-card rounded-[3rem] border-slate-200/60 overflow-hidden relative">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-display font-bold text-slate-900 mb-4">Stay Curious</h3>
              <p className="text-slate-600 leading-relaxed">
                Get weekly updates on new projects, scientific breakthroughs, and community success stories. No spam, just science.
              </p>
            </div>
            <div className="flex-1 w-full max-w-md">
              {isNewsletterSubscribed ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 p-4 bg-brand-50 text-brand-700 rounded-2xl border border-brand-100"
                >
                  <CheckCircle2 className="text-brand-500" />
                  <span className="font-bold">You're on the list! Welcome aboard.</span>
                </motion.div>
              ) : (
                <form 
                  onSubmit={(e) => { e.preventDefault(); setIsNewsletterSubscribed(true); }}
                  className="flex gap-2"
                >
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input 
                      type="email" 
                      required
                      placeholder="Enter your email"
                      className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-500 outline-none"
                    />
                  </div>
                  <button className="px-8 py-4 bg-brand-600 text-white font-bold rounded-2xl hover:bg-brand-700 transition-all shadow-lg shadow-brand-100">
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors z-10"
              >
                <X size={20} />
              </button>

              <div className="p-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-brand-50 text-brand-600 text-xs font-bold uppercase tracking-wider rounded-full border border-brand-100">
                    {selectedProject.category}
                  </span>
                  {selectedProject.difficulty && (
                    <span className={cn(
                      "px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full border",
                      selectedProject.difficulty === "Easy" ? "bg-emerald-50 text-emerald-600 border-emerald-100" :
                      selectedProject.difficulty === "Medium" ? "bg-amber-50 text-amber-600 border-amber-100" :
                      "bg-rose-50 text-rose-600 border-rose-100"
                    )}>
                      {selectedProject.difficulty}
                    </span>
                  )}
                </div>

                <h3 className="text-3xl font-display font-bold text-slate-900 mb-4">{selectedProject.name}</h3>
                
                <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                  {selectedProject.longDescription || selectedProject.description}
                </p>

                <div className="grid grid-cols-2 gap-6 mb-10">
                  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-600 shadow-sm">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Time Commitment</p>
                      <p className="text-sm font-bold text-slate-700">{selectedProject.timeCommitment || "Flexible"}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-600 shadow-sm">
                      <BarChart3 size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Scientific Impact</p>
                      <p className="text-sm font-bold text-slate-700">High Impact</p>
                    </div>
                  </div>
                </div>

                {selectedProject.impact && (
                  <div className="mb-10 p-6 bg-brand-50/50 rounded-2xl border border-brand-100/50">
                    <h5 className="text-sm font-bold text-brand-900 mb-2 flex items-center gap-2">
                      <Beaker size={16} />
                      Community Impact
                    </h5>
                    <p className="text-sm text-brand-800 leading-relaxed italic">
                      "{selectedProject.impact}"
                    </p>
                  </div>
                )}

                <div className="flex items-center gap-4">
                  <a 
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-4 bg-brand-600 text-white font-bold rounded-2xl hover:bg-brand-700 transition-all shadow-lg shadow-brand-100"
                  >
                    Start Contributing
                    <ExternalLink size={18} />
                  </a>
                  <button 
                    onClick={(e) => toggleFavorite(e, selectedProject.name)}
                    className={cn(
                      "w-14 h-14 rounded-2xl flex items-center justify-center transition-all border",
                      favorites.includes(selectedProject.name)
                        ? "bg-rose-50 border-rose-100 text-rose-500"
                        : "bg-slate-50 border-slate-200 text-slate-400 hover:border-rose-200 hover:text-rose-400"
                    )}
                  >
                    <Heart fill={favorites.includes(selectedProject.name) ? "currentColor" : "none"} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Submit Project Modal */}
      <AnimatePresence>
        {showSubmitModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSubmitModal(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden p-10"
            >
              <button 
                onClick={() => setShowSubmitModal(false)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors z-10"
              >
                <X size={20} />
              </button>

              <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">Submit a Project</h3>
              <p className="text-slate-500 mb-8">Help us grow the community by adding a new citizen science project.</p>

              <form onSubmit={(e) => { e.preventDefault(); setShowSubmitModal(false); alert("Project submitted for review!"); }} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Project Name</label>
                  <input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none" placeholder="e.g. Galaxy Zoo" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Website URL</label>
                  <input required type="url" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none" placeholder="https://..." />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Category</label>
                  <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none appearance-none">
                    {CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Brief Description</label>
                  <textarea required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none h-24 resize-none" placeholder="What is this project about?" />
                </div>
                <button className="w-full py-4 bg-brand-600 text-white font-bold rounded-2xl hover:bg-brand-700 transition-all shadow-lg shadow-brand-100 mt-4">
                  Submit for Review
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16 px-6 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center text-white">
                <Beaker size={18} />
              </div>
              <h1 className="text-lg font-display font-bold tracking-tight text-white">
                Citizen<span className="text-brand-500">Science</span> Hub
              </h1>
            </div>
            <p className="max-w-sm mb-8">
              A community-driven platform dedicated to connecting curious minds with scientific breakthroughs. Join the movement and help shape the future of knowledge.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white transition-colors"><Globe size={20} /></a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">All Projects</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Top Contributors</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Data Standards</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Getting Started</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community Forum</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-slate-800 text-xs text-center">
          &copy; {new Date().getFullYear()} Citizen Science Hub. Built for the advancement of human knowledge.
        </div>
      </footer>
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  isFavorite: boolean;
  onToggleFavorite: (e: React.MouseEvent) => void;
  onClick: () => void;
}

function ProjectCard({ project, index, isFavorite, onToggleFavorite, onClick }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      onClick={onClick}
      className="group flex flex-col bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-brand-100/20 hover:-translate-y-1 transition-all duration-300 overflow-hidden relative cursor-pointer"
    >
      {project.featured && (
        <div className="absolute top-4 left-4 z-10">
          <span className="px-2 py-1 bg-brand-500 text-white text-[8px] font-black uppercase tracking-widest rounded-md shadow-lg shadow-brand-200">
            Featured
          </span>
        </div>
      )}
      
      <button 
        onClick={onToggleFavorite}
        className={cn(
          "absolute top-4 right-4 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all",
          isFavorite ? "bg-rose-50 text-rose-500" : "bg-white/80 backdrop-blur-sm text-slate-300 hover:text-rose-400"
        )}
      >
        <Heart size={16} fill={isFavorite ? "currentColor" : "none"} />
      </button>

      <div className="p-8 flex-1">
        <div className="flex items-start justify-between mb-4">
          <span className={cn(
            "px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border",
            project.featured ? "bg-brand-50 text-brand-600 border-brand-100" : "bg-slate-50 text-slate-500 border-slate-100"
          )}>
            {project.category}
          </span>
          <div className="text-slate-400 group-hover:text-brand-600 transition-colors">
            <ExternalLink size={18} />
          </div>
        </div>
        
        <h4 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
          {project.name}
        </h4>
        
        <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags?.map(tag => (
            <span key={tag} className="text-[10px] font-medium px-2 py-0.5 bg-slate-50 text-slate-400 rounded-md">
              #{tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="px-8 py-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between group-hover:bg-brand-50 transition-colors">
        <span className="text-xs font-bold text-slate-400 group-hover:text-brand-600">View Details</span>
        <ArrowRight size={16} className="text-slate-300 group-hover:text-brand-600 group-hover:translate-x-1 transition-all" />
      </div>
    </motion.div>
  );
}
