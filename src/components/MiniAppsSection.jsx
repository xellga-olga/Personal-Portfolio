import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const apps = [
  {
    id: 1,
    title: "Quiz Game",
    image: "./quiz.jpg",
    link: "/mini-apps/quiz",
  },

   { id: 2, title: "Calculator",
     image: "./calculator.jpg",
     link: "/mini-apps/calculator"
   },
  {
    id: 1,
    title: "Quiz Game",
    image: "./quiz.jpg",
    link: "/mini-apps/quiz",
  },

  { id: 2, title: "Calculator",
    image: "./calculator.jpg",
    link: "/mini-apps/calculator"
  },

];

export default function MiniAppsSection() {
  return (
    <section id="mini-apps" className="py-24 px-4 relative">

      <div className="container mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold mb-4 md:text-4xl">
          Mini <span className="text-primary">Apps</span>
        </h2>

        <p className="text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
          Explore a collection of my mini projects. <br />
          Each one is crafted to be engaging, practical, and easy to use.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {apps.map((app, i) => (
            <motion.div
              key={app.id}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-card p-5 rounded-lg shadow-md flex flex-col items-center"
            >
              <img
                src={app.image}
                alt={app.title}
                className="w-46 h-24 rounded-lg object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-center">{app.title}</h3>

              <Link to={app.link}>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(139,92,246,0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="cosmic-button mt-4 px-4 py-2"
                  aria-label={`Play ${app.title}`}
                >
                  Play
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}