---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSGUEVF7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzLZ5yxxti56G52PVCrUDhhBIohDjXJ8xcziqHJBFGOwIhAK8ZPOyW5fkMSAjAxlAE28xFbPuCMNiJnYGynCe0sA5BKv8DCFsQABoMNjM3NDIzMTgzODA1IgyYDumFroKn4m5ltu0q3ANo8BnG86ELpkOZq4XwNIn8zXX2nU2GN%2BzaoeFo5IyGcADzXrrcZt9m8RF7xkhXTfCAPXWoAr4oSMQ5%2FUdJ6GvkZu8bs2JNX1WHxm4qUgGn6t2yjTlA90Racv67hQaOU0eQsUp7uQdQoIjd5FsVTs83TTnGYJCCUWdMJvJ8cMQbrQ0pV6XhZkAwhIYq0EQVZwCM%2BUVWi08TOWsxHYOM5pVNB7VV3%2B3xeRoRzLMJDHAEI8jntVmc6ATA1u35DYGYLGKDxqQjci%2FfWgBJ5zmc0rURVeX3PfSdkbsXtjLWZJ4Hk8vjjhJSyzJQ4uR%2FxwgDOmmcVusRZNTMT0we0EZnNCL9gciq1Eh6oOIosYiZdbh%2FoVoqW1zX1lB5FvIys7OXXdpakLD%2Fb4BHvLXCPpmZu4vbtpTaevQ42DoAjm7tqaVKwXgxA0UdPyXDNlLgZmlGX0Pt8UlmmlEy1kr1ah3P6x%2F1qc%2BYx%2BJSQPMXgfBPG34X80g79sfsKsUvfbjXG7TWubjG5ub8kwoRXn%2BTVtl6je%2F6JFOIC9pzd0B9IWUIlToa%2BTU55w2%2FLwKInjEiiT64AhTkEm%2FDerozHe0JAQ7JoYz%2B84oCZRhUvc9bIJXWjupsP%2B8EKlTLz9Vnk0g9XzCI0crJBjqkAZeDOnVnP2I5HJcdlg3H9lZ%2Fpc9cUvVHQH0PeukUk7ukk8AQaaQkO60QcSdbJr53IMvJhxGbiVxWMY5WQ28XDUBj348sYOfmf8ksC4jnfTnhmx1LSCOXt8wLIKQRWDrTABWZFE4k4yBeMc855dogG%2FSGELwMEj1jwfo0EtS9BHtXN%2BjV3t37Fcrhs3I%2B%2FAMpo1qiL8Oz0JraJ%2FDiH639shAdDbJy&X-Amz-Signature=af52a458ed63f1cc24c49313cd814e2911536cd470df48bd22ace7745bef3796&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSGUEVF7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzLZ5yxxti56G52PVCrUDhhBIohDjXJ8xcziqHJBFGOwIhAK8ZPOyW5fkMSAjAxlAE28xFbPuCMNiJnYGynCe0sA5BKv8DCFsQABoMNjM3NDIzMTgzODA1IgyYDumFroKn4m5ltu0q3ANo8BnG86ELpkOZq4XwNIn8zXX2nU2GN%2BzaoeFo5IyGcADzXrrcZt9m8RF7xkhXTfCAPXWoAr4oSMQ5%2FUdJ6GvkZu8bs2JNX1WHxm4qUgGn6t2yjTlA90Racv67hQaOU0eQsUp7uQdQoIjd5FsVTs83TTnGYJCCUWdMJvJ8cMQbrQ0pV6XhZkAwhIYq0EQVZwCM%2BUVWi08TOWsxHYOM5pVNB7VV3%2B3xeRoRzLMJDHAEI8jntVmc6ATA1u35DYGYLGKDxqQjci%2FfWgBJ5zmc0rURVeX3PfSdkbsXtjLWZJ4Hk8vjjhJSyzJQ4uR%2FxwgDOmmcVusRZNTMT0we0EZnNCL9gciq1Eh6oOIosYiZdbh%2FoVoqW1zX1lB5FvIys7OXXdpakLD%2Fb4BHvLXCPpmZu4vbtpTaevQ42DoAjm7tqaVKwXgxA0UdPyXDNlLgZmlGX0Pt8UlmmlEy1kr1ah3P6x%2F1qc%2BYx%2BJSQPMXgfBPG34X80g79sfsKsUvfbjXG7TWubjG5ub8kwoRXn%2BTVtl6je%2F6JFOIC9pzd0B9IWUIlToa%2BTU55w2%2FLwKInjEiiT64AhTkEm%2FDerozHe0JAQ7JoYz%2B84oCZRhUvc9bIJXWjupsP%2B8EKlTLz9Vnk0g9XzCI0crJBjqkAZeDOnVnP2I5HJcdlg3H9lZ%2Fpc9cUvVHQH0PeukUk7ukk8AQaaQkO60QcSdbJr53IMvJhxGbiVxWMY5WQ28XDUBj348sYOfmf8ksC4jnfTnhmx1LSCOXt8wLIKQRWDrTABWZFE4k4yBeMc855dogG%2FSGELwMEj1jwfo0EtS9BHtXN%2BjV3t37Fcrhs3I%2B%2FAMpo1qiL8Oz0JraJ%2FDiH639shAdDbJy&X-Amz-Signature=8cd58c59e902b1105666d532d7d0f095fb4ffe80e1dde75fa3928c8b06532842&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

