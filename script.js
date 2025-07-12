const deg = 6;
const hr = document.getElementById("hr");
const mn = document.getElementById("mn");
const sc = document.getElementById("sc");

setInterval(() => {
  const now = new Date();
  const hh = now.getHours() * 30;
  const mm = now.getMinutes() * deg;
  const ss = now.getSeconds() * deg;

  hr.style.transform = `translate(-50%, -100%) rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `translate(-50%, -100%) rotateZ(${mm}deg)`;
  sc.style.transform = `translate(-50%, -100%) rotateZ(${ss}deg)`;
}, 1000);

// Project: Neumorphic Analog Clock
// Author: Kamran Javed
// Portfolio: https://kamranjaved.com
// Company: OneDigitalLine
// Website: https://onedigitalline.com
// Email: meet@kamranjaved.com
// License: For personal or client use only. Redistribution prohibited.
// © Kamran Javed. All rights reserved.
