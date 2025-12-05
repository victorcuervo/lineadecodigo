---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTJ4OSVB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T005606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHdXDJSGuJVbcYA0AUtme5DCIJW9090wy7yAIUB6l7bAiEApAnD%2BC7u1uNME%2B7DSAkEFu8WhUJqQgeDIv413L5I4Kkq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDAh7LWiZpIFVuXRbVCrcA0efLyEebZWOh0u1hTfSHuzHtDFuEqk2Nyte4lT7vzJ8CluzLydvlte0U3q3rBr35JJAnK6V2cbJ2e29Sm3X%2FBvkJRMQJEzdDMx3%2BJOOAh9ive6Rh7KEtyfbhn5dxCoN%2BOwRA1ysLs3FpWidi5IOxnrojXeuNQ1ESOmdgdllokts%2FHSNqLCh%2Bpojm1wknsYSvGGnPgQa1vgVYNN2jNBLghaHwSEbsZWF6MRekfoiexJ8Hd1lpa25M1ZuQNiBt1Gmmh0Fno8lQfcNz7DNesRjCtopDXKSbuunSpPEPYBrzJmWsrrg03lzhs2PpsEFbrQgVFapVZiUDHZcuQBoLPzDJeHDLtnvwWGIo0HWPm%2BlsFe2FbljBpihW7WitsBzy7Ts1aIN3zKGk5LdiNMnM5TXkh%2F2CslBCjFTqyffnmyrydxzks8TEcoXGw8b8%2BHUprv9fUWa6dKJYAHLv%2FLPYIE5Is%2F674mnVysSExpfFDQSk4V%2BBOqdwHJfKNPDEJX67fPZkfVlBx7dudCGO%2FTsbQScs9E%2BS7F7L2HnBR1dD6xYnBDrRD0T8BTELQ7woRz84%2BM%2FQloBbnX%2FiMSqYa6WAunppqlQUuKRD%2BMayfmrUwKqi%2B52VLGosVRpreakGSO7MJ%2BMyMkGOqUB%2Fuwi5hgbHmq7MFHvZxPsIk1NOAF2ruqXxmVS%2BFl4j103GfpDzfOVNqk9H8%2F3xUS1TsT5ff6LWlETTOahzssgCcYSpXZBjo69mcmPM5QW4bIfTvsMNfGkLMXqn1iH%2BYxqE3WGbYv7Uaazf5VBKFtLVT6jf%2FG0evCWPD0%2Fc2kmP7NkxDInYPmM5oi91POJrDkyUlBr8%2BHwhpn7UZuHg6MfUBJriZhb&X-Amz-Signature=82ca24b854f199139a9fcd1f07f2e6b6d48f9ea52ba93f590e9830f7349e15af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTJ4OSVB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T005606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHdXDJSGuJVbcYA0AUtme5DCIJW9090wy7yAIUB6l7bAiEApAnD%2BC7u1uNME%2B7DSAkEFu8WhUJqQgeDIv413L5I4Kkq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDAh7LWiZpIFVuXRbVCrcA0efLyEebZWOh0u1hTfSHuzHtDFuEqk2Nyte4lT7vzJ8CluzLydvlte0U3q3rBr35JJAnK6V2cbJ2e29Sm3X%2FBvkJRMQJEzdDMx3%2BJOOAh9ive6Rh7KEtyfbhn5dxCoN%2BOwRA1ysLs3FpWidi5IOxnrojXeuNQ1ESOmdgdllokts%2FHSNqLCh%2Bpojm1wknsYSvGGnPgQa1vgVYNN2jNBLghaHwSEbsZWF6MRekfoiexJ8Hd1lpa25M1ZuQNiBt1Gmmh0Fno8lQfcNz7DNesRjCtopDXKSbuunSpPEPYBrzJmWsrrg03lzhs2PpsEFbrQgVFapVZiUDHZcuQBoLPzDJeHDLtnvwWGIo0HWPm%2BlsFe2FbljBpihW7WitsBzy7Ts1aIN3zKGk5LdiNMnM5TXkh%2F2CslBCjFTqyffnmyrydxzks8TEcoXGw8b8%2BHUprv9fUWa6dKJYAHLv%2FLPYIE5Is%2F674mnVysSExpfFDQSk4V%2BBOqdwHJfKNPDEJX67fPZkfVlBx7dudCGO%2FTsbQScs9E%2BS7F7L2HnBR1dD6xYnBDrRD0T8BTELQ7woRz84%2BM%2FQloBbnX%2FiMSqYa6WAunppqlQUuKRD%2BMayfmrUwKqi%2B52VLGosVRpreakGSO7MJ%2BMyMkGOqUB%2Fuwi5hgbHmq7MFHvZxPsIk1NOAF2ruqXxmVS%2BFl4j103GfpDzfOVNqk9H8%2F3xUS1TsT5ff6LWlETTOahzssgCcYSpXZBjo69mcmPM5QW4bIfTvsMNfGkLMXqn1iH%2BYxqE3WGbYv7Uaazf5VBKFtLVT6jf%2FG0evCWPD0%2Fc2kmP7NkxDInYPmM5oi91POJrDkyUlBr8%2BHwhpn7UZuHg6MfUBJriZhb&X-Amz-Signature=9fc2940b83f5b918608c71b39900e36111326257dbec632056202983ab90954d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

