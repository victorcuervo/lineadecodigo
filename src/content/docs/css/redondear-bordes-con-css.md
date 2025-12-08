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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU6N656Z%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T185001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECl2rYgxGrTy%2FJri2USIkBaw675DEU8FmbrN8tGKuEgAiEAv7uhjwUixSKD9F%2BCvoI9SU3mDx4DIE9ldAgMVlr0AoIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3YxanZlijnw8ZmLyrcA4WJSB4%2FV%2BLzUdL7G%2Bgyi0NG0KjFATm82WazPb2t59o%2BrM1WAom1bHSE8qVwwhjh411Jbb4iuLNv8tbj4fL3s%2FOeNF%2Bsx6WDNbCQ%2BpF4xIAxveZgboW1NvF3g04ZNdT%2BQbmxksWz0atXDAt%2BTJmRGtkKJEPe6EE7hn0mZMThrbeO60vMsIM8xQlg5fdLzfUAcsqKTh08iLV2pO33YU%2BJB7e0AgjYGfghNZDCRJRIkkpqMoNTk3tVT31Q%2Fm7owNbsV5usJ2uRBw69H%2BMasaYLtK6C90DwsebW6QkZPrHot%2Fv7JBrb9QprDS6pxyxNSnLeFHJaBTFft0RWcqKbtVSJk9hr4bqGt402IEiIsczTQNHnS6JxXv1wyhJqRUisV4RPd%2B7C2RUdKp7QCpD2WobxCFdQiUv2b2jf%2FZ6utuSNO01jtWL5sr2psR3ZNpvm1Ll91Zl2GVv%2B7r4TQAOZez30DF5wcI%2BLy6k7AV8kYm6YUE1Uefufs2LwleKXp1HwHS3bQaCMFBhhoiqk%2FLnSCGPY5gZ1QNtAQ1TMoTbZJyMgRStlXCIngVKbZgwbFsbrvhDjPqpHqNzezwhIW5wRQ%2Ftts4dmq%2FrDExMRcxgZcdcNJQj6IjnY2CgHuowQ%2B4KpMIe03MkGOqUBHAETGkOeZbsEhMNvtup2cgaBM06x3EJSYb82EX8ew%2BFld8ZdyPffhwWvmfs2X%2BK3EAZ4d4pZ7WG%2FsvUNCVc%2BtMUFc6jIzMJsqm1aNYxgvorgGkGBuecP4bNhT77ftAO5diP4kxEDiurPAXgVaWmTBglavd%2BXlRVqhIiaoVQgf2xfwuRUUJ0nqTRyebn96lV2uf0RGXIljwW0OCzyrxlWJzqBSSJ4&X-Amz-Signature=b7eee3dbbc71ffb57bd000c14bf8fe715bed11fd9a39e59d2edceddf2d0462b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU6N656Z%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T185001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECl2rYgxGrTy%2FJri2USIkBaw675DEU8FmbrN8tGKuEgAiEAv7uhjwUixSKD9F%2BCvoI9SU3mDx4DIE9ldAgMVlr0AoIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3YxanZlijnw8ZmLyrcA4WJSB4%2FV%2BLzUdL7G%2Bgyi0NG0KjFATm82WazPb2t59o%2BrM1WAom1bHSE8qVwwhjh411Jbb4iuLNv8tbj4fL3s%2FOeNF%2Bsx6WDNbCQ%2BpF4xIAxveZgboW1NvF3g04ZNdT%2BQbmxksWz0atXDAt%2BTJmRGtkKJEPe6EE7hn0mZMThrbeO60vMsIM8xQlg5fdLzfUAcsqKTh08iLV2pO33YU%2BJB7e0AgjYGfghNZDCRJRIkkpqMoNTk3tVT31Q%2Fm7owNbsV5usJ2uRBw69H%2BMasaYLtK6C90DwsebW6QkZPrHot%2Fv7JBrb9QprDS6pxyxNSnLeFHJaBTFft0RWcqKbtVSJk9hr4bqGt402IEiIsczTQNHnS6JxXv1wyhJqRUisV4RPd%2B7C2RUdKp7QCpD2WobxCFdQiUv2b2jf%2FZ6utuSNO01jtWL5sr2psR3ZNpvm1Ll91Zl2GVv%2B7r4TQAOZez30DF5wcI%2BLy6k7AV8kYm6YUE1Uefufs2LwleKXp1HwHS3bQaCMFBhhoiqk%2FLnSCGPY5gZ1QNtAQ1TMoTbZJyMgRStlXCIngVKbZgwbFsbrvhDjPqpHqNzezwhIW5wRQ%2Ftts4dmq%2FrDExMRcxgZcdcNJQj6IjnY2CgHuowQ%2B4KpMIe03MkGOqUBHAETGkOeZbsEhMNvtup2cgaBM06x3EJSYb82EX8ew%2BFld8ZdyPffhwWvmfs2X%2BK3EAZ4d4pZ7WG%2FsvUNCVc%2BtMUFc6jIzMJsqm1aNYxgvorgGkGBuecP4bNhT77ftAO5diP4kxEDiurPAXgVaWmTBglavd%2BXlRVqhIiaoVQgf2xfwuRUUJ0nqTRyebn96lV2uf0RGXIljwW0OCzyrxlWJzqBSSJ4&X-Amz-Signature=2eed765369278ccecccf6f1d41e18f756b6560d6f0e8acd49b80257b49a108d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
