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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMM6TPLF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T054732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDv8chtfj6biSA5SQXH14L1DsDQHCqCZVb42DWmS6%2BkWwIhAKGZdQx2EJyJ7npRcrWHSYRyngGf6pAlmHpEXSRHG4ONKv8DCG8QABoMNjM3NDIzMTgzODA1IgyABhrpKg74Ukbx5oIq3APu0utu%2Fhb5BXEFcHCUTH5bvTh2Xpavv3vGP01hvIbvb8shWypnq99r5J%2F6dLM0hrkGnwcc2IHgspEms04Xfpu%2Fmtc%2FZSa%2BbAuawTDpnj6FaCY0E9wYXUtX5wkCTTbOn9SEm3okR%2FlwGhHYO%2FLcDFCeoJkQFUSP7t2wKvtZsHKkAxxnOUEub%2Fzh5yLByoq1TYr234lxC27F0wN3wvB8Sybbb6zexvTol81ebbwjC5hTDAYODBWV4Kx8Hgvj1SjSx9ky%2F3bmVMWpmiOlVbDTaOgoLpJtSu%2Bu2ZP1QPcnEkYnY1QAq7fYpMlAzDn2q3d1rjjY9rkNjIrjMdX9S8ByBvOD9n73GuX0MkMMGOK0bR92m6D6F2dO1biSEgGSe0DfVH1S8Qik4TTX1nN0ibiC9S8%2B4hnae5aEcMN5pVbClwdM7OST%2BmBsQ1gbZ2H4GLZ80Nxl34CMs6kfJZ63HbnHHQKHEcftJiRtFNFLxswrXK953Pb%2Fahe96PKmnWhUaNyAcRqPkULqnb7Wpoa8GOkcuUDn11I7PhHQhyib1k69MJKs%2B58rnmXVqY5BpMtL2FuHcER0wdrCH9Wj4LTHkpXagzbOtA8H6cEK1mM9HxH670Ub75NYe3An2WXOTCeMgDCz%2Fc7JBjqkAVDFcgdz%2BzayYuVqcas0zg3xCanePEfShiR6AbrlyYB25VIJD8kIuohH9Y0P4LNFts9Z8imBsgLRZLpY2bdlwKKk1Rqv1zn9jCEAkAN3yGwHZRrnuU%2B%2BaEsfEl6xtD%2BEL%2F6I1QN67A6HQGeZv0gMde0ab%2BqH7R%2FzEai3LxR44VsZJuE1OkUd9%2BESmqnMYWEJ7QUGCbAiVd01WmtT7t4gwmY2dzWv&X-Amz-Signature=d6e18a4d41765d4ea49a6d80296e70f4ee9cced7fa6b576a6de7672342752205&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMM6TPLF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T054732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDv8chtfj6biSA5SQXH14L1DsDQHCqCZVb42DWmS6%2BkWwIhAKGZdQx2EJyJ7npRcrWHSYRyngGf6pAlmHpEXSRHG4ONKv8DCG8QABoMNjM3NDIzMTgzODA1IgyABhrpKg74Ukbx5oIq3APu0utu%2Fhb5BXEFcHCUTH5bvTh2Xpavv3vGP01hvIbvb8shWypnq99r5J%2F6dLM0hrkGnwcc2IHgspEms04Xfpu%2Fmtc%2FZSa%2BbAuawTDpnj6FaCY0E9wYXUtX5wkCTTbOn9SEm3okR%2FlwGhHYO%2FLcDFCeoJkQFUSP7t2wKvtZsHKkAxxnOUEub%2Fzh5yLByoq1TYr234lxC27F0wN3wvB8Sybbb6zexvTol81ebbwjC5hTDAYODBWV4Kx8Hgvj1SjSx9ky%2F3bmVMWpmiOlVbDTaOgoLpJtSu%2Bu2ZP1QPcnEkYnY1QAq7fYpMlAzDn2q3d1rjjY9rkNjIrjMdX9S8ByBvOD9n73GuX0MkMMGOK0bR92m6D6F2dO1biSEgGSe0DfVH1S8Qik4TTX1nN0ibiC9S8%2B4hnae5aEcMN5pVbClwdM7OST%2BmBsQ1gbZ2H4GLZ80Nxl34CMs6kfJZ63HbnHHQKHEcftJiRtFNFLxswrXK953Pb%2Fahe96PKmnWhUaNyAcRqPkULqnb7Wpoa8GOkcuUDn11I7PhHQhyib1k69MJKs%2B58rnmXVqY5BpMtL2FuHcER0wdrCH9Wj4LTHkpXagzbOtA8H6cEK1mM9HxH670Ub75NYe3An2WXOTCeMgDCz%2Fc7JBjqkAVDFcgdz%2BzayYuVqcas0zg3xCanePEfShiR6AbrlyYB25VIJD8kIuohH9Y0P4LNFts9Z8imBsgLRZLpY2bdlwKKk1Rqv1zn9jCEAkAN3yGwHZRrnuU%2B%2BaEsfEl6xtD%2BEL%2F6I1QN67A6HQGeZv0gMde0ab%2BqH7R%2FzEai3LxR44VsZJuE1OkUd9%2BESmqnMYWEJ7QUGCbAiVd01WmtT7t4gwmY2dzWv&X-Amz-Signature=347524521faa4622fcd83c7508a6bbafa4ae2b065761f9498db1a0139717a23a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
