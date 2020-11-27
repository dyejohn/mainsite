import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import Projects from "@/components/Projects";
import FlashCards from "@/components/FlashCards";
import Quizzes from "@/components/Quizzes";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/projects",
        name: "Projects",
        component: Projects
    },
    {
        path: "/flashcards",
        name: "FlashCards",
        component: FlashCards
    },
    {
        path: "/quizzes",
        name: "Quizzes",
        component: Quizzes
    }

];

const routing = createRouter({
    history: createWebHistory(),
    routes,
});

export default routing;