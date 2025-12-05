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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665ZOYZ5S%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T051617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFS%2FqaPjihDgmlv2x%2BX5GPQSq4%2F2RXkYWcSFe3%2FhIasBAiEA7%2FEjsfzIJ2zinD%2Bz55jiCznLulNvkVFGew%2Bo2%2F0eCIUq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDIftWq3YhnX6sumcCCrcA2U6VVweAcqIdcfrfD1WMOHZD9yHKS%2BP1NZxHuCMNRTwq0LUYMjj1nIulXq70bijOnD6tJ8gWQdUQw4MlINqZ2l8z6ni1k3gZR2bPiwyiq0mx7jwLHTEB8V9SWeK6oXTqY4mA8CAZjbwfFR0jGEgmPMd2NZDJZo5jlvW%2B%2BdhHJtaTunMmQWqFmwcQpZ92Trm%2Fqjvi%2F62Pq9AAAI87hFyuOYCl569JsG8nCmnkXTfI1Tr0s51oX0IiFm6zTnMh5ftPYI7EbTQDmijMdGgV%2FDknKuMvxv8P9bSKYKp9Ss1CnuLzIUK01v4SuH%2FiLbxobA91WCAufcylcO%2FATKnJQiuN8NrmYDykTX56zgcEbTlypFDLCTA8K%2F3wSaR09F33wf2UwnC5tHbcgbf5KFJ0JLYHUd1iscpKVHJHjhhKE2e80RpBkRyf4Uz9pY0%2BrF0fTLRShJyZ6pDmBx1MAwrB5q%2FcS%2FzS7t3E35zdWcRTNrQh%2FEnf1eAGs8urAh6KNXG0%2BZxTKbH4xUp8vKnVwi%2Bu92wjceGhYZYIlKqVaazys77DNg0f8Khl0mX494kT3GmgGkm5TcffXv4M3Q6ottPXRiL4TGceTtYQlC9C%2FO4IROvT2Ns8Z1bfHU5rY9EhqDzMIuoyckGOqUBt1LDHAU3Twx1e9WGkscjoirS4qPIKF7dN9XOSreFB%2Bd1E0sW3wOCNkYflq%2F0aoDF4NJZXbBbUHGAHJphD8HF6AxXR86pJqwd2NTasikF81uCki%2F7exCRyXx8u5UCLmEUB%2Bq%2BnT04VXNchoOo9%2FVGazFdTjt2%2BOrS9pNO8652gT%2FG3ZNhieFBlwu9NiGwveFpZa8hvGkl%2FQikNoGV36nPyrcqr37R&X-Amz-Signature=10254cf0ad3bb3f019729a113131d95191171372a0db0b6dd2a9064189f74f52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665ZOYZ5S%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T051617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFS%2FqaPjihDgmlv2x%2BX5GPQSq4%2F2RXkYWcSFe3%2FhIasBAiEA7%2FEjsfzIJ2zinD%2Bz55jiCznLulNvkVFGew%2Bo2%2F0eCIUq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDIftWq3YhnX6sumcCCrcA2U6VVweAcqIdcfrfD1WMOHZD9yHKS%2BP1NZxHuCMNRTwq0LUYMjj1nIulXq70bijOnD6tJ8gWQdUQw4MlINqZ2l8z6ni1k3gZR2bPiwyiq0mx7jwLHTEB8V9SWeK6oXTqY4mA8CAZjbwfFR0jGEgmPMd2NZDJZo5jlvW%2B%2BdhHJtaTunMmQWqFmwcQpZ92Trm%2Fqjvi%2F62Pq9AAAI87hFyuOYCl569JsG8nCmnkXTfI1Tr0s51oX0IiFm6zTnMh5ftPYI7EbTQDmijMdGgV%2FDknKuMvxv8P9bSKYKp9Ss1CnuLzIUK01v4SuH%2FiLbxobA91WCAufcylcO%2FATKnJQiuN8NrmYDykTX56zgcEbTlypFDLCTA8K%2F3wSaR09F33wf2UwnC5tHbcgbf5KFJ0JLYHUd1iscpKVHJHjhhKE2e80RpBkRyf4Uz9pY0%2BrF0fTLRShJyZ6pDmBx1MAwrB5q%2FcS%2FzS7t3E35zdWcRTNrQh%2FEnf1eAGs8urAh6KNXG0%2BZxTKbH4xUp8vKnVwi%2Bu92wjceGhYZYIlKqVaazys77DNg0f8Khl0mX494kT3GmgGkm5TcffXv4M3Q6ottPXRiL4TGceTtYQlC9C%2FO4IROvT2Ns8Z1bfHU5rY9EhqDzMIuoyckGOqUBt1LDHAU3Twx1e9WGkscjoirS4qPIKF7dN9XOSreFB%2Bd1E0sW3wOCNkYflq%2F0aoDF4NJZXbBbUHGAHJphD8HF6AxXR86pJqwd2NTasikF81uCki%2F7exCRyXx8u5UCLmEUB%2Bq%2BnT04VXNchoOo9%2FVGazFdTjt2%2BOrS9pNO8652gT%2FG3ZNhieFBlwu9NiGwveFpZa8hvGkl%2FQikNoGV36nPyrcqr37R&X-Amz-Signature=98aa5c39b50e18f46dc6adb56221cc8a00e3c42f7427648b50407d25baee9c9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
