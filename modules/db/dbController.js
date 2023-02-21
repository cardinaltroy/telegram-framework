const { User } = require('./dbModels')


class dbController {
    async registration(props) {
        let { userId, username, ref } = props;

        const candidate = await User.findOne({ where: { userId } });

        if (candidate) return { status: false, event: 'user already exist' };

        const user = await User.create({ userId, username, ref });

        return { status: true, event: user };
    }

    async username(props) {
        let { userId, username } = props;

        return await User.update({ username }, { where: { userId } });
    }

    async profile(props) {
        let { userId } = props;

        return await User.findOne({ where: { userId } });
    }

    async adminExist() {
        return await User.findOne({ where: { role: "ADMIN" } })
    }

    async adminAdd(props) {
        let { userId } = props;

        return await User.update({ role: "ADMIN" }, { where: { userId } });
    }

    async adminRemove(Props) {

    }
}


module.exports = new dbController();