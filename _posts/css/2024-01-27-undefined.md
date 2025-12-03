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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ML3HD7M%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T112157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCxGNiMbj26F5Jpy9Gd%2FQRfd1JySNCijPjWof223wLQHQIgPTEHjM7dXjwI9MCLWYxPc0U9ztYdFwpda8JTLi8hFJ8q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDHERBMsKxyAQ5b3I0SrcA7%2FOWUcm3rF1xIqs1iCYGowkWDKrSFWHyv1FP6VTEiCRqNn1suuUjTMbGAe4cu7IEXOb71EIbL4NiXNqE7%2FZzK0XgD%2B1mgJMFNgFMJnoA897%2Bw0W2Y0bmkRtt26lAQ4tOxOzRzRU2Hre5%2BLZArmvLZL1vZt%2Boadcv07nikWUCKpYQSgd%2Bvy8jxs2CXVcWWDkmHjDAUAqvWMkMVsAS%2BZxyPqUESalJfDfHGxCE%2BdBLJm0Kj72dVuB2i5ok5PaMoJm3qQ4fNzECIzn5q2Qv6H1lUQma20rsmdlQgey8FYTh6b4v6qBCl9FQnvXAR%2F3ckbbpbGdRtBkZAu5IGTwNO1S%2FMyaaTRiQLnwdAjrFlfy%2BaK%2BOU%2F04ySfWziBuTVO2GEKoHcWe9VtCqDV7iHUCz380rHkffculOqHCLujRcU8RQfvc8tPQoz%2Bxdvf8wY5YD6ZEi0g%2B%2Bk5Tar3DkYdpgUV1ghFHTVOsxeu%2B%2FfDW5ZJ%2Froj2OgIpcIKs8rfNQK%2FSU2rmcm%2BL4EuZ6%2FIohCLfyhDs%2F7pFIdbsw%2Fb2DoPrcCRVO%2Bmm3kICqAAD13SBqrDtvuj6GBeaiX58SI5v2%2FqysIafR%2BCxLAL6maD9Sj3oiQ8gOvoDOYkZ3nFf0GmjL%2B2MPatwMkGOqUBzFLDvsZurqvI3AytSZSkzpo2gYMUj8pAxhLVzg%2BPFH69SB5Wt0r0ak7964huyPxwKWjFF83rsYovL8jkxRjrDuB4CTJWjKMKAjEzvHTO1Zx81z8aUrgmzbMX6UNIWuvTo7gaI9Zsvu0iAzQCT2LGQRGvr8zsRhbHMJD1%2F9ulPk6NSVumGL5WBD%2Fnh1j7tW%2B6q39AvFwBAg3U%2FrSkeb6vMMNDWohu&X-Amz-Signature=029b4f3f3d27fa26874ed893540b45d5e2ab8bf653dee99c056b48340d9adeb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ML3HD7M%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T112157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCxGNiMbj26F5Jpy9Gd%2FQRfd1JySNCijPjWof223wLQHQIgPTEHjM7dXjwI9MCLWYxPc0U9ztYdFwpda8JTLi8hFJ8q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDHERBMsKxyAQ5b3I0SrcA7%2FOWUcm3rF1xIqs1iCYGowkWDKrSFWHyv1FP6VTEiCRqNn1suuUjTMbGAe4cu7IEXOb71EIbL4NiXNqE7%2FZzK0XgD%2B1mgJMFNgFMJnoA897%2Bw0W2Y0bmkRtt26lAQ4tOxOzRzRU2Hre5%2BLZArmvLZL1vZt%2Boadcv07nikWUCKpYQSgd%2Bvy8jxs2CXVcWWDkmHjDAUAqvWMkMVsAS%2BZxyPqUESalJfDfHGxCE%2BdBLJm0Kj72dVuB2i5ok5PaMoJm3qQ4fNzECIzn5q2Qv6H1lUQma20rsmdlQgey8FYTh6b4v6qBCl9FQnvXAR%2F3ckbbpbGdRtBkZAu5IGTwNO1S%2FMyaaTRiQLnwdAjrFlfy%2BaK%2BOU%2F04ySfWziBuTVO2GEKoHcWe9VtCqDV7iHUCz380rHkffculOqHCLujRcU8RQfvc8tPQoz%2Bxdvf8wY5YD6ZEi0g%2B%2Bk5Tar3DkYdpgUV1ghFHTVOsxeu%2B%2FfDW5ZJ%2Froj2OgIpcIKs8rfNQK%2FSU2rmcm%2BL4EuZ6%2FIohCLfyhDs%2F7pFIdbsw%2Fb2DoPrcCRVO%2Bmm3kICqAAD13SBqrDtvuj6GBeaiX58SI5v2%2FqysIafR%2BCxLAL6maD9Sj3oiQ8gOvoDOYkZ3nFf0GmjL%2B2MPatwMkGOqUBzFLDvsZurqvI3AytSZSkzpo2gYMUj8pAxhLVzg%2BPFH69SB5Wt0r0ak7964huyPxwKWjFF83rsYovL8jkxRjrDuB4CTJWjKMKAjEzvHTO1Zx81z8aUrgmzbMX6UNIWuvTo7gaI9Zsvu0iAzQCT2LGQRGvr8zsRhbHMJD1%2F9ulPk6NSVumGL5WBD%2Fnh1j7tW%2B6q39AvFwBAg3U%2FrSkeb6vMMNDWohu&X-Amz-Signature=5542c4a91f17681515187b3cb367df6c2648e8f792c5ae7f3b15bc5b605f1845&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

