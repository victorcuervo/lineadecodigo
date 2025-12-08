---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4EJOG4W%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T144438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQRG2LNfv%2BrJR%2F1gmqGL4%2Bs%2BBiSLiqazmThIbJZV%2FVBAiAE19igSRfh2S7E0rsYmUq64eFw0UB4W1DYHjFf%2FwPsuiqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPDC8jzz%2BoCzI3Cv0KtwDn8CdTXkuijlFPuEt%2FakqE0yiUA1vgwzNzQ21mhruHxDfmFOmV6QBrSmaF%2BFqZVR1yQGVYWsbkp7zc4Qe2Tw1m8T6%2BWnGr4C0blHFjZeEE5hpsh0vWgVEYxHp7ZhQZzGLDFOrsRdeWQnS80scJV2qwdFEnBvRGd867PSX%2FEk2SgRvQ3v70ixn5rERgcTuUVuPhE%2FfmUJlvFS0sQPhwIJsA%2FKu%2BepjDIQxLaglndtuxboZY9VaB7sLTlOg58cpOaFIi%2BlWkRSl80VtdQM%2B0JkCH%2BPy4XagCa3x01nSo%2Bn1xCMBiqw5OQkcEGzU3ixw9gztgbzY1b0CMIV2qynLDHRxX8M8vYla%2BwTanoMSroh9bez6eziMnBP5QqL5JiewIx0O%2Ft%2ByOrUvVcImmeZOehhxq5oGrJSNZpx4f4biADtd5mvOOgdRJFr2e%2BK1j%2FQaNeHFTBUfoNuOralPjnK67N%2FActynVPuYmiI9uLtiwSMkSgriWw2SO2kiAFzhmZaiQrzrioU8bZdCYJXq5b7NHv4bOngc1ruGBKv4dhxJqcNSKifCJOZsrlGBB49X8ptVeY0w4qkbuzK%2FbzdzDu99SZIbZDBDkERN%2BgihN%2FdewytlCqjLBbTIH6oj1XvB4lEwq8HbyQY6pgHVGH1rIpzlHRXjwPeZF3NulIsC1D3WiAz8HTIP4UruqKbg70p8%2FSJu01oFAfX7LsLo6VLEL%2FRPuINf3i9iVYZEx8Q454yvSKt%2BroG9YLKZvKLo7NfAHWsGR2i4wty1vwQOqfBBvaZLE82RNIfJit961Rq%2B9GACzfjxQeEBspkxHD6D4giOV9H%2B%2FZLdbDSTO9hMNn4bbLvBmBvSppZj1ef3WrpwNW0r&X-Amz-Signature=7b2359792c91f4bd4703af86554671edb7eda516e83e52ebc3197febb867968d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4EJOG4W%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T144438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQRG2LNfv%2BrJR%2F1gmqGL4%2Bs%2BBiSLiqazmThIbJZV%2FVBAiAE19igSRfh2S7E0rsYmUq64eFw0UB4W1DYHjFf%2FwPsuiqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPDC8jzz%2BoCzI3Cv0KtwDn8CdTXkuijlFPuEt%2FakqE0yiUA1vgwzNzQ21mhruHxDfmFOmV6QBrSmaF%2BFqZVR1yQGVYWsbkp7zc4Qe2Tw1m8T6%2BWnGr4C0blHFjZeEE5hpsh0vWgVEYxHp7ZhQZzGLDFOrsRdeWQnS80scJV2qwdFEnBvRGd867PSX%2FEk2SgRvQ3v70ixn5rERgcTuUVuPhE%2FfmUJlvFS0sQPhwIJsA%2FKu%2BepjDIQxLaglndtuxboZY9VaB7sLTlOg58cpOaFIi%2BlWkRSl80VtdQM%2B0JkCH%2BPy4XagCa3x01nSo%2Bn1xCMBiqw5OQkcEGzU3ixw9gztgbzY1b0CMIV2qynLDHRxX8M8vYla%2BwTanoMSroh9bez6eziMnBP5QqL5JiewIx0O%2Ft%2ByOrUvVcImmeZOehhxq5oGrJSNZpx4f4biADtd5mvOOgdRJFr2e%2BK1j%2FQaNeHFTBUfoNuOralPjnK67N%2FActynVPuYmiI9uLtiwSMkSgriWw2SO2kiAFzhmZaiQrzrioU8bZdCYJXq5b7NHv4bOngc1ruGBKv4dhxJqcNSKifCJOZsrlGBB49X8ptVeY0w4qkbuzK%2FbzdzDu99SZIbZDBDkERN%2BgihN%2FdewytlCqjLBbTIH6oj1XvB4lEwq8HbyQY6pgHVGH1rIpzlHRXjwPeZF3NulIsC1D3WiAz8HTIP4UruqKbg70p8%2FSJu01oFAfX7LsLo6VLEL%2FRPuINf3i9iVYZEx8Q454yvSKt%2BroG9YLKZvKLo7NfAHWsGR2i4wty1vwQOqfBBvaZLE82RNIfJit961Rq%2B9GACzfjxQeEBspkxHD6D4giOV9H%2B%2FZLdbDSTO9hMNn4bbLvBmBvSppZj1ef3WrpwNW0r&X-Amz-Signature=0a143cac9bcd6b545102eb1de0f2e1798105aa3fb64a487c79b5c66afe261912&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

