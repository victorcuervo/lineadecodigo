---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEG65LYE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T022427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICZ1hNuGHvzarVs0PPqdOH10LRHTsuYchJr3CncTZ185AiEAqPnJarESQFWn5p%2B1MV6REA1r7Y%2BiPi0KtY5WjAA2MUgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDIdckqtVNx4RgklRTyrcA8xh6YSQ1tjX5BY0uBZKEviHi7Q48QmjqzJnJ1HyzATWT%2FZUoucb1PE6qXRc%2FGFrZJjvowclKgNy9Q5%2F7fjhMmDcc755RLsBU4zOSfPjfa%2B5AtjWBgL8%2FDojXSSjvFyh6%2Ff3n2Kt73jCDit5Z9f79F%2FCxBPExVx3Pvbt1vA0Sai18krQBwFZDRmjiXVdVxpFhKF2NthNLNiv3bGc%2BySbKKLosnng6KpFcnXa%2B3xfgO%2BFRLlqnpgu9295ZBCVRaDTHS8tQjESpebg%2Bg2fq06HR4vgwWS9Ic8iTyB3qlc9thl7sR8%2BEq3E5FUf%2BXriTrMx0HekY%2FkneRapJ4BVpJ7MWHIdTT4j7Cpm1wDUZbn47AGh8XWSjvVylZm2OqJnCvfWOoRZ6JGVKspR5DdRqU%2BWjz8JNw1XW43Z0asyLGs6uGmRRF1N4DUbkD6HucwxvF6zTgosz84CF59SiD6863tg5osu3fCrWaGipMdjomGV8L%2BEdhHqG%2BY3BNVlyZixT%2BFpQBZPWoeUJPa3JQ%2FwR1h2rWhV8geDaRyN833I%2FUZUmpykDujk7i6ncGRG8xZxElbHqQmtr7hd%2B7NM6lA069IiY4qnZZDax6tlaW%2F2K%2FwousJcrbUlQTbgi%2FvCgkHQMInUw8kGOqUBzXnz7zNreAnFC5yws28I%2B0CzoQ4KrnMbGSBWAQ9KLR%2FoZ88OZY59ucmm96fn3S8JHB8ePfXG0f6mYFNrLh5H2qedclD3IT8Yx%2B4XRYy2wIjIGvyksXLJX%2FMybHTdkZ%2BuQMhiCMDRnnCS1zUWRWr5vCoJOgvUIaZ60euaTLYw7JUM3DIYXhFP5S%2BDuacGScDWh6QyS810OWIllyyXl3fK04JYTMDP&X-Amz-Signature=fed960d75d8694dcd8eabd611df3751c7a85d1711f64e5741c6f414bc3cd90f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEG65LYE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T022427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICZ1hNuGHvzarVs0PPqdOH10LRHTsuYchJr3CncTZ185AiEAqPnJarESQFWn5p%2B1MV6REA1r7Y%2BiPi0KtY5WjAA2MUgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDIdckqtVNx4RgklRTyrcA8xh6YSQ1tjX5BY0uBZKEviHi7Q48QmjqzJnJ1HyzATWT%2FZUoucb1PE6qXRc%2FGFrZJjvowclKgNy9Q5%2F7fjhMmDcc755RLsBU4zOSfPjfa%2B5AtjWBgL8%2FDojXSSjvFyh6%2Ff3n2Kt73jCDit5Z9f79F%2FCxBPExVx3Pvbt1vA0Sai18krQBwFZDRmjiXVdVxpFhKF2NthNLNiv3bGc%2BySbKKLosnng6KpFcnXa%2B3xfgO%2BFRLlqnpgu9295ZBCVRaDTHS8tQjESpebg%2Bg2fq06HR4vgwWS9Ic8iTyB3qlc9thl7sR8%2BEq3E5FUf%2BXriTrMx0HekY%2FkneRapJ4BVpJ7MWHIdTT4j7Cpm1wDUZbn47AGh8XWSjvVylZm2OqJnCvfWOoRZ6JGVKspR5DdRqU%2BWjz8JNw1XW43Z0asyLGs6uGmRRF1N4DUbkD6HucwxvF6zTgosz84CF59SiD6863tg5osu3fCrWaGipMdjomGV8L%2BEdhHqG%2BY3BNVlyZixT%2BFpQBZPWoeUJPa3JQ%2FwR1h2rWhV8geDaRyN833I%2FUZUmpykDujk7i6ncGRG8xZxElbHqQmtr7hd%2B7NM6lA069IiY4qnZZDax6tlaW%2F2K%2FwousJcrbUlQTbgi%2FvCgkHQMInUw8kGOqUBzXnz7zNreAnFC5yws28I%2B0CzoQ4KrnMbGSBWAQ9KLR%2FoZ88OZY59ucmm96fn3S8JHB8ePfXG0f6mYFNrLh5H2qedclD3IT8Yx%2B4XRYy2wIjIGvyksXLJX%2FMybHTdkZ%2BuQMhiCMDRnnCS1zUWRWr5vCoJOgvUIaZ60euaTLYw7JUM3DIYXhFP5S%2BDuacGScDWh6QyS810OWIllyyXl3fK04JYTMDP&X-Amz-Signature=f7e4d8d10a729c8bff5f6c5512c06101411b30e82e58e66597ea2c3d8a97f7dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

