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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YFBVLHC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T124321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCPSxteFhGCivgxx%2FXJtlVquZUAG5Xwxklx7DU6tVvZXgIgB%2FMpcjlocu3l54M3dsQgAtEbJO17RnY3UC57Y7zy7jMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPnvNwQXC%2FYpZ%2BCxaCrcA2Iw0z711qRiMt8Q3oowQCmlk0zlithQHuz6gse4C8JuKw4DA8aLn8tvKHelOuRmeWXFbN5T2AtoB%2FM6Vevg%2B42xq08iDxDu%2Fq65PV4k0PY4leMOum76D9EhiInylqL%2B9tmmnh7jahvggMvWxGYJMdTcb%2BAzyJi%2BdFdbYUJLSkLzgtmAGCDgmWzvLRr%2F0cLomRx0x6D8f3ylWNq9QfPVnFCgTCGAOHL4BjN%2FrF3Y4ZOsGVlq7Qug2xwfbE5RZFisGt%2FNkZqICf4zryE4FieYTvG6py%2Frh2drmjIuigxKdgE8EBC0Nk5mmPM2i%2FGaX5u7X%2Fw48r6TAkoOns5i9J6rrFI2He3NXEoiLdJ7Gs1pxEvOUw8l5KeJ3%2B7MLfYqbJ%2FcwdOEzKIaF4ebvll3U39ZXpSQViynI8kjl06RGYuVebk1LAKWTFQzZp%2B%2BNqMDWUrDoLeLgScl5rEMwwPmsqpWfQGVF95aaiwbG9Syg5a0ihI1il5FQMf%2B2jl8q5lL%2Fen2J7vV8G1vFnY9Pwv7iI6bJWMQREgCszvM5pRN4bvPr0aWtnsp68FvikJPLdQku0dS2v4A5VcBLuxQbdkpmxCpZBXKDiOAqqQf9%2FDbNSy%2BLTveKCah8gzAgQLurxsmMJ%2FOwMkGOqUBYmVDQZdqjwtUHi8vvp4tvDUgqkuFTOU8wrJqbiHwC9alKVJkxTDUZGyvPvGXfzUEtxj6CPkyFEdM1tiCmPYglYvFCXek91txy%2BdxBisVloeMMSsuaDtxSHs0f%2FbWZY0WhlblqQeeK9zlmEM90h%2BPoVEpqdM383myZy2P9NQrZ0fc57xUZU%2BoD0wgPf6bgh7PCIPNMETJdZGJAijnK5JoU94x4C3P&X-Amz-Signature=c42d5b1471164e50466f2bae1559190edc7d4bedd661897da037f5bf9cfd9509&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YFBVLHC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T124321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCPSxteFhGCivgxx%2FXJtlVquZUAG5Xwxklx7DU6tVvZXgIgB%2FMpcjlocu3l54M3dsQgAtEbJO17RnY3UC57Y7zy7jMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPnvNwQXC%2FYpZ%2BCxaCrcA2Iw0z711qRiMt8Q3oowQCmlk0zlithQHuz6gse4C8JuKw4DA8aLn8tvKHelOuRmeWXFbN5T2AtoB%2FM6Vevg%2B42xq08iDxDu%2Fq65PV4k0PY4leMOum76D9EhiInylqL%2B9tmmnh7jahvggMvWxGYJMdTcb%2BAzyJi%2BdFdbYUJLSkLzgtmAGCDgmWzvLRr%2F0cLomRx0x6D8f3ylWNq9QfPVnFCgTCGAOHL4BjN%2FrF3Y4ZOsGVlq7Qug2xwfbE5RZFisGt%2FNkZqICf4zryE4FieYTvG6py%2Frh2drmjIuigxKdgE8EBC0Nk5mmPM2i%2FGaX5u7X%2Fw48r6TAkoOns5i9J6rrFI2He3NXEoiLdJ7Gs1pxEvOUw8l5KeJ3%2B7MLfYqbJ%2FcwdOEzKIaF4ebvll3U39ZXpSQViynI8kjl06RGYuVebk1LAKWTFQzZp%2B%2BNqMDWUrDoLeLgScl5rEMwwPmsqpWfQGVF95aaiwbG9Syg5a0ihI1il5FQMf%2B2jl8q5lL%2Fen2J7vV8G1vFnY9Pwv7iI6bJWMQREgCszvM5pRN4bvPr0aWtnsp68FvikJPLdQku0dS2v4A5VcBLuxQbdkpmxCpZBXKDiOAqqQf9%2FDbNSy%2BLTveKCah8gzAgQLurxsmMJ%2FOwMkGOqUBYmVDQZdqjwtUHi8vvp4tvDUgqkuFTOU8wrJqbiHwC9alKVJkxTDUZGyvPvGXfzUEtxj6CPkyFEdM1tiCmPYglYvFCXek91txy%2BdxBisVloeMMSsuaDtxSHs0f%2FbWZY0WhlblqQeeK9zlmEM90h%2BPoVEpqdM383myZy2P9NQrZ0fc57xUZU%2BoD0wgPf6bgh7PCIPNMETJdZGJAijnK5JoU94x4C3P&X-Amz-Signature=fb1278393a232da25bef2512acae114b09e30512906b0617b4466691a8c92c02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

