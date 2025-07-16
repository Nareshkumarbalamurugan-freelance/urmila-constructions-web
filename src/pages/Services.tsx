import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, Construction, Wrench, Home } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Building Construction",
      description: "Complete building construction services from foundation to finishing including commercial and residential buildings with modern equipment and skilled workforce.",
      features: ["Foundation & Structure", "Commercial Buildings", "Quality Materials", "Skilled Workforce"]
    },
    {
      icon: Construction,
      title: "Road Development",
      description: "Professional road construction and infrastructure development with modern equipment and sustainable building practices for long-lasting results.",
      features: ["Highway Construction", "Infrastructure Development", "Modern Equipment", "Sustainable Practices"]
    },
    {
      icon: Wrench,
      title: "Civil Works",
      description: "Comprehensive civil engineering services including drainage systems, bridges, and public infrastructure projects with attention to detail and sustainability.",
      features: ["Drainage Systems", "Bridge Construction", "Public Infrastructure", "Engineering Excellence"]
    },
    {
      icon: Home,
      title: "Residential Projects",
      description: "Custom home construction and residential development projects with attention to detail and client preferences for dream homes.",
      features: ["Custom Home Design", "Residential Development", "Client-Focused Approach", "Quality Finishes"]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive construction solutions tailored to meet your specific needs and requirements
            with excellence and reliability.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" size="sm" className="mt-4">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a systematic approach to ensure quality and timely delivery of every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Planning & Design", description: "Detailed project planning and architectural design" },
              { step: "02", title: "Material Sourcing", description: "Quality materials procurement from trusted suppliers" },
              { step: "03", title: "Construction", description: "Professional construction with skilled workforce" },
              { step: "04", title: "Quality Check", description: "Thorough quality inspection and project completion" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="font-semibold mb-2">{process.title}</h3>
                <p className="text-sm text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for a free consultation and quote.
          </p>
          <Button size="lg" asChild variant="secondary">
            <Link to="/contact">Get Free Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;