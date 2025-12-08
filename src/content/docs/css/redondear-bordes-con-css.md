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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JQKLESJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T215759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv9i35kwSmvuqfhvdXNQ9Gjba1K%2BT%2FBq8zQinNMaIrqgIgIsBdwC4UCUzpVyT%2FbHC5JIp%2FwwTKTQ7KTv4GsuGrBLsqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMTZGQhqViV1GTo6gCrcAyED0CPjuVI3rrKZXpmtivu02uoNbfHQVEXt0P387UjSogJ79JEUydsxQ8xEoIlgGgt5gC530MBDfmtxxW8T6wY2sFhD9PfuPJoJO4%2Bmppm8TbE7SC8kFWuT5kjndSpAzrLR3U9lB8zvZgNw63JsGi0OLovaMQp6086xn403TPn9VVFeYTaVISDt%2ByaCBmArOJy6G91VAiMad5O3LixBX5HVZ5xt8zaQOPUTcFTl1dnmItnnh5KjMOXMolloYa3qheXATBW6XaXyJQDhahAs39k52lnniLaZ5g19p%2FvZhQHgYZZ%2BYSZEGqqUczGZLe7p6mc77UFIDS%2F%2FgrTNpQ3BRTjU%2FAr%2BHZbblEsGiWvJDFhBudafyEBWMedbpSmmruWZ2P5zH%2B%2FSqxJgAr26YVXRjfGlhQaxK%2F7yUu4NTVd0vxEezi%2BA7NIaLpkzj%2FUT%2FgeDsVHu2404feMXZmPimIytiI0x2mNZ0%2BLur9i2ZvjnmjAp3%2BlyXQDoBad3Xyhx%2BIbTljQAbDuEPUFUZIXkzO%2B7qxCnb75C7v58ft%2BxJKGhZSjofiCl49twncFl8fS04sHaahyjfO5uXmUIqHkReR8Z6Vrc3Nq9AZFz1yjPXHyf3Lcj11vRM3w%2BwBxeml1pMJ6A3ckGOqUB%2BRhi1OYyO43vJqVO4vzJBoehkB61Swn2kl1vTZjMQnsprLhghJxzNSyEjR3616TR6MwQMz1A3BhdfJbBIuoxlI4Vr8bQ%2FWQcmBp%2F%2BtLoHvpU8I8jH2Qf0JqtrzEV5HkX6B8B40K0aYp05dUYMc5Yod%2FTfaijQlq6JWjt0jjmvdLe9U2frwSG0KtKriXH7akA8VUr1klSloqfl%2BhFk9a1ECDwgJPc&X-Amz-Signature=144f8dc8f7c2079cf654c1690740e723524194faec6447c8655a8c3a7d09b024&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JQKLESJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T215759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv9i35kwSmvuqfhvdXNQ9Gjba1K%2BT%2FBq8zQinNMaIrqgIgIsBdwC4UCUzpVyT%2FbHC5JIp%2FwwTKTQ7KTv4GsuGrBLsqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMTZGQhqViV1GTo6gCrcAyED0CPjuVI3rrKZXpmtivu02uoNbfHQVEXt0P387UjSogJ79JEUydsxQ8xEoIlgGgt5gC530MBDfmtxxW8T6wY2sFhD9PfuPJoJO4%2Bmppm8TbE7SC8kFWuT5kjndSpAzrLR3U9lB8zvZgNw63JsGi0OLovaMQp6086xn403TPn9VVFeYTaVISDt%2ByaCBmArOJy6G91VAiMad5O3LixBX5HVZ5xt8zaQOPUTcFTl1dnmItnnh5KjMOXMolloYa3qheXATBW6XaXyJQDhahAs39k52lnniLaZ5g19p%2FvZhQHgYZZ%2BYSZEGqqUczGZLe7p6mc77UFIDS%2F%2FgrTNpQ3BRTjU%2FAr%2BHZbblEsGiWvJDFhBudafyEBWMedbpSmmruWZ2P5zH%2B%2FSqxJgAr26YVXRjfGlhQaxK%2F7yUu4NTVd0vxEezi%2BA7NIaLpkzj%2FUT%2FgeDsVHu2404feMXZmPimIytiI0x2mNZ0%2BLur9i2ZvjnmjAp3%2BlyXQDoBad3Xyhx%2BIbTljQAbDuEPUFUZIXkzO%2B7qxCnb75C7v58ft%2BxJKGhZSjofiCl49twncFl8fS04sHaahyjfO5uXmUIqHkReR8Z6Vrc3Nq9AZFz1yjPXHyf3Lcj11vRM3w%2BwBxeml1pMJ6A3ckGOqUB%2BRhi1OYyO43vJqVO4vzJBoehkB61Swn2kl1vTZjMQnsprLhghJxzNSyEjR3616TR6MwQMz1A3BhdfJbBIuoxlI4Vr8bQ%2FWQcmBp%2F%2BtLoHvpU8I8jH2Qf0JqtrzEV5HkX6B8B40K0aYp05dUYMc5Yod%2FTfaijQlq6JWjt0jjmvdLe9U2frwSG0KtKriXH7akA8VUr1klSloqfl%2BhFk9a1ECDwgJPc&X-Amz-Signature=48c601a4a2ee9649e74aa5fe7a635c872ea2bc254d335b720b146995153640c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
