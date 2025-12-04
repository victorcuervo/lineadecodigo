---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB6SXZJP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T044727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDvzx5vkfQ2GgTEN1Gmu%2FEdmXhIcZmz7jlKlyFDmc3d2AIgK20pqBqmm%2BfKB3ZJBCMRoKgzHmA%2BXnmbySbCaH%2BmU8wq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDJuMdoJ2fqxdZNQ6MyrcA0G32kcAegvam%2F9%2Bmu5E%2FqYOaRAwokGAagYixcq8mVIEbsYVMiAfqbg72Fgb5sMc6VLRFdxg7ZxmQ8fAirtGkOilEolaTyM79wEc9FEg6gv0watdXziytFRP7IDa7iQDLQ%2F0Ha%2B3HqbIr%2FSqT9B644V76LV%2Bg0BDIYmYlk9f%2FAZzQWv7CtLbrqCNtsPHNPiNRh0h%2BXD1DyTLrUeA%2BtSqStHGBz5zARcIa0dW074UovLXX8fq82pj%2Fumztr7WnApI3P1lbyc7JVHwco%2BtwB5kW3B%2FE%2BGlRdYNXX3uCRTxFl0Na3RZqu%2FFQOlRTq%2FHAXgWAr6fLVdn3weJHp7tfCts2EVFhFDy1ZLZcgAYrGU40fvSdW8C%2BEcaM2uRxC6kJ80jniHg8rZyeJGx2rlOT02t1nlyd68lb6aUnWkyukQXv4oXcHA43RGVD7i1Xh4UXvCya5TvFLGxBlPc0SauE%2BlV6y6dBGZrzZT%2FSWae%2FNZGBKaRTLl1SDl8HZrs5QB4OsVAUdTJw6cW3GXbEllq4kNJj%2F03vlbFOP9Da0ADAz6TIYvMEbg5kV%2Fv1zP2WKlfWByTiIuavnJFVMpMWacdc3GH0Dm%2BFTjt%2BPQxGEVTk%2BzgUguC8LcXLskCQYKRSMmHMJ%2BQxMkGOqUBy3Xh4c2YW6InswfCrMxIRsSK19bBZ3Fh8TwPwus7U1JBeZztFzJvaRrJgiNfV%2BqvZmMtX6tDy20s1PJNFwWibI%2BvDbvxmMJIjJwcNoJXfKrBo4vZ7Iafb7OOiPOYbSlZON%2Bj%2B9l2nuK%2B82bcJ4FTxXEw15UsZMsZX2%2BMdjm6H3vYaZ35Dgev9yWWcuZU%2BdWslXnH2SB9Za%2BowYhv4CykCqsEd644&X-Amz-Signature=44e01bfe4c0a54b900df32d442661101769613fd5874ded77d21ab084207fce2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB6SXZJP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T044727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDvzx5vkfQ2GgTEN1Gmu%2FEdmXhIcZmz7jlKlyFDmc3d2AIgK20pqBqmm%2BfKB3ZJBCMRoKgzHmA%2BXnmbySbCaH%2BmU8wq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDJuMdoJ2fqxdZNQ6MyrcA0G32kcAegvam%2F9%2Bmu5E%2FqYOaRAwokGAagYixcq8mVIEbsYVMiAfqbg72Fgb5sMc6VLRFdxg7ZxmQ8fAirtGkOilEolaTyM79wEc9FEg6gv0watdXziytFRP7IDa7iQDLQ%2F0Ha%2B3HqbIr%2FSqT9B644V76LV%2Bg0BDIYmYlk9f%2FAZzQWv7CtLbrqCNtsPHNPiNRh0h%2BXD1DyTLrUeA%2BtSqStHGBz5zARcIa0dW074UovLXX8fq82pj%2Fumztr7WnApI3P1lbyc7JVHwco%2BtwB5kW3B%2FE%2BGlRdYNXX3uCRTxFl0Na3RZqu%2FFQOlRTq%2FHAXgWAr6fLVdn3weJHp7tfCts2EVFhFDy1ZLZcgAYrGU40fvSdW8C%2BEcaM2uRxC6kJ80jniHg8rZyeJGx2rlOT02t1nlyd68lb6aUnWkyukQXv4oXcHA43RGVD7i1Xh4UXvCya5TvFLGxBlPc0SauE%2BlV6y6dBGZrzZT%2FSWae%2FNZGBKaRTLl1SDl8HZrs5QB4OsVAUdTJw6cW3GXbEllq4kNJj%2F03vlbFOP9Da0ADAz6TIYvMEbg5kV%2Fv1zP2WKlfWByTiIuavnJFVMpMWacdc3GH0Dm%2BFTjt%2BPQxGEVTk%2BzgUguC8LcXLskCQYKRSMmHMJ%2BQxMkGOqUBy3Xh4c2YW6InswfCrMxIRsSK19bBZ3Fh8TwPwus7U1JBeZztFzJvaRrJgiNfV%2BqvZmMtX6tDy20s1PJNFwWibI%2BvDbvxmMJIjJwcNoJXfKrBo4vZ7Iafb7OOiPOYbSlZON%2Bj%2B9l2nuK%2B82bcJ4FTxXEw15UsZMsZX2%2BMdjm6H3vYaZ35Dgev9yWWcuZU%2BdWslXnH2SB9Za%2BowYhv4CykCqsEd644&X-Amz-Signature=e52252cbd5020f89468d09978f68e1b84ed45681fc135b6af46af1bf1a6fb64a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

