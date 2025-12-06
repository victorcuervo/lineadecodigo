---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IJT3MTQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T192923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUR6szbObIjO16r%2FMZ8MOyJEDY2iXhoSKueHDjgLikbgIgX7uOPWIzRi5W28svDML7zzvzZtDcTuPoNZ5lAIWvAsMq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGHMtmsGlOXEMbzylyrcA7XYrO20pWkWO9BVl1sk%2BQpD2A8GeSYOhggvpso5dERvXqwTEJ6tydekL1eN0%2BjGXluGkjrFmVZa6kxAjKvLfy50hwqiNRo2lbwpqfHdEgz7UEygZAgX5J8X3OSMwwZH9sTxu1t5MPS47v9e%2B7o76s%2BVgof%2BPMjY6jwhjdfe4KpDN4T8NH3R5NGR45ArykAu9H49IokvB8VkdZQ1IK2%2FDhr2pBrc2vA1W8AI7CQ1EVBPGMz4UAHUi7k8MfK2jZaIn0bHDwL%2Fyl7TEMuHQegpZhLmGCj18rGr4b52EUcgPBzPiTjxjrRk6xybPuADJ2IAMNBLRcfk5CXlee49Wwr8x78rcc2G6fTwgbA6kyxxFA4HzvWRX7h9rcZ4ba45mGYasKrv8bnW4ucgUydo8%2F2GRxKw%2F1C00ni7f7qGqQfEUWL%2BCVS8FPAVzuffP1y1kMVZJ%2ByqJ3HZe6kSldp%2Fw0d1GcGBgZ0g6Bwpw%2BNRKSN6kAKPL0GMFLMQHMKtAP%2F9eBarFBm5o19h4DUv2jsKiCHwlwzySBAPgPSFS17ZDPpDR9I9WMltv0O0mowJ703%2F4nddG3WZKVAOMNAqXPseWmrMo8pTQ%2Faznm4luCsCeNLzmTdQgbZm3VWOIzm4hPE%2BMN%2FD0ckGOqUBBxZt74a8c%2FCFdV6pLJxSaeLInIvSJbTqfkmlc%2B7GIPKE6L4AYHPi2yRpQXLhr9Ph7cs4iZl02XRwBbMBpp1XEsx6cw%2FxOxEBqUsNDsjzYnpCAfipkIBCPixspwwftTNpG%2FrvLWNt%2BF0zYr2Zp8LnlGhPUgDxJSUaqytm1Qj82QhvNtQE4vdJIcfLdlFFFMasUC2K4%2F4wmCYtul6MeRijIJsVWdiY&X-Amz-Signature=b1d83387f84b10b0361c0f8f76ed1e9bf27640f3ee0c81748e4e085a5900a225&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IJT3MTQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T192923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUR6szbObIjO16r%2FMZ8MOyJEDY2iXhoSKueHDjgLikbgIgX7uOPWIzRi5W28svDML7zzvzZtDcTuPoNZ5lAIWvAsMq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGHMtmsGlOXEMbzylyrcA7XYrO20pWkWO9BVl1sk%2BQpD2A8GeSYOhggvpso5dERvXqwTEJ6tydekL1eN0%2BjGXluGkjrFmVZa6kxAjKvLfy50hwqiNRo2lbwpqfHdEgz7UEygZAgX5J8X3OSMwwZH9sTxu1t5MPS47v9e%2B7o76s%2BVgof%2BPMjY6jwhjdfe4KpDN4T8NH3R5NGR45ArykAu9H49IokvB8VkdZQ1IK2%2FDhr2pBrc2vA1W8AI7CQ1EVBPGMz4UAHUi7k8MfK2jZaIn0bHDwL%2Fyl7TEMuHQegpZhLmGCj18rGr4b52EUcgPBzPiTjxjrRk6xybPuADJ2IAMNBLRcfk5CXlee49Wwr8x78rcc2G6fTwgbA6kyxxFA4HzvWRX7h9rcZ4ba45mGYasKrv8bnW4ucgUydo8%2F2GRxKw%2F1C00ni7f7qGqQfEUWL%2BCVS8FPAVzuffP1y1kMVZJ%2ByqJ3HZe6kSldp%2Fw0d1GcGBgZ0g6Bwpw%2BNRKSN6kAKPL0GMFLMQHMKtAP%2F9eBarFBm5o19h4DUv2jsKiCHwlwzySBAPgPSFS17ZDPpDR9I9WMltv0O0mowJ703%2F4nddG3WZKVAOMNAqXPseWmrMo8pTQ%2Faznm4luCsCeNLzmTdQgbZm3VWOIzm4hPE%2BMN%2FD0ckGOqUBBxZt74a8c%2FCFdV6pLJxSaeLInIvSJbTqfkmlc%2B7GIPKE6L4AYHPi2yRpQXLhr9Ph7cs4iZl02XRwBbMBpp1XEsx6cw%2FxOxEBqUsNDsjzYnpCAfipkIBCPixspwwftTNpG%2FrvLWNt%2BF0zYr2Zp8LnlGhPUgDxJSUaqytm1Qj82QhvNtQE4vdJIcfLdlFFFMasUC2K4%2F4wmCYtul6MeRijIJsVWdiY&X-Amz-Signature=7723027b6868a4dcf2313d9fe56d2ee4939bdff7de8c2f5042293239055f4f3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

