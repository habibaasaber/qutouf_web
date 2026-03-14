// Data Structure for Episodes - Unchanged from previous version
const episodes = [
    {
        id: 1,
        title: "التين",
        image: "https://images.unsplash.com/photo-1598506079079-50549c6fc2e7?w=600&h=400&fit=crop", // figs
        links: {
            youtube: "https://youtu.be/wEvjXKypwjM?si=__vhydz-pHPnDoy3",
            facebook: "https://web.facebook.com/share/v/1CHYYHaqZt/",
            instagram: "https://www.instagram.com/reel/DU8-TUTEviD/",
            tiktok: "https://www.tiktok.com/@habiba.saber91/video/7608675758055116050",
            spotify: "https://open.spotify.com/episode/1M4AWcwPuHIsh4A0wdBlNe"
        }
    },
    {
        id: 2,
        title: "الزيتون",
        image: "https://images.unsplash.com/photo-1558500201-92582ed71597?w=600&h=400&fit=crop", // olive branch
        links: {
            youtube: "https://youtu.be/wAWFF4lZcjg?si=9GxCZ_XRKUszj3XJ",
            facebook: "https://web.facebook.com/share/v/19p4TDXPYi/",
            instagram: "https://www.instagram.com/reel/DU_i06jEthO/",
            tiktok: "https://www.tiktok.com/@habiba.saber91/video/7609041442815757585",
            spotify: "https://open.spotify.com/episode/0uWRF6yTqLEaXY2bn0o8Yq"
        }
    },
    {
        id: 3,
        title: "الرمان",
        image: "https://images.unsplash.com/photo-1615486171448-6eb9fdbfb120?w=600&h=400&fit=crop", // pomegranate
        links: {
            youtube: "https://youtu.be/DDiOBAflBtg?si=n9_z_tPnVpSDwHAl",
            facebook: "https://web.facebook.com/share/v/1D53DHkahd/",
            instagram: "https://www.instagram.com/reel/DVCYepqEn33/",
            tiktok: "https://www.tiktok.com/@habiba.saber91/video/7609437954557201684",
            spotify: "https://open.spotify.com/episode/3cW1Gf5M1RwNaEjaSNVYtP"
        }
    },
    {
        id: 4,
        title: "العنب",
        image: "https://images.unsplash.com/photo-1596368708356-6e1e1025ee72?w=600&h=400&fit=crop", // grapes
        links: {
            youtube: "https://youtu.be/3WEolGnJBEE?si=m1YtpEgQwgSEPJTC",
            facebook: "https://web.facebook.com/share/v/18GGNc9ARh/",
            instagram: "https://www.instagram.com/reel/DVE5KW0khwo/",
            tiktok: "https://www.tiktok.com/@habiba.saber91/video/7609821365604076821",
            spotify: "https://open.spotify.com/episode/7GqdxboH2uN2zIE6krJP1R"
        }
    },
    {
        id: 5,
        title: "التمر",
        image: "https://images.unsplash.com/photo-1627063673756-3b3dfa0b3ff6?w=600&h=400&fit=crop", // dates
        links: {
            youtube: "https://youtu.be/K_iq_4ByO7w?si=3hc5Lk1tTc1mR5XU",
            facebook: "https://web.facebook.com/share/v/18FsuwGRMe/",
            instagram: "https://www.instagram.com/reel/DVHytCskpdI/",
            tiktok: "https://www.tiktok.com/@habiba.saber91/video/7610241631236771093",
            spotify: "https://open.spotify.com/episode/3FOuqArNUqHQS4JrOferND"
        }
    },
    {
        id: 6,
        title: "الزنجبيل",
        image: "https://images.unsplash.com/photo-1628189675685-6d0df874ccab?w=600&h=400&fit=crop", // ginger
        links: {
            youtube: "https://youtu.be/zh_IxgE8zZ4?si=t2dIyNeqmYSz6TJO",
            facebook: "https://web.facebook.com/share/v/1DcAk8o9o8/",
            instagram: "https://www.instagram.com/reel/DVKGDVbEvDy/",
            tiktok: "https://www.tiktok.com/@habiba.saber91/video/7610562318988053781",
            spotify: "https://open.spotify.com/episode/7d7obZyHq6HaCx1zHtOU3H"
        }
    },
    {
        id: 7,
        title: "اليقطين",
        image: "https://images.unsplash.com/photo-1476837579993-f1d3948f17c2?w=600&h=400&fit=crop", // pumpkin
        links: {
            youtube: "https://youtu.be/LzdEKyuGQHk?si=YLHIwGVl7M9S9UEV",
            facebook: "https://web.facebook.com/share/v/1EJawADz6R/",
            instagram: "https://www.instagram.com/reel/DVMyT_WEiwd/",
            tiktok: "https://www.tiktok.com/@habiba.saber91/video/7610957114411863303",
            spotify: "https://open.spotify.com/episode/5TsR9eBIA02WKEcMvOzQep"
        }
    },
    {
        id: 8,
        title: "العسل",
        image: "https://images.unsplash.com/photo-1587049352847-4d4b1378ee06?w=600&h=400&fit=crop", // honey
        links: {
            youtube: "https://youtu.be/yWoFwfdAq-E?si=45lrBdAO4WvRJkA5",
            facebook: "https://web.facebook.com/share/v/1AobNwEwXB/",
            instagram: "https://www.instagram.com/reel/DVQAvuRktWb/",
            tiktok: "https://www.tiktok.com/@habiba.saber91/video/7611427799802350868",
            spotify: "https://open.spotify.com/episode/7onUeC1VjBUbOiXxiCPmzk"
        }
    },
    {
        id: 9,
        title: "السدر",
        image: "https://images.unsplash.com/photo-1698773708304-4536cdfc7546?w=600&h=400&fit=crop", // jujube / rote tree alternative
        links: {
            youtube: "https://youtu.be/_Ge41mODPOE?si=TioN1QH1suYqQ54u",
            facebook: "https://web.facebook.com/share/v/1C4GbpN7Fw/",
            instagram: "https://www.instagram.com/reel/DVSe0kpEvHn/",
            tiktok: "https://www.tiktok.com/@habiba.saber91/video/7611775372497128725",
            spotify: "https://open.spotify.com/episode/0UFye5Hj744YVVlZbEU8wI"
        }
    },
    {
        id: 10,
        title: "الطلح (الموز)",
        image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=600&h=400&fit=crop", // banana
        links: {
            youtube: "https://youtu.be/3fY18iIZGkw?si=GbhRlmejVRfzMxEn",
            facebook: "https://web.facebook.com/share/v/1LuHKfEtPW/",
            instagram: "https://www.instagram.com/reel/DVVaU8gEkxg/",
            tiktok: "https://www.tiktok.com/@habiba.saber91/video/7612194006096989461",
            spotify: "https://open.spotify.com/episode/1wcnD6LYG73BZlHpdRq0Rn"
        }
    },
    {
        id: 11,
        title: "اللبن",
        image: "https://images.unsplash.com/photo-1550583724-b2692bcff1ac?w=600&h=400&fit=crop", // milk
        links: {
            youtube: "https://youtu.be/4d9mFAgD0ds?si=2WPDIEfila0wXoU6",
            facebook: "https://web.facebook.com/share/v/1CiQR9nKqi/",
            instagram: "https://www.instagram.com/reel/DVZS9VzEm2U/",
            tiktok: "https://www.tiktok.com/@habiba.saber91/video/7612764204956683528",
            spotify: "https://open.spotify.com/episode/6sij7WzqI2WpPzJpJsGyP9"
        }
    },
    {
        id: 12,
        title: "البقل (الورقيات)",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&h=400&fit=crop", // leafy greens
        links: {
            youtube: "https://youtu.be/gHt-lwWDwLg?si=h9uHI22CxyS-eFEc",
            facebook: "https://web.facebook.com/share/v/183PS9ShhV/",
            instagram: "https://www.instagram.com/reel/DVdOVIWEier/",
            tiktok: "https://www.tiktok.com/@habiba.saber91/video/7613319958709144853",
            spotify: "https://open.spotify.com/episode/5LTEX6qLGpg5ko37KJIa4z"
        }
    },
    {
        id: 13,
        title: "القثاء (القتة)",
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&h=400&fit=crop", // cucumber
        links: {
            youtube: "https://youtu.be/4-FLf3wCZ_U?si=I1NnbYnUN19tKINp",
            facebook: "https://web.facebook.com/share/v/1FTJCJZ8d6/",
            instagram: "https://www.instagram.com/reel/DVfTayWkvTh/",
            tiktok: "https://www.tiktok.com/@habiba.saber91/video/7613621932503715088",
            spotify: "https://open.spotify.com/episode/34gZVkVlrnucSFXnAa0XqI"
        }
    },
    {
        id: 14,
        title: "الفوم (الثوم)",
        image: "https://images.unsplash.com/photo-1540148426945-86f366e60b61?w=600&h=400&fit=crop", // garlic
        links: {
            youtube: "https://youtu.be/25JjR601_aY?si=IlLs4soO1mtZ4bWj",
            facebook: "https://web.facebook.com/share/v/185oZzkSVm/",
            instagram: "https://www.instagram.com/reel/DVlMtgnEkac/",
            tiktok: "https://www.tiktok.com/@habiba.saber91/video/7614437365133610256",
            spotify: "https://open.spotify.com/episode/1wAo2BjtyYsNocwjdArwZ8"
        }
    },
    {
        id: 15,
        title: "العدس",
        image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e1?w=600&h=400&fit=crop", // lentils
        links: {
            youtube: "https://youtu.be/lp3Rc67LfXY?si=sV5R47HuhC5yOCsO",
            facebook: "https://web.facebook.com/reel/1467663248040938/",
            instagram: "https://www.instagram.com/reel/DVoO4ihEh2i/",
            tiktok: "https://www.tiktok.com/@habiba.saber91/video/7614911199842471175",
            spotify: "https://open.spotify.com/episode/0KcG1tuXYdtBZCPcXTjdhn"
        }
    },
    {
        id: 16,
        title: "البصل",
        image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=600&h=400&fit=crop", // onion
        links: {
            youtube: "https://youtu.be/eV624eHf4dU?si=ywd9QZWmDq0Lj0K1",
            facebook: "https://web.facebook.com/reel/26028355610192300/",
            instagram: "https://www.instagram.com/reel/DVp7_YYkjM0/",
            tiktok: "https://www.tiktok.com/@habiba.saber91/video/7615150612346342674",
            spotify: "https://open.spotify.com/episode/20t5dmw4npmylFLL4tjyBq"
        }
    },
    {
        id: 17,
        title: "الحَب",
        image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop", // wheat grain
        links: {
            youtube: "https://youtu.be/ne-VxkqoTiU?si=sf7CYku8m1m5z-Lc",
            facebook: "https://web.facebook.com/share/v/1G9GgzQ62Q/",
            instagram: "https://www.instagram.com/reel/DVuW0uBkuf4/",
            tiktok: "https://www.tiktok.com/@habiba.saber91/video/7615787229004270866",
            spotify: "https://open.spotify.com/episode/04cHhen94uhBJSWt80KOiD"
        }
    },
    {
        id: 18,
        title: "الريحان",
        image: "https://images.unsplash.com/photo-1615486171185-c2d1b73e51d9?w=600&h=400&fit=crop", // basil
        links: {
            youtube: "https://youtu.be/kGHIo-MuaXE?si=2ocZ-GhHP1HjuE55",
            facebook: "https://web.facebook.com/share/v/17pRvD99H4/",
            instagram: "https://www.instagram.com/reel/DVzF4Hpkqrx/",
            tiktok: "https://www.tiktok.com/@habiba.saber91/video/7616465493339229458",
            spotify: null // Not available yet
        }
    }
];

