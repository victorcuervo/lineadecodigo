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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4NMNOO4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLnajfnCRsti1RDJSJIknsl3evBxu%2BuUVcTspfWTcQqAIgJQuBvoojYXiUeo7LAzDRQDwhTFqXMLhMNiBfXHkyOe4qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFom1S5nrOG2AasAcyrcAz351v4hTaiGUQuVx8Vva5JFhSnlWU97dApxzphXeNlxTTEZ4WM04S%2F%2FgNkbQ9655kvBsvB3eJgU3uD3A%2B6SyVJl%2BLV%2FK3iK3y1pjfyF1YLXRJ2W%2Fq0D5jfxnRfwUxSyLZ%2BimG968CI9HHlKb26qYvtdAH1du9pSZAbzEAwYG4Oodag%2By9P1Cw012DunQcdbY%2BT%2FqvML%2BI48pjmRrpS9EJkzq4uvcev22Q%2BurZJnbHX3figysOdwt5adfN4nQYahvlmCpFLUNydRInF6ozuJUq5qSKIrk1e93115Lcxp0v0ibebreT6VKHcH%2Fivl%2BXQgTorIpplrGuCsZbtft68DqW%2Bzi7%2Fih2MqEKR0KLg8yA1%2F99Wfk%2F%2FMDbw9OQFyMFAP%2F4%2F%2BDjYGQi%2FMOTww8MN20FTRSbN9EquJQrkksa63mXBsZFIKAPo3XK5FRLHxMLZUkKjxQgiptomASp%2FZKopeu5F5SU2kKhR24yDux5nDp52iE9pGDYzkjKG%2FQ1RKb9ZXXvQsikFxSnMBWkt2ISlDHa5B9KDp7t26OtPcyWsxdH4ry8Ll6E2SheP1alB%2FptZzAz7UmUsjEt9sQn2auHK9oFjFK%2FZ1wK3iEC7j6tsy94FJDawuQf2jmDryIIoSMNP%2FisoGOqUBSWYUV6%2BzonIip%2B0DhgHq9yKYtOD%2B%2BGftUbcXmBl97BQKCYKsJ%2FKRtD0Ej3zXwF79Ax%2B4lqs2mGZeh55VYjGDJM%2BEm7xen5pogJ90N3Emi1yVcLai27zHTeGjYe%2BqC18qxNi9jV%2FbQHcXhogVKpwD585qnD%2F%2FgA%2B4lgfMP7QA6WSKJ8EsMm%2B%2FpD4igte3cr%2BiR6%2BfD2K0Y2VNb9KzgJlI6zMIIfdW&X-Amz-Signature=6776cdc4f90affa0e28ff4fdd98ca5ba72a5286d7d2ef4f08cb7b1182d959dba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4NMNOO4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLnajfnCRsti1RDJSJIknsl3evBxu%2BuUVcTspfWTcQqAIgJQuBvoojYXiUeo7LAzDRQDwhTFqXMLhMNiBfXHkyOe4qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFom1S5nrOG2AasAcyrcAz351v4hTaiGUQuVx8Vva5JFhSnlWU97dApxzphXeNlxTTEZ4WM04S%2F%2FgNkbQ9655kvBsvB3eJgU3uD3A%2B6SyVJl%2BLV%2FK3iK3y1pjfyF1YLXRJ2W%2Fq0D5jfxnRfwUxSyLZ%2BimG968CI9HHlKb26qYvtdAH1du9pSZAbzEAwYG4Oodag%2By9P1Cw012DunQcdbY%2BT%2FqvML%2BI48pjmRrpS9EJkzq4uvcev22Q%2BurZJnbHX3figysOdwt5adfN4nQYahvlmCpFLUNydRInF6ozuJUq5qSKIrk1e93115Lcxp0v0ibebreT6VKHcH%2Fivl%2BXQgTorIpplrGuCsZbtft68DqW%2Bzi7%2Fih2MqEKR0KLg8yA1%2F99Wfk%2F%2FMDbw9OQFyMFAP%2F4%2F%2BDjYGQi%2FMOTww8MN20FTRSbN9EquJQrkksa63mXBsZFIKAPo3XK5FRLHxMLZUkKjxQgiptomASp%2FZKopeu5F5SU2kKhR24yDux5nDp52iE9pGDYzkjKG%2FQ1RKb9ZXXvQsikFxSnMBWkt2ISlDHa5B9KDp7t26OtPcyWsxdH4ry8Ll6E2SheP1alB%2FptZzAz7UmUsjEt9sQn2auHK9oFjFK%2FZ1wK3iEC7j6tsy94FJDawuQf2jmDryIIoSMNP%2FisoGOqUBSWYUV6%2BzonIip%2B0DhgHq9yKYtOD%2B%2BGftUbcXmBl97BQKCYKsJ%2FKRtD0Ej3zXwF79Ax%2B4lqs2mGZeh55VYjGDJM%2BEm7xen5pogJ90N3Emi1yVcLai27zHTeGjYe%2BqC18qxNi9jV%2FbQHcXhogVKpwD585qnD%2F%2FgA%2B4lgfMP7QA6WSKJ8EsMm%2B%2FpD4igte3cr%2BiR6%2BfD2K0Y2VNb9KzgJlI6zMIIfdW&X-Amz-Signature=1c7b2f1a154680858bf591513f6ff2868d5e72c5f9e19e7530af4a19310eb640&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
