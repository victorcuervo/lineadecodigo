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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMNER4BZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T110626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDD9UhWvgKLYMGIdneZnXakpxtNHAZ78nox7G3achwYwgIhAOIfBy294Hj2GpLmxrfdSDCz5CEJINjKmplpBjdf85sRKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FEttkO1WdNnlot0Aq3ANj775doqBnYKtnFDPPIzjPEeTXf6e%2FXBvDAlmmPxa7z1V7c7KkAZh%2BWAYxSkiOcVlVWy1FvhDEZhtNCUTaZ2sQ1QcMjVw7ZHHV4xDIrhwZG2Oq9poeuASlF3ePhMFmzoY2MbvlZEdKYJ2MGkNUQqGbeEK4wjy56jE%2FFh37y4YCAZnGru2iKRs1%2FZUa9BVUv7YqZPIjzreQU1KMHHOnrwTnrF8uCL93NQTylnuinx0S6ULjlRBOmuoLf%2FqXSH46%2B2wH3R%2FfQIrV1ArT9%2F7eTrrEegviLb4xXC6UUQeEgLx%2Fi09cfI9JVakzHpLnKQ37FG6yde05RabB76p76vmsjO9BGS1cT6Ygx6Tskc%2Fw0r4I2%2B%2F8EeWt%2FFscX6Cw7n8rHG4M9x5bjSM0doU5%2FtxcUbtOmZAblCjcy7D7fYwXA6aHe%2FQp4E9Y%2BCn7os43NpUcg646%2BCxu%2FTHiD0aBIrfD7ttoc9KqQNipw%2F%2F7GtoXjC3MV2jE34Ml6ExBR3u7CXcpevYBh7ynkmz2wu9naKsmCuQzBVRpbUoUWOwQ9ybbkUvZeYb3tkHiM%2BgVeZ0ugyJNV%2BPVkJk6JiMLya6hTMC%2Fl5gGJTMGBNVmFuwCbRD24bqBAmg2uDmZ6XIWI4xqejDf7dnJBjqkAUeJTf1cQ6Ha9D05LicUOEcxvTDax8nCjvC06jGE6H%2BFRpORyyhO4uchP7mtV7Wyqyio8rvIioRTgsF7J1qCjtV8oQi9wl7gkm2W9Apu9zy3ZcPliPzqB%2BJboKzpN%2F7cNHFukGnL96rxg7Un1F%2FfzdFgX0dCb%2B829J27WgFr6JRbkkjmfFVkcPp5cae1kkmiVTWk%2F53Vcl0rNFKPX87poMlIfWEE&X-Amz-Signature=5f7bc4de676df88e69ef07affc03342eea37419933d35937db07083c78c111d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMNER4BZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T110626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDD9UhWvgKLYMGIdneZnXakpxtNHAZ78nox7G3achwYwgIhAOIfBy294Hj2GpLmxrfdSDCz5CEJINjKmplpBjdf85sRKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FEttkO1WdNnlot0Aq3ANj775doqBnYKtnFDPPIzjPEeTXf6e%2FXBvDAlmmPxa7z1V7c7KkAZh%2BWAYxSkiOcVlVWy1FvhDEZhtNCUTaZ2sQ1QcMjVw7ZHHV4xDIrhwZG2Oq9poeuASlF3ePhMFmzoY2MbvlZEdKYJ2MGkNUQqGbeEK4wjy56jE%2FFh37y4YCAZnGru2iKRs1%2FZUa9BVUv7YqZPIjzreQU1KMHHOnrwTnrF8uCL93NQTylnuinx0S6ULjlRBOmuoLf%2FqXSH46%2B2wH3R%2FfQIrV1ArT9%2F7eTrrEegviLb4xXC6UUQeEgLx%2Fi09cfI9JVakzHpLnKQ37FG6yde05RabB76p76vmsjO9BGS1cT6Ygx6Tskc%2Fw0r4I2%2B%2F8EeWt%2FFscX6Cw7n8rHG4M9x5bjSM0doU5%2FtxcUbtOmZAblCjcy7D7fYwXA6aHe%2FQp4E9Y%2BCn7os43NpUcg646%2BCxu%2FTHiD0aBIrfD7ttoc9KqQNipw%2F%2F7GtoXjC3MV2jE34Ml6ExBR3u7CXcpevYBh7ynkmz2wu9naKsmCuQzBVRpbUoUWOwQ9ybbkUvZeYb3tkHiM%2BgVeZ0ugyJNV%2BPVkJk6JiMLya6hTMC%2Fl5gGJTMGBNVmFuwCbRD24bqBAmg2uDmZ6XIWI4xqejDf7dnJBjqkAUeJTf1cQ6Ha9D05LicUOEcxvTDax8nCjvC06jGE6H%2BFRpORyyhO4uchP7mtV7Wyqyio8rvIioRTgsF7J1qCjtV8oQi9wl7gkm2W9Apu9zy3ZcPliPzqB%2BJboKzpN%2F7cNHFukGnL96rxg7Un1F%2FfzdFgX0dCb%2B829J27WgFr6JRbkkjmfFVkcPp5cae1kkmiVTWk%2F53Vcl0rNFKPX87poMlIfWEE&X-Amz-Signature=ad5fed8bc464fe66fefc84b5ad3768dbdfe2f684bc897bc2cd8996ec28650cc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
