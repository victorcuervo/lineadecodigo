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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BJKWVZB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T034300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGIQFS3zFfP8h9eaIr2PKaBHH6IEILsnRuzASSHKzg%2FFAiAl%2BY%2B5Ty%2Bc1Fq5JnLTB%2F1YBtM413hhHBM%2B3e7qsGuGiiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlmkYl%2F73B%2FwDnq0LKtwDhcBrtmhvdxEkIWwWtA71ER1JLE%2FOCapCYK1wgoKHcPPu1UyrOOlklG2i3W5XNYX5US%2BwFehiuEr0uTP6bEOd2elNgvM9T6mhEFcuQVMKoX9e8QoQ8kOwpBnx7h4fNqqkN6WTKsLy5H0zyZ8lp8LS7%2FMGXFB7bNStqTf2S2vzkza50qUbM2TVoPUSo7KW2gUxctzf2L0fA7WIntAn0P8oj2BPUCp7f6oLmiUTxLOMkVRg%2B2HN9PBqUflOMvTzjT1U6MwsCiYGK01lEi8bCA7cW8uPy1oY9FY%2FlRquOUCd9OdxKHcPHxo3HlVtSoDPhT7mA8%2F8BzepVXZiAeYsZ6%2B1gRewYF%2BGZC0RLKs9BJycJoGVfxQ51C65dIPKEcbzSLEyYFMNRfk4LhDjaB0L4cOyLeUdchOCYlydYGFJW2G4CtLakU0XBta2zmqS99hZ93DZQNXCEvSIHe9LEKm%2FcY8h9gk6Htm%2BbvuawliBgLeI%2BW2oIc2%2Bgwwv4ftUs49hS%2FhKzoqq2j2YwkYTouEX7PrUJ%2FOcmgp09mnEcx1FXkK979WGmqGk8aD7wiGLnO2RqPHwTxqpJIILpFpxHCTQStk1BjxnSPsfbUTYhISKfkPxjUeObYvjGOOCghUt%2F3Mwsf7SyQY6pgGvxDC279Dlm%2FmFN3MO3YLpjT4TM9wVuBwH1qTyIoLn8TygYXKyuGm21d023Fg5CFyiBzg5mdHacprhfOGazMpNwjDrxX3Xbj394Yf8JhvI0YtVdvfR4brGEbt%2B4%2FwYGCTTPudbXraBG6qDed0p5uCSHvuFm37WKcc%2Ff7%2BAtjnzHCcWW5zRCpqL%2BbbNP7%2FtcBTaBMuHw05uICBk55cePmhGg%2FhhzGB2&X-Amz-Signature=5fd28fc7673c3a8ff7d1ea96194e461c7df8aa247e5c006b6d64267ef2e4aee4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BJKWVZB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T034300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGIQFS3zFfP8h9eaIr2PKaBHH6IEILsnRuzASSHKzg%2FFAiAl%2BY%2B5Ty%2Bc1Fq5JnLTB%2F1YBtM413hhHBM%2B3e7qsGuGiiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlmkYl%2F73B%2FwDnq0LKtwDhcBrtmhvdxEkIWwWtA71ER1JLE%2FOCapCYK1wgoKHcPPu1UyrOOlklG2i3W5XNYX5US%2BwFehiuEr0uTP6bEOd2elNgvM9T6mhEFcuQVMKoX9e8QoQ8kOwpBnx7h4fNqqkN6WTKsLy5H0zyZ8lp8LS7%2FMGXFB7bNStqTf2S2vzkza50qUbM2TVoPUSo7KW2gUxctzf2L0fA7WIntAn0P8oj2BPUCp7f6oLmiUTxLOMkVRg%2B2HN9PBqUflOMvTzjT1U6MwsCiYGK01lEi8bCA7cW8uPy1oY9FY%2FlRquOUCd9OdxKHcPHxo3HlVtSoDPhT7mA8%2F8BzepVXZiAeYsZ6%2B1gRewYF%2BGZC0RLKs9BJycJoGVfxQ51C65dIPKEcbzSLEyYFMNRfk4LhDjaB0L4cOyLeUdchOCYlydYGFJW2G4CtLakU0XBta2zmqS99hZ93DZQNXCEvSIHe9LEKm%2FcY8h9gk6Htm%2BbvuawliBgLeI%2BW2oIc2%2Bgwwv4ftUs49hS%2FhKzoqq2j2YwkYTouEX7PrUJ%2FOcmgp09mnEcx1FXkK979WGmqGk8aD7wiGLnO2RqPHwTxqpJIILpFpxHCTQStk1BjxnSPsfbUTYhISKfkPxjUeObYvjGOOCghUt%2F3Mwsf7SyQY6pgGvxDC279Dlm%2FmFN3MO3YLpjT4TM9wVuBwH1qTyIoLn8TygYXKyuGm21d023Fg5CFyiBzg5mdHacprhfOGazMpNwjDrxX3Xbj394Yf8JhvI0YtVdvfR4brGEbt%2B4%2FwYGCTTPudbXraBG6qDed0p5uCSHvuFm37WKcc%2Ff7%2BAtjnzHCcWW5zRCpqL%2BbbNP7%2FtcBTaBMuHw05uICBk55cePmhGg%2FhhzGB2&X-Amz-Signature=5213a99f935d2ef536399d40b4aabbdd9757fa1d0661fcac0d3f9142dae9b653&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
