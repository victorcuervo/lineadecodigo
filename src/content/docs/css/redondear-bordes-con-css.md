---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVTWG2Q4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T023446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDnvSQcwyEm7KNbWxFpSRRJMjuQ6d694llKl%2Fvrkshm0gIgVyMg7C0ABzp44AAjpsL4XDMc6qfn2D8AzcthGvT3L04q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDAy1kcudpSIpiKbyWCrcAxAlBLmRocI06mugFl6NW7rDhbY0WSou%2FUZeJEdRdusyV7zD1taeIQOkPAXYPRoN8Fj9xxQCVQtwke355FuJtaqSGd2QXBJ4%2F1UF5qe7TjyedJaDxbgTKQnFh3RslDLfl6PH0Wi1SMhWEbHI0GU8ep3ldLFGOFC7IG7W9lHqT2ueKfkN2HdrTQGm2iODVFLftX399UoRzO%2BCjIAUWzkDbCP0SaU0qRFsd5q%2BEzmxwXwQ%2FlW19abq8N5N%2F7O7ZiSM4wBS5mqo0nDEuFtY19RsYqUoS7YCuF3RvOkAN6x%2F0SRFfnyoc7LlrKZOpGi2zoouFqqazMsI%2Fv%2B1cob9nPgmisO%2FuwDXsNSyOAkYoI6N5KojIe84xbnaOCu84EjwqqHamQe5OifsqUsVdiPO9SZ08NfSS%2FRwUZLCeKWMiCx3NwVHfEX%2BvOcOkBcBENIpbZ7sAoz%2BrpwDI%2BWkaYX0eDBBc%2FT3GPUF4cpTgcVdLCmF5Hd2MLx1zw5nUnNiv11gZJ911fL%2ByILgC2ZBVuGwpvs6y4tr2l%2B%2FciiV87qwEgXr9jKkzf81u0KXVY0KJ4muAu1byOpItPHGhXrluCL5Q5eg0eccpEt5vdrpPjlwBOfhJag%2BRisFG0zTiszGO3I%2FMKnUw8kGOqUBYvNttWwQaFhuw78UnsZY5PQTy5NDBuJSjfuD159b8ysS2wzDbeKjb3Vu2goerpG%2FWqmX5eoo2qm3riNLFk0IVNsImtagCErjijUXkpwS6KgNw6aXmE2MRc3XrNQAU0WbWc8fMQD6Q3Z5JF%2F%2ByB8GAk8sBsF%2Fhd9Ld%2BF%2F%2FbSZ56umHhf%2F561KFX2QAes4FsgDVx%2BOlZMUg1yDOmm%2FOVViErjBS1Gx&X-Amz-Signature=f623c85b6094e6d1e8243be09cba98a584013323b15e75340847bd6ba1774521&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVTWG2Q4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T023446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDnvSQcwyEm7KNbWxFpSRRJMjuQ6d694llKl%2Fvrkshm0gIgVyMg7C0ABzp44AAjpsL4XDMc6qfn2D8AzcthGvT3L04q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDAy1kcudpSIpiKbyWCrcAxAlBLmRocI06mugFl6NW7rDhbY0WSou%2FUZeJEdRdusyV7zD1taeIQOkPAXYPRoN8Fj9xxQCVQtwke355FuJtaqSGd2QXBJ4%2F1UF5qe7TjyedJaDxbgTKQnFh3RslDLfl6PH0Wi1SMhWEbHI0GU8ep3ldLFGOFC7IG7W9lHqT2ueKfkN2HdrTQGm2iODVFLftX399UoRzO%2BCjIAUWzkDbCP0SaU0qRFsd5q%2BEzmxwXwQ%2FlW19abq8N5N%2F7O7ZiSM4wBS5mqo0nDEuFtY19RsYqUoS7YCuF3RvOkAN6x%2F0SRFfnyoc7LlrKZOpGi2zoouFqqazMsI%2Fv%2B1cob9nPgmisO%2FuwDXsNSyOAkYoI6N5KojIe84xbnaOCu84EjwqqHamQe5OifsqUsVdiPO9SZ08NfSS%2FRwUZLCeKWMiCx3NwVHfEX%2BvOcOkBcBENIpbZ7sAoz%2BrpwDI%2BWkaYX0eDBBc%2FT3GPUF4cpTgcVdLCmF5Hd2MLx1zw5nUnNiv11gZJ911fL%2ByILgC2ZBVuGwpvs6y4tr2l%2B%2FciiV87qwEgXr9jKkzf81u0KXVY0KJ4muAu1byOpItPHGhXrluCL5Q5eg0eccpEt5vdrpPjlwBOfhJag%2BRisFG0zTiszGO3I%2FMKnUw8kGOqUBYvNttWwQaFhuw78UnsZY5PQTy5NDBuJSjfuD159b8ysS2wzDbeKjb3Vu2goerpG%2FWqmX5eoo2qm3riNLFk0IVNsImtagCErjijUXkpwS6KgNw6aXmE2MRc3XrNQAU0WbWc8fMQD6Q3Z5JF%2F%2ByB8GAk8sBsF%2Fhd9Ld%2BF%2F%2FbSZ56umHhf%2F561KFX2QAes4FsgDVx%2BOlZMUg1yDOmm%2FOVViErjBS1Gx&X-Amz-Signature=4dc56e651c87b17baaa1dcff1341b9b1f90f7f934a4741dc39398c61507ebca2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
