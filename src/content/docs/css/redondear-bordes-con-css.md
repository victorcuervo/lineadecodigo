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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUDWTE7Q%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDXRDC8g%2BLhk%2BcCs7BwEsxK6sOeFZ3IaX5tgYbT%2BQm3vgIhAOVmDMn0%2FdMJjtJdxSpRoGEplwBw88jOYGf%2Fqrnrv5XtKv8DCEYQABoMNjM3NDIzMTgzODA1Igz07neout%2BeLAz0gLwq3AOoqMFE7%2Fl1WkvoxOK976kxPhSWmBULVUeeuVyR3m%2FCHG2dH7JuSE3tryoUe7DzmsopleOM6%2FZdjI67Cr8rKsH%2FgtxLK9WYUCAuZezecV2zQ74Q0cLHUI32M758PiOlAY0txT1TOp4afBg6zBJj%2FKxNDWYF8ptdmmCaOH8%2Fdw7uG%2BymhhpwUXLx88HjQGCFsjF9iarfRtN%2BatTkDtdeSb%2BIXfoVnFcEiww%2BB1E1RlDmfT28e4IkZMZVWnEqErvspgaBZj%2Bh8P5dujCHp92uZUJQRg6fo3Y5pu8klh%2F0Rv5ksBfFIq8Zr2Gr4DYCziACaD1vJRq3RONoOmH1xAxrrraM4UkibmTopv9KNTY%2FPIVuNHhpnMIYV9mkZp9krD63QE7UBVzsjFzQDZsbDDvc%2BHcrlO%2F2OQzr3MJuKoeRsuzs74Ae5a%2FTvFYMZSIgWEgx6KL7BOUAn7Uz%2BPKYHL4ryDEP35w4HIYhk568GeRmz6%2BYKuwlnI%2BK%2FiNfQHz5HJ4ZeuweQlnG5tDLfd29FaKoVEXlLpqZOhnTXo2Jkmp97Hq%2BGsRR8zNf2jZ78Orgojgu1VMFuojSI2K9bMFL%2FciDS8iB%2BtvXZzC1pS8kkQI09H0XjmEt5vbzLwHhTw5T9zDeg8bJBjqkAWFifIatcZtilFQl52IFriWOFoH8Iu5MAtFRep2qgETkDi%2Fb38QB4LvimdrZIpHhk8XyXjU4zPec7f4QZRAfpIvmUfMa5TKh0QwqSrzI%2BofnHsWBR8w5sB8AV7zqWDsu1%2Bm9pt6eZfPTA%2BZjMpN%2F5JYyjBdcQbD5C4pt8fottsAt8VFfesf8M%2FVWkf8QQNUnZE80xriaWPPxsr3iN1VInrtNPT9n&X-Amz-Signature=8edba3b744cff19697538a041009ba1470099ff4c52b2fdd2ba157d637acedd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUDWTE7Q%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDXRDC8g%2BLhk%2BcCs7BwEsxK6sOeFZ3IaX5tgYbT%2BQm3vgIhAOVmDMn0%2FdMJjtJdxSpRoGEplwBw88jOYGf%2Fqrnrv5XtKv8DCEYQABoMNjM3NDIzMTgzODA1Igz07neout%2BeLAz0gLwq3AOoqMFE7%2Fl1WkvoxOK976kxPhSWmBULVUeeuVyR3m%2FCHG2dH7JuSE3tryoUe7DzmsopleOM6%2FZdjI67Cr8rKsH%2FgtxLK9WYUCAuZezecV2zQ74Q0cLHUI32M758PiOlAY0txT1TOp4afBg6zBJj%2FKxNDWYF8ptdmmCaOH8%2Fdw7uG%2BymhhpwUXLx88HjQGCFsjF9iarfRtN%2BatTkDtdeSb%2BIXfoVnFcEiww%2BB1E1RlDmfT28e4IkZMZVWnEqErvspgaBZj%2Bh8P5dujCHp92uZUJQRg6fo3Y5pu8klh%2F0Rv5ksBfFIq8Zr2Gr4DYCziACaD1vJRq3RONoOmH1xAxrrraM4UkibmTopv9KNTY%2FPIVuNHhpnMIYV9mkZp9krD63QE7UBVzsjFzQDZsbDDvc%2BHcrlO%2F2OQzr3MJuKoeRsuzs74Ae5a%2FTvFYMZSIgWEgx6KL7BOUAn7Uz%2BPKYHL4ryDEP35w4HIYhk568GeRmz6%2BYKuwlnI%2BK%2FiNfQHz5HJ4ZeuweQlnG5tDLfd29FaKoVEXlLpqZOhnTXo2Jkmp97Hq%2BGsRR8zNf2jZ78Orgojgu1VMFuojSI2K9bMFL%2FciDS8iB%2BtvXZzC1pS8kkQI09H0XjmEt5vbzLwHhTw5T9zDeg8bJBjqkAWFifIatcZtilFQl52IFriWOFoH8Iu5MAtFRep2qgETkDi%2Fb38QB4LvimdrZIpHhk8XyXjU4zPec7f4QZRAfpIvmUfMa5TKh0QwqSrzI%2BofnHsWBR8w5sB8AV7zqWDsu1%2Bm9pt6eZfPTA%2BZjMpN%2F5JYyjBdcQbD5C4pt8fottsAt8VFfesf8M%2FVWkf8QQNUnZE80xriaWPPxsr3iN1VInrtNPT9n&X-Amz-Signature=d99665a1ba3d8f8248e0eb530d1c3b7d7fef9234dfce2f91c6d22a9e38cf8c6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
