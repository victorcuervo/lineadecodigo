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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZTQJFYI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCw0Vo1DP1pOLG9i9XuKfCUyD9jvBmQU3FcDRxi36qfcQIhAMjYA2MjrGN48Iv9NpB4T3VUZPVlmULJVEO98QijZAr%2FKv8DCHYQABoMNjM3NDIzMTgzODA1IgwYc09knNvGOY5m5V0q3ANkY3%2B%2BF0h%2FPIB1O6b%2BxRuA78SyblKtnBF%2FIk2Zy84je5dXjJGSzkGcg%2BeaRQpTzGmSF0JC5Zvkrb49gCX8y%2FJg33vWxvXxsmiKraSalHnMgahQD8Ex7H4EMvH6k%2FR%2FC1moGdgJZZ0eYqaOw9bVmj93eJPQMH7xPh2T7C6NIjlZ8NGufR8t6jM0TezoTR0rsrZGpaVYZQQ8PdlwKJhI12hn5Bgf4r644ovQvH0y1rQLgvf85v0SMu0iHUsobz1mfSgWotzON0OoZasvWfrXcHHExb%2BNr%2FV6aayfodHmUR11xQiTG64082om0XUsXlyux6Hk6%2Bo5sSfpoNWfHdsED4yXpXlmYsZAZXWmT4ABWKhUq0%2BHObeYPTdKCIZjVJFgf2ku%2FTrQ9J5Ws4jYm5ulU3X%2BFQAL4%2F0d%2FSOcykMI3ccVarTCkpelZCSZtVdKecqDa4%2BsnhQDxX4Q5ryLGQlLA2YMIX7DzqMjO1ggWpxr6zOCkzmuACfDS%2Ft7Exo9rqrDs8mxNnjFjrkaTnRr2xDJFndxTwAkFEGhywEZq7sBRItM9x294bSPYpMIz2GS0HlzR5FNTg1Ls49n5zwdCYjlfAlgCGQ07VORnBtmJN4tVE2eAxiiut4uLOlIwOpYxTCN6YjKBjqkATrnBFLEZVUmTEvumbhfWnzia3U5okSXxFjnTEybScDcMCCPXhLVTBd1uqKPrasLZZy%2FFnUnXkVCaRn59b3Qa5%2BUp1LhGVUkudlOyb2qI8ro4%2B%2F1IT0sk37FNGL24xjq%2Bek%2BqTMsayXHbqNt3CJFQAJs0SbPvuuI94BX92%2BYLkKykKHaGLqWETi4wk4FJkic0Rhf117XJ2X2ig0AODLCxdAcs7aS&X-Amz-Signature=0179501d8383aa5143593386e6337a26ceca8d6461f2b7d3ac8190fff4e0e1c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZTQJFYI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCw0Vo1DP1pOLG9i9XuKfCUyD9jvBmQU3FcDRxi36qfcQIhAMjYA2MjrGN48Iv9NpB4T3VUZPVlmULJVEO98QijZAr%2FKv8DCHYQABoMNjM3NDIzMTgzODA1IgwYc09knNvGOY5m5V0q3ANkY3%2B%2BF0h%2FPIB1O6b%2BxRuA78SyblKtnBF%2FIk2Zy84je5dXjJGSzkGcg%2BeaRQpTzGmSF0JC5Zvkrb49gCX8y%2FJg33vWxvXxsmiKraSalHnMgahQD8Ex7H4EMvH6k%2FR%2FC1moGdgJZZ0eYqaOw9bVmj93eJPQMH7xPh2T7C6NIjlZ8NGufR8t6jM0TezoTR0rsrZGpaVYZQQ8PdlwKJhI12hn5Bgf4r644ovQvH0y1rQLgvf85v0SMu0iHUsobz1mfSgWotzON0OoZasvWfrXcHHExb%2BNr%2FV6aayfodHmUR11xQiTG64082om0XUsXlyux6Hk6%2Bo5sSfpoNWfHdsED4yXpXlmYsZAZXWmT4ABWKhUq0%2BHObeYPTdKCIZjVJFgf2ku%2FTrQ9J5Ws4jYm5ulU3X%2BFQAL4%2F0d%2FSOcykMI3ccVarTCkpelZCSZtVdKecqDa4%2BsnhQDxX4Q5ryLGQlLA2YMIX7DzqMjO1ggWpxr6zOCkzmuACfDS%2Ft7Exo9rqrDs8mxNnjFjrkaTnRr2xDJFndxTwAkFEGhywEZq7sBRItM9x294bSPYpMIz2GS0HlzR5FNTg1Ls49n5zwdCYjlfAlgCGQ07VORnBtmJN4tVE2eAxiiut4uLOlIwOpYxTCN6YjKBjqkATrnBFLEZVUmTEvumbhfWnzia3U5okSXxFjnTEybScDcMCCPXhLVTBd1uqKPrasLZZy%2FFnUnXkVCaRn59b3Qa5%2BUp1LhGVUkudlOyb2qI8ro4%2B%2F1IT0sk37FNGL24xjq%2Bek%2BqTMsayXHbqNt3CJFQAJs0SbPvuuI94BX92%2BYLkKykKHaGLqWETi4wk4FJkic0Rhf117XJ2X2ig0AODLCxdAcs7aS&X-Amz-Signature=450d2c66850b06983685aa448962e8958e30c1171e3b75abe840fa84fe6e7b6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
