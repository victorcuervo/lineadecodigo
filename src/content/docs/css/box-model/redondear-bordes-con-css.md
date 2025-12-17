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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4O7AAOR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoNxAbomUDbXFvFYsdcRrUoaJvu4ZQbe2jy%2F%2BjmxbejQIgC6o77Mi88jp62%2Be7OtoJ4UpeZOJUOW7smL26j6CnwkMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDNAugtCdhvZTZZNAiircAz0iVyvAnfLFb3T%2BJG7ExW3JHv4ekbEA1%2B3n2BqdZU02b0%2B5RS5nQLOcFIxMkg9HgLYUbQ5qQFi0jvtq3mOOY4PT7WVHPcnas4QsUaZKznqr6esnBJSq%2BMPpVntz6C6YoSPJW9%2FctI3stYZR6Rr%2BGC8mIL1bQT5uUnP42p3BVJ8KGrwUz%2FRV5s2l%2FIjjd5bQFFZml4dBAANEZQ2QxqD4D%2BBil4M7YDtfV11We5gafuuB5S6nY4LB%2FFZbW%2F1KCq3PboZx7TQg3DvmyONYz%2FfBZfHi8820WQl5b4hZvJ5IJYbprWEf6bkK4gtZYapA1dAe9OdQ8FyhW1vgAqSJdr4muIWgWgMkG3c1bUDtdbNRrU%2BI6TRPPL86fTa7dRke%2BrEiVksmoxz5%2BoQQTG4KTKgt8tq3bt69yh6zgUSd2WbqKmkux86ih3A31zjluJUpLu3qo%2FDkg2CkHZ0bXZkOFltRDa%2FF0LRtPaj9%2Fn%2BGaeCjn3QtitoQP12lMHAqATYMSMliRQRSXcQ%2FqPel9t%2F7BPwMNCy3NAa8fq0Is8fDr84%2F2%2FGnNhY2umCYSCpLSVLSDJxcRwfXRFCpFsoksPRmNX1B19iZyD1l9TLfyl57Rly5O3GuldX9B5zXN3rcsg%2F4MOudicoGOqUB5omcF3unT8jXhFdyMGfBhpRxbutp7lLTpcJc1J%2FRNDidej8jVjBTyAxNJWOWSxhh6zhU5spvicEKfSQwWrdSEKsbBvwd%2BegrH%2BzpWT0OkWKyls4AyTXwzLWEFG2Ak%2B%2BLSSEz5mXaJiTUlS2ye3BdLu9fPHnUXSVYFUj84%2FBjnsocxX%2BiaX3f89jlOzO3LbdvEeRpRlDeHay6Qc0YSjGhpzFIDswK&X-Amz-Signature=ceba9d0e061ff0e276a76ba10111da74d2e5356f0eab5c93ba7d9ae5c4044f86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4O7AAOR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoNxAbomUDbXFvFYsdcRrUoaJvu4ZQbe2jy%2F%2BjmxbejQIgC6o77Mi88jp62%2Be7OtoJ4UpeZOJUOW7smL26j6CnwkMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDNAugtCdhvZTZZNAiircAz0iVyvAnfLFb3T%2BJG7ExW3JHv4ekbEA1%2B3n2BqdZU02b0%2B5RS5nQLOcFIxMkg9HgLYUbQ5qQFi0jvtq3mOOY4PT7WVHPcnas4QsUaZKznqr6esnBJSq%2BMPpVntz6C6YoSPJW9%2FctI3stYZR6Rr%2BGC8mIL1bQT5uUnP42p3BVJ8KGrwUz%2FRV5s2l%2FIjjd5bQFFZml4dBAANEZQ2QxqD4D%2BBil4M7YDtfV11We5gafuuB5S6nY4LB%2FFZbW%2F1KCq3PboZx7TQg3DvmyONYz%2FfBZfHi8820WQl5b4hZvJ5IJYbprWEf6bkK4gtZYapA1dAe9OdQ8FyhW1vgAqSJdr4muIWgWgMkG3c1bUDtdbNRrU%2BI6TRPPL86fTa7dRke%2BrEiVksmoxz5%2BoQQTG4KTKgt8tq3bt69yh6zgUSd2WbqKmkux86ih3A31zjluJUpLu3qo%2FDkg2CkHZ0bXZkOFltRDa%2FF0LRtPaj9%2Fn%2BGaeCjn3QtitoQP12lMHAqATYMSMliRQRSXcQ%2FqPel9t%2F7BPwMNCy3NAa8fq0Is8fDr84%2F2%2FGnNhY2umCYSCpLSVLSDJxcRwfXRFCpFsoksPRmNX1B19iZyD1l9TLfyl57Rly5O3GuldX9B5zXN3rcsg%2F4MOudicoGOqUB5omcF3unT8jXhFdyMGfBhpRxbutp7lLTpcJc1J%2FRNDidej8jVjBTyAxNJWOWSxhh6zhU5spvicEKfSQwWrdSEKsbBvwd%2BegrH%2BzpWT0OkWKyls4AyTXwzLWEFG2Ak%2B%2BLSSEz5mXaJiTUlS2ye3BdLu9fPHnUXSVYFUj84%2FBjnsocxX%2BiaX3f89jlOzO3LbdvEeRpRlDeHay6Qc0YSjGhpzFIDswK&X-Amz-Signature=8b8669c2bd4019c5aae078f5981262ad8f731f4098607b2201fd661ef889a919&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
