---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5EQGACD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T035309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxssO23E6rsGsv6ABrhusc25vV0itfSssOHIeDMoJdHAIgS8JFpf33ZsulAnN9OUwQyPPXXtTJGKvz3w8x4IDbTdwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7GU42ODXOYG44PpCrcAzYluWDn2IM3V6jwJDJE9HTkYtBfwHr5R%2BKU3YXZmOz5CxDVQitkB42AcqpgCwk0TNIvnluJgOYC9NQZXlo8fAWYm6mIIe1nr%2BWk%2F5qQhnsNa1ppgVxOkmVXG6pywWMqPcclso52pj%2F6VZiY5fwKRgB%2FhkQKjz0lpWmkOEUSY99smFgLNiLusBT3EiPnJ6CIa3Bceh7inILfdAGrCZsQyAx07WLGWrN1shvWkzsbTaJUjJr3zXPcPHrtHMJZmpAUIvHmf3NwAtnFY09Rj9J%2FBrsISFyqpepqWx0vHVSx%2FMlhSoQ55xf2R1NlHaPQGiLIJ6%2FIIHz%2FA3%2BPMJssvlUWuNCXqb7vfR1iavpqtt5N0PNoeCVrZU%2FaGmA1SM7I%2F7cqmgNJsq%2FVXGqJQQYOhvkyU4Olxk8CKeFakvY8G81S%2BBaIEa0B3BZVjGhxzYvGTg3TTzfDbZMgHCzfUifr1X9rdJVDG60CBEJ7%2FmL015sGMkyas%2BJcr39RntUqUKEG%2Fzy9jFKJCPOTLAKmHJNuSynLJ5BvgVf8bATtj1EXgcOLfJmbKuM%2BladAfRKzqL%2FFCjoOm2Pk2bE9GpK4IZo%2FT2m0az%2BpKEM2yGZC%2B259G11Lh7OHizTheII8xHJF%2F9uAMKD90skGOqUBYiNVTmZrdio%2FARYqxsLn7uvXufb0bvgqoFNGsO%2BU0jcFrFHG%2BVN2FauVYapsIF6i5pkkfu6TCrnzTBdN5XGhh8CSSRBXh84nQCqvL6s1wiuRiBslmHaDkaLJixyLqJMcSTbSHj4MUw1IiI%2FMQoW5zfdk9tLdG2BnV5ObLrWktOjJwcCuTdJh0dO5EeTEjQTFF4xdzvyjlRnX%2FXfMSREKDEI20HFx&X-Amz-Signature=ef618b00aec8ae4dbeb346cc590bb8530cb3ab1bf710e6583f662d927e07b9b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5EQGACD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T035309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxssO23E6rsGsv6ABrhusc25vV0itfSssOHIeDMoJdHAIgS8JFpf33ZsulAnN9OUwQyPPXXtTJGKvz3w8x4IDbTdwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7GU42ODXOYG44PpCrcAzYluWDn2IM3V6jwJDJE9HTkYtBfwHr5R%2BKU3YXZmOz5CxDVQitkB42AcqpgCwk0TNIvnluJgOYC9NQZXlo8fAWYm6mIIe1nr%2BWk%2F5qQhnsNa1ppgVxOkmVXG6pywWMqPcclso52pj%2F6VZiY5fwKRgB%2FhkQKjz0lpWmkOEUSY99smFgLNiLusBT3EiPnJ6CIa3Bceh7inILfdAGrCZsQyAx07WLGWrN1shvWkzsbTaJUjJr3zXPcPHrtHMJZmpAUIvHmf3NwAtnFY09Rj9J%2FBrsISFyqpepqWx0vHVSx%2FMlhSoQ55xf2R1NlHaPQGiLIJ6%2FIIHz%2FA3%2BPMJssvlUWuNCXqb7vfR1iavpqtt5N0PNoeCVrZU%2FaGmA1SM7I%2F7cqmgNJsq%2FVXGqJQQYOhvkyU4Olxk8CKeFakvY8G81S%2BBaIEa0B3BZVjGhxzYvGTg3TTzfDbZMgHCzfUifr1X9rdJVDG60CBEJ7%2FmL015sGMkyas%2BJcr39RntUqUKEG%2Fzy9jFKJCPOTLAKmHJNuSynLJ5BvgVf8bATtj1EXgcOLfJmbKuM%2BladAfRKzqL%2FFCjoOm2Pk2bE9GpK4IZo%2FT2m0az%2BpKEM2yGZC%2B259G11Lh7OHizTheII8xHJF%2F9uAMKD90skGOqUBYiNVTmZrdio%2FARYqxsLn7uvXufb0bvgqoFNGsO%2BU0jcFrFHG%2BVN2FauVYapsIF6i5pkkfu6TCrnzTBdN5XGhh8CSSRBXh84nQCqvL6s1wiuRiBslmHaDkaLJixyLqJMcSTbSHj4MUw1IiI%2FMQoW5zfdk9tLdG2BnV5ObLrWktOjJwcCuTdJh0dO5EeTEjQTFF4xdzvyjlRnX%2FXfMSREKDEI20HFx&X-Amz-Signature=c7ff0e99a77ea8f456b55fd65a2ca14ab1b1a4b329ecfcde0ed1efb5b7f6678a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

