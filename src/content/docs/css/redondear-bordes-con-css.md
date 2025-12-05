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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWY3SRLY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T054350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkA4iG2q6NnK6ASmjP4Uh4felQOvtdY%2Bm3p8PHULmfOAiAmj0jdhVYCqbvfCMQ0xQpUkpi8e11o7YaTy8nH58R7lSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMhoNAbot4oNDctGDqKtwDUKiFYBPqVvwhxxfhnd4eaO2XJccfZD%2F7VdKxRZbYRhdFTmediEClBZpOGf2X0poMVaF6qpZyb4Jlys%2B%2Bd9y0CNaH7CvL5O35HPgiEgeKL6mZLe%2F3RfQ9fGotuK0SkM%2FxX9hIQ8vroZK8P0N7FbSQacXO62slURwohLS23ZvOcfltiVJVOCYGhUH%2FkPta5LM4rL8FSREObYS%2FIwtEXUsogX6vzWaxsOORH6%2FnXRz6Pk7y%2Bram2W%2B%2FArcGqYCguPl8ZfnaqpE1HsLP65f34vALfjxb7e6HBz2fC4Jphyo4uXIM75LkWta0VzrsiHalL9Wbv%2FtBJyNT%2F9ZbABmNJRsfwJX70xoDZsmr8fnm5Qqyep6N1zHKRlcYmZFgwvpVPV0X1rYkaj4s3dZELP1jQXrJhhLuCi%2B%2BqZIlCX6beWf%2FN27yN%2FwojMPj0DaGVJiYGtnXmYMh6av6W%2FWOyZKoKSlgcjQPVmYvkVTWo1vAY1%2FJF%2FFRkZorbj3xdmkgqyoDt6298J8MsuXA3EVdaQZ%2BkQF4XgknGZ37AWvdvsi7kwBh5ArtttIY%2FE4O0lVkPIbgaFRu04r5lEyHB6URspP%2Bw7X1Fh0z%2BLgC0gKsCDHmpNj2Rhzh%2Fo6O84GYR5L8iXgw3K3JyQY6pgF6UrKRlNbJfU%2BKjl6VAHHJ1XHfPXvF0Qm0rl0Gm81X%2FFyrl%2FL6ZgIaWUzVrRTpRr0RKwIdtG4QvupQwtR%2FeqD1KsRcTMa9PK2ggGGSAqwyBCLGUNpc0GWWZadojeQo6icJR1nfADQMRArnfB1brUTPsTYdlVoyeYxzucmqIHzQw9TYUukuPqgGoqBrSmgG7pc6NFS4Pz6rGahfaPlFsLFanKet9c3V&X-Amz-Signature=5b4083388c65da14cf6799865a8a4db513644757235154166ab09817fa30f8b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWY3SRLY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T054350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkA4iG2q6NnK6ASmjP4Uh4felQOvtdY%2Bm3p8PHULmfOAiAmj0jdhVYCqbvfCMQ0xQpUkpi8e11o7YaTy8nH58R7lSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMhoNAbot4oNDctGDqKtwDUKiFYBPqVvwhxxfhnd4eaO2XJccfZD%2F7VdKxRZbYRhdFTmediEClBZpOGf2X0poMVaF6qpZyb4Jlys%2B%2Bd9y0CNaH7CvL5O35HPgiEgeKL6mZLe%2F3RfQ9fGotuK0SkM%2FxX9hIQ8vroZK8P0N7FbSQacXO62slURwohLS23ZvOcfltiVJVOCYGhUH%2FkPta5LM4rL8FSREObYS%2FIwtEXUsogX6vzWaxsOORH6%2FnXRz6Pk7y%2Bram2W%2B%2FArcGqYCguPl8ZfnaqpE1HsLP65f34vALfjxb7e6HBz2fC4Jphyo4uXIM75LkWta0VzrsiHalL9Wbv%2FtBJyNT%2F9ZbABmNJRsfwJX70xoDZsmr8fnm5Qqyep6N1zHKRlcYmZFgwvpVPV0X1rYkaj4s3dZELP1jQXrJhhLuCi%2B%2BqZIlCX6beWf%2FN27yN%2FwojMPj0DaGVJiYGtnXmYMh6av6W%2FWOyZKoKSlgcjQPVmYvkVTWo1vAY1%2FJF%2FFRkZorbj3xdmkgqyoDt6298J8MsuXA3EVdaQZ%2BkQF4XgknGZ37AWvdvsi7kwBh5ArtttIY%2FE4O0lVkPIbgaFRu04r5lEyHB6URspP%2Bw7X1Fh0z%2BLgC0gKsCDHmpNj2Rhzh%2Fo6O84GYR5L8iXgw3K3JyQY6pgF6UrKRlNbJfU%2BKjl6VAHHJ1XHfPXvF0Qm0rl0Gm81X%2FFyrl%2FL6ZgIaWUzVrRTpRr0RKwIdtG4QvupQwtR%2FeqD1KsRcTMa9PK2ggGGSAqwyBCLGUNpc0GWWZadojeQo6icJR1nfADQMRArnfB1brUTPsTYdlVoyeYxzucmqIHzQw9TYUukuPqgGoqBrSmgG7pc6NFS4Pz6rGahfaPlFsLFanKet9c3V&X-Amz-Signature=5d1b55fd7ca5d26ff0db8540d583612c5ffaa1515422a9403cfae7fbe4384bc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
