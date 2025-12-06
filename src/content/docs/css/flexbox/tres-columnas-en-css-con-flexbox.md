---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2W4MSUF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T191504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICK50x2qg%2F92SMUkAgMHKujnUoGzorLhC5QTPKtQghJwAiBjgg0d54QnpGphLosZLnnPyxdnOpxA3AuqbCAI8xLCyir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMYV%2BdcFBR4sw%2BjSr6KtwDRs%2BRj%2B33L5CDlQ%2FUTwIAvrIh8xlwqioOb7J%2BF8soGr%2F7oSTyUe6xATzcb5zJWIQYMirnRBBzyWhCbvn%2BvoPH2R4lmYu%2FaI2FEOpgSgtfjm777qOCW2INUIoazTzpnwn5rGo7NLKiOyePKIoqRtimkyxBKk5oPku%2BM%2F7x6F1DIOBz5wDdV1%2F1EnwYwRrlQiAGnpXM%2BwN6eLRIlpE%2BD1JniAnfdrbUjinNi%2BFI6xZwvzSoaHpyR7GLdp81KQOZcrKtNMZQwvOqnIGJQVjj%2FT7UEF6RojxeCymMiYPRh2VTAd2pWb%2Bi0YD6vpkEo8%2Fx%2ByVxBhnzZrWl9pFM0%2FuMGyrOvBpzI8O%2BSrzI6HWIiwXx4mVgRbr%2Fee949bfk1ZpEdbkh4Xu7wCXeIB975j%2ByAs6T%2BJiHjmrgsCOQbLrmTv4yd3gnN6JVVNHmRAwAZVhEULN7bij3RC9%2FyGDYCt7o0J6oyIrkIEN0vXGimIbzyPTwl1tQ%2FSWlB1YNFXK43ZC9YzOtkiEJsR6FYXZpY9ZuEF3XUkD8c1RR6vzh9mOjHh8ouixrK6YxLETcA9HP59FIbGOxLq5CuDEnnaZnTx9J%2BCuzeWuFBHpMBZ%2B6m2cgL8wD%2FXuHMC1ArZHaOiw7MyUw7czRyQY6pgHWz7yTl%2B%2FHp%2BD5ffMvm5ODd8fhl3lTT1%2BZyqzJp8ir9C2qj45firN%2FSibmVTBGXPRIPMXOL4lk1Ic8ZMwm%2BtGjI5DUjk7FEmX6x94avoUfl2nBteteR1oonvcNG%2FaUmXLYDJpxbrVH3FatPOT9N0jqQRHQUzLYEEik%2BS9jU2Sz%2Bw0xdd8xcHeWqzYp6%2BfMD6dSgBuT8zh5gEvdNPXmEL2u41tjBpg0&X-Amz-Signature=594f58f6e9d10d56176a8d68a1c590d2cbb65b3cbae95ab38d3358c223918dca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2W4MSUF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T191504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICK50x2qg%2F92SMUkAgMHKujnUoGzorLhC5QTPKtQghJwAiBjgg0d54QnpGphLosZLnnPyxdnOpxA3AuqbCAI8xLCyir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMYV%2BdcFBR4sw%2BjSr6KtwDRs%2BRj%2B33L5CDlQ%2FUTwIAvrIh8xlwqioOb7J%2BF8soGr%2F7oSTyUe6xATzcb5zJWIQYMirnRBBzyWhCbvn%2BvoPH2R4lmYu%2FaI2FEOpgSgtfjm777qOCW2INUIoazTzpnwn5rGo7NLKiOyePKIoqRtimkyxBKk5oPku%2BM%2F7x6F1DIOBz5wDdV1%2F1EnwYwRrlQiAGnpXM%2BwN6eLRIlpE%2BD1JniAnfdrbUjinNi%2BFI6xZwvzSoaHpyR7GLdp81KQOZcrKtNMZQwvOqnIGJQVjj%2FT7UEF6RojxeCymMiYPRh2VTAd2pWb%2Bi0YD6vpkEo8%2Fx%2ByVxBhnzZrWl9pFM0%2FuMGyrOvBpzI8O%2BSrzI6HWIiwXx4mVgRbr%2Fee949bfk1ZpEdbkh4Xu7wCXeIB975j%2ByAs6T%2BJiHjmrgsCOQbLrmTv4yd3gnN6JVVNHmRAwAZVhEULN7bij3RC9%2FyGDYCt7o0J6oyIrkIEN0vXGimIbzyPTwl1tQ%2FSWlB1YNFXK43ZC9YzOtkiEJsR6FYXZpY9ZuEF3XUkD8c1RR6vzh9mOjHh8ouixrK6YxLETcA9HP59FIbGOxLq5CuDEnnaZnTx9J%2BCuzeWuFBHpMBZ%2B6m2cgL8wD%2FXuHMC1ArZHaOiw7MyUw7czRyQY6pgHWz7yTl%2B%2FHp%2BD5ffMvm5ODd8fhl3lTT1%2BZyqzJp8ir9C2qj45firN%2FSibmVTBGXPRIPMXOL4lk1Ic8ZMwm%2BtGjI5DUjk7FEmX6x94avoUfl2nBteteR1oonvcNG%2FaUmXLYDJpxbrVH3FatPOT9N0jqQRHQUzLYEEik%2BS9jU2Sz%2Bw0xdd8xcHeWqzYp6%2BfMD6dSgBuT8zh5gEvdNPXmEL2u41tjBpg0&X-Amz-Signature=6f88a69c54cb6e83592d19187c80fc6abca21def2ddbfb3bc137ef51c7e0cb6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

