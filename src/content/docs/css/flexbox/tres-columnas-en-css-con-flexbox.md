---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN2DTVYX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T115330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAL82uBcduLgVUn%2B15j40733l0JmooBYl9w3nBBQYZymAiABD20lFPNIEbknDSHJ0pe1NDb1o7FyWymk0lUinXN1fiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMDvTBrDx5rv7ARBpKtwDD9vqYjpliy%2FrNCMMCJUFC6s4VKN9qbJCnJnZxXUekmMi78QhrBAKhssy6%2BseM5k85yrXPIgwqH2DFNXz6bcj3bmknoJARGV5JFLbFsOOVRbN0W%2FA49fx6cRZvEwEX0rgJJ%2BIvZ1%2BTrfIXpVk3oje0kEMsk0UwSzRSpR6ZUKB%2Ft%2FWBRLky59Qs%2Fk%2FUqPBSUVj5rdNUGTYxjzuMrHDQD%2FRpiLEHuqt1j5MS6dy2VwPHwGbRlXsezLeN3YOgc2xLgWeBYmswz%2BDG%2FVGBchaxBrFoFQb%2FP%2B05nMkv%2BFFfqRyJB4XtzDAISGjHQcZmSScrJe9dbMvUgpt3L%2BgzKxbBavKv6gCsEc%2FH%2FazmUQGH1I090C%2FXBoIB95fLWJE7xj%2FUljmqmTgZhhdyoUyezUPSlxLpV%2BensnXpqhJUD15KHSZxsbOX5zMoKQCVZcMbzB5Si4Bq8YkJlu2fDJ6ZhWcycdRpz%2F6AfLVSRMyTwNKgKEhMuvZeuaQ%2F2OTWofEakF2tKKeUIkcJtuRlaSvK%2Fj%2B0zGaJ1DaNq%2BSZ9frG%2Fr9fFDJ5VTlDQgChE07DKEDsCnqRk1Dz2RFDytm135DSsSJ7wVfZaklRftACVXVg3r2p2JGPlS2ZsIu44xeuo6tg7gw8PLayQY6pgGRSVrlZVOphnNT6lSbcioqwgdx0%2BSonnaJBNyo53YLtDpdsyKSdiWRCMN1u69zMnOLUaz7vLU4Qfc%2Bm9YS%2B9XN9NMX1aXiW5rQjhVnMQw4zuyE%2FmmXTrD31sTldmLzwtQlpb091OdQuoKfIeXWwgss0YmJFLoXtNN0jDtxQm45MB8W%2FrO%2BtEYK4zs%2Bq56PxLd0fFTZ%2BUYoexd3mwjZ%2Ff%2BCWOnkVn7e&X-Amz-Signature=bd801beea81aec8fd2255b404e39eb032a46f02434722ceaf17005a08dbbaf51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN2DTVYX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T115330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAL82uBcduLgVUn%2B15j40733l0JmooBYl9w3nBBQYZymAiABD20lFPNIEbknDSHJ0pe1NDb1o7FyWymk0lUinXN1fiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMDvTBrDx5rv7ARBpKtwDD9vqYjpliy%2FrNCMMCJUFC6s4VKN9qbJCnJnZxXUekmMi78QhrBAKhssy6%2BseM5k85yrXPIgwqH2DFNXz6bcj3bmknoJARGV5JFLbFsOOVRbN0W%2FA49fx6cRZvEwEX0rgJJ%2BIvZ1%2BTrfIXpVk3oje0kEMsk0UwSzRSpR6ZUKB%2Ft%2FWBRLky59Qs%2Fk%2FUqPBSUVj5rdNUGTYxjzuMrHDQD%2FRpiLEHuqt1j5MS6dy2VwPHwGbRlXsezLeN3YOgc2xLgWeBYmswz%2BDG%2FVGBchaxBrFoFQb%2FP%2B05nMkv%2BFFfqRyJB4XtzDAISGjHQcZmSScrJe9dbMvUgpt3L%2BgzKxbBavKv6gCsEc%2FH%2FazmUQGH1I090C%2FXBoIB95fLWJE7xj%2FUljmqmTgZhhdyoUyezUPSlxLpV%2BensnXpqhJUD15KHSZxsbOX5zMoKQCVZcMbzB5Si4Bq8YkJlu2fDJ6ZhWcycdRpz%2F6AfLVSRMyTwNKgKEhMuvZeuaQ%2F2OTWofEakF2tKKeUIkcJtuRlaSvK%2Fj%2B0zGaJ1DaNq%2BSZ9frG%2Fr9fFDJ5VTlDQgChE07DKEDsCnqRk1Dz2RFDytm135DSsSJ7wVfZaklRftACVXVg3r2p2JGPlS2ZsIu44xeuo6tg7gw8PLayQY6pgGRSVrlZVOphnNT6lSbcioqwgdx0%2BSonnaJBNyo53YLtDpdsyKSdiWRCMN1u69zMnOLUaz7vLU4Qfc%2Bm9YS%2B9XN9NMX1aXiW5rQjhVnMQw4zuyE%2FmmXTrD31sTldmLzwtQlpb091OdQuoKfIeXWwgss0YmJFLoXtNN0jDtxQm45MB8W%2FrO%2BtEYK4zs%2Bq56PxLd0fFTZ%2BUYoexd3mwjZ%2Ff%2BCWOnkVn7e&X-Amz-Signature=9240a5be3f26bdefaa55252655021af63a502ee879033ef80d73960cc0ab41fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

