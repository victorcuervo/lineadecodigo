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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QM5UKM3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T044657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBavv5q641Hv2JaBAgj%2FEIWUbHzNdvUkm3JnRUnwpjr5AiBXOZOp6rLlvWCA7IO71s9bqjCr22gvf1lYvN6S%2FawvZSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVn2lppatFsoRCGRMKtwD3oxAvIaeFhZ%2Fm1oICNCqVP0AlaODa1cjXRp3TBp9mOpyQ%2FAG0eVTGEaOLALQ%2BrRnB%2FzETUbzV2xEIXqs8lVcfuTpykSkmPhVqoCe8%2Bw6chiUItomWsl03yi%2FMqz6dwq5RzfLOL6Kz7BTCPRbp2Yc0CdR8HmD9sh8U1eEUHL36xX%2B4LSXzLVZzfPF%2BNi1P5GEBRLkWBNxIKslX00%2BNJoPgyV4Bd1Z53BxfdfV%2FSCl3vTediyK9eSO2hHNN%2FYVk%2Bz8ilD%2FfN1kZydbf7yc%2BcYfKNHwu%2FBw5Az5ih6ANg5XlPKmgaWhdyj%2FPEnGCEUJ%2F83m4lPjzzaVy%2FaphMB3LDzV052Y64iM63uK1BWhEAPJiwUG5nEQExFZvvMzmCWu2PCk3F%2BQfAS8EgiZB6xIo6HHlTKtcR6DzW11u5vehWiNM8sLwDOgRowpHQBtt%2Fj4soHuv6jTIy8%2BdMjTO7MfYql1SOD9zvLmOS%2F77t2zFM3WotRhSISojJwBzDenGJUzHdkFK1%2F9Xm8urZ31GluePMJEQfEtXlRh8LqQ2yagie8MfhgbRJ%2BPbPb3ZkG3nDZd5TGr8IqVeuCs6%2BM%2Fadru5X3z7D7NkduWnWTOxoij4q%2BZML3g0J6CPUjpLOxtlIYwqv3SyQY6pgEp%2FXQuhub2gh5G8TfD9nRdU71vy0UHctk29D%2B0foOO8%2FZsqixeBpkNjzL2EO5XYKo%2BKpz%2B5org3z%2BICNva8f7XYGFjKnmPMLZ%2BenoPMBer4h00kIdFAiAEAyUPSo4lfAUuWfjn9KtGtVqzrF9sxQhE4x1bDUvN1q%2F%2BIb50AtiK0xSwv4w9vRb3KSeJFqiMDq0v6z%2FPfhrib4RoI%2F8NXj7qqwlvmFyM&X-Amz-Signature=0abe3e68b2d43605b022fdd01f777c6ee295a93caaa3a2c225ef39693a29d2f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QM5UKM3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T044657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBavv5q641Hv2JaBAgj%2FEIWUbHzNdvUkm3JnRUnwpjr5AiBXOZOp6rLlvWCA7IO71s9bqjCr22gvf1lYvN6S%2FawvZSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVn2lppatFsoRCGRMKtwD3oxAvIaeFhZ%2Fm1oICNCqVP0AlaODa1cjXRp3TBp9mOpyQ%2FAG0eVTGEaOLALQ%2BrRnB%2FzETUbzV2xEIXqs8lVcfuTpykSkmPhVqoCe8%2Bw6chiUItomWsl03yi%2FMqz6dwq5RzfLOL6Kz7BTCPRbp2Yc0CdR8HmD9sh8U1eEUHL36xX%2B4LSXzLVZzfPF%2BNi1P5GEBRLkWBNxIKslX00%2BNJoPgyV4Bd1Z53BxfdfV%2FSCl3vTediyK9eSO2hHNN%2FYVk%2Bz8ilD%2FfN1kZydbf7yc%2BcYfKNHwu%2FBw5Az5ih6ANg5XlPKmgaWhdyj%2FPEnGCEUJ%2F83m4lPjzzaVy%2FaphMB3LDzV052Y64iM63uK1BWhEAPJiwUG5nEQExFZvvMzmCWu2PCk3F%2BQfAS8EgiZB6xIo6HHlTKtcR6DzW11u5vehWiNM8sLwDOgRowpHQBtt%2Fj4soHuv6jTIy8%2BdMjTO7MfYql1SOD9zvLmOS%2F77t2zFM3WotRhSISojJwBzDenGJUzHdkFK1%2F9Xm8urZ31GluePMJEQfEtXlRh8LqQ2yagie8MfhgbRJ%2BPbPb3ZkG3nDZd5TGr8IqVeuCs6%2BM%2Fadru5X3z7D7NkduWnWTOxoij4q%2BZML3g0J6CPUjpLOxtlIYwqv3SyQY6pgEp%2FXQuhub2gh5G8TfD9nRdU71vy0UHctk29D%2B0foOO8%2FZsqixeBpkNjzL2EO5XYKo%2BKpz%2B5org3z%2BICNva8f7XYGFjKnmPMLZ%2BenoPMBer4h00kIdFAiAEAyUPSo4lfAUuWfjn9KtGtVqzrF9sxQhE4x1bDUvN1q%2F%2BIb50AtiK0xSwv4w9vRb3KSeJFqiMDq0v6z%2FPfhrib4RoI%2F8NXj7qqwlvmFyM&X-Amz-Signature=6ab888728db3c40a98e2630258ce1286221ddf0d06ac39bcc7d818c71a41dae9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
