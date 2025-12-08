---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKSR4TPE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T140140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3HGT3zZZ6ezTctJBeAUKzC6%2BJj9v7ZXOZLuBncpDo9AIhANsPehzupqB%2BLdNbjcTMUPUSiHRzD6qgrgwoGmeSmXZwKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxT5MaV78wsUEWaubsq3AO5CN0ZkyadUFdgy8ecUWraC3FnhH787wXjoz0b4BiVHrkRt3r0vrAIWgnXYnD%2Fd5dk5I7aWcCwp8FO30OlXC45U9NMQ5CF5DTdyMryjvaMxgUgNBLErSa1cFTpL2F%2B1%2BBZ%2BumedFa9pR8mqOOVeu2P9y4W06CgqZwaz47S68Mzgi58np4HxXbApKZlFhxz72%2Bxn%2BwfKBsmk00B%2FDtnsqex%2BSGGQlfLbM6%2FwlBptjEcOoVYzpjOCmzvg5AJfqQBzm0YmQ1tjvh9sCkv99IhJHMZiif7Swg35xPTVzYwlF%2FzkKAIydpKTQqkPSTTMuCUZ7AkNaqKrF6f0t5jBIQ0l6OTnPvwqGYcrj9CHIVMwX%2Fw%2FoJ13gF5%2FmIuUVhSICHPwqdq1JMZJLHnHZxrDRdjVs6Q%2B0fAKXYqFdB%2BYImg4HEX5%2FTHyBEWWxpG2eU%2FfxbMKeiYi5773fx%2F9x4nHe4%2Fv7FdQ1qTF8kIl6Pnq3Mf4Nw4PW5JOa4pYMAvoZF5SPqVLWjClGUweCiNoZr4DBnGUB%2FI0QDWmjr0vVkNnPt54WJj360a1P6Sh663lzHQcz0YO0%2Fy3QKbB2%2F1e2uTA2YL%2Bx6RF49qIJ%2BXM8h%2Fa5R1oJl3PK4Lj0IHQO21dduMfjDTj9vJBjqkAVm%2BeLnV8Mw%2FY7bpxvdwdbqlc0luuxMCu4aGJi0PiC72HR5gRS77oP%2FW71ctDSEmXx2duseK86qLCNpskv8VMFUdoSqOyjpZPaH%2FfqQojGZAhvIfVFG4t2ljzGSy3v82kLe1tdpHDkvwQrc8a1f%2BpqEdV8zx1HicdkgaM1sLpXgLh9IoEHMJ1d%2BeQqoy6Il91w07nnUNzh8CS6lXBiWFR%2BmoDN6m&X-Amz-Signature=668ad90f265e2c63b19ef60f61c85d586de5bd8e881f65233ea05b42f329b2ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKSR4TPE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T140140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3HGT3zZZ6ezTctJBeAUKzC6%2BJj9v7ZXOZLuBncpDo9AIhANsPehzupqB%2BLdNbjcTMUPUSiHRzD6qgrgwoGmeSmXZwKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxT5MaV78wsUEWaubsq3AO5CN0ZkyadUFdgy8ecUWraC3FnhH787wXjoz0b4BiVHrkRt3r0vrAIWgnXYnD%2Fd5dk5I7aWcCwp8FO30OlXC45U9NMQ5CF5DTdyMryjvaMxgUgNBLErSa1cFTpL2F%2B1%2BBZ%2BumedFa9pR8mqOOVeu2P9y4W06CgqZwaz47S68Mzgi58np4HxXbApKZlFhxz72%2Bxn%2BwfKBsmk00B%2FDtnsqex%2BSGGQlfLbM6%2FwlBptjEcOoVYzpjOCmzvg5AJfqQBzm0YmQ1tjvh9sCkv99IhJHMZiif7Swg35xPTVzYwlF%2FzkKAIydpKTQqkPSTTMuCUZ7AkNaqKrF6f0t5jBIQ0l6OTnPvwqGYcrj9CHIVMwX%2Fw%2FoJ13gF5%2FmIuUVhSICHPwqdq1JMZJLHnHZxrDRdjVs6Q%2B0fAKXYqFdB%2BYImg4HEX5%2FTHyBEWWxpG2eU%2FfxbMKeiYi5773fx%2F9x4nHe4%2Fv7FdQ1qTF8kIl6Pnq3Mf4Nw4PW5JOa4pYMAvoZF5SPqVLWjClGUweCiNoZr4DBnGUB%2FI0QDWmjr0vVkNnPt54WJj360a1P6Sh663lzHQcz0YO0%2Fy3QKbB2%2F1e2uTA2YL%2Bx6RF49qIJ%2BXM8h%2Fa5R1oJl3PK4Lj0IHQO21dduMfjDTj9vJBjqkAVm%2BeLnV8Mw%2FY7bpxvdwdbqlc0luuxMCu4aGJi0PiC72HR5gRS77oP%2FW71ctDSEmXx2duseK86qLCNpskv8VMFUdoSqOyjpZPaH%2FfqQojGZAhvIfVFG4t2ljzGSy3v82kLe1tdpHDkvwQrc8a1f%2BpqEdV8zx1HicdkgaM1sLpXgLh9IoEHMJ1d%2BeQqoy6Il91w07nnUNzh8CS6lXBiWFR%2BmoDN6m&X-Amz-Signature=871e8c495576b0ae3bb85f668a62b3c6dfb76d1eabbc13f6860507b19e3c341b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

