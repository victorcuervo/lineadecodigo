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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K7MWRKP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDGM7tV4DAY3GEejB3lVpjNnbKTt3ebDt4acOT16gqhowIhANEg8BqXP1S52l0xW2leKb4vncINWnzhSSlC%2B%2B4H7ytDKv8DCDoQABoMNjM3NDIzMTgzODA1IgzI9JwEGuhdGHAfruMq3ANu3SYcYAB5k9ew4L7bPodTbp%2F0x7izsSv9zhfkb4HmdKS01%2F%2Bd6Yty3pLK2Wv%2BnskURb59i9B70z6VKna6L%2FO6OSSC4Nwn0UbYIBpKiMxlm0ejtMe%2FYRq%2FxQPuRfW9WhfY%2BIEpqC0C8d%2FYvS%2FYHTuxEOR0Mo%2BRxPkx1SStLqj2h02%2FRWFz6ZVh1SAHulBnS7tSsaXzZL405xdrfE%2FNCTZ%2FCWqq%2BV4%2BrBSLtS2nqZNiTcpYOjak70A9mYQfIsz7LD1aSDDrymN35zes%2B0SuhE%2BW97ChDwNOOScG%2FzoaE5RytAvdVIMURi5Ds3IMBg6qWQZtC0aL7FmHtMoFhd3XjtFgRScb2gXVa0WZutXZHDa000KovhXWaq93RZQbdyibjfQ%2Ful3RJIN7UCveLami7enJkB5vf8An9NAejyLkUv6w4wkedRFwVhKYW8a6splIMbHT%2BgjhRMugiwxixsgNTaRAjC4s%2BvAe9ot20LdGVdvms9buceq5RpP4Wa5st%2BLNb%2Bs6KLYRJRKtyi4hCvnyJqKDlw%2B2M4q8ggQ1ZsNxtyMX1JXAsgc0oe7ED2SRFcx5cvz45I%2B%2FQPFQUHKBx6geAUzE0tU5jbbN7my4Yj0K4oGEX0mUaCUq33NC7Yp2ZzDEtcPJBjqkAZjetZStpWZGfvsdRlsejCbKi%2BCFV%2F0Kuj3wMKR4N2XWKl0B8Pe42Ph5TxtFTbgy87lOU0EOs%2BTQyTQt4UrGOfdnv3QJvs7Z4j0ZXHiZ1NEYRDU1kbrP6W21ZxAkAen0X5Y8SALLp0Pfve4bXIllaljHeb4btLKgOEVAI8wZR3bePOHPkZyy9CkrVKpWTwE947sSz4hm81vZEoGNUWe1V1hqCYOc&X-Amz-Signature=cc703cda38994ae2ab6db670cb7f77cd933913dd3eebfe260e4e70241f5bf741&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K7MWRKP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDGM7tV4DAY3GEejB3lVpjNnbKTt3ebDt4acOT16gqhowIhANEg8BqXP1S52l0xW2leKb4vncINWnzhSSlC%2B%2B4H7ytDKv8DCDoQABoMNjM3NDIzMTgzODA1IgzI9JwEGuhdGHAfruMq3ANu3SYcYAB5k9ew4L7bPodTbp%2F0x7izsSv9zhfkb4HmdKS01%2F%2Bd6Yty3pLK2Wv%2BnskURb59i9B70z6VKna6L%2FO6OSSC4Nwn0UbYIBpKiMxlm0ejtMe%2FYRq%2FxQPuRfW9WhfY%2BIEpqC0C8d%2FYvS%2FYHTuxEOR0Mo%2BRxPkx1SStLqj2h02%2FRWFz6ZVh1SAHulBnS7tSsaXzZL405xdrfE%2FNCTZ%2FCWqq%2BV4%2BrBSLtS2nqZNiTcpYOjak70A9mYQfIsz7LD1aSDDrymN35zes%2B0SuhE%2BW97ChDwNOOScG%2FzoaE5RytAvdVIMURi5Ds3IMBg6qWQZtC0aL7FmHtMoFhd3XjtFgRScb2gXVa0WZutXZHDa000KovhXWaq93RZQbdyibjfQ%2Ful3RJIN7UCveLami7enJkB5vf8An9NAejyLkUv6w4wkedRFwVhKYW8a6splIMbHT%2BgjhRMugiwxixsgNTaRAjC4s%2BvAe9ot20LdGVdvms9buceq5RpP4Wa5st%2BLNb%2Bs6KLYRJRKtyi4hCvnyJqKDlw%2B2M4q8ggQ1ZsNxtyMX1JXAsgc0oe7ED2SRFcx5cvz45I%2B%2FQPFQUHKBx6geAUzE0tU5jbbN7my4Yj0K4oGEX0mUaCUq33NC7Yp2ZzDEtcPJBjqkAZjetZStpWZGfvsdRlsejCbKi%2BCFV%2F0Kuj3wMKR4N2XWKl0B8Pe42Ph5TxtFTbgy87lOU0EOs%2BTQyTQt4UrGOfdnv3QJvs7Z4j0ZXHiZ1NEYRDU1kbrP6W21ZxAkAen0X5Y8SALLp0Pfve4bXIllaljHeb4btLKgOEVAI8wZR3bePOHPkZyy9CkrVKpWTwE947sSz4hm81vZEoGNUWe1V1hqCYOc&X-Amz-Signature=0305f77579df532dc3c9e6b4c9ca9e635082044083c6dab02d03f7b675e5137a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
