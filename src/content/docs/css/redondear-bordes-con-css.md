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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7H6IDIA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T001854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH97ER2TPG5gw1k%2BIQzVDXQ20Gejx4MvjIin5nTUaq4hAiEAgT7yg1u9PUPTYReTMFndLuIruIS8MuoI3gKJPW47i%2FwqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE4Sgvbh589i9LLxrircA4hZzv5A6zW%2B76p0o0Q7TSmJeFmes9f8fDzcCJ7Am4rB69J%2FbMHJMZBPRC4EbOZi9%2BpdD12uR37gQZ9pS%2BiG5lxDoK7IL0lEQYk%2FCa%2BYG3j0KTFi8S6xwU5E53s5pc0sZvskJNIFlAXyJuQWW7PCQ9RPke4QAEoXB4jIH2ciq0NIbewkRApL8NXQ5e0yqdxoBGD1UbCIsglJtxqz4Z6a0OwbAw9KHtx0BMFerMHqbYtRxe5YdDN7H4s5qFMghB8J7fOZpSqFLOn5ULDbXoPNQN64Srucfut39sOvW70C1MCX4xSo1dKB0x5b0oaj%2BCvZftezoo%2FiS7z4frz5HHxjBVDkflEqx%2BoD52KXtriS3gTW6IaKHI%2BGV21zmDrrURgtewBpw%2BF5rREzCh79ODKfYWtz1AO33lSN%2FtDgwHQl2Ws9Mv9SHcxgOFVTXuCD9Hmve1NLc1lVwEzeXZ2%2FEs2%2Fi%2BvkEq9a4dcFPnkZvp5kUEz%2B%2B1SqDFwAbFb%2BywGu31kzZJvvkfvd5q%2B9Aw2AwZVwttk5i5y225IMpwpAi2pO%2B6fjeI%2BrJHUlULQozuwewCR1utP9jbKk0%2FrkTyWW0ZD43hmO9obe%2B890fd88Cs4mKqjXqJQr1s9Zus9WFmDgMICi2MkGOqUBIrSVINTpAMFk%2FHdEln6RRebJTSJoI%2BEQXWu4dmzDyRtlXpUOjk%2B3u1wd2Fmi0tYwN1Zn%2FRtrrDG6%2Bbxb%2BkY32e5vJEs9pk%2BATafQuM15Yb3BZGts11tIGxFwTX5MUNFSUmAxDZDhFFipVZIDcgWuIWBaAjM4ccQigGjtltJeLgyY6JGW0PgRjrhgU0dNFuy74R4Z7Xl8VimCTR7rUZMe2DayqEP4&X-Amz-Signature=b169701d71b34b12d8b94f2927d7444cf1e29ec4d4dd96a03bb6981e41f6ec5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7H6IDIA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T001854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH97ER2TPG5gw1k%2BIQzVDXQ20Gejx4MvjIin5nTUaq4hAiEAgT7yg1u9PUPTYReTMFndLuIruIS8MuoI3gKJPW47i%2FwqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE4Sgvbh589i9LLxrircA4hZzv5A6zW%2B76p0o0Q7TSmJeFmes9f8fDzcCJ7Am4rB69J%2FbMHJMZBPRC4EbOZi9%2BpdD12uR37gQZ9pS%2BiG5lxDoK7IL0lEQYk%2FCa%2BYG3j0KTFi8S6xwU5E53s5pc0sZvskJNIFlAXyJuQWW7PCQ9RPke4QAEoXB4jIH2ciq0NIbewkRApL8NXQ5e0yqdxoBGD1UbCIsglJtxqz4Z6a0OwbAw9KHtx0BMFerMHqbYtRxe5YdDN7H4s5qFMghB8J7fOZpSqFLOn5ULDbXoPNQN64Srucfut39sOvW70C1MCX4xSo1dKB0x5b0oaj%2BCvZftezoo%2FiS7z4frz5HHxjBVDkflEqx%2BoD52KXtriS3gTW6IaKHI%2BGV21zmDrrURgtewBpw%2BF5rREzCh79ODKfYWtz1AO33lSN%2FtDgwHQl2Ws9Mv9SHcxgOFVTXuCD9Hmve1NLc1lVwEzeXZ2%2FEs2%2Fi%2BvkEq9a4dcFPnkZvp5kUEz%2B%2B1SqDFwAbFb%2BywGu31kzZJvvkfvd5q%2B9Aw2AwZVwttk5i5y225IMpwpAi2pO%2B6fjeI%2BrJHUlULQozuwewCR1utP9jbKk0%2FrkTyWW0ZD43hmO9obe%2B890fd88Cs4mKqjXqJQr1s9Zus9WFmDgMICi2MkGOqUBIrSVINTpAMFk%2FHdEln6RRebJTSJoI%2BEQXWu4dmzDyRtlXpUOjk%2B3u1wd2Fmi0tYwN1Zn%2FRtrrDG6%2Bbxb%2BkY32e5vJEs9pk%2BATafQuM15Yb3BZGts11tIGxFwTX5MUNFSUmAxDZDhFFipVZIDcgWuIWBaAjM4ccQigGjtltJeLgyY6JGW0PgRjrhgU0dNFuy74R4Z7Xl8VimCTR7rUZMe2DayqEP4&X-Amz-Signature=68d22584b54d17d6f795e48462d5f5dc0c9450efb2b5b249cc8ac24f107f2b55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
