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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MJR2Z5S%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T031642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIDz3EHKOAyFp7tkGku7m8%2Bvrd9AxCB%2Fg7Qx74ffbZpbJAiEAqZ1Mv%2F0Iofk7aD5evEiLgToUWeesdFxTbGtlN4qwiLQq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDAgU0nwlviI693z3NCrcA5yKVSvesed2sgtPgKHhXtS3hMUKDwwiCb0xOZhdFQsPDdtxVBJkEE33zkluPktI8ilamI41w%2FbvZMPYyIdG7QFife%2FZRiQ39TXbBAyPKBdLNf7y%2BWcLRnvLDMi1YT4oygdaeQYyDZcH2g%2Bar69EgiUcMB7QxToXVAg%2FHzRlbXyB5SzXpVjcpGnbdQANP%2FWAvB2NzmAbpiN%2FxVkxjQQggg%2FR2w%2Bc4FNzmK3QiT4Zxy%2FG2dzihKlZ%2BXEew0NNeGmfqVWaYfFY8KlnTNGXA3YXjJ0Ny%2BSP4heJAoqrzSFsFi22L6QPo0eFKGhZgxsOkUgW4Tqs0InUYX8rcpalqDF51VK4Z3kqerTpXjbuOPTQiJoTlTLaMqnoKutSwpz%2FaR2z%2BQHcoG6Zq9YAlS%2BvD%2Bt1I%2BSlRFiLuAHBHkEYOjG0kCu1xB8d10iKq5CdP4LYR4GrX0EqeuLuBSwHBRc7YL7zsqSfiDDAnmXXjZjqSq1oqTD552nR27zVVlS%2BRvfe2cirGm6CqYt5Rs8yYBLyDBSCUnJ11FvXkHNdtOpOcsPC5jjVPU7MFLYkkakbqnOjwGdJ7cEpghlED%2BJzzsQq2TUtLqR2PF1%2Fuf4XZvIpZVPCZyM1ULfveUe1%2BUQSKH0HMJeWvskGOqUBYQMshsXOWknuz3UEhRCJEXZDNa%2FCQiK5V7lG%2B4eHu4oATfEM9OSU3JzmFUP05HiUzOmLtYLW4EGpTzEafe5yfQLSgAmrmz%2Ff%2Fb7Fah1%2BsbaicNCn%2FXtdKIdavzRVmFtny%2F41A0mhg1nTN1wN4hIKRNsp08OWk%2B8nCxssHTkZDRJiHHAfh7fROSVCB8dSVnaJM%2B5vYx37ZNp5EstpWJEDZpo7W0GD&X-Amz-Signature=83db9e1f619f5043ff66918acfd1c9e4b61ab6afe23ede9217223854f829c144&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MJR2Z5S%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T031642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIDz3EHKOAyFp7tkGku7m8%2Bvrd9AxCB%2Fg7Qx74ffbZpbJAiEAqZ1Mv%2F0Iofk7aD5evEiLgToUWeesdFxTbGtlN4qwiLQq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDAgU0nwlviI693z3NCrcA5yKVSvesed2sgtPgKHhXtS3hMUKDwwiCb0xOZhdFQsPDdtxVBJkEE33zkluPktI8ilamI41w%2FbvZMPYyIdG7QFife%2FZRiQ39TXbBAyPKBdLNf7y%2BWcLRnvLDMi1YT4oygdaeQYyDZcH2g%2Bar69EgiUcMB7QxToXVAg%2FHzRlbXyB5SzXpVjcpGnbdQANP%2FWAvB2NzmAbpiN%2FxVkxjQQggg%2FR2w%2Bc4FNzmK3QiT4Zxy%2FG2dzihKlZ%2BXEew0NNeGmfqVWaYfFY8KlnTNGXA3YXjJ0Ny%2BSP4heJAoqrzSFsFi22L6QPo0eFKGhZgxsOkUgW4Tqs0InUYX8rcpalqDF51VK4Z3kqerTpXjbuOPTQiJoTlTLaMqnoKutSwpz%2FaR2z%2BQHcoG6Zq9YAlS%2BvD%2Bt1I%2BSlRFiLuAHBHkEYOjG0kCu1xB8d10iKq5CdP4LYR4GrX0EqeuLuBSwHBRc7YL7zsqSfiDDAnmXXjZjqSq1oqTD552nR27zVVlS%2BRvfe2cirGm6CqYt5Rs8yYBLyDBSCUnJ11FvXkHNdtOpOcsPC5jjVPU7MFLYkkakbqnOjwGdJ7cEpghlED%2BJzzsQq2TUtLqR2PF1%2Fuf4XZvIpZVPCZyM1ULfveUe1%2BUQSKH0HMJeWvskGOqUBYQMshsXOWknuz3UEhRCJEXZDNa%2FCQiK5V7lG%2B4eHu4oATfEM9OSU3JzmFUP05HiUzOmLtYLW4EGpTzEafe5yfQLSgAmrmz%2Ff%2Fb7Fah1%2BsbaicNCn%2FXtdKIdavzRVmFtny%2F41A0mhg1nTN1wN4hIKRNsp08OWk%2B8nCxssHTkZDRJiHHAfh7fROSVCB8dSVnaJM%2B5vYx37ZNp5EstpWJEDZpo7W0GD&X-Amz-Signature=c2eab4490b12c94712f9c2028674cb88aff8ea5943ae8043c2fbd250d462ec5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

