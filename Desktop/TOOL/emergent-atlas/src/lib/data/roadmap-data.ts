// ============================================================================
// FAST ROADMAP - COMPREHENSIVE SUBJECT DATA
// Complete learning pathways for all labeled FAST-NU subjects
// Based on Taimoor Shaukat's proven learning methodology
// ============================================================================

export interface YouTubeResource {
  channel: string;
  title?: string;
  url: string;
  priority?: "PRIMARY" | "SECONDARY";
  timestamp?: string;
}

export interface BookResource {
  title: string;
  author: string;
  chapters: string[];
}

export interface SubjectRoadmap {
  code: string;
  name: string;
  semester: number;
  creditHours: string;
  focusAreas: string[];
  failurePoints: string[];
  strategicAdvice: string;
  youtubeResources: YouTubeResource[];
  bookResources: BookResource[];
  learningPath: string[];
  groupStudyMethods: string[];
  verificationSteps: string[];
  examStrategies: string[];
}

export const FAST_ROADMAP_DATA: SubjectRoadmap[] = [
  // ==========================================================================
  // SEMESTER 1
  // ==========================================================================
  {
    code: "CS1002",
    name: "Programming Fundamentals",
    semester: 1,
    creditHours: "3+1",
    focusAreas: [
      "Logic building",
      "Manual memory management (pointers)",
      "Array manipulation",
      "Control structures",
      "Functions",
    ],
    failurePoints: [
      "Nested loops logic",
      "Pointers vs references",
      "Dynamic memory allocation",
      "Segmentation faults",
      "Off-by-one errors",
    ],
    strategicAdvice:
      "Do not touch std::string until you have manually iterated through a char array. IntelliSense is a crutch; code on paper first. The lab exam will not give you Copilot.",
    youtubeResources: [
      {
        channel: "Apna College",
        title: "C++ Complete Course",
        url: "https://www.youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ",
        priority: "PRIMARY",
      },
      {
        channel: "CodeWithHarry",
        title: "C++ Tutorials for Beginners",
        url: "https://www.youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL",
        priority: "PRIMARY",
      },
    ],
    bookResources: [
      {
        title: "Let Us C++",
        author: "Yashavant Kanetkar",
        chapters: ["1-5 (Basics)", "6-8 (Pointers)"],
      },
      {
        title: "C++ Programming: From Problem Analysis to Program Design",
        author: "D.S. Malik",
        chapters: ["1-3 (Fundamentals)", "9-10 (Pointers and Arrays)"],
      },
    ],
    learningPath: [
      "Watch Apna College C++ basics (variables, operators, loops) - take notes",
      "Code simple programs daily (hello world → calculator → pattern printing)",
      "Implement array manipulation problems (searching, sorting) manually",
      "Master pointers through deliberate practice: pointer arithmetic, pointer-to-pointer",
      "Group study: whiteboard debugging sessions, explain code logic to peers",
      "Solve HackerRank/Codeforces beginner problems (10-15 problems minimum)",
      "Review FAST-NU past papers (last 3 years)",
    ],
    groupStudyMethods: [
      "Pair programming: one types, one navigates. Switch every 15 minutes",
      "Whiteboard code challenges: solve problems without IDE",
      "Peer code reviews before lab submissions",
      "Group debugging workshops for segmentation faults",
    ],
    verificationSteps: [
      "Implement a simple data structure (linked list or stack) from scratch without help",
      "Pass a timed practice quiz using FAST past papers (>80% accuracy)",
      "Explain core concepts (pointers, recursion, memory) to a peer clearly",
    ],
    examStrategies: [
      "Solve FAST past 3 years of PF exams",
      "Create 5 MCQs per topic with study group",
      "Write key code snippets by hand to prepare for paper-based exams",
      "Time yourself: simulate exam conditions",
    ],
  },

  {
    code: "MT1003",
    name: "Calculus and Analytical Geometry",
    semester: 1,
    creditHours: "3+0",
    focusAreas: [
      "Limits and continuity",
      "Differentiation",
      "Integration",
      "Applications of derivatives",
      "Fundamental theorem of calculus",
    ],
    failurePoints: [
      "Limit evaluation techniques",
      "Chain rule application",
      "Integration by parts/substitution",
      "Forgetting constant of integration",
      "Algebraic simplification errors",
    ],
    strategicAdvice:
      "Practice derivative and integral formulas until they become second nature. Visualize functions using graphing tools. Never skip steps in algebraic manipulation.",
    youtubeResources: [
      {
        channel: "The Mathematics Outlet",
        title: "Calculus Series",
        url: "https://www.youtube.com/@TheMathematicsOutlet",
        priority: "PRIMARY",
      },
      {
        channel: "Bushra's Coaching",
        title: "Calculus Fundamentals",
        url: "https://www.youtube.com/@bushrascoaching2035",
        priority: "PRIMARY",
      },
      {
        channel: "Khan Academy",
        title: "AP Calculus AB",
        url: "https://www.khanacademy.org/math/ap-calculus-ab",
        priority: "SECONDARY",
      },
    ],
    bookResources: [
      {
        title: "Thomas' Calculus",
        author: "George B. Thomas",
        chapters: ["2-3 (Limits)", "3-4 (Derivatives)", "5 (Integrals)"],
      },
      {
        title: "Calculus: Early Transcendentals",
        author: "James Stewart",
        chapters: ["2-3 (Derivatives)", "4-5 (Applications, Integrals)"],
      },
    ],
    learningPath: [
      "Watch Khan Academy/Mathematics Outlet limits series - practice limit problems",
      "Master derivative rules (power, product, quotient, chain) through repetition",
      "Solve derivative application problems (optimization, related rates) with group",
      "Learn integration techniques: substitution, by parts, partial fractions",
      "Use graphing tools (Desmos, GeoGebra) to visualize functions collaboratively",
      "Solve FAST past calculus papers (last 3 years)",
    ],
    groupStudyMethods: [
      "Group problem-solving sessions: tackle complex calculus problems together",
      "Peer teaching: each member explains one derivative/integration technique",
      "Visualization exercises: use graphing software to understand function behavior",
    ],
    verificationSteps: [
      "Derive and solve a limit/derivative problem from scratch without reference",
      "Compute a definite integral and verify with peer",
      "Achieve 100% on a mock calculus test",
    ],
    examStrategies: [
      "Memorize key formulas (derivatives, integrals) on flashcards",
      "Practice FAST past calculus problems by hand, timed",
      "Focus on algebraic manipulation speed",
      "Double-check units and dimensions in applied problems",
    ],
  },

  {
    code: "NS1001",
    name: "Applied Physics",
    semester: 1,
    creditHours: "3+0",
    focusAreas: [
      "Mechanics (kinematics, dynamics)",
      "Electromagnetism (electric fields, circuits)",
      "Waves and oscillations",
    ],
    failurePoints: [
      "Vector decomposition",
      "Free body diagrams",
      "Circuit analysis (Kirchhoff's laws)",
      "Unit conversions",
    ],
    strategicAdvice:
      "Always draw free body diagrams first. Practice dimensional analysis to catch errors before they happen. Understand the physical meaning behind equations.",
    youtubeResources: [
      {
        channel: "Fundamentals of Physics - Solutions",
        url: "https://www.youtube.com/@fundamentalsofphysics-solu6464",
        priority: "PRIMARY",
      },
      {
        channel: "Circus of Physics",
        url: "https://www.youtube.com/@CircusofPhysics",
        priority: "SECONDARY",
      },
    ],
    bookResources: [
      {
        title: "Fundamentals of Physics",
        author: "Halliday, Resnick, Walker",
        chapters: ["2-5 (Mechanics)", "21-26 (Electromagnetism)"],
      },
    ],
    learningPath: [
      "Watch Fundamentals of Physics videos on mechanics (motion, forces)",
      "Practice free body diagrams and force calculations",
      "Study circuit analysis: series/parallel circuits, Kirchhoff's laws",
      "Solve numerical problems from textbook",
      "Group problem-solving: tackle physics problems on whiteboard",
      "Review FAST past physics papers",
    ],
    groupStudyMethods: [
      "Whiteboard physics: draw free body diagrams, solve collaboratively",
      "Peer quizzing on concepts and formulas",
      "Lab report collaboration (if applicable)",
    ],
    verificationSteps: [
      "Solve a mechanics problem (projectile motion, forces) correctly without help",
      "Analyze a circuit and compute current/voltage correctly",
      "Score >85% on a practice physics quiz",
    ],
    examStrategies: [
      "Memorize key physics formulas and constants",
      "Practice dimensional analysis to catch errors",
      "Solve FAST past physics exams under timed conditions",
    ],
  },

  // ==========================================================================
  // SEMESTER 2
  // ==========================================================================
  {
    code: "CS1004",
    name: "Object Oriented Programming",
    semester: 2,
    creditHours: "3+1",
    focusAreas: [
      "Classes and objects",
      "Encapsulation",
      "Inheritance",
      "Polymorphism (virtual functions, overloading/overriding)",
      "Deep vs shallow copy",
      "Rule of Three/Five",
    ],
    failurePoints: [
      "Deep vs shallow copy (memory leaks)",
      "Virtual function mechanics (v-tables)",
      "Constructor/destructor ordering",
      "Public vs private inheritance",
    ],
    strategicAdvice:
      "Classes are contracts. If you don't write a Copy Constructor when your class has a pointer member, your program will crash. Learn the Rule of Three. Draw UML before writing code.",
    youtubeResources: [
      {
        channel: "Apna College",
        title: "OOP in C++ (One Shot)",
        url: "https://www.youtube.com/watch?v=mlIUKyZIUUU",
        priority: "PRIMARY",
      },
      {
        channel: "CodeWithHarry",
        title: "C++ OOP Tutorials",
        url: "https://www.youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL",
        priority: "PRIMARY",
      },
    ],
    bookResources: [
      {
        title: "Object Oriented Programming in C++",
        author: "Robert Lafore",
        chapters: ["1-3 (Classes, Constructors)", "8-9 (Inheritance, Polymorphism)"],
      },
      {
        title: "Head First Object-Oriented Analysis and Design",
        author: "Brett McLaughlin",
        chapters: ["2-3 (OOP principles)"],
      },
    ],
    learningPath: [
      "Watch Apna College OOP overview - understand classes, objects, encapsulation",
      "Code small class examples: model real-world objects (Car, BankAccount)",
      "Study inheritance: design class hierarchies on whiteboard before coding",
      "Master polymorphism: implement virtual functions, understand v-table mechanics",
      "Practice deep copy: implement copy constructor and assignment operator",
      "Build small projects in pairs focusing on inheritance and polymorphism",
      "Review FAST OOP past papers and practice MCQs",
    ],
    groupStudyMethods: [
      "Pair coding: design and implement classes together",
      "Group UML diagram sessions on whiteboard",
      "Peer explanation sessions for OOP principles",
    ],
    verificationSteps: [
      "Code a class with methods, constructors, destructors from scratch correctly",
      "Identify correct vs incorrect UML diagrams in practice questions",
      "Explain key OOP concepts to a study partner clearly",
    ],
    examStrategies: [
      "Solve FAST exam problems on class diagram design",
      "Create and practice MCQs about inheritance and polymorphism with group",
      "Practice coding class hierarchies by hand",
      "Memorize constructor/destructor call order in inheritance",
    ],
  },

  {
    code: "EE1005",
    name: "Digital Logic Design",
    semester: 2,
    creditHours: "3+1",
    focusAreas: [
      "Boolean algebra",
      "Logic gates",
      "Karnaugh maps (K-maps)",
      "Combinational circuits (adders, multiplexers)",
      "Sequential circuits (flip-flops, counters)",
    ],
    failurePoints: [
      "K-map grouping errors",
      "Clock transition edge confusion",
      "Active-high vs active-low signals",
      "Don't-care condition handling",
    ],
    strategicAdvice:
      "Master K-maps before moving to circuits. Always double-check for logic inversions (bubbles on gates). Simulate everything before claiming it works.",
    youtubeResources: [
      {
        channel: "Fakhar STEM Sphere",
        title: "Digital Logic Design Complete",
        url: "https://www.youtube.com/@FakharStemSphere",
        priority: "PRIMARY",
      },
      {
        channel: "Shams Farooq",
        title: "DLD Tutorials",
        url: "https://www.youtube.com/@sunillumesthemoon",
        priority: "PRIMARY",
      },
      {
        channel: "Neso Academy",
        title: "Digital Electronics",
        url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRjMH3mWf6kwqiTbT798eAOm",
        priority: "SECONDARY",
      },
    ],
    bookResources: [
      {
        title: "Digital Design and Computer Architecture",
        author: "Harris & Harris",
        chapters: [
          "1-3 (Boolean algebra, gates, combinational logic)",
          "4 (Sequential logic)",
        ],
      },
      {
        title: "Fundamentals of Logic Design",
        author: "Charles H. Roth",
        chapters: ["2-4 (K-maps, circuits)"],
      },
    ],
    learningPath: [
      "Watch Fakhar STEM Sphere DLD series - Boolean algebra and logic gates",
      "Practice truth tables and Boolean simplification",
      "Master K-map technique: practice 2, 3, 4-variable maps extensively",
      "Design combinational circuits (adders, multiplexers) with group",
      "Study sequential circuits: flip-flops, state diagrams, counters",
      "Simulate circuits using online tools (CircuitVerse, Logisim)",
      "Solve FAST DLD past papers (last 3 years)",
    ],
    groupStudyMethods: [
      "Build and test logic circuits in lab groups",
      "Group quizzes on truth tables and logic simplification",
      "Collaborative K-map solving sessions on whiteboard",
      "Peer review of circuit designs",
    ],
    verificationSteps: [
      "Simplify a Boolean expression using K-map correctly",
      "Construct a circuit that matches a given truth table",
      "Simulate a circuit and verify output matches expected truth table",
    ],
    examStrategies: [
      "Memorize common logic identities and gate truth tables",
      "Solve FAST DLD past problems (K-maps, state diagrams)",
      "Practice drawing K-maps by hand",
      "Double-check for logic bubbles in diagrams",
    ],
  },

  {
    code: "MT1008",
    name: "Multivariable Calculus",
    semester: 2,
    creditHours: "3+0",
    focusAreas: [
      "Partial derivatives",
      "Multiple integrals",
      "Vector calculus (gradient, divergence, curl)",
      "Line and surface integrals",
    ],
    failurePoints: [
      "Partial derivative notation confusion",
      "Integration order in multiple integrals",
      "Coordinate transformations (polar, cylindrical, spherical)",
    ],
    strategicAdvice:
      "Visualize everything in 3D. Practice coordinate transformations until they're automatic. Don't skip the Jacobian.",
    youtubeResources: [
      {
        channel: "Math with Mariyam",
        url: "https://www.youtube.com/channel/UC_placeholder",
        priority: "PRIMARY",
      },
      {
        channel: "Bushra's Coaching",
        url: "https://www.youtube.com/@bushrascoaching2035",
        priority: "PRIMARY",
      },
      {
        channel: "Khan Academy",
        title: "Multivariable Calculus",
        url: "https://www.khanacademy.org/math/multivariable-calculus",
        priority: "SECONDARY",
      },
    ],
    bookResources: [
      {
        title: "Calculus: Early Transcendentals",
        author: "James Stewart",
        chapters: ["14-16 (Partial derivatives, multiple integrals, vector calculus)"],
      },
      {
        title: "Thomas' Calculus",
        author: "George B. Thomas",
        chapters: ["13-16 (Multivariable functions, integration)"],
      },
    ],
    learningPath: [
      "Watch Math with Mariyam MVC series - partial derivatives and applications",
      "Practice gradient, directional derivative problems",
      "Master double and triple integrals: practice integration order changes",
      "Study vector calculus: gradient, divergence, curl with geometric intuition",
      "Use visualization tools (3D graphing) with group",
      "Solve FAST MVC past papers",
    ],
    groupStudyMethods: [
      "Group problem-solving: tackle complex MVC problems together",
      "Peer teaching: each member explains one MVC concept",
      "Use 3D visualization software collaboratively (GeoGebra 3D)",
    ],
    verificationSteps: [
      "Compute a partial derivative and verify with peer",
      "Evaluate a double/triple integral correctly",
      "Score 100% on a practice MVC quiz",
    ],
    examStrategies: [
      "Memorize partial derivative rules and integration formulas",
      "Practice coordinate transformations (Jacobian)",
      "Solve FAST MVC past papers by hand, timed",
    ],
  },
];
