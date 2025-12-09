---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVETUJ5I%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T030555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhMqCAQiMEzOB0WKnS0KB6ejMDO9p5lewDJGpu0GaA3AiEAr%2FVU5zk%2B4hdUA5zAI9f6YeF3w3lIoyxX%2FsjzIaUw2jYqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLikUhmM12hTulRRVCrcA%2FMJLnfSVzXGLFce3nRSO5XXc6jAiIG9KZ0Kph1gl%2BaRjAjgWwsL1fmyuNL7OjZYqjxm1e68rWDJ21tuldNpD%2BkDNx9DSTufct%2FBNGmFGqQFAs3MN3wlUyDWCxv6kGu4B06I2HP27lmT8HxFBltEM35DaGh3yn8gi99EvYIL03de%2B5unEzcuj2bZ23vlsrRMTnwuaezwqx9prk2N8VbDzAye6tgLmJl%2Fvw9XfTEuc9%2BjTmpD3yFsPYqRbRMy0I1lGZOqYNxDBgIVxKU25yCObKKh4mwst5mXjUGqlvbEuh3rW1e8AZmH20ufos3ITno8lYHPZ94VoHlAbPiOBFGepBmK3hk9VUYBRLUzaNK0XqZ%2FzsKagpUmwx7W9dHQSDUag3s01EJ%2FVx3HK6KXA6cJzyjcztisPhkdKAYJcrfELHuZlEyh5KVvU8eXEckLQHkOjfnHhI95EBN24Q%2Fv4hrAQz8h52cSFssUSCHG9Xk0tKui4j5JB31T6EuLpoWjAJkthAaKMxDDCSPc8QjOWyebME4oVtFOQbuVtRiwefcHJu9QcJe5PXVTXW0iVRAj4TdaLuJVfSvevbQrp%2F76wVvg1eI0YSOmYq4Q%2BxwBxKsWu7YBmzI6H0J6ICWvA53BMIaO3skGOqUBkKOrsLjBTodbprzxpKgOPqTLx1wnaDmKN86RBVnIuXU2y4ZR%2FRTSwXN2nlMlhpMjPjlyH5ZVvMOhKj%2BQu7%2Fe3pIZ621zcD68jEdqamMGTsirb3xlCL0mh2at3kAx%2Fzw3thQ%2F6gWnpp5DRT3lUgOaYDPEAsJn3gJTiEY7xnnvNvV9p%2FdbZh0G6GHSkA1AspfIdnH%2FRd6wU%2BVL49t%2F77wnrlOLhOdA&X-Amz-Signature=0ef614d6673da74fff6fed4cd64c077fbfb9e135c51690fa6913b66578d24f5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVETUJ5I%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T030555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhMqCAQiMEzOB0WKnS0KB6ejMDO9p5lewDJGpu0GaA3AiEAr%2FVU5zk%2B4hdUA5zAI9f6YeF3w3lIoyxX%2FsjzIaUw2jYqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLikUhmM12hTulRRVCrcA%2FMJLnfSVzXGLFce3nRSO5XXc6jAiIG9KZ0Kph1gl%2BaRjAjgWwsL1fmyuNL7OjZYqjxm1e68rWDJ21tuldNpD%2BkDNx9DSTufct%2FBNGmFGqQFAs3MN3wlUyDWCxv6kGu4B06I2HP27lmT8HxFBltEM35DaGh3yn8gi99EvYIL03de%2B5unEzcuj2bZ23vlsrRMTnwuaezwqx9prk2N8VbDzAye6tgLmJl%2Fvw9XfTEuc9%2BjTmpD3yFsPYqRbRMy0I1lGZOqYNxDBgIVxKU25yCObKKh4mwst5mXjUGqlvbEuh3rW1e8AZmH20ufos3ITno8lYHPZ94VoHlAbPiOBFGepBmK3hk9VUYBRLUzaNK0XqZ%2FzsKagpUmwx7W9dHQSDUag3s01EJ%2FVx3HK6KXA6cJzyjcztisPhkdKAYJcrfELHuZlEyh5KVvU8eXEckLQHkOjfnHhI95EBN24Q%2Fv4hrAQz8h52cSFssUSCHG9Xk0tKui4j5JB31T6EuLpoWjAJkthAaKMxDDCSPc8QjOWyebME4oVtFOQbuVtRiwefcHJu9QcJe5PXVTXW0iVRAj4TdaLuJVfSvevbQrp%2F76wVvg1eI0YSOmYq4Q%2BxwBxKsWu7YBmzI6H0J6ICWvA53BMIaO3skGOqUBkKOrsLjBTodbprzxpKgOPqTLx1wnaDmKN86RBVnIuXU2y4ZR%2FRTSwXN2nlMlhpMjPjlyH5ZVvMOhKj%2BQu7%2Fe3pIZ621zcD68jEdqamMGTsirb3xlCL0mh2at3kAx%2Fzw3thQ%2F6gWnpp5DRT3lUgOaYDPEAsJn3gJTiEY7xnnvNvV9p%2FdbZh0G6GHSkA1AspfIdnH%2FRd6wU%2BVL49t%2F77wnrlOLhOdA&X-Amz-Signature=eb493d1a2a4e56b001d8ad2fbefec5f1323019f3a25a64edc04ed14ad1b76f94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

