import React, { BaseSyntheticEvent, SyntheticEvent, useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortDown,
  faArrowDownShortWide,
  faArrowUpShortWide
} from "@fortawesome/free-solid-svg-icons";

interface SortValues {
    key: string;
    name: string;
}

interface Props {
    title: string;
    sort?: boolean;
    type: string;
    placeholder: string;
    values: SortValues[];
}

interface FilterAndSort {
    param?: string;
    sortType?: string;
    sortDirection: boolean;
}

const AppHeader = (props: Props) => {
    const [selectHidden, setSelectHidden] = useState<boolean>(true)
    const [filterAndSort, setFilterAndSort] = useState<FilterAndSort>({
        param: "", sortType: "name", sortDirection: true
    })

    const handleSort = (e: any) => {
        setFilterAndSort({...filterAndSort, sortDirection: !filterAndSort.sortDirection});
    }

    const handleOpenSelect = () => {
        setSelectHidden(!selectHidden);
    }

    const handleSetParam = (e: BaseSyntheticEvent) => {
        setFilterAndSort({...filterAndSort, param: e.target.value});
    }

    const handleSetSortType = (e: string) => {
        setFilterAndSort({...filterAndSort, sortType: e});
    }

    useEffect(() => {
        console.log(filterAndSort);
    }, [filterAndSort])

    return (
        <div>
            <label htmlFor="param" className="text-xs md:text-base font-medium text-gray-700">
                {props.title}
            </label>
            <div className="relative mt-1 rounded-md">
                <input type={props.type} onChange={handleSetParam} name="param" id="param" className="w-full px-4 py-1 sm:py-2 md:py-4 pr-12 border-2 rounded-md text-xs md:text-base" placeholder={props.placeholder}/>
                    <div className="absolute inset-y-0 right-12 flex items-center border-l w-40 cursor-pointer"  onClick={handleOpenSelect}  onMouseLeave={!selectHidden ? handleOpenSelect : e => {}}>
                        <label htmlFor="filter" className="sr-only">
                            filter
                        </label>
                        {props.values.length > 0 && 
                        <div>
                            <button type="button" className="h-full px-6 py-2 pl-2 text-gray-900 bg-white border-1 border-gray-700 focus:ring-indigo-500 focus:border-indigo-500 pr-7 sm:text-sm rounded-r-md">
                                <span className="flex items-center">
                                    <span className="ml-3 text-xs md:text-base truncate bg-transparent">
                                        {props.values.find(value => value.key == filterAndSort.sortType)?.name}
                                    </span>
                                </span>
                                <span className="absolute inset-y-5 right-0 flex items-center pb-1 ml-4 pl-4 text-xs md:text-base ">
                                   <FontAwesomeIcon className='bg-white' icon={faSortDown} />
                                </span>
                            </button>
                            <div className={`absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg ${selectHidden ? 'hidden' : ''}`}>
                                <ul onMouseLeave={!selectHidden ? handleOpenSelect : e => {}} tabIndex={-1} role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-item-3" className="py-1 overflow-auto text-base rounded-md max-h-56 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {props.values.map((sortValue: SortValues, i: number) => {
                                        return (
                                            <li  onClick={() => handleSetSortType(sortValue.key)} key={i} id="listbox-item-0" role="option" className="relative py-2 pl-3 text-gray-900 cursor-pointer select-none hover:bg-indigo-500 hover:text-white pr-9">
                                                <div className="flex items-center">
                                                    <span className="ml-3 font-normal text-ellipsis">
                                                        {sortValue.name}
                                                    </span>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div> }
                    </div>
                    {props.sort && <div className="absolute inset-y-0 right-2 flex items-center pl-3 hover:cursor-pointer rounded-sm border-l" onClick={handleSort}>
                        <span className="text-gray-600 sm:text-lg">
                        <FontAwesomeIcon icon={filterAndSort.sortDirection ? faArrowDownShortWide : faArrowUpShortWide} />
                        </span>
                    </div>}
                </div>
            </div>
    );
};
export default AppHeader;
