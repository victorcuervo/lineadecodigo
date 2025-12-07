---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIIR5PBG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T135436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHCDCbD4m6i4LTvfhzzNLqvr4jJCHe9x3brFXwBnhFzAIhAPzLv9YPDfROFBld8m8tikeISouLgZW%2BpcMcCeH2XpyhKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4LrPEVmXsc9xW%2F2Eq3ANPdceJFEHRzau7ZxN4itCgLhBMljEePtGUwXKR8Pq%2Be%2FcrIUwk%2BdlNAVdXLu%2BpAMLuV%2FPBb9NaBJCksDAiWONRisDEj%2BhnKvZYkQZQRXJ7Ijc0O5oUMgopOTpV3yt0aLMJLbUioQuWUFLt20JvcwcrOkQalpB004Znq7ZWiVpwfWJpn2Zm6QOyxPXUY9EhMU0Qefsj1W3hs7Dt5PPR21y2HuWqI%2FWK12iQm94AX%2BiNEhwqEE5AZpv%2B384e8TRb0pv9Wq6RSXaqr18K3JRbIYu5KHEeLv3peteQjLFVVi39sXGsR5LI8xDObYL0b1R%2BP0FUr%2FjsIAPiJyCs4Y2AWF7%2Fabm1bRXHK1DD6QVM7wPlz2yQZ7oGXjVO8IJuASzd1u85G26DN4OyGb5%2FdeCAxurhJVGxnjnPAHSY5cTn8d4n1VRiY6pwgp2gpNUEwz5bDlr%2B%2B4U%2FwOCESdJg6vkkvb%2BRM4Nv3vZkElAA4ZOoKXP6%2BFWhJZc9IyGookgdJabY5kZPV1IwZGdOGBMy1iY%2BL74oOaUqylcLu0RjKQQQBaWn9nIIZbv0In3x%2FRDdb%2FFl0mtTBA4aI7UDHB48EPXwJHScK0M%2Bxag6jmmsWSvPhSnOZ6mwqHXyf2I%2Fp1EhTjC9mtXJBjqkAehyGm8eQuqIgv3u9L9vms3cj9aZlYFSDCH2jukGPiNu4BrKw%2BUpPAdNy9NEWBDbc4VxCkPQHhhaQ6J1uY5EzkJJkRS%2F1LESQzplM6reUMSxiSKbJURLzGccsmpg8zjUeBRC321RvN03W1GYlTsB9F9c0COJ7xX0NrAkO0dqJo1KOx7RLHOPcr5Neq5jvM9ldphMF%2BIEc6c7QufuEFzfgMCFEExh&X-Amz-Signature=6c601dc34a33765fd40b3b2d9f73f3e703a0f4f48312046e5807017d5a0912a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIIR5PBG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T135436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHCDCbD4m6i4LTvfhzzNLqvr4jJCHe9x3brFXwBnhFzAIhAPzLv9YPDfROFBld8m8tikeISouLgZW%2BpcMcCeH2XpyhKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4LrPEVmXsc9xW%2F2Eq3ANPdceJFEHRzau7ZxN4itCgLhBMljEePtGUwXKR8Pq%2Be%2FcrIUwk%2BdlNAVdXLu%2BpAMLuV%2FPBb9NaBJCksDAiWONRisDEj%2BhnKvZYkQZQRXJ7Ijc0O5oUMgopOTpV3yt0aLMJLbUioQuWUFLt20JvcwcrOkQalpB004Znq7ZWiVpwfWJpn2Zm6QOyxPXUY9EhMU0Qefsj1W3hs7Dt5PPR21y2HuWqI%2FWK12iQm94AX%2BiNEhwqEE5AZpv%2B384e8TRb0pv9Wq6RSXaqr18K3JRbIYu5KHEeLv3peteQjLFVVi39sXGsR5LI8xDObYL0b1R%2BP0FUr%2FjsIAPiJyCs4Y2AWF7%2Fabm1bRXHK1DD6QVM7wPlz2yQZ7oGXjVO8IJuASzd1u85G26DN4OyGb5%2FdeCAxurhJVGxnjnPAHSY5cTn8d4n1VRiY6pwgp2gpNUEwz5bDlr%2B%2B4U%2FwOCESdJg6vkkvb%2BRM4Nv3vZkElAA4ZOoKXP6%2BFWhJZc9IyGookgdJabY5kZPV1IwZGdOGBMy1iY%2BL74oOaUqylcLu0RjKQQQBaWn9nIIZbv0In3x%2FRDdb%2FFl0mtTBA4aI7UDHB48EPXwJHScK0M%2Bxag6jmmsWSvPhSnOZ6mwqHXyf2I%2Fp1EhTjC9mtXJBjqkAehyGm8eQuqIgv3u9L9vms3cj9aZlYFSDCH2jukGPiNu4BrKw%2BUpPAdNy9NEWBDbc4VxCkPQHhhaQ6J1uY5EzkJJkRS%2F1LESQzplM6reUMSxiSKbJURLzGccsmpg8zjUeBRC321RvN03W1GYlTsB9F9c0COJ7xX0NrAkO0dqJo1KOx7RLHOPcr5Neq5jvM9ldphMF%2BIEc6c7QufuEFzfgMCFEExh&X-Amz-Signature=d405a6ecfdbb063ba4bd1da021a05f5b3d8a4ee77a7ae8166b787a41f577895f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

