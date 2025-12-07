---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYNRZYYT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T182113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEIAkoQCXbhGpxMRXIe5DVA4DGTlosMhjK6h5ZZvRcFQIge%2BSt9JXjq%2B%2BZ8txyGgr3Gq%2BrfPWbt%2F8ugk6455MbE4sqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHX2Xs3u2ZAq7Xjz7yrcA2jJyHyl9sf1vs9sNb4tYYtOaZauc8sTbRRjNUQ%2BQGyA6nRds7clMkYY892oSRYvChDaVWCc8bvIk73LfylQvfPF0cbvgBxQC2RO%2FgfymullsLXlekDPTL%2FEL0xg6Z3KRzbjC9bRgpQfp29lesf6%2Fh%2BnwEsIlpF%2FkpnEpINSoa9ILOyjYxfBiRkQpahG5arKEoa9UOh3UZjIujJX5U2lkfS7vHc%2B7SJmnmTB1fDAWu%2FtWecW9kazyWTq9MDkrmYb0akKYnZ3LdvBQpCu22LuhRhaCrFFXRpblngraBEueVSVRU3HbfB5w82wo5IvqYTV70qYH%2F5C4NYp60AckBvIsAxhHfn2sE21eVYmrLX602WDgZevxXVuidiSLDaUAbf8YO7zSf%2BWS9jB%2FldBV2H51Nyc6etbERPagQKA2RXhiWHt1omYQFu98Nry7ZjhbbHLejwA6hru%2FDCSRGxmzLZQaLJ1hmWeI1cetGGx1K8yw%2FYTyfNay173eFO79Ge1OsKIpbzCZc1i3bXQPWi0lbw%2FfyLxiW0oEki%2BC5dbCRniULHUlOE9%2B%2F33DZbetdxiCo2Qn77XeWj69O1A3EuE%2Bxnyb4yyX17CMxsuRiTo3T9P0zQCkJpxaxnBJpmyutbiMNG81skGOqUBsZf3ZJjDfSLITH4DfI3FTBIzjDsBtf1SiliscKUDhC4ytM8skGbkXR0ohygV5sVPQ58OUaTq9A1u6BlYRFw4fm2LMu%2BAax%2BspHOM3BbeXurT0hqsXSCDoJrXPFDcWmJhHpV93Ra5VsDnWwb6nzpNAcc%2B5TE2ZYoNh19skbye1bI8EgOersCHuQxliR8UveT9uOflCHJgoGJAohXn3DPWdR2iwh1Y&X-Amz-Signature=c9f5bbd34e3756a0285c01cb4fd1edaf33c862c126129bffd123b03646d9a75b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYNRZYYT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T182113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEIAkoQCXbhGpxMRXIe5DVA4DGTlosMhjK6h5ZZvRcFQIge%2BSt9JXjq%2B%2BZ8txyGgr3Gq%2BrfPWbt%2F8ugk6455MbE4sqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHX2Xs3u2ZAq7Xjz7yrcA2jJyHyl9sf1vs9sNb4tYYtOaZauc8sTbRRjNUQ%2BQGyA6nRds7clMkYY892oSRYvChDaVWCc8bvIk73LfylQvfPF0cbvgBxQC2RO%2FgfymullsLXlekDPTL%2FEL0xg6Z3KRzbjC9bRgpQfp29lesf6%2Fh%2BnwEsIlpF%2FkpnEpINSoa9ILOyjYxfBiRkQpahG5arKEoa9UOh3UZjIujJX5U2lkfS7vHc%2B7SJmnmTB1fDAWu%2FtWecW9kazyWTq9MDkrmYb0akKYnZ3LdvBQpCu22LuhRhaCrFFXRpblngraBEueVSVRU3HbfB5w82wo5IvqYTV70qYH%2F5C4NYp60AckBvIsAxhHfn2sE21eVYmrLX602WDgZevxXVuidiSLDaUAbf8YO7zSf%2BWS9jB%2FldBV2H51Nyc6etbERPagQKA2RXhiWHt1omYQFu98Nry7ZjhbbHLejwA6hru%2FDCSRGxmzLZQaLJ1hmWeI1cetGGx1K8yw%2FYTyfNay173eFO79Ge1OsKIpbzCZc1i3bXQPWi0lbw%2FfyLxiW0oEki%2BC5dbCRniULHUlOE9%2B%2F33DZbetdxiCo2Qn77XeWj69O1A3EuE%2Bxnyb4yyX17CMxsuRiTo3T9P0zQCkJpxaxnBJpmyutbiMNG81skGOqUBsZf3ZJjDfSLITH4DfI3FTBIzjDsBtf1SiliscKUDhC4ytM8skGbkXR0ohygV5sVPQ58OUaTq9A1u6BlYRFw4fm2LMu%2BAax%2BspHOM3BbeXurT0hqsXSCDoJrXPFDcWmJhHpV93Ra5VsDnWwb6nzpNAcc%2B5TE2ZYoNh19skbye1bI8EgOersCHuQxliR8UveT9uOflCHJgoGJAohXn3DPWdR2iwh1Y&X-Amz-Signature=3ee2c623f82aa45e0565bfbffbe284b4221da024f21b2e29320746b497233487&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

