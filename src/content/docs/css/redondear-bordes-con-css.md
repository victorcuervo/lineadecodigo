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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JFC65JR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T091702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBbr%2FU5%2BILguJYCA8fpcXDcmgkVwvML2ueguKincko%2FLAiEAwoZHOIQjSM5OW4bqPlV7U8eoI1MV5PiGU3BQBXLGUucqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgbrnWXnWRV6kX2circA5ddjo2PQ%2FywMLmeBd9lSSYL6W%2BsB0YYzitjqqJaGJiU84tEE3z8XOHTxA3nl8FviOJQbMgNHJZ9gumOdPuNnT8lCunFswJLdezoT8PnhwJJe%2Fyr86d0yFgnka0jRxYbgb4Ss%2BdHTlW9JeemE5ybrHQYQnbhvi1xikaSBix%2B8RLBEoC%2FFu2qevkzaUAy2a5K%2B%2FpIn7%2B2COFJyrN4Se5dwaO6Z7qTPakhuWaXnrKGXCv8qfNRTkkjKKoBKLJsZyjwG7Ie3Cc%2BmVH4GcvtJQJEvp9yQMne7AvP1J3I1L1iponF2URhheJK2U%2Bd2EC6KSg3P0qwtasxFpWU8gNlKMV%2Fpt34oEAX4mndIvw0vufIxXoX9NNZ019OsBDzLxCRK8YtBdMdkoP%2F3tNSMwCSqvRFAt%2FqK4hiDbsnUiS76Y1B54QlZWCb6%2Bu%2FubJN4t8Gm2lCovHKwhIPsFXWdfj5XaJYtvrGPacx3Gw4Kn8FxnzfJa9cUq66b0IaCi0HXwe7YBuK8mtHWmcuJZcFN8BvJJw8eTM%2BTG4PSwbkWNEcvHbYZtDDeNItaZhHnSSz%2Fs5o48vDJGAWr99uXX8dPV0LYF0mNTKnw5Q1r5m21Z%2FnARXDSYEZmn1K56ZP3zcRnojDMKbD38kGOqUB7gACo8B2z9Ue8Sg7A4nMHzjlcMiiNACiuVXsddwoaewik3A5NBm89gioDVm0NsvbnXIz9FzGsFwWEXK3p5sqfzJq3aQplaYbZ2OR%2F6txYQFtr23RRWpoaEqxaU%2BGY99EY4QJSzMbiT562kUnOY%2B1gr%2BYyENAMPZp2Wt%2FqpzQTnTI7bvlmPhBefXC7GPXNVh5TdYexj8r999H4iczzOoHppuRplwu&X-Amz-Signature=63f5fa15f8735216b471d6e0013cbed922cf6c583fa68c7daf06c4b86cffe44f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JFC65JR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T091702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBbr%2FU5%2BILguJYCA8fpcXDcmgkVwvML2ueguKincko%2FLAiEAwoZHOIQjSM5OW4bqPlV7U8eoI1MV5PiGU3BQBXLGUucqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgbrnWXnWRV6kX2circA5ddjo2PQ%2FywMLmeBd9lSSYL6W%2BsB0YYzitjqqJaGJiU84tEE3z8XOHTxA3nl8FviOJQbMgNHJZ9gumOdPuNnT8lCunFswJLdezoT8PnhwJJe%2Fyr86d0yFgnka0jRxYbgb4Ss%2BdHTlW9JeemE5ybrHQYQnbhvi1xikaSBix%2B8RLBEoC%2FFu2qevkzaUAy2a5K%2B%2FpIn7%2B2COFJyrN4Se5dwaO6Z7qTPakhuWaXnrKGXCv8qfNRTkkjKKoBKLJsZyjwG7Ie3Cc%2BmVH4GcvtJQJEvp9yQMne7AvP1J3I1L1iponF2URhheJK2U%2Bd2EC6KSg3P0qwtasxFpWU8gNlKMV%2Fpt34oEAX4mndIvw0vufIxXoX9NNZ019OsBDzLxCRK8YtBdMdkoP%2F3tNSMwCSqvRFAt%2FqK4hiDbsnUiS76Y1B54QlZWCb6%2Bu%2FubJN4t8Gm2lCovHKwhIPsFXWdfj5XaJYtvrGPacx3Gw4Kn8FxnzfJa9cUq66b0IaCi0HXwe7YBuK8mtHWmcuJZcFN8BvJJw8eTM%2BTG4PSwbkWNEcvHbYZtDDeNItaZhHnSSz%2Fs5o48vDJGAWr99uXX8dPV0LYF0mNTKnw5Q1r5m21Z%2FnARXDSYEZmn1K56ZP3zcRnojDMKbD38kGOqUB7gACo8B2z9Ue8Sg7A4nMHzjlcMiiNACiuVXsddwoaewik3A5NBm89gioDVm0NsvbnXIz9FzGsFwWEXK3p5sqfzJq3aQplaYbZ2OR%2F6txYQFtr23RRWpoaEqxaU%2BGY99EY4QJSzMbiT562kUnOY%2B1gr%2BYyENAMPZp2Wt%2FqpzQTnTI7bvlmPhBefXC7GPXNVh5TdYexj8r999H4iczzOoHppuRplwu&X-Amz-Signature=bbc275cc5719f104dbb622b4e2622eac1a3c210bdf8c0cf24e972e8d65c96339&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
