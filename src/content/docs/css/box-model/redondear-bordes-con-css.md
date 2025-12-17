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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIJWUZOX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLqKKaZ3kjURRVE6BmMMb8H0pPaK6FCVNpmd5ZytHmVAIgZ1xkw1iIxbcBBbm3ApgaYP%2F9WaU%2FbNdyjCCa%2FlRCQ0gq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDK0FvUnaVbpfXXvEmCrcAzF37GeInmQ2VvgMf%2BT%2FPEZdhLqtecneu8nX2nC43TslLD45etEnXIz5sAl%2B7gEP5blxDX0J7VBylOFGsQVEsvk7qI%2Fe9d9ZQ2dD0q8uZ48inWLTINWRqswlCDPNZT2NAE0Jc3E1VEDSj639QzJn7EiWuxPYSGupf1zxOkjuGtSP1A3uiu8pSq6Jppb8rUHXZGcKQag5X4yKrJOM4Kd11mRNxrHrB1h9fFQkwHY9X%2BpA2XENOqU9uEW6qVt%2B67sLdIJTF8Z7MWC0ZnY1JRN049nf2OqfuAi4Fn6tCTQOYdDrFtZ6ItZST632V6IlXVFiHHd%2FAighj%2BhtHXfCC3%2BNH3LqeCrU1oVznAtL60DHZvuG%2FAzaeM1wkBR0AiQyGV82bUBIHtdv2VPaTBEWdTx0MktzISeTN0smngJvunL4OKPwpwzLdMhAYXntLr2vQZyTROJlu7GpJQqUxTOF85JIxkU8Me5IBTcGRZxogEc5A9uRhEm9wnB6JkA7Kw94GFWQVg02xkfDhroaLUC7QC4QIP2R1mhnsaQ1VZgfpNC4%2BkU6zyEqzc5izsZuCAuyr4HpT5tZSzqm80SLS2EBeHrfgA%2FpzGxEfCkjl7AgiM%2BPJQuv1Bi%2Bh7FDjfgXpO7%2FMNjOiMoGOqUB4KqI9jD7KcHD%2BCLL9XP61HbIDQ6Q71DGhSpRlKE5L%2BwMDTyMAeohC5FIZV3pgxynNDXzC3aczNmaC%2FQR06tAWR7VzEuyo71nQ7obm4oGTkqI0IeWptyDEb4tZOw7411iuH9sKftCtMQdc%2BeDefSx0j%2FsnIj%2FlI0hMfDYf2L62JY%2F%2BG5ecSav3NPRcD%2FhYMckYgAdMV7DojJjqvTVt52QGAI2FVLB&X-Amz-Signature=a1d5a101559704c9e69560f3009851fec0b34cf46fbf4f39792bbb5e94bc1f05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIJWUZOX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLqKKaZ3kjURRVE6BmMMb8H0pPaK6FCVNpmd5ZytHmVAIgZ1xkw1iIxbcBBbm3ApgaYP%2F9WaU%2FbNdyjCCa%2FlRCQ0gq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDK0FvUnaVbpfXXvEmCrcAzF37GeInmQ2VvgMf%2BT%2FPEZdhLqtecneu8nX2nC43TslLD45etEnXIz5sAl%2B7gEP5blxDX0J7VBylOFGsQVEsvk7qI%2Fe9d9ZQ2dD0q8uZ48inWLTINWRqswlCDPNZT2NAE0Jc3E1VEDSj639QzJn7EiWuxPYSGupf1zxOkjuGtSP1A3uiu8pSq6Jppb8rUHXZGcKQag5X4yKrJOM4Kd11mRNxrHrB1h9fFQkwHY9X%2BpA2XENOqU9uEW6qVt%2B67sLdIJTF8Z7MWC0ZnY1JRN049nf2OqfuAi4Fn6tCTQOYdDrFtZ6ItZST632V6IlXVFiHHd%2FAighj%2BhtHXfCC3%2BNH3LqeCrU1oVznAtL60DHZvuG%2FAzaeM1wkBR0AiQyGV82bUBIHtdv2VPaTBEWdTx0MktzISeTN0smngJvunL4OKPwpwzLdMhAYXntLr2vQZyTROJlu7GpJQqUxTOF85JIxkU8Me5IBTcGRZxogEc5A9uRhEm9wnB6JkA7Kw94GFWQVg02xkfDhroaLUC7QC4QIP2R1mhnsaQ1VZgfpNC4%2BkU6zyEqzc5izsZuCAuyr4HpT5tZSzqm80SLS2EBeHrfgA%2FpzGxEfCkjl7AgiM%2BPJQuv1Bi%2Bh7FDjfgXpO7%2FMNjOiMoGOqUB4KqI9jD7KcHD%2BCLL9XP61HbIDQ6Q71DGhSpRlKE5L%2BwMDTyMAeohC5FIZV3pgxynNDXzC3aczNmaC%2FQR06tAWR7VzEuyo71nQ7obm4oGTkqI0IeWptyDEb4tZOw7411iuH9sKftCtMQdc%2BeDefSx0j%2FsnIj%2FlI0hMfDYf2L62JY%2F%2BG5ecSav3NPRcD%2FhYMckYgAdMV7DojJjqvTVt52QGAI2FVLB&X-Amz-Signature=a2feb24a5261eb95500eabebdc8b742db5fdeba51a5321cbf589877625d62c03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
