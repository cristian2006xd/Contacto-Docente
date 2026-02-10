export interface Pet {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
}

export interface ApiResponse {
    count: number;
    data: Pet[];
}