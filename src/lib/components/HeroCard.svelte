<script lang="ts">
    import { Instagram, Github, Mail } from "@lucide/svelte";


    export let avatar: string;
    export let name: string;
    export let subtitle: string;
    export let instagramUrl: string;
    export let githubUrl: string;
    export let mail: string;
    export let description: string;
</script>

<div
    class="relative bg-base-300 shadow-xl rounded-2xl w-full max-w-xl pt-16 pb-6 px-6"
>
    <div
        class="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full bg-base-200 overflow-hidden"
    >
        <img src={avatar} alt="Avatar" class="w-full h-full object-cover" />
    </div>

    <div class="mt-16 text-center">
        <h1 class="text-2xl font-semibold mb-2">{name}</h1>
        <p class="text-base-content/70 mb-4">{subtitle}</p>
        <p class="text-base-content mt-4 mb-8">{description}</p>

        <div class="flex justify-center space-x-4">
            <a
                href={instagramUrl}
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
            >
            <Instagram
                class="w-8 h-8 text-accent hover:scale-110 transition-colors" />
            </a>


            <a
                href={githubUrl}
                target="_blank"
                rel="noopener"
                aria-label="GitHub"
            >
            <Github
                class="w-8 h-8 text-secondary hover:scale-110 transition-colors" />
            </a>
            {#if mail}
            <a
                href={`mailto:${mail}`}
                target="_blank"
                rel="noopener"
                aria-label="Email"
                >

            <Mail
                class="w-8 h-8 text-primary hover:scale-110 transition-colors" />
            </a>
            {/if}
        </div>
    </div>
</div>
