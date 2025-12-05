---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6NB6QDI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T155903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvwdbqNzT969C%2Br%2BjCgEoy1aY%2BfP0iR1jrpphbbgbf%2BQIgPMlGwccZGRjDpp6hHl9nVSofar7blPIsfNbgiamyk%2F0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDCm0D5ZMYwTVbhz84CrcA9lt45bhFoQZ3wrgwpX5yYWvA2z3pO7qUEB3WuFhOfe4251soGWhJzFdN%2BnhBwN0vLU1UBhyeYYBDa%2B2kNp9pL0ppdNS1s1XOOmsusSZixelhBaSeggRQWYqnCfQNo6H1cTdl527%2FIU84kV9PoalMT2%2BYKCqHgRknSguM5CNlTkJRcmeHxEtOAIxf5YX1UeFIdm4XlIf6fyrUBktXqEvxcun2z0gCCSeiGRHD7hgHSpRto5byHQVeOOPauyhTOhVHT3ZmwEkvo%2FISdeZ5XzpQAmAXSKjAnX4rVnVuxqF0R%2F%2FCL9ALKredzBA9fp9XAVCIOOLRar%2Bku8nOg2KNoD%2FjnPXD5Bs6xXZ5183M0ABl3lRIKMnwQHSRBHxETMJNomYJqy7H%2F7KQp1AWXWQWGM5PFmlKz2hZDDf69FbDucl26goVixtUnZaw83cHUXG9tS%2FeGgrMYRM8Rn4DmPJJtURvgQn%2FebNfAMB3JRvz67h%2FWgoVROl%2Br1LIgT1y7masBTLgj822fvLbiAzsSZoYyKBoO6INNCB1ow%2B4beuaIKX2kNBCtqu2nnrqVhIteUW5Q0DyKc4neGMl%2FqQYHD9Sj0SpkCwRJ0L1K9A6nmzwdchDz6G7CCedkSI221q40hZMPb0y8kGOqUBiEZ9kghDMputi4gdiAlVRPqhAPAliwUBtqLjx4K7i0nN2RLi%2FdjS%2B9ReOF%2B2AOobnqlaJRrMlS0maCWQshep5b%2Bx0UOB8AqKpSbBKU1kc48pl2R4BOokaPwKcE3xPqxJAHWefQ4hEDS%2ByTEE2IZuVDo%2BY3yFZaCLmj5VijjDRlFB6ovZxvVXdIY45HRpsc4O7ftPwjRq6sII0TiADJMLitA%2FYfqS&X-Amz-Signature=8d773caee08512d3a18c80de7e98e07db43dcedd93e9c03b77caf4e694e59074&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6NB6QDI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T155903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvwdbqNzT969C%2Br%2BjCgEoy1aY%2BfP0iR1jrpphbbgbf%2BQIgPMlGwccZGRjDpp6hHl9nVSofar7blPIsfNbgiamyk%2F0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDCm0D5ZMYwTVbhz84CrcA9lt45bhFoQZ3wrgwpX5yYWvA2z3pO7qUEB3WuFhOfe4251soGWhJzFdN%2BnhBwN0vLU1UBhyeYYBDa%2B2kNp9pL0ppdNS1s1XOOmsusSZixelhBaSeggRQWYqnCfQNo6H1cTdl527%2FIU84kV9PoalMT2%2BYKCqHgRknSguM5CNlTkJRcmeHxEtOAIxf5YX1UeFIdm4XlIf6fyrUBktXqEvxcun2z0gCCSeiGRHD7hgHSpRto5byHQVeOOPauyhTOhVHT3ZmwEkvo%2FISdeZ5XzpQAmAXSKjAnX4rVnVuxqF0R%2F%2FCL9ALKredzBA9fp9XAVCIOOLRar%2Bku8nOg2KNoD%2FjnPXD5Bs6xXZ5183M0ABl3lRIKMnwQHSRBHxETMJNomYJqy7H%2F7KQp1AWXWQWGM5PFmlKz2hZDDf69FbDucl26goVixtUnZaw83cHUXG9tS%2FeGgrMYRM8Rn4DmPJJtURvgQn%2FebNfAMB3JRvz67h%2FWgoVROl%2Br1LIgT1y7masBTLgj822fvLbiAzsSZoYyKBoO6INNCB1ow%2B4beuaIKX2kNBCtqu2nnrqVhIteUW5Q0DyKc4neGMl%2FqQYHD9Sj0SpkCwRJ0L1K9A6nmzwdchDz6G7CCedkSI221q40hZMPb0y8kGOqUBiEZ9kghDMputi4gdiAlVRPqhAPAliwUBtqLjx4K7i0nN2RLi%2FdjS%2B9ReOF%2B2AOobnqlaJRrMlS0maCWQshep5b%2Bx0UOB8AqKpSbBKU1kc48pl2R4BOokaPwKcE3xPqxJAHWefQ4hEDS%2ByTEE2IZuVDo%2BY3yFZaCLmj5VijjDRlFB6ovZxvVXdIY45HRpsc4O7ftPwjRq6sII0TiADJMLitA%2FYfqS&X-Amz-Signature=cd3f81bc353b63a54c22e38808871afb74571048367081c6b32cf118fc17ec75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

