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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WUIB5B2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T160043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGkd%2F0ih3F5tHjAvMmCpGGY%2BwbJCoIhgWhq5Kn%2F7hdRcAiBGu0WkujITryatrCPO4LGMrk6j2Bo31Dv9eUDnsxutYyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvDxwepQI%2B45nZYAlKtwDv%2F1Nb%2F8T%2BIwOdhQs68F6azblFlluFflxWfYS9TSzlNoGu592d%2BxTYcmW5kU%2BPdUgsbsf4euKDlwAwTlwPX%2FWyUYemQOdr7tEphLLbb1PVPaHMIEtyK4EIyhglctZwpc7h7eYtB5uLhlte%2FdGiysCzb6h6%2F0fSeGTB1eIr1f%2BJ6myOUj2T45%2FZo6qJsimaHKb%2Fnoe951jPtI0iPaIXo7tTyBd8JevxXXzuMbmfcDlbVES60FFazX7y944UaCnvXHGHljMiHq56xVf1RqaUdbC0VRMTjj6aQ1wPT%2F%2BJAmRyTNlUAiDQZdT7j2KvsYIyZcJTtfJb3jbcmXPQZ1pKkvzWN0q1I7clXDnuKesctU2uTVqTD6%2Ftkb0HwzAbn8UTawD%2B9l4AfLvpm8Scs7toIDPzVFx%2B0fYronjUdDxsWBtrXQqXEnBW%2FAAJb0DdJwmkE8iMbUZSD%2BsAInogJLGOZYeeL9EAYtE9aqRn6d7Cw%2B7MbJdSAsKxM6PguhPpBY8%2FfsoYaKTaqsIfx6zO3Ec50%2BXvw5Nf6q%2Flgf1MDtz4Bn%2BwP4H3ze6fOOv6dI4b4YxhFHqjCtPj6rbWeEXpJCPSSOeq1U18bpWAhjX8GZU2hqKbrPMm976J%2FWoqCTAbN8w%2BZ%2BLygY6pgEb%2BU9oxlW630%2Br9ZVVI7CBbnq674PG8H3dG867QbOK07YWGxo%2FXquXHq91Y%2FXHdXLOvc1ooTWwws63%2BAlO9Ly7u5rccvtaZqqyHmg%2F67we4EFTLFhNt1RD02gHv%2FvOOT3ohq4GGRW80TvPLN6WPkUf6ZeEj66FV7Ue3G3ygxct%2BPjwIfOiC%2FPT6b16GbqRvtUIoDkbRqe7MIGY%2FZ%2FVSEzjTi7hgN0r&X-Amz-Signature=5912b7ca2262e060b19ffe8687b771b7316674d7f20a6d065c041c6edf19ace9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WUIB5B2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T160043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGkd%2F0ih3F5tHjAvMmCpGGY%2BwbJCoIhgWhq5Kn%2F7hdRcAiBGu0WkujITryatrCPO4LGMrk6j2Bo31Dv9eUDnsxutYyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvDxwepQI%2B45nZYAlKtwDv%2F1Nb%2F8T%2BIwOdhQs68F6azblFlluFflxWfYS9TSzlNoGu592d%2BxTYcmW5kU%2BPdUgsbsf4euKDlwAwTlwPX%2FWyUYemQOdr7tEphLLbb1PVPaHMIEtyK4EIyhglctZwpc7h7eYtB5uLhlte%2FdGiysCzb6h6%2F0fSeGTB1eIr1f%2BJ6myOUj2T45%2FZo6qJsimaHKb%2Fnoe951jPtI0iPaIXo7tTyBd8JevxXXzuMbmfcDlbVES60FFazX7y944UaCnvXHGHljMiHq56xVf1RqaUdbC0VRMTjj6aQ1wPT%2F%2BJAmRyTNlUAiDQZdT7j2KvsYIyZcJTtfJb3jbcmXPQZ1pKkvzWN0q1I7clXDnuKesctU2uTVqTD6%2Ftkb0HwzAbn8UTawD%2B9l4AfLvpm8Scs7toIDPzVFx%2B0fYronjUdDxsWBtrXQqXEnBW%2FAAJb0DdJwmkE8iMbUZSD%2BsAInogJLGOZYeeL9EAYtE9aqRn6d7Cw%2B7MbJdSAsKxM6PguhPpBY8%2FfsoYaKTaqsIfx6zO3Ec50%2BXvw5Nf6q%2Flgf1MDtz4Bn%2BwP4H3ze6fOOv6dI4b4YxhFHqjCtPj6rbWeEXpJCPSSOeq1U18bpWAhjX8GZU2hqKbrPMm976J%2FWoqCTAbN8w%2BZ%2BLygY6pgEb%2BU9oxlW630%2Br9ZVVI7CBbnq674PG8H3dG867QbOK07YWGxo%2FXquXHq91Y%2FXHdXLOvc1ooTWwws63%2BAlO9Ly7u5rccvtaZqqyHmg%2F67we4EFTLFhNt1RD02gHv%2FvOOT3ohq4GGRW80TvPLN6WPkUf6ZeEj66FV7Ue3G3ygxct%2BPjwIfOiC%2FPT6b16GbqRvtUIoDkbRqe7MIGY%2FZ%2FVSEzjTi7hgN0r&X-Amz-Signature=07a01ad9af617a35f2897f723a8d80f139bda371a5cdf261a0c7c5541060fa31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
