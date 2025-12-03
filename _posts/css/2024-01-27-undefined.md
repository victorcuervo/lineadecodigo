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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HK3PTTX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T082619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIAZJGv8uFNe8fswwc6h1Ar49nm%2BYMJduBPyyoyYS2SjKAiAW1vWbp4GvbmaHNhyyUf4xITRRR0K5illcVlNmEOd6oSr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMAYxCvenryGW%2FJifqKtwDigP16OQWVRnYnY3HCwhDx%2F53fmEgbcBBaeZ5YaQqL1TwXr6PfwPe31RICTevSngdB8rbZjm6p9jwhjfcz5yTDApk2c5gJorepgESL286z54QJpdc2tL%2FCTBTH2wIc0Lp%2BxRUs32LBRVljFzfNn6%2Bu04xigEnFABPRzIcWnUzXjymRcqcfIf%2BVUSCHGuuO%2BGgm72WZHAgCp3h0wl%2FM8c9RKmdlL7Hbn9%2FpjXPJVzlANkt6h%2BFKL%2BqkCxnbZ7NO52EXXXg9Lb4tvuKsMkeb4LCT%2BxZuLKU51DTo5qgu%2F%2BiNjRchwKftzne2O0Nc2eJB%2B29WUJ14CA8NiB5p%2FomKJ2hOGq2v9gimzLLGBLeAqFhr6%2BlwqoslJ7U3B9HWqB6bIM3lePXOZ6KE8BOrPssFooaCyeoInjmrN0RilJ1m%2B3QtedFRp7qw2LU432aP6odS7dnhqSqR%2BWMtacZE8ea7f2QPSFtveQQvcU1ZU0m6Ht58v4o1TC%2FZmpPdDZusu5Ns%2F268lA8ExoAmntRN5z6OSfm9i0YKNsoZn57WJ8UT%2Fab%2BnWTY4HLvzY%2FZt%2BvqSM4Uginor3entnkpGwE1pCp2pl0R17tGmrRtmE4ktA8R0EOzd2J7GtIcQ7bB3%2Bjjr4w9dS%2FyQY6pgEBnVljFNSnxbw5eoOUBySyTduAnDL8XJdrotF29j8zxWWpYli7e6fLzkCDZ3fqlddj36TU2cMfSiq8P0nO9beE25hDlmNhW0hI5MHQsSOxtTeMPSF0Pho3tiBCsKBzcdoWaDpd6nGQeIBAcl27jb%2F51qH2cNyvKQUmqKn65I5Ryqw2zOIsK7ZC85OoaYePLW%2BZmxeGvbvvYlJt96uW2i8Kb4bZD%2B86&X-Amz-Signature=df3cab76476492be415d9653cdd52094c769cdb349029763674af7c87abf250b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HK3PTTX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T082619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIAZJGv8uFNe8fswwc6h1Ar49nm%2BYMJduBPyyoyYS2SjKAiAW1vWbp4GvbmaHNhyyUf4xITRRR0K5illcVlNmEOd6oSr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMAYxCvenryGW%2FJifqKtwDigP16OQWVRnYnY3HCwhDx%2F53fmEgbcBBaeZ5YaQqL1TwXr6PfwPe31RICTevSngdB8rbZjm6p9jwhjfcz5yTDApk2c5gJorepgESL286z54QJpdc2tL%2FCTBTH2wIc0Lp%2BxRUs32LBRVljFzfNn6%2Bu04xigEnFABPRzIcWnUzXjymRcqcfIf%2BVUSCHGuuO%2BGgm72WZHAgCp3h0wl%2FM8c9RKmdlL7Hbn9%2FpjXPJVzlANkt6h%2BFKL%2BqkCxnbZ7NO52EXXXg9Lb4tvuKsMkeb4LCT%2BxZuLKU51DTo5qgu%2F%2BiNjRchwKftzne2O0Nc2eJB%2B29WUJ14CA8NiB5p%2FomKJ2hOGq2v9gimzLLGBLeAqFhr6%2BlwqoslJ7U3B9HWqB6bIM3lePXOZ6KE8BOrPssFooaCyeoInjmrN0RilJ1m%2B3QtedFRp7qw2LU432aP6odS7dnhqSqR%2BWMtacZE8ea7f2QPSFtveQQvcU1ZU0m6Ht58v4o1TC%2FZmpPdDZusu5Ns%2F268lA8ExoAmntRN5z6OSfm9i0YKNsoZn57WJ8UT%2Fab%2BnWTY4HLvzY%2FZt%2BvqSM4Uginor3entnkpGwE1pCp2pl0R17tGmrRtmE4ktA8R0EOzd2J7GtIcQ7bB3%2Bjjr4w9dS%2FyQY6pgEBnVljFNSnxbw5eoOUBySyTduAnDL8XJdrotF29j8zxWWpYli7e6fLzkCDZ3fqlddj36TU2cMfSiq8P0nO9beE25hDlmNhW0hI5MHQsSOxtTeMPSF0Pho3tiBCsKBzcdoWaDpd6nGQeIBAcl27jb%2F51qH2cNyvKQUmqKn65I5Ryqw2zOIsK7ZC85OoaYePLW%2BZmxeGvbvvYlJt96uW2i8Kb4bZD%2B86&X-Amz-Signature=f25c7fd47c034222e2f2e225f33ef1889e2aaed3d65c9fe214a3c8979e8002ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

