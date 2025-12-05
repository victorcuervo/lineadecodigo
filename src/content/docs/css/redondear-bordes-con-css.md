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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BOIMLUN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T073250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB7dXkZpXu%2BeO%2BaSDb3KNvEYxHYDVFFicwqondh0bX3DAiEArBMZlyVqIYDFi7ZCasDpEgos6v3umEzN%2F%2FTgIrtzMzAq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDEzIYCRSkgq6rNpXsSrcA0GcTGDYd1eiYhq9ceUq6PWo6L3c3U2z8Z5x1Q54Pzz51bolWRdGfLF7%2F%2BG6ri6kO9O%2F99%2F69kE8ug2E6WzC3l2O1hAiASs3mdX87i%2Fv4KPSFX03HklhVjy1BrlFCXvMVX5EfTUKDMlvlx5F7oLjSSLnWdbeWzmglS5SRiHabHo0%2BgUWs6QUXjMQj5DL7Ng1D%2FW%2BbKmF3BOJD2d85zBaNaYI6zKRb0ooptSAIxKO2m6ZMGmGQnOwsWaHbYS4FyNgp6WiFfdGAOKfRY6gkW0EwxGY5q53P%2BTNeUgFPjZ%2BL0oNGFI%2FnpMxLbwv37hyMA4KgNGrqszLOwTbcGHkZNq%2B%2BxDqVAL6xVSwj8wWgTV8Rn%2F8D3E63UnULIO8A%2FJePd%2B%2BaieM1wK7OsEvEYN%2FVpICPm%2BHc7ouME2BiWzdCKbwgo9BvUnw1FuGtpl6w%2F1C5F4EQIg93%2FZw2F%2F4oVYg58VA2X%2BLq%2BvC9w9eNDIuRanLZJi46SAQxaEW4yxC6bLzo1naL7ZgiXNTs2454PBM1NObww5RToa7HoLT5izNvXAxlM9D9YccTELkEEhONhxs1dMKjQJoySqD9ggKSBIeU6A10R1w7Dlvw0rong0gbwBk2btLpuXqdTMrO0C%2Fjp%2B3MNmqyckGOqUBe%2BcLKIO2ox1%2FqPsO2ETh3LLWs0ZNJ0gvYFPREoffMzw%2Bn0CD%2BWF1ohKZc0dqF0QxwkNK0QWSqzA7REBZyuVPEWGn5nDqrUFvWWWVrFOSA%2FDdMTiMGhGTgigkDH1BC92jd5tdB69vDtB3ZxOcxvvYqHAMQH8bP%2BYxP8%2FHB8286cWywT7Necx%2F3NVrhHK7uraD9JSPwXkK55HPM0a0Ff5W6YAdBxy4&X-Amz-Signature=aff855ece10f5210f1effed8a6900a5643da1f9143c9ef190d5bc036bee7f778&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BOIMLUN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T073250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB7dXkZpXu%2BeO%2BaSDb3KNvEYxHYDVFFicwqondh0bX3DAiEArBMZlyVqIYDFi7ZCasDpEgos6v3umEzN%2F%2FTgIrtzMzAq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDEzIYCRSkgq6rNpXsSrcA0GcTGDYd1eiYhq9ceUq6PWo6L3c3U2z8Z5x1Q54Pzz51bolWRdGfLF7%2F%2BG6ri6kO9O%2F99%2F69kE8ug2E6WzC3l2O1hAiASs3mdX87i%2Fv4KPSFX03HklhVjy1BrlFCXvMVX5EfTUKDMlvlx5F7oLjSSLnWdbeWzmglS5SRiHabHo0%2BgUWs6QUXjMQj5DL7Ng1D%2FW%2BbKmF3BOJD2d85zBaNaYI6zKRb0ooptSAIxKO2m6ZMGmGQnOwsWaHbYS4FyNgp6WiFfdGAOKfRY6gkW0EwxGY5q53P%2BTNeUgFPjZ%2BL0oNGFI%2FnpMxLbwv37hyMA4KgNGrqszLOwTbcGHkZNq%2B%2BxDqVAL6xVSwj8wWgTV8Rn%2F8D3E63UnULIO8A%2FJePd%2B%2BaieM1wK7OsEvEYN%2FVpICPm%2BHc7ouME2BiWzdCKbwgo9BvUnw1FuGtpl6w%2F1C5F4EQIg93%2FZw2F%2F4oVYg58VA2X%2BLq%2BvC9w9eNDIuRanLZJi46SAQxaEW4yxC6bLzo1naL7ZgiXNTs2454PBM1NObww5RToa7HoLT5izNvXAxlM9D9YccTELkEEhONhxs1dMKjQJoySqD9ggKSBIeU6A10R1w7Dlvw0rong0gbwBk2btLpuXqdTMrO0C%2Fjp%2B3MNmqyckGOqUBe%2BcLKIO2ox1%2FqPsO2ETh3LLWs0ZNJ0gvYFPREoffMzw%2Bn0CD%2BWF1ohKZc0dqF0QxwkNK0QWSqzA7REBZyuVPEWGn5nDqrUFvWWWVrFOSA%2FDdMTiMGhGTgigkDH1BC92jd5tdB69vDtB3ZxOcxvvYqHAMQH8bP%2BYxP8%2FHB8286cWywT7Necx%2F3NVrhHK7uraD9JSPwXkK55HPM0a0Ff5W6YAdBxy4&X-Amz-Signature=d02d1c72f9a9e43b8d75334feac55bede95d53650853788d59800cde6efd94f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
