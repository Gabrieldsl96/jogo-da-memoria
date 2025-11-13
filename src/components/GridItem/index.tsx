import { items } from "@/data/items";
import { GridItemType } from "@/types/GridItemType"

type Props = {
    item: GridItemType;
    onClick: () => void;
}

export const GridItem = ({ item, onClick }: Props) => {
    return (
        <div
            onClick={onClick}
            className={`h-[100px] border rounded-md flex justify-center items-center cursor-pointer ${item.shown || item.permanentShown ? "bg-blue-500" : "bg-neutral-200"} `}
        >
            {item.permanentShown === false && item.shown === false &&
                <img
                    src={'/images/b7.svg'}
                    alt=""
                    className={`w-[40px] h-[40px] ${item.shown ? 'opacity-0' : 'opacity-10'}`}
                />
            }
            {(item.permanentShown || item.shown) && item.item !== null &&
                <img
                    src={items[item.item].icon}
                    alt=""
                    className={`w-[40px] h-[40px] `}
                />
            }
        </div>
    )
}