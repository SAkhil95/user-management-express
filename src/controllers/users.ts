import { Request, Response } from 'express';
import { users } from '../data/users';

export const getUsers = (req: Request, res: Response) => {
    res.json(users);
};

export const getUser = (req: Request, res: Response) => {
    const { userId } = req.params;
    const matchingUser = users.find(u => u.id == parseInt(userId));
    res.json(matchingUser);
};

export const addUser = (req: Request, res: Response) => {
    const newUser = req.body;
    const newId = users[users.length - 1].id + 1;
    users.push({
        id: newId,
        ...newUser
    });
    res.send({ status: 'success' });
};

export const viewUsers = (req: Request, res: Response) => {
    req.session.views = req.session.views ? req.session.views + 1 : 1;
    console.log('req.session.views: ', req.session.views);
    // res.render('users', {
    //     title: 'MEAN',
    //     users,
    //     views: req.session.views
    // });
    loggedInUsers(req, res)
}

const loggedInUsers = (req: Request, res: Response) => {
    res.render('users', {
        title: 'MEAN',
        users,
        views: req.session.views
    });
}
