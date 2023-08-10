import {create} from 'zustand';

interface searchTextTypes {
	text: string;
}

interface searchTextStoreTypes {
	text: string;
	setSearchText: (props: searchTextTypes) => void;
}

export const searchTextStore = create<searchTextStoreTypes>((set) => ({
	text: '',
	setSearchText: (props) => set(() => ({text: props.text})),
}));
