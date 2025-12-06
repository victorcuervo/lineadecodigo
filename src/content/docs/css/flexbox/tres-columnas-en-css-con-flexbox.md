---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT2IJSBW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T034110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJCpI0lByjiNabCM1BztF5KeM4%2BQaAj57MWKZquC%2B6LgIhANOjd%2B1%2BAYq6vzsUPnFtz4lX8omYNOpYEK6%2B46Flqk9lKv8DCGwQABoMNjM3NDIzMTgzODA1Igw2xQjiIzlsylH%2FWD0q3AMoSoO4aDqVpyx4sQ8%2FcbiFTj8OuqPv3Q%2FtxbrmfNYyvqdfj3fimhV4Oj66dDmqnsYvlmeGWzCzm%2Bzx7ElG0w6RsPLt1nQpVtgorhv48JEZTQghWKdJ68sxt1j0oxAkFyFFGPuFQUCsVk7d9r6pf3k6nX%2B2a9Ll1QSwqY806jnp8Heuf%2Bx284nu%2Fzch20KJtc5HvQOabjDWssIPAm%2FM%2F1eACtWTv8Q0vQ35pfG99J85jAfS8HzdnQ56M0qvIngePUY89Z%2Bhn08jkkDlmej4c7HN9OuPyIEyRO35g8vbaL6tBFzQJTH7VVdBFxPNAslcAMX8Pen4%2BNL3fEH3IQx8PpY57LTn2XfNfydmpST1XQWjH8K6EBt0Q6X72Tde1qODK%2B3Mw1IzZAnGDsZEVupGTqeACNO3GPTi1xTEN16b9QyqmYpF298Zj3bU%2F%2Bl7S5MHDunHwKb%2FXk%2F3%2Bor4tHJCMQgQBIuK9W%2BdN4LW6ocP8dxnOSoRH5mm%2F2dpJsglzopATXkEutxxNBFXMT%2FuDT5blRlwrgzhVmeu%2BbaZC6UF7IoMiA2Id1ujg2nqnH4bOKknUG0exZJl5OKwo1fCTkDEa1V5qiyPEFWGk16d8gwWrX47DcJ827C%2BJqeBUXXRzDCVw87JBjqkAbYIfAMmgLdcHPN%2Bcg0UxY6iqdWq6webyxW2oNjZmuRaHpiia3f1%2BaURUdazjOAk%2Facc0gYJcBLIgeei7p5JsB9efN8Dpk30MawBYyBS42y0bX0qwTOJhJNa1n9HR5UbbJR%2BfXu9yzSWSfKNFasr7QYbh5pLZU1hmFbWafVy8eM7fsDjUA0wJyTqJFHiiD%2Fcd8E3IbGGgShnx35jPxbCBoC4nXWL&X-Amz-Signature=94ee224452673fec3cb89c10be1faf2ac7c8a0cd7e6a36a5f31bacc4cee9ecea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT2IJSBW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T034110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJCpI0lByjiNabCM1BztF5KeM4%2BQaAj57MWKZquC%2B6LgIhANOjd%2B1%2BAYq6vzsUPnFtz4lX8omYNOpYEK6%2B46Flqk9lKv8DCGwQABoMNjM3NDIzMTgzODA1Igw2xQjiIzlsylH%2FWD0q3AMoSoO4aDqVpyx4sQ8%2FcbiFTj8OuqPv3Q%2FtxbrmfNYyvqdfj3fimhV4Oj66dDmqnsYvlmeGWzCzm%2Bzx7ElG0w6RsPLt1nQpVtgorhv48JEZTQghWKdJ68sxt1j0oxAkFyFFGPuFQUCsVk7d9r6pf3k6nX%2B2a9Ll1QSwqY806jnp8Heuf%2Bx284nu%2Fzch20KJtc5HvQOabjDWssIPAm%2FM%2F1eACtWTv8Q0vQ35pfG99J85jAfS8HzdnQ56M0qvIngePUY89Z%2Bhn08jkkDlmej4c7HN9OuPyIEyRO35g8vbaL6tBFzQJTH7VVdBFxPNAslcAMX8Pen4%2BNL3fEH3IQx8PpY57LTn2XfNfydmpST1XQWjH8K6EBt0Q6X72Tde1qODK%2B3Mw1IzZAnGDsZEVupGTqeACNO3GPTi1xTEN16b9QyqmYpF298Zj3bU%2F%2Bl7S5MHDunHwKb%2FXk%2F3%2Bor4tHJCMQgQBIuK9W%2BdN4LW6ocP8dxnOSoRH5mm%2F2dpJsglzopATXkEutxxNBFXMT%2FuDT5blRlwrgzhVmeu%2BbaZC6UF7IoMiA2Id1ujg2nqnH4bOKknUG0exZJl5OKwo1fCTkDEa1V5qiyPEFWGk16d8gwWrX47DcJ827C%2BJqeBUXXRzDCVw87JBjqkAbYIfAMmgLdcHPN%2Bcg0UxY6iqdWq6webyxW2oNjZmuRaHpiia3f1%2BaURUdazjOAk%2Facc0gYJcBLIgeei7p5JsB9efN8Dpk30MawBYyBS42y0bX0qwTOJhJNa1n9HR5UbbJR%2BfXu9yzSWSfKNFasr7QYbh5pLZU1hmFbWafVy8eM7fsDjUA0wJyTqJFHiiD%2Fcd8E3IbGGgShnx35jPxbCBoC4nXWL&X-Amz-Signature=5e45d462874e5bb3170b7b8669e0ab9359adad6a7d80d4ce8b71128e0172cbce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

