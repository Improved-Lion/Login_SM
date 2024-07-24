import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

//# session Storage에 저장하기 위해 사용 
const { persistAtom } = recoilPersist({
	key: 'loginUser',
	storage: sessionStorage,
});

export const userState = atom({
	key: 'userState',
	default: null,
	effects: [persistAtom],
});