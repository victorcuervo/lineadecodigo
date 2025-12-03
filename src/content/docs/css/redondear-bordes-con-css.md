---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROC4NB6M%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIAbgsccHFC%2FJOZrCTWeXZgi6rjWIv9N%2FY4otj9YxlaS0AiEAgaL%2Fc4xwCCO%2FhVZUpBH83xsybW5HVmto8nhbIk2WWW4q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDKXpFr3On9uIMqF9bCrcA6pZ2tiq4cyaNwMdwsnRbdqpKJca%2BQdogIcrI2j7E%2FmBZA4SaH9J5krfykYSHi%2BwqEIyLaaqgvcgTHYqKnaaww2o%2Fo2JXPBbeTMKJtgPKtbTKI8TEn%2FyXOQe4%2Bq3drU7M86nIJOMzuLzTWVE8CpCiINBk4YyhBw%2FIdeX02UyuSumFc%2Bk8vWBbAJGa7Bw08D8EemsnqzchNH1xLsNPQrk1RyGOsUjIMkL9L126BE1EBao6cXOnYn4y3ktjf%2Fr1J4el2IdGkubh3Rjgv1EVhcbpp7oIbETh3GUiBDUnHXuhJP8b8gEe08G%2FtkQBw%2FPmOaK2auS6OiyjEWxXiutm05MIqFzZxA23Cj2BT3hI0nZjP2Tucvp7Bhv9ifOpWMHxY1rkXyAQ7FfC%2Bdp5o2eH3LMEscmKVNcT3Yralmo4iEEmXfUztkzcRg%2Bx%2FEM3vtgtlIjylcixX3SKlxV3YEG1DyGcWE9rGYxTPPys8pZZqj%2FTI7%2BNq6SVg538nZ1jRpFX3t%2Ff9o4Pk%2BiKpyO6lr%2BTPGuJVTodINLcQeHSDPfsqxGpIDS%2B%2Fu7PX5I1NHsmOyd94Lv9wIwIDmAtlHAQK2mVniDylZQwPdH2iLkTZk3HVIRHciCQpmnujy148xPuuaYMLC%2BwskGOqUBC2YS4y2Iyuz7c4n55UMS%2BTsD%2B9QwU6TB42glkDXLef4EmdT10tap3Yn3KIqMs3AwSAadViVGjE%2BJbYH5WOMnQC6HKJFSeqJqWis%2BmLU6rj1ZUF5ZeAydieHoWwa7sc%2F02WRCG%2BWDIFwco%2FJvoySwL%2FRYTMLxzlQDdtxvAsO5UsD8gqEBkbd8BDYHq0m3X565KDtTOqYqGD63L4I0XaspPfP6Uf4T&X-Amz-Signature=95a9d979ea0234692e4ffa46d3f2560d1590dd54bbd72ca871dc026e51ff439e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROC4NB6M%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIAbgsccHFC%2FJOZrCTWeXZgi6rjWIv9N%2FY4otj9YxlaS0AiEAgaL%2Fc4xwCCO%2FhVZUpBH83xsybW5HVmto8nhbIk2WWW4q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDKXpFr3On9uIMqF9bCrcA6pZ2tiq4cyaNwMdwsnRbdqpKJca%2BQdogIcrI2j7E%2FmBZA4SaH9J5krfykYSHi%2BwqEIyLaaqgvcgTHYqKnaaww2o%2Fo2JXPBbeTMKJtgPKtbTKI8TEn%2FyXOQe4%2Bq3drU7M86nIJOMzuLzTWVE8CpCiINBk4YyhBw%2FIdeX02UyuSumFc%2Bk8vWBbAJGa7Bw08D8EemsnqzchNH1xLsNPQrk1RyGOsUjIMkL9L126BE1EBao6cXOnYn4y3ktjf%2Fr1J4el2IdGkubh3Rjgv1EVhcbpp7oIbETh3GUiBDUnHXuhJP8b8gEe08G%2FtkQBw%2FPmOaK2auS6OiyjEWxXiutm05MIqFzZxA23Cj2BT3hI0nZjP2Tucvp7Bhv9ifOpWMHxY1rkXyAQ7FfC%2Bdp5o2eH3LMEscmKVNcT3Yralmo4iEEmXfUztkzcRg%2Bx%2FEM3vtgtlIjylcixX3SKlxV3YEG1DyGcWE9rGYxTPPys8pZZqj%2FTI7%2BNq6SVg538nZ1jRpFX3t%2Ff9o4Pk%2BiKpyO6lr%2BTPGuJVTodINLcQeHSDPfsqxGpIDS%2B%2Fu7PX5I1NHsmOyd94Lv9wIwIDmAtlHAQK2mVniDylZQwPdH2iLkTZk3HVIRHciCQpmnujy148xPuuaYMLC%2BwskGOqUBC2YS4y2Iyuz7c4n55UMS%2BTsD%2B9QwU6TB42glkDXLef4EmdT10tap3Yn3KIqMs3AwSAadViVGjE%2BJbYH5WOMnQC6HKJFSeqJqWis%2BmLU6rj1ZUF5ZeAydieHoWwa7sc%2F02WRCG%2BWDIFwco%2FJvoySwL%2FRYTMLxzlQDdtxvAsO5UsD8gqEBkbd8BDYHq0m3X565KDtTOqYqGD63L4I0XaspPfP6Uf4T&X-Amz-Signature=d91c165a0e659701504799cb31eed3d93ac8c238c452f18d77f06429b6fcc4eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
