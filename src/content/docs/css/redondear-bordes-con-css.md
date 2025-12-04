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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C3ZEHCR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T084200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIAZ0vMX1VX6UjcGYtGCLcZkjioZM59G5wD5v9s3tOIe5AiEA2t1hAhujUR%2FpjcCrK%2FBa4JAj0fm%2FbMYDgCxSivlfmGQq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGOpFExIirVDMmb1OSrcA41YxTwii2JUADew99eAIvRVI3tVOVzNGzbJR5rnsDO2bJY326UCITVmXzwHKVVHO5H%2BPNFk83t85YJknakWcnA9P4pg9IQI8LC2mgT3Uo7REvnX4Ce5jTmwwU%2B6F%2FsGU1xq1A5pDMUJvMi1y%2Bpff4u5nUkVnZkkK9tNp3xicI9VgcmEEQ3M73F8aPL1lOF3FlNRxrvtxDcFxhl9DkRrG08Eurnol2vU%2BOPEDZStcMUHLfezMeiDcSjfH7my%2FquA5hf%2BPUsBg1Pl%2Fi36%2B4lV4uJhbw5BDa7rM4%2F8eeBAan8GEoFMZF57dJGC9g44qS3Vik%2Bg7s2O4CjqQ2t6C0UMzeclJQopwM9w9i7QE%2BEwBg674UfMVK18zRaapV8hPMVqstF57rm4ydIAUen5N0suqYt%2BatwCNI5Cf%2F90646Gw1VcP6Zg2PIIPTk9dzS66qWGa0QzIhTGuY3DTgDmZgFdKfcifkNYpK79XJtLP%2F8wX7mU87cbe%2F8bapXamDNDgzk%2BpaNFSTOniGEqPLCPaUB2CbrHCImdl9vAgwAH7BJqgEuefAaCESwgesT7KqgSQxosC4fKTqj%2B7l3eELWziypzPwEhDuQNPLuj5FX%2FE4s7xPL2F8CA1G4ao%2BKmQ%2B%2B3MPGFxckGOqUBdM9vm7%2BxPiuXYLG96XUrwt7WrULWe4vtFv1YwvJdJ83IBMWPFhOF%2FVVrA3Bdk1KWmkfGxPco7g8MjE9eCVoiMANdCBw9vfP8Y6RAT8ZKsnJ1FjlW%2FLmbcs1LXp3bPHTgorc5Kpn6Sq20s6ea4YwtTh7z6egxGZP7nP60vqOW7e49045VjSNk4DUhAeam%2FL5brLWbsMiap3NcMiIf7YwPrlGfl4zL&X-Amz-Signature=a3e4c606497c91b9e7addaac92f75dc1cc5fd0a7c06a1bbb74aa4172e5fe4d30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C3ZEHCR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T084200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIAZ0vMX1VX6UjcGYtGCLcZkjioZM59G5wD5v9s3tOIe5AiEA2t1hAhujUR%2FpjcCrK%2FBa4JAj0fm%2FbMYDgCxSivlfmGQq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGOpFExIirVDMmb1OSrcA41YxTwii2JUADew99eAIvRVI3tVOVzNGzbJR5rnsDO2bJY326UCITVmXzwHKVVHO5H%2BPNFk83t85YJknakWcnA9P4pg9IQI8LC2mgT3Uo7REvnX4Ce5jTmwwU%2B6F%2FsGU1xq1A5pDMUJvMi1y%2Bpff4u5nUkVnZkkK9tNp3xicI9VgcmEEQ3M73F8aPL1lOF3FlNRxrvtxDcFxhl9DkRrG08Eurnol2vU%2BOPEDZStcMUHLfezMeiDcSjfH7my%2FquA5hf%2BPUsBg1Pl%2Fi36%2B4lV4uJhbw5BDa7rM4%2F8eeBAan8GEoFMZF57dJGC9g44qS3Vik%2Bg7s2O4CjqQ2t6C0UMzeclJQopwM9w9i7QE%2BEwBg674UfMVK18zRaapV8hPMVqstF57rm4ydIAUen5N0suqYt%2BatwCNI5Cf%2F90646Gw1VcP6Zg2PIIPTk9dzS66qWGa0QzIhTGuY3DTgDmZgFdKfcifkNYpK79XJtLP%2F8wX7mU87cbe%2F8bapXamDNDgzk%2BpaNFSTOniGEqPLCPaUB2CbrHCImdl9vAgwAH7BJqgEuefAaCESwgesT7KqgSQxosC4fKTqj%2B7l3eELWziypzPwEhDuQNPLuj5FX%2FE4s7xPL2F8CA1G4ao%2BKmQ%2B%2B3MPGFxckGOqUBdM9vm7%2BxPiuXYLG96XUrwt7WrULWe4vtFv1YwvJdJ83IBMWPFhOF%2FVVrA3Bdk1KWmkfGxPco7g8MjE9eCVoiMANdCBw9vfP8Y6RAT8ZKsnJ1FjlW%2FLmbcs1LXp3bPHTgorc5Kpn6Sq20s6ea4YwtTh7z6egxGZP7nP60vqOW7e49045VjSNk4DUhAeam%2FL5brLWbsMiap3NcMiIf7YwPrlGfl4zL&X-Amz-Signature=af39d83369419d9ab914fa6f291c87f01cc0bd7517220a98f28f83bbe0eb1b62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
