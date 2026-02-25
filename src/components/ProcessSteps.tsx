import { PenTool, Users, FileSearch, Sparkles, CheckCircle } from 'lucide-react';

export function ProcessSteps() {
  const steps = [
    {
      number: 1,
      title: "Create Your Design",
      description:
        "Choose a template, add names and dates, upload artwork, and craft a meaningful epitaph.",
      icon: PenTool,
    },
    {
      number: 2,
      title: "Invite Loved Ones",
      description:
        "Share your design to gather input, memories, and support from family and friends.",
      icon: Users,
    },
    {
      number: 3,
      title: "Submit for Expert Review",
      description:
        "Our team reviews your design, offering refinements and options to ensure accuracy and beauty.",
      icon: FileSearch,
    },
    {
      number: 4,
      title: "Perfect the Details",
      description:
        "We collaborate with you to finalize every element until it feels exactly right.",
      icon: Sparkles,
    },
    {
      number: 5,
      title: "Approve & Begin Production",
      description:
        "Once approved, we begin crafting and installing your custom headstone with care.",
      icon: CheckCircle,
    },
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Design at Home</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Use our interactive, step-by-step tool to choose
            your style, colors, and engravings from the comfort
            of your home.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute left-0 right-0 top-16 h-0.5 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200" />

          <div className="grid md:grid-cols-5 gap-8 md:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative">
                  {/* Step number circle */}
                  <div className="flex justify-center mb-6">
                    <div className="relative z-10 w-32 h-32 rounded-full flex items-center justify-center shadow-lg"
                         style={{ background: `linear-gradient(to bottom right, var(--brand-gradient-from), var(--brand-gradient-to))` }}>
                      <div className="text-center">
                        <Icon className="w-10 h-10 mx-auto mb-2" style={{ color: 'var(--brand-primary)' }} />
                        <div className="text-xs uppercase tracking-wider" style={{ color: 'var(--brand-primary)' }}>
                          Step {step.number}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-lg mb-3">{step.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}