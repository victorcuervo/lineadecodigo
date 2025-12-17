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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652GXEDA4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClyoPk3NcHvrqygnnYeJMeinj84HOsQjyhtDHWt8sGYAIhALL07h%2Fph62t1hmS7JuRXeIkNMQxZONKgTR4EVxOLpLJKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxm1TVazzacUFkI67wq3ANa9Gf6AppZ0IaeCpD%2F15RO1%2B%2FwcX%2Bea3%2FEItp2F%2FRb5PCei1NYs%2BJAHmunifgIegAUt6h8mnfd7jh3SPWdGmhxLYCsKS7A3KMDPn0tu8e4DQRVWy0%2Fq%2FWnOwphyRhn3H8xrwldTu1Dew8moAlYp51tv96Tnpz1RWtit8DIEn3fS5j54vwxRDGukVgD3jE0qM1LkqB%2FqdXG0abuLFZcxQu6%2B0FMT0%2Brf8aFT1TBhjyrVcW2WlivO7YuprSYoX5gT2UIR%2BfI4vfOZe0E6JBPrVpLiFt9aFiPhvopCsTwsXtRQLyHtg4dVB66Nqv%2BEK%2FYwLy87niKss9%2Fni7pGpmeNU0wSzTTGy5LOagRJtR6KiBdh09MsYYEKldS1JL92Sq%2FzfvsrvPsNghMTbnHnqrHwdxOcmNzv9YXxFJA4%2B%2Brn6%2Bzc4GGJzMmwLcRBoA3y45MANuiDEL1STXJWatTTACIQ0dxHfwxD5zPdiWupQlKm6BeCV6G3MkhfzrK8aSQQmFoaCcTULPJirt8HqLIrMVKN89%2BWH4KQmEGeoobrbDEn%2FTSdrVyL0b0NTtTEbawa297mcIZrjCvqro8cz024yK6l%2BDDzXzlLbQCNxGNooG87%2F3nxp5bPxfL1DbE%2BH6jKjCmi4zKBjqkAcAtwWVnKkx7Tb4gkv6I0%2FMI037KnBLUYiBvApUi9Job5FiI8Cjs3f6f9%2BEuZQsaEVnY3mebD0JVb94tnaLhn4yQv%2BdgocGciWilOcLWNmjwDpkHlPt%2FJ%2Bdrt8Hodm1D4EKaGEAZcdUxq2QF1qjSsr891KS2tDfdDx%2BwAFPDqYmlg48PyOkzMq%2FejguSJQ2lPuVDqpmGV9dbDmNv0gjj0wXTienb&X-Amz-Signature=20172b82b284141952e3365970ab548dc72259947aa0b24a191b8165eed8c11a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652GXEDA4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClyoPk3NcHvrqygnnYeJMeinj84HOsQjyhtDHWt8sGYAIhALL07h%2Fph62t1hmS7JuRXeIkNMQxZONKgTR4EVxOLpLJKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxm1TVazzacUFkI67wq3ANa9Gf6AppZ0IaeCpD%2F15RO1%2B%2FwcX%2Bea3%2FEItp2F%2FRb5PCei1NYs%2BJAHmunifgIegAUt6h8mnfd7jh3SPWdGmhxLYCsKS7A3KMDPn0tu8e4DQRVWy0%2Fq%2FWnOwphyRhn3H8xrwldTu1Dew8moAlYp51tv96Tnpz1RWtit8DIEn3fS5j54vwxRDGukVgD3jE0qM1LkqB%2FqdXG0abuLFZcxQu6%2B0FMT0%2Brf8aFT1TBhjyrVcW2WlivO7YuprSYoX5gT2UIR%2BfI4vfOZe0E6JBPrVpLiFt9aFiPhvopCsTwsXtRQLyHtg4dVB66Nqv%2BEK%2FYwLy87niKss9%2Fni7pGpmeNU0wSzTTGy5LOagRJtR6KiBdh09MsYYEKldS1JL92Sq%2FzfvsrvPsNghMTbnHnqrHwdxOcmNzv9YXxFJA4%2B%2Brn6%2Bzc4GGJzMmwLcRBoA3y45MANuiDEL1STXJWatTTACIQ0dxHfwxD5zPdiWupQlKm6BeCV6G3MkhfzrK8aSQQmFoaCcTULPJirt8HqLIrMVKN89%2BWH4KQmEGeoobrbDEn%2FTSdrVyL0b0NTtTEbawa297mcIZrjCvqro8cz024yK6l%2BDDzXzlLbQCNxGNooG87%2F3nxp5bPxfL1DbE%2BH6jKjCmi4zKBjqkAcAtwWVnKkx7Tb4gkv6I0%2FMI037KnBLUYiBvApUi9Job5FiI8Cjs3f6f9%2BEuZQsaEVnY3mebD0JVb94tnaLhn4yQv%2BdgocGciWilOcLWNmjwDpkHlPt%2FJ%2Bdrt8Hodm1D4EKaGEAZcdUxq2QF1qjSsr891KS2tDfdDx%2BwAFPDqYmlg48PyOkzMq%2FejguSJQ2lPuVDqpmGV9dbDmNv0gjj0wXTienb&X-Amz-Signature=1fee1095d81587c14e8504b74d47aa143f6a530025ba121b8c306f8d8d2fc549&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
