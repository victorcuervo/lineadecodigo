---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVL3AIPF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T045242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQD37PmqbAyUAmvxIz%2FlHUy2ixMMq4jQBxz56sIsCqxamQIhAKFLqt%2BPlbo%2Fee2PxNU7I5Y1FCesldDCpPvQFxlxlVGlKv8DCCIQABoMNjM3NDIzMTgzODA1IgyGlf5kuyjkGQrbzIgq3APdExUWmurWu0%2BwL%2B69DdskFr%2BAXQT623P0QaIO0uIoLcXIjE%2BiOUHGxRUi6kr6jxmmUBpFr8PJ%2BhALg3Vupw3iWe9rz4GkekmlIhmQt3zbVbMBjYn49IyhViVSiXnPSDqhjQ44vsLqILH%2FKHV4dbMvfD16xonHYj7yw%2F0LkISFyH0%2B2hKMGY%2BB77Agw0ngsR%2F4hy0gSyf1%2BYSKzCIn0%2FxaG76Xi9%2FcfvGrEJJntEHX0D%2F0p8HELjCs05NK4kCuPvH0nOmvA5JYuOWbmZW1hHU8ufiduaXtlO9qsSXQu9Se0n446BI9taUuzmW1UhVaUJVYYEDjMl782aVhCQ8HUazPQkeuZFNXFU9JUV1MQhbHMdnx514f6a8yNEXbpJjunxElPzB6Q%2BN7V1Vt4yCkOApIqMVh%2FngDbx73OJCpra0VcDbFLfRUdrC5UritsC48WgRV7PFiBUrDdV8aENQiMOxuFqL28z4amcwtdB9T94WO0C751mEUNQYm5xF5erFc1Zzllm7TLXEr%2FRuNB99YUI3nMXNusUrCQ4pxhcu9sAi%2B%2FyCx9lGSQetlCOfji3IsEEsYyYDV4tV4sj%2FE%2BlwzDrbMn%2Fw1iuSI8QymCO7CgoKPxwMQlRoM9winKV1DmzDFlL7JBjqkAcXwvyoduJEGsiNlMmBgiP4VbH6BTdHDoht4Y0oYHoi1dQHlLjhQSQ7C9DATeACVEDdcbXE0BRNxK1wnF2wILpGdivt%2BPkIiXepqkARAoUgjCqStkhRjlUr61V9xjuyzqL%2BWing0LOq5%2BC5yt61PHsO%2FlTOIgPF0Gd2JQIrYoBE%2BOeMvqJTjyy9bLRlHnqh4zfBK%2BYsSSg3m0BDeCRwOnyXqLQNX&X-Amz-Signature=b8e5e2a480185775953546fc8db3d2da1a902f6b3a2a271744e8d7cc6702cc2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVL3AIPF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T045242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQD37PmqbAyUAmvxIz%2FlHUy2ixMMq4jQBxz56sIsCqxamQIhAKFLqt%2BPlbo%2Fee2PxNU7I5Y1FCesldDCpPvQFxlxlVGlKv8DCCIQABoMNjM3NDIzMTgzODA1IgyGlf5kuyjkGQrbzIgq3APdExUWmurWu0%2BwL%2B69DdskFr%2BAXQT623P0QaIO0uIoLcXIjE%2BiOUHGxRUi6kr6jxmmUBpFr8PJ%2BhALg3Vupw3iWe9rz4GkekmlIhmQt3zbVbMBjYn49IyhViVSiXnPSDqhjQ44vsLqILH%2FKHV4dbMvfD16xonHYj7yw%2F0LkISFyH0%2B2hKMGY%2BB77Agw0ngsR%2F4hy0gSyf1%2BYSKzCIn0%2FxaG76Xi9%2FcfvGrEJJntEHX0D%2F0p8HELjCs05NK4kCuPvH0nOmvA5JYuOWbmZW1hHU8ufiduaXtlO9qsSXQu9Se0n446BI9taUuzmW1UhVaUJVYYEDjMl782aVhCQ8HUazPQkeuZFNXFU9JUV1MQhbHMdnx514f6a8yNEXbpJjunxElPzB6Q%2BN7V1Vt4yCkOApIqMVh%2FngDbx73OJCpra0VcDbFLfRUdrC5UritsC48WgRV7PFiBUrDdV8aENQiMOxuFqL28z4amcwtdB9T94WO0C751mEUNQYm5xF5erFc1Zzllm7TLXEr%2FRuNB99YUI3nMXNusUrCQ4pxhcu9sAi%2B%2FyCx9lGSQetlCOfji3IsEEsYyYDV4tV4sj%2FE%2BlwzDrbMn%2Fw1iuSI8QymCO7CgoKPxwMQlRoM9winKV1DmzDFlL7JBjqkAcXwvyoduJEGsiNlMmBgiP4VbH6BTdHDoht4Y0oYHoi1dQHlLjhQSQ7C9DATeACVEDdcbXE0BRNxK1wnF2wILpGdivt%2BPkIiXepqkARAoUgjCqStkhRjlUr61V9xjuyzqL%2BWing0LOq5%2BC5yt61PHsO%2FlTOIgPF0Gd2JQIrYoBE%2BOeMvqJTjyy9bLRlHnqh4zfBK%2BYsSSg3m0BDeCRwOnyXqLQNX&X-Amz-Signature=88bbce77d2dbb4263c2320add789abcc09680b137a860f00cc6469aaffd63103&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

