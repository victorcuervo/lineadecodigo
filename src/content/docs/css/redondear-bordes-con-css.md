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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4CVQM2H%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T053322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLANinPC7LUXfppZIp0mB4%2Fl%2BYC81fekQBEPE4LksLqwIgbBFVNXWoiGvdwPMX2pAKIX%2FqpJkKKPaq%2FZlpnz%2FoBs4qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BM4%2BaeSl0Vg%2BwskyrcAxoorGkykJSK%2BkEBhi%2BLyav1%2BhZ1QPHOvxwyFXibkPeg49Qy87SJA69EcJdmkylsLb19YpmEq6gcG9lKkEgELGkPQg%2FagjoMxHl3rZdle%2FkHeg0ZfPL0b8gH3q%2FphtiIL245D%2FfTJ16KMaSXPk0wu60qBReTBNxJutmbjLhdnKGxCjoEe6Ssa6W3plZj%2FHA%2FH%2FClMYFWmlmpT6XKvmO%2FRZ%2BPeGWcrrwc6FRjKEjTIWtaNHAQtc9KsikvKqX%2BxSdBg93PTtidKNj1N0hSwg13UBwg2tWRH6sZ2nhlSL6bf%2FXlvW3DzvFRmT8d7EH%2Bd49M0zxEem3LtAYAbzSJE5694CccSyIECAEwd%2FJBjzAh5Qk2Z7wLL7Xo3Po91h9LRxIuJtpkrnWuScp0YMRpzLRcTzAaz%2BMFQgsVW6bRxcfqfDdhZ8MwopntUDvWs0ogRZQCRrdJBlsaqfo5n6F1XMCPV22wN0lgEv3rSOmEXtjCSaRg6o%2FmUJ2BMzdcgtSC1ORmCjd40w4EZ9YeLqyfD8mavsFR%2BoyCW%2BTUN1kAeO%2F2%2F4pcrc%2Fv0v7K5QqiOe%2BF7gwbu7YC9CSR7QRReZJiSuQX8Zgfo3VXAuRqqRfmo7eJdoJ1f6C5E83XirSnzXueMIO02ckGOqUBEvvH4VK16pVuvXKKuftltL2MhmoPg%2FiprMi63qib385l0BWmyrtqGWLEhGaUlQ%2BHRHCYSeLHWJC%2FWqnnMmtXYc4u2zLTXNmrfHYXe7BJS2e0rsRhKoPXtRSHg5i3vU2c66giW2xHzj%2BJoPhCJW%2FZcngdqy9gD2RqyZyw0jt08IA3KVbJQFKdlDTuZmUGEKqFTTAzDLzOr89zriCJibUjYJIA5g33&X-Amz-Signature=6391ea1024de4bf37072b4c073f93825731220134f21e2f9a3e440d459c59899&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4CVQM2H%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T053322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLANinPC7LUXfppZIp0mB4%2Fl%2BYC81fekQBEPE4LksLqwIgbBFVNXWoiGvdwPMX2pAKIX%2FqpJkKKPaq%2FZlpnz%2FoBs4qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BM4%2BaeSl0Vg%2BwskyrcAxoorGkykJSK%2BkEBhi%2BLyav1%2BhZ1QPHOvxwyFXibkPeg49Qy87SJA69EcJdmkylsLb19YpmEq6gcG9lKkEgELGkPQg%2FagjoMxHl3rZdle%2FkHeg0ZfPL0b8gH3q%2FphtiIL245D%2FfTJ16KMaSXPk0wu60qBReTBNxJutmbjLhdnKGxCjoEe6Ssa6W3plZj%2FHA%2FH%2FClMYFWmlmpT6XKvmO%2FRZ%2BPeGWcrrwc6FRjKEjTIWtaNHAQtc9KsikvKqX%2BxSdBg93PTtidKNj1N0hSwg13UBwg2tWRH6sZ2nhlSL6bf%2FXlvW3DzvFRmT8d7EH%2Bd49M0zxEem3LtAYAbzSJE5694CccSyIECAEwd%2FJBjzAh5Qk2Z7wLL7Xo3Po91h9LRxIuJtpkrnWuScp0YMRpzLRcTzAaz%2BMFQgsVW6bRxcfqfDdhZ8MwopntUDvWs0ogRZQCRrdJBlsaqfo5n6F1XMCPV22wN0lgEv3rSOmEXtjCSaRg6o%2FmUJ2BMzdcgtSC1ORmCjd40w4EZ9YeLqyfD8mavsFR%2BoyCW%2BTUN1kAeO%2F2%2F4pcrc%2Fv0v7K5QqiOe%2BF7gwbu7YC9CSR7QRReZJiSuQX8Zgfo3VXAuRqqRfmo7eJdoJ1f6C5E83XirSnzXueMIO02ckGOqUBEvvH4VK16pVuvXKKuftltL2MhmoPg%2FiprMi63qib385l0BWmyrtqGWLEhGaUlQ%2BHRHCYSeLHWJC%2FWqnnMmtXYc4u2zLTXNmrfHYXe7BJS2e0rsRhKoPXtRSHg5i3vU2c66giW2xHzj%2BJoPhCJW%2FZcngdqy9gD2RqyZyw0jt08IA3KVbJQFKdlDTuZmUGEKqFTTAzDLzOr89zriCJibUjYJIA5g33&X-Amz-Signature=570bc908143107987af53bad4ce98777f4132022ab1776774ed20c30bdb17ad5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
