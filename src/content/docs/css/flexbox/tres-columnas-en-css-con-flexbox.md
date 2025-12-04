---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466773SSRUT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDnrYqeBfnPcb%2BJ0KfEc5yXgIwVE5G%2Fhaf9WHNAQlAYPAIgdoUzx1Hv4fc6JqzKNCmvYvVHjJR%2FLejULChLeMrDaLcq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDFhGcJTRY5c6sqQFWCrcA1jT8JixR4OHmNiolVddnhd3pWaxO5ZWlxP7xz9mwNisWuFL6cb%2BI%2BcSUB4N4O9LZLmomcm7fFcFUPUp8KCMJYgf3qUTGSd6Us9mbwpGj0oaquT6XWkK0obvB7BDgVfcot2FMns6OBngk5OfjhyJ74WdQwKnrhSV0%2BvX9pwMODUFzOf3gomqlaeomWW52qvCKp6IAmKsQ97jusr1f0c50CNHM7uNnacXWOfa6uGAYjldvhcWZGzgLP%2FAd9dVc8vXU5eX%2F8%2BLL4V3vtNeNA5ZObSBUG%2F18WG2gksPd2tspHyfQLqFonusrVeUX9CevVfMChqMEO%2BLsueHNk22hbi%2B0Ri07I%2Fl2lppZan2rNxrdHwBuIepUQWcsTZOzvdjmGjwvK3WyQLKPi7R1EmPEhInrAbibo0MCjsYUO3BqosllatPKWV6Kmc8As1GBKU0puQCpIrlOzfDJDuQAygkRPZ8fmlEfI%2FEB0yZUJXdEq%2BFj3vactJlMWPJ9oFEz9EF%2BStO%2ByzXxU%2FaHzwtqxqsKik0SEaTNCpmH0yu8ZdxS4K8EClU52XVxwp5ZkCBAKEx66dFzWobrym1AK%2FLWgN12g7O9MiWCL1vwG4aNMaNidlzO53H%2FTlmNibKdL3aaUUSMOzIxckGOqUB%2BH5flICFNuggwHAV9Vr5oOrwrSIwZnnfPb9deP67b5FgvMwY7RBWbG2eL7WlJQbpfG0WWqGe0%2B%2FIWdCDJuoVHW7dvjW4BCFNWfAJ7r8%2FD2V6YpDF3S4X72RvTLuoYMtvehZ%2BI4u9s%2BRaFpnZEVljtRh%2BU0I4iFg3d9H2ArrS2ZVOk9iqBUlj7SdvJTiDLB9tEus3Le2TR9IFQxZT1MAVi4pSr1tr&X-Amz-Signature=7369dc83d67378f54961799d6335b0b8170598175991e1fe2cc4470eca37f8e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466773SSRUT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDnrYqeBfnPcb%2BJ0KfEc5yXgIwVE5G%2Fhaf9WHNAQlAYPAIgdoUzx1Hv4fc6JqzKNCmvYvVHjJR%2FLejULChLeMrDaLcq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDFhGcJTRY5c6sqQFWCrcA1jT8JixR4OHmNiolVddnhd3pWaxO5ZWlxP7xz9mwNisWuFL6cb%2BI%2BcSUB4N4O9LZLmomcm7fFcFUPUp8KCMJYgf3qUTGSd6Us9mbwpGj0oaquT6XWkK0obvB7BDgVfcot2FMns6OBngk5OfjhyJ74WdQwKnrhSV0%2BvX9pwMODUFzOf3gomqlaeomWW52qvCKp6IAmKsQ97jusr1f0c50CNHM7uNnacXWOfa6uGAYjldvhcWZGzgLP%2FAd9dVc8vXU5eX%2F8%2BLL4V3vtNeNA5ZObSBUG%2F18WG2gksPd2tspHyfQLqFonusrVeUX9CevVfMChqMEO%2BLsueHNk22hbi%2B0Ri07I%2Fl2lppZan2rNxrdHwBuIepUQWcsTZOzvdjmGjwvK3WyQLKPi7R1EmPEhInrAbibo0MCjsYUO3BqosllatPKWV6Kmc8As1GBKU0puQCpIrlOzfDJDuQAygkRPZ8fmlEfI%2FEB0yZUJXdEq%2BFj3vactJlMWPJ9oFEz9EF%2BStO%2ByzXxU%2FaHzwtqxqsKik0SEaTNCpmH0yu8ZdxS4K8EClU52XVxwp5ZkCBAKEx66dFzWobrym1AK%2FLWgN12g7O9MiWCL1vwG4aNMaNidlzO53H%2FTlmNibKdL3aaUUSMOzIxckGOqUB%2BH5flICFNuggwHAV9Vr5oOrwrSIwZnnfPb9deP67b5FgvMwY7RBWbG2eL7WlJQbpfG0WWqGe0%2B%2FIWdCDJuoVHW7dvjW4BCFNWfAJ7r8%2FD2V6YpDF3S4X72RvTLuoYMtvehZ%2BI4u9s%2BRaFpnZEVljtRh%2BU0I4iFg3d9H2ArrS2ZVOk9iqBUlj7SdvJTiDLB9tEus3Le2TR9IFQxZT1MAVi4pSr1tr&X-Amz-Signature=5376646c42aefd001b6aec9dd83224cf4c901a4d982e05c94224f0d2653f7b30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

