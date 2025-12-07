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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QXLEE4F%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T175055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoojhbHjH81BpGxZjiQsmJFouVDoCGVPHWZFAT%2FiST3QIhANcCM5VpYIkI%2FrDC%2BJLDCFXCZXcPM9Yl0EasD3mi0YV8KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbgzlFGSj1imlUk24q3ANMduea7p5Xf%2FJ6u1wP7v02FaXQHUApQVDUAiUpnV8S17mJzHBnUobF9%2FDbJSDElDvBAXq%2FwsmS%2B5CDsFjT1eV4yM9Dl%2BjWs7bqfzxnfEJlC9XAhlrDDjzy5A7YyLC3YuQNiOKQLQ%2F2n5B0TpxJio1%2FVAnLu7If%2BVY3wF4zizl8gkBwOf%2BQd1j6lQ3m20esgUbnUHUIa%2FIvJDwI9MCuM1Zv8i3ZWwakLNlG056WhYHTo3MLD1VdD4QRCIiHBIr%2BrnR7vQ3dsvu8aJKcUBviqndGRjWDaYsX%2FGDweDsCE3GWlYfDZ7j%2BnJZWdxm%2FdWLcQY%2FJAwG7SjpXix0zX9uZtVFmWFInrpUe4uJqx1VYnMZs3vVG67rhJnCa0KGDbUZb76IWciL93vXuhi%2B%2BUUUf5y6RsOylZ%2F3nrvv1T%2BNSzMQn8jJMXIxq0F%2BQLqtYdwPxLx98UdkJ7Z5dS1O9QqeQ9V6lryylSFHgGrvbjsnNzutwNlkQzPTkTknGFvJEdlnETxEihLB2lrrrjUvVbwCHkR9ANXFoLEhRhQ10dDm%2F5upSnP89O37B3fUobS7kWBHn8PwCrc2QwmaJq3uGKr1FuWoZO74Qy%2FNZCAaChD7xrITYxndKH4z1hEJbTRt2WDD2tNbJBjqkAVwLcgJlaw7mz7czHIKVRRiC7PJEpYfFLTzeKTymsNf%2Boa0DYiz%2BK276POuH3pnSPDaf19ONdahCDrzrfgGVFlVKL1jEDmyt71M%2BPA35RI06xvlOly%2BMTY%2BqIWNizxLbkUEqg9%2FDc3A5kN7daZAn9IwS35DR3m%2FRNb%2FmbiGsV9Knkf%2BBtiwhXw1Axjky9nSUuIxeWEPCQADegH6e%2FuNyMJdk%2FNr7&X-Amz-Signature=d22b7e898eaa4ce7e4482b1d149653194d347c35bba665ac31574716864ab1de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QXLEE4F%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T175055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoojhbHjH81BpGxZjiQsmJFouVDoCGVPHWZFAT%2FiST3QIhANcCM5VpYIkI%2FrDC%2BJLDCFXCZXcPM9Yl0EasD3mi0YV8KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbgzlFGSj1imlUk24q3ANMduea7p5Xf%2FJ6u1wP7v02FaXQHUApQVDUAiUpnV8S17mJzHBnUobF9%2FDbJSDElDvBAXq%2FwsmS%2B5CDsFjT1eV4yM9Dl%2BjWs7bqfzxnfEJlC9XAhlrDDjzy5A7YyLC3YuQNiOKQLQ%2F2n5B0TpxJio1%2FVAnLu7If%2BVY3wF4zizl8gkBwOf%2BQd1j6lQ3m20esgUbnUHUIa%2FIvJDwI9MCuM1Zv8i3ZWwakLNlG056WhYHTo3MLD1VdD4QRCIiHBIr%2BrnR7vQ3dsvu8aJKcUBviqndGRjWDaYsX%2FGDweDsCE3GWlYfDZ7j%2BnJZWdxm%2FdWLcQY%2FJAwG7SjpXix0zX9uZtVFmWFInrpUe4uJqx1VYnMZs3vVG67rhJnCa0KGDbUZb76IWciL93vXuhi%2B%2BUUUf5y6RsOylZ%2F3nrvv1T%2BNSzMQn8jJMXIxq0F%2BQLqtYdwPxLx98UdkJ7Z5dS1O9QqeQ9V6lryylSFHgGrvbjsnNzutwNlkQzPTkTknGFvJEdlnETxEihLB2lrrrjUvVbwCHkR9ANXFoLEhRhQ10dDm%2F5upSnP89O37B3fUobS7kWBHn8PwCrc2QwmaJq3uGKr1FuWoZO74Qy%2FNZCAaChD7xrITYxndKH4z1hEJbTRt2WDD2tNbJBjqkAVwLcgJlaw7mz7czHIKVRRiC7PJEpYfFLTzeKTymsNf%2Boa0DYiz%2BK276POuH3pnSPDaf19ONdahCDrzrfgGVFlVKL1jEDmyt71M%2BPA35RI06xvlOly%2BMTY%2BqIWNizxLbkUEqg9%2FDc3A5kN7daZAn9IwS35DR3m%2FRNb%2FmbiGsV9Knkf%2BBtiwhXw1Axjky9nSUuIxeWEPCQADegH6e%2FuNyMJdk%2FNr7&X-Amz-Signature=021ea62fd238ce81f71f71e842c86eaec1e7cd2d00e2072410c5454887cbad31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
