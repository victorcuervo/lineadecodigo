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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7E7XP3W%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T050521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDAXM%2F%2BVh4FuSmYPlk3%2FAZY%2BXiDQQQcCQsdPL%2BG0OWJ3wIhAJ3wxkPk6hhPLTWotdbMoj9zD0Oi1KLVWiT%2Ft08aVMswKv8DCCIQABoMNjM3NDIzMTgzODA1IgzX6i%2FYuSBZRBBYMJ0q3AN5UTYXekHsTzKESxCnpeP9izGiFlkNp2BuV8qwTKUqoqVWe5UzKPxEODsqWjaOzFrtCk7%2B3s3JKvAY1MKUieEJJ8kzrmXKjv%2BEx35%2Fl0FXWXqpNUgPKcxjq9YsNB%2BR0jitRQ%2BBWFjPYS0oc5QWgl8p58I9rnET2wayyeON7evcqut8lhnlcle0ZHq6G3TUmAz6%2BGihCHU389l1uCuC7mxGuR4ocT5y9ijU6YG5Cm1uQwFGPtaAKdgTExhwHgXfwApVRhI%2F3qiYdPntcWyWHKE7iTLfPGQ%2FrhEMcmuS75JmbjidfvbXa86HFQgqIUm3z2e9D1rqlqXd0M3boohsictK8%2BoXbxV4edIuASgFZWCVfMPVgfAEMtMo80L%2F9uIedHICaxcoTggebcpIyXRNjAN85f7cXOt3Py1HWblQdnzcneMI4%2FTbs8luaWRNKlb92ESzSzwimQOfF1KR%2FISNmrfIf63QXfPol8CTcWWroRt0juE814s33bIAvGn2LiaVgKBoA3R5SWdaICjRLxEKo6WsWJYouSu5a23YhKRe%2FlNcG9b7ynH4XWYoaMwYTtjI30b457C5%2F8o9CfGb1MSbysDb7WBN43yXVX6e%2BCtJhthwXjz6TywV%2F7VGFXkB8jCllr7JBjqkAda9bFVEPKF9a9fNTyrqIulJn8yw%2FMBqlERUsLCqmj1Bkp4khL3UZEmkl%2Ba2LDNFOFQD4lK%2FKDXVz%2BPBEZFv0vi2Uyq0n2OIq4%2F4AqnMPjrnfw7dyR%2FzOgcENM%2FYQvQyd7d6l%2BNCDAqT1se9iOMuUlGkmA63M3GkiiyCucyu10eg0V68bLJr2kbscIjz7stpJKlJPxVw1JGZdsSetPQfE4BGGCi5&X-Amz-Signature=5938e370047c81dbc0be52de15f803faf16151497c16352618eccc4e67cc8900&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7E7XP3W%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T050521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDAXM%2F%2BVh4FuSmYPlk3%2FAZY%2BXiDQQQcCQsdPL%2BG0OWJ3wIhAJ3wxkPk6hhPLTWotdbMoj9zD0Oi1KLVWiT%2Ft08aVMswKv8DCCIQABoMNjM3NDIzMTgzODA1IgzX6i%2FYuSBZRBBYMJ0q3AN5UTYXekHsTzKESxCnpeP9izGiFlkNp2BuV8qwTKUqoqVWe5UzKPxEODsqWjaOzFrtCk7%2B3s3JKvAY1MKUieEJJ8kzrmXKjv%2BEx35%2Fl0FXWXqpNUgPKcxjq9YsNB%2BR0jitRQ%2BBWFjPYS0oc5QWgl8p58I9rnET2wayyeON7evcqut8lhnlcle0ZHq6G3TUmAz6%2BGihCHU389l1uCuC7mxGuR4ocT5y9ijU6YG5Cm1uQwFGPtaAKdgTExhwHgXfwApVRhI%2F3qiYdPntcWyWHKE7iTLfPGQ%2FrhEMcmuS75JmbjidfvbXa86HFQgqIUm3z2e9D1rqlqXd0M3boohsictK8%2BoXbxV4edIuASgFZWCVfMPVgfAEMtMo80L%2F9uIedHICaxcoTggebcpIyXRNjAN85f7cXOt3Py1HWblQdnzcneMI4%2FTbs8luaWRNKlb92ESzSzwimQOfF1KR%2FISNmrfIf63QXfPol8CTcWWroRt0juE814s33bIAvGn2LiaVgKBoA3R5SWdaICjRLxEKo6WsWJYouSu5a23YhKRe%2FlNcG9b7ynH4XWYoaMwYTtjI30b457C5%2F8o9CfGb1MSbysDb7WBN43yXVX6e%2BCtJhthwXjz6TywV%2F7VGFXkB8jCllr7JBjqkAda9bFVEPKF9a9fNTyrqIulJn8yw%2FMBqlERUsLCqmj1Bkp4khL3UZEmkl%2Ba2LDNFOFQD4lK%2FKDXVz%2BPBEZFv0vi2Uyq0n2OIq4%2F4AqnMPjrnfw7dyR%2FzOgcENM%2FYQvQyd7d6l%2BNCDAqT1se9iOMuUlGkmA63M3GkiiyCucyu10eg0V68bLJr2kbscIjz7stpJKlJPxVw1JGZdsSetPQfE4BGGCi5&X-Amz-Signature=2649a32ed2066b06a814b27050083afae1bbbf12d853cdcd624dbc1c61aff883&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

