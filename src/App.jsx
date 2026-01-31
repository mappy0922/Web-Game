import { useState } from "react";
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from "recharts";

const Game = [
    {
        name: "ブルーアーカイブ -Blue Archive-",
        genre: "RPG",
        model: "iOS,Android",
        download: 13000000,
        year: "2021",
        month: "2",
        season: "冬",
        image: "Game-Genre/RPG/ブルーアーカイブ.jpg"
    },
];
export default function App() {
  return (
    <div>
      <h1>ゲーム ダウンロード数マップ制作段階中</h1>
    </div>
  );
}