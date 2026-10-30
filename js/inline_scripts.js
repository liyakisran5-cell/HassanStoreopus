WebFont.load({  google: {    families: ["Geist Mono:400","Lora:300,400,500,600,700"]  }});

/* ===== INLINE JAVASCRIPT ===== */

!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);

/* ===== INLINE JAVASCRIPT ===== */

'use strict'
  ;(function () {
    const url = window.location.href
    //const isSpanishPage = url.includes('es-es')
    const hasQueryParam = url.includes('?')
    const hasHashInUrl = url.includes('#')
    if (hasQueryParam || hasHashInUrl) {
      const noIndexMetaTag = document.createElement('meta')
      noIndexMetaTag.name = 'robots'
      noIndexMetaTag.content = 'noindex'
      document.head.appendChild(noIndexMetaTag)
    }
    //console.log('isSpanishPage is' + ' ' + isSpanishPage)
    console.log('hasQueryParam is' + ' ' + hasQueryParam)
    console.log('hasHashInUrl is' + ' ' + hasHashInUrl)
  })()

/* ===== INLINE JAVASCRIPT ===== */

/* "use strict";
(function () {
     const isSpanishPage = window.location.href.includes('es-es');
     if (isSpanishPage) {
         const noIndexMetaTag = document.createElement('meta');
         noIndexMetaTag.name = 'robots';
         noIndexMetaTag.content = 'noindex';
         document.head.appendChild(noIndexMetaTag);
     }
 })();
 */

/* ===== INLINE JAVASCRIPT ===== */

function fetchApiBlockAdvicePromise() {
    return fetch('https://api.opus.pro/api/client-access-control?q=ipRisk')
      .then((resp) => resp.json())
      .then((json) => {
        // set opusIPInfo (oIP)
        window._oIP ||= json.data.detail
        window.dispatchEvent(new CustomEvent('ipInfoLoaded', json.data.detail))
        return json.data.shouldBlock && json.data.blockReason == 'country'
      })
  }
  const getCtas = () => document.querySelectorAll('.a_header_form-block,.a_nav_form-block')
  function onBlockAdvice(shouldBlockByIp) {
    const allowedUaRegex =
      /Googlebot|Bingbot|Slurp|DuckDuckBot|facebot|facebookexternalhit|Applebot|LinkedInBot|Twitterbot/i
    const exemptPaths = [
      '/terms-of-service',
      '/privacy-policy',
      '/not-available',
      '/supported-countries',
      '/pricing-early',
      '/pricing',
      '/no-capacity',
    ]
    const countryAllowed = !shouldBlockByIp
    const pageAllowed = exemptPaths.includes(location.pathname)
    const uaAllowed = allowedUaRegex.test(navigator.userAgent)
    if (countryAllowed || pageAllowed || uaAllowed) return
    getCtas().forEach((it) => (it.style.visibility = 'hidden'))
    window.location.replace('/not-available')
  }
  fetchApiBlockAdvicePromise().then(onBlockAdvice)
  const fallbackBlockList = ['CN', 'TW', 'HK']
  function countryip(data) {
    onBlockAdvice(fallbackBlockList.includes(data.country))
  }

/* ===== INLINE JAVASCRIPT ===== */

function gtag() {
    dataLayer.push(arguments)
  }
  ;(function (w, d, s, l, i) {
    w[l] = w[l] || []
    w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != 'dataLayer' ? '&l=' + l : ''
    j.async = true
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl
    f.parentNode.insertBefore(j, f)
  })(window, document, 'script', 'dataLayer', 'GTM-5B6S625')

/* ===== INLINE JAVASCRIPT ===== */

;(function (f, b) {
    if (!b.__SV) {
      var e, g, i, h
      window.mixpanel = b
      b._i = []
      b.init = function (e, f, c) {
        function g(a, d) {
          var b = d.split('.')
          2 == b.length && ((a = a[b[0]]), (d = b[1]))
          a[d] = function () {
            a.push([d].concat(Array.prototype.slice.call(arguments, 0)))
          }
        }
        var a = b
        'undefined' !== typeof c ? (a = b[c] = []) : (c = 'mixpanel')
        a.people = a.people || []
        a.toString = function (a) {
          var d = 'mixpanel'
          'mixpanel' !== c && (d += '.' + c)
          a || (d += ' (stub)')
          return d
        }
        a.people.toString = function () {
          return a.toString(1) + '.people (stub)'
        }
        i =
          'disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove'.split(
            ' ',
          )
        for (h = 0; h < i.length; h++) g(a, i[h])
        var j = 'set set_once union unset remove delete'.split(' ')
        a.get_group = function () {
          function b(c) {
            d[c] = function () {
              call2_args = arguments
              call2 = [c].concat(Array.prototype.slice.call(call2_args, 0))
              a.push([e, call2])
            }
          }
          for (
            var d = {}, e = ['get_group'].concat(Array.prototype.slice.call(arguments, 0)), c = 0;
            c < j.length;
            c++
          )
            b(j[c])
          return d
        }
        b._i.push([e, f, c])
      }
      b.__SV = 1.2
      e = f.createElement('script')
      e.type = 'text/javascript'
      e.async = !0
      e.src =
        'undefined' !== typeof MIXPANEL_CUSTOM_LIB_URL
          ? MIXPANEL_CUSTOM_LIB_URL
          : 'file:' === f.location.protocol &&
              '//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js'.match(/^\/\//)
            ? 'https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js'
            : '//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js'
      g = f.getElementsByTagName('script')[0]
      g.parentNode.insertBefore(e, g)
    }
  })(document, window.mixpanel || [])

  // Register browser language after Mixpanel loads
  document.addEventListener('DOMContentLoaded', () => {
    /**
     * navigator.languages and navigator.language are not supported in all browsers.
     *
     * Returns the value of Accept-Languages (HTTP header) as a nsTArray of
     * languages. The value is set in the preference by the user ("Content
     * Languages").
     *
     * "en", "en-US" and "i-cherokee" and "" are valid languages tokens.
     *
     * If there is no valid language, the value of getWebExposedLocales is
     * used to ensure that locale spoofing is honored and to reduce
     * fingerprinting.
     *
     * See RFC 7231, Section 9.7 "Browser Fingerprinting" and
     * RFC 2616, Section 15.1.4 "Privacy Issues Connected to Accept Headers"
     * for more detail.
     */
    const browserLanguage =
      document.documentElement.lang ||
      (navigator.languages?.[0] || navigator.language || 'en').split('-')[0]
    mixpanel.register({ browserLanguage })
  })

/* ===== INLINE JAVASCRIPT ===== */

const CLIP_APP_URL = 'https://clip.opus.pro'
  const DEFAULT_LANG = 'en'
  let random = undefined

  function throttleTrack(ratio, cb) {
    if (!random) {
      random = Math.random()
    }
    if (random < ratio) {
      cb && cb()
    }
  }

  function normalizeLangCode(langCode) {
    if (!langCode) return DEFAULT_LANG
    const parts = langCode.split('-')
    if (parts.length === 2) {
      return `${parts[0].toLowerCase()}-${parts[1].toUpperCase()}`
    }
    return langCode.toLowerCase()
  }

  function getCurrentLang() {
    const [, lang] = window.location.pathname.match(/\/([a-z]{2}-[a-z]{2})(\/|$)/) || []
    const detectedLang = lang || DEFAULT_LANG
    return normalizeLangCode(detectedLang)
  }

  function renderEmbedIframe(mergedParams) {
    const updatedUrl = new URL(window.location.href)
    for (const [key, value] of Object.entries(mergedParams)) {
      updatedUrl.searchParams.set(key, value)
    }
    console.log('pathname', updatedUrl.pathname)

    let iframe = document.createElement('iframe')
    const iframeUrl = new URL('/lp-embed', CLIP_APP_URL)

    // Current Page UTM Parameters
    updatedUrl.searchParams.forEach((value, key) => {
      iframeUrl.searchParams.set(key, value)
    })

    // lang
    iframeUrl.searchParams.set('lang', getCurrentLang())

    // documentReferrer
    if (document.referrer) {
      iframeUrl.searchParams.set('documentReferrer', encodeURIComponent(document.referrer))
    }

    iframe.src = iframeUrl.toString()

    iframe.style.display = 'none'
    iframe.style.visibility = 'hidden'
    document.body.appendChild(iframe)
    console.log('iframe rendered', iframe.src)

    throttleTrack(0.1, () => {
      const url = new URL(window.location.href)
      const searchParams = url.searchParams
      const paramsObject = {}
      searchParams.forEach((value, key) => {
        paramsObject[key] = value
      })
      mixpanel.track('webflow-embed-iframe', {
        type: 'init',
        webflowHref: window.location.href,
        ...paramsObject,
      })
    })
  }

/* ===== INLINE JAVASCRIPT ===== */

document.addEventListener('DOMContentLoaded', (event) => {
    // Select the calculate button by anchor element using the data attribute
    const calculateButton = document.querySelector('a[data-element="calculate-button"]')

    // Add an event listener to the anchor element for the 'click' event
    calculateButton.addEventListener('click', (event) => {
      // Extract URL parameters and convert them to an object
      const url = new URL(window.location.href)
      const searchParams = url.searchParams
      const paramsObject = {}
      searchParams.forEach((value, key) => {
        paramsObject[key] = value
      })

      // Track the event with Mixpanel
      mixpanel.track('price-calculate', {
        webflowHref: window.location.href,
        ...paramsObject,
      })
    })
  })

/* ===== INLINE JAVASCRIPT ===== */

'use strict'
  const SUPPORTED_DOMAINS = ['opusclip-staging.webflow.io', 'www.opus.pro', 'clip.opus.pro']
  const isSessionStorageSupported = () => {
    try {
      return !!window.sessionStorage
    } catch (error) {
      return false
    }
  }
  const getUrlParameters = () => {
    const params = {}
    const queryString = window.location.search.substring(1)
    const pairs = queryString.split('&')
    for (const pair of pairs) {
      const [key, value] = pair.split('=')
      if (key && value) {
        params[key] = decodeURIComponent(value)
      }
    }
    return params
  }
  const storeParameters = (params) => {
    if (isSessionStorageSupported()) {
      delete params['tag']
      sessionStorage.setItem('storedUrlParams', JSON.stringify(params))
    }
  }
  const retrieveParameters = () => {
    if (isSessionStorageSupported()) {
      const storedUrlParams = sessionStorage.getItem('storedUrlParams')
      return storedUrlParams ? JSON.parse(storedUrlParams) : {}
    }
    return {}
  }
  const processLocationParams = (mergedParams) => {
    storeParameters(mergedParams)
    const updatedUrl = new URL(window.location.href)
    for (const [key, value] of Object.entries(mergedParams)) {
      updatedUrl.searchParams.set(key, value)
    }
    window.history.replaceState({}, '', updatedUrl)
  }
  const processHrefParams = (mergedParams) => {
    const currentDomain = window.location.hostname
    const domainRegex = new RegExp(SUPPORTED_DOMAINS.join('|'), 'i')
    const matchingElements = []
    document.querySelectorAll('[href]').forEach((element) => {
      const href = element.getAttribute('href')
      if (href) {
        const absoluteHref = href.startsWith('/')
          ? `${window.location.protocol}//${currentDomain}${href}`
          : href
        if (domainRegex.test(absoluteHref)) {
          matchingElements.push({ element, href: absoluteHref })
        }
      }
    })
    // print all matching elements where href is "https://clip.opus.pro/dashboard"
    console.log(
      'Matching elements',
      matchingElements.filter(({ href }) => href === 'https://clip.opus.pro/dashboard'),
    )
    for (const { element, href } of matchingElements) {
      const url = new URL(href, window.location.href)
      for (const [key, value] of Object.entries(mergedParams)) {
        url.searchParams.set(key, value)
      }
      element.setAttribute('href', url.href)
    }
  }
  const currentParams = getUrlParameters()
  const storedParams = retrieveParameters()
  const mergedParams = { ...storedParams, ...currentParams }

  // process location url
  // processLocationParams(mergedParams)

  $(function () {
    renderEmbedIframe(mergedParams)
    processHrefParams(mergedParams)
  })

/* ===== INLINE JAVASCRIPT ===== */

function toggleDashBoardButton(isLogin) {
    if (isLogin) {
      $('#sign-in').addClass('force-hide')
      $('#sign-in-mobile').addClass('force-hide')
      $('#start-free-trial').addClass('force-hide')
      $('#my-dashboard').removeClass('force-hide')
      $('#my-dashboard-mobile').removeClass('force-hide')
      sessionStorage.setItem('logged_in', 'yes')
    } else {
      $('#sign-in').removeClass('force-hide')
      $('#sign-in-mobile').removeClass('force-hide')
      $('#start-free-trial').removeClass('force-hide')
      $('#my-dashboard').addClass('force-hide')
      $('#my-dashboard-mobile').addClass('force-hide')
      sessionStorage.removeItem('logged_in')
    }
  }
  if (sessionStorage.getItem('logged_in') === 'yes') {
    toggleDashBoardButton(true)
  }
  window.addEventListener('message', function (event) {
    if (event.origin === CLIP_APP_URL) {
      if (event.data) {
        if (event.data.type === 'embed-success') {
          throttleTrack(0.1, () => {
            mixpanel.track('webflow-embed-iframe', {
              type: 'success',
              webflowHref: window.location.href,
              ...event.data.content,
            })
          })
        }
      }
      if (event.data && event.data === 'CLIP_LOGGED_IN') {
        toggleDashBoardButton(true)
      }
      if (event.data && event.data === 'CLIP_LOGGED_OUT') {
        toggleDashBoardButton(false)
      }
    }
  })

/* ===== INLINE JAVASCRIPT ===== */

(function () {
  const allowedPaths = ["/", "/try-opus-clip", "/pricing"];

  if (!allowedPaths.includes(window.location.pathname)) {
    return;
  }

  let clarityLoaded = false;

  function loadClarity() {
    if (clarityLoaded) return;
    clarityLoaded = true;

    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){
        (c[a].q=c[a].q||[]).push(arguments)
      };
      t=l.createElement(r);
      t.async=1;
      t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "z0q7qiakwg");
  }

  window.addEventListener("message", function(event) {
    if (event.origin !== "https://clip.opus.pro") return;

    if (event.data === "CLIP_LOGGED_OUT") {
      loadClarity();
    }
  });
})();

