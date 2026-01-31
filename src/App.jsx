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
        year: "2021",
        month: "2",
        season: "冬",
        image: "Game-Genre/RPG/ブルーアーカイブ.jpg"
    },
    {
        name: "アズールレーン",
        genre: ["RPG,シューティング"],
        model: "iOS,Android",
        seller: "Yostar, Inc.",
        link: "https://www.azurlane.jp/",
        download: 40000000,
        year: "2017",
        month: "9",
        season: "夏",
        image: "Game-Genre/RPG/アズールレーン.jpg"
    }
];
export default function App() {
  return (
    <div>
      <h1>ゲーム 全世界累計ダウンロード数マップ 制作段階中</h1>
    </div>
  );
}