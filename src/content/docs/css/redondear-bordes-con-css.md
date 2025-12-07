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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THZ4BXQH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T062709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfQ4SKm0EwA2dyq5ymXASxchs05v2O%2BeBDJRs5U7E27wIgXq5x%2FctiT26Y4eUa6a4fknPBCgs1c1hV49pjyBeCAZ4qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYsvz1yZ7dHfHFu5SrcAxaXWa6e6PmDbipYACdVoR5e%2FuaieOu6cGbvp0FvZqFseM%2BtQirNW3Mvz7t2r36PBEotnWE7sfCkz508qstsypDbVWM5G1sD7SLm33moLLtt9YvYVvd7LjOeD8pxk9AkZ5k7DnnruXGeApaHpuTiCH0ZFFriHwkvTQxLNuipiVB4Chx0za18pAQCDT29UkFPTNdHERFZgl%2Fe9Bjb%2FjtRDBOQEyDhDPW9SIioNbLnRlwuADnUX10W8iMypBZcREoxnskoqt7NNGdxoOxK2BPs6Ifqghqh2Y46emRXos3sYejx6lTOSuhpIj3KUrTAxRWbmUFkyTaeJQfTn1RmrknhoyC1bIMQ10DAm%2FR1aZeDgVUzOXgzairTS7U8wuh27dCg3ycm%2FL0WtS5IzNUyonuGYYjg6RUDcvbHf9%2F1AsU08ukNidxvAanj%2B%2F2PzqqpAshEmhWeUr238R4icZeV6xq9oSLwOd%2B3c9zo7nHsRR6h7lNdIHDU29Im5SSuAMA%2BJpProo9%2FFyOQ4M7faDjNH9TrQHAWT4%2BZWHrDy12JfRA3UvLWsxY7uGwVlPIVoymD5rxjsSkgS5k08PmZUoHcjj1yRFceQv8tRe2AVgCplF6JNHe9s2ZQ9r8L7pXQK1jJMKWi1MkGOqUBQAzJtkp1DSUMieRQbuvaZFyU5YOlJ4XQmYMEPibW7Q6htxFcVVVZOdpJ1l9dpDLyPwdeVNcK7RfN6YR1rZYx%2FQSXimPLkJ2HL3c8h9MLnXdY7ifZHlhzEsLpv4KS4d1mU7eSypedPSCD53lb8Mkw4309CUi8JJiSRLCQfwsY1EQ%2BEAsacQ7TrkQbidJFCbvTiPF0bCFeRf9BLCzigCRgj2OuAQoM&X-Amz-Signature=3671c6af89cb70dc96aabd59154741a6fd6edad08e09e59c63f0aa97d121f5db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THZ4BXQH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T062709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfQ4SKm0EwA2dyq5ymXASxchs05v2O%2BeBDJRs5U7E27wIgXq5x%2FctiT26Y4eUa6a4fknPBCgs1c1hV49pjyBeCAZ4qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYsvz1yZ7dHfHFu5SrcAxaXWa6e6PmDbipYACdVoR5e%2FuaieOu6cGbvp0FvZqFseM%2BtQirNW3Mvz7t2r36PBEotnWE7sfCkz508qstsypDbVWM5G1sD7SLm33moLLtt9YvYVvd7LjOeD8pxk9AkZ5k7DnnruXGeApaHpuTiCH0ZFFriHwkvTQxLNuipiVB4Chx0za18pAQCDT29UkFPTNdHERFZgl%2Fe9Bjb%2FjtRDBOQEyDhDPW9SIioNbLnRlwuADnUX10W8iMypBZcREoxnskoqt7NNGdxoOxK2BPs6Ifqghqh2Y46emRXos3sYejx6lTOSuhpIj3KUrTAxRWbmUFkyTaeJQfTn1RmrknhoyC1bIMQ10DAm%2FR1aZeDgVUzOXgzairTS7U8wuh27dCg3ycm%2FL0WtS5IzNUyonuGYYjg6RUDcvbHf9%2F1AsU08ukNidxvAanj%2B%2F2PzqqpAshEmhWeUr238R4icZeV6xq9oSLwOd%2B3c9zo7nHsRR6h7lNdIHDU29Im5SSuAMA%2BJpProo9%2FFyOQ4M7faDjNH9TrQHAWT4%2BZWHrDy12JfRA3UvLWsxY7uGwVlPIVoymD5rxjsSkgS5k08PmZUoHcjj1yRFceQv8tRe2AVgCplF6JNHe9s2ZQ9r8L7pXQK1jJMKWi1MkGOqUBQAzJtkp1DSUMieRQbuvaZFyU5YOlJ4XQmYMEPibW7Q6htxFcVVVZOdpJ1l9dpDLyPwdeVNcK7RfN6YR1rZYx%2FQSXimPLkJ2HL3c8h9MLnXdY7ifZHlhzEsLpv4KS4d1mU7eSypedPSCD53lb8Mkw4309CUi8JJiSRLCQfwsY1EQ%2BEAsacQ7TrkQbidJFCbvTiPF0bCFeRf9BLCzigCRgj2OuAQoM&X-Amz-Signature=f0cb631096ef59d620660b0fc424618f79297b319b9d9820459bc06213928b5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
