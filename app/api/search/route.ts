import {NextResponse} from 'next/server';

interface NaverApiOptionsType {
	url: string;
	headers: {
		'X-Naver-Client-Id': string;
		'X-Naver-Client-Secret': string;
	};
}

const GET = async (req: Request) => {
	if (!process.env.NAVER_CLIENT_ID || !process.env.NAVER_CLIENT_SECRET) {
		throw new Error(
			'NAVER_CLIENT_ID and NAVER_CLIENT_SECRET must be defined'
		);
	}
	const {searchParams} = new URL(req.url);
	const text = searchParams.get('text') ?? '';
	const api_url = 'https://openapi.naver.com/v1/search/news?query=';

	const options: NaverApiOptionsType = {
		url: api_url + encodeURI(text),
		headers: {
			'X-Naver-Client-Id': process.env.NAVER_CLIENT_ID,
			'X-Naver-Client-Secret': process.env.NAVER_CLIENT_SECRET,
		},
	};

	if (text === '') {
		return NextResponse.json({ok: false, text: 'text is empty'});
	}

	const result = await fetch(options.url, {
		headers: {
			'X-Naver-Client-Id': process.env.NAVER_CLIENT_ID,
			'X-Naver-Client-Secret': process.env.NAVER_CLIENT_SECRET,
		},
	}).then((res) => res.json());
	console.log('backend: ', text);
	return NextResponse.json({ok: true, text, result});
};

export {GET};
