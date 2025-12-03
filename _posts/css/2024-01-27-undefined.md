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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL3ERY2A%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T050026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQC3CpjeMm0UBjpCaERfshFbGKHjO2gcdo7kTvBbtGsEMQIhAMA5a%2BXmnGoFuV78vMuAA9gjkZhM%2FM4hwkbEe1tvYjGvKv8DCCIQABoMNjM3NDIzMTgzODA1IgxfKa56ctYb2fEKmu0q3APkidnNCq4Imw7zQ6Tu1nQBfVjEs3lN%2BFmdxcbQ9m5oL2YOmBoYyY6MZyjkOMzMeUvd8OswZfxtwFxcuz2CLsKIpSkBQrrgjK%2FsD5WCntV4iPS8jxrX3ff67%2BL%2BOy7%2FesaQboUU2Nz2LIJJ076kIzS128mym8eDvAFfotpYBa%2FhF8fsm%2F8hLDpUO58WrgsSKBOE1rAzoKEZjXERMloTgYTjo8O84c3jN8Fu5MxPUW%2B64c%2F870gityiDPmMMVj5emp0%2BqndVFc3VFuD%2FDinSz39tKRC80gauflWfqV3EPtn%2Fgxqr5s1vmk%2FZy8imuoDjOQgFkiRTxPMLIVeMHnVdsOF%2FrUHEQn9gQfVSd3so7u91TvzcncNpSOOTiW4kb4alLF0zerO5HquB2Roojsdbyq5JKIQnN%2FzfLrRSCf09w73OWNQ2dOG236iHzQaaYzgwKCQJACs2G%2BZvsu%2BAildNVZyqB4aQO2eU0VvKctz%2BWupXgepMTdG73nQeid5hC6HFpQJLOCSgQDE5g7TISNQI3ksbAUY9puQVHSaF7n3g7LiMMVJdgiDLc19Gv8SpGZSH1h%2BdZX5hK91XHebE4dyf63dTYO0of73EHZjw%2FUhPKMvT34oF8M1IRGFfA2XxPTDjlr7JBjqkAZQJhpzdAzYR%2BPxuCK86YMIQYX%2F3zdk6wPlAGTnU6fyNRcxWd4PNmtKoe5lhFUwwWMi%2BHe%2BaWMK2YfiFtNh0DUao%2BLNzQ%2BtWYwmvmq8jZ9TFJR2wMqaB05QIKm8E6Sce9muX6mg%2FeVfNuQm4Ws9jA%2FhVtMICLa6YL54IfckJkOF73ZZQaMwlLWO%2FZs4ifu9aUD0Eqxvl5ASfUo6giQlTG%2BV0NdQO&X-Amz-Signature=3f72323b2c93cae06d0812fd1a351055101e9135ae97f33459e8d2dc60c22449&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL3ERY2A%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T050026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQC3CpjeMm0UBjpCaERfshFbGKHjO2gcdo7kTvBbtGsEMQIhAMA5a%2BXmnGoFuV78vMuAA9gjkZhM%2FM4hwkbEe1tvYjGvKv8DCCIQABoMNjM3NDIzMTgzODA1IgxfKa56ctYb2fEKmu0q3APkidnNCq4Imw7zQ6Tu1nQBfVjEs3lN%2BFmdxcbQ9m5oL2YOmBoYyY6MZyjkOMzMeUvd8OswZfxtwFxcuz2CLsKIpSkBQrrgjK%2FsD5WCntV4iPS8jxrX3ff67%2BL%2BOy7%2FesaQboUU2Nz2LIJJ076kIzS128mym8eDvAFfotpYBa%2FhF8fsm%2F8hLDpUO58WrgsSKBOE1rAzoKEZjXERMloTgYTjo8O84c3jN8Fu5MxPUW%2B64c%2F870gityiDPmMMVj5emp0%2BqndVFc3VFuD%2FDinSz39tKRC80gauflWfqV3EPtn%2Fgxqr5s1vmk%2FZy8imuoDjOQgFkiRTxPMLIVeMHnVdsOF%2FrUHEQn9gQfVSd3so7u91TvzcncNpSOOTiW4kb4alLF0zerO5HquB2Roojsdbyq5JKIQnN%2FzfLrRSCf09w73OWNQ2dOG236iHzQaaYzgwKCQJACs2G%2BZvsu%2BAildNVZyqB4aQO2eU0VvKctz%2BWupXgepMTdG73nQeid5hC6HFpQJLOCSgQDE5g7TISNQI3ksbAUY9puQVHSaF7n3g7LiMMVJdgiDLc19Gv8SpGZSH1h%2BdZX5hK91XHebE4dyf63dTYO0of73EHZjw%2FUhPKMvT34oF8M1IRGFfA2XxPTDjlr7JBjqkAZQJhpzdAzYR%2BPxuCK86YMIQYX%2F3zdk6wPlAGTnU6fyNRcxWd4PNmtKoe5lhFUwwWMi%2BHe%2BaWMK2YfiFtNh0DUao%2BLNzQ%2BtWYwmvmq8jZ9TFJR2wMqaB05QIKm8E6Sce9muX6mg%2FeVfNuQm4Ws9jA%2FhVtMICLa6YL54IfckJkOF73ZZQaMwlLWO%2FZs4ifu9aUD0Eqxvl5ASfUo6giQlTG%2BV0NdQO&X-Amz-Signature=b34de456a97ab8570f90a358376acac6c4970bb23f85e49c6b9cd4f45b38ac88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

