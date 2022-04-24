function main() {
    // Expected output is "1397"
    let input = "LLLLLLLLLLLLLLLLLLLLUUUUUUUARRRRRRRRRRRADDDDDDDDDALLLLLLLA";
    let activate = 5;
    let position = 4;
    let test = []

    for (let i = 0; i < input.length; i++) {
        let direction = input[i];
        // [1,2,3,
        //  4,5,6,
        //  7,8,9]

        let newPosition = position
        switch (direction) {
            case "L": {
                const rowBefore = getRow(newPosition)
                newPosition-= 1;
                const rowAfter = getRow(newPosition)
                if (rowBefore != rowAfter)
                    newPosition += 1
                break;
            } case "R": {
                const rowBefore = getRow(newPosition)
                newPosition+= 1
                const rowAfter = getRow(newPosition)
                if (rowBefore != rowAfter)
                    newPosition -= 1
                break;
            } case "U":
                newPosition-= 3
                break;
            case "D":
                newPosition+= 3
                break;
            case "A":
                activate = position + 1;
                test.push(activate);
                break;
            default:
                break;
        }

        if (!IsOutOfBounds(newPosition))
            position = newPosition
    }

    console.log(test);
}

function getRow(position) {
    return Math.floor(position / 3)
}

function IsOutOfBounds(newPosition) {
    //return newPosition > 9 || newPosition < 1


    if (newPosition > 8) {
        return true
    }

    else if (newPosition < 0) {
        return true
    }

    return false
}

main();