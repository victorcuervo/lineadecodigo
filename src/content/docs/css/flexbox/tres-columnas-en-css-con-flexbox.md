---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RCONVEQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDehE4k5NRnMz%2Bj5cj6guuFHDaipoRpco5%2BRdkG8TIL1QIhANHWlPr%2BaBtiZn8DYtb1CJsAIi8dfYgIwIjP8aQZbOFxKv8DCEgQABoMNjM3NDIzMTgzODA1Igw1eC5wzS6Nt5lWSuMq3APi5WnTXxP4meEAgn%2FH9GsT8pcOEhRVRVFPFASaJwEsH3Bicoc4dl%2BjM5pKcQlUYHuMh1QKz%2BG70%2F6W44IIjDmqfDYwWPFMHEsGW2BkI9F8nmGmi906KTdgh7GM2JZaXVjbsArEvFXFqt2dga73dvQWBFaaG0aYnKIACKhdptWZ47aWckWtPzl8nauXxXolqQpcznbWtXrtWFuA0c%2F2FEV5542r9xp5zEj8AVSP%2Bz1I3Z0US2hTQM0qvP38cdLY2m%2B2H0%2B%2Ffv7C3Ihjm2xho%2FsdqfidXI0Td7qbU1d%2BVezUPflhJOG6HyTZu%2BY3OT9J4PArAqpBB4GM61Vr3n479b%2BqgFjVeOm2BSY6AOIHc3%2BlWUkF9tsV2%2B3wbywKyD7SMstEeIG3s90vwWWIj4HpOzhUW9rdIRtorG9ThLlrLBuwXsJLk6C7t6EaBHZ2BWEUXI0Rla2TtjwKtf3aCTbrXomg%2BLNzOo30xF0ENpaNkuKWsUzW4uVHIIds8cbv%2BcFmHlyBcdp3wYuhlOetxAnoyMzQAMZBYs2mxBVEIJmbZiTcGPIg%2Bf4O0w4nsGtrw7NI%2Fjhx%2B3XTBQkyBXJCzTXeYyYtnHyRvZKcFhr25QwKARHoStKg0S3nQXmHYuVmnTCwvsbJBjqkAZwGlt0mZV4MKlWd7oGeZLLOGI5JUgHjqoBG%2Fbt8XzFMKJn0kh57aUJ6Je4TP62uYwxqN9yVlQ3lpXqJwo0c1WFJ4cjTydXruMJwJF3Q6TXeeP5E039M04vJCgbMY%2F7j1NNMSA%2BBlCKKy9LXhAnglgLS8ffTsYnHZCeNM7j%2BVrfpZtdhZ0iy0%2BSbVuRb4r1jlpnypMOb9QXtqm2VW3XJZbDE%2BU%2Fi&X-Amz-Signature=28da46a73fa4bc5c626419fe76b3e9965d6702997ccc2e561cf1aa1ec6406532&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RCONVEQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDehE4k5NRnMz%2Bj5cj6guuFHDaipoRpco5%2BRdkG8TIL1QIhANHWlPr%2BaBtiZn8DYtb1CJsAIi8dfYgIwIjP8aQZbOFxKv8DCEgQABoMNjM3NDIzMTgzODA1Igw1eC5wzS6Nt5lWSuMq3APi5WnTXxP4meEAgn%2FH9GsT8pcOEhRVRVFPFASaJwEsH3Bicoc4dl%2BjM5pKcQlUYHuMh1QKz%2BG70%2F6W44IIjDmqfDYwWPFMHEsGW2BkI9F8nmGmi906KTdgh7GM2JZaXVjbsArEvFXFqt2dga73dvQWBFaaG0aYnKIACKhdptWZ47aWckWtPzl8nauXxXolqQpcznbWtXrtWFuA0c%2F2FEV5542r9xp5zEj8AVSP%2Bz1I3Z0US2hTQM0qvP38cdLY2m%2B2H0%2B%2Ffv7C3Ihjm2xho%2FsdqfidXI0Td7qbU1d%2BVezUPflhJOG6HyTZu%2BY3OT9J4PArAqpBB4GM61Vr3n479b%2BqgFjVeOm2BSY6AOIHc3%2BlWUkF9tsV2%2B3wbywKyD7SMstEeIG3s90vwWWIj4HpOzhUW9rdIRtorG9ThLlrLBuwXsJLk6C7t6EaBHZ2BWEUXI0Rla2TtjwKtf3aCTbrXomg%2BLNzOo30xF0ENpaNkuKWsUzW4uVHIIds8cbv%2BcFmHlyBcdp3wYuhlOetxAnoyMzQAMZBYs2mxBVEIJmbZiTcGPIg%2Bf4O0w4nsGtrw7NI%2Fjhx%2B3XTBQkyBXJCzTXeYyYtnHyRvZKcFhr25QwKARHoStKg0S3nQXmHYuVmnTCwvsbJBjqkAZwGlt0mZV4MKlWd7oGeZLLOGI5JUgHjqoBG%2Fbt8XzFMKJn0kh57aUJ6Je4TP62uYwxqN9yVlQ3lpXqJwo0c1WFJ4cjTydXruMJwJF3Q6TXeeP5E039M04vJCgbMY%2F7j1NNMSA%2BBlCKKy9LXhAnglgLS8ffTsYnHZCeNM7j%2BVrfpZtdhZ0iy0%2BSbVuRb4r1jlpnypMOb9QXtqm2VW3XJZbDE%2BU%2Fi&X-Amz-Signature=b24fbc1d683c38205bfcbbfe5a0b2b9d54b60673045a755a2b62b91539ee9870&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

