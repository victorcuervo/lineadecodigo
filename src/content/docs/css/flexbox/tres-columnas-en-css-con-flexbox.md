---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNAO6NKS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T055816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAIwznq%2BTSDfGJt11pe%2FOqNBhdf%2F0t8SDOpyLjs4HfYAiEA%2Bb1l072g3Yhu4BisGvKkt%2BBYzHjx0CMDg%2FeQXstbEXkq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOvyfmZoV3Cjib%2BmXSrcAyYdH35yLbPe7FOXDjnlQZgvtgd5quWexWW%2BHFZn5NfLfr8zaY%2BnoEgc2JCF1dRMg2cTDT1iNKrUx9Ak0EjMJ8nGfAA9vMfoWY1R227nKMMSq5BW8dvQPSqKDhqUgeNpOQ3jLPYSJzqhfUkU1uUIG4Ixw5WFz%2FuAlQ%2FhfH3BhJ7ws9iL1r9t2tzAIPpS9ESDIJJXxnCsR1L6ZMo21KZelPU6xSm2%2FgBRLtm8U0kk7jUOkP1aECU5KFt5TNaswIl17LySYle9hHxnMgqlkAOAMOm36xTMVz2RL%2FCl3bxX9vuCnDXwEPulqzdC%2FbAuLqZqW3U0nbXU2xBKQG98Coc53kKUQhjUHOk6GQlYByWgsx9O0kRRtQNUnH6%2B7pbKdjPwaD6Zd07raQW%2Fy0ldViJL5VMsfuchB2SW6xWty6pubtN%2F0fSFkTVLnTuv2orwsrYk51%2BTL1wlzP3gDDSz94JyZl39Lt%2BijrCCkW0q%2Fk6gLa%2B1A5NNG0fGjZ70u5ZxgJMznDjckJCWOP%2Fie50aH7XogeJxz3bQBKOQ9Tg3LNmsPPUq0HoMWPRbBH8sOIjMnNiguIPjjROsmy5BDXYL84l%2FJ5PYn4aXeqobiGURC9mHXUVG77Jgv0mKqJPnXXeDMJ79zskGOqUBzc5hOilMyOn5jRtqh3oEjK4GZR%2Bp26B%2BT18TURTIkot%2BpBJogGZmnxWGIHlY%2Buv1D4g6R8RojIMtxqIOpl6B17NVdNwQRzxyfWpPKtinFaXnVR7oOA7kfnBnuSq%2FiAJiTJkIIhyL5UsOFlotG7Io%2BePtF4XEORs2DOBG6Nv1pXCO7O09dCp4BwkqzBoL0WAv1TsfFXUuFpq9%2BAFDImgVDggYqcRJ&X-Amz-Signature=221bf97cf4bdf83a1bb618a566d9d04f7aa5e94df05c2421295c4f75c11af0b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNAO6NKS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T055816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAIwznq%2BTSDfGJt11pe%2FOqNBhdf%2F0t8SDOpyLjs4HfYAiEA%2Bb1l072g3Yhu4BisGvKkt%2BBYzHjx0CMDg%2FeQXstbEXkq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOvyfmZoV3Cjib%2BmXSrcAyYdH35yLbPe7FOXDjnlQZgvtgd5quWexWW%2BHFZn5NfLfr8zaY%2BnoEgc2JCF1dRMg2cTDT1iNKrUx9Ak0EjMJ8nGfAA9vMfoWY1R227nKMMSq5BW8dvQPSqKDhqUgeNpOQ3jLPYSJzqhfUkU1uUIG4Ixw5WFz%2FuAlQ%2FhfH3BhJ7ws9iL1r9t2tzAIPpS9ESDIJJXxnCsR1L6ZMo21KZelPU6xSm2%2FgBRLtm8U0kk7jUOkP1aECU5KFt5TNaswIl17LySYle9hHxnMgqlkAOAMOm36xTMVz2RL%2FCl3bxX9vuCnDXwEPulqzdC%2FbAuLqZqW3U0nbXU2xBKQG98Coc53kKUQhjUHOk6GQlYByWgsx9O0kRRtQNUnH6%2B7pbKdjPwaD6Zd07raQW%2Fy0ldViJL5VMsfuchB2SW6xWty6pubtN%2F0fSFkTVLnTuv2orwsrYk51%2BTL1wlzP3gDDSz94JyZl39Lt%2BijrCCkW0q%2Fk6gLa%2B1A5NNG0fGjZ70u5ZxgJMznDjckJCWOP%2Fie50aH7XogeJxz3bQBKOQ9Tg3LNmsPPUq0HoMWPRbBH8sOIjMnNiguIPjjROsmy5BDXYL84l%2FJ5PYn4aXeqobiGURC9mHXUVG77Jgv0mKqJPnXXeDMJ79zskGOqUBzc5hOilMyOn5jRtqh3oEjK4GZR%2Bp26B%2BT18TURTIkot%2BpBJogGZmnxWGIHlY%2Buv1D4g6R8RojIMtxqIOpl6B17NVdNwQRzxyfWpPKtinFaXnVR7oOA7kfnBnuSq%2FiAJiTJkIIhyL5UsOFlotG7Io%2BePtF4XEORs2DOBG6Nv1pXCO7O09dCp4BwkqzBoL0WAv1TsfFXUuFpq9%2BAFDImgVDggYqcRJ&X-Amz-Signature=197b9fb0c84ac672b32caa0c6627159430868ec10fc65aca6de885a98666f9e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

