---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBYFW2A6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T031810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdsLokY3B6mGoRtfShg1%2F9JjcUmLaN1azEyd%2BWoiej9AIhAI0CWL1OQY9gecE5lm4ESXD48sKGeNJvIZrC6Y51FQgRKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfMvlvIxegIhoCR%2Bsq3AOhtN1vjhl91IY1D3PwePwSrNfd2JYc1egcb63IqXDROuroG3lMD8wv01KcgKkWHawKcrpDvdVV8yVHoPbbg0Hr9psZ5Fn7R%2ByGMhxHchA6bgxdAQmAoVChI032cw04FSoIE%2FdfPU5fNfBb8Uuupz98sQbFmaZs5TBiQloa%2Fli3bAWczYbM%2BPS%2Ba%2BQ%2FfvSajdAaF7I0GrfbyeCaHBBNri%2BRo7N%2F8ovhKVSNYNfpA1JJYKgaYSJIDvM6L9u96sj9xe2pis8wMWJ6r4kHiXFbCQWsMjC4lHChkw5DNc1j9q8d71h9WpE5NoLJ1FLkShBkli0GPCaJCmQ5v%2Fml5aLj08UNCaLy0yDox5xZVI6tamxysj6%2BaPKslD%2F%2BpsCUSYC7f6rOulh8Z%2B8NYvZRS81UvrBByiEd84%2FaBB%2FKaiOjZIiMNpuXoyIF3naAAoo8bHiiPFjGzHYrfVlPzty6Gk8PfMPvq6ckAtXcgt%2FYm%2FIIOsq2sMI7Lx2TJSYX%2B%2Fa5yJeadR7F5Wpz0QOxvwDLN2M3y8R8SteJ%2B46pM2O75nd4s5opCjDytT8h2WL5pFnaVjoTxAjTMsfr8FCGOBT0vPFOqLeBm83%2BthIE4focv16CuU1NjCek2%2FqtyRJno1fMFTCK79jJBjqkAZ4MNkVslNRrPjawQlbkd%2FF1QALqr9UB%2B%2BGzJ3M53iWPhAYWtothwPsb1z60ql2yXp6k0jTypZDNs9LqjsSjCM6NjNnHOgYKS%2BBg2ulpaNGNgmkGBS1la2gLO7yZTiLwgn8rzaXzbMBLeuuck9vgaAyec5M8tiw3tZDNDAO%2F63hNUs1Q8npPb%2F%2FKTcmxyZ1L535fLwiXnhIvBL7uMh4kK8cGtTL3&X-Amz-Signature=2a0c6a1024179640a66a52795469c80d6a4dfb09e6da3955ab8f93922c84bf73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBYFW2A6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T031810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdsLokY3B6mGoRtfShg1%2F9JjcUmLaN1azEyd%2BWoiej9AIhAI0CWL1OQY9gecE5lm4ESXD48sKGeNJvIZrC6Y51FQgRKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfMvlvIxegIhoCR%2Bsq3AOhtN1vjhl91IY1D3PwePwSrNfd2JYc1egcb63IqXDROuroG3lMD8wv01KcgKkWHawKcrpDvdVV8yVHoPbbg0Hr9psZ5Fn7R%2ByGMhxHchA6bgxdAQmAoVChI032cw04FSoIE%2FdfPU5fNfBb8Uuupz98sQbFmaZs5TBiQloa%2Fli3bAWczYbM%2BPS%2Ba%2BQ%2FfvSajdAaF7I0GrfbyeCaHBBNri%2BRo7N%2F8ovhKVSNYNfpA1JJYKgaYSJIDvM6L9u96sj9xe2pis8wMWJ6r4kHiXFbCQWsMjC4lHChkw5DNc1j9q8d71h9WpE5NoLJ1FLkShBkli0GPCaJCmQ5v%2Fml5aLj08UNCaLy0yDox5xZVI6tamxysj6%2BaPKslD%2F%2BpsCUSYC7f6rOulh8Z%2B8NYvZRS81UvrBByiEd84%2FaBB%2FKaiOjZIiMNpuXoyIF3naAAoo8bHiiPFjGzHYrfVlPzty6Gk8PfMPvq6ckAtXcgt%2FYm%2FIIOsq2sMI7Lx2TJSYX%2B%2Fa5yJeadR7F5Wpz0QOxvwDLN2M3y8R8SteJ%2B46pM2O75nd4s5opCjDytT8h2WL5pFnaVjoTxAjTMsfr8FCGOBT0vPFOqLeBm83%2BthIE4focv16CuU1NjCek2%2FqtyRJno1fMFTCK79jJBjqkAZ4MNkVslNRrPjawQlbkd%2FF1QALqr9UB%2B%2BGzJ3M53iWPhAYWtothwPsb1z60ql2yXp6k0jTypZDNs9LqjsSjCM6NjNnHOgYKS%2BBg2ulpaNGNgmkGBS1la2gLO7yZTiLwgn8rzaXzbMBLeuuck9vgaAyec5M8tiw3tZDNDAO%2F63hNUs1Q8npPb%2F%2FKTcmxyZ1L535fLwiXnhIvBL7uMh4kK8cGtTL3&X-Amz-Signature=b4ea815bf5ff8ed52400b6a6fc88d291520ffa6f050ed2f7f7ebbd5fe88e9cc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

