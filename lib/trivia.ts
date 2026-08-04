export interface Trivia {
  id: number;
  category: string;
  year: number | string;
  headline: string;
  body: string;
  location?: string;
  icon: string;
  tags: string[];
}

export const alabama100FinalProductionReady: Trivia[] = [
  // --- Tier 1: Core Legends & Massive Moments (#1 - #20) ---
  {
    id: 1,
    category: "Coaching Legends",
    year: 1979,
    headline: "The Bear’s Last Masterpiece",
    body: "At 66 years old, Paul 'Bear' Bryant captured his sixth national championship as Alabama’s head coach, proving the old master still had one final masterpiece left on college football's biggest stage.",
    icon: "crown",
    tags: ["Bear Bryant", "1979", "Legacy"]
  },
  {
    id: 2,
    category: "Coaching Legends",
    year: "2007-2023",
    headline: "Six Rings and The Process",
    body: "Six national championships in Tuscaloosa. Nick Saban didn't just win games; he weaponized preparation itself, turned the SEC into his personal kingdom, and engineered the most ruthless dynasty of the modern era.",
    icon: "fire",
    tags: ["Nick Saban", "Dynasty", "The Process"]
  },
  {
    id: 3,
    category: "Coaching Legends",
    year: 1958,
    headline: "Mama Called, and Bear Came Home",
    body: "When the phone rang from his alma mater in 1958, Bear Bryant didn't hesitate: 'Mama called, and I’m going,' returning to Tuscaloosa wearing the heavy weight of Alabama’s expectations.",
    icon: "home",
    tags: ["Bear Bryant", "1958", "Return"]
  },
  {
    id: 4,
    category: "Coaching Legends",
    year: 2007,
    headline: "The Man Who Rebuilt the Empire",
    body: "After years of falling behind and coaching carousels, Alabama found the exact man needed to rebuild its imperial throne—a stern, meticulous perfectionist ready to wake up the echoes.",
    icon: "zap",
    tags: ["Nick Saban", "2007", "Arrival"]
  },
  {
    id: 5,
    category: "Coaching Legends",
    year: 1981,
    headline: "Victory 315: Bear Becomes the Winningest Coach",
    body: "On September 26, 1981, Paul 'Bear' Bryant earned his 315th career victory when Alabama defeated Mississippi State 24-10, passing Amos Alonzo Stagg to become the winningest coach in major college football history.",
    icon: "trophy",
    tags: ["Bear Bryant", "315 Wins", "Milestone"]
  },
  {
    id: 6,
    category: "Legendary Moments",
    year: 1979,
    headline: "The Goal Line Stand",
    body: "In the final minutes of the 1979 Sugar Bowl, Alabama's defense stopped Penn State inches from the goal line, preserving a 14-7 victory and delivering one of the greatest defensive stands in program history.",
    icon: "shield",
    tags: ["1979 Sugar Bowl", "Goal Line Stand", "Defense"]
  },
  {
    id: 7,
    category: "Legendary Moments",
    year: 2013,
    headline: "The Kick Six Heartbreak",
    body: "It hurt, but it's part of the legend. Auburn’s missed field goal turned into a 109-yard dash by Chris Davis in the final second, creating one of the wildest, most unbelievable finishes in sports history.",
    icon: "alert",
    tags: ["2013 Iron Bowl", "Kick Six", "Rivalry"]
  },
  {
    id: 8,
    category: "Legendary Moments",
    year: 2018,
    headline: "The Tua Miracle in Atlanta",
    body: "Trailing Georgia at halftime in the 2018 CFP Championship Game, Nick Saban turned to freshman Tua Tagovailoa, who delivered a legendary overtime walk-off touchdown pass to DeVonta Smith.",
    icon: "star",
    tags: ["2018 National Title", "Tua Tagovailoa", "Comeback"]
  },
  {
    id: 9,
    category: "Legendary Moments",
    year: 2012,
    headline: "The Ultimate Louisiana Revenge",
    body: "After a brutal regular-season loss to LSU the year before, Alabama returned to New Orleans with bad intentions, completely suffocating the Tigers in a defensive masterclass to claim Saban’s third title.",
    icon: "target",
    tags: ["2012 BCS Title", "LSU", "Revenge"]
  },
  {
    id: 10,
    category: "Legendary Moments",
    year: 2009,
    headline: "Dismantling Tebow's Gators",
    body: "Against an undefeated Florida team led by Tim Tebow, Alabama didn't just win the SEC Championship—they physically dismantled them, serving notice that a brand-new Tuscaloosa empire had arrived.",
    icon: "crown",
    tags: ["2009 SEC", "Tim Tebow", "Return to Glory"]
  },
  {
    id: 11,
    category: "Legendary Moments",
    year: 2017,
    headline: "The Pain of Jordan-Hare",
    body: "Trapped in the hostile cauldron of Jordan-Hare Stadium, Alabama’s playoff hopes collapsed in a painful Iron Bowl loss, creating one of the most unforgettable rivalry nights of the Saban era.",
    icon: "compass",
    tags: ["2017 Iron Bowl", "Rivalry Pain"]
  },
  {
    id: 12,
    category: "Legendary Moments",
    year: 1993,
    headline: "The Defense That Shocked Miami",
    body: "Gene Stallings' defense shocked top-ranked Miami in the 1993 Sugar Bowl, intercepting Gino Torretta twice and dominating the Hurricanes 34-13.",
    icon: "lock",
    tags: ["1993 Sugar Bowl", "Miami", "Upset"]
  },
  {
    id: 13,
    category: "Legendary Moments",
    year: 1985,
    headline: "Van Tiffin’s 52-Yard Prayer",
    body: "Time expired, the pressure of the entire state rested on a sophomore's foot, and Van Tiffin launched a majestic 52-yard field goal right through the uprights to slay Auburn in the final second.",
    icon: "zap",
    tags: ["1985 Iron Bowl", "Van Tiffin", "Clutch"]
  },
  {
    id: 14,
    category: "Legendary Moments",
    year: 2020,
    headline: "The Perfect Pandemic Season",
    body: "Playing through a chaotic all-SEC schedule, Mac Jones, DeVonta Smith, and Najee Harris turned the 2020 season into an unstoppable, historic offensive clinic en route to a 13-0 crown.",
    icon: "award",
    tags: ["2020 National Title", "Pandemic Season", "Offense"]
  },
  {
    id: 15,
    category: "Legendary Moments",
    year: 1926,
    headline: "The Rose Bowl That Shocked the West",
    body: "Traveling across the country to Pasadena as massive underdogs, Wallace Wade’s Crimson Tide erased a 12-0 halftime deficit against the Washington Huskies, winning 20-19 and putting Southern football on the map.",
    icon: "flag",
    tags: ["1926 Rose Bowl", "Wallace Wade"]
  },
  {
    id: 16,
    category: "Player Legends",
    year: 1964,
    headline: "Broadway Joe Arrives in Tuscaloosa",
    body: "Before the fur coats and Super Bowl guarantees, Joe Namath was Bear Bryant’s fearless, swaggering quarterback who tore through the SEC and redefined what a football superstar looked like.",
    icon: "star",
    tags: ["Joe Namath", "1964", "Swagger"]
  },
  {
    id: 17,
    category: "Player Legends",
    year: 2015,
    headline: "Derrick Henry’s Heisman Rampage",
    body: "Carrying defenders like backpacks all autumn long, Derrick Henry steamrolled his way to 2,219 rushing yards, battering opponents into submission and capturing Alabama's second Heisman Trophy.",
    icon: "fire",
    tags: ["Derrick Henry", "Heisman", "2015"]
  },
  {
    id: 18,
    category: "Player Legends",
    year: 2020,
    headline: "DeVonta Smith: Slim Reaper's Heisman",
    body: "Defying a generation of voters who ignored wide receivers, DeVonta Smith took home the Heisman Trophy by putting on a clinic of route-running wizardry and impossible sideline catches.",
    icon: "award",
    tags: ["DeVonta Smith", "Heisman", "2020"]
  },
  {
    id: 19,
    category: "Player Legends",
    year: 2021,
    headline: "Bryce Young’s Ice-Water Poise",
    body: "Standing barely six feet tall, Bryce Young relied on preternatural calmness, laser vision, and supreme accuracy to pick apart defenses and claim a Heisman of his own.",
    icon: "target",
    tags: ["Bryce Young", "Heisman", "2021"]
  },
  {
    id: 20,
    category: "Player Legends",
    year: 1966,
    headline: "Ken 'The Snake' Stabler",
    body: "Improvising in broken plays with unmatched coolness, Ken Stabler guided Alabama through a dominant 1966 season and cemented himself as one of Tuscaloosa's most beloved legends.",
    icon: "compass",
    tags: ["Ken Stabler", "The Snake", "1966"]
  },

  // --- Tier 2: Fan Collections & Historic Wins (#21 - #55) ---
  {
    id: 21,
    category: "Championship Moments",
    year: 1993,
    headline: "George Teague's Sugar Bowl Statement",
    body: "George Teague delivered one of Alabama's most unforgettable defensive plays in the 1993 Sugar Bowl, chasing down Miami's Lamar Thomas after an interception return and forcing a fumble.",
    icon: "shield",
    tags: ["1992 Season", "Sugar Bowl", "George Teague"]
  },
  {
    id: 22,
    category: "Championship Moments",
    year: 2010,
    headline: "Ingram and Richardson's Ground Control",
    body: "In the 2010 BCS National Championship game against Texas, Mark Ingram and Trent Richardson each pounded out over 100 yards on the ground, securing Saban's first crystal football in Tuscaloosa.",
    icon: "trophy",
    tags: ["2010 BCS", "Mark Ingram", "Trent Richardson"]
  },
  {
    id: 23,
    category: "Championship Moments",
    year: 2016,
    headline: "The Onside Kick That Turned the Tide",
    body: "With the national championship hanging in the balance against Clemson, Nick Saban shocked everyone with a surprise fourth-quarter onside kick that changed the momentum of the game.",
    icon: "zap",
    tags: ["2016 National Title", "Onside Kick", "Clemson"]
  },
  {
    id: 24,
    category: "Championship Moments",
    year: 1979,
    headline: "The Classic Intersectional Battles",
    body: "Long before modern conference realignments, Alabama clashed in epic intersectional showdowns that tested every ounce of crimson resilience.",
    icon: "fire",
    tags: ["Classic Matchup", "History"]
  },
  {
    id: 25,
    category: "Championship Moments",
    year: 1973,
    headline: "The Wire-to-Wire Heartbreak",
    body: "The 1973 Crimson Tide spent the entire regular season ranked No. 1 in the AP poll, only to suffer a heartbreaking 24-23 loss to Notre Dame in an unforgettable Sugar Bowl classic.",
    icon: "heart",
    tags: ["1973 Sugar Bowl", "No.1 Ranking"]
  },
  {
    id: 26,
    category: "Championship Moments",
    year: 1963,
    headline: "Lee Roy Jordan’s 31-Tackle Wall",
    body: "In the 1963 Orange Bowl against Oklahoma, linebacker Lee Roy Jordan put on the greatest individual defensive clinic in bowl history, racking up a mind-boggling 31 tackles in a 17-0 shutout.",
    icon: "target",
    tags: ["Lee Roy Jordan", "Orange Bowl", "Defense"]
  },
  {
    id: 27,
    category: "Championship Moments",
    year: 1935,
    headline: "Don Hutson and Dixie Howell Shine",
    body: "Quarterback Dixie Howell and legendary receiver Don Hutson tore Stanford apart in the 1935 Rose Bowl, helping redefine the possibilities of the forward pass on the grandest stage.",
    icon: "star",
    tags: ["Don Hutson", "1935 Rose Bowl"]
  },
  {
    id: 28,
    category: "Championship Moments",
    year: 2021,
    headline: "The SEC Championship Shootout with Georgia",
    body: "Written off by many before kickoff, Bryce Young and Jameson Williams carved up Georgia’s top-ranked defense in Atlanta, putting on an offensive masterclass to claim another SEC crown.",
    icon: "crown",
    tags: ["2021 SEC", "Georgia", "Bryce Young"]
  },
  {
    id: 29,
    category: "Championship Moments",
    year: 2013,
    headline: "The McCarron-to-Cooper Connection",
    body: "AJ McCarron and true freshman Amari Cooper connected for sharp scores in the 2013 BCS Championship game, helping dismantle Notre Dame and cementing back-to-back titles.",
    icon: "award",
    tags: ["2013 BCS", "Amari Cooper", "AJ McCarron"]
  },
  {
    id: 30,
    category: "Championship Moments",
    year: 1980,
    headline: "The Defensive Battles of the Bear Era",
    body: "Through decades of gridiron warfare against traditional rivals, Bear Bryant's squads relied on suffocating defense and mistake-free football to dominate autumn Saturdays.",
    icon: "shield",
    tags: ["Bear Era", "Defense"]
  },
  {
    id: 31,
    category: "Player Legends",
    year: 1988,
    headline: "Derrick Thomas: The Sack Machine",
    body: "Quarterbacks across the SEC lived in absolute terror of Derrick Thomas. In 1988 alone, he racked up an astonishing 27 sacks, setting an NCAA single-season record.",
    icon: "fire",
    tags: ["Derrick Thomas", "Pass Rush", "1988"]
  },
  {
    id: 32,
    category: "Player Legends",
    year: 2009,
    headline: "Mark Ingram Breaks the Heisman Drought",
    body: "Pounding through the line with low center-of-gravity violence, Mark Ingram became the first player in Alabama history to hoist the Heisman Trophy, capping a magical 2009 run in New York.",
    icon: "trophy",
    tags: ["Mark Ingram", "Heisman", "2009"]
  },
  {
    id: 33,
    category: "Player Legends",
    year: 2010,
    headline: "Julio Jones: The Catch That Announced a Monster",
    body: "Before shattering NFL secondaries, Julio Jones gave Alabama fans jaws-on-the-floor moments with impossible body-control catches, punishing blocks, and a sheer athletic presence that changed the program.",
    icon: "star",
    tags: ["Julio Jones", "Receiver", "Legacy"]
  },
  {
    id: 34,
    category: "Player Legends",
    year: 2011,
    headline: "Trent Richardson’s Human Bulldozer Run",
    body: "Against Ole Miss, Trent Richardson delivered one of the most violent, jaw-dropping tackle-breaking touchdown runs in college football history, leaving defenders grasping at air and turf.",
    icon: "zap",
    tags: ["Trent Richardson", "Highlight Reel"]
  },
  {
    id: 35,
    category: "Player Legends",
    year: 2013,
    headline: "AJ McCarron: The Ultimate Game Manager",
    body: "Never flashy, always icy calm. AJ McCarron quarterbacked Alabama to back-to-back national titles with supreme efficiency, setting a standard of poise that every subsequent Tide QB chased.",
    icon: "target",
    tags: ["AJ McCarron", "Back-to-Back Titles"]
  },
  {
    id: 36,
    category: "Player Legends",
    year: 2022,
    headline: "Will Anderson Jr.: The Terminator",
    body: "Affectionately known as 'The Terminator,' Will Anderson Jr. terrorized opposing backfields and won the prestigious Bronko Nagurski Trophy as the nation's top defensive player.",
    icon: "lock",
    tags: ["Will Anderson Jr.", "Defense", "Nagurski"]
  },
  {
    id: 37,
    category: "Player Legends",
    year: 1980,
    headline: "Ozzie Newsome: The Gentle Giant",
    body: "Long before he built a Hall of Fame front office in the NFL, Ozzie Newsome was Alabama's ultimate pass-catching safety valve, redefining the tight end position under Bear Bryant.",
    icon: "award",
    tags: ["Ozzie Newsome", "Tight End", "Bear Era"]
  },
  {
    id: 38,
    category: "Player Legends",
    year: 1996,
    headline: "Shaun Alexander’s 291-Yard Explosion",
    body: "Against LSU in Baton Rouge during the 1996 season, running back Shaun Alexander put the entire team on his back, carrying the ball 36 times for a staggering 291 yards and four touchdowns.",
    icon: "running",
    tags: ["Shaun Alexander", "LSU", "1996"]
  },
  {
    id: 39,
    category: "Player Legends",
    year: 2014,
    headline: "Amari Cooper’s Route-Running Masterclass",
    body: "Amari Cooper didn't just beat cornerbacks; he embarrassed them with surgical precision. He capped his historic 2014 season with 1,727 receiving yards and a trip as a Heisman finalist.",
    icon: "star",
    tags: ["Amari Cooper", "2014", "Receiver U"]
  },
  {
    id: 40,
    category: "Player Legends",
    year: 2021,
    headline: "Jameson Williams: Lightning in a Bottle",
    body: "Needing a spark after transferring to Tuscaloosa, Jameson Williams turned every simple slant route or kick return into an electric 80-yard house call, giving Alabama's offense supersonic speed.",
    icon: "zap",
    tags: ["Jameson Williams", "Deep Threat"]
  },
  {
    id: 41,
    category: "Traditions & Rivalries",
    year: "Traditional",
    headline: "Two Words. One Identity: Roll Tide",
    body: "More than a mere slogan or a greeting, 'Roll Tide' is an unwritten cultural bond that unites millions of loyal souls across the globe whenever crimson and white pride is on the line.",
    icon: "flag",
    tags: ["Roll Tide", "Culture", "Identity"]
  },
  {
    id: 42,
    category: "Traditions & Rivalries",
    year: "Traditional",
    headline: "Bryant-Denny Stadium: The Cathedral",
    body: "When over 100,000 screaming fans pack into Bryant-Denny Stadium on an autumn Saturday, it transforms into one of the most terrifying, ear-shattering environments in all of American sports.",
    icon: "home",
    tags: ["Bryant-Denny Stadium", "Atmosphere"]
  },
  {
    id: 43,
    category: "Traditions & Rivalries",
    year: "Traditional",
    headline: "The Walk of Champions",
    body: "Before every home game, players and coaches march down the historic Walk of Champions through a sea of roaring, adoring fans—a pre-game ritual steeped in reverence and heavy expectations.",
    icon: "compass",
    tags: ["Walk of Champions", "Matchday Tradition"]
  },
  {
    id: 44,
    category: "Traditions & Rivalries",
    year: "Traditional",
    headline: "Rammer Jammer Yellow Hammer",
    body: "When the fourth quarter winds down and victory is sealed, the entire stadium breaks out into the mocking, joyous chant of 'Rammer Jammer, Yellow Hammer, give 'em hell, Alabama!'",
    icon: "bell",
    tags: ["Rammer Jammer", "Victory Chant"]
  },
  {
    id: 45,
    category: "Traditions & Rivalries",
    year: "Traditional",
    headline: "The Iron Bowl: Alabama vs. Auburn",
    body: "Dividing families, towns, and the entire state of Alabama for 365 days a year, the Iron Bowl isn't just a football game—it's an annual state-wide referendum on pride, honor, and bragging rights.",
    icon: "alert",
    tags: ["Iron Bowl", "Auburn Rivalry", "The State Divided"]
  },
  {
    id: 46,
    category: "Traditions & Rivalries",
    year: "Traditional",
    headline: "The Third Saturday in October",
    body: "For generations, the annual clash against Tennessee has carried deep historical weight, complete with the famous post-game tradition of smoking victory cigars regardless of where the game is played.",
    icon: "fire",
    tags: ["Tennessee Rivalry", "Victory Cigars"]
  },
  {
    id: 47,
    category: "Traditions & Rivalries",
    year: "Traditional",
    headline: "Big Al and the Crimson Elephant",
    body: "Though the team is officially the Crimson Tide, the legacy of the 'Red Elephants' lives on through Big Al, the lovable, charismatic elephant mascot who pumps up fans every weekend.",
    icon: "smile",
    tags: ["Big Al", "Mascot", "Red Elephants"]
  },
  {
    id: 48,
    category: "Hidden Lore",
    year: 1907,
    headline: "How the 'Crimson Tide' Got Its Name",
    body: "After a muddy 6-6 battle against Auburn in 1907, sportswriter Hugh Roberts described Alabama as a 'Crimson Tide,' creating the nickname that would define the program forever.",
    icon: "zap",
    tags: ["Origin Story", "1907 Auburn"]
  },
  {
    id: 49,
    category: "Hidden Lore",
    year: 1958,
    headline: "The Houndstooth Hat Legend",
    body: "Paul 'Bear' Bryant’s signature black-and-white houndstooth fedora wasn't just fashion—it became an enduring symbol of gridiron genius, discipline, and old-school Southern authority.",
    icon: "crown",
    tags: ["Bear Bryant", "Houndstooth", "Fashion Lore"]
  },
  {
    id: 50,
    category: "Hidden Lore",
    year: 2023,
    headline: "The Legend of '4th and 31'",
    body: "Trapped deep in enemy territory against Auburn with seconds ticking away, Jalen Milroe launched a miraculous 31-yard touchdown prayer to Isaiah Bond in the corner of the end zone to pull off an instant classic.",
    icon: "star",
    tags: ["2023 Iron Bowl", "Jalen Milroe", "Isaiah Bond"]
  },
  {
    id: 51,
    category: "Championship Moments",
    year: 2012,
    headline: "The Defensive Shutout in New Orleans",
    body: "In the 2012 BCS title game rematch against LSU, Kirby Smart's defense authored a masterclass of destruction, holding the Tigers scoreless in a surgical 21-0 coronation.",
    icon: "shield",
    tags: ["2012 BCS", "Shutout", "Defense"]
  },
  {
    id: 52,
    category: "Championship Moments",
    year: 2018,
    headline: "The SEC Championship Shootout in Atlanta",
    body: "When Jalen Hurts stepped off the bench to rescue an injured Tua Tagovailoa in the fourth quarter against Georgia, he engineered a breathtaking comeback drive to capture a dramatic SEC title.",
    icon: "star",
    tags: ["2018 SEC", "Jalen Hurts", "Comeback"]
  },
  {
    id: 53,
    category: "Championship Moments",
    year: 2009,
    headline: "Mount Cody Blocks the Kick",
    body: "Tennessee was on the verge of a shocking upset in Bryant-Denny Stadium, but massive nose tackle Terrence 'Mount Cody' stuffed a last-second field goal attempt—his second block of the day—to save the undefeated season.",
    icon: "lock",
    tags: ["2009 Tennessee", "Mount Cody", "Blocked Kick"]
  },
  {
    id: 54,
    category: "Championship Moments",
    year: 1931,
    headline: "Wallace Wade’s Unbeaten Rose Bowl Steamroller",
    body: "The 1930 Crimson Tide didn't just win games; they suffocated opponents, allowing no one more than 7 points all year before crushing Washington State 24-0 in Pasadena in January 1931, claiming another legendary championship season.",
    icon: "crown",
    tags: ["1931 Rose Bowl", "Wallace Wade", "Undefeated"]
  },
  {
    id: 55,
    category: "Championship Moments",
    year: 1966,
    headline: "The Orange Bowl Upset of Nebraska",
    body: "Playing on January 1, 1966, Bear Bryant’s squad dismantled a powerful Nebraska squad 39-28 in Miami, capping a stellar run and cementing a legendary undefeated season.",
    icon: "trophy",
    tags: ["1966 Orange Bowl", "Nebraska", "Undefeated Season"]
  },
  {
    id: 56,
    category: "Championship Moments",
    year: 1980,
    headline: "The Sugar Bowl Defensive Clamping",
    body: "Closing out a perfect 1979 championship season in the Sugar Bowl, Alabama’s legendary defense shut down opponents, cementing the sixth and final consensus national title for Bear Bryant.",
    icon: "shield",
    tags: ["Sugar Bowl", "Bear Bryant", "1979 Season"]
  },
  {
    id: 57,
    category: "Championship Moments",
    year: 1990,
    headline: "Stallings’ First Iron Bowl Triumph",
    body: "Gene Stallings needed a signature win to ignite his tenure, and he got it at Legion Field, outgrinding Auburn in a brutal, defensive trench war that signaled a return to old-school Alabama football.",
    icon: "flag",
    tags: ["1990 Iron Bowl", "Gene Stallings"]
  },
  {
    id: 58,
    category: "Championship Moments",
    year: 2021,
    headline: "The Four-Overtime Thriller in Auburn",
    body: "Playing on fumes and heavily battered in Jordan-Hare Stadium, Bryce Young engineered a miraculous last-minute 97-yard drive to force overtime, ultimately surviving a four-OT defensive slugfest.",
    icon: "fire",
    tags: ["2021 Iron Bowl", "Overtime", "Bryce Young"]
  },
  {
    id: 59,
    category: "Championship Moments",
    year: 2014,
    headline: "Blake Sims and Lane Kiffin's Offense",
    body: "Under coordinator Lane Kiffin, quarterback Blake Sims unlocked an explosive, modern spread offense, blowing past Texas A&M 59-0 in a terrifying display of offensive evolution.",
    icon: "zap",
    tags: ["2014 Season", "Lane Kiffin", "Offensive Explosion"]
  },
  {
    id: 60,
    category: "Player Legends",
    year: 2018,
    headline: "Jerry Jeudy’s Route-Running Artistry",
    body: "Jerry Jeudy won the Biletnikoff Award by turning elite SEC cornerbacks into twisted wreckage with ankle-breaking cuts, making route running look like high-speed ballet.",
    icon: "star",
    tags: ["Jerry Jeudy", "Biletnikoff", "Wide Receiver U"]
  },
  {
    id: 61,
    category: "Player Legends",
    year: 2020,
    headline: "Najee Harris: The Hurdling Juggernaut",
    body: "A terrifying blend of tackle-breaking power and open-field agility, Najee Harris punctuated his legendary career by routinely hurdle-jumping defenders on his way to an undefeated national title.",
    icon: "running",
    tags: ["Najee Harris", "Hurdle", "Running Back"]
  },
  {
    id: 62,
    category: "Player Legends",
    year: "1968-1972",
    headline: "John Hannah: The Greatest Lineman Ever",
    body: "Before modern stars dominated, Hall of Famer John Hannah paved the road in Tuscaloosa with unmatched nastiness and brute strength, later dubbed by scouts as the finest offensive lineman in football history.",
    icon: "crown",
    tags: ["John Hannah", "Hall of Fame", "Lineman"]
  },
  {
    id: 63,
    category: "Player Legends",
    year: 1974,
    headline: "Richard Todd and the Wishbone Masterclass",
    body: "Operating Bear Bryant’s complex wishbone offense with clinical precision, quarterback Richard Todd shredded opponents in 1974, leading the nation in efficiency and directing a lethal rushing attack.",
    icon: "compass",
    tags: ["Richard Todd", "Wishbone Era"]
  },
  {
    id: 64,
    category: "Player Legends",
    year: 1990,
    headline: "Siran Stacy’s Touchdown Frenzy",
    body: "A versatile, explosive weapon out of the backfield, Siran Stacy tore up opposing defenses in the early 90s, delivering unforgettable multi-touchdown performances under Gene Stallings.",
    icon: "fire",
    tags: ["Siran Stacy", "90s Football"]
  },
  {
    id: 65,
    category: "Player Legends",
    year: 2017,
    headline: "Minkah Fitzpatrick: The Secondary General",
    body: "Playing multiple positions across Nick Saban’s complex defense with absolute mastery, Minkah Fitzpatrick won the Chuck Bednarik and Jim Thorpe awards in the same season.",
    icon: "target",
    tags: ["Minkah Fitzpatrick", "All-American", "Defense"]
  },
  {
    id: 66,
    category: "Player Legends",
    year: 2015,
    headline: "Reggie Ragland: The Enforcer",
    body: "As the heartbeat and ferocious middle linebacker of Alabama’s 2015 national championship defense, Reggie Ragland delivered bone-crunching hits that set the physical tone for the entire team.",
    icon: "lock",
    tags: ["Reggie Ragland", "Linebacker", "Enforcer"]
  },
  {
    id: 67,
    category: "Player Legends",
    year: 2020,
    headline: "Mac Jones: The Precision Machine",
    body: "Quietly stepping into the starting role, Mac Jones posted one of the most statistically flawless quarterback seasons in NCAA history, completing 77.4% of his passes and dismantling defenses with surgical reads.",
    icon: "target",
    tags: ["Mac Jones", "2020 Offense", "Efficiency"]
  },
  {
    id: 68,
    category: "Player Legends",
    year: 2023,
    headline: "Dallas Turner: The Next Pass-Rush Freak",
    body: "Following directly in the footsteps of Will Anderson, Dallas Turner terrorized opposing offensive lines with blinding speed and relentless power, earning major All-SEC honors.",
    icon: "zap",
    tags: ["Dallas Turner", "Pass Rush", "All-SEC"]
  },
  {
    id: 69,
    category: "Coaching Legends",
    year: 1926,
    headline: "Wallace Wade and the Pasadena Pioneers",
    body: "Wallace Wade didn't just win games; he established the cross-country blueprint for Alabama football, proving that Southern squads could travel across the continent and conquer the best.",
    icon: "flag",
    tags: ["Wallace Wade", "Rose Bowl Pioneer"]
  },
  {
    id: 70,
    category: "Coaching Legends",
    year: 1992,
    headline: "Gene Stallings and the Gentleman's Code",
    body: "A former player under Bear Bryant, Gene Stallings brought hard-nosed discipline fused with deep southern integrity, restoring the championship standard to Tuscaloosa in '92.",
    icon: "home",
    tags: ["Gene Stallings", "1992 Title"]
  },
  {
    id: 71,
    category: "Coaching Legends",
    year: 2015,
    headline: "Kirby Smart’s Defensive Blueprint",
    body: "Serving as defensive coordinator from 2007 to 2015, Kirby Smart engineered the suffocating schemes that anchored Nick Saban’s title foundations before leaving to lead Georgia.",
    icon: "shield",
    tags: ["Kirby Smart", "Coordinator", "Defense"]
  },
  {
    id: 72,
    category: "Coaching Legends",
    year: 2018,
    headline: "Steve Sarkisian and the Offensive Revolution",
    body: "By modernizing Alabama's playbook into an unstoppable, tempo-driven spread attack, coordinator Steve Sarkisian unlocked historic numbers for Mac Jones, DeVonta Smith, and Jaylen Waddle.",
    icon: "fire",
    tags: ["Steve Sarkisian", "Modern Offense"]
  },
  {
    id: 73,
    category: "Coaching Legends",
    year: 1971,
    headline: "The Birth of the Wishbone Gamble",
    body: "When personnel changed, Bear Bryant didn't hesitate to reinvent his entire offensive philosophy overnight, adopting the triple-option wishbone and catching the entire SEC completely off guard.",
    icon: "compass",
    tags: ["Wishbone Offense", "Bear Bryant Tactics"]
  },

  // --- Tier 3: Deep Fan Easter Eggs & Lore (#74 - #92) ---
  {
    id: 74,
    category: "Traditions & Rivalries",
    year: "Traditional",
    headline: "The Million Dollar Band",
    body: "Established in 1912 with just a few struggling instruments, Alabama's 'Million Dollar Band' grew into a thunderous 400-member musical powerhouse that rumbles through every home game.",
    icon: "bell",
    tags: ["Million Dollar Band", "Game Day Tradition"]
  },
  {
    id: 75,
    category: "Traditions & Rivalries",
    year: "Traditional",
    headline: "Yea Alabama! The Battle Hymn",
    body: "Written in 1926 after the historic Rose Bowl victory, 'Yea Alabama' became the official fight song, echoing across stadiums whenever the Crimson Tide strikes fear into opponents.",
    icon: "star",
    tags: ["Fight Song", "Yea Alabama", "Tradition"]
  },
  {
    id: 76,
    category: "Traditions & Rivalries",
    year: "Traditional",
    headline: "Crimson and White: The Official Colors",
    body: "Selected in 1892, crimson and white became the permanent visual armor of the university, striking an iconic look recognized across the entire sports world.",
    icon: "crown",
    tags: ["Team Colors", "1892 Origins"]
  },
  {
    id: 77,
    category: "Traditions & Rivalries",
    year: "Traditional",
    headline: "The Elephant Walk Tailgate Culture",
    body: "Before kickoff, the sprawling lawns around Bryant-Denny transform into a massive southern feast of barbecue, houndstooth tents, and generations of families sharing football gospel.",
    icon: "smile",
    tags: ["Tailgating", "Southern Culture"]
  },
  {
    id: 78,
    category: "Traditions & Rivalries",
    year: "Traditional",
    headline: "Auburn: The Ultimate State Divide",
    body: "No state in America is as deeply fractured by sports loyalty as Alabama. On Iron Bowl Saturday, neighbors, coworkers, and even married couples sit on opposite sides of a historic crimson-and-orange war.",
    icon: "alert",
    tags: ["Iron Bowl", "State Divide"]
  },
  {
    id: 79,
    category: "Traditions & Rivalries",
    year: "Traditional",
    headline: "LSU: The Modern SEC Heavyweight Bout",
    body: "Over the last two decades, the annual collision between Alabama and LSU evolved into college football's premier heavyweight prize fight, packed with defensive wars and playoff implications.",
    icon: "target",
    tags: ["LSU Rivalry", "SEC Heavyweights"]
  },
  {
    id: 80,
    category: "Traditions & Rivalries",
    year: "Traditional",
    headline: "The Quad: The Heart of Campus",
    body: "On crisp autumn Fridays, the historic campus Quad fills with students, pep rallies, and roaring excitement, serving as the cultural epicenter before Saturday's pilgrimage to the stadium.",
    icon: "compass",
    tags: ["The Quad", "Campus Life"]
  },
  {
    id: 81,
    category: "Hidden Lore",
    year: 1954,
    headline: "The 12th Man Interception",
    body: "During a bizarre 1954 Cotton Bowl play against Rice, Alabama player Tommy Lewis ran off the sidelines while still wearing his street clothes to tackle an untouched runner streaking down the sideline, creating one of the weirdest moments in bowl history.",
    icon: "alert",
    tags: ["1954 Cotton Bowl", "Tommy Lewis", "Bizarre Play"]
  },
  {
    id: 82,
    category: "Hidden Lore",
    year: 1926,
    headline: "The Train Ride That Built a Legend",
    body: "The 1926 Rose Bowl team spent days chugging across America by train to reach California, bonding in cramped rail cars before pulling off one of the greatest upsets in sports history.",
    icon: "home",
    tags: ["1926 Rose Bowl", "Travel Lore"]
  },
  {
    id: 83,
    category: "Hidden Lore",
    year: 1954,
    headline: "Bear Bryant at Texas A&M",
    body: "Before returning to Tuscaloosa in 1958, Bear Bryant put his Texas A&M players through a notoriously brutal summer camp in Junction, Texas—forging a legendary level of toughness that defined his coaching philosophy.",
    icon: "fire",
    tags: ["Junction Camp", "Bear Bryant Lore"]
  },
  {
    id: 84,
    category: "Hidden Lore",
    year: 2007,
    headline: "Inside the Process",
    body: "Behind closed doors, Nick Saban’s practice facility enforces strict rules, zero distractions, and an obsessive focus on accountability that former players describe as a boot camp for absolute greatness.",
    icon: "lock",
    tags: ["The Process", "Facility Culture"]
  },
  {
    id: 85,
    category: "Hidden Lore",
    year: 1961,
    headline: "The 22-Point Defensive Masterclass",
    body: "Bear Bryant’s 1961 national championship defense was so suffocating that they allowed a total of just 22 points across 11 games, pitching four shutouts along the way.",
    icon: "shield",
    tags: ["1961 Defense", "Shutout Records"]
  },
  {
    id: 86,
    category: "Hidden Lore",
    year: "1930s",
    headline: "The Birth of the 'Red Elephants'",
    body: "During the 1930s season, sportswriters and broadcasters covering Alabama's massive, fast, and unstoppable linemen popularized the iconic nickname 'Red Elephants,' echoing through decades of program history.",
    icon: "smile",
    tags: ["Red Elephants", "Nickname Origin"]
  },
  {
    id: 87,
    category: "Hidden Lore",
    year: 2007,
    headline: "The Culture of Accountability",
    body: "From day one under Nick Saban, players learned a singular creed: complacency is the enemy, and every single snap requires maximum, undivided execution.",
    icon: "crown",
    tags: ["Team Discipline", "Saban Culture"]
  },
  {
    id: 88,
    category: "Hidden Lore",
    year: 1992,
    headline: "Gene Stallings' Ground Philosophy",
    body: "Gene Stallings didn't care about throwing 50 times a game; his 1992 philosophy was simple: run the ball with authority, play elite defense, and let execution take care of the scoreboard.",
    icon: "compass",
    tags: ["Gene Stallings", "Ground Game Philosophy"]
  },
  {
    id: 89,
    category: "Hidden Lore",
    year: 2020,
    headline: "Empty Stadiums, Maximum Dominance",
    body: "Even with pandemic-mandated empty seats echoing across stadiums in 2020, the Crimson Tide offense operated with such terrifying precision that opponents couldn't even hear their own snap counts.",
    icon: "fire",
    tags: ["2020 Season", "Empty Stadiums"]
  },
  {
    id: 90,
    category: "Hidden Lore",
    year: 2007,
    headline: "The Climb Back to the Summit",
    body: "Before Nick Saban fully turned the ship, Alabama had to grind through years of rebuilding bowls and coaching searches, making their eventual return to elite status feel all the more miraculous.",
    icon: "zap",
    tags: ["Rebuilding Years", "Rise to Power"]
  },
  {
    id: 91,
    category: "Hidden Lore",
    year: 1960,
    headline: "The Houndstooth Hat Legacy",
    body: "Beginning in the 1950s and 1960s, Paul 'Bear' Bryant’s signature black-and-white houndstooth fedora became an enduring visual symbol of southern football authority.",
    icon: "star",
    tags: ["Houndstooth", "Bear Bryant Symbol"]
  },
  {
    id: 92,
    category: "Hidden Lore",
    year: 2017,
    headline: "Tua’s Quiet Freshman Preparation",
    body: "Before throwing the most famous overtime touchdown in school history, Tua Tagovailoa spent an entire season quietly studying behind Jalen Hurts, learning the playbook in the shadows.",
    icon: "target",
    tags: ["Tua Tagovailoa", "Backstory"]
  }
];