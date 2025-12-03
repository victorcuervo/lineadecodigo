---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSEMHDKH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T015359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDTRydkOoHLo0fRJVi%2BFix7yZNfutBD3MVurul21ETSHgIhAPaaWIURcliSRKMVJds4qJ1r485MoDi3MSV6IJrWE86ZKv8DCCIQABoMNjM3NDIzMTgzODA1IgzqP1pt5806dqA7VRYq3AMUPUumc8K77pcaNPbQr9Q%2F9r1XU9gPzmvONZgHNWQJeBrLzP0vh5aj9TfiSnibwHZeidC1JYV7LMacDMjC8GXts9b7D%2FVYwrBjPpZoxt7U8mlP4Rs%2F7szXE8h3Fo1yzATk8SBMpXC1MyZjvZ1J2zi%2F0kpZCsEixN%2BaiSerhtp8gNudR48UDk%2BUGMprqbYSMzC1Ivca8I8owsPK1O4PHi%2BjCLskLw9RVQPg23rntkTRqfnMTlvypngfuVib8NfWuZF5Cz31DSXhWxdQk1rxnO%2FPd%2BnyNWJeg3qZtENXLINt%2FXlnGZNglnuXyBgvlDT04o%2F4rFWTKGSu4MpP%2B1LSJpV%2FlFnDT0Hab0DX91IRMpJV4JRLllB4nzWj3JAK1%2F%2BsgR495UaPMlP1x16vMBisM95vqwjF8x3%2Bw8PDK%2BFz7c2BPAyMGHatMsXbjux1VNrrHx9kpEehlavhHivP48sPiH9ciSW8JGexxdUtxl39zwwU676bBoYRqnKIuyFF%2BYqvbAPF9Vkx%2B7%2BFwBBnpRVY8KUEd2gbVi%2BKAhyeGcrupz%2FyQVi3W6Q3NYb4u1IYX2UrKibwVC8J%2FgthS%2FSWawX4SHmFJjt2iDYDNPvetzQgRUwzcyjatsHUg83Hd6nrVzCBlr7JBjqkAYnfEtyg3aqV%2BC6y3acPg49IGvXqcK%2FR9Kt%2FwGoDga2lywK3NibYDgp2vBkS68n%2BLy2zL%2FB7R3UEVL1yshBWYnhqohBurvqIa9K25vJFZZ0DFU4tSv%2FiTTt2qnSnJ9HE7idNdnh3wzcjw4lQeRtTzOuHH9rVmn0pAV0%2FFEHM0VwPdl9LUVxUMa18o7p85KOusmj3%2ByA2118i6OxaJOHuHXpEtMhm&X-Amz-Signature=7447d08b9c425bde4b59268d61e08938ccb928a60334ef4b2d52f06e21340909&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSEMHDKH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T015359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDTRydkOoHLo0fRJVi%2BFix7yZNfutBD3MVurul21ETSHgIhAPaaWIURcliSRKMVJds4qJ1r485MoDi3MSV6IJrWE86ZKv8DCCIQABoMNjM3NDIzMTgzODA1IgzqP1pt5806dqA7VRYq3AMUPUumc8K77pcaNPbQr9Q%2F9r1XU9gPzmvONZgHNWQJeBrLzP0vh5aj9TfiSnibwHZeidC1JYV7LMacDMjC8GXts9b7D%2FVYwrBjPpZoxt7U8mlP4Rs%2F7szXE8h3Fo1yzATk8SBMpXC1MyZjvZ1J2zi%2F0kpZCsEixN%2BaiSerhtp8gNudR48UDk%2BUGMprqbYSMzC1Ivca8I8owsPK1O4PHi%2BjCLskLw9RVQPg23rntkTRqfnMTlvypngfuVib8NfWuZF5Cz31DSXhWxdQk1rxnO%2FPd%2BnyNWJeg3qZtENXLINt%2FXlnGZNglnuXyBgvlDT04o%2F4rFWTKGSu4MpP%2B1LSJpV%2FlFnDT0Hab0DX91IRMpJV4JRLllB4nzWj3JAK1%2F%2BsgR495UaPMlP1x16vMBisM95vqwjF8x3%2Bw8PDK%2BFz7c2BPAyMGHatMsXbjux1VNrrHx9kpEehlavhHivP48sPiH9ciSW8JGexxdUtxl39zwwU676bBoYRqnKIuyFF%2BYqvbAPF9Vkx%2B7%2BFwBBnpRVY8KUEd2gbVi%2BKAhyeGcrupz%2FyQVi3W6Q3NYb4u1IYX2UrKibwVC8J%2FgthS%2FSWawX4SHmFJjt2iDYDNPvetzQgRUwzcyjatsHUg83Hd6nrVzCBlr7JBjqkAYnfEtyg3aqV%2BC6y3acPg49IGvXqcK%2FR9Kt%2FwGoDga2lywK3NibYDgp2vBkS68n%2BLy2zL%2FB7R3UEVL1yshBWYnhqohBurvqIa9K25vJFZZ0DFU4tSv%2FiTTt2qnSnJ9HE7idNdnh3wzcjw4lQeRtTzOuHH9rVmn0pAV0%2FFEHM0VwPdl9LUVxUMa18o7p85KOusmj3%2ByA2118i6OxaJOHuHXpEtMhm&X-Amz-Signature=2bdcd8b0554aead0d2f069107a1ba0f7c46b2b576a284426b11e985c45fe0f2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

