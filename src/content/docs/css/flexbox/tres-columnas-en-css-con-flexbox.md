---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFWJNQNJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T152002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSvl2sfvFOPbqPKwlyfP9OLDNUCLimiDFzn4tV5NN%2BaAiAkdM8d8fUB4tJlOdgHDbfdSpSVJNU6FCQ4e8DacaTDLSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMxvEHERNXYEZibzPPKtwDgdI9QNEY4%2BMiKM852Ox8OGSDJ8UXL21mgBGjEkWyXTCIYzsi5cA4E8Oi6EB%2BNlcMGQX5ZEu4KCW3dbLlMwFZZ4tA%2FKAqoaFuMGSa%2B5SCYoOcdcsNbgQg0iYsZKGwvA%2B2pTj%2FiBXVAgLr8ZR8A%2F3jk96de9xWVn%2FZIUw%2FuujjYrhmfCYxn5Gn1vmcyKSXz4xaIPZYl0L1jYccIXXCVlVnCWHDLZrjzn%2FkN%2FVVr1hVbBJWxTr%2B3XR5VeavNqmGBgPRDU090YbGnXwo3dDUvE0f%2FnOHSKQLKGdnUR9TZaKJ2Lfls1tYznADbFDykVtxm5JlNCRAMmuQ8HF1WtIGm3xFyPZJrnjjs5lIwFu%2FQJQj3A45tJTDSmriJYePQBTPBFoGXNcC%2BEzJv9Y2EBrN3lS9%2B%2BYdGKZqidE4UFrF%2B2G6cjCse0I6lrCEr7e3txUpOMZJ3SRBo1OGq5V%2BcVbaCoVu1lkh6VjINlyw5gt56oh%2BnC8z58KqJA9vgcGwV2yJSXigF1o6v0PIBw4cYilnWRcNZBwsJa3dzbhEJD2eeghIih2sE2RbvvbKcdwUPHNL%2BpJJJ76AfV%2Bt95EbD1zz1ljGQLqlWonhVwgrv7D%2Buk7a%2FSPIG0T1fXch%2By%2BBcMYwhKfQyQY6pgEUpAtfl4NB%2BSyQxes9tpzItEIR1glUvDPsWXSA2UW5Yzq%2B4Ulll5aWNnMtVR4pQ6DtFyLv%2B6ucyMq%2F8RqnbqcQDvQDD3%2B8wSuH8IZDcsRUFmkjFaKrZRslJvd11xnNiUTrsNVPQ%2F1fCsrm1QOG7owINDh0kaCaRDLGdRHC7%2B4N5hswdDtwO%2FUNS1tjpeRiQQY2qST7DNBV88Uy1y1oklJVRSVnsZzc&X-Amz-Signature=865c51914cb305bd703f96ada20740d5b9c56d395c1b4b2acc35e5f3ced99492&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFWJNQNJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T152002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSvl2sfvFOPbqPKwlyfP9OLDNUCLimiDFzn4tV5NN%2BaAiAkdM8d8fUB4tJlOdgHDbfdSpSVJNU6FCQ4e8DacaTDLSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMxvEHERNXYEZibzPPKtwDgdI9QNEY4%2BMiKM852Ox8OGSDJ8UXL21mgBGjEkWyXTCIYzsi5cA4E8Oi6EB%2BNlcMGQX5ZEu4KCW3dbLlMwFZZ4tA%2FKAqoaFuMGSa%2B5SCYoOcdcsNbgQg0iYsZKGwvA%2B2pTj%2FiBXVAgLr8ZR8A%2F3jk96de9xWVn%2FZIUw%2FuujjYrhmfCYxn5Gn1vmcyKSXz4xaIPZYl0L1jYccIXXCVlVnCWHDLZrjzn%2FkN%2FVVr1hVbBJWxTr%2B3XR5VeavNqmGBgPRDU090YbGnXwo3dDUvE0f%2FnOHSKQLKGdnUR9TZaKJ2Lfls1tYznADbFDykVtxm5JlNCRAMmuQ8HF1WtIGm3xFyPZJrnjjs5lIwFu%2FQJQj3A45tJTDSmriJYePQBTPBFoGXNcC%2BEzJv9Y2EBrN3lS9%2B%2BYdGKZqidE4UFrF%2B2G6cjCse0I6lrCEr7e3txUpOMZJ3SRBo1OGq5V%2BcVbaCoVu1lkh6VjINlyw5gt56oh%2BnC8z58KqJA9vgcGwV2yJSXigF1o6v0PIBw4cYilnWRcNZBwsJa3dzbhEJD2eeghIih2sE2RbvvbKcdwUPHNL%2BpJJJ76AfV%2Bt95EbD1zz1ljGQLqlWonhVwgrv7D%2Buk7a%2FSPIG0T1fXch%2By%2BBcMYwhKfQyQY6pgEUpAtfl4NB%2BSyQxes9tpzItEIR1glUvDPsWXSA2UW5Yzq%2B4Ulll5aWNnMtVR4pQ6DtFyLv%2B6ucyMq%2F8RqnbqcQDvQDD3%2B8wSuH8IZDcsRUFmkjFaKrZRslJvd11xnNiUTrsNVPQ%2F1fCsrm1QOG7owINDh0kaCaRDLGdRHC7%2B4N5hswdDtwO%2FUNS1tjpeRiQQY2qST7DNBV88Uy1y1oklJVRSVnsZzc&X-Amz-Signature=6cd0b007b5c2208d4ad3d95a13818c1b6bd21707d9d4afb2d669984a98648c86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

