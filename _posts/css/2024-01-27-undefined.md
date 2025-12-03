---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KJ4NM5Y%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T153636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCf2MtW8ivrtZI%2B%2BYokaUQSI41ofzJvKMZaLBywSq1tUAIgIQRMgEqV%2FRe1GraYhPmiltrxcsSnGsJNUZffwAp2ZZgq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDArXOlFnvmiRoz7RESrcAxolFZYP%2B0nWr7pLV4NLgUqxB7w6b1dyXS%2B7PiJsZNhNpPXvAP5bwL5x%2F3E6%2F0TlbDzbwReJuLBS%2F1Q3ba8F4ltK6hSL%2BmSJrn54Dt97ba9ZIXQQpb9U1qqyFXtsWYQiCPaIRFEM5EiKGr%2Fe8tDr5lQzKxQnyMpkGIDJdOfUXa5awHlhiWP3me8OWklZxvjQmr%2FqGSljz4%2FFui%2B7T8r8M%2FFny%2FMDE5OIsowyS512G6zfxHlM7dwO2DKLMrp6qFeJk3dgFMONcyqHMVkh3ba4DLlmi7YqRNbeuizDZqRP8lFPYCb5jQbYNbAuxZP%2FW8qw8EHviSe83QLQjqLefWRO9J%2BO3I6QqgOuL7bRgjwZ%2FJxyw9s5duzE4CLaIVYKqhEZar1KrKjailhjDLMD3x0RlYuzhnc%2BUlDyta36Frxwa2x0Qp8YfmDO5XVQbHERRD9xYi2a4R9FDzAaqXfH%2FS6i918Nm0V3SbQXamsZ6sQ3yRde2ugk3xn22fs0eqkP%2FNW5dA84BedFqi2gOjOAwzNTFvgwfYvvvMVq2E5TIkQ21Zs66vJtynjhrNz9VlzPUGt6bcjMvQf%2BgZ6K4kB%2Fak%2B5VPARCRimfewz30RTl9TSs82zkCjhZ6xi%2BoedKwF%2FMNKmwckGOqUB0Rc63GxPACLJpPEe4QsNu3qrBWYyvlzj6zxJViwF45aDoD5xft3VoM%2BrW0IPtcnMI%2FbsTLfub8te6khQVLBlvFthETQwMXPXRjgG0ves%2FiMmrEjH4HTvlyH%2FVPLyHWWmXLvz5UpQYCOK9EcaC1JWUowGe2Y5%2Fq2D7qJfTJstTkbIzd7d2a4qq6YKifzymE4FoTjziSR1UaHWt7jyz9MQwqHuoe%2FT&X-Amz-Signature=2534f96f14e839fe05ec911ec776dedc8eb16c40eded9940988ddb3cafe82194&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KJ4NM5Y%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T153636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCf2MtW8ivrtZI%2B%2BYokaUQSI41ofzJvKMZaLBywSq1tUAIgIQRMgEqV%2FRe1GraYhPmiltrxcsSnGsJNUZffwAp2ZZgq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDArXOlFnvmiRoz7RESrcAxolFZYP%2B0nWr7pLV4NLgUqxB7w6b1dyXS%2B7PiJsZNhNpPXvAP5bwL5x%2F3E6%2F0TlbDzbwReJuLBS%2F1Q3ba8F4ltK6hSL%2BmSJrn54Dt97ba9ZIXQQpb9U1qqyFXtsWYQiCPaIRFEM5EiKGr%2Fe8tDr5lQzKxQnyMpkGIDJdOfUXa5awHlhiWP3me8OWklZxvjQmr%2FqGSljz4%2FFui%2B7T8r8M%2FFny%2FMDE5OIsowyS512G6zfxHlM7dwO2DKLMrp6qFeJk3dgFMONcyqHMVkh3ba4DLlmi7YqRNbeuizDZqRP8lFPYCb5jQbYNbAuxZP%2FW8qw8EHviSe83QLQjqLefWRO9J%2BO3I6QqgOuL7bRgjwZ%2FJxyw9s5duzE4CLaIVYKqhEZar1KrKjailhjDLMD3x0RlYuzhnc%2BUlDyta36Frxwa2x0Qp8YfmDO5XVQbHERRD9xYi2a4R9FDzAaqXfH%2FS6i918Nm0V3SbQXamsZ6sQ3yRde2ugk3xn22fs0eqkP%2FNW5dA84BedFqi2gOjOAwzNTFvgwfYvvvMVq2E5TIkQ21Zs66vJtynjhrNz9VlzPUGt6bcjMvQf%2BgZ6K4kB%2Fak%2B5VPARCRimfewz30RTl9TSs82zkCjhZ6xi%2BoedKwF%2FMNKmwckGOqUB0Rc63GxPACLJpPEe4QsNu3qrBWYyvlzj6zxJViwF45aDoD5xft3VoM%2BrW0IPtcnMI%2FbsTLfub8te6khQVLBlvFthETQwMXPXRjgG0ves%2FiMmrEjH4HTvlyH%2FVPLyHWWmXLvz5UpQYCOK9EcaC1JWUowGe2Y5%2Fq2D7qJfTJstTkbIzd7d2a4qq6YKifzymE4FoTjziSR1UaHWt7jyz9MQwqHuoe%2FT&X-Amz-Signature=597db4b1577b7e40eb5f75b0176fcb28d8c394ca63ed9e00b0da4a5b5148a608&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

