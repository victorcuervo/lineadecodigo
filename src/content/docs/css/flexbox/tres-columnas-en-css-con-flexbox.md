---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z64LGFEZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T210854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeL%2BsdYyyjgS0VM7VrWp2lKwzal%2Fy51dV1nQv%2BYfh5BAIhANkRTt7XUZj5GuiGnjs94ll7nTEIJ5TljezpMgwl5PQcKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3M54hWaIFnnjeJ3Aq3AMbYasEYOq80PJzzLI1eVlJW2%2FxUAf3tbUMj4xm4upg%2FGEwR8rtyHdNlc0i2ebnprXn2sESBRJC03c%2FuLVckUdqJeC5hvcHaEsTBMp%2FGV3JMJYVbNdvucXuhFvlD9Rf9ss89fp%2BXqBQaLyuNrcZFpZ0MK0rd4DPpC31EGHhgonKAXhhlzwkO33xGTcfzM2E6zsfkGWphBwcAufNMpIHze5g0LwuMOMrV3BLSVSuwIe6CR3jki1XjakkKmqf%2Fgc3yD5%2FkQmpiniFtce4t5Rs3GEWkh0X8hI9hQ8gHWCkyaQBVzzE5vyd5wiIvTvQeM2wcwuGRbx4gDSurXiuwwNm%2Bh%2Fa5m7QIyLXjCEO8wlLIHgjoa1lgjv8dzGS3exA9fuFpcLIRJYgAonWsOwmaAsChAAkYuurk1uO3H1Nn6xMMPYjjuU8YKloRXcczhv2tFc%2BNd17lNjV%2BnxAvIbO%2F%2BIPDlvUcZ0%2B5GdX%2FV0hOdPO1gWXc6zQ6nz5Zn8rcbrFWXrGkyaY5mGoeGbbnsoEtz%2BuI6LWnMMzwiiWKQlpL3%2FVdFSs57JL5HW4DaBA4TVHgglnUm3QGFbMwHVZZk4kZ4J3fRSRw5wHkuRO3B82s5GIxpxaPC26kgipGbzWMnbaLDCt3NzJBjqkAXcajmQrARsGRaMdKb5Joh8ZL7G%2FrjPrmo1tbmjsa5dQxGdSWOSnhuQJHoPIfl3JdB0g8%2FbILEfl5FM5UxL%2FUUGGpjXLzQLI9nfaHSnbZdE7B5531NO4zkvJDN%2F9a9Chp9vOfdSDLEuf8Ddfu8jF7aMeM%2BnBCRosrY%2FyZd7qZ3UASVLdQdUOfeX9p7EE8JGMA7W9y%2FRZd0mRv4Ilgkhy18psiae%2F&X-Amz-Signature=2a916b000f83cf547c06ffd56bb4fa37b0927df81fc8f5064c9fd54502e057a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z64LGFEZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T210854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeL%2BsdYyyjgS0VM7VrWp2lKwzal%2Fy51dV1nQv%2BYfh5BAIhANkRTt7XUZj5GuiGnjs94ll7nTEIJ5TljezpMgwl5PQcKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3M54hWaIFnnjeJ3Aq3AMbYasEYOq80PJzzLI1eVlJW2%2FxUAf3tbUMj4xm4upg%2FGEwR8rtyHdNlc0i2ebnprXn2sESBRJC03c%2FuLVckUdqJeC5hvcHaEsTBMp%2FGV3JMJYVbNdvucXuhFvlD9Rf9ss89fp%2BXqBQaLyuNrcZFpZ0MK0rd4DPpC31EGHhgonKAXhhlzwkO33xGTcfzM2E6zsfkGWphBwcAufNMpIHze5g0LwuMOMrV3BLSVSuwIe6CR3jki1XjakkKmqf%2Fgc3yD5%2FkQmpiniFtce4t5Rs3GEWkh0X8hI9hQ8gHWCkyaQBVzzE5vyd5wiIvTvQeM2wcwuGRbx4gDSurXiuwwNm%2Bh%2Fa5m7QIyLXjCEO8wlLIHgjoa1lgjv8dzGS3exA9fuFpcLIRJYgAonWsOwmaAsChAAkYuurk1uO3H1Nn6xMMPYjjuU8YKloRXcczhv2tFc%2BNd17lNjV%2BnxAvIbO%2F%2BIPDlvUcZ0%2B5GdX%2FV0hOdPO1gWXc6zQ6nz5Zn8rcbrFWXrGkyaY5mGoeGbbnsoEtz%2BuI6LWnMMzwiiWKQlpL3%2FVdFSs57JL5HW4DaBA4TVHgglnUm3QGFbMwHVZZk4kZ4J3fRSRw5wHkuRO3B82s5GIxpxaPC26kgipGbzWMnbaLDCt3NzJBjqkAXcajmQrARsGRaMdKb5Joh8ZL7G%2FrjPrmo1tbmjsa5dQxGdSWOSnhuQJHoPIfl3JdB0g8%2FbILEfl5FM5UxL%2FUUGGpjXLzQLI9nfaHSnbZdE7B5531NO4zkvJDN%2F9a9Chp9vOfdSDLEuf8Ddfu8jF7aMeM%2BnBCRosrY%2FyZd7qZ3UASVLdQdUOfeX9p7EE8JGMA7W9y%2FRZd0mRv4Ilgkhy18psiae%2F&X-Amz-Signature=eff4a73ccd2206e63a34954aad38189bf588d0f64d01759b25b6885a724cf0c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

