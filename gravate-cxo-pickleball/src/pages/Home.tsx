import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Trophy, Star, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-pickleball.jpg';

const Home = () => {
  const companies = [
    'Premier League', 'ICICI', 'HDFC ERGO', 'BARCLAYS', 'HITACHI', 
    'WNS', 'DSK Legal', 'Tata Digital', 'Adani Airport'
  ];

  const highlights = [
    { icon: Trophy, title: 'Elite Competition', description: 'Play with India\'s top business leaders' },
    { icon: Star, title: 'Saina Nehwal', description: 'Olympic medallist special appearance' },
    { icon: Users, title: 'Premium Networking', description: 'Connect with dynamic CXOs and MDs' },
    { icon: Calendar, title: 'Full Experience', description: 'Training, matches, and gourmet dining' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-gradient-hero text-white border-0 animate-float">
            India's First Ever CXO Sports League
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-transparent">CXO</span>
            <br />
            <span className="text-foreground">PICKLEBALL</span>
            <br />
            <span className="bg-gradient-hero bg-clip-text text-transparent">LEAGUE</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Where sports meet influence. Join India's most dynamic leaders for an exclusive 
            pickleball experience at the iconic <span className="text-primary font-semibold">Taj Lands End, Mumbai</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-3">
              <Calendar className="mr-2 h-5 w-5" />
              Reserve Your Spot
            </Button>
            <Button variant="glass" size="lg" className="text-lg px-8 py-3">
              <MapPin className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              <span>27 Sept 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-secondary" />
              <span>Taj Lands End, Mumbai</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-accent" />
              <span>₹1.25L per team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Event Highlights */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Event <span className="bg-gradient-hero bg-clip-text text-transparent">Highlights</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Play, Compete, Connect with India's business elite
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-primary/10">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-hero group-hover:animate-glow">
                    <highlight.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Confirmed Participants */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Confirmed <span className="bg-gradient-hero bg-clip-text text-transparent">Participants</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Join fellow CXOs and MDs from India's leading companies
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {companies.map((company, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm hover:bg-primary/10 hover:border-primary/30 transition-colors"
              >
                {company}
              </Badge>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-6">
              And many more industry leaders joining us
            </p>
            <Link to="/cxo-league">
              <Button variant="premium" size="lg">
                View Full Details
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Pickle & Network?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join India's most exclusive corporate sports league. Limited spots available.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glass" size="lg" className="text-lg px-8 py-3">
              <Clock className="mr-2 h-5 w-5" />
              RSVP: grv8sports@gmail.com
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-white/30 text-white hover:bg-white/10">
              📞 +91 9818223112
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;