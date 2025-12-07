---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NS6LELZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T041904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5uZcoJ8zTfnYdWPHHL%2Fl1VQN1dmYjhtJbfPfMbOJrfQIhAKeWl0Ik11ipODlIQKnh89cK%2BM7leZIyFp7za7zTRa3lKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzC7NeGOQOvXh%2BjbDsq3AMI%2FPLA0phgWAM9qU9CsPhZhZ5XgWELDYsILte9%2BgsPLCB0f7s5tjZJMNWSStVpz8bVoAssh7Sh6OHm6c33VUnF9uI8ACVzhs9z9%2BZkUVZB0Y6T1Xe9%2F%2Bod2377x9l1m%2BsbF5dsDH3l67tchLKrNnii%2FX2VpANwkUEO8N8OdyrJDgXQwLdnbJBl4oiyq4PgwbL3%2BRFUutHXxCfz9bpaFqHlPmic%2FUObK4zUwhGN4FGVJ8cBGApq8L8UIfq5e2Bv8dJB58ZKUsIHt%2BQLjnlWtKmsPKPcUIZ%2BF1yLGkHIh2MG%2FzDESvFrj6HRulGk4VsS1nhHscfkdce18RKbZIkCSvI2xj5lh0%2BceLG2pP54nIjBM4Pbltj0zazmMN9N7iaUu7xA1saJBlj%2Bxs6jgtLs7Xb6vyR3l8OSuiIjVB9CiGG%2B1s003oJwOBXjgNNo7d9jBHHfRmO08fy2pbfqwIarJPwX1PUVPRIkUb2obqgz8dfU1ib1am0jA6rpC0%2FfjMHyFBY2XCGFNN8LPiA9ZBPtw%2BeJ3W2N%2BzusRxwvNufILZFw6Pmgfm429ezpWbVBOrqw6foGCgQfNbtlvoSKvIjOPUpK6ul9GBLdNLbxdVNji18t%2FSQRTofmYErZK5wBoTC4%2FdLJBjqkAcSbVZ8TpUmER3NSJuC8DBt8LIFFywjxl8MSLmJM0%2BSP1%2F2VNJnG0KH7dVkagt6zkmZl73RRvN1fyDbaUbDpFonXb6xIadPOUZEbs7XP3%2BgKYl0Q2keqjPrExG4pX9qqXhFwwRm1Cl8J4HChIl46V7gtvIDD3A89ImXiYdpMRfHj9dIcxymnxhGIvbHELAzcjDM3KY1lh27nRwTw0dVb2pmDNZOs&X-Amz-Signature=a08d9a992548793d606994448f2114000a6e2018656f820a43d49b7505b7da68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NS6LELZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T041904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5uZcoJ8zTfnYdWPHHL%2Fl1VQN1dmYjhtJbfPfMbOJrfQIhAKeWl0Ik11ipODlIQKnh89cK%2BM7leZIyFp7za7zTRa3lKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzC7NeGOQOvXh%2BjbDsq3AMI%2FPLA0phgWAM9qU9CsPhZhZ5XgWELDYsILte9%2BgsPLCB0f7s5tjZJMNWSStVpz8bVoAssh7Sh6OHm6c33VUnF9uI8ACVzhs9z9%2BZkUVZB0Y6T1Xe9%2F%2Bod2377x9l1m%2BsbF5dsDH3l67tchLKrNnii%2FX2VpANwkUEO8N8OdyrJDgXQwLdnbJBl4oiyq4PgwbL3%2BRFUutHXxCfz9bpaFqHlPmic%2FUObK4zUwhGN4FGVJ8cBGApq8L8UIfq5e2Bv8dJB58ZKUsIHt%2BQLjnlWtKmsPKPcUIZ%2BF1yLGkHIh2MG%2FzDESvFrj6HRulGk4VsS1nhHscfkdce18RKbZIkCSvI2xj5lh0%2BceLG2pP54nIjBM4Pbltj0zazmMN9N7iaUu7xA1saJBlj%2Bxs6jgtLs7Xb6vyR3l8OSuiIjVB9CiGG%2B1s003oJwOBXjgNNo7d9jBHHfRmO08fy2pbfqwIarJPwX1PUVPRIkUb2obqgz8dfU1ib1am0jA6rpC0%2FfjMHyFBY2XCGFNN8LPiA9ZBPtw%2BeJ3W2N%2BzusRxwvNufILZFw6Pmgfm429ezpWbVBOrqw6foGCgQfNbtlvoSKvIjOPUpK6ul9GBLdNLbxdVNji18t%2FSQRTofmYErZK5wBoTC4%2FdLJBjqkAcSbVZ8TpUmER3NSJuC8DBt8LIFFywjxl8MSLmJM0%2BSP1%2F2VNJnG0KH7dVkagt6zkmZl73RRvN1fyDbaUbDpFonXb6xIadPOUZEbs7XP3%2BgKYl0Q2keqjPrExG4pX9qqXhFwwRm1Cl8J4HChIl46V7gtvIDD3A89ImXiYdpMRfHj9dIcxymnxhGIvbHELAzcjDM3KY1lh27nRwTw0dVb2pmDNZOs&X-Amz-Signature=3e7d58460b8abbee1be169f26dd56065fffec0e3ed28a7c2224bc3859a7e9881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

