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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHTNZNCN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T194219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKEFRgZcQoimduu6QiN7Yw0zMOcAEZLoicOa4CgMVzBAIgK5TfBYlUjg5eGDxidJ0ZooskonxzUR5Y5cRdsWy6ogsq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDKAFVgPvpuDenxeDeyrcAx%2BdEw%2Fv793wYIyyEfg3zfngGBQV1zMNZyRGCvXHO3DA0P0bCOwNk8AnzWDYLWAq%2Fi8i2mzm%2FUsKHhnCUhLj7gGhZ%2Bm%2BqLkXA78DI%2BYw23ST2IsHuvy6Iwu3jXWBzgXl5OrSCuMDwDL7ZHDgk%2Fei1sNn4jHsLVLiXA2GBQaXlecswZ9l8qqHRgVO1kyuvXpsO7qck9IzOMbYHyp2mjgXFkOWIFrm%2FzoJGD4lGxcJlcbj1uucZd9o2H2PGFKO4bAydL%2FW5Hea7OS5NrQc2urdeI0V6GnZqgSQoaX57d%2BnJ3agYlmd3su%2FZe1pR81Z4pEHQsRXHw60g2o%2FwRIj2u89MaIbH8LoK9MD7ql16ToL7rY%2B4GCsr68hY1cdL%2BPC44EshKV8a09igwu5FaCjQ9K%2Fy8n22oGSq0d8l6U%2FMVbA%2BUWc3m%2FIOJk%2FzZuL0fqdhi8MCkGy2FbvOC6y3aT2eTy7cE%2F5%2F44jjBFOSAAYtqa1IZbewEb%2BZZCJjxMWYFk8bZehdatef2pVjlgDWiZNoJoX%2BEi09GS1x5QoajVxEgRCuav8sH%2BxJZ7zLAvlu0WzYajOAVbChyYbRXwbmbsMceLY8YfBchsaJziuwNMnPxL6ysjwp7vH2WyWfW1E9aUjMJDsy8kGOqUBZuHYGRcRNw3CsxxXiIdGCF4xswHJgwziI9wBq3PddVhAwl17xA04yG1DiShqkf0AxP04FEEtgqNj%2FVwBls1bPtHangJ7m4ScwYTa2JEL20pPCRevxcDZsNMNW0cba1%2FWNkFAuUnk03yv2g3VmSr6s0cNJJpiA2Welt9f9x1TKBQsUJhKHxnVzTnMjNa7Oh7qQ%2BWgayLk0Pmhi0bCtT1GqobbPaiQ&X-Amz-Signature=55d96fc0c73d7ec31fdf95ebaad49b7d02f8f3e6abfd170c4420b26b2db2fd50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHTNZNCN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T194219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKEFRgZcQoimduu6QiN7Yw0zMOcAEZLoicOa4CgMVzBAIgK5TfBYlUjg5eGDxidJ0ZooskonxzUR5Y5cRdsWy6ogsq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDKAFVgPvpuDenxeDeyrcAx%2BdEw%2Fv793wYIyyEfg3zfngGBQV1zMNZyRGCvXHO3DA0P0bCOwNk8AnzWDYLWAq%2Fi8i2mzm%2FUsKHhnCUhLj7gGhZ%2Bm%2BqLkXA78DI%2BYw23ST2IsHuvy6Iwu3jXWBzgXl5OrSCuMDwDL7ZHDgk%2Fei1sNn4jHsLVLiXA2GBQaXlecswZ9l8qqHRgVO1kyuvXpsO7qck9IzOMbYHyp2mjgXFkOWIFrm%2FzoJGD4lGxcJlcbj1uucZd9o2H2PGFKO4bAydL%2FW5Hea7OS5NrQc2urdeI0V6GnZqgSQoaX57d%2BnJ3agYlmd3su%2FZe1pR81Z4pEHQsRXHw60g2o%2FwRIj2u89MaIbH8LoK9MD7ql16ToL7rY%2B4GCsr68hY1cdL%2BPC44EshKV8a09igwu5FaCjQ9K%2Fy8n22oGSq0d8l6U%2FMVbA%2BUWc3m%2FIOJk%2FzZuL0fqdhi8MCkGy2FbvOC6y3aT2eTy7cE%2F5%2F44jjBFOSAAYtqa1IZbewEb%2BZZCJjxMWYFk8bZehdatef2pVjlgDWiZNoJoX%2BEi09GS1x5QoajVxEgRCuav8sH%2BxJZ7zLAvlu0WzYajOAVbChyYbRXwbmbsMceLY8YfBchsaJziuwNMnPxL6ysjwp7vH2WyWfW1E9aUjMJDsy8kGOqUBZuHYGRcRNw3CsxxXiIdGCF4xswHJgwziI9wBq3PddVhAwl17xA04yG1DiShqkf0AxP04FEEtgqNj%2FVwBls1bPtHangJ7m4ScwYTa2JEL20pPCRevxcDZsNMNW0cba1%2FWNkFAuUnk03yv2g3VmSr6s0cNJJpiA2Welt9f9x1TKBQsUJhKHxnVzTnMjNa7Oh7qQ%2BWgayLk0Pmhi0bCtT1GqobbPaiQ&X-Amz-Signature=e75ca4fbe49d251393503346c6c27fcc9cf43ba46317b22828a8f0ab07ab8788&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
