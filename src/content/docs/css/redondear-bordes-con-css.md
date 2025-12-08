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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633GBE56A%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T034447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZqE9pPoSkup2ibgwSPfhciFXbCI0AeuqoqpiHQZlgGAiATwPupom1Owe6OwR8SJ8HSAq5WxhZC85dBeFKymYiAPCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3aL2wPysWQWcHXDJKtwDQ0c5zPHhMB55%2Fp2p9Vv5Up0ACSJ%2BVP0My955rq2zEnwx0kKQJk%2B7Bh7AVCnfliqDhRromzQbn0%2BHrm6BnFdRfN6WoLaEcPIOTbqaQtkeBBgmT%2FAW0nSsf486eWIFgym7aafVDa3233eobULzX1t7aWIhhYmIFPeCIPF5JcKvzdRn2yeXvNINrPDCqw8Brtg%2BIX8x3VFV1cXw%2F%2FAl7w15hi%2BoOErMqWvuvVVZog4EPfhkKi532q%2Bu2imncUC0LZMrKQGx2WkKLa3rQHzSalzHo1Sv%2BW5wMsKmC1j%2FnqgV2wv9%2BkB%2FpnTsLxEw3FuuCh0xI8DLEHP7uJqD3ZdRBEsw%2BPwCwIRQM2rQ1ulH5WBRBj0ZxqBNMAiBIP8mkaKR%2FMymu4AjKs3Hh%2B7qAF%2B7IMJno8W7RZr2OBzf3A%2BgbxGE8izBF9hLaShZrG4GUcK2LBskBVKStu%2FrMFmCpqriEdcKjtz%2BZFG8JLxPGbSmpM9kWjK85t%2FuKV81gJTMep%2B%2BICKjklRcBLgXmF11YcAhUROx%2Bn8tjhok1OmHVAuE2fWsZ1a3Y06WM1G7e%2BEByMC8LzPE%2FdCBP%2FYmLkGqds5dLh%2BYixWaNaZ%2FS91ZP5QbXwwWbmIxqokLsjriABRs2KIwpe%2FYyQY6pgHl6pxl981Q2pB8hQ9D3kh0GaGqSnS2HGV4ZUZABMAvcxy1oPLIDJIJNy63kjl%2FelXPx5t%2F3G4%2FXSPhiR%2FfAaaDdTBAczDjsdAgiYQiRFt70mqzYq7zasNOXqPxtCffDH76yYEmfqdKo4kDtrVo1usuJU98ezuc%2FKE1E0FofhXGDSk25S6jD%2BtvhDltGV5wJ8kT2HzfhHHx5fcM%2F2IegjOe7dembhBu&X-Amz-Signature=281532bc923e79e2ff99f8e7c638a3291f4f58d9cf1249656749d168e1b71e7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633GBE56A%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T034447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZqE9pPoSkup2ibgwSPfhciFXbCI0AeuqoqpiHQZlgGAiATwPupom1Owe6OwR8SJ8HSAq5WxhZC85dBeFKymYiAPCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3aL2wPysWQWcHXDJKtwDQ0c5zPHhMB55%2Fp2p9Vv5Up0ACSJ%2BVP0My955rq2zEnwx0kKQJk%2B7Bh7AVCnfliqDhRromzQbn0%2BHrm6BnFdRfN6WoLaEcPIOTbqaQtkeBBgmT%2FAW0nSsf486eWIFgym7aafVDa3233eobULzX1t7aWIhhYmIFPeCIPF5JcKvzdRn2yeXvNINrPDCqw8Brtg%2BIX8x3VFV1cXw%2F%2FAl7w15hi%2BoOErMqWvuvVVZog4EPfhkKi532q%2Bu2imncUC0LZMrKQGx2WkKLa3rQHzSalzHo1Sv%2BW5wMsKmC1j%2FnqgV2wv9%2BkB%2FpnTsLxEw3FuuCh0xI8DLEHP7uJqD3ZdRBEsw%2BPwCwIRQM2rQ1ulH5WBRBj0ZxqBNMAiBIP8mkaKR%2FMymu4AjKs3Hh%2B7qAF%2B7IMJno8W7RZr2OBzf3A%2BgbxGE8izBF9hLaShZrG4GUcK2LBskBVKStu%2FrMFmCpqriEdcKjtz%2BZFG8JLxPGbSmpM9kWjK85t%2FuKV81gJTMep%2B%2BICKjklRcBLgXmF11YcAhUROx%2Bn8tjhok1OmHVAuE2fWsZ1a3Y06WM1G7e%2BEByMC8LzPE%2FdCBP%2FYmLkGqds5dLh%2BYixWaNaZ%2FS91ZP5QbXwwWbmIxqokLsjriABRs2KIwpe%2FYyQY6pgHl6pxl981Q2pB8hQ9D3kh0GaGqSnS2HGV4ZUZABMAvcxy1oPLIDJIJNy63kjl%2FelXPx5t%2F3G4%2FXSPhiR%2FfAaaDdTBAczDjsdAgiYQiRFt70mqzYq7zasNOXqPxtCffDH76yYEmfqdKo4kDtrVo1usuJU98ezuc%2FKE1E0FofhXGDSk25S6jD%2BtvhDltGV5wJ8kT2HzfhHHx5fcM%2F2IegjOe7dembhBu&X-Amz-Signature=0c3b163439d57a65000e26bed67a23dc140d58dfba7ac0dd598a0d7924ed69ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
