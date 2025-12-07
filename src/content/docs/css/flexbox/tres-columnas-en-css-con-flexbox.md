---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKPCD4GC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T171212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICx%2BUnvMFnOtMGJrDI9DwXYWY88i131S1LKJUJcyH2J9AiALAutqmEVsKlE%2FctP%2ByZLIjQ%2FI7vG2iOBm%2FRifJMvqoCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFpZnK1BFuv6YZkzgKtwDK4JWO4y682lL7P5MsyKPvSLCX7Q6oOLpmP2QBxhSXnHGGeGBdsMNbJwXXv2ac6eTifbzYbctNenkW4yCjBRiv20WaTN9WrPaJjvhoM2MUWbD8%2BZEqyaHHk3r0a8QC%2FS8Al1HQtXukXB5J38uwQCIs%2Fis%2BIhCOvGyAeOdELN6dEfvxwNrhB0R1qL40RKuJnZtS06WEfJ0heHrWJjywCIpXDDXVeDUIIR5JgOX9HO%2FVowf%2BdLzxhQGpSsX4XoGgJEiHdTbtASHvWu0mC%2B64e2nAePeUuhM5v79pT4Y%2BIJTEfTWU6DvC7zSUiYznBN9QJ37r5AcGM5moS8UQu5V%2B5Z6qoMSf4RYszsOFAwWoF9afyGZScv5ATBkD%2B%2FbHqZH9VlPPJVwzh9EZhpE1kf5piUv9jJ%2BESPGZemLbsJTLSe80oO9K7v8MDnInZEMMITxh8pv5V%2BswQz23nEvgPgRLoN2vp7sMWD7NzzfobgjNLWEwsVxpgtST0j6uy5XvlpFYOEQZ6CVJgEUMAixHaKsWTFEq0WxIWvro%2FM2PzJ45nFY4BqPWKNJtenq3AQe9UrAlvgP%2BUEd7hP37ZlhIIcdKt02h3rL2T7hSsmJRlIhqHZgKaeuoka7pBO0ftiNqdQw0bzWyQY6pgF%2BcLMff%2FlUb3zKKSSXdq4Nd%2FdON1UlWV6ILYTt0%2FaB7JiZJl5D90BRBG%2Fwu1YjqCmqJoaIqcjNgw5%2BZIrQbyllWV6HugIXnO8REKJ%2FQH%2FEb4%2FrPkW6fmPGjRpS3QpJkUI42O8HsSNCgQSk7fdJS0Te2sWooVcN51UIuqCMM5M0hMOjYqnfA5lQzFtBKV%2F%2FI67BiQA8F8zvIWtxzXCJQnOzS9xy4wtK&X-Amz-Signature=82c9e0671449c5c0df1e4e18b6ef8652c00e3ec2cfb4095b387376b769b0db34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKPCD4GC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T171212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICx%2BUnvMFnOtMGJrDI9DwXYWY88i131S1LKJUJcyH2J9AiALAutqmEVsKlE%2FctP%2ByZLIjQ%2FI7vG2iOBm%2FRifJMvqoCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFpZnK1BFuv6YZkzgKtwDK4JWO4y682lL7P5MsyKPvSLCX7Q6oOLpmP2QBxhSXnHGGeGBdsMNbJwXXv2ac6eTifbzYbctNenkW4yCjBRiv20WaTN9WrPaJjvhoM2MUWbD8%2BZEqyaHHk3r0a8QC%2FS8Al1HQtXukXB5J38uwQCIs%2Fis%2BIhCOvGyAeOdELN6dEfvxwNrhB0R1qL40RKuJnZtS06WEfJ0heHrWJjywCIpXDDXVeDUIIR5JgOX9HO%2FVowf%2BdLzxhQGpSsX4XoGgJEiHdTbtASHvWu0mC%2B64e2nAePeUuhM5v79pT4Y%2BIJTEfTWU6DvC7zSUiYznBN9QJ37r5AcGM5moS8UQu5V%2B5Z6qoMSf4RYszsOFAwWoF9afyGZScv5ATBkD%2B%2FbHqZH9VlPPJVwzh9EZhpE1kf5piUv9jJ%2BESPGZemLbsJTLSe80oO9K7v8MDnInZEMMITxh8pv5V%2BswQz23nEvgPgRLoN2vp7sMWD7NzzfobgjNLWEwsVxpgtST0j6uy5XvlpFYOEQZ6CVJgEUMAixHaKsWTFEq0WxIWvro%2FM2PzJ45nFY4BqPWKNJtenq3AQe9UrAlvgP%2BUEd7hP37ZlhIIcdKt02h3rL2T7hSsmJRlIhqHZgKaeuoka7pBO0ftiNqdQw0bzWyQY6pgF%2BcLMff%2FlUb3zKKSSXdq4Nd%2FdON1UlWV6ILYTt0%2FaB7JiZJl5D90BRBG%2Fwu1YjqCmqJoaIqcjNgw5%2BZIrQbyllWV6HugIXnO8REKJ%2FQH%2FEb4%2FrPkW6fmPGjRpS3QpJkUI42O8HsSNCgQSk7fdJS0Te2sWooVcN51UIuqCMM5M0hMOjYqnfA5lQzFtBKV%2F%2FI67BiQA8F8zvIWtxzXCJQnOzS9xy4wtK&X-Amz-Signature=f44b5e7fb5aa929cec2a71c107b452770c9da625eacf50465dcd4bd5cd5ae22b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

