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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBAGXUCZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T074948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGoK4bBXaJhC4VVS%2BVpL6%2FeczctMFpOfoHegcJ3lKK2wAiB5NRAEXUNM0pJiEbuwHBuMcREUwMku7ltxGFcVdWm3Iyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM9rxnT1w029x3f17vKtwDEjVS87URqLEDK3DFwZy84huVylyFFvl5GLRkfuuwW9zmhzHxJJFx7%2FJHLMg9XMTZDGDst7m0fRyvAAW9Lri8g6R0gJ4GSHUlmugPKNG2cWg8I8%2FhHTUpLjfF0aaTAWon%2FxE%2FHBPIN0It5L1N2H4iMNDNLBlWX1DJgXcRNVlWtHV3wCaWXhIuo%2Fiambrmsfwa6%2BfhQ6LFGIXPZSL0x3FMHjLQ21aeVBNbFAKNXYg033U6vYqAxYsG2MfN4XMMOWZTUau6cIHYB%2FJcq5d%2FD81znj29IF0U%2BBHXAtsXdjaKGugXwlSbNV%2BIOGeCja5XyV1pu9erqea5HA7F60lZ9e7cjrwUseCYwDv7LdF4kOcq3qtPUVg%2FBpwLYlKgbHwZJXEcRnwAjnS69AujUxSpZaHKKDWzHcgWIoOM029YvYvcoGjD0ulhm3AmP0w2uQreGWFCcvAVZ%2FQA4mmgIbNU%2FtDp%2FhYGAoXs6cYsXq5CDr%2BUap4AiiDgs1DJcfW0QICSUlwqVpG9KIra9aCnkSAaFZKg7nKXu6h%2Ff%2BGS63F47gy8BY479%2BtnGoJvxOIzfdGuD89WSx%2Bg%2FMSU1QUntrVRmjNYvaOhqhNgQmSYoBhpjZRQGpZtw%2FFv53Sz%2F260aBkwib3PyQY6pgGZMTxM9ShL7am2QLmLRCTwkLLY7yg2YmOLNabIdvVCYLbrZq4TCxBs9NaS1bfwOkpV7%2Fcq0IQk4cJtHEV%2Ftfu7eiGwWu9BTLP4II7YWvQwqdjpF5kH%2FqrF5AZMTGxAFNpXu49UkIUIGp3ZfP175XMt3%2BvcvkXCEvcdPVbDJNnf86nqi3qPAU93l%2BL67VF9u%2BQTWLjjV8JhD%2BX%2BUeRqVRYDGrUhEgw9&X-Amz-Signature=881f9ad865cfe455d1fbb6e5b0b0128366d58fa7b0515349c9822efa2be2acaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBAGXUCZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T074948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGoK4bBXaJhC4VVS%2BVpL6%2FeczctMFpOfoHegcJ3lKK2wAiB5NRAEXUNM0pJiEbuwHBuMcREUwMku7ltxGFcVdWm3Iyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM9rxnT1w029x3f17vKtwDEjVS87URqLEDK3DFwZy84huVylyFFvl5GLRkfuuwW9zmhzHxJJFx7%2FJHLMg9XMTZDGDst7m0fRyvAAW9Lri8g6R0gJ4GSHUlmugPKNG2cWg8I8%2FhHTUpLjfF0aaTAWon%2FxE%2FHBPIN0It5L1N2H4iMNDNLBlWX1DJgXcRNVlWtHV3wCaWXhIuo%2Fiambrmsfwa6%2BfhQ6LFGIXPZSL0x3FMHjLQ21aeVBNbFAKNXYg033U6vYqAxYsG2MfN4XMMOWZTUau6cIHYB%2FJcq5d%2FD81znj29IF0U%2BBHXAtsXdjaKGugXwlSbNV%2BIOGeCja5XyV1pu9erqea5HA7F60lZ9e7cjrwUseCYwDv7LdF4kOcq3qtPUVg%2FBpwLYlKgbHwZJXEcRnwAjnS69AujUxSpZaHKKDWzHcgWIoOM029YvYvcoGjD0ulhm3AmP0w2uQreGWFCcvAVZ%2FQA4mmgIbNU%2FtDp%2FhYGAoXs6cYsXq5CDr%2BUap4AiiDgs1DJcfW0QICSUlwqVpG9KIra9aCnkSAaFZKg7nKXu6h%2Ff%2BGS63F47gy8BY479%2BtnGoJvxOIzfdGuD89WSx%2Bg%2FMSU1QUntrVRmjNYvaOhqhNgQmSYoBhpjZRQGpZtw%2FFv53Sz%2F260aBkwib3PyQY6pgGZMTxM9ShL7am2QLmLRCTwkLLY7yg2YmOLNabIdvVCYLbrZq4TCxBs9NaS1bfwOkpV7%2Fcq0IQk4cJtHEV%2Ftfu7eiGwWu9BTLP4II7YWvQwqdjpF5kH%2FqrF5AZMTGxAFNpXu49UkIUIGp3ZfP175XMt3%2BvcvkXCEvcdPVbDJNnf86nqi3qPAU93l%2BL67VF9u%2BQTWLjjV8JhD%2BX%2BUeRqVRYDGrUhEgw9&X-Amz-Signature=001a24eb60e0590824ff11a3c3ff25b4d43d5d014c6e0df8f6dc539a353a8528&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
