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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSUKGTQV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T200608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvDfqkPZdkHiwDHXPaDKUAkSj99QFno646jsaS3Gd7jAIgBkMUWItDgwzeuWMd9K7UuuJUX1H6TqjN0WMH4M97JcwqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7EX%2BMQFDZBam9apSrcAybe6ZBAb6OkrjU8F9P41PQNDNpMbaVVjqwdO3Q%2FP%2BcMtJ%2B1OQMdPyRLwSDXt0EoH92AvlejvbRuIRHFTBHUUb1U18aEnjDusUR7tbEw9NlgOQ9CzY2NVNSlS9P6y8YFv3cN24W0yv361uyCoA8fpJecDJl2%2FcISfcP%2BBpa0W2QaDxDbyYs2KN8Iysruy1MGyQjpztntFKg4QzzzKJ%2Bf%2FVLl8rRPuLJV4YAWktGhw6ooljAoXKhYkw3IA6lbZ8cSxxPQvHou%2BoPRgEGXsYYZlRTuMbIBCioaUnW70hGkmwrjJuShEHTsDN6I8r1Q069vazw944bt60lB%2BcLjuHTrma6iYqlGNMe5SD%2FZyDnA7jkqGApe%2BYmqvfVfew1owiGrGyMs9HaOIlED3yqJM%2FgDcJzMN%2BYzqlsOqR2zz6GMm0ub2rDlarCPdplmFGyvZL9w1PwzJn2e%2FJ8O8%2B5Rv0eVo5nAvO1qyubK754SLZLupBUHrwOc%2F9uk7PMKUSe7J%2FterafNW9g1Vg4Wp2UFYF%2BXpez2CfDTydCCD6l6fGPee0T5slRFsARN6LSwcXml2xJgM2ib2Rcv%2FIQyMSMTaEx84NhJhgQnK6LIjYADsq4DQQSCsPuWAmxmUrY9IjD7MJyo18kGOqUBH4bejCtA0o%2BHA6WgDtKq80wbUSUZ5GyBMrCONYPAeAoCOFSzf6WroZsA3931TYRTskcqsqwsv%2BNHJ%2Fswo5H4cEJXYI9Yx%2FMXTsBA34dr1HQ9GW2w4eJyy7aZnIw23UP2MXNH4WqDjh89HxhA1gNgGgFK%2BDTWgLxx4hGsgjHAQwmyOaFDi%2BxtvHhWizyJ4q%2BbJJFFlFm%2Bp%2Fg1oTvWzU4T1y7MuSpt&X-Amz-Signature=5700f39a8c48d93bede9d115167a8eb7a5d24d1f13e36f8660d10e67bdea1831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSUKGTQV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T200608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvDfqkPZdkHiwDHXPaDKUAkSj99QFno646jsaS3Gd7jAIgBkMUWItDgwzeuWMd9K7UuuJUX1H6TqjN0WMH4M97JcwqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7EX%2BMQFDZBam9apSrcAybe6ZBAb6OkrjU8F9P41PQNDNpMbaVVjqwdO3Q%2FP%2BcMtJ%2B1OQMdPyRLwSDXt0EoH92AvlejvbRuIRHFTBHUUb1U18aEnjDusUR7tbEw9NlgOQ9CzY2NVNSlS9P6y8YFv3cN24W0yv361uyCoA8fpJecDJl2%2FcISfcP%2BBpa0W2QaDxDbyYs2KN8Iysruy1MGyQjpztntFKg4QzzzKJ%2Bf%2FVLl8rRPuLJV4YAWktGhw6ooljAoXKhYkw3IA6lbZ8cSxxPQvHou%2BoPRgEGXsYYZlRTuMbIBCioaUnW70hGkmwrjJuShEHTsDN6I8r1Q069vazw944bt60lB%2BcLjuHTrma6iYqlGNMe5SD%2FZyDnA7jkqGApe%2BYmqvfVfew1owiGrGyMs9HaOIlED3yqJM%2FgDcJzMN%2BYzqlsOqR2zz6GMm0ub2rDlarCPdplmFGyvZL9w1PwzJn2e%2FJ8O8%2B5Rv0eVo5nAvO1qyubK754SLZLupBUHrwOc%2F9uk7PMKUSe7J%2FterafNW9g1Vg4Wp2UFYF%2BXpez2CfDTydCCD6l6fGPee0T5slRFsARN6LSwcXml2xJgM2ib2Rcv%2FIQyMSMTaEx84NhJhgQnK6LIjYADsq4DQQSCsPuWAmxmUrY9IjD7MJyo18kGOqUBH4bejCtA0o%2BHA6WgDtKq80wbUSUZ5GyBMrCONYPAeAoCOFSzf6WroZsA3931TYRTskcqsqwsv%2BNHJ%2Fswo5H4cEJXYI9Yx%2FMXTsBA34dr1HQ9GW2w4eJyy7aZnIw23UP2MXNH4WqDjh89HxhA1gNgGgFK%2BDTWgLxx4hGsgjHAQwmyOaFDi%2BxtvHhWizyJ4q%2BbJJFFlFm%2Bp%2Fg1oTvWzU4T1y7MuSpt&X-Amz-Signature=0cc53d3e54b27b2e69f8b83275668ecd0879009f51590a38d10cafd60328d29b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
