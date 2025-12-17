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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDSNXIYX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGpPV8hkqd%2BhO123iT89GsN6GgJrAUZNssasDTXJ90KAiA1Mn0uRM4Tzql52fRQ9M8tA%2FGmRUW68Pk0n2n7mA4xUyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMayFsQxmYQ9KXpdtNKtwDYftvNQLbCPjHQSKiTjRNYeNTfxPXCVIKfwHGKPk1on0IcXl7SFdF9lcINXP5Ub4bXdIc1DerpR6UMkCQIWsXraVXgJaVokwhEw6Hb85K8uhbw0hv2cyR73mgiIz953ldJvxL5VeUjgmrmO81V249pEHWYXgPuzWPcGjnDPOLPosXdd8D2c3TR36oR5piGULTBhEC815Z%2B2BqQx142wSDNvU7mCBNa8vF%2FX7keFpMdOrSbor0TQuzQJrcCBQN4Au6%2Fs59i468luFW01K4phyz8C0K9MaxWfhELW5BQaLDJT%2BHaqkNKEvJww%2BNhcg3s4O2xlURt%2BgogCYX09MkJAddMpphabOF0R2A9AQDsmUKPrURw3In7Dn2KH8cOPR1%2FhP61gGjlHhlqtFOGIMb3hP5VGT2p6fsGqKljmQSfqz0fjqKJ2nUQ%2FW0i1WkyL3BssMb14%2FZfrqLmP26mhAGgMgfRiUbCRWgo2ru%2Biw5iHbLoWF2U7A%2BSLHnXYI2XGor%2Fb55xTKMZbBAB9dyKGWuiGc3wvMcn4AA6E9CVYwGX7b1Ckk7U9JvNIL7c1ImSjUH2o6umh6cBXkZTp3Is8kL%2BY%2BGTXDBsSYvcSwRFUag4O6N4lRRc%2FKdJYgXoTDhHJ4wlIOJygY6pgFORvHVJuy5vAVa1iJPQPG6%2Br7JbQ7SGQngnc8RAM1xaZa18lPMdJVq%2BUKSQejXFLxoTr3UZb49mRTz4djEJPIrI9fiKy20zub140dEuLNgCARq2U%2B0Q6u6QE8ZzgCnD8MxWamOv1HLVsH%2Fp3kiY8ZZURm71%2FG%2B73Q31yGQSVh597%2FMNf4cRorCrofGCunVpkGGLXGyduxho%2BGGWYXsUFOQW40oaAIw&X-Amz-Signature=7805d964e3f425e6c2577512b3f16a7dae4e224a7494d4b699e3a99040cc3114&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDSNXIYX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGpPV8hkqd%2BhO123iT89GsN6GgJrAUZNssasDTXJ90KAiA1Mn0uRM4Tzql52fRQ9M8tA%2FGmRUW68Pk0n2n7mA4xUyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMayFsQxmYQ9KXpdtNKtwDYftvNQLbCPjHQSKiTjRNYeNTfxPXCVIKfwHGKPk1on0IcXl7SFdF9lcINXP5Ub4bXdIc1DerpR6UMkCQIWsXraVXgJaVokwhEw6Hb85K8uhbw0hv2cyR73mgiIz953ldJvxL5VeUjgmrmO81V249pEHWYXgPuzWPcGjnDPOLPosXdd8D2c3TR36oR5piGULTBhEC815Z%2B2BqQx142wSDNvU7mCBNa8vF%2FX7keFpMdOrSbor0TQuzQJrcCBQN4Au6%2Fs59i468luFW01K4phyz8C0K9MaxWfhELW5BQaLDJT%2BHaqkNKEvJww%2BNhcg3s4O2xlURt%2BgogCYX09MkJAddMpphabOF0R2A9AQDsmUKPrURw3In7Dn2KH8cOPR1%2FhP61gGjlHhlqtFOGIMb3hP5VGT2p6fsGqKljmQSfqz0fjqKJ2nUQ%2FW0i1WkyL3BssMb14%2FZfrqLmP26mhAGgMgfRiUbCRWgo2ru%2Biw5iHbLoWF2U7A%2BSLHnXYI2XGor%2Fb55xTKMZbBAB9dyKGWuiGc3wvMcn4AA6E9CVYwGX7b1Ckk7U9JvNIL7c1ImSjUH2o6umh6cBXkZTp3Is8kL%2BY%2BGTXDBsSYvcSwRFUag4O6N4lRRc%2FKdJYgXoTDhHJ4wlIOJygY6pgFORvHVJuy5vAVa1iJPQPG6%2Br7JbQ7SGQngnc8RAM1xaZa18lPMdJVq%2BUKSQejXFLxoTr3UZb49mRTz4djEJPIrI9fiKy20zub140dEuLNgCARq2U%2B0Q6u6QE8ZzgCnD8MxWamOv1HLVsH%2Fp3kiY8ZZURm71%2FG%2B73Q31yGQSVh597%2FMNf4cRorCrofGCunVpkGGLXGyduxho%2BGGWYXsUFOQW40oaAIw&X-Amz-Signature=ff3c326bcae56046db8c3e53210d53e967b233ebe11693736af79348ebca8ae0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
