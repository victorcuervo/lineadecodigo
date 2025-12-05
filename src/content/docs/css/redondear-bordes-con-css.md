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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF7US3YR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T192109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDCVYZgIjbj15%2B0BLpLF3VTRx898mVK6lSQK%2FM5pPObQIhANH308ci1MX0ztavqanw1RsZn%2BmWznoo1cN%2BA4J%2Bg6gGKv8DCGAQABoMNjM3NDIzMTgzODA1IgwcRjYQkqLxlPL1Dqsq3APEktfhATw4Ao8FUm%2BgTXBRLPo0XFeTA2opAH4xs20MhLFJzyvqamqxrbFe1BWftMOGrCa5Zh9BLpuyXHDjx5gYHtSO%2Bat2YC2p768WvZPDt8yYY6clIsFMyd858tiiLsawjl01q0fMVc5qingYiNOYhucyCdccRpMDxYml0Biu5HXRE7zhDi7eGZTxCqxaC4u3n0t3r4cyfgZoAOpgjRfYqWkDRZD%2FcTleZtfcTQ5dxF8kNVJaTg8rl%2Fudnovb5zFD614m7oWiu0KN6Kaa%2BYkqM0dBFlAOsuR046nTCI8Yi6UniQ1V%2BLyy7IIJOcnfQ5YxBmlR8LzO0VrNYC2QeWkzRqgVv186526K%2BYwMcz5zpA17CdZbaFGWDTHYLsK9Ko0MGY02Ubre5gT1VQzg4AknidHAW8XAey9qzqoO0KYaeASAB748QA9zjlVHm92YFezBeHUDEud1Jer6OSUbmnUJrZf0tIH8SS10VAh4mstnrb142xS8H%2FX6eLiN6S8LTbr6fT08LZVwYcbWS4a2TzKzw%2Bg%2B867wECQpkgv%2FO0s77nGFyivdhlKbsC3h26jvPNo7oqf0WJkDetttORUnnEOEmWrATK%2F6pcGz4WNK8fl3Xukt9NvBrdtPZTD06zDY5svJBjqkAersFxoiiupqpfULwj1NPwWMyk4QSLOFfVf01WPwi8HU%2BBmYY0CvO%2FbUYd5UCnkFJvzNb0GlD4oQ7T4a372w2Ll%2Bcq3FZgxA9zRYzqRqw%2BNNq7Zjs%2Bs1lpo%2B7NovPqcHlY9XcIIv0DvLGWkNojJ6lv2M3oyTXs62qK%2F%2BmlxwGLien5la30AOnaWjdOf0BXLq2TGf7uAkQ1VvCjfCfwVNso%2FVHav9&X-Amz-Signature=bed8bcc37526c5419523b42e6270205f177a53a75ac1ee6ad434018dff6cf7a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF7US3YR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T192109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDCVYZgIjbj15%2B0BLpLF3VTRx898mVK6lSQK%2FM5pPObQIhANH308ci1MX0ztavqanw1RsZn%2BmWznoo1cN%2BA4J%2Bg6gGKv8DCGAQABoMNjM3NDIzMTgzODA1IgwcRjYQkqLxlPL1Dqsq3APEktfhATw4Ao8FUm%2BgTXBRLPo0XFeTA2opAH4xs20MhLFJzyvqamqxrbFe1BWftMOGrCa5Zh9BLpuyXHDjx5gYHtSO%2Bat2YC2p768WvZPDt8yYY6clIsFMyd858tiiLsawjl01q0fMVc5qingYiNOYhucyCdccRpMDxYml0Biu5HXRE7zhDi7eGZTxCqxaC4u3n0t3r4cyfgZoAOpgjRfYqWkDRZD%2FcTleZtfcTQ5dxF8kNVJaTg8rl%2Fudnovb5zFD614m7oWiu0KN6Kaa%2BYkqM0dBFlAOsuR046nTCI8Yi6UniQ1V%2BLyy7IIJOcnfQ5YxBmlR8LzO0VrNYC2QeWkzRqgVv186526K%2BYwMcz5zpA17CdZbaFGWDTHYLsK9Ko0MGY02Ubre5gT1VQzg4AknidHAW8XAey9qzqoO0KYaeASAB748QA9zjlVHm92YFezBeHUDEud1Jer6OSUbmnUJrZf0tIH8SS10VAh4mstnrb142xS8H%2FX6eLiN6S8LTbr6fT08LZVwYcbWS4a2TzKzw%2Bg%2B867wECQpkgv%2FO0s77nGFyivdhlKbsC3h26jvPNo7oqf0WJkDetttORUnnEOEmWrATK%2F6pcGz4WNK8fl3Xukt9NvBrdtPZTD06zDY5svJBjqkAersFxoiiupqpfULwj1NPwWMyk4QSLOFfVf01WPwi8HU%2BBmYY0CvO%2FbUYd5UCnkFJvzNb0GlD4oQ7T4a372w2Ll%2Bcq3FZgxA9zRYzqRqw%2BNNq7Zjs%2Bs1lpo%2B7NovPqcHlY9XcIIv0DvLGWkNojJ6lv2M3oyTXs62qK%2F%2BmlxwGLien5la30AOnaWjdOf0BXLq2TGf7uAkQ1VvCjfCfwVNso%2FVHav9&X-Amz-Signature=02733f0ee65e633fc1be8fa704f3d27cc2ae3d99cb6c4a2d245ffdff8bb6094b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
