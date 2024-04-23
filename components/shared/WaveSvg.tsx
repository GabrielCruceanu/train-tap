export default function WaveSvg({ fill }: { fill: string }) {
  return (
    <svg
      viewBox="0 0 320 26"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <path
        d="M320 11.405L242.24 11.405C185.186 11.405 128.94 25.7343 80 25.7343C31.0601 25.7343 0 11.405 0 11.405L0 0L320 0V11.405Z"
        fill={fill}
      />
    </svg>
  );
}
