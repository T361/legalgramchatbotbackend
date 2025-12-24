// ============================================================================
// FAST ROADMAP - COMPREHENSIVE SUBJECT DATA
// The Zero-Dependency Failover: This data is embedded in the build
// If MongoDB Atlas is unreachable, the app falls back to this JSON
// Enhanced with complete YouTube channels and learning pathways
// ============================================================================

import { Subject } from "@/types";

/**
 * Static subjects data - The Truth Source
 * Curated from the Kernel Architectural Brief
 */
export const staticSubjects: Subject[] = [
  // =========================================================================
  // CS1002 - PROGRAMMING FUNDAMENTALS
  // =========================================================================
  {
    code: "CS1002",
    name: "Programming Fundamentals",
    rigor: "Critical",
    rigorDescription: 'The "Weeder" Course',
    category: "Programming",
    semester: 1,
    creditHours: 4,
    stack: "C++ (Strict)",
    failurePoints: [
      "Pointers & Memory: Stack vs Heap, manual allocation (new/delete), pointer arithmetic",
      "Loops & Logic: Nested loops (pattern printing) without debugger assistance",
      "Arrays & Strings: Manual C-string manipulation, null terminator understanding",
      "File Handling: Binary vs Text files in C++",
    ],
    strategicAdvice:
      "Do not touch std::string until you have manually iterated through a char array and found the null terminator yourself. If you cannot draw the memory map of a pointer-to-pointer relationship on a whiteboard, you do not understand it. IntelliSense is a crutch; code on paper first. The lab exam will not give you Copilot.",
    resources: [
      {
        type: "Primary Textbook",
        title: "C++ How to Program",
        author: "Deitel & Deitel (10th Edition)",
        relevance:
          "Required for its exhaustive detail on standard library internals and memory management.",
        url: "https://www.amazon.com/How-Program-10th-Paul-Deitel/dp/0134448235",
      },
      {
        type: "Secondary Textbook",
        title: "Problem Solving with C++",
        author: "Walter Savitch",
        relevance: "Excellent for the algorithmic side of problem-solving.",
        url: "https://www.pearson.com/en-us/subject-catalog/p/problem-solving-with-c/P200000003294",
      },
      {
        type: "Video Lecture",
        title: "Introduction to Computing",
        author: "Recluze (Dr. Nauman)",
        relevance:
          "Legendary within FAST for explaining the philosophy of pointers and memory, not just syntax.",
        url: "https://www.youtube.com/@recluze",
      },
      {
        type: "Logic Building",
        title: "C++ DSA Playlist",
        author: "Apna College",
        relevance:
          "Specifically for logic building patterns (star patterns, loops) which are frequent exam questions.",
        url: "https://www.youtube.com/@ApnaCollegeOfficial",
      },
      {
        type: "Syntax Bridge",
        title: "C++ Tutorials",
        author: "CodeWithHarry",
        relevance:
          "Rapid syntax acquisition in Hindi/Urdu, acting as a bridge for students struggling with English lectures.",
        url: "https://www.youtube.com/@CodeWithHarry",
      },
      {
        type: "Practice Platform",
        title: "HackerRank C++ Track",
        author: "HackerRank",
        relevance:
          "Mandated for syntax familiarity and automated testing experience.",
        url: "https://www.hackerrank.com/domains/cpp",
      },
    ],
    roadmap: [
      {
        phase: 1,
        title: "The Metal",
        description:
          "Variables, Data Types, Binary representation, Flowcharts",
      },
      {
        phase: 2,
        title: "Control Flow",
        description: "if/else, switch, while, for",
        checkpoint: "Print a Diamond Pattern using nested loops",
      },
      {
        phase: 3,
        title: "Modularization",
        description: "Functions, Pass-by-Value vs. Pass-by-Reference",
      },
      {
        phase: 4,
        title: "The Barrier",
        description: "Arrays (1D/2D) and POINTERS",
        criticalState: "Confusion between *ptr and &ptr",
      },
      {
        phase: 5,
        title: "Structures & File Handling",
        description: "struct, binary file I/O, fstream",
      },
    ],
  },

  // =========================================================================
  // CS1004 - OBJECT ORIENTED PROGRAMMING
  // =========================================================================
  {
    code: "CS1004",
    name: "Object Oriented Programming",
    rigor: "High",
    rigorDescription: "The Transition to Architecture",
    category: "Programming",
    semester: 2,
    creditHours: 4,
    stack: "C++ / SFML",
    failurePoints: [
      "Polymorphism: Virtual functions, v-tables, pure virtual functions",
      "Inheritance: The Diamond problem (Multiple Inheritance), composition vs inheritance",
      "Memory Management in Classes: Deep copy vs Shallow copy (Copy Constructors)",
      'Rule of Three: Destructor, Copy Constructor, Assignment Operator - failure leads to memory leaks',
    ],
    strategicAdvice:
      "Classes are not just containers for variables; they are contracts. If you don't write a Copy Constructor when your class has a pointer member, your program will crash, and you will get a zero. Learn the Rule of Three. Your game project is not about graphics; it's about whether your 'Player' class correctly inherits from 'Entity'. Draw the UML before writing a single line of code.",
    resources: [
      {
        type: "Primary Textbook",
        title: "Object-Oriented Programming in C++",
        author: "Robert Lafore",
        relevance:
          'Widely considered the "Bible" for OOP in C++ at FAST due to its clear examples (e.g., elevator simulation).',
        url: "https://www.amazon.com/Object-Oriented-Programming-4th-Robert-Lafore/dp/0672323087",
      },
      {
        type: "Secondary Textbook",
        title: "C++ How to Program",
        author: "Deitel & Deitel",
        relevance:
          "Specifically for chapters on Operator Overloading and Templates.",
        url: "https://www.amazon.com/How-Program-10th-Paul-Deitel/dp/0134448235",
      },
      {
        type: "Video Lecture",
        title: "Object Oriented Programming",
        author: "Recluze",
        relevance:
          "Focuses on the spirit of OOP and design patterns, essential for the project.",
        url: "http://recluze.net/",
      },
      {
        type: "Project Library",
        title: "SFML (Simple and Fast Multimedia Library)",
        author: "SFML Team",
        relevance:
          "The standard library used for FAST-NU OOP game projects. Documentation mastery is required.",
        url: "https://www.sfml-dev.org/",
      },
      {
        type: "Advanced Concept",
        title: "C++ Series",
        author: "The Cherno",
        relevance:
          "For advanced understanding of v-tables and memory layout of classes (highly technical).",
        url: "https://www.youtube.com/c/TheChernoProject",
      },
      {
        type: "YouTube",
        title: "CodeBeauty (OOP Series)",
        author: "CodeBeauty",
        relevance:
          "Clear, beginner-friendly explanations of OOP concepts in C++ with practical examples and visual demonstrations.",
        url: "https://www.youtube.com/@CodeBeauty",
      },
      {
        type: "Video Lecture",
        title: "OOP Fundamentals",
        author: "CodeWithHarry",
        relevance:
          "Hindi/English tutorial series covering OOP basics to advanced topics with hands-on coding examples.",
        url: "https://www.youtube.com/@CodeWithHarry",
      },

    ],
    roadmap: [
      {
        phase: 1,
        title: "Classes & Objects",
        description:
          "Class definition, access specifiers, constructors, destructors",
      },
      {
        phase: 2,
        title: "Memory Management",
        description:
          "Dynamic allocation in classes, the Rule of Three",
        checkpoint: "Implement a String class with deep copy",
      },
      {
        phase: 3,
        title: "Inheritance",
        description:
          "Single, Multiple, Multilevel inheritance, is-a vs has-a",
      },
      {
        phase: 4,
        title: "Polymorphism",
        description: "Virtual functions, abstract classes, v-tables",
        criticalState: "Not understanding virtual destructor necessity",
      },
      {
        phase: 5,
        title: "Operator Overloading",
        description: "Overloading arithmetic, stream, and assignment operators",
      },
      {
        phase: 6,
        title: "Semester Project",
        description: "SFML Game or Management System implementation",
      },
    ],
    projectIdeas: [
      "Library Management System: Demonstrates file handling and basic CRUD operations",
      "SFML Game (Space Shooter, Snake): Tests real-time object management, polymorphism, and event handling",
      "Hospital Management System: Tests complex relationships (Patient-Doctor-Appointment) and file persistence",
    ],
  },

  // =========================================================================
  // EE1005 - DIGITAL LOGIC DESIGN
  // =========================================================================
  {
    code: "EE1005",
    name: "Digital Logic Design",
    rigor: "Moderate",
    rigorDescription: "Hardware Abstraction",
    category: "Hardware",
    semester: 2,
    creditHours: 4,
    failurePoints: [
      "K-Maps (3, 4, 5 variables): Grouping errors are fatal",
      "Sequential Logic: Flip-Flops (JK, D, T), timing diagram analysis",
      "State Machines: Mealy vs Moore confusion",
      "Lab Work: Debugging wiring on trainer boards with 74LS series ICs",
    ],
    strategicAdvice:
      "A K-Map error is fatal. One wrong grouping destroys the entire circuit logic. Do not memorize the flip-flop excitation tables; derive them. If you can't trace the clock edge on a timing diagram, you will fail Sequential Circuits. In the lab, keep your wiring clean; a 'bird's nest' on the breadboard is a debugging nightmare.",
    resources: [
      {
        type: "Video Lecture",
        title: "Digital Electronics",
        author: "Neso Academy",
        relevance:
          "The absolute gold standard. Playlists on Flip-Flops, K-Maps, and Number Systems are exhaustive and aligned with the curriculum.",
        url: "https://www.youtube.com/@NesoacademyEnglish",
      },
      {
        type: "Video Lecture",
        title: "DLD Complete Series",
        author: "Fakhar STEM Sphere",
        relevance:
          "FAST-NU lecturer's complete DLD playlist. Directly aligned with FAST curriculum and exam patterns.",
        url: "https://www.youtube.com/@FakharStemSphere",
        source: "PRIMARY - FAST-NU Faculty",
      },
      {
        type: "Video Lecture",
        title: "DLD Tutorials",
        author: "Shams Farooq",
        relevance:
          "Detailed DLD explanations with focus on K-maps and sequential circuits.",
        url: "https://www.youtube.com/@sunillumesthemoon",
        source: "PRIMARY",
      },
      {
        type: "Primary Textbook",
        title: "Digital Fundamentals",
        author: "Thomas L. Floyd",
        relevance:
          "The standard for clear circuit diagrams and practical explanations.",
        url: "https://www.amazon.com/Digital-Fundamentals-11th-Thomas-Floyd/dp/0132737965",
      },
      {
        type: "Secondary Textbook",
        title: "Digital Design",
        author: "Morris Mano",
        relevance:
          "More theoretical; essential for understanding the formal Boolean algebra behind the circuits.",
        url: "https://www.amazon.com/Digital-Design-Introduction-Verilog-Edition/dp/0134549899",
      },
      {
        type: "Quick Revision",
        title: "Gate Smashers",
        author: "Gate Smashers",
        relevance:
          "Excellent for quick revision of Number Systems and Boolean Algebra concepts before exams.",
        url: "https://www.youtube.com/c/GateSmashers",
      },
    ],
    roadmap: [
      {
        phase: 1,
        title: "Number Systems",
        description: "Binary, Hex, Octal, 2's Complement arithmetic",
      },
      {
        phase: 2,
        title: "Boolean Algebra",
        description: "Logic Gates, DeMorgan's Laws, Simplification",
      },
      {
        phase: 3,
        title: "Combinational Logic",
        description: "K-Maps, Designing Adders/Subtractors",
        checkpoint: "Simplify a 4-variable Boolean expression using K-Map",
      },
      {
        phase: 4,
        title: "MSI Components",
        description: "Decoders, Encoders, Multiplexers (MUX)",
      },
      {
        phase: 5,
        title: "Sequential Logic",
        description: "Latches, Flip-Flops, Characteristic Equations",
        criticalState: "Confusing level-triggered vs edge-triggered",
      },
      {
        phase: 6,
        title: "Counters & Registers",
        description: "Design of Synchronous/Asynchronous Counters",
      },
    ],
  },

  // =========================================================================
  // CS1005 - DISCRETE STRUCTURES
  // =========================================================================
  {
    code: "CS1005",
    name: "Discrete Structures",
    rigor: "Very High",
    rigorDescription: "The Mathematics of Computer Science",
    category: "Mathematics",
    semester: 2,
    creditHours: 3,
    failurePoints: [
      "Mathematical Induction: Skipping this destroys Algorithms course next year",
      "Logic & Proofs: Propositional Logic, Predicate Logic",
      "Graph Theory: Most important for technical interviews (Google/Microsoft)",
      "Counting: Permutations, Combinations, Pigeonhole Principle",
    ],
    strategicAdvice:
      "This is not 'math' like Calculus; this is logic. If you skip Mathematical Induction, you will fail Analysis of Algorithms next year. Treat every proof like a debugging session: find the logical flaw. Graph Theory is the most important topic for your future technical interviews (Google/Microsoft ask graph questions). Do the odd-numbered exercises in Rosen.",
    resources: [
      {
        type: "Primary Textbook",
        title: "Discrete Mathematics and Its Applications",
        author: "Kenneth H. Rosen",
        relevance:
          "The global standard and explicitly used at FAST. Contains the definitive exercises.",
        url: "https://www.amazon.com/Discrete-Mathematics-Applications-Kenneth-Rosen/dp/0073383090",
      },
      {
        type: "Video Lecture",
        title: "Discrete Math",
        author: "Dr. Trefor Bazett",
        relevance:
          "High production value, clear explanations of Logic, Sets, and Proofs. Visually engaging.",
        url: "https://www.youtube.com/c/drtreforbazett",
      },
      {
        type: "Problem Solving",
        title: "TheTrevTutor",
        author: "TheTrevTutor",
        relevance:
          "Excellent for walkthroughs of specific proof problems and examples.",
        url: "https://www.youtube.com/c/Trevtutor",
      },
      {
        type: "Conceptual Base",
        title: "Graph Theory Playlist",
        author: "Neso Academy",
        relevance:
          "Strong content on Graph Theory matching the engineering perspective.",
        url: "https://www.youtube.com/c/nesoacademy",
      },
    ],
    roadmap: [
      {
        phase: 1,
        title: "Logic",
        description: "Propositional Equivalences, Quantifiers, Truth Tables",
      },
      {
        phase: 2,
        title: "Proofs",
        description: "Direct, Contraposition, Contradiction, INDUCTION",
        criticalState: "Skipping induction is fatal for future courses",
      },
      {
        phase: 3,
        title: "Sets & Functions",
        description: "Power sets, Cardinality, Growth of Functions",
      },
      {
        phase: 4,
        title: "Number Theory",
        description: "Modular arithmetic, Primes (RSA encryption basics)",
      },
      {
        phase: 5,
        title: "Counting",
        description: "Permutations, Combinations, Pigeonhole Principle",
        checkpoint: "Solve 10 counting problems without formula lookup",
      },
      {
        phase: 6,
        title: "Graphs & Trees",
        description: "Connectivity, Isomorphism, Spanning Trees",
      },
    ],
  },

  // =========================================================================
  // CS2001 - DATA STRUCTURES
  // =========================================================================
  {
    code: "CS2001",
    name: "Data Structures",
    rigor: "Extreme",
    rigorDescription: 'The "Career Maker"',
    category: "Programming",
    semester: 3,
    creditHours: 4,
    stack: "C++ (No STL initially)",
    failurePoints: [
      "Pointer manipulation in Linked Lists: Segmentation Faults",
      "AVL Tree Rotations: Complex and error-prone",
      "Recursion: Cannot trace recursive tree traversal",
      "Graph Algorithms: BFS, DFS, Dijkstra implementation",
    ],
    strategicAdvice:
      "Segmentation faults are your best friends; they tell you exactly where your logic failed. If you use the STL in this course, you are cheating yourself. You must implement struct Node manually. Master Recursion; if you can't trace a recursive tree traversal, you can't pass. In the final exam, you will likely be asked to implement a Linked List on a piece of paper. Visualize the pointers.",
    resources: [
      {
        type: "Primary Textbook",
        title: "Data Structures and Algorithm Analysis in C++",
        author: "Mark Allen Weiss",
        relevance:
          "Rigorous, code-heavy, and aligns with the implementation focus of FAST.",
        url: "https://www.amazon.com/Data-Structures-Algorithm-Analysis-C/dp/013284737X",
      },
      {
        type: "Alternative Text",
        title: "Data Structures with C",
        author: "Seymour Lipschutz",
        relevance:
          "Good for visual learners, though code examples are less rigorous than Weiss.",
        url: "https://www.amazon.com/Structures-Seymour-Lipschutz-Schaums-Outline/dp/0070601682",
      },
      {
        type: "Video Lecture (Deep Dive Course)",
        title: "Abdul Bari - Data Structure & Algorithm Full Course",
        author: "Abdul Bari",
        relevance:
          "The undisputed king of Algorithms explanation. Complete deep-dive course with AVL rotations and Graph traversals.",
        url: "https://archive.org/details/shart-s-data-structure-algorithm-course-abdul-bari",
      },
      {
        type: "Video Lecture (YouTube Channel)",
        title: "Algorithms",
        author: "Abdul Bari",
        relevance:
          "Individual topic videos and explanations. Essential supplement to the full course.",
        url: "https://www.youtube.com/@abdul_bari",
      },
      {
        type: "Pointer Logic",
        title: "Data Structures",
        author: "mycodeschool",
        relevance:
          "Excellent for low-level pointer implementation details of Linked Lists.",
        url: "https://www.youtube.com/@mycodeschool",
      },
      {
        type: "Practice Platform",
        title: "Striver's DSA Sheet",
        author: "Striver (TakeUForward)",
        relevance:
          "Comprehensive problem-solving roadmap with curated questions and solutions.",
        url: "https://takeuforward.org/",
      },
      {
        type: "YouTube",
        title: "Apna College DSA (C++) Playlist",
        author: "Apna College",
        relevance:
          "Comprehensive C++ DSA playlist in Hindi/English. Excellent for beginners building foundational understanding.",
        url: "https://www.youtube.com/watch?v=R-CKBYnOv1U&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&index=58",
      },
    ],
    roadmap: [
      {
        phase: 1,
        title: "Complexity Analysis",
        description: "Big-O notation, Asymptotic analysis",
      },
      {
        phase: 2,
        title: "Linked Lists",
        description:
          "Singly, Doubly, Circular - The foundation of dynamic memory",
        checkpoint: "Implement all three variants from scratch",
      },
      {
        phase: 3,
        title: "Stacks & Queues",
        description: "Infix/Postfix conversion, BFS basis",
      },
      {
        phase: 4,
        title: "Recursion",
        description: 'The "Divide and Conquer" mindset',
        criticalState: "Cannot visualize recursive call stack",
      },
      {
        phase: 5,
        title: "Trees",
        description: "Binary Trees, BSTs, Balancing (AVL/Red-Black)",
      },
      {
        phase: 6,
        title: "Heaps & Hashing",
        description: "Priority Queues, Hash Tables, Collision Resolution",
      },
      {
        phase: 7,
        title: "Graphs",
        description: "Adjacency Matrix vs List, Pathfinding algorithms",
      },
    ],
  },

  // =========================================================================
  // SE1001 - INTRODUCTION TO SOFTWARE ENGINEERING
  // =========================================================================
  {
    code: "SE1001",
    name: "Introduction to Software Engineering",
    rigor: "Moderate",
    rigorDescription: "Conceptual Foundation",
    category: "Engineering",
    semester: 3,
    creditHours: 3,
    failurePoints: [
      "SDLC Models: Not understanding when to use Waterfall vs Agile",
      "Requirements Engineering: Poor SRS documentation",
      "UML Diagrams: Class diagrams, Use Case diagrams errors",
      "Project Management: Ignoring risk management",
    ],
    strategicAdvice:
      "SE is not just coding; it's managing complexity. Use SCRUM even for your personal projects. Document everything as if you're handing it to a stranger. The 'Process' saves you when the 'Code' breaks. Learn how to write a good SRS now, or you will suffer during your Final Year Project.",
    resources: [
      {
        type: "Video Lecture",
        title: "Introduction to Software Engineering",
        author: "Bilal Khalid Dar",
        relevance:
          "EXCLUSIVE resource for SE1001. Complete course coverage tailored for FAST-NU students.",
        url: "https://www.youtube.com/@bilalkhalid6552",
        source: "PRIMARY - EXCLUSIVE"
      },
      {
        type: "Primary Textbook",
        title: "Software Engineering: A Practitioner's Approach",
        author: "Roger S. Pressman",
        relevance: "The industry standard and prescribed textbook.",
        url: "https://www.amazon.com/Software-Engineering-Practitioners-Roger-Pressman/dp/0078022126",
      },
      {
        type: "Secondary Textbook",
        title: "Clean Code",
        author: "Robert C. Martin (Uncle Bob)",
        relevance:
          'Essential reading for the "Craftsmanship" aspect and writing maintainable code.',
        url: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882",
      },
      {
        type: "Concept",
        title: "SCRUM Guide",
        author: "Scrum.org",
        relevance:
          "Understanding Sprints, Backlogs, and Standups is crucial for group projects.",
        url: "https://scrumguides.org/",
      },
    ],
    roadmap: [
      {
        phase: 1,
        title: "Software Process",
        description: "SDLC, Waterfall, Iterative models",
      },
      {
        phase: 2,
        title: "Agile & Scrum",
        description: "Sprints, User Stories, Backlogs",
        checkpoint: "Run a 1-week sprint for a personal project",
      },
      {
        phase: 3,
        title: "Requirements Engineering",
        description: "Elicitation, Analysis, SRS Documentation",
      },
      {
        phase: 4,
        title: "Design",
        description: "UML Class Diagrams, Sequence Diagrams, Architecture",
      },
      {
        phase: 5,
        title: "Testing & Quality",
        description: "Unit Testing, Integration Testing, QA principles",
      },
      {
        phase: 6,
        title: "Project Management",
        description: "Gantt Charts, Risk Management, Team Dynamics",
      },
    ],
  },

  // =========================================================================
  // MT1004 - LINEAR ALGEBRA
  // =========================================================================
  {
    code: "MT1004",
    name: "Linear Algebra",
    rigor: "Moderate",
    rigorDescription: "AI Foundation",
    category: "Mathematics",
    semester: 2,
    creditHours: 3,
    failurePoints: [
      "Matrix Operations: Row reduction errors compound quickly",
      "Eigenvalues & Eigenvectors: Core concept for ML/AI",
      "Vector Spaces: Abstract concepts require visualization",
      "Linear Transformations: Geometric intuition is key",
    ],
    strategicAdvice:
      "Linear Algebra is the foundation of Machine Learning and Computer Graphics. If you want to work in AI, master this. Eigenvalues will haunt you in every ML interview. Use 3Blue1Brown's Essence of Linear Algebra - it will change how you see matrices forever.",
    resources: [
      {
        type: "Video Lecture",
        title: "Essence of Linear Algebra",
        author: "3Blue1Brown",
        relevance:
          "The most visually intuitive explanation of linear algebra concepts. Essential viewing.",
        url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab",
      },
      {
        type: "Primary Textbook",
        title: "Linear Algebra and Its Applications",
        author: "David C. Lay",
        relevance:
          "Standard textbook with clear explanations and good exercises.",
        url: "https://www.amazon.com/Linear-Algebra-Its-Applications-5th/dp/032198238X",
      },
      {
        type: "Video Lecture",
        title: "MIT 18.06 Linear Algebra",
        author: "Gilbert Strang",
        relevance: "The legendary MIT course. Deep understanding guaranteed.",
        url: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
      },
    ],
    roadmap: [
      {
        phase: 1,
        title: "Systems of Equations",
        description: "Gaussian elimination, Row echelon form",
      },
      {
        phase: 2,
        title: "Matrix Algebra",
        description: "Operations, Inverses, Determinants",
      },
      {
        phase: 3,
        title: "Vector Spaces",
        description: "Span, Linear Independence, Basis, Dimension",
        criticalState: "Abstract concepts need geometric visualization",
      },
      {
        phase: 4,
        title: "Linear Transformations",
        description: "Kernel, Range, Matrix Representations",
      },
      {
        phase: 5,
        title: "Eigenvalues & Eigenvectors",
        description: "Characteristic equations, Diagonalization",
        checkpoint: "Compute eigenvalues for 3x3 matrices by hand",
      },
      {
        phase: 6,
        title: "Applications",
        description: "Least squares, SVD introduction",
      },
    ],
  },

  // =========================================================================
  // MT1003 - CALCULUS AND ANALYTICAL GEOMETRY
  // =========================================================================
  {
    code: "MT1003",
    name: "Calculus and Analytical Geometry",
    rigor: "High",
    rigorDescription: "Foundation of Advanced Mathematics",
    category: "Mathematics",
    semester: 1,
    creditHours: 3,
    failurePoints: [
      "Limit evaluation techniques",
      "Chain rule application",
      "Integration by parts/substitution",
      "Forgetting constant of integration",
      "Algebraic simplification errors"
    ],
    strategicAdvice:
      "Practice derivative and integral formulas until they become second nature. Visualize functions using graphing tools. Never skip steps in algebraic manipulation. Calculus is the language of change - understand it conceptually, not just mechanically.",
    resources: [
      {
        type: "Video Lecture",
        title: "Calculus Complete Series",
        author: "The Mathematics Outlet",
        relevance:
          "Comprehensive calculus coverage with clear step-by-step problem solving. User-verified resource.",
        url: "https://www.youtube.com/@TheMathematicsOutlet",
        source: "PRIMARY"
      },
      {
        type: "Video Lecture",
        title: "Calculus Fundamentals",
        author: "Bushra's Coaching",
        relevance:
          "Excellent explanations for BS-level calculus. User's preferred math resource.",
        url: "https://www.youtube.com/@bushrascoaching2035",
        source: "PRIMARY"
      },
      {
        type: "Video Lecture",
        title: "AP Calculus AB",
        author: "Khan Academy",
        relevance:
          "Step-by-step practice problems with instant feedback. Comprehensive coverage.",
        url: "https://www.khanacademy.org/math/ap-calculus-ab"
      },
      {
        type: "Primary Textbook",
        title: "Thomas' Calculus",
        author: "George B. Thomas",
        relevance: "Standard calculus textbook with excellent exercises.",
        url: "https://www.pearson.com/en-us/subject-catalog/p/thomasdean-thomass-calculus/P200000006233"
      },
      {
        type: "Secondary Textbook",
        title: "Calculus: Early Transcendentals",
        author: "James Stewart",
        relevance: "Alternative perspective with strong application focus.",
        url: "https://www.cengage.com/c/calculus-early-transcendentals-9e-stewart"
      }
    ],
    roadmap: [
      {
        phase: 1,
        title: "Limits and Continuity",
        description: "Understanding the foundation of calculus",
        checkpoint: "Evaluate limits using algebraic techniques and L'Hôpital's rule"
      },
      {
        phase: 2,
        title: "Differentiation",
        description: "Power, product, quotient, chain rules",
        checkpoint: "Solve derivative problems involving all rules"
      },
      {
        phase: 3,
        title: "Applications of Derivatives",
        description: "Optimization, related rates, curve sketching",
        criticalState: "Related rates problems require careful variable identification"
      },
      {
        phase: 4,
        title: "Integration",
        description: "Substitution, by parts, partial fractions",
        checkpoint: "Master all integration techniques"
      },
      {
        phase: 5,
        title: "Applications of Integration",
        description: "Area, volume, arc length",
        checkpoint: "Set up and evaluate definite integrals for real-world problems"
      }
    ]
  },

  // =========================================================================
  // MT1008 - MULTIVARIABLE CALCULUS
  // =========================================================================
  {
    code: "MT1008",
    name: "Multivariable Calculus",
    rigor: "Very High",
    rigorDescription: "3D Mathematical Reasoning",
    category: "Mathematics",
    semester: 2,
    creditHours: 3,
    failurePoints: [
      "Partial derivative notation confusion",
      "Integration order in multiple integrals",
      "Coordinate transformations (polar, cylindrical, spherical)",
      "Visualizing 3D surfaces and regions"
    ],
    strategicAdvice:
      "Visualize everything in 3D. Use graphing software extensively. Practice coordinate transformations until they're automatic. The Jacobian is not optional - master it.",
    resources: [
      {
        type: "Video Lecture",
        title: "Multivariable Calculus Series",
        author: "Math with Mariyam",
        relevance:
          "User's preferred resource for MVC. Clear explanations with detailed examples.",
        url: "https://www.youtube.com/@MathwithMariyam",
        source: "PRIMARY"
      },
      {
        type: "Video Lecture",
        title: "MVC Tutorials",
        author: "Bushra's Coaching",
        relevance:
          "Excellent for BS-level multivariable calculus. User-verified resource.",
        url: "https://www.youtube.com/@bushrascoaching2035",
        source: "PRIMARY"
      },
      {
        type: "Video Lecture",
        title: "Multivariable Calculus",
        author: "Khan Academy",
        relevance: "Comprehensive coverage with practice exercises.",
        url: "https://www.khanacademy.org/math/multivariable-calculus"
      },
      {
        type: "Primary Textbook",
        title: "Calculus: Early Transcendentals",
        author: "James Stewart",
        relevance: "Chapters 14-16 cover all MVC topics thoroughly.",
        url: "https://www.cengage.com/c/calculus-early-transcendentals-9e-stewart"
      }
    ],
    roadmap: [
      {
        phase: 1,
        title: "Partial Derivatives",
        description: "Functions of multiple variables, partial differentiation",
        checkpoint: "Compute partial derivatives and gradients"
      },
      {
        phase: 2,
        title: "Multiple Integrals",
        description: "Double and triple integrals, changing order",
        criticalState: "Integration order changes require careful region analysis"
      },
      {
        phase: 3,
        title: "Vector Calculus",
        description: "Gradient, divergence, curl",
        checkpoint: "Understand geometric meaning of each operation"
      },
      {
        phase: 4,
        title: "Coordinate Transformations",
        description: "Polar, cylindrical, spherical coordinates",
        checkpoint: "Master Jacobian determinant computation"
      },
      {
        phase: 5,
        title: "Line and Surface Integrals",
        description: "Green's theorem, Stokes' theorem, Divergence theorem"
      }
    ]
  },

  // =========================================================================
  // MT2005 - PROBABILITY AND STATISTICS
  // =========================================================================
  {
    code: "MT2005",
    name: "Probability and Statistics",
    rigor: "High",
    rigorDescription: "Uncertainty Quantification",
    category: "Mathematics",
    semester: 4,
    creditHours: 3,
    failurePoints: [
      "Conditional probability confusion",
      "Distribution identification (binomial, normal, Poisson)",
      "Hypothesis test interpretation (p-value, significance level)",
      "Variance calculation errors"
    ],
    strategicAdvice:
      "Probability is not intuition - it's rigorous counting. Master Bayes' theorem; it's the foundation of machine learning. Hypothesis testing is everywhere in research - understand Type I and Type II errors deeply.",
    resources: [
      {
        type: "Video Lecture",
        title: "Probability and Statistics Series",
        author: "Math with Mariyam",
        relevance:
          "User's preferred resource for probability. Clear explanations of complex concepts.",
        url: "https://www.youtube.com/@placeholder_mathwithmariyam",
        source: "PRIMARY"
      },
      {
        type: "Video Lecture",
        title: "Probability and Statistics",
        author: "Bushra's Coaching",
        relevance:
          "Excellent for BS-level probability and statistics. User-verified resource.",
        url: "https://www.youtube.com/@bushrascoaching2035",
        source: "PRIMARY"
      },
      {
        type: "Video Lecture",
        title: "Statistics and Probability",
        author: "Khan Academy",
        relevance: "Comprehensive coverage with interactive exercises.",
        url: "https://www.khanacademy.org/math/statistics-probability"
      },
      {
        type: "Primary Textbook",
        title: "Probability and Statistics for Engineers and Scientists",
        author: "Walpole et al.",
        relevance: "Standard engineering statistics textbook.",
        url: "https://www.pearson.com/en-us/subject-catalog/p/probability-statistics-for-engineers-scientists/P200000003484"
      }
    ],
    roadmap: [
      {
        phase: 1,
        title: "Probability Foundations",
        description: "Sample spaces, events, conditional probability, Bayes' theorem",
        checkpoint: "Solve complex conditional probability problems"
      },
      {
        phase: 2,
        title: "Random Variables",
        description: "Discrete and continuous distributions",
        criticalState: "Identifying correct distribution is critical"
      },
      {
        phase: 3,
        title: "Expectation and Variance",
        description: "Moments, moment generating functions",
        checkpoint: "Compute expected values and variances for all distributions"
      },
      {
        phase: 4,
        title: "Common Distributions",
        description: "Binomial, Poisson, Normal, Exponential",
        checkpoint: "Know when to apply each distribution"
      },
      {
        phase: 5,
        title: "Hypothesis Testing",
        description: "Null hypothesis, p-values, confidence intervals",
        criticalState: "Interpreting p-values correctly is essential"
      }
    ]
  },

  // =========================================================================
  // NS1001 - APPLIED PHYSICS
  // =========================================================================
  {
    code: "NS1001",
    name: "Applied Physics",
    rigor: "Moderate",
    rigorDescription: "Physical Foundations",
    category: "Theory",
    semester: 1,
    creditHours: 3,
    failurePoints: [
      "Vector decomposition and resolution",
      "Free body diagram construction",
      "Circuit analysis using Kirchhoff's laws",
      "Unit conversion and dimensional analysis"
    ],
    strategicAdvice:
      "Always draw diagrams first. Physics is visual. Practice dimensional analysis to catch errors before they propagate. Understand concepts, don't just memorize formulas.",
    resources: [
      {
        type: "Video Lecture",
        title: "Fundamentals of Physics Solutions",
        author: "Fundamentals of Physics - Solutions",
        relevance:
          "User's primary physics resource. Step-by-step problem solutions.",
        url: "https://www.youtube.com/@fundamentalsofphysics-solu6464",
        source: "PRIMARY"
      },
      {
        type: "Video Lecture",
        title: "University Physics Tutorials",
        author: "Circus of Physics",
        relevance:
          "Clear explanations of physics concepts at university level.",
        url: "https://www.youtube.com/@CircusofPhysics"
      },
      {
        type: "Primary Textbook",
        title: "Fundamentals of Physics",
        author: "Halliday, Resnick, Walker",
        relevance: "The standard physics textbook for engineering students.",
        url: "https://www.wiley.com/en-us/Fundamentals+of+Physics-p-9781118230718"
      }
    ],
    roadmap: [
      {
        phase: 1,
        title: "Mechanics - Kinematics",
        description: "Motion in one and two dimensions",
        checkpoint: "Solve projectile motion problems"
      },
      {
        phase: 2,
        title: "Mechanics - Dynamics",
        description: "Newton's laws, forces, friction",
        checkpoint: "Draw and analyze free body diagrams"
      },
      {
        phase: 3,
        title: "Work, Energy, Power",
        description: "Conservation of energy, power calculations",
        criticalState: "Energy conservation problems require careful system definition"
      },
      {
        phase: 4,
        title: "Electromagnetism",
        description: "Electric fields, circuits, Kirchhoff's laws",
        checkpoint: "Analyze complex DC circuits"
      },
      {
        phase: 5,
        title: "Waves and Oscillations",
        description: "Simple harmonic motion, wave properties"
      }
    ]
  },

  // =========================================================================
  // EE2003 - COMPUTER ORGANIZATION AND ASSEMBLY LANGUAGE
  // =========================================================================
  {
    code: "EE2003",
    name: "Computer Organization and Assembly Language",
    rigor: "Very High",
    rigorDescription: "Hardware-Software Interface",
    category: "Hardware",
    semester: 3,
    creditHours: 4,
    failurePoints: [
      "Register naming and usage conventions",
      "Memory addressing modes",
      "Stack operations (push/pop) and calling conventions",
      "Branch vs jump instruction distinction"
    ],
    strategicAdvice:
      "Assembly is where you truly understand what your C++ code does. Trace every instruction by hand. Understand the stack deeply - it's the foundation of function calls. Master MIPS/x86 - your OS course builds on this.",
    resources: [
      {
        type: "Video Lecture",
        title: "COAL Complete Course",
        author: "Fakhar STEM Sphere",
        relevance:
          "FAST-NU lecturer's complete COAL course. Directly aligned with curriculum.",
        url: "https://www.youtube.com/@FakharStemSphere",
        source: "PRIMARY - FAST-NU Faculty"
      },
      {
        type: "Video Lecture",
        title: "Official COAL Lectures",
        author: "NUCES Official",
        relevance:
          "Official FAST-NU recorded lectures for COAL.",
        url: "https://www.youtube.com/@placeholder_nuces"
      },
      {
        type: "Primary Textbook",
        title: "Computer Organization and Design",
        author: "Patterson & Hennessy",
        relevance: "The definitive textbook for computer architecture.",
        url: "https://www.elsevier.com/books/computer-organization-and-design-mips-edition/patterson/978-0-12-820109-1"
      },
      {
        type: "Secondary Textbook",
        title: "Assembly Language for x86 Processors",
        author: "Kip Irvine",
        relevance: "Excellent for x86 assembly programming.",
        url: "https://www.pearson.com/en-us/subject-catalog/p/assembly-language-for-x86-processors/P200000003277"
      }
    ],
    roadmap: [
      {
        phase: 1,
        title: "Computer Architecture Basics",
        description: "Von Neumann architecture, CPU components",
        checkpoint: "Understand fetch-decode-execute cycle"
      },
      {
        phase: 2,
        title: "Assembly Language Syntax",
        description: "Registers, instructions, addressing modes",
        criticalState: "Register usage conventions must be memorized"
      },
      {
        phase: 3,
        title: "Control Flow",
        description: "Branches, jumps, loops in assembly",
        checkpoint: "Write assembly programs with loops and conditionals"
      },
      {
        phase: 4,
        title: "Procedures and Stack",
        description: "Function calls, stack frames, calling conventions",
        criticalState: "Stack operations are the foundation of program execution"
      },
      {
        phase: 5,
        title: "Memory and I/O",
        description: "Memory addressing, I/O operations"
      }
    ]
  }
];

/**
 * Get all subjects from static data
 */
export function getAllStaticSubjects(): Subject[] {
  return staticSubjects;
}

/**
 * Get a single subject by code from static data
 */
export function getStaticSubjectByCode(code: string): Subject | undefined {
  return staticSubjects.find(
    (subject) => subject.code.toLowerCase() === code.toLowerCase()
  );
}

/**
 * Get subjects by semester from static data
 */
export function getStaticSubjectsBySemester(semester: number): Subject[] {
  return staticSubjects.filter((subject) => subject.semester === semester);
}

/**
 * Get subjects by category from static data
 */
export function getStaticSubjectsByCategory(category: string): Subject[] {
  return staticSubjects.filter((subject) => subject.category === category);
}
