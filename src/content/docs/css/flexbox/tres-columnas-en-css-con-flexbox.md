---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCDVKQM3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T034300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLpwD6f%2BzoSNo5p%2FgpNSXGz0wMDf7JY4%2F69akMu4VjkAiEAoXuSQClJ%2FmRj3bBOLqj%2FJRbr71oKOJB4IiWLgC6V2s0qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOmMuqbxy%2FZTlhHxyrcA6hTWAJYGbifIHCxOmZd6g1095urqIQ8dqmR5Vz%2FAmu8xQXFjdHeHXfK%2FETx3WckQC3ihe1QQDqtAPv%2BMvLyJOvzL1bl19bCQZRx0Gan4c4zpxb6cP0yVGHJGpD8MyOFMPUGfO9cX0PZkg4ojKG914rzCf4QN5kyzHRtcq5ruTXVZ4DlK4jTn8n3B77hDXhII29MZU8bvBvwmbVu2ee4z%2FAv1Z6OoIt5Ar0OpyWbRwKD0PFQRVWYhJXfTXhs8cmsBbcXokEVVvp%2F%2FOE5YS7VUIvcSCkH2LEvQHZ3q6ne%2FGgY%2FZL9Rr37xqyK9ZAQErVQDTye8uz3TdiCeB7KWMco9uS%2FKvZJsu928h1DyB7YjxyirWP0bHwNZ9oR85iB3%2FeJy0z7AlWmPxp6Xa3Y6OLtTNF7915%2Bdv%2BPBT2UrMarb%2F9J8gBiYPgr3bxDfAc1g82nBQbwrkkXkBxh0qRRBOByuCRD0VPLzHdCcBeMCC5WMOWk3N%2BEfa4yY7GZsWfuvLLu5YYQKpSgYp6dFdo2Xbn9xsatawyqjnyZmq0kdSYDjWcxhfN1VXjwl4KptOX4MO3%2BFTLQ9toc0wN7kWwsdm1zQaU60Wob1Zawt19Vk4eOzk4J09CgsLtVM6mbz8a2MPju2MkGOqUB34WpgWiiykUEi0ObeZb6PIelRrigGDBnhm6DaNgKHcXeeRsylJTB5%2FepJjt31c%2FPRg1tgQRlX9DsDnEBNuzd9Xzkd1WQiRMTZF%2Fl%2FTt%2FxuJzOm4M3d3%2Flyp%2B15HHnC7reF1EyAjRK0MHDx6bfGLYuhWQKggWrpnGQIyQFMtUTtnrJSWD3WyB6NV0Y70nSJedu6QKgkPlprQIAo4CvPaJO0U%2B523Q&X-Amz-Signature=e81e3c5ae06a313e29229e551692bbf7fbac1ed61261f6c801b582d7ea95f077&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCDVKQM3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T034300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLpwD6f%2BzoSNo5p%2FgpNSXGz0wMDf7JY4%2F69akMu4VjkAiEAoXuSQClJ%2FmRj3bBOLqj%2FJRbr71oKOJB4IiWLgC6V2s0qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOmMuqbxy%2FZTlhHxyrcA6hTWAJYGbifIHCxOmZd6g1095urqIQ8dqmR5Vz%2FAmu8xQXFjdHeHXfK%2FETx3WckQC3ihe1QQDqtAPv%2BMvLyJOvzL1bl19bCQZRx0Gan4c4zpxb6cP0yVGHJGpD8MyOFMPUGfO9cX0PZkg4ojKG914rzCf4QN5kyzHRtcq5ruTXVZ4DlK4jTn8n3B77hDXhII29MZU8bvBvwmbVu2ee4z%2FAv1Z6OoIt5Ar0OpyWbRwKD0PFQRVWYhJXfTXhs8cmsBbcXokEVVvp%2F%2FOE5YS7VUIvcSCkH2LEvQHZ3q6ne%2FGgY%2FZL9Rr37xqyK9ZAQErVQDTye8uz3TdiCeB7KWMco9uS%2FKvZJsu928h1DyB7YjxyirWP0bHwNZ9oR85iB3%2FeJy0z7AlWmPxp6Xa3Y6OLtTNF7915%2Bdv%2BPBT2UrMarb%2F9J8gBiYPgr3bxDfAc1g82nBQbwrkkXkBxh0qRRBOByuCRD0VPLzHdCcBeMCC5WMOWk3N%2BEfa4yY7GZsWfuvLLu5YYQKpSgYp6dFdo2Xbn9xsatawyqjnyZmq0kdSYDjWcxhfN1VXjwl4KptOX4MO3%2BFTLQ9toc0wN7kWwsdm1zQaU60Wob1Zawt19Vk4eOzk4J09CgsLtVM6mbz8a2MPju2MkGOqUB34WpgWiiykUEi0ObeZb6PIelRrigGDBnhm6DaNgKHcXeeRsylJTB5%2FepJjt31c%2FPRg1tgQRlX9DsDnEBNuzd9Xzkd1WQiRMTZF%2Fl%2FTt%2FxuJzOm4M3d3%2Flyp%2B15HHnC7reF1EyAjRK0MHDx6bfGLYuhWQKggWrpnGQIyQFMtUTtnrJSWD3WyB6NV0Y70nSJedu6QKgkPlprQIAo4CvPaJO0U%2B523Q&X-Amz-Signature=a3fe84559f37dd901e884b00e91e755ee3b3b8b64a9f9be2b7f88da5b07c00b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

