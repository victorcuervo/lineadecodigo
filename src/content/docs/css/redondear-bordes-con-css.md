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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B66NSZ4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T035738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIG7Ydy7pFoH%2BCCB0nDv2P4LHrQ08fCDBVemnsxD5c%2FAiEAzIWv798D8nwOGsYOGzeYTZD1nvzsTNbtwF7qXUU7kE8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDOM4efTUATVh0PmnmSrcA8iy5p06gzc7H193yAcU2PFOp%2ByMCcYz2zEUf%2Fe5ycRnaUiAdZ0XWbblz2jUElIz2cmMnnjpK2cUYNurLX%2BkXmfDX6FYYVaKR%2FMmRiSz%2F1WuEoQZ8dJDhy5%2FrwfAjZj8lP6tZmRYwnNE3qBBEeIPOzfRKbM4i7l0WB6JnNAmq1ho%2F8blk%2BtjTwuZGnDyl7eD8Xq2aDsR43NmiyFCdWITilM%2FjilZ%2BrK0wcpxj%2FxXUL4ZugqkeBjv9kRWUiK%2BU3VI1uoX0gua3uD6jpqa8uiAzECC691qfLUJ0dVh4rtwT%2FmCYLQyuAc6XotQf8pau241akvaKO8GGdttboXTDx4Dhn4VUrSFCBBj585fgcJztRwG9a3BZVhbMvJ1NOIALjbdX4SPcpAnoGblj3pnluW%2F2lGXOGOAl7t2QvZGsO6Yh2jRD%2FrhjfeN42wiBGOPy0eQcsudYa8Nx3ydITp7acob6zKPuW1zlrMleBu13e3iuCY5wGdR4TkQPNC0UelM1FrYc5k3YvAfQ%2BepqYzgpKR6fmrTvPS4to5A4tAw%2Bxe5RPL06tZ7Chaf%2FIxYN%2FpMuo1Kh57984ywhxJk0u%2FS%2F7fWUOla5NlkVH7s%2BqEmZCNLLHKdE8SwCtXwrrKPgliAML7CzskGOqUBtzKgjCdDHYjNTUAPu%2Fd1ZTCvNcZQns95v5zvJ%2BlTOtrdXN6jG1JiHxA2RRuUlsGzNjNCQlks9Br45yDJNu8%2Fl5qSw03uiCzeVZQvV%2FbmerZc8Rn3TM1kZOazb%2FRKoJI6dQ3xAbRLxUivRs6hr%2FQXl%2FZSTnQEQKfRESKT0DT8vnO1HYWJhs3S0PYTN9WLmsYqEdd4QHuvpBdpKV7DqEYC%2BXV4TKWI&X-Amz-Signature=8a475ffd998fd6c79ea09cd065e511bbc6bb98fa4b3f65d3cfcf682d03923e34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B66NSZ4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T035738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIG7Ydy7pFoH%2BCCB0nDv2P4LHrQ08fCDBVemnsxD5c%2FAiEAzIWv798D8nwOGsYOGzeYTZD1nvzsTNbtwF7qXUU7kE8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDOM4efTUATVh0PmnmSrcA8iy5p06gzc7H193yAcU2PFOp%2ByMCcYz2zEUf%2Fe5ycRnaUiAdZ0XWbblz2jUElIz2cmMnnjpK2cUYNurLX%2BkXmfDX6FYYVaKR%2FMmRiSz%2F1WuEoQZ8dJDhy5%2FrwfAjZj8lP6tZmRYwnNE3qBBEeIPOzfRKbM4i7l0WB6JnNAmq1ho%2F8blk%2BtjTwuZGnDyl7eD8Xq2aDsR43NmiyFCdWITilM%2FjilZ%2BrK0wcpxj%2FxXUL4ZugqkeBjv9kRWUiK%2BU3VI1uoX0gua3uD6jpqa8uiAzECC691qfLUJ0dVh4rtwT%2FmCYLQyuAc6XotQf8pau241akvaKO8GGdttboXTDx4Dhn4VUrSFCBBj585fgcJztRwG9a3BZVhbMvJ1NOIALjbdX4SPcpAnoGblj3pnluW%2F2lGXOGOAl7t2QvZGsO6Yh2jRD%2FrhjfeN42wiBGOPy0eQcsudYa8Nx3ydITp7acob6zKPuW1zlrMleBu13e3iuCY5wGdR4TkQPNC0UelM1FrYc5k3YvAfQ%2BepqYzgpKR6fmrTvPS4to5A4tAw%2Bxe5RPL06tZ7Chaf%2FIxYN%2FpMuo1Kh57984ywhxJk0u%2FS%2F7fWUOla5NlkVH7s%2BqEmZCNLLHKdE8SwCtXwrrKPgliAML7CzskGOqUBtzKgjCdDHYjNTUAPu%2Fd1ZTCvNcZQns95v5zvJ%2BlTOtrdXN6jG1JiHxA2RRuUlsGzNjNCQlks9Br45yDJNu8%2Fl5qSw03uiCzeVZQvV%2FbmerZc8Rn3TM1kZOazb%2FRKoJI6dQ3xAbRLxUivRs6hr%2FQXl%2FZSTnQEQKfRESKT0DT8vnO1HYWJhs3S0PYTN9WLmsYqEdd4QHuvpBdpKV7DqEYC%2BXV4TKWI&X-Amz-Signature=047185581943b6496adb430c8ca0db9b3dd8a01be31d05d1c58959ab05b3b6e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
