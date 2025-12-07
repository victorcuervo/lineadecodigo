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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBLKR6FW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T090901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQozVT76m98LFZ0YU1dBRj94DXqc%2FycLMXcXPrhme5tgIhALxw59%2B64Ewt3qOGkuTAhWiGsbsIF6khfXhlaguESD4%2FKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzTvhLkRYTM08o%2BWIq3AO5l%2BGMPPtVWQCZoVAz3OTS%2BtcpoLXa%2BShuERW%2B5l7IaDTT8UHuTxoIRDXuXUAyCoHlW4OxAe91w3e%2BVXv36m3WF8Jxkp0%2BSrsNownbOCPHX3ltT832xHcoNm1UYw%2BXKS5OoJ5Jaaua9hjIkywILJKvCrAssGb6WWWNanXU8dxtj6AuFugmDjYqFLMbdevWH7sasHUGeZNw8ou1WERb7GeYt1HUnPC7589Zej2hOiJVxUMt8d18nrJv45W67uI0IoyrA5AFLlWHHrv5syJAxb1781ftNaYmbTTlJ9puZpIW3iQ%2FJGSO2%2BsmK5knEnYhR9R9vh6BVOileUfRAjjbeD8kQgmyGddPXRY%2BUWvrhqiyTep1thIZF8IbJZDj7Jy%2Fb%2BWkD5eycAH5lIDW0hJ2ZtjH3qEiEvNCx%2BqBm%2FmGI4CvLW1gZH%2Bp4mceFrETLFKNdK1b0GPESRgxz%2Fli8Lk0ZcbTR8Wue3UeZNEhuoSiEFiChQ8BqzYaEVkJD0g34sYafitTSvTtv5pTKAipAsDiajX6AI5NlMPtz5ewHoHkgpilCNgRIKiJUjRzH5u2LULAfDsamo3%2FBwkDIeSsyJzYTqz7VdNxJYlQxwcsF3Vm9IhvmdiaT5aQolKy5AI73TD2oNTJBjqkAV5zYaVooZI6KolRIer583lrIWCIDvQkMBnSRFvMkB1zY9NOCBC4poQ6PYUX2XqHlyPB6dchylKCbxpNe%2BgkaOvANET5abzsOnP8xxhydGu%2Bc98YYi4%2BVjhj%2FTEWkkYoBfqh39hBgANGuJiAZeVsSSMfhfoIHB8snRMskKATsvCtG2%2BoBmrQac%2BScj6mJ2NopMeZyGu386SxynN2lExF22DOxT6r&X-Amz-Signature=0e7ad3a7330755b54f99faf5a7ab2467e5a685a6016510e90b3a802a1c1fe8fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBLKR6FW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T090901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQozVT76m98LFZ0YU1dBRj94DXqc%2FycLMXcXPrhme5tgIhALxw59%2B64Ewt3qOGkuTAhWiGsbsIF6khfXhlaguESD4%2FKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzTvhLkRYTM08o%2BWIq3AO5l%2BGMPPtVWQCZoVAz3OTS%2BtcpoLXa%2BShuERW%2B5l7IaDTT8UHuTxoIRDXuXUAyCoHlW4OxAe91w3e%2BVXv36m3WF8Jxkp0%2BSrsNownbOCPHX3ltT832xHcoNm1UYw%2BXKS5OoJ5Jaaua9hjIkywILJKvCrAssGb6WWWNanXU8dxtj6AuFugmDjYqFLMbdevWH7sasHUGeZNw8ou1WERb7GeYt1HUnPC7589Zej2hOiJVxUMt8d18nrJv45W67uI0IoyrA5AFLlWHHrv5syJAxb1781ftNaYmbTTlJ9puZpIW3iQ%2FJGSO2%2BsmK5knEnYhR9R9vh6BVOileUfRAjjbeD8kQgmyGddPXRY%2BUWvrhqiyTep1thIZF8IbJZDj7Jy%2Fb%2BWkD5eycAH5lIDW0hJ2ZtjH3qEiEvNCx%2BqBm%2FmGI4CvLW1gZH%2Bp4mceFrETLFKNdK1b0GPESRgxz%2Fli8Lk0ZcbTR8Wue3UeZNEhuoSiEFiChQ8BqzYaEVkJD0g34sYafitTSvTtv5pTKAipAsDiajX6AI5NlMPtz5ewHoHkgpilCNgRIKiJUjRzH5u2LULAfDsamo3%2FBwkDIeSsyJzYTqz7VdNxJYlQxwcsF3Vm9IhvmdiaT5aQolKy5AI73TD2oNTJBjqkAV5zYaVooZI6KolRIer583lrIWCIDvQkMBnSRFvMkB1zY9NOCBC4poQ6PYUX2XqHlyPB6dchylKCbxpNe%2BgkaOvANET5abzsOnP8xxhydGu%2Bc98YYi4%2BVjhj%2FTEWkkYoBfqh39hBgANGuJiAZeVsSSMfhfoIHB8snRMskKATsvCtG2%2BoBmrQac%2BScj6mJ2NopMeZyGu386SxynN2lExF22DOxT6r&X-Amz-Signature=626705f7de1a66a843db49f6db72bb9cf964621cb331b107ffdd2b42976c5444&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
