type Preference = {
    type: "Walk" | "Jog" | "Run" | "Interval" | null;
    pace: number | null;
    distance: number | null;
    city: string | null;
}

export type {Preference}