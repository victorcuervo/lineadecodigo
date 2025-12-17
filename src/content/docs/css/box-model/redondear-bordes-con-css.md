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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL24ORMT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBkBUmOyJR6yjUZMpuiW50vOD0hNAb6JcZfdMcHg5c19AiAZKXVLjdkgkbmNOdGi3J9hEEI7b2uEc8JJWYpdFDUMMCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMoG%2B%2B59JpkwFK%2BE0sKtwDjIxVhNsKNfjPaZxY01vL9LfGobjlxX%2B7fW%2B5lFG20QlSODvWJUX89mmsMG%2FW3%2FMQPHsT7KVl2ctBx2siAJg2O%2BqvVcR%2FULML4WWvPSfZpuhQrsoi%2Fnpt3T5bnPrFUylRaGXw0lODEWk2hCZ3pldBKh9CPOQAEGd3Nbro%2Ffz%2BvmtsrlQIcbMbmA3mDtKrb6Y9h4hIRFuGFWmBbVov%2F2qzCbBUawPgO4OFohktMBz6VNWbsL5tMC%2FB2LisA%2FvXS3MzA8kvUOCNAnzM1FH59akBl%2FtWZYGyoc3uqvGle6gWUeY21Sqv49dxH7hVbGHGz5FmpNRZwe4mQpcFg0GEqnSxzUZTRdTgZWDET5YBqIHp7byW35Q%2BvQq0EHCWfJ%2FsCj%2FsNBYGgcyjjddx5IE4%2FR0KHhuGjsc9du6QRY9nWo9Iv0YZN%2FtStZ%2Buf3LKhiY86Ic25LHMlPo3ee0AU8kVftAPTBMpaFoprn5hiVURuWZHyGOkJwt8p9u8aB3SiiwfSwEdwIOLKkmokBEhcsWtm%2BJCq78HdLItGZqugCBu2UymI4k2%2BhCzmp3l0SmUxPZV4OxsVic72vjskdAT6BTfyxwpEteaCku0u%2BB6QAFpyD%2Bq4bti3GCwEUcwhuvXFvIwvumIygY6pgGdfitYEogZPJ8K%2By9BXuR5yKvq9PZvRXyw58OVkMdFKnjVIvfx5HO4aIEs619ggZ9V7GfnBAqQIfLP0ov21sjyCLkGvrrcwDzzZUnj%2FGjtmrfPO%2FsGSR8YXywssxJSiJPhoZKiQ7%2FC046Vp0EGYPDNwWPKbunU5dGrf%2FV0LcCGU5gyfQxaGSAMJ0uAShsDfuVRB4T0e82SJtUK55IGZOJvSyFPFE0i&X-Amz-Signature=3e70de57e0a06f5918b6754c7e35b37d2cd84c9b03d1213869b60346659b9f05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL24ORMT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBkBUmOyJR6yjUZMpuiW50vOD0hNAb6JcZfdMcHg5c19AiAZKXVLjdkgkbmNOdGi3J9hEEI7b2uEc8JJWYpdFDUMMCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMoG%2B%2B59JpkwFK%2BE0sKtwDjIxVhNsKNfjPaZxY01vL9LfGobjlxX%2B7fW%2B5lFG20QlSODvWJUX89mmsMG%2FW3%2FMQPHsT7KVl2ctBx2siAJg2O%2BqvVcR%2FULML4WWvPSfZpuhQrsoi%2Fnpt3T5bnPrFUylRaGXw0lODEWk2hCZ3pldBKh9CPOQAEGd3Nbro%2Ffz%2BvmtsrlQIcbMbmA3mDtKrb6Y9h4hIRFuGFWmBbVov%2F2qzCbBUawPgO4OFohktMBz6VNWbsL5tMC%2FB2LisA%2FvXS3MzA8kvUOCNAnzM1FH59akBl%2FtWZYGyoc3uqvGle6gWUeY21Sqv49dxH7hVbGHGz5FmpNRZwe4mQpcFg0GEqnSxzUZTRdTgZWDET5YBqIHp7byW35Q%2BvQq0EHCWfJ%2FsCj%2FsNBYGgcyjjddx5IE4%2FR0KHhuGjsc9du6QRY9nWo9Iv0YZN%2FtStZ%2Buf3LKhiY86Ic25LHMlPo3ee0AU8kVftAPTBMpaFoprn5hiVURuWZHyGOkJwt8p9u8aB3SiiwfSwEdwIOLKkmokBEhcsWtm%2BJCq78HdLItGZqugCBu2UymI4k2%2BhCzmp3l0SmUxPZV4OxsVic72vjskdAT6BTfyxwpEteaCku0u%2BB6QAFpyD%2Bq4bti3GCwEUcwhuvXFvIwvumIygY6pgGdfitYEogZPJ8K%2By9BXuR5yKvq9PZvRXyw58OVkMdFKnjVIvfx5HO4aIEs619ggZ9V7GfnBAqQIfLP0ov21sjyCLkGvrrcwDzzZUnj%2FGjtmrfPO%2FsGSR8YXywssxJSiJPhoZKiQ7%2FC046Vp0EGYPDNwWPKbunU5dGrf%2FV0LcCGU5gyfQxaGSAMJ0uAShsDfuVRB4T0e82SJtUK55IGZOJvSyFPFE0i&X-Amz-Signature=6359003c291a1afc120cd11f0a0a3f4dcc3661f2bab2be426fe13ecfcfd7145c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
