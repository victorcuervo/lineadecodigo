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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466256GJRZQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T064725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzzDyIBnjW%2FQ%2FZRD9Y%2BsRIi%2Fe8mDO7cP0KOsceSPiy0AIgeu0azkBF1X8VbDpZHV1EWEMQBQXsSCdSc%2FcmiKMmX8kqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCliobyuRAEskcxk7CrcAy9p5MYjvaM%2FBdeycgDDKsBrikjZ8Gu9LOuQY9z%2BDBfI1PTcWmeFAtWIXd13scEP34NGfErYcXxl%2BMMQmbiS9dqlBmzwoJs3i0I5e5wiT0hDtr7oeoAN2o7PsElAJ5bVj8k2G%2FES%2F2vpYFpm9Jq49VZBNEPasD0nFToyrZtR7upM%2B4AjpzeLycsTWZGJ2zqyqIzH5r1qzMeeLSGivpWq30yDJ4FqelOW%2B6hFjXuF7Uf2tGIV5BAlN0Rsw2ZY8RddHhCLm9Pae8pvI5Nd3kwlHEtc%2FhPr%2FA77Ncdpl6P3C7XXxYPzinynmSPQT2z%2FBNJpyNhPC%2FBsJUaTRXLT80htt6HIKRUQQKSuxdJl36%2Fc7NiR6v0Gx2KPk2oVbO%2Fs9q4mGp7z%2BNfC2%2B7WmvM8zwa0JUr2UT8fqqQo5LJpyLhrV3VxduaWQSVJdgd0lulmoeeeUu9BtlgmYcTQx5y6YDDxyKXndl1iwj7ieSVz5x7Jh1Pp%2FIpY%2BmIp6vWqveH0J23ao7hiB8Z1J4OAKq%2FaFpeKFE64Hb3WBXSAzgjyjdUi3EJBFLIJnCM3CSZchY13N%2BMZOImXhnZGKUzihaIeotJNSKQMsRUjASrSTtfdBiQj0FqdLjrJdfZyPCEG1VnIMNKH38kGOqUBrUYhdXrA%2B6Tc3ARbz%2FC2SgfOHh2bSA7hR6BxN45zPHlF1TSSVBL4etNoF5FYfK0vYATYHoeIN321OreNXMSgD3phqsPL7X4qCrZHbhjSkeuBO8iw6b0VU7mLvFHWeKxG297aP0ECclS5JVbicLOvSdE90T8EvqI89gkszF6lE%2FufD3Yhr27uWJWNOC9N%2BkmKC%2FkkS7g2HnMGBLcmtg0B44M2EG3W&X-Amz-Signature=51f4363e15abee3211a230f090f702028279ca133742810ee3d43abe16eaca4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466256GJRZQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T064725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzzDyIBnjW%2FQ%2FZRD9Y%2BsRIi%2Fe8mDO7cP0KOsceSPiy0AIgeu0azkBF1X8VbDpZHV1EWEMQBQXsSCdSc%2FcmiKMmX8kqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCliobyuRAEskcxk7CrcAy9p5MYjvaM%2FBdeycgDDKsBrikjZ8Gu9LOuQY9z%2BDBfI1PTcWmeFAtWIXd13scEP34NGfErYcXxl%2BMMQmbiS9dqlBmzwoJs3i0I5e5wiT0hDtr7oeoAN2o7PsElAJ5bVj8k2G%2FES%2F2vpYFpm9Jq49VZBNEPasD0nFToyrZtR7upM%2B4AjpzeLycsTWZGJ2zqyqIzH5r1qzMeeLSGivpWq30yDJ4FqelOW%2B6hFjXuF7Uf2tGIV5BAlN0Rsw2ZY8RddHhCLm9Pae8pvI5Nd3kwlHEtc%2FhPr%2FA77Ncdpl6P3C7XXxYPzinynmSPQT2z%2FBNJpyNhPC%2FBsJUaTRXLT80htt6HIKRUQQKSuxdJl36%2Fc7NiR6v0Gx2KPk2oVbO%2Fs9q4mGp7z%2BNfC2%2B7WmvM8zwa0JUr2UT8fqqQo5LJpyLhrV3VxduaWQSVJdgd0lulmoeeeUu9BtlgmYcTQx5y6YDDxyKXndl1iwj7ieSVz5x7Jh1Pp%2FIpY%2BmIp6vWqveH0J23ao7hiB8Z1J4OAKq%2FaFpeKFE64Hb3WBXSAzgjyjdUi3EJBFLIJnCM3CSZchY13N%2BMZOImXhnZGKUzihaIeotJNSKQMsRUjASrSTtfdBiQj0FqdLjrJdfZyPCEG1VnIMNKH38kGOqUBrUYhdXrA%2B6Tc3ARbz%2FC2SgfOHh2bSA7hR6BxN45zPHlF1TSSVBL4etNoF5FYfK0vYATYHoeIN321OreNXMSgD3phqsPL7X4qCrZHbhjSkeuBO8iw6b0VU7mLvFHWeKxG297aP0ECclS5JVbicLOvSdE90T8EvqI89gkszF6lE%2FufD3Yhr27uWJWNOC9N%2BkmKC%2FkkS7g2HnMGBLcmtg0B44M2EG3W&X-Amz-Signature=20f6f454a94ea76a09b0807ac91c71b637ef379c9fa3130d4b05b9eade1b1c51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
