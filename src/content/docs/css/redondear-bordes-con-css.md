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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KX6AWEE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T010356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeUOnCgC63nSdnZlg4ZmZF2MKil0JEsLVqpiBxZGH97QIgav%2FRT6HLIhshmS75z%2F04cC3NOszLnHtZrayPtSDUDLkqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDMZ9%2B7pRlGsNoiQYCrcA7G8SwxUSBy5xSCiQ4cwuZX7UgzI1NG2C2Pafco5pkNWUsGjVNreVzQZWIomgcNDtJnFid45J0e6VbkzMfUxhJuqZWS8LM75fuO9ZeyqRMt8%2Fq2UT6r4MCPK7NRoZiNMitITNAQzgvzPGvwfhTONOiZXg59qpLRa3Da%2BaQffKYd5hftVN3F0reyREB98T7inEq3ZUhHLNSXPkNGYYvpQKAo7%2FdA%2FP8srD%2FE%2BCX1zASt2ES4PehxqZBdFMjdbK92JGfGlwBU7oiszo3kCN4%2B6lhxgRQwr1HzPF%2BNZHGgSV3W0sw5Ak2w5i0mDGnLKejAbACKoQ0IuoKQ47%2Bq4td6aQknLkV6y2O2FK0skxcm0QqQqdoN1ztHjFK9flZeWxLHyU94UOq972jumcgvKp%2FZ%2F0HGs2iCoiRt%2Bq%2FHO1RThUELVrgcr5YWtUPZWZni3Z3k%2B4Dcf2sZedMBl9Ej6Yrgk3ZFYqu6uQLs6SM%2Fox9D9DZhPpd9BYEITFsEJmGgx%2F9wxW68d21vVbCZPOZ58QTrF1GuoCOmdBMvrCTUc6MVnOOiJDlr32vmoBOFA21u5hfDNhXEZ0bdnc0P7VIEEQFpQ9nahhteRhx3SMrkFYhElzga1beDqq%2BqMdPbckoQhMOeh2MkGOqUBKqjDwWT1V0AsyOie9MedubdAUJbSpwpz0OjioStfZgtYP%2FcQ3huG4%2FAQaxX12u6WtqDk4EInLSCli07H05eeO13e7gE0s8I56hp%2Bb5EFrXyBMS9Riq2an79Jn0z9XtHN815cPq606E9lt5jnbR4egLCPp2yzVv0JBD0MrVpZWL2JAdd9VEYtxwE9kqwLKQGb8YEUrXoJbm20vK8N%2B3AIFMY73JO%2F&X-Amz-Signature=8cb65fca34ecdb804ac3eab24c7c5525a093772973492a28057e8cfbeebaf700&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KX6AWEE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T010356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeUOnCgC63nSdnZlg4ZmZF2MKil0JEsLVqpiBxZGH97QIgav%2FRT6HLIhshmS75z%2F04cC3NOszLnHtZrayPtSDUDLkqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDMZ9%2B7pRlGsNoiQYCrcA7G8SwxUSBy5xSCiQ4cwuZX7UgzI1NG2C2Pafco5pkNWUsGjVNreVzQZWIomgcNDtJnFid45J0e6VbkzMfUxhJuqZWS8LM75fuO9ZeyqRMt8%2Fq2UT6r4MCPK7NRoZiNMitITNAQzgvzPGvwfhTONOiZXg59qpLRa3Da%2BaQffKYd5hftVN3F0reyREB98T7inEq3ZUhHLNSXPkNGYYvpQKAo7%2FdA%2FP8srD%2FE%2BCX1zASt2ES4PehxqZBdFMjdbK92JGfGlwBU7oiszo3kCN4%2B6lhxgRQwr1HzPF%2BNZHGgSV3W0sw5Ak2w5i0mDGnLKejAbACKoQ0IuoKQ47%2Bq4td6aQknLkV6y2O2FK0skxcm0QqQqdoN1ztHjFK9flZeWxLHyU94UOq972jumcgvKp%2FZ%2F0HGs2iCoiRt%2Bq%2FHO1RThUELVrgcr5YWtUPZWZni3Z3k%2B4Dcf2sZedMBl9Ej6Yrgk3ZFYqu6uQLs6SM%2Fox9D9DZhPpd9BYEITFsEJmGgx%2F9wxW68d21vVbCZPOZ58QTrF1GuoCOmdBMvrCTUc6MVnOOiJDlr32vmoBOFA21u5hfDNhXEZ0bdnc0P7VIEEQFpQ9nahhteRhx3SMrkFYhElzga1beDqq%2BqMdPbckoQhMOeh2MkGOqUBKqjDwWT1V0AsyOie9MedubdAUJbSpwpz0OjioStfZgtYP%2FcQ3huG4%2FAQaxX12u6WtqDk4EInLSCli07H05eeO13e7gE0s8I56hp%2Bb5EFrXyBMS9Riq2an79Jn0z9XtHN815cPq606E9lt5jnbR4egLCPp2yzVv0JBD0MrVpZWL2JAdd9VEYtxwE9kqwLKQGb8YEUrXoJbm20vK8N%2B3AIFMY73JO%2F&X-Amz-Signature=ef3eef3b9accc2a0f3a577abf42f367239f1df7f1eb27dffc9fde729a3cb8532&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
