---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQISGON5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T044531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBs9FDS0iaZmSVGxrhN7aLB79BsUG2gBZzBN8gp%2FivfbAiAf5bXQqClCkvn7SILPf9DWwp5ZISQ2tD4DjZJ%2BcRsJ%2FyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhhB1HJ%2BqyjIHEIvVKtwDaF9TR3KrxA4ZfzQBIFprBIdlTRWrnC2PYfjpgTrwBtv0qN62z%2B0qvJAa3tvM2CgIEkGQ896X27rMtW609kMacy8PmqpvFi2gs9UeKW9UlZ7Sgbix%2FjLl%2BwkWcnjoCpy9guVFEq36UyXzZ%2FH%2FE%2FmCkz0DRD5%2ByBcmJ4sYvNBdDZg%2FcCV7rQii%2F%2F9apIWhMvM4tvynBiAWp9BKVOLiaIsa2r5tKv%2B93ECHLpBWFTnli%2BC5d73yL0bm1SG9vO90pVRsOAhOUP7WNhZqsXHwTT65%2FqUJ4ylvptGDtRl7ukmI3tF8YcvwnMXRZ7F06qtVp7ynWnGf0njFYljr5gNkTkZ4oSnqlEtDuMoKHW46c0vDHCceq8b8zQ9AhpzwWgzMTgN91xPrMM9TPue94l0s%2BZKpShvmdl6H3Nn5OyDKF3aFNlSkGYIXMb1ZHqNE1rhl4MMSX1wbobJy0202r0MTLijR%2Bi2AsQBQmK5ssPRPD0i1SnPVyM25WR99nJU4ZtUfruJ%2FI0SnVr4EbSaDNS8LKnL7FffLps%2BAt21OfK4Ie8xGZ%2FmpXflXg3Rvt6s41x9wZp108DWNAsnQa0D3mrZw7lrqkW0MbI5rvzhp9xLpnpHvZPJz3dCy2u1Uk3jZTPUwnpTZyQY6pgHWcDQOD%2FaqPl3xpJyUExhxp57GckUmr6OFv9VpiXUtmrHp63X8ZAzReU6NpJ2MRrX1uJL0g4SapXvyEAMjp2knMTdQvq%2BlV30SnrQ4XWldZO1YaQPKNKf5XHdUUzMfv94mAATuxofatW4XEIwWuWbtUFM66LnqFn7plsM4yTKXwj3%2FSLs052YdYjmmqQm%2BcDCggOHO2OHl1EUyHB4syfgpPtE09LDx&X-Amz-Signature=cb1376dca41c711522bdaa404454052a27f103f9a0ee301d849ff567e0cd7a28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQISGON5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T044531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBs9FDS0iaZmSVGxrhN7aLB79BsUG2gBZzBN8gp%2FivfbAiAf5bXQqClCkvn7SILPf9DWwp5ZISQ2tD4DjZJ%2BcRsJ%2FyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhhB1HJ%2BqyjIHEIvVKtwDaF9TR3KrxA4ZfzQBIFprBIdlTRWrnC2PYfjpgTrwBtv0qN62z%2B0qvJAa3tvM2CgIEkGQ896X27rMtW609kMacy8PmqpvFi2gs9UeKW9UlZ7Sgbix%2FjLl%2BwkWcnjoCpy9guVFEq36UyXzZ%2FH%2FE%2FmCkz0DRD5%2ByBcmJ4sYvNBdDZg%2FcCV7rQii%2F%2F9apIWhMvM4tvynBiAWp9BKVOLiaIsa2r5tKv%2B93ECHLpBWFTnli%2BC5d73yL0bm1SG9vO90pVRsOAhOUP7WNhZqsXHwTT65%2FqUJ4ylvptGDtRl7ukmI3tF8YcvwnMXRZ7F06qtVp7ynWnGf0njFYljr5gNkTkZ4oSnqlEtDuMoKHW46c0vDHCceq8b8zQ9AhpzwWgzMTgN91xPrMM9TPue94l0s%2BZKpShvmdl6H3Nn5OyDKF3aFNlSkGYIXMb1ZHqNE1rhl4MMSX1wbobJy0202r0MTLijR%2Bi2AsQBQmK5ssPRPD0i1SnPVyM25WR99nJU4ZtUfruJ%2FI0SnVr4EbSaDNS8LKnL7FffLps%2BAt21OfK4Ie8xGZ%2FmpXflXg3Rvt6s41x9wZp108DWNAsnQa0D3mrZw7lrqkW0MbI5rvzhp9xLpnpHvZPJz3dCy2u1Uk3jZTPUwnpTZyQY6pgHWcDQOD%2FaqPl3xpJyUExhxp57GckUmr6OFv9VpiXUtmrHp63X8ZAzReU6NpJ2MRrX1uJL0g4SapXvyEAMjp2knMTdQvq%2BlV30SnrQ4XWldZO1YaQPKNKf5XHdUUzMfv94mAATuxofatW4XEIwWuWbtUFM66LnqFn7plsM4yTKXwj3%2FSLs052YdYjmmqQm%2BcDCggOHO2OHl1EUyHB4syfgpPtE09LDx&X-Amz-Signature=b2c818fa28b23bb76cc04ad0baaa648dee47f7130c96602df1913d5644b4f299&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

