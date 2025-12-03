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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHEF3PGW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T180024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDAkB0L3%2F0JBEZVNKSD%2FpmaEM9sdTa2JZ%2Fgb%2F5gkOMI4AIhAKQNWN4YubrJI6v6xmuc7CcmtSrdLzdsJgqRsC7IDnsIKv8DCDIQABoMNjM3NDIzMTgzODA1IgxxeHnaCDl5EhFnb2Yq3AODTFburJ74%2FC1AgbS2u13oVtos4eB5kcV3BG1HlUQ5WA3ABmzLbON3ST5qAY%2BJ2aEO%2BVjmDEzcgR6wHtJrNTbt4lZ8SsV%2BD28kthSD%2FtZNq3Huq9ljris5pydQoY0dztDo7u7UxKCbr%2BoqmBx28qjlI1tuWDHNPDhqInZOj1i4rqNH7GNMF8W3sTdchVF7G3Xiao%2B0u%2BYgKA8rYlzvzAwy7MN%2FWAN0PXQcxgBuhAhBwTg03H4Ffx3fW2Uc24P5p0VnHBKxG559a%2B4O85TRFyfIxm9SFD0leu95MdOmsabQcGNiPndPWCOsDds7caQutIXDATZJvL9RR%2FmZXrePfGLz7uowXP8uJSDoE%2B31LcB28UhJJp%2FI1giYOdCeJxT7Xnir7TSuMAYxeNkrgtHYt56Mra7EYl9Ikf%2BxdvkHQc2jQzdE4DpxxFBLd0gtGhXO9jxW8%2BgblYf112pDUoakXTXHpi5lIBUUC4PtqXKN5kaQ2u5Zagj2DzMxIv3ONX3C5W2g4VJRVFP%2BxHgTb2rKJJWUEdw%2Bh8zW66QzC8OlLF9MFB7GSk2oIGRVUIzqR5tTnVrMe9nvyMj8aIyMajxVJm11068S66Nn0e%2BPfG9npBD2JnVFSh4OKkCM6p9n9zCV2sHJBjqkAUG3i0PuPPChHRHF8HS5fkU%2BqSpjPPoNZlr1GKXObb4Q%2BcbbGOAQrnf680ef29fP4Jd%2By%2BGkjf9cVPM110jXE9BjWttr7rZst7mUK5AnkmTKOgcdYW9nMLbDcJ%2Fx4g3Ss0cZZfBcs%2FWekm4K8573HEbtd%2Fglqpy%2FPpLMApDppwGPqf0S%2BeKvMkUOVbuntn5EasBm8N5jbB0xF03R1nfcmOYojNWR&X-Amz-Signature=8c60939fa43f8e2fc48b90497104175c311761af096f30e7c54d53963c9b95e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHEF3PGW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T180024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDAkB0L3%2F0JBEZVNKSD%2FpmaEM9sdTa2JZ%2Fgb%2F5gkOMI4AIhAKQNWN4YubrJI6v6xmuc7CcmtSrdLzdsJgqRsC7IDnsIKv8DCDIQABoMNjM3NDIzMTgzODA1IgxxeHnaCDl5EhFnb2Yq3AODTFburJ74%2FC1AgbS2u13oVtos4eB5kcV3BG1HlUQ5WA3ABmzLbON3ST5qAY%2BJ2aEO%2BVjmDEzcgR6wHtJrNTbt4lZ8SsV%2BD28kthSD%2FtZNq3Huq9ljris5pydQoY0dztDo7u7UxKCbr%2BoqmBx28qjlI1tuWDHNPDhqInZOj1i4rqNH7GNMF8W3sTdchVF7G3Xiao%2B0u%2BYgKA8rYlzvzAwy7MN%2FWAN0PXQcxgBuhAhBwTg03H4Ffx3fW2Uc24P5p0VnHBKxG559a%2B4O85TRFyfIxm9SFD0leu95MdOmsabQcGNiPndPWCOsDds7caQutIXDATZJvL9RR%2FmZXrePfGLz7uowXP8uJSDoE%2B31LcB28UhJJp%2FI1giYOdCeJxT7Xnir7TSuMAYxeNkrgtHYt56Mra7EYl9Ikf%2BxdvkHQc2jQzdE4DpxxFBLd0gtGhXO9jxW8%2BgblYf112pDUoakXTXHpi5lIBUUC4PtqXKN5kaQ2u5Zagj2DzMxIv3ONX3C5W2g4VJRVFP%2BxHgTb2rKJJWUEdw%2Bh8zW66QzC8OlLF9MFB7GSk2oIGRVUIzqR5tTnVrMe9nvyMj8aIyMajxVJm11068S66Nn0e%2BPfG9npBD2JnVFSh4OKkCM6p9n9zCV2sHJBjqkAUG3i0PuPPChHRHF8HS5fkU%2BqSpjPPoNZlr1GKXObb4Q%2BcbbGOAQrnf680ef29fP4Jd%2By%2BGkjf9cVPM110jXE9BjWttr7rZst7mUK5AnkmTKOgcdYW9nMLbDcJ%2Fx4g3Ss0cZZfBcs%2FWekm4K8573HEbtd%2Fglqpy%2FPpLMApDppwGPqf0S%2BeKvMkUOVbuntn5EasBm8N5jbB0xF03R1nfcmOYojNWR&X-Amz-Signature=0442b9fc7c3598dd1d3bbb8446ea419962b34f78225d95b40da16b1e40d3c1a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

