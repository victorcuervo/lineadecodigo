---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY66WJKS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T082007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGys7FLmjQajggAW2URh%2FARqvSkvEpW9WbGPXoHbOobCAiEA50p%2FFIY7Dt%2FDuXloZVmhOxz%2FvpdCX9FdHvw6yZYcZRUq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDE5NeXQ0vapEPRIK%2FyrcA8vUI%2FrVw5jGWvvEfINPb1l4JnG15CG7cYsZqvSR2lW0XeMNQQouMLlDWXVq%2FGlGsqpNzL0ENS6tge%2FcUOsG2xAB8okgHOP0LZsRatPAq%2Fne7DhrXYJCaIzxRl6jA7hu3fvLAVJ8qbLdTXFGwYpGHvk9RvZFqISbiIqGX6Lg4CF0EszFzxXuuE67a%2BOATm3pxJaat1Bqe7JAatB9qEqG2aksWaMKpupMBc2r7RJgdwwpAsDOskx%2B6%2Fn%2BlU5WIugZuVkfzzOJYoE%2FfCMpT%2BCTCahDIOz3O9H9Gk5fB3GTnvrXKC7dq7Gwb3UjHNH%2Fty1GecvPUza5nbQnD6qWFXJ4cPfbea0tEwaOAo2mPZU4q0iyXdi53U4Uvk9LpHOQz0XckahWB5PDlY4TRQD3tO6d%2Brg6UApBjC43SMt9p%2BEM%2FrgJkDfcevfGy4fYGHWYaUuq9QhKlTJVvvQR1R0d3G2o4gS%2F7Ud01LHuZ1%2B6HpuQPmle3Z52woNo7aBvKf%2FczPM9KjivJfOpcNUfq1x9cIdcmFYClWziJfoMGQtqUY1ycOAtt4XCmswxxC1ZTUIDBBkuZRdLwzbvhMFLa6t0a28mDC4V49F8MsK9wBKsbU3V9fOG1emNYjTJ9QL92gqnMKu8z8kGOqUB4PenPkGUXSMxzpgTgksD%2F5kT6EOzWFX01NuQuOAwa93qdbdJBMhYZME%2BU1jpA0x9fHOPMnmg0Wgc2J1Cg91ht7AfhckVIk8QD4ENvtgGyDYM8pWlO72JrfTvD7Dr4OwE39rE8xgTE0CiX0HZCJN3FRNIf8nQEz31y4x5pnC%2BXVjHEmACcqM%2Bo3I9D6QPaskeGBZijh9%2Bl%2Fa%2Fx%2BeDzy7%2FgTepk8mF&X-Amz-Signature=dac8b3b2e87ee4ba36bae8f442ecfe21c142e08b100508b66ac91c26184fbec8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY66WJKS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T082007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGys7FLmjQajggAW2URh%2FARqvSkvEpW9WbGPXoHbOobCAiEA50p%2FFIY7Dt%2FDuXloZVmhOxz%2FvpdCX9FdHvw6yZYcZRUq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDE5NeXQ0vapEPRIK%2FyrcA8vUI%2FrVw5jGWvvEfINPb1l4JnG15CG7cYsZqvSR2lW0XeMNQQouMLlDWXVq%2FGlGsqpNzL0ENS6tge%2FcUOsG2xAB8okgHOP0LZsRatPAq%2Fne7DhrXYJCaIzxRl6jA7hu3fvLAVJ8qbLdTXFGwYpGHvk9RvZFqISbiIqGX6Lg4CF0EszFzxXuuE67a%2BOATm3pxJaat1Bqe7JAatB9qEqG2aksWaMKpupMBc2r7RJgdwwpAsDOskx%2B6%2Fn%2BlU5WIugZuVkfzzOJYoE%2FfCMpT%2BCTCahDIOz3O9H9Gk5fB3GTnvrXKC7dq7Gwb3UjHNH%2Fty1GecvPUza5nbQnD6qWFXJ4cPfbea0tEwaOAo2mPZU4q0iyXdi53U4Uvk9LpHOQz0XckahWB5PDlY4TRQD3tO6d%2Brg6UApBjC43SMt9p%2BEM%2FrgJkDfcevfGy4fYGHWYaUuq9QhKlTJVvvQR1R0d3G2o4gS%2F7Ud01LHuZ1%2B6HpuQPmle3Z52woNo7aBvKf%2FczPM9KjivJfOpcNUfq1x9cIdcmFYClWziJfoMGQtqUY1ycOAtt4XCmswxxC1ZTUIDBBkuZRdLwzbvhMFLa6t0a28mDC4V49F8MsK9wBKsbU3V9fOG1emNYjTJ9QL92gqnMKu8z8kGOqUB4PenPkGUXSMxzpgTgksD%2F5kT6EOzWFX01NuQuOAwa93qdbdJBMhYZME%2BU1jpA0x9fHOPMnmg0Wgc2J1Cg91ht7AfhckVIk8QD4ENvtgGyDYM8pWlO72JrfTvD7Dr4OwE39rE8xgTE0CiX0HZCJN3FRNIf8nQEz31y4x5pnC%2BXVjHEmACcqM%2Bo3I9D6QPaskeGBZijh9%2Bl%2Fa%2Fx%2BeDzy7%2FgTepk8mF&X-Amz-Signature=4d603d2745dbf784007bc2d6159e1609eca773e8fa247dc4fcb1179b73d1f6cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