/* ===== INLINE JAVASCRIPT ===== */

const GSI_MAX_TRIES = 120;
  const GSI_DELAY_MS  = 80;

  let gsiInited = false;

  function gsiBuildRedirectUrl(idToken) {
    const sp = new URLSearchParams(window.location.search);
    const existingState = sp.get('state');
    if (existingState) {
      return `${CLIP_APP_URL}/auth/callback?id_token=${encodeURIComponent(idToken)}&state=${existingState}`;
    }
    const backTo   = sp.get('back_to') || `${CLIP_APP_URL}/dashboard`;
    const returnTo = `${CLIP_APP_URL}/auth/callback?back_to=${encodeURIComponent(backTo)}`;
    const stateObj = { returnTo, provider: 'GoogleOAuth' };
    const stateEnc = encodeURIComponent(JSON.stringify(stateObj));
    return `${CLIP_APP_URL}/auth/callback?id_token=${encodeURIComponent(idToken)}&state=${stateEnc}`;
  }

  function gsiHandleIdToken(resp) {
    const idToken = resp?.credential;
    mixpanel.track('google-onetap-click', {
      hasIdToken: Boolean(idToken),
    })
    if (!idToken) return;
    const url = gsiBuildRedirectUrl(idToken);
    window.location.assign(url);
  }

  function gsiInit(clientId) {
	if (window.location.pathname !== '/') return;
    if (gsiInited || !window.google?.accounts?.id) return;
    google.accounts.id.initialize({
      client_id: clientId,
      callback: gsiHandleIdToken,
      use_fedcm_for_prompt: true,
      context: 'signin',
    });
    gsiInited = true;
  }

  function gsiPrompt() {
    if (!gsiInited) return;
    google.accounts.id.prompt((n) => {
      console.log('notDisplayed:', n.getNotDisplayedReason?.());
      console.log('skipped:', n.getSkippedReason?.());
      console.log('dismissed:', n.getDismissedReason?.());      
      mixpanel.track('google-onetap-prompt', {
      	notDisplayed: n.getNotDisplayedReason?.(),
        skipped: n.getSkippedReason?.(),
        dismissed: n.getDismissedReason?.()
	  })
    });
  }

  function gsiWhenReady(cb) {
    let tries = 0;
    const t = setInterval(() => {
      if (window.google?.accounts?.id) {
        clearInterval(t);
        cb();
        return;
      }
      tries += 1;
      if (tries >= GSI_MAX_TRIES) {
        clearInterval(t);
        console.error(`[GSI] Not available after ${tries} tries (~${Math.round((tries * GSI_DELAY_MS)/100)/10}s).`);
      }
    }, GSI_DELAY_MS);
  }

  window.addEventListener('message', (event) => {
    const data = event?.data;
    if (!data || typeof data !== 'object') return;

    // Initialize only; do not auto-prompt
    if (data.type === 'gsi_init' && data.content?.clientId) {
      const { clientId } = data.content;
      gsiWhenReady(() => {
        gsiInit(clientId);
      });
    }

    // If you want to show the One Tap later, send a separate gsi_login
    if (data.type === 'gsi_login') {
      if (gsiInited) {
        gsiPrompt();
      } else if (data.content?.clientId) {
        const { clientId } = data.content;
        gsiWhenReady(() => {
          gsiInit(clientId);
          gsiPrompt();
        });
      }
    }
  });

/* ===== INLINE JAVASCRIPT ===== */

{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does OpusClip work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "OpusClip leverages big data to analyze your video content in relation to the latest social and marketing trends from major platforms, and generates a comprehensive understanding of your video for a data-driven decision on content repurposing. It then picks the highlighting moments of your long video, rearranges them into a viral-worthy short and polishes it with dynamic captions, AI-relayout, smooth transition to ensure that the clip is coherent and attention-grabbing, and ends with a strong call-to-action. Learn more"
      }
    },
    {
      "@type": "Question",
      "name": "What types of videos can I upload?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can use OpusClip to clip any video type that you have with our newest model ClipAnything. Whether it's talking-head videos like podcasts and interviews, vlogs, sports, TV shows, or videos with little to no dialogue, ClipAnything understands all the visual, audio and sentiment cues throughout the video, and can clip the best moments from your video. You can also use natural language prompts to clip a specific moment. To learn more about it, please visit the ClipAnything page."
      }
    },
    {
      "@type": "Question",
      "name": "Which languages are supported?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We support English, German, Spanish, French, Portuguese, Italian, Dutch, Russian, Polish, Indonesian, Ukrainian, Swedish, Turkish, Norwegian, Croatian, Romanian, Slovak, Greek, Danish, Finnish and more to come."
      }
    },
    {
      "@type": "Question",
      "name": "Can I add captions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! In fact, OpusClip automatically adds captions for you with over 97% accuracy! You can change text and edit it freely."
      }
    },
    {
      "@type": "Question",
      "name": "Is OpusClip free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "OpusClip is free to use.If you are a new user, you will enjoy a 7-day free trial of our Pro Plan, which gives you 90 minutes of video processing time (~30 downloadable clips).Once your free trial ends, you can either upgrade to paid subscription, or use our free-forever plan with 60 minutes of video processing time refreshed monthly.We offer paid subscription plans with flexible upload credits, available on both a monthly and yearly basis. Please check out further details above."
      }
    },
    {
      "@type": "Question",
      "name": "I have more questions!",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Please join our Discord or email us at contact@opus.pro if you need help or have any questions or advice for us."
      }
    }
  ]
}

/* ===== INLINE JAVASCRIPT ===== */

window.__WEBFLOW_CURRENCY_SETTINGS = {"currencyCode":"USD","symbol":"$","decimal":".","fractionDigits":2,"group":",","template":"{{wf {\"path\":\"symbol\",\"type\":\"PlainText\"} }} {{wf {\"path\":\"amount\",\"type\":\"CommercePrice\"} }} {{wf {\"path\":\"currencyCode\",\"type\":\"PlainText\"} }}","hideDecimalForWholeNumbers":false};

/* ===== INLINE JAVASCRIPT ===== */

