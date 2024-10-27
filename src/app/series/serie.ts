export class Serie {
    id: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    webpage: string; 
    poster: string;

  
    constructor(id: number, name: string, channel: string, seasons: number, description: string, webpage: string, poster: string) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.webpage = webpage;
        this.poster = poster;
    
    }

    getId(): string {
        return `${this.id}`;
    }
  
    getName(): string {
        return `${this.name}`;
    }

    getChannel(): string {
        return `${this.channel}`;
    }

    getSeasons(): number {
        return this.seasons;
    }

    getUrl(): string {
        return `${this.webpage}`;
    }

    getPhoto(): string {
        return `${this.poster}`;
    }

    getDescription(): string {
        return `${this.description}`; 
    }

  }
  