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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBIQOEWV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T041849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAS%2FKJjM8stUsEjsJTyLLurmFsCCD7CFlnMrtSY9WXOMAiEAisFmFK2dQNQlde0jGZ3z0AcqsYGDhkU1zeXM3BYUUX8q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKo2dsqaeR1hNuAg3yrcAyvWrBL4ZvNiFJXYW111MQJVe33IZ99xZjtvHK13PSvcHMgJQxF%2BVAdO30Ha7KRrfGRGU2LFeZ%2FyGbD4xDJcUE0LlPk%2FDczq2NJIfrBnvI2GwyG6toW9T5SEtl8dQEomAkR5Wpw3TsHEV57FDcnIcM4GHBlVsXoPpkKA2Y32tq0SUdOLR%2BDSwFjxMcLM4gJiHiEC6v72MCX%2BUv792rR9bvu28wD6lCjjcoMyI3HjDDOXOXdNY05%2Fm4tFCwpyDkXVX%2BtzK9z4ewy4BpAPTc8pGz16M78n7ymjHaUx8TfERzYcin8GTj7NIxFXUeo6wJl8vMNSKenFtTrQGICq1iBsP4CjLLJuJ8PL8PbvEsxTQUaf2KZn5OPrBK%2Fx3AwoNVv3VqHzKoG8rtrNQe27a%2Bjo9LwHpDcOmnzfVBAw2BWI5SOIPKenU1b3t8invmnNHenxXnTqgDrWYCw%2FHXrI6Mr9YpzO9pJaKODCYiY9CW0zI49yZLfCnv3WzLGFEdUFCFQJaxmI7uuDvGIqg5tV%2Ffo1sMGvSB197SiaIHATGZDit3XWn7EyNsiRGZO5mk%2FoSS59%2FTKZtRSovnQt3b2bB2PAxhGDJJypsytq6bCTdjAVnl4kV4Ge9Q1FHrq0t93NMIStyckGOqUBpFz3dGUIPm9cAb5iNYwSgMbTP7iiLKe7IdUIVh89l%2FQ%2BFeAJTYNxSOt4MzWbY2Vs0GLDoi8vfn7z0QKZL1thY5gl5%2FH%2BHg0XlaqjsPc6x%2BuXUdlmswKnXipGl6jAZM%2FHq7uhHJz6ATy%2BUjcRntSqCbrCKhCy9Q%2FOzdsnaNVlYPzfVL%2BVkDFr9sJpyyUn3guUnKP%2BkCAeIo1i1pAHdu3x9szB6LI6&X-Amz-Signature=b7720c36a2ad859dd2ecbd072bac4e314862e479c434aa53b57624f06a50ec83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBIQOEWV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T041849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAS%2FKJjM8stUsEjsJTyLLurmFsCCD7CFlnMrtSY9WXOMAiEAisFmFK2dQNQlde0jGZ3z0AcqsYGDhkU1zeXM3BYUUX8q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKo2dsqaeR1hNuAg3yrcAyvWrBL4ZvNiFJXYW111MQJVe33IZ99xZjtvHK13PSvcHMgJQxF%2BVAdO30Ha7KRrfGRGU2LFeZ%2FyGbD4xDJcUE0LlPk%2FDczq2NJIfrBnvI2GwyG6toW9T5SEtl8dQEomAkR5Wpw3TsHEV57FDcnIcM4GHBlVsXoPpkKA2Y32tq0SUdOLR%2BDSwFjxMcLM4gJiHiEC6v72MCX%2BUv792rR9bvu28wD6lCjjcoMyI3HjDDOXOXdNY05%2Fm4tFCwpyDkXVX%2BtzK9z4ewy4BpAPTc8pGz16M78n7ymjHaUx8TfERzYcin8GTj7NIxFXUeo6wJl8vMNSKenFtTrQGICq1iBsP4CjLLJuJ8PL8PbvEsxTQUaf2KZn5OPrBK%2Fx3AwoNVv3VqHzKoG8rtrNQe27a%2Bjo9LwHpDcOmnzfVBAw2BWI5SOIPKenU1b3t8invmnNHenxXnTqgDrWYCw%2FHXrI6Mr9YpzO9pJaKODCYiY9CW0zI49yZLfCnv3WzLGFEdUFCFQJaxmI7uuDvGIqg5tV%2Ffo1sMGvSB197SiaIHATGZDit3XWn7EyNsiRGZO5mk%2FoSS59%2FTKZtRSovnQt3b2bB2PAxhGDJJypsytq6bCTdjAVnl4kV4Ge9Q1FHrq0t93NMIStyckGOqUBpFz3dGUIPm9cAb5iNYwSgMbTP7iiLKe7IdUIVh89l%2FQ%2BFeAJTYNxSOt4MzWbY2Vs0GLDoi8vfn7z0QKZL1thY5gl5%2FH%2BHg0XlaqjsPc6x%2BuXUdlmswKnXipGl6jAZM%2FHq7uhHJz6ATy%2BUjcRntSqCbrCKhCy9Q%2FOzdsnaNVlYPzfVL%2BVkDFr9sJpyyUn3guUnKP%2BkCAeIo1i1pAHdu3x9szB6LI6&X-Amz-Signature=9f831e35b086f4421a663532615967c2279f561c67c3b338a4c2c758a68534f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
