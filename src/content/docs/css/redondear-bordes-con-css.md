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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V77YXC5V%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T215124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGEIZOMQFBQh4j4Tbncc2arq4zijC2%2FwEcZ8D%2Blzr7u8AiEA%2FUJioY%2FwpOX0dtpbtE8FT2OHVgXbyiZfhAEt9gxtnSoqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBqazkoNPAtQmCJa9SrcAy%2FuCg71ZgB8nlue0edmH8HAuAKGKwHC%2FWB7hZ3X9MoDR9fnoR5F9Q0tdV5mcI%2BeAr9eYaVXG%2BwILJSevF3yecPDZ4vvI9%2FqeRf8Hv3Ab%2F7rhpqeZFJb98eVjyctY2Su6iu9XhbJFTSyMVxFzxPM%2BPrHebBQ5VqxugQlXtsz%2B%2BJslsEk5PlpGV9CsL1fTkTOEVzecUcs%2BPhuqmRT3H1eN62fxGSNa1FMXdKGgl117cxQ21hAR3dvm0iA2%2BLlV3SiAj1Q6QC17lCy5mfDReZ7fc7ucHwA%2FqLqef%2BhSXOTaRARrI%2BQuirJv%2BRJCZO1b9uXlHnSdq6FrBfT36WLoOg2F4684Uzg8O7RALZY3SGSZdtuXatpL3U78bdeMvcqmH7GmxQZV4eviUVfzQdBwpaDRLv5h%2B5yhW9Lv7gEqPTGPFVIE4LfCOlDkN3nqhzKozpk8BTURFMzTaTLWHfhVgXj1GU%2FwxM1T1EQ6pAxWu3mSLl2PQEhvj5xrJby9MG6iJY9gcdS%2B33kS%2FtOvFgZYoAz5fBDBvlf2vbAgXHTLR0Z4h14oMcM7Sbqaf%2FMMPKtxSoTgGKUm20kmaPCG8unWQhQsenq4bXUA51HBFAV3sSeIsnXxmOjxRbidu93In4NMLSA3ckGOqUBfccQ9iRrUwIJhZ82parGnwXCn6wIQg7nNvLuH6aHlSejFtDUzwpvXVt7Vh%2BRaHNd8zLQYBPgLfZpunKqYEV7lyJaqeRNkIbJRQs3VKe%2B3yDhBSFJBq%2FzVRBR%2FZQAFskixVu5kdfs9946VKGMtJOOvxOWmlkOaOVRlTAs4yGMpINm1LUNZK3Pq2HElDNpSFuoRLtLMDnL%2FGe6H15tOSoT9x%2FVXRjG&X-Amz-Signature=ffd0050da7fed3440599421cec4e183ccf3e72a1b318cba133f3ffe2ff77afd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V77YXC5V%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T215124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGEIZOMQFBQh4j4Tbncc2arq4zijC2%2FwEcZ8D%2Blzr7u8AiEA%2FUJioY%2FwpOX0dtpbtE8FT2OHVgXbyiZfhAEt9gxtnSoqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBqazkoNPAtQmCJa9SrcAy%2FuCg71ZgB8nlue0edmH8HAuAKGKwHC%2FWB7hZ3X9MoDR9fnoR5F9Q0tdV5mcI%2BeAr9eYaVXG%2BwILJSevF3yecPDZ4vvI9%2FqeRf8Hv3Ab%2F7rhpqeZFJb98eVjyctY2Su6iu9XhbJFTSyMVxFzxPM%2BPrHebBQ5VqxugQlXtsz%2B%2BJslsEk5PlpGV9CsL1fTkTOEVzecUcs%2BPhuqmRT3H1eN62fxGSNa1FMXdKGgl117cxQ21hAR3dvm0iA2%2BLlV3SiAj1Q6QC17lCy5mfDReZ7fc7ucHwA%2FqLqef%2BhSXOTaRARrI%2BQuirJv%2BRJCZO1b9uXlHnSdq6FrBfT36WLoOg2F4684Uzg8O7RALZY3SGSZdtuXatpL3U78bdeMvcqmH7GmxQZV4eviUVfzQdBwpaDRLv5h%2B5yhW9Lv7gEqPTGPFVIE4LfCOlDkN3nqhzKozpk8BTURFMzTaTLWHfhVgXj1GU%2FwxM1T1EQ6pAxWu3mSLl2PQEhvj5xrJby9MG6iJY9gcdS%2B33kS%2FtOvFgZYoAz5fBDBvlf2vbAgXHTLR0Z4h14oMcM7Sbqaf%2FMMPKtxSoTgGKUm20kmaPCG8unWQhQsenq4bXUA51HBFAV3sSeIsnXxmOjxRbidu93In4NMLSA3ckGOqUBfccQ9iRrUwIJhZ82parGnwXCn6wIQg7nNvLuH6aHlSejFtDUzwpvXVt7Vh%2BRaHNd8zLQYBPgLfZpunKqYEV7lyJaqeRNkIbJRQs3VKe%2B3yDhBSFJBq%2FzVRBR%2FZQAFskixVu5kdfs9946VKGMtJOOvxOWmlkOaOVRlTAs4yGMpINm1LUNZK3Pq2HElDNpSFuoRLtLMDnL%2FGe6H15tOSoT9x%2FVXRjG&X-Amz-Signature=bc355c236e734b03ca742e28e8eb23d5279e001394dbe8a533131699cafb6774&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
