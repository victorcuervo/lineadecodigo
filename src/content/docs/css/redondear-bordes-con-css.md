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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC5LQHQE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T181207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDfHqLJr1x3fz8bIKuM6z9%2BiodI5ctXuLhwI6LWPn8cVAiEAlqZ3mSMMiPgn%2F8nX8ax7sSrczs1i81ELYcqwqHpsM6EqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPW3lOBHhdI%2FNjityrcA9LNYvDBdZZrf5jOkVs4TpLk3Yx%2BuplXaqlnYVCeNp03BNaQZPAaA5zrt6LWwQCuoylU5VaLrIegG40NLc2iMjcm8HO7oPOQGzgnokw6LMiCKDm0pe3d7ypBIXFoobiTpT8qv6bTEK4au%2BfGJiSQJWbdgaYFaYlytUiTGkohtkfgkS4TrTc7kZiOtPk%2Fp9e0EYekkTxPSSRjY7Gd%2FSv%2BJY%2BJPZMjDkqA3r6rQOVklw20l%2FRvztBn1GN%2BGABSMr0XrgxXrdMfaMQ0K0itJY2to%2F8ZTmNOYUHx5vlwfHdHu1WxmQYUMTmUDxgHzCd%2BwObzWOTxv5tT2SoQuNxL8QJnxOqTU3yxf%2Fhndl7qgwa7wDTb%2BOJg%2BTRIrAITYxvrSzbFnsd4%2FYPslgovqKuM53w96qOrpkNoMYgvHdlowOPM1o1bk1bZI6NuO%2BjzaQxwQxBDBdLHQfXfG9hBNmJaZ4yyEXFViQD41H46OGE7t5%2BAdnOw%2B%2FdtgBtTIq1F0%2FeluQY%2FcmC4X2Zl56KfM%2FMoe460KB%2BOzOUtyW7U0cD4o52IFySbM7A%2Bytvgm%2BiWR3GhgZwolvbYw9RAa1cETbCeveEX9cjdHl0HtndBMFyztkmm%2FXJNsj5oaNu43VBtkxY2MM2H3MkGOqUBk5t%2BKbKkQZHm8S3%2Fsqpu1fnRzhPWJxZND5oxNfJ39O8p%2Fc2zc0o52Qm2FOjRowN0%2Fy9tkM12gIBHZ5q46eJ6pIPQXWVVs0p%2FBFlUMLb1oHz9v%2FWGDJxVhnm6BNC%2FR8Bg98p3abt%2FqiiXff8pRqa6FxUHnvHKrH1a7kzZDAbN2hFBSZtYvSwfF35ANot%2F1hinRo%2BDxX6CfjGUzcvnmU9P4l1MeuZd&X-Amz-Signature=4aac7b641948e49a8f96ed27efb849df1cec27e18c84d7a63ee65b488093bdf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC5LQHQE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T181207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDfHqLJr1x3fz8bIKuM6z9%2BiodI5ctXuLhwI6LWPn8cVAiEAlqZ3mSMMiPgn%2F8nX8ax7sSrczs1i81ELYcqwqHpsM6EqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPW3lOBHhdI%2FNjityrcA9LNYvDBdZZrf5jOkVs4TpLk3Yx%2BuplXaqlnYVCeNp03BNaQZPAaA5zrt6LWwQCuoylU5VaLrIegG40NLc2iMjcm8HO7oPOQGzgnokw6LMiCKDm0pe3d7ypBIXFoobiTpT8qv6bTEK4au%2BfGJiSQJWbdgaYFaYlytUiTGkohtkfgkS4TrTc7kZiOtPk%2Fp9e0EYekkTxPSSRjY7Gd%2FSv%2BJY%2BJPZMjDkqA3r6rQOVklw20l%2FRvztBn1GN%2BGABSMr0XrgxXrdMfaMQ0K0itJY2to%2F8ZTmNOYUHx5vlwfHdHu1WxmQYUMTmUDxgHzCd%2BwObzWOTxv5tT2SoQuNxL8QJnxOqTU3yxf%2Fhndl7qgwa7wDTb%2BOJg%2BTRIrAITYxvrSzbFnsd4%2FYPslgovqKuM53w96qOrpkNoMYgvHdlowOPM1o1bk1bZI6NuO%2BjzaQxwQxBDBdLHQfXfG9hBNmJaZ4yyEXFViQD41H46OGE7t5%2BAdnOw%2B%2FdtgBtTIq1F0%2FeluQY%2FcmC4X2Zl56KfM%2FMoe460KB%2BOzOUtyW7U0cD4o52IFySbM7A%2Bytvgm%2BiWR3GhgZwolvbYw9RAa1cETbCeveEX9cjdHl0HtndBMFyztkmm%2FXJNsj5oaNu43VBtkxY2MM2H3MkGOqUBk5t%2BKbKkQZHm8S3%2Fsqpu1fnRzhPWJxZND5oxNfJ39O8p%2Fc2zc0o52Qm2FOjRowN0%2Fy9tkM12gIBHZ5q46eJ6pIPQXWVVs0p%2FBFlUMLb1oHz9v%2FWGDJxVhnm6BNC%2FR8Bg98p3abt%2FqiiXff8pRqa6FxUHnvHKrH1a7kzZDAbN2hFBSZtYvSwfF35ANot%2F1hinRo%2BDxX6CfjGUzcvnmU9P4l1MeuZd&X-Amz-Signature=df47f29b3456aa14a1b7401188a9096191842d4b932bd052fd284933013227d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
