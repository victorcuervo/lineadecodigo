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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OIFHOSU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T132222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9DN8X2eKGVGKwGgxJwVNV6qEiP%2ByiGa5davvpQ5ClyQIhAKMp7ITUe1VNlySa73R9pCwg37lPEQGnR%2F3OVelTGw%2FnKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyn104zxXkGVHbyChkq3AN%2FZV01GIxAeGr9hf0xWIdvWKZYcrxo4F8CdXUeQmttUu%2BIsv1efVzN%2BvE4iZhfnMwScfo%2FXHdYJMjsGeALaNRodRY7CZn%2F22sofWmPCAhaPKXZiH1TfzXw7KHL4qsptFGQLwy52WyUcGDGvejATVGe6SN9eCxuawRvR1HujQrPRpFL8HzhKd7WPvfeNFSqWURg39SJENZBDnpMUnNYyqXkGBdXXB%2Fdz9icWVIiH4RdjpVnNzIOvEcHB1P0EwqwfsGxvYuMkNFqNOk%2B7KPON88jpK2a%2FpXEU4Wg1SW9v2ouE54OcQcqlSg%2FcyYsDNwQ%2FeSxQefSaqqIbXxQ6zJBDCrPlQoTnJVCVWNlfV%2F11FblRFhw5UfnQVHjjsgzW3Xu2fjbfw96YlNUwH63W88Bg4kACvf%2F08F%2FxN1hoW80dfMkAPq5q9ZzSesGNQYmS9FWC0hxvR04v9hZYB%2BWz2CicotkntUpZAONOE1pCxnthl7d88N4T3%2BWlgDq9XKpTjXTRAYWw%2FeNnVe4y0qa7bHA%2BDYuG6T56RX9l47nkJ7M7EfkRxuA7PsYndOxxbmI1LDQ%2BrxfYrp5PsdziFAvFj%2BTU5%2BrTD1KQIRv%2FnTSbtOT03%2BygwO%2BqaE4fZkY672%2BwzC3mdXJBjqkAZzKKpzOoFukS3nIP4dO5Ih6c9UIAYKe8PTQm1RmzDH91bpYRB4k5PHX0GjAlu9IG0p3IPr3FxTdGucqsJzCLsiit%2FTY7Mi5Tl4NK19dABMKxf8A49w9M24HaZD6PMd04zPXpl0fbpQHvYYEuERBjPwtQDcHjB2QLA9ldoRulbdNKjhhEdBOHL%2BOFCi6IU594CI95RFlXmwaZAZFcXKMxUkcG%2Bj4&X-Amz-Signature=f87158c03c54a7b9262e5e98687281026b9d22c1d280d7c6ff599dad1a8f9f79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OIFHOSU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T132222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9DN8X2eKGVGKwGgxJwVNV6qEiP%2ByiGa5davvpQ5ClyQIhAKMp7ITUe1VNlySa73R9pCwg37lPEQGnR%2F3OVelTGw%2FnKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyn104zxXkGVHbyChkq3AN%2FZV01GIxAeGr9hf0xWIdvWKZYcrxo4F8CdXUeQmttUu%2BIsv1efVzN%2BvE4iZhfnMwScfo%2FXHdYJMjsGeALaNRodRY7CZn%2F22sofWmPCAhaPKXZiH1TfzXw7KHL4qsptFGQLwy52WyUcGDGvejATVGe6SN9eCxuawRvR1HujQrPRpFL8HzhKd7WPvfeNFSqWURg39SJENZBDnpMUnNYyqXkGBdXXB%2Fdz9icWVIiH4RdjpVnNzIOvEcHB1P0EwqwfsGxvYuMkNFqNOk%2B7KPON88jpK2a%2FpXEU4Wg1SW9v2ouE54OcQcqlSg%2FcyYsDNwQ%2FeSxQefSaqqIbXxQ6zJBDCrPlQoTnJVCVWNlfV%2F11FblRFhw5UfnQVHjjsgzW3Xu2fjbfw96YlNUwH63W88Bg4kACvf%2F08F%2FxN1hoW80dfMkAPq5q9ZzSesGNQYmS9FWC0hxvR04v9hZYB%2BWz2CicotkntUpZAONOE1pCxnthl7d88N4T3%2BWlgDq9XKpTjXTRAYWw%2FeNnVe4y0qa7bHA%2BDYuG6T56RX9l47nkJ7M7EfkRxuA7PsYndOxxbmI1LDQ%2BrxfYrp5PsdziFAvFj%2BTU5%2BrTD1KQIRv%2FnTSbtOT03%2BygwO%2BqaE4fZkY672%2BwzC3mdXJBjqkAZzKKpzOoFukS3nIP4dO5Ih6c9UIAYKe8PTQm1RmzDH91bpYRB4k5PHX0GjAlu9IG0p3IPr3FxTdGucqsJzCLsiit%2FTY7Mi5Tl4NK19dABMKxf8A49w9M24HaZD6PMd04zPXpl0fbpQHvYYEuERBjPwtQDcHjB2QLA9ldoRulbdNKjhhEdBOHL%2BOFCi6IU594CI95RFlXmwaZAZFcXKMxUkcG%2Bj4&X-Amz-Signature=a7f70cf72a4aaa2327f1d682b5cb619030a0aca755bcb011cf737d8a58625652&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
