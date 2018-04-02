        const boxWidth = 50;
        const hexagonWidth = boxWidth/6;
        const hexagonHeight = hexagonWidth*2/Math.sqrt(3);
        const rowHeight = hexagonWidth^2-(hexagonWidth^2)/4;


        const middleRowX =[
            50-hexagonWidth/2, 50-hexagonWidth/2-hexagonWidth, 50-hexagonWidth/2-2*hexagonWidth,
            50+hexagonWidth/2, 50+hexagonWidth/2+hexagonWidth, 50+hexagonWidth/2+2*hexagonWidth
        ]
        const firstRowX =[
            50-hexagonWidth/2, 50-hexagonWidth/2-hexagonWidth,
            50+hexagonWidth/2, 50+hexagonWidth/2+hexagonWidth
        ]
        const secondRowX =[
           50, 50-hexagonWidth, 50-2*hexagonWidth,
            50+hexagonWidth, 50+2*hexagonWidth
        ]
        const fourthRowX =[
           50, 50-hexagonWidth, 50-2*hexagonWidth,
            50+hexagonWidth, 50+2*hexagonWidth
        ]
        const fifthRowX =[
            50-hexagonWidth/2, 50-hexagonWidth/2-hexagonWidth,
            50+hexagonWidth/2, 50+hexagonWidth/2+hexagonWidth
        ]

        const fifthVRowX =  [
            50+hexagonWidth/2, 50+3*hexagonWidth/2, 50+5*hexagonWidth/2,
            50-hexagonWidth/2, 50-3*hexagonWidth/2, 50-5*hexagonWidth/2,
        ]

        const middleRowY = 0;
        const firstRowY = 2*rowHeight;
        const secondRowY = rowHeight;
        const fourthRowY = -rowHeight;
        const fifthRowY = -2*rowHeight;
        const fifthVRowY = hexagonHeight/2;

        function* lineGenerator(last, seperator, stop){
            const next = last + seperator;
            if(next > stop){
                return
            }
            yield next;
            yield* lineGenerator(next, seperator, stop)
        }

        const verticalLineGenerator = (totalWidth) => {
            const hexagonWidth = totalWidth / 6;
            const halfWidth = hexagonWidth / 2;
            return [...lineGenerator(0, halfWidth, totalWidth)]
        }

        const horLineGenerator = (totalWidth) => {
            const hexagonWidth = totalWidth / 6;
            const rowHeight = Math.sqrt(hexagonWidth**2-(hexagonWidth**2)/4);
            const totalHeight = rowHeight * 5;
            return [...lineGenerator(0, rowHeight, totalHeight)]
        }