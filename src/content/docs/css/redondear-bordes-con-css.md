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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX3RHAX4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T080723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPobA%2F%2FIn3Mv4IupF0GcDYXnEQcSzPW79db7kVy8TQ%2FAiEA2W8eaJrukVbjMU9ERR9GmwAW3K%2B1%2Bpdxz540ZpvMyy0q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDJRiV%2Fxo%2F37rSAY7SyrcA04cu5hBroH5kBeaOCzzp0FIK%2BAmGKSUv1wSs85%2B9FRamN1d%2BgnUu%2F8gvJpPh4WktZeQ7zyXrkdaumvtQyjBMMIRb0HIF1CWODG1We67RK0TI8s8E80nTMtAlWqFNocFB8YOeTqieIVKYZ3W2NzKNDSePNT8klAdG476dlayveJLGoqjo4rqhMDZWDZNiG2i0fpPxnDbvHy0P09KsfDSkOGWTqd1AC4zwj1h%2B%2FhE3g98O0ugS1TtU2sAip47V2f4l88rcJJPaKUaqVPKL1FCFZzYlxBTD9fW6m%2F795vhRkIpIi3AUOK5PXyQ6clMVvxy%2B%2FCYo9SEJJQxRuAlBO3H9hdvtIgYvGzYtePTKqYcdFMt2yICSUkum9%2FlFYMacZzQ%2FYGtCtG9%2Bee8wZzK3mvnzPy%2FbpdlRq16h25LR2YHP9mGKrx6LQ2BKtUZjmwn%2F4oXkeW8fih2mmMsXapa0c1CpWLtHvlJkF1S0emafXXLoCu55mHwiK7xd9SMTvXuV15K8btTqgnid%2BvgXLFZLPOHYqOS%2BWyLwPjIoTfqUuNGKWkuSu3m7hvX6%2FH7RCsIT5MaPmpigkuSNyYSiTfy9yUMcYVMf9%2BHS03gN5evttbnKoYbX531pm%2F6AKf37XxDMOKmyckGOqUBH1BiF4Lva5Qvyt%2FZYXX%2BN3YHZprf8nf4bPAUJyaDtmFGcLRoqmLOWhtMrgUv4cKF9B9D96XZBUrSzX6jCUbP8VO7CS3PiL4OnH8%2BqH2OCw6dI0Wyf1yN0ugwRttIc5%2F0TXqJd3Jg0CP8hhS%2FTB4xSlPE1qHx3vDn7KYda67PDSPABnYAJMD534NUCi4JCi2V%2F4oo9LTE%2BtYnb6qjpvTqFQhFcANh&X-Amz-Signature=5b3343f145bb5638bc08122a10a61f4943d22e17b5c21fff911375e661c3bac5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX3RHAX4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T080723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPobA%2F%2FIn3Mv4IupF0GcDYXnEQcSzPW79db7kVy8TQ%2FAiEA2W8eaJrukVbjMU9ERR9GmwAW3K%2B1%2Bpdxz540ZpvMyy0q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDJRiV%2Fxo%2F37rSAY7SyrcA04cu5hBroH5kBeaOCzzp0FIK%2BAmGKSUv1wSs85%2B9FRamN1d%2BgnUu%2F8gvJpPh4WktZeQ7zyXrkdaumvtQyjBMMIRb0HIF1CWODG1We67RK0TI8s8E80nTMtAlWqFNocFB8YOeTqieIVKYZ3W2NzKNDSePNT8klAdG476dlayveJLGoqjo4rqhMDZWDZNiG2i0fpPxnDbvHy0P09KsfDSkOGWTqd1AC4zwj1h%2B%2FhE3g98O0ugS1TtU2sAip47V2f4l88rcJJPaKUaqVPKL1FCFZzYlxBTD9fW6m%2F795vhRkIpIi3AUOK5PXyQ6clMVvxy%2B%2FCYo9SEJJQxRuAlBO3H9hdvtIgYvGzYtePTKqYcdFMt2yICSUkum9%2FlFYMacZzQ%2FYGtCtG9%2Bee8wZzK3mvnzPy%2FbpdlRq16h25LR2YHP9mGKrx6LQ2BKtUZjmwn%2F4oXkeW8fih2mmMsXapa0c1CpWLtHvlJkF1S0emafXXLoCu55mHwiK7xd9SMTvXuV15K8btTqgnid%2BvgXLFZLPOHYqOS%2BWyLwPjIoTfqUuNGKWkuSu3m7hvX6%2FH7RCsIT5MaPmpigkuSNyYSiTfy9yUMcYVMf9%2BHS03gN5evttbnKoYbX531pm%2F6AKf37XxDMOKmyckGOqUBH1BiF4Lva5Qvyt%2FZYXX%2BN3YHZprf8nf4bPAUJyaDtmFGcLRoqmLOWhtMrgUv4cKF9B9D96XZBUrSzX6jCUbP8VO7CS3PiL4OnH8%2BqH2OCw6dI0Wyf1yN0ugwRttIc5%2F0TXqJd3Jg0CP8hhS%2FTB4xSlPE1qHx3vDn7KYda67PDSPABnYAJMD534NUCi4JCi2V%2F4oo9LTE%2BtYnb6qjpvTqFQhFcANh&X-Amz-Signature=c3fd49224a337be45cfc4db477f3905f683400e7cb725f64aa587ae6b1cc2393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
