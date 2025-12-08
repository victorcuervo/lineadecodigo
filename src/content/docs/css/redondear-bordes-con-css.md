---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
slug: /css/redondear-bordes-con-css/
author: victor_cuervo
---

Gracias a [CSS3](https://www.manualweb.net/css/) podemos redondear los bordes de los elementos. Y es que para redondear bordes con [CSS3](https://www.manualweb.net/css/) utilizaremos la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/).


La sintaxis general de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) es la siguiente:


```css
border-radius: [tamaño|porcentaje];
```


De esta forma podemos indicar **el tamaño o porcentaje** en el que se redondeará cada una de las esquinas de la capa. El valor corresponde con el radio de la circunferencia trazada en la esquina.


Así, si utilizamos:


```css
border-radius: 15px;
```


Veremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRPGH3L3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzL3rbCTIHU9MTbR35ivOTbjcqn5HGKD5hr6xIz6Yf1gIhAM0hTnYmFHwCEiHw7oqI03aZhyC1LMM3LO2xe%2BJvnrnGKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylRaYR2quPQ7RRLPcq3AO0Q3%2FS8jzMN9HgwwKYL4KUE13iA9GWIx7znESy5luvDkAKeam89mYoR7sT2vafpULVF0yUgzUg9%2FzIY5o%2Bo4RGr4bN3MmXpA7jyAJICeZIorrDjNrBUMFkNbXjmwWPyE0lYZTeuvo16dIArAuXh8OQj0DorXYOY21%2BYPO%2BWymPgxHHYqngkEbvRILmN7ZCSfMI%2FN8cBiPZiFZHjyW9HFTAzyxwCFUrfGwO%2B6qtPPANRJCykeUva81rhKVtC790foQysp2mbNazVA2ot0zAjxzrZ3DDS1IevA5abd%2FUKQkmp54aVCSB0aRtCAGPEpnAalLMXr%2BMLk4uZErm206WPyq4xma46K9l2x1inQl3giZY3Z7mrgrYtKfgKG0ZjRreKIDNgWfdIWW%2BkbEpUQUntkHWuYR3E8yLRzfa4Hulrlq5vcbfbGhy0F7%2B3hyXfCMNoAgYx%2BcmCc9D9B%2BjvLK6pmQCs88OGz9hIPR9bt7OWgv80YQJe%2BjSuuLjZVk%2BFUWV3NWu1vPBJ82S6r5WP%2BS8RrtFCI9VtO09vC3vqpiAz36yu99TL2JFtpiNwxCcoVpVgWeDWeyeE%2FTBzaUxj4k9mbx2O%2FRMIA%2BAqoT0B98CidoCAC0zAxQd7ES5SCEeqjD6lNnJBjqkAVtVTPxNbnY%2FxVLZX6JvopS2Na1JuKlnj9pRgSyKa7TG0MxeqB%2FU4Tj6GlWsfASubs1Uf1uzpOQ72a8bm6SurWeGpky70aF4AhsvUxbUXnCLsBt0n9kNiBhwMm0y9IIYjUv%2FIhVPt%2Fr8bpbuHmNGtG%2BYdvU35AHcQoEZ0a6bckLiIk0hI%2F7K%2FUdtJ5N1MfteHotiKJGXwMhGv5VGSbuwyvNgMnf%2F&X-Amz-Signature=28ff70d1dfbaec169ee7dae10a33708dbc48c06faeda1cb7d72e70f6a7db85f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Podemos especificar un radio para cada una de las esquinas. En este caso se aplicará el orden de las agujas del reloj, empezado por la esquina superior izquierda, siguiendo por la esquina superior derecha, esquina inferior derecha y esquina inferior izquierda.


```css
border-radius: 5px 30px 45px 60px;
```


Si bien tenemos la capacidad de indicar el tamaño de cada de las esquinas por separado mediante las propiedades: border-top-left-radius, border-bottom-left-radius, border-top-right-radius y border-bottom-right-radius.


