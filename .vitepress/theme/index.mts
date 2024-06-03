import DefaultTheme from "vitepress/theme";
import type { Theme } from 'vitepress'
import { useData, useRoute } from 'vitepress';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
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
    },
    setup() {
        // Get frontmatter and route
        const { frontmatter } = useData();
        const route = useRoute();
        
        // Obtain configuration from: https://giscus.app/
        giscusTalk({
            repo: 'Riceneeder/university-wiki', 
            repoId: 'R_kgDOMD7Pbg',   
            category: 'Announcements', // default: `General` 
            categoryId: 'DIC_kwDOMD7Pbs4Cf0NN', 
            mapping: 'url', // default: `pathname`
            inputPosition: 'top', // default: `top`
            lang: 'zh-CN', // default: `zh-CN`
            lightTheme: 'light', // default: `light`
            darkTheme: 'transparent_dark', // default: `transparent_dark`
            strict: '1', // default: `false`
            reactionsEnabled:'1',
            emitMetadata:"1",
            loading: 'lazy', // default: `lazy`
            crossorigin: 'anonymous', // default: `anonymous`
            // ...
        }, {
            frontmatter, route
        },
            // Whether to activate the comment area on all pages.
            // The default is true, which means enabled, this parameter can be ignored;
            // If it is false, it means it is not enabled.
            // You can use `comment: true` preface to enable it separately on the page.
            true
        );
    }
} satisfies Theme
