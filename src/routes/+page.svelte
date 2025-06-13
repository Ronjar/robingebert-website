<script lang="ts">
  import HeroCard from '$lib/components/HeroCard.svelte';
  const avatar = '/images/profile.jpg';
  const name = 'Robin Gebert';
  const subtitle = 'Teaching student and developer from Stuttgart, Germany';
  const description = 'As a teaching student, I am passionate about education and technology. I love to share knowledge and help others learn. In my free time, I enjoy coding, exploring new technologies, and contributing to open-source projects.';
  const instagramUrl = 'https://instagram.com/robin.gebert';
  const githubUrl = 'https://github.com/ronjar';
  const mail = 'dev@robingebert.com';
</script>

<div class="flex flex-col items-center justify-center min-h-screen p-4">
  <HeroCard
    {avatar}
    {name}
    {subtitle}
    {description}
    {instagramUrl}
    {githubUrl}
    {mail}
  />
</div>
