function parseCommand(message) {
    constparts = message.trim().split("");
    const command = parts[0].toUpperCase();

    switch (command) {
        case 'LIST':
            return {
                action:'LIST',
                folderpath : parts[1] || "/",
            };

        case 'DELETE':
            return {
                action : "DELETE",
                filepath : parts[1],
            };

        case "MOVE":
            return {
                action:"MOVE",
                source:parts[1],
                destination:parts[2],
            };

        case "SUMMARY":
            return {
                action:"SUMMARY",
                folderpath:parts[1],
            };

        default:
            return {
                action:"UNKNOWN",
                message : "sorry , I didn't understand that command"
            }
    }
}


const input = "MOVE / project/repost.pdf/Archive";
const result = parseCommand(input);
console.log(result);
