---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKIM4OWB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T173837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHLsOyhJPRNTda%2BokPmuF8qYSG5SfR%2Fy%2B5IE0DaGHCvwIhAO42vF9ad6ZqtyVDcwhmM0QIy4x%2B34owxebimLKdO%2Bj2KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypfkUvR7mmuo3BFD8q3AOk%2BZZx6BqFoq84OZu3vFZ8uwQ5pKcyZaNOuAFVNc18EPNVGIbCM6BB2Rjz3IT%2BfL4OxBcDwze4yrSfa93CsUO2OUf27Q8IuUiQ5MqHR38gtUj9AniibWijbHcKsLnTyMN3EcDngHZoIIgspxKumCZqyll%2FWzumsyV6CGEYSyyUO6H%2Bkv90hZk5R%2BHhJsHio%2BxqvZjpGGrmBKlK3e7eM%2Bpjsrk5qgFNXLtt7aZ0%2B3b7ugbbgquZAsMxeqjoegos8OmZjvwQv8Ues%2BGws2gUKGFZmA%2FiByZvbldf4RFcviLg0tHX1iCHyY%2Fd2GQpQrVyM47NEyuocTbzHElFnje3emrOEud6If1VhTtGGY2Pn5x%2Fy7kQVcuR8KdElNoKPUr2JbGfYHrGgO761cy9rcvcH2bKrCaacgryQY0acHZ4jupllqe1ZpVn5m3HO5QrOizszakkpBjNneQU9SQ6Po9pX811IOd9dYPehqDTrYXi68fz3mb8t9lukoBlsgEkeC3hMrOmKyJvPVVqr%2B5Iho3stC%2FT%2BRi1uTCRoUjEOgJI8up5pvqQ%2B46J%2Fj92z%2B0aAxHYbtDQaqgTqFAYnOUhhOMN5TNLpNEmfKSfQkb73XZOq7u5BO8T%2Fuqy6eB6%2FaiOxDD%2Bt9bJBjqkAbCW3VoLeatJZqfcVK0%2BQ%2F87pu%2BGFfuyL0IVsWoIj2aQRh34GgYgCAJsrpOWGu4PdTqG2jLHx6ff%2BYe2KWWzEMSVtiRT%2BVOgxoLlbh0JKo4iA6iJ2ytWDMEAlCpXSwbHHiiD9P0ksubLOh5gDkclu9DTbq28Ff6%2BN7qKuBSRRZkXhmG7nqxtAA8IzxzJKZEECemmC91YZnB%2BD0XuiLJ4TJShCqBT&X-Amz-Signature=39a16b2472fbf156251b1082da20db20100bc2636b86da33ac004aaac9192b2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKIM4OWB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T173837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHLsOyhJPRNTda%2BokPmuF8qYSG5SfR%2Fy%2B5IE0DaGHCvwIhAO42vF9ad6ZqtyVDcwhmM0QIy4x%2B34owxebimLKdO%2Bj2KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypfkUvR7mmuo3BFD8q3AOk%2BZZx6BqFoq84OZu3vFZ8uwQ5pKcyZaNOuAFVNc18EPNVGIbCM6BB2Rjz3IT%2BfL4OxBcDwze4yrSfa93CsUO2OUf27Q8IuUiQ5MqHR38gtUj9AniibWijbHcKsLnTyMN3EcDngHZoIIgspxKumCZqyll%2FWzumsyV6CGEYSyyUO6H%2Bkv90hZk5R%2BHhJsHio%2BxqvZjpGGrmBKlK3e7eM%2Bpjsrk5qgFNXLtt7aZ0%2B3b7ugbbgquZAsMxeqjoegos8OmZjvwQv8Ues%2BGws2gUKGFZmA%2FiByZvbldf4RFcviLg0tHX1iCHyY%2Fd2GQpQrVyM47NEyuocTbzHElFnje3emrOEud6If1VhTtGGY2Pn5x%2Fy7kQVcuR8KdElNoKPUr2JbGfYHrGgO761cy9rcvcH2bKrCaacgryQY0acHZ4jupllqe1ZpVn5m3HO5QrOizszakkpBjNneQU9SQ6Po9pX811IOd9dYPehqDTrYXi68fz3mb8t9lukoBlsgEkeC3hMrOmKyJvPVVqr%2B5Iho3stC%2FT%2BRi1uTCRoUjEOgJI8up5pvqQ%2B46J%2Fj92z%2B0aAxHYbtDQaqgTqFAYnOUhhOMN5TNLpNEmfKSfQkb73XZOq7u5BO8T%2Fuqy6eB6%2FaiOxDD%2Bt9bJBjqkAbCW3VoLeatJZqfcVK0%2BQ%2F87pu%2BGFfuyL0IVsWoIj2aQRh34GgYgCAJsrpOWGu4PdTqG2jLHx6ff%2BYe2KWWzEMSVtiRT%2BVOgxoLlbh0JKo4iA6iJ2ytWDMEAlCpXSwbHHiiD9P0ksubLOh5gDkclu9DTbq28Ff6%2BN7qKuBSRRZkXhmG7nqxtAA8IzxzJKZEECemmC91YZnB%2BD0XuiLJ4TJShCqBT&X-Amz-Signature=cf345ed2600c4f595b8f1d1c219b4e3fad14a6f82c4fdc39a360c701a95bfa6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

