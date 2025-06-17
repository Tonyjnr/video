import {
  AbsoluteFill,
  useVideoConfig,
  interpolate,
  Sequence,
  staticFile,
  Audio,
} from "remotion";
import { Gif } from "@remotion/gif";
import { useCurrentFrame } from "remotion";
import { useRef } from "react";

export const Main = ({ title }: z.infer<typeof CompositionProps>) => {
  const { fps, durationInFrames, width, height } = useVideoConfig();
  const ref = useRef<HTMLCanvasElement>(null);
  const frame = useCurrentFrame();
  //   const opacity = interpolate(frame, [0, 60], [0, 1], {
  //   extrapolateRight: "clamp",
  // });
  return (
    <AbsoluteFill className="bg-black text-white flex items-center justify-center">
      <Audio
        src={staticFile("song.mp3")}
        endAt={2.04 * fps}
        playbackRate={0.8}
      />
      <Sequence durationInFrames={1.03 * fps} name="intro">
        <div className="flex items-center justify-center h-full w-full">
          <h1 className="text-[70px] font-bold">I</h1>
        </div>
      </Sequence>
      <Sequence from={1.03 * fps} durationInFrames={0.5 * fps} name="hope">
        <div className="flex items-center justify-center h-full w-full">
          <h1 className="text-[70px] font-bold">HOPE</h1>
        </div>
      </Sequence>
      <Sequence from={1.5 * fps} durationInFrames={0.53 * fps} name="you">
        <div className="flex items-center justify-center h-full w-full">
          <h1 className="text-[70px] font-bold">YOU</h1>
        </div>
      </Sequence>
      <Sequence from={2.01 * fps} durationInFrames={43} name="find">
        <div className="flex items-center justify-center h-full w-full relative">
          <Gif
            ref={ref}
            src={staticFile("s.gif")}
            width={width}
            height={height}
            fit="fill"
            playbackRate={1}
          />
          <h1
            style={{ webkitTextStroke: "6px white" }}
            className="text-[200px] font-bold absolute text-transparent stroke-white stroke-2"
          >
            FIND
          </h1>
        </div>
      </Sequence>
    </AbsoluteFill>
  );
};
