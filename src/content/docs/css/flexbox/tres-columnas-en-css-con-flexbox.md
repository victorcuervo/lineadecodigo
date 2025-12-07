---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCBHNW7H%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T054244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbrut2MP%2BRvFmolqTVhoNBHiAKCZ10TkVcYyWK6TK1jAIgCLaZLY4V%2BhxMPXG2s4bGvuIAScOXCDEOPZGwWcOOh6wqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDZQbQS1e6fXxh6sDSrcA0HIAsjoz%2B3eSYGzjvznI7nrCCoPx7hzuXeiImNAD%2FWIzRHBMdtGx2b5klfZkfExaZP2OkLAfUBrJG9tU%2B4Mei0DtXMbqAgK%2FAv%2Bt4yWMkwE2s11ShzuSF7XxsyP0YiNE%2FhZEKw9iirWYho6XFuWyI6qm3w0u50aMPxwRJKCvZooVsAAVRcPY0WmDyPJzbxRcmFppKEkuMt2HMYM0lb0Oq%2FkYOATuSU53Dl2SNFt3Tm62iy%2FtCy8LkxKeS1D4Zt9xMt24XTDulh%2B%2BKGZvXBIMc7GgzRD0Dsm9fCkU%2F0aPSSIFHOTtg85pVEGlirJU2YVI1V8nI28bnqr37zHcBtfdK%2Bem73bJ1yttfk0j4KlKkHzKRWmC9wvvIZH01tw61QraDj0HbECxwy8HB95y0iZEa47cJhYFv%2FshzBFc%2BvfwlKqr9yFxuGBj8PJPw34dSzsDgWAbx2Nw6qV2nZblfZNzkjv%2FmmCZ3yftADMDmCzn4R9rTp5YNjJYLKX6elswVzD2YPgvq9NicSbqsLLFQPUMQD%2F%2Fk8oPgCWllDsUbic4kCou2Wc69r0qeF0mj4UfdKCgah8s5m%2Btuk55IJ05AtOMzkxXqrgMTuk3SWOgysGQXv%2F43I4LqPFvMoz0v3GMJ%2Bc1MkGOqUBzV0pAMqksko5689p8Dao4UaEttUaNGGdVJ7w07nUqN8RWzKhN%2B95jFF%2FPtlGAeG1lza45osaXzDfEGNcFhvTtR6mEgxiyDGhyxHdp07zapzBlX7CKg8rHYb8wHVv4JfZoTlAChJGRSWUUpU8LhwOdq5f2ZrToEXyBVCdgn1VrcIDYH1NflM0Y0%2BWv6aSgtKUmHo5T1emng0fAq39NMmI8V8cb%2BcA&X-Amz-Signature=48a9453b9b50404bfc09afa1a4bad1f3910168d1454d94b1871f45ec13c2096d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCBHNW7H%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T054244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbrut2MP%2BRvFmolqTVhoNBHiAKCZ10TkVcYyWK6TK1jAIgCLaZLY4V%2BhxMPXG2s4bGvuIAScOXCDEOPZGwWcOOh6wqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDZQbQS1e6fXxh6sDSrcA0HIAsjoz%2B3eSYGzjvznI7nrCCoPx7hzuXeiImNAD%2FWIzRHBMdtGx2b5klfZkfExaZP2OkLAfUBrJG9tU%2B4Mei0DtXMbqAgK%2FAv%2Bt4yWMkwE2s11ShzuSF7XxsyP0YiNE%2FhZEKw9iirWYho6XFuWyI6qm3w0u50aMPxwRJKCvZooVsAAVRcPY0WmDyPJzbxRcmFppKEkuMt2HMYM0lb0Oq%2FkYOATuSU53Dl2SNFt3Tm62iy%2FtCy8LkxKeS1D4Zt9xMt24XTDulh%2B%2BKGZvXBIMc7GgzRD0Dsm9fCkU%2F0aPSSIFHOTtg85pVEGlirJU2YVI1V8nI28bnqr37zHcBtfdK%2Bem73bJ1yttfk0j4KlKkHzKRWmC9wvvIZH01tw61QraDj0HbECxwy8HB95y0iZEa47cJhYFv%2FshzBFc%2BvfwlKqr9yFxuGBj8PJPw34dSzsDgWAbx2Nw6qV2nZblfZNzkjv%2FmmCZ3yftADMDmCzn4R9rTp5YNjJYLKX6elswVzD2YPgvq9NicSbqsLLFQPUMQD%2F%2Fk8oPgCWllDsUbic4kCou2Wc69r0qeF0mj4UfdKCgah8s5m%2Btuk55IJ05AtOMzkxXqrgMTuk3SWOgysGQXv%2F43I4LqPFvMoz0v3GMJ%2Bc1MkGOqUBzV0pAMqksko5689p8Dao4UaEttUaNGGdVJ7w07nUqN8RWzKhN%2B95jFF%2FPtlGAeG1lza45osaXzDfEGNcFhvTtR6mEgxiyDGhyxHdp07zapzBlX7CKg8rHYb8wHVv4JfZoTlAChJGRSWUUpU8LhwOdq5f2ZrToEXyBVCdgn1VrcIDYH1NflM0Y0%2BWv6aSgtKUmHo5T1emng0fAq39NMmI8V8cb%2BcA&X-Amz-Signature=2077620e81bab69ac42c262d4145eae20c7744ba60970d2b656840086886171e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

