---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PV4M5QZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T024651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIHywWelNsy8sXtAbilY0XZEUTkFPDNikaNDXXXGlZcICAiEAwkjNqMALpCZWlApUnU0B%2FLwA7MG4u3QQC8%2F51MdYHlEq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDIk9LnDFmOHMLlydxircA%2FtFMnPdf4%2BOuktGUcmDnHS5JR9WctEJu9GcOMg9O18QhyC18vR7mgAUqbox0obbrCQrlgxth6OhrDlxHu4I2t46OLLrkcmHOPwhmFzKiOcB6%2FY9KVJS1K6tbpAflv%2FLYIGNwwEu79JNh6daYlPMJ4WcY0145Nf7FUrOeogFAjDz8uikZIPBouwbH%2BRPuluM7qBF37zRheXrr8rG0ZZoDy1JeNe%2BfVPPnggVBRSPSV1KQWguNGYZoqKC91d7fEtK6UztI2Z9El5nGVGu%2BfM%2Bt5HQNyZl1F3ayLTQe1WAUGwbvCZ%2BNW6%2FkkqJicBrjQBJ7KH%2Bec2JAP6K6G8TUeytoqiuW84feJVTO2W7aNuzqZ%2BAG%2FL7GM0kUVwuCRnbrRvgUQINxu5hkULyK%2FrhEfnF%2FD0HtOKRkmbiGmjB%2B6u1ZR7u%2BESfbz63qzKEvFUQT1kwVl5hs1kojVIgGGIK9Wa%2FpnhDBz2%2FT36UZZycIPNHrxHtB2qe2Sm%2FKOrNjLSUBBR0KMsk%2FR6VQlwoj0d5vX3S2fFzRDwIi3lNAkhfsGKlgkd4emX7MBLtpPojORmK0wg5SQ%2BU5VPuomNUspUpuFgxPchGnpzd%2FgbwZga96WHcYSdTHpXyOKXI6RQIKkImMLjUw8kGOqUB%2BpPORn3EwnKzRjJIKXc2HF94bNC9qm8F6snGRedho1UmXnZmFcLlX7aNmcsuVCI5EwjCNhdJNh3%2Bpz%2F%2FmhnkdJ38jQkk%2BqYMVQYePnNvdUgeskqN0NyQJ9MJzX9rPmpG%2BzjOFHoqF9enO3Y%2BW%2BMYzdY8WpU%2BFN2Jaceo8imB6%2BZgI%2BCTAeEfZhak0mb695DBLQYN5AW%2FzJJxgDfkYBxOor5RLqnC&X-Amz-Signature=e342c3a1a49741b2940108a37f8e659f5c9f93e8f4fecf74c7f44c15a331c7a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PV4M5QZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T024651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIHywWelNsy8sXtAbilY0XZEUTkFPDNikaNDXXXGlZcICAiEAwkjNqMALpCZWlApUnU0B%2FLwA7MG4u3QQC8%2F51MdYHlEq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDIk9LnDFmOHMLlydxircA%2FtFMnPdf4%2BOuktGUcmDnHS5JR9WctEJu9GcOMg9O18QhyC18vR7mgAUqbox0obbrCQrlgxth6OhrDlxHu4I2t46OLLrkcmHOPwhmFzKiOcB6%2FY9KVJS1K6tbpAflv%2FLYIGNwwEu79JNh6daYlPMJ4WcY0145Nf7FUrOeogFAjDz8uikZIPBouwbH%2BRPuluM7qBF37zRheXrr8rG0ZZoDy1JeNe%2BfVPPnggVBRSPSV1KQWguNGYZoqKC91d7fEtK6UztI2Z9El5nGVGu%2BfM%2Bt5HQNyZl1F3ayLTQe1WAUGwbvCZ%2BNW6%2FkkqJicBrjQBJ7KH%2Bec2JAP6K6G8TUeytoqiuW84feJVTO2W7aNuzqZ%2BAG%2FL7GM0kUVwuCRnbrRvgUQINxu5hkULyK%2FrhEfnF%2FD0HtOKRkmbiGmjB%2B6u1ZR7u%2BESfbz63qzKEvFUQT1kwVl5hs1kojVIgGGIK9Wa%2FpnhDBz2%2FT36UZZycIPNHrxHtB2qe2Sm%2FKOrNjLSUBBR0KMsk%2FR6VQlwoj0d5vX3S2fFzRDwIi3lNAkhfsGKlgkd4emX7MBLtpPojORmK0wg5SQ%2BU5VPuomNUspUpuFgxPchGnpzd%2FgbwZga96WHcYSdTHpXyOKXI6RQIKkImMLjUw8kGOqUB%2BpPORn3EwnKzRjJIKXc2HF94bNC9qm8F6snGRedho1UmXnZmFcLlX7aNmcsuVCI5EwjCNhdJNh3%2Bpz%2F%2FmhnkdJ38jQkk%2BqYMVQYePnNvdUgeskqN0NyQJ9MJzX9rPmpG%2BzjOFHoqF9enO3Y%2BW%2BMYzdY8WpU%2BFN2Jaceo8imB6%2BZgI%2BCTAeEfZhak0mb695DBLQYN5AW%2FzJJxgDfkYBxOor5RLqnC&X-Amz-Signature=aae18c9a1c6978f672c3bfcf05cbf7f92c8988c026fabe110704d5a1b1018891&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

