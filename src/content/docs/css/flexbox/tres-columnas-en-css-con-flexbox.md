---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7IC4FHB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T224233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGH9aeOlvbivpKJH%2BlyKiom%2BuM2G44pCNkvXvXAlQ4XAAiBi0McqORtCciCVstWDSuUl%2BJAWZjQLJEQ0gq%2F1A%2BOtdSqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPRUJp8W%2FmTATgZYsKtwDeLuQBl0Q%2FMknsx%2BBX25n8V7R63NXBfOKRez09C8mrz4IEc03RQG9X88YTbEtOX6Rrh9tW5NMjxn1pjCZGOjEXHkKwsui6PtRgpku0NcLf8V8mUspaJfp5RUo7QPIONQ8iPOzRMNfofekYVrPMdjOdnjNNyMq9XntHeDyEa5cXqOd%2BWaNzmyP3qEgYWbrKIkp8COxIB9LbcykgogUt6W1ED6UvBtRgzTp1v6MZgG971B73WsdsX2UFxnAo8YcdxPuKPF4mCpkd1wbCd1GaQMYuPFb9j2OJWsItgx05jaK8Rtpok7IHnbn9T6iRTfIxglZHHHLMTy7dQPGsW3dPyGTll2XrF3VV9EP5rd2z7RK5CWkYL5AWAfvkJVsUcqYZzaq2WqENYTetAyql0E5LdHICKIYEWAGDHwvsvQ2dkZYV8s%2Blh1%2B3QeSh7J2cIeupCa3PziNA7vNQDLJgQmGjD5MienAFFXhASxnJFE5w9fx%2FXo73cVWmH%2BKYPHMOXY4NwwQ8pfeM%2FlHCpLCSedIpi8DKmqxzzJp%2FHMg2lXOW0ZT64kbgW34Y%2BoHrrx059ifaMpdFE6QQuUphmbe40%2FE%2Bu2lJKDb0J7QVybFx6%2B9qxGy0HiIdrFzkenMfz%2FKRc8wxaHdyQY6pgFuQI1rujFamThbJE5DjP9nLjmyAlNeru%2FtaXzwV9WaUuFGr6KnK8ZhZEa%2B3AsobETlVWoQAjjCnsOyGKRSDyMbGRgPLXK0oWpIpTXG8xLPCnF9GVIDkipRV741Ht3DL9CvcPDhizeIhpNUcdPnBG92TqrQPAMMy6ULm46QJ5KoajvSjnL8%2BLmW8CiZm5lcULk5GZgsvtLPdchLbKoQa%2FC42Pf13At%2B&X-Amz-Signature=4beab24d60affb1b955e4fe7a5e54e1fdee14f6f1de12c2d8eec4b3fa6a5b385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7IC4FHB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T224233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGH9aeOlvbivpKJH%2BlyKiom%2BuM2G44pCNkvXvXAlQ4XAAiBi0McqORtCciCVstWDSuUl%2BJAWZjQLJEQ0gq%2F1A%2BOtdSqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPRUJp8W%2FmTATgZYsKtwDeLuQBl0Q%2FMknsx%2BBX25n8V7R63NXBfOKRez09C8mrz4IEc03RQG9X88YTbEtOX6Rrh9tW5NMjxn1pjCZGOjEXHkKwsui6PtRgpku0NcLf8V8mUspaJfp5RUo7QPIONQ8iPOzRMNfofekYVrPMdjOdnjNNyMq9XntHeDyEa5cXqOd%2BWaNzmyP3qEgYWbrKIkp8COxIB9LbcykgogUt6W1ED6UvBtRgzTp1v6MZgG971B73WsdsX2UFxnAo8YcdxPuKPF4mCpkd1wbCd1GaQMYuPFb9j2OJWsItgx05jaK8Rtpok7IHnbn9T6iRTfIxglZHHHLMTy7dQPGsW3dPyGTll2XrF3VV9EP5rd2z7RK5CWkYL5AWAfvkJVsUcqYZzaq2WqENYTetAyql0E5LdHICKIYEWAGDHwvsvQ2dkZYV8s%2Blh1%2B3QeSh7J2cIeupCa3PziNA7vNQDLJgQmGjD5MienAFFXhASxnJFE5w9fx%2FXo73cVWmH%2BKYPHMOXY4NwwQ8pfeM%2FlHCpLCSedIpi8DKmqxzzJp%2FHMg2lXOW0ZT64kbgW34Y%2BoHrrx059ifaMpdFE6QQuUphmbe40%2FE%2Bu2lJKDb0J7QVybFx6%2B9qxGy0HiIdrFzkenMfz%2FKRc8wxaHdyQY6pgFuQI1rujFamThbJE5DjP9nLjmyAlNeru%2FtaXzwV9WaUuFGr6KnK8ZhZEa%2B3AsobETlVWoQAjjCnsOyGKRSDyMbGRgPLXK0oWpIpTXG8xLPCnF9GVIDkipRV741Ht3DL9CvcPDhizeIhpNUcdPnBG92TqrQPAMMy6ULm46QJ5KoajvSjnL8%2BLmW8CiZm5lcULk5GZgsvtLPdchLbKoQa%2FC42Pf13At%2B&X-Amz-Signature=7dd23ecbfe53ea2ea48f0473173cdc6188de2e442be3373c2ed681ee70099c67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

