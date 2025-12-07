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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ76V7X3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T065602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx1hU4Krb9BjsshJnSlrXhUaaM6v%2F39bl22NaS1NzrgQIgSD7ZHWyKGFxyQqD6CAwiZyrN%2Bem8Z1wwzvkCWgEdOr8qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFlgaGQgzPWi63mj%2BircA5LeIo4o%2BU7s53sqIz5FJSb6mZBK2mXTGLjO7ZQ6PNKYmoSmoTzQycufNaZVpEjTQEDY5MnEVujeOgJC%2F120OyC9edi7zt7n9WTARcPhzivGi%2FurBPHuKAdF3Yy0ar75KARdDY4KCCc%2FLyOAVm%2B71%2Bh2QHG%2B4DhkSVp36Z%2Fsvx%2FiFXPo6UFJyRH8k5Ro7J8ZOSBJwDMBh9UQkKjvn%2BffHtyiSq%2BvmdlwZtpgzHiTMFOZ0stgTLPyU1WTl73ScogmaXsSb3J83pAF9%2FxXdX9CZ%2FGuoJUP33VRFnFBa16kd54%2FRlNACMWqh57nhpeHPoTwHZpa9Fz6lsyCNw4l8Og0DuUeHysQZGLZJoYTsZv3N94E%2BcVtBQ%2B5Q1AeweaGMD6qOKtZS6%2BBslyyIopmhbmMg3073lwFobUGmYhGNQR4DcPQ2wiNQ4iLzD0stDDs%2FhcD2okn6uQCGcO4t%2FlUMfdC4oNaocsz7Wxwwf4j6f7VPuldxfHtt7CuuwQAp7jnEB%2FWwcFWZuqsWIcAUvq0MGyjy53ADA7SM0m7Jes1KTuWxyhOemutbePhLvGOLxxhYQnQJ7bSbTQuyYjcKX1FhBwKdb7HhVRjqJm2V6chLbiIHQ9V5QQsAy%2F1ClkEaSIFMKWZ1MkGOqUB1eTC3bYo03P1bNtJi%2FLOmAIekdRzA4OsU8nT8l5KX5aEtvelJAykHsKq1WNdBXkPdL6K66tovVzDXKmdZ4uP7unrb3DQhB%2BDzg8THRk7cZTMYReNk2BKsVqG%2BOSzKoSh5Mz%2BEbcuY8pD04f6LvcgkBdR%2FRdJs6KjLTxFD%2FH0eHF6DRime00khE0PEe7umARC6T3%2FTPuAtBEaAaLB%2FAvOp2otsVDi&X-Amz-Signature=5fee59d7e8a1cf8455822caa1505f982850f982b8ffc32108f899b2779722033&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ76V7X3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T065602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx1hU4Krb9BjsshJnSlrXhUaaM6v%2F39bl22NaS1NzrgQIgSD7ZHWyKGFxyQqD6CAwiZyrN%2Bem8Z1wwzvkCWgEdOr8qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFlgaGQgzPWi63mj%2BircA5LeIo4o%2BU7s53sqIz5FJSb6mZBK2mXTGLjO7ZQ6PNKYmoSmoTzQycufNaZVpEjTQEDY5MnEVujeOgJC%2F120OyC9edi7zt7n9WTARcPhzivGi%2FurBPHuKAdF3Yy0ar75KARdDY4KCCc%2FLyOAVm%2B71%2Bh2QHG%2B4DhkSVp36Z%2Fsvx%2FiFXPo6UFJyRH8k5Ro7J8ZOSBJwDMBh9UQkKjvn%2BffHtyiSq%2BvmdlwZtpgzHiTMFOZ0stgTLPyU1WTl73ScogmaXsSb3J83pAF9%2FxXdX9CZ%2FGuoJUP33VRFnFBa16kd54%2FRlNACMWqh57nhpeHPoTwHZpa9Fz6lsyCNw4l8Og0DuUeHysQZGLZJoYTsZv3N94E%2BcVtBQ%2B5Q1AeweaGMD6qOKtZS6%2BBslyyIopmhbmMg3073lwFobUGmYhGNQR4DcPQ2wiNQ4iLzD0stDDs%2FhcD2okn6uQCGcO4t%2FlUMfdC4oNaocsz7Wxwwf4j6f7VPuldxfHtt7CuuwQAp7jnEB%2FWwcFWZuqsWIcAUvq0MGyjy53ADA7SM0m7Jes1KTuWxyhOemutbePhLvGOLxxhYQnQJ7bSbTQuyYjcKX1FhBwKdb7HhVRjqJm2V6chLbiIHQ9V5QQsAy%2F1ClkEaSIFMKWZ1MkGOqUB1eTC3bYo03P1bNtJi%2FLOmAIekdRzA4OsU8nT8l5KX5aEtvelJAykHsKq1WNdBXkPdL6K66tovVzDXKmdZ4uP7unrb3DQhB%2BDzg8THRk7cZTMYReNk2BKsVqG%2BOSzKoSh5Mz%2BEbcuY8pD04f6LvcgkBdR%2FRdJs6KjLTxFD%2FH0eHF6DRime00khE0PEe7umARC6T3%2FTPuAtBEaAaLB%2FAvOp2otsVDi&X-Amz-Signature=1a611b00c13da6be520de7eb7a1331728b322fd1cc9a43128b99383bd70372db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
