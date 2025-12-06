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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVSXJMZO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T093943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcL5%2FZmyTTSQqb49SQR0Dc7Lu6PbNU%2BJE0Ir2vlqRlugIgO3ngu6zy%2F0CntA%2FYLtC2Xy8P26lWTdxrzZp45hFydxkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDO2aOkZA65pLIo%2BroyrcA57TKcp5LCeyFh6AFdwCyTF%2BNm%2FF9Sm86wfvOIzXQVssf3UL1oI0QsL6lc0DkHh1HAAC8KBIUhnCeJtDNcIbUzH%2FSnLHGDwDQ1pFQS0qmX1OamhYm5xysMpXhHyoQ2SdVh01rWllZa7MsxvfXPyRrjHSGquoeUOFzO6bsxfmsknoSW%2BgjkA%2FSE6gz0eExNZvtHL9zM1U5ixksGoDtxTtRwCzhRscpgYK%2FGY9e%2BCMG9yVem6foPCp3YHMpD4CmxRAjgDpnzLaziO1d3C4d2%2Fbc0GOvRggsDisBmxP0TheNHyqWCaOdIt%2FEWEwmcu0IfOS68JmMYP%2FZr%2FN7NjiS0BOZ3qXJpGw7IqFrOGclXHd1kjC%2BGH3Htt8Wuy8N6PCd0TQgZrdYQax1q%2FMuhQXKTD8Ug0AVc%2BUNNTNQYP5fZ%2Fh22kfKgXyNrBI9bqlMZ6XUn5VfZalg%2BWWOO9zJ2U92LzcLsqJ%2F%2FhtCpJ62SFmcKvO3X71nKsWpQFa6w8p4eu3Af5nxu78Afe2QQ9zGkoGOyMsIHBwQtUdLm0u7%2BP5LZ4Wt%2Fd%2FdomlPjccFvBR52ekWDwqLhwmvaDRo%2FiNPHF3rHFiWnNgroOLnyitrPegCANJ5wrqhpX73cHHCrp%2BJ8oLMM7rz8kGOqUBKu3A1GOuFB3mBK6XVWdJyFsXKwZT9hk4ezuqnXrWuC8UzLf8DPvI7iAwMp60FYvc1wBT629iMOKqueBRiU3YIA%2Be%2Bv2s9iJBPysaxX1B%2Bvsa63GwgatDCh00uryascgJ2rZmn6A3FFrtkfVCkg6%2BDv1N83S39DrhlBubFcrZ2wiRxN9VU4XGN1u7sZ0QDmwzVv2MHt47FaUESoVCO9uwzzhsIkFw&X-Amz-Signature=a2b6e91ee5653ea25a91dca81274383d6217291883ab48f4a4ae7e7a2a34cfb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVSXJMZO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T093943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcL5%2FZmyTTSQqb49SQR0Dc7Lu6PbNU%2BJE0Ir2vlqRlugIgO3ngu6zy%2F0CntA%2FYLtC2Xy8P26lWTdxrzZp45hFydxkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDO2aOkZA65pLIo%2BroyrcA57TKcp5LCeyFh6AFdwCyTF%2BNm%2FF9Sm86wfvOIzXQVssf3UL1oI0QsL6lc0DkHh1HAAC8KBIUhnCeJtDNcIbUzH%2FSnLHGDwDQ1pFQS0qmX1OamhYm5xysMpXhHyoQ2SdVh01rWllZa7MsxvfXPyRrjHSGquoeUOFzO6bsxfmsknoSW%2BgjkA%2FSE6gz0eExNZvtHL9zM1U5ixksGoDtxTtRwCzhRscpgYK%2FGY9e%2BCMG9yVem6foPCp3YHMpD4CmxRAjgDpnzLaziO1d3C4d2%2Fbc0GOvRggsDisBmxP0TheNHyqWCaOdIt%2FEWEwmcu0IfOS68JmMYP%2FZr%2FN7NjiS0BOZ3qXJpGw7IqFrOGclXHd1kjC%2BGH3Htt8Wuy8N6PCd0TQgZrdYQax1q%2FMuhQXKTD8Ug0AVc%2BUNNTNQYP5fZ%2Fh22kfKgXyNrBI9bqlMZ6XUn5VfZalg%2BWWOO9zJ2U92LzcLsqJ%2F%2FhtCpJ62SFmcKvO3X71nKsWpQFa6w8p4eu3Af5nxu78Afe2QQ9zGkoGOyMsIHBwQtUdLm0u7%2BP5LZ4Wt%2Fd%2FdomlPjccFvBR52ekWDwqLhwmvaDRo%2FiNPHF3rHFiWnNgroOLnyitrPegCANJ5wrqhpX73cHHCrp%2BJ8oLMM7rz8kGOqUBKu3A1GOuFB3mBK6XVWdJyFsXKwZT9hk4ezuqnXrWuC8UzLf8DPvI7iAwMp60FYvc1wBT629iMOKqueBRiU3YIA%2Be%2Bv2s9iJBPysaxX1B%2Bvsa63GwgatDCh00uryascgJ2rZmn6A3FFrtkfVCkg6%2BDv1N83S39DrhlBubFcrZ2wiRxN9VU4XGN1u7sZ0QDmwzVv2MHt47FaUESoVCO9uwzzhsIkFw&X-Amz-Signature=9f9b8fb2712e8681882a55f7df2f841a26a5d0586e5b97b08aa95e4c32d1aa05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
