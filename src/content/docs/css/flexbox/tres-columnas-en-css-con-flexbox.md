---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWQCCYQ4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T152838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFrQ9Pi%2BmCTou4GIG2kvRVb3rYRwXMIqQlTmkri39j3AiByXstWGzeuxKFSwGgAvr3VZazxtcWQf5SDwZKm7uItPyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMuW4H3nSZBwEiAJT0KtwDC0a6W3HHG4ziys4PmhuZ05hwqWfMsUYTajuY%2BFtiPtVBYqT5E%2BEnBxnOsMirNajixMWu9j9qUdHV4iNywfJhuiHf1ZisHKTAg2otz15ARbTml8h%2FmWb8NN6gEmt2rTZ5oy%2F2z%2FyJr4BufvYeekH7fP9H%2B5zRgjgu2i%2Bghl%2BkcT6qLsFroMZztiIyDmxldQ5TRgM2TEIoqoCjllmlR5wtuTWbwkefl3kMH46NGkcSr7Jr1dA30P57KaSSK91lk0ZCBbVxk%2FCYbYmXiL3V6UEVXJ0nxIPW6KgyqIzoNi5J187m4JaQX5UHsPMazNg8P5LsALSAVlF9LkS3qA2nJfxBSL2v2eSa2qDfYAJDRTum9uKsCSx%2F0o9Fbu2T3%2FjWNkpeSDExIOLSB7%2FKO6blMcL4WSB9dOQVsZgCmPKhb3CuSKUeNCecV2bKAtZD6rL7XTr5r4BxGyOp%2BpyT7UunySTx6KMtkVNTuyai5gLekznoTT27X%2Bjkx9Yqpu%2FtB3%2BASewfZ53pBgI%2Fwl%2FFTyQ5rIdQ8KDkjbF8kfQU%2FtEYauRpGf3LwF38RdQZ2RXdcDpJg7TUWOtDHmAFuhlYxMirnk6fjnhcWfOlnAdXM9yDcKUoQMDtSXkXtrmF3DQ%2BisUwzqbQyQY6pgFCvD1HH85rXgdCWjSpX%2Bkb4Zw6u8mVrQwLDDfsA7j4J%2FrrA%2B6Ug7WUENkfSt6suNYiT3fDXqhWOmO5qPwLPEe9%2BeS5XYvecPVzQwQ1jgkPQfbd%2FOPaEn40Mt7Zz2Y%2FB36s%2F6hEczKL0eUbRDRk6ybOio8zer5iZ0Ajr%2BEToG49yAunso9lE7Mt7JKM%2FoSnLsKzJEIwtCozrYRtMabg%2F0C2dTUcaMq4&X-Amz-Signature=c1c69246d8dab8cf8937e5f877f9b85433b4637a09ae51a4a1d32f902a423ae0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWQCCYQ4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T152838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFrQ9Pi%2BmCTou4GIG2kvRVb3rYRwXMIqQlTmkri39j3AiByXstWGzeuxKFSwGgAvr3VZazxtcWQf5SDwZKm7uItPyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMuW4H3nSZBwEiAJT0KtwDC0a6W3HHG4ziys4PmhuZ05hwqWfMsUYTajuY%2BFtiPtVBYqT5E%2BEnBxnOsMirNajixMWu9j9qUdHV4iNywfJhuiHf1ZisHKTAg2otz15ARbTml8h%2FmWb8NN6gEmt2rTZ5oy%2F2z%2FyJr4BufvYeekH7fP9H%2B5zRgjgu2i%2Bghl%2BkcT6qLsFroMZztiIyDmxldQ5TRgM2TEIoqoCjllmlR5wtuTWbwkefl3kMH46NGkcSr7Jr1dA30P57KaSSK91lk0ZCBbVxk%2FCYbYmXiL3V6UEVXJ0nxIPW6KgyqIzoNi5J187m4JaQX5UHsPMazNg8P5LsALSAVlF9LkS3qA2nJfxBSL2v2eSa2qDfYAJDRTum9uKsCSx%2F0o9Fbu2T3%2FjWNkpeSDExIOLSB7%2FKO6blMcL4WSB9dOQVsZgCmPKhb3CuSKUeNCecV2bKAtZD6rL7XTr5r4BxGyOp%2BpyT7UunySTx6KMtkVNTuyai5gLekznoTT27X%2Bjkx9Yqpu%2FtB3%2BASewfZ53pBgI%2Fwl%2FFTyQ5rIdQ8KDkjbF8kfQU%2FtEYauRpGf3LwF38RdQZ2RXdcDpJg7TUWOtDHmAFuhlYxMirnk6fjnhcWfOlnAdXM9yDcKUoQMDtSXkXtrmF3DQ%2BisUwzqbQyQY6pgFCvD1HH85rXgdCWjSpX%2Bkb4Zw6u8mVrQwLDDfsA7j4J%2FrrA%2B6Ug7WUENkfSt6suNYiT3fDXqhWOmO5qPwLPEe9%2BeS5XYvecPVzQwQ1jgkPQfbd%2FOPaEn40Mt7Zz2Y%2FB36s%2F6hEczKL0eUbRDRk6ybOio8zer5iZ0Ajr%2BEToG49yAunso9lE7Mt7JKM%2FoSnLsKzJEIwtCozrYRtMabg%2F0C2dTUcaMq4&X-Amz-Signature=186ac16742c1cbca6e465b9584f57a67db2185c9b737edbd3179d8c4540bc2ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

