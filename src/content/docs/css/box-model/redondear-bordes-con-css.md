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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DRNBUD4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPsF9%2BlD%2BgmREvip8kyNcJXTDNNL9w5Nz6XwJjH81aDAiBEP9AP1F1Gn0WRgPjq1uRBIv9uEr3DiPaPU6HGGd8W3yr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMoIEljVh8%2BeC4EJY3KtwDURBiMWOEmEfduHmdhrxypy%2FEL6m%2BpEYcIbJiXWx4pJMfDKzkMtCTPKuzwhdj2T3%2F2S0R1cANnpn6uFNUY6qb3%2BmmcYJ3tGj6mQMSOAAkPTb1xm%2FYl4abnkL03O9%2FUUVXhXBoDrVVWFhj7g9Sm%2BIcH%2F4%2FzVWUigqCF5PSbLI0H4oayMjfaqm%2FoRfIdqRfvheKKxVM01gepXF%2Fb7GDpUCMX%2BtOzdbELrz8cU77Kb%2F%2FDiuJfgYdV3DF2KECfuNuvNWfcBKe1UtwFbiq0w1od%2BduYLAjj1PjYTy2E%2FnocfDzMqBDiTtTVmG4oAad5js4oM0SwPUXiz%2BRvo4V7iKim9ZKiN%2BBOafmsHyucIfb2ep%2B9z5eddC%2BDSEi6fQ1xKTVt92XBk9UVSniyujxX4leXGXstavkQ0BB%2Bomi6iS0R3syqMiHSqSgzqe5bdtA9y6X%2FZOJ%2FjSYQdKd%2FvSTLFhL37B5qbCZUTWx0RAn2LL4gqln4vC3ByymPyyOv6KTGcE9a%2FQGbidxvZlISIWN8PHsjlfW6VNVWS%2BeQ4Oz81iThii%2B39C7%2FoxcUmr2g72agsG%2FFkX8GGtiMBQZxHQ0aeDZSFyAEwqx9kAKujdrAvm48am%2FqkiPrI9YTzYQeRrMI%2Fkwp9KJygY6pgFF5R5m4WfUSc4AB6XWSGcDy0j3ddHIS8M%2FFWCrlYACNDEBuwa1F8BMiDC0DEWSM0b43Xp%2Bizc5S1Z75k%2FcksualeIkjxYbaQUpy9uyp2P4bMUv%2F%2BvRY3ZcLuNq1azOTNlVQToExVEnCsL7Xg7yVm8zN%2BfYCNrdzqeHUjVHGepFVMsaDhkhzdBpEaDdmMvXQlB7ijmpuH4jTwgRjI8bgDYE9MxxGjih&X-Amz-Signature=76b294535f1835fb380bf617e1a46c0a11a9b9201f0b7d3b4aa0fd7c7462ba60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DRNBUD4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPsF9%2BlD%2BgmREvip8kyNcJXTDNNL9w5Nz6XwJjH81aDAiBEP9AP1F1Gn0WRgPjq1uRBIv9uEr3DiPaPU6HGGd8W3yr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMoIEljVh8%2BeC4EJY3KtwDURBiMWOEmEfduHmdhrxypy%2FEL6m%2BpEYcIbJiXWx4pJMfDKzkMtCTPKuzwhdj2T3%2F2S0R1cANnpn6uFNUY6qb3%2BmmcYJ3tGj6mQMSOAAkPTb1xm%2FYl4abnkL03O9%2FUUVXhXBoDrVVWFhj7g9Sm%2BIcH%2F4%2FzVWUigqCF5PSbLI0H4oayMjfaqm%2FoRfIdqRfvheKKxVM01gepXF%2Fb7GDpUCMX%2BtOzdbELrz8cU77Kb%2F%2FDiuJfgYdV3DF2KECfuNuvNWfcBKe1UtwFbiq0w1od%2BduYLAjj1PjYTy2E%2FnocfDzMqBDiTtTVmG4oAad5js4oM0SwPUXiz%2BRvo4V7iKim9ZKiN%2BBOafmsHyucIfb2ep%2B9z5eddC%2BDSEi6fQ1xKTVt92XBk9UVSniyujxX4leXGXstavkQ0BB%2Bomi6iS0R3syqMiHSqSgzqe5bdtA9y6X%2FZOJ%2FjSYQdKd%2FvSTLFhL37B5qbCZUTWx0RAn2LL4gqln4vC3ByymPyyOv6KTGcE9a%2FQGbidxvZlISIWN8PHsjlfW6VNVWS%2BeQ4Oz81iThii%2B39C7%2FoxcUmr2g72agsG%2FFkX8GGtiMBQZxHQ0aeDZSFyAEwqx9kAKujdrAvm48am%2FqkiPrI9YTzYQeRrMI%2Fkwp9KJygY6pgFF5R5m4WfUSc4AB6XWSGcDy0j3ddHIS8M%2FFWCrlYACNDEBuwa1F8BMiDC0DEWSM0b43Xp%2Bizc5S1Z75k%2FcksualeIkjxYbaQUpy9uyp2P4bMUv%2F%2BvRY3ZcLuNq1azOTNlVQToExVEnCsL7Xg7yVm8zN%2BfYCNrdzqeHUjVHGepFVMsaDhkhzdBpEaDdmMvXQlB7ijmpuH4jTwgRjI8bgDYE9MxxGjih&X-Amz-Signature=77c26ec1851dd44ddc252aa72b7ec81eb2b131c634991d877cc0675c9de2412b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
