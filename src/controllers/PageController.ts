import { Request, Response } from "express";
import { dishes } from "../models/dishes";


export const home = (req: Request, res : Response) =>{
    res.render('pages/page', {
        dishe : dishes.getAll()
    })
}

export const breakfast = (req: Request, res : Response) =>{
    res.render('pages/page', {
        dishe : dishes.getFromType('breakfast')
    })
}

export const lunch = (req: Request, res : Response) =>{
    res.render('pages/page', {
        dishe : dishes.getFromType('lunch')
    })
}

export const shakes = (req: Request, res : Response) =>{
    res.render('pages/page', {
        dishe : dishes.getFromType('shakes')
    })
}

export const dinner = (req: Request, res : Response) =>{
    res.render('pages/page', {
        dishe : dishes.getFromType('dinner')
    })
}

