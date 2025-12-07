---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHHBEZE4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T054129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8732gDq32ioGWL8UOTxSPMnCpSJsB5k9dNvE9yu9KYAiBDXf0aXIKsI3dIdwErM%2FNQqe%2BDrrVHM8cU8AupUiYdhCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMijG%2BgWmpF09BaueEKtwD2Yi4vzVF9BVdWLk%2FgU2ww3i1O0jOohRQpMIARnocxbxaEqgPSz%2BMByr7m6FYgbCjg%2FdGwoOzOONL2ltzaU0TCCN4IMyZsWd1ZKXQegAmGq4O9M0M9zi6ObGWKqWHt%2FSXqz8DuRnuXWcWqSdiINTpU0qYXCcY1s4jfnm6j7z0H7S6iiMlM6F6X%2F%2FLremaLYqI9Z8uTAfDx35ENmqtHmqDkHN6azVX4J36BzEYaS3hWsM36AQi%2FW1f4aIQCCjQMQcWh7PZID8r2XmOFrVPzsO3BQgpNvYG2Sq561cp3G7zfYEENWECOWhsPuQVhAiHLF0A14UMqr%2FRaXJkMVehw1nblKsClXIxgQM2twP0yao%2Bjo5V4Fg29TV8w8U66qBBGwn4Es%2BlLaAuG%2B7nOByLNZDSIZu9H0YpBWJQ3V%2BSIxSs1Xyy6pYCBjKs7w8MwCZS2ViAdGoBD8IDQRKC42PV6bnkqYm30WaM74IXymtO8awVwU0gWlU2YxuoOeVk4P0C2RnPylJtsslxYjRZxZ7YdRpU0u3xjlgUKkBVrR2l%2BnwlwbFt5bG1g54So0xgV7c1VCQEh%2F11sld3kuoP73Yd7OW0nynsNRdgr4pGhyzARwyHptJx1Ja6tTtKTSBNnLUwkZ3UyQY6pgF9BDiPIaDUtLfzTeHeO2wMxCCOXn48WwXIRYHK1hL5UiCafLXl5v9gJJSajp9u7cFmLGXwN9qsQbwDV3zySY4xzOB7JtK7oxjiLa6SSRUWJQlZtOetyOuKHOUmVjhkNaLcdeVzH1wuyEJ4RWniCgpw%2FPhKAXvKG0v73tBJN3IcQ%2FkMSQAMlLP%2Fwsif7rmc8iGqBQGV%2BG85LI%2B4gfFgEWxGQdoIp%2FhP&X-Amz-Signature=183838a59ff986c3cea46689854502682ddcb31f2bf14f24ca57437a52c083e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHHBEZE4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T054129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8732gDq32ioGWL8UOTxSPMnCpSJsB5k9dNvE9yu9KYAiBDXf0aXIKsI3dIdwErM%2FNQqe%2BDrrVHM8cU8AupUiYdhCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMijG%2BgWmpF09BaueEKtwD2Yi4vzVF9BVdWLk%2FgU2ww3i1O0jOohRQpMIARnocxbxaEqgPSz%2BMByr7m6FYgbCjg%2FdGwoOzOONL2ltzaU0TCCN4IMyZsWd1ZKXQegAmGq4O9M0M9zi6ObGWKqWHt%2FSXqz8DuRnuXWcWqSdiINTpU0qYXCcY1s4jfnm6j7z0H7S6iiMlM6F6X%2F%2FLremaLYqI9Z8uTAfDx35ENmqtHmqDkHN6azVX4J36BzEYaS3hWsM36AQi%2FW1f4aIQCCjQMQcWh7PZID8r2XmOFrVPzsO3BQgpNvYG2Sq561cp3G7zfYEENWECOWhsPuQVhAiHLF0A14UMqr%2FRaXJkMVehw1nblKsClXIxgQM2twP0yao%2Bjo5V4Fg29TV8w8U66qBBGwn4Es%2BlLaAuG%2B7nOByLNZDSIZu9H0YpBWJQ3V%2BSIxSs1Xyy6pYCBjKs7w8MwCZS2ViAdGoBD8IDQRKC42PV6bnkqYm30WaM74IXymtO8awVwU0gWlU2YxuoOeVk4P0C2RnPylJtsslxYjRZxZ7YdRpU0u3xjlgUKkBVrR2l%2BnwlwbFt5bG1g54So0xgV7c1VCQEh%2F11sld3kuoP73Yd7OW0nynsNRdgr4pGhyzARwyHptJx1Ja6tTtKTSBNnLUwkZ3UyQY6pgF9BDiPIaDUtLfzTeHeO2wMxCCOXn48WwXIRYHK1hL5UiCafLXl5v9gJJSajp9u7cFmLGXwN9qsQbwDV3zySY4xzOB7JtK7oxjiLa6SSRUWJQlZtOetyOuKHOUmVjhkNaLcdeVzH1wuyEJ4RWniCgpw%2FPhKAXvKG0v73tBJN3IcQ%2FkMSQAMlLP%2Fwsif7rmc8iGqBQGV%2BG85LI%2B4gfFgEWxGQdoIp%2FhP&X-Amz-Signature=bb11ed35fa1f401d8621d3825585ae6dee87b8211c0403694edcb209e3ca2d35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

