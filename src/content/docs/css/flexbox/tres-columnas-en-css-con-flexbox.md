---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQSYMSG6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T092538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOcXI%2FYGNXXJJZqLOK2LKIY9GmG79KyDltOIc21LIRkAiAxbkyJ7VAToBLg2tW5xq5GQrp2wYcfXp7Mi2LQNG4j7SqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7wA8tGsexJLHPWtSKtwDvtgpxl%2BRh550GdHP6l8Yna%2BisnnJWg4Gf%2B4HXCyyReBgxJE%2FYXl95Dyi6C6gWqrajAeYuMiND9MvrTrpJnrthrkGih2qGYDo0qWVr8ozleQ6trawJ0YzSvN79NqTPsR4xSe9jZ%2BAIjbbndmjl148I4fxOx8Dpx0GB6c5k8ee%2BjbJuRnT%2BBLylDpTIM9m5TsAMogP3Cs2tbAP8Uy8Y8RPVgr%2F3DPMrRHXNUV43iuR3hnnF1dvWUNpOWn18SEY%2FCfjZ976G3YWDgXhBi%2BNyVifI7nIze%2FOJyiXD0%2FBfjVrZIadtRVUox5jp6yuoIeZLDPMpqaARxl89LthVsCZrE%2FduVwvagUOQrJC2pfByfYFQHsQq8vIpdy5W3ZkxtMCVDmssGcJ4xWP9vdABVhmdudXgR6tD1FUt0HqnVu6eMucdf6cNjqY2Ho1nptbkiBERgOVjQXJONT5w82VM%2BLm1yeKgvuwM%2F7%2BMImkKOVkmR9njbP0G4XZm3rzqNNlpg%2BvsL3Zj6%2FrDO6UYmwoj9Id3WHaFAHtwZQoB%2BjokPoco6em%2BUA2Xojo4WBZINHfNaV%2BKf%2BuBhoLBcEQyYrjGJ92P%2BLn36%2Blbiq9tSv7Hc9s7jipvirrW8GBde%2B6PkbHYTIwocPfyQY6pgHVr3WBx%2B2wuWfYDzBf%2F5mFMbh%2Fsz5e2rpTI7Uaxqs4qOk9Gw92XUnUtRRxIrcBmPA9oC9gGw%2FRxw40qJ75zhcafRTaGnVk2rHbGjtOEimuK9DkIJ13lbC%2Ba50IPQT3mTQQ3fQDSb%2BraX26XW2TvYJBCs6k3MJ4L8goq8wcTdJ8nZlcYKfQ5fOnQwP20GTFGr2of6YSClEfuRViquwKl%2Fh55ghuiZV4&X-Amz-Signature=c9ff8e4db0f5ebe41716bfceed532ab3f21685ec7d1252564bb1e13922d1ff41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQSYMSG6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T092538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOcXI%2FYGNXXJJZqLOK2LKIY9GmG79KyDltOIc21LIRkAiAxbkyJ7VAToBLg2tW5xq5GQrp2wYcfXp7Mi2LQNG4j7SqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7wA8tGsexJLHPWtSKtwDvtgpxl%2BRh550GdHP6l8Yna%2BisnnJWg4Gf%2B4HXCyyReBgxJE%2FYXl95Dyi6C6gWqrajAeYuMiND9MvrTrpJnrthrkGih2qGYDo0qWVr8ozleQ6trawJ0YzSvN79NqTPsR4xSe9jZ%2BAIjbbndmjl148I4fxOx8Dpx0GB6c5k8ee%2BjbJuRnT%2BBLylDpTIM9m5TsAMogP3Cs2tbAP8Uy8Y8RPVgr%2F3DPMrRHXNUV43iuR3hnnF1dvWUNpOWn18SEY%2FCfjZ976G3YWDgXhBi%2BNyVifI7nIze%2FOJyiXD0%2FBfjVrZIadtRVUox5jp6yuoIeZLDPMpqaARxl89LthVsCZrE%2FduVwvagUOQrJC2pfByfYFQHsQq8vIpdy5W3ZkxtMCVDmssGcJ4xWP9vdABVhmdudXgR6tD1FUt0HqnVu6eMucdf6cNjqY2Ho1nptbkiBERgOVjQXJONT5w82VM%2BLm1yeKgvuwM%2F7%2BMImkKOVkmR9njbP0G4XZm3rzqNNlpg%2BvsL3Zj6%2FrDO6UYmwoj9Id3WHaFAHtwZQoB%2BjokPoco6em%2BUA2Xojo4WBZINHfNaV%2BKf%2BuBhoLBcEQyYrjGJ92P%2BLn36%2Blbiq9tSv7Hc9s7jipvirrW8GBde%2B6PkbHYTIwocPfyQY6pgHVr3WBx%2B2wuWfYDzBf%2F5mFMbh%2Fsz5e2rpTI7Uaxqs4qOk9Gw92XUnUtRRxIrcBmPA9oC9gGw%2FRxw40qJ75zhcafRTaGnVk2rHbGjtOEimuK9DkIJ13lbC%2Ba50IPQT3mTQQ3fQDSb%2BraX26XW2TvYJBCs6k3MJ4L8goq8wcTdJ8nZlcYKfQ5fOnQwP20GTFGr2of6YSClEfuRViquwKl%2Fh55ghuiZV4&X-Amz-Signature=63a7d8089812a4841d1577aa38a141d7ecf7d97b36403b44afbb2d554ac7824b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

