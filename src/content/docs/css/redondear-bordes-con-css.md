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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBJALB2I%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T040420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAD92Rs9RfS5MnthcF%2F6XXAiUvkfb3xcvv4AAhEEiGECAiBkrzN5bVKUhm1ps9OgUOC9M%2BWXhFQ9phihqtSSjqCYVSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMbwGr6v9jHuGTJQGJKtwDf8sUa8MCFS0L86diJ4ZSjNidpWPB6oYupz3O0J9TH2u1EsWHIkMx7N%2F4QNaZ3h%2BFbmA78reyPHzZ1dNwAgVaCBy7VPe%2B6NdCeiz2HLumOjdZyGtQtgvxLKpVMBEU4IhEz%2F5NAIISQ72HClTrIlpyZgTUHi7I4u1qJl%2FErIZ%2BrZ2DMn9%2FoqxRDVZ0AZ%2Fm%2Bp59S6JzV14XUJKJHsWAndihq0tP4i0orUQq%2BGrgHI2zQpWhmH6Bq17HBImGwqj3meWD7awnj9%2FJSWt70NPASzY0UgfTkX8FFY0nLBtyqYRgrzRp0LbM5NDKEGVSBBAnYbnDpY8BMpJJUrPYJaMCvIY90imJMPfHX8MhFJe9xN%2Fh7npxTs9CerZSUuVFBIZ1QpKeR3DSdD7DypDCsYAm9XLEl7BUKJKKJtNCFtcyaNGbhx2%2Fxt%2BNpeB%2B%2BmTNOZGMq52FJuWbgK981JmRanjM3ukFpFTVub0HIJZpJMiScy28v1Z6dOSp601wXmg1FmKD9ybMuhVb2RcvOrDChnUa8vFO%2BYS2xcSrS12t8WVTZ6uE7DsdBECNJSC%2FYw8Pc7gZEVxfT8gbAx1sxztm%2BeUN%2FmBsxqG0bMNS7SRbOPor%2FiOMyvNTMEXqnm06f2lcqtgwsLHJyQY6pgHeGiUlx9VSWaY2rpUyR8zKeOIi%2FnJ9Pr%2BKyeZBIkGWGqCqzehzDs8CMLC4tS%2BCCoyO8oxoAQzNGnOA96RF0%2Bhj44vCPSvFJQiXl2MNPJFj3i9otjnV77qxQq9vM3KAEIbGcZi6fKR4QUbyoWrNCR8IsFkHRwrAo4%2FoqkRKPwpiaUOGTBk0uVCGyYv6o7HdisqpmJuvOjbv7xY%2BGcuBXTW6WL1Q9fFZ&X-Amz-Signature=75cb7d414b94fae4f4a043212d5f86605a182f3b01d1970f5e23124a412e4aec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBJALB2I%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T040420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAD92Rs9RfS5MnthcF%2F6XXAiUvkfb3xcvv4AAhEEiGECAiBkrzN5bVKUhm1ps9OgUOC9M%2BWXhFQ9phihqtSSjqCYVSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMbwGr6v9jHuGTJQGJKtwDf8sUa8MCFS0L86diJ4ZSjNidpWPB6oYupz3O0J9TH2u1EsWHIkMx7N%2F4QNaZ3h%2BFbmA78reyPHzZ1dNwAgVaCBy7VPe%2B6NdCeiz2HLumOjdZyGtQtgvxLKpVMBEU4IhEz%2F5NAIISQ72HClTrIlpyZgTUHi7I4u1qJl%2FErIZ%2BrZ2DMn9%2FoqxRDVZ0AZ%2Fm%2Bp59S6JzV14XUJKJHsWAndihq0tP4i0orUQq%2BGrgHI2zQpWhmH6Bq17HBImGwqj3meWD7awnj9%2FJSWt70NPASzY0UgfTkX8FFY0nLBtyqYRgrzRp0LbM5NDKEGVSBBAnYbnDpY8BMpJJUrPYJaMCvIY90imJMPfHX8MhFJe9xN%2Fh7npxTs9CerZSUuVFBIZ1QpKeR3DSdD7DypDCsYAm9XLEl7BUKJKKJtNCFtcyaNGbhx2%2Fxt%2BNpeB%2B%2BmTNOZGMq52FJuWbgK981JmRanjM3ukFpFTVub0HIJZpJMiScy28v1Z6dOSp601wXmg1FmKD9ybMuhVb2RcvOrDChnUa8vFO%2BYS2xcSrS12t8WVTZ6uE7DsdBECNJSC%2FYw8Pc7gZEVxfT8gbAx1sxztm%2BeUN%2FmBsxqG0bMNS7SRbOPor%2FiOMyvNTMEXqnm06f2lcqtgwsLHJyQY6pgHeGiUlx9VSWaY2rpUyR8zKeOIi%2FnJ9Pr%2BKyeZBIkGWGqCqzehzDs8CMLC4tS%2BCCoyO8oxoAQzNGnOA96RF0%2Bhj44vCPSvFJQiXl2MNPJFj3i9otjnV77qxQq9vM3KAEIbGcZi6fKR4QUbyoWrNCR8IsFkHRwrAo4%2FoqkRKPwpiaUOGTBk0uVCGyYv6o7HdisqpmJuvOjbv7xY%2BGcuBXTW6WL1Q9fFZ&X-Amz-Signature=851a942b52a981930871569920e0cb703e757a51566663d7346131e3727a3c2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
