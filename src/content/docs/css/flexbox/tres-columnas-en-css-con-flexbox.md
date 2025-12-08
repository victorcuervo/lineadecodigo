---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGZSHTOT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T053802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFEkZwiosVCYxYhEwz2n9WGy%2FZtHedMchEg2uXho3IQRAiEA3tV6bpNzUYxpjy8PiehvH1mUysSzmLP21LX56JW6v2AqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZ4ukny%2BGZ4vK1fPircA7pDZti2G7qvxFsUsL%2FV7PWDlOtd0peydVdr9orgp15pcjHrlyZ8AjsUSWtVeIoUBvZ%2FsrmOQOSp1V%2FhswCpU8TX3T9JvX4mlMUzNO0ZRAeLiSFcVRokxm7fCM6xSq61ok9MtB8GGotw3V8vJt5ntgUplBJe6RSnZgSTD%2BpKbbHkdBdtxsUSprhRtFI20qk1izxx9gsMjFF4MVq0Ie%2Bx38UdlyRikLdtwDndtYWe8BgI3tY2XuCa9rfSKHyzaI3QuF2gO%2FQM7ZDhyJdWU6HdwbW15%2BCYCe7rJ2k97ViP%2BhwMU%2F%2Fpwjggtsnob7Nowb0tPrxacaU7MrgJf2Q9%2BRaIOvq1kHln6TBXF0yt7cjnuSxQhWVAx0Xr23B6AdU6slQgqj8A8z7GMjpyjhLDfAf0HqPDJVoiZrsvKWRPyCldvySsxGxQamDjH%2FttxwUq2YEr1dAC59Xi%2BIfHa%2FJNN4c%2Fe4S5hWsphgHK0RHgH2UQkBNj452V6NVgGts5FLn1k7bQ%2FT5Phh%2FJn4j4szgbmVEdxJ8KCkcsljABS9V77hZrUQgC7DimaKy4uucweEqoYZf8cm%2F0v07deIQMht6TWMZbuMN0jFu1lGQuDfKxC9C%2Fh5tIQRkQ0zxjEUzTxTk1MKW02ckGOqUB86Tpu9lJLCBmIaFbl7aMu%2FMeAClxGWsSoGIqxU%2FqWl0C2q5Vos1%2FzQtDiH2J0W4vNMN019NaigZlv8JhJGuyj2VhlhGL5xvdmhiQvRKQEWbKn3fqvj0IdNg%2BhaqOpTv1eWy%2FjrYIR7qA4ctW2eemDJJpJ%2FIJZBeXf%2BoaaczZguEsXjTJqgyFCyaCAi2xG81U%2Bj5X52UrX7iTkkdJqVTEJcTEyG0R&X-Amz-Signature=18b0c71a4d0f45f8e259a86e72b417d4805d96da6c9d88a04d987b75df49d2ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGZSHTOT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T053802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFEkZwiosVCYxYhEwz2n9WGy%2FZtHedMchEg2uXho3IQRAiEA3tV6bpNzUYxpjy8PiehvH1mUysSzmLP21LX56JW6v2AqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZ4ukny%2BGZ4vK1fPircA7pDZti2G7qvxFsUsL%2FV7PWDlOtd0peydVdr9orgp15pcjHrlyZ8AjsUSWtVeIoUBvZ%2FsrmOQOSp1V%2FhswCpU8TX3T9JvX4mlMUzNO0ZRAeLiSFcVRokxm7fCM6xSq61ok9MtB8GGotw3V8vJt5ntgUplBJe6RSnZgSTD%2BpKbbHkdBdtxsUSprhRtFI20qk1izxx9gsMjFF4MVq0Ie%2Bx38UdlyRikLdtwDndtYWe8BgI3tY2XuCa9rfSKHyzaI3QuF2gO%2FQM7ZDhyJdWU6HdwbW15%2BCYCe7rJ2k97ViP%2BhwMU%2F%2Fpwjggtsnob7Nowb0tPrxacaU7MrgJf2Q9%2BRaIOvq1kHln6TBXF0yt7cjnuSxQhWVAx0Xr23B6AdU6slQgqj8A8z7GMjpyjhLDfAf0HqPDJVoiZrsvKWRPyCldvySsxGxQamDjH%2FttxwUq2YEr1dAC59Xi%2BIfHa%2FJNN4c%2Fe4S5hWsphgHK0RHgH2UQkBNj452V6NVgGts5FLn1k7bQ%2FT5Phh%2FJn4j4szgbmVEdxJ8KCkcsljABS9V77hZrUQgC7DimaKy4uucweEqoYZf8cm%2F0v07deIQMht6TWMZbuMN0jFu1lGQuDfKxC9C%2Fh5tIQRkQ0zxjEUzTxTk1MKW02ckGOqUB86Tpu9lJLCBmIaFbl7aMu%2FMeAClxGWsSoGIqxU%2FqWl0C2q5Vos1%2FzQtDiH2J0W4vNMN019NaigZlv8JhJGuyj2VhlhGL5xvdmhiQvRKQEWbKn3fqvj0IdNg%2BhaqOpTv1eWy%2FjrYIR7qA4ctW2eemDJJpJ%2FIJZBeXf%2BoaaczZguEsXjTJqgyFCyaCAi2xG81U%2Bj5X52UrX7iTkkdJqVTEJcTEyG0R&X-Amz-Signature=cac63d4c20746d67f893b8b38b0c6c9e22f93ee070a2e4421c691b3158bcd86f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

