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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXXG3KUI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCDrCqgGIOi9hSM%2FR7wVyizJBayvLtLO90Q2m9xXISlvgIgOiyIWrytyzx6U%2FeAsauQGdBHWB78bMkOvtZZBQxem4Qq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDOpfGh4Y3mguYec66SrcAw777PSg4Y1Ck5A47Sm%2BuU3dIMmIogKVRX%2FhV956jc86Z0ply2IYWgk%2FaeYyJI81Ikz6iinvatZJE%2BsGF9d3qQwIKREyn0EHKEXWBvMl2YwYSb2pdO3Fq749Ng8KYpXXrlTgn7fxD3KNLSksqlrbIn24715iKzkYjdf%2FJct0wm6AJ2jXfh1VV1Va9v5IzJLLAjDSlerUqAAcvf1NNdovI%2FLkzI1f%2BkMETYCYtxn1KOY%2F3vemQ1IiC%2BQh%2BoNMywL5la3gcYlsDfubAFcIvAMBMhqqVnx5XStfADpe3rw8c6elhutpAopv96Q6LF97XvZGRehITvJnA2hrrjeEoO%2FgQbrNZXUjvUoBI%2BxqNq%2FfALK8GChAcNeFwcSx8AWARioo3NbBS6s4uqqnL9wuY%2B9DQ1ZJKZ6yxaaGEKrUBF7uscr6lYROAJdfh14wyYwG8b2p7M2ItHVy%2FA1ibZQesfmWxmtKl8qwPn0hFUw4eP5%2BRguBI1PX6ovyww0k3sa1HadRUH2QQ5bfr7GoI4GElMP%2Fn8WlfDewLcPeAu%2FtZ72RvzzTcEE%2BQfvOj88tV%2Fs4zCfZbYX40Z81Qn7UQzyZMMjyXwBDtESk%2FK6tb2d%2FkOhdCTpzcUQdBYniDGaRYj%2FmMPi9wskGOqUBVZg7RifC5wqDWvoPOdFvbJdBzztI58Ne5My77psHCc1YyQ8aoVflGjCnfqZDWqypYr18K8xkAynQ7JKO0gvtT5ofmuyiSvtSbWIsX5C8vEmVi%2BVuY3DmzKwpAPKl7S%2FxFToaaa1FvcNMRDAwN3jzrVEtr%2FCgWrxh9I4x2ITw5WN0RMx3rEl%2Bx6RDcQdH6gvIrnpqgggxEmPS9jVYeKOTM20862Ea&X-Amz-Signature=6e4015e02214044a48735f48a6514d060ae1b5626898824ee20e320a05249786&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXXG3KUI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCDrCqgGIOi9hSM%2FR7wVyizJBayvLtLO90Q2m9xXISlvgIgOiyIWrytyzx6U%2FeAsauQGdBHWB78bMkOvtZZBQxem4Qq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDOpfGh4Y3mguYec66SrcAw777PSg4Y1Ck5A47Sm%2BuU3dIMmIogKVRX%2FhV956jc86Z0ply2IYWgk%2FaeYyJI81Ikz6iinvatZJE%2BsGF9d3qQwIKREyn0EHKEXWBvMl2YwYSb2pdO3Fq749Ng8KYpXXrlTgn7fxD3KNLSksqlrbIn24715iKzkYjdf%2FJct0wm6AJ2jXfh1VV1Va9v5IzJLLAjDSlerUqAAcvf1NNdovI%2FLkzI1f%2BkMETYCYtxn1KOY%2F3vemQ1IiC%2BQh%2BoNMywL5la3gcYlsDfubAFcIvAMBMhqqVnx5XStfADpe3rw8c6elhutpAopv96Q6LF97XvZGRehITvJnA2hrrjeEoO%2FgQbrNZXUjvUoBI%2BxqNq%2FfALK8GChAcNeFwcSx8AWARioo3NbBS6s4uqqnL9wuY%2B9DQ1ZJKZ6yxaaGEKrUBF7uscr6lYROAJdfh14wyYwG8b2p7M2ItHVy%2FA1ibZQesfmWxmtKl8qwPn0hFUw4eP5%2BRguBI1PX6ovyww0k3sa1HadRUH2QQ5bfr7GoI4GElMP%2Fn8WlfDewLcPeAu%2FtZ72RvzzTcEE%2BQfvOj88tV%2Fs4zCfZbYX40Z81Qn7UQzyZMMjyXwBDtESk%2FK6tb2d%2FkOhdCTpzcUQdBYniDGaRYj%2FmMPi9wskGOqUBVZg7RifC5wqDWvoPOdFvbJdBzztI58Ne5My77psHCc1YyQ8aoVflGjCnfqZDWqypYr18K8xkAynQ7JKO0gvtT5ofmuyiSvtSbWIsX5C8vEmVi%2BVuY3DmzKwpAPKl7S%2FxFToaaa1FvcNMRDAwN3jzrVEtr%2FCgWrxh9I4x2ITw5WN0RMx3rEl%2Bx6RDcQdH6gvIrnpqgggxEmPS9jVYeKOTM20862Ea&X-Amz-Signature=2d8d7378cde1cab6ed027ac8de1ebaef2184f69fa038892a904f1a4e4bb7d797&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
