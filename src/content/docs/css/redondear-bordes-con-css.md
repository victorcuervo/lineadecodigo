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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIWU4XZC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T134855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0dYUzuN4jj9wJFDzHcBxot7oL6oQAgA%2FtbjojM7msVQIhAP2AWRFvsM0hgXAPmCic0QVKOJ6PweVO74y3tSpcESYSKv8DCHUQABoMNjM3NDIzMTgzODA1IgxlWq8STtRGcRpYQGwq3AMFrtv0kOEGf3JQsS1b%2F4fxU0KoBzjEcEWQW5l76opJ0AZfmZCXc7Na21PeL3EhVkvak5OU4jUCMbZsKt%2FM%2BWIaqXDsirtIRshsAmOvZ%2FUXV7%2Fd%2FCu6XHUKw%2F8VIzf76b%2FnY1EvnH36D%2FlBFh9K8tymiGPd%2Bw3pLi6ZduvYZ5zkcI%2FGDiMDubx7jb7ZZTq7FwiVr5srMAl%2BUxRbrB5Xzla4NLFowT%2BAirP7wJTTjuAn5tMfbYOpkLO80PljW1%2FWtKHUSvDuOXsjjONywynp671BimTbH40oFPv7LRmlOrcl6c40pI7KePNRA3UoYrCkt8bW%2FRwu1a4p1dNTpnDoPjnxxUSr%2Bn%2FFoXAxCNx7mGVnkF3rzffSgeksCKfnLa5PmfyqqOUVmYEox23FQDEu91c5F2AjGxcMmeXYODfepGzvSDKYJTpiOLlHfFRDfDOEtmLOZdtiteyY8pxeYsk0bnkgTn31qrcikgJNkAp3mj3sNHfEAnPOyBKfFhdJFQnL1SVppa1vL8KjpVUwqxAoSnSXGGTGKFZoOa2YJ827vCxGHGUMOx3T3Lg1FpIhPlZYrYdijxbmrNyadjLXlo%2F%2B%2F0PufL2sOQtGtCI3Isvl4N3av%2FvuPt%2FO3w%2BI23CQ1jCSp9DJBjqkAa7YDZ%2BLEKtSToO8FFoLiSWjQzdtB%2FqYvK%2BkPEPjhvqd16kFrxinOa9RFs2gABJZCJhO8hE1v2FeVUEIVaVYXMax5t0whdJmbKb72v4OzIm4K6swQYrxHwR0QSWs8IcWDAJtJD6OtnvSQnMbQSmWb9J7%2FeUrCcSYxQYda7NPh3v51tW0D5qctn3KQVjn%2B5MFqbs7I9Dppnp4%2BLYI%2FTi6A1ajgPhw&X-Amz-Signature=54f8f232389656f469a9a81deda67f218ec9769ce52ead64d5738dd4d227df2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIWU4XZC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T134855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0dYUzuN4jj9wJFDzHcBxot7oL6oQAgA%2FtbjojM7msVQIhAP2AWRFvsM0hgXAPmCic0QVKOJ6PweVO74y3tSpcESYSKv8DCHUQABoMNjM3NDIzMTgzODA1IgxlWq8STtRGcRpYQGwq3AMFrtv0kOEGf3JQsS1b%2F4fxU0KoBzjEcEWQW5l76opJ0AZfmZCXc7Na21PeL3EhVkvak5OU4jUCMbZsKt%2FM%2BWIaqXDsirtIRshsAmOvZ%2FUXV7%2Fd%2FCu6XHUKw%2F8VIzf76b%2FnY1EvnH36D%2FlBFh9K8tymiGPd%2Bw3pLi6ZduvYZ5zkcI%2FGDiMDubx7jb7ZZTq7FwiVr5srMAl%2BUxRbrB5Xzla4NLFowT%2BAirP7wJTTjuAn5tMfbYOpkLO80PljW1%2FWtKHUSvDuOXsjjONywynp671BimTbH40oFPv7LRmlOrcl6c40pI7KePNRA3UoYrCkt8bW%2FRwu1a4p1dNTpnDoPjnxxUSr%2Bn%2FFoXAxCNx7mGVnkF3rzffSgeksCKfnLa5PmfyqqOUVmYEox23FQDEu91c5F2AjGxcMmeXYODfepGzvSDKYJTpiOLlHfFRDfDOEtmLOZdtiteyY8pxeYsk0bnkgTn31qrcikgJNkAp3mj3sNHfEAnPOyBKfFhdJFQnL1SVppa1vL8KjpVUwqxAoSnSXGGTGKFZoOa2YJ827vCxGHGUMOx3T3Lg1FpIhPlZYrYdijxbmrNyadjLXlo%2F%2B%2F0PufL2sOQtGtCI3Isvl4N3av%2FvuPt%2FO3w%2BI23CQ1jCSp9DJBjqkAa7YDZ%2BLEKtSToO8FFoLiSWjQzdtB%2FqYvK%2BkPEPjhvqd16kFrxinOa9RFs2gABJZCJhO8hE1v2FeVUEIVaVYXMax5t0whdJmbKb72v4OzIm4K6swQYrxHwR0QSWs8IcWDAJtJD6OtnvSQnMbQSmWb9J7%2FeUrCcSYxQYda7NPh3v51tW0D5qctn3KQVjn%2B5MFqbs7I9Dppnp4%2BLYI%2FTi6A1ajgPhw&X-Amz-Signature=1f6da20a35eea90fe5e005ce5705ce658662ff45aad61ff738dfdb9c3fd106bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
