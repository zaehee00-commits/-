

import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { Bird, EquipmentType, Mission, BirdRarity, BirdDistance, Location, LocationId, ShopItem } from './types';
import { BinocularsIcon, CameraIcon, FieldscopeIcon, CheckCircleIcon, BackgroundScenery, EyeIcon, SceneryColors, SpeciesIllustration, BinocularOverlaySVG, FieldscopeOverlay, TelephotoCameraIcon, SwarovskiOverlaySVG, QrCodeIcon } from './components/Icons';
import Loader from './components/Loader';
import { identifyBird } from './services/geminiService';

// --- DATA & CONSTANTS ---
const BIRD_DATA: Record<string, Omit<Bird, 'id' | 'position' | 'isFound' | 'description' | 'fact'>> = {
    // Seoul Forest (Common urban birds)
    '까치': { name: '까치', rarity: BirdRarity.Common, distance: BirdDistance.Near, displayColor: '#27272a', size: 52 },
    '참새': { name: '참새', rarity: BirdRarity.Common, distance: BirdDistance.Near, displayColor: '#967969', size: 48 },
    '직박구리': { name: '직박구리', rarity: BirdRarity.Common, distance: BirdDistance.Medium, displayColor: '#a1a1aa', size: 40 },
    '박새': { name: '박새', rarity: BirdRarity.Common, distance: BirdDistance.Near, displayColor: '#e5e7eb', size: 48 },
    '오목눈이': { name: '오목눈이', rarity: BirdRarity.Uncommon, distance: BirdDistance.Near, displayColor: '#f3e8ff', size: 60 },
    '제비': { name: '제비', rarity: BirdRarity.Common, distance: BirdDistance.Near, displayColor: '#1e293b', size: 40 },
    '알락할미새': { name: '알락할미새', rarity: BirdRarity.Common, distance: BirdDistance.Near, displayColor: '#9ca3af', size: 40 },
    '흰뺨검둥오리': { name: '흰뺨검둥오리', rarity: BirdRarity.Common, distance: BirdDistance.Medium, displayColor: '#57534e', size: 50 },

    // Jirisan (Mountain birds)
    '꾀꼬리': { name: '꾀꼬리', rarity: BirdRarity.Uncommon, distance: BirdDistance.Medium, displayColor: '#facc15', size: 48 },
    '파랑새': { name: '파랑새', rarity: BirdRarity.Rare, distance: BirdDistance.Far, displayColor: '#38bdf8', size: 36 },
    '딱따구리': { name: '딱따구리', rarity: BirdRarity.Uncommon, distance: BirdDistance.Medium, displayColor: '#dc2626', size: 44 },
    '원앙': { name: '원앙', rarity: BirdRarity.Uncommon, distance: BirdDistance.Medium, displayColor: '#f97316', size: 52 },
    '호반새': { name: '호반새', rarity: BirdRarity.Rare, distance: BirdDistance.Medium, displayColor: '#0891b2', size: 56 },
    '꿩': { name: '꿩', rarity: BirdRarity.Uncommon, distance: BirdDistance.Medium, displayColor: '#854d0e', size: 50 },
    '부엉이': { name: '부엉이', rarity: BirdRarity.Rare, distance: BirdDistance.Medium, displayColor: '#78350f', size: 48 },
    '동고비': { name: '동고비', rarity: BirdRarity.Uncommon, distance: BirdDistance.Medium, displayColor: '#60a5fa', size: 42 },
    '팔색조': { name: '팔색조', rarity: BirdRarity.Legendary, distance: BirdDistance.Medium, displayColor: '#22c55e', size: 44 },

    // Cheorwon (Migratory/rare birds)
    '황새': { name: '황새', rarity: BirdRarity.Rare, distance: BirdDistance.Far, displayColor: '#f8fafc', size: 40 },
    '두루미': { name: '두루미', rarity: BirdRarity.Legendary, distance: BirdDistance.Far, displayColor: '#f1f5f9', size: 48 },
    '흑두루미': { name: '흑두루미', rarity: BirdRarity.Legendary, distance: BirdDistance.Far, displayColor: '#4b5563', size: 48 },
    '독수리': { name: '독수리', rarity: BirdRarity.Legendary, distance: BirdDistance.Far, displayColor: '#422006', size: 52 },
    '되솔새': { name: '되솔새', rarity: BirdRarity.Uncommon, distance: BirdDistance.Medium, displayColor: '#d97706', size: 40 },
    '기러기': { name: '기러기', rarity: BirdRarity.Uncommon, distance: BirdDistance.Far, displayColor: '#6b7280', size: 32 },

    // Junam Reservoir Birds
    '재두루미': { name: '재두루미', rarity: BirdRarity.Rare, distance: BirdDistance.Far, displayColor: '#a1a1aa', size: 48 },
    '큰기러기': { name: '큰기러기', rarity: BirdRarity.Uncommon, distance: BirdDistance.Far, displayColor: '#6b7280', size: 36 },
    '물총새': { name: '물총새', rarity: BirdRarity.Rare, distance: BirdDistance.Near, displayColor: '#0ea5e9', size: 42 },
    '백로': { name: '백로', rarity: BirdRarity.Common, distance: BirdDistance.Far, displayColor: '#ffffff', size: 46 },
    '청둥오리': { name: '청둥오리', rarity: BirdRarity.Common, distance: BirdDistance.Medium, displayColor: '#166534', size: 50 },
    '고니': { name: '고니', rarity: BirdRarity.Legendary, distance: BirdDistance.Far, displayColor: '#f0f9ff', size: 55 },
    '호사비오리': { name: '호사비오리', rarity: BirdRarity.Legendary, distance: BirdDistance.Far, displayColor: '#166534', size: 50 },

    // Nakdong River Estuary Birds
    '노랑부리저어새': { name: '노랑부리저어새', rarity: BirdRarity.Rare, distance: BirdDistance.Far, displayColor: '#fef9c3', size: 48 },
    '저어새': { name: '저어새', rarity: BirdRarity.Rare, distance: BirdDistance.Far, displayColor: '#e0e0e0', size: 48 },
    '흰물떼새': { name: '흰물떼새', rarity: BirdRarity.Uncommon, distance: BirdDistance.Medium, displayColor: '#e2e8f0', size: 40 },
    '검은머리갈매기': { name: '검은머리갈매기', rarity: BirdRarity.Uncommon, distance: BirdDistance.Far, displayColor: '#475569', size: 44 },
    '왜가리': { name: '왜가리', rarity: BirdRarity.Common, distance: BirdDistance.Far, displayColor: '#94a3b8', size: 50 },

    // Hwaseongho Lake Birds
    '흑꼬리도요': { name: '흑꼬리도요', rarity: BirdRarity.Uncommon, distance: BirdDistance.Far, displayColor: '#a3a3a3', size: 38 },
    '청다리도요': { name: '청다리도요', rarity: BirdRarity.Common, distance: BirdDistance.Medium, displayColor: '#84cc16', size: 42 },

    // Shorebirds
    '마도요': { name: '마도요', rarity: BirdRarity.Rare, distance: BirdDistance.Far, displayColor: '#a3a3a3', size: 40 },
    '알락꼬리마도요': { name: '알락꼬리마도요', rarity: BirdRarity.Uncommon, distance: BirdDistance.Far, displayColor: '#a16207', size: 38 },
    '민물도요': { name: '민물도요', rarity: BirdRarity.Common, distance: BirdDistance.Medium, displayColor: '#fca5a5', size: 36 },
    '좀도요': { name: '좀도요', rarity: BirdRarity.Common, distance: BirdDistance.Medium, displayColor: '#78350f', size: 34 },
    '넓적부리도요': { name: '넓적부리도요', rarity: BirdRarity.Legendary, distance: BirdDistance.Medium, displayColor: '#a8a29e', size: 32 },
    '꺅도요': { name: '꺅도요', rarity: BirdRarity.Uncommon, distance: BirdDistance.Medium, displayColor: '#856d4b', size: 40 },
    
    // Raptors (Birds of Prey)
    '매': { name: '매', rarity: BirdRarity.Legendary, distance: BirdDistance.Far, displayColor: '#4b5563', size: 50 },
    '황조롱이': { name: '황조롱이', rarity: BirdRarity.Uncommon, distance: BirdDistance.Medium, displayColor: '#f59e0b', size: 46 },
    '말똥가리': { name: '말똥가리', rarity: BirdRarity.Uncommon, distance: BirdDistance.Far, displayColor: '#a16207', size: 52 },
    '참매': { name: '참매', rarity: BirdRarity.Rare, distance: BirdDistance.Far, displayColor: '#6b7280', size: 54 },
    '물수리': { name: '물수리', rarity: BirdRarity.Rare, distance: BirdDistance.Far, displayColor: '#e5e7eb', size: 56 },
    '따오기': { name: '따오기', rarity: BirdRarity.Legendary, distance: BirdDistance.Far, displayColor: '#fdf6e4', size: 50 },
};


