export class Event {
    id: number;
    petName: string;
    startDate: string;
    client: string;
    contactNumber: string;
    status: string;
    eventType: string;

    constructor(event: {
        id?: number
        petName?: string,
        startDate?: string,
        client?: string,
        contactNumber?: string,
        status?: string,
        eventType?: string
    }) {
        this.id = event.id || 0;
        this.petName = event.petName || '';
        this.startDate = event.startDate || '';
        this.client = event.client || '';
        this.contactNumber = event.contactNumber || '';
        this.status = event.status || 'PENDING';
        this.eventType = event.eventType || 'General';
    }
}
