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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XPQZFA2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T172652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA9Vct1rvewrRUMBrmP8dN4jshlGjOgCYJ%2BNqDYmn3A%2BAiEAzHY3GlumHz7k0PSbplDFQNYKi%2FMjXYJy5lQCLK3ND5Yq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGZd%2B7hv00ta1miYQSrcA%2F10W0FaCsXDff1xY5NND%2F86dj5gqvasxJoyMMuHkCz9j9hphAiQ82jM4OgtKssfuik4ybDCO0CaLfxLP1vsxUf30md5lntLjjpec2WeSi8vErB4y%2BmHYSE7GkbD6LubhATCJdKLuBf6EDXYsxnqbRUS0X%2F36H1wXWW7tuhn36oDZK%2BJWxzrk7SHULfejvww9nBp7pTF4%2Bq7aYAMYqadjaQ9nfeQ3cqnyRivTjUGj3TVk7UcmwxDlLzta7MjwZVd7j%2BsXQrbp1vPi8%2Blkk0XW%2BOh4V1g7eV05NWMEe4JlJ0UJNLrc04Oq3DxGSxlACPUFrtBM8OPh1AUxU0eCr3MuHyzyEcCCJCb5%2Fmzd3dar5d8XzAoLYHIFlmj1vcY87bpvC8tX0dQlbf8U2HoNvhIN10i8ZWAJ97iiSSEQQZ0ugJ9qJAASLwNURLCzQYDil%2BeYe%2Bofe4uiI40GtGnuChmNbcDAIZHZjMfSLmVGbwG8RoVVhG4%2B5BSmFGXKvadTztkr%2BPIO1bC618hMkr6zyYyccxZkqdEl1VAh8c242M29qns447iM5I7PL6xzaSMgt5A45OMGi8NS4Jear0mPf%2F2lWzSAIaPcJpzWhn%2BfnI9Y2ILDZA%2BRdnaxJ2rmczGMPrMy8kGOqUBqAWaCBwzcryHcoL%2ByLJ0OfUe%2F1OIKE0%2FWEMRW1YAbkwSrA8ohkn2RePsPQ4ctYCR0tYdlQ2fP5PDHqCfSM%2Bt0FdKhDnsCsZdiVz6r6rg5W6HoShyhjKrkEEIpTTCXD7jvhwdmsBQAAJskDr8Fxx%2B2RYL3W0NplEHhVddwEtwD5iN8Opqq8maLqcV7Ks0P8dQz0LOqHkM0GcvdQNrQbK8pIciTrS%2F&X-Amz-Signature=b3afae04f0838b805ed7685b94bb08de93bc04317552f36659544491ac1688c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XPQZFA2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T172652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA9Vct1rvewrRUMBrmP8dN4jshlGjOgCYJ%2BNqDYmn3A%2BAiEAzHY3GlumHz7k0PSbplDFQNYKi%2FMjXYJy5lQCLK3ND5Yq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGZd%2B7hv00ta1miYQSrcA%2F10W0FaCsXDff1xY5NND%2F86dj5gqvasxJoyMMuHkCz9j9hphAiQ82jM4OgtKssfuik4ybDCO0CaLfxLP1vsxUf30md5lntLjjpec2WeSi8vErB4y%2BmHYSE7GkbD6LubhATCJdKLuBf6EDXYsxnqbRUS0X%2F36H1wXWW7tuhn36oDZK%2BJWxzrk7SHULfejvww9nBp7pTF4%2Bq7aYAMYqadjaQ9nfeQ3cqnyRivTjUGj3TVk7UcmwxDlLzta7MjwZVd7j%2BsXQrbp1vPi8%2Blkk0XW%2BOh4V1g7eV05NWMEe4JlJ0UJNLrc04Oq3DxGSxlACPUFrtBM8OPh1AUxU0eCr3MuHyzyEcCCJCb5%2Fmzd3dar5d8XzAoLYHIFlmj1vcY87bpvC8tX0dQlbf8U2HoNvhIN10i8ZWAJ97iiSSEQQZ0ugJ9qJAASLwNURLCzQYDil%2BeYe%2Bofe4uiI40GtGnuChmNbcDAIZHZjMfSLmVGbwG8RoVVhG4%2B5BSmFGXKvadTztkr%2BPIO1bC618hMkr6zyYyccxZkqdEl1VAh8c242M29qns447iM5I7PL6xzaSMgt5A45OMGi8NS4Jear0mPf%2F2lWzSAIaPcJpzWhn%2BfnI9Y2ILDZA%2BRdnaxJ2rmczGMPrMy8kGOqUBqAWaCBwzcryHcoL%2ByLJ0OfUe%2F1OIKE0%2FWEMRW1YAbkwSrA8ohkn2RePsPQ4ctYCR0tYdlQ2fP5PDHqCfSM%2Bt0FdKhDnsCsZdiVz6r6rg5W6HoShyhjKrkEEIpTTCXD7jvhwdmsBQAAJskDr8Fxx%2B2RYL3W0NplEHhVddwEtwD5iN8Opqq8maLqcV7Ks0P8dQz0LOqHkM0GcvdQNrQbK8pIciTrS%2F&X-Amz-Signature=0ca1a931625f9fd490902215894e2a6a8903ed3887f7dd424305c2d470c94cb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
