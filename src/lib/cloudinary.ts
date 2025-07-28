import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadToCloudinary = async (file: File): Promise<string> => {
	try {
		// Convert file to buffer
		const bytes = await file.arrayBuffer();
		const buffer = Buffer.from(bytes);

		// Upload to Cloudinary
		const result = await new Promise((resolve, reject) => {
			cloudinary.uploader
				.upload_stream(
					{
						resource_type: 'image',
						folder: 'kyc-documents',
					},
					(error, result) => {
						if (error) {
							reject(error);
						} else {
							resolve(result);
						}
					}
				)
				.end(buffer);
		});

		return (result as any).secure_url;
	} catch (error) {
		console.error('Error uploading to Cloudinary:', error);
		throw new Error('Failed to upload image');
	}
};
