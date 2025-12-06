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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCO2ARDG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T081726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7TzyiIK1u%2F%2Fc%2FYH6wMUntIG8JUyopjBPdw5R%2F3s4tXwIhAP%2BKJTv4w9B598jM0jkL6WCT2bR2QtxJSQto6d%2FuCliaKv8DCHEQABoMNjM3NDIzMTgzODA1Igze%2FeXoA38icRQqPzIq3AMiZkuswXrumJHzr1hWACAytidoVd45w1f6luul5KFC20QM00bAWqHnyE6Vtg3uuR%2BrgThyMkzYWo0njZZun1sxu%2BRS3797F5Bq0oTcsfQAlw4g1bxAaoLVl8mRZEtOVTMlaa699xtZ6eLl4nR2%2BGQ1TUbS4S5UMD28K1l5mbvHofAkAssnaiL%2FmhG8l8gv5AL%2FXb%2F8E55eYpZZvD%2BFnlWK0gNfH7WMi0CZDmU3fGpIw00p5Rjy4mAiecUCgFprXTcfT8KH%2Bkg7VVj0OCWbwiirY9GoXMEBCA8HCPlKry9aOBxhdGeM0VOqK1Piu6GrnsigiU6yh6fdl2fvSNtyHu15BG7PA91iUSSOvPPlFeYof4MZCqr8HH2roN0KzEt5p5N5Gob0kAP7gUHHYSBpYAMnU6x8DWVGn9XGXlyWs1byDbncDkkr1QIaXzAj30YibPyJrrOUjuCc06CPUGtnv8tF5IKCtWQmwUrSIAxa0jLQBmmLpHReaWZzSBmGWAJR4iayAqTBp224xQc9O4Oo1M1YRwV%2Fzjm9K5Z%2B1GGpr4imlEYHVtbW75W2zbX4uWvirfhyOTm%2B4VXQdNSKLhJ%2FS5P0qEYqNOTspoxs%2Fy%2B4os8dzXEWNhMdqwLGyQqAcjD3vM%2FJBjqkAS2ANAdvxjtUWYGuMIPtj4YRic26jvQ7IbXuutjXXGoLQfseIl2J3xlPKLn%2F937NdIgRfabmA4V5o7BLCTCncEOzFRY1VtVJbIHOLiI%2FXepZZ72hFcFqLsPjtc9PSVhp16mmzihWvoma0LG9FXES1beswf7zJQcoiFkZqGlwW7Eb%2F%2FOTkOFTnDFXwFtsGU93%2FjRhvEENrov9n3jMPJrPD9vo38w3&X-Amz-Signature=7b517bab4a9aeb6a8464b23c3ac038443dd11ddb63271a3a2a55167723ac3de6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCO2ARDG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T081726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7TzyiIK1u%2F%2Fc%2FYH6wMUntIG8JUyopjBPdw5R%2F3s4tXwIhAP%2BKJTv4w9B598jM0jkL6WCT2bR2QtxJSQto6d%2FuCliaKv8DCHEQABoMNjM3NDIzMTgzODA1Igze%2FeXoA38icRQqPzIq3AMiZkuswXrumJHzr1hWACAytidoVd45w1f6luul5KFC20QM00bAWqHnyE6Vtg3uuR%2BrgThyMkzYWo0njZZun1sxu%2BRS3797F5Bq0oTcsfQAlw4g1bxAaoLVl8mRZEtOVTMlaa699xtZ6eLl4nR2%2BGQ1TUbS4S5UMD28K1l5mbvHofAkAssnaiL%2FmhG8l8gv5AL%2FXb%2F8E55eYpZZvD%2BFnlWK0gNfH7WMi0CZDmU3fGpIw00p5Rjy4mAiecUCgFprXTcfT8KH%2Bkg7VVj0OCWbwiirY9GoXMEBCA8HCPlKry9aOBxhdGeM0VOqK1Piu6GrnsigiU6yh6fdl2fvSNtyHu15BG7PA91iUSSOvPPlFeYof4MZCqr8HH2roN0KzEt5p5N5Gob0kAP7gUHHYSBpYAMnU6x8DWVGn9XGXlyWs1byDbncDkkr1QIaXzAj30YibPyJrrOUjuCc06CPUGtnv8tF5IKCtWQmwUrSIAxa0jLQBmmLpHReaWZzSBmGWAJR4iayAqTBp224xQc9O4Oo1M1YRwV%2Fzjm9K5Z%2B1GGpr4imlEYHVtbW75W2zbX4uWvirfhyOTm%2B4VXQdNSKLhJ%2FS5P0qEYqNOTspoxs%2Fy%2B4os8dzXEWNhMdqwLGyQqAcjD3vM%2FJBjqkAS2ANAdvxjtUWYGuMIPtj4YRic26jvQ7IbXuutjXXGoLQfseIl2J3xlPKLn%2F937NdIgRfabmA4V5o7BLCTCncEOzFRY1VtVJbIHOLiI%2FXepZZ72hFcFqLsPjtc9PSVhp16mmzihWvoma0LG9FXES1beswf7zJQcoiFkZqGlwW7Eb%2F%2FOTkOFTnDFXwFtsGU93%2FjRhvEENrov9n3jMPJrPD9vo38w3&X-Amz-Signature=ab5990aef9c11e8efb99974cba3016952c0047370dd3a554bc13e738fafdc774&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
