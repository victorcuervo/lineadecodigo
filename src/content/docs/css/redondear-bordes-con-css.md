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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOT7D7C7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T130526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANGKrCqE7BsdwPUvOMxW6BrbGR6AxREZJK3ICQy8IjjAiEAs62BfhMFJZ%2BO2a5aEQWbnfthvMWILc5KooLwf8JHLwsqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwzuHTqNkzEKmSuCSrcA6ECxC8m0KShk1fY0bgdxkgJy%2Fue%2FL196hx0VGP1z%2Fv8NXjBO%2FqXS0pm9HnPc9%2BovJXf%2FHo0sWB3O2BCo%2FGB1PISJZf02BszKsROwoeing5hcEE%2FrV4ouhgqs6IPvZUxH0JtUVDH1zRK7spGLmbucl2b5ics4wJ%2F1TX38SJmtm33I%2FlyXh7rOF%2FmLXt2AekOxmaHKqB5uUSVACCCM6YDSo7dHeviUzLTXsGDFp130mGr%2B2u3hvsda2DhpH86MnQwq9F5xfxjeRFJc6Mvnp72FE3ibxhEMmWk892tTqqD6fb5iDZYifVq77KktkwFBJHLTrFQy%2FOVFaqKOTf4rvcTj4YN1Ljk1wE%2BowXvL%2BwhSriDmXVMnubVuVqfFk%2B6es1YmmH3O8mEzk6Bq8a0ajx3Xm3WvDh0RI3pIiK0KWPv0gMe6edljMnYNvTQgWShh5TbRZ36PAjkL%2B%2FTqZ%2BDeIf4pGNA5BlZ9IT9MCy%2FoohYANCxkVAmP7fYEnGN29Xns2Is%2FtbB5nSg4T5cWp4QuVcG%2Fhv2zBUzga6oZVIE1Ogh%2Fa0WKOCx%2BcT7bNGUFcltfe2Kkl4IHJOBO8TQeEV2VcH1qLPtwHt3Asz7x%2FNqhF%2FeADeWksfgK8Bn94mvi%2FvgMJuZ1ckGOqUBxMXzc4eADeK33LiI5Y%2FxxYgFh5jNGjHxfg7mFNxAqAnI8n8Tu2R43eZBy48Gv59lB%2F1ihvmkCeKP8nxkyYjJo0%2FC%2B2XKWfla7ltDK9B30NmsIi5Z4R1s7iYBA6GNG3RC4zHUqXVUsSQ55fmyR%2FYhVZ%2B1PnCFb16%2BzBgOM%2FumhYnvgVh75IZD4dCgBcKRTKZNM14IeGdLIBzAFpDID0VhKnOCvZKk&X-Amz-Signature=6b243f712acf78ee892dee5bcdf7f829b1a1890d9739fcb6f179d25f8fa6496d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOT7D7C7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T130526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANGKrCqE7BsdwPUvOMxW6BrbGR6AxREZJK3ICQy8IjjAiEAs62BfhMFJZ%2BO2a5aEQWbnfthvMWILc5KooLwf8JHLwsqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwzuHTqNkzEKmSuCSrcA6ECxC8m0KShk1fY0bgdxkgJy%2Fue%2FL196hx0VGP1z%2Fv8NXjBO%2FqXS0pm9HnPc9%2BovJXf%2FHo0sWB3O2BCo%2FGB1PISJZf02BszKsROwoeing5hcEE%2FrV4ouhgqs6IPvZUxH0JtUVDH1zRK7spGLmbucl2b5ics4wJ%2F1TX38SJmtm33I%2FlyXh7rOF%2FmLXt2AekOxmaHKqB5uUSVACCCM6YDSo7dHeviUzLTXsGDFp130mGr%2B2u3hvsda2DhpH86MnQwq9F5xfxjeRFJc6Mvnp72FE3ibxhEMmWk892tTqqD6fb5iDZYifVq77KktkwFBJHLTrFQy%2FOVFaqKOTf4rvcTj4YN1Ljk1wE%2BowXvL%2BwhSriDmXVMnubVuVqfFk%2B6es1YmmH3O8mEzk6Bq8a0ajx3Xm3WvDh0RI3pIiK0KWPv0gMe6edljMnYNvTQgWShh5TbRZ36PAjkL%2B%2FTqZ%2BDeIf4pGNA5BlZ9IT9MCy%2FoohYANCxkVAmP7fYEnGN29Xns2Is%2FtbB5nSg4T5cWp4QuVcG%2Fhv2zBUzga6oZVIE1Ogh%2Fa0WKOCx%2BcT7bNGUFcltfe2Kkl4IHJOBO8TQeEV2VcH1qLPtwHt3Asz7x%2FNqhF%2FeADeWksfgK8Bn94mvi%2FvgMJuZ1ckGOqUBxMXzc4eADeK33LiI5Y%2FxxYgFh5jNGjHxfg7mFNxAqAnI8n8Tu2R43eZBy48Gv59lB%2F1ihvmkCeKP8nxkyYjJo0%2FC%2B2XKWfla7ltDK9B30NmsIi5Z4R1s7iYBA6GNG3RC4zHUqXVUsSQ55fmyR%2FYhVZ%2B1PnCFb16%2BzBgOM%2FumhYnvgVh75IZD4dCgBcKRTKZNM14IeGdLIBzAFpDID0VhKnOCvZKk&X-Amz-Signature=de9dc1197ecaf1bd2f2f5c2205972704508a412559ba3c22ef657e9e7a23ebd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
