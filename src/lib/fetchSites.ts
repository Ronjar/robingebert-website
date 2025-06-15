import type { Site } from './types/site'

type SiteMetadata = {
    title: string; 
    slug: string;
    description: string;
    date: string;
    tags: string;
}

export async function fetchSites() {
    let sites: Site[] = []

    const paths = import.meta.glob('/src/site/blog/*.{md,mdx}', { eager: true })

    for (const path in paths) {
        const file = paths[path]
        const slug = path.split('/').at(-1)?.replace('.mdx', '').replace('.md', '')

        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata as Omit<SiteMetadata, 'slug'>
            const siteMetadata = { ...metadata, slug } satisfies SiteMetadata
            const tags = siteMetadata.tags.split(',').map((tag: string) => tag.trim())
            const site: Site = {
                title: siteMetadata.title,
                slug: siteMetadata.slug,
                description: siteMetadata.description,
                date: siteMetadata.date,
                tags: tags
            }
            sites.push(site)
        }
    }

    sites = sites.sort((first, second) =>
        new Date(second.date).getTime() - new Date(first.date).getTime()
    )

    return sites;
}