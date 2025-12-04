---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YSO7U6M%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCvuqWXe8yls4Ze5%2BjCH6ksRLCBAiY82hinzTFNhIlpygIgMTwHL1fpAydaQMoFVmmGv5Q614kKUnCov%2F6kURPmBUsq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDOnmfcSRAD%2F33trxNircA4NbOFc1RBh2QG%2BJ9VCT6y8l2xQfMClm04QYH4DFHLc0KfYlIlD%2FriQ9NBDJkwBYYuzDefTJIIvGwwMzzyloRHqxHQmJp8nGvEIxPeWRhktMIZKME00LH5pOzTt3GGqublDFFgIwQQ1gTelYNY5VEmS5qV7f8%2F6%2FdFD%2BLrK75j64qAnYGiBHTolEgvmPbk20jYtvBkyEPiy%2BdZJlnUQ0J%2F9VCZSOAVDLPEwRP9GS48sBTtedJJSAqf56i%2BO87QfFoVQzX%2Bci6M5UoScKELLXd6xO0h18y1opCGY7ovRSiPZV5f03xm%2BGxWlFN9nV47ZCHUpUjkbts1UFjVM3i0upVlvzZQAxXbuQqcn4ziY9p9VX9tHlVAQ5lWIijgP8lbnTubFipiBqH%2BF6JfyN0OIThgV2I5QuoKmQKXJkXd4SiZ4dtp1MxvMSbywwwpWCGVZkpWZvpUdQCpq%2BPL22nhlNuH7HjgcdFJzFIb6ij%2FNoEJlvlUTDsAsQc96pzkGFb4I6gXGRYHdCVCtqUjm1rvLXfI5B%2B8R0E4quS2ANOGJLH71LOPQFimTwpJQ9aDI%2FWCDLkeeMeevUY%2FB8q5Xgtkbw6IMq6%2BWDwSMW%2FZZK%2FzzpmX0zkQF0KMYpfq4z%2FQbLMLWuxMkGOqUBFqE0DBuClQY5hgqRV38KsH3%2BtXWvlgXB1deMqoGShayELcz7bpyU7CSLK7hFKkhq651FTM8vK6YXzVp66ydh2cGSFADXHTh3kIsfGPo7ySppgL5uUa3x1Ts0yTMypw0GpDaXHtA0hl6VCvJ5deIwxz1Qe%2FIIEk5uYHE%2BgOJ0am5zq5K5OcM9LUgZv5ERTnIHfDz35hxGJYar1uDgn1Iw%2BrG0CeBL&X-Amz-Signature=90e5a7a1b712b41a26488f8851d8e58a01032f181df85932ffda53956e70b1d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YSO7U6M%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCvuqWXe8yls4Ze5%2BjCH6ksRLCBAiY82hinzTFNhIlpygIgMTwHL1fpAydaQMoFVmmGv5Q614kKUnCov%2F6kURPmBUsq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDOnmfcSRAD%2F33trxNircA4NbOFc1RBh2QG%2BJ9VCT6y8l2xQfMClm04QYH4DFHLc0KfYlIlD%2FriQ9NBDJkwBYYuzDefTJIIvGwwMzzyloRHqxHQmJp8nGvEIxPeWRhktMIZKME00LH5pOzTt3GGqublDFFgIwQQ1gTelYNY5VEmS5qV7f8%2F6%2FdFD%2BLrK75j64qAnYGiBHTolEgvmPbk20jYtvBkyEPiy%2BdZJlnUQ0J%2F9VCZSOAVDLPEwRP9GS48sBTtedJJSAqf56i%2BO87QfFoVQzX%2Bci6M5UoScKELLXd6xO0h18y1opCGY7ovRSiPZV5f03xm%2BGxWlFN9nV47ZCHUpUjkbts1UFjVM3i0upVlvzZQAxXbuQqcn4ziY9p9VX9tHlVAQ5lWIijgP8lbnTubFipiBqH%2BF6JfyN0OIThgV2I5QuoKmQKXJkXd4SiZ4dtp1MxvMSbywwwpWCGVZkpWZvpUdQCpq%2BPL22nhlNuH7HjgcdFJzFIb6ij%2FNoEJlvlUTDsAsQc96pzkGFb4I6gXGRYHdCVCtqUjm1rvLXfI5B%2B8R0E4quS2ANOGJLH71LOPQFimTwpJQ9aDI%2FWCDLkeeMeevUY%2FB8q5Xgtkbw6IMq6%2BWDwSMW%2FZZK%2FzzpmX0zkQF0KMYpfq4z%2FQbLMLWuxMkGOqUBFqE0DBuClQY5hgqRV38KsH3%2BtXWvlgXB1deMqoGShayELcz7bpyU7CSLK7hFKkhq651FTM8vK6YXzVp66ydh2cGSFADXHTh3kIsfGPo7ySppgL5uUa3x1Ts0yTMypw0GpDaXHtA0hl6VCvJ5deIwxz1Qe%2FIIEk5uYHE%2BgOJ0am5zq5K5OcM9LUgZv5ERTnIHfDz35hxGJYar1uDgn1Iw%2BrG0CeBL&X-Amz-Signature=97b4843ce9543858cf6dd1c606af12b19e9178743a06e7b23face7b0068cd8fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

