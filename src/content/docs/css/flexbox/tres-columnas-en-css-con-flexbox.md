---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642LMKYWW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T091541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHZ8U2ejsYoNdWgYNHiTYbUe68zj%2BPCDC4MpdazyrfTQIgZxLwiAndJ3pDe%2FbeP69QVHmf%2FrgtqiFR%2B0iGIINOaKQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIPtRcQkiMfTY%2B7SOCrcA%2Fr0VKMJDGzZL%2BdMrzj3aNY0isGDEzwushdSOWxLfsoL8rzalUB6QyOxWWvwVHlYTQPfpvRoLWyERSIHlMv47UuH0m1X%2B%2FKiVK2mIqTaIRgh%2Bvar8ELhrj65V3mJpNVzwRR8kO0N1I7ztqCoDOnL77HPwgbazaSnzq3zCGv6UnedKIMRTXOy%2BrMbeZm6f8zbTnDFSRF0s7rHyzgfQSLvoLS%2FQvceWeVc%2B5MCTtcvUiBILGb6nUddFZr9BFIPEqfgIXv2YixkiRoOF2jynZsPSBPs3C1sOEuAP0De3MDOm1fQOYp7ngZLVb8F6GaEbzNp8eru5u81baXiy6cbVEuxprs%2FUHkyzmSKWyNYGIsk3Wc0H9fC7ULxrFocvafDKjK81NM5HWfMroNPslvCCZ7rhTNzb%2F95dLVU3LKpHHw%2BoKkexztREP%2BLsWtmMcs9UT7Kwn8NIZcr59egqY1%2BR0%2BQzYTwPE30BN7Lvx8S%2FNhDBynVQ61mfi1mKPFNFyRIMCSTR%2F8i2C%2B9L0dsR1IPAM5xa2JuaJgYpZVCVjYUIbfiyWg0NhodV0Cxz9XmO2kZD4NYeBRFvXJKt3zRhLFxmwwKyKey1sy3mkzOZ2mHxWNGASo3Uh35r0Scld7%2Be9QTMLy8z8kGOqUBmYB5XQOA3S6VpkEYCW4Nt0uVuvSOj5%2FLjkdbBgJEEZtrZzJFEZiXvZHb035OwUeG0LnoCz8FjHEDVPiIzq2Mfxyyksvcx0bkke85hm1dKMLmRv2Mb2GpVid8mziPMJNJtOT12J2e0ZJFMXapV%2FcEeEiVPu0rUlxuuaQ0FB1ieqB90qMTzGyUgZkf3Ea9B4NkwQrjR1%2FICsImvzAy2v7g6SmMua7w&X-Amz-Signature=c373a278f9db4851ceda7ee0d7f94a426f0356d737a1ba192c720da9a3c1613e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642LMKYWW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T091541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHZ8U2ejsYoNdWgYNHiTYbUe68zj%2BPCDC4MpdazyrfTQIgZxLwiAndJ3pDe%2FbeP69QVHmf%2FrgtqiFR%2B0iGIINOaKQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIPtRcQkiMfTY%2B7SOCrcA%2Fr0VKMJDGzZL%2BdMrzj3aNY0isGDEzwushdSOWxLfsoL8rzalUB6QyOxWWvwVHlYTQPfpvRoLWyERSIHlMv47UuH0m1X%2B%2FKiVK2mIqTaIRgh%2Bvar8ELhrj65V3mJpNVzwRR8kO0N1I7ztqCoDOnL77HPwgbazaSnzq3zCGv6UnedKIMRTXOy%2BrMbeZm6f8zbTnDFSRF0s7rHyzgfQSLvoLS%2FQvceWeVc%2B5MCTtcvUiBILGb6nUddFZr9BFIPEqfgIXv2YixkiRoOF2jynZsPSBPs3C1sOEuAP0De3MDOm1fQOYp7ngZLVb8F6GaEbzNp8eru5u81baXiy6cbVEuxprs%2FUHkyzmSKWyNYGIsk3Wc0H9fC7ULxrFocvafDKjK81NM5HWfMroNPslvCCZ7rhTNzb%2F95dLVU3LKpHHw%2BoKkexztREP%2BLsWtmMcs9UT7Kwn8NIZcr59egqY1%2BR0%2BQzYTwPE30BN7Lvx8S%2FNhDBynVQ61mfi1mKPFNFyRIMCSTR%2F8i2C%2B9L0dsR1IPAM5xa2JuaJgYpZVCVjYUIbfiyWg0NhodV0Cxz9XmO2kZD4NYeBRFvXJKt3zRhLFxmwwKyKey1sy3mkzOZ2mHxWNGASo3Uh35r0Scld7%2Be9QTMLy8z8kGOqUBmYB5XQOA3S6VpkEYCW4Nt0uVuvSOj5%2FLjkdbBgJEEZtrZzJFEZiXvZHb035OwUeG0LnoCz8FjHEDVPiIzq2Mfxyyksvcx0bkke85hm1dKMLmRv2Mb2GpVid8mziPMJNJtOT12J2e0ZJFMXapV%2FcEeEiVPu0rUlxuuaQ0FB1ieqB90qMTzGyUgZkf3Ea9B4NkwQrjR1%2FICsImvzAy2v7g6SmMua7w&X-Amz-Signature=2bf02dbfedc4e2ba7548130c790cde7095457580c2deb4f8a61504dca678c9a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

