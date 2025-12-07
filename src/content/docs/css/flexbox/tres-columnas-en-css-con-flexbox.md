---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIRGWZF4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T035009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICxmu9JuCxqB7VJlHWL0afusEHntjAP5HCBkyed4YgD4AiEAwbfVjUgA9Ut6rnGjKEMKJpXZlYgkAm2VOePgjwJgELwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsZlU1%2BpJsoe0Q6FSrcA9dYjevWsCUwXern5Up8%2Bbq%2FL7TgWfhSj5kMgEFYe2LupbRDTLlQThqLmVY%2FjAl0xjXb5vCScDdt7SgNdJKpUM2WhQMppFNQbQYPtsN4gAebWUTz4XJptxVk8vIbvoqJdeByNbedgC8nAkstlrafwapeNcvnLkfGRQa9DwEIRRNk52BRqsS4Q%2BQsSagtlHoUYIBCaA0CLUrnhvScRhggY4h3ouV%2F%2FIKspR%2FXnRwHZ0wgdOfVv7meNfb4KI7VWeOfRtrWEQnLHuS8Y2NT4Pue44D9StgZWN0Z9HztIEI2d0ljirhM8FVci%2BidR%2FTFCra2VpSwsjR8BgM76T1UUJdPRVrvCXFBrwHa8U6ARTgTE7R%2BSTdYwPBh9oGq%2FcOf2y9l%2FmfBVEglGuRwRZPXTKBWJPNvx5XxX6%2F1tOKvf5ar6zaUbW4MJl69juCQJwop1x1C5NGToxxWxLU5nkNTsl656KjDlgsala93iMNRSvctftqgbpC0QPtzApCO5awVrvl%2BhsQbP4pDLvFdmh6L7AssyKn2yFT%2FHRhSQBj01JXGH%2BsseR%2Fve59asiSPJeMEXTmv5KvmB1ZsFhsKZkJzg3b0UyETaLP6z0WF8bD%2F9VjsvF333KDEjK5ZntvKKDEsMPL90skGOqUBDA1Ak4yt5VJTcdYviAGgTviZcdO%2FN70%2BA9dBFOo1jMAQs8HbCUpAIP6tDCEoVgdXirEq0ZEzOCiY0uytTgLDEBzudBUc4tsJXhAGySqokElcWk0ZueGzxafPHC0eRVGsWTFUAyb7b1bfpwMzbkapcbVR98oTv3%2BPBaql1KgfI3kyZadjZN%2FD8WfU3w1UdXAAvONBLKfXOtxto7uR007M7%2FkrIUTG&X-Amz-Signature=d6ddf2e63cd9d5d0273fed5c29fe4ce72c8f336084ad179ae5e17a8ca7759ad9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIRGWZF4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T035009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICxmu9JuCxqB7VJlHWL0afusEHntjAP5HCBkyed4YgD4AiEAwbfVjUgA9Ut6rnGjKEMKJpXZlYgkAm2VOePgjwJgELwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsZlU1%2BpJsoe0Q6FSrcA9dYjevWsCUwXern5Up8%2Bbq%2FL7TgWfhSj5kMgEFYe2LupbRDTLlQThqLmVY%2FjAl0xjXb5vCScDdt7SgNdJKpUM2WhQMppFNQbQYPtsN4gAebWUTz4XJptxVk8vIbvoqJdeByNbedgC8nAkstlrafwapeNcvnLkfGRQa9DwEIRRNk52BRqsS4Q%2BQsSagtlHoUYIBCaA0CLUrnhvScRhggY4h3ouV%2F%2FIKspR%2FXnRwHZ0wgdOfVv7meNfb4KI7VWeOfRtrWEQnLHuS8Y2NT4Pue44D9StgZWN0Z9HztIEI2d0ljirhM8FVci%2BidR%2FTFCra2VpSwsjR8BgM76T1UUJdPRVrvCXFBrwHa8U6ARTgTE7R%2BSTdYwPBh9oGq%2FcOf2y9l%2FmfBVEglGuRwRZPXTKBWJPNvx5XxX6%2F1tOKvf5ar6zaUbW4MJl69juCQJwop1x1C5NGToxxWxLU5nkNTsl656KjDlgsala93iMNRSvctftqgbpC0QPtzApCO5awVrvl%2BhsQbP4pDLvFdmh6L7AssyKn2yFT%2FHRhSQBj01JXGH%2BsseR%2Fve59asiSPJeMEXTmv5KvmB1ZsFhsKZkJzg3b0UyETaLP6z0WF8bD%2F9VjsvF333KDEjK5ZntvKKDEsMPL90skGOqUBDA1Ak4yt5VJTcdYviAGgTviZcdO%2FN70%2BA9dBFOo1jMAQs8HbCUpAIP6tDCEoVgdXirEq0ZEzOCiY0uytTgLDEBzudBUc4tsJXhAGySqokElcWk0ZueGzxafPHC0eRVGsWTFUAyb7b1bfpwMzbkapcbVR98oTv3%2BPBaql1KgfI3kyZadjZN%2FD8WfU3w1UdXAAvONBLKfXOtxto7uR007M7%2FkrIUTG&X-Amz-Signature=f284c742fa49cf139847765896a7ca294a097e1c52cd5a3611345f282610b833&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

