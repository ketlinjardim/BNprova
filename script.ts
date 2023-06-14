
    let nome: string[] = [];

    

    function handleToDo(){
        let input: HTMLInputElement | null = 
        document.querySelector('#tarefa')!;

        if(input.value !== ""){
            let lista: HTMLUListElement | null =
            document.querySelector('ul')!;


            let li: HTMLLIElement = 
            document.createElement('li');
             
            let div : HTMLDivElement =
            document.createElement('div')


            let card: HTMLElement =
            document.createElement('article');

            let texto = 
            document.createTextNode(input.value);

            li.appendChild(card);
            card.appendChild(texto);
            card.appendChild(div)

            lista.appendChild(li);


            nome.push(input.value)


        }
        
        input.value = "";
        console.log(nome);
    }

    function editToDo(){
        for (let i = 0; i <= nome.length; i ++) {
            
            console.log(nome[i])
            
        } 

       
    }
    