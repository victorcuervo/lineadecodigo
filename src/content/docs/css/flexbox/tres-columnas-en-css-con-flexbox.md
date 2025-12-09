---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCQVKK2L%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T090934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDDFbkr1HS3EPy0bFpkuzDxoMB7ZfMC0nRxkv3oww5%2FAIhAOHz2t%2FLMiypvA6GS5Ld3C2GTZSi751Gm3pGrwbUJ7QMKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw88hjhf2eaOkuOEc8q3ANcs1EYPNgE%2BCIxI77h9EiSwWlcbadGd6a%2FszbcgXySSd4bAPSS63WQf7roqdE8HNv%2FVOxWKurNmMnKN82nDhgquw0mWHoIbNBbD4YwLtCmXb44V1tTdwQGmoavkUpKtxD6Gel5sY6Fyh7BLahfaEKnH3iPRzPw%2FS3lizTQE0sRNEUGMHP2TLGGJFiQ19%2BW%2FQBwbA6Qnuz6e0B22VM5V%2F%2BZG%2BlY45V3pEpp3JYMCNhWOev4Jf4FwT2lEcs2961f9a7UQ1DIrC73ide5qDjmsX8c7CkKEy0ko%2FOINXgmNyv2QxeBAL6x2SChpeTuATajP62mK3xmfE9TNSaCP71EdbEUJQZEE5%2BeHNc6ICat0CApAl8xD6jDpRPQ2BisMW9pcsccVQMMk8UfSSJEVOy%2BO2EnZ8f5thcdHEQBdfMQ7m4MmV6Oa8x6ZQnnKTPg0wDpbdetObal%2Bn9CHnULj3zGcsCapwKy8tPEgJJWgVns0Ft9Uo3aHy84h8zzlFmlCNRDGXJJJbyKf6wiAnspytPQeYYdrkllPe%2FLpbpoVlqQNWOgDxdURZBB8U%2F7vNZU4N82djC6bVV1Pk6p%2F0yc81e7GYhMe3wIwWPF7pla0Y3To04CWdsVssM3MBXXow6saTCYxN%2FJBjqkAT2G3c9y2beiS5biLl%2Bof5NXGaRFpybnXaVAfNB7y34h5ap7baPNFRelCKvZADX81uM93KPGhRzanjU8OGuqfqlbLvTdS71dBzAxFYKrBQ%2FsursmAoIgo661NZs58ApJTWcGMxkWmwmLyyX7x%2FHdSHcVS3ErJHGd3y%2Bus%2F8CQIIMPZkYmk2xuAe0%2BDFJ%2FlMaxm2%2B8nStGOjlnTDUrRf4oIz7dgGL&X-Amz-Signature=ff8362e62669655349249ef3bf3270e3f30126615235fdf63cf94868e0af1b73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCQVKK2L%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T090934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDDFbkr1HS3EPy0bFpkuzDxoMB7ZfMC0nRxkv3oww5%2FAIhAOHz2t%2FLMiypvA6GS5Ld3C2GTZSi751Gm3pGrwbUJ7QMKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw88hjhf2eaOkuOEc8q3ANcs1EYPNgE%2BCIxI77h9EiSwWlcbadGd6a%2FszbcgXySSd4bAPSS63WQf7roqdE8HNv%2FVOxWKurNmMnKN82nDhgquw0mWHoIbNBbD4YwLtCmXb44V1tTdwQGmoavkUpKtxD6Gel5sY6Fyh7BLahfaEKnH3iPRzPw%2FS3lizTQE0sRNEUGMHP2TLGGJFiQ19%2BW%2FQBwbA6Qnuz6e0B22VM5V%2F%2BZG%2BlY45V3pEpp3JYMCNhWOev4Jf4FwT2lEcs2961f9a7UQ1DIrC73ide5qDjmsX8c7CkKEy0ko%2FOINXgmNyv2QxeBAL6x2SChpeTuATajP62mK3xmfE9TNSaCP71EdbEUJQZEE5%2BeHNc6ICat0CApAl8xD6jDpRPQ2BisMW9pcsccVQMMk8UfSSJEVOy%2BO2EnZ8f5thcdHEQBdfMQ7m4MmV6Oa8x6ZQnnKTPg0wDpbdetObal%2Bn9CHnULj3zGcsCapwKy8tPEgJJWgVns0Ft9Uo3aHy84h8zzlFmlCNRDGXJJJbyKf6wiAnspytPQeYYdrkllPe%2FLpbpoVlqQNWOgDxdURZBB8U%2F7vNZU4N82djC6bVV1Pk6p%2F0yc81e7GYhMe3wIwWPF7pla0Y3To04CWdsVssM3MBXXow6saTCYxN%2FJBjqkAT2G3c9y2beiS5biLl%2Bof5NXGaRFpybnXaVAfNB7y34h5ap7baPNFRelCKvZADX81uM93KPGhRzanjU8OGuqfqlbLvTdS71dBzAxFYKrBQ%2FsursmAoIgo661NZs58ApJTWcGMxkWmwmLyyX7x%2FHdSHcVS3ErJHGd3y%2Bus%2F8CQIIMPZkYmk2xuAe0%2BDFJ%2FlMaxm2%2B8nStGOjlnTDUrRf4oIz7dgGL&X-Amz-Signature=857418df39aa5fd119e25128eb16462841aa0f6712db0b63dca58db90899625c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

