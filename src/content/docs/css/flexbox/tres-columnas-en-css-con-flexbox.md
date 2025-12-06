---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMP45YA2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T203448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqYuEj3A39GxqTlR7TLmxtAwYcSCKPWkHtOrRBAenC5AIhAPmGHrPl3p%2FUc7gA4qBQ%2B2MalzHTvITAgQ6zS77GylDrKv8DCHoQABoMNjM3NDIzMTgzODA1Igzb4Q7tk2EoBPDIlfMq3AOPsXe8ldcJxjnFGsLSeDlE%2Bblv%2FDtvHj2235AjuPvOKROH9%2FHJ7KL2RiokSSRgPPn6o48QaigThWdqmWcD1cyijq7jcEMV2rKVJCjtgnz0VNGhbMnbljgcolPT9KwEElL0z%2B%2Bz87G5OM0pMN7tg7TR3KLACMlJ8FgKhbpPzl0WLUvB1BO0wfmDjX3Jwv5%2FIp6OL3ySEqWb6IWf%2B%2BU85544oudKa%2BgKoHtFwhtHJkCd5MnU6IVwJfwtCoBSbbpXiD6JYmDABg55zkTHFzn6OzwTKPRr5OSGqTmDontoBr4%2ByKTrwFCATYVfQ0Qu%2F6N4BvXQwHsIBingg8%2BaZryLX26cAYVfQ7rsWmz32Y8pgZxn8GfM8zl2Wh2PoH1rhrz6jwfkzwHTjTvYePq%2BpuzfKlHJYGyYRYu1RNkYy8LmwUBX3r1rAo%2B%2FeLxLM%2Bo28rzkGUzuVFOm4kkxqaQW%2FLTsedyHnuOkhRmSR%2BpTZwjKB3%2Fe1jKcD5wF%2Fc%2Bh2S5aVWd6vtaUnafIequq8%2FkinqoxB%2BuWxesWpn9FoMnG2YVOUeGJu6oaLaZoNJP0giZyh%2B1Z%2F6zJgFr%2BzyhfrA294Kre37dRPmb2E5Pax5GdZuppXfoibmBMMY5WIItW5BxrXjDkydHJBjqkAW128AJhxBbs2mEjDRjPVEylwLXF5%2BJy9tYZZS7w6QFFXwU6FMYBoAes0jIulpDLEwGQ4eeehk76T%2FNULNsrRpzGv%2FoWi1Gq%2FbysjPE80JwRXSBfxcKf1J1OFgdSb5es%2BzjXzpUG5q85fgWPCQfJazVkNKROKbbm8MaUDVYdoe3TqO%2B2Ru5Z%2F15pGDneDJPmRDEVx4PG7hN2Va8JLjbG8rF%2Ffmx4&X-Amz-Signature=d1ccf874a2befeb1a95e7381755b7fe81f97063ea6c596cf49db68ab837ce7e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMP45YA2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T203448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqYuEj3A39GxqTlR7TLmxtAwYcSCKPWkHtOrRBAenC5AIhAPmGHrPl3p%2FUc7gA4qBQ%2B2MalzHTvITAgQ6zS77GylDrKv8DCHoQABoMNjM3NDIzMTgzODA1Igzb4Q7tk2EoBPDIlfMq3AOPsXe8ldcJxjnFGsLSeDlE%2Bblv%2FDtvHj2235AjuPvOKROH9%2FHJ7KL2RiokSSRgPPn6o48QaigThWdqmWcD1cyijq7jcEMV2rKVJCjtgnz0VNGhbMnbljgcolPT9KwEElL0z%2B%2Bz87G5OM0pMN7tg7TR3KLACMlJ8FgKhbpPzl0WLUvB1BO0wfmDjX3Jwv5%2FIp6OL3ySEqWb6IWf%2B%2BU85544oudKa%2BgKoHtFwhtHJkCd5MnU6IVwJfwtCoBSbbpXiD6JYmDABg55zkTHFzn6OzwTKPRr5OSGqTmDontoBr4%2ByKTrwFCATYVfQ0Qu%2F6N4BvXQwHsIBingg8%2BaZryLX26cAYVfQ7rsWmz32Y8pgZxn8GfM8zl2Wh2PoH1rhrz6jwfkzwHTjTvYePq%2BpuzfKlHJYGyYRYu1RNkYy8LmwUBX3r1rAo%2B%2FeLxLM%2Bo28rzkGUzuVFOm4kkxqaQW%2FLTsedyHnuOkhRmSR%2BpTZwjKB3%2Fe1jKcD5wF%2Fc%2Bh2S5aVWd6vtaUnafIequq8%2FkinqoxB%2BuWxesWpn9FoMnG2YVOUeGJu6oaLaZoNJP0giZyh%2B1Z%2F6zJgFr%2BzyhfrA294Kre37dRPmb2E5Pax5GdZuppXfoibmBMMY5WIItW5BxrXjDkydHJBjqkAW128AJhxBbs2mEjDRjPVEylwLXF5%2BJy9tYZZS7w6QFFXwU6FMYBoAes0jIulpDLEwGQ4eeehk76T%2FNULNsrRpzGv%2FoWi1Gq%2FbysjPE80JwRXSBfxcKf1J1OFgdSb5es%2BzjXzpUG5q85fgWPCQfJazVkNKROKbbm8MaUDVYdoe3TqO%2B2Ru5Z%2F15pGDneDJPmRDEVx4PG7hN2Va8JLjbG8rF%2Ffmx4&X-Amz-Signature=509b4fb361f6fa91b607acae364d9e1760d9ad284237c5996d6abbd8fcf6db76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

