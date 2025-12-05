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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674SEDHVD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T144040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwpesaliNXUUJUtpmy%2FfrP44AnWhXM5upva2gXzbZ4NAIhAJ0QtHwbFX7B%2BQqa2dXzkmj%2B31m6TQXAxo9s8yxCL4l%2FKv8DCFsQABoMNjM3NDIzMTgzODA1Igz4QILUhehzMaS9fnUq3AMnxrSLNVAT9zvOkIDvq67Y2kt92cgrFkQaQXCH%2BJFCg2NGXkSJVEw7lVIGYwSXfqvYP1p%2BmjaZOUuRBlT%2FPnq6igcXRDP7CKHOOw093OuVUai4SS5FEr5r%2BiVrVz88Ym8TEyMdPiEZt0uapP%2BUa1lY%2FTltVfpZ%2FBRzsXP%2BfWkANBNmD4ShsKD4SPMFtTBx7KNAHWYNYpv70XNkVTM5ERdjXYopA6O3jBq5A35mup9PwALdO8lJ69FsbG0iG9AjxZ7%2Btyk4H5K94HHFNSzqQwM%2B8Q8Pl7CkH2GkdbAtFzWDMfsPOpIadMfJEpCOJYa6IQXVAauiOW2KMErvPTPm0fmgCxIRd%2Fhf1Rk3yHDfDIc5wRDTTQYd4aMQjcD8MTbUKnYXeAOdbDu3jKvz6ri4wLbxFkifx0iIkgV2jMJCsLdOOj4NA54YF664C4YBWNOCL7xvcd0zeFl1t5hLdGbgyTAnB4m6Qn4ekW9%2Fc1fXRDf1gF8oepWA9V08EcFbxkfiqVE3bwjf1F72vq7Df1mkC48Ol0RVgcnDN4G4Rexcw6bs2Nzl3XSg9uIz22LzwYZyfqYXQlAgSWRxVQxNqxa6fTz8RFeQiuhLSHEPSDzlXrJn0Ug3UBAcdrd%2BZOFSxjCf0MrJBjqkAf0YQCpLMyslixbtdw3rOwwbP5HeZsB6gS3mVZI0PJNK%2Bh8YLHEwvseN2WXl5eVR%2F9hJ1UlU1%2BW3PQhiVtPoxRpFUsq6H84C6E2KrAuJBwTFRj62RX7k6DiXv37YP%2BPkkN0fvARoM84mnIw9Xx3qnEGR0TRa3vocHWKZrkLxuCRU3DqSeXS0CA3DpR8iJ3TmOScbuV3CSf%2FXu6EqFf16ozz5BAuq&X-Amz-Signature=d1594d8a9b06f974eacdd72e1e2f72dca469b7cc3b7949ff4d15b571c0495de7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674SEDHVD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T144040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwpesaliNXUUJUtpmy%2FfrP44AnWhXM5upva2gXzbZ4NAIhAJ0QtHwbFX7B%2BQqa2dXzkmj%2B31m6TQXAxo9s8yxCL4l%2FKv8DCFsQABoMNjM3NDIzMTgzODA1Igz4QILUhehzMaS9fnUq3AMnxrSLNVAT9zvOkIDvq67Y2kt92cgrFkQaQXCH%2BJFCg2NGXkSJVEw7lVIGYwSXfqvYP1p%2BmjaZOUuRBlT%2FPnq6igcXRDP7CKHOOw093OuVUai4SS5FEr5r%2BiVrVz88Ym8TEyMdPiEZt0uapP%2BUa1lY%2FTltVfpZ%2FBRzsXP%2BfWkANBNmD4ShsKD4SPMFtTBx7KNAHWYNYpv70XNkVTM5ERdjXYopA6O3jBq5A35mup9PwALdO8lJ69FsbG0iG9AjxZ7%2Btyk4H5K94HHFNSzqQwM%2B8Q8Pl7CkH2GkdbAtFzWDMfsPOpIadMfJEpCOJYa6IQXVAauiOW2KMErvPTPm0fmgCxIRd%2Fhf1Rk3yHDfDIc5wRDTTQYd4aMQjcD8MTbUKnYXeAOdbDu3jKvz6ri4wLbxFkifx0iIkgV2jMJCsLdOOj4NA54YF664C4YBWNOCL7xvcd0zeFl1t5hLdGbgyTAnB4m6Qn4ekW9%2Fc1fXRDf1gF8oepWA9V08EcFbxkfiqVE3bwjf1F72vq7Df1mkC48Ol0RVgcnDN4G4Rexcw6bs2Nzl3XSg9uIz22LzwYZyfqYXQlAgSWRxVQxNqxa6fTz8RFeQiuhLSHEPSDzlXrJn0Ug3UBAcdrd%2BZOFSxjCf0MrJBjqkAf0YQCpLMyslixbtdw3rOwwbP5HeZsB6gS3mVZI0PJNK%2Bh8YLHEwvseN2WXl5eVR%2F9hJ1UlU1%2BW3PQhiVtPoxRpFUsq6H84C6E2KrAuJBwTFRj62RX7k6DiXv37YP%2BPkkN0fvARoM84mnIw9Xx3qnEGR0TRa3vocHWKZrkLxuCRU3DqSeXS0CA3DpR8iJ3TmOScbuV3CSf%2FXu6EqFf16ozz5BAuq&X-Amz-Signature=b84109471a5083836289d23596b663336b97d62bf4e7d38994d674ae2be9172c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
