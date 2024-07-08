//if you try to run it on node. It will give an error of 'document not defined'.
//DOM Manipulation
    //GetElementById()
        //DOM=document
        const heading=document.getElementById('main-heading');
        console.log(heading);

    //GetElementByClassName()
        const list=document.getElementsByClassName('list-items');
        //returns array like object.
        console.log(list);
    //getElementsByTagName()
        //returns array like object.
        const listItm=document.getElementsByTagName('li');
        console.log(listItm);
    //querySelector()
        //can select any item (class, id, tag). It returns the first element of the input given.
        const container=document.querySelector('div');
        console.log(container);
    //querySelectorAll()
        //returns a nodeList.
        const containers=document.querySelectorAll('div');
        console.log(containers);

//Manipulation
    //Styling Elements
        //we use camelCase for this.
        heading.style.color='red'; //inline styling
        // listItm.style.color='red'; //does not work because it only works on one item not a collection of Items.
        //for collection we have to loop through the items first.
        for(i=0;i<list.length;i++){
            console.log(list[i]);
            list[i].style.color='Blue';
        }
        //you must resolve one error to move to the next step.
    
    //Creating Elements
        const ul=document.querySelector('ul');
        const li=document.createElement('li');
        //Modifying Texts
        li.innerHTML = '<span>Neo</span>'; // This sets the inner HTML of `li` to include a <span> element containing 'Neo'.
        li.innerText = 'J&J'; // This overrides the previous content and sets the text content to 'J&J'. HTML tags are treated as plain text.
        li.textContent = 'J&J3'; // This further overrides the content and sets the text content to 'J&J3'. HTML tags are treated as plain text.
        console.log(li.innerHTML); // This logs 'J&amp;J3' because setting `innerText` or `textContent` with special characters automatically escapes them.
        console.log(li.innerText); // This logs 'J&J3' because `innerText` and `textContent` were last set to 'J&J3'.
        console.log(li.textContent); // This logs 'J&J3' for the same reason as above.

        //Adding Element
        li.innerText='X-man'
        ul.append(li);

        //Modifying Attributes and Classes
        li.setAttribute('id','main-heading'); //we can also add classes using this
        li.removeAttribute('id');
        console.log(heading.getAttribute('id'));

        li.classList.add('list-items');
        li.classList.remove('list-items');
        console.log(li.classList.contains('list-items'));

        //Remove Element
        li.remove();

//DOM Navigation
    //Parent Node Traversal
        console.log(ul.parentNode.parentNode);
        console.log(ul.parentElement.parentElement) //Elements are on top of Node

        const html=document.documentElement;
        console.log(html);
        console.log(html.parentNode); //Node. In this case parent node is Element.
        console.log(html.parentElement); //There is no parent element to html
    //Child node traversal
        console.log(ul.childNodes);//children nodes of first only.
        console.log(ul.childElementCount);//count of children of first only.
        //Indentations are counted as text nodes but not elements
        console.log(ul.firstChild);
        console.log(ul.lastChild);
        //chnaging styles using nodes and elements
        ul.childNodes[1].style.backgroundColor='green';
        ul.lastElementChild.style.backgroundColor='red';
    //Sibling Node Traversal
        //even space or comment would be a sibling node
        console.log(ul.previousSibling);
        console.log(ul.nextSibling);
        console.log(ul.previousElementSibling);
        console.log(ul.nextElementSibling);
    

