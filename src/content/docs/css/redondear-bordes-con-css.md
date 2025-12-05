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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RUN3KG5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T015543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNITdeAEvLde%2BMhgDE%2FOPJZjfoLwljYEPsK7tnuAyCjAIhAMzzBh5pfYcoGNjDzb0HDEsTfff1YLC8ItfAYlPODDNzKv8DCE8QABoMNjM3NDIzMTgzODA1Igyo4PgqWAjqLnx%2BpUUq3APuQksb5oCFDbl05WAiQl5037c6ZGWSvd2QaAj0iOIN835YL06pVeYjbnaTnQ%2FCuEePK6pBdlus%2BlmxmpHa1kgvk2p8l9EhU%2FflxBMqB4Y3NqzMO%2BbnKSIyHGwURUh6Rl3HFTRpsQuasrZGiNGm9xUgMmO0fBVraFXQ%2FKVQccjxs%2F1gWjKSq%2BsgjpjZMFcpqDzRCld1NxSRPLvKvFXeFRPhAWf6%2B7P2Pl%2BSL%2FQSji4dGSikeEa8PzKOJaCL5%2BSyES%2BXY0%2B4swFEXB30SmBvwkkDgKmGoiB9uGpRf3ry4vtlf9URlHNVb9pP0Ds5azS%2FWhoA4W3UzANVNSgZRbAxd1bi8fn9oKmdoVgffutcmhKfVCrdfJJdF2LnhU7FVV2u%2BvxB4nZGGimYMQfQ00QYQr6%2F6U3Pu1ZSSJHx3x%2B76JqJFVr3J3WIq8%2FofpUEIQ9y%2BvvGiBXT%2FRPMvgbhpdKGB533SXXbUh0Ry1QoYNZdod3F%2FaitQSB9SorPYVbU2wwzbcB6e7fmtPnmfgdeZyCgS52iFj9%2BW5BLvdpDM7%2BHNCE%2BmwYdVTxlLnGna2qSlOlq0ENN3hNH2pU5GulP2YkN6b8KeoPlG9qOJGxrnDsjySBiidKBx7nREGGqF2imfjC0jMjJBjqkAUeecGyVO4PMtyP29PUQod1TZJRv9oiu5AEuCVMEWudnfmLkMeOLKkQQICNW9seO9dJH0Jtq95oEacZ6V9K7Ktpgx8Yi%2F2s7SthBjAccibY4SLqgjpAqhDvkrXmNrsUBZvuio3JooULnItae%2F7m7oV7%2F4UKLWZ8bzVUt99DTdYi8Q1vhzRRwnFeklllIlTYKfjvq6nY8J2cnCBLMjmLxDiXf6hsv&X-Amz-Signature=f7d4f609725075e215f9fb653f1f9f0f79a2b324cc4c26330987f16cd8d43c11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RUN3KG5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T015543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNITdeAEvLde%2BMhgDE%2FOPJZjfoLwljYEPsK7tnuAyCjAIhAMzzBh5pfYcoGNjDzb0HDEsTfff1YLC8ItfAYlPODDNzKv8DCE8QABoMNjM3NDIzMTgzODA1Igyo4PgqWAjqLnx%2BpUUq3APuQksb5oCFDbl05WAiQl5037c6ZGWSvd2QaAj0iOIN835YL06pVeYjbnaTnQ%2FCuEePK6pBdlus%2BlmxmpHa1kgvk2p8l9EhU%2FflxBMqB4Y3NqzMO%2BbnKSIyHGwURUh6Rl3HFTRpsQuasrZGiNGm9xUgMmO0fBVraFXQ%2FKVQccjxs%2F1gWjKSq%2BsgjpjZMFcpqDzRCld1NxSRPLvKvFXeFRPhAWf6%2B7P2Pl%2BSL%2FQSji4dGSikeEa8PzKOJaCL5%2BSyES%2BXY0%2B4swFEXB30SmBvwkkDgKmGoiB9uGpRf3ry4vtlf9URlHNVb9pP0Ds5azS%2FWhoA4W3UzANVNSgZRbAxd1bi8fn9oKmdoVgffutcmhKfVCrdfJJdF2LnhU7FVV2u%2BvxB4nZGGimYMQfQ00QYQr6%2F6U3Pu1ZSSJHx3x%2B76JqJFVr3J3WIq8%2FofpUEIQ9y%2BvvGiBXT%2FRPMvgbhpdKGB533SXXbUh0Ry1QoYNZdod3F%2FaitQSB9SorPYVbU2wwzbcB6e7fmtPnmfgdeZyCgS52iFj9%2BW5BLvdpDM7%2BHNCE%2BmwYdVTxlLnGna2qSlOlq0ENN3hNH2pU5GulP2YkN6b8KeoPlG9qOJGxrnDsjySBiidKBx7nREGGqF2imfjC0jMjJBjqkAUeecGyVO4PMtyP29PUQod1TZJRv9oiu5AEuCVMEWudnfmLkMeOLKkQQICNW9seO9dJH0Jtq95oEacZ6V9K7Ktpgx8Yi%2F2s7SthBjAccibY4SLqgjpAqhDvkrXmNrsUBZvuio3JooULnItae%2F7m7oV7%2F4UKLWZ8bzVUt99DTdYi8Q1vhzRRwnFeklllIlTYKfjvq6nY8J2cnCBLMjmLxDiXf6hsv&X-Amz-Signature=55f96d469df54a989800bbe2e02898e55c50d0c618b33d1d1418c57fd7744b28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
