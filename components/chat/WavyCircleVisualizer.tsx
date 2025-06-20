import React, { useEffect, useRef } from "react";

interface WavyCircleVisualizerProps {
  analyser: AnalyserNode | null;
  isActive: boolean;
  size?: number;
}

const WavyCircleVisualizer: React.FC<WavyCircleVisualizerProps> = ({
  analyser,
  isActive,
  size = 292, // match the outermost border size in ClinicTTSVisualizer
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!analyser || !isActive) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf: number;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    const center = size / 2;
    const mainCircleRadius = 220 / 2; // main blue circle radius
    const staticBorder = 0; // static white border thickness (removed)
    const gap = 0; // gap between static border and wavy border (removed)
    const borderWidth = 16; // wavy border thickness (reduced)
    const minR = mainCircleRadius + borderWidth / 2; // always outside main circle
    const points = 128;
    function draw() {
      if (!ctx || !analyser) return;
      ctx.clearRect(0, 0, size, size);
      analyser.getByteFrequencyData(dataArray);
      ctx.save();
      ctx.translate(center, center);
      ctx.beginPath();
      for (let i = 0; i <= points; i++) {
        const angle = (i / points) * Math.PI * 2;
        // Mirror frequency bins around the circle
        let bin;
        if (i < points / 2) {
          bin = Math.floor((i / (points / 2)) * (bufferLength / 2));
        } else {
          bin = Math.floor(((points - i) / (points / 2)) * (bufferLength / 2));
        }
        const amp = dataArray[bin] / 255;
        // Only move outward from the base border, clamp to minR
        let r = minR + amp * borderWidth;
        r = Math.max(r, minR); // failsafe: never less than minR
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.shadowColor = "#fff";
      ctx.shadowBlur = 24;
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = borderWidth;
      ctx.stroke();
      ctx.restore();
      raf = requestAnimationFrame(draw);
    }
    draw();
    return () => {
      cancelAnimationFrame(raf);
      if (ctx) ctx.clearRect(0, 0, size, size);
    };
  }, [analyser, isActive, size]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}
    />
  );
};

export default WavyCircleVisualizer;
