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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB6EEVIB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T184458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAWpa2rCvPJBAZ3bgUH2d%2BisTUam3VFv7Ua3tMaS%2F%2FbYAiAU8otNEF01flqwxb1AY60l0927IuuKe8DMkg8mCPVCLSqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJv5uYEvltaudst00KtwDRcIa7k9766yRfOjcGBfDfJ8xm9sSboKfikSw%2BDVaRD4pBGgzkyCxTcK2qC20Uwvl4V9WeWNgSRvGpm3c4tnlp%2FilY7pBcN1B9CvJnwffF0l2oEK%2FYMVXybEOrvltImeY1SzbLJT%2FC8spP%2BCzhEmYI7ZiLiaW7PgSzk7n63aPdEXQ%2BuCpkrKCSoaKYUmqwv9HAuFNZ%2BwS6cVC3%2Fl7xmaGL4kpSNoVcGq0rlRJeLeiJLf39ERT0iXLbJwBNFNDkbpvONO3tDhoVr7Q8a0QleSAg2FvUZj519FowbXEWIPMJN1r38ROSH%2F0TBdIZj4ytxEYkAc%2BGWZX6juY2b0ObOl46%2FD%2BbPJ%2B9Zm3LBed9Errz%2BaseR9nl5L8yIH4B8KnzsDSzGEB1ebYRlIwvqmWpDJpaYh6eu4kty51HF2kde0pNtOSVVzWyLkPeo4iefM0np1IrekYncSDyHuyrGakcJlC7tCD1OoBf%2FDXIRfXjTm57X7F0Jlq9R%2Bt94nJ%2Fcs3GqLVZ4P%2BgTxGDNSNsZJU00f7xE0sHbR6IDE0tKvCRA3FbhsXiuQjLUTbdt6Mqf7STiDVGhcjv4WwNzfy58A46r1Yn6MOyzDtqyxAveJorxaHiE%2BgXWnet4QmaSTJ%2FqMw%2BLPcyQY6pgGFQW8zh6v4UHS5py5aoJcxGVf3qCCnibzgs5%2B%2BvjjIwatPbwKgFcFaHnOwHpckb18tdP8L3dGszgDcNQvT3jCW%2FGJhjokCeMKACnmV%2FQg4baARF7jQMcGUjL27KO8KAU12vvycnGsQ5vIOiXQAxFr8Fr3hrCAtrkAtrPd9MBazlnr0uUJv8IeSd0UkLoZ6eMzSN19DbKUds6w8Dhi%2Fzv%2FuD%2Bd7GA3e&X-Amz-Signature=5a0e0f5c4aa9ecb4c558c2c473c0ec3003fc403c6d2623500b76e1d81e5a703f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB6EEVIB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T184458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAWpa2rCvPJBAZ3bgUH2d%2BisTUam3VFv7Ua3tMaS%2F%2FbYAiAU8otNEF01flqwxb1AY60l0927IuuKe8DMkg8mCPVCLSqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJv5uYEvltaudst00KtwDRcIa7k9766yRfOjcGBfDfJ8xm9sSboKfikSw%2BDVaRD4pBGgzkyCxTcK2qC20Uwvl4V9WeWNgSRvGpm3c4tnlp%2FilY7pBcN1B9CvJnwffF0l2oEK%2FYMVXybEOrvltImeY1SzbLJT%2FC8spP%2BCzhEmYI7ZiLiaW7PgSzk7n63aPdEXQ%2BuCpkrKCSoaKYUmqwv9HAuFNZ%2BwS6cVC3%2Fl7xmaGL4kpSNoVcGq0rlRJeLeiJLf39ERT0iXLbJwBNFNDkbpvONO3tDhoVr7Q8a0QleSAg2FvUZj519FowbXEWIPMJN1r38ROSH%2F0TBdIZj4ytxEYkAc%2BGWZX6juY2b0ObOl46%2FD%2BbPJ%2B9Zm3LBed9Errz%2BaseR9nl5L8yIH4B8KnzsDSzGEB1ebYRlIwvqmWpDJpaYh6eu4kty51HF2kde0pNtOSVVzWyLkPeo4iefM0np1IrekYncSDyHuyrGakcJlC7tCD1OoBf%2FDXIRfXjTm57X7F0Jlq9R%2Bt94nJ%2Fcs3GqLVZ4P%2BgTxGDNSNsZJU00f7xE0sHbR6IDE0tKvCRA3FbhsXiuQjLUTbdt6Mqf7STiDVGhcjv4WwNzfy58A46r1Yn6MOyzDtqyxAveJorxaHiE%2BgXWnet4QmaSTJ%2FqMw%2BLPcyQY6pgGFQW8zh6v4UHS5py5aoJcxGVf3qCCnibzgs5%2B%2BvjjIwatPbwKgFcFaHnOwHpckb18tdP8L3dGszgDcNQvT3jCW%2FGJhjokCeMKACnmV%2FQg4baARF7jQMcGUjL27KO8KAU12vvycnGsQ5vIOiXQAxFr8Fr3hrCAtrkAtrPd9MBazlnr0uUJv8IeSd0UkLoZ6eMzSN19DbKUds6w8Dhi%2Fzv%2FuD%2Bd7GA3e&X-Amz-Signature=dc61fe64c733da717d68eefd6a4fd968dfb930b83d16af60e63de3e680e42200&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