window.Webflow ||= [];
window.Webflow.push(async () => {
  // If Webflow rive module exists, do nothing
  try {
    if (Webflow.require('rive')?.rive) return;
  } catch {}

  // Load Rive (fallback)
  await new Promise((res, rej) => {
    const s = document.createElement('script');
    s.src = 'https://unpkg.com/@rive-app/canvas';
    s.onload = res;
    s.onerror = rej;
    document.head.appendChild(s);
  });

  const rive = window.rive;
  const instances = [];

  function resizeCanvasToDPR(el, canvas) {
    const dpr = window.devicePixelRatio || 1;
    const rect = el.getBoundingClientRect();
    const w = Math.max(1, Math.round(rect.width * dpr));
    const h = Math.max(1, Math.round(rect.height * dpr));
    if (canvas.width !== w) canvas.width = w;
    if (canvas.height !== h) canvas.height = h;
  }

  function updateAll() {
    instances.forEach(({ el, canvas, r }) => {
      resizeCanvasToDPR(el, canvas);
      r.resizeDrawingSurfaceToCanvas?.();
      r.drawFrame?.();
    });
  }

  function debounce(fn, delay = 150) {
    let t;
    return function () {
      clearTimeout(t);
      t = setTimeout(fn, delay);
    };
  }

  const debouncedUpdateAll = debounce(updateAll, 150);

  // Init
  document.querySelectorAll('[data-animation-type="rive"]').forEach((el) => {
    const canvas = el.querySelector('canvas');
    const src = el.getAttribute('data-rive-url');
    if (!canvas || !src) return;

    resizeCanvasToDPR(el, canvas);

    const r = new rive.Rive({
      src,
      canvas,
      autoplay: el.getAttribute('data-rive-autoplay') !== 'false',
      artboard: el.getAttribute('data-rive-artboard') || undefined,
      stateMachines: el.getAttribute('data-rive-state-machine') || undefined,
      onLoad: () => {
        // Safari fix
        r.drawFrame?.();
        requestAnimationFrame(() => {
          resizeCanvasToDPR(el, canvas);
          r.resizeDrawingSurfaceToCanvas?.();
          r.drawFrame?.();
        });
      }
    });

    instances.push({ el, canvas, r });
  });

  window.addEventListener('resize', debouncedUpdateAll);

  if (window.matchMedia) {
    try {
      window
        .matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`)
        .addEventListener('change', debouncedUpdateAll);
    } catch {}
  }
});

/* ===== INLINE JAVASCRIPT ===== */

document.addEventListener('DOMContentLoaded', () => {
  const CLIP_APP_URL = 'https://clip.opus.pro';

  const banner = document.getElementById('ios-app-banner');
  if (!banner) return;

  const openBtn = banner.querySelector('a.open-app-btn');
  const closeBtn = banner.querySelector('[data-el="smartbanner-close"]');

  let bannerResizeObserver = null;

  function observeBannerHeight() {
    if (!window.ResizeObserver) return;
    bannerResizeObserver = new ResizeObserver(() => {
      const bannerHeight = Math.ceil(banner.getBoundingClientRect().height);
      if (bannerHeight > 0) {
        document.body.style.paddingTop = `${bannerHeight}px`;
      }
    });
    bannerResizeObserver.observe(banner);
  }

  function unobserveBannerHeight() {
    bannerResizeObserver?.disconnect();
    bannerResizeObserver = null;
  }

  function showBanner() {
    banner.style.display = 'flex';
    observeBannerHeight();
  }

  function hideBanner() {
    banner.style.display = 'none';
    document.body.style.paddingTop = '';
    unobserveBannerHeight();
  }

  function setOpenAppHref() {
    const fromValue = location.pathname === '/pricing' ? 'pricing' : 'home';

    const deepLink =
      'https://clip.opus.pro/app?source=custom_banner&from=' +
      fromValue +
      '&target=' +
      encodeURIComponent(location.pathname);

    openBtn.href = deepLink;
  }

  /** Send message to lp-embed iframe for centralized handling */
  function postToLpEmbed(type, content) {
    const iframe = document.querySelector('iframe[src*="/lp-embed"]');

    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage({ type, content }, CLIP_APP_URL);
    }
  }

  /** iOS App Banner click - just track, let href handle navigation */
  function trackIosBannerClick() {
    // postMessage is synchronous (enqueues immediately), so it's sent before navigation
    postToLpEmbed('ios_banner_click', { page: location.pathname });
  }

  function dismissIosBanner(e) {
    e?.preventDefault?.();
    e?.stopPropagation?.();

    hideBanner();
    postToLpEmbed('ios_banner_dismiss', { page: location.pathname });
  }

  function handleMessage(event) {
    if (event.origin !== CLIP_APP_URL) return;

    if (event.data?.type === 'ios_banner_experiment') {
      const enabled = event.data?.content?.enabled;

      if (enabled === true) {
        setOpenAppHref();
        showBanner();
      } else if (enabled === false) {
        hideBanner();
      }
    }
  }

  window.addEventListener('message', handleMessage);

  openBtn?.addEventListener('click', trackIosBannerClick);
  closeBtn?.addEventListener('click', dismissIosBanner);
});

/* ===== INLINE JAVASCRIPT ===== */

"use strict";
// open dropdowns on hover for desktop menu
document.addEventListener('DOMContentLoaded', () => {
    const navBars = document.querySelectorAll('[data-element="ca-nav"]');
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const toggleDropdownClasses = (dropdown, action) => {
        const toggle = dropdown.querySelector('.w-dropdown-toggle');
        const list = dropdown.querySelector('.w-dropdown-list');
        if (toggle)
            toggle.classList[action]('w--open');
        if (list)
            list.classList[action]('w--open');
    };
    const handleMouseEnter = (event) => {
        const target = event.currentTarget;
        toggleDropdownClasses(target, 'add');
    };
    const handleMouseLeave = (event) => {
        const target = event.currentTarget;
        toggleDropdownClasses(target, 'remove');
    };
    const manageEventListeners = (navBar, add) => {
        const dropdowns = navBar.querySelectorAll('.w-dropdown');
        dropdowns.forEach((dropdown) => {
            if (add) {
                dropdown.addEventListener('mouseenter', handleMouseEnter);
                dropdown.addEventListener('mouseleave', handleMouseLeave);
            }
            else {
                dropdown.removeEventListener('mouseenter', handleMouseEnter);
                dropdown.removeEventListener('mouseleave', handleMouseLeave);
                toggleDropdownClasses(dropdown, 'remove');
            }
        });
    };
    const handleDeviceChange = (e) => {
        navBars.forEach((navBar) => {
            manageEventListeners(navBar, e.matches);
        });
    };
    mediaQuery.addEventListener('change', handleDeviceChange);
    navBars.forEach((navBar) => {
        manageEventListeners(navBar, mediaQuery.matches);
    });
});
// add bg when scrolled
document.addEventListener('DOMContentLoaded', () => {
    const navBars = document.querySelectorAll('[data-element="ca-nav"]');
    if (navBars.length === 0)
        return;
    function isPageAtTop() {
        return window.scrollY === 0;
    }
    function checkPageAtTop() {
        navBars.forEach((nav) => {
            if (isPageAtTop()) {
                nav.classList.remove('scrolled');
            }
            else {
                nav.classList.add('scrolled');
            }
        });
    }
    window.addEventListener('scroll', function () {
        checkPageAtTop();
    });
    checkPageAtTop();
});

/* ===== INLINE JAVASCRIPT ===== */

'use strict';
document.addEventListener('DOMContentLoaded', () => {
  // set max height of nav menu to 100dvh - banner height
  function debounce(func, wait) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  }
  function isVisible(el) {
    const style = getComputedStyle(el);
    return (
      style.display !== 'none' &&
      style.visibility !== 'hidden' &&
      style.opacity !== '0' &&
      el.offsetHeight > 0
    );
  }
  function getBannerHeight() {
    const visibleBanners = Array.from(
      document.querySelectorAll('[data-navbar-banner]')
    ).filter(isVisible);
    return visibleBanners.reduce((total, el) => total + el.offsetHeight, 0);
  }
  function updateNavHeight() {
    const nav = document.querySelector('[data-element="navmenu"]');
    if (!nav) return;
    const bannerHeight = getBannerHeight();
    const height =
      bannerHeight > 0 ? `calc(100dvh - ${bannerHeight / 2}px)` : '100dvh';
    nav.style.setProperty('max-height', height, 'important');
  }
  const debouncedUpdate = debounce(updateNavHeight, 250);
  window.addEventListener('load', updateNavHeight);
  window.addEventListener('resize', debouncedUpdate);
});

/* ===== INLINE JAVASCRIPT ===== */

'use strict';
document.addEventListener('DOMContentLoaded', function () {
  const SWIPER_SCRIPT_SRC =
    'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js';
  const SWIPER_SCRIPT_INTEGRITY =
    'sha384-kLg4yw7ysk2F34aYhHIrdq/AXIkHzZ808L3af45jUqWQoMPN8VnJneCjOR8+THSG';
  const MEDIA_QUERY_MD = '(min-width: 768px)';

  if (!window.swiperInstances) {
    window.swiperInstances = new Map();
  }
  const swiperInstances = window.swiperInstances;

  let reinitTimeout;

  function destroySwiper(swiper) {
    if (swiper && !swiper.destroyed) {
      swiper.destroy(true, true);
    }
  }

  function initWrapper(wrapper) {
    const thumbsEl = wrapper.querySelector(
      '[data-element="home-hero-anim-swiper-thumbs"]'
    );
    const mainEl = wrapper.querySelector(
      '[data-element="home-hero-anim-swiper"]'
    );
    if (!thumbsEl || !mainEl) return;

    const isDesktop = window.matchMedia(MEDIA_QUERY_MD).matches;

    let instance = swiperInstances.get(wrapper);
    if (!instance) {
      instance = { activeIndex: 0 };
      swiperInstances.set(wrapper, instance);
    }

    if (instance.mainSwiper && !instance.mainSwiper.destroyed) {
      const currentIndex = instance.mainSwiper.activeIndex;
      if (typeof currentIndex === 'number' && currentIndex >= 0) {
        instance.activeIndex = currentIndex;
      }
    }

    const targetIndex = instance.activeIndex;

    // destroy swipers
    destroySwiper(instance.thumbsSwiper);
    destroySwiper(instance.mainSwiper);

    // thumbs swiper
    instance.thumbsSwiper = new Swiper(thumbsEl, {
      slidesPerView: isDesktop ? 'auto' : 1,
      spaceBetween: isDesktop ? 12 : 0,
      threshold: 5,
      effect: isDesktop ? 'slide' : 'fade',
      fadeEffect: { crossFade: true }
    });

    // main swiper
    instance.mainSwiper = new Swiper(mainEl, {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: isDesktop ? 24 : 8,
      allowTouchMove: !isDesktop,
      navigation: {
        nextEl: mainEl.querySelector('.swiper-button-next'),
        prevEl: mainEl.querySelector('.swiper-button-prev')
      },
      keyboard: { enabled: true },
      mousewheel: { forceToAxis: true, thresholdDelta: 20 },
      thumbs: { swiper: instance.thumbsSwiper },
      on: {
        init() {
          // restore slide after init
          if (targetIndex > 0) {
            this.slideTo(targetIndex, 0);
          }
        },
        slideChange() {
          instance.activeIndex = this.activeIndex;

          if (!isDesktop) return;
          const direction = this.previousIndex < this.activeIndex ? 1 : -1;
          const targetIndex = Math.max(
            0,
            Math.min(this.activeIndex + direction, this.slides.length - 1)
          );
          instance.thumbsSwiper.slideTo(targetIndex);
        }
      }
    });
  }

  function initAllWrappers() {
    document
      .querySelectorAll(
        '[data-element="home-hero-anim-swiper-wrapper"]:not([data-swiper-initialized])'
      )
      .forEach((wrapper) => {
        initWrapper(wrapper);
        wrapper.setAttribute('data-swiper-initialized', 'true');
      });
  }

  function reinitAllWrappers() {
    clearTimeout(reinitTimeout);

    reinitTimeout = setTimeout(() => {
      document
        .querySelectorAll(
          '[data-element="home-hero-anim-swiper-wrapper"][data-swiper-initialized]'
        )
        .forEach((wrapper) => {
          initWrapper(wrapper);
        });
    }, 10);
  }

  function loadSwiperAndInit() {
    if (typeof Swiper !== 'undefined') {
      initAllWrappers();
      window
        .matchMedia(MEDIA_QUERY_MD)
        .addEventListener('change', reinitAllWrappers);
      return;
    }
    const script = document.createElement('script');
    script.src = SWIPER_SCRIPT_SRC;
    script.integrity = SWIPER_SCRIPT_INTEGRITY;
    script.crossOrigin = 'anonymous';
    script.onload = () => {
      initAllWrappers();
      window
        .matchMedia(MEDIA_QUERY_MD)
        .addEventListener('change', reinitAllWrappers);
    };
    document.body.appendChild(script);
  }

  loadSwiperAndInit();
});

/* ===== INLINE JAVASCRIPT ===== */

'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const SWIPER_SCRIPT_SRC =
    'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js';
  const SWIPER_SCRIPT_INTEGRITY =
    'sha384-kLg4yw7ysk2F34aYhHIrdq/AXIkHzZ808L3af45jUqWQoMPN8VnJneCjOR8+THSG';

  let customerSwiper, companySwiper;

  function initSwipers() {
    customerSwiper = new Swiper('[data-element="ca-customers-swiper"]', {
      slidesPerView: 'auto',
      speed: 3000,
      grabCursor: true,
      loop: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false
      }
    });

    companySwiper = new Swiper('[data-element="ca-companies-swiper"]', {
      slidesPerView: 'auto',
      speed: 4000,
      grabCursor: true,
      loop: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false
      }
    });
  }

  function startAutoplay() {
    if (customerSwiper) {
      customerSwiper.autoplay.start();
    }
    if (companySwiper) {
      companySwiper.autoplay.start();
    }
  }

  // update swipers for A/B testing
  function setupMutationObserver() {
    const homeContent = document.querySelector('#home-content');
    const observer = new MutationObserver(() => {
      if (!homeContent) return;
      const computedStyle = getComputedStyle(homeContent);
      if (computedStyle.display !== 'none') {
        if (customerSwiper) {
          customerSwiper.update();
          customerSwiper.autoplay.start();
        }
        if (companySwiper) {
          companySwiper.update();
          companySwiper.autoplay.start();
        }
      }
      observer.disconnect();
    });
    if (homeContent) {
      observer.observe(homeContent, {
        attributes: true,
        subtree: true,
        attributeFilter: ['style']
      });
    }
  }

  function loadSwiperScript(callback) {
    const swiperScript = document.createElement('script');
    swiperScript.src = SWIPER_SCRIPT_SRC;
    swiperScript.integrity = SWIPER_SCRIPT_INTEGRITY;
    swiperScript.crossOrigin = 'anonymous';
    swiperScript.onload = callback;
    document.body.appendChild(swiperScript);
  }
  function isSwiperScriptLoaded() {
    return typeof Swiper !== 'undefined';
  }
  if (!isSwiperScriptLoaded()) {
    loadSwiperScript(() => {
      initSwipers();
      setupMutationObserver();
    });
  } else {
    initSwipers();
    setupMutationObserver();
  }

  window.addEventListener('load', startAutoplay);
});

/* ===== INLINE JAVASCRIPT ===== */

"use strict";
document.addEventListener('DOMContentLoaded', () => {
    // images modal
    const modalOpenTrigger = document.querySelector('[fs-modal-element="open"]');
    const growthSwiperWrappers = document.querySelectorAll('[data-element="growth-swiper-wrapper"]');
    const thumbs = document.querySelectorAll('[data-growth-modal]');
    thumbs.forEach((thumb) => {
        thumb.addEventListener('click', () => {
            const id = thumb.getAttribute('data-growth-modal');
            if (id) {
                const modalImages = document.querySelectorAll('[data-modal-image]');
                modalImages.forEach((image) => {
                    image.classList.remove('visible');
                    if (image.getAttribute('data-modal-image') === id) {
                        image.classList.add('visible');
                    }
                });
                if (modalOpenTrigger) {
                    // stop marquee
                    growthSwiperWrappers.forEach((swiper) => {
                        swiper.style.animationPlayState = 'paused';
                    });
                    modalOpenTrigger.click();
                }
            }
        });
    });
    document.addEventListener('click', (event) => {
        const targetEl = event.target;
        if ((targetEl && targetEl.getAttribute('fs-modal-element') === 'close') ||
            (targetEl && targetEl.closest('[fs-modal-element="close"]'))) {
            // run marquee
            growthSwiperWrappers.forEach((swiper) => {
                swiper.style.animationPlayState = 'running';
            });
        }
    });
});

/* ===== INLINE JAVASCRIPT ===== */

'use strict';
document.addEventListener('DOMContentLoaded', () => {
  // const
  const GSAP_CORE_SRC =
    'https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js';
  const GSAP_SCROLL_TRIGGER_SRC =
    'https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js';

  const CC_BANNER_SELECTOR = '[fs-cc="banner"]';
  const CTA_INPUT_SECTION_EL_SELECTOR =
    '[data-element="0625-cta-input-section"]';
  const CTA_SECTION_SELECTOR = '[data-element="0625-cta-section"]';
  const CTA_ANIM_TRIGGER_SELECTOR = '[data-element="0625-cta-anim-trigger"]';
  const CONVERSION_BANNER_TRIGGER_SELECTOR =
    '[data-element="conversion-banner-trigger"]';
  const DEBOUNCE_DELAY = 250;
  const SCROLL_TRIGGER_DEBOUNCE = 100;

  // state
  let resizeObserver;
  let styleObserver;
  let ctaInputSectionEl;
  let ccBanner;

  // util
  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = () => reject(new Error(`Failed to load ${src}`));
      document.head.appendChild(script);
    });
  }

  function isGSAPLoaded() {
    return typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined';
  }

  // cc banner
  function isCCBannerVisible(banner) {
    if (!banner) return false;

    const rect = banner.getBoundingClientRect();
    const style = window.getComputedStyle(banner);

    return (
      rect.height > 0 &&
      style.display !== 'none' &&
      style.visibility !== 'hidden'
    );
  }

  function getVisibleCCBannerHeight() {
    return isCCBannerVisible(ccBanner)
      ? ccBanner.getBoundingClientRect().height
      : 0;
  }

  function adjustCtaSectionElementPosition() {
    if (!ctaInputSectionEl) return;

    if (!window.originalBottomValue) {
      const computedStyle = window.getComputedStyle(ctaInputSectionEl);
      window.originalBottomValue = computedStyle.bottom;
    }

    const bannerHeight = getVisibleCCBannerHeight();
    const originalValue = parseInt(window.originalBottomValue) || 16;
    const newBottomValue = originalValue + bannerHeight;

    ctaInputSectionEl.style.bottom = `${newBottomValue}px`;
  }

  function observeCCBanner() {
    if (!ccBanner) return;

    const observer = new MutationObserver(adjustCtaSectionElementPosition);
    observer.observe(ccBanner, {
      attributes: true,
      attributeFilter: ['style', 'class'],
      childList: true,
      subtree: true
    });
  }

  function initCCBannerAdjustment() {
    ctaInputSectionEl = document.querySelector(CTA_INPUT_SECTION_EL_SELECTOR);
    ccBanner = document.querySelector(CC_BANNER_SELECTOR);

    if (!ctaInputSectionEl) return;

    adjustCtaSectionElementPosition();

    const debouncedAdjust = debounce(
      adjustCtaSectionElementPosition,
      DEBOUNCE_DELAY
    );
    window.addEventListener('resize', debouncedAdjust);

    observeCCBanner();
  }

  // gsap scroll trigger
  function refreshScrollTrigger() {
    clearTimeout(window.scrollTriggerRefreshTimeout);
    window.scrollTriggerRefreshTimeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, SCROLL_TRIGGER_DEBOUNCE);
  }

  function setupPageHeightObserver() {
    if (resizeObserver) return;

    resizeObserver = new ResizeObserver(refreshScrollTrigger);
    resizeObserver.observe(document.body);
  }

  function setupStyleObserver(element) {
    if (styleObserver || !element) return;

    styleObserver = new MutationObserver(refreshScrollTrigger);
    styleObserver.observe(element, {
      attributes: true,
      attributeFilter: ['style']
    });
  }

  function getCtaInputSectionBottomOffset(element) {
    const computedStyle = window.getComputedStyle(element);
    const bottomValue = computedStyle.bottom;
    return parseInt(bottomValue) || 0;
  }

  function createScrollTriggers() {
    const ctaSectionEl = document.querySelector(CTA_SECTION_SELECTOR);
    const ctaAnimTriggerEl = document.querySelector(CTA_ANIM_TRIGGER_SELECTOR);
    const localCtaInputSectionEl = document.querySelector(
      CTA_INPUT_SECTION_EL_SELECTOR
    );

    let headerInputEl = document.querySelector(
      CONVERSION_BANNER_TRIGGER_SELECTOR
    );
    if (!headerInputEl) {
      headerInputEl = document.querySelector('header');
    }

    if (!ctaSectionEl || !ctaAnimTriggerEl || !localCtaInputSectionEl) return;

    // cta animation trigger
    ScrollTrigger.create({
      trigger: ctaAnimTriggerEl,
      start: () =>
        `bottom+=${getCtaInputSectionBottomOffset(localCtaInputSectionEl)}px bottom`,
      refreshPriority: -1,
      onEnter: () => {
        ctaSectionEl.classList.add('is-animated');
        localCtaInputSectionEl.classList.add('is-animated');
      },
      onLeaveBack: () => {
        ctaSectionEl.classList.remove('is-animated');
        localCtaInputSectionEl.classList.remove('is-animated');
      }
    });

    // header input trigger
    if (headerInputEl) {
      ScrollTrigger.create({
        trigger: headerInputEl,
        start: 'bottom top',
        end: 'bottom top',
        refreshPriority: -1,
        onLeave: () => {
          localCtaInputSectionEl.classList.add('is-visible');
        },
        onEnterBack: () => {
          localCtaInputSectionEl.classList.remove('is-visible');
        }
      });
    }

    // observers
    setupPageHeightObserver();
    setupStyleObserver(localCtaInputSectionEl);
  }

  function initGSAP() {
    gsap.registerPlugin(ScrollTrigger);
    createScrollTriggers();
    initCCBannerAdjustment();
  }

  // init
  async function loadGSAPScripts() {
    try {
      await loadScript(GSAP_CORE_SRC);
      await loadScript(GSAP_SCROLL_TRIGGER_SRC);
      return true;
    } catch (error) {
      return false;
    }
  }

  if (isGSAPLoaded()) {
    initGSAP();
  } else {
    loadGSAPScripts().then((success) => {
      if (success) initGSAP();
    });
  }
});

/* ===== INLINE JAVASCRIPT ===== */

'use strict';
document.addEventListener('DOMContentLoaded', () => {
  //  hide heading on panel show
  const inputSection = document.querySelector(
    '[data-element="0625-cta-input-section"]'
  );
  const heading = document.querySelector('[data-element="0625-cta-h"]');
  const input = inputSection?.querySelector('input');

  input?.addEventListener('focus', () => {
    heading?.classList.add('heading-is-hidden');
  });

  input?.addEventListener('blur', () => {
    heading?.classList.remove('heading-is-hidden');
  });
});

/* ===== INLINE JAVASCRIPT ===== */

"use strict";
// show current UTC year in footer
document.addEventListener('DOMContentLoaded', () => {
    const footerYearEl = document.querySelector('[data-element="footer-year"]');
    if (footerYearEl) {
        const currentUTCYear = new Date().getUTCFullYear();
        footerYearEl.textContent = currentUTCYear.toString();
    }
});

/* ===== INLINE JAVASCRIPT ===== */

// Fix iOS: ensure first video frame is displayed for videos without a poster
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('video').forEach((video) => {
    const posterValue = video.getAttribute('poster');
    const dataPosterValue = video.getAttribute('data-poster');
    const hasPoster =
      (posterValue && posterValue !== '') ||
      (dataPosterValue && dataPosterValue !== '');
    if (hasPoster) return;

    for (const attr of ['src', 'data-src']) {
      const value = video.getAttribute(attr);
      if (value && !value.includes('#t=')) {
        video.setAttribute(attr, `${value}#t=0.1`);
      }
    }
  });
});

