export function RenderIcon(
  type: "Videos" | "Audio recordings" | "Text documents"
) {
  if (type === "Videos") {
    return "/assets/apps/collection/video.png";
  } else if (type === "Audio recordings") {
    return "/assets/apps/collection/audio.png";
  } else {
    return "/assets/apps/collection/text.png";
  }
}

export function RenderAlt(
  type: "Videos" | "Audio recordings" | "Text documents"
) {
  if (type === "Videos") {
    return "Airplay";
  } else if (type === "Audio recordings") {
    return "Music";
  } else {
    return "Text document";
  }
}

export function RenderType(
  type: "Videos" | "Audio recordings" | "Text documents"
) {
  if (type === "Videos") {
    return "Video";
  } else if (type === "Audio recordings") {
    return "Audio";
  } else {
    return "Text";
  }
}
