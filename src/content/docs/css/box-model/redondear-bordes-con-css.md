---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642XF3XJ3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3DwrflfauwOnSIWjI6h9WgolWZqK4mXmF1Lues3flYwIhAIrhNjUmSFapFo2V8ZX%2FxTCnd1xS4%2FfM%2BjXqQd1otWLwKv8DCHsQABoMNjM3NDIzMTgzODA1Igz2EwbWzOCoSlv4E34q3AO6r83DMJ4zb0wEuZoBeXiiNrFmUJmAsvyyIZ44EBP8bqoQAyjHgi%2B1R6IPvRkXgvGHEt5mI4ylccEHTtrn3giXGoLlPgrIl%2Fb266KYpcMuOH1aWWURxeGH5yTzYkp3Vo3mIAnybv4xQs%2FrQmq1vzoPVUYchKffKcDNJPyZ%2FhdJbLzGD1yTBtVACFgbniGZtg4njeLFcp4zleggX7erlOd7yF25R4qL%2FUPNRvZmIB0eRWYKVL5mhvASSorfy5iKuqy9Is9BtAtZZe961gFdjYeuPFxTJYumR714xLtEYO%2BF3EggmDvAhKcIcPd4j5ujiClns4rGnxyi4AYonzBMl2wnGeUH3KH68wukLk%2FidIqhKYNpNhAwkJg811dkJ675A7ra9Hiiuj0QanOf62vYkEyWTB1aQq%2Fj7IvfDQav4PHlw7uIIu567yzR44Ek%2B8%2FFiZ6xLK5rtQo1AVqUWpMUPfvy7wvwHWdyxkd0R2UR4OA8YUD2ibeQoQaiZG7wQqv5I%2BBMoJKgqdma1ykDE6TeEd37wUDAPRa3VsQrjana5FRFUZg%2Bg90LzRF4wnSRetUXaHv1uNVRKFwamJLzc9A3JKwmnjGMkcpc7CKfkEr6DUgj8IdxxoRknJQ0RmmNIDD68InKBjqkAUmmB0L0IfiQDxnC2k4UE1O372BF2o%2FvS%2F6E59Hs%2FWQrABKWJbNBrMq8V71w6Y7Jq%2FGBYooFk9fiiaU9Zak4ky4c%2BBY%2F08SA5hT1ilSGMfiDmONjsVJ0tOI0sj99CZuEdcofniEmGM4cPVkImHW3UQNMsyM8Yq0aCuzcwB%2FBg3OliQBHu%2B7u3Py%2Bh7f%2F5WfnqWM0GfJjUaqMhFROhGW24RgS1HLT&X-Amz-Signature=65750f0e7c6fd37d1afae620d8f6bef0b6f8085d4f053387e30efcd4f213150d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642XF3XJ3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3DwrflfauwOnSIWjI6h9WgolWZqK4mXmF1Lues3flYwIhAIrhNjUmSFapFo2V8ZX%2FxTCnd1xS4%2FfM%2BjXqQd1otWLwKv8DCHsQABoMNjM3NDIzMTgzODA1Igz2EwbWzOCoSlv4E34q3AO6r83DMJ4zb0wEuZoBeXiiNrFmUJmAsvyyIZ44EBP8bqoQAyjHgi%2B1R6IPvRkXgvGHEt5mI4ylccEHTtrn3giXGoLlPgrIl%2Fb266KYpcMuOH1aWWURxeGH5yTzYkp3Vo3mIAnybv4xQs%2FrQmq1vzoPVUYchKffKcDNJPyZ%2FhdJbLzGD1yTBtVACFgbniGZtg4njeLFcp4zleggX7erlOd7yF25R4qL%2FUPNRvZmIB0eRWYKVL5mhvASSorfy5iKuqy9Is9BtAtZZe961gFdjYeuPFxTJYumR714xLtEYO%2BF3EggmDvAhKcIcPd4j5ujiClns4rGnxyi4AYonzBMl2wnGeUH3KH68wukLk%2FidIqhKYNpNhAwkJg811dkJ675A7ra9Hiiuj0QanOf62vYkEyWTB1aQq%2Fj7IvfDQav4PHlw7uIIu567yzR44Ek%2B8%2FFiZ6xLK5rtQo1AVqUWpMUPfvy7wvwHWdyxkd0R2UR4OA8YUD2ibeQoQaiZG7wQqv5I%2BBMoJKgqdma1ykDE6TeEd37wUDAPRa3VsQrjana5FRFUZg%2Bg90LzRF4wnSRetUXaHv1uNVRKFwamJLzc9A3JKwmnjGMkcpc7CKfkEr6DUgj8IdxxoRknJQ0RmmNIDD68InKBjqkAUmmB0L0IfiQDxnC2k4UE1O372BF2o%2FvS%2F6E59Hs%2FWQrABKWJbNBrMq8V71w6Y7Jq%2FGBYooFk9fiiaU9Zak4ky4c%2BBY%2F08SA5hT1ilSGMfiDmONjsVJ0tOI0sj99CZuEdcofniEmGM4cPVkImHW3UQNMsyM8Yq0aCuzcwB%2FBg3OliQBHu%2B7u3Py%2Bh7f%2F5WfnqWM0GfJjUaqMhFROhGW24RgS1HLT&X-Amz-Signature=3e4c7fb8b3e8b0bd53c4e1317df958a6e601a74b117309365edd729a9a02e77d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
