import mongoose from 'mongoose';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const connectMongoDb = (handler: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse) => {
	if (mongoose.connection.readyState !== 0) {
		return handler(req, res);
	}
	await mongoose.connect(process.env.DB_URI as string);
	return handler(req, res);
};

export default connectMongoDb;
