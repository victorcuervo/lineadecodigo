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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624IVRQDC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T200224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7pVxvfzHYhYlM%2Fkp9qqwIRg21KbRdw5TsgYTGoLG9HAIhAL4glAZ7Jk5K3L7DsC%2B%2Fvs1ZLr%2BjR1FBCDON3hJS3JhdKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGKJcvn8Qac1X%2BJYgq3AOoOEViFlFhAc85%2FjAd7uNhRpzyS5eOPXxBJ98XaJQvUZvIDLxqk82zhz5ywW20VnlMUXzE6SjMBCT6KV5CWAYoI6QPmLXs0dVAAumNiLuje%2B0EJa5l0OAWxkJw%2B00FyGkauzQ2vlqtKCGvGlpTsNaP%2Bp0Ke%2Blxas1T5pefaXVm9A4zhDUlxgIKiPZVxYAto5mh8vx%2B9z%2F5Pe6p1yZOprL7N0G%2FCAOGiYGWy44d%2FuY2TffBTMx7MSRKyS3tSXCf7zCB6OZNrdTOnc6jZ3ThUOgMmueu8PBnvdT%2FtsHq6%2FS3dHpANSYcbQbmk6Wipf8Sq%2FCPlv18ycdqxUiNm6WVm6ZY%2FE06fPtRgX3pqEhFj9hRvxQjxPaOpyCl9JICjPBBRP2eslbfpRDlyPwMHquKY4MfiXhIMIL3K%2FqKIn%2BkjyzSsg3PeEDx2264ypWr8zbDZyUDNm5DvRxKoBSYvzPeax8zPqoOx4R2UuUFVlHQ49GG9Bati%2Fe2Qbrr%2FVwgwAbDyBgm8YbxzVhdRrgR%2Ff%2FEEXPXhQVlNPhNW5VazV%2FLOMt8Ji9rwjUdiBpi8TQ9o%2FMhwDmhhACQTS0XaFqxuWND0XvC3AGZI%2BD7iLNdC0uoY%2BC3i%2Fsz30PAywwQJdSSRTCLqNfJBjqkAVxk9412rqXjjK99sOyonKrUF6wHHKLCn6NyESWwAmFiies0RD9qi2tmAqJkdcnhG7xnRQuf02jLb2oPVd9TwuGp7qnX7i%2Fsb%2Bcj0lKjPoWpFGt1obNxIvd1UPi%2FW2qNMMJQA%2BW53dwNOIbRmfCPaacarkN%2BrYpuJ1jgJtB24mYD9dspCMkcsWjwB%2BRQVjUf6eVF0osde8G2RPJrkc%2FZlUxttJYz&X-Amz-Signature=27a5c281100e786e747da24b636403e0dcf36806a4c08d85695c5758999d3755&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624IVRQDC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T200224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7pVxvfzHYhYlM%2Fkp9qqwIRg21KbRdw5TsgYTGoLG9HAIhAL4glAZ7Jk5K3L7DsC%2B%2Fvs1ZLr%2BjR1FBCDON3hJS3JhdKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGKJcvn8Qac1X%2BJYgq3AOoOEViFlFhAc85%2FjAd7uNhRpzyS5eOPXxBJ98XaJQvUZvIDLxqk82zhz5ywW20VnlMUXzE6SjMBCT6KV5CWAYoI6QPmLXs0dVAAumNiLuje%2B0EJa5l0OAWxkJw%2B00FyGkauzQ2vlqtKCGvGlpTsNaP%2Bp0Ke%2Blxas1T5pefaXVm9A4zhDUlxgIKiPZVxYAto5mh8vx%2B9z%2F5Pe6p1yZOprL7N0G%2FCAOGiYGWy44d%2FuY2TffBTMx7MSRKyS3tSXCf7zCB6OZNrdTOnc6jZ3ThUOgMmueu8PBnvdT%2FtsHq6%2FS3dHpANSYcbQbmk6Wipf8Sq%2FCPlv18ycdqxUiNm6WVm6ZY%2FE06fPtRgX3pqEhFj9hRvxQjxPaOpyCl9JICjPBBRP2eslbfpRDlyPwMHquKY4MfiXhIMIL3K%2FqKIn%2BkjyzSsg3PeEDx2264ypWr8zbDZyUDNm5DvRxKoBSYvzPeax8zPqoOx4R2UuUFVlHQ49GG9Bati%2Fe2Qbrr%2FVwgwAbDyBgm8YbxzVhdRrgR%2Ff%2FEEXPXhQVlNPhNW5VazV%2FLOMt8Ji9rwjUdiBpi8TQ9o%2FMhwDmhhACQTS0XaFqxuWND0XvC3AGZI%2BD7iLNdC0uoY%2BC3i%2Fsz30PAywwQJdSSRTCLqNfJBjqkAVxk9412rqXjjK99sOyonKrUF6wHHKLCn6NyESWwAmFiies0RD9qi2tmAqJkdcnhG7xnRQuf02jLb2oPVd9TwuGp7qnX7i%2Fsb%2Bcj0lKjPoWpFGt1obNxIvd1UPi%2FW2qNMMJQA%2BW53dwNOIbRmfCPaacarkN%2BrYpuJ1jgJtB24mYD9dspCMkcsWjwB%2BRQVjUf6eVF0osde8G2RPJrkc%2FZlUxttJYz&X-Amz-Signature=83fe4fb12f59eb175ddb17c6ec57b275489cb504f9fe0fd9fbf59600c1299ef5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
