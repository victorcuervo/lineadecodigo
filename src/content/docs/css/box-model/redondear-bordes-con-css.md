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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZCLMZQ2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCs4VleMOCmThsMRFNDEHxvNnRnYC7vLxBAa69lRDG3igIgW22d80QnRCZoLugLcB%2FuG6FUoqIs5uP3wz83NC98R9UqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKb5xWT1nxuwPY3oDSrcAxrHEZR92AenrhfZWhH9xfCGKgLOw2ITzgKGnuMVGxcnb95Uns1krjrJHNfvSJYCbTMPUnRkxttwcXKJ0H80QqbpP92saV1sqPO6d8gU9aDy2mcHTmvNILnkPlvD20OxOUH6HocHG0uYI6AgEF%2FSo9We%2FrGCNzfB7GYL6Y7y6UoqwmTHuWKrrv7mL0pLGzpadZ%2FUqlvV5h3B06xCbsl5w8ysff%2F9KDaX0Es2sFKZh9iBluL3uHhxaRpfVArnwXFtfnwTCB0tBd4EnTSdhb8WgnPU81DDnttkbV7D2wozvZLshxSOwVvZa7ypav5jm8ovhX%2FsFQeqg1fCTE0Kfp8vYJRiNfMPVObuE%2BiwB9vU5n2gQs4ZzC5Cej9HRGf8QebUFidZS3xAziD2HYd8JYOSddAdGcm81jfph6BasXailY7IRaoiBBUQoRg%2Bw7ukePpBGYpJXYZsPTLhEYFGZ8cs8TVs0YsCRl0mycGvURDcQycdpmoJwAejsx2B9bJX9iHJPpD6WpWxPXntVZjghKbLbFS8a7qxQZFMrQ5w%2Bz6e2d6AG7iB6Io1kD%2FIZdpjfQ8k%2BfsRS8ZgzKsvW0WSBD8mWboyrxE8v5ubcWcT2gyM7iH%2BnQaQPnVIbB2FLL%2BQMKufi8oGOqUBiPLs8rH3g%2FJLNL7A1Zs%2BnVKecIBrA%2F3%2BE890t7bhh3yM46uzOBjmRPfZQ7NXgv1BDs%2FcRS%2FkDCsM83%2FH8Ukcn0tFYDgrbbe9O4nzyU4oo9EuPdtJcf52f7R5KPUxH98hLbKTUVWNzMC0WzWl0gt%2FScnUQ1PvTSNtrkfqRcwBbOpAhH33ikLchqzseXDyf0%2F%2BY0qV%2BYl7qSVCJd2bQCJOgPJwPUN9&X-Amz-Signature=049d928d8f7775686b7d2744fd87b474a473e4a072f16654bdf243920125b269&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZCLMZQ2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCs4VleMOCmThsMRFNDEHxvNnRnYC7vLxBAa69lRDG3igIgW22d80QnRCZoLugLcB%2FuG6FUoqIs5uP3wz83NC98R9UqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKb5xWT1nxuwPY3oDSrcAxrHEZR92AenrhfZWhH9xfCGKgLOw2ITzgKGnuMVGxcnb95Uns1krjrJHNfvSJYCbTMPUnRkxttwcXKJ0H80QqbpP92saV1sqPO6d8gU9aDy2mcHTmvNILnkPlvD20OxOUH6HocHG0uYI6AgEF%2FSo9We%2FrGCNzfB7GYL6Y7y6UoqwmTHuWKrrv7mL0pLGzpadZ%2FUqlvV5h3B06xCbsl5w8ysff%2F9KDaX0Es2sFKZh9iBluL3uHhxaRpfVArnwXFtfnwTCB0tBd4EnTSdhb8WgnPU81DDnttkbV7D2wozvZLshxSOwVvZa7ypav5jm8ovhX%2FsFQeqg1fCTE0Kfp8vYJRiNfMPVObuE%2BiwB9vU5n2gQs4ZzC5Cej9HRGf8QebUFidZS3xAziD2HYd8JYOSddAdGcm81jfph6BasXailY7IRaoiBBUQoRg%2Bw7ukePpBGYpJXYZsPTLhEYFGZ8cs8TVs0YsCRl0mycGvURDcQycdpmoJwAejsx2B9bJX9iHJPpD6WpWxPXntVZjghKbLbFS8a7qxQZFMrQ5w%2Bz6e2d6AG7iB6Io1kD%2FIZdpjfQ8k%2BfsRS8ZgzKsvW0WSBD8mWboyrxE8v5ubcWcT2gyM7iH%2BnQaQPnVIbB2FLL%2BQMKufi8oGOqUBiPLs8rH3g%2FJLNL7A1Zs%2BnVKecIBrA%2F3%2BE890t7bhh3yM46uzOBjmRPfZQ7NXgv1BDs%2FcRS%2FkDCsM83%2FH8Ukcn0tFYDgrbbe9O4nzyU4oo9EuPdtJcf52f7R5KPUxH98hLbKTUVWNzMC0WzWl0gt%2FScnUQ1PvTSNtrkfqRcwBbOpAhH33ikLchqzseXDyf0%2F%2BY0qV%2BYl7qSVCJd2bQCJOgPJwPUN9&X-Amz-Signature=4a86ab07929684be72344ce9d9f373b8b2fae72a67ff86b6c743f5e3c89dabe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
