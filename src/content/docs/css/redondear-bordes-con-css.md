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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XATQEIVJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T223544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BDTr9CqpU1P1jxlTi7txmH1hMW1k02Ex068mkgKCiegIgWH4U5H%2BcN4tn7lETuZed0uAKMe%2BxVEeFtiOWQMzyBxQqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAUgyaQOk%2B0k5FyPKyrcA%2FJZX4zBNtChkhQKSe2XwnTEfeuL5ZnsvlDkfaUUg3bFficzFrbCYX9PvIXLOqVU6TUkkeFxissm2t%2FrnX0zrF7CczGCGVZDW9TXQJ%2F1oKyd%2FMAnANu5MEQBmsbA5htFPhTYOpVslbYT4SeHE2YD1DcCWyPFn3nZdd5sZGcgctsBJBRWFnmxJCgk3pBtc%2FM%2FgxSQWuJummYZLZAj94axAP87bl5Mb86DTECzB3HZKfFmZcULbMvHDgIBSfEzydK4GA%2B6qgIFTKHOG8b64YttIgGyHFJED4ML74IenINzkdaWifcr69cWS4T%2FSdpiQqe0bBnj9f6BTlK6GqRJthe4MG2e82YJJ9nYcp3hHNINaWp8HhwKVQMO3t5KcC3UwzwmLxkmdS55JtqoPN3f5G2ELqN7YHOsZGsl1XRzrortrKoPtZRiJM5vzMYwfoV5Pd8CaTMSRyWMc3M2mrsH48CQ7TeideKcp4dFjTRB1G2gntki%2BeLzHvE8X79WVA0cTzEh20CTFM41osYomNxWypuW1qpC5aW0NrE3CPGCtKzINAQuAm68cRdt3EfWo%2F2KJC7Aa7hpi689Owm2DGt6C4C6NycZZoSncwjy9tdeZZNqD24wsMPfKTD0w%2B6%2FTuedMJGi3ckGOqUBg7Qv3Gx%2Bfl%2FwI0hOVpWqeGvaZQTIfPSUyeZZPajGLJXpHNzf4RHzG5Y6ImmM6%2BkRnCCYecJkT%2BOpwJJ6mBWqPBFDE9EDHbUYCLiu77f6agGC0KuyEgOI53UQUwiHs29QfOVWuOBKHjYRGiVcnwTQvJj18XFKmpQGX7VttZQc59FGJ9Ga1pQB6SUYSnY1LvGcUjnFS1VB%2BZeyzN4Rta1gjL3uDWWZ&X-Amz-Signature=11bbf4455c94d9cb85545a9bc10dcd49ebb57d70dd7e6e60d21d540cb9b63f69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XATQEIVJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T223544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BDTr9CqpU1P1jxlTi7txmH1hMW1k02Ex068mkgKCiegIgWH4U5H%2BcN4tn7lETuZed0uAKMe%2BxVEeFtiOWQMzyBxQqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAUgyaQOk%2B0k5FyPKyrcA%2FJZX4zBNtChkhQKSe2XwnTEfeuL5ZnsvlDkfaUUg3bFficzFrbCYX9PvIXLOqVU6TUkkeFxissm2t%2FrnX0zrF7CczGCGVZDW9TXQJ%2F1oKyd%2FMAnANu5MEQBmsbA5htFPhTYOpVslbYT4SeHE2YD1DcCWyPFn3nZdd5sZGcgctsBJBRWFnmxJCgk3pBtc%2FM%2FgxSQWuJummYZLZAj94axAP87bl5Mb86DTECzB3HZKfFmZcULbMvHDgIBSfEzydK4GA%2B6qgIFTKHOG8b64YttIgGyHFJED4ML74IenINzkdaWifcr69cWS4T%2FSdpiQqe0bBnj9f6BTlK6GqRJthe4MG2e82YJJ9nYcp3hHNINaWp8HhwKVQMO3t5KcC3UwzwmLxkmdS55JtqoPN3f5G2ELqN7YHOsZGsl1XRzrortrKoPtZRiJM5vzMYwfoV5Pd8CaTMSRyWMc3M2mrsH48CQ7TeideKcp4dFjTRB1G2gntki%2BeLzHvE8X79WVA0cTzEh20CTFM41osYomNxWypuW1qpC5aW0NrE3CPGCtKzINAQuAm68cRdt3EfWo%2F2KJC7Aa7hpi689Owm2DGt6C4C6NycZZoSncwjy9tdeZZNqD24wsMPfKTD0w%2B6%2FTuedMJGi3ckGOqUBg7Qv3Gx%2Bfl%2FwI0hOVpWqeGvaZQTIfPSUyeZZPajGLJXpHNzf4RHzG5Y6ImmM6%2BkRnCCYecJkT%2BOpwJJ6mBWqPBFDE9EDHbUYCLiu77f6agGC0KuyEgOI53UQUwiHs29QfOVWuOBKHjYRGiVcnwTQvJj18XFKmpQGX7VttZQc59FGJ9Ga1pQB6SUYSnY1LvGcUjnFS1VB%2BZeyzN4Rta1gjL3uDWWZ&X-Amz-Signature=398b58af5008984928434e72755aa1c7898ee471b3d241c7d92c41e77add4ddc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
