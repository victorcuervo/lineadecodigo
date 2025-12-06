---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7WSZH6Z%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T171059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfiaKEPv92H3I3Ng8rkM9B%2BSVW6YVPwsdQA%2FUzkvlZHAIhAMuSzl3sB8%2B38%2B9O%2FUI4%2B0cKO3Zt%2FX2D7qdoy%2Fskwh7NKv8DCHUQABoMNjM3NDIzMTgzODA1IgwGXQW6I1UGPU0%2BVrIq3AOvNoH0FOw1osGg4gqZaRtVxTwAiCZ6K%2FI1Xu2PN9w8G1hP0YeY%2BqEJEkdWZXa%2BIE8vEdJmfLVaWClGUPvYik%2BQmC4lk5KIselIMPyfFt9IJyOxq92Cgx4t1rwNHJvE1ePcHHG73iGzBvcTXVa7DE893kIHUiJT5KJi1WrS85%2FrBqdTX2uL78ulZF82xS6jc%2BillyxCvKJuXdxzjgo0X9hFJ37Y693guydunBuVDJmE41EiddVdBW8YnpsgmGjRBCHejKk8dxhTzkML2vU4PrhkG1lXzDmBuECWJa9yYmeJEw4iE8mXlLW8vTpMKZd54Wih3Vj5r%2B4U2xMhcAAuz76NfPCf6yJpPn3BJAz21vvEOArvvYwBtyrFOgPOjn8uzy5Q9IEqPNwPsKzbUhocs%2B5FY%2BMSMfj4tT9xYEGMTJuFeebD5wIPxFy11BvH8zgrGJJ1ybJpGKB9UzixdACkVHRKF1YYa8RFzPRN3mSwhof7pQuXJj5OCMY4c1LXzy7i1rNQHIxutJ9mdE3ZLiaI%2FXnMj5R5UaNFwGhOFP3oz7S%2BZ0SS9JDuw3P4eGlYLVxKetigY5LjI6eW64RBgntIndy32piNB2DrnrowLkmzNcbg%2BiBTTAojKZpEL1ALWzDWptDJBjqkAeL9SWfwGTKSCOPFCpgfZftbuUvaMhYQihHv0BM%2Fdc%2BK5lgQc6zfi3bElCLAsS2Pu%2B6Lo23H7T8783OP77Z9Nf6WIlzBytgfCLL1AgI6%2FkW94q%2Bdf5OX0jup8maEWfe5fazozQXlUpAxTN9GUZ5pvvKeVspRa4uzed45cTPIVDc92Ryaoa%2FTlWosekGqiZ%2Fve9ZhM3hnHGvGp33wXvPV6jxm0uCR&X-Amz-Signature=abf62709497584e48310ca385c6a60257425c851c3382d76eda313e9b15ed370&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7WSZH6Z%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T171059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfiaKEPv92H3I3Ng8rkM9B%2BSVW6YVPwsdQA%2FUzkvlZHAIhAMuSzl3sB8%2B38%2B9O%2FUI4%2B0cKO3Zt%2FX2D7qdoy%2Fskwh7NKv8DCHUQABoMNjM3NDIzMTgzODA1IgwGXQW6I1UGPU0%2BVrIq3AOvNoH0FOw1osGg4gqZaRtVxTwAiCZ6K%2FI1Xu2PN9w8G1hP0YeY%2BqEJEkdWZXa%2BIE8vEdJmfLVaWClGUPvYik%2BQmC4lk5KIselIMPyfFt9IJyOxq92Cgx4t1rwNHJvE1ePcHHG73iGzBvcTXVa7DE893kIHUiJT5KJi1WrS85%2FrBqdTX2uL78ulZF82xS6jc%2BillyxCvKJuXdxzjgo0X9hFJ37Y693guydunBuVDJmE41EiddVdBW8YnpsgmGjRBCHejKk8dxhTzkML2vU4PrhkG1lXzDmBuECWJa9yYmeJEw4iE8mXlLW8vTpMKZd54Wih3Vj5r%2B4U2xMhcAAuz76NfPCf6yJpPn3BJAz21vvEOArvvYwBtyrFOgPOjn8uzy5Q9IEqPNwPsKzbUhocs%2B5FY%2BMSMfj4tT9xYEGMTJuFeebD5wIPxFy11BvH8zgrGJJ1ybJpGKB9UzixdACkVHRKF1YYa8RFzPRN3mSwhof7pQuXJj5OCMY4c1LXzy7i1rNQHIxutJ9mdE3ZLiaI%2FXnMj5R5UaNFwGhOFP3oz7S%2BZ0SS9JDuw3P4eGlYLVxKetigY5LjI6eW64RBgntIndy32piNB2DrnrowLkmzNcbg%2BiBTTAojKZpEL1ALWzDWptDJBjqkAeL9SWfwGTKSCOPFCpgfZftbuUvaMhYQihHv0BM%2Fdc%2BK5lgQc6zfi3bElCLAsS2Pu%2B6Lo23H7T8783OP77Z9Nf6WIlzBytgfCLL1AgI6%2FkW94q%2Bdf5OX0jup8maEWfe5fazozQXlUpAxTN9GUZ5pvvKeVspRa4uzed45cTPIVDc92Ryaoa%2FTlWosekGqiZ%2Fve9ZhM3hnHGvGp33wXvPV6jxm0uCR&X-Amz-Signature=580ac02f1b4b9035cb29bc438ce10a051f5e949b2c66611b63a8f8c5f7cefbd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

