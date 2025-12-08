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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJWPAX55%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T113242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFXOIQFdC%2BxvgcpbLXnLixAWOijGZcwxTkk53npVpQJAiEAxPUJFxSx%2FktDG5oAPjv4aadt2Rb5quB8aBeuWcWBiZ4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwUr6JHNqwfTOTYdyrcAxPOZIdYUlzskft1y2cb%2F5zZWsFl9FFJyZuhf1skWoqEz6Gai%2FvYo0hETuwgre%2FWOhM3RYXApWO%2FVq8GznaFuMtAXTkNjlX%2BTxGYH4awVBCXZl8WPe0zH9%2BHTU2rTsKwvmnvzPZYpt8TTyDGtNo%2Fotw7IlCW6hlrW7iD%2BFCMLy%2Fja%2FIRO6iJq0ElnlKuk%2BOetGzp%2F7cDXIQL6AEGnI2bnC93SfSt1D8%2BVPIxdqHongq4%2BfyghoEFUE6x1ZidaR%2FenFizut6J6xeYaO0I%2BKK1TLXufRs93zKiOWJq4ZtmdXDNNpgBlaAViFm%2B8ma3MrwvxovBvZl78mBbmN50EvCdI9hy%2FpJNl783kXhnDSxPiWW3IjxQ%2FW%2FoCor7raumAD7YUUz2C1O4cb9vT8u2Fr1Tx8Jy6pgnqaC2Tiyys491qTo3cKnIIIsTd3GFnk9PC%2FJcWCD047zIM9DAT19tdcEelBHSSLNyJPcQ%2BI3%2F%2F5odt4EVo%2BZGuNNZM6tJtVxqTw965%2Fw6o06xJHVL12Em1QnLFMEr1FqNRyEtozuzdHemTnDpZTal81XfEPcxrhSQL6TJ%2F50wzWzDxkj0v8wbfHKyEVGe%2Bh0NiWgTaK9mac2QiS6Zammdjh3gkiHDAq3YMNXt2ckGOqUBLnUUH44LqOMiVZfJ1cljZP433Dd9DekhTidATHPFCeZV150WSUE%2FwO%2Fo2%2Fm5TO4WSzgw7nMhLuqe31VfzeKjN1gALTc%2FSA4Y63pqUEMh6Lgs9v%2FqHTh6oErZ%2BIb%2B164ls7oee9hRqgDof4wcnlTJRz9eTDHT%2FPYPOmqK7EIO6K%2FvRDLTyKwTYR0hooeqbo0K2NhaOL3fvzsWQR9nMh6bbk%2BLg7xK&X-Amz-Signature=66aa44f56e0b4d808a062c3194b19ac8fcd006a7a0d5ffbed6a82bf1eed6734b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJWPAX55%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T113242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFXOIQFdC%2BxvgcpbLXnLixAWOijGZcwxTkk53npVpQJAiEAxPUJFxSx%2FktDG5oAPjv4aadt2Rb5quB8aBeuWcWBiZ4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwUr6JHNqwfTOTYdyrcAxPOZIdYUlzskft1y2cb%2F5zZWsFl9FFJyZuhf1skWoqEz6Gai%2FvYo0hETuwgre%2FWOhM3RYXApWO%2FVq8GznaFuMtAXTkNjlX%2BTxGYH4awVBCXZl8WPe0zH9%2BHTU2rTsKwvmnvzPZYpt8TTyDGtNo%2Fotw7IlCW6hlrW7iD%2BFCMLy%2Fja%2FIRO6iJq0ElnlKuk%2BOetGzp%2F7cDXIQL6AEGnI2bnC93SfSt1D8%2BVPIxdqHongq4%2BfyghoEFUE6x1ZidaR%2FenFizut6J6xeYaO0I%2BKK1TLXufRs93zKiOWJq4ZtmdXDNNpgBlaAViFm%2B8ma3MrwvxovBvZl78mBbmN50EvCdI9hy%2FpJNl783kXhnDSxPiWW3IjxQ%2FW%2FoCor7raumAD7YUUz2C1O4cb9vT8u2Fr1Tx8Jy6pgnqaC2Tiyys491qTo3cKnIIIsTd3GFnk9PC%2FJcWCD047zIM9DAT19tdcEelBHSSLNyJPcQ%2BI3%2F%2F5odt4EVo%2BZGuNNZM6tJtVxqTw965%2Fw6o06xJHVL12Em1QnLFMEr1FqNRyEtozuzdHemTnDpZTal81XfEPcxrhSQL6TJ%2F50wzWzDxkj0v8wbfHKyEVGe%2Bh0NiWgTaK9mac2QiS6Zammdjh3gkiHDAq3YMNXt2ckGOqUBLnUUH44LqOMiVZfJ1cljZP433Dd9DekhTidATHPFCeZV150WSUE%2FwO%2Fo2%2Fm5TO4WSzgw7nMhLuqe31VfzeKjN1gALTc%2FSA4Y63pqUEMh6Lgs9v%2FqHTh6oErZ%2BIb%2B164ls7oee9hRqgDof4wcnlTJRz9eTDHT%2FPYPOmqK7EIO6K%2FvRDLTyKwTYR0hooeqbo0K2NhaOL3fvzsWQR9nMh6bbk%2BLg7xK&X-Amz-Signature=023582be714c990110a5cbc99e40031dc54c9479837fd165894e161592883356&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