```css
border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Cuando identificamos los radios de las esquinas por separado podemos indicar de forma diferente los dos radios que conforman la esquina. Por ejemplo, podríamos modificar la esquina superior izquierda de la siguiente forma:


```css
border-top-left-radius: 400px 200px;
```


Y obtendremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRPGH3L3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzL3rbCTIHU9MTbR35ivOTbjcqn5HGKD5hr6xIz6Yf1gIhAM0hTnYmFHwCEiHw7oqI03aZhyC1LMM3LO2xe%2BJvnrnGKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylRaYR2quPQ7RRLPcq3AO0Q3%2FS8jzMN9HgwwKYL4KUE13iA9GWIx7znESy5luvDkAKeam89mYoR7sT2vafpULVF0yUgzUg9%2FzIY5o%2Bo4RGr4bN3MmXpA7jyAJICeZIorrDjNrBUMFkNbXjmwWPyE0lYZTeuvo16dIArAuXh8OQj0DorXYOY21%2BYPO%2BWymPgxHHYqngkEbvRILmN7ZCSfMI%2FN8cBiPZiFZHjyW9HFTAzyxwCFUrfGwO%2B6qtPPANRJCykeUva81rhKVtC790foQysp2mbNazVA2ot0zAjxzrZ3DDS1IevA5abd%2FUKQkmp54aVCSB0aRtCAGPEpnAalLMXr%2BMLk4uZErm206WPyq4xma46K9l2x1inQl3giZY3Z7mrgrYtKfgKG0ZjRreKIDNgWfdIWW%2BkbEpUQUntkHWuYR3E8yLRzfa4Hulrlq5vcbfbGhy0F7%2B3hyXfCMNoAgYx%2BcmCc9D9B%2BjvLK6pmQCs88OGz9hIPR9bt7OWgv80YQJe%2BjSuuLjZVk%2BFUWV3NWu1vPBJ82S6r5WP%2BS8RrtFCI9VtO09vC3vqpiAz36yu99TL2JFtpiNwxCcoVpVgWeDWeyeE%2FTBzaUxj4k9mbx2O%2FRMIA%2BAqoT0B98CidoCAC0zAxQd7ES5SCEeqjD6lNnJBjqkAVtVTPxNbnY%2FxVLZX6JvopS2Na1JuKlnj9pRgSyKa7TG0MxeqB%2FU4Tj6GlWsfASubs1Uf1uzpOQ72a8bm6SurWeGpky70aF4AhsvUxbUXnCLsBt0n9kNiBhwMm0y9IIYjUv%2FIhVPt%2Fr8bpbuHmNGtG%2BYdvU35AHcQoEZ0a6bckLiIk0hI%2F7K%2FUdtJ5N1MfteHotiKJGXwMhGv5VGSbuwyvNgMnf%2F&X-Amz-Signature=cd6383e8f57c4c74c138c07c77bea2f9d6e4fc6beb03d3dbf58d7fb14aaedec1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```text
border-radius: [tamaño|porcentaje] {1,4} [tamaño|porcentaje] {1,4};
```


Por último tenemos que ser conscientes del soporte de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) de [CSS3](https://www.manualweb.net/css/). Ya que no todos los navegadores van a poder ejecutarla. En esos casos, los bordes que hayamos redondeado no se verán.


La implementación de [`border-radius`](https://w3api.com/CSS/border-radius/) que hemos visto es la de la [W3C](https://w3.org/). Hay implementaciones propietarias en los motores de renderizado de los browsers. Este es el caso de [Mozilla Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/). Dónde las propiedades para redondear los borders con [CSS](https://www.manualweb.net/css/) están especificadas como:


```css
-moz-border-radius: [tamaño|porcentaje];
-moz-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


En el caso de Webkit (sería, por ejemplo, para versiones antiguas de [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/)) se soportaba mediante el prefijo `-webkit`:


```text
-webkit-border-radius: [tamaño|porcentaje];
-webkit-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Por lo cual, si queremos buscar compatibilidad con nuestros ejemplos anteriores podemos poner lo siguiente:


```css
border-radius: 15px;
-moz-border-radius: 15px;
-webkit-border-radius: 15px;
```


```css
border-radius: 5px 30px 45px 60px;
-moz-border-radius: 5px 30px 45px 60px;
-webkit-border-radius: 15px;
```


```css
border-top-left-radius: 400px 200px;
-moz-border-top-left-radius: 400px 200px;
-webkit-border-radius: 15px;
```


Los navegadores a partir de los cuales se empezó a dar soporte a [`border-radius`](https://w3api.com/CSS/border-radius/) son:

- [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 0.2 (con -webkit) y [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 4.0 (con el estándar)
- [Opera](https://ayudaenlaweb.com/navegadores/que-es-opera/) 10.5
- [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 3.0 (con -webkit) y [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 5.0 (con el estándar)
- [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 1.0 (con -moz) y [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 4.0 (con el estándar)
- [Internet Explorer](https://ayudaenlaweb.com/navegadores/que-es-internet-explorer/) 9
