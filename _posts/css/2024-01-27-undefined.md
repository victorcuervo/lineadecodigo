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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSZRTEUI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T041902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDyURolQ2lO2Rne1NORh0HS3aZhYcElnq%2BXFVMKZBjklAIgdB1%2Bc0F%2FfYoAQTTk5MvEBSoCrxOeIkNAt5K7t%2BN%2FYVAq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDCPtgjpPbUYrppYZYyrcA8pLLNlI0aJ9vhdRjkohx1t9leygfHZ095NGzBeZWIJ8Xz6tbUOwmjX1m8OaTtnPSlGADGnFEqfGYJYlx0CLYwn7bcyd62%2BbUcB%2Bt7FZrJE11lPCsdwDSipr%2BMk1qQ8N80lQu8FPIngYTs4BxweUOn2uNns0BeUTyTmncWw6j%2FI7cTwVL6FBXKqOY41NkYNOnvqI1JgwCL9tjIu%2FEdo1QRG8DKh6HxVLPJ%2FHtP7kb7jKMA9xUFCyLiP%2BFSxWP4MTF1%2Fa716xHEEC96xUKDOKAQqcl8xvyPyTRuWcRxtDVsbNNRvyIwo8jEG0t6d%2BXKQ5%2Frs5U1prplTf4jMreH50RkpJeC1iGAas1331nY9MyNDGVX0om7XnpS85TqNnGq%2BoejT%2F0W%2BRUhCPloATsworqw2d6c48xWuvC5wDfmHpJTnELm5uiSattpnv31EHveUQZvGS3vj5LJyKSg1Z5xVv0hVBqZGIqDenziI8W0WStdl3be1w53aOYy1UxOSVFOe6%2FIAgN790JhD9uZhVgaptMezuZPx2PKfvQHERgm6qhidkMH4T37kNh9sf0NiN0JXk7x56CnCNUiQIlGE2K6UaCizkzjgl7inGk7WTqtvaYVvKESu17iyznlf88nbxMMGWvskGOqUByEnyONemY5DIl33Q0GTF%2BB0Og1e1EsVHaax1yNUy3KAsZrhbBqjtbV7AUNH3KOu9x%2FwIRL1ZxKkgCKUGMLk0Wh3L56u7TfQvqtmEnHvDyfPVERdZZzbb55diT7I4VzVODzrEyRaRa0jAxYaStd8ijqnPwueBICN4KiYeen6bOFdqbtZXvNz7hoGTRzINeud24FgEeeni7pLlWIOlGXTCEZc0TmnX&X-Amz-Signature=5af539909bd52ffb1fda57ff1c43d97b98d450d5a9eb7ce238567e7bb06119fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSZRTEUI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T041902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDyURolQ2lO2Rne1NORh0HS3aZhYcElnq%2BXFVMKZBjklAIgdB1%2Bc0F%2FfYoAQTTk5MvEBSoCrxOeIkNAt5K7t%2BN%2FYVAq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDCPtgjpPbUYrppYZYyrcA8pLLNlI0aJ9vhdRjkohx1t9leygfHZ095NGzBeZWIJ8Xz6tbUOwmjX1m8OaTtnPSlGADGnFEqfGYJYlx0CLYwn7bcyd62%2BbUcB%2Bt7FZrJE11lPCsdwDSipr%2BMk1qQ8N80lQu8FPIngYTs4BxweUOn2uNns0BeUTyTmncWw6j%2FI7cTwVL6FBXKqOY41NkYNOnvqI1JgwCL9tjIu%2FEdo1QRG8DKh6HxVLPJ%2FHtP7kb7jKMA9xUFCyLiP%2BFSxWP4MTF1%2Fa716xHEEC96xUKDOKAQqcl8xvyPyTRuWcRxtDVsbNNRvyIwo8jEG0t6d%2BXKQ5%2Frs5U1prplTf4jMreH50RkpJeC1iGAas1331nY9MyNDGVX0om7XnpS85TqNnGq%2BoejT%2F0W%2BRUhCPloATsworqw2d6c48xWuvC5wDfmHpJTnELm5uiSattpnv31EHveUQZvGS3vj5LJyKSg1Z5xVv0hVBqZGIqDenziI8W0WStdl3be1w53aOYy1UxOSVFOe6%2FIAgN790JhD9uZhVgaptMezuZPx2PKfvQHERgm6qhidkMH4T37kNh9sf0NiN0JXk7x56CnCNUiQIlGE2K6UaCizkzjgl7inGk7WTqtvaYVvKESu17iyznlf88nbxMMGWvskGOqUByEnyONemY5DIl33Q0GTF%2BB0Og1e1EsVHaax1yNUy3KAsZrhbBqjtbV7AUNH3KOu9x%2FwIRL1ZxKkgCKUGMLk0Wh3L56u7TfQvqtmEnHvDyfPVERdZZzbb55diT7I4VzVODzrEyRaRa0jAxYaStd8ijqnPwueBICN4KiYeen6bOFdqbtZXvNz7hoGTRzINeud24FgEeeni7pLlWIOlGXTCEZc0TmnX&X-Amz-Signature=ade72fa39424ab036016f311e664c441c0938bb1ef5c335ac0a67e582ff751e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

