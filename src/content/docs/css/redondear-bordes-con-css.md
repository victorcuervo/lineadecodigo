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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IE3SZU2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T181405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHwlVVnC6reZWrvKJeIA80C1KatgydrQJmC5w9RPS4G4CIQDsFH%2FcGnXfPXoos1Q5o6bAZSwyxoGAAw%2FgSfFCcgg3jSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmtR5CVvZYAXcJa1cKtwDBQ0N7Um60N%2BqQsmsM%2F1My%2BOCL9z%2BROxR4NcU%2FVnmb5%2FxRbIevoc3RjhyCuvmdLuOSKRbDDNPteSYBZauPuWeagRMcR5Yp2wX0SgXomrR3jjqNIVBgyDZZQF0VAKXLiIajpfnhRGiVLJQmU785BwqloFfRy9rxvS8xX%2FKJN2QVLSVUNW1fT2FGIhz4vn0pnpknTVlKkrNNS8iInOsrZ9%2FMJ8dW6ZjC3uyNpNM0h8PS9TZtUqHiRUoef3VYYlPJgHlXLSoB6RFQczdvvWESJ7JOn9t2cSIA6nxFoJD%2Bg4Ampmd8x1Z2b0yMpP9MMykZ97bbB8GiS6LQBPKyXmUhwYZ0mBt0FOWPyd1Cap1%2Fj7VXwqclCCAH55BC%2B7pmpC0XoHQXIR967eiM1LVpuE6DV0%2F9YWIwAmj6kVAoWFLaccVA0Six041yvPthamNkk%2Fgf0B1HmvfvoX59QlAPSagWzHWNi%2FyZKHdT9OlRKDiBAoM5x%2Fe0NDeu%2BnC%2Fz%2BSCb%2F06rBl4NEeD9O2gYy5s25j4RbdIAAM%2Bi8SZfjJ6VloCL91cJOwv2r0noF1kh4prR9DXTmo69SOxoODLsZEft1B%2FFHr4AqFBuTWOcXv3CN6D5flllBpeA9jNABQnfUtNPUwhIfcyQY6pgHWs%2FRAb%2BKp0Hax2BFTLJpFkgvAm6bpkq5cNd36I%2B%2FFMy0FOqlQdvScDO9CmvmWjEBLjTpPdaZzxOMOriadZWGNDix5UFYpjpAdmaPrNlQ9UuNATMYo8SSmw8MhMwKDYXXyI7u747ca895hA2po5G5W9VpQKKq3NcT9jpC8D7mWk9Maz9rF2YrWEOF5INGzb%2B6YLQyR2Cc2aqZ1xQKmX8UATQsQXUiZ&X-Amz-Signature=d836aae7f70cf30ed63df5183c64c7d9bdfd68138dafb6d500a757912709e411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IE3SZU2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T181405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHwlVVnC6reZWrvKJeIA80C1KatgydrQJmC5w9RPS4G4CIQDsFH%2FcGnXfPXoos1Q5o6bAZSwyxoGAAw%2FgSfFCcgg3jSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmtR5CVvZYAXcJa1cKtwDBQ0N7Um60N%2BqQsmsM%2F1My%2BOCL9z%2BROxR4NcU%2FVnmb5%2FxRbIevoc3RjhyCuvmdLuOSKRbDDNPteSYBZauPuWeagRMcR5Yp2wX0SgXomrR3jjqNIVBgyDZZQF0VAKXLiIajpfnhRGiVLJQmU785BwqloFfRy9rxvS8xX%2FKJN2QVLSVUNW1fT2FGIhz4vn0pnpknTVlKkrNNS8iInOsrZ9%2FMJ8dW6ZjC3uyNpNM0h8PS9TZtUqHiRUoef3VYYlPJgHlXLSoB6RFQczdvvWESJ7JOn9t2cSIA6nxFoJD%2Bg4Ampmd8x1Z2b0yMpP9MMykZ97bbB8GiS6LQBPKyXmUhwYZ0mBt0FOWPyd1Cap1%2Fj7VXwqclCCAH55BC%2B7pmpC0XoHQXIR967eiM1LVpuE6DV0%2F9YWIwAmj6kVAoWFLaccVA0Six041yvPthamNkk%2Fgf0B1HmvfvoX59QlAPSagWzHWNi%2FyZKHdT9OlRKDiBAoM5x%2Fe0NDeu%2BnC%2Fz%2BSCb%2F06rBl4NEeD9O2gYy5s25j4RbdIAAM%2Bi8SZfjJ6VloCL91cJOwv2r0noF1kh4prR9DXTmo69SOxoODLsZEft1B%2FFHr4AqFBuTWOcXv3CN6D5flllBpeA9jNABQnfUtNPUwhIfcyQY6pgHWs%2FRAb%2BKp0Hax2BFTLJpFkgvAm6bpkq5cNd36I%2B%2FFMy0FOqlQdvScDO9CmvmWjEBLjTpPdaZzxOMOriadZWGNDix5UFYpjpAdmaPrNlQ9UuNATMYo8SSmw8MhMwKDYXXyI7u747ca895hA2po5G5W9VpQKKq3NcT9jpC8D7mWk9Maz9rF2YrWEOF5INGzb%2B6YLQyR2Cc2aqZ1xQKmX8UATQsQXUiZ&X-Amz-Signature=0885d149b8b465574f5722e32efe1243e2245181b4fc9f811acf27109f3fa6de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
