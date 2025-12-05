---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLE5FOPK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T040952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBILqbEy3wSp0%2Bev0%2F8v9mteuMQUR8CPzLdLBfqFO997AiAe6QcmOFT2QchFbpGoZ4oNUv7rWu74X87tlakERyzRNyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM5OP5aCts07f9eQbXKtwDx%2BMo5Rc6I3XJoGk2H4N2Mw9jPJ9pT4DJ9BXYKUsLNJcf50yD1XlXmopxGRV1J2lcnMO%2BEeoP%2B0kNCMXcZlugilFGm8xJCe4rJ1raztJM7LERogDReKgvNS9h5DNbij%2Fz2I%2BLWfxTk07LHS%2FhiwCIdwzz%2Bbk2w4odFIlfKMbQi56vKo91iGv6omvUNb%2BR5xfEQUiO2PeVws8PkI%2FFwyUaP5EsKyc%2F%2BEoN53eAKIrMrivwiMrKgWnXr3eddEc6j2iButepIZBCQAHiUhWgpvdzl4q4540wFpBfOcXzfmjk8ENRmp%2BCmH3E2GkXr2b1khpVI91gqb3fOsc%2BQ0fU5L%2F1%2FmO8Dpp7P8TQV1cMMrReC0WEpqiHarS0Qq3orRHm%2FxS%2FyC0E5iO0Tk%2Fxh%2BrJVVjPpLiak8zf9OnATBjeGCSD59AdJbniYuRPu2i5hq3lNObBTb1LeYbyum1BW5PmVg0niXMpWulTdBqxWFj6%2BEJQ3DVnT3wVwApJp6%2BCRN3ojm8UebqFI7BWLOnzaVkOD6IARk%2BlYVK%2BvxFXp8FptSgp%2FXIzfFtXRNCyqsl5I4DHZCBsEqPPhgbPN13G3U7bHod3hNflCodpCo78DSdZiu3gecYDRlYYPsjOoRJf4Ucw87HJyQY6pgGvvrPLq97X0i0BO0M1YaOLdFBrHgeknbySF%2B8XuXnn5wOAvnOI8RX8IHPIQGhuTq7QymDCoTL77i8WWYtv1yLwOjr2XZ%2BhPoHqpF%2BtoEitahOhNd1U3952%2FhpEaT5ZIiH%2B2dU6vC67%2F0NWHo1%2FPSHbijVh%2BU%2BL%2BDrH8G3eJSHjGvgJ5CBwA%2Fhvpz6QY36CnHDAdbPZVyyh74bQJ%2BgOm2Di6siXcLRL&X-Amz-Signature=539f630ae78c1dbd5999bf4012b98c7cd76a4f874c47dd8a9c1cdc7d462f53cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLE5FOPK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T040952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBILqbEy3wSp0%2Bev0%2F8v9mteuMQUR8CPzLdLBfqFO997AiAe6QcmOFT2QchFbpGoZ4oNUv7rWu74X87tlakERyzRNyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM5OP5aCts07f9eQbXKtwDx%2BMo5Rc6I3XJoGk2H4N2Mw9jPJ9pT4DJ9BXYKUsLNJcf50yD1XlXmopxGRV1J2lcnMO%2BEeoP%2B0kNCMXcZlugilFGm8xJCe4rJ1raztJM7LERogDReKgvNS9h5DNbij%2Fz2I%2BLWfxTk07LHS%2FhiwCIdwzz%2Bbk2w4odFIlfKMbQi56vKo91iGv6omvUNb%2BR5xfEQUiO2PeVws8PkI%2FFwyUaP5EsKyc%2F%2BEoN53eAKIrMrivwiMrKgWnXr3eddEc6j2iButepIZBCQAHiUhWgpvdzl4q4540wFpBfOcXzfmjk8ENRmp%2BCmH3E2GkXr2b1khpVI91gqb3fOsc%2BQ0fU5L%2F1%2FmO8Dpp7P8TQV1cMMrReC0WEpqiHarS0Qq3orRHm%2FxS%2FyC0E5iO0Tk%2Fxh%2BrJVVjPpLiak8zf9OnATBjeGCSD59AdJbniYuRPu2i5hq3lNObBTb1LeYbyum1BW5PmVg0niXMpWulTdBqxWFj6%2BEJQ3DVnT3wVwApJp6%2BCRN3ojm8UebqFI7BWLOnzaVkOD6IARk%2BlYVK%2BvxFXp8FptSgp%2FXIzfFtXRNCyqsl5I4DHZCBsEqPPhgbPN13G3U7bHod3hNflCodpCo78DSdZiu3gecYDRlYYPsjOoRJf4Ucw87HJyQY6pgGvvrPLq97X0i0BO0M1YaOLdFBrHgeknbySF%2B8XuXnn5wOAvnOI8RX8IHPIQGhuTq7QymDCoTL77i8WWYtv1yLwOjr2XZ%2BhPoHqpF%2BtoEitahOhNd1U3952%2FhpEaT5ZIiH%2B2dU6vC67%2F0NWHo1%2FPSHbijVh%2BU%2BL%2BDrH8G3eJSHjGvgJ5CBwA%2Fhvpz6QY36CnHDAdbPZVyyh74bQJ%2BgOm2Di6siXcLRL&X-Amz-Signature=2c2119bbd544337a1b2fba6680c7d8527f83bb4c8ddfde5de4a408eb197deb19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

