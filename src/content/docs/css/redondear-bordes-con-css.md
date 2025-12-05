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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM6AFVYW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T065826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD00z1olQKEnXmzEYkTaGQ21x55CRg4NKLH5ojd3KpHYAIgajvHvqj48ZQ8JwLslHEf8U4oYoPHM3aD1HVnMKIPlZEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDC7LVsApmk0DUaNE9ircA43jwc0xedW9cDpEBI3uNsx%2FMuFFyPV3VQjYp8nMrTQnxZqhO%2BMLEJJfSFmoZP7vxZBJP231PqkxAEnb2tXWDWQylHC71QUsmJMfE2io3uMVtj%2BRbQ5uRr3CMh5iz2Ixi%2FprLpGWZVvlkT8bSoznVbmzzrmFrESZ2f5ocDN8b20WcX%2FsoH6YUkjINTACm6Uts8I51YttHu0qjGWrIUWqq5ddLP8WLMCu0MM83mRYt0ts9WHEYD4RMK%2FhqmkQ%2FmWJdaq3s5lIyXsf7hExD0SZQQinVfgq6fIj2YwaxomBrUVjSJeIfY3LcmCd1Iw6YXe%2BptD3w3zQ0Iq696S%2BAaQWhBkA5CmZ9NIlk1Eb0jSMG80KR%2Fv7WXUK9uzC8HY2kColjiLD%2Bw6gv8q9MJtCwyvHybX3T5UPqJ3sKnqDKF84d8fFe%2BCyCHWnJqMBGF%2FmtpVHpYWZ9t10j8mfTUTaWRmN80zqRPdtea4nnpqSHKY%2B4R6TTGAhuHLV5uhc6XjL6cwYzj1eV16CTbFx%2FT0Q6HeiIser3nbfQU42Q9D4yAY%2Fpm%2Bv%2BxEMknFnl9Uoa2Rs9Ti2GO6kRLHIGuMAYnj77fMZNaUfe%2Bzit9GQsoCqhn2oH2XqG13OrqcjuavvZ58qMNisyckGOqUB9yAhHUScO%2BO3fARbVKEC%2BOHJMw1frOETkxMuMCGKCXRL2hR9qdor%2FLCLRdGdonVvKPYp2NyClaayoU9iSf5N6uaJRwWEheV9WXHYdNj655I84N2N1uO%2BP6ZxsyWYwTRS7pmgTzKYE64Di7GvO5ErwD5cdWKuA0Cd0qj2AJrPyAca4%2BU3eLIBmEICmcXz4O0nFHPRDhCgIquhzoXG14gfrdA1TxlS&X-Amz-Signature=0fa5e277e8bddbc59e963c1f72bad8db93d4a4c19223f492e13ca9285549be11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM6AFVYW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T065826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD00z1olQKEnXmzEYkTaGQ21x55CRg4NKLH5ojd3KpHYAIgajvHvqj48ZQ8JwLslHEf8U4oYoPHM3aD1HVnMKIPlZEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDC7LVsApmk0DUaNE9ircA43jwc0xedW9cDpEBI3uNsx%2FMuFFyPV3VQjYp8nMrTQnxZqhO%2BMLEJJfSFmoZP7vxZBJP231PqkxAEnb2tXWDWQylHC71QUsmJMfE2io3uMVtj%2BRbQ5uRr3CMh5iz2Ixi%2FprLpGWZVvlkT8bSoznVbmzzrmFrESZ2f5ocDN8b20WcX%2FsoH6YUkjINTACm6Uts8I51YttHu0qjGWrIUWqq5ddLP8WLMCu0MM83mRYt0ts9WHEYD4RMK%2FhqmkQ%2FmWJdaq3s5lIyXsf7hExD0SZQQinVfgq6fIj2YwaxomBrUVjSJeIfY3LcmCd1Iw6YXe%2BptD3w3zQ0Iq696S%2BAaQWhBkA5CmZ9NIlk1Eb0jSMG80KR%2Fv7WXUK9uzC8HY2kColjiLD%2Bw6gv8q9MJtCwyvHybX3T5UPqJ3sKnqDKF84d8fFe%2BCyCHWnJqMBGF%2FmtpVHpYWZ9t10j8mfTUTaWRmN80zqRPdtea4nnpqSHKY%2B4R6TTGAhuHLV5uhc6XjL6cwYzj1eV16CTbFx%2FT0Q6HeiIser3nbfQU42Q9D4yAY%2Fpm%2Bv%2BxEMknFnl9Uoa2Rs9Ti2GO6kRLHIGuMAYnj77fMZNaUfe%2Bzit9GQsoCqhn2oH2XqG13OrqcjuavvZ58qMNisyckGOqUB9yAhHUScO%2BO3fARbVKEC%2BOHJMw1frOETkxMuMCGKCXRL2hR9qdor%2FLCLRdGdonVvKPYp2NyClaayoU9iSf5N6uaJRwWEheV9WXHYdNj655I84N2N1uO%2BP6ZxsyWYwTRS7pmgTzKYE64Di7GvO5ErwD5cdWKuA0Cd0qj2AJrPyAca4%2BU3eLIBmEICmcXz4O0nFHPRDhCgIquhzoXG14gfrdA1TxlS&X-Amz-Signature=b1333b13657cf6578c85b166a865b28c5012eaf3e6389a827a9c4a3177b39642&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
