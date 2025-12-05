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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2B7JFJL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T220938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRynR0ifwyLoWJUU8u3VSe17g%2BA2TmmjVA0%2B9ZAw2hrAIhALN64sE%2BcWeSoPS5lZas3arl%2FpzSwH9Xi2CfXepM29E%2BKv8DCGYQABoMNjM3NDIzMTgzODA1IgzWfqySDiyHshZGVNcq3AOh%2FKOHexgDClnMr3F%2BknlhST2TBSkZt6K2%2F%2BVLCPa4zDhX5fBm0X8SWpc%2BefkzS72OEYBoS0QMwqHK5x97iICiZILW3M0bOLX%2BkmMGO37ck0pfGi%2BCwD52IGO2jjAftlmB9aokbdQTSAX0VCTWtMNOwxMNpMnyb8SdXxIyEhL5y2x3Os0LEI2mQV5s1SNPksncwIuQV145BiXPKmtOGHKqQeHySqbuvZu1m%2FVcs0gxh4Q6f5fuDU0oquaTt5WfFVqm7M2lp7dE%2F9b%2FEmRO6kGz8s8V0PUwagonOiASxfARjoW%2B1VHzkCnuPp34FAdM6%2BzRB35C4UF7rGOWvT7VwezPR6OFZ3SUBphQ0RC1nGtBJQ4rn2SOOd4GjE0f9ZsLZDPL%2FfgBg0gmm6IPlib3wRehX%2FZal3Ryp3O8vawIuJkCb3YI9Nkpc6S3hxRZ8RMa6IPLnwmmSOclrPAOzDGcthAnQBIyuvWVhW%2BawDFCJuZPkVAOHrdY3u2Y4JtL1xqTv1dbrb%2B18pOt%2FHt85pK2mhmSB0tq7Z9Jys1q1%2F7hWYbDq%2FpzglmHWsvKfUCP09rQxf7MwM7oApI%2FWqoJr2gxoXXnFETpgW5OUPedW6MuIO%2BcBHMbs8nAD4YO7MFPMzCTi83JBjqkAbbY83pKZhQhPXxdmwsn56eNVWKQDCEbQHYetyH0hs3ACUT39hi4QlQwiRqzUX%2FXefyJOw5vum17ROKcxfkGJ6GvfLk1N7p%2FHwJ8FROYS01GOxwRgotZWALP%2F6GW2XMIUt7NNtPtBLfJSK%2FOpiGHVwBRd7wTpI6ouvjsU75BPlMaossshWbaX3rT0Dr6%2BxCxKpbovtJwhl%2FF8MJZn30kW6HdjXni&X-Amz-Signature=dc62bddabf99f3d09afb82022eb7e8f7eebfe0859ed8c78d7a245daabe25421c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2B7JFJL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T220938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRynR0ifwyLoWJUU8u3VSe17g%2BA2TmmjVA0%2B9ZAw2hrAIhALN64sE%2BcWeSoPS5lZas3arl%2FpzSwH9Xi2CfXepM29E%2BKv8DCGYQABoMNjM3NDIzMTgzODA1IgzWfqySDiyHshZGVNcq3AOh%2FKOHexgDClnMr3F%2BknlhST2TBSkZt6K2%2F%2BVLCPa4zDhX5fBm0X8SWpc%2BefkzS72OEYBoS0QMwqHK5x97iICiZILW3M0bOLX%2BkmMGO37ck0pfGi%2BCwD52IGO2jjAftlmB9aokbdQTSAX0VCTWtMNOwxMNpMnyb8SdXxIyEhL5y2x3Os0LEI2mQV5s1SNPksncwIuQV145BiXPKmtOGHKqQeHySqbuvZu1m%2FVcs0gxh4Q6f5fuDU0oquaTt5WfFVqm7M2lp7dE%2F9b%2FEmRO6kGz8s8V0PUwagonOiASxfARjoW%2B1VHzkCnuPp34FAdM6%2BzRB35C4UF7rGOWvT7VwezPR6OFZ3SUBphQ0RC1nGtBJQ4rn2SOOd4GjE0f9ZsLZDPL%2FfgBg0gmm6IPlib3wRehX%2FZal3Ryp3O8vawIuJkCb3YI9Nkpc6S3hxRZ8RMa6IPLnwmmSOclrPAOzDGcthAnQBIyuvWVhW%2BawDFCJuZPkVAOHrdY3u2Y4JtL1xqTv1dbrb%2B18pOt%2FHt85pK2mhmSB0tq7Z9Jys1q1%2F7hWYbDq%2FpzglmHWsvKfUCP09rQxf7MwM7oApI%2FWqoJr2gxoXXnFETpgW5OUPedW6MuIO%2BcBHMbs8nAD4YO7MFPMzCTi83JBjqkAbbY83pKZhQhPXxdmwsn56eNVWKQDCEbQHYetyH0hs3ACUT39hi4QlQwiRqzUX%2FXefyJOw5vum17ROKcxfkGJ6GvfLk1N7p%2FHwJ8FROYS01GOxwRgotZWALP%2F6GW2XMIUt7NNtPtBLfJSK%2FOpiGHVwBRd7wTpI6ouvjsU75BPlMaossshWbaX3rT0Dr6%2BxCxKpbovtJwhl%2FF8MJZn30kW6HdjXni&X-Amz-Signature=8cc092c7908e4739265d3fda5d522ba53629fef7015103854f9f8f16052b9783&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
