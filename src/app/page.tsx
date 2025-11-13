"use client";

import { Button } from "@/components/Button";
import { GridItem } from "@/components/GridItem";
import { InfoItem } from "@/components/InfoItem";
import { items } from "@/data/items";
import { formatTimeElapsed } from "@/helpers/formatTimeElapsed";
import { GridItemType } from "@/types/GridItemType";
import { useEffect, useState } from "react";

const HomePage = () => {

    const [playing, setPlaying] = useState<boolean>(false);
    const [timeElapsed, setTimeElapsed] = useState<number>(0);
    const [moveCount, setMoveCount] = useState<number>(0);
    const [shownCount, setShownCount] = useState<number>(0);
    const [gridItems, setGridItems] = useState<GridItemType[]>([]);

    useEffect(() => {
        const timer = setInterval(() => {
            if (playing) {
                setTimeElapsed(timeElapsed + 1);
            }
        }, 1000);
        return () => clearInterval(timer)
    }, [playing, timeElapsed])

    useEffect(() => resetAndCreateGrid(), []);

    useEffect(() => {
        if (shownCount === 2) {
            let opened = gridItems.filter(item => item.shown === true)
            if (opened.length === 2) {
                if (opened[0].item === opened[1].item) {
                    let tmpGrid = [...gridItems];
                    for (let i in tmpGrid) {
                        if (tmpGrid[i].shown) {
                            tmpGrid[i].permanentShown = true;
                            tmpGrid[i].shown = false;
                        }
                    }
                    setGridItems(tmpGrid);
                    setShownCount(0);
                } else {
                    setTimeout(() => {
                        let tmpGrid = [...gridItems];
                        for (let i in tmpGrid) {
                            tmpGrid[i].shown = false;
                        }
                        setGridItems(tmpGrid);
                        setShownCount(0);
                    }, 1000)
                }


                setMoveCount(moveCount => moveCount + 1)
            }
        }
    }, [shownCount, gridItems])

    useEffect(() => {
        if (moveCount > 0 && gridItems.every(item => item.permanentShown === true)) {
            setPlaying(false);
        }
    }, [moveCount, gridItems])

    const resetAndCreateGrid = () => {
        // Resetando o jogo
        setTimeElapsed(0);
        setMoveCount(0);
        setShownCount(0);

        // Criando o grid vazio
        let tmpGrid: GridItemType[] = [];
        for (let i = 0; i < (items.length * 2); i++) {
            tmpGrid.push({
                item: null,
                shown: false,
                permanentShown: false
            })
        }

        // Preenchendo o grid
        for (let w = 0; w < 2; w++) {
            for (let i = 0; i < items.length; i++) {
                let pos = -1;
                while (pos < 0 || tmpGrid[pos].item !== null) {
                    pos = Math.floor(Math.random() * (items.length * 2));
                }
                tmpGrid[pos].item = i;
            }
        }

        setGridItems(tmpGrid)

        setPlaying(true);

    }

    const handleItemClick = (index: number) => {
        if (playing && index !== null && shownCount < 2) {
            let tmpGrid = [...gridItems];
            if (tmpGrid[index].permanentShown === false && tmpGrid[index].shown === false) {
                tmpGrid[index].shown = true;
                setShownCount(shownCount + 1);
            }
            setGridItems(tmpGrid)
        }
    }

    return (
        <div className="p-10 w-full min-h-screen sm:flex sm:items-center sm:justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row w-full">
                <div className="flex-1 flex flex-col items-center justify-center">
                    <a href="" />
                    <img src={"/images/jogo-da-memoria.png"} width={200} alt="" className="mt-0 sm:-mt-10" />
                    <div className="w-full">
                        <InfoItem label="Tempo" value={formatTimeElapsed(timeElapsed)} />
                        <InfoItem label="Movimentos" value={moveCount.toString()} />
                    </div>
                    <Button
                        label="Reiniciar"
                        icon={'/images/restart.svg'}
                        onClick={resetAndCreateGrid}
                    />
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <div className="grid gap-2.5 grid-cols-2 mt-10 sm:grid-cols-4 md:mt-0 w-100">
                        {gridItems.map((item, index) => (
                            <GridItem
                                key={index}
                                item={item}
                                onClick={() => handleItemClick(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HomePage;