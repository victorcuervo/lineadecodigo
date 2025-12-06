---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HFJ5GWO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T042807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA6Wu1%2FnbPVVlMUbjeqJZbXcPthbiIaP88QTQ0yuDOGpAiEAhKdEs%2FlOfswjtqwzgTVlIskrlx9jUK%2BKhxBvj0lPEXYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDA6WgkmNltoguNvKpircAzxGG6qXH2UxqzyD%2FDS6ZZYllM%2FiKxmFJESSsO7smufnwIRlCQOigN9LY%2F5sfSNCuTzfhK5vBBIL%2BCUObTbPr%2BkmepjjWTiASmmkI50zfHFWLZM7no%2BAyVfUbCGSGQx92X4b0o%2BGqwY1%2B4SLwxE8cRQSeFs%2BZOBOTMpNbYCls%2BQCLQlorfFjbMSfyGIiWMWHYNPfKMDgP09D87TtbOP95Ld5LquDEzC2ynQwiS22xUIbe65UDpDN5c1O%2BtuEOTGbT5xCXKR8%2BZc1XWoIlgmwtmBA%2FFtmzHHrWcovSr34NuCG6Tuvqd7Rhil%2Fx%2FPfBq3p5i9tsozcULkgOEY4t%2FmN33iEQ761kZBL1su1QGg5OelTRyYbUmQUc34YU2GltOkcoqX0klDL%2FRqw%2BiDVy5YmJ07VPe3uIr6pm3E%2FUfBgrKeRO5fyliIvdkpdBKXeIyIC7wdQUDZhGPYhQt5wKMFo96A19KSK9w6BNhH0Rm9HH8nNrSryMcjdoWiKAiJc3uVQcsHeWIxbQlVRifAZDvR0O5LEtLCZaGv1dEscPCzGT%2FnnGuM8Gsn7%2FPx9RR6ML7w25d2nAXl71RPoIwMEzI2rz9kM6u2InX0kfMvgW36W5OdT8ShdaIEa6utISu3SMIrezskGOqUBIWwjC6plnrE9nnWMxcvXgB8TAljvE9Gqy8QHuSqLs2tCqi5WFJEs5B0TZYuGlzmyIE5k0D92MuGFXmuK3QTbiKn4zQusAyoKDqLiMJBxuSJVtW4DTpEgO%2B9rkHXuifFs4lzzW36DfcDpUlABddjC0iBVNmLvJhPmYvvbEtcrWizb7bd3gdkFzltKJuKm8sF9tKu6NpnBuTi2et4On86IGKlqnwA9&X-Amz-Signature=4371abca536c52e7ee35d2ef546b8fc106f584441c2bbae5f13dcefdc1fe57f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HFJ5GWO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T042807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA6Wu1%2FnbPVVlMUbjeqJZbXcPthbiIaP88QTQ0yuDOGpAiEAhKdEs%2FlOfswjtqwzgTVlIskrlx9jUK%2BKhxBvj0lPEXYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDA6WgkmNltoguNvKpircAzxGG6qXH2UxqzyD%2FDS6ZZYllM%2FiKxmFJESSsO7smufnwIRlCQOigN9LY%2F5sfSNCuTzfhK5vBBIL%2BCUObTbPr%2BkmepjjWTiASmmkI50zfHFWLZM7no%2BAyVfUbCGSGQx92X4b0o%2BGqwY1%2B4SLwxE8cRQSeFs%2BZOBOTMpNbYCls%2BQCLQlorfFjbMSfyGIiWMWHYNPfKMDgP09D87TtbOP95Ld5LquDEzC2ynQwiS22xUIbe65UDpDN5c1O%2BtuEOTGbT5xCXKR8%2BZc1XWoIlgmwtmBA%2FFtmzHHrWcovSr34NuCG6Tuvqd7Rhil%2Fx%2FPfBq3p5i9tsozcULkgOEY4t%2FmN33iEQ761kZBL1su1QGg5OelTRyYbUmQUc34YU2GltOkcoqX0klDL%2FRqw%2BiDVy5YmJ07VPe3uIr6pm3E%2FUfBgrKeRO5fyliIvdkpdBKXeIyIC7wdQUDZhGPYhQt5wKMFo96A19KSK9w6BNhH0Rm9HH8nNrSryMcjdoWiKAiJc3uVQcsHeWIxbQlVRifAZDvR0O5LEtLCZaGv1dEscPCzGT%2FnnGuM8Gsn7%2FPx9RR6ML7w25d2nAXl71RPoIwMEzI2rz9kM6u2InX0kfMvgW36W5OdT8ShdaIEa6utISu3SMIrezskGOqUBIWwjC6plnrE9nnWMxcvXgB8TAljvE9Gqy8QHuSqLs2tCqi5WFJEs5B0TZYuGlzmyIE5k0D92MuGFXmuK3QTbiKn4zQusAyoKDqLiMJBxuSJVtW4DTpEgO%2B9rkHXuifFs4lzzW36DfcDpUlABddjC0iBVNmLvJhPmYvvbEtcrWizb7bd3gdkFzltKJuKm8sF9tKu6NpnBuTi2et4On86IGKlqnwA9&X-Amz-Signature=80cb49c59a907af48be7dc1e89392cc8eef3b38d4302a4234b7c2d56122ac878&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

