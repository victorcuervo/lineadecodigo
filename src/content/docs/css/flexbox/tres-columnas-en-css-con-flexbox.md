---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662ELMU5O%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T003806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcYng6FcBtW%2FL%2Bcszarj63B969qNi%2FqEVgQdpv%2Fy5KCAIgc%2F%2B%2FvfCA8BqLZM60Y3v86exZTPzWN6dbQukG9gfC1ZQq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBucmM%2BxZNBg14oHgSrcA6Flw%2Fd4SlzMx8qw5%2FbC2sZcOXOA5dSd6jU1Gw0H97OfUzFvedqjYiTRlDtnyDGP%2FJeXhHlaHUbhmKXWqmDwFF%2FCdPUSUTQXASb8W3FEef5fkYR2TqFrzTDuZGRwReWAWYA2J%2BifqbR0qnjLyPSlSSy%2FL4N3iitgYPZlVSKdQ9bFfk%2FuAMl6hFWisBDW%2B6WjfD44B8KVRK1h78rRfcRQgcTaEKGfIefhzJU8uR1HZk%2FgoedyQGJ1aOVfC4uKcEmrCkuVabmTHvUGVEdvL4Z3bVqPwTvDJZWXcQ15yLu4nsynVVd9UOsqh99PVe8rXE2MEoE2vQWMgda3c5hCNtCvyHNxjAiTFhdQ7REVO%2FLFNEc9IcnkMCN8Dpenal1xg%2Fy9djXSI9FL0mSgB7HpUcCB6fXeIunIRWV%2FrTg9sYhyqeBdvMewADzVx78R1d5c6alq53oe2zBxuJBYiB7%2Bolk5kRZS9YOX2oQLkej0Dk%2BJ%2BkAIDVLpKtdmYARkRcVJdvzUOWkC7DcwFEgpRA06IEIdksVYOITXo%2F%2BTUMMKane%2F6%2B4iBsJw%2B%2FXojvy%2BGfID74Tiy48PI2C9Y25CfDDMgWtsf6U0NITZGtBXHdVxUBC9lpaoihTFx2WJUGB9FyTiMKuMyMkGOqUB7X7CjhXaPV048xEB3qSNGF9J%2BlB%2FiTqx5AnhyYcmK0plxklDsFLdWtDTAstUFfUJUf2cTgzws6JlRDHKo48lFqqo%2FSA3NDr9mJZgniLNGuLfa8waURvkZgrNloSytp%2Bx3S0im7J%2B1N%2FabpZcKF6YQLALZymp8qxpD%2BMaSUeUBmo%2FqJWSROgr9g0DUp9X0i7dOlLFxXVZUzDm2i2cMZI8ADKJx0GE&X-Amz-Signature=b3d8686f6e917cfe0351b700bbdcee0d718ef6d9c79123896aab5fd603149af3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662ELMU5O%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T003806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcYng6FcBtW%2FL%2Bcszarj63B969qNi%2FqEVgQdpv%2Fy5KCAIgc%2F%2B%2FvfCA8BqLZM60Y3v86exZTPzWN6dbQukG9gfC1ZQq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBucmM%2BxZNBg14oHgSrcA6Flw%2Fd4SlzMx8qw5%2FbC2sZcOXOA5dSd6jU1Gw0H97OfUzFvedqjYiTRlDtnyDGP%2FJeXhHlaHUbhmKXWqmDwFF%2FCdPUSUTQXASb8W3FEef5fkYR2TqFrzTDuZGRwReWAWYA2J%2BifqbR0qnjLyPSlSSy%2FL4N3iitgYPZlVSKdQ9bFfk%2FuAMl6hFWisBDW%2B6WjfD44B8KVRK1h78rRfcRQgcTaEKGfIefhzJU8uR1HZk%2FgoedyQGJ1aOVfC4uKcEmrCkuVabmTHvUGVEdvL4Z3bVqPwTvDJZWXcQ15yLu4nsynVVd9UOsqh99PVe8rXE2MEoE2vQWMgda3c5hCNtCvyHNxjAiTFhdQ7REVO%2FLFNEc9IcnkMCN8Dpenal1xg%2Fy9djXSI9FL0mSgB7HpUcCB6fXeIunIRWV%2FrTg9sYhyqeBdvMewADzVx78R1d5c6alq53oe2zBxuJBYiB7%2Bolk5kRZS9YOX2oQLkej0Dk%2BJ%2BkAIDVLpKtdmYARkRcVJdvzUOWkC7DcwFEgpRA06IEIdksVYOITXo%2F%2BTUMMKane%2F6%2B4iBsJw%2B%2FXojvy%2BGfID74Tiy48PI2C9Y25CfDDMgWtsf6U0NITZGtBXHdVxUBC9lpaoihTFx2WJUGB9FyTiMKuMyMkGOqUB7X7CjhXaPV048xEB3qSNGF9J%2BlB%2FiTqx5AnhyYcmK0plxklDsFLdWtDTAstUFfUJUf2cTgzws6JlRDHKo48lFqqo%2FSA3NDr9mJZgniLNGuLfa8waURvkZgrNloSytp%2Bx3S0im7J%2B1N%2FabpZcKF6YQLALZymp8qxpD%2BMaSUeUBmo%2FqJWSROgr9g0DUp9X0i7dOlLFxXVZUzDm2i2cMZI8ADKJx0GE&X-Amz-Signature=ce35d80b5547f55392dc5029105fdeadb0fa29a5ff1da93d6a0a2a5bf6b3c19d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

