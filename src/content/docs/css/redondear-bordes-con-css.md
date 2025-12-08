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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SFVXK2F%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T133033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEhXFb7HFKqPjC4TxisjwMfGIperDdppbgAMWyqAy74AIgBoHoGa5IrjJ4jOiCB9SFRz1Q80hivJVYQY9JTMYpwqkqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXwa11XPscTiLxDTircA14xynIJnr%2FdqJzBvWAjF%2BizfBAqMZljgJRPi2UDqNknEUPrpNcUl58u9PJ7LSFXkMr6NXHaSqGz6vkyFpASFVK3qBEpuiHhQ1K7uebgFxheWKF3CsGzdt2%2FFzEQaK7xy5j9tro0lHl%2FhCYnmYic31f0wREZ3U9DXIRfAMARsTSNB3jmCMvwRoKvNNVfEx0mIMKmRd9eJG%2FIdkC%2BsQt5dxkh0oGTtbS49cMXiGXvoQ74V0Oxt%2BpT2PUb3kjwPed4ila1qRrDiOKxxKjC3m7LRicvTSDpvf%2B%2FmU3ysNmk%2F%2BQdx5qjmzCa0OBHPbramBDWLnnBH%2BvAzXwko9jnuclFx6SO8iPbdqEOZV7%2ByO4unLQOE1SDFjWgJxLcmIH6YRDuPiamdYlw5VB%2F5x4YeSQQ4ybBbDBpeozdL0uhquInmg7MHjLaP6lejlJ%2BgDuOH05BtYirH8sypD%2FkOVW2LBINU%2FxjCZDxxWsWi1px3NoTvPLwAT7YBUdm1J0JAtVa8dYrt%2FXWNuBn2%2BHQtzZXzEsrmxe2ecaezEw5QbflQtURBOfvxm%2F%2B24rsKZqll9IV3I85Z6DdF%2Bj2BdgKUgV8xXXXUcZcr8f3RXYeZ0PlyGp31vB08l2JouCDphX8QJFFML%2BQ28kGOqUBd74bY8XYZ11pHxnrLlUz2TLnyufj5imIXQbqpOXjVLYNsLTijOEaYWFqxJ9PTBH%2FsojR5d3%2Fv1YOggFDnr37IeVFfr1Ms9E33UE1fcfe%2B%2BOcfg6xLAjaHifhJSW40PmDiZ4JOFcxjt0J%2FIMOk2TXe%2Bv2O9qTnSMgEVi8sbT%2BC5KyK3NJ4J%2BnSHu93L7kL6VWebbyzVP09R8QbDC4NKuRbu%2FKhpYo&X-Amz-Signature=09d35bfbe2b8ad885dd2119125392b432bee6b9a0bef3bcdb5c8c2d62122d41f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SFVXK2F%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T133033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEhXFb7HFKqPjC4TxisjwMfGIperDdppbgAMWyqAy74AIgBoHoGa5IrjJ4jOiCB9SFRz1Q80hivJVYQY9JTMYpwqkqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXwa11XPscTiLxDTircA14xynIJnr%2FdqJzBvWAjF%2BizfBAqMZljgJRPi2UDqNknEUPrpNcUl58u9PJ7LSFXkMr6NXHaSqGz6vkyFpASFVK3qBEpuiHhQ1K7uebgFxheWKF3CsGzdt2%2FFzEQaK7xy5j9tro0lHl%2FhCYnmYic31f0wREZ3U9DXIRfAMARsTSNB3jmCMvwRoKvNNVfEx0mIMKmRd9eJG%2FIdkC%2BsQt5dxkh0oGTtbS49cMXiGXvoQ74V0Oxt%2BpT2PUb3kjwPed4ila1qRrDiOKxxKjC3m7LRicvTSDpvf%2B%2FmU3ysNmk%2F%2BQdx5qjmzCa0OBHPbramBDWLnnBH%2BvAzXwko9jnuclFx6SO8iPbdqEOZV7%2ByO4unLQOE1SDFjWgJxLcmIH6YRDuPiamdYlw5VB%2F5x4YeSQQ4ybBbDBpeozdL0uhquInmg7MHjLaP6lejlJ%2BgDuOH05BtYirH8sypD%2FkOVW2LBINU%2FxjCZDxxWsWi1px3NoTvPLwAT7YBUdm1J0JAtVa8dYrt%2FXWNuBn2%2BHQtzZXzEsrmxe2ecaezEw5QbflQtURBOfvxm%2F%2B24rsKZqll9IV3I85Z6DdF%2Bj2BdgKUgV8xXXXUcZcr8f3RXYeZ0PlyGp31vB08l2JouCDphX8QJFFML%2BQ28kGOqUBd74bY8XYZ11pHxnrLlUz2TLnyufj5imIXQbqpOXjVLYNsLTijOEaYWFqxJ9PTBH%2FsojR5d3%2Fv1YOggFDnr37IeVFfr1Ms9E33UE1fcfe%2B%2BOcfg6xLAjaHifhJSW40PmDiZ4JOFcxjt0J%2FIMOk2TXe%2Bv2O9qTnSMgEVi8sbT%2BC5KyK3NJ4J%2BnSHu93L7kL6VWebbyzVP09R8QbDC4NKuRbu%2FKhpYo&X-Amz-Signature=5dd2fbb74f17422b8da1ff83b01e0cf5ec2593987f0d6bf69373cbe083dbc0a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
