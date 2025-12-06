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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4PWTHQS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T104526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCvmnMd8l1kAbpklvd3sgM28whxmGVVO21GabIi9HG%2BAiBMWHGh69cdAh9r64s5BmVIFrV%2B%2BrMaQNaqDgLlNNQ%2Bryr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMzBAwcpqaxabWcliyKtwD305z83T5Vy0IeJDxNbrBsFARxKq9MCYj2zWK3kPLYH1cHOLbl8PenGezrR9lihIq6rvK04HhQmtIJ7zG3D7cnpLiWpLPn6B80egEUWalPM45qKQG7kBRzbWcN9WnW5N1FEGruunQANphVUWtVCf8xbEXYIA7O3Hs%2FWcvH1vpjxGAf2doIngns1gDHX1Q%2BAg7wN3UlsAk9FZrJ7cq%2FnTbtvySRQ112NwzgllbQcATbv2Ygj860vM8r%2BYH2uOah0%2BlaHP6f2hnXsbv6PozjH0%2BUGEjP6VSwGCg1mb5PpSEXChAbNeKgK%2FjB6D9vXoAXaYOAgxPc%2BvgYzaWBug9freoV%2Bt1jSA2lHFKOCiFa%2B0wKsl0i6Fi2%2Fd4XbtXUnnBmvRChqYVq6EX3LvTwXH9MA6fFZGzL2VAqaRflrrhVKedi8IQMzrKnKIE%2B34N0HFXZy3deySmyHH6yqLZ4kEkTwNSu1ToHa%2FNoisL%2Fsafmvb%2Fm9nxQ%2FUgRieoTy%2Bz%2F68iUxmmv1jyyegnEQ4hm%2BoIyfHaTQ9aTvaKPLqN1JPXehF1Co8O3I%2FV1E%2FLcyUgEhb8Ny6Lk1SO260LgJeORxISOqT7qZXbU9FS6v94R7q00dKXggEp3vUOXaC4LZlmYkkw%2BInQyQY6pgF1DCsp7wlA1bSReXzJkb2gnkX8l0Ov035AaBNKUVNBpSSkH8%2BNx7%2Fkuga7FhlEMenTNfgRWwKEzzt%2BtylEjVboFKKO5UMe2bkuYF9qLZeawjpHIS6XRxTxtlOEhMvCpE0U3AqC9HsNl2iHa4KmyYqP3q%2BD9CyS2bH9Z3s1EBgSDX0o4aIbPRpGIKyUtXoYc7zjSTaWAm1fDqeJhnbr0vT1w7Ocl08v&X-Amz-Signature=2b64ea84ed559f475c76213892d7eedd1097d389156fca475585e43922fce962&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4PWTHQS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T104526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCvmnMd8l1kAbpklvd3sgM28whxmGVVO21GabIi9HG%2BAiBMWHGh69cdAh9r64s5BmVIFrV%2B%2BrMaQNaqDgLlNNQ%2Bryr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMzBAwcpqaxabWcliyKtwD305z83T5Vy0IeJDxNbrBsFARxKq9MCYj2zWK3kPLYH1cHOLbl8PenGezrR9lihIq6rvK04HhQmtIJ7zG3D7cnpLiWpLPn6B80egEUWalPM45qKQG7kBRzbWcN9WnW5N1FEGruunQANphVUWtVCf8xbEXYIA7O3Hs%2FWcvH1vpjxGAf2doIngns1gDHX1Q%2BAg7wN3UlsAk9FZrJ7cq%2FnTbtvySRQ112NwzgllbQcATbv2Ygj860vM8r%2BYH2uOah0%2BlaHP6f2hnXsbv6PozjH0%2BUGEjP6VSwGCg1mb5PpSEXChAbNeKgK%2FjB6D9vXoAXaYOAgxPc%2BvgYzaWBug9freoV%2Bt1jSA2lHFKOCiFa%2B0wKsl0i6Fi2%2Fd4XbtXUnnBmvRChqYVq6EX3LvTwXH9MA6fFZGzL2VAqaRflrrhVKedi8IQMzrKnKIE%2B34N0HFXZy3deySmyHH6yqLZ4kEkTwNSu1ToHa%2FNoisL%2Fsafmvb%2Fm9nxQ%2FUgRieoTy%2Bz%2F68iUxmmv1jyyegnEQ4hm%2BoIyfHaTQ9aTvaKPLqN1JPXehF1Co8O3I%2FV1E%2FLcyUgEhb8Ny6Lk1SO260LgJeORxISOqT7qZXbU9FS6v94R7q00dKXggEp3vUOXaC4LZlmYkkw%2BInQyQY6pgF1DCsp7wlA1bSReXzJkb2gnkX8l0Ov035AaBNKUVNBpSSkH8%2BNx7%2Fkuga7FhlEMenTNfgRWwKEzzt%2BtylEjVboFKKO5UMe2bkuYF9qLZeawjpHIS6XRxTxtlOEhMvCpE0U3AqC9HsNl2iHa4KmyYqP3q%2BD9CyS2bH9Z3s1EBgSDX0o4aIbPRpGIKyUtXoYc7zjSTaWAm1fDqeJhnbr0vT1w7Ocl08v&X-Amz-Signature=7f4d9fd951731e705a54c11f4e1500ee34ccb178aef69bf32c05c39509620d70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
