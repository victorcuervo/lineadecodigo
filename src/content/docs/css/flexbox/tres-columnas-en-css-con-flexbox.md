---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN7HVMI4%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T022400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF73w0ZqFzsmhJA8ts2XFxJTUs0P4Wv0%2FJ0Bbz%2BPce%2FwAiEAtolcRs67UeP3MuG2AkjRcOmBTkq9zB%2BBXdBbTN2wwJMqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPnmsQjQK5wQ1%2BeqircA0VOmfZDBtzhDFmmHvpIjGHgVrv9DLtg9764meu6iU%2B%2FiZTmb%2BVQwUOZGQGJHEpOzhaXLVtXuocpQS%2BoRrYDXxrUW2gXyWPXkTL5cEHSW6w7EWywTSd0jGDDAYpQUuGT1mAbdyIpkDz2XD7Des%2BTTGD2smtgpwoC5uBGgEePtaY47EV%2Fn4xYhqilo0bexO5U2zaBurcba%2BPVmFDlx%2FOjVXSUzwJkKolZSr6%2Fkuy6vcpj58W6aiazc58CNkfywdiZpTd%2FstbMqZ2C8rzHjkD1EQy9wk4QjytitZtS0JWsrKE%2BAR5%2Fd8wWamc0zIMgq%2B049f5Bew0JvwO9Xbvq9g01kLIpc3WaRd2yzK2uIqtmxZxJNfrCXRsB4P135G1jaiIBYQ4Lkpl25TRGkQjgSuNmP0PpDxSWC9hc7Q5KGL6pWK%2FLwYktLq7RsxlyiDgiYyEMiX8648ibwQqo%2BVzcbu7bNzuT95yKdTB%2FI7c35SgRGDSsWN3q2FAy2i7pCNeFPF4u9rk9ocLarPNCkC6580o3ND7Y9mw%2BmTBtn0UaFPt8bJ2%2FuN%2B%2BI96giFOthkvI1isBIJ8rV1YZX3Nv048zG8FcLuaIyzODb2bEAHUgF1ZdCb3T%2BuYYtfQXtPEqrwB9MO6O3skGOqUB2s1EyeGFBQ6X4nv0RxtQXpggC0myykFkrt7ywF%2BmZrO0QA97s9xb%2FVqZrJ%2Fe1LcOAzO7vKDZX3UNPYbOK2OqLKXfnNlUukcHi61FAj2sVefMqjilGwJs%2BLD6K%2FgGGbbq7JviKPdsNoHullsWiBeI91NzR%2By8ptUTKgOs4pgRdDBVSWLQnot2o2UJj189Iyd17%2B6GmfUAn0RC1QocPrspstJvwKPj&X-Amz-Signature=f270ce5a8cbd113b765b9fcb3f97ef53acff234eb61b408a5f71facfdab9ee89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN7HVMI4%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T022400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF73w0ZqFzsmhJA8ts2XFxJTUs0P4Wv0%2FJ0Bbz%2BPce%2FwAiEAtolcRs67UeP3MuG2AkjRcOmBTkq9zB%2BBXdBbTN2wwJMqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPnmsQjQK5wQ1%2BeqircA0VOmfZDBtzhDFmmHvpIjGHgVrv9DLtg9764meu6iU%2B%2FiZTmb%2BVQwUOZGQGJHEpOzhaXLVtXuocpQS%2BoRrYDXxrUW2gXyWPXkTL5cEHSW6w7EWywTSd0jGDDAYpQUuGT1mAbdyIpkDz2XD7Des%2BTTGD2smtgpwoC5uBGgEePtaY47EV%2Fn4xYhqilo0bexO5U2zaBurcba%2BPVmFDlx%2FOjVXSUzwJkKolZSr6%2Fkuy6vcpj58W6aiazc58CNkfywdiZpTd%2FstbMqZ2C8rzHjkD1EQy9wk4QjytitZtS0JWsrKE%2BAR5%2Fd8wWamc0zIMgq%2B049f5Bew0JvwO9Xbvq9g01kLIpc3WaRd2yzK2uIqtmxZxJNfrCXRsB4P135G1jaiIBYQ4Lkpl25TRGkQjgSuNmP0PpDxSWC9hc7Q5KGL6pWK%2FLwYktLq7RsxlyiDgiYyEMiX8648ibwQqo%2BVzcbu7bNzuT95yKdTB%2FI7c35SgRGDSsWN3q2FAy2i7pCNeFPF4u9rk9ocLarPNCkC6580o3ND7Y9mw%2BmTBtn0UaFPt8bJ2%2FuN%2B%2BI96giFOthkvI1isBIJ8rV1YZX3Nv048zG8FcLuaIyzODb2bEAHUgF1ZdCb3T%2BuYYtfQXtPEqrwB9MO6O3skGOqUB2s1EyeGFBQ6X4nv0RxtQXpggC0myykFkrt7ywF%2BmZrO0QA97s9xb%2FVqZrJ%2Fe1LcOAzO7vKDZX3UNPYbOK2OqLKXfnNlUukcHi61FAj2sVefMqjilGwJs%2BLD6K%2FgGGbbq7JviKPdsNoHullsWiBeI91NzR%2By8ptUTKgOs4pgRdDBVSWLQnot2o2UJj189Iyd17%2B6GmfUAn0RC1QocPrspstJvwKPj&X-Amz-Signature=388bf171691d9f5904e7fc535d35e08706f534c636f8075ddf695aa0473db66a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

