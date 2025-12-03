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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRWPAOGV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T031952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCorfgMF9z1WHHI%2B3zfyjjgqO%2FNMqbKO1%2BiZZauBSdXowIgBgJ71TT0gAzMwQQ8w2nKjV3LB9SwH7LIaKHTWRyyvCIq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDFuau2Wtx3f0d%2BsZzircA7vOWBUmVa7tJUhxCc5ZEUwSDtWgzQSMy3worfho9h7lzVQJp2UctQFMi6ufYPgvuYxYYLJoR%2F2vzLiHxxDLPxuxC49qXlJc6PqUsIyqHnnewPYy1aZjKr%2B9xvPFMBn6Q5DQ5%2BaARolNu75OjXqTaCO27GuVxVkmixkkNwWIGEJ0TRbbdw5zk8EyhUhFodwIKOTYR5dVhP7AY0GaFnjKl3EigYk16h72%2BgvpOUa2aS54vZE9qq0r06rIi1cu2crSUCcDhOxKwAR0j%2FHW5hZeISE8KAAlavMDAsWYLFNG1VN9ilGtYNK4BB4fFzcPrDveCjSGFeYMUkYTixRtx1d2%2BszOW1rDCqLmNFUh%2BNRCviJ9fNTQPxDYz1XX%2FPJksxlIzQBeMlIV8TxH2GW54LdnKF3RLb3Lx5GHTtwBIiLgRtCZMu%2FEci8rSRdvIAVMYmW%2BT2fMs5KBCGxXBBn30cnJLv0n7hrP9nXF2l16wAdcTmjqe9z4EhnNdsME4QiSX0KYmUUhKO7q4R3NOuvinvqtSBVzuCP66zFE9pH0h%2FKC%2F33anPeiJeHznqetIfbVafkbSp%2BelBwax%2FVVzmDDxLYTreShm9rv%2F6az6ZzTlpPYm2%2FabsNeydm0T1UQwY54MKShvskGOqUBosBm3BJTuCGw7fHkegAcYHsrUnoX3IZcn0HiU3pdp99uQih6wkfVwTBB0WJf8Qw4HzzhkkUDeFW27JQe8n0yPLtWjE2pZslI7yM9uq4UkLGqi9tijAiU2RuQdKR2MlbsG8Opap9AH1G3vHuvENbhwfKj1iLdN56gDX%2F3%2F6PdDstXkZxPteHKlgtlPllStFn5R8YLrgMb6jS0aeZM0OP8l6u3P76o&X-Amz-Signature=0d83f8e2bdcbe4f7c6aac42df17ab11c3c958a050e842540689db60e614a60a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRWPAOGV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T031952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCorfgMF9z1WHHI%2B3zfyjjgqO%2FNMqbKO1%2BiZZauBSdXowIgBgJ71TT0gAzMwQQ8w2nKjV3LB9SwH7LIaKHTWRyyvCIq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDFuau2Wtx3f0d%2BsZzircA7vOWBUmVa7tJUhxCc5ZEUwSDtWgzQSMy3worfho9h7lzVQJp2UctQFMi6ufYPgvuYxYYLJoR%2F2vzLiHxxDLPxuxC49qXlJc6PqUsIyqHnnewPYy1aZjKr%2B9xvPFMBn6Q5DQ5%2BaARolNu75OjXqTaCO27GuVxVkmixkkNwWIGEJ0TRbbdw5zk8EyhUhFodwIKOTYR5dVhP7AY0GaFnjKl3EigYk16h72%2BgvpOUa2aS54vZE9qq0r06rIi1cu2crSUCcDhOxKwAR0j%2FHW5hZeISE8KAAlavMDAsWYLFNG1VN9ilGtYNK4BB4fFzcPrDveCjSGFeYMUkYTixRtx1d2%2BszOW1rDCqLmNFUh%2BNRCviJ9fNTQPxDYz1XX%2FPJksxlIzQBeMlIV8TxH2GW54LdnKF3RLb3Lx5GHTtwBIiLgRtCZMu%2FEci8rSRdvIAVMYmW%2BT2fMs5KBCGxXBBn30cnJLv0n7hrP9nXF2l16wAdcTmjqe9z4EhnNdsME4QiSX0KYmUUhKO7q4R3NOuvinvqtSBVzuCP66zFE9pH0h%2FKC%2F33anPeiJeHznqetIfbVafkbSp%2BelBwax%2FVVzmDDxLYTreShm9rv%2F6az6ZzTlpPYm2%2FabsNeydm0T1UQwY54MKShvskGOqUBosBm3BJTuCGw7fHkegAcYHsrUnoX3IZcn0HiU3pdp99uQih6wkfVwTBB0WJf8Qw4HzzhkkUDeFW27JQe8n0yPLtWjE2pZslI7yM9uq4UkLGqi9tijAiU2RuQdKR2MlbsG8Opap9AH1G3vHuvENbhwfKj1iLdN56gDX%2F3%2F6PdDstXkZxPteHKlgtlPllStFn5R8YLrgMb6jS0aeZM0OP8l6u3P76o&X-Amz-Signature=ba733aa6602f94058f5b83b9fa447c6a7f1328a92c5a5cbae7f44f14ed198936&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

