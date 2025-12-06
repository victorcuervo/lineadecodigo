---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFVLNRJY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T055334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFjv6esd5pMyncaNykDkdmHVqgGdq5Lq1OxS6bCJP603AiEAwk8DP31NAbkTvr7uQTjNbn7OJdO%2FDpVItGkEkzD%2BYnsq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDNZ7gZd2Q4A0TcINayrcA4xL1npTQfr%2Buc2zVEuFAY466%2B56cnA7w7dKq%2BU2KGGdxbDtXMw6z%2FUdWRp4LZZrCC4msX5x68n9rsIy5kyiO%2FySY2Bliroc9ozvABBP9CAV%2FQxC%2B5gY5%2FCVoSvuoH0pyGw4Yr1Q9ghPvRy0ZmXC%2B6tNi%2FJLFaSji%2FTOtq4GxinES4kcvSLJV0Ivmuqem0mm2V4Rx5IBA6OiarDTwiJ5J2n5Ef9Am%2FwmqZwstM5gUJoyv7lGaoq6wWoa6iCuqUAe8E2S3PsGyo7MKre3zn3hr7GbBKNQVhYzo1%2BsGk%2BeWyK5fXnLEWKObUdNAbt%2BYwhoFOoASueI%2BRkuT89B%2FBml5umYN891Emx78X6mcts8laJ7LRQBwp5XICpElxAfnxK6VjE346QIZgWpbSoVMZ%2FkOO%2ByKqz9wLemWHlHh3Bq448827BDeqjAQWRyXeWAOt89%2FSlVsuny5vQS2gzYAMSKyarKkeTtpaBWQZvB7CO%2FDTQwpYyNv%2FMzI8kbu00DK3HG1LTtU1i8FiJjil7tKQwmLO0kOqD%2BsddYET7XpvxAirlegHFxpd05QBuhrIgzQpEKFoNfbdkLnK7jT24mHCofRgOfkjGhj8aPljzfQbrgzSLk9gEQBWonQnhvT1onMIf9zskGOqUB7bpxFWudrYlDE54Rr7RWmus0jXHLrGbxs8PbIVYLCX%2F42EtGqONkzoLxV3ddbIZtDDISsQlzKJapr%2BduhsZeCVZHvKd92erMXhBAC3boeDXIqqvoQoF3x5Eb8ifh5UujYlBUGCXx57dNcYX2J9dQY3Lr0Hpe7PtO3SMRVUGt7F6GAwlA6hJ243owF1TCF9HKwe8kFkxQ4qNyS7OOIWHxEdN%2FbZ%2F%2B&X-Amz-Signature=1bad2e3452bf47e5c9e926a3e211338f4bdb44b57373effe3bc8fb89b9bab63d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFVLNRJY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T055334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFjv6esd5pMyncaNykDkdmHVqgGdq5Lq1OxS6bCJP603AiEAwk8DP31NAbkTvr7uQTjNbn7OJdO%2FDpVItGkEkzD%2BYnsq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDNZ7gZd2Q4A0TcINayrcA4xL1npTQfr%2Buc2zVEuFAY466%2B56cnA7w7dKq%2BU2KGGdxbDtXMw6z%2FUdWRp4LZZrCC4msX5x68n9rsIy5kyiO%2FySY2Bliroc9ozvABBP9CAV%2FQxC%2B5gY5%2FCVoSvuoH0pyGw4Yr1Q9ghPvRy0ZmXC%2B6tNi%2FJLFaSji%2FTOtq4GxinES4kcvSLJV0Ivmuqem0mm2V4Rx5IBA6OiarDTwiJ5J2n5Ef9Am%2FwmqZwstM5gUJoyv7lGaoq6wWoa6iCuqUAe8E2S3PsGyo7MKre3zn3hr7GbBKNQVhYzo1%2BsGk%2BeWyK5fXnLEWKObUdNAbt%2BYwhoFOoASueI%2BRkuT89B%2FBml5umYN891Emx78X6mcts8laJ7LRQBwp5XICpElxAfnxK6VjE346QIZgWpbSoVMZ%2FkOO%2ByKqz9wLemWHlHh3Bq448827BDeqjAQWRyXeWAOt89%2FSlVsuny5vQS2gzYAMSKyarKkeTtpaBWQZvB7CO%2FDTQwpYyNv%2FMzI8kbu00DK3HG1LTtU1i8FiJjil7tKQwmLO0kOqD%2BsddYET7XpvxAirlegHFxpd05QBuhrIgzQpEKFoNfbdkLnK7jT24mHCofRgOfkjGhj8aPljzfQbrgzSLk9gEQBWonQnhvT1onMIf9zskGOqUB7bpxFWudrYlDE54Rr7RWmus0jXHLrGbxs8PbIVYLCX%2F42EtGqONkzoLxV3ddbIZtDDISsQlzKJapr%2BduhsZeCVZHvKd92erMXhBAC3boeDXIqqvoQoF3x5Eb8ifh5UujYlBUGCXx57dNcYX2J9dQY3Lr0Hpe7PtO3SMRVUGt7F6GAwlA6hJ243owF1TCF9HKwe8kFkxQ4qNyS7OOIWHxEdN%2FbZ%2F%2B&X-Amz-Signature=5da69e364721560c3dd515a0b74364a7cf6dcfce263a20abd2ce1d3bb5104c8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

