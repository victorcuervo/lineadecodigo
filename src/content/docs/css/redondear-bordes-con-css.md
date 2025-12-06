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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TANGD37B%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T025115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGow5VfGY3Wtr6L4xv7sjTjGXQMvY0eHbJ6XPqCVo%2BXYAiAOcoSZAe8pB6S8Wh128vVjmI0k4jOR23SDHXFG8C6W%2Bir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIM2KfSXOgllp8%2FzOW8KtwDPpB2qfDWiTSmmkH6lD0dEGF%2B9ZDZvHNKKlh477EF1DIkii6MufIKiBZt7mNQl7KKrcZ2lbXiSzpumHlIz06gJVEl6soInjEfCen61L1j0S1KwLMaR9F2%2BuT1BfgniX8l2KB96NCvL5jhcbkTVw%2BZB9RxZN%2Fc3Uxl91gmcY7vDzqC2Jq1JYBkVtZwewPoEhqu4fGGMuuVu8wTo9F3shvbUWiB5RtZjxbwC%2F1TNOE5l6NK5gHAf2doBbxfO2drVu3bW98zHXcnxseV4EU7bTlhsBE3Rayb92aGUPIazmMdciTwVM3x%2FRqDCLekB2VVcmaBxaNzV2%2FRHcZWdFUal0G2DgPNq4EdEoaHKFsgV7%2FyE2%2BDlzbE%2Fn8fjVjzb4Q0KO4KMiqN99kAa%2BiVr%2F%2Bs%2B2fkLyx8l3VzX0voX6Y1hbHv%2FINhhV5MoPKXTyaYTNAWjcrZGoXg4tsYIdMRL2wSI0X41BMVg1FWj5EJp8DNaFbOwB6xjZs18EUf4muqahWYTLuPfWgh0YVLP7bZ%2BuvLkG1e%2B4pTk86QNXt0M7Qbk4Vvcrps%2FLfm5%2FrYkce71KF%2BKqhTmYNNfdpAkaqE8JlJjRN%2FFmk%2FkbLVvfcyv3GbXgBE7%2B58mIyYfSar9VdIwnswyKfOyQY6pgHv3eX9h3o4vlP8T6CXEK6GhJlYuLN1Cqu6Hrhk%2BcD60BTBbl%2Fc1xVvlicNXqz5K276CRUH%2BcBlYyg%2BOZM3EqxJO2f1JtdYNck9NfTTGcB4CF9QQ4s8NYhVzpbApGcAfkOwraVnioHoOOE0doZqla5XaZ6OgvZRMbMzfaFa8e2S3q8Okl%2FAiAT7jc2OUMsGUOJjdfIFD2Nwb8CGbVkh6Cjn0%2FrSJbHb&X-Amz-Signature=01c8c587a03a6f41f6232e7d703f891095cbf0fcc67f38a7f2f1c49fe4f112cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TANGD37B%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T025115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGow5VfGY3Wtr6L4xv7sjTjGXQMvY0eHbJ6XPqCVo%2BXYAiAOcoSZAe8pB6S8Wh128vVjmI0k4jOR23SDHXFG8C6W%2Bir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIM2KfSXOgllp8%2FzOW8KtwDPpB2qfDWiTSmmkH6lD0dEGF%2B9ZDZvHNKKlh477EF1DIkii6MufIKiBZt7mNQl7KKrcZ2lbXiSzpumHlIz06gJVEl6soInjEfCen61L1j0S1KwLMaR9F2%2BuT1BfgniX8l2KB96NCvL5jhcbkTVw%2BZB9RxZN%2Fc3Uxl91gmcY7vDzqC2Jq1JYBkVtZwewPoEhqu4fGGMuuVu8wTo9F3shvbUWiB5RtZjxbwC%2F1TNOE5l6NK5gHAf2doBbxfO2drVu3bW98zHXcnxseV4EU7bTlhsBE3Rayb92aGUPIazmMdciTwVM3x%2FRqDCLekB2VVcmaBxaNzV2%2FRHcZWdFUal0G2DgPNq4EdEoaHKFsgV7%2FyE2%2BDlzbE%2Fn8fjVjzb4Q0KO4KMiqN99kAa%2BiVr%2F%2Bs%2B2fkLyx8l3VzX0voX6Y1hbHv%2FINhhV5MoPKXTyaYTNAWjcrZGoXg4tsYIdMRL2wSI0X41BMVg1FWj5EJp8DNaFbOwB6xjZs18EUf4muqahWYTLuPfWgh0YVLP7bZ%2BuvLkG1e%2B4pTk86QNXt0M7Qbk4Vvcrps%2FLfm5%2FrYkce71KF%2BKqhTmYNNfdpAkaqE8JlJjRN%2FFmk%2FkbLVvfcyv3GbXgBE7%2B58mIyYfSar9VdIwnswyKfOyQY6pgHv3eX9h3o4vlP8T6CXEK6GhJlYuLN1Cqu6Hrhk%2BcD60BTBbl%2Fc1xVvlicNXqz5K276CRUH%2BcBlYyg%2BOZM3EqxJO2f1JtdYNck9NfTTGcB4CF9QQ4s8NYhVzpbApGcAfkOwraVnioHoOOE0doZqla5XaZ6OgvZRMbMzfaFa8e2S3q8Okl%2FAiAT7jc2OUMsGUOJjdfIFD2Nwb8CGbVkh6Cjn0%2FrSJbHb&X-Amz-Signature=6c7803cc249e6a0439db04a31a445e185d9af7c3215588b8b1df8013fdd097a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
