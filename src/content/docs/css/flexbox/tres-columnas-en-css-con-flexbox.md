---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5SLNO3H%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T063251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHWwcwtHpef7Wokp5mPBq16vtd7FICsamMl3E2%2BYDvW6AiBUJ7qh85tLoFpgV6vb083soQ2tGVvWRYjB0%2BT1%2F29gSyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM0OoS1tHoQu81kuGKtwD1PAZF8PHIWp0wLkVqqDiOD7wbafPtirLiYv%2FCgjis14F7YerRQQ35pDr9qbQl0ZrRADRFygQqsxEMSrvVTxUMfqf75kttBQUxq1%2FX6jp1vuS3HGnCbGvIE2tJ8tTlVsxZMj8kSoMiF%2FioI%2F3wAFM2DZdxP7MuEviq0w6Od8VMl%2FBLrnPMmFuqDSAELAt5auZ8z1a7cDGKbPVjFmhWhBBf0FrNpr0sP%2BSbSCGHMla7O4hLGLYlVTI5BXnHHu07HPNEQb8OT2VcftqJgHBsZmWrS1q4Vxj6kwzkJrMfSs4IjmDIOlz1%2FuwwQDX00KhcfcbLfwqBBZwMSGUxaEygjEqXB39SU%2FBkjhWC1HNGgUqRGIsxlDo8GSAoLDOhU3jigh4xUUWS3E1N7fS5qmLJohHkAlYg6KPd%2FRf3VxjH9JrvqKktON3SMeqSzCrmMhXZtA%2BbGJaHK8Sc1eck97jJhqssSyXhIuIBY89ZTjo4b9iQOegre7u2eN2fviu1yRg9tShpbo1dgxXWf5nazAXoAfS66uH3lGxSgW9HtUL7iOh3rIQneRpB4BE40pZPsks2ld9M5M874L%2F4k8AHPsJkd5TYARuVIUsFANRPHce%2BiB8sLoRnz%2BEAI%2BiFivTzyQwkdDZyQY6pgEdJ6KpRGYjAhTfpNlLMnY8vyvB%2FE%2FdYVoDxUGXYYXNRqZhJhCW%2BZjZ8mcffB1wrwyRfvrOS3kbtw7AQG%2FWd3Jtq5q5VnB8GFW22llGuWhAYxypWaEKk1vYrdPc7l2YbO%2F3KhEs3BKuOJK50dkM%2F3RTSoI4eyk2YNoDdq%2FTYT6p94dQI8%2Ff0Rzkv6xmFm95OEK9oinYde5ss3ixSakLefHHKW9jrj7X&X-Amz-Signature=e26d04351bd51235a49e7ec7952396906808eb1d2dd58844b39692580be8e696&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5SLNO3H%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T063251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHWwcwtHpef7Wokp5mPBq16vtd7FICsamMl3E2%2BYDvW6AiBUJ7qh85tLoFpgV6vb083soQ2tGVvWRYjB0%2BT1%2F29gSyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM0OoS1tHoQu81kuGKtwD1PAZF8PHIWp0wLkVqqDiOD7wbafPtirLiYv%2FCgjis14F7YerRQQ35pDr9qbQl0ZrRADRFygQqsxEMSrvVTxUMfqf75kttBQUxq1%2FX6jp1vuS3HGnCbGvIE2tJ8tTlVsxZMj8kSoMiF%2FioI%2F3wAFM2DZdxP7MuEviq0w6Od8VMl%2FBLrnPMmFuqDSAELAt5auZ8z1a7cDGKbPVjFmhWhBBf0FrNpr0sP%2BSbSCGHMla7O4hLGLYlVTI5BXnHHu07HPNEQb8OT2VcftqJgHBsZmWrS1q4Vxj6kwzkJrMfSs4IjmDIOlz1%2FuwwQDX00KhcfcbLfwqBBZwMSGUxaEygjEqXB39SU%2FBkjhWC1HNGgUqRGIsxlDo8GSAoLDOhU3jigh4xUUWS3E1N7fS5qmLJohHkAlYg6KPd%2FRf3VxjH9JrvqKktON3SMeqSzCrmMhXZtA%2BbGJaHK8Sc1eck97jJhqssSyXhIuIBY89ZTjo4b9iQOegre7u2eN2fviu1yRg9tShpbo1dgxXWf5nazAXoAfS66uH3lGxSgW9HtUL7iOh3rIQneRpB4BE40pZPsks2ld9M5M874L%2F4k8AHPsJkd5TYARuVIUsFANRPHce%2BiB8sLoRnz%2BEAI%2BiFivTzyQwkdDZyQY6pgEdJ6KpRGYjAhTfpNlLMnY8vyvB%2FE%2FdYVoDxUGXYYXNRqZhJhCW%2BZjZ8mcffB1wrwyRfvrOS3kbtw7AQG%2FWd3Jtq5q5VnB8GFW22llGuWhAYxypWaEKk1vYrdPc7l2YbO%2F3KhEs3BKuOJK50dkM%2F3RTSoI4eyk2YNoDdq%2FTYT6p94dQI8%2Ff0Rzkv6xmFm95OEK9oinYde5ss3ixSakLefHHKW9jrj7X&X-Amz-Signature=1a2bffbcd239aa767f1aab43ec6097c75a370b5867b9eaad24cee12fccec397f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

