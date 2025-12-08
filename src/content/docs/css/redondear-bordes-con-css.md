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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDN2LGXJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T224248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGtDQtouXdYioB1scezGhkPTQkIINFpu9%2BRWXA9%2FDcnxAiEAzCk1jBaUenlXAEC0vGyGnRpg1T6uA9jXjv1FYZSX3MIqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3mDgnehj0QD%2BzZxSrcA5AbSJj4D9d0TZooLmro27qVxU7prFWkPNPruBUTmGU4y0ceGCxRIoVMcyUagf4kaLNvs8q8yrvHuP%2FTA7i1zNAKIAdH3uCTfJKso%2BhUed6kynsZUbJHMS%2Flu7jleQYaOhEgTvLSskpK30wLK8AqiuUOrmgNsyi278t8RctzVbqhrERV00BFkbHcikbUgxA1xhHUB6YwiWsvmI9sjblBj2%2BVPv7uJUe1wThMabQkuss%2BmRe24JbIBxhxG4NY2sG5ZVIaEfLmFJkbcglrlzsQmoaiE5rEjiNJiLZRawFLwyd3J6cdarVguJOVnyFU7WwX6DgY7K%2BLlygrKq1mpM5VeqJeUNTm1cYUJ11J%2FLIjLE%2B4MrQLrqh21sAhETJzwnVj4d%2B3JcF%2BSWjNO5h%2BtX6BYVDB84gi2l8n87q3QC6scrPInzqnUsIT0LKGs8InQmB8f4umxd4a0j9wgRnwDXQ1GqHKPAgUVbR5VDCnuoj1FH4VyXbLeZOCFuXSEWQVNFqfbVTeFf9RYOgU7TlGy0pA7w%2BNrrMmu2bFrjTBOdH%2BmSLRoMBi8MzRAr448gJr%2Big%2BMCQl4sVKF%2B9QteYnQCyho2ZZGtJxU6phu7JVIPXZBkrdyZkkCVXq1l%2FSsDeSMKKi3ckGOqUB2J9QuVBEvsByvEhEXZ2icTQRUj4ZN5stZM5j58vQPW3FxPgYQW2qaVhb0sN8OVEtCfqorflJGuJ7694dm1B6VuSxs93JHbVAyrXnoyPhgp1Cu%2BK260JuXgmIaKZoK%2FBX0JTiGd%2BP%2FQmq3o6jSiEN5mgrCBE8iDJsyF3idoxLkJTOUjJpzq%2BHF0osrpTije5VFGbOy8ygYtgz1x0ZnypB2ajW1PdH&X-Amz-Signature=bfa72fd8ab654031038905d49ad8667c698e538f559ebd0449bae2c299b6e51c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDN2LGXJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T224248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGtDQtouXdYioB1scezGhkPTQkIINFpu9%2BRWXA9%2FDcnxAiEAzCk1jBaUenlXAEC0vGyGnRpg1T6uA9jXjv1FYZSX3MIqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3mDgnehj0QD%2BzZxSrcA5AbSJj4D9d0TZooLmro27qVxU7prFWkPNPruBUTmGU4y0ceGCxRIoVMcyUagf4kaLNvs8q8yrvHuP%2FTA7i1zNAKIAdH3uCTfJKso%2BhUed6kynsZUbJHMS%2Flu7jleQYaOhEgTvLSskpK30wLK8AqiuUOrmgNsyi278t8RctzVbqhrERV00BFkbHcikbUgxA1xhHUB6YwiWsvmI9sjblBj2%2BVPv7uJUe1wThMabQkuss%2BmRe24JbIBxhxG4NY2sG5ZVIaEfLmFJkbcglrlzsQmoaiE5rEjiNJiLZRawFLwyd3J6cdarVguJOVnyFU7WwX6DgY7K%2BLlygrKq1mpM5VeqJeUNTm1cYUJ11J%2FLIjLE%2B4MrQLrqh21sAhETJzwnVj4d%2B3JcF%2BSWjNO5h%2BtX6BYVDB84gi2l8n87q3QC6scrPInzqnUsIT0LKGs8InQmB8f4umxd4a0j9wgRnwDXQ1GqHKPAgUVbR5VDCnuoj1FH4VyXbLeZOCFuXSEWQVNFqfbVTeFf9RYOgU7TlGy0pA7w%2BNrrMmu2bFrjTBOdH%2BmSLRoMBi8MzRAr448gJr%2Big%2BMCQl4sVKF%2B9QteYnQCyho2ZZGtJxU6phu7JVIPXZBkrdyZkkCVXq1l%2FSsDeSMKKi3ckGOqUB2J9QuVBEvsByvEhEXZ2icTQRUj4ZN5stZM5j58vQPW3FxPgYQW2qaVhb0sN8OVEtCfqorflJGuJ7694dm1B6VuSxs93JHbVAyrXnoyPhgp1Cu%2BK260JuXgmIaKZoK%2FBX0JTiGd%2BP%2FQmq3o6jSiEN5mgrCBE8iDJsyF3idoxLkJTOUjJpzq%2BHF0osrpTije5VFGbOy8ygYtgz1x0ZnypB2ajW1PdH&X-Amz-Signature=e079cc3d093efead6985ca65e127e6e131626c7cbde774b30a1c6d5e53c41c0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
