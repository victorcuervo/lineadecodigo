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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO3N6Q67%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T202708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9Idpgb4QMJYwppzg8neZiEzSBA4GjCxRkw9LuY4LFNAiAKzgHI4psuO%2F8xmj7D%2B6uFNY6J29NuN8ScHTbZh%2B1d9ir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMk5WheeNSmDgVyZSEKtwDW5U4cOJaiFscz8UKL%2FDiM0Ae1K7P4TaCbaCt8h%2B6jRHXiNFpy5g8Hp0dxB8OxWZw%2BLSqoTxP3lD9nSLZ0hBoFvJVTX46SRDteimSwvL0p2KGEhsZmeJP8T6bPqg2aM3CGpKu5hRlNmTDCH2d5OjTPGSeruC%2FHyww0uRNOhQ8h0vRfnineT9R7HWTRtz54FpS2Qs1pzVymuTXJZ2t1ppE2mvbc1%2FuyF4ML4lEXklzXY2e502CXEwzgLoc829jFDT7%2BoT%2FbLrRkEs3g7a1K8c%2BZ956KZWHW8fTq7NBhOzc%2FTjOBiItPm0lLEgvCMqJ1%2F01xSHYTbMR67OQ8lnAYVKGMm2vcktcEnmnzw%2BNqoueDio5yuyfIsuFPDDVKwCtMMPSENLPWCuYUCInEJwIW84moU%2BGr338gUGOgbg2trQZh%2BHMmP344Z%2BUfVzT5MRRrtFsN%2BaSFoy9FZ6%2F8h7rhI0oV1cNsTPXMbfCIrCYEZIDu8bAbc9gwoZ5Q5pWJPzRD4v8wKR717f%2BLMatnq3QeS0GrLcGMlRM84Vf8FD%2B6VS7IbQihy4kSTdChl06xZTtrSX%2FRBmQlnKYBhK%2Fgxsbl2JMC2KSyh5XtB7aa90TQDYml5dTCUsgKBSb2kGoYEgw5erLyQY6pgGr7B2eHuyAUJVu5%2BCr2%2BqyPYv01MaTRwtO0n%2FpLWcPEdCGNaOzs3JItzMrRlRSpAhvE0eX%2BqlOtLHyJ9JNHXMT89A0BUq7l2h7nd4U6nwUVLmg%2FENmSbOBYyRoVF1Xq84j3kkYIRvp12AyaP%2B8wET813AOw6WsCz2ihuFubP2hVB2pVtTqZXb%2FiEsFRtYNz%2BSYoGktZTeUn0KM34uOEZor6XSFk1uI&X-Amz-Signature=f0510151a9827c745c626f7275f92066bd256cc7c87febbf477e02df8b372cbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO3N6Q67%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T202708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9Idpgb4QMJYwppzg8neZiEzSBA4GjCxRkw9LuY4LFNAiAKzgHI4psuO%2F8xmj7D%2B6uFNY6J29NuN8ScHTbZh%2B1d9ir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMk5WheeNSmDgVyZSEKtwDW5U4cOJaiFscz8UKL%2FDiM0Ae1K7P4TaCbaCt8h%2B6jRHXiNFpy5g8Hp0dxB8OxWZw%2BLSqoTxP3lD9nSLZ0hBoFvJVTX46SRDteimSwvL0p2KGEhsZmeJP8T6bPqg2aM3CGpKu5hRlNmTDCH2d5OjTPGSeruC%2FHyww0uRNOhQ8h0vRfnineT9R7HWTRtz54FpS2Qs1pzVymuTXJZ2t1ppE2mvbc1%2FuyF4ML4lEXklzXY2e502CXEwzgLoc829jFDT7%2BoT%2FbLrRkEs3g7a1K8c%2BZ956KZWHW8fTq7NBhOzc%2FTjOBiItPm0lLEgvCMqJ1%2F01xSHYTbMR67OQ8lnAYVKGMm2vcktcEnmnzw%2BNqoueDio5yuyfIsuFPDDVKwCtMMPSENLPWCuYUCInEJwIW84moU%2BGr338gUGOgbg2trQZh%2BHMmP344Z%2BUfVzT5MRRrtFsN%2BaSFoy9FZ6%2F8h7rhI0oV1cNsTPXMbfCIrCYEZIDu8bAbc9gwoZ5Q5pWJPzRD4v8wKR717f%2BLMatnq3QeS0GrLcGMlRM84Vf8FD%2B6VS7IbQihy4kSTdChl06xZTtrSX%2FRBmQlnKYBhK%2Fgxsbl2JMC2KSyh5XtB7aa90TQDYml5dTCUsgKBSb2kGoYEgw5erLyQY6pgGr7B2eHuyAUJVu5%2BCr2%2BqyPYv01MaTRwtO0n%2FpLWcPEdCGNaOzs3JItzMrRlRSpAhvE0eX%2BqlOtLHyJ9JNHXMT89A0BUq7l2h7nd4U6nwUVLmg%2FENmSbOBYyRoVF1Xq84j3kkYIRvp12AyaP%2B8wET813AOw6WsCz2ihuFubP2hVB2pVtTqZXb%2FiEsFRtYNz%2BSYoGktZTeUn0KM34uOEZor6XSFk1uI&X-Amz-Signature=1a6ae69770339c4d787cbee0cab60bce35ad31a46633488c1d01e61171b84d2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
