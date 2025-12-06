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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IYA55KR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T110945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbB0Rf619IRQWFg0Y4MK8iiM4fa2BKqOFIF4N8gQbz8wIgU8Pfx0ZnGpWLUFkryCfF9xQxYUHzM5xmrxcYHhC%2F75gq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDDy3N%2Bhm5pWLB6EsiyrcAxPyKgXJv%2BT5fBm5dnYppETy9nXUczrZzDfcN3JcORCs%2BGAKldecdnuxBb%2FCqxMjoWeFcyu96mRwUSGJUH3AeCHPAjCctyj0B46gi7PIhoG89W5EaMCy7got6NSTCfgHye4L0IXSkfemDVkqQJCq4hdj1or25FaZ0yU44gplWbihAMOLohSLEjUjR4s2X86yIxm%2FZtNhZu9o74hHcXxtyIDjRJohgBQJ1JjbZzu92P9ArSMGUoqmwFhp%2FyZL%2Frao7tg63HB6w274wRfekm0%2FEi16lY4gVepxSJaI85EWosRpgeZPwmafO09bJZ4LIADhV8huEh4nkBDqDpx%2BzIDZ9gxswJBfn7huAfOxFGZIgpKM34I4LZ64ZYEsDBJfYICK3hbZ9c39oik9mllLC8vhz1%2Ft1nLDY%2B0Ci21HnoM%2FwLjFCjxOBADla%2Fe4piUUIGm2zbV5ukMqbpNMWPQDUFuj%2B9Y644KBZSZi1YRComuEANWW1Tl5D4IrrxOslT7qu4AIHk5xCOd4KYSW0HDcOeNb92CunKi6yMLaaYUbQipzmT379sBwWlKVyZudWy%2FPILP3T1BFdcD43wg017%2B9Mmjx2MAFHEvWAXBMHXStcg4SmEb%2BEg3d66heRvOj0W45MLiJ0MkGOqUBfEkt4uf4r2O%2BoqZM%2BQUJxZC6%2BKu0XtgPS2vFikGTDxrCoDliqF37theaLdCRjKyV2TI8vteYXxFfVC4qSig8jI2OcGP6mSY%2FF2g%2Bka%2Br5048MroSGXwzNEXeuzxKOLtCPPBpPcbc%2FpyE%2BCttktcfatKYvGw4InrAkRi2A5vlci4qc3ORYxXWDjeFpc%2BNvSXf30tP%2BSHE6a3vAQknhFB3P4WZ5uRx&X-Amz-Signature=9906b886e8c10d3f4f5adece37113699e40572c181013d3046d52cde4ab98851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IYA55KR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T110945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbB0Rf619IRQWFg0Y4MK8iiM4fa2BKqOFIF4N8gQbz8wIgU8Pfx0ZnGpWLUFkryCfF9xQxYUHzM5xmrxcYHhC%2F75gq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDDy3N%2Bhm5pWLB6EsiyrcAxPyKgXJv%2BT5fBm5dnYppETy9nXUczrZzDfcN3JcORCs%2BGAKldecdnuxBb%2FCqxMjoWeFcyu96mRwUSGJUH3AeCHPAjCctyj0B46gi7PIhoG89W5EaMCy7got6NSTCfgHye4L0IXSkfemDVkqQJCq4hdj1or25FaZ0yU44gplWbihAMOLohSLEjUjR4s2X86yIxm%2FZtNhZu9o74hHcXxtyIDjRJohgBQJ1JjbZzu92P9ArSMGUoqmwFhp%2FyZL%2Frao7tg63HB6w274wRfekm0%2FEi16lY4gVepxSJaI85EWosRpgeZPwmafO09bJZ4LIADhV8huEh4nkBDqDpx%2BzIDZ9gxswJBfn7huAfOxFGZIgpKM34I4LZ64ZYEsDBJfYICK3hbZ9c39oik9mllLC8vhz1%2Ft1nLDY%2B0Ci21HnoM%2FwLjFCjxOBADla%2Fe4piUUIGm2zbV5ukMqbpNMWPQDUFuj%2B9Y644KBZSZi1YRComuEANWW1Tl5D4IrrxOslT7qu4AIHk5xCOd4KYSW0HDcOeNb92CunKi6yMLaaYUbQipzmT379sBwWlKVyZudWy%2FPILP3T1BFdcD43wg017%2B9Mmjx2MAFHEvWAXBMHXStcg4SmEb%2BEg3d66heRvOj0W45MLiJ0MkGOqUBfEkt4uf4r2O%2BoqZM%2BQUJxZC6%2BKu0XtgPS2vFikGTDxrCoDliqF37theaLdCRjKyV2TI8vteYXxFfVC4qSig8jI2OcGP6mSY%2FF2g%2Bka%2Br5048MroSGXwzNEXeuzxKOLtCPPBpPcbc%2FpyE%2BCttktcfatKYvGw4InrAkRi2A5vlci4qc3ORYxXWDjeFpc%2BNvSXf30tP%2BSHE6a3vAQknhFB3P4WZ5uRx&X-Amz-Signature=162dba2e7c0489d845f2c796aa6ac22dbc8f28d552d521a3e3b39bfefb459e34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
