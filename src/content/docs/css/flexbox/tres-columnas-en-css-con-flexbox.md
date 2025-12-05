---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4FNGZGE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T173126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDztW1SLF55IOeJxudCuindCSGBbSpeJ7Gq276rRQUbwIgciqbC4%2BDBk%2FkBg78XPvmHirn2qYgko4BUkFvzHYkst8q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDB%2Fibn8rHJhaVXCPdyrcA%2BfWkSKUMRfRFngpBH66QulhtefXskzIu2yw6PuadQ3NXR1RMZmQh7PKY5ACwoO2%2BwnQcXtoUttxspWdHJ6vdgH92wdxZ%2FiSfZlExPvonMWE6EjVOLnPzIixNoOCIg8sNY71O1zZ14vXNWshToTGoAjsz30Z1JRIxwmImpbvRNVshK%2FShAbLDjG%2Bs%2BjY%2B4L4%2BDFqkX9uVleyKNuXaA2I4m2XlLITv0%2BXtnONtiGLiLo9Zuley20OTlBGqLmcZTpMezssrUxMNrjSDUOJdjgVSHM5dPrztvNFMSb0RZPTp3ifZY1yJuI1MNCHaLeF6MS2wjwPsah1iE7GVYJfZf01ZCofn0E7ywlorrJQ%2Fy7yD5q6X%2BpobCE3bWgtddZOjK%2F4N%2F3fKe01snOLHYyfSAJSlDmrdiGhennQKJlZOFtCuKBz3R7zY0rDr7drGDsUhUUw5jZN5fyECp2KfgF%2B096q1qqND%2BVQzcSsjttVC7NFE16jUlP1hmhtrKyOCXGhGv2ohXQVA4sZaBacgG7o12F%2F330FonpA2JwbJJRIBiaLF%2Bw00TCjYEmmA7MrHMjYA3rC0CPO8XjNUKgCHoZF8lFmf6rzhSufLHBZ3WOMaL627jwp3NVNwl%2BT%2Bj%2FL%2B%2FxkMIPpy8kGOqUBS5k%2B1KEXrMmyzSOImeRUGmyX1iVxWqKCS4XVZnRYcgGxkExp%2FdzoxJMHxTOa93xxGfHulLywvwxi86BpMTZY%2BOGOfjv82BXevjfCkOsKLxHt4VN5a1bYPrUr%2Fw3l6hvo6Ubfpzh70JU8vD5ev0Y%2FHUHzzcjTczsMj27ofXu7%2B8E%2Bf19Z8BEX3KsCEn3mgl4jkIMVSZ6FOxJ8JFqMhFdGEGG4xO%2FM&X-Amz-Signature=e4dea7ae21735dc6cdd1b968d4573ef904451b4d0f4380cb3bdb634c79be8f8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4FNGZGE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T173126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDztW1SLF55IOeJxudCuindCSGBbSpeJ7Gq276rRQUbwIgciqbC4%2BDBk%2FkBg78XPvmHirn2qYgko4BUkFvzHYkst8q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDB%2Fibn8rHJhaVXCPdyrcA%2BfWkSKUMRfRFngpBH66QulhtefXskzIu2yw6PuadQ3NXR1RMZmQh7PKY5ACwoO2%2BwnQcXtoUttxspWdHJ6vdgH92wdxZ%2FiSfZlExPvonMWE6EjVOLnPzIixNoOCIg8sNY71O1zZ14vXNWshToTGoAjsz30Z1JRIxwmImpbvRNVshK%2FShAbLDjG%2Bs%2BjY%2B4L4%2BDFqkX9uVleyKNuXaA2I4m2XlLITv0%2BXtnONtiGLiLo9Zuley20OTlBGqLmcZTpMezssrUxMNrjSDUOJdjgVSHM5dPrztvNFMSb0RZPTp3ifZY1yJuI1MNCHaLeF6MS2wjwPsah1iE7GVYJfZf01ZCofn0E7ywlorrJQ%2Fy7yD5q6X%2BpobCE3bWgtddZOjK%2F4N%2F3fKe01snOLHYyfSAJSlDmrdiGhennQKJlZOFtCuKBz3R7zY0rDr7drGDsUhUUw5jZN5fyECp2KfgF%2B096q1qqND%2BVQzcSsjttVC7NFE16jUlP1hmhtrKyOCXGhGv2ohXQVA4sZaBacgG7o12F%2F330FonpA2JwbJJRIBiaLF%2Bw00TCjYEmmA7MrHMjYA3rC0CPO8XjNUKgCHoZF8lFmf6rzhSufLHBZ3WOMaL627jwp3NVNwl%2BT%2Bj%2FL%2B%2FxkMIPpy8kGOqUBS5k%2B1KEXrMmyzSOImeRUGmyX1iVxWqKCS4XVZnRYcgGxkExp%2FdzoxJMHxTOa93xxGfHulLywvwxi86BpMTZY%2BOGOfjv82BXevjfCkOsKLxHt4VN5a1bYPrUr%2Fw3l6hvo6Ubfpzh70JU8vD5ev0Y%2FHUHzzcjTczsMj27ofXu7%2B8E%2Bf19Z8BEX3KsCEn3mgl4jkIMVSZ6FOxJ8JFqMhFdGEGG4xO%2FM&X-Amz-Signature=ca370b0c4710e7887ee8b73e87d06b1d4d000d5d2073b6ea17de983d3950032f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

