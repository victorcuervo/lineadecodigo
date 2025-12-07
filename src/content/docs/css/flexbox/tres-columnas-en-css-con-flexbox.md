---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPTWQA7I%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDd2uxp2KzkxKJ1SoCW84hhYo6N6u4wdlgAAXdD8YEjJAiEAmBhlw2k1CsN%2B1X%2FKspwi9hdoKNmBoD5Hz0Y8z9ve0xgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzWo60IvJakc6yxWSrcAz6B0IBeba7eAJY4we%2FrT1xuyDWp%2FbIfg1DMeOkrEoj5Pc9%2BTqK%2B7M16BetKxb%2FiJIpID5Oqov6NkZ1yP%2B1gbEYdUW98w53Q0PnNH%2F6KNvKj4zPh7bikVZ50LijQFWowpbSi7r%2B1nV6Ldm%2FdQbUFdPu6Dy6pPxuS%2BAPzaZ7iJSFez%2BtgZe6hWRZPWm6uFYzf%2BhT5X2JKGKAiCK4lhp2E%2FJFQcg6rRjJKz24TF1xFn3Ye6g963C5n8pGFjes%2FefEbI%2FSAaOoJMxVn60HtCvzyL9NbDCcu0iKGBLrKg6U9Qrw03ZJ2y8g7KqDOf%2FpGYe%2FSkNnSy0VvfG4w5k4OFrYR0pn4QS1JjOuEEJR4ewD%2Fm2IBaYeI14bVED5rUlCVjK7YJzqa2iFk37FTRSPmLaZMDHIyyjo4CD%2BZDAErmkU1T4EIlPYRFXyHCcqDv34eSRwh4%2FYupSoCoEdQKVgQzJZatE%2FROGpPa%2F%2BivUiPugYt8INwK6T3F5nIuTFPF292quEQvXbVlAsc5CHY1C2%2BqdDsXGxgYpBQjSASb4%2B4ON6b5InryFwZfgiLoP3g6ImLA1LDWtminkLaTt4N%2BUDkDmveZ%2Bikj0VS5px1ntavroMPqoWkok3ykmMoy%2Fdvn4O5MMb90skGOqUBMbQdXoXMARCu92li3f0icRLFlQq1RRc71NBucfKnqXVecLMMCZlgo5yffAb4uF0NZ8N62rrQ5eD8OpiWZqJCmCgvJjw%2BX5hMS3b1Suf3%2BXfYyjBjy1ZB%2BTZqNsTuCWerOBHf2t%2BedmWIH2kxIv%2F2KsnITsuEkQgrGwbIJGGDLfjnZ%2BWZJe0DDrxzgfrBDBqEKqnZCOrYeJp%2BUFiUVc35D9qIiI9l&X-Amz-Signature=9aad3a3514e11148c6fad1c99602a93cd16430eeabb96181ddb39ff4908de732&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPTWQA7I%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDd2uxp2KzkxKJ1SoCW84hhYo6N6u4wdlgAAXdD8YEjJAiEAmBhlw2k1CsN%2B1X%2FKspwi9hdoKNmBoD5Hz0Y8z9ve0xgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzWo60IvJakc6yxWSrcAz6B0IBeba7eAJY4we%2FrT1xuyDWp%2FbIfg1DMeOkrEoj5Pc9%2BTqK%2B7M16BetKxb%2FiJIpID5Oqov6NkZ1yP%2B1gbEYdUW98w53Q0PnNH%2F6KNvKj4zPh7bikVZ50LijQFWowpbSi7r%2B1nV6Ldm%2FdQbUFdPu6Dy6pPxuS%2BAPzaZ7iJSFez%2BtgZe6hWRZPWm6uFYzf%2BhT5X2JKGKAiCK4lhp2E%2FJFQcg6rRjJKz24TF1xFn3Ye6g963C5n8pGFjes%2FefEbI%2FSAaOoJMxVn60HtCvzyL9NbDCcu0iKGBLrKg6U9Qrw03ZJ2y8g7KqDOf%2FpGYe%2FSkNnSy0VvfG4w5k4OFrYR0pn4QS1JjOuEEJR4ewD%2Fm2IBaYeI14bVED5rUlCVjK7YJzqa2iFk37FTRSPmLaZMDHIyyjo4CD%2BZDAErmkU1T4EIlPYRFXyHCcqDv34eSRwh4%2FYupSoCoEdQKVgQzJZatE%2FROGpPa%2F%2BivUiPugYt8INwK6T3F5nIuTFPF292quEQvXbVlAsc5CHY1C2%2BqdDsXGxgYpBQjSASb4%2B4ON6b5InryFwZfgiLoP3g6ImLA1LDWtminkLaTt4N%2BUDkDmveZ%2Bikj0VS5px1ntavroMPqoWkok3ykmMoy%2Fdvn4O5MMb90skGOqUBMbQdXoXMARCu92li3f0icRLFlQq1RRc71NBucfKnqXVecLMMCZlgo5yffAb4uF0NZ8N62rrQ5eD8OpiWZqJCmCgvJjw%2BX5hMS3b1Suf3%2BXfYyjBjy1ZB%2BTZqNsTuCWerOBHf2t%2BedmWIH2kxIv%2F2KsnITsuEkQgrGwbIJGGDLfjnZ%2BWZJe0DDrxzgfrBDBqEKqnZCOrYeJp%2BUFiUVc35D9qIiI9l&X-Amz-Signature=e8c14ede0a011a66ac7eb8e490f095e5e11a0be945eced21974fbd14755336e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

