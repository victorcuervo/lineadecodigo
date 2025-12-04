---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663U2ACA7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T025836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIFWxyL%2BU0d0OGO2GN4QrpDrDPF5Fhjk6vg5C9WEJxfZbAiB%2FI6lpbETMhD5dvfQ6iIX3VEneMPfgzA9NjiGoYirWWSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMMhlm%2B61OkmoFXWzpKtwDnqfPbGpIEV%2BWnsPcstvGa49kWwmI0dZm3QoksguZpWxbueMo5O6FBfMzVgZ417RuXNpJMKBPhXkM0apKpPi58iAYv%2BZiQPvBuf6LwVL7j6yM81BkxIgsy3U2XLqXufJA%2BqbjziDdjKYvDsh6Z3coBxs7Nn%2ByhHNoVVzp2CIHvSMEi3biJ5w%2BY366w3yRTKn6KJUzenauzUhxD%2Blr%2FCO8fqqJqMQ327yWPz4%2FpW%2B4JFpMiWkF7Y1dUbFC%2FiXFAum2ydH5dEAHZrNVeeh4rj0NcuXAPMPLEUvTIS9rfz4xn51RZne4yZMdPQcF51KUxs28M%2B2ntaIg39ydUQx9BiPqjnPzBxZwWa%2Fl6DGyjMBBOyNWWQ%2FYAtVD86LU6SZG7DIiF%2FbWWi9f2Zld9Jj9j1dBDhk%2F98482BLhVYamM2yoBXFpYhLb8cs5udkkZngBIEbv4Ixb4ezucrZVR7PgqniTcp%2FnamRInUcPivFEqrYYQwkFrcwlN6YgnzZ0neZ7rlKM4Gafpi1%2BrG9uWiz9q2S5BWkecaIwnbKXQYERniIX7qtbmMVt%2FnCZffXzAklIt2VxeMucTuxXCv2ZrD9hP4T4a0cQjzR7iiQ2ivA0wmTowjqRPEzPMFzG%2FWEtQTAw1NTDyQY6pgGJoFdl6kocnC84KdyuZ4VZv6c%2FMEzlTWdni1U9A6qjGx9uPBSKqpL1WZKjm4Zv4UdLlmPCTr53udsOvT5ydHrvtCkC%2BLQkifqz6jkaScYThHBRGuqmJesC2W%2Bdv8W4DzKqB7vsvfsLduN%2Fs96jgAJTUhF8%2BAUxQW49kaetlx%2BQAM7pMw8o2SlHqjuOVmeRSQNOQja9tagh7cQ9MC6HUj%2BQB9HEOGai&X-Amz-Signature=0a17603d291dc1ff029957e6445e49cf98b8dc50ee000e090a41a05ceedc5fae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663U2ACA7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T025836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIFWxyL%2BU0d0OGO2GN4QrpDrDPF5Fhjk6vg5C9WEJxfZbAiB%2FI6lpbETMhD5dvfQ6iIX3VEneMPfgzA9NjiGoYirWWSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMMhlm%2B61OkmoFXWzpKtwDnqfPbGpIEV%2BWnsPcstvGa49kWwmI0dZm3QoksguZpWxbueMo5O6FBfMzVgZ417RuXNpJMKBPhXkM0apKpPi58iAYv%2BZiQPvBuf6LwVL7j6yM81BkxIgsy3U2XLqXufJA%2BqbjziDdjKYvDsh6Z3coBxs7Nn%2ByhHNoVVzp2CIHvSMEi3biJ5w%2BY366w3yRTKn6KJUzenauzUhxD%2Blr%2FCO8fqqJqMQ327yWPz4%2FpW%2B4JFpMiWkF7Y1dUbFC%2FiXFAum2ydH5dEAHZrNVeeh4rj0NcuXAPMPLEUvTIS9rfz4xn51RZne4yZMdPQcF51KUxs28M%2B2ntaIg39ydUQx9BiPqjnPzBxZwWa%2Fl6DGyjMBBOyNWWQ%2FYAtVD86LU6SZG7DIiF%2FbWWi9f2Zld9Jj9j1dBDhk%2F98482BLhVYamM2yoBXFpYhLb8cs5udkkZngBIEbv4Ixb4ezucrZVR7PgqniTcp%2FnamRInUcPivFEqrYYQwkFrcwlN6YgnzZ0neZ7rlKM4Gafpi1%2BrG9uWiz9q2S5BWkecaIwnbKXQYERniIX7qtbmMVt%2FnCZffXzAklIt2VxeMucTuxXCv2ZrD9hP4T4a0cQjzR7iiQ2ivA0wmTowjqRPEzPMFzG%2FWEtQTAw1NTDyQY6pgGJoFdl6kocnC84KdyuZ4VZv6c%2FMEzlTWdni1U9A6qjGx9uPBSKqpL1WZKjm4Zv4UdLlmPCTr53udsOvT5ydHrvtCkC%2BLQkifqz6jkaScYThHBRGuqmJesC2W%2Bdv8W4DzKqB7vsvfsLduN%2Fs96jgAJTUhF8%2BAUxQW49kaetlx%2BQAM7pMw8o2SlHqjuOVmeRSQNOQja9tagh7cQ9MC6HUj%2BQB9HEOGai&X-Amz-Signature=b212c74b33a1a408a6bd40a4e0347d051006d111cebf142c63d8425fef01b9a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

