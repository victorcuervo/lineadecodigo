---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVBHL6FH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T045856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6C7p%2FN%2BXGVnYf4gTH0Bq%2BXtfAPewWP4Ud7F4BCcBRqAIhAMCzkiOs25NekYhDKd1JYy7mg7Hk6FbFUxDaaFu1%2BztkKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLzlBs1fUhvvnXrGkq3AOb8EgZzoq%2BdbI9P%2BDVeNRQN%2Bhzlw5NXVbEUz9piTIuHulvrMkXpakhFcLNq9ryF6azP3R%2FTlf32SBfYeDMy9KEmC2i3VGEVqvb8b9s6Hn7%2BLwdGcGWrZcuT5Mq%2BAKF%2FskpCZ5sR8FnQM%2F9m4eKUlSd6PHedLdUCu6jXOoOuqx66Xa5lrmu3cQ22SUuuhr0Occ0w47JsX8MdKaYrWzmvRAOE855s6xlrY9KMDiYpxQEP%2FEPH21ZaJvJW2Zny%2BM7Bvc02tkgzSj4B1bXCw8ZLV0HTFUSQQn0q7nA2978x3t9VpwcFjsnkhpFV%2BFTY3JYh4fY8ISSy3N92FfV7gJOLwbeDiZovbtott1fA1%2BrRnOk566sZXDmWEHtPLiPBkLHYv0JQqLrXaTkKFQwXIciqM3YHH%2BGhFEMVK5TH85LUqcaEjNb%2F5qu7GB7pRh%2FJt5UaheG9EVd2YTjdVqbUauQ1k92uU4kWEYVo%2B2aHdNnN0LZmaCeCor9RHsjkK2SkbR9H05obDSfcJxyxKlKXDfjWR2T10enwXP4d0yncfWWLpggWOcUF1RnQEyBTqUxSytS%2BrjZ8XAzIGeeBM1Zla%2BQxxJ1F2abAnink9VBfeRR8AJxDKrOtvw9raELTsldizC9tNnJBjqkAeoS7Ont%2Bwz5u5Xe5S2v%2FCOamelYwd5L75qYhWo92O5I8diq5S68yNP43vcFYiTCs8QuJrIzsiInsE5GsD0UDoUS9DEEM8zJO%2BgeuY5GKtJuYGnfSLoH83pnbNuzWuVmfGbqJlwHFrKc0b5Zc8NNPRacKUEb3lbA2boPQY3F2HLEfYzceylYTLlVihuCZswCewG%2FGwH1EI3cSjY3naex4xj88jG9&X-Amz-Signature=550cbe2efe73e29fba29cb3f70bb25ddfc46d6b061cba90f8debe477b1491b8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVBHL6FH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T045856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6C7p%2FN%2BXGVnYf4gTH0Bq%2BXtfAPewWP4Ud7F4BCcBRqAIhAMCzkiOs25NekYhDKd1JYy7mg7Hk6FbFUxDaaFu1%2BztkKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLzlBs1fUhvvnXrGkq3AOb8EgZzoq%2BdbI9P%2BDVeNRQN%2Bhzlw5NXVbEUz9piTIuHulvrMkXpakhFcLNq9ryF6azP3R%2FTlf32SBfYeDMy9KEmC2i3VGEVqvb8b9s6Hn7%2BLwdGcGWrZcuT5Mq%2BAKF%2FskpCZ5sR8FnQM%2F9m4eKUlSd6PHedLdUCu6jXOoOuqx66Xa5lrmu3cQ22SUuuhr0Occ0w47JsX8MdKaYrWzmvRAOE855s6xlrY9KMDiYpxQEP%2FEPH21ZaJvJW2Zny%2BM7Bvc02tkgzSj4B1bXCw8ZLV0HTFUSQQn0q7nA2978x3t9VpwcFjsnkhpFV%2BFTY3JYh4fY8ISSy3N92FfV7gJOLwbeDiZovbtott1fA1%2BrRnOk566sZXDmWEHtPLiPBkLHYv0JQqLrXaTkKFQwXIciqM3YHH%2BGhFEMVK5TH85LUqcaEjNb%2F5qu7GB7pRh%2FJt5UaheG9EVd2YTjdVqbUauQ1k92uU4kWEYVo%2B2aHdNnN0LZmaCeCor9RHsjkK2SkbR9H05obDSfcJxyxKlKXDfjWR2T10enwXP4d0yncfWWLpggWOcUF1RnQEyBTqUxSytS%2BrjZ8XAzIGeeBM1Zla%2BQxxJ1F2abAnink9VBfeRR8AJxDKrOtvw9raELTsldizC9tNnJBjqkAeoS7Ont%2Bwz5u5Xe5S2v%2FCOamelYwd5L75qYhWo92O5I8diq5S68yNP43vcFYiTCs8QuJrIzsiInsE5GsD0UDoUS9DEEM8zJO%2BgeuY5GKtJuYGnfSLoH83pnbNuzWuVmfGbqJlwHFrKc0b5Zc8NNPRacKUEb3lbA2boPQY3F2HLEfYzceylYTLlVihuCZswCewG%2FGwH1EI3cSjY3naex4xj88jG9&X-Amz-Signature=e3dab93837689ccac449aeae9054d5d364aa1c2c36501c3a814f57ab05bc4854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

