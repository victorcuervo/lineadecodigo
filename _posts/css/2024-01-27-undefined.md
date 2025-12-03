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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSJ2EO65%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T024356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCTr0BOFxS%2FXy0GOjW2TAgswU0RvAuAgRsozWZdoxMX%2BAIhANZqt8GPabt2RH3LfO4Eh2zoMnifxE7zSZ%2FHuXce7X0UKv8DCCIQABoMNjM3NDIzMTgzODA1Igx5j6sk773ADCScuO4q3AOiKMvHsW3wTe09GM6t0CF%2BUH3k7PHUF30oO8a6q8M%2FLoLjdH7orBsfUz9fFIDzM2JlKCMlmXLCN0ciUtyGHgQTscr5liC0eZ9193c6mCrW0vhIClSpWhpARmIUr8DpEWEMfzqFhT8O%2FhXHUhw%2FaUatKZez2Zl4adZLCNAbXJ3808u37aAdXi1DXJlYwu0dLZ%2FGSw1eLAACRJz8JH%2FqSQvAS1sNvi2NNfZdDROPYYinQM1a0IOzkbyV7ZmmpWgQtowS4BpDm1FwwpxmLIk%2FGi0gcw83fQrO3lVPtddpXljgJVfWcHzG9QiBUISamVG4DU3RvZwMsu73v4o6NDtBfaz2lbTZe%2FqIlH9Axh3PSt20WQY23X078pPAWjBWS5UdNWaoj9nKYMB6zZMAWEcPbVxI316nzYpQy7zH3OoQUuaVfjkKdxw9DUvWsQt5yoD5DUmuhy96a2%2FX9lnepxxMdOXWOBL83QevctFFLVwC4UM8fFeg%2BZBrBvuQdeCq3lYWqsneXijaUN0wzSSAIcg61S%2F118lAh5v61GdqTMLNrSwGvm7Cgs%2FuLQQineqN4c1iMxrbB7GdPqj86kOyYDRcXEwG6zD%2FslZ9kQ%2BOBSYaASJPt1tv2P2vOSRTqDwVqzCvlr7JBjqkAV19uqLelH78fQc%2F%2BM47IIYi%2FtA%2Bwev3fh2DwQk6tUUQTt%2B%2BqoUVCwVB%2FAMt6uuB0KrfNAznoTAeqn3Ea9mQ0rrAadKf6gUFqNUFBGujnx93gfTAOky4YpqQ7snF0tgvQh2sd2b09CFreWWvHUSk%2FW%2BqnPSNsakzg%2FSZ0TjbAjcEn9n72iTXpH32wuqZloeXkqIVKeIN0FC%2FKLEJ3dFVp2BUBFMg&X-Amz-Signature=d0bdbb210f47373b4d29ecefa7231865376aac3dbb16736f49bda0b96b004971&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSJ2EO65%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T024356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCTr0BOFxS%2FXy0GOjW2TAgswU0RvAuAgRsozWZdoxMX%2BAIhANZqt8GPabt2RH3LfO4Eh2zoMnifxE7zSZ%2FHuXce7X0UKv8DCCIQABoMNjM3NDIzMTgzODA1Igx5j6sk773ADCScuO4q3AOiKMvHsW3wTe09GM6t0CF%2BUH3k7PHUF30oO8a6q8M%2FLoLjdH7orBsfUz9fFIDzM2JlKCMlmXLCN0ciUtyGHgQTscr5liC0eZ9193c6mCrW0vhIClSpWhpARmIUr8DpEWEMfzqFhT8O%2FhXHUhw%2FaUatKZez2Zl4adZLCNAbXJ3808u37aAdXi1DXJlYwu0dLZ%2FGSw1eLAACRJz8JH%2FqSQvAS1sNvi2NNfZdDROPYYinQM1a0IOzkbyV7ZmmpWgQtowS4BpDm1FwwpxmLIk%2FGi0gcw83fQrO3lVPtddpXljgJVfWcHzG9QiBUISamVG4DU3RvZwMsu73v4o6NDtBfaz2lbTZe%2FqIlH9Axh3PSt20WQY23X078pPAWjBWS5UdNWaoj9nKYMB6zZMAWEcPbVxI316nzYpQy7zH3OoQUuaVfjkKdxw9DUvWsQt5yoD5DUmuhy96a2%2FX9lnepxxMdOXWOBL83QevctFFLVwC4UM8fFeg%2BZBrBvuQdeCq3lYWqsneXijaUN0wzSSAIcg61S%2F118lAh5v61GdqTMLNrSwGvm7Cgs%2FuLQQineqN4c1iMxrbB7GdPqj86kOyYDRcXEwG6zD%2FslZ9kQ%2BOBSYaASJPt1tv2P2vOSRTqDwVqzCvlr7JBjqkAV19uqLelH78fQc%2F%2BM47IIYi%2FtA%2Bwev3fh2DwQk6tUUQTt%2B%2BqoUVCwVB%2FAMt6uuB0KrfNAznoTAeqn3Ea9mQ0rrAadKf6gUFqNUFBGujnx93gfTAOky4YpqQ7snF0tgvQh2sd2b09CFreWWvHUSk%2FW%2BqnPSNsakzg%2FSZ0TjbAjcEn9n72iTXpH32wuqZloeXkqIVKeIN0FC%2FKLEJ3dFVp2BUBFMg&X-Amz-Signature=2189e568aca9baef3d8c5dc9fffb763c375a55189f46173c0be5dd502ff8c9e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

