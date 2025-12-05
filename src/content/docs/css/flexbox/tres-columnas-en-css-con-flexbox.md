---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5TADT7M%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T214723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDVLU2H2%2B%2FhuLr8hZrJ8B85zsK5TRxMb%2FKLv%2Bk1lAV7AiAHf6PgzgyOdesSyoR%2BXX%2B5IuF1CQgWDIszMGd8ruzs7ir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMV7YbLnR2MpD%2FazkcKtwDUHLIDOlzqZ1HsFhfZNoc58EieC9iQjXDbItAIlSTyWizGKe0Ieb%2Bbny0fUTSdKx2%2BeLfI8meETDEQNCqlD0Sul5T9PVbrziP33tWFaQp%2BqNW0X6tUwy2C7x1q5vsUaPgjzCUHB2zmfQTBJsiG00oq3cWMyNDoDIhKrrSFsjPxRe3MzrcuiiR8pzwyxqyUwyNmdnJkmwTn5hzrS5H2dRqrthq%2BtqlaaCgzJf2umhfK62%2FokWfzHdVWxWaXvtu23g6XkUMUMpKFLfrGGiU1%2FgLQXEF6l%2BRrkw9bvXM2RJKBsdE%2FOBLy%2F4GHZWGT5TjHoZz5jb64Mn4VjhdjpKsBmlbX9kKxQdn5XOTfYUylrAGHzkCc1g8bIvkMt0YBdY%2BI6i7Hu0kG21qLmvBbamOIxuRVfA2zbuHnmT1x%2FtoMGHUqh9NyD%2BdOkYPD2wovMEojh4poXxqLdljNBHquREstTSSZJYYppnNNwsiJZmmi03iK8BAeH3fj9rcjPMSEuACOcjsWOvqf7bRW5N%2FeVnBd5NvqrgwNl4SMhZTQX%2FvJYFBIwJuQd0Ns3FbPR%2F8a2lnO1CyEJaK%2FJgfbAYso67WsvMZqHPiA3qxavhTLMMLBwhfgfKOed9xgCIb2%2FoKr1EwnZDNyQY6pgFxKUAeS%2B1AbOKgY%2B9sSJUrC0Ejr6hyP8ba2IoKbA99mwWl1ChRwfujW3jiIZXab7%2B12G6Y1imMg4QgKCowSRRmIWaLjX0KIs1cTMOnKPGJ7Us7ChKTWLnh4lWgBk1D6Ib25zlA44A2i7kRXSGN0zHEn%2FBLU1KFbGrQ9U9%2BDqV7iJlEeGU9XMqB34cxjSV2AzFbds3EXMT6stY2cmjaOSF25l%2BG7H3Q&X-Amz-Signature=2aa710a1603df8588de62f42e9755ee1a40082b9755a0c9783fd4193bb009a39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5TADT7M%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T214723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDVLU2H2%2B%2FhuLr8hZrJ8B85zsK5TRxMb%2FKLv%2Bk1lAV7AiAHf6PgzgyOdesSyoR%2BXX%2B5IuF1CQgWDIszMGd8ruzs7ir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMV7YbLnR2MpD%2FazkcKtwDUHLIDOlzqZ1HsFhfZNoc58EieC9iQjXDbItAIlSTyWizGKe0Ieb%2Bbny0fUTSdKx2%2BeLfI8meETDEQNCqlD0Sul5T9PVbrziP33tWFaQp%2BqNW0X6tUwy2C7x1q5vsUaPgjzCUHB2zmfQTBJsiG00oq3cWMyNDoDIhKrrSFsjPxRe3MzrcuiiR8pzwyxqyUwyNmdnJkmwTn5hzrS5H2dRqrthq%2BtqlaaCgzJf2umhfK62%2FokWfzHdVWxWaXvtu23g6XkUMUMpKFLfrGGiU1%2FgLQXEF6l%2BRrkw9bvXM2RJKBsdE%2FOBLy%2F4GHZWGT5TjHoZz5jb64Mn4VjhdjpKsBmlbX9kKxQdn5XOTfYUylrAGHzkCc1g8bIvkMt0YBdY%2BI6i7Hu0kG21qLmvBbamOIxuRVfA2zbuHnmT1x%2FtoMGHUqh9NyD%2BdOkYPD2wovMEojh4poXxqLdljNBHquREstTSSZJYYppnNNwsiJZmmi03iK8BAeH3fj9rcjPMSEuACOcjsWOvqf7bRW5N%2FeVnBd5NvqrgwNl4SMhZTQX%2FvJYFBIwJuQd0Ns3FbPR%2F8a2lnO1CyEJaK%2FJgfbAYso67WsvMZqHPiA3qxavhTLMMLBwhfgfKOed9xgCIb2%2FoKr1EwnZDNyQY6pgFxKUAeS%2B1AbOKgY%2B9sSJUrC0Ejr6hyP8ba2IoKbA99mwWl1ChRwfujW3jiIZXab7%2B12G6Y1imMg4QgKCowSRRmIWaLjX0KIs1cTMOnKPGJ7Us7ChKTWLnh4lWgBk1D6Ib25zlA44A2i7kRXSGN0zHEn%2FBLU1KFbGrQ9U9%2BDqV7iJlEeGU9XMqB34cxjSV2AzFbds3EXMT6stY2cmjaOSF25l%2BG7H3Q&X-Amz-Signature=8003e2bc4c558a3132fb76361d58cf0c761e60c0c6b3d6664f622e4e3e1e47a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

