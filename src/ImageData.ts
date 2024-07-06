export interface ImageData {
    id: number;
    src: string;
    alt: string;
    rotation: number;
    hovrotate: number;
    title: string;
    description: string;
  }
  
  export const imageData: ImageData[] = [
    {
      id: 1,
      src: "https://i.pinimg.com/736x/92/ef/db/92efdb774b505959b91335e8154a72c8.jpg",
      alt: "Dribble Logo",
      rotation: -5,
      hovrotate: 5,
      title: "Scribble",
      description: "Direct and organized note-taking experience."
    },
    {
      id: 2,
      src: "https://cdn.dribbble.com/userupload/3738333/file/original-268438b1711fa90e216c7fffcc58134b.jpg?resize=400x300&vertical=center",
      alt: "Dribble Logo",
      rotation: 5,
      hovrotate: -5,
      title: "Telecome",
      description: "Message locals in real-time for honest advice when traveling to a foreign country."
    },
    {
      id: 3,
      src: "https://cdn.dribbble.com/userupload/5892515/file/original-f07aedcee81cada6f4882ce5d40ef57d.jpg?resize=400x300&vertical=center",
      alt: "Logo Work Dribble",
      rotation: -5,
      hovrotate: 5,
      title: "Predator Icon Pack",
      description: "Icons designed for a specialized voltage themed interface on Nike+ app."
    }
  ];
  