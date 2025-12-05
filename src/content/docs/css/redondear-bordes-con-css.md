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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K6TMYLA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T233000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoQPVo216haurpIdmNTiI4vK73NaySk1J4YPhs8aP57wIgaaXKMbEbVo1pHCDz4Vjg4DckmJk85ZEzPQ0hCXL%2BXrgq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDIfS%2BT66h53ZAaQl3SrcA%2F0M%2FLyoqoP0V1l9ovbiXdiD1BlFT4CFpWlsxck8PUXCqyppntilYCEihWXwuH2L5Ii%2B5lFBaYDb%2Fbd8vxpd932uiCr2RPwcl2SYbtKaOtnpTPq2Ukm%2BYcgQSWck1PuAJOixi3VIHh3JX7xdVCfo5NrUTqGijinuPBcA1q4TcnzZ3XGzdQCc7HTq0d7ubo3Z4mxB%2B40SVngBtKESsNbSfgml49kqcsHrcOY5OOKyj9Df0PLQDLkilwepX8mNnSOLl055LZayhSX%2FjkMXqRGL%2BFcflGVUhWmOZKEhafTvNPcd2mlsfYvPsamwnr2lGkUd%2BowyevuvdFnIrKAN40SayKT55V9rFZY7XRcMvTG7H5sbtxVD1T0HiAQzSxX4fwjO0rdjdeVRorrBEnBJ6eL5qWrAehLfmkRUSHWNYvUDM3UhfRNjKfEwSvRneMu869K8F9TeibZxutaGpnwPBNS41QMZyPExWpQ1s4r4ts%2BtpiHAaPFKcsnFlhye6R3HyNMlCNWsUTYe3bAf07RcZx6UOciZ1zSOHB0%2BEuH%2BBBpeV7wFS3fZcNRsWh61tidLSPGX5u6lfAARyH%2FUwq6jsix0gy8dhAODoRCxzWbw8hmv1iOv9FE%2FA8TjTxzLbLnyMJfGzckGOqUBVGp%2FsDmfGC%2BKLr06YG8v%2B3saND7c2DerYOk6pnGida6C9NIb%2BRgY%2BSqUOP%2BawKkexqrM4EuwmuiK3wdlalD5LvkNhSOmvBQM64v19zL4NfbNMrgM9gxhwjjDdMCh6j5l%2FBBXN2ZhG8C4JwtmzMuV2FG%2FKkEM5t1a72MxoiME2mY9yDEimF7DaSEIZXwT4E0XhJ7t5y%2F3yX3VQQjdznsq0PbnqKbX&X-Amz-Signature=22a71d68ee74cde6f9b6cfe6fea933ccd1c69aa0b1e95def0eeb26dff5302e81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K6TMYLA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T233000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoQPVo216haurpIdmNTiI4vK73NaySk1J4YPhs8aP57wIgaaXKMbEbVo1pHCDz4Vjg4DckmJk85ZEzPQ0hCXL%2BXrgq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDIfS%2BT66h53ZAaQl3SrcA%2F0M%2FLyoqoP0V1l9ovbiXdiD1BlFT4CFpWlsxck8PUXCqyppntilYCEihWXwuH2L5Ii%2B5lFBaYDb%2Fbd8vxpd932uiCr2RPwcl2SYbtKaOtnpTPq2Ukm%2BYcgQSWck1PuAJOixi3VIHh3JX7xdVCfo5NrUTqGijinuPBcA1q4TcnzZ3XGzdQCc7HTq0d7ubo3Z4mxB%2B40SVngBtKESsNbSfgml49kqcsHrcOY5OOKyj9Df0PLQDLkilwepX8mNnSOLl055LZayhSX%2FjkMXqRGL%2BFcflGVUhWmOZKEhafTvNPcd2mlsfYvPsamwnr2lGkUd%2BowyevuvdFnIrKAN40SayKT55V9rFZY7XRcMvTG7H5sbtxVD1T0HiAQzSxX4fwjO0rdjdeVRorrBEnBJ6eL5qWrAehLfmkRUSHWNYvUDM3UhfRNjKfEwSvRneMu869K8F9TeibZxutaGpnwPBNS41QMZyPExWpQ1s4r4ts%2BtpiHAaPFKcsnFlhye6R3HyNMlCNWsUTYe3bAf07RcZx6UOciZ1zSOHB0%2BEuH%2BBBpeV7wFS3fZcNRsWh61tidLSPGX5u6lfAARyH%2FUwq6jsix0gy8dhAODoRCxzWbw8hmv1iOv9FE%2FA8TjTxzLbLnyMJfGzckGOqUBVGp%2FsDmfGC%2BKLr06YG8v%2B3saND7c2DerYOk6pnGida6C9NIb%2BRgY%2BSqUOP%2BawKkexqrM4EuwmuiK3wdlalD5LvkNhSOmvBQM64v19zL4NfbNMrgM9gxhwjjDdMCh6j5l%2FBBXN2ZhG8C4JwtmzMuV2FG%2FKkEM5t1a72MxoiME2mY9yDEimF7DaSEIZXwT4E0XhJ7t5y%2F3yX3VQQjdznsq0PbnqKbX&X-Amz-Signature=c5a0f9a8665a5ef76fc66c55c5d724089dd87faf0f08090824644f17828fb603&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
