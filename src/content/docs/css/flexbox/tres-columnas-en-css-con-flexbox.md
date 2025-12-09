---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCBQGTGE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA21yBEQyp9rw6eDfFAImKYOH2LKAgyfjwePt3xIbI5oAiEAwWY%2BG38TBM%2Bwf%2Bs1gl8Iy4JHCXseJ2uAMjx66caQLyMqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCor8cIaioM71O8W3yrcA2jnTaWkgTFH9T4qD4mWVWhCCt5JNsmhMLoamkCa0LrZVvVJsVOKgnN%2F%2BRGL5a%2Ftv9zPK2l6LZ0G3jO4Qn7Znpey%2BMz%2Fow0YfjI4sKOWmiUjlNPD5s%2BZjFO4MazmrByeTktyhgdrvmflTN5OrL%2BtUAHXAo70e%2Fvhbd1%2FbmWXBMQf79OEt4Z8PuUwAO7jhIpraZcxeLsJGu75fmpkBqXZb%2F1%2Fg1QG2mXwn0ezPk9rm3hM9pmqKjgqyBrFVhXxSFpS8UBTQ%2F3EwBWGPOHP9XEOZmb2IO7xDk0QEDAh%2B9Xxv5SuRJ%2B537TziGyGxQSHGRxHC2Z0%2BuDQ3ZNQdY6ovY%2BUyVwgKVQLWcsI4wAIRvP%2By8qjSvVC5NUJ8N1t0YlCrqmsoSmOvqNzec0tUn9yaxXZQp1g0xsi01Y7WLYXTliPJGkDKbLB%2Bb39XnRQGeIy49H2goxskf3ndll6%2ButQrVlEd3hMkB2WqpyrfExpdcD9Orb04gdJLq0vLADMpm1HCQ8nArRyNIAbyb1L%2BQ8KOiki8Yb2%2FrFdwoQJ085elgyhwRBTFvb1gfU3kswOQeNsjZMhi%2BxKWroROroTSN3sfpJCQyr9MFYhyhl5K9QfYvUJow7DMt45htPL4Ky7ggttMLeu3skGOqUBfNvfGt%2FB8bo%2BkdX4hxoQyelwCLjwxL2pQDBFjVDH2vF%2BQWB%2BdjMV6aJQbdpBeJ9iQIqm3e2W9ooNvCXfp%2B%2BISs5E%2FKmw4fkkezblG134a39Ti3O7EOom1xSua7HZSnwJTcH%2FpbpVXdRucZWtjLQrmPloTR7N5OPL8j136K%2F9VFgqLc81pzju2ZsU5Gftvllas%2BA6xabvXo8rOWYRsbgDrQA%2FDFoM&X-Amz-Signature=6f64951aea83fcaff372d8f1d9a7330957979b851a62a34d9c93e8ce2863a395&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCBQGTGE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA21yBEQyp9rw6eDfFAImKYOH2LKAgyfjwePt3xIbI5oAiEAwWY%2BG38TBM%2Bwf%2Bs1gl8Iy4JHCXseJ2uAMjx66caQLyMqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCor8cIaioM71O8W3yrcA2jnTaWkgTFH9T4qD4mWVWhCCt5JNsmhMLoamkCa0LrZVvVJsVOKgnN%2F%2BRGL5a%2Ftv9zPK2l6LZ0G3jO4Qn7Znpey%2BMz%2Fow0YfjI4sKOWmiUjlNPD5s%2BZjFO4MazmrByeTktyhgdrvmflTN5OrL%2BtUAHXAo70e%2Fvhbd1%2FbmWXBMQf79OEt4Z8PuUwAO7jhIpraZcxeLsJGu75fmpkBqXZb%2F1%2Fg1QG2mXwn0ezPk9rm3hM9pmqKjgqyBrFVhXxSFpS8UBTQ%2F3EwBWGPOHP9XEOZmb2IO7xDk0QEDAh%2B9Xxv5SuRJ%2B537TziGyGxQSHGRxHC2Z0%2BuDQ3ZNQdY6ovY%2BUyVwgKVQLWcsI4wAIRvP%2By8qjSvVC5NUJ8N1t0YlCrqmsoSmOvqNzec0tUn9yaxXZQp1g0xsi01Y7WLYXTliPJGkDKbLB%2Bb39XnRQGeIy49H2goxskf3ndll6%2ButQrVlEd3hMkB2WqpyrfExpdcD9Orb04gdJLq0vLADMpm1HCQ8nArRyNIAbyb1L%2BQ8KOiki8Yb2%2FrFdwoQJ085elgyhwRBTFvb1gfU3kswOQeNsjZMhi%2BxKWroROroTSN3sfpJCQyr9MFYhyhl5K9QfYvUJow7DMt45htPL4Ky7ggttMLeu3skGOqUBfNvfGt%2FB8bo%2BkdX4hxoQyelwCLjwxL2pQDBFjVDH2vF%2BQWB%2BdjMV6aJQbdpBeJ9iQIqm3e2W9ooNvCXfp%2B%2BISs5E%2FKmw4fkkezblG134a39Ti3O7EOom1xSua7HZSnwJTcH%2FpbpVXdRucZWtjLQrmPloTR7N5OPL8j136K%2F9VFgqLc81pzju2ZsU5Gftvllas%2BA6xabvXo8rOWYRsbgDrQA%2FDFoM&X-Amz-Signature=e6d0f6ac74083be45f34eb1862f7250e43ca815e8629b6542dba1ce8a1b9099d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

