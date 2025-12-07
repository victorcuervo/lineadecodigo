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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCKRM6RW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T152406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQRknKjc28Hlu3DDDg6qLbyWQ75KAGultiMUw91SvvIAiEAor6LfMHgYaoLKRb3ZVZGcTXvOAKk6XpdMkptH%2FQYNVQqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdLUUUOdpcMZYuMVircA45Sllpr4sj1hCwIbg3r6Ueq0We0KLoVhGxZ%2FMFtV79InAnCfQoQ4aqdKEerEyal1%2BdbnCiER001VOhbdzBFtYO1Ie2Ps8bqd2ypaGT8EHe%2F9%2B9NYO3jMhYUYpNWA0xSCOOo65Y1n5lDmMERp72y7vyow4I7cK2cIYlo2xHLsCzwoPlqHw6RcJwBodej3X9xjvDlbKMNnjrI5ArxM%2FwuxWr%2BNB3y4bHTGDxnbYVuTSKH6ydj%2BH%2Bdiafj93%2BCa0L9zUzToURVAs25T7LhZ9pJ5aoSZb8g91wt7f5fHrqGbaAeE298cxHdKC96vIn64gCCJRy6zYOWX7OoCH5n3tn9%2F0yyr9vpYfDqMSWbohDK3vOiPHH7EIsg7nPli3clZSNDFcNuxIyZytD98IZ0pEInHY3NQmoW0NyXwb5lFz8SyyzLIL1rHG0ZxXmUaLEG0vdjsDcvcfirHqlFheVH7He8idGQfg7g2Icyd%2B%2BVsH1mgD12HnFD%2BB%2FpqkJ3jgi9bHtVCx65pGatd9ivh9qTuogi9CeKpYapR3fwJetw9JCidP9oJmK99ngWvjCSltHSMbJAxzF4sm99hmEiGyhOfnPIxmWF%2F16diCl7cHinRRxWOn6Y5SkQi2Gpf7thfFUpMKua1ckGOqUBPviDIaoZhAILYj3u5Fv7rpmKA3RyjPFDUOecy%2Fy0Bk0B%2FHL%2BNaU8RJCCgEQXYohILjtbKdXAP%2BtqoCuZS%2BoBN94XZ1rnV8F6YK1EfMbvyyqdKEJnEnzC%2BWKq2p%2BhNR3qlW0G20soaL8Q6AuSSmu2RX5eWfNgEeY%2Fbd0VMtdR%2BWScoomm%2FSj%2F7UsOgimKQGXQcFr7ZEnmBujeo5SB5kOjoW94x60k&X-Amz-Signature=affb3f1b50a589df4a68c27d9244fa0f9c078fe1fa6511a2f160591030a1d688&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCKRM6RW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T152406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQRknKjc28Hlu3DDDg6qLbyWQ75KAGultiMUw91SvvIAiEAor6LfMHgYaoLKRb3ZVZGcTXvOAKk6XpdMkptH%2FQYNVQqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdLUUUOdpcMZYuMVircA45Sllpr4sj1hCwIbg3r6Ueq0We0KLoVhGxZ%2FMFtV79InAnCfQoQ4aqdKEerEyal1%2BdbnCiER001VOhbdzBFtYO1Ie2Ps8bqd2ypaGT8EHe%2F9%2B9NYO3jMhYUYpNWA0xSCOOo65Y1n5lDmMERp72y7vyow4I7cK2cIYlo2xHLsCzwoPlqHw6RcJwBodej3X9xjvDlbKMNnjrI5ArxM%2FwuxWr%2BNB3y4bHTGDxnbYVuTSKH6ydj%2BH%2Bdiafj93%2BCa0L9zUzToURVAs25T7LhZ9pJ5aoSZb8g91wt7f5fHrqGbaAeE298cxHdKC96vIn64gCCJRy6zYOWX7OoCH5n3tn9%2F0yyr9vpYfDqMSWbohDK3vOiPHH7EIsg7nPli3clZSNDFcNuxIyZytD98IZ0pEInHY3NQmoW0NyXwb5lFz8SyyzLIL1rHG0ZxXmUaLEG0vdjsDcvcfirHqlFheVH7He8idGQfg7g2Icyd%2B%2BVsH1mgD12HnFD%2BB%2FpqkJ3jgi9bHtVCx65pGatd9ivh9qTuogi9CeKpYapR3fwJetw9JCidP9oJmK99ngWvjCSltHSMbJAxzF4sm99hmEiGyhOfnPIxmWF%2F16diCl7cHinRRxWOn6Y5SkQi2Gpf7thfFUpMKua1ckGOqUBPviDIaoZhAILYj3u5Fv7rpmKA3RyjPFDUOecy%2Fy0Bk0B%2FHL%2BNaU8RJCCgEQXYohILjtbKdXAP%2BtqoCuZS%2BoBN94XZ1rnV8F6YK1EfMbvyyqdKEJnEnzC%2BWKq2p%2BhNR3qlW0G20soaL8Q6AuSSmu2RX5eWfNgEeY%2Fbd0VMtdR%2BWScoomm%2FSj%2F7UsOgimKQGXQcFr7ZEnmBujeo5SB5kOjoW94x60k&X-Amz-Signature=cf25f7ac70ce0db45579c235dbf2fa126949b3bc7cf92189cd49cc0a7bed1e59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
