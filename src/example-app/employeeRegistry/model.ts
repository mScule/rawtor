export enum JobTitle {
    Sales = "Sales",
    Programmer = "Programmer",
    CoffeeMaker = "Coffee maker"
}

export interface Employee {
	name: string
	title: JobTitle
	salary: number
}
