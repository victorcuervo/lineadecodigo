---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RJ4PJRQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T191909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD183X52aTb8Y3lKs%2BTNw8c00k4M7VhbF427IMDCYVa3QIgAL4p%2BGR%2FQ6bb%2FOvW34GvZXoHHGogu7icmV24rUazrWgq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDBrQ3ceAv6Q%2BWv%2B4tyrcA3Xs%2BelCjtshTP94vLQEkHtMTZnjV9ZgOyy%2Fb06AowXsrNthnV56QrajSY8zU9tt80J5HZo4QvtAn%2BxKmtuCHLb3klOX5jB7%2FBP3IGoVWrxUDqoALPJTlJw1mOGMsN1get8JowQ8V097OQYIZP5dAta32R7RZB9bI57tLWC6XG3dlDVgydsqEel6RLU2Rk96vS%2FPPjXrXJ83Xb5MblrtvvYLpZXNJdykx6d2GsQQiWhryiJHFwiZ61%2F7iWOJqC53m3v3%2F%2FrlK4d%2FggPCFebJ6kCpDO6kvpMlqIjJoHDxBVhpPaJd3jPSZgda%2FmmapTKiXZhb4aDhy1gAbvUe%2Fa1NWn%2FdRrXmlijq4OqGs8tuZAD%2BMa0wLv3hVqcEclIcTyThzHBlcw%2B0nngl45ef%2FQ9nXtwQMJhd9%2FkxNC2qZYN6o6AjTgR90wF2U4SjXLzQnlI%2BFLx5CVhdM1zAKlaXcjsqhxIEKGtsTRyk35pxLrGtSE66%2BWOekR8t9ZW1RHaVmqLaXzcq%2Bs05%2Foa9Ji3WYSBaPA11HXjDw7HWCjgJZj3sattoAdH5ScoVVJ6OZZXriOLkN2%2BFULqTwH6LgIzfJxy5e5gyoFaqIfo%2FhFjgBOcjTRGCXE7JMiSIYtl8LN0EMLX3y8kGOqUBBwWeZPHlSP30dagu2S5YIVqUEDDSbDTCaXCHH%2F2qcQ5fmmetf5ZU61SjK%2BJNbwERt4Cy%2Fpwl%2Fepjhms6httC7GV6hs1wm7UVtPnEDsHtxyEun0iVpvWk3vtM8GYbyw7MXYnFo%2BUHOmFcsrGoWecdhqdlVmwFQlM%2F%2BPyz1baK1UZHX7NBSYJzDwG3R%2Fd%2FMeffsb%2BXGbhv9RAMeDLq7U1gT2DWxAcc&X-Amz-Signature=34cd2bf6ee010be532af2cf59389a2ed27a5dc46b34a7c662f9079b477f10871&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RJ4PJRQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T191909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD183X52aTb8Y3lKs%2BTNw8c00k4M7VhbF427IMDCYVa3QIgAL4p%2BGR%2FQ6bb%2FOvW34GvZXoHHGogu7icmV24rUazrWgq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDBrQ3ceAv6Q%2BWv%2B4tyrcA3Xs%2BelCjtshTP94vLQEkHtMTZnjV9ZgOyy%2Fb06AowXsrNthnV56QrajSY8zU9tt80J5HZo4QvtAn%2BxKmtuCHLb3klOX5jB7%2FBP3IGoVWrxUDqoALPJTlJw1mOGMsN1get8JowQ8V097OQYIZP5dAta32R7RZB9bI57tLWC6XG3dlDVgydsqEel6RLU2Rk96vS%2FPPjXrXJ83Xb5MblrtvvYLpZXNJdykx6d2GsQQiWhryiJHFwiZ61%2F7iWOJqC53m3v3%2F%2FrlK4d%2FggPCFebJ6kCpDO6kvpMlqIjJoHDxBVhpPaJd3jPSZgda%2FmmapTKiXZhb4aDhy1gAbvUe%2Fa1NWn%2FdRrXmlijq4OqGs8tuZAD%2BMa0wLv3hVqcEclIcTyThzHBlcw%2B0nngl45ef%2FQ9nXtwQMJhd9%2FkxNC2qZYN6o6AjTgR90wF2U4SjXLzQnlI%2BFLx5CVhdM1zAKlaXcjsqhxIEKGtsTRyk35pxLrGtSE66%2BWOekR8t9ZW1RHaVmqLaXzcq%2Bs05%2Foa9Ji3WYSBaPA11HXjDw7HWCjgJZj3sattoAdH5ScoVVJ6OZZXriOLkN2%2BFULqTwH6LgIzfJxy5e5gyoFaqIfo%2FhFjgBOcjTRGCXE7JMiSIYtl8LN0EMLX3y8kGOqUBBwWeZPHlSP30dagu2S5YIVqUEDDSbDTCaXCHH%2F2qcQ5fmmetf5ZU61SjK%2BJNbwERt4Cy%2Fpwl%2Fepjhms6httC7GV6hs1wm7UVtPnEDsHtxyEun0iVpvWk3vtM8GYbyw7MXYnFo%2BUHOmFcsrGoWecdhqdlVmwFQlM%2F%2BPyz1baK1UZHX7NBSYJzDwG3R%2Fd%2FMeffsb%2BXGbhv9RAMeDLq7U1gT2DWxAcc&X-Amz-Signature=67b94f996817794e84e71890efe879b5ad676dc11c5b13adb8bbc1b5ff85242f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

