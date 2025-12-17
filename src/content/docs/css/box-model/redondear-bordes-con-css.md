---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSD4LQQF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGfOsPzjwVmIy%2FlsB3KN3qIJlnFxPHaFfjpjq3v2qJu5AiEAhvriixENfYgkniInJOZRKnCIkPHBPf80t3t4emGHLGsq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDCQue0i%2FUe5NJooKvyrcA2PPaH5K9ZZEkk7Pz2f%2FZgfBIQGLX%2BPIIv9r%2BmAwJBACaVSMGXPLgacy5fQ8rRvgF0pIztfvHs%2BvJPRp6vF442Cv%2F%2BFNQaeSQuGcMivpFf3nVb6bDK9NoAZT7DshSL4lgUPUfNfu1Z3z5TDw8flsdEBSvT5sf%2F4A4k5meoD7gVSKIzNbofth6cZKs1t5KCUXIOjwA0mnRbTiG427WkgC3nUklbVoOYcbUsLIEZxmDpOAB3eg8AfddA4x7s%2FY5q6FjcyN8ZLpGqKd3FC5%2FQAwJqr4vPksLOH9iv%2FKjhZ3ZB%2BF2Ckggm2syUmteoe0l%2Beni%2Bb0ylfBkXydsvW0L5Trmc%2BBhw2hEusBr8X3s9edK6j2j6BXoGDaO7JceySZZm5cxvcN1OFG5Z7NjforMpDwp1to2ayrsW6QU5VqTwLetR1qjHl8M%2Fx3xxwP6YxBrAgLdfOzSrcP%2FSEcQ8EzejO58mnFluW1isZs4BQnxsuRWHXHn3g1PNzbsYBHLBflEalgU0EWwV93HkXbcIlxGnD9e2KS3EZ0oSb6w6O%2FxUtg3aD3JyskJDxEAPZQ1sH%2BhPr0OvWX3Wd9KPAdU3PiN%2B8lw%2F0kHzSFc9S0RzUIhorBMxZCoZ5s%2F2I8wWoEMc3iMOeCicoGOqUBZykG6JHAeDVyYsVKULlEJ0RQ5in%2FkOELJ%2Fn9wQtXgv3CzNFC4GtxhR4KsyeN8nC25PRZ1WhoPDFcAzo8Vuuw6REhxj68eSlDuZue9HtO6VvYVhfXxxnzOiVJo0Ii7TsZBMKkeoIYlDXXpDJYpwzYoQhKzaSfKcyHKPjm%2Bker1RyNu4o5rCMpMrpa6ceZE5%2BazQAv%2BgweNe7ygj3ZqbxBWDMzjj3l&X-Amz-Signature=96232e88b525dbdfc9dd223155cfc8615eb4d0e082f877cac9b76b760e4178b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSD4LQQF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGfOsPzjwVmIy%2FlsB3KN3qIJlnFxPHaFfjpjq3v2qJu5AiEAhvriixENfYgkniInJOZRKnCIkPHBPf80t3t4emGHLGsq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDCQue0i%2FUe5NJooKvyrcA2PPaH5K9ZZEkk7Pz2f%2FZgfBIQGLX%2BPIIv9r%2BmAwJBACaVSMGXPLgacy5fQ8rRvgF0pIztfvHs%2BvJPRp6vF442Cv%2F%2BFNQaeSQuGcMivpFf3nVb6bDK9NoAZT7DshSL4lgUPUfNfu1Z3z5TDw8flsdEBSvT5sf%2F4A4k5meoD7gVSKIzNbofth6cZKs1t5KCUXIOjwA0mnRbTiG427WkgC3nUklbVoOYcbUsLIEZxmDpOAB3eg8AfddA4x7s%2FY5q6FjcyN8ZLpGqKd3FC5%2FQAwJqr4vPksLOH9iv%2FKjhZ3ZB%2BF2Ckggm2syUmteoe0l%2Beni%2Bb0ylfBkXydsvW0L5Trmc%2BBhw2hEusBr8X3s9edK6j2j6BXoGDaO7JceySZZm5cxvcN1OFG5Z7NjforMpDwp1to2ayrsW6QU5VqTwLetR1qjHl8M%2Fx3xxwP6YxBrAgLdfOzSrcP%2FSEcQ8EzejO58mnFluW1isZs4BQnxsuRWHXHn3g1PNzbsYBHLBflEalgU0EWwV93HkXbcIlxGnD9e2KS3EZ0oSb6w6O%2FxUtg3aD3JyskJDxEAPZQ1sH%2BhPr0OvWX3Wd9KPAdU3PiN%2B8lw%2F0kHzSFc9S0RzUIhorBMxZCoZ5s%2F2I8wWoEMc3iMOeCicoGOqUBZykG6JHAeDVyYsVKULlEJ0RQ5in%2FkOELJ%2Fn9wQtXgv3CzNFC4GtxhR4KsyeN8nC25PRZ1WhoPDFcAzo8Vuuw6REhxj68eSlDuZue9HtO6VvYVhfXxxnzOiVJo0Ii7TsZBMKkeoIYlDXXpDJYpwzYoQhKzaSfKcyHKPjm%2Bker1RyNu4o5rCMpMrpa6ceZE5%2BazQAv%2BgweNe7ygj3ZqbxBWDMzjj3l&X-Amz-Signature=39ecd8935569d5b1d230e65b745203bb81fc77373eff2dcf334d32fa45745cf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