const LOCATION_DATA: Record<LocationId, Location> = {
    neighborhoodPark: {
        id: 'neighborhoodPark', name: '동네 공원', description: '우리 동네에서 흔히 볼 수 있는 새들을 만나보세요. 탐조를 시작하기 좋은 장소입니다.',
        availableBirds: ['까치', '참새', '박새', '직박구리', '오목눈이', '알락할미새', '황조롱이', '흰뺨검둥오리']
    },
    seoulForest: {
        id: 'seoulForest', name: '서울숲', description: '도심 속 공원으로, 흔히 볼 수 있는 텃새들을 관찰하기 좋습니다.',
        availableBirds: ['까치', '참새', '직박구리', '박새', '오목눈이', '제비', '청둥오리', '알락할미새', '황조롱이']
    },
    jirisan: {
        id: 'jirisan', name: '지리산', description: '깊은 산 속, 다채로운 빛깔의 아름다운 새들이 숨어있습니다.',
        availableBirds: ['꾀꼬리', '파랑새', '딱따구리', '원앙', '호반새', '박새', '꿩', '부엉이', '동고비', '팔색조', '말똥가리', '참매']
    },
    cheorwon: {
        id: 'cheorwon', name: '철원 DMZ', description: '평화로운 평야는 희귀한 철새들의 낙원입니다. 전설적인 새를 찾아보세요.',
        availableBirds: ['황새', '두루미', '독수리', '기러기', '까치', '꿩', '재두루미', '말똥가리']
    },
    junam: {
        id: 'junam', name: '주남저수지', description: '다양한 철새들이 머무는 광활한 습지입니다. 희귀한 겨울 철새를 만나보세요.',
        availableBirds: ['기러기', '큰기러기', '원앙', '재두루미', '독수리', '물총새', '백로', '청둥오리', '고니', '호사비오리', '흰뺨검둥오리']
    },
    upoWetland: {
        id: 'upoWetland', name: '우포늪', description: '대한민국 최대의 자연 늪지, 살아있는 자연사 박물관입니다. 다양한 물새와 멸종위기종의 서식지입니다.',
        availableBirds: ['큰기러기', '청둥오리', '흰뺨검둥오리', '왜가리', '백로', '고니', '원앙', '물총새', '호사비오리', '황새', '저어새', '노랑부리저어새', '따오기']
    },
    suncheonBay: {
        id: 'suncheonBay', name: '순천만 습지', description: '광활한 갯벌과 갈대밭이 어우러진 세계적인 연안습지입니다. 흑두루미를 비롯한 희귀 철새들의 월동지입니다.',
        availableBirds: ['흑두루미', '두루미', '재두루미', '흑꼬리도요', '검은머리갈매기', '마도요', '민물도요', '알락할미새', '기러기', '청둥오리', '왜가리']
    },
    nakdongEstuary: {
        id: 'nakdongEstuary', name: '낙동강 하구', description: '강과 바다가 만나는 생명의 땅, 다양한 물새들의 안식처입니다.',
        availableBirds: ['노랑부리저어새', '흰물떼새', '검은머리갈매기', '기러기', '큰기러기', '물총새', '백로', '왜가리', '마도요', '저어새', '물수리']
    },
    hwaseongho: {
        id: 'hwaseongho', name: '화성호', description: '세계적인 철새 도래지로, 수많은 도요새와 물떼새를 만날 수 있습니다.',
        availableBirds: ['흑꼬리도요', '청다리도요', '흰물떼새', '검은머리갈매기', '재두루미', '왜가리', '민물도요', '좀도요', '저어새', '넓적부리도요']
    },
    cheonsuman: {
        id: 'cheonsuman', name: '천수만', description: '드넓은 간척 농경지로, 수많은 겨울 철새들이 찾아오는 세계적인 탐조의 명소입니다.',
        availableBirds: ['기러기', '큰기러기', '독수리', '황새', '흑꼬리도요', '마도요', '알락꼬리마도요', '노랑부리저어새', '말똥가리', '꺅도요']
    },
    geolmaeri: {
        id: 'geolmaeri', name: '걸매리 갯벌', description: '강화도 남단에 위치한 광활한 갯벌로, 다양한 도요·물떼새들의 중간 기착지입니다.',
        availableBirds: ['민물도요', '좀도요', '흑꼬리도요', '청다리도요', '흰물떼새', '검은머리갈매기', '마도요', '알락꼬리마도요', '저어새', '넓적부리도요']
    },
    hadori: {
        id: 'hadori', name: '하도리 철새도래지', description: '아름다운 제주도의 해안 습지로, 다양한 겨울 철새와 물새들을 만날 수 있습니다.',
        availableBirds: ['청둥오리', '흰뺨검둥오리', '저어새', '물수리', '매', '흰물떼새', '민물도요', '왜가리', '고니']
    },
    hallasan: {
        id: 'hallasan', name: '한라산', description: '제주도의 중심에 우뚝 솟은 한라산 국립공원입니다. 높은 고도에서만 만날 수 있는 특별한 새들을 찾아보세요.',
        availableBirds: ['박새', '동고비', '딱따구리', '꾀꼬리', '참매', '황조롱이', '되솔새', '직박구리']
    },
    jejuCoast: {
        id: 'jejuCoast', name: '제주도 해안', description: '제주도의 아름다운 해안가에서 바닷새와 철새를 관찰해보세요. 파도 소리와 함께하는 탐조는 특별한 경험이 될 거예요.',
        availableBirds: ['검은머리갈매기', '흰물떼새', '물수리', '매', '알락할미새', '왜가리', '민물도요']
    }
};

