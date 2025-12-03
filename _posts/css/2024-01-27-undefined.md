---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YPD75RC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T114302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIAXkwXAmSHQ9J7Zch48wDMU8wJQi2WWtnY%2B2tP7oBukRAiB9YgJhSkcI5F4wpN8mQ4dS%2Bj3vaBmiC63DVaNvcXCulir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMYBGHd9fAvA1hVRlAKtwDtZWMcYlPMqncZJ6U8ZhuHYkIEvPypnHYRiBkpX2rSkV8ScJxXeCDagfQcjZfSMkAEjD%2B7%2FlXe5TC%2Bi0c9YRqq1ib9i7u1BsEX7FKck4aDQAddo7zmvDkkMHGCPYG3oz%2BCsXJL8xCw4nrifjesdFglebVwUk1LrmZrIDGzQDrTPCyTBNOojM%2FAM4xctHb1TlxFRXrNVGTuw9jftQyb0tA1Ur9jqTY42B%2BgbjIfM4nlWGKt8bk6ryhaERpl9ZkMdg18dF%2FaYmVKQLdXe18%2BkixBaRM09K0Gu%2FsQXwWeBWWfT%2F0ZQee0dAzL4%2FuUuyvwbkCFrnSQdc07NUxpy7NnBJDTlEjtV78nQKPdS8OsucfG0iNRlxkp5xBoveLWI3Bhzc%2BX0VuGbxYGNWoFqxaSRonWy6Um%2BoCfO%2FMigrG%2B16ZftmGfY%2FjOcib%2BnoTIVMdLk37lHEiPleXBVqY827TPZrrlFbVoOhm2bcuGYAuRFo0J2YP6oJL7iAinKIVQg8WL0aGX%2FRt98PN9Ra9ojKpQ4tfiSD0onEZ0crG6o%2BiajRpTY9IL7dsvqeI6ToS5JJkFTlYIWX7H9ByzMHuhdCEgl4zXmM%2BsAoNC6CIflr5nTuqL1SQcHpeZLIx3aRB%2Fg4wq67AyQY6pgFknaW47ZaXKZMvMzYMNFMYfa9x9JKOP0riI34xS0yHCpG5G1awQhGPuFRwXVvulRuIs5%2BgFqxnaoL5A51yx%2FWgshe3H5c9aJXUp3UqIWy1sZfNcbWeKaDXUP%2Br6FLcqBy1UKVHrfj0FHyu2W5LmJsYXL7mYpShGPW6vQyB%2B2FjvN5YBnbNZajSGSyqsNiKUz761g%2BkAGIQybrCgVCm%2BaAVNl8kVaY2&X-Amz-Signature=c6d6bc850f3e572603b7cedd88bccec9ad2e36bdd5d81498088e8fee65cb618d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YPD75RC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T114302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIAXkwXAmSHQ9J7Zch48wDMU8wJQi2WWtnY%2B2tP7oBukRAiB9YgJhSkcI5F4wpN8mQ4dS%2Bj3vaBmiC63DVaNvcXCulir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMYBGHd9fAvA1hVRlAKtwDtZWMcYlPMqncZJ6U8ZhuHYkIEvPypnHYRiBkpX2rSkV8ScJxXeCDagfQcjZfSMkAEjD%2B7%2FlXe5TC%2Bi0c9YRqq1ib9i7u1BsEX7FKck4aDQAddo7zmvDkkMHGCPYG3oz%2BCsXJL8xCw4nrifjesdFglebVwUk1LrmZrIDGzQDrTPCyTBNOojM%2FAM4xctHb1TlxFRXrNVGTuw9jftQyb0tA1Ur9jqTY42B%2BgbjIfM4nlWGKt8bk6ryhaERpl9ZkMdg18dF%2FaYmVKQLdXe18%2BkixBaRM09K0Gu%2FsQXwWeBWWfT%2F0ZQee0dAzL4%2FuUuyvwbkCFrnSQdc07NUxpy7NnBJDTlEjtV78nQKPdS8OsucfG0iNRlxkp5xBoveLWI3Bhzc%2BX0VuGbxYGNWoFqxaSRonWy6Um%2BoCfO%2FMigrG%2B16ZftmGfY%2FjOcib%2BnoTIVMdLk37lHEiPleXBVqY827TPZrrlFbVoOhm2bcuGYAuRFo0J2YP6oJL7iAinKIVQg8WL0aGX%2FRt98PN9Ra9ojKpQ4tfiSD0onEZ0crG6o%2BiajRpTY9IL7dsvqeI6ToS5JJkFTlYIWX7H9ByzMHuhdCEgl4zXmM%2BsAoNC6CIflr5nTuqL1SQcHpeZLIx3aRB%2Fg4wq67AyQY6pgFknaW47ZaXKZMvMzYMNFMYfa9x9JKOP0riI34xS0yHCpG5G1awQhGPuFRwXVvulRuIs5%2BgFqxnaoL5A51yx%2FWgshe3H5c9aJXUp3UqIWy1sZfNcbWeKaDXUP%2Br6FLcqBy1UKVHrfj0FHyu2W5LmJsYXL7mYpShGPW6vQyB%2B2FjvN5YBnbNZajSGSyqsNiKUz761g%2BkAGIQybrCgVCm%2BaAVNl8kVaY2&X-Amz-Signature=a5a5ffec1cb4391edec8b3c9d53304773b8e4b183bdd8de418974bc2c4f23163&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

