let language = prompt('Enter languange(en/es/de/fr): ') 

    switch (language) {
        case 'en':
            document.write('Hello World translated in French is: Hello World')
            break;
        
        case 'es':
            document.write('Hello World translated in Spanish is: Hola Mundo')
            break;
        
        case 'de':
            document.write('Hello World translated in Deutsch is: Hallo Welt')
            break;
    
        case 'fr':
            document.write('Hello World translated in French is: Bonjour le monde')
            break;

        default:
            break;
    }