/* ===== INLINE JAVASCRIPT ===== */

"use strict";
/*
 * START of Custom form validation
 */
document.addEventListener('DOMContentLoaded', () => {
    // Get the current URL
    const currentUrl = window.location.href;
    const prefix = currentUrl.includes('es-es')
        ? 'https://clip.opus.pro/es-es'
        : 'https://clip.opus.pro';
    const projectSubmit = prefix + '/project-submit';
    const demoPrefix = 'https://clip.opus.pro' + '/clip';
    const params = new URLSearchParams(window.location.search); // contains ?
    // * START of Custom form validation
    // function to get custom URL
    const getCustomUrl = (button) => {
        return button.data('custom-url');
    };
    // openApp function
    function openApp(link, utmContent, submitButton) {
        const p = getQueryParams(utmContent);
        p.set('video_link', link);
        // get stored params and merge them
        const storedParams = retrieveParameters();
        Object.entries(storedParams).forEach(([key, value]) => {
            p.set(key, value);
        });
        if (!link)
            return;
        const customUrl = getCustomUrl($(submitButton));
        const submitUrl = customUrl || projectSubmit;
        window.open(`${submitUrl}?${p}`, '_blank');
    }
    // wrapper for goToDashboard
    function handleDashboardRedirect(button) {
        const customUrl = getCustomUrl($(button));
        if (customUrl) {
            const p = getQueryParams();
            // get stored params and merge them
            const storedParams = retrieveParameters();
            Object.entries(storedParams).forEach(([key, value]) => {
                p.set(key, value);
            });
            window.location.href = `${customUrl}?${p.toString()}`;
        }
        else {
            goToDashboard(); // fall back to global function
        }
    }
    // override upload-file click handlers
    $('[data-element="cta-wrapper"]').each(function () {
        const $wrapper = $(this);
        const $form = $wrapper.find('form');
        const $uploadButton = $wrapper.find('[id^="upload-file"]');
        if ($form.length && $uploadButton.length) {
            const $submitButton = $form.find('[wr-type="submit"]');
            const customUrl = getCustomUrl($submitButton);
            if (customUrl) {
                // remove the original click handler
                $uploadButton.off('click');
                // add custom handler
                $uploadButton.on('click', function (e) {
                    e.preventDefault();
                    handleDashboardRedirect($submitButton);
                });
            }
        }
    });
    $('[wr-type="error"]').hide(); // Hide errors
    $('[wr-type="required-field"]').removeClass('error'); // Remove error state from fields
    $('[wr-type="submit"]').closest('form').attr('form-errors', false); // Set form-errors to false for each form.
    const fieldError = function (field) {
        field.parent().siblings('[wr-type="error"]').show(); // Show error message
        field.siblings('[wr-type="error"]').show(); // Show error message
        field.addClass('error'); // Add error state to this field
        field.closest('form').attr('form-errors', true);
    };
    // Youtube URL validation function
    function isValidURL(url) {
        const urlPattern = /[a-zA-Z0-9_-]{11}/i;
        return urlPattern.test(url);
    }
    // Click on the Submit button
    $('[wr-type="submit"]').click(function () {
        // Check each required field
        $(this)
            .closest('form')
            .find('[wr-type="required-field"]')
            .each(function () {
            if ($(this).val().length === 0 && $(this).attr('type') !== 'url') {
                // If this field is empty and not url
                fieldError($(this));
            }
            else if ($(this).val().length === 0 &&
                $(this).attr('type') === 'url') {
                // If this field is empty and url
                const submitButton = $(this)
                    .closest('form')
                    .find('[wr-type="submit"]');
                handleDashboardRedirect(submitButton);
            }
            else if ($(this).attr('type') === 'url' && // Validation for url fields
                !isValidURL($(this).val())) {
                fieldError($(this));
            }
        });
        // DO something if there are no errors
        if ($(this).closest('form').attr('form-errors') === 'false') {
            // $(this).parents('form').submit();
            const input = $(this).closest('form').find('input[type="url"]');
            openApp(input.val(), $(this).data('utm-content'), this);
        }
    });
    // Remove errors from field
    $('[wr-type="required-field"]').on('input blur', function () {
        $(this).removeClass('error');
        $(this).parent().siblings('[wr-type="error"]').hide();
        $(this).siblings('[wr-type="error"]').hide();
        $(this).closest('form').attr('form-errors', false);
    });
    // Press Enter
    $('input, textarea').keypress(function (e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            $(this).trigger('change');
            $(this).closest('form').find('[wr-type="submit"]').click();
        }
    });
});
/*
 * END of Custom form validation
 */

/* ===== INLINE JAVASCRIPT ===== */

"use strict";
/*
 * Show a guide panel on focus input START
 */
document.addEventListener('DOMContentLoaded', () => {
    const urlInputs = document.querySelectorAll('input[type="url"]');
    urlInputs.forEach((input) => {
        const wrapper = input.closest('[data-element="input-wrapper"]');
        const panel = wrapper && wrapper.querySelector('[data-element="input-panel"]');
        input.addEventListener('focus', () => {
            if (panel) {
                panel.style.opacity = '1';
            }
        });
        input.addEventListener('blur', () => {
            if (panel) {
                panel.style.opacity = '0';
            }
        });
    });
});
/*
 * Show a guide panel on focus input END
 */

/* ===== INLINE JAVASCRIPT ===== */

'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const GSAP_CORE_SRC =
    'https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js';

  const mobileBreakpoint = window.matchMedia('(max-width: 991px)');
  const wrappers = document.querySelectorAll(
    '[data-element="input-with-custom-placeholder-wrapper"]'
  );
  const timelines = [];
  const originalTexts = new WeakMap();
  let isAnimating = false;

  const initPlaceholderAnimations = () => {
    function setupInputHandlers() {
      wrappers.forEach((wrapper) => {
        const input = wrapper.querySelector('input');
        const placeholder = wrapper.querySelector('[data-placeholder-texts]');
        if (!input || !placeholder) return;
        input.addEventListener('input', () => {
          placeholder.style.display = input.value ? 'none' : 'flex';
        });
      });
    }

    function storeOriginalTexts() {
      wrappers.forEach((wrapper) => {
        const placeholder = wrapper.querySelector('[data-placeholder-texts]');
        if (placeholder) {
          originalTexts.set(placeholder, placeholder.textContent.trim());
        }
      });
    }

    function createWordSpans(element) {
      const words = element.textContent
        .split(' ')
        .filter((word) => word.trim());
      element.innerHTML = words
        .map((word) => `<span class="input-placeholder-word">${word}</span>`)
        .join(' ');
    }

    function animateTextCycle(textIndex, wrapper) {
      if (!isAnimating) return;
      const placeholder = wrapper.querySelector('[data-placeholder-texts]');
      const texts = placeholder
        ?.getAttribute('data-placeholder-texts')
        ?.split(';');
      if (!placeholder || !texts) return;
      placeholder.textContent = texts[textIndex];
      createWordSpans(placeholder);
      const words = placeholder.querySelectorAll('.input-placeholder-word');
      if (!words.length) return;
      const timeline = gsap.timeline({
        onComplete: () => {
          if (isAnimating) {
            animateTextCycle((textIndex + 1) % texts.length, wrapper);
          }
        }
      });
      timelines.push(timeline);
      timeline
        .fromTo(
          words,
          { opacity: 0, yPercent: 50 },
          {
            duration: 0.04,
            stagger: 0.04,
            opacity: 1,
            yPercent: 0,
            ease: 'power1.out'
          }
        )
        .to(words, {
          delay: 1,
          duration: 0.03,
          stagger: 0.04,
          opacity: 0,
          yPercent: -50,
          ease: 'power1.out'
        });
    }

    function startAnimations() {
      isAnimating = true;
      wrappers.forEach((wrapper) => animateTextCycle(0, wrapper));
    }

    function stopAnimations() {
      isAnimating = false;
      timelines.forEach((timeline) => timeline.kill());
      timelines.length = 0;
      requestAnimationFrame(() => {
        wrappers.forEach((wrapper) => {
          const placeholder = wrapper.querySelector('[data-placeholder-texts]');
          if (placeholder) {
            const originalText = originalTexts.get(placeholder);
            if (originalText) {
              placeholder.textContent = originalText;
              gsap.set(placeholder, { clearProps: 'all' });
            }
          }
        });
      });
    }

    function handleBreakpointChange() {
      if (mobileBreakpoint.matches) {
        startAnimations();
      } else {
        stopAnimations();
      }
    }

    // init
    setupInputHandlers();
    storeOriginalTexts();
    mobileBreakpoint.addEventListener('change', handleBreakpointChange);
    handleBreakpointChange();
  };

  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = () => reject(new Error(`Failed to load ${src}`));
      document.head.appendChild(script);
    });
  };

  const loadGSAPScripts = async () => {
    try {
      await loadScript(GSAP_CORE_SRC);
      return true;
    } catch (error) {
      return false;
    }
  };

  const isGSAPLoaded = () => {
    return typeof gsap !== 'undefined';
  };

  if (isGSAPLoaded()) {
    initPlaceholderAnimations();
  } else {
    loadGSAPScripts().then((success) => {
      if (success) initPlaceholderAnimations();
    });
  }
});

/* ===== INLINE JAVASCRIPT ===== */

'use strict';
window.addEventListener('load', () => {
  // show-hide conversion banner
  const banner = document.querySelector('[data-element="conversion-banner"]');
  let hideBannerTimeout;
  function showBanner() {
    if (!banner) return;
    clearTimeout(hideBannerTimeout);
    banner.style.display = 'flex';
    banner.offsetHeight;
    banner.style.opacity = '1';
  }
  function hideBanner() {
    if (!banner) return;
    banner.style.opacity = '0';
    hideBannerTimeout = setTimeout(() => {
      banner.style.display = 'none';
    }, 300);
  }
  const bannerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        hideBanner();
      } else {
        showBanner();
      }
    });
  });
  function getVisibleTrigger() {
    const customTriggers = document.querySelectorAll(
      '[data-element="conversion-banner-trigger"]'
    );
    for (const trigger of customTriggers) {
      const rect = trigger.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        return trigger;
      }
    }
    const headers = document.querySelectorAll('header');
    for (const header of headers) {
      const rect = header.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        return header;
      }
    }
    return null;
  }
  function handleViewportChange(event) {
    const matches =
      event instanceof MediaQueryList ? event.matches : event.matches;
    if (matches) {
      const visibleTrigger = getVisibleTrigger();
      if (visibleTrigger) {
        bannerObserver.observe(visibleTrigger);
      }
    } else {
      hideBanner();
      bannerObserver.disconnect();
    }
  }
  const mediaQuery = window.matchMedia('(max-width: 991px)');
  handleViewportChange(mediaQuery);
  mediaQuery.addEventListener('change', handleViewportChange);
});

/* ===== INLINE JAVASCRIPT ===== */

"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const conversionBannerButton = document.querySelector('[data-element="conversion-banner-button"]');
    if (!conversionBannerButton) {
        return;
    }
    const customUrl = conversionBannerButton.getAttribute('data-custom-url');
    if (customUrl && customUrl.trim() !== '') {
        const existingUrl = new URL(conversionBannerButton.href);
        const newUrl = new URL(customUrl);
        const existingParams = new URLSearchParams(existingUrl.search);
        existingParams.forEach((value, key) => {
            newUrl.searchParams.set(key, value);
        });
        const customUrlParams = new URLSearchParams(new URL(customUrl).search);
        customUrlParams.forEach((value, key) => {
            newUrl.searchParams.set(key, value);
        });
        conversionBannerButton.href = newUrl.toString();
    }
});

/* ===== INLINE JAVASCRIPT ===== */

// Show navbar affiliate link, if url contains 'utm_source=vidcon'
  const currentURL = window.location.href
  const navAffiliateLink = document.querySelector('[data-element="nav-affiliate-link"]')
  if (navAffiliateLink) {
    navAffiliateLink.classList.toggle('a_hide', !currentURL.includes('utm_source=vidcon'))
  }

/* ===== INLINE JAVASCRIPT ===== */

// Studio navbar white background-color interaction
  // Check if the '.a_studio-navbar_component' element exists
  // and is not undefined or null
  if (
    typeof document.querySelector('.a_studio-navbar_component') !== 'undefined' &&
    document.querySelector('.a_studio-navbar_component') != null
  ) {
    // Get references to the '.a_navbar_spacer' and '.a_studio-navbar_component' elements
    const navBarSpacer = document.querySelector('.a_navbar_spacer')
    const studioNavbar = document.querySelector('.a_studio-navbar_component')
    // Create a new IntersectionObserver that will call a function when
    // the '.a_navbar_spacer' element intersects with the viewport
    const studioNavbarIntersectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // If the '.a_navbar_spacer' element is in view, remove the 'white' class
          // from the '.a_studio-navbar_component' element
          studioNavbar.classList.remove('white')
        } else if (!entries[0].isIntersecting != null) {
          // If the '.a_navbar_spacer' element is not in view, add the 'white' class
          // to the '.a_studio-navbar_component' element
          studioNavbar.classList.add('white')
        }
      },
      { threshold: [0.9] }, // Set the threshold for intersection to 0.9
    )
    // Observe the '.a_navbar_spacer' element for intersection with the viewport
    studioNavbarIntersectionObserver.observe(navBarSpacer)
  }

/* ===== INLINE JAVASCRIPT ===== */

// Set maximum height of nav menu to 100vh on small devices
  $(window).on('load resize', () => {
    const documentWidth = $(document).width()
    if (documentWidth < 992 && $('[data-element="navmenu"]').length) {
      const navbarHeight = $('*[data-element="navbar"]').height()
      const navmenuHeight = window.innerHeight - navbarHeight
      $('*[data-element="navmenu"]').css('max-height', `${navmenuHeight}px`)
    } else {
      $('*[data-element="navmenu"]').css('max-height', 'none')
    }
  })

/* ===== INLINE JAVASCRIPT ===== */

const banner = document.querySelector('[fs-cc="banner"]')
  if (banner) {
    const closeButton = document.querySelector('[fs-cc="close"]')
    // Function to set a cookie
    function setCookie(name, value, days) {
      let expires = ''
      if (days) {
        const date = new Date()
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
        expires = `; expires=${date.toUTCString()}`
      }
      document.cookie = `${name}=${value}${expires}; path=/`
    }
    // Function to get a cookie by name
    function getCookie(name) {
      const nameEQ = `${name}=`
      const ca = document.cookie.split(';')
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) === ' ') {
          c = c.substring(1, c.length)
        }
        if (c.indexOf(nameEQ) === 0) {
          return c.substring(nameEQ.length, c.length)
        }
      }
      return null
    }
    // Function to hide the cookie banner
    function hideCookieBanner() {
      banner.style.display = 'none'
    }
    // Don't display multiple cookie banners for EU countries:
    // Display the cookie banner when the page loads or country info loads
    // NOTE: Parker added IN, AU, NZ to the end of the list on 1.5.25 (previously ended with SE
    function displayCookieBanner() {
      if (!getCookie('cookieConsent') && window._oIP && !['AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'IN', 'AU', 'NZ'].includes(window._oIP.countryCode)) {
        banner.style.display = 'flex'
      }
    }
    window.addEventListener('load', displayCookieBanner)
    window.addEventListener('ipInfoLoaded', displayCookieBanner)

    // Add click event listeners to close button
    closeButton?.addEventListener('click', () => {
      // Set a cookie or store the acceptance in local storage
      setCookie('cookieConsent', true, 180)
      hideCookieBanner()
    })
  }

/* ===== INLINE JAVASCRIPT ===== */

function getQueryParams(utmContent) {
    const p = new URLSearchParams(window.location.search)
    if (utmContent && !p.get('utm_content')) p.set('utm_content', utmContent)
    return p
  }
  function goToDashboard(utmContent) {
    const p = getQueryParams(utmContent)
    
    // get stored params and merge them
    const storedParams = retrieveParameters();
    Object.entries(storedParams).forEach(([key, value]) => {
      p.set(key, value);
    });

    
    console.log("QueryParams",p);
    const baseUrl = 'https://clip.opus.pro'
    const currentUrl = new URL(window.location.href)
    console.log("Pathname",currentUrl.pathname);

    let dashboardUrl = `${baseUrl}/dashboard?${p.toString()}`

    // Yong--0511-2024:support Spanish login/sign up page
    if (currentUrl.pathname.includes('/es-es')) {
      dashboardUrl = `${baseUrl}/es-es/dashboard?${p.toString()}`
    }
    window.location.href = dashboardUrl
  }
  $('#sign-in-mobile').on('click', function() {
    goToDashboard()
  })
  $('#sign-in').on('click', function() {
    goToDashboard()
  })
  $('#my-dashboard').on('click', function() {
    goToDashboard()
  })
  $('#my-dashboard-mobile').on('click', function() {
    goToDashboard()
  })
  $('#start-free-trial').on('click', function() {
    goToDashboard()
  })
  $('[id^="upload-file"]').on('click', function() {
    goToDashboard()
  })

