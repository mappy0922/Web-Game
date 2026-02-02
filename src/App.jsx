import { useState } from "react";
import {Game} from "./Game.jsx";


export default function App() {
    const [selected, setSelected] = useState(Game[0]);
    const formatDownload = (num) => {
        if(num>=100000000) return (num/100000000).toFixed(1).replace(/\.0$/, "") + "億";
        if(num>=10000) return (num/10000).toFixed(1).replace(/\.0$/, "") + "万";
        return num.toLocaleString();
    }

  return (
    <div className="top">
        <h1 className="title">ゲーム 全世界累計ダウンロード数マップ</h1>
        <div className="Game-Circles">
            {Game.map((g,index) => (
                <div
                  key={g.name}
                  className={`Game-Circle ${selected.name === g.name ? "active" : ""}`}
                  style={{ animationDelay: `${index * 0.15}s`}}
                  onClick={() => {
                    setSelected(g);
                  }}
                >
                    <img src={g.image} alt={g.name} />
                    <span className="Copyright">©{g.name}</span>
                    <h3>{g.name}</h3>
                    <div className="Game-detail">
                        <span>ジャンル名 : {g.genre.join(" , ")}</span>
                        <span>プラットフォーム : {g.model.join(" , ")}</span>
                        <span>全世界累計ダウンロード数 : {formatDownload(g.download)}</span>
                        <span>開発社 : {g.developer}</span>
                        <span>販売元 : {g.seller}</span>
                        <span>発売年月 : {g.year}年{g.month}月 ({g.season})</span>
                        <a
                          href={g.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="Game-Link"
                        >
                            {g.name}の公式サイト
                        </a>
                        <span>※画像は紹介目的で掲載しています。</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}