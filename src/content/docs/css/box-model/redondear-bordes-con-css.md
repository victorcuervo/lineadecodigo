---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466555WE2KQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXodoVYpntGj37UsL8oXK5JSvkG2yf%2BJdU75aJdUFQtwIgZQf46te8T9k1nmYptJeDz7Q61erLA8CeP8bdfO0BTYcq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDFTwNs%2B9ScbGgTbxXCrcA5XxpcSisJm291TSaQNOaBGD%2BwtnOVtM6n19ybOqMflQIkZKQDnwrwb6X7xQba15e%2FruDbcvwWnwYhhrqrRi31xG3BwdHxryuKMcmFVkNWxrGBqhpyL0s2PliZ3O4ssLpLaxN6M07RHEoc57%2BkOj%2BiXE950O3ibYbpyquyU6rjBTDSBl9B8UVHg9hqJWj%2Bo9ssfYGXsERSnVpUSBDuGi%2BWyDy2tc8V3vxkVZU6crND54WQk7I7xkY5N%2BgYVYIh2K86YZp49AyowjkKpnH5cdys4xCsNfic481cVE8R3qSG8njkIL6%2FO%2BMxvQGwQWpQTtPkr0JuG0hv%2BL0EOTJhHTMb0R%2FPXsquERuvuDjYgze2t0wUzW5YUFL2lOOVQaary9Y8VtLOAD1OBvPTJZDfURSn0jE8zAnFwi7A3sj%2B20XcgVykwAIjIjDfvufpxmSAK8FZYQ8UlszOIFlDQ%2B8qYfqcW8MFTUMWZRuCWLbGJJZu5gLm27DtR3PQIcTRkBjGUHYUglwWO3kYqnOW%2B5CZDoydfiV%2Bxkbm2azwSX682TyN%2BaJEV0yhDJJH2xOZOUz37nuuQCYDuhqfO9q7860iq9JBQ9XsVk3GUq8sr8dRRFiYYBYEy5Kgl7Jehj45BUMLuqisoGOqUB13bZdOa0T%2FDv234NYt%2BsRp35WMMkLLTxSY8pEsvyHclSTE2FmboO%2B3tNXOILgMiMHlrLC2fHljC1RdrVEWamj%2Fe98Apm11bNiZ0YHzygOox2qfZ0M5eGTVyOlmw7xCYGEKmj%2FjPffbvp8BWOiCsTdmaXWgSIcv254DZ18MZPFY53EPBdATJl8FRyHvfzSPlMAvEIIl5jMXNbGYMssgOtPLnwkRSS&X-Amz-Signature=a99c910456f12de6620a4c55644cd5bf7d4aac2f4c3b589fe48303bbe3cdac19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466555WE2KQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXodoVYpntGj37UsL8oXK5JSvkG2yf%2BJdU75aJdUFQtwIgZQf46te8T9k1nmYptJeDz7Q61erLA8CeP8bdfO0BTYcq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDFTwNs%2B9ScbGgTbxXCrcA5XxpcSisJm291TSaQNOaBGD%2BwtnOVtM6n19ybOqMflQIkZKQDnwrwb6X7xQba15e%2FruDbcvwWnwYhhrqrRi31xG3BwdHxryuKMcmFVkNWxrGBqhpyL0s2PliZ3O4ssLpLaxN6M07RHEoc57%2BkOj%2BiXE950O3ibYbpyquyU6rjBTDSBl9B8UVHg9hqJWj%2Bo9ssfYGXsERSnVpUSBDuGi%2BWyDy2tc8V3vxkVZU6crND54WQk7I7xkY5N%2BgYVYIh2K86YZp49AyowjkKpnH5cdys4xCsNfic481cVE8R3qSG8njkIL6%2FO%2BMxvQGwQWpQTtPkr0JuG0hv%2BL0EOTJhHTMb0R%2FPXsquERuvuDjYgze2t0wUzW5YUFL2lOOVQaary9Y8VtLOAD1OBvPTJZDfURSn0jE8zAnFwi7A3sj%2B20XcgVykwAIjIjDfvufpxmSAK8FZYQ8UlszOIFlDQ%2B8qYfqcW8MFTUMWZRuCWLbGJJZu5gLm27DtR3PQIcTRkBjGUHYUglwWO3kYqnOW%2B5CZDoydfiV%2Bxkbm2azwSX682TyN%2BaJEV0yhDJJH2xOZOUz37nuuQCYDuhqfO9q7860iq9JBQ9XsVk3GUq8sr8dRRFiYYBYEy5Kgl7Jehj45BUMLuqisoGOqUB13bZdOa0T%2FDv234NYt%2BsRp35WMMkLLTxSY8pEsvyHclSTE2FmboO%2B3tNXOILgMiMHlrLC2fHljC1RdrVEWamj%2Fe98Apm11bNiZ0YHzygOox2qfZ0M5eGTVyOlmw7xCYGEKmj%2FjPffbvp8BWOiCsTdmaXWgSIcv254DZ18MZPFY53EPBdATJl8FRyHvfzSPlMAvEIIl5jMXNbGYMssgOtPLnwkRSS&X-Amz-Signature=3d8a7bbb32c807d54963294c98f5b7e5b6f6a8eb67729fb2219be74713366cf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
