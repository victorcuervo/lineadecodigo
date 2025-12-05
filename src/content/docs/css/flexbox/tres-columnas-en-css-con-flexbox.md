---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJMK6XMF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T171711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWbSkjiLh1hxAlJJQ02sYydfEhRl6%2FS%2FNUywyFkwcLaAIhAPDcap7MhAkDKHa87MMlKKAlx6orcuvhm1LCcC6%2BJHqHKv8DCGAQABoMNjM3NDIzMTgzODA1IgzJu%2BX4UeR%2BhXpx5zsq3AMpf5%2F5rmk6%2Bw%2BrD0q2UFKVkOZx4dAg5M9fNZzwyyyiOUEq08oGIUIlMsHlEyz70mg%2BGRwrqV%2B3ACi2Zr8I8bdfCiqR6fXb%2BdA4WXkwVl8pYu%2F0w6R6BEFW5%2F0vWPnrMKtZtRpuTE7jJd6MkBj%2Fopin4d6HR4qLkTxNIFnJpdHq5iV7wWOA3hLif82%2Fa1w59jXOABFjHLRzpiMuPW%2Bpnhgh9Cxmddl8YjUZJP9L4s64p%2BP9jJ48DGwOPZ13aip5or3UBE0xXe%2F%2F8BbNKzeK7UhXLgIXJI6%2BdytcG7H3H5Sn4loqnhraLP1H%2FqqYlImSqq4HtgZTpjRC%2F79n8Ue%2BZXThpworbACwK41f7VWdTBNntVzfStbFaZ%2FvOxeW3z52UOP8AgFos7n0tWUa3NxRJ2nMBljOuyWYwUCw2jvBeuK63YNFA0oFNSQyIrGOw%2FG%2FfFzuAhwMPVaFy1Jn4ClzcTcufw%2BjlDsb5uokasd72PXs6gjIQmWSZIF2sR6%2BLaUVe9GZSthT4Ov5ZiQktz6y9jk7B7bXw5ndHLASUJbvU0sfQ7wvo3Zm9RCa3DxcoCHlAqPkAs9P%2F4oxjs1lyzlA6qmkGB%2Foj4JDT%2B77%2FhnZanItgrWufCyVJk2i%2F8nv4TDX5cvJBjqkAVnHvGuDtgOiduqPUEQU6rNnta81%2F6%2B6gMgqx7%2B9BZHkBZwTO65HhjsWq%2BFdV334182A%2Bzmv2Xa%2FXslpRsrqkP4GsSBc9%2BZtXJct66XGNGBpCK7fG4IEK3VMHgq1kKmx9IDoJBCq5tBthGIOGtFnUHXlmOEHEumWc%2FwyP9pKSg2ZOOeh9tFgNa1Zut04W8dDQpcwCbVkLRafqRu31%2FxIJjrAUTTJ&X-Amz-Signature=22f7b4eb8a9ed32c67de80f2d3bf31b0c22f9d99028430cc0d52ce802c5a47b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJMK6XMF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T171711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWbSkjiLh1hxAlJJQ02sYydfEhRl6%2FS%2FNUywyFkwcLaAIhAPDcap7MhAkDKHa87MMlKKAlx6orcuvhm1LCcC6%2BJHqHKv8DCGAQABoMNjM3NDIzMTgzODA1IgzJu%2BX4UeR%2BhXpx5zsq3AMpf5%2F5rmk6%2Bw%2BrD0q2UFKVkOZx4dAg5M9fNZzwyyyiOUEq08oGIUIlMsHlEyz70mg%2BGRwrqV%2B3ACi2Zr8I8bdfCiqR6fXb%2BdA4WXkwVl8pYu%2F0w6R6BEFW5%2F0vWPnrMKtZtRpuTE7jJd6MkBj%2Fopin4d6HR4qLkTxNIFnJpdHq5iV7wWOA3hLif82%2Fa1w59jXOABFjHLRzpiMuPW%2Bpnhgh9Cxmddl8YjUZJP9L4s64p%2BP9jJ48DGwOPZ13aip5or3UBE0xXe%2F%2F8BbNKzeK7UhXLgIXJI6%2BdytcG7H3H5Sn4loqnhraLP1H%2FqqYlImSqq4HtgZTpjRC%2F79n8Ue%2BZXThpworbACwK41f7VWdTBNntVzfStbFaZ%2FvOxeW3z52UOP8AgFos7n0tWUa3NxRJ2nMBljOuyWYwUCw2jvBeuK63YNFA0oFNSQyIrGOw%2FG%2FfFzuAhwMPVaFy1Jn4ClzcTcufw%2BjlDsb5uokasd72PXs6gjIQmWSZIF2sR6%2BLaUVe9GZSthT4Ov5ZiQktz6y9jk7B7bXw5ndHLASUJbvU0sfQ7wvo3Zm9RCa3DxcoCHlAqPkAs9P%2F4oxjs1lyzlA6qmkGB%2Foj4JDT%2B77%2FhnZanItgrWufCyVJk2i%2F8nv4TDX5cvJBjqkAVnHvGuDtgOiduqPUEQU6rNnta81%2F6%2B6gMgqx7%2B9BZHkBZwTO65HhjsWq%2BFdV334182A%2Bzmv2Xa%2FXslpRsrqkP4GsSBc9%2BZtXJct66XGNGBpCK7fG4IEK3VMHgq1kKmx9IDoJBCq5tBthGIOGtFnUHXlmOEHEumWc%2FwyP9pKSg2ZOOeh9tFgNa1Zut04W8dDQpcwCbVkLRafqRu31%2FxIJjrAUTTJ&X-Amz-Signature=174fee61afecbc8eacb4b86a6564adeb205b1737090ea004d6b1aff6657199d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

