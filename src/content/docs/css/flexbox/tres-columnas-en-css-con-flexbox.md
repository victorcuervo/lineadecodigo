---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I5NFTPE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T145647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BgHYTMLxkHjP352U6LI5Phuo%2F10C9ES3SCshslxUKRQIhAL459X4jHEnW9wLZFR6cv6olT7G9k%2F40SOOFoZY88gkWKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqoNgMxlwghiP27Soq3ANgQGq7Gjr6yZOUPW9zPVKzATrsZuI67HCUIUcQ7Cn6wxlnRWHZcH7DKUe24QpBZ2rJjQzti%2BMFH1bG1pELwXJZOmA%2BpGroxrpB7nxWLVLYi6Ar8tquEl%2FnHZlPL5YJ1HaN6oru%2FUKXlsdlGDrY12qM8wWvM3h2SzRNjb0HBp%2BlimoS5QkMvAOPzuCNrbc6oADHfCsrGzzHbXpH%2BWxkZsJclU%2BGupuo3CsRp0fUnCejEPwmiAQbGQSv6quZDgoR%2B0a6tRtLSc4R01tZJWkyI79xtabWn4x5tSEulY0F84hCyXJZTUrZHzR3OkhzEOXycdu96ZMY7CIDuDgGxBDnZEirFOzV84FzYxn9P8vHtIGHQcRsukr93wnLx089NYrwtRW347zaEcSCzR%2BA9XIOkELvpWvit5z%2B5PGVShP14CGCFREygqBb5hh4M%2F9pMuvVQoLEgC6%2FXcky1IJafIkoj4sQItT%2FScJCC7mYUQ9mYDXmBszpu%2BmgWcEA5XHkIEIz0pCwcwZKPn6ouwW4Ltb%2FAt2YmjIAOFqv4fbsTrmA1jp0Pcp8S49QGZU7C67LwImJwb%2Fc9om2dDTRAXOBgPeLXjkJ1NFNC2%2FGPSyykrc8lbWXrKSkZezamXNt%2F2cpCTCXwtvJBjqkAep8WU731vMgDmupNrVBYmO0pO2SoET4sP9tcz%2B5Z7NWu9BNjs62UnbyhaSItvr%2FbhWq61hl5gKk1evs229ZhVZFULFmV1THqMAWBfMQCmCyuWrALaAIvIhNTi2JFqnpM%2Ff5S3V5QSMv%2F1g8qEmwD4tb1cl7pOhZWxS01shTbE6qBouTSYXk546T9ryYm9YTvizkpCJ8%2BjhUbNocS0spFtE81c07&X-Amz-Signature=171288c6664f545ffd34f7ec0b696278dd72f8f0dfcbba0a48f84f5eb28cf563&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I5NFTPE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T145647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BgHYTMLxkHjP352U6LI5Phuo%2F10C9ES3SCshslxUKRQIhAL459X4jHEnW9wLZFR6cv6olT7G9k%2F40SOOFoZY88gkWKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqoNgMxlwghiP27Soq3ANgQGq7Gjr6yZOUPW9zPVKzATrsZuI67HCUIUcQ7Cn6wxlnRWHZcH7DKUe24QpBZ2rJjQzti%2BMFH1bG1pELwXJZOmA%2BpGroxrpB7nxWLVLYi6Ar8tquEl%2FnHZlPL5YJ1HaN6oru%2FUKXlsdlGDrY12qM8wWvM3h2SzRNjb0HBp%2BlimoS5QkMvAOPzuCNrbc6oADHfCsrGzzHbXpH%2BWxkZsJclU%2BGupuo3CsRp0fUnCejEPwmiAQbGQSv6quZDgoR%2B0a6tRtLSc4R01tZJWkyI79xtabWn4x5tSEulY0F84hCyXJZTUrZHzR3OkhzEOXycdu96ZMY7CIDuDgGxBDnZEirFOzV84FzYxn9P8vHtIGHQcRsukr93wnLx089NYrwtRW347zaEcSCzR%2BA9XIOkELvpWvit5z%2B5PGVShP14CGCFREygqBb5hh4M%2F9pMuvVQoLEgC6%2FXcky1IJafIkoj4sQItT%2FScJCC7mYUQ9mYDXmBszpu%2BmgWcEA5XHkIEIz0pCwcwZKPn6ouwW4Ltb%2FAt2YmjIAOFqv4fbsTrmA1jp0Pcp8S49QGZU7C67LwImJwb%2Fc9om2dDTRAXOBgPeLXjkJ1NFNC2%2FGPSyykrc8lbWXrKSkZezamXNt%2F2cpCTCXwtvJBjqkAep8WU731vMgDmupNrVBYmO0pO2SoET4sP9tcz%2B5Z7NWu9BNjs62UnbyhaSItvr%2FbhWq61hl5gKk1evs229ZhVZFULFmV1THqMAWBfMQCmCyuWrALaAIvIhNTi2JFqnpM%2Ff5S3V5QSMv%2F1g8qEmwD4tb1cl7pOhZWxS01shTbE6qBouTSYXk546T9ryYm9YTvizkpCJ8%2BjhUbNocS0spFtE81c07&X-Amz-Signature=0c8cdab6f1a95d1c17b0290ebbb864169a539a47c33fae3d873350a513f43000&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

