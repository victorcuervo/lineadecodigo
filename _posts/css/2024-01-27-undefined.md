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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TA73MPD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T105151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIDzEZqrAd8jeMQoUEc%2F%2BhkAunZPz%2Fvr60rwwZSIkcPxwAiEA1%2FEcQMfmere15Tj8pj7kYOYsb4CKyOX5zT7%2B5LgkrQoq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDGFGPa5d%2BL9eQMcj%2FircA8Dzk3zcs7rj7aY6A8%2F9OJOR0ozzUKoTP97URaWUxi1Bbv4FRvapwgnKSMLoxtRVIqGrcAQoUUWswxvnaFe6KgfJlR4P1hhrOsJ4BaxJ00VgsyEcgUywgw2a%2BBIffM3VAuEkpzyI7jDCD4hYrHGxlM789%2B2lmZXlFn7wG%2FcZZ8S%2FGRmEQjmC4NgGwXNJa9f6TrG36d4gT6m75HbbmhGwOvzIGybIXhZOTlI5m1hfUjm6hri%2FYagVQ4jPpTmkZxdHnVcCWZh7fYq%2FBXJ5jukjkYlhh8Z2xSmkgRCmasuUp%2Bsmjop7800t2No%2FxdB2jjViSk6OYlm0pkuQy0Z5LrRMZyV%2Brhcw0C6BnGF4m1tEN4jzguF6NMSmmx3SNzXmhR97cXrZnczIckLiu1vWpE9kigIb2%2FhCR6f3alg5nYOmeL3IN9mg3goT9fOtIglVn%2Fwqopb9awz%2FdPM2uPSGRB%2FJded4zj1pPpYNVe8xPlzVqrSQ6hE9Pqm%2FI7fjJjDpo8%2BsqlAEzFdHz0IOeDg3zcyfeGSFELh%2BDnpb4UvMV4sku7h%2FKVXjkjotgtWJx4gzOinAPWcDGKYPvyLXxP2AYFKlIith7%2FKE3b0eh%2FCWUbqYVLb8NtaHaqtBioq6svw5MLOSwMkGOqUBxKVfQpsVfhHlm4GvHYlh390%2FX5TaBlgrJqDHfKa6GLqOiA82JEbQKE8kBobKj1Da18%2B9Qs61dZ6TwqfMrldEjLViBbyJRx8%2Bo9%2FBSVvkhvwFSPvzgp%2FwY9i%2BRiAPtkGdqfpdt6%2B4NZUwvIYl%2BiAUTZ16pLyE7lcPm6tbbWUmIECn5a4PG%2F%2Frl0hF4PPZTSEAhS3r0Y6gnTvA3PGGMJ7X8n%2B5HkZa&X-Amz-Signature=80510cfc1ce2288560438d9853fa9c1b1eaedf0c7f1d3f977a01556e091c335c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TA73MPD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T105151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIDzEZqrAd8jeMQoUEc%2F%2BhkAunZPz%2Fvr60rwwZSIkcPxwAiEA1%2FEcQMfmere15Tj8pj7kYOYsb4CKyOX5zT7%2B5LgkrQoq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDGFGPa5d%2BL9eQMcj%2FircA8Dzk3zcs7rj7aY6A8%2F9OJOR0ozzUKoTP97URaWUxi1Bbv4FRvapwgnKSMLoxtRVIqGrcAQoUUWswxvnaFe6KgfJlR4P1hhrOsJ4BaxJ00VgsyEcgUywgw2a%2BBIffM3VAuEkpzyI7jDCD4hYrHGxlM789%2B2lmZXlFn7wG%2FcZZ8S%2FGRmEQjmC4NgGwXNJa9f6TrG36d4gT6m75HbbmhGwOvzIGybIXhZOTlI5m1hfUjm6hri%2FYagVQ4jPpTmkZxdHnVcCWZh7fYq%2FBXJ5jukjkYlhh8Z2xSmkgRCmasuUp%2Bsmjop7800t2No%2FxdB2jjViSk6OYlm0pkuQy0Z5LrRMZyV%2Brhcw0C6BnGF4m1tEN4jzguF6NMSmmx3SNzXmhR97cXrZnczIckLiu1vWpE9kigIb2%2FhCR6f3alg5nYOmeL3IN9mg3goT9fOtIglVn%2Fwqopb9awz%2FdPM2uPSGRB%2FJded4zj1pPpYNVe8xPlzVqrSQ6hE9Pqm%2FI7fjJjDpo8%2BsqlAEzFdHz0IOeDg3zcyfeGSFELh%2BDnpb4UvMV4sku7h%2FKVXjkjotgtWJx4gzOinAPWcDGKYPvyLXxP2AYFKlIith7%2FKE3b0eh%2FCWUbqYVLb8NtaHaqtBioq6svw5MLOSwMkGOqUBxKVfQpsVfhHlm4GvHYlh390%2FX5TaBlgrJqDHfKa6GLqOiA82JEbQKE8kBobKj1Da18%2B9Qs61dZ6TwqfMrldEjLViBbyJRx8%2Bo9%2FBSVvkhvwFSPvzgp%2FwY9i%2BRiAPtkGdqfpdt6%2B4NZUwvIYl%2BiAUTZ16pLyE7lcPm6tbbWUmIECn5a4PG%2F%2Frl0hF4PPZTSEAhS3r0Y6gnTvA3PGGMJ7X8n%2B5HkZa&X-Amz-Signature=7b8770a869e997cbfc3579ebb11c6d83964afcbd00e25e8edca617d3fa2211f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

