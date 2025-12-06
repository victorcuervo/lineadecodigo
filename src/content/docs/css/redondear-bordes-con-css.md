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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RET6Z563%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T125309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZ%2F7qn2vxECviIVTmJjOxPxxkUBvPqURKbZXVS83ztJAiASGv39HmfNwBrMCkeov6PnCIL4p8GLTpSwprlosTbqRyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM2l9d%2FBChxSADilteKtwD2WBNLE4ovJhtlVLE3ta%2B2wdhzwMc4LYXw9T926jyprQU57TY7OFtjXPg0jmxj%2BxS24h5W5ub1CjSLswhYcgNON81VoqTabr13lwqOV6QrB9Zwm3u7xRUIbN2HWfSJ2e4uSw7q7iGpu0hJzkW9J73DYDQKeMQgjaubWCpQSbaOa8C2a1BZ%2BYvPLFS%2F7PjfY6B7N7rv%2BR8aNnULrFiRuFRmABEX7ze68EfpiVNEIZzRY5e3htP%2BRSsLi9Y46FZgY%2BUQRGz0IIeZcAcmA45Kn77ycCaT%2BOISKr2u9Woqi2fqSQ%2FSnhX4xxQc5%2FYo56j8ndOeq5iUGGUQhaYmjriBAZpxy%2FV061oh4Ve3ajHl8m9OlM024loyIJR%2BeTbijpbjqSgJV3A%2BQL9RKty%2B4RxPvwF5B%2B4SRNrkSNK6pcwSBj7pquKuPHmSMwz8d3FyLu0TNPAopcShO8Em4lPtKzWkKV01qH%2FAKB61AdFZmiwCtYhFlqa9ILCWIysKey6x8FbMf711liYkG68L38n7J7BMX3gVHoLL9rt5Q2j2qStDxhGjU15XPqtJp2KCnT5OYZAtsPkx1kbwgsdrJKZ8VT9Kst5JVdsoPFf7wTJ8YIPWSSMu%2Bo0FguyClKio1%2BogbgwkqfQyQY6pgESEZTHeO0t94nhW7M156JNSo9IKnNhbwh5Ht%2FK4oUcal9x8eW%2BUo4g3BJpdMdoeVU6Xqy%2Bf8YclWM5jY5him%2BumlcFcP%2FolIEtAXuMCilFJZkbLIXU8NIDfwtRcLFPVjrMQn5pagd0bQtKCyHrBGeptIKV3%2BJqgBv6K7ZEaZCkFv2CawVa9ONL0qMpvT99BE6lUmC7kNRPvD6IRVzLB40gdcMWw7dp&X-Amz-Signature=62c67af83de1876f8c1587bbc937f3a0822936667dacd18ef738b539c4f6521e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RET6Z563%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T125309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZ%2F7qn2vxECviIVTmJjOxPxxkUBvPqURKbZXVS83ztJAiASGv39HmfNwBrMCkeov6PnCIL4p8GLTpSwprlosTbqRyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM2l9d%2FBChxSADilteKtwD2WBNLE4ovJhtlVLE3ta%2B2wdhzwMc4LYXw9T926jyprQU57TY7OFtjXPg0jmxj%2BxS24h5W5ub1CjSLswhYcgNON81VoqTabr13lwqOV6QrB9Zwm3u7xRUIbN2HWfSJ2e4uSw7q7iGpu0hJzkW9J73DYDQKeMQgjaubWCpQSbaOa8C2a1BZ%2BYvPLFS%2F7PjfY6B7N7rv%2BR8aNnULrFiRuFRmABEX7ze68EfpiVNEIZzRY5e3htP%2BRSsLi9Y46FZgY%2BUQRGz0IIeZcAcmA45Kn77ycCaT%2BOISKr2u9Woqi2fqSQ%2FSnhX4xxQc5%2FYo56j8ndOeq5iUGGUQhaYmjriBAZpxy%2FV061oh4Ve3ajHl8m9OlM024loyIJR%2BeTbijpbjqSgJV3A%2BQL9RKty%2B4RxPvwF5B%2B4SRNrkSNK6pcwSBj7pquKuPHmSMwz8d3FyLu0TNPAopcShO8Em4lPtKzWkKV01qH%2FAKB61AdFZmiwCtYhFlqa9ILCWIysKey6x8FbMf711liYkG68L38n7J7BMX3gVHoLL9rt5Q2j2qStDxhGjU15XPqtJp2KCnT5OYZAtsPkx1kbwgsdrJKZ8VT9Kst5JVdsoPFf7wTJ8YIPWSSMu%2Bo0FguyClKio1%2BogbgwkqfQyQY6pgESEZTHeO0t94nhW7M156JNSo9IKnNhbwh5Ht%2FK4oUcal9x8eW%2BUo4g3BJpdMdoeVU6Xqy%2Bf8YclWM5jY5him%2BumlcFcP%2FolIEtAXuMCilFJZkbLIXU8NIDfwtRcLFPVjrMQn5pagd0bQtKCyHrBGeptIKV3%2BJqgBv6K7ZEaZCkFv2CawVa9ONL0qMpvT99BE6lUmC7kNRPvD6IRVzLB40gdcMWw7dp&X-Amz-Signature=820e1fd2104179c3ab4755f3dc98d3a7d9a488aebcba3bc55a0623c74dbf68fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
