import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        education: resolve(__dirname, "education.html"),
        skills: resolve(__dirname, "skills.html"),
        certificates: resolve(__dirname, "certificates.html"),
        projects: resolve(__dirname, "projects.html"),
        hobbies: resolve(__dirname, "hobbies.html"),
        cv: resolve(__dirname, "cv.html"),
        contact: resolve(__dirname, "contact.html"),
      },
    },
  },
});
