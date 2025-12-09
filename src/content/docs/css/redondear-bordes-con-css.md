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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA2GGV6E%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T100807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEi2xgFYR8M1kN4isg9F788Q9kszcmC0bLv27DrZ4QGjAiEA6jtIUoBXW4JaQd6tvhCEZ3ZhkDUlixRuqHC7QHzldGsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqyStHnfx52gcjUtCrcA3nv7DFYKchVmml0B6u%2BH%2FCgk%2BhcYkWj0JJrhNMORAGn%2BgnEWBBNwUdlDN0%2B5GsHu0BdgWml%2Fhkrgp2%2FPoNDVddj4niMSQhlhRMsXodpi8np5GqrWBBbOTph7KITWhtDby3YBhsLf8MDkZFO8yhaZ6oAmlVfz%2FprPUB%2F%2BHxAhcJxJYPCktTNcnjxfSzMo5v6PvtHP3KIYvcL13zJojKt8iCiJaJdlttCbaL%2FASVWlL9GIgoJ%2FwY4575vlVfv2o0DRdHPFhIjLKZqTxuHr5Mlo55KJhVld3YfNTbZ%2FMS1Ykaft1OBJWyPbMl7EGvukG3e%2BHJ5fosSygYgPZFlMBfe3sdpcxdO%2BsvoguxoIvPv4vnq4%2BB%2F2hR8MbBYWEYDsIgo4ahS1ydeyanUauPuTrjYD%2FR%2FIoTh1xXXLpXYOaQ7shPSduVIZNE4vUPjD7Ij3okKowd0FgJlDwySKHp0bYNIj2J0pOtdqdHNxGSW3hUqqESzZxvrs8XPaOJFcsIasBFm%2FLq8EFvKWdzR47%2FKD7uEYpHsClIBBYsaVx9s4M6zRjBGuGIVUfV9VnDBXnEsuft6iv3hQ70yCCA4DmmlJCzSrnkn7T%2FHyCuP7tFYifiY%2B2iAxO3lbcgXGAv5M85yMK3E38kGOqUB3D2SMxS5ZsfXLl1eiS1xxh88bcaPMD8XVnEaq1yHod2gubYAIYBd9DCd1AOrKZMfrHo5h1XlDLXxpRGe%2FKDhHZy2%2BHozc9SB7RHpF1J1QJxJAoheN31IMsm6qWyHXspwlodLBaV%2F8jrrP2RyniofbIADW6RL8oFfa4mhoqMueR1UTGK8N%2Bxt9jV54WeAL%2BwqJze3hKqFscMZKe%2FlbKG2zoHLyRGx&X-Amz-Signature=58fba971fffe7bd0a53f0839ab9322007cb6a0b0c8805769f0195a5e9a0ff468&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA2GGV6E%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T100807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEi2xgFYR8M1kN4isg9F788Q9kszcmC0bLv27DrZ4QGjAiEA6jtIUoBXW4JaQd6tvhCEZ3ZhkDUlixRuqHC7QHzldGsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqyStHnfx52gcjUtCrcA3nv7DFYKchVmml0B6u%2BH%2FCgk%2BhcYkWj0JJrhNMORAGn%2BgnEWBBNwUdlDN0%2B5GsHu0BdgWml%2Fhkrgp2%2FPoNDVddj4niMSQhlhRMsXodpi8np5GqrWBBbOTph7KITWhtDby3YBhsLf8MDkZFO8yhaZ6oAmlVfz%2FprPUB%2F%2BHxAhcJxJYPCktTNcnjxfSzMo5v6PvtHP3KIYvcL13zJojKt8iCiJaJdlttCbaL%2FASVWlL9GIgoJ%2FwY4575vlVfv2o0DRdHPFhIjLKZqTxuHr5Mlo55KJhVld3YfNTbZ%2FMS1Ykaft1OBJWyPbMl7EGvukG3e%2BHJ5fosSygYgPZFlMBfe3sdpcxdO%2BsvoguxoIvPv4vnq4%2BB%2F2hR8MbBYWEYDsIgo4ahS1ydeyanUauPuTrjYD%2FR%2FIoTh1xXXLpXYOaQ7shPSduVIZNE4vUPjD7Ij3okKowd0FgJlDwySKHp0bYNIj2J0pOtdqdHNxGSW3hUqqESzZxvrs8XPaOJFcsIasBFm%2FLq8EFvKWdzR47%2FKD7uEYpHsClIBBYsaVx9s4M6zRjBGuGIVUfV9VnDBXnEsuft6iv3hQ70yCCA4DmmlJCzSrnkn7T%2FHyCuP7tFYifiY%2B2iAxO3lbcgXGAv5M85yMK3E38kGOqUB3D2SMxS5ZsfXLl1eiS1xxh88bcaPMD8XVnEaq1yHod2gubYAIYBd9DCd1AOrKZMfrHo5h1XlDLXxpRGe%2FKDhHZy2%2BHozc9SB7RHpF1J1QJxJAoheN31IMsm6qWyHXspwlodLBaV%2F8jrrP2RyniofbIADW6RL8oFfa4mhoqMueR1UTGK8N%2Bxt9jV54WeAL%2BwqJze3hKqFscMZKe%2FlbKG2zoHLyRGx&X-Amz-Signature=42bafc850439716416cfdcb1cb262cb4e658a39612f312561e0a04d0e71a894e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
