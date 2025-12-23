import { GoogleGenAI, Type } from "@google/genai";
import { Bird } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const birdInfoSchema = {
    type: Type.OBJECT,
    properties: {
        description: {
            type: Type.STRING,
            description: "새의 신체적 특징, 행동, 서식지에 대한 짧고 매력적인 한국어 설명."
        },
        fact: {
            type: Type.STRING,
            description: "새에 대한 재미있고 흥미로운 한국어 사실 한 가지."
        }
    },
    required: ["description", "fact"]
};

export const identifyBird = async (bird: Bird): Promise<{ description: string; fact: string; }> => {
    const prompt = `당신은 한국 조류학 전문가입니다. 한 플레이어가 '${bird.name}'을(를) 발견했습니다. 이 새의 실제 특징과 생태에 대한 간략한 설명과, 아이들이 이해하기 쉬운 흥미로운 사실 한 가지를 한국어로 생성해주세요. 게임에 어울리게 가볍고 매력적인 톤을 유지해주세요.`;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: birdInfoSchema,
                temperature: 0.7,
            },
        });
        
        const jsonText = response.text.trim();
        const identifiedData = JSON.parse(jsonText);

        if (identifiedData.description && identifiedData.fact) {
            return identifiedData;
        } else {
            throw new Error("AI로부터 잘못된 데이터 형식 수신");
        }
    } catch (error) {
        console.error("새 식별 오류:", error);
        return {
            description: "AI가 현재 휴식 중입니다. 이 아름다운 새에 대한 자세한 정보를 가져올 수 없었습니다.",
            fact: "가장 발전된 AI도 가끔은 휴식이 필요합니다! 잠시 후 다시 시도해 주세요."
        };
    }
};