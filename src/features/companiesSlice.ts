import { createSlice, PayloadAction} from '@reduxjs/toolkit';

 export interface Company {
    id: number;
    name: string;
    address: string;
    selected: boolean;
  }
  
  const initialState: Company[] = [
    { id: 1, name: 'ПАО "НК "РОСНЕФТЬ"', address: 'г. Москва', selected: false },
    { id: 2, name: 'ПАО "ГАЗПРОМ"', address: 'г. Санкт-Петербург', selected: false },
    { id: 3, name: 'ООО "БАНКНОТА"', address: 'г. Москва', selected: false },
    { id: 4, name: 'ПАО "ЛУКОЙЛ"', address: 'г. Москва', selected: false },
    { id: 5, name: 'ОАО "РЖД"', address: 'г. Москва', selected: false },
    { id: 6, name: 'ООО "АГРОТОРГ"', address: 'г. Санкт-Петербург', selected: false },
    { id: 7, name: 'АО "ТАНДЕР"', address: 'г. Краснодар', selected: false },
    { id: 8, name: 'ПАО "СУРГУТНЕФТЕГАЗ"', address: 'г. Сургут', selected: false },
    { id: 9, name: 'ПАО "ТАТНЕФТЬ" ИМ. В.Д. ШАШИНА', address: 'г. Альметьевск', selected: false },
    { id: 10, name: 'ПАО "ТРАНСНЕФТЬ"', address: 'г. Москва', selected: false },
    { id: 11, name: 'ООО "ГАЗПРОМ МЕЖРЕГИОНГАЗ"', address: 'г. Санкт-Петербург', selected: false },
    { id: 12, name: 'ООО "ЛУКОЙЛ-ЗАПАДНАЯ СИБИРЬ"', address: 'г. Когалым', selected: false },
    { id: 13, name: 'АО "ТК "МЕГАПОЛИС"', address: 'г. Видное', selected: false },
    { id: 14, name: 'ПАО "СИБУР ХОЛДИНГ"', address: 'г. Тобольск', selected: false },
    { id: 15, name: 'АО "ГАЗСТРОЙПРОМ"', address: 'г. Санкт-Петербург', selected: false },
    { id: 16, name: 'ООО "ЭКСЕЛЬСИОР"', address: 'г. Москва', selected: false },
    { id: 17, name: 'ПАО "ГМК "НОРИЛЬСКИЙ НИКЕЛЬ"', address: 'г. Дудинка', selected: false },
    { id: 18, name: 'ПАО "НОВАТЭК"', address: 'г. Тарко-Сале', selected: false },
    { id: 19, name: 'АО "ТОРГОВЫЙ ДОМ "ПЕРЕКРЕСТОК"', address: 'г. Москва', selected: false },
    { id: 20, name: 'ПАО АНК "БАШНЕФТЬ"', address: 'г. Уфа', selected: false }
  ];
  
const companySlice = createSlice({
    name: 'companies',
    initialState,
    reducers: {
        toggleSelect(state, action: PayloadAction<number>) {
            const company = state.find(c => c.id === action.payload);
            if (company) {
              company.selected = !company.selected;
            }
        },
        toggleSelectAll(state, action: PayloadAction<boolean>) {
            state.forEach(company => {
              company.selected = action.payload;
            });
        },
        updateCompany(state, action: PayloadAction<{ id: number; name: string; address: string }>) {
          const company = state.find(c => c.id === action.payload.id);
          if (company) {
            company.name = action.payload.name;
            company.address = action.payload.address;
          }
        },
        addCompany(state, action: PayloadAction<Omit<Company, 'id' | 'selected'>>) {
          const newId = state.length ? Math.max(...state.map(c => c.id)) + 1 : 1;
          state.push({ id: newId, ...action.payload, selected: false });
        },
        deleteSelected(state) {
          return state.filter(company => !company.selected);
        },
    },
  });
  
  export const { toggleSelect, toggleSelectAll, updateCompany, addCompany, deleteSelected } = companySlice.actions;
  export default companySlice.reducer;
  