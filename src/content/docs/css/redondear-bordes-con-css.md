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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFQH4MIQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T081724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHqqiMPPwBzJzmoPm6ceGNw1k2JYiIyVnscxvXruZLxAiBvz6zJlFbFyJ0Q89XFPWT0Fw3MDeyYN27%2FjzbkNu3nuyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMPTJz4yU4Ng8y8SwKKtwDdEbo46MgGX13d27IaTb5aE90icln5%2BQ8rxE4eSOPQKszcbOPWQGwLF8a0avPmgsPBzw0039WJrSZT4ZA93oZzXAloHC6xwEbr%2B1eBfwC6YjavYZZbwOzWnFTA5jxn%2FOzmJ24s0RzQjQTXj9YktjMM1rYz0rLMH8tW%2FFWo0pRDa%2Fh1%2FzUkzo4QzDNyjD8lZFUmCV37TThZDF9QpXUVyIFxsno2BdG4PQYY8h6iJ2jv0lvRVxJWKEKcZrQebvUOPn3kqHUKrPThkKXTDjMu013Skbl7dTyKoaKgu7jzNNho00EebIKgImi7j5vd65VJ7mdjprHVfthBEpniS2dQy7sWHOJ5Wo4ABsOCTFUZvenoHB9O0uOxBLn7XtGwP%2BJdbor42uZZSe4L83l087rd44LtodmDe%2FKGm456dgqs0574BDJuaHidaoV49JqcV4EZeL3SbiZsS%2BFc16LsBo69dCBAMuj5IzCwCQi%2FJvP8u%2Fpft1hEoa6qdM7q5%2FYHhiWrrPk%2FAX4b%2FEABx2iBJLfhE%2FWvxeJrRADZsGQjB92N9uoQ%2BWBDT286qvo%2FCyH5nyouf%2BqPVrLdJidc6d28EBxoTwoWIRCTA0hEc6si5BYROO%2Bu2ysW7XEw1if9gFDujMw3K3JyQY6pgHmHPWYnPE%2BhoHi12Weo4rNUySuGhdqkxTe2igR1IdY6IEtRRjrJbMRWiC75rQqWFmW8jWi%2BelZKBwp%2F%2Bu0FRNBJOuAno6TbhZa2aYzdfJ3%2BMfPltg34aK18nFLfW0XG1iFqccsRQy%2FOWWmlADah9nsjc3lX0VTS5KGvIk%2BUM%2BrcVSRUJbKSegX5vDb1fl6CXXVkfbxhLAWiQjZjyAOYKltuCv1ONKY&X-Amz-Signature=5a77564dac2f7caf6bdce313048aaee39a8049e7d46357ed12c5c6ffe5830b94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFQH4MIQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T081724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHqqiMPPwBzJzmoPm6ceGNw1k2JYiIyVnscxvXruZLxAiBvz6zJlFbFyJ0Q89XFPWT0Fw3MDeyYN27%2FjzbkNu3nuyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMPTJz4yU4Ng8y8SwKKtwDdEbo46MgGX13d27IaTb5aE90icln5%2BQ8rxE4eSOPQKszcbOPWQGwLF8a0avPmgsPBzw0039WJrSZT4ZA93oZzXAloHC6xwEbr%2B1eBfwC6YjavYZZbwOzWnFTA5jxn%2FOzmJ24s0RzQjQTXj9YktjMM1rYz0rLMH8tW%2FFWo0pRDa%2Fh1%2FzUkzo4QzDNyjD8lZFUmCV37TThZDF9QpXUVyIFxsno2BdG4PQYY8h6iJ2jv0lvRVxJWKEKcZrQebvUOPn3kqHUKrPThkKXTDjMu013Skbl7dTyKoaKgu7jzNNho00EebIKgImi7j5vd65VJ7mdjprHVfthBEpniS2dQy7sWHOJ5Wo4ABsOCTFUZvenoHB9O0uOxBLn7XtGwP%2BJdbor42uZZSe4L83l087rd44LtodmDe%2FKGm456dgqs0574BDJuaHidaoV49JqcV4EZeL3SbiZsS%2BFc16LsBo69dCBAMuj5IzCwCQi%2FJvP8u%2Fpft1hEoa6qdM7q5%2FYHhiWrrPk%2FAX4b%2FEABx2iBJLfhE%2FWvxeJrRADZsGQjB92N9uoQ%2BWBDT286qvo%2FCyH5nyouf%2BqPVrLdJidc6d28EBxoTwoWIRCTA0hEc6si5BYROO%2Bu2ysW7XEw1if9gFDujMw3K3JyQY6pgHmHPWYnPE%2BhoHi12Weo4rNUySuGhdqkxTe2igR1IdY6IEtRRjrJbMRWiC75rQqWFmW8jWi%2BelZKBwp%2F%2Bu0FRNBJOuAno6TbhZa2aYzdfJ3%2BMfPltg34aK18nFLfW0XG1iFqccsRQy%2FOWWmlADah9nsjc3lX0VTS5KGvIk%2BUM%2BrcVSRUJbKSegX5vDb1fl6CXXVkfbxhLAWiQjZjyAOYKltuCv1ONKY&X-Amz-Signature=599e77b10d005a6b6f4369c863fbe581f13851860efb613c6807af29475524d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
