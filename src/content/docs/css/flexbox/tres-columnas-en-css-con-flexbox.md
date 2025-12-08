---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5BGKLZI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T083632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnkvmzswfhV6TZYwtGhokFMpb5eJF5Jv9jRuC4ZZiIOAiAhKU162g%2FQ29YxF4F8Ah5vWjHlWziFFF3vpkRL3ozW4CqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnOozIaZm5q5Kjf2rKtwDrTL27lOxz%2FfqALG4vdDXb2ZQ7fcUX9Lko0Uy47LoHfePBZnN1gOKJfRY%2FIlF2%2FDXxyKORbgOup4MuM3fHPfVbky0F%2F31gP2nzV5cQh9v8yFI4Wp4HZFplekxl3OiKfNRH4%2FuswHaiofvvA%2BdUn2lLSBDCPmz1UUvifaCYlBJWxi6sn%2FllrZcr%2FMgkSvXB4gH1roav1Pq6ydVW1wtq9MU0tHZYl%2FDyojKw06Qj%2FBUJ%2FWnVlh25dIgXURM1iab1%2BTHVeAYolJL4b7ayNS1GY0DLF6I3q4kzHFwyWn6pxI9sYtX1k3%2FOAa3u9J7QmLKax7S9XumSihWqpODmFPb4ShFI90UjwgkloEJMQ7zhmRfr6k11v0BWidDZOg44H0jpkMI5XYx5zmE0H35yaykghcdgnvTUfNKB9wXXnNsQlNDBW61HyNfeoJtgr5SwwKEEAdSR3Gi6eLzD6okdn9L54USRNsCVkDCkIpGXuo0DBMbdVE2a1BwbidLza6oXR8vfdQhPcvjp9u1ms3lXkOdwS0Jkoxgjh0grLj%2BSToneII9hsLK5I6%2B9iomtbZsf0Xwayuz0OWT8q1TJWsPVlhTlMYy%2FnwpP9H2AyX2DoZg3c41nqlMIIBKKe4EzOSMRDAwr%2B3ZyQY6pgFgwtlwtgkXRqzkU3cAkETEb6tKm7z6iLiz3iZuiVqblmyoFM4N65TP7mvpCKQCL8KmF24agX%2FdXXZxB6nldlZIIG9jLD5bGLd3bXIR6WviL7Z2z39KJWMTCXPA378LME%2Fa7VRnmYtN0QpMENRGmpCowlw7Vs8IrkDpVpy8vh0Ztdq%2FIWXYJP8Bd%2FSt4PV0F6Q5OAPs4mhHSLwIw6Nvjw5RzTlVyd%2F7&X-Amz-Signature=7e00893a0572d1d9a1837067a25bcdde0227f77bc9c91b2b13a6bf7560b684b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5BGKLZI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T083632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnkvmzswfhV6TZYwtGhokFMpb5eJF5Jv9jRuC4ZZiIOAiAhKU162g%2FQ29YxF4F8Ah5vWjHlWziFFF3vpkRL3ozW4CqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnOozIaZm5q5Kjf2rKtwDrTL27lOxz%2FfqALG4vdDXb2ZQ7fcUX9Lko0Uy47LoHfePBZnN1gOKJfRY%2FIlF2%2FDXxyKORbgOup4MuM3fHPfVbky0F%2F31gP2nzV5cQh9v8yFI4Wp4HZFplekxl3OiKfNRH4%2FuswHaiofvvA%2BdUn2lLSBDCPmz1UUvifaCYlBJWxi6sn%2FllrZcr%2FMgkSvXB4gH1roav1Pq6ydVW1wtq9MU0tHZYl%2FDyojKw06Qj%2FBUJ%2FWnVlh25dIgXURM1iab1%2BTHVeAYolJL4b7ayNS1GY0DLF6I3q4kzHFwyWn6pxI9sYtX1k3%2FOAa3u9J7QmLKax7S9XumSihWqpODmFPb4ShFI90UjwgkloEJMQ7zhmRfr6k11v0BWidDZOg44H0jpkMI5XYx5zmE0H35yaykghcdgnvTUfNKB9wXXnNsQlNDBW61HyNfeoJtgr5SwwKEEAdSR3Gi6eLzD6okdn9L54USRNsCVkDCkIpGXuo0DBMbdVE2a1BwbidLza6oXR8vfdQhPcvjp9u1ms3lXkOdwS0Jkoxgjh0grLj%2BSToneII9hsLK5I6%2B9iomtbZsf0Xwayuz0OWT8q1TJWsPVlhTlMYy%2FnwpP9H2AyX2DoZg3c41nqlMIIBKKe4EzOSMRDAwr%2B3ZyQY6pgFgwtlwtgkXRqzkU3cAkETEb6tKm7z6iLiz3iZuiVqblmyoFM4N65TP7mvpCKQCL8KmF24agX%2FdXXZxB6nldlZIIG9jLD5bGLd3bXIR6WviL7Z2z39KJWMTCXPA378LME%2Fa7VRnmYtN0QpMENRGmpCowlw7Vs8IrkDpVpy8vh0Ztdq%2FIWXYJP8Bd%2FSt4PV0F6Q5OAPs4mhHSLwIw6Nvjw5RzTlVyd%2F7&X-Amz-Signature=b5c72ad4bbb071c374f8af33e3dfa5f844182404e5ccf89aff8c770792397a4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

