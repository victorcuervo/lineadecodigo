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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC66AZ4N%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIBVwKfQNI5pR%2BAZyFstPUDJlOinLB0Sxh5ol4yvvRG3OAiAIfoXNHFYasKNLT%2FTHVdSf%2B%2BcQxvJUUkdfRADf3Wcf9yr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMcpsjNt%2BK8vUB87Y8KtwDxYoT0bE8UzQ1rp2bgP%2BFXVLyKFDihBio4kMzz7mjcimU4ou%2BxF%2FL%2FjjpqBsdTo7kw%2F5c4nNEYX25Mw7GBFCK8PHTfA21pDllzCDlGkZDxMHBTYfca9l7pAt7lBrM0nM587FSQvBx300jagQPL3t8mT0lk4sawGUDRJiDw8xOa5Wpq9LPl0TInNwKXyGlxPC76wJLCaljn080JuNFesu%2BdwkbgJCZZLozyqqa%2FbyFcVQqZUwz2K8hsKXdqn5CQ9Mnq6fVYuKg6aSzeGT4dqXP4bv2kVC9H8STZ2KJZGBtymtJBFn1d8S1ESyoJaPGmuiAt5IZvMh9D91O4AoTlJaWaGOAX2A26AEV%2BqswdU5VE25q%2BQd78DLiHrzgnTmfcdjPbJgKNbybEEvjZbHbbhSwJX02yXNNJIxHlNCLWMthmEUhST%2FAy5nf8cz%2F%2BqkAX60sVI7Ir%2FlK1NVQhebATpgwO0B8ymsxRR2kBKZyhHIPqQmmC3cR0HfEqoPK%2Fw%2F%2FiqcG8Ba03aclusnwNc1ffsTFM49OVEsy1UT91tabYgAWsukxlmlBc5bTsaoU%2BpxPxuv8A7%2Bu5diqY2Z4UJS%2B8KdNP%2B3mBDmn7xW2HKg88s9j6%2B2UbQyIvCGOSlv9wi4w6ZTDyQY6pgFad8ysKCMeKL1Lvz34th4upICkCqVWE3vzAwiRu5ld9W%2F48b20i9530xXPbIsxCEARcS0UlzzhxUkXridgaHl59zOdLGOffmc9zUqJmfPmxchMt6in7qT%2BUm8ostlK%2Fbz8IKWr7YsGFzCQIDJuzMck%2Fmp7JtUqIhCaraFiK4aoqz6warglOXTsAsB5y177lHWpDlrr%2FZkciefgt9an4%2BwRYB7C%2FRK3&X-Amz-Signature=7b0e19143463804d28587ed3e1ba2473a829bef2451724c6e8f191c21ab33479&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC66AZ4N%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIBVwKfQNI5pR%2BAZyFstPUDJlOinLB0Sxh5ol4yvvRG3OAiAIfoXNHFYasKNLT%2FTHVdSf%2B%2BcQxvJUUkdfRADf3Wcf9yr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMcpsjNt%2BK8vUB87Y8KtwDxYoT0bE8UzQ1rp2bgP%2BFXVLyKFDihBio4kMzz7mjcimU4ou%2BxF%2FL%2FjjpqBsdTo7kw%2F5c4nNEYX25Mw7GBFCK8PHTfA21pDllzCDlGkZDxMHBTYfca9l7pAt7lBrM0nM587FSQvBx300jagQPL3t8mT0lk4sawGUDRJiDw8xOa5Wpq9LPl0TInNwKXyGlxPC76wJLCaljn080JuNFesu%2BdwkbgJCZZLozyqqa%2FbyFcVQqZUwz2K8hsKXdqn5CQ9Mnq6fVYuKg6aSzeGT4dqXP4bv2kVC9H8STZ2KJZGBtymtJBFn1d8S1ESyoJaPGmuiAt5IZvMh9D91O4AoTlJaWaGOAX2A26AEV%2BqswdU5VE25q%2BQd78DLiHrzgnTmfcdjPbJgKNbybEEvjZbHbbhSwJX02yXNNJIxHlNCLWMthmEUhST%2FAy5nf8cz%2F%2BqkAX60sVI7Ir%2FlK1NVQhebATpgwO0B8ymsxRR2kBKZyhHIPqQmmC3cR0HfEqoPK%2Fw%2F%2FiqcG8Ba03aclusnwNc1ffsTFM49OVEsy1UT91tabYgAWsukxlmlBc5bTsaoU%2BpxPxuv8A7%2Bu5diqY2Z4UJS%2B8KdNP%2B3mBDmn7xW2HKg88s9j6%2B2UbQyIvCGOSlv9wi4w6ZTDyQY6pgFad8ysKCMeKL1Lvz34th4upICkCqVWE3vzAwiRu5ld9W%2F48b20i9530xXPbIsxCEARcS0UlzzhxUkXridgaHl59zOdLGOffmc9zUqJmfPmxchMt6in7qT%2BUm8ostlK%2Fbz8IKWr7YsGFzCQIDJuzMck%2Fmp7JtUqIhCaraFiK4aoqz6warglOXTsAsB5y177lHWpDlrr%2FZkciefgt9an4%2BwRYB7C%2FRK3&X-Amz-Signature=5eabca455e67162f4ba9fea604fe18ebf7d10080184a613b0ef4fe10e6468048&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
