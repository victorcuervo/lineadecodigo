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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGESHSMM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T080419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUJKLJJMoDSHu8vRia4N9GJb%2BEEewngpKE4p1Y%2FJK3cgIhAMNbBE1h1rx6Wm8%2FkQkzuRww2gPDg0ZNHdDrGaAWK5%2FnKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwPYOYW%2BjWIrIlbM8q3AOsx7zJ6Wr6SKDsjkd%2F4G7I2P%2F5Cq6gEZ8vsjfxDAxYpaMqbLGfhU4OFj5C20jWkjT0Ieaxz3FVAOvbdQYu%2FOCgvQ7LUTN3b1AifgR%2BCrJFZZRKq%2B6IBo86L3nuCx6WkHKPrwZI3bO5JIcrm7QgNVtYK0wKtjybURCoQ6%2BXuKaeMjVy0VKgdvZy5qk9zKDpoTuxQQiGG%2Bl%2FxKr43mTcwVu%2BEDztnaFmP0bsocWnHgr%2Fg1pmAz4MsBCFwxKGFgrXA8m0wklamHXIex%2F0P09Sft8QqCPjWClGC3HH%2FSZCkL8%2BrC9q6w%2Fm38mB7cMOsv3gseVjNtkK1vqgdNJ3efZx8fKCCYLufEMflMw1Y%2F0stzzrSwlCwh75s8NTh%2BgpiTx8676GEWhAH7I%2FOBQ%2Fw1y3Jx2bu%2B2DcDrxr3XIh4oEQIGNOlvb1p9OPEufVgHjN%2Bf%2BZBi%2BYdy6nyrdcO%2FYOR5wtpeHhMx1x8uN%2FMlrXgCCHnLf1xnKV%2BPFC%2BZ27raNLm%2BtJFEQa9o%2BdRdq%2B%2BDZjyPv%2FfB210DpAdrDlu1pn6rWpZeK%2BQRBEoKybmJIbo00DlQPhlKVjpPNv0TOOonHZJmae%2ByyYCrl6VSGkawCeZ3lGTbun0syoW6Lh1Ly0dn2lTCj7dnJBjqkAWCkNpP3wt0v3tICVsUVpFE5AfE%2BbFq5LeckyX3kDwrJmdu2DqVrT4xr6WYg2VXDFOr%2FTw3HsUyygxFhUxdHaVX9KC0%2BInBeK9bVgz5zQvK5bTDRDvOnAy1BiaYbuAD79OMgfX2cjNI7tF%2FP7TxOrwr0IsoolXotwTzKab6UHaduTsknAbqAkSlFUOYlg3YzNCzBTjjO7U4liWW7bo1CRMH8yAkb&X-Amz-Signature=d891fa375b378fe1996227799b0debcd58c97cbee26d8fd56a2b6fd11f26147d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGESHSMM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T080419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUJKLJJMoDSHu8vRia4N9GJb%2BEEewngpKE4p1Y%2FJK3cgIhAMNbBE1h1rx6Wm8%2FkQkzuRww2gPDg0ZNHdDrGaAWK5%2FnKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwPYOYW%2BjWIrIlbM8q3AOsx7zJ6Wr6SKDsjkd%2F4G7I2P%2F5Cq6gEZ8vsjfxDAxYpaMqbLGfhU4OFj5C20jWkjT0Ieaxz3FVAOvbdQYu%2FOCgvQ7LUTN3b1AifgR%2BCrJFZZRKq%2B6IBo86L3nuCx6WkHKPrwZI3bO5JIcrm7QgNVtYK0wKtjybURCoQ6%2BXuKaeMjVy0VKgdvZy5qk9zKDpoTuxQQiGG%2Bl%2FxKr43mTcwVu%2BEDztnaFmP0bsocWnHgr%2Fg1pmAz4MsBCFwxKGFgrXA8m0wklamHXIex%2F0P09Sft8QqCPjWClGC3HH%2FSZCkL8%2BrC9q6w%2Fm38mB7cMOsv3gseVjNtkK1vqgdNJ3efZx8fKCCYLufEMflMw1Y%2F0stzzrSwlCwh75s8NTh%2BgpiTx8676GEWhAH7I%2FOBQ%2Fw1y3Jx2bu%2B2DcDrxr3XIh4oEQIGNOlvb1p9OPEufVgHjN%2Bf%2BZBi%2BYdy6nyrdcO%2FYOR5wtpeHhMx1x8uN%2FMlrXgCCHnLf1xnKV%2BPFC%2BZ27raNLm%2BtJFEQa9o%2BdRdq%2B%2BDZjyPv%2FfB210DpAdrDlu1pn6rWpZeK%2BQRBEoKybmJIbo00DlQPhlKVjpPNv0TOOonHZJmae%2ByyYCrl6VSGkawCeZ3lGTbun0syoW6Lh1Ly0dn2lTCj7dnJBjqkAWCkNpP3wt0v3tICVsUVpFE5AfE%2BbFq5LeckyX3kDwrJmdu2DqVrT4xr6WYg2VXDFOr%2FTw3HsUyygxFhUxdHaVX9KC0%2BInBeK9bVgz5zQvK5bTDRDvOnAy1BiaYbuAD79OMgfX2cjNI7tF%2FP7TxOrwr0IsoolXotwTzKab6UHaduTsknAbqAkSlFUOYlg3YzNCzBTjjO7U4liWW7bo1CRMH8yAkb&X-Amz-Signature=32baf23747973ea7c29fff698c19241c7ef2acc0c807d6d0b3c80cdeffe0a1b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
