import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Calendar, MapPin, Users, Trophy, Star, Clock, Phone, Mail, Target, Award, Zap, Heart, Crown, TrendingUp, Medal, RefreshCw } from 'lucide-react';
import heroImage from '@/assets/hero-pickleball.jpg';
import { useMatches } from '@/hooks/useMatches';
import { formatMatchForDisplay, sortMatchesByDate } from '@/utils/matchUtils';
import { Spinner } from '@/components/ui/spinner';

const CxoLeague = () => {
  // Dummy leaderboard data
  const leaderboardData = [
    {
      rank: 1,
      team: "HDFC ERGO Eagles",
      company: "HDFC ERGO",
      players: ["Rajesh Kumar", "Priya Sharma", "Amit Singh"],
      matches: 8,
      wins: 7,
      losses: 1,
      points: 21,
      winRate: 87.5,
      status: "champion"
    },
    {
      rank: 2,
      team: "Tata Digital Tigers",
      company: "Tata Digital", 
      players: ["Sanjay Mehta", "Kavya Patel", "Rohit Gupta"],
      matches: 8,
      wins: 6,
      losses: 2,
      points: 18,
      winRate: 75.0,
      status: "finalist"
    },
    {
      rank: 3,
      team: "ICICI Warriors",
      company: "ICICI",
      players: ["Neha Agarwal", "Vikram Shah", "Deepa Nair"],
      matches: 8,
      wins: 5,
      losses: 3,
      points: 15,
      winRate: 62.5,
      status: "semifinalist"
    },
    {
      rank: 4,
      team: "Barclays Bulldogs",
      company: "BARCLAYS",
      players: ["James Wilson", "Sneha Reddy", "Arjun Malhotra"],
      matches: 8,
      wins: 5,
      losses: 3,
      points: 15,
      winRate: 62.5,
      status: "semifinalist"
    },
    {
      rank: 5,
      team: "Hitachi Hawks",
      company: "HITACHI",
      players: ["Ravi Krishnan", "Ananya Joshi", "Suresh Rao"],
      matches: 7,
      wins: 4,
      losses: 3,
      points: 12,
      winRate: 57.1,
      status: "active"
    },
    {
      rank: 6,
      team: "WNS Wolves",
      company: "WNS",
      players: ["Madhavi Singh", "Karan Jain", "Ritika Chopra"],
      matches: 7,
      wins: 3,
      losses: 4,
      points: 9,
      winRate: 42.9,
      status: "active"
    },
    {
      rank: 7,
      team: "Adani Aces",
      company: "Adani Airport",
      players: ["Gautam Desai", "Shruti Iyer", "Manish Tiwari"],
      matches: 6,
      wins: 2,
      losses: 4,
      points: 6,
      winRate: 33.3,
      status: "active"
    },
    {
      rank: 8,
      team: "DSK Dynamos",
      company: "DSK Legal",
      players: ["Anil Kapoor", "Meera Joshi", "Varun Khanna"],
      matches: 6,
      wins: 1,
      losses: 5,
      points: 3,
      winRate: 16.7,
      status: "active"
    }
  ];

  // Use the custom hook to fetch matches from API
  const { matches, loading, error, refreshMatches } = useMatches();
  
  // Format matches for display and sort by date
  const formattedMatches = matches.map(formatMatchForDisplay);
  const sortedMatches = sortMatchesByDate(matches);
  const displayMatches = sortedMatches.map(formatMatchForDisplay);

  const getRankIcon = (rank: number, status: string) => {
    if (status === "champion") return <Crown className="h-5 w-5 text-yellow-500" />;
    if (status === "finalist") return <Medal className="h-5 w-5 text-gray-400" />;
    if (status === "semifinalist") return <Trophy className="h-5 w-5 text-amber-600" />;
    return <span className="h-5 w-5 flex items-center justify-center text-sm font-semibold">{rank}</span>;
  };

  const getStatusBadge = (status: string) => {
    switch(status) {
      case "champion": return <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black">Champion</Badge>;
      case "finalist": return <Badge className="bg-gradient-to-r from-gray-400 to-gray-600 text-white">Finalist</Badge>;
      case "semifinalist": return <Badge className="bg-gradient-to-r from-amber-500 to-amber-700 text-white">Semi-Finalist</Badge>;
      default: return <Badge variant="outline">Active</Badge>;
    }
  };
  const eventDetails = [
    { icon: Calendar, label: 'Date', value: '27 Sept 2025' },
    { icon: MapPin, label: 'Venue', value: 'Taj Lands End, Mumbai' },
    { icon: Users, label: 'Team Size', value: '3 Players per Team' },
    { icon: Trophy, label: 'Investment', value: '₹1.25 Lakhs per Team' },
    { icon: Clock, label: 'Duration', value: 'Full Day Event' },
  ];

  const highlights = [
    {
      icon: Trophy,
      title: 'Elite Competition',
      description: 'Round-robin format with live commentators and professional scoring'
    },
    {
      icon: Star,
      title: 'Saina Nehwal Experience',
      description: 'Olympic medallist debut appearance in pickleball with live chat session'
    },
    {
      icon: Target,
      title: 'Professional Training',
      description: 'Pre-match training by AIPA-certified coaches for all skill levels'
    },
    {
      icon: Award,
      title: 'Gourmet Experience',
      description: 'Curated sundowner and premium dining at Taj Lands End'
    },
    {
      icon: Zap,
      title: 'Premium Networking',
      description: 'Meaningful connections with CXOs, MDs, and industry leaders'
    },
    {
      icon: Heart,
      title: 'Complete Package',
      description: 'Personalized t-shirts, goodie bags, and exclusive memorabilia'
    }
  ];

  const companies = [
    'Premier League', 'ICICI', 'HDFC ERGO', 'BARCLAYS', 'HITACHI', 
    'WNS', 'DSK Legal', 'Tata Digital', 'Adani Airport', 'Hiranandani'
  ];

  const partners = [
    'Tata CLiQ', 'UNIREC'
  ];

  const schedule = [
    { time: '8:00 AM', activity: 'Registration & Welcome Breakfast' },
    { time: '9:00 AM', activity: 'Expert Coaching Sessions & Warm-up' },
    { time: '10:30 AM', activity: 'League Matches Begin - Round Robin Format' },
    { time: '1:00 PM', activity: 'Networking Lunch Break' },
    { time: '2:30 PM', activity: 'Continuation of League Matches' },
    { time: '4:00 PM', activity: 'Semi-Finals & Finals' },
    { time: '5:30 PM', activity: 'Live Chat with Saina Nehwal (Moderated by RJ Anmol)' },
    { time: '6:30 PM', activity: 'Awards Ceremony & Prize Distribution' },
    { time: '7:00 PM', activity: 'Sundowner & Premium Dining Experience' },
    { time: '9:00 PM', activity: 'Event Conclusion' }
  ];

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/95" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-gradient-hero text-white border-0 animate-float">
                India's First Ever CXO Sports League
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-hero bg-clip-text text-transparent">CXO</span>
                <br />
                <span className="text-foreground">PICKLEBALL</span>
                <br />
                <span className="bg-gradient-hero bg-clip-text text-transparent">LEAGUE</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                This isn't just a tournament, it's a celebration. A one-of-a-kind experience 
                where India's top business leaders come together not just to compete, but to connect.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="text-lg px-8 py-3">
                  <Trophy className="mr-2 h-5 w-5" />
                  Reserve Your Spot
                </Button>
                <Button variant="glass" size="lg" className="text-lg px-8 py-3">
                  <Calendar className="mr-2 h-5 w-5" />
                  Download Brochure
                </Button>
              </div>
            </div>
            
            <Card className="shadow-hero border-primary/20">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Event Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {eventDetails.map((detail, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-gradient-hero flex items-center justify-center">
                      <detail.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{detail.label}</p>
                      <p className="font-semibold">{detail.value}</p>
                    </div>
                  </div>
                ))}
                
                <Separator className="my-6" />
                
                <div className="text-center space-y-4">
                  <p className="text-lg font-semibold">Ready to Join?</p>
                  <div className="flex flex-col gap-3">
                    <Button variant="premium" className="w-full">
                      <Mail className="mr-2 h-4 w-4" />
                      grv8sports@gmail.com
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Phone className="mr-2 h-4 w-4" />
                      +91 9818223112
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="overview" className="text-lg">Event Overview</TabsTrigger>
              <TabsTrigger value="leaderboard" className="text-lg">Leaderboard</TabsTrigger>
              <TabsTrigger value="matches" className="text-lg">Match Results</TabsTrigger>
            </TabsList>
            
            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-16">
              <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">
                  Event <span className="bg-gradient-hero bg-clip-text text-transparent">Highlights</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  A premium experience designed for India's business elite
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {highlights.map((highlight, index) => (
                  <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-primary/10">
                    <CardContent className="p-6">
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-hero group-hover:animate-glow">
                        <highlight.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                      <p className="text-muted-foreground">{highlight.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Leaderboard Tab */}
            <TabsContent value="leaderboard" className="space-y-8">
              <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">
                  Tournament <span className="bg-gradient-hero bg-clip-text text-transparent">Leaderboard</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Live standings from the CXO Pickleball League
                </p>
              </div>

              <Card className="shadow-card border-primary/10">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">Current Standings</CardTitle>
                    <Badge className="bg-gradient-hero text-white">Live</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-16">Rank</TableHead>
                          <TableHead>Team</TableHead>
                          <TableHead>Company</TableHead>
                          <TableHead className="text-center">Matches</TableHead>
                          <TableHead className="text-center">Wins</TableHead>
                          <TableHead className="text-center">Losses</TableHead>
                          <TableHead className="text-center">Points</TableHead>
                          <TableHead className="text-center">Win %</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {leaderboardData.map((team) => (
                          <TableRow key={team.rank} className={team.rank <= 3 ? "bg-gradient-to-r from-primary/5 to-secondary/5" : ""}>
                            <TableCell className="font-medium">
                              <div className="flex items-center gap-2">
                                {getRankIcon(team.rank, team.status)}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div>
                                <p className="font-semibold">{team.team}</p>
                                <p className="text-sm text-muted-foreground">
                                  {team.players.join(", ")}
                                </p>
                              </div>
                            </TableCell>
                            <TableCell className="font-medium">{team.company}</TableCell>
                            <TableCell className="text-center">{team.matches}</TableCell>
                            <TableCell className="text-center text-green-600 font-semibold">{team.wins}</TableCell>
                            <TableCell className="text-center text-red-600">{team.losses}</TableCell>
                            <TableCell className="text-center font-bold text-primary">{team.points}</TableCell>
                            <TableCell className="text-center">
                              <div className="flex items-center gap-1">
                                <TrendingUp className="h-4 w-4 text-primary" />
                                {team.winRate}%
                              </div>
                            </TableCell>
                            <TableCell>{getStatusBadge(team.status)}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>

              {/* Top Performers */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-yellow-200 bg-gradient-to-br from-yellow-50 to-amber-50">
                  <CardContent className="p-6 text-center">
                    <Crown className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">League Champion</h3>
                    <p className="text-lg font-semibold">HDFC ERGO Eagles</p>
                    <p className="text-sm text-muted-foreground">21 Points • 87.5% Win Rate</p>
                  </CardContent>
                </Card>

                <Card className="border-gray-200 bg-gradient-to-br from-gray-50 to-slate-50">
                  <CardContent className="p-6 text-center">
                    <Medal className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Runner-up</h3>
                    <p className="text-lg font-semibold">Tata Digital Tigers</p>
                    <p className="text-sm text-muted-foreground">18 Points • 75.0% Win Rate</p>
                  </CardContent>
                </Card>

                <Card className="border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50">
                  <CardContent className="p-6 text-center">
                    <Trophy className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Most Improved</h3>
                    <p className="text-lg font-semibold">ICICI Warriors</p>
                    <p className="text-sm text-muted-foreground">5-3 Record • Strong Finish</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Match Results Tab */}
            <TabsContent value="matches" className="space-y-8">
              <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">
                  Match <span className="bg-gradient-hero bg-clip-text text-transparent">Results</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Recent and upcoming matches in the tournament
                </p>
              </div>

              <Card className="shadow-card border-primary/10">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">Recent & Upcoming Matches</CardTitle>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={refreshMatches}
                      disabled={loading}
                      className="flex items-center gap-2"
                    >
                      <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
                      Refresh
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  {loading ? (
                    <div className="text-center py-8">
                      <Spinner size="lg" className="mx-auto mb-4" />
                      <p className="text-muted-foreground">Loading matches...</p>
                    </div>
                  ) : error ? (
                    <div className="text-center py-8">
                      <p className="text-red-600 mb-4">Error: {error}</p>
                      <Button onClick={refreshMatches} variant="outline">
                        Try Again
                      </Button>
                    </div>
                  ) : displayMatches.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">No matches found</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {displayMatches.map((match, index) => (
                        <div key={index} className={`p-4 rounded-lg border ${
                          match.status === 'completed' 
                            ? 'bg-green-50 border-green-200' 
                            : match.status === 'in-progress'
                            ? 'bg-yellow-50 border-yellow-200'
                            : 'bg-blue-50 border-blue-200'
                        }`}>
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <Badge variant={
                                  match.status === 'completed' 
                                    ? 'default' 
                                    : match.status === 'in-progress'
                                    ? 'secondary'
                                    : 'outline'
                                }>
                                  {match.status === 'completed' 
                                    ? 'Completed' 
                                    : match.status === 'in-progress'
                                    ? 'In Progress'
                                    : 'Upcoming'
                                  }
                                </Badge>
                                <span className="text-sm text-muted-foreground">{match.date} • {match.time}</span>
                              </div>
                              <div className="flex items-center gap-4">
                                <span className="font-semibold">{match.team1}</span>
                                <span className="text-muted-foreground">vs</span>
                                <span className="font-semibold">{match.team2}</span>
                              </div>
                            </div>
                            <div className="text-right">
                              {match.status === 'completed' ? (
                                <div>
                                  <p className="font-bold text-lg">{match.score}</p>
                                  <p className="text-sm text-green-600">Winner: {match.winner}</p>
                                </div>
                              ) : match.status === 'in-progress' ? (
                                <div>
                                  <p className="font-semibold text-yellow-600">Match in Progress</p>
                                  <p className="text-sm text-muted-foreground">Live Score: {match.score}</p>
                                </div>
                              ) : (
                                <div>
                                  <p className="font-semibold text-blue-600">Match Scheduled</p>
                                  <p className="text-sm text-muted-foreground">Court TBD</p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Event <span className="bg-gradient-hero bg-clip-text text-transparent">Schedule</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              A full day of competition, networking, and celebration
            </p>
          </div>

          <Card className="shadow-card border-primary/10">
            <CardContent className="p-0">
              {schedule.map((item, index) => (
                <div key={index} className={`flex items-center gap-6 p-6 ${index !== schedule.length - 1 ? 'border-b border-border/50' : ''}`}>
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-gradient-hero flex items-center justify-center">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <p className="font-semibold text-lg">{item.time}</p>
                    <p className="text-muted-foreground">{item.activity}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Participants */}
      <section className="py-20 bg-gradient-card">
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

          <div className="text-center mb-16">
            <h3 className="text-2xl font-semibold mb-8">
              Gifting <span className="bg-gradient-hero bg-clip-text text-transparent">Partners</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {partners.map((partner, index) => (
                <Badge
                  key={index}
                  className="px-4 py-2 text-sm bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors"
                >
                  {partner}
                </Badge>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Limited spots available. Secure your team's position today.
            </p>
            <Button variant="premium" size="lg">
              Register Your Team Now
            </Button>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              What's <span className="bg-gradient-hero bg-clip-text text-transparent">Included</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need for a premium sporting experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-card transition-all duration-300 border-primary/10">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <Target className="h-12 w-12 text-primary mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Professional Training</h3>
                <p className="text-muted-foreground">
                  Expert coaching sessions and guided warm-up by AIPA-certified professionals
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-card transition-all duration-300 border-primary/10">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <Trophy className="h-12 w-12 text-secondary mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Competition Format</h3>
                <p className="text-muted-foreground">
                  Round-robin matches with live commentators and professional video coverage
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-card transition-all duration-300 border-primary/10">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <Heart className="h-12 w-12 text-accent mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium Amenities</h3>
                <p className="text-muted-foreground">
                  Personalized t-shirts, exclusive goodie bags, and luxury facilities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Make History?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Be part of India's first-ever CXO Pickleball League. Limited teams, unlimited opportunities.
          </p>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-white mb-4">Contact Us Now</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="glass" size="lg" className="text-lg px-8 py-3">
                <Mail className="mr-2 h-5 w-5" />
                grv8sports@gmail.com
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-white/30 text-white hover:bg-white/10">
                <Phone className="mr-2 h-5 w-5" />
                +91 9818223112
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CxoLeague;