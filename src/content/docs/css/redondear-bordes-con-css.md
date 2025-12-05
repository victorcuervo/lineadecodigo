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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDMRA2TY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T152545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7gayZ%2F%2FriqjyMLMmwP%2FoRRnxJhB%2BNR8WWDlxSvUmcgAiEA%2BOqJpErl0AkKYZ%2FsNh62iYcNpRk7w1IRUdr%2FUPjW3gkq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDB07ffbHqHAXK1%2B1MSrcA5awY9yRMK76oyFFZKNYKmJ5QfBqn%2BzwMu8gTLP3%2F%2F%2BkdsohcRnfGkUOFhLRZ31Ewk4XpW0sAYpg6E4gT3b6N5%2BcmE%2BwGThoRCVGXofJixbZggWpKEzahSS%2B0OjzDsakJnFASZMd0UpmtR768YDheX%2F1twmC9oSADxNU0wH92NX0jDn%2FcmW0%2BJmI6sROu48MssZistJELh%2B0xkdtdLVJi7pm7EkNlRdUaFBgbNIIwbbPOgkOWwlKcnJo5y9ZuSqhkN901EzJL%2Bw2%2B8%2Fa216gUR4KBYNAHPqHMtorbpXDl5TJzUrXVPue5mnxA0lnUTqeJ5i79PD71f%2FkxCVY6M0rseq2uoF%2Bqg4J1lnG3qKjdFMOWRLXnXnT%2BCtGGRRL5syop7sZmsRQLiz2b91zebyzhW1RM6giF9IGykoks9HFhvH86q6ROGEH7K5cUcQxlkQ4kJeqXQlDdGt1cKtZPbQgkRi2wKIZDbNHegvChkaX4msMzCshcjB6zr9jFZs1%2F39%2Bb10VGLTWxsR35%2BKm0E%2BL4T18HhsMJrDnBmF6YEQHDw66%2F1NuRVC5avr5YM3Cx9%2Bq9RUkwXDgmjNbJtT4KE%2FOfwCluStIVBdFHd3hcGuF7bmIe9ckusLOEh1ogYhIMKfty8kGOqUB5GsCKCK%2BmiczX87YwP3I%2Fr0Lrj9Nzc2%2BBOak1iPjdWu6hfYUH7LFS6HTa6zH9g5bCeN3hVchuK7PvH1Yg%2FA%2FFXEZJ5LGZBsfVTGfMhREw4Ta5VCbDJym8t1LLLJUW3Yt4a%2Bnr7fszK4OwpTj4MJGX3fBy7Ebxe7qZMV%2BWXUm%2FAW%2B%2FwlVZstBKJNwlj1QAQVEwkSM0EdRFxQIxaJ5SvxG5%2BStoCuM&X-Amz-Signature=229446e59eff70cf3465055c0369b0db0957e664c68f5c9e0a956b5ad4464204&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDMRA2TY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T152545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7gayZ%2F%2FriqjyMLMmwP%2FoRRnxJhB%2BNR8WWDlxSvUmcgAiEA%2BOqJpErl0AkKYZ%2FsNh62iYcNpRk7w1IRUdr%2FUPjW3gkq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDB07ffbHqHAXK1%2B1MSrcA5awY9yRMK76oyFFZKNYKmJ5QfBqn%2BzwMu8gTLP3%2F%2F%2BkdsohcRnfGkUOFhLRZ31Ewk4XpW0sAYpg6E4gT3b6N5%2BcmE%2BwGThoRCVGXofJixbZggWpKEzahSS%2B0OjzDsakJnFASZMd0UpmtR768YDheX%2F1twmC9oSADxNU0wH92NX0jDn%2FcmW0%2BJmI6sROu48MssZistJELh%2B0xkdtdLVJi7pm7EkNlRdUaFBgbNIIwbbPOgkOWwlKcnJo5y9ZuSqhkN901EzJL%2Bw2%2B8%2Fa216gUR4KBYNAHPqHMtorbpXDl5TJzUrXVPue5mnxA0lnUTqeJ5i79PD71f%2FkxCVY6M0rseq2uoF%2Bqg4J1lnG3qKjdFMOWRLXnXnT%2BCtGGRRL5syop7sZmsRQLiz2b91zebyzhW1RM6giF9IGykoks9HFhvH86q6ROGEH7K5cUcQxlkQ4kJeqXQlDdGt1cKtZPbQgkRi2wKIZDbNHegvChkaX4msMzCshcjB6zr9jFZs1%2F39%2Bb10VGLTWxsR35%2BKm0E%2BL4T18HhsMJrDnBmF6YEQHDw66%2F1NuRVC5avr5YM3Cx9%2Bq9RUkwXDgmjNbJtT4KE%2FOfwCluStIVBdFHd3hcGuF7bmIe9ckusLOEh1ogYhIMKfty8kGOqUB5GsCKCK%2BmiczX87YwP3I%2Fr0Lrj9Nzc2%2BBOak1iPjdWu6hfYUH7LFS6HTa6zH9g5bCeN3hVchuK7PvH1Yg%2FA%2FFXEZJ5LGZBsfVTGfMhREw4Ta5VCbDJym8t1LLLJUW3Yt4a%2Bnr7fszK4OwpTj4MJGX3fBy7Ebxe7qZMV%2BWXUm%2FAW%2B%2FwlVZstBKJNwlj1QAQVEwkSM0EdRFxQIxaJ5SvxG5%2BStoCuM&X-Amz-Signature=81e1641c328fc1b15feb943d9e068b1d2eb31d313757862fd143656a9bdf7cd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
