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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ6YPI4X%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T163744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FQ1LhggDngOZ64F33S483HWMQMP%2FzOeShLNTcvYdwBgIgZKrl%2Bf1dJ83RJQk4mOInZJkO8%2FoycP%2FDSVkTJn2tXOcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhzdWlfE6unMLabQCrcA0XmYLSU%2BZNQDyMpe8uiWsqMZ38yWhN8UT8%2FKqXhZ00l9PgjUxFOIT2K3OPRwgCx6ZkIM7uXa8RwjqE0eITRw7IGTIluyz5N%2BucbFeNBqOaZjmnVZLK1QJ%2Fq5YKpJJDBcUuWIEHhkXy4R2R%2FAucadppA4%2FEJM5RtQioBPSOJuXzWz3Go5IGawh5wnvDLEpSufWeRPT1nhKj3ebXFVTaF9kkZwFSD54%2BLFhDPyQU6sZikKR7rxWRw9eTQAMqkOV3DExZdwlyOlS1ewmUqi0b7o6Hj%2FFUc%2BHoOZud2OxPpGYRFX8bXff8VUvuGss4agXvnH4%2FsKJ8WX2R2bmP4bytQfgORwPKwgFKnRa4TlggIhvmhAP9LRZ70hVUDmOILRZCUlRLxPxuIX71caO31BqyQb2GasroT9RG%2FJaZ82m093Oba46jUBG7GcrfmPDYU7WaUK3Ay%2BhCqYxhxdMSNsEq0mTjauvPV%2BxOP%2FXcRjHijEFolFD7TxjquBUfeOOm0SjNMOPikzlRfoYiVfxHW1id1BVZ%2BEHG%2Bj0DaphZWbr0eh9AC%2BOdPXO372a5ez9IWYKIQ1gULZ4FM2uNjBfApknoDNEQ0%2B3ufBgjb%2BP36OTBTubqCyZLFK2EQ5f%2FcWnDEMOq11skGOqUBMbU1PmTPBWacgY439KaPQrusTojZVsGN8NrKU%2BOXpIj62acsQZJ9z6rewoqdoQfbpm2ah0yQR9qHjuyqM1wLqoswuNDpkWABJ5IB%2BKSczfRCoJDZw3Kr6xS%2F88csqT%2FfeXs3mqc8wiiyOApkNoSmJsGlBYKQjOPuoxtJJyM%2BMrPRLG4VGWdZsWxs%2Bj0Whj6Y1vpnxz3N8i1RqS7kV6faQ6whku9M&X-Amz-Signature=2d9d8096850cdf58a6ac153bf2c7491733c696ba7237abd45129dd8d0fd985cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ6YPI4X%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T163744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FQ1LhggDngOZ64F33S483HWMQMP%2FzOeShLNTcvYdwBgIgZKrl%2Bf1dJ83RJQk4mOInZJkO8%2FoycP%2FDSVkTJn2tXOcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhzdWlfE6unMLabQCrcA0XmYLSU%2BZNQDyMpe8uiWsqMZ38yWhN8UT8%2FKqXhZ00l9PgjUxFOIT2K3OPRwgCx6ZkIM7uXa8RwjqE0eITRw7IGTIluyz5N%2BucbFeNBqOaZjmnVZLK1QJ%2Fq5YKpJJDBcUuWIEHhkXy4R2R%2FAucadppA4%2FEJM5RtQioBPSOJuXzWz3Go5IGawh5wnvDLEpSufWeRPT1nhKj3ebXFVTaF9kkZwFSD54%2BLFhDPyQU6sZikKR7rxWRw9eTQAMqkOV3DExZdwlyOlS1ewmUqi0b7o6Hj%2FFUc%2BHoOZud2OxPpGYRFX8bXff8VUvuGss4agXvnH4%2FsKJ8WX2R2bmP4bytQfgORwPKwgFKnRa4TlggIhvmhAP9LRZ70hVUDmOILRZCUlRLxPxuIX71caO31BqyQb2GasroT9RG%2FJaZ82m093Oba46jUBG7GcrfmPDYU7WaUK3Ay%2BhCqYxhxdMSNsEq0mTjauvPV%2BxOP%2FXcRjHijEFolFD7TxjquBUfeOOm0SjNMOPikzlRfoYiVfxHW1id1BVZ%2BEHG%2Bj0DaphZWbr0eh9AC%2BOdPXO372a5ez9IWYKIQ1gULZ4FM2uNjBfApknoDNEQ0%2B3ufBgjb%2BP36OTBTubqCyZLFK2EQ5f%2FcWnDEMOq11skGOqUBMbU1PmTPBWacgY439KaPQrusTojZVsGN8NrKU%2BOXpIj62acsQZJ9z6rewoqdoQfbpm2ah0yQR9qHjuyqM1wLqoswuNDpkWABJ5IB%2BKSczfRCoJDZw3Kr6xS%2F88csqT%2FfeXs3mqc8wiiyOApkNoSmJsGlBYKQjOPuoxtJJyM%2BMrPRLG4VGWdZsWxs%2Bj0Whj6Y1vpnxz3N8i1RqS7kV6faQ6whku9M&X-Amz-Signature=d9d47093ab0ec6a1dd62d9d987bf9cd683ca57b1d007a452626c3fa55346fd17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
