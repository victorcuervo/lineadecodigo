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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRW24JW6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCsT6tqeQfEOVthT8r2HKytQaY2FqdI2cYCBoysgN%2BWrgIgZPu%2BWbY0LlJjZH%2F0ngbVDXdlciHEw%2FGnUYudCvl%2F1ukq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDLaXb3Su%2BmwBIYzp8ircA7pqC2zTR2FE9y7qkjhqG9wUK2Os4SrWrWaZCtBepgVEEtvYuq3Hdcj25%2B73LDJuOPciCmiLFsHGdN34gNZTvIngVq0hHvgjPX1SGy9QTi8Hb17t0WsZ8ALVjyoE%2FAMCnf0K5v6u03qBAgbhRzvu%2BENOa8WE7pV7Xml4SsFF6cK0Y2l3LG%2BT7sKbwFazbDJJCK7rOM1O9I73jswCW8Hn5Tu6CSH%2FOsxuyn2TG9AiazP63Xkyo2xVc9SfCj0VqcOU9mXW95mrYtC46qEM7I%2Fr6qIVWF4Qhh1o4uHhlczhQNuJmY8zdgd%2FAyolV489kp29zfpTHc8U%2FHvAeznH8aml1pu76qWKm5rln8z%2FGcNiA%2BfUaYSiqmDJs2ggit7U7y43%2BylMZwrYvHJ9ZRT%2FgWGbrCWpQvL5fI9zUNiJT17IWTJ3wJ7r4nyWbscP6NdiN36vudBEX9ME2fCJ4ECrOwQdoNzjgbEvhNM8sfWSh%2BezLUwySt7ETb%2BCwrC6tXYjWVvkYUZVpR7A%2BNo1tdTuEG7wvuHpd%2FI%2B4GohEWXyTkjLwS1QEOpT2tvLGK4rKpWLFekWHUZ0grU%2Fv%2BxT%2BGjyPxKk%2B3Bm7HPupRY63NPZor9Z2SW3sQ0RT0gVoIWlQGjVMKOExskGOqUBBXihSHrEoHMCjcfnW2B%2BGq%2B0Lh2gB68IzjCpbp1VtacjfREv%2Fz461rCSC%2FN6g%2BIbGeOtb3LITL4kFTGW1Fthn0cqVRY2dHWHql9P%2FyB0RjBGyr9m0AphNAZa5dy4K1uXFNpK30fdRiMRMCrU4ezaf72C%2FPzwZJdosXBMiJ%2BZiiaw7%2FQsky5upB1BmiCeUBGjO9Xs%2Fs4AYdX%2FYbJg0LqLjJTfspiU&X-Amz-Signature=83959dd965b825c36f21fa7261298bee760a31bb45764f53c4488dc5a3b7d896&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRW24JW6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCsT6tqeQfEOVthT8r2HKytQaY2FqdI2cYCBoysgN%2BWrgIgZPu%2BWbY0LlJjZH%2F0ngbVDXdlciHEw%2FGnUYudCvl%2F1ukq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDLaXb3Su%2BmwBIYzp8ircA7pqC2zTR2FE9y7qkjhqG9wUK2Os4SrWrWaZCtBepgVEEtvYuq3Hdcj25%2B73LDJuOPciCmiLFsHGdN34gNZTvIngVq0hHvgjPX1SGy9QTi8Hb17t0WsZ8ALVjyoE%2FAMCnf0K5v6u03qBAgbhRzvu%2BENOa8WE7pV7Xml4SsFF6cK0Y2l3LG%2BT7sKbwFazbDJJCK7rOM1O9I73jswCW8Hn5Tu6CSH%2FOsxuyn2TG9AiazP63Xkyo2xVc9SfCj0VqcOU9mXW95mrYtC46qEM7I%2Fr6qIVWF4Qhh1o4uHhlczhQNuJmY8zdgd%2FAyolV489kp29zfpTHc8U%2FHvAeznH8aml1pu76qWKm5rln8z%2FGcNiA%2BfUaYSiqmDJs2ggit7U7y43%2BylMZwrYvHJ9ZRT%2FgWGbrCWpQvL5fI9zUNiJT17IWTJ3wJ7r4nyWbscP6NdiN36vudBEX9ME2fCJ4ECrOwQdoNzjgbEvhNM8sfWSh%2BezLUwySt7ETb%2BCwrC6tXYjWVvkYUZVpR7A%2BNo1tdTuEG7wvuHpd%2FI%2B4GohEWXyTkjLwS1QEOpT2tvLGK4rKpWLFekWHUZ0grU%2Fv%2BxT%2BGjyPxKk%2B3Bm7HPupRY63NPZor9Z2SW3sQ0RT0gVoIWlQGjVMKOExskGOqUBBXihSHrEoHMCjcfnW2B%2BGq%2B0Lh2gB68IzjCpbp1VtacjfREv%2Fz461rCSC%2FN6g%2BIbGeOtb3LITL4kFTGW1Fthn0cqVRY2dHWHql9P%2FyB0RjBGyr9m0AphNAZa5dy4K1uXFNpK30fdRiMRMCrU4ezaf72C%2FPzwZJdosXBMiJ%2BZiiaw7%2FQsky5upB1BmiCeUBGjO9Xs%2Fs4AYdX%2FYbJg0LqLjJTfspiU&X-Amz-Signature=5ca1488fc83e08f04654ac01db7745c42ab5f267daa1542bd3d0ad24972cb151&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
