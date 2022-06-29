import Router from 'express';

const router = Router();

const users = {
    dashcommerce: 'chooseMe',
};

router.get('/dashcommercetest', (req, res) => {
    const username = req.query.user.replace(/['"]+/g, '');
    const password = req.query.password.replace(/['"]+/g, '');

    if (users[username] === password)
        res.status(200).send({
            mensagem:
                'My full name is Pablo Felipe Santos Carneiro. I want this job!',
        });
    else
        res.status(401).send({
            mensagem: 'Wrong credentials.',
        });
});

export default router;
