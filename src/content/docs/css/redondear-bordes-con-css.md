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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WROBT5DP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T104948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMfNc7QlXQXCrHedrCD6oIpubG%2BdyF2dQuRF7TenBGAQIhAL7n8C2VfqDC58shbF5Oxyh7xbPC2xblDJElvI9bMzkEKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNEPSZEhXqm9M2HTcq3AOkWeK7ipFulhldZCh1wIrOketMP0TT7SccalKykwOhf1Sy0b8CPH%2BHK6CisUfLGwIKq2ipm3NTc1bfUsWREb4Ci5njctaAgTiO255yNpFljqp6aU8%2FHcet7NtWYJSXhn35dDfAjWSKDolAFcxHN1Eqlwr5ImRM%2FNp5xMBbacU4nuf6hn6upGsf7qfkqAOwpeWZYSNqJSsPCbYRIBIE5UMRZ448TiDfHyZBt0clPJUqZUOHDCncWcnTdixlYYlkIlKZp91hY3HFqbmayTD0W7hePCu%2F3hhb6W0ZlBak%2FDr6M0hoK6fTE7NnZlRqZ%2BotMj%2Fw1ZxhyPZxvHhBl7KGbQcw7KORjFN7l2YCwIIpr%2FfQegpPXZoD3i5KAfm2PxfaCSi6sb76tCrXI%2F7PbI0uV5s0IunOc4E6o9Waa2iRliV3SFHbcECxpUFqIrSxW%2BCAyp4hbSmlE6ywiffGzJVOdH82rbusxTwGyVqzk9RWPIHTLIovDaJedOceAf8e37ne1uT0Dcfp1Zo7ZPgeCIs4nllUOi7rzXDLIRBv0Fs2OjrW00XADi9I2kwbKp5UnMGhPbc6Is%2Bp%2B9DahVdPoTL8Gwr5WKa0t9MX3sH0wHcGQZ4L%2FSIiqJtvcbw%2BaJv2fDCY7tnJBjqkASFsu%2FhJ04WXy02EQqSjuhl3ApK4CkHIY%2FXOL%2ByZKYklmZCgRagpLGZe8yjvMNKzt0bQYhzeY8Gli%2FDOKLE9bTvv0qlrn40Wuvdp0ICdlJcKCCpX3yAaOxpoPfGop5rOakQ6uFpfbKPa2%2BhlCIsDknUy9C%2FUc8oJueebeqMePspH7rGZGXLR5SqYeTfEqrT3RJKsnCTw8lX1eGmZLrGgHTyfALOF&X-Amz-Signature=4488e60b7ef2772a1c98dfd62dad50986d5ebee598666880b6cabaff0ed0bab7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WROBT5DP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T104948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMfNc7QlXQXCrHedrCD6oIpubG%2BdyF2dQuRF7TenBGAQIhAL7n8C2VfqDC58shbF5Oxyh7xbPC2xblDJElvI9bMzkEKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNEPSZEhXqm9M2HTcq3AOkWeK7ipFulhldZCh1wIrOketMP0TT7SccalKykwOhf1Sy0b8CPH%2BHK6CisUfLGwIKq2ipm3NTc1bfUsWREb4Ci5njctaAgTiO255yNpFljqp6aU8%2FHcet7NtWYJSXhn35dDfAjWSKDolAFcxHN1Eqlwr5ImRM%2FNp5xMBbacU4nuf6hn6upGsf7qfkqAOwpeWZYSNqJSsPCbYRIBIE5UMRZ448TiDfHyZBt0clPJUqZUOHDCncWcnTdixlYYlkIlKZp91hY3HFqbmayTD0W7hePCu%2F3hhb6W0ZlBak%2FDr6M0hoK6fTE7NnZlRqZ%2BotMj%2Fw1ZxhyPZxvHhBl7KGbQcw7KORjFN7l2YCwIIpr%2FfQegpPXZoD3i5KAfm2PxfaCSi6sb76tCrXI%2F7PbI0uV5s0IunOc4E6o9Waa2iRliV3SFHbcECxpUFqIrSxW%2BCAyp4hbSmlE6ywiffGzJVOdH82rbusxTwGyVqzk9RWPIHTLIovDaJedOceAf8e37ne1uT0Dcfp1Zo7ZPgeCIs4nllUOi7rzXDLIRBv0Fs2OjrW00XADi9I2kwbKp5UnMGhPbc6Is%2Bp%2B9DahVdPoTL8Gwr5WKa0t9MX3sH0wHcGQZ4L%2FSIiqJtvcbw%2BaJv2fDCY7tnJBjqkASFsu%2FhJ04WXy02EQqSjuhl3ApK4CkHIY%2FXOL%2ByZKYklmZCgRagpLGZe8yjvMNKzt0bQYhzeY8Gli%2FDOKLE9bTvv0qlrn40Wuvdp0ICdlJcKCCpX3yAaOxpoPfGop5rOakQ6uFpfbKPa2%2BhlCIsDknUy9C%2FUc8oJueebeqMePspH7rGZGXLR5SqYeTfEqrT3RJKsnCTw8lX1eGmZLrGgHTyfALOF&X-Amz-Signature=c609f6fe340af5d94aec00eb6cb76493a2298f3e75b0ee214039aca78c4c2be9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
