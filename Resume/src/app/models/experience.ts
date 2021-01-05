export enum CompanyType{
    Main = "MainCompany",
    Customer = "CustomerCompany"
}

export class Experience {
   public company: string;
   public type: CompanyType;
   public role: string;
   public from: Date;
   public to: Date;
   public description: string;
   public website: string;
   public customers: string[];
   public technologies: string[];
}