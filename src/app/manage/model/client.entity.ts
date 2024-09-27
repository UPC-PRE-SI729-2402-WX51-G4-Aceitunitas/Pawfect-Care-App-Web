export class Client {
    id: number;
    fullName: string;
    phone: string;
    email: string;
    address: string;
    status: string;
    hc: number;
  
    constructor(client: {
      id?: number,
      fullName?: string,
      phone?: string,
      email?: string,
      address?: string,
      status?: string,
      hc?: number
    }) {
      this.id = client.id || 0;
      this.fullName = client.fullName || '';
      this.phone = client.phone || '';
      this.email = client.email || '';
      this.address = client.address || '';
      this.status = client.status || '';
      this.hc = client.hc || 0;
    }
  }
  