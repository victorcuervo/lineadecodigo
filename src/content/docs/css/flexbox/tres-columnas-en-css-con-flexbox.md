---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4GSG7EE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T212326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEh8aTru%2FwwOFJ8tlFJhzY26h2i%2BRLz6EuRctY4Gd38aAiEAyaqZsQ%2Fk5vkME%2Btb2nbGqGZxFx04pWCAjjAne8o289IqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLVIb0usjH3t%2BD5iKCrcAzO5hw%2BJpFLBxjJ%2F23SrstHvP4o%2BWAzgIzkM56mrxtNMAnHbGldA2YTmyFL5Btvk7QifpdE0k1WSh0Z4CCq3eJ1B2w9qEw8OYPtRPpUEV0nnf%2FsrhtG1K77qujmgWu%2BmCtMfBllGyK%2BrGycHslghk27bW91m0HV3mcyad1%2FLpDIzrHvMII5zf2v3%2FsKFLCfqcUu1UvHzN6ktmznIxUtB6gJWGQFGMFcoOvMeosobbK6BKGBMUZcfoWtV7AwUSHh9fmLAVN5sffxeYv8ia7FuUiks2bjWx3yvsmoSeNau8eVWYbWpLhZmm9YQ6TwjgVGkpY%2BzCnAB6SqDH15GCckkksiBmZ%2BbhdPIgguvQYT3xQHCGQFiln%2Fp14GkgvbdtBd3QUYJRyyuARGxva5N0EbXkOekD5lmxUFJl5Eh483JJ0B4GsiZYOHu3%2B6xg4HOAC4JGU6pQVuZXV4r4A9DdueuqU1AhSIiizXxKBMoZsGyjSs7UREuIIdwzWo4shBXVHghV9ATiTB9gFC4AF63W8sRwjWljusQYfA2fxoPFs3%2FckrQSJrWpeXLHzWWlYkuH58aEZkcHCAl7l%2BiH%2FGg2OJnBLhZl5QNq05R1CXpTGbK3vgYeHqOyvp2wzRZvRBgMP3G18kGOqUB0dfou7DMo%2FGFrpoSSy%2BX1xj5V1%2B6BAEMVh5ChuUTMHQmYxWnrkD8PXL2cdU2QS08FOTUBaQwzK6PPmjPgCaRW5KIdS3NktNbd8Gmbt1ebmKAnJNHsZYk0VZ%2Br54xesthGGJ%2BJOUErdHILWIK5yI7%2Bwf1FwuS4U8HXE9GfdamfogrX2mcR3g4x16WdAqQD5W1oQ5oFOihvGg6N5DpNxeA3SJKBrYG&X-Amz-Signature=6542195bbd6f352594b95229d61cb458ce6c03dc1ac6d603f92b2044e73ca652&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4GSG7EE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T212326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEh8aTru%2FwwOFJ8tlFJhzY26h2i%2BRLz6EuRctY4Gd38aAiEAyaqZsQ%2Fk5vkME%2Btb2nbGqGZxFx04pWCAjjAne8o289IqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLVIb0usjH3t%2BD5iKCrcAzO5hw%2BJpFLBxjJ%2F23SrstHvP4o%2BWAzgIzkM56mrxtNMAnHbGldA2YTmyFL5Btvk7QifpdE0k1WSh0Z4CCq3eJ1B2w9qEw8OYPtRPpUEV0nnf%2FsrhtG1K77qujmgWu%2BmCtMfBllGyK%2BrGycHslghk27bW91m0HV3mcyad1%2FLpDIzrHvMII5zf2v3%2FsKFLCfqcUu1UvHzN6ktmznIxUtB6gJWGQFGMFcoOvMeosobbK6BKGBMUZcfoWtV7AwUSHh9fmLAVN5sffxeYv8ia7FuUiks2bjWx3yvsmoSeNau8eVWYbWpLhZmm9YQ6TwjgVGkpY%2BzCnAB6SqDH15GCckkksiBmZ%2BbhdPIgguvQYT3xQHCGQFiln%2Fp14GkgvbdtBd3QUYJRyyuARGxva5N0EbXkOekD5lmxUFJl5Eh483JJ0B4GsiZYOHu3%2B6xg4HOAC4JGU6pQVuZXV4r4A9DdueuqU1AhSIiizXxKBMoZsGyjSs7UREuIIdwzWo4shBXVHghV9ATiTB9gFC4AF63W8sRwjWljusQYfA2fxoPFs3%2FckrQSJrWpeXLHzWWlYkuH58aEZkcHCAl7l%2BiH%2FGg2OJnBLhZl5QNq05R1CXpTGbK3vgYeHqOyvp2wzRZvRBgMP3G18kGOqUB0dfou7DMo%2FGFrpoSSy%2BX1xj5V1%2B6BAEMVh5ChuUTMHQmYxWnrkD8PXL2cdU2QS08FOTUBaQwzK6PPmjPgCaRW5KIdS3NktNbd8Gmbt1ebmKAnJNHsZYk0VZ%2Br54xesthGGJ%2BJOUErdHILWIK5yI7%2Bwf1FwuS4U8HXE9GfdamfogrX2mcR3g4x16WdAqQD5W1oQ5oFOihvGg6N5DpNxeA3SJKBrYG&X-Amz-Signature=f6714c79dc476b68ec990b6605ff5e23a5e17002710b53f40b11ce34c8194bbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

