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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCHFD53F%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T161357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIErvzlpuGVLqJWATVQLypx5RNjD98Ky0LLMSCW3VGuJQAiBhNZg7KVt%2FnbnnnJU7dxXBlGJsQydmQm6RBktjUL01YCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvPBHGRA3fU%2FgYnwUKtwDE5GRwVr0PQFB%2F8x5N1A9OpBMwUs81GrNBvP9eHcCGjzVqsNJX5xlEvoFWdrF9KDUgxtEX0LyiyCzWuykEVovvBfbSTKaHzgcHfkjf0xuzq98Vbd%2B%2F0sjF6yZGi16%2FgvzLxQQRCmSyybtoaRLE8fV0nFub4Xgttt%2BaYBFyjf7OI6Ns7XCd13NL1ScPeBhxPKVngwoIdz2tc%2FgHrN4E2ot0v4w7W4ZVW%2FrEjtSfXls0Obw%2BN9t2XJisZb3%2BlCaGxHyMW7W20X4okpKfZN6JJ4r2%2FbBik4sdgY8BHlYHK7tgRvm1Arlm%2BOjrITgl8UTfwGrnuGRLCd0yI1Id%2FXp9puIq%2FnE8Y%2FpetpCveZTG6fckk9U9KMRKMAndDfYw%2BGzGEk8NYOxHzfNLdGn43gBhacvjQcoI7NBHwvDzWzLbStCvM7XU8nkWeC8XqnlHFf5fSX8ph5hi3yyT0ugnvJLLRdHwlOOZs52OX%2Brn3pvj0k2Rr7bkX4%2F%2B2QFzs2lnG46HUfoXbVZc%2FFrZhaXxFM8Oe51MzxA83h%2BuTbPt0G9HbYEIqr16YOtOfS%2FSQS7PVXaLDTDsfdYsiAiohSuodiD1cWWjT8vsTSssaFRhQt9DkzCL0W4CKfrD5ve7lIU9vow5LvWyQY6pgFbLLLo1opMX0j1qoyha%2BX1JmFqMuBPGMeAtej92UWRWp2i4CdRdlzxD3atESUJ7sJ60LoGI3Rcq0opvYjAda8UpR4qXMUDpC9rRc%2BxeDolepAsODJvdWoyvY9MuIizJzNR3dv1UPljbmdKRpOkq0T%2BaE3DxVOP4kMnhMJStbuQg6SfGhRUL1cYjoWgfKkR8ZC%2F99cAwXIvKjSi2hAMenAGn8lPuj3%2F&X-Amz-Signature=99582193cfeb2461d3793552e84dfb3f595dd925496dcb11567ce5117b7615d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCHFD53F%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T161357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIErvzlpuGVLqJWATVQLypx5RNjD98Ky0LLMSCW3VGuJQAiBhNZg7KVt%2FnbnnnJU7dxXBlGJsQydmQm6RBktjUL01YCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvPBHGRA3fU%2FgYnwUKtwDE5GRwVr0PQFB%2F8x5N1A9OpBMwUs81GrNBvP9eHcCGjzVqsNJX5xlEvoFWdrF9KDUgxtEX0LyiyCzWuykEVovvBfbSTKaHzgcHfkjf0xuzq98Vbd%2B%2F0sjF6yZGi16%2FgvzLxQQRCmSyybtoaRLE8fV0nFub4Xgttt%2BaYBFyjf7OI6Ns7XCd13NL1ScPeBhxPKVngwoIdz2tc%2FgHrN4E2ot0v4w7W4ZVW%2FrEjtSfXls0Obw%2BN9t2XJisZb3%2BlCaGxHyMW7W20X4okpKfZN6JJ4r2%2FbBik4sdgY8BHlYHK7tgRvm1Arlm%2BOjrITgl8UTfwGrnuGRLCd0yI1Id%2FXp9puIq%2FnE8Y%2FpetpCveZTG6fckk9U9KMRKMAndDfYw%2BGzGEk8NYOxHzfNLdGn43gBhacvjQcoI7NBHwvDzWzLbStCvM7XU8nkWeC8XqnlHFf5fSX8ph5hi3yyT0ugnvJLLRdHwlOOZs52OX%2Brn3pvj0k2Rr7bkX4%2F%2B2QFzs2lnG46HUfoXbVZc%2FFrZhaXxFM8Oe51MzxA83h%2BuTbPt0G9HbYEIqr16YOtOfS%2FSQS7PVXaLDTDsfdYsiAiohSuodiD1cWWjT8vsTSssaFRhQt9DkzCL0W4CKfrD5ve7lIU9vow5LvWyQY6pgFbLLLo1opMX0j1qoyha%2BX1JmFqMuBPGMeAtej92UWRWp2i4CdRdlzxD3atESUJ7sJ60LoGI3Rcq0opvYjAda8UpR4qXMUDpC9rRc%2BxeDolepAsODJvdWoyvY9MuIizJzNR3dv1UPljbmdKRpOkq0T%2BaE3DxVOP4kMnhMJStbuQg6SfGhRUL1cYjoWgfKkR8ZC%2F99cAwXIvKjSi2hAMenAGn8lPuj3%2F&X-Amz-Signature=a460ee2a3524f336d14d48355451fb16a29e3831f4413b8e4c827faab7fddb7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