// Current platform state
let currentPlatform = 'youtube';

// DOM Elements
const episodesGrid = document.getElementById('episodes-grid');
const platformBtns = document.querySelectorAll('.platform-card');

// Initialize the app
function init() {
    renderEpisodes(currentPlatform);
    setupPlatformSwitcher();
    setupScrollAnimations();
}

// Render the episodes grid
function renderEpisodes(platform) {
    episodesGrid.innerHTML = ''; // Clear previous

    episodes.forEach((epi, index) => {
        // Special logic for Spotify Episode 18
        const url = epi.links[platform];
        const btnClass = url ? "watch-btn" : "watch-btn disabled";
        const btnHref = url ? `href="${url}" target="_blank"` : `href="#" onclick="return false;"`;

        // Update button text if it's music/audio
        let actionWord = "مشاهدة";
        if (platform === "spotify") actionWord = "استماع";
        if (!url) actionWord = "قريباً";
        else actionWord += " الحلقة";

        // To generate staggered animation delays
        const delay = index * 0.08;

        const cardHTML = `
            <div class="episode-card fade-in-scroll" style="transition-delay: ${delay}s">
                <div class="episode-image-container">
                    <img src="${epi.image}" alt="${epi.title}" class="episode-image" loading="lazy">
                    <div class="episode-image-overlay"></div>
                    <div class="episode-number-badge">${arabicNum(epi.id)}</div>
                </div>
                
                <div class="episode-content">
                    <h3 class="episode-title">حلقة ${epi.title}</h3>
                    <a ${btnHref} class="${btnClass}" style="${!url ? 'opacity: 0.5; cursor: not-allowed;' : ''}">
                        <i class="fa-brands fa-${platform === 'tiktok' ? 'tiktok' : platform}"></i>
                        ${actionWord}
                    </a>
                </div>
            </div>
        `;

        episodesGrid.insertAdjacentHTML('beforeend', cardHTML);
    });

    // Re-bind the observer to newly created cards so they animate as user scrolls
    setupScrollAnimations();
}

