---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q5JV3XF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T000518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYmu9Pacv%2Fd5qhFIaUipc54t6R7Ff9xVKZIZt6%2FfgOPwIhAM7QTcak57Xh4IZNIG4f8Cx2tKefNsAz9hMcpU8W1CqOKv8DCE8QABoMNjM3NDIzMTgzODA1IgzJX5ZTSSycpBityfcq3AMi3K0nPBQearbG7gIyxUpjJQWi%2BKkQx76Ajtd6UpBpmHZqeADnk79WVq2xBJpnd1hnsLqpLI9SKofu420Ohb4O7Z%2Fo5ynnat2RL9vJpyEbEZAROtd9P4%2BO4xQUDh03%2B2KrH1TKi3oawuDUpB82wonUq2Dtb0248rODMT15Ot7j1exRK97t6XTPTqhSIGr9XRWQC1nVF4NeP4B2S6mgAfSGafiegQKqtCuTh7tHXyJbP8PjVqAz64NWL26aNdnmKLVa5oeDViI5AWM6wYMgC%2BWkTasdqTM8NUdcUfT0KjTvR4ojQbRLVJx0OSD7mWAOQor4A%2BWMirgScebDtTQULLr8b49Jo6thMmc3tO4dO5g6nR5rCYEK4QalmUf1K3qwTO33icwZ5BG6nb3HnExjI0o%2BZ912leWu87K61t5W0kOmh27wAwm1X1UKkjqCiZNkxcVMYgaiacPOm%2Bo5nnF8xAzmSYm%2BsScElYSSGywA3dHw84%2F7btPsOFXDcFpjGbxiloVXFSAE0AZnYkMa8YJgKR5Y1p2YxEh%2BjtEtDsJQYxS0P6iVqurDHqlOwa0HHCDlG0HypxcH3ayEvRNJZ%2FIs6Xc41xFQY7bWG1R1saeLRfgGoWtK1Eg6BMQFSxIxozDtjMjJBjqkAYghh580BnBoiR1WG9Y3r61aiQHE%2BEhtli2XuXm4Tw%2F63ac29nYHi5oSP6w0nqjFataR1sAjnQDvzvedIDevw4IUFMCQVYMvovw%2FxVoPsU1d3xyiBwLK72fskVmfcIh1ek0KoUrsjiHJ0GaTuem8801I6MZ%2B9v%2Bkpip%2FJrBRg1pQkl2JQdu7c9DwvPR10u%2F4dtaPIurgAG76w7wz66q7dtKO3TzP&X-Amz-Signature=5fbd2fc1cfff33118639fd9e2eaf20cc40fb5502025eddfd829b9b91a45fdc88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q5JV3XF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T000518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYmu9Pacv%2Fd5qhFIaUipc54t6R7Ff9xVKZIZt6%2FfgOPwIhAM7QTcak57Xh4IZNIG4f8Cx2tKefNsAz9hMcpU8W1CqOKv8DCE8QABoMNjM3NDIzMTgzODA1IgzJX5ZTSSycpBityfcq3AMi3K0nPBQearbG7gIyxUpjJQWi%2BKkQx76Ajtd6UpBpmHZqeADnk79WVq2xBJpnd1hnsLqpLI9SKofu420Ohb4O7Z%2Fo5ynnat2RL9vJpyEbEZAROtd9P4%2BO4xQUDh03%2B2KrH1TKi3oawuDUpB82wonUq2Dtb0248rODMT15Ot7j1exRK97t6XTPTqhSIGr9XRWQC1nVF4NeP4B2S6mgAfSGafiegQKqtCuTh7tHXyJbP8PjVqAz64NWL26aNdnmKLVa5oeDViI5AWM6wYMgC%2BWkTasdqTM8NUdcUfT0KjTvR4ojQbRLVJx0OSD7mWAOQor4A%2BWMirgScebDtTQULLr8b49Jo6thMmc3tO4dO5g6nR5rCYEK4QalmUf1K3qwTO33icwZ5BG6nb3HnExjI0o%2BZ912leWu87K61t5W0kOmh27wAwm1X1UKkjqCiZNkxcVMYgaiacPOm%2Bo5nnF8xAzmSYm%2BsScElYSSGywA3dHw84%2F7btPsOFXDcFpjGbxiloVXFSAE0AZnYkMa8YJgKR5Y1p2YxEh%2BjtEtDsJQYxS0P6iVqurDHqlOwa0HHCDlG0HypxcH3ayEvRNJZ%2FIs6Xc41xFQY7bWG1R1saeLRfgGoWtK1Eg6BMQFSxIxozDtjMjJBjqkAYghh580BnBoiR1WG9Y3r61aiQHE%2BEhtli2XuXm4Tw%2F63ac29nYHi5oSP6w0nqjFataR1sAjnQDvzvedIDevw4IUFMCQVYMvovw%2FxVoPsU1d3xyiBwLK72fskVmfcIh1ek0KoUrsjiHJ0GaTuem8801I6MZ%2B9v%2Bkpip%2FJrBRg1pQkl2JQdu7c9DwvPR10u%2F4dtaPIurgAG76w7wz66q7dtKO3TzP&X-Amz-Signature=3a50d22d530828df85e010919b09f5efe4e4a2aa0599fb0ba810ee6c79de43c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

