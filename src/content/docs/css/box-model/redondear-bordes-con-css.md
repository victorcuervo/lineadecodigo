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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4FPTLI6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2B3FTndR95ihbka7zGn3EYQdEpX%2FFNT8lRP3RweFCcPwIgFdd%2Bc%2F%2BPczQTUev%2BfnabtY5shm2IXj1rlpO%2FDi2%2BHuoq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDM%2FDly1YWVpqw6ELASrcA2FAgr00KdX3pkmH9UnHJrLb%2F6ttl3TMOgKwHDDLLuLCuKm%2F%2FwRvbiFIUny3XJ%2FFhZngX6oaxvIeLN%2B%2FehEHtivRN9p1YCqpC3wYd14NSlkTcI2rLnXmGeueZfn1B0KMVLR8WEUQED7vCuPcPey4LuvxCpmnxnEwgQqxkWCU4BWu8iPJCa0dqgIT4W%2FPgtQ22yoIjr1NBZKND5sgua0mcUkPAApeBd%2FR9VCP%2Bqo3FGQ3%2BK0zqVJuFHKy7dpVKVStRvc8ukKi2%2Ft%2Bwu6epdEuuKCtSCOWwORIi1sUcIGUiLyrloKP8XWlF6Qqgj%2FCkApif74rOYNlrxFKSON9bPXqF2LhR3AGyKPgpgCp4sc94do4Ac%2BDQ%2FMDhbhiKkJj8xf3mWgborijqXo1fhEKiincz%2BRIj5ChH5OpCspOgS5gpoNdyAeu8D9sERR4WgpOyZuaPnCvbWkGb6y%2F%2BmH%2F6%2BbyKSbSnuzPIaYrH7ldaB32DB72L0S%2BEO7x0SQwArAbRTbkoJRycTCofhA%2BWLYbCT1TPX02l%2BYejyYBqQXrwnwEAA6UMPdqo%2FoiVRyjFurEXbxbLBqqYo2yP4s3E5TqM53sb%2FoNRtjcdfNyIRoTgw56bXLAKDDJoDVmIYHYK%2FZXMMP7h8oGOqUBmdoqTVEHFJt%2Fa0vkfXAKC6c9DlOpMzs2G4wzTYmmQWQzi%2FbcgXahmNNutzG72o4yVA4tPqUWOkt4dKiaRKr3r9wmweDeBc573P2zDTdTQygFxZlkeMi9l22T70P9qFt1jkCCuy4vVsNTDhGi2%2BfVPfCHFAptbSmw%2F5iU0zMzFRIUtl6xGWLq49RKcWKk3hXDO8SA2mFMoMqiztKm1Se1sfnEGSlz&X-Amz-Signature=2aff95228e3e5b36eba7ae38af3d80c954b573e505bbdcaf7435e94aad0bc00d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4FPTLI6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2B3FTndR95ihbka7zGn3EYQdEpX%2FFNT8lRP3RweFCcPwIgFdd%2Bc%2F%2BPczQTUev%2BfnabtY5shm2IXj1rlpO%2FDi2%2BHuoq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDM%2FDly1YWVpqw6ELASrcA2FAgr00KdX3pkmH9UnHJrLb%2F6ttl3TMOgKwHDDLLuLCuKm%2F%2FwRvbiFIUny3XJ%2FFhZngX6oaxvIeLN%2B%2FehEHtivRN9p1YCqpC3wYd14NSlkTcI2rLnXmGeueZfn1B0KMVLR8WEUQED7vCuPcPey4LuvxCpmnxnEwgQqxkWCU4BWu8iPJCa0dqgIT4W%2FPgtQ22yoIjr1NBZKND5sgua0mcUkPAApeBd%2FR9VCP%2Bqo3FGQ3%2BK0zqVJuFHKy7dpVKVStRvc8ukKi2%2Ft%2Bwu6epdEuuKCtSCOWwORIi1sUcIGUiLyrloKP8XWlF6Qqgj%2FCkApif74rOYNlrxFKSON9bPXqF2LhR3AGyKPgpgCp4sc94do4Ac%2BDQ%2FMDhbhiKkJj8xf3mWgborijqXo1fhEKiincz%2BRIj5ChH5OpCspOgS5gpoNdyAeu8D9sERR4WgpOyZuaPnCvbWkGb6y%2F%2BmH%2F6%2BbyKSbSnuzPIaYrH7ldaB32DB72L0S%2BEO7x0SQwArAbRTbkoJRycTCofhA%2BWLYbCT1TPX02l%2BYejyYBqQXrwnwEAA6UMPdqo%2FoiVRyjFurEXbxbLBqqYo2yP4s3E5TqM53sb%2FoNRtjcdfNyIRoTgw56bXLAKDDJoDVmIYHYK%2FZXMMP7h8oGOqUBmdoqTVEHFJt%2Fa0vkfXAKC6c9DlOpMzs2G4wzTYmmQWQzi%2FbcgXahmNNutzG72o4yVA4tPqUWOkt4dKiaRKr3r9wmweDeBc573P2zDTdTQygFxZlkeMi9l22T70P9qFt1jkCCuy4vVsNTDhGi2%2BfVPfCHFAptbSmw%2F5iU0zMzFRIUtl6xGWLq49RKcWKk3hXDO8SA2mFMoMqiztKm1Se1sfnEGSlz&X-Amz-Signature=76e0cb76931b3e4a9bcca5f26c490e4ee47638a1064dc338ed4bb6d2519775a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