// Platform Switcher Logic with cross-fade animation
function setupPlatformSwitcher() {
    platformBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Prevent duplicate clicks
            if (btn.classList.contains('active')) return;

            // Remove active class from all
            platformBtns.forEach(b => b.classList.remove('active'));
            // Add to clicked
            btn.classList.add('active');

            // Get platform id
            currentPlatform = btn.getAttribute('data-platform');

            // Animate buttons out
            const btns = document.querySelectorAll('.watch-btn');

            btns.forEach(b => {
                b.classList.add('episode-link-animating-out');
            });

            // Wait for fade out, then render new, then fade in
            setTimeout(() => {
                renderEpisodes(currentPlatform);

                // Immediately fade the new buttons in
                setTimeout(() => {
                    document.querySelectorAll('.watch-btn').forEach(b => {
                        b.classList.add('episode-link-animating-in');
                    });
                }, 10);

            }, 250); // Matches the 0.3s CSS transition closely
        });
    });
}

// Scroll Animations
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: remove observer after it triggers once
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    // Observe all scrolling fade-ins
    document.querySelectorAll('.fade-in-scroll').forEach(el => {
        // If it's already visible from previous renders, add it class right away
        if (!el.classList.contains('visible')) {
            observer.observe(el);
        }
    });
}

// Convert numbers to Arabic digits 
function arabicNum(num) {
    const arabicDigits = ['١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩', '١٠', '١١', '١٢', '١٣', '١٤', '١٥', '١٦', '١٧', '١٨'];
    return arabicDigits[num - 1] || num;
}

// Boot up
document.addEventListener('DOMContentLoaded', init);
