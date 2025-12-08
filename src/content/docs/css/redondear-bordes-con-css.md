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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMSRWJBM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T161442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPuIf88HAFg2CmailV68IZc1Sg3tza2ExP%2FEGGgWXrygIgIMCyqE4RR67QQFG%2Ffjv7c1ucP7QuBO%2Bu7gdIzRfDp%2FQqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPp4vYq8QeKdqqW6TCrcAy9WCVTWXBiUiutLaiLSDGkjyS7NI%2FjC8NLHFH2I1LQNmCqZJdkWF1bfInuc9%2Bf5qn%2Bd%2F0TUjrdm5Guu5f6ENP60XurrYxNOzj0u44sru6SL%2B6Kvr5vZr4lAWTjiu7NoWDzlnfD7QPX0%2BWvFy13YPRbTzthaZ%2Bs%2F00BCe0AaZn%2FdowzmWmAKqx5zm1p5dUCkMt6JoW1r5cCsCEm5aAny2zULBd9LMC6O54THieaDf9gltje4vvh6jQaVEmLSJbQCgBXnijQV3IZVFHEi8MNaWjaauekIk4pafWgLSNdyW8CDyDSlmGsLDEByTtRfOwHHlOQ%2FyMbCgyTglMtikFHY9seDxsSkSnu6156bpZcv%2FoD4vD8MtXKwYdLYJFjd0WTS7bg6cu0AbJaGdKMvXfgD2Qt%2B6c2RNQ8%2Fc1O%2FGwwu%2BDB1%2BJQMmtA%2Ff%2FCA4XJ%2FTbZ3dazrHRmrxJPQDBDJFL2Uj0%2BtWdHxs26cLoRVPAVB4%2Bhrn5OV9LAUPmrDmT5RSVHUghl1qbTcFHVL0XJR6yhcxlw27G0h6m1iovDTN28%2F982MQSiST85bwsMbABNPguTAQYKH5ppJQKUwixwGoaFGT7kvWcfFp1YKBTAfpLrNb0VzxT4FzmaRZND%2FI7%2B%2BMObk28kGOqUBLZ2TKunGBRSg9MNyvNazGbwGU7l%2BZA3Say01PX2O49p%2BLXDaFcQPzMbxJpWlHxaJzWe0BIgcx9k%2F0IDpJbZU6QZKEC6lWTvnuwRxqM2gaeRmaPjMV%2F83FFEMplZ2Jtfx1Ak9LC%2FhPLTupnx0Pa9L8E6OpFHbouiB2Yc2Vt6Ms9PGiNQJLb3HDEdD1MKQjrJV7D4egDhmF1qOoZf9j8F12%2Bag1PLV&X-Amz-Signature=5c1ce11125ca30c6ae9f88a6cf2a0e25e625ad66d1ce661f1d88e994ab8cd154&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMSRWJBM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T161442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPuIf88HAFg2CmailV68IZc1Sg3tza2ExP%2FEGGgWXrygIgIMCyqE4RR67QQFG%2Ffjv7c1ucP7QuBO%2Bu7gdIzRfDp%2FQqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPp4vYq8QeKdqqW6TCrcAy9WCVTWXBiUiutLaiLSDGkjyS7NI%2FjC8NLHFH2I1LQNmCqZJdkWF1bfInuc9%2Bf5qn%2Bd%2F0TUjrdm5Guu5f6ENP60XurrYxNOzj0u44sru6SL%2B6Kvr5vZr4lAWTjiu7NoWDzlnfD7QPX0%2BWvFy13YPRbTzthaZ%2Bs%2F00BCe0AaZn%2FdowzmWmAKqx5zm1p5dUCkMt6JoW1r5cCsCEm5aAny2zULBd9LMC6O54THieaDf9gltje4vvh6jQaVEmLSJbQCgBXnijQV3IZVFHEi8MNaWjaauekIk4pafWgLSNdyW8CDyDSlmGsLDEByTtRfOwHHlOQ%2FyMbCgyTglMtikFHY9seDxsSkSnu6156bpZcv%2FoD4vD8MtXKwYdLYJFjd0WTS7bg6cu0AbJaGdKMvXfgD2Qt%2B6c2RNQ8%2Fc1O%2FGwwu%2BDB1%2BJQMmtA%2Ff%2FCA4XJ%2FTbZ3dazrHRmrxJPQDBDJFL2Uj0%2BtWdHxs26cLoRVPAVB4%2Bhrn5OV9LAUPmrDmT5RSVHUghl1qbTcFHVL0XJR6yhcxlw27G0h6m1iovDTN28%2F982MQSiST85bwsMbABNPguTAQYKH5ppJQKUwixwGoaFGT7kvWcfFp1YKBTAfpLrNb0VzxT4FzmaRZND%2FI7%2B%2BMObk28kGOqUBLZ2TKunGBRSg9MNyvNazGbwGU7l%2BZA3Say01PX2O49p%2BLXDaFcQPzMbxJpWlHxaJzWe0BIgcx9k%2F0IDpJbZU6QZKEC6lWTvnuwRxqM2gaeRmaPjMV%2F83FFEMplZ2Jtfx1Ak9LC%2FhPLTupnx0Pa9L8E6OpFHbouiB2Yc2Vt6Ms9PGiNQJLb3HDEdD1MKQjrJV7D4egDhmF1qOoZf9j8F12%2Bag1PLV&X-Amz-Signature=3e6916536172b048500488ccfc21e22a21e738eac9388394e05b12944bba818a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
