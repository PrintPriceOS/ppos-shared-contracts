export enum GlobalJobState {
    INGESTED = 'INGESTED',
    PREFLIGHTING = 'PREFLIGHTING',
    PRICING = 'PRICING',
    MATCHMAKING = 'MATCHMAKING',
    DISPATCHED = 'DISPATCHED',
    NODE_ACCEPTED = 'NODE_ACCEPTED',
    IN_PRODUCTION = 'IN_PRODUCTION',
    SHIPPED = 'SHIPPED',
    FAILED = 'FAILED',
    REFUNDED = 'REFUNDED'
}

export interface JobSpecs {
    format?: string;
    binding?: string;
    target_country?: string;
    [key: string]: any;
}

export interface JobFindings {
    specs: JobSpecs;
    technical_errors?: any[];
    warnings?: any[];
}
