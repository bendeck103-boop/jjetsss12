// ─── Domain Lists ─────────────────────────────────────────────────────────────

/** Only record responses from these domains (everything else is analytics junk). */
const ESSENTIAL_DOMAINS = [
    'jetsmart.com', 'www.jetsmart.com', 'booking.jetsmart.com',
    'home-assets.jetsmart.com', 'linkscl.jetsmart.com',
    'jetsmart.queue-it.net', 'static.queue-it.net', 'assets.queue-it.net',
    'fonts.googleapis.com', 'fonts.gstatic.com',
    'assets-us-01.kc-usercontent.com', 'preview-assets-us-01.kc-usercontent.com',
    'cdn.jsdelivr.net', 'cdnjs.cloudflare.com', 'code.jquery.com',
    'sdk-web.y.uno', 'api.y.uno', 'prod.y.uno',
    'pagos.compraqui.cl',
    'd21y75miwcfqoq.cloudfront.net', 'www.gstatic.com',
];

/** Domains to rewrite to localhost (ordered longest-first). */
const JETSMART_DOMAINS = [
    'api.y.uno',
    'prod.y.uno',
    'sdk-web.y.uno',
    'jetsmart.queue-it.net',
    'booking.jetsmart.com',
    'home-assets.jetsmart.com',
    'linkscl.jetsmart.com',
    'go.jetsmart.com',
    'hoteles.jetsmart.com',
    'paquetes.jetsmart.com',
    'www.jetsmart.com',
    'jetsmart.com',
];

// ─── API Path Classification ──────────────────────────────────────────────────

/** Paths whose JSON responses get city/date substitution. */
const FLIGHT_API_PATTERNS = [
    '/flight/flightpagedata', '/flight/retrieveschedule',
    '/flight/flightselection', '/flight/internalselect',
    '/flight/discountclubinfo', '/flight/select',
    '/baggage/', '/seatmap/', '/extras/', '/passenger/', '/payment/', '/booking/',
    '/breakdown/', '/getbookingdata', '/bundleoffer/',
];

/** Paths that should NEVER be transformed (station lists, config). */
const SKIP_TRANSFORM_PATTERNS = [
    'superstationswithcountries', '/station/', '/culture/',
    '/config/', '/resource/', '/localization/',
];

/** Fare-cache paths — get date-window shifting. */
const FARE_CACHE_PATTERNS = ['/farecache-lm/'];

// ─── Airport Map ──────────────────────────────────────────────────────────────

const AIRPORT_NAMES = {
    BOG: 'Aeropuerto El Dorado', MDE: 'Aeropuerto Jose Maria Cordova',
    CLO: 'Aeropuerto Alfonso Bonilla Aragon', CTG: 'Aeropuerto Rafael Nunez',
    BAQ: 'Aeropuerto Ernesto Cortissoz', BGA: 'Aeropuerto Palonegro',
    CUC: 'Aeropuerto Camilo Daza', PEI: 'Aeropuerto Matecana',
    ADZ: 'Aeropuerto Gustavo Rojas Pinilla', SMR: 'Aeropuerto Simon Bolivar',
    MTR: 'Aeropuerto Los Garzones', PSO: 'Aeropuerto Antonio Narino',
    SCL: 'Aeropuerto Arturo Merino Benitez', ANF: 'Aeropuerto Cerro Moreno',
    CCP: 'Aeropuerto Carriel Sur', CJC: 'Aeropuerto El Loa',
    IQQ: 'Aeropuerto Diego Aracena', LSC: 'Aeropuerto La Florida',
    ZCO: 'Aeropuerto La Araucania', PMC: 'Aeropuerto El Tepual',
    PUQ: 'Aeropuerto Carlos Ibanez',
    AEP: 'Aeroparque Jorge Newbery', EZE: 'Aeropuerto Ministro Pistarini',
    BUE: 'Aeropuerto de Buenos Aires', COR: 'Aeropuerto Ingeniero Taravella',
    MDZ: 'Aeropuerto El Plumerillo', BRC: 'Aeropuerto Teniente Candelaria',
    IGR: 'Aeropuerto Cataratas del Iguazu', NQN: 'Aeropuerto Presidente Peron',
    CRD: 'Aeropuerto General Enrique Mosconi', FTE: 'Aeropuerto Comandante Armando Tola',
    CPC: 'Aeropuerto Aviador Carlos Campos', ROS: 'Aeropuerto Islas Malvinas',
    TUC: 'Aeropuerto Teniente Benjamin Matienzo', SLA: 'Aeropuerto Martin Miguel de Guemes',
    LIM: 'Aeropuerto Jorge Chavez', CUZ: 'Aeropuerto Alejandro Velasco Astete',
    AQP: 'Aeropuerto Rodriguez Ballon',
    GRU: 'Aeroporto de Guarulhos', GIG: 'Aeroporto do Galeao',
    FLN: 'Aeroporto Hercilio Luz', NAT: 'Aeroporto de Natal',
    MVD: 'Aeropuerto de Carrasco', ASU: 'Aeropuerto Silvio Pettirossi',
    UIO: 'Aeropuerto Mariscal Sucre', GYE: 'Aeropuerto Jose Joaquin de Olmedo',
    MEX: 'Aeropuerto Benito Juarez',
    SDQ: 'Aeropuerto Las Americas', PUJ: 'Aeropuerto de Punta Cana',
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function isEssentialDomain(urlStr) {
    try {
        const host = new URL(urlStr).hostname;
        return ESSENTIAL_DOMAINS.some(d => host === d || host.endsWith('.' + d));
    } catch { return false; }
}

function isFlightRelatedUrl(urlStr) {
    try {
        const p = new URL(urlStr).pathname.toLowerCase();
        if (SKIP_TRANSFORM_PATTERNS.some(s => p.includes(s))) return false;
        return FLIGHT_API_PATTERNS.some(s => p.includes(s));
    } catch { return false; }
}

function isFareCacheUrl(urlStr) {
    try {
        const p = new URL(urlStr).pathname.toLowerCase();
        return FARE_CACHE_PATTERNS.some(s => p.includes(s));
    } catch { return false; }
}

/** Normalize compact YYYYMMDD → YYYY-MM-DD. */
function normalizeDate(d) {
    if (!d) return null;
    if (/^\d{8}$/.test(d)) return `${d.slice(0, 4)}-${d.slice(4, 6)}-${d.slice(6, 8)}`;
    return d;
}

/** Extract JetSmart / Navitaire flight search params from a URL string. */
function extractFlightParams(urlStr) {
    try {
        const p = new URL(urlStr).searchParams;
        const get = (...keys) => { for (const k of keys) { const v = p.get(k); if (v) return v; } return null; };
        return {
            origin: get('o1', 'Origin', 'origin', 'OriginStation') || null,
            destination: get('d1', 'Destination', 'destination', 'DestinationStation') || null,
            departureDate: normalizeDate(get('dd1', 'DepartureDate', 'departureDate', 'BeginDate')),
            returnDate: normalizeDate(get('dd2', 'ReturnDate', 'returnDate', 'EndDate')),
            adults: get('ADT', 'adults') || '1',
            children: get('CHD', 'children') || '0',
            infants: get('INF', 'infants') || '0',
        };
    } catch { return {}; }
}

/** Detect booking flow step from URL. */
function detectStepLabel(url) {
    const p = url.toLowerCase();
    if (p.includes('/v2/payment')) return 'payment';
    if (p.includes('/v2/passenger')) return 'passengers';
    if (p.includes('/v2/extras')) return 'extras';
    if (p.includes('/v2/seatmap')) return 'seatmap';
    if (p.includes('/v2/baggage')) return 'baggage';
    if (p.includes('/v2/flight')) return 'flight-results';
    if (p.includes('/internalselect')) return 'flight-search';
    if (p.includes('/co/es') || p.endsWith('/')) return 'homepage';
    return 'other';
}

module.exports = {
    ESSENTIAL_DOMAINS, JETSMART_DOMAINS, AIRPORT_NAMES,
    FLIGHT_API_PATTERNS, SKIP_TRANSFORM_PATTERNS, FARE_CACHE_PATTERNS,
    isEssentialDomain, isFlightRelatedUrl, isFareCacheUrl,
    normalizeDate, extractFlightParams, detectStepLabel,
};