/* ===== INLINE JAVASCRIPT ===== */

(function(i, s, o, g, r, a, m) {
    i[o] = i[o] || function() {
      (i[o].q = i[o].q || []).push(arguments)
    }
    a = s.createElement(g)
    m = s.getElementsByTagName(g)[0]
    a.async = 1
    a.src = r + '?auth=' +
      s.getElementById(o + '-js').getAttribute('data-pw-auth')
    m.parentNode.insertBefore(a, m)
  })(window, document, 'profitwell', 'script', 'https://public.profitwell.com/js/profitwell.js')
  profitwell('start', {})

/* ===== INLINE JAVASCRIPT ===== */

(function () {
    // OC project token
    const OC_TOKEN = "c6867cb9d3aa0892931dab875068281c";

    // AO project token
    const AO_TOKEN = "7bb8bd164664df4c5ef69fcaae8f1de0";

    // Keeps OC behavior unchanged (still auto pageviews, still default instance)
    mixpanel.init(OC_TOKEN, {
      api_host: "https://mp.opus.pro",
      track_pageview: true,
    });

    // Add AO as a named instance (no auto pageviews!)
    mixpanel.init(
      AO_TOKEN,
      {
        api_host: "https://mp.opus.pro",
        track_pageview: false,
      },
      "ao"
    );

    // Routes that should ALSO send pageview into AO
    const path = window.location.pathname;
    const isAOPage =
          path === "/agent" ||
          path.startsWith("/agent/") ||
          path === "/ai-motion-graphics";

    if (!isAOPage) return;

    const url = new URL(window.location.href);
    const props = {
      referrer: document.referrer || undefined,
      utm_source: url.searchParams.get("utm_source") || undefined,
      utm_medium: url.searchParams.get("utm_medium") || undefined,
      utm_campaign: url.searchParams.get("utm_campaign") || undefined,
      utm_content: url.searchParams.get("utm_content") || undefined,
      utm_term: url.searchParams.get("utm_term") || undefined,
      lang: document.documentElement.lang || undefined,
      // browser language (for consistency with existing tracking)
      browserLanguage: (navigator.languages?.[0] || navigator.language || 'en').split('-')[0],
    };

    // Fire a pageview into AO only (OC pageview already happens automatically)
    if (mixpanel.ao?.track_pageview) {
      mixpanel.ao.track_pageview(props);
    } else {
      // fallback if track_pageview isn't available on the client version
      mixpanel.ao.track("$pageview", props);
    }
  })();

/* ===== INLINE JAVASCRIPT ===== */

$(function(){
    let referral_url = new URL(window.location.href);
    if (referral_url.searchParams.has('gclid') && referral_url.searchParams.has('via')) {
      setTimeout(function(){
        document.cookie = "rewardful.referral=;domain=.opus.pro;path=/;max-age=0";
        console.log("f")
      }, 2000)
    }
  });

/* ===== INLINE JAVASCRIPT ===== */

"use strict";
  (function () {
    const navbarBannersWrappers = document.querySelectorAll('[data-element="navbar-banners-wrapper"]');
    const navbarBanners = document.querySelectorAll('[data-navbar-banner]');
    function showBannersWrappers() {
      navbarBannersWrappers.forEach((navbarBannersWrapper) => {
        navbarBannersWrapper.style.display = 'grid';
        navbarBannersWrapper.style.gridTemplateRows = '0fr';
        setTimeout(() => {
          navbarBannersWrapper.style.gridTemplateRows = '1fr';
        });
      });
    }
    function showBanner(bannerId) {
      navbarBanners.forEach((banner) => {
        if (banner.getAttribute('data-navbar-banner') === bannerId) {
          banner.style.display = 'grid';
        }
      });
    }
    function hideBanner(bannerId) {
      navbarBanners.forEach((banner) => {
        if (banner.getAttribute('data-navbar-banner') === bannerId) {
          setCookie(`${bannerId}`, true, 180);
          banner.style.gridTemplateRows = '0fr';
          setTimeout(() => {
            banner.style.display = 'none';
          }, 200);
        }
      });
    }
    function setCookie(name, value, days) {
      let expires = ''
      if (days) {
        const date = new Date()
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
        expires = `; expires=${date.toUTCString()}`
      }
      document.cookie = `${name}=${value}${expires}; path=/`
    }
    function getCookie(name) {
      const nameEQ = `${name}=`
      const ca = document.cookie.split(';')
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) === ' ') {
          c = c.substring(1, c.length)
        }
        if (c.indexOf(nameEQ) === 0) {
          return c.substring(nameEQ.length, c.length)
        }
      }
      return null
    }
    window.addEventListener('load', () => {
      // get banners array to show
      const bannersIdsToShowDiv = document.querySelector('[data-show-banners-all-pages]');
      // all pages
      const bannersIdsToShowAllPagesAttributeValue = bannersIdsToShowDiv === null || bannersIdsToShowDiv === void 0 ? void 0 : bannersIdsToShowDiv.getAttribute('data-show-banners-all-pages');
      let bannersIdsToShowAllPages = [];
      if (bannersIdsToShowAllPagesAttributeValue) {
        bannersIdsToShowAllPages = bannersIdsToShowAllPagesAttributeValue
        .split(',')
        .map((value) => value.trim());
      }
      // this page
      const bannersIdsToShowCurrentPageAttributeValue = bannersIdsToShowDiv === null || bannersIdsToShowDiv === void 0 ? void 0 : bannersIdsToShowDiv.getAttribute('data-show-banners-current-page');
      let bannersIdsToShowCurrentPage = [];
      if (bannersIdsToShowCurrentPageAttributeValue) {
        bannersIdsToShowCurrentPage = bannersIdsToShowCurrentPageAttributeValue
        .split(',')
        .map((value) => value.trim());
      }
      // concat
      const bannersIdsToShowConcat = [
        ...bannersIdsToShowAllPages,
        ...bannersIdsToShowCurrentPage,
      ];
      const bannersIdsToShow = [...new Set(bannersIdsToShowConcat)];
      // show needed banners
      navbarBanners.forEach((banner) => {
        const currentBannerId = banner.getAttribute('data-navbar-banner');
        // return if banner is not needed
        if (currentBannerId && !bannersIdsToShow.includes(currentBannerId)) {
          return;
        }
        const navbarBannerCloseTriggers = banner.querySelectorAll('[data-element="navbar-banner-close-trigger"]');
        if (!getCookie(`${currentBannerId}`)) {
          if (currentBannerId) {
            showBanner(currentBannerId);
          }
        }
        navbarBannerCloseTriggers.forEach((trigger) => {
          trigger.addEventListener('click', () => {
            if (currentBannerId) {
              hideBanner(currentBannerId);
            }
          });
        });
      });
      showBannersWrappers();
    });
  })();

/* ===== INLINE JAVASCRIPT ===== */

/**
 * Universal FAQ JSON-LD injector (with Finsweet support)
 * - Detects existing FAQ (@graph-aware) and skips unless window.opusFAQForce = true
 * - Harvests: Finsweet Accordion, Webflow accordion, custom FAQ blocks, "Got questions" sections, plain-text blog FAQs
 * - Sanitizes answers to minimal HTML
 * - Re-runs briefly to catch late DOM
 */
