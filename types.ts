// Fix: Import 'React' to resolve 'Cannot find namespace React' error.
import React from 'react';

export enum EquipmentType {
  NakedEye = 'nakedeye',
  LowPerformance = 'low_performance',
  StandardBinoculars = 'standard_binoculars',
  Camera = 'camera',
  TelephotoCamera = 'telephoto_camera',
  HighPerformance = 'high_performance',
  SwarovskiBinoculars = 'swarovski_binoculars',
}

export enum BirdRarity {
  Common = 'common',
  Uncommon = 'uncommon',
  Rare = 'rare',
  Legendary = 'legendary',
}

export enum BirdDistance {
  Near = 'near',
  Medium = 'medium',
  Far = 'far',
}

export interface Bird {
  id: number;
  name: string; // 실제 새의 이름
  rarity: BirdRarity;
  distance: BirdDistance;
  displayColor: string; // 렌더링을 위한 대표 색상 (hex)
  position: { top: number; left: number };
  size: number;
  
  // 발견 후 속성
  isFound: boolean;
  description: string;
  fact: string;
}

export interface Mission {
  id: number;
  description: string;
  isCompleted: boolean;
  requires: {
    rarity?: BirdRarity;
    count: number;
    description: string;
  };
}

// Fix: Add 'hallasan' to support Hallasan location data.
export type LocationId = 'seoulForest' | 'jirisan' | 'cheorwon' | 'junam' | 'nakdongEstuary' | 'hwaseongho' | 'cheonsuman' | 'geolmaeri' | 'neighborhoodPark' | 'hadori' | 'hallasan' | 'jejuCoast' | 'upoWetland' | 'suncheonBay';

export interface Location {
    id: LocationId;
    name: string;
    description: string;
    availableBirds: string[];
}

export interface ShopItem {
    type: EquipmentType;
    name: string;
    price: number;
    description: string;
    Icon: React.FC<{ className?: string }>;
}