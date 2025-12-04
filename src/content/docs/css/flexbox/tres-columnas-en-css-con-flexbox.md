---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FCMY54E%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQD%2F%2FbHvULQgIgAG0Mswsl32td2ftKcVpxxnMNd5qATBCQIgCKP%2FrR93hA1kKZVL7iX%2Bw282XocxEq7c6bqIvGqyx34q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDIwgXhttEIHKdg%2FQ3ircA7jk4%2FmUIow9mLASI1b0CAHwqXOZYQ7iMKqsBmOYLulk4V50%2FFS8yJjAF8Bvn3dwyk7vuEMXLdIH4Siixrk9H7A54LdOzHPVgu%2FMmSxDxzgZjhL7AvCn%2BVLEVVFkt5hEerLQvwhCjLJ6%2B30LdvNTgZ0GurUPlwNRw9XSqmxs5KuCJIT71oSTsYT1z5DcqmTAODDeIJnEarLWhUV8XYlrpwS9QCFu9SZkJoybaA%2FZ3ToN6SenRmip%2F7zm2ATQEISMKViOFIpSskjGt3HKjU%2FyQIrva5s3LrF5kvF9WbmMOHNSChHmXkH%2BDmKt0d%2FhVv0Gd6uIt1UndJoIdOG5o3cHsQ9IzTc3h0Kbmn0%2BUbygRmjbdJh203FHfjF%2Bhof%2BIUoDctsmVvOLSXrK7Hom5ne%2FxW4YEK%2B3QaroUVSjH8mHrw%2BJMZhVAvGiraIlfNe5jNXW6xkONsV3Cl6qrHdzelA8ySfYac7upkY7soOU6LukUlTU%2BYqyjRp%2FosIc%2BEH1L7ht1EfrZx3gzLxpuZgNVxQufwe9yji15eQ3hbmSNBJIO3AjaU7JvCjxxUssaq%2FoHEn1GtYP6OPo0RsTGnb7yOlLBqbIaeBkF7UPSrbdpclxB5E8nDhOGg1eRlvBX6OJMPStxMkGOqUBS%2FdCjIDcLDtOPIv7kuGzxUVOOTEweORS9AB9jwibNtnxf%2BuiF9A9KdqnBxpJ6oObCRvj4gMqRciw0ql5nrRJ0KddNyHBNUpDxwDytOkIpHjlAh85wHPnIFlnu9qktWvTw%2FKscP2vOAgYgxjywFiU7EJLj2Mqhg7cqA%2FcrQnVhhUq0nzy3aKwdES%2BY3E0tpTHlyQXV7xbCJ5XfHyy0RjMwnQ00hSo&X-Amz-Signature=ffb5663231eb4c9e6933f19f767e759a31ce459be28cbcecc7a45efd77e4a7c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FCMY54E%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQD%2F%2FbHvULQgIgAG0Mswsl32td2ftKcVpxxnMNd5qATBCQIgCKP%2FrR93hA1kKZVL7iX%2Bw282XocxEq7c6bqIvGqyx34q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDIwgXhttEIHKdg%2FQ3ircA7jk4%2FmUIow9mLASI1b0CAHwqXOZYQ7iMKqsBmOYLulk4V50%2FFS8yJjAF8Bvn3dwyk7vuEMXLdIH4Siixrk9H7A54LdOzHPVgu%2FMmSxDxzgZjhL7AvCn%2BVLEVVFkt5hEerLQvwhCjLJ6%2B30LdvNTgZ0GurUPlwNRw9XSqmxs5KuCJIT71oSTsYT1z5DcqmTAODDeIJnEarLWhUV8XYlrpwS9QCFu9SZkJoybaA%2FZ3ToN6SenRmip%2F7zm2ATQEISMKViOFIpSskjGt3HKjU%2FyQIrva5s3LrF5kvF9WbmMOHNSChHmXkH%2BDmKt0d%2FhVv0Gd6uIt1UndJoIdOG5o3cHsQ9IzTc3h0Kbmn0%2BUbygRmjbdJh203FHfjF%2Bhof%2BIUoDctsmVvOLSXrK7Hom5ne%2FxW4YEK%2B3QaroUVSjH8mHrw%2BJMZhVAvGiraIlfNe5jNXW6xkONsV3Cl6qrHdzelA8ySfYac7upkY7soOU6LukUlTU%2BYqyjRp%2FosIc%2BEH1L7ht1EfrZx3gzLxpuZgNVxQufwe9yji15eQ3hbmSNBJIO3AjaU7JvCjxxUssaq%2FoHEn1GtYP6OPo0RsTGnb7yOlLBqbIaeBkF7UPSrbdpclxB5E8nDhOGg1eRlvBX6OJMPStxMkGOqUBS%2FdCjIDcLDtOPIv7kuGzxUVOOTEweORS9AB9jwibNtnxf%2BuiF9A9KdqnBxpJ6oObCRvj4gMqRciw0ql5nrRJ0KddNyHBNUpDxwDytOkIpHjlAh85wHPnIFlnu9qktWvTw%2FKscP2vOAgYgxjywFiU7EJLj2Mqhg7cqA%2FcrQnVhhUq0nzy3aKwdES%2BY3E0tpTHlyQXV7xbCJ5XfHyy0RjMwnQ00hSo&X-Amz-Signature=92fb9a51c3339e93410f4430f9f73c15257d06d91fd100c11c04a3560bff362b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

