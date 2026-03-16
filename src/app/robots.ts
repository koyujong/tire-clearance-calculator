import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
            {
                // 네이버 봇 명시적 허용
                userAgent: 'Yeti',
                allow: '/',
            },
            {
                // 구글 봇 명시적 허용
                userAgent: 'Googlebot',
                allow: '/',
            },
        ],
        sitemap: 'https://tireclearance.4kdrivewalk.com/sitemap.xml',
    };
}
