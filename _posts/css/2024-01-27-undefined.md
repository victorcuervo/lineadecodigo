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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQEP5EXT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T114729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCW%2FSABhrtnu85HZaWSWEs5o1MRfRxIPQlPY%2B20bdjGIAIhANfEO4ffs7Paq9W69o3SgkiF%2FvHJ%2F%2FsEbb2FgmvI93%2BaKv8DCCwQABoMNjM3NDIzMTgzODA1IgyqVIIcZYz0%2Bb%2BfFh8q3AMjIF4xdoDNczPVfFnKTa%2ByR%2BjWhCa8e2j6fyXhNWlCdL7jTjfx%2BEUREeT6Fg87g%2B6H8eMJxmKrjiPLOv9hvqelzE1fkD4W6b6TOpm1HDjh%2F6zp7f6L4EfdO%2Fn7c2YVmPyM%2F6hLPuYH0nzQ4hHtLSBQM8JMBqMhBElbCIcLrjx%2BBO75QkXsPsz8cFOtMvZGYcxNzzgH30Xkjb4y9CMt%2BhXG7Psarh1qGG%2FkqJyDLbyA91y0Tyrf1h2G12ZepW55RG78GPWEPw%2BM9fNWzd%2B15bkEs77dXUvu2iTwViLEONzoyzafk5IshkO89GN7KJmB4Q%2BmcCzsRVAyQcREvdjciqA7qALF5io%2BmbfdT9IQx6uXsuKTFGRnjVXq%2FuDr8zZauEl1BTc4CY%2FWHmn0vCyLsRu3jSmwTNLGSebwMHamUG7Rw0y21tX7Ygv1B52lZVevFxx0YNcwANb5eweM3hUD7tcbMFB76YsWu69uRii6IHAP%2FBJDXItJVY8HgTxlQI%2BEE9GGNI74j87P98hqmNB4LUn3idrx%2FWyD07%2FGa5oLZWgHbslTqnXiHfWJGyHoTcdw4u%2BDeM9P1d%2FeIjRqL%2ByrIVO1nBWeiueMxMwCfhjPkE%2BdV2XVH8rUqvaNKNr1qzCbr8DJBjqkATrjkFWXFqkfbWOOtOqD50BcQY%2FQ4Ez%2BlnwTD9iWfDJu0JC55KKR1Dh436CMvjIMSpYky%2FvMzzS4xkTQcP3qK5ubvel6LqnoitGsDQ7aVFHYGGOVSVByymMrEc3DdKiYnNZ6taqeutEjFyvyspHL5FrXTR2yD1eXsv4uO9v%2F%2BOjs0rFDQ9O%2FzAsVJgnTTu1ffqnrZU5Ebueftta442Qyz5ET58zx&X-Amz-Signature=7696476206de5754c2364455765cd70f330870d3bf8377fc94e861df569dc598&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQEP5EXT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T114729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCW%2FSABhrtnu85HZaWSWEs5o1MRfRxIPQlPY%2B20bdjGIAIhANfEO4ffs7Paq9W69o3SgkiF%2FvHJ%2F%2FsEbb2FgmvI93%2BaKv8DCCwQABoMNjM3NDIzMTgzODA1IgyqVIIcZYz0%2Bb%2BfFh8q3AMjIF4xdoDNczPVfFnKTa%2ByR%2BjWhCa8e2j6fyXhNWlCdL7jTjfx%2BEUREeT6Fg87g%2B6H8eMJxmKrjiPLOv9hvqelzE1fkD4W6b6TOpm1HDjh%2F6zp7f6L4EfdO%2Fn7c2YVmPyM%2F6hLPuYH0nzQ4hHtLSBQM8JMBqMhBElbCIcLrjx%2BBO75QkXsPsz8cFOtMvZGYcxNzzgH30Xkjb4y9CMt%2BhXG7Psarh1qGG%2FkqJyDLbyA91y0Tyrf1h2G12ZepW55RG78GPWEPw%2BM9fNWzd%2B15bkEs77dXUvu2iTwViLEONzoyzafk5IshkO89GN7KJmB4Q%2BmcCzsRVAyQcREvdjciqA7qALF5io%2BmbfdT9IQx6uXsuKTFGRnjVXq%2FuDr8zZauEl1BTc4CY%2FWHmn0vCyLsRu3jSmwTNLGSebwMHamUG7Rw0y21tX7Ygv1B52lZVevFxx0YNcwANb5eweM3hUD7tcbMFB76YsWu69uRii6IHAP%2FBJDXItJVY8HgTxlQI%2BEE9GGNI74j87P98hqmNB4LUn3idrx%2FWyD07%2FGa5oLZWgHbslTqnXiHfWJGyHoTcdw4u%2BDeM9P1d%2FeIjRqL%2ByrIVO1nBWeiueMxMwCfhjPkE%2BdV2XVH8rUqvaNKNr1qzCbr8DJBjqkATrjkFWXFqkfbWOOtOqD50BcQY%2FQ4Ez%2BlnwTD9iWfDJu0JC55KKR1Dh436CMvjIMSpYky%2FvMzzS4xkTQcP3qK5ubvel6LqnoitGsDQ7aVFHYGGOVSVByymMrEc3DdKiYnNZ6taqeutEjFyvyspHL5FrXTR2yD1eXsv4uO9v%2F%2BOjs0rFDQ9O%2FzAsVJgnTTu1ffqnrZU5Ebueftta442Qyz5ET58zx&X-Amz-Signature=db4259790ff42c6008dac319a6028ddab8caf7609727ad9cc80b3dc2e7696788&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