const START_SCREEN_COLORS: SceneryColors = {
    sky: ['#0f172a', '#334155'], mountains: ['#1e293b', '#475569'],
    trees: ['#1e3a8a', '#1e40af', '#1d4ed8'], foreground: ['#0c1422', '#1a2436', '#1e293b']
};

const BACKGROUND_COLORS: Record<LocationId, SceneryColors> = {
    neighborhoodPark: {
        sky: ['#a7ddf3', '#d0e9f5'], mountains: ['#d1d5db', '#e5e7eb'],
        trees: ['#4d7c0f', '#65a30d', '#84cc16'], foreground: ['#a3e635', '#bef264', '#d9f99d']
    },
    seoulForest: {
        sky: ['#374151', '#111827'], mountains: ['#1f2937', '#374151'],
        trees: ['#064e3b', '#065f46', '#10b981'], foreground: ['#104231', '#0f3c2d', '#0d3527']
    },
    jirisan: {
        sky: ['#3b82f6', '#1e40af'], mountains: ['#4b5563', '#374151'],
        trees: ['#166534', '#15803d', '#22c55e'], foreground: ['#14532d', '#166534', '#15803d']
    },
    cheorwon: {
        sky: ['#fde68a', '#f59e0b'], mountains: ['#d1d5db', '#9ca3af'],
        trees: ['#ca8a04', '#a16207', '#f59e0b'], foreground: ['#eab308', '#ca8a04', '#a16207']
    },
    junam: {
        sky: ['#a5f3fc', '#0e7490'], mountains: ['#9ca3af', '#6b7280'],
        trees: ['#78716c', '#57534e', '#a8a29e'], 
        foreground: ['#292524', '#44403c', '#57534e'],
        water: ['#38bdf8', '#0ea5e9'],
    },
    upoWetland: {
        sky: ['#d1d5db', '#9ca3af'], mountains: ['#a3a3a3', '#737373'],
        trees: ['#78716c', '#57534e', '#a16207'], foreground: ['#52525b', '#44403c', '#292524'],
        water: ['#2dd4bf', '#0d9488'],
    },
    suncheonBay: {
        sky: ['#fdba74', '#f97316'], mountains: ['#7c2d12', '#451a03'],
        trees: ['#ca8a04', '#a16207', '#854d0e'], foreground: ['#b45309', '#92400e', '#78350f'],
        water: ['#60a5fa', '#3b82f6'],
    },
    nakdongEstuary: {
        sky: ['#bfdbfe', '#60a5fa'], mountains: ['#d1fae5', '#a7f3d0'],
        trees: ['#65a30d', '#84cc16', '#a3e635'], foreground: ['#f0fdf4', '#dcfce7', '#bbf7d0'],
        water: ['#7dd3fc', '#38bdf8'],
    },
    hwaseongho: {
        sky: ['#fecaca', '#f87171'], mountains: ['#e5e7eb', '#d1d5db'],
        trees: ['#a8a29e', '#78716c', '#57534e'], foreground: ['#d6d3d1', '#a8a29e', '#78716c'],
        water: ['#a5f3fc', '#67e8f9'],
    },
    cheonsuman: {
        sky: ['#fef3c7', '#fcd34d'], mountains: ['#fde68a', '#f59e0b'],
        trees: ['#ca8a04', '#a16207', '#b45309'], foreground: ['#f7b731', '#f59e0b', '#d97706'],
        water: ['#a5f3fc', '#22d3ee'],
    },
    geolmaeri: {
        sky: ['#e0f2fe', '#bae6fd'], mountains: ['#e2e8f0', '#cbd5e1'],
        trees: ['#a8a29e', '#78716c', '#57534e'], foreground: ['#a1a1aa', '#71717a', '#52525b'],
        water: ['#94a3b8', '#64748b'],
    },
    hadori: {
        sky: ['#93c5fd', '#3b82f6'], mountains: ['#34d399', '#10b981'],
        trees: ['#f59e0b', '#d97706', '#b45309'], foreground: ['#eab308', '#ca8a04', '#a16207'],
        water: ['#67e8f9', '#06b6d4'],
    },
    hallasan: {
        sky: ['#60a5fa', '#3b82f6'], mountains: ['#166534', '#15803d'],
        trees: ['#14532d', '#166534', '#15803d'], foreground: ['#22c55e', '#16a34a', '#15803d']
    },
    jejuCoast: {
        sky: ['#87CEEB', '#6495ED'],
        mountains: ['#3A3B3C', '#242526'],
        trees: ['#2E8B57', '#3CB371', '#66CDAA'],
        foreground: ['#F4A460', '#FFDAB9', '#FAEBD7']
    }
};

const SHOP_ITEMS: ShopItem[] = [
    { type: EquipmentType.LowPerformance, name: '저성능 쌍안경', price: 100, description: '중거리의 새를 관찰할 수 있습니다.', Icon: BinocularsIcon },
    { type: EquipmentType.StandardBinoculars, name: '표준 쌍안경', price: 200, description: '먼 거리의 새도 관찰할 수 있습니다.', Icon: BinocularsIcon },
    { type: EquipmentType.Camera, name: '카메라', price: 350, description: '새를 발견하고 도감에 기록할 수 있게 해줍니다.', Icon: CameraIcon },
    { type: EquipmentType.TelephotoCamera, name: '망원 렌즈 카메라', price: 500, description: '먼 거리의 새를 확대하여 선명하게 포착합니다.', Icon: TelephotoCameraIcon },
    { type: EquipmentType.HighPerformance, name: '고성능 필드스코프', price: 700, description: '아주 멀리 있는 새까지 선명하게 봅니다.', Icon: FieldscopeIcon },
    { type: EquipmentType.SwarovskiBinoculars, name: '스와로브스키 쌍안경', price: 1000, description: '현존 최고의 쌍안경. 전설적인 선명함으로 모든 새를 식별합니다.', Icon: BinocularsIcon },
];

