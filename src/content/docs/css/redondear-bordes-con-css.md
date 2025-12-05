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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPQPMWYP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T203200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1zLspYVyYh1Vt%2BdYrdV0NkQLvsNo7gl8dRzcnKKIxlgIgbJXIminT8t9cVDhS6rB9%2Bj5OCTyMgzWhzxJlkJ7bq64q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDOHTJllTcn05agarwCrcA%2BL34oVd0s11fR4pjxcEsdV8lEsvgmKhZNGtidy7%2F26fzznb8BvT6fXT3H%2F8r9peOjxemXUOmCRjVh%2F9DqT1Ss8luQjfsAdslwpBvag8zRccSojAky%2Fa1Ja7C6%2BdR%2BkMR21S1Zj8%2FcvRrP1ek5wF8O1O0JH8WTHnUwGJA7xk1HdILGqG7dPvSw9rcn5F%2FKNTWC7AysLBnvBqttQC3sAqjE29cIHbKbeFwO%2BuPFiuMY0IyFIdpm1o3QTRMWA0tWcqr7FuviclB5EmjqgPWdV9MGcEF9p6wfDKQD93eNLlaCC1y8QMli9YkN1uZWhNeX2A%2FFnzKMgGUTxHIFALb98W3wlDoo0LsmguWUyXkn9BbsOBV0ATdjM9cdJrmXAqQrzfi5G%2Fkgf%2F9VMywrQYmSxrIUTRs0HbDtqctsozapO840T84GCErksTKitA37kODcM%2BpqTMn5Z5nyL176UCMXJTMi2104194axv1nD0efgOsYe96pMfUPYd%2BUvjcDpxuKYu9NlIbSrFg%2FlGJDLjUMkdwZwT2RFgChyyrPGAPXhDPSex20wnJktuTxRP1vR3G%2BcOeGLPRalNBt5mVWJATOrwAjoPBUdTc3yO6YH%2Bfd8ajXHnRfK7rCrfEHM2D5ENMLb1y8kGOqUBKffp8d8lHaqN8B1lyjJ5S33BdPZwJFYbXln0%2BlGbxAgLARPZRCeehjmEOE%2FYOpfG3AHsolbs85V9N%2FMK1wK6oPGkRlUNHXFOoKdcXNRVrGjIyXLXslT55%2FRK2NbUWmlXOYj07NWkeCQ5CArqHWewTT%2FUQVaQOVq66N6GUZ6E2ONCz6lcObKjT464Met8E3n%2FuJNOk3V5OtfTBuXGTxSL%2FxKYShwL&X-Amz-Signature=f6f5817ea752af596cce4a73a1c9e4eecf97d74d49b2af5659d808aa05e7d8a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPQPMWYP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T203200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1zLspYVyYh1Vt%2BdYrdV0NkQLvsNo7gl8dRzcnKKIxlgIgbJXIminT8t9cVDhS6rB9%2Bj5OCTyMgzWhzxJlkJ7bq64q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDOHTJllTcn05agarwCrcA%2BL34oVd0s11fR4pjxcEsdV8lEsvgmKhZNGtidy7%2F26fzznb8BvT6fXT3H%2F8r9peOjxemXUOmCRjVh%2F9DqT1Ss8luQjfsAdslwpBvag8zRccSojAky%2Fa1Ja7C6%2BdR%2BkMR21S1Zj8%2FcvRrP1ek5wF8O1O0JH8WTHnUwGJA7xk1HdILGqG7dPvSw9rcn5F%2FKNTWC7AysLBnvBqttQC3sAqjE29cIHbKbeFwO%2BuPFiuMY0IyFIdpm1o3QTRMWA0tWcqr7FuviclB5EmjqgPWdV9MGcEF9p6wfDKQD93eNLlaCC1y8QMli9YkN1uZWhNeX2A%2FFnzKMgGUTxHIFALb98W3wlDoo0LsmguWUyXkn9BbsOBV0ATdjM9cdJrmXAqQrzfi5G%2Fkgf%2F9VMywrQYmSxrIUTRs0HbDtqctsozapO840T84GCErksTKitA37kODcM%2BpqTMn5Z5nyL176UCMXJTMi2104194axv1nD0efgOsYe96pMfUPYd%2BUvjcDpxuKYu9NlIbSrFg%2FlGJDLjUMkdwZwT2RFgChyyrPGAPXhDPSex20wnJktuTxRP1vR3G%2BcOeGLPRalNBt5mVWJATOrwAjoPBUdTc3yO6YH%2Bfd8ajXHnRfK7rCrfEHM2D5ENMLb1y8kGOqUBKffp8d8lHaqN8B1lyjJ5S33BdPZwJFYbXln0%2BlGbxAgLARPZRCeehjmEOE%2FYOpfG3AHsolbs85V9N%2FMK1wK6oPGkRlUNHXFOoKdcXNRVrGjIyXLXslT55%2FRK2NbUWmlXOYj07NWkeCQ5CArqHWewTT%2FUQVaQOVq66N6GUZ6E2ONCz6lcObKjT464Met8E3n%2FuJNOk3V5OtfTBuXGTxSL%2FxKYShwL&X-Amz-Signature=9f755e7ce3fd0ef1686f38df8f532f17f6c60960da7c150ff7e9c2258d5c7f6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
