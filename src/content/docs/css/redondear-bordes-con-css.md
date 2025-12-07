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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6SNMPQM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T224849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICcFK1EQcOrnYyr7g%2BbJkFqk3Hm3aCNa2%2B3br2jyp4BPAiEAu7OFcCGh2ZgclNi3f1P0gcb7SreqYt8Cc6I0NF3T2cUqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9fmeZo1yFAaEqxiyrcA1YqY3lfYtFs%2FLcPRukRuMWx9OPDIf47zhiLvwM6WIsabI8X%2BsROxRtBlSxprUhqSRSDh5tbnZtKR0iUKac6pDXYaB6K7udkrvH%2FNoYGHtTDZnyxyN8pMSpvHe7NSNoWH14Tknb4Ie8xcoQo581dXdJszRUE8zoVQ905RveI0OwxIZxijD5p4o08AV6vyLHXkgmWZc%2F5nme%2Fni%2BW%2BjjAqJzZr%2FaVsYrqbSN0UOzgE47gvl0cRDBGDWhCWDlefTa3In78TM7LwzjFt8icgAh7md2dTKHoSaADSwPB78dc0%2FTTvXbC17uzoe%2BSRbLkmNE2YWjXRe1qWWALBeJEu%2B9RmBZ5GqCBmDC9cHRqtvrmCePnd%2BbDs03Te5EgluJfDFA1g%2FtAP1R68h1zg18N90DbGtokwFAZwIBTq0uHg1%2BtgFLx4ITKWSdKN97Be2QK%2FVSOVnvYGOFxTs%2FE6W7S2%2B8a6yZr4KWdDksMuLWkdkYIyKFu3OXxDWL2OAwD%2B%2FOvk1aZA5lLefOqc19C4aDn0tPhVfd21%2BSnShI38bYYfLy8i5IumgQVMxq8NDXB9XKOF6Q0PSLOQ%2F9AcqsXs%2F9InJPE28cJtHlUH2eXrqXyb4BZRr9t0P59GngEjXctYr0ZMKyF2MkGOqUBqI3uRQZ5duLpPfNDJc%2BelRb5w0OYoVuCEZiwGfjykIKfp1cZEC409WVfuWi1w%2BKfoXGu63pVN7a9%2FLbmm4YPZA%2Bj8k8TEWU%2FmEN5LUFW1PC%2FmppAcn11wVxU4blA8%2BJ1auoRyq3Miwuzn2snrLYteDtryMXeQ8M1Ags2%2FeH9F6OUDS522b9VDEmC01YEwfhpDZyVbff4l5rb%2FOniDJUGV0G85A1g&X-Amz-Signature=8a19f8cb09b0704d8513b3ba953f5451f03bf10b3770994e657859b32c8c063c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6SNMPQM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T224849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICcFK1EQcOrnYyr7g%2BbJkFqk3Hm3aCNa2%2B3br2jyp4BPAiEAu7OFcCGh2ZgclNi3f1P0gcb7SreqYt8Cc6I0NF3T2cUqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9fmeZo1yFAaEqxiyrcA1YqY3lfYtFs%2FLcPRukRuMWx9OPDIf47zhiLvwM6WIsabI8X%2BsROxRtBlSxprUhqSRSDh5tbnZtKR0iUKac6pDXYaB6K7udkrvH%2FNoYGHtTDZnyxyN8pMSpvHe7NSNoWH14Tknb4Ie8xcoQo581dXdJszRUE8zoVQ905RveI0OwxIZxijD5p4o08AV6vyLHXkgmWZc%2F5nme%2Fni%2BW%2BjjAqJzZr%2FaVsYrqbSN0UOzgE47gvl0cRDBGDWhCWDlefTa3In78TM7LwzjFt8icgAh7md2dTKHoSaADSwPB78dc0%2FTTvXbC17uzoe%2BSRbLkmNE2YWjXRe1qWWALBeJEu%2B9RmBZ5GqCBmDC9cHRqtvrmCePnd%2BbDs03Te5EgluJfDFA1g%2FtAP1R68h1zg18N90DbGtokwFAZwIBTq0uHg1%2BtgFLx4ITKWSdKN97Be2QK%2FVSOVnvYGOFxTs%2FE6W7S2%2B8a6yZr4KWdDksMuLWkdkYIyKFu3OXxDWL2OAwD%2B%2FOvk1aZA5lLefOqc19C4aDn0tPhVfd21%2BSnShI38bYYfLy8i5IumgQVMxq8NDXB9XKOF6Q0PSLOQ%2F9AcqsXs%2F9InJPE28cJtHlUH2eXrqXyb4BZRr9t0P59GngEjXctYr0ZMKyF2MkGOqUBqI3uRQZ5duLpPfNDJc%2BelRb5w0OYoVuCEZiwGfjykIKfp1cZEC409WVfuWi1w%2BKfoXGu63pVN7a9%2FLbmm4YPZA%2Bj8k8TEWU%2FmEN5LUFW1PC%2FmppAcn11wVxU4blA8%2BJ1auoRyq3Miwuzn2snrLYteDtryMXeQ8M1Ags2%2FeH9F6OUDS522b9VDEmC01YEwfhpDZyVbff4l5rb%2FOniDJUGV0G85A1g&X-Amz-Signature=0d63bfa1bc156f93b38bd4e9eb2aca802c71263e1ec0965478be479fab83255a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
