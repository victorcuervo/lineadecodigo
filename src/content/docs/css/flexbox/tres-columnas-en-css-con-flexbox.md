---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654PJWGJO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T235109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDv0Ghr5XCCRM%2B0Kafdzh8JRuZgpiGtgr4S68eOZpVXcAiAt9q%2BySOqcROACnKSpZ%2B%2FACoA13Z9d48Dh%2B08UeNYcMiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4Lbqu%2BzJbWQ7xF0sKtwDB5rXCJzlf0v5AmuXyYrZfw%2BVYudU04VdDXweFSVKqq8Ggk5y747T6bUyBTNb8kJ6A%2FlSv8LK0aPNkHnEW96poQ62FYibS0d6JGXQW3xjaSVaDX2JUmISRz%2Bab186jNSOCZ7gOIOxNP%2BAA4UhF198JiO0NgQWolIPQ%2BWkctDWbSH6mR5SApavi24783mAfdzQTGvz1lhBhJeZeQsjZ0taeyCG5eKCjL9QwRcDuo3MXj42nE8U%2F%2BLig7m6W5IAH47bjCRelYTjKlA5SgHLGBQEDTl5zQ4q%2BfEZGOq3YP9ug7K9s0nVETsI0ShV5%2FHJug6pfp6lTUHylKQBa0dUK%2BetvKJq4Y%2FWyKuFyHRaiAeqmC87ZgntNQ0hn84wcxtmG%2FR9h8%2FyTUT5Ciqmb0KTnzcQnUz6fCRdrJCoN9snRLTMi%2BlNpiRWC5TmethklLk0L4WVp990tpojUAGFLZKwEI%2F%2FHrvvNcG3%2FmrczXai0%2Flyd0WeldqVhEjXPHi1Fh%2B2prvN40EZFBGPES1PKCX%2Fuk0RmF88aqnAuPTwGQS%2BJTkixPYqgWw10gAqx9xTGX%2FLEM8MGgOTl%2Fx%2FcSUHvVFHqrvaA2%2B0AfYdxwU6YJa3TXlyZPfAdknpMx1r6SXIM%2FUwmv3SyQY6pgHURfEI4UDwH5mWq8bfixVDu3hur04ZK7gqwRjpLymHq%2BACLPwvZ8tBGXfVVeL9fQbOLWeXdtNxPoHEM8V5Vem5rAAZ8R0HXKQ1Mi4D3rBLugdjG9AwB6iUKaCo1NneETe9e2fp0z0irb9Snbk2DuLuxFeVeuvynNnRgEciUS7JaF2ULykQWGMjDbmHDY3k8orcDoCMR89xHYe1qBKebQmiRwC%2B%2FDnN&X-Amz-Signature=5029533173c9d8d978d3a3ae3ba57e30fae50319a66058055ac2f6859585a5c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654PJWGJO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T235109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDv0Ghr5XCCRM%2B0Kafdzh8JRuZgpiGtgr4S68eOZpVXcAiAt9q%2BySOqcROACnKSpZ%2B%2FACoA13Z9d48Dh%2B08UeNYcMiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4Lbqu%2BzJbWQ7xF0sKtwDB5rXCJzlf0v5AmuXyYrZfw%2BVYudU04VdDXweFSVKqq8Ggk5y747T6bUyBTNb8kJ6A%2FlSv8LK0aPNkHnEW96poQ62FYibS0d6JGXQW3xjaSVaDX2JUmISRz%2Bab186jNSOCZ7gOIOxNP%2BAA4UhF198JiO0NgQWolIPQ%2BWkctDWbSH6mR5SApavi24783mAfdzQTGvz1lhBhJeZeQsjZ0taeyCG5eKCjL9QwRcDuo3MXj42nE8U%2F%2BLig7m6W5IAH47bjCRelYTjKlA5SgHLGBQEDTl5zQ4q%2BfEZGOq3YP9ug7K9s0nVETsI0ShV5%2FHJug6pfp6lTUHylKQBa0dUK%2BetvKJq4Y%2FWyKuFyHRaiAeqmC87ZgntNQ0hn84wcxtmG%2FR9h8%2FyTUT5Ciqmb0KTnzcQnUz6fCRdrJCoN9snRLTMi%2BlNpiRWC5TmethklLk0L4WVp990tpojUAGFLZKwEI%2F%2FHrvvNcG3%2FmrczXai0%2Flyd0WeldqVhEjXPHi1Fh%2B2prvN40EZFBGPES1PKCX%2Fuk0RmF88aqnAuPTwGQS%2BJTkixPYqgWw10gAqx9xTGX%2FLEM8MGgOTl%2Fx%2FcSUHvVFHqrvaA2%2B0AfYdxwU6YJa3TXlyZPfAdknpMx1r6SXIM%2FUwmv3SyQY6pgHURfEI4UDwH5mWq8bfixVDu3hur04ZK7gqwRjpLymHq%2BACLPwvZ8tBGXfVVeL9fQbOLWeXdtNxPoHEM8V5Vem5rAAZ8R0HXKQ1Mi4D3rBLugdjG9AwB6iUKaCo1NneETe9e2fp0z0irb9Snbk2DuLuxFeVeuvynNnRgEciUS7JaF2ULykQWGMjDbmHDY3k8orcDoCMR89xHYe1qBKebQmiRwC%2B%2FDnN&X-Amz-Signature=e0ebcd2057f3cc94ac2300adb168949ba95980ebfcc638dcb2f71337dbdfa4ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

