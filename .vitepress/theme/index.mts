import DefaultTheme from "vitepress/theme";
import type { Theme } from 'vitepress'
import UniversitiesLayout from "./UniversitiesLayout.vue"
import UniversitiesInfoCard from "./UniversitiesInfoCard.vue"
import Tags from "./Tags.vue"
import Imgs from "./Imgs.vue"

export default {
    extends: DefaultTheme,
    Layout: UniversitiesLayout,
    enhanceApp({ app }) {
        app.component("UniversitiesInfoCard", UniversitiesInfoCard);
        app.component("Tags", Tags);
        app.component("Imgs", Imgs);
    }
} satisfies Theme
