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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBHEGJVP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHAsnXHC0sBRaCGfckoi7xlA1L8ObvRrhthgUYbSLLBAiBloLlEnCpC8sn9WuufqhI8Bg13UHbB6%2BUtKc1z0loXwiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwUsDu7%2BKwF%2FYy5O%2FKtwDNclL8yY3yRvlCDRILDieGzIw5u6%2FFKdCqwFyFhkkbC0dNFzZpn5X6kwQzGt9F01bMBhFSgD2aYt%2FFe688K5NSUhnHdbRwetZ%2BFobWK4UJ2c6BO5beQQ5SN%2FMX1psCg5o43kflolndqGAjtZlmF0O%2BahSPiMsrrpWboN%2F3XuvJ5T9jNRJFRN83csDbz8XRosRdV4nHm4jaSUIDVybxUlnt6XcaYmwh%2F3eKXHJABmJ8G%2FxHhqH%2BKrD7NG1u%2FhzDPqGUWPTCeX5p2%2FG9%2B5gW4fwuJtm1zWAAD0jUKwm32hN0s8U2r5TUaNSQU0Be4uSYMYu6Ng886NjUCN%2B3RB3pl2T2KPXPS%2B0n2DIghtN1x7LsvPBveXHQLL6kSqSXoc1DJtdLaRKjI5TWodDTpQ44QC1SZ4nAEEI6cpzSbXbfYdh2sFYaK%2BHOED25JQwB9yFx30kJSB%2FpH8%2BQwqGEsxZJ0Z7GL5juZxqdnz0qAoTpBN7hKXe5YBn%2F8HhoIadFYF9GE8twVuH9tz0BBYfU5UAef97m1BKQpdNCGyGQRu1M6%2BnKrYIPs9RYBo0Uh%2FCHnfvYFVLwYt8vjEAs%2BdOSbfM1GYXU98ssoFgyJErNjhCi4YVoGRVN0i%2Fwsg5qlEFtc8wkoGLygY6pgFn3uYamtxr7ZT46i399%2FNb7ivba23PjIPmlPBkAVcj5dtdw7yzypbSgqa%2FAaeQzjqzLd8xijqp2FiUvSUTg1tGxvhZrVBikHNG8Fdlf%2BzoAVlcXoqLRJ6O%2FYkP0DRpvGRcsswfnT7e1XaWv%2B3z7OlLB4N9bL%2BUEbv20dvNFDe%2FDql4iKQ1betw%2F4%2FSavwMQtQTCg9MHgoT3rJcSi2bAixEMGomq0el&X-Amz-Signature=69c6085c3e86ca83dd0fb5e9bc6846e116116bbba782f7f66361ec34e612f474&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBHEGJVP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHAsnXHC0sBRaCGfckoi7xlA1L8ObvRrhthgUYbSLLBAiBloLlEnCpC8sn9WuufqhI8Bg13UHbB6%2BUtKc1z0loXwiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwUsDu7%2BKwF%2FYy5O%2FKtwDNclL8yY3yRvlCDRILDieGzIw5u6%2FFKdCqwFyFhkkbC0dNFzZpn5X6kwQzGt9F01bMBhFSgD2aYt%2FFe688K5NSUhnHdbRwetZ%2BFobWK4UJ2c6BO5beQQ5SN%2FMX1psCg5o43kflolndqGAjtZlmF0O%2BahSPiMsrrpWboN%2F3XuvJ5T9jNRJFRN83csDbz8XRosRdV4nHm4jaSUIDVybxUlnt6XcaYmwh%2F3eKXHJABmJ8G%2FxHhqH%2BKrD7NG1u%2FhzDPqGUWPTCeX5p2%2FG9%2B5gW4fwuJtm1zWAAD0jUKwm32hN0s8U2r5TUaNSQU0Be4uSYMYu6Ng886NjUCN%2B3RB3pl2T2KPXPS%2B0n2DIghtN1x7LsvPBveXHQLL6kSqSXoc1DJtdLaRKjI5TWodDTpQ44QC1SZ4nAEEI6cpzSbXbfYdh2sFYaK%2BHOED25JQwB9yFx30kJSB%2FpH8%2BQwqGEsxZJ0Z7GL5juZxqdnz0qAoTpBN7hKXe5YBn%2F8HhoIadFYF9GE8twVuH9tz0BBYfU5UAef97m1BKQpdNCGyGQRu1M6%2BnKrYIPs9RYBo0Uh%2FCHnfvYFVLwYt8vjEAs%2BdOSbfM1GYXU98ssoFgyJErNjhCi4YVoGRVN0i%2Fwsg5qlEFtc8wkoGLygY6pgFn3uYamtxr7ZT46i399%2FNb7ivba23PjIPmlPBkAVcj5dtdw7yzypbSgqa%2FAaeQzjqzLd8xijqp2FiUvSUTg1tGxvhZrVBikHNG8Fdlf%2BzoAVlcXoqLRJ6O%2FYkP0DRpvGRcsswfnT7e1XaWv%2B3z7OlLB4N9bL%2BUEbv20dvNFDe%2FDql4iKQ1betw%2F4%2FSavwMQtQTCg9MHgoT3rJcSi2bAixEMGomq0el&X-Amz-Signature=db4a877015fb7310548804ae254bd4638cffefca1657777b4681bd9c3304f11c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