const EQUIPMENT_ZOOM: { [key in EquipmentType]: number } = {
  [EquipmentType.NakedEye]: 1,
  [EquipmentType.LowPerformance]: 1.5,
  [EquipmentType.StandardBinoculars]: 2.0,
  [EquipmentType.Camera]: 2.5,
  [EquipmentType.TelephotoCamera]: 3.0,
  [EquipmentType.HighPerformance]: 3.5,
  [EquipmentType.SwarovskiBinoculars]: 5.0,
};

const SWAROVSKI_MIN_ZOOM = EQUIPMENT_ZOOM[EquipmentType.SwarovskiBinoculars];
const SWAROVSKI_MAX_ZOOM = 10.0;
const SWAROVSKI_ZOOM_STEP = 0.5;

const RARITY_SCORE: Record<BirdRarity, number> = {
    [BirdRarity.Common]: 10,
    [BirdRarity.Uncommon]: 30,
    [BirdRarity.Rare]: 100,
    [BirdRarity.Legendary]: 500,
};

const translateRarity = (rarity: BirdRarity) => {
  switch (rarity) {
    case BirdRarity.Common: return '흔함';
    case BirdRarity.Uncommon: return '드묾';
    case BirdRarity.Rare: return '희귀';
    case BirdRarity.Legendary: return '전설';
    default: return rarity;
  }
};

const generateRandomBird = (locationId: LocationId, existingBirds: Bird[]): Omit<Bird, 'id' | 'isFound' | 'description' | 'fact'> => {
    const availableBirdNames = LOCATION_DATA[locationId].availableBirds;
    
    let birdName: string;
    let birdTemplate: Omit<Bird, 'id' | 'position' | 'isFound' | 'description' | 'fact'>;
    let rarityAttempts = 0;
    const MAX_RARITY_ATTEMPTS = 20; // Prevent infinite loops

    do {
      birdName = availableBirdNames[Math.floor(Math.random() * availableBirdNames.length)];
      birdTemplate = BIRD_DATA[birdName];
      rarityAttempts++;
    } while (birdTemplate.rarity === BirdRarity.Legendary && Math.random() > 0.05 && rarityAttempts < MAX_RARITY_ATTEMPTS); // 전설 희귀도 하향


    let newPosition: { top: number; left: number };
    let isOverlapping: boolean;
    let positionAttempts = 0;
    const MIN_DISTANCE = 12;

    do {
        newPosition = {
            top: 15 + Math.random() * 70,
            left: 10 + Math.random() * 80,
        };
        isOverlapping = existingBirds.some(bird => {
            const dx = bird.position.left - newPosition.left;
            const dy = bird.position.top - newPosition.top;
            const distance = Math.sqrt(dx * dx + dy * dy);
            return distance < MIN_DISTANCE;
        });
        positionAttempts++;
    } while (isOverlapping && positionAttempts < 20);

    return { ...birdTemplate, position: newPosition };
};

const INITIAL_MISSIONS: Mission[] = [
    { id: 1, description: "첫 번째 새 발견하기", isCompleted: false, requires: { count: 1, description: "새 1마리 발견" } },
    { id: 2, description: "흔한 새 3마리 발견하기", isCompleted: false, requires: { rarity: BirdRarity.Common, count: 3, description: "흔한 새 3마리" } },
    { id: 3, description: "새 장비 구입하기", isCompleted: false, requires: { count: 1, description: "상점에서 아이템 1개 구입" } },
    { id: 4, description: "드문 새 발견하기", isCompleted: false, requires: { rarity: BirdRarity.Uncommon, count: 1, description: "드문 새 1마리 발견" } },
    { id: 5, description: "총 10마리의 새 발견하기", isCompleted: false, requires: { count: 10, description: "새 10마리 발견" } },
    { id: 6, description: "희귀한 새 발견하기", isCompleted: false, requires: { rarity: BirdRarity.Rare, count: 1, description: "희귀한 새 1마리 발견" } },
    { id: 7, description: "탐조 지역 3곳 방문하기", isCompleted: false, requires: { count: 3, description: "다른 지역 3곳 방문" } },
    { id: 8, description: "전설의 새 발견하기!", isCompleted: false, requires: { rarity: BirdRarity.Legendary, count: 1, description: "전설의 새 1마리 발견" } },
];

const canIdentifyBird = (bird: Bird, equipment: EquipmentType): boolean => {
    const distance = bird.distance;
    switch (equipment) {
        case EquipmentType.NakedEye:
            return distance === BirdDistance.Near;
        case EquipmentType.LowPerformance:
            return distance === BirdDistance.Near || distance === BirdDistance.Medium;
        case EquipmentType.StandardBinoculars:
        case EquipmentType.Camera:
            return true;
        case EquipmentType.TelephotoCamera:
        case EquipmentType.HighPerformance:
        case EquipmentType.SwarovskiBinoculars:
            return true;
        default:
            return false;
    }
};

