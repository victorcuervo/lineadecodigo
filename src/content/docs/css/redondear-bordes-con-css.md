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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DRBFLTK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T072249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCt771Ajvul153C0%2BtolqqHMj%2FihV%2FCnA%2FWJXiSNj1jUAIhAIF2Ws%2FaZtRCIFWPuK2MiZre0MRH8j%2FCtF%2B4Fz78IWcjKv8DCEAQABoMNjM3NDIzMTgzODA1Igx6GgC3%2Fc%2F0Pi8%2FA%2BIq3AMUl5Chr4aK1mtrcBLM%2F64qSGGgWtmC2llB5tjG6%2B%2FJ87mX5yogS9aSleYAjSJlREqUxUEr%2FHepnh5cJqokRmFlCHL0bk5NCMshYcc4WClPjm2vlHDvMuO6sSmtSrjhhnj%2FAnCEaXvGWNPgOQaqKhDkIxaduryg%2FLzFAn4qha9DJ%2FYkh%2BhN%2Bq2Xo4%2Bv0Tr3TT24JaAvGwVdOxwh%2BRfWpEcHDyTxl5oFaaMLnvwNeqHFK4JY%2BklVGpNEc%2BYFk0HF1j6KE%2BdVYEzKTQ9oTelNUMksdLvd3Cz%2Btl21EIi%2Bt04jk36JuCQ07Kml6g3mfEf3b8xZqOw9HkO6fyKkgIW21V8jYhIVud08fz3iaSR6RFIQRBQX0y6p4xhaqKx6jh28DPoD3BfFx2Vdjhs8DYrMIQKbf1ctLbBqGTP%2FyygAjbjuvAwti1ZlSlTiwWAylMKXYL31Z3OK0oJQeru7gLt5f1Y1FyvrfwzQmVnCMqeBYcXM3xWl4tf0GmgcdI9Z%2BXQWc1%2B4t8SmNoxPBqoVunBymFamLWJa30doxSNdhF5U3ubfNxi14ttlf3OtfWLkuRZdjxqjvfRUtMh5b5rl6ElK78Py6JYbEbR3l8GWYZFvJu4KUs%2BJkrHxi36c9WGTiDC358TJBjqkAWvLKseOzSSnwn0qSqoaDHIFtLFdVCPmOgP1mZrKX6%2BaYd6GWABcS0NcW1Cuv06ul8PrITwGZkiXyPGNnCIfvBbOwCA0Phu7m%2FUUxrHIEgsGEo3BCM%2FK06K2tPwoipsGQW7Kxcr8Fc0Gbu%2BpJqBJIQQXJ55VKTLC3Q6LBZAWpUqEE4v3H4awvPWTKPsyyjKcjxb07PXJEd7Unpz0BsgdzYGICtb%2F&X-Amz-Signature=e0f415392128746a9730adcc02fcb64ef31c5a0bf5807e8a375b544a8133b9c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DRBFLTK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T072249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCt771Ajvul153C0%2BtolqqHMj%2FihV%2FCnA%2FWJXiSNj1jUAIhAIF2Ws%2FaZtRCIFWPuK2MiZre0MRH8j%2FCtF%2B4Fz78IWcjKv8DCEAQABoMNjM3NDIzMTgzODA1Igx6GgC3%2Fc%2F0Pi8%2FA%2BIq3AMUl5Chr4aK1mtrcBLM%2F64qSGGgWtmC2llB5tjG6%2B%2FJ87mX5yogS9aSleYAjSJlREqUxUEr%2FHepnh5cJqokRmFlCHL0bk5NCMshYcc4WClPjm2vlHDvMuO6sSmtSrjhhnj%2FAnCEaXvGWNPgOQaqKhDkIxaduryg%2FLzFAn4qha9DJ%2FYkh%2BhN%2Bq2Xo4%2Bv0Tr3TT24JaAvGwVdOxwh%2BRfWpEcHDyTxl5oFaaMLnvwNeqHFK4JY%2BklVGpNEc%2BYFk0HF1j6KE%2BdVYEzKTQ9oTelNUMksdLvd3Cz%2Btl21EIi%2Bt04jk36JuCQ07Kml6g3mfEf3b8xZqOw9HkO6fyKkgIW21V8jYhIVud08fz3iaSR6RFIQRBQX0y6p4xhaqKx6jh28DPoD3BfFx2Vdjhs8DYrMIQKbf1ctLbBqGTP%2FyygAjbjuvAwti1ZlSlTiwWAylMKXYL31Z3OK0oJQeru7gLt5f1Y1FyvrfwzQmVnCMqeBYcXM3xWl4tf0GmgcdI9Z%2BXQWc1%2B4t8SmNoxPBqoVunBymFamLWJa30doxSNdhF5U3ubfNxi14ttlf3OtfWLkuRZdjxqjvfRUtMh5b5rl6ElK78Py6JYbEbR3l8GWYZFvJu4KUs%2BJkrHxi36c9WGTiDC358TJBjqkAWvLKseOzSSnwn0qSqoaDHIFtLFdVCPmOgP1mZrKX6%2BaYd6GWABcS0NcW1Cuv06ul8PrITwGZkiXyPGNnCIfvBbOwCA0Phu7m%2FUUxrHIEgsGEo3BCM%2FK06K2tPwoipsGQW7Kxcr8Fc0Gbu%2BpJqBJIQQXJ55VKTLC3Q6LBZAWpUqEE4v3H4awvPWTKPsyyjKcjxb07PXJEd7Unpz0BsgdzYGICtb%2F&X-Amz-Signature=b96c9754f4c368ae41ec400915e9df164ee301b23ae684e720498277ebd6aba3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
