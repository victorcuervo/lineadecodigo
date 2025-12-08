---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV2NZX4X%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T214520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICibd2OemrKpMXeT1X%2FsSb%2FWOOvwk9cGbga6yvrTD9MLAiB3HhlUqu1T4P6CZpnuTUtnqHU21VwG2y6LlNYYGOD9hiqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9n19ce%2FMtHR42HPwKtwDweIqgG0eAgP91eB2iOjjfwsdzT0PEJhczQlFOOyz2cEd%2BOgBi%2FSvV0Rc1tmLdRElNGQOzHvJLDKUZeGL6IOQEXhYS%2BPFQo%2FfZoWKgpWMoFHZlPolPwzQ49IKfG4KoXeGxkyMZJfDvl5DPYBWVAKD4IF57tdlrpH8ewC%2FiJM7QRWthC%2FfKGEx4U9OA15rfsJ%2Bi6ERfB1FQikoAe48t8Eaye1jl06C%2FJLpmJyjw5ulfivTmpOXnPCjfirfXL4vs6GGfMllOHXN3pjgkZX1rCIqBWkezZKvAhTIKVuYFsRHBHK7mDwp2BAhz5sankYjv0LuzsraFgMSsDOEJg9c3Y%2FGhPZ9aUcg846X1R8HLTCmvKWipGmYWxbf04%2F0QoFD3GGAJKCwtHpwWXFHb%2BGQinBtd1wr3mz5pdiYVnpRWqSZbcM7JiAL8eyeAtvOahlL2IUnoS%2FyViT0B8EVyv7JAlBiOgGHXx92%2BinoJvKyGP6WXUpPxh1T0RK%2BPY5ogJc%2FeCRxlTNY0iL2go0ppG74Hs5HiydmY8T76DsfE4%2B8LZqXy%2FCqy5YPHLxII%2F6oPg6lEp3PBqzpF2kpJLiYKF2JIxeEDlqlxJQVS8t9qSV3Xji082pryWVUYY1WzfjEwVUw9f%2FcyQY6pgFVsiNQcISHhyYDMMZY%2FGCAaC4Og9TerrepvfclcV8EHmMUQyKmtdKy2MYJaa5%2FwSyFaPvSuxNZyUu6SUtlWYs2tIA%2FQ7HwLN2hR%2BoUyykAkKNKejntGgoFcpY42BHwwpC98i90MaCpQTqDK%2FgfsOZP2QMcg3dBz9ae3ugk3mZtoZGnvjuGDG%2F1yfTNJEnGb25vNi1%2FOCcdrNw3%2BwK%2B2%2FLtEO%2BKSp05&X-Amz-Signature=a5fe9117731cf198f7405c6d436700af9c06c332f05a0d4a453dd602a5a69df4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV2NZX4X%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T214520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICibd2OemrKpMXeT1X%2FsSb%2FWOOvwk9cGbga6yvrTD9MLAiB3HhlUqu1T4P6CZpnuTUtnqHU21VwG2y6LlNYYGOD9hiqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9n19ce%2FMtHR42HPwKtwDweIqgG0eAgP91eB2iOjjfwsdzT0PEJhczQlFOOyz2cEd%2BOgBi%2FSvV0Rc1tmLdRElNGQOzHvJLDKUZeGL6IOQEXhYS%2BPFQo%2FfZoWKgpWMoFHZlPolPwzQ49IKfG4KoXeGxkyMZJfDvl5DPYBWVAKD4IF57tdlrpH8ewC%2FiJM7QRWthC%2FfKGEx4U9OA15rfsJ%2Bi6ERfB1FQikoAe48t8Eaye1jl06C%2FJLpmJyjw5ulfivTmpOXnPCjfirfXL4vs6GGfMllOHXN3pjgkZX1rCIqBWkezZKvAhTIKVuYFsRHBHK7mDwp2BAhz5sankYjv0LuzsraFgMSsDOEJg9c3Y%2FGhPZ9aUcg846X1R8HLTCmvKWipGmYWxbf04%2F0QoFD3GGAJKCwtHpwWXFHb%2BGQinBtd1wr3mz5pdiYVnpRWqSZbcM7JiAL8eyeAtvOahlL2IUnoS%2FyViT0B8EVyv7JAlBiOgGHXx92%2BinoJvKyGP6WXUpPxh1T0RK%2BPY5ogJc%2FeCRxlTNY0iL2go0ppG74Hs5HiydmY8T76DsfE4%2B8LZqXy%2FCqy5YPHLxII%2F6oPg6lEp3PBqzpF2kpJLiYKF2JIxeEDlqlxJQVS8t9qSV3Xji082pryWVUYY1WzfjEwVUw9f%2FcyQY6pgFVsiNQcISHhyYDMMZY%2FGCAaC4Og9TerrepvfclcV8EHmMUQyKmtdKy2MYJaa5%2FwSyFaPvSuxNZyUu6SUtlWYs2tIA%2FQ7HwLN2hR%2BoUyykAkKNKejntGgoFcpY42BHwwpC98i90MaCpQTqDK%2FgfsOZP2QMcg3dBz9ae3ugk3mZtoZGnvjuGDG%2F1yfTNJEnGb25vNi1%2FOCcdrNw3%2BwK%2B2%2FLtEO%2BKSp05&X-Amz-Signature=1aa5d264edfb20444966a49b89138a4ccffe4e3cbe3bcc361687da881448544b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

