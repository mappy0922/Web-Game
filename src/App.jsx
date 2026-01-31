import { useState } from "react";
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from "recharts";

const Game = [
    {
        name: "ブルーアーカイブ -Blue Archive-",
        genre: ["RPG"],
        model: "iOS,Android",
        seller: "Yostar, Inc.",
        link: "https://bluearchive.jp/",
        download: 13000000,
        year: 2021,
        month: 2,
        season: "冬",
        image: "Game-Genre/RPG/ブルーアーカイブ.jpg"
    },
    {
        name: "アズールレーン",
        genre: ["RPG","シューティング"],
        model: "iOS,Android",
        seller: "Yostar, Inc.",
        link: "https://www.azurlane.jp/",
        download: 40000000,
        year: 2017,
        month: 9,
        season: "夏",
        image: "Game-Genre/RPG/アズールレーン.jpg"
    },
    {
        name: "Fate/Grand Order",
        genre: ["RPG"],
        model: "iOS,Android",
        seller: "Aniplex Inc.",
        link: "https://www.fate-go.jp/",
        download: 80000000,
        year: 2015,
        month: 7,
        season: "夏",
        image: "Game-Genre/RPG/Fate Grand Order.jpg"
    },
    {
        name: "ファイナルファンタジーXIV",
        genre: ["RPG"],
        model: "PS4,PS5,PC,Xbox",
        seller: "SQUARE ENIX, Inc.",
        link: "https://www.finalfantasyxiv.com/freetrial/?utm_source=accesstrade&utm_medium=affiliate&utm_campaign=jp-freetrial&utm_content=affiliate-1&atnct=seff14_0100mmzp009j64-ff151fed48cbe91e97418554175f1e60",
        download: 30000000,
        year: 2013,
        month: 8,
        season: "夏",
        image: "Game-Genre/RPG/ファイナルファンタジーXIV.jpg"
    },
];
export default function App() {
  return (
    <div>
      <h1>ゲーム 全世界累計ダウンロード数マップ 制作段階中</h1>
    </div>
  );
}