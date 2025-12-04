---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDXDOWKH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T234950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEkzdAzvMImV47IaitnBgwH6%2FMwTKdb28PY5Xqe1e50AIhALRqd0QiCDf6eFp58D3uQry9jR61OrAgODO9AjvKsOtbKv8DCE8QABoMNjM3NDIzMTgzODA1IgwGj%2BWdufqA%2BjjndI8q3ANEG6QKQTK0PwE6V9jZHUbbEbGNnVNpQ9Bev4hVNq5KRbGSYEoid4GpVBFLmj983M1va0uC5ePZr9o6%2B6Qh1cPEiLk5fhKwGSd7YkuxMG1nlwazKnaVVqbco0XMsenz8iSvniN9XBrCsuu%2BjWNBWjmKajT%2Fr7z5ED828fbuTnub6KtGn%2B4bCvGTsh1SZPJYCZBRihzVjxCZnpmU5dSU%2BfZPuQV95s8zID4FyaRfUwHl6cf%2BlZhSeNTth8smTgrMbDhAdOLfx4t1jqRFB1DGL1M6mqmnWjmUfym2Q5piZBE89rox3Pfp9bhD6fUxM7pwDzNq0yLAxYCazX%2F%2Bqo8G6rxAvy7T%2FB4x1fL0vGcoYSVkP2Bijf%2BUpuQZ3tJ%2BMNy6uYFEfxHglfP2c7q3ungMxl4Xy%2Bb%2FWi2%2FoHVRgKi66%2BYNcauhFUaFiJot91Dg1Fqbf4MM%2BQ0iTCi8EWjYejwAOV4%2ButQZg%2FetuVRXtwBZyIXUvU3U9ladhtTV2Z6iCF1yDBRBBvL9F9wtCvQkxR2sIzSN9MIfrhzy6wMAyPMluvRzf0UIaFt9INklDwvWoRYcQp5bQkhqGvQQfQ83l2CLIdWG%2FwBRugQkl28d6KtrF5bm%2B1gGgVxab6fGpaIQVjCijMjJBjqkAbPAzRNU0Xs3sRB3KHV%2Fgh9iEcoHE%2FgrtF%2BG0kt9Yt1ZMvacd4K2YNfRkrVrOF%2FFf3GgdUmybP8MMqPsvVpAwAFNz4mD4aHq3ivD%2BkeJRAkl616DPzYFhJdoBqEd19TqIfDrzVNkcXVDq3JQDoEnIxOpch3YWTv6G373zR2ZrO2Gd5ZmepZJ4sKMVfuzuBjJeceH5Nj4YHDy%2FDKoP31VB3egzz9X&X-Amz-Signature=dba47e41228d9a0c898139aeb3c26fe02f33589a0679773b59eaf86fbe5eb4dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDXDOWKH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T234950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEkzdAzvMImV47IaitnBgwH6%2FMwTKdb28PY5Xqe1e50AIhALRqd0QiCDf6eFp58D3uQry9jR61OrAgODO9AjvKsOtbKv8DCE8QABoMNjM3NDIzMTgzODA1IgwGj%2BWdufqA%2BjjndI8q3ANEG6QKQTK0PwE6V9jZHUbbEbGNnVNpQ9Bev4hVNq5KRbGSYEoid4GpVBFLmj983M1va0uC5ePZr9o6%2B6Qh1cPEiLk5fhKwGSd7YkuxMG1nlwazKnaVVqbco0XMsenz8iSvniN9XBrCsuu%2BjWNBWjmKajT%2Fr7z5ED828fbuTnub6KtGn%2B4bCvGTsh1SZPJYCZBRihzVjxCZnpmU5dSU%2BfZPuQV95s8zID4FyaRfUwHl6cf%2BlZhSeNTth8smTgrMbDhAdOLfx4t1jqRFB1DGL1M6mqmnWjmUfym2Q5piZBE89rox3Pfp9bhD6fUxM7pwDzNq0yLAxYCazX%2F%2Bqo8G6rxAvy7T%2FB4x1fL0vGcoYSVkP2Bijf%2BUpuQZ3tJ%2BMNy6uYFEfxHglfP2c7q3ungMxl4Xy%2Bb%2FWi2%2FoHVRgKi66%2BYNcauhFUaFiJot91Dg1Fqbf4MM%2BQ0iTCi8EWjYejwAOV4%2ButQZg%2FetuVRXtwBZyIXUvU3U9ladhtTV2Z6iCF1yDBRBBvL9F9wtCvQkxR2sIzSN9MIfrhzy6wMAyPMluvRzf0UIaFt9INklDwvWoRYcQp5bQkhqGvQQfQ83l2CLIdWG%2FwBRugQkl28d6KtrF5bm%2B1gGgVxab6fGpaIQVjCijMjJBjqkAbPAzRNU0Xs3sRB3KHV%2Fgh9iEcoHE%2FgrtF%2BG0kt9Yt1ZMvacd4K2YNfRkrVrOF%2FFf3GgdUmybP8MMqPsvVpAwAFNz4mD4aHq3ivD%2BkeJRAkl616DPzYFhJdoBqEd19TqIfDrzVNkcXVDq3JQDoEnIxOpch3YWTv6G373zR2ZrO2Gd5ZmepZJ4sKMVfuzuBjJeceH5Nj4YHDy%2FDKoP31VB3egzz9X&X-Amz-Signature=2194fe6bc617fcdf912e3a78dc9670b2bcfa31118685aa790a06059d27612856&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

