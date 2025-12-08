---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQZFQ7EG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T174413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJVIDAQko34B7T9Ysu5obMsoe2%2FUjV2X64MFW9fHFIHwIgIsFOIO0jltlTwq6A3vTbxa1fg8Q4va3IBMN3%2B44OvHgqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJEZb1Cabgdy7%2BU30CrcAwXXaBbJeE0VpImeow2wOy7UeoKckdpyi%2FWILJP7f5bJ8QZ%2BJJB4pWIvg8igV2%2FfitgwWS%2B1i6%2FpNdNrSbNUas%2BqAookpt5iGGYDqLOWUGZpRo%2BblPKEa%2B9hNGSABaiCDa9y1wrlu4W3NF0z2mfb4PHVW%2FE4N3qrfV8Q%2BTBe5%2FVzV5N1AthJre0sxZ%2B%2FH%2Bgz5uLd6HI7h1Dm7F7sRdamKjCBNG8rj9hS329W1LZifcOPohdcf%2BSs5pZFXgxBGw%2Fwmmk8nhso58%2Bb49vA%2FSSBIBDaRF2xTsUL%2BykjitAtJnj3VRuyCmQ1113gyHWU442UCgpg9j6VZKbOdAb7RHxt52bhSLHYoBvQUO4%2BFAN3KfQDD%2FaEC%2BYDlnQ9uLr7UwZWgEpshBka1vCtESj4FrIuiSYO9HDcKxTBcTHavWBeHMdxkbNQXBmnQ55KVxibqSNDDTIckz62rOdvGZGEVpW8Qrr%2F54HjlUV%2BmconwIlWxSd85oO8xInXop80E2Iz%2FDv1kz53QlazK8AMLIyBH76aB%2FXBTaa%2B8NahY8TMaS%2Frri2Q6MtxuhqldC2DDdbbFAB1YjZqmZuLPVZtHY4P31j5rOerpQAHhsM0mmeLLLdN5%2Bmm%2BrVIeXeEBc3v32CVMLaH3MkGOqUBZDajDfGx3uFBMzOQZ9F8xK%2BVbD0h5yOeSes2d%2F2%2FN2vlovM9HUHtBK%2Bkt6s8lGedu2JtQh%2Fd%2Fst2GOnCh9Kh08J3XKf1QVQuKRtTlrM78ThofYpHyZjhP8V454ekt3MhyrUKaca3wwbnSbcBujdmXSPnLupoHD1gJ7rgaTX7RBjqAtebA1gPTEIeQO8lkKwBGKiZiPlMQ4hQZET2aNel3KC%2FVohM&X-Amz-Signature=48e99c52b9bacfe556b3c88da40de55b7ec060b4687bad001e8dd582375e6620&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQZFQ7EG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T174413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJVIDAQko34B7T9Ysu5obMsoe2%2FUjV2X64MFW9fHFIHwIgIsFOIO0jltlTwq6A3vTbxa1fg8Q4va3IBMN3%2B44OvHgqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJEZb1Cabgdy7%2BU30CrcAwXXaBbJeE0VpImeow2wOy7UeoKckdpyi%2FWILJP7f5bJ8QZ%2BJJB4pWIvg8igV2%2FfitgwWS%2B1i6%2FpNdNrSbNUas%2BqAookpt5iGGYDqLOWUGZpRo%2BblPKEa%2B9hNGSABaiCDa9y1wrlu4W3NF0z2mfb4PHVW%2FE4N3qrfV8Q%2BTBe5%2FVzV5N1AthJre0sxZ%2B%2FH%2Bgz5uLd6HI7h1Dm7F7sRdamKjCBNG8rj9hS329W1LZifcOPohdcf%2BSs5pZFXgxBGw%2Fwmmk8nhso58%2Bb49vA%2FSSBIBDaRF2xTsUL%2BykjitAtJnj3VRuyCmQ1113gyHWU442UCgpg9j6VZKbOdAb7RHxt52bhSLHYoBvQUO4%2BFAN3KfQDD%2FaEC%2BYDlnQ9uLr7UwZWgEpshBka1vCtESj4FrIuiSYO9HDcKxTBcTHavWBeHMdxkbNQXBmnQ55KVxibqSNDDTIckz62rOdvGZGEVpW8Qrr%2F54HjlUV%2BmconwIlWxSd85oO8xInXop80E2Iz%2FDv1kz53QlazK8AMLIyBH76aB%2FXBTaa%2B8NahY8TMaS%2Frri2Q6MtxuhqldC2DDdbbFAB1YjZqmZuLPVZtHY4P31j5rOerpQAHhsM0mmeLLLdN5%2Bmm%2BrVIeXeEBc3v32CVMLaH3MkGOqUBZDajDfGx3uFBMzOQZ9F8xK%2BVbD0h5yOeSes2d%2F2%2FN2vlovM9HUHtBK%2Bkt6s8lGedu2JtQh%2Fd%2Fst2GOnCh9Kh08J3XKf1QVQuKRtTlrM78ThofYpHyZjhP8V454ekt3MhyrUKaca3wwbnSbcBujdmXSPnLupoHD1gJ7rgaTX7RBjqAtebA1gPTEIeQO8lkKwBGKiZiPlMQ4hQZET2aNel3KC%2FVohM&X-Amz-Signature=c700e897c5300f791b6ef1ada3e1342fd197c7db656030812dfd8eba21a79a1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