(function () {
  function text(el){ return (el && (el.innerText || el.textContent) || '').trim(); }
  function isHeading(el){ return !!el && /^H[1-6]$/.test(el.tagName); }
  function hLevel(el){ return isHeading(el) ? +el.tagName.slice(1) : 7; }
  function endsQ(s){ return /\?\s*!*$/.test(s||''); }
  function likelyQ(s){ return !!s && s.length>=6 && s.length<=200 && endsQ(s); }
  function trimToFirstQ(s){ var i=(s||'').indexOf('?'); return i>=0 ? s.slice(0,i+1).trim() : s; }

  // Robust "page already has FAQ" detector (arrays & @graph)
  function pageHasFAQ(){
    return Array.from(document.querySelectorAll('script[type="application/ld+json"]')).some(function (s) {
      try {
        var o = JSON.parse(s.textContent);
        function hasFAQNode(node){
          if (!node || typeof node !== 'object') return false;
          var t = node['@type'];
          if (Array.isArray(t) ? t.includes('FAQPage') : t === 'FAQPage') return true;
          if (Array.isArray(node)) return node.some(hasFAQNode);
          if (Array.isArray(node['@graph'])) return node['@graph'].some(hasFAQNode);
          return false;
        }
        return hasFAQNode(o);
      } catch (e) { return false; }
    });
  }

  // Sanitizer: safe, minimal HTML
  function sanitizeAllowedHTML(el){
    if (!el) return '';
    var c = el.cloneNode(true);
    c.querySelectorAll('script,style,noscript,form,input,button,select,textarea,iframe').forEach(function(n){ n.remove(); });
    // If a nested question sneaks into the answer, cut it and everything after it
    var cut = c.querySelector('h1,h2,h3,h4,h5,h6, .a-ca_faq_question, .a-ca_faq_question_h3, .w-accordion-title, [fs-accordion-element="trigger"]');
    if (cut){ var n = cut; while (n){ var next = n.nextSibling; n.remove(); n = next; } }
    // Keep only simple content; unwrap DIV/SPAN
    var allowed = new Set(['P','UL','OL','LI','A','BR','STRONG','EM','CODE','BLOCKQUOTE']);
    function unwrap(node){
      var parent = node.parentNode;
      while (node.firstChild) parent.insertBefore(node.firstChild, node);
      parent.removeChild(node);
    }
    c.querySelectorAll('*').forEach(function(node){
      if (!allowed.has(node.tagName)) {
        if (node.tagName === 'DIV' || node.tagName === 'SPAN') unwrap(node);
        else node.remove();
      }
    });
    // Strip attributes (keep basic link attrs)
    c.querySelectorAll('*').forEach(function(node){
      var keep = (node.tagName === 'A') ? ['href','rel','target'] : [];
      Array.from(node.attributes).forEach(function(attr){
        if (!keep.includes(attr.name.toLowerCase())) node.removeAttribute(attr.name);
      });
    });
    return (c.innerHTML || '').trim();
  }

  function buildAndInject(faqs){
    if (faqs.length < 2) return false; // avoid false positives
    var jsonLd = { "@context":"https://schema.org", "@type":"FAQPage", "mainEntity": faqs };
    window.opusFAQ = { export: function(){ return JSON.stringify(jsonLd, null, 2); }, count: faqs.length };
    var s = document.createElement('script');
    s.type = 'application/ld+json';
    s.text = JSON.stringify(jsonLd);
    document.head.appendChild(s);
    return true;
  }

  function run(){
    var FORCE = !!window.opusFAQForce;
    if (!FORCE && pageHasFAQ()) return false;

    var faqs = [], seen = new Set();
    function addFAQ(q, aHTML){
      if (!q || !aHTML) return;
      q = trimToFirstQ(q);
      if (!endsQ(q)) return;
      var key = q.toLowerCase().replace(/\s+/g,' ').trim();
      if (seen.has(key)) return; seen.add(key);
      faqs.push({ "@type":"Question", "name": q, "acceptedAnswer": { "@type":"Answer", "text": aHTML } });
    }

    // ================= 1) Component harvesting =================
    var containers = [];

    // Known wrappers
    document.querySelectorAll('.a-ca_faq_wrapper .a-ca_faq_items, .home0625_faq_accordions').forEach(function(el){ containers.push(el); });

    // Finsweet group wrapper
    document.querySelectorAll('[fs-accordion-element="group"]').forEach(function(el){ if (!containers.includes(el)) containers.push(el); });

    // Generic patterns
    document.querySelectorAll('[data-faq-items], .w-accordion, [class*="faq_accordions"], [class*="faq-accordions"], [class*="faq"] [class*="items"], [class*="faq"] [class*="list"], [class*="faq"], [id*="faq"]').forEach(function(el){
      if (!containers.includes(el)) containers.push(el);
    });

    function findItems(cont){
      // Finsweet items first
      var items = Array.from(cont.querySelectorAll('[fs-accordion-element="item"]'));
      // Other item patterns
      items = items.concat(Array.from(cont.querySelectorAll('[data-faq-item], .w-accordion-item, [class*="accordion-item"], [class*="faq-item"], [class*="faq__item"], [class*="faqAccordionItem"]')));
      // Fallback: direct children that look like items
      if (!items.length && cont.children && cont.children.length) {
        items = Array.from(cont.children).filter(function(el){
          return el.querySelector('[fs-accordion-element="trigger"], .a-ca_faq_question_h3, [data-faq-q]') &&
                 el.querySelector('[fs-accordion-element="content"], .a-ca_faq_answer, [data-faq-a]');
        });
      }
      // Deduplicate
      return Array.from(new Set(items));
    }

    function extractFromItem(item){
      // Prefer Finsweet trigger/content, then explicit data attrs, then common classes
      var qEl = item.querySelector('[fs-accordion-element="trigger"], [data-faq-q], .a-ca_faq_question_h3, .w-accordion-title, h1,h2,h3,h4,h5,h6, button[aria-controls], [role="button"]');
      var aEl = item.querySelector('[fs-accordion-element="content"], [data-faq-a], .a-ca_faq_answer, .faq-a, .faq__a, .w-accordion-content, .accordion__content, [role="region"]');
      var q = text(qEl);
      var aHTML = sanitizeAllowedHTML(aEl);
      addFAQ(q, aHTML);
    }

    containers.forEach(function(cont){ findItems(cont).forEach(extractFromItem); });

    // ================= 2) Plain-text blog endings =================
    var articleRoots = Array.from(document.querySelectorAll('article, [role="main"] article, .w-richtext, [itemprop="articleBody"], [data-article], main article, .blog_richtext'));
    if (!articleRoots.length){
      var rtes = document.querySelectorAll('.w-richtext'); if (rtes.length) articleRoots = [rtes[rtes.length-1]];
    }
    function lastFAQAnchor(root){
      var hs = Array.from(root.querySelectorAll('h2,h3,h4,h5,h6')).filter(function(h){
        var s = text(h).toLowerCase();
        return /\bfaq\b|\bfaqs\b|frequently\s+asked/.test(s);
      });
      return hs.length ? hs[hs.length-1] : null;
    }
    function collectPlain(root){
      var anchor = lastFAQAnchor(root); if (!anchor) return;
      var stop = hLevel(anchor), node = anchor.nextElementSibling;
      function isQ(el){
        if (!el) return false;
        if (/^H[3-6]$/.test(el.tagName) && likelyQ(text(el))) return true;
        var strong = el.matches('p,li') ? el.querySelector('strong,b') : null;
        if (strong && likelyQ(text(strong))) return true;
        if (el.tagName==='P' && likelyQ(text(el))) return true;
        return false;
      }
      while (node){
        if (isHeading(node) && hLevel(node) <= stop) break;
        if (isQ(node)){
          var q = trimToFirstQ(text(node));
          var parts=[], cur=node.nextElementSibling;
          while (cur){
            if (isHeading(cur) && hLevel(cur) <= stop) break;
            if (isQ(cur)) break;
            if (/^(P|UL|OL|DIV|BLOCKQUOTE|FIGURE)$/i.test(cur.tagName)){
              var html = sanitizeAllowedHTML(cur); if (html) parts.push(html);
            }
            cur=cur.nextElementSibling;
          }
          if (parts.length) addFAQ(q, parts.join(''));
          node=cur; continue;
        }
        node=node.nextElementSibling;
      }
    }
    articleRoots.forEach(collectPlain);

    // ================= 3) "Got questions" sections =================
    // Headings
    var gotHeads = Array.from(document.querySelectorAll('h1,h2,h3,h4,h5,h6')).filter(function(h){
      return /got\s+questions!?/i.test(text(h));
    });
    // Containers that contain the phrase (e.g., homepage layout)
    var container1200 = Array.from(document.querySelectorAll('.a_container-1200, .home0625_faq_layout')).filter(function(el){
      return /got\s+questions!?/i.test(text(el));
    });
    if (!gotHeads.length && !container1200.length) {
      var candidates = Array.from(document.querySelectorAll('section, .section, [data-section], .wf-section, [class*="questions"], [class*="faq"], div, p, span'))
        .filter(function(el){ var s=text(el); return s && s.length<=120 && /got\s+questions!?/i.test(s); });
      gotHeads = candidates;
    }

    function nearestRegion(node){
      return node.closest('.home0625_faq_section, .a_container-1200, section, .section, [data-section], .wf-section, main, body') || document.body;
    }
    function harvestAround(node){
      var region = nearestRegion(node);
      // Prefer accordions inside the same region
      var roots = Array.from(region.querySelectorAll('[fs-accordion-element="group"], .w-accordion, [class*="accordion"], [role="tablist"], [aria-multiselectable]'));
      var row = node.parentElement;
      if (row){
        roots = Array.from(new Set(roots.concat(Array.from(row.querySelectorAll('[fs-accordion-element="group"], .w-accordion, [class*="accordion"], [role="tablist"], [aria-multiselectable]')))));
      }
      var found = 0;
      roots.forEach(function(r){ findItems(r).forEach(function(i){ extractFromItem(i); found++; }); });
      if (found) return;

      // Fallback: parse Q?/answer paragraphs after the label
      var stop = isHeading(node) ? hLevel(node) : 2;
      var nodeAfter = node.nextElementSibling;
      function isQNode(el){
        if (!el) return false;
        if (/^H[3-6]$/.test(el.tagName) && likelyQ(text(el))) return true;
        var strong = el.matches('p,li,div') ? el.querySelector('strong,b') : null;
        if (strong && likelyQ(text(strong))) return true;
        if ((el.tagName==='P' || el.tagName==='DIV') && likelyQ(text(el))) return true;
        return false;
      }
      var cur = nodeAfter;
      while (cur && cur !== region.nextElementSibling){
        if (isHeading(cur) && hLevel(cur) <= stop) break;
        if (isQNode(cur)){
          var qText=trimToFirstQ(text(cur)), parts=[], nxt=cur.nextElementSibling;
          while (nxt){
            if (isHeading(nxt) && hLevel(nxt) <= stop) break;
            if (isQNode(nxt)) break;
            if (/^(P|UL|OL|DIV|BLOCKQUOTE|FIGURE)$/i.test(nxt.tagName)){
              var html=sanitizeAllowedHTML(nxt); if (html) parts.push(html);
            }
            nxt=nxt.nextElementSibling;
          }
          if (parts.length) addFAQ(qText, parts.join(''));
          cur=nxt; continue;
        }
        cur=cur.nextElementSibling;
      }
    }
    gotHeads.forEach(harvestAround);
    container1200.forEach(harvestAround);

    return buildAndInject(faqs);
  }

  // Run now; if nothing injected, re-run briefly to catch late DOM
  var injected = run();
  if (!injected) {
    var attempts = 0, maxAttempts = 3, timer = null;
    var tryAgain = function(){ if (attempts >= maxAttempts) return; attempts++; if (!run()) timer = setTimeout(tryAgain, 500); };
    // MutationObserver to re-try when homepage blocks render
    var observer = new MutationObserver(function(){ tryAgain(); });
    try { observer.observe(document.documentElement, { childList: true, subtree: true }); } catch(e){}
    tryAgain();
  }
})();

/* ===== INLINE JAVASCRIPT ===== */

/* 
 (function() {
    // Helper: Check if an element is in the viewport
    function isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    }

    const footerCTA = document.getElementById('footer-cta-page-section');
    const floatingCTA = document.getElementById('floating-cta-bottom');

    function showFloatingCTA() {
      if (floatingCTA) {
        floatingCTA.style.setProperty('display', 'block', 'important');
      }
    }

    function hideFloatingCTA() {
      if (floatingCTA) {
        // Revert display back to default (or whatever CSS controls it)
        floatingCTA.style.removeProperty('display');
      }
    }

    function onScrollCheck() {
      if (!footerCTA || !floatingCTA) return;

      if (isInViewport(footerCTA)) {
        showFloatingCTA();
      } else {
        hideFloatingCTA();
      }
    }

    window.addEventListener('scroll', onScrollCheck);
    window.addEventListener('resize', onScrollCheck);
    document.addEventListener('DOMContentLoaded', onScrollCheck);
  })();
  */