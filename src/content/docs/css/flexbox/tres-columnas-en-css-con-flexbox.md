---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3LQO3I7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T045717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtBgrFJ9CkNSdewIFKWEMOwPuadB8l5ze9KPJ9ZaK52QIgV65kqmV9YNNHeccOYO%2FZzgWPbuEcZbrjXAjghGHs16wqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCGQEVKYzfn6gaaLyrcA5YuPMU%2F9rZ8cJSeftKN88MWhEMqiYbX5SAhfsPXgqfW7tAYnXVbobZ0a0GGsl1DP7a2dwWvsLaA5BTjjEkU4WAVMbmb612zVhfovN%2FXyGoRiNlUwVPrBhGbX7MreXpWEh11kCq6YLGp02EwifKbYVhLbyF1Xg28vDAyn5jm%2FhWsUJxkFe1pwU3izYBLunZEvr7IFjS88KltkQBbhbkJQcXnk3WGrSroJe2DkUhoqbAVGLOCM3oXodw%2B2Wk8jdy4uknIIqeKfUaQc3kRZrv5jPqatu8lQzSZMbf%2Bqe7SIrP3yEIrsi3TbqcQ0dv%2F1kkCN2mPX5T6Xzm%2F%2BqWbaSmY6AjBjhqDFF6vSmo%2FfGY%2B45ttnYnlSvu84KgrDQHKX4%2FpSKBXg%2FR846K8mm8ykDkFRgTczLF2wzP71ph6Xd1scYT1nHR%2BI2wRGN6F1IHF3%2Bs9PJuD0nWw3S2M%2BoTmB9GAUqACeetrJbwOFnWXGJ%2BJ8BnERvMTx5uNGdF%2FoX6Fe1%2BjdU74PQORrwwp7hsgVarKrxHtWTLJLJ%2BVeSbRn%2FVtImroM4%2FAecDrs%2Bh2KwHQEs8AgLM1dXdMWwaPY1J66OAkB0w5EfiVAzOx6lpubc93ggEreXILq6XgfVlDqvKZMJq02ckGOqUB%2F%2FsuCNLod0H4oFQjc1J38qAy%2FM2V5katByMJqsG76bSdC5l2jKguVzIM6uQ4eayn2VzingSt7jiAt%2BdzxotVSV%2FjM3Q4xt3Ksek9SQpyPlMsEjz3A8eowxzqvdYfZ8T1vDN3RzwibLNnS1JLEnqlBikSrJhR9zOpQ%2BffOIBLs5nqDzJLjZOKU9%2FOnCS4ApYe5oJ83fjmiV%2B6D5d62aMO0fP7fmm7&X-Amz-Signature=0daf0eb8ebb714e3d5595d21d2252a40ffa1e94498b45ae22923fd24bdc61cb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3LQO3I7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T045717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtBgrFJ9CkNSdewIFKWEMOwPuadB8l5ze9KPJ9ZaK52QIgV65kqmV9YNNHeccOYO%2FZzgWPbuEcZbrjXAjghGHs16wqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCGQEVKYzfn6gaaLyrcA5YuPMU%2F9rZ8cJSeftKN88MWhEMqiYbX5SAhfsPXgqfW7tAYnXVbobZ0a0GGsl1DP7a2dwWvsLaA5BTjjEkU4WAVMbmb612zVhfovN%2FXyGoRiNlUwVPrBhGbX7MreXpWEh11kCq6YLGp02EwifKbYVhLbyF1Xg28vDAyn5jm%2FhWsUJxkFe1pwU3izYBLunZEvr7IFjS88KltkQBbhbkJQcXnk3WGrSroJe2DkUhoqbAVGLOCM3oXodw%2B2Wk8jdy4uknIIqeKfUaQc3kRZrv5jPqatu8lQzSZMbf%2Bqe7SIrP3yEIrsi3TbqcQ0dv%2F1kkCN2mPX5T6Xzm%2F%2BqWbaSmY6AjBjhqDFF6vSmo%2FfGY%2B45ttnYnlSvu84KgrDQHKX4%2FpSKBXg%2FR846K8mm8ykDkFRgTczLF2wzP71ph6Xd1scYT1nHR%2BI2wRGN6F1IHF3%2Bs9PJuD0nWw3S2M%2BoTmB9GAUqACeetrJbwOFnWXGJ%2BJ8BnERvMTx5uNGdF%2FoX6Fe1%2BjdU74PQORrwwp7hsgVarKrxHtWTLJLJ%2BVeSbRn%2FVtImroM4%2FAecDrs%2Bh2KwHQEs8AgLM1dXdMWwaPY1J66OAkB0w5EfiVAzOx6lpubc93ggEreXILq6XgfVlDqvKZMJq02ckGOqUB%2F%2FsuCNLod0H4oFQjc1J38qAy%2FM2V5katByMJqsG76bSdC5l2jKguVzIM6uQ4eayn2VzingSt7jiAt%2BdzxotVSV%2FjM3Q4xt3Ksek9SQpyPlMsEjz3A8eowxzqvdYfZ8T1vDN3RzwibLNnS1JLEnqlBikSrJhR9zOpQ%2BffOIBLs5nqDzJLjZOKU9%2FOnCS4ApYe5oJ83fjmiV%2B6D5d62aMO0fP7fmm7&X-Amz-Signature=ea01223cc75ad0705b1edf104023a14bc09778495f4bb50af4641f23909336bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

