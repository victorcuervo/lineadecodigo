---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4LPYLON%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T113346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFeF1I8%2BCjWktpAgclXuCO3WTxsGGnIgFj%2BIX%2BbqnY3uAiAKnQTkuci%2Fn7rKU%2Bqy4MbXN8qlNiwNGdiyDXczurGRWSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMNClfqzaUdYnMtQJzKtwDbqcvbIEe6F0XyyK%2FDn1Itv96VgeLEAMD6CSIe2oKhmbA1tPg6Midodpa3c%2FvsoRcfpZYXpAGdJqPDm9t5esKpFexYAXfP9MW0T8b9l9o1Z37zqtepkws2EYmQvXE3pH2SgeAE9PjZrj%2FvG0jh5BL7ww4aLmDW58MAmIFw6ml3QDR7t7ZF%2BRFcOjHTuFPiL5%2FnN%2FCjSKylnbxF1%2BQGlhtGnV4pP3NDjFd%2F%2Balhm589cGp13IfdZ%2Fxn0f5f3DTBq1P9mL9nJQwy4gwKWWLi8S7wZJD%2FJNhFNzARs3Nqypuk2PF%2BLHk8NGfmgzoL5%2FyVpTq01x9Cv9sTJ4Y3FSJALl1Wgd8XJCKA7Z%2FAMip4ojKBLTTbe4hzKUPs5P7rGhJhaMo36XchPFGIWM5FEZZUVVOdxNMW%2F8bCTDg5fF%2BBV%2FAbKB5pQ3%2FEcsTJ9UBhPK7Vjm39rgocBKgz5BbtJtcQrjlTcoNtrPjV%2Brmdty04MwssbitFozxRPKsciTFZskfxcKNCwY0sJLAEN7cUp%2FQbGsiKuzTkgXP1YDOtnFfSRSqfQs40fEfuLkeL6zkQwhG7o%2BvV89%2FFL%2Bja7%2Fh%2BYKn98tQc5j35prhoZdKjYlADFw8YKVl2zX%2Fw8L4wqvZLN8w2KbQyQY6pgHZeARj9WkVTtSIs8FioAUMuP8GE4KBMqzcmwFYTrPfnQaX0RfFlzUdJVSN2czwDYGXjIc12VEWufrNLG%2FhdCOGL4x9EDBXz2iFFlgB4himBhVAZ3pY1bfXbKRL68PV2vXpTJgOar9ROl5l%2Bc1xkJqr3Dgi%2FTHLAGmTmoYiRul2CrhsnX9qXE8XAdvh9AemwogrH%2BnhUvgVeggy4TmcUYHQ3ZZtRZce&X-Amz-Signature=e7e6f49179f326fb514bff9bab8087055bb100fc7588d444130b10336d542c3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4LPYLON%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T113346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFeF1I8%2BCjWktpAgclXuCO3WTxsGGnIgFj%2BIX%2BbqnY3uAiAKnQTkuci%2Fn7rKU%2Bqy4MbXN8qlNiwNGdiyDXczurGRWSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMNClfqzaUdYnMtQJzKtwDbqcvbIEe6F0XyyK%2FDn1Itv96VgeLEAMD6CSIe2oKhmbA1tPg6Midodpa3c%2FvsoRcfpZYXpAGdJqPDm9t5esKpFexYAXfP9MW0T8b9l9o1Z37zqtepkws2EYmQvXE3pH2SgeAE9PjZrj%2FvG0jh5BL7ww4aLmDW58MAmIFw6ml3QDR7t7ZF%2BRFcOjHTuFPiL5%2FnN%2FCjSKylnbxF1%2BQGlhtGnV4pP3NDjFd%2F%2Balhm589cGp13IfdZ%2Fxn0f5f3DTBq1P9mL9nJQwy4gwKWWLi8S7wZJD%2FJNhFNzARs3Nqypuk2PF%2BLHk8NGfmgzoL5%2FyVpTq01x9Cv9sTJ4Y3FSJALl1Wgd8XJCKA7Z%2FAMip4ojKBLTTbe4hzKUPs5P7rGhJhaMo36XchPFGIWM5FEZZUVVOdxNMW%2F8bCTDg5fF%2BBV%2FAbKB5pQ3%2FEcsTJ9UBhPK7Vjm39rgocBKgz5BbtJtcQrjlTcoNtrPjV%2Brmdty04MwssbitFozxRPKsciTFZskfxcKNCwY0sJLAEN7cUp%2FQbGsiKuzTkgXP1YDOtnFfSRSqfQs40fEfuLkeL6zkQwhG7o%2BvV89%2FFL%2Bja7%2Fh%2BYKn98tQc5j35prhoZdKjYlADFw8YKVl2zX%2Fw8L4wqvZLN8w2KbQyQY6pgHZeARj9WkVTtSIs8FioAUMuP8GE4KBMqzcmwFYTrPfnQaX0RfFlzUdJVSN2czwDYGXjIc12VEWufrNLG%2FhdCOGL4x9EDBXz2iFFlgB4himBhVAZ3pY1bfXbKRL68PV2vXpTJgOar9ROl5l%2Bc1xkJqr3Dgi%2FTHLAGmTmoYiRul2CrhsnX9qXE8XAdvh9AemwogrH%2BnhUvgVeggy4TmcUYHQ3ZZtRZce&X-Amz-Signature=5d2d7527b4db36511f7ace8030156a5412c9390b7a1147430f7e16de40b92700&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

