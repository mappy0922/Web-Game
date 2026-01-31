import { useState } from "react";

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
        seller: "SQUARE ENIX",
        link: "https://www.finalfantasyxiv.com/freetrial/?utm_source=accesstrade&utm_medium=affiliate&utm_campaign=jp-freetrial&utm_content=affiliate-1&atnct=seff14_0100mmzp009j64-ff151fed48cbe91e97418554175f1e60",
        download: 30000000,
        year: 2013,
        month: 8,
        season: "夏",
        image: "Game-Genre/RPG/ファイナルファンタジーXIV.jpg"
    },
    {
        name: "ヘブンバーンズレッド",
        genre: ["RPG"],
        model: "iOS.Android,PC",
        seller: "WFS, Inc.",
        link: "https://heaven-burns-red.com/",
        download: 6000000,
        year: 2022,
        month: 2,
        season: "冬",
        image: "Game-Genre/RPG/ヘブンバーンズレッド.jpg"
    },
    {
        name: "勝利の女神：NIKKE",
        genre: ["RPG","アクション","シューティング"],
        model: "iOS.Android",
        seller: "Proxima Beta Pte.Limited",
        link: "https://nikke-jp.com/",
        download: 50000000,
        year: 2022,
        month: 11,
        season: "秋",
        image: "Game-Genre/RPG/勝利の女神NIKKE.jpg"
    },
    {
        name: "PSO2 ニュージェネシス",
        genre: ["RPG"],
        model: "Switch,PS4,PC",
        seller: "SEGA",
        link: "https://lp.pso2.jp/",
        download: 12000000,
        year: 2021,
        month: 6,
        season: "夏",
        image: "Game-Genre/RPG/PSO2 ニュージェネシス.jpg"
    },
    {
        name: "グランブルーファンタジー",
        genre: ["RPG"],
        model: "iOS.Android",
        seller: "Cygames, Inc.",
        link: "https://granbluefantasy.jp/",
        download: 39000000,
        year: 2014,
        month: 3,
        season: "冬",
        image: "Game-Genre/RPG/グランブルーファンタジー.jpg"
    },
    {
        name: "崩壊：スターレイル",
        genre: ["RPG"],
        model: "iOS.Android,PS5,PC",
        seller: "COGNOSPHERE PTF. LTD.",
        link: "https://hsr.hoyoverse.com/ja-jp/",
        download: 160000000,
        year: 2023,
        month: 4,
        season: "春",
        image: "Game-Genre/RPG/崩壊スターレイル.jpg"
    },
];
export default function App() {
  return (
    <div>
      <h1>ゲーム 全世界累計ダウンロード数マップ 制作段階中</h1>
    </div>
  );
}