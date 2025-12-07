---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHXKXN6M%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T225621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2mIF5HFmplqprVkB3CDtY9DKhpTFHS5q%2FFmGKRo7E0wIgNNfCO7fsBcMUZ%2BpSbUQHxYgV2lZLa5EMqlMXtn4ZeTEqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLrTw%2Bo2xML2DM%2BXSrcA1lYpKbu%2FCkcR1jr9QDCMGYIDxBLVDvCuDGr%2BHEJS8iI6KKgG6RVe86um3ieIfeffSqz7ML%2Fv5OK10UMz0MQpbfrCkMOC12zgnR961RtGlWyFYorNz%2FAFsg7SMYMSQu54%2BH2Br%2FbRkx1gzEuEgZU4RNDGzoMtCzOzx6RSO%2B%2FFpOyxs6MC0jVgyuEnIfr2WZm4ahFTZWvqtdadz2HPddpZTXZGuHNMztCfEpuJknZcBXFm2bIAXmiiLCLcKnLL0przu27u1T63fP84PAC%2Fle3Hpg3T0Gx3RqU0v%2BjK4JdOrpUGFN90BmdccCsz8KMLvXg8vqNZ5Iop7oltFfiXKJ29FIHLReVG0QJU83HeVIy9LQMpg42Fw0apNdy34MKUvERFzci%2Bt2hogk1zhsI1sCeUN4Noq9%2BgEnkKn7%2Bk9%2B%2BbwadWUXlA3JGeTTDXkjhKCA5fy3dmGMeTWPE7LqfCOxW5yspxSjssf76bDfBbvl3EZZiR2TtVqyRqAFr%2Bs2Ykd%2B43zRF%2F59W5Se7g7f6Ho55RkS9E357fT9268PwBFGkjQNFtAP1xYHuvljMaCXNkmGKDsj6%2BKO%2F2TRohZ2gRgLT33emoknobkLteSovdx29sYpILfQg8h0LUUeqWcufMO%2BE2MkGOqUBAMdlAIxBG0lJvMAoh0i8WEXaeioSeD44i%2BSqHwXmnoYjkFI8tJUdbtqk6Tkt1W0ZV876z2vEp0E4qbxrodK9e2eMQwFEfy9oS0FSIgovCvok89kw6hQITDM3pLFuw0qS6tygOGOA60iTIFzRDrpTBMFsj8IHpSAnhu7oZgvLDpgsxFsaLy%2FCtROfGIqjp2UWzhAW1G%2B5Hckcsa63D1B14zI2h7Q0&X-Amz-Signature=9d705ded78990bd15535ea0cb7e91a103631f23b976532c24928dd4a29765ff6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHXKXN6M%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T225621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2mIF5HFmplqprVkB3CDtY9DKhpTFHS5q%2FFmGKRo7E0wIgNNfCO7fsBcMUZ%2BpSbUQHxYgV2lZLa5EMqlMXtn4ZeTEqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLrTw%2Bo2xML2DM%2BXSrcA1lYpKbu%2FCkcR1jr9QDCMGYIDxBLVDvCuDGr%2BHEJS8iI6KKgG6RVe86um3ieIfeffSqz7ML%2Fv5OK10UMz0MQpbfrCkMOC12zgnR961RtGlWyFYorNz%2FAFsg7SMYMSQu54%2BH2Br%2FbRkx1gzEuEgZU4RNDGzoMtCzOzx6RSO%2B%2FFpOyxs6MC0jVgyuEnIfr2WZm4ahFTZWvqtdadz2HPddpZTXZGuHNMztCfEpuJknZcBXFm2bIAXmiiLCLcKnLL0przu27u1T63fP84PAC%2Fle3Hpg3T0Gx3RqU0v%2BjK4JdOrpUGFN90BmdccCsz8KMLvXg8vqNZ5Iop7oltFfiXKJ29FIHLReVG0QJU83HeVIy9LQMpg42Fw0apNdy34MKUvERFzci%2Bt2hogk1zhsI1sCeUN4Noq9%2BgEnkKn7%2Bk9%2B%2BbwadWUXlA3JGeTTDXkjhKCA5fy3dmGMeTWPE7LqfCOxW5yspxSjssf76bDfBbvl3EZZiR2TtVqyRqAFr%2Bs2Ykd%2B43zRF%2F59W5Se7g7f6Ho55RkS9E357fT9268PwBFGkjQNFtAP1xYHuvljMaCXNkmGKDsj6%2BKO%2F2TRohZ2gRgLT33emoknobkLteSovdx29sYpILfQg8h0LUUeqWcufMO%2BE2MkGOqUBAMdlAIxBG0lJvMAoh0i8WEXaeioSeD44i%2BSqHwXmnoYjkFI8tJUdbtqk6Tkt1W0ZV876z2vEp0E4qbxrodK9e2eMQwFEfy9oS0FSIgovCvok89kw6hQITDM3pLFuw0qS6tygOGOA60iTIFzRDrpTBMFsj8IHpSAnhu7oZgvLDpgsxFsaLy%2FCtROfGIqjp2UWzhAW1G%2B5Hckcsa63D1B14zI2h7Q0&X-Amz-Signature=9269289077784c8f4cd456e8914f768bd1dbfd23647711277f66b6fa77371350&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

