<script lang="ts">
    import { Instagram, Github, Mail } from "@lucide/svelte";

	let { data } = $props();
    
</script>

<div
    class="relative bg-base-300 shadow-xl rounded-2xl w-full max-w-xl pt-16 pb-6 px-6"
>
    <div
        class="absolute -top-16 left-1/2 transform -translate-x-1/2 w-36 h-36 rounded-full bg-base-200 overflow-hidden"
    >
        <img src={data.avatar} alt="Avatar" class="w-full h-full object-cover" />
    </div>

    <div class="mt-12 text-center">
        <h1 class="text-2xl font-semibold mb-2">{data.name}</h1>
        <p class="text-base-content/70 mb-4">{data.subtitle}</p>
        <p class="text-base-content mt-8 mb-8">{data.description}</p>

        <div class="flex justify-center space-x-4">
            <a
                href={data.instagramUrl}
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
                class="btn btn-accent btn-lg btn-circle transition duration-300 hover:scale-110 animate-wiggle animation-delay-200"
            >
            <Instagram
                class="w-6 h-6 transition-colors" />
            </a>


            <a
                href={data.githubUrl}
                target="_blank"
                rel="noopener"
                aria-label="GitHub"
                class="btn btn-secondary btn-lg btn-circle transition duration-300 hover:scale-110 animate-wiggle animation-delay-400"
            >
            <Github
                class="w-6 h-6 transition-colors" />
            </a>
            {#if data.mail}
            <a
                href={`mailto:${data.mail}`}
                target="_blank"
                rel="noopener"
                aria-label="Email"
                class="btn btn-primary btn-lg btn-circle transition duration-300 hover:scale-110 animate-wiggle animation-delay-600"
                >

            <Mail
                class="w-6 h-6 transition-colors" />
            </a>
            {/if}
        </div>
    </div>
</div>
