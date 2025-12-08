---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULRXTD73%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T172136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFexTHnRWlKwenzs0i0pX9vLPYoW%2B4pqNd%2Bjec%2FuOH%2BAiBqxp%2B5dPvfT2WgoZjY05JA2j7pWBmYxcdgqyeOM3Iw5iqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM%2BMXxgUsxnO%2Bz71ZKtwDewdyHbp8hPnJYdI7Fe%2BKKM6Qyq1Va%2Fqm%2Fxs2RrVtenC4SgAndwdDhfCjAnLUuue6edElgh00DvLHDzwneTB5WyFYahZGN76C%2FNpuJvvFC7mtjltzoAYgatvRhuz6UcVmNR4ejxf880Baxgx1%2F2lXbNuUshrsXd7qZfZgdzp%2FcQIvbSO2uo%2FMUfFsXN6TMfMgoDqq3cEbuKVQgCyzXgkNqpLgydadRIR6tsRBcCTtLm%2FGoyFl8qhyESwpOGk0EqU0BTJPBsJY2fYbeJ937KfAcmkcuWA3EqN0CxDGnbvPyW1qFer6rhar9F4mlaS0%2Fd73hnoZ6rgT8T%2F96jLmqT2ZDE4g9WgGIypwarMqJZaX1ZIOf%2FSY8%2FEBwdTILU88%2B%2FTfBymPF%2BOEpjXogdTWwK5xAc%2BOasQ0qK4SwYIM4PmiNy5BKNgeBYUXzCSlvRb%2BHXHRkJuYY3xv5eeSF7yi4cQINgI%2FJw%2F%2FC9wXGMORPgdbFq49qabBzo8wCMIOVGhW0ESIliU0M4XKJadb1KAAb%2BaqwyJ5gQDrcKfE2uCgF5pd5q76hEtBDC7aTjnIh8oweBmH%2BO0wQKeLaqbvrPUIXU2d4xyNWZQVuxHfglEaPeCpEfewpWAzMvslAfsbtMUw6IbcyQY6pgGc7gy2Gj%2BtyNpq6TY0mBFqPHOLpaWllT79Mkw6jWCnSids6VG8hxyg7SWFfDcV%2Fpp%2BMhh5RU5DxfPggXRwweA5rTpJIGqNW9KlJuWpT%2FtqpOXmzI22EwGLZEOXOVFerCDxr%2B3nSZ6Phqil7gE4szJ1IZBU8S1aZoXT0JbddfMhmKyH%2FMgy%2B3rqVFR5aFM9ioJyWsPnt5jufAZEykJemIIR2FdFCemk&X-Amz-Signature=78671782bf4b75d00fd6da687ccb96b27d340038544790f49d9fc0c1b171399f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULRXTD73%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T172136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFexTHnRWlKwenzs0i0pX9vLPYoW%2B4pqNd%2Bjec%2FuOH%2BAiBqxp%2B5dPvfT2WgoZjY05JA2j7pWBmYxcdgqyeOM3Iw5iqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM%2BMXxgUsxnO%2Bz71ZKtwDewdyHbp8hPnJYdI7Fe%2BKKM6Qyq1Va%2Fqm%2Fxs2RrVtenC4SgAndwdDhfCjAnLUuue6edElgh00DvLHDzwneTB5WyFYahZGN76C%2FNpuJvvFC7mtjltzoAYgatvRhuz6UcVmNR4ejxf880Baxgx1%2F2lXbNuUshrsXd7qZfZgdzp%2FcQIvbSO2uo%2FMUfFsXN6TMfMgoDqq3cEbuKVQgCyzXgkNqpLgydadRIR6tsRBcCTtLm%2FGoyFl8qhyESwpOGk0EqU0BTJPBsJY2fYbeJ937KfAcmkcuWA3EqN0CxDGnbvPyW1qFer6rhar9F4mlaS0%2Fd73hnoZ6rgT8T%2F96jLmqT2ZDE4g9WgGIypwarMqJZaX1ZIOf%2FSY8%2FEBwdTILU88%2B%2FTfBymPF%2BOEpjXogdTWwK5xAc%2BOasQ0qK4SwYIM4PmiNy5BKNgeBYUXzCSlvRb%2BHXHRkJuYY3xv5eeSF7yi4cQINgI%2FJw%2F%2FC9wXGMORPgdbFq49qabBzo8wCMIOVGhW0ESIliU0M4XKJadb1KAAb%2BaqwyJ5gQDrcKfE2uCgF5pd5q76hEtBDC7aTjnIh8oweBmH%2BO0wQKeLaqbvrPUIXU2d4xyNWZQVuxHfglEaPeCpEfewpWAzMvslAfsbtMUw6IbcyQY6pgGc7gy2Gj%2BtyNpq6TY0mBFqPHOLpaWllT79Mkw6jWCnSids6VG8hxyg7SWFfDcV%2Fpp%2BMhh5RU5DxfPggXRwweA5rTpJIGqNW9KlJuWpT%2FtqpOXmzI22EwGLZEOXOVFerCDxr%2B3nSZ6Phqil7gE4szJ1IZBU8S1aZoXT0JbddfMhmKyH%2FMgy%2B3rqVFR5aFM9ioJyWsPnt5jufAZEykJemIIR2FdFCemk&X-Amz-Signature=5d4ab28c3935a9907d366fd2114d51f10af757b401356dab3b536fd2da48162c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

