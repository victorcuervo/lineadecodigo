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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QPUDCAP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T030824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIC0swHigID%2BCpHUWjcVP5swcbeFuc80Odzna1qdfpZXSAiA1SAtJ0I%2FWFxEC5HSp3R%2BBG4nzIRlcuMEBMd3jQriIGyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMFKrkFd%2Fbj3wePYISKtwDSpU0nRkYvf1Ck%2BBvTyn2B72dCTLMKm6Bc5C0rS%2F3TO6fY%2F6ExLqqIh4hwSfbaXrjb%2B5ak0El6VOcS3SUlyOc8ef1J%2BgkTpLORdAnPxlIQgq91LJEkTsVhd6vA49dqIXZ53OfMKuxIiEswBvVjzaDgG9qxoighgd4Xm5ZuKJAj%2Byp4gjURXk3mI0nBY2QrSNWCrWpUke3M2AZXTvcYQUzKQtm%2FJqgiri3RaLRaaGmw1UPRXB1XZkN2LQIlMteM8Trf4yH5C6qCkp05F8WVpO%2BGKDN5FEGkbwSOpDzWlwnLKz2oEmYjd3NoKnGdZhAKQcWbiJ2PGOppBbih3QuPrhz7aDR%2Bmo792CraGecKLwN%2BL521AWvSPtr9xjQB8N%2BY9gm2U8zA8U5WLxYteZY3ndqNkgv2b1njZ2B0XjPMs3kCuo3QvklVkSgUUqFC%2BxfDiAZqsQrkBUGuNdVIurhGG6G0qGBs4vN6DRsVBtQnF1e7LJwEhWtkcdLDEl8y4U8FQJNuA5SteaVmY%2BN%2FGczyqjiBmlel4H6SDxcelVKznAjjjpy2BtZke6Q54fYPbFpAofGbE92uuP5vUqlFugwGBPA%2F%2BvWF1rjUIWPpdqYikjxy1Gm4BQwIYbFubfkzyswx5S%2ByQY6pgGUDUbn2wm1JgI%2BW0tOWRj2RiZSaUNflgJYcUk4Uk%2FVl5eBJpV76ct2DB67pnYg%2BfWB82j9KAWUvjr9Ir2dsj07LRRrRyF4qzB1%2FbSnZ7m70YdpnRWnkfIgRYFFE7y233u%2FUNyBmh57deyuaQ9DUSKL5o6GpmFnL5t101DQTLm2vO3aBnuKDBVXCui2jtgNIXFa1pxVWBoVEAE3%2BHjEBdsh80J3hi2q&X-Amz-Signature=b09c008fcfc44d16d519eb17cb18996a25ee1155264a7b6902bab169976ca9cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QPUDCAP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T030824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIC0swHigID%2BCpHUWjcVP5swcbeFuc80Odzna1qdfpZXSAiA1SAtJ0I%2FWFxEC5HSp3R%2BBG4nzIRlcuMEBMd3jQriIGyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMFKrkFd%2Fbj3wePYISKtwDSpU0nRkYvf1Ck%2BBvTyn2B72dCTLMKm6Bc5C0rS%2F3TO6fY%2F6ExLqqIh4hwSfbaXrjb%2B5ak0El6VOcS3SUlyOc8ef1J%2BgkTpLORdAnPxlIQgq91LJEkTsVhd6vA49dqIXZ53OfMKuxIiEswBvVjzaDgG9qxoighgd4Xm5ZuKJAj%2Byp4gjURXk3mI0nBY2QrSNWCrWpUke3M2AZXTvcYQUzKQtm%2FJqgiri3RaLRaaGmw1UPRXB1XZkN2LQIlMteM8Trf4yH5C6qCkp05F8WVpO%2BGKDN5FEGkbwSOpDzWlwnLKz2oEmYjd3NoKnGdZhAKQcWbiJ2PGOppBbih3QuPrhz7aDR%2Bmo792CraGecKLwN%2BL521AWvSPtr9xjQB8N%2BY9gm2U8zA8U5WLxYteZY3ndqNkgv2b1njZ2B0XjPMs3kCuo3QvklVkSgUUqFC%2BxfDiAZqsQrkBUGuNdVIurhGG6G0qGBs4vN6DRsVBtQnF1e7LJwEhWtkcdLDEl8y4U8FQJNuA5SteaVmY%2BN%2FGczyqjiBmlel4H6SDxcelVKznAjjjpy2BtZke6Q54fYPbFpAofGbE92uuP5vUqlFugwGBPA%2F%2BvWF1rjUIWPpdqYikjxy1Gm4BQwIYbFubfkzyswx5S%2ByQY6pgGUDUbn2wm1JgI%2BW0tOWRj2RiZSaUNflgJYcUk4Uk%2FVl5eBJpV76ct2DB67pnYg%2BfWB82j9KAWUvjr9Ir2dsj07LRRrRyF4qzB1%2FbSnZ7m70YdpnRWnkfIgRYFFE7y233u%2FUNyBmh57deyuaQ9DUSKL5o6GpmFnL5t101DQTLm2vO3aBnuKDBVXCui2jtgNIXFa1pxVWBoVEAE3%2BHjEBdsh80J3hi2q&X-Amz-Signature=4f92b6f9db4c28d08773989d6e5100bae2415aec7b3eb9da038076d7269ab80c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