const App: React.FC = () => {
    const [gameState, setGameState] = useState<'start' | 'playing' | 'location' | 'shop' | 'fieldguide' | 'logbook'>('start');
    const [currentLocationId, setCurrentLocationId] = useState<LocationId>('neighborhoodPark');
    const [birds, setBirds] = useState<Bird[]>([]);
    const [foundBirds, setFoundBirds] = useState<Record<string, Bird & { isLoading?: boolean }>>({});
    const [missions, setMissions] = useState<Mission[]>(INITIAL_MISSIONS);
    const [score, setScore] = useState(0);
    const [equipment, setEquipment] = useState<EquipmentType[]>([EquipmentType.NakedEye]);
    const [currentEquipment, setCurrentEquipment] = useState<EquipmentType>(EquipmentType.NakedEye);
    const [showToast, setShowToast] = useState<string | null>(null);
    const [modalBird, setModalBird] = useState<(Bird & { isLoading?: boolean }) | null>(null);
    const [visitedLocations, setVisitedLocations] = useState<Set<LocationId>>(new Set());
    const [pan, setPan] = useState({ x: 0, y: 0 });
    const [showQrModal, setShowQrModal] = useState<boolean>(false);
    const [swarovskiZoom, setSwarovskiZoom] = useState(SWAROVSKI_MIN_ZOOM);


    const gameAreaRef = useRef<HTMLDivElement>(null);
    const toastTimeoutRef = useRef<number | null>(null);

    const currentLocation = LOCATION_DATA[currentLocationId];
    
    const currentZoom = useMemo(() => {
        if (currentEquipment === EquipmentType.SwarovskiBinoculars) {
            return swarovskiZoom;
        }
        return EQUIPMENT_ZOOM[currentEquipment];
    }, [currentEquipment, swarovskiZoom]);

    // Fix: Explicitly type arguments in the sort callback to prevent TypeScript from inferring them as 'unknown'.
    const sortedFoundBirds = Object.values(foundBirds).sort((a: Bird, b: Bird) => a.name.localeCompare(b.name, 'ko'));
    
    const shareUrl = useMemo(() => {
        let rawUrl = '';
        try {
            // Prefer the top window's URL if in an iframe.
            rawUrl = window.top!.location.href;
        } catch (e) {
            // Fallback to the current frame's URL if top is inaccessible.
            rawUrl = window.location.href;
        }

        if (!rawUrl) {
            return '';
        }
        
        // Manually strip query parameters and hash fragments to create a clean base URL.
        // This is more robust than the URL() constructor for non-standard environments.
        const baseUrl = rawUrl.split('?')[0].split('#')[0];

        // Ensure the URL is shareable (http/https). This prevents creating QR codes
        // for local files (file://) or other unshareable schemes.
        if (baseUrl.startsWith('http:') || baseUrl.startsWith('https://')) {
            return encodeURIComponent(baseUrl);
        }
        
        // If the protocol is not shareable, return an empty string,
        // which will correctly display the error message.
        return '';
    }, []);

    const showTemporaryToast = (message: string) => {
        if (toastTimeoutRef.current) {
            clearTimeout(toastTimeoutRef.current);
        }
        setShowToast(message);
        toastTimeoutRef.current = window.setTimeout(() => {
            setShowToast(null);
        }, 3000);
    };
    
    const spawnBirds = useCallback((locationId: LocationId) => {
        const birdCount = 12 + Math.floor(Math.random() * 7);
        const newBirds: Bird[] = [];
        const speciesCount = new Map<string, number>();
        const MAX_INSTANCES_PER_SPECIES = 2;
        let attempts = 0;

        while (newBirds.length < birdCount && attempts < birdCount * 5) {
            attempts++;
            const candidateBird = generateRandomBird(locationId, newBirds);
            const currentCount = speciesCount.get(candidateBird.name) || 0;

            if (currentCount < MAX_INSTANCES_PER_SPECIES || attempts > birdCount * 3) {
                newBirds.push({
                    ...candidateBird,
                    id: Date.now() + newBirds.length,
                    isFound: false,
                    description: '',
                    fact: ''
                });
                speciesCount.set(candidateBird.name, currentCount + 1);
            }
        }
        setBirds(newBirds);
    }, []);
    
    const handleStartGame = (locationId: LocationId) => {
        setCurrentLocationId(locationId);
        setVisitedLocations(prev => new Set(prev).add(locationId));
        setGameState('playing');
        spawnBirds(locationId);
    };

    const handleBirdClick = (clickedBird: Bird) => {
        // If this specific instance is already marked as found on the screen,
        // we can still open the modal to view its details from the field guide.
        if (clickedBird.isFound) {
            if (foundBirds[clickedBird.name]) {
                setModalBird(foundBirds[clickedBird.name]);
            }
            return;
        }
    
        // Check if the current equipment is sufficient to identify the bird.
        if (!canIdentifyBird(clickedBird, currentEquipment)) {
            showTemporaryToast("너무 멀어서 식별할 수 없습니다. 더 좋은 장비가 필요합니다.");
            return;
        }
        
        // Mark this individual bird as "found" on the screen to change its appearance.
        setBirds(prevBirds => prevBirds.map(b => 
            b.id === clickedBird.id ? { ...b, isFound: true } : b
        ));
    
        // If this species is already in our field guide (could be loading or fully loaded)
        if (foundBirds[clickedBird.name]) {
             // Show the modal with the current state (could be loading or complete)
             setModalBird(foundBirds[clickedBird.name]);
             showTemporaryToast(`${clickedBird.name} 발견!`);
             return;
        }
        
        // This is a completely new species discovery.
        const points = RARITY_SCORE[clickedBird.rarity];
        setScore(prev => prev + points);
        showTemporaryToast(`새로운 종 발견! ${clickedBird.name} (+${points}점)`);
    
        // Create a temporary object for the bird with a loading state.
        const temporaryBird = { 
            ...clickedBird, 
            isFound: true, 
            description: '', // Will be filled by the AI
            fact: '',      // Will be filled by the AI
            isLoading: true // Mark as loading
        };
    
        // Immediately show the modal in its loading state.
        setModalBird(temporaryBird);
        // Add the loading bird to our field guide to prevent duplicate API calls.
        setFoundBirds(prev => ({ ...prev, [clickedBird.name]: temporaryBird }));
    
        // Asynchronously fetch the detailed bird information.
        identifyBird(clickedBird).then(info => {
            const fullyIdentifiedBird = { 
                ...clickedBird, 
                isFound: true, 
                description: info.description,
                fact: info.fact,
                isLoading: false // Mark as finished loading
            };
    
            // Update the field guide with the complete information.
            setFoundBirds(prev => ({ ...prev, [fullyIdentifiedBird.name]: fullyIdentifiedBird }));
            
            // If the modal is still open for this specific bird, update it with the new data.
            setModalBird(currentModal => 
                (currentModal && currentModal.name === fullyIdentifiedBird.name) 
                    ? fullyIdentifiedBird 
                    : currentModal
            );
        });
    };

    const handleBuyItem = (item: ShopItem) => {
        if (score >= item.price && !equipment.includes(item.type)) {
            setScore(prev => prev - item.price);
            setEquipment(prev => [...prev, item.type]);
            setCurrentEquipment(item.type);
            showTemporaryToast(`${item.name}을(를) 구입하여 장착했습니다!`);
        } else if (equipment.includes(item.type)) {
            showTemporaryToast("이미 보유하고 있는 장비입니다.");
        } else {
            showTemporaryToast("포인트가 부족합니다.");
        }
    };

    const handleSelectEquipment = (type: EquipmentType) => {
        const item = SHOP_ITEMS.find(i => i.type === type);
        const name = type === EquipmentType.NakedEye ? '맨눈' : item?.name;
        setCurrentEquipment(type);
        showTemporaryToast(`${name} 장착!`);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!gameAreaRef.current || currentZoom <= 1) {
            setPan({ x: 0, y: 0 });
            return;
        }

        const rect = gameAreaRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const normX = (mouseX / rect.width) * 2 - 1; // -1 to 1
        const normY = (mouseY / rect.height) * 2 - 1; // -1 to 1

        const maxPanX = (rect.width * currentZoom - rect.width) / 2 / currentZoom;
        const maxPanY = (rect.height * currentZoom - rect.height) / 2 / currentZoom;
        
        setPan({
            x: -normX * maxPanX,
            y: -normY * maxPanY,
        });
    };

    const handleMouseLeave = () => {
        setPan({ x: 0, y: 0 });
    };

    const handleRespawnBirds = () => {
        spawnBirds(currentLocationId);
        showTemporaryToast(`${currentLocation.name}에서 새들을 다시 찾아봅니다.`);
    };

    const handleZoomIn = () => {
        setSwarovskiZoom(prev => Math.min(prev + SWAROVSKI_ZOOM_STEP, SWAROVSKI_MAX_ZOOM));
    };

    const handleZoomOut = () => {
        setSwarovskiZoom(prev => Math.max(prev - SWAROVSKI_ZOOM_STEP, SWAROVSKI_MIN_ZOOM));
    };

    useEffect(() => {
        const newMissions = missions.map(mission => {
            if (mission.isCompleted) return mission;

            let completed = false;
            const foundBirdsCount = Object.keys(foundBirds).length;
            // Fix: Explicitly type the argument in the filter callbacks to prevent TypeScript from inferring it as 'unknown'.
            const commonFound = Object.values(foundBirds).filter((b: Bird) => b.rarity === BirdRarity.Common).length;
            const uncommonFound = Object.values(foundBirds).filter((b: Bird) => b.rarity === BirdRarity.Uncommon).length;
            const rareFound = Object.values(foundBirds).filter((b: Bird) => b.rarity === BirdRarity.Rare).length;
            const legendaryFound = Object.values(foundBirds).filter((b: Bird) => b.rarity === BirdRarity.Legendary).length;

            switch (mission.id) {
                case 1: if (foundBirdsCount >= 1) completed = true; break;
                case 2: if (commonFound >= 3) completed = true; break;
                case 3: if (equipment.length > 1) completed = true; break;
                case 4: if (uncommonFound >= 1) completed = true; break;
                case 5: if (foundBirdsCount >= 10) completed = true; break;
                case 6: if (rareFound >= 1) completed = true; break;
                case 7: if (visitedLocations.size >= 3) completed = true; break;
                case 8: if (legendaryFound >= 1) completed = true; break;
            }

            if (completed && !mission.isCompleted) {
                showTemporaryToast(`미션 완료: ${mission.description}`);
                const missionPoints = mission.id * 10;
                setScore(prev => prev + missionPoints);
                return { ...mission, isCompleted: true };
            }
            return mission;
        });
        setMissions(newMissions);
    }, [foundBirds, equipment, visitedLocations]);

    useEffect(() => {
        if (gameState !== 'playing') return;

        const intervalId = setInterval(() => {
            setBirds(prevBirds => {
                const visibleBirds = prevBirds.filter(b => !b.isFound);
                if (visibleBirds.length > 5) { // Don't make the screen too empty
                    const birdToRemoveIndex = Math.floor(Math.random() * visibleBirds.length);
                    const birdToRemove = visibleBirds[birdToRemoveIndex];
                    return prevBirds.filter(b => b.id !== birdToRemove.id);
                }
                return prevBirds;
            });
        }, 3000);

        return () => clearInterval(intervalId);
    }, [gameState]);

    const renderBird = (bird: Bird) => {
        const isIdentifiable = canIdentifyBird(bird, currentEquipment);
        const blurStyle = !isIdentifiable ? { filter: 'blur(3px) brightness(0.7)', opacity: 0.8 } : {};
        const isSwarovskiActive = currentEquipment === EquipmentType.SwarovskiBinoculars;
    
        return (
            <button
                key={bird.id}
                className={`absolute transition-all duration-300 group ${bird.isFound ? 'opacity-50 cursor-default' : 'hover:scale-125 hover:brightness-125'}`}
                style={{
                    top: `${bird.position.top}%`,
                    left: `${bird.position.left}%`,
                    width: `${bird.size}px`,
                    height: `${bird.size}px`,
                    transform: `translate(-50%, -50%)`,
                    color: bird.displayColor,
                    ...blurStyle
                }}
                onClick={() => handleBirdClick(bird)}
                aria-label={`새 발견하기: ${bird.name}`}
            >
                <SpeciesIllustration name={bird.name} className="w-full h-full drop-shadow-lg" />
                {isSwarovskiActive && isIdentifiable && !bird.isFound && (
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-max px-2 py-1 bg-black/70 text-white text-sm rounded-md pointer-events-none opacity-90 group-hover:opacity-0 transition-opacity">
                        {bird.name}
                    </div>
                )}
            </button>
        );
    };

    const ownedEquipmentForUI = useMemo(() => {
        // Start with NakedEye as it's always available.
        const items = [{ type: EquipmentType.NakedEye, name: '맨눈', Icon: EyeIcon }];
        
        // Add other owned items, in the order they appear in the shop.
        SHOP_ITEMS.forEach(shopItem => {
            if (equipment.includes(shopItem.type)) {
                items.push(shopItem);
            }
        });
        return items;
    }, [equipment]);
    
    const gameAreaStyle: React.CSSProperties = {
        transform: `scale(${currentZoom}) translateX(${pan.x}px) translateY(${pan.y}px)`,
        transition: 'transform 0.3s ease-out',
    };
    if (currentEquipment === EquipmentType.SwarovskiBinoculars) {
        gameAreaStyle.filter = 'contrast(115%) saturate(105%)';
    }


    if (gameState === 'start') {
        return (
            <div className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center text-center">
                <BackgroundScenery className="absolute inset-0 w-full h-full" colors={START_SCREEN_COLORS} />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 p-8">
                    <h1 className="text-6xl font-extrabold mb-4 text-white drop-shadow-lg">탐조인</h1>
                    <p className="text-xl max-w-2xl mx-auto mb-8 text-slate-200">AI와 함께 떠나는 디지털 탐조 여행. 대한민국 곳곳에 숨어있는 새들을 찾아보세요!</p>
                    <button onClick={() => setGameState('location')} className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-3 px-8 rounded-full text-xl shadow-lg transition-transform transform hover:scale-105">
                        탐조 시작하기
                    </button>
                </div>
            </div>
        );
    }
    
    if (gameState === 'location') {
        return (
            <div className="w-full h-screen p-4 sm:p-8 bg-slate-800 text-white flex flex-col">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">탐조 지역 선택</h2>
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 overflow-y-auto pr-2">
                    {Object.values(LOCATION_DATA).map(loc => (
                        <div key={loc.id} className="bg-slate-700 rounded-lg p-4 sm:p-6 flex flex-col">
                            <h3 className="text-xl sm:text-2xl font-semibold text-cyan-400 mb-2">{loc.name}</h3>
                            <p className="text-slate-300 mb-4 flex-grow text-sm sm:text-base">{loc.description}</p>
                            <button onClick={() => handleStartGame(loc.id)} className="mt-auto bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded transition w-full">
                                이곳으로 이동
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (gameState === 'shop') {
        return (
            <div className="w-full h-screen p-4 sm:p-8 bg-slate-800 text-white flex flex-col">
                <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
                    <h2 className="text-3xl sm:text-4xl font-bold">상점</h2>
                    <div className="text-xl sm:text-2xl font-bold text-yellow-400">보유 포인트: {score}P</div>
                    <button onClick={() => setGameState('playing')} className="bg-slate-600 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded">게임으로 돌아가기</button>
                </div>
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 overflow-y-auto pr-2">
                    {SHOP_ITEMS.map(item => (
                        <div key={item.type} className={`bg-slate-700 rounded-lg p-4 sm:p-6 border-2 ${equipment.includes(item.type) ? 'border-green-500' : 'border-transparent'}`}>
                            <div className="flex items-center mb-4">
                                <item.Icon className="w-8 h-8 sm:w-10 sm:h-10 mr-4 text-cyan-400" />
                                <h3 className="text-xl sm:text-2xl font-semibold">{item.name}</h3>
                            </div>
                            <p className="text-slate-300 mb-4 text-sm sm:text-base">{item.description}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-lg sm:text-xl font-bold text-yellow-400">{item.price}P</span>
                                <button onClick={() => handleBuyItem(item)} disabled={equipment.includes(item.type)} className="bg-cyan-600 hover:bg-cyan-500 disabled:bg-gray-500 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded text-sm sm:text-base">
                                    {equipment.includes(item.type) ? '보유중' : '구입'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    
    if (gameState === 'logbook') {
        const totalBirds = Object.keys(BIRD_DATA).length;
        return (
            <div className="w-full h-screen p-4 sm:p-8 bg-slate-800 text-white flex flex-col">
                 <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
                    <h2 className="text-3xl sm:text-4xl font-bold">탐조 기록장 ({sortedFoundBirds.length}/{totalBirds}종)</h2>
                    <button onClick={() => setGameState('playing')} className="bg-slate-600 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded">게임으로 돌아가기</button>
                </div>
                {sortedFoundBirds.length === 0 ? (
                     <p className="text-center text-xl text-slate-400 mt-8">아직 발견한 새가 없습니다. 탐조를 시작해보세요!</p>
                ) : (
                    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 overflow-y-auto pr-2">
                        {/* Fix: Explicitly type the 'bird' parameter to resolve 'unknown' type errors. */}
                        {sortedFoundBirds.map((bird: Bird) => (
                            <button key={bird.name} onClick={() => setModalBird(bird)} className="bg-slate-700 rounded-lg p-4 flex flex-col items-center text-center aspect-square justify-center hover:bg-slate-600 transition-colors duration-200">
                                <div className="w-16 h-16 sm:w-24 sm:h-24 mb-2 sm:mb-4 pointer-events-none">
                                    <SpeciesIllustration name={bird.name} className="w-full h-full" />
                                </div>
                                <h3 className="text-md sm:text-xl font-semibold text-cyan-300">{bird.name}</h3>
                                <p className={`text-xs sm:text-sm font-bold ${
                                    bird.rarity === BirdRarity.Common ? 'text-gray-300' :
                                    bird.rarity === BirdRarity.Uncommon ? 'text-green-400' :
                                    bird.rarity === BirdRarity.Rare ? 'text-blue-400' : 'text-purple-400'
                                }`}>{translateRarity(bird.rarity)}</p>
                            </button>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    if (gameState === 'fieldguide') {
        const allBirds = Object.values(BIRD_DATA).sort((a, b) => a.name.localeCompare(b.name, 'ko'));
        const totalBirds = allBirds.length;
        const foundCount = Object.keys(foundBirds).length;
    
        return (
            <div className="w-full h-screen p-4 sm:p-8 bg-slate-800 text-white flex flex-col">
                <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
                    <h2 className="text-3xl sm:text-4xl font-bold">탐조 도감 ({foundCount}/{totalBirds}종 발견)</h2>
                    <button onClick={() => setGameState('playing')} className="bg-slate-600 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded">게임으로 돌아가기</button>
                </div>
                <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 overflow-y-auto pr-2">
                    {allBirds.map(bird => {
                        const foundBirdData = foundBirds[bird.name];
                        const isFound = !!foundBirdData;
                        
                        if (isFound) {
                            return (
                                <button key={bird.name} onClick={() => setModalBird(foundBirdData)} className="bg-slate-700 rounded-lg p-4 flex flex-col items-center text-center aspect-square justify-center hover:bg-slate-600 transition-colors duration-200">
                                    <div className="w-16 h-16 sm:w-24 sm:h-24 mb-2 sm:mb-4 pointer-events-none">
                                        <SpeciesIllustration name={bird.name} className="w-full h-full" />
                                    </div>
                                    <h3 className="text-md sm:text-xl font-semibold text-cyan-300">{bird.name}</h3>
                                    <p className={`text-xs sm:text-sm font-bold ${
                                        bird.rarity === BirdRarity.Common ? 'text-gray-300' :
                                        bird.rarity === BirdRarity.Uncommon ? 'text-green-400' :
                                        bird.rarity === BirdRarity.Rare ? 'text-blue-400' : 'text-purple-400'
                                    }`}>{translateRarity(bird.rarity)}</p>
                                </button>
                            );
                        } else {
                            return (
                                <div key={bird.name} className="bg-slate-900 rounded-lg p-4 flex flex-col items-center text-center aspect-square justify-center opacity-70">
                                    <div className="w-16 h-16 sm:w-24 sm:h-24 mb-2 sm:mb-4">
                                        <SpeciesIllustration name={bird.name} className="w-full h-full" style={{ filter: 'brightness(0) invert(0.15)' }} />
                                    </div>
                                    <h3 className="text-md sm:text-xl font-semibold text-slate-500">???</h3>
                                    <p className={`text-xs sm:text-sm font-bold ${
                                        bird.rarity === BirdRarity.Common ? 'text-gray-500' :
                                        bird.rarity === BirdRarity.Uncommon ? 'text-green-800' :
                                        bird.rarity === BirdRarity.Rare ? 'text-blue-800' : 'text-purple-800'
                                    }`}>{translateRarity(bird.rarity)}</p>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        );
    }

    return (
        <main className="w-full h-screen overflow-hidden flex flex-col bg-gray-900">
            {modalBird && (
                <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={() => setModalBird(null)}>
                    <div className="bg-slate-800 rounded-lg max-w-lg w-full p-6 relative text-white border-2 border-cyan-500 shadow-xl" onClick={e => e.stopPropagation()}>
                        {modalBird.isLoading ? (
                            <div className="flex flex-col items-center justify-center min-h-[200px]">
                                <Loader message="AI가 새 정보를 조회 중입니다..." />
                            </div>
                        ) : (
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 mx-auto">
                                    <SpeciesIllustration name={modalBird.name} className="w-full h-full" />
                                </div>
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-cyan-300 mb-2">{modalBird.name}</h2>
                                    <p className={`font-semibold mb-3 ${
                                        modalBird.rarity === BirdRarity.Common ? 'text-gray-300' :
                                        modalBird.rarity === BirdRarity.Uncommon ? 'text-green-400' :
                                        modalBird.rarity === BirdRarity.Rare ? 'text-blue-400' : 'text-purple-400'
                                    }`}>{translateRarity(modalBird.rarity)}</p>
                                    {modalBird.description && <p className="text-slate-300 mb-4">{modalBird.description}</p>}
                                    {modalBird.fact && <p className="text-cyan-200 italic p-3 bg-slate-700 rounded-md">"{modalBird.fact}"</p>}
                                </div>
                            </div>
                        )}
                        <button onClick={() => setModalBird(null)} className="absolute top-2 right-2 text-2xl font-bold text-slate-400 hover:text-white">&times;</button>
                    </div>
                </div>
            )}
            {showQrModal && (
                <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={() => setShowQrModal(false)}>
                    <div className="bg-slate-800 rounded-lg max-w-sm w-full p-6 relative text-white border-2 border-cyan-500 shadow-xl" onClick={e => e.stopPropagation()}>
                        <h2 className="text-2xl font-bold text-center mb-4 text-cyan-300">QR 코드로 공유하기</h2>
                        {shareUrl ? (
                            <>
                                <div className="bg-white p-4 rounded-lg flex items-center justify-center">
                                    <img 
                                        src={`https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=${shareUrl}&margin=10`}
                                        alt="공유 QR 코드"
                                        width="256"
                                        height="256"
                                    />
                                </div>
                                <p className="text-center mt-4 text-slate-400">이 QR 코드를 스캔하여 다른 사람과 앱을 공유하세요.</p>
                            </>
                        ) : (
                            <p className="text-center text-lg text-red-400 my-8">공유 가능한 URL을 생성할 수 없습니다.</p>
                        )}
                        <button onClick={() => setShowQrModal(false)} className="absolute top-2 right-2 text-2xl font-bold text-slate-400 hover:text-white">&times;</button>
                    </div>
                </div>
            )}
            {showToast && (
                <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-black/80 text-white px-6 py-2 rounded-full z-50 animate-pulse">
                    {showToast}
                </div>
            )}

            <header className="relative z-20 flex flex-wrap justify-between items-center gap-2 p-4 bg-black/30">
                <div>
                    <h1 className="text-2xl font-bold">{currentLocation.name}</h1>
                    <p className="text-sm text-slate-300">{currentLocation.description}</p>
                </div>
                <div className="text-2xl font-bold text-yellow-400">
                    {score}P
                </div>
            </header>

            <div
                ref={gameAreaRef}
                className="flex-1 relative overflow-hidden"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ cursor: currentZoom > 1 ? 'crosshair' : 'default' }}
            >
                <div
                    className="absolute inset-0 w-full h-full"
                    style={gameAreaStyle}
                >
                    <BackgroundScenery className="absolute inset-0 w-full h-full" colors={BACKGROUND_COLORS[currentLocationId]} />
                    {birds.map(renderBird)}
                </div>
                { (currentEquipment === EquipmentType.LowPerformance || currentEquipment === EquipmentType.StandardBinoculars) && <BinocularOverlaySVG /> }
                { currentEquipment === EquipmentType.SwarovskiBinoculars && <SwarovskiOverlaySVG /> }
                { currentEquipment === EquipmentType.HighPerformance && <FieldscopeOverlay /> }
            </div>

            {equipment.length > 1 && (
                <div aria-label="장비 선택" className="absolute top-1/2 -translate-y-1/2 right-4 z-30 flex flex-col gap-3 bg-black/50 backdrop-blur-sm p-3 rounded-xl shadow-lg">
                    {ownedEquipmentForUI.map(item => (
                        <button key={item.type} onClick={() => handleSelectEquipment(item.type)} title={item.name} className={`p-3 rounded-lg transition-all transform ${currentEquipment === item.type ? 'bg-cyan-500 scale-110 shadow-lg' : 'bg-slate-700 hover:bg-slate-600'}`}>
                            <item.Icon className="w-8 h-8"/>
                        </button>
                    ))}
                </div>
            )}

            {currentEquipment === EquipmentType.SwarovskiBinoculars && (
                <div className="absolute bottom-1/4 right-4 z-30 flex items-center gap-2 bg-black/50 backdrop-blur-sm p-2 rounded-xl shadow-lg">
                    <button 
                        onClick={handleZoomOut} 
                        disabled={swarovskiZoom <= SWAROVSKI_MIN_ZOOM}
                        className="px-3 py-1 bg-slate-700 hover:bg-slate-600 disabled:bg-slate-800 disabled:cursor-not-allowed rounded text-lg font-bold"
                        aria-label="줌 아웃"
                    >
                        -
                    </button>
                    <span className="font-bold text-cyan-400 w-16 text-center tabular-nums">{swarovskiZoom.toFixed(1)}x</span>
                    <button 
                        onClick={handleZoomIn} 
                        disabled={swarovskiZoom >= SWAROVSKI_MAX_ZOOM}
                        className="px-3 py-1 bg-slate-700 hover:bg-slate-600 disabled:bg-slate-800 disabled:cursor-not-allowed rounded text-lg font-bold"
                        aria-label="줌 인"
                    >
                        +
                    </button>
                </div>
            )}

            <footer className="relative z-20 bg-black/50 p-3">
                <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4">
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        <button onClick={() => setGameState('location')} className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg" aria-label="지역 선택">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            <span className="hidden sm:inline">지역 선택</span>
                        </button>
                        <button onClick={() => setGameState('fieldguide')} className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg" aria-label="도감">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v11.494m-9-8.994v11.494l9-2.571 9 2.571V6.253l-9-2.571-9 2.571z" /></svg>
                            <span className="hidden sm:inline">도감</span>
                        </button>
                        <button onClick={() => setGameState('logbook')} className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg" aria-label="기록장">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                            <span className="hidden sm:inline">기록장</span>
                        </button>
                        <button onClick={() => setGameState('shop')} className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg" aria-label="상점">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="hidden sm:inline">상점</span>
                        </button>
                         <button onClick={handleRespawnBirds} className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg" aria-label="새 다시 찾기">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5M20 20v-5h-5" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 9a9 9 0 0114.13-5.12M20 15a9 9 0 01-14.13 5.12" /></svg>
                            <span className="hidden sm:inline">새 다시 찾기</span>
                        </button>
                        <button onClick={() => setShowQrModal(true)} className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg" aria-label="QR 코드로 공유">
                            <QrCodeIcon className="h-6 w-6" />
                            <span className="hidden sm:inline">공유</span>
                        </button>
                    </div>

                    <div className="w-full max-w-sm sm:w-auto">
                        <div className="bg-slate-700 rounded-lg p-2">
                            <h3 className="text-sm text-center mb-2">미션 ({missions.filter(m=>m.isCompleted).length}/{missions.length})</h3>
                            {missions.find(m => !m.isCompleted) ?
                                <div className="flex items-center text-sm">
                                    <CheckCircleIcon className="w-4 h-4 mr-2 text-slate-400" />
                                    <span>{missions.find(m => !m.isCompleted)?.description}</span>
                                </div> :
                                <p className="text-sm text-center text-green-400">모든 미션 완료!</p>
                            }
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
};

export default App;
