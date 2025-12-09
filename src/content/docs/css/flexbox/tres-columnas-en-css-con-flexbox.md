---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LJB6XCE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T065003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCspYVseEPcz9uUQjDqugsb%2BNq1T9jgXOIcICS1XZ9G2QIhAMPO0D8HOTp73EODNG%2Bl9zuYgAdEn6l9Ac5Ku3kZfu6FKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1o7LvBPsUxkMIT0Eq3AOWXEOQ2GTT86mIz324NQuqcMXWOuQ6hzjq6yIoMncXWxtck1tB0PTF3vM1WJhBh3v3Lf2BfOxmvAlLoR0Q2pDeza5qpw%2B2p8mByIr4bjLMcWoi2I5k%2BgdUoZ0x1VA%2F%2B6qiVgUPLcqI8%2BdZBhDvnplFPp0HEgGk3KvMyUJDBw8LLv3BTiAMCxzvPQThYQboJaG5unzU27qIXOXoRKJVRrN55Ddgyuk4usFhl4NjaEUYOHR9DTE%2BaCoQBPgQ%2FWSePEsCAYaBQxAyfgNv4yY7%2FG%2FJa0RcKSQ3Jf4HnX4n7BtCUTTCCMixpArF4fYdzN75oAWDepikaaHuySYa7TWUMDemoo8UwPXBZuQxnF%2BXNx53lWcQyiX93zUBWj9Sg5Otylvh0UWsAslFpu14hJq842NfUrzhuFAwILuTKDuj6ttYys%2FbAt6XxeYlzs5MFDWBhqrVzpyq0euXM3Em77KmwXfI7Rh5Yh2kvEYXiNwKg%2ByeDHEhu0NrqNfjlSdB%2FFIqZWcCcdda5gxZovIJd6E4GtuWWspzaAvatmJsnZXGubSfrQ7HVF5Fjd067IhhEnNjfUxL2sDNO0a5GZag3h%2BaLuitd5eVeitKY8t%2F4Bpz35sEw0yQgbNSb42Sp55i5zDoh9%2FJBjqkAR%2F4k6n6KcvkhJMqJlKQwUL8DOmqQYXDzvKA7%2FTCFq%2Fvh8JYqCp6SZMfapvyW0Yu4QdARmZAf1rM6XYY%2FWC%2FsMzZ2IPTMCHcC1CPyETz7TPo1EAbQfNIsBijhKjapH%2BOx5guZ1Hqb%2F%2FYA6uPqp5lBI67itoLpxBHrj8e%2BvMT1cgqwwE4FevI%2FNpoc9bjEcVrR54rAyRHcRQhQdq73GGSnF64HIG4&X-Amz-Signature=d2eb7a9ed782fbeb33f3d546640d8d04578404da0a5504622d446ecff24162ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LJB6XCE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T065003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCspYVseEPcz9uUQjDqugsb%2BNq1T9jgXOIcICS1XZ9G2QIhAMPO0D8HOTp73EODNG%2Bl9zuYgAdEn6l9Ac5Ku3kZfu6FKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1o7LvBPsUxkMIT0Eq3AOWXEOQ2GTT86mIz324NQuqcMXWOuQ6hzjq6yIoMncXWxtck1tB0PTF3vM1WJhBh3v3Lf2BfOxmvAlLoR0Q2pDeza5qpw%2B2p8mByIr4bjLMcWoi2I5k%2BgdUoZ0x1VA%2F%2B6qiVgUPLcqI8%2BdZBhDvnplFPp0HEgGk3KvMyUJDBw8LLv3BTiAMCxzvPQThYQboJaG5unzU27qIXOXoRKJVRrN55Ddgyuk4usFhl4NjaEUYOHR9DTE%2BaCoQBPgQ%2FWSePEsCAYaBQxAyfgNv4yY7%2FG%2FJa0RcKSQ3Jf4HnX4n7BtCUTTCCMixpArF4fYdzN75oAWDepikaaHuySYa7TWUMDemoo8UwPXBZuQxnF%2BXNx53lWcQyiX93zUBWj9Sg5Otylvh0UWsAslFpu14hJq842NfUrzhuFAwILuTKDuj6ttYys%2FbAt6XxeYlzs5MFDWBhqrVzpyq0euXM3Em77KmwXfI7Rh5Yh2kvEYXiNwKg%2ByeDHEhu0NrqNfjlSdB%2FFIqZWcCcdda5gxZovIJd6E4GtuWWspzaAvatmJsnZXGubSfrQ7HVF5Fjd067IhhEnNjfUxL2sDNO0a5GZag3h%2BaLuitd5eVeitKY8t%2F4Bpz35sEw0yQgbNSb42Sp55i5zDoh9%2FJBjqkAR%2F4k6n6KcvkhJMqJlKQwUL8DOmqQYXDzvKA7%2FTCFq%2Fvh8JYqCp6SZMfapvyW0Yu4QdARmZAf1rM6XYY%2FWC%2FsMzZ2IPTMCHcC1CPyETz7TPo1EAbQfNIsBijhKjapH%2BOx5guZ1Hqb%2F%2FYA6uPqp5lBI67itoLpxBHrj8e%2BvMT1cgqwwE4FevI%2FNpoc9bjEcVrR54rAyRHcRQhQdq73GGSnF64HIG4&X-Amz-Signature=b63b333fb2159f2dff887a626a4baf68db69d47df1748d728d29ed51b0b2b183&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

