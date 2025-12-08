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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466434NC2RI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T201436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTmMpW20PJV%2Bqz5hmY313aqPox611FMBhbCdEuOIKRZAiEAs%2FTadGB3H14BDuXZfVFdcSOqswOebdPd2SbGVXyILGgqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjPbjgro7brnVz1jSrcA5Z9MmjPVV3ftP8YYPyMtotyKhQvSZVHoERf1KWVV%2FNF2FSt%2BEMJpD6rdr70VOVVzm2cGRwoXdDUoZ9dBdgiKYghxisNn4zcb2wFpgc5x5fQ25uG9MzeAcAuxsAqY8X0DaEMavAU3lHeXS%2BotbKaAiQTrZ6XadQ0K%2FUISDpytPLlqheZa0mtEP3KEi1qWrx8Tw%2FM9OnIBKtYkaSuukahHDO6%2Bdd6EIP6Ix4v9eO2JOyhPi9uacgsnvQggchUls321hCL1dzpfFFWCJrrHi2z6U%2Fq938dcLq5RTZpY9spbKe9CgYMVuY0BhFAVsWa3MmHh4KXEwv3aSqJoiak9Bjl6Z4TYAV6VdMRmUUPrs0ora9%2FGhLWtwahsVDAoJJpZbGihfeJcqBLof%2FmUlDlQYTG%2FQrhrBKKtXtzD3xDYnF432J58i94wMBOAHCtJXMLGySJKFzusHkFv%2BFkVQoPR4B0rP1bNUSpzYShGY592%2BERk2rXio5Z9gbrJd8bqdBBG03E%2FSst%2F9bPC9u3MT4BST3lbTjMReJbwNdgE9YlvWbPXiRyYZThDkjlpGGVcJ6ub%2BO06mMOjYlkrFsaBt6w26RYcZnQg%2BqUIhZ6dCeQEnIQgUQFrG9jRALt59LoUWAEMMTc3MkGOqUB%2FP8MKj%2FR8GcMO1iAh66jl1axlheu9x8muq4EAy%2Fmre5uHeQS3vwAkAct%2F453yBiWYx%2F0gPh7cHCY68qMbM2xBrtEplSS1SzxQUn77%2FMDODBm95%2F9uc43rpUNjN3FnvM4m3k59z3yELLT6q8JbxxRhg0BtHoDqqWYsVvdnQfVNwRnIOAsyEtnSgdEzMVn5uUCyZZdP4fN5xPGEIXZo6dk7oWCaeEF&X-Amz-Signature=1ebb882c1d82f171011aa3e85a4bc23e5806f4f8314bc676d63745b3bbaeebc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466434NC2RI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T201436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTmMpW20PJV%2Bqz5hmY313aqPox611FMBhbCdEuOIKRZAiEAs%2FTadGB3H14BDuXZfVFdcSOqswOebdPd2SbGVXyILGgqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjPbjgro7brnVz1jSrcA5Z9MmjPVV3ftP8YYPyMtotyKhQvSZVHoERf1KWVV%2FNF2FSt%2BEMJpD6rdr70VOVVzm2cGRwoXdDUoZ9dBdgiKYghxisNn4zcb2wFpgc5x5fQ25uG9MzeAcAuxsAqY8X0DaEMavAU3lHeXS%2BotbKaAiQTrZ6XadQ0K%2FUISDpytPLlqheZa0mtEP3KEi1qWrx8Tw%2FM9OnIBKtYkaSuukahHDO6%2Bdd6EIP6Ix4v9eO2JOyhPi9uacgsnvQggchUls321hCL1dzpfFFWCJrrHi2z6U%2Fq938dcLq5RTZpY9spbKe9CgYMVuY0BhFAVsWa3MmHh4KXEwv3aSqJoiak9Bjl6Z4TYAV6VdMRmUUPrs0ora9%2FGhLWtwahsVDAoJJpZbGihfeJcqBLof%2FmUlDlQYTG%2FQrhrBKKtXtzD3xDYnF432J58i94wMBOAHCtJXMLGySJKFzusHkFv%2BFkVQoPR4B0rP1bNUSpzYShGY592%2BERk2rXio5Z9gbrJd8bqdBBG03E%2FSst%2F9bPC9u3MT4BST3lbTjMReJbwNdgE9YlvWbPXiRyYZThDkjlpGGVcJ6ub%2BO06mMOjYlkrFsaBt6w26RYcZnQg%2BqUIhZ6dCeQEnIQgUQFrG9jRALt59LoUWAEMMTc3MkGOqUB%2FP8MKj%2FR8GcMO1iAh66jl1axlheu9x8muq4EAy%2Fmre5uHeQS3vwAkAct%2F453yBiWYx%2F0gPh7cHCY68qMbM2xBrtEplSS1SzxQUn77%2FMDODBm95%2F9uc43rpUNjN3FnvM4m3k59z3yELLT6q8JbxxRhg0BtHoDqqWYsVvdnQfVNwRnIOAsyEtnSgdEzMVn5uUCyZZdP4fN5xPGEIXZo6dk7oWCaeEF&X-Amz-Signature=17d11540b8b6cfd85d47b2503746951f51abf3560a2f31e73af3de2fef582bc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
