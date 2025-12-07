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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVUW4BGV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T095825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5Reunl2Tfw%2BBPAgBen5MuxV1t5cHfTa782pjGum9axAiEAltsa%2BvHQAQ7%2Fu3ANjuSyFpxHL6Ii3jnva%2BMOFpOy9KAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOklUwSdEC1z%2BCzjcircA%2Bz4cpmWix0bhi9KdR15NTIIGvj6KGVo97P2iaHCf0uNos%2FQvvFQrQlIWjc7OYFoDcVS61ndpJ293mLi7hZzWYNl3aXjStVGji2IiRBBrWw0%2FCYLe7vI8RR%2FQa8xk3aQqxVu8SJlETJQlopq2Mt7an9S7RfYQ03KstYbq3LnvClzHOYaKFrCZpDxCpfsZLpklC%2FuWtq71MHubD%2FL2Yhs%2B2YaWXoF7voqWFL%2FfkyFK8SFUcv0JZxZghZp6ZuVhbA6H%2FoayeBZbkzsHNyPVsiPLDNhudAZivcxs6IcAsaKWQltxKAHcKxjjqvLIt76Vztn%2FrclR4jYr9u1w0LaUBcVJfH2xJnCHO%2Bzp8XQqJSn3na0jRzeiVVI2pdxz4R99UkOGqI73%2BZ1dNPE2ldEtyLXCFUADIO1cIc29j1tQmvKetF0rGAZYI7f%2FJr%2BOTXY66bQOXCQeNrSHpps3kZaYw%2BLOs5EQD67Rj%2B%2BaytubpNCVGxjV9oNH8TT6uLXK6fgpOqgl9VrfW9Df%2FsFNSCz4ZNJyKV12RJ8kb67ZF9wfQ%2FG4im%2Fwj06o%2Bqq%2FDOgyQEq0zp85TffYcGG%2FcaUSLPJldHqosLSFVeE0exNt%2BUuleUp8UylF34Zy1JipBH1yFbBMMeZ1ckGOqUBdIbnnp%2BWFwPpu6hJ7gdKeeYv%2BVB5HL6Wnu2ptmumJaCMqa3qqpkdaNyvnQgUEMCtSvjieLZdy5JVQmxI8xBrBWlp3I3SI8U8aURFHwqfrkQNIGjtctsHnlEu15Cut6UEH3zZ69cPtViFC0mYjWEH1yCb%2FCMMg4NQILDoamowf3NqaU7d0IdY3Q1WkSMTUoRZxXAx6Ag%2Bde8S2TPEu8hfhpQudBYz&X-Amz-Signature=b8dd98a3dfcdef63aa4b24ed1e26d32782f561f266bb609f9dbfe9f7650c82a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVUW4BGV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T095825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5Reunl2Tfw%2BBPAgBen5MuxV1t5cHfTa782pjGum9axAiEAltsa%2BvHQAQ7%2Fu3ANjuSyFpxHL6Ii3jnva%2BMOFpOy9KAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOklUwSdEC1z%2BCzjcircA%2Bz4cpmWix0bhi9KdR15NTIIGvj6KGVo97P2iaHCf0uNos%2FQvvFQrQlIWjc7OYFoDcVS61ndpJ293mLi7hZzWYNl3aXjStVGji2IiRBBrWw0%2FCYLe7vI8RR%2FQa8xk3aQqxVu8SJlETJQlopq2Mt7an9S7RfYQ03KstYbq3LnvClzHOYaKFrCZpDxCpfsZLpklC%2FuWtq71MHubD%2FL2Yhs%2B2YaWXoF7voqWFL%2FfkyFK8SFUcv0JZxZghZp6ZuVhbA6H%2FoayeBZbkzsHNyPVsiPLDNhudAZivcxs6IcAsaKWQltxKAHcKxjjqvLIt76Vztn%2FrclR4jYr9u1w0LaUBcVJfH2xJnCHO%2Bzp8XQqJSn3na0jRzeiVVI2pdxz4R99UkOGqI73%2BZ1dNPE2ldEtyLXCFUADIO1cIc29j1tQmvKetF0rGAZYI7f%2FJr%2BOTXY66bQOXCQeNrSHpps3kZaYw%2BLOs5EQD67Rj%2B%2BaytubpNCVGxjV9oNH8TT6uLXK6fgpOqgl9VrfW9Df%2FsFNSCz4ZNJyKV12RJ8kb67ZF9wfQ%2FG4im%2Fwj06o%2Bqq%2FDOgyQEq0zp85TffYcGG%2FcaUSLPJldHqosLSFVeE0exNt%2BUuleUp8UylF34Zy1JipBH1yFbBMMeZ1ckGOqUBdIbnnp%2BWFwPpu6hJ7gdKeeYv%2BVB5HL6Wnu2ptmumJaCMqa3qqpkdaNyvnQgUEMCtSvjieLZdy5JVQmxI8xBrBWlp3I3SI8U8aURFHwqfrkQNIGjtctsHnlEu15Cut6UEH3zZ69cPtViFC0mYjWEH1yCb%2FCMMg4NQILDoamowf3NqaU7d0IdY3Q1WkSMTUoRZxXAx6Ag%2Bde8S2TPEu8hfhpQudBYz&X-Amz-Signature=8eb5daca0072f1eb4036534d9f1f2de1499bea282f59304495a55982532334db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
