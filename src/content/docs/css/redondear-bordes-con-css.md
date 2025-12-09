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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466667JYB3B%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T041606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC75oYy3aq18vp0PR7TDzZuh8vvBfbgcFr%2B9xbV5W9jAAIgQocGpLcVDeafiRadbDPm0APfJV%2B7bfP31G5uA%2BxHslsqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCsenHSF1lIQ8%2BBEdircAwh1PAnAw%2BBcqmdX%2FEe95Xj4GB%2BXte%2Bn6XXHcqC70Inu0sVtjat9tucU2ZsYXnoaYvQOotMlMgJFvvbwrp%2FjY46pzYTGV44UWUEmgB%2BmbjA%2BGLlzZs11cPwJjnfSGIJZuFEGzukbEPARF998khfbZga6TBtcVui75m69WL5xaugQgGtmJUKXdVaB%2FMRfpubFKBFO9%2BN1MGoFa3XitvBw5RQMJrJ5S94o%2Fwofsr4vQUOofTxJzA17d86KuxlFhEX379b3AAklOxvv75P0aZ5DWfFGCl2aKKxyW0jN8deyq%2BlOU3NPAMlk1CA5g2Zo2MlzEwNvBQ%2Bkgt9hl1csIfqw5WPtdyZUnsvbI0AeaigXluqB7vuygbgNQybivJKAdfIRRXBXXIMzkWtGpeCN6kUvEIU7LiBpyVxDDpe1vNSWdQFJFlvTeesws40lj3YqzdfkeJfzOy8VbSg1IOVNP9i8zY%2BjAMfeF0SyS0GayFmI0MTfcnUEdIMHG8mM%2B1aMO65cKAaEqjjcGFeeEM7izuVFV4HNls%2Fl78o3sPCsUcZMzT5Q81t9mIyZMTMm96JqoXEyVsNIF3eABjDE4uZZgC3lkCdZx5RMPq9oIKXse9P1pw1SDah23PMtCWrbVssjMPCt3skGOqUBzj1V6FAXZDeW8FJJ3T32hE0SgXu2s0fhOG%2B1ggQDFhKoJFtS5fOodCmsVZ3dC%2F0xnHRS5p%2BlFpmx1dOS%2FpLziWsBzW0WRjA%2FNblY%2FVne5jjrrZBClh0P4blinCMZeGymIQbBhMMOO2f0Cc%2FWyFsEGlUD635Uo51GOHx4h3gxMmhGY66GWjngTtMsG%2F4Leras7zNqKKJdsSYY37HP3jVTSm%2BdXLBO&X-Amz-Signature=a37b7393f89ee16d92565b3d4ee8ba7c6bdc658b73758ec55f81067be6ae3fc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466667JYB3B%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T041606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC75oYy3aq18vp0PR7TDzZuh8vvBfbgcFr%2B9xbV5W9jAAIgQocGpLcVDeafiRadbDPm0APfJV%2B7bfP31G5uA%2BxHslsqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCsenHSF1lIQ8%2BBEdircAwh1PAnAw%2BBcqmdX%2FEe95Xj4GB%2BXte%2Bn6XXHcqC70Inu0sVtjat9tucU2ZsYXnoaYvQOotMlMgJFvvbwrp%2FjY46pzYTGV44UWUEmgB%2BmbjA%2BGLlzZs11cPwJjnfSGIJZuFEGzukbEPARF998khfbZga6TBtcVui75m69WL5xaugQgGtmJUKXdVaB%2FMRfpubFKBFO9%2BN1MGoFa3XitvBw5RQMJrJ5S94o%2Fwofsr4vQUOofTxJzA17d86KuxlFhEX379b3AAklOxvv75P0aZ5DWfFGCl2aKKxyW0jN8deyq%2BlOU3NPAMlk1CA5g2Zo2MlzEwNvBQ%2Bkgt9hl1csIfqw5WPtdyZUnsvbI0AeaigXluqB7vuygbgNQybivJKAdfIRRXBXXIMzkWtGpeCN6kUvEIU7LiBpyVxDDpe1vNSWdQFJFlvTeesws40lj3YqzdfkeJfzOy8VbSg1IOVNP9i8zY%2BjAMfeF0SyS0GayFmI0MTfcnUEdIMHG8mM%2B1aMO65cKAaEqjjcGFeeEM7izuVFV4HNls%2Fl78o3sPCsUcZMzT5Q81t9mIyZMTMm96JqoXEyVsNIF3eABjDE4uZZgC3lkCdZx5RMPq9oIKXse9P1pw1SDah23PMtCWrbVssjMPCt3skGOqUBzj1V6FAXZDeW8FJJ3T32hE0SgXu2s0fhOG%2B1ggQDFhKoJFtS5fOodCmsVZ3dC%2F0xnHRS5p%2BlFpmx1dOS%2FpLziWsBzW0WRjA%2FNblY%2FVne5jjrrZBClh0P4blinCMZeGymIQbBhMMOO2f0Cc%2FWyFsEGlUD635Uo51GOHx4h3gxMmhGY66GWjngTtMsG%2F4Leras7zNqKKJdsSYY37HP3jVTSm%2BdXLBO&X-Amz-Signature=420c827f3c827be364b2a25ba6076c58feb407f1f78a5f9612de925a3cc08582&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
