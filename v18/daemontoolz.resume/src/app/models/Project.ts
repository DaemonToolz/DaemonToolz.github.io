export class Project{
    public name!: string;
    public codename!: string;
    public version!: string;
    public released!: boolean;
    public description!: string;
    public descriptionLinks? : Link[];
    public repoLinks?: Link[];
    public technologies!: string[];
    public gallery!: string[];
}

export class Link{
    public name!: string;
    public link!: string;
}

export class ImagePath{
    public path!: string;
}

export class GalleryContent{
    public name!: string;
    public codename!: string;
    public images!: ImagePath[];
}