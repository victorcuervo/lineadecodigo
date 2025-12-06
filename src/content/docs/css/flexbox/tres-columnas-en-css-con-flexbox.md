---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VODCJO64%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T103915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhAl1nrlBS8dZRbWdcI7RW6s4e%2BOLREFoZqZo8o%2BqHCwIhANJVPRarp9KmGBmRACqaCMSHYcl3bJn88MDEV5aCSIaXKv8DCHMQABoMNjM3NDIzMTgzODA1Igxtac3PwxKPTJ7kY94q3APgxT89IiNIWGtZYXA1zii%2Bb8z3qnWvS5IcyhZT3eG2pp1hgUvq5ZY3jJXIuyuXDVL1asuUw%2BFnhnW9hQLokeSXa3Py7fDBM4e8CLfy90zKIc1idJZRIhwe6XauEFZY5IRL5xcf7b2AKuooo%2B18gIIxdpimupHfQoMEvtAfeTvb%2F15zleJFkmsPPaCMKHrbrXY6A9D4UwJ8B0uINg1uNCiM0U1x1wx4qeFbbIppe0kCXL0K%2B8aCK9r29mRFx7xzHlUSEzQDQhDRokGyoKCL7v0Wcvv3ejm7BoQQUfAxzHyGby%2B%2F60w9gznasE%2FHDgpBxQYMrUCszeHqO1asijoXIcztx%2BkgBRrpL%2BTe6maF9sUO6qPR0MHGwNVMr28P3uWLQ7lnBGkNzAyIegclaWQHWaEBQxcinYyRzGj6VgwuADiGKmgv79C9TpdD2StDFTKwL9HjZN0WOKAw8RiKhvVTUJxHjtZoZBjdSEi56%2FMOPi2Y7Z4BKnlt5wdGeBoXTq3T1hk8EWf6alJiPSY7R9QmW6QdYEurNiccPHYidIy3dY0ejHp1B0xx1GN7RoVT1lOergYIAY9rPdQhnqb5lv2%2BazphzpZ9VZl2pd09aDZo%2B9n32TmBryZN1UgtyNmAOTC5itDJBjqkAXKQE9P71bhD1sl3FSlt69f5aQlEaAJLbscd53v7NrYNqvi1gF2jPurs62PcvXTXXa7Vcp3TxhOkFqxJ1H%2FqZ5voGkRmFR4scNORhpBZTg9kTMUkhFyBoh3EsCv97uNh6e57SBR2HCIMJWAGMPlPG5Te%2BUMoP09hiEbmTLi6QceKjFqu6R40Ndj3EZ9LQuZut80CYMveeewtvn2NnnLaRUzBChPM&X-Amz-Signature=ba2da9dd31a04407f8a87edece2b71d13046925d5371c5a5a51d4cd4a0bce47a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VODCJO64%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T103915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhAl1nrlBS8dZRbWdcI7RW6s4e%2BOLREFoZqZo8o%2BqHCwIhANJVPRarp9KmGBmRACqaCMSHYcl3bJn88MDEV5aCSIaXKv8DCHMQABoMNjM3NDIzMTgzODA1Igxtac3PwxKPTJ7kY94q3APgxT89IiNIWGtZYXA1zii%2Bb8z3qnWvS5IcyhZT3eG2pp1hgUvq5ZY3jJXIuyuXDVL1asuUw%2BFnhnW9hQLokeSXa3Py7fDBM4e8CLfy90zKIc1idJZRIhwe6XauEFZY5IRL5xcf7b2AKuooo%2B18gIIxdpimupHfQoMEvtAfeTvb%2F15zleJFkmsPPaCMKHrbrXY6A9D4UwJ8B0uINg1uNCiM0U1x1wx4qeFbbIppe0kCXL0K%2B8aCK9r29mRFx7xzHlUSEzQDQhDRokGyoKCL7v0Wcvv3ejm7BoQQUfAxzHyGby%2B%2F60w9gznasE%2FHDgpBxQYMrUCszeHqO1asijoXIcztx%2BkgBRrpL%2BTe6maF9sUO6qPR0MHGwNVMr28P3uWLQ7lnBGkNzAyIegclaWQHWaEBQxcinYyRzGj6VgwuADiGKmgv79C9TpdD2StDFTKwL9HjZN0WOKAw8RiKhvVTUJxHjtZoZBjdSEi56%2FMOPi2Y7Z4BKnlt5wdGeBoXTq3T1hk8EWf6alJiPSY7R9QmW6QdYEurNiccPHYidIy3dY0ejHp1B0xx1GN7RoVT1lOergYIAY9rPdQhnqb5lv2%2BazphzpZ9VZl2pd09aDZo%2B9n32TmBryZN1UgtyNmAOTC5itDJBjqkAXKQE9P71bhD1sl3FSlt69f5aQlEaAJLbscd53v7NrYNqvi1gF2jPurs62PcvXTXXa7Vcp3TxhOkFqxJ1H%2FqZ5voGkRmFR4scNORhpBZTg9kTMUkhFyBoh3EsCv97uNh6e57SBR2HCIMJWAGMPlPG5Te%2BUMoP09hiEbmTLi6QceKjFqu6R40Ndj3EZ9LQuZut80CYMveeewtvn2NnnLaRUzBChPM&X-Amz-Signature=e29f69ee26a1aee0e3b175e04c05908d14840f52fd7edd69e738e0b97648cb30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

