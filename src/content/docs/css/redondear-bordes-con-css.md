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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URTHAC7F%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T101235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBqyAymsjQDOOnB%2BeRKkLg1fQEB%2Bpxcx4JCKFnnsjKuAIhAJzUt31GV0ekCBeKZRzeNebnmPQBN6xmVan30kHD0deLKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydTLQ5SE67BfvFMh8q3AMjeWbtqN7X0Z1ZHmw51P%2BfHnXznfAlv4WwRHwqeBJDlHA6rxzm0nOTbPwKYjCHiXeMKRf5Q0Ky4JDmkmZjySuk%2FrfkpbMpaD2TIKUvbLVVa5z3oQ7gwKX3kJfJtMsEG%2FDSAl9JPvGrgBvgDv3jKFzolUdEu5AUlRfDvUAOry4qPoEsq3yb%2B6UTVApAtK2VlHOkQN81Teng9ar2vVLs3cT6uC30DZYGVHqY69Af1WDp%2FGjkJzy75s2bZDKdotpuhMvS0sSkGI3TzB%2BerCIYJnWix%2FSLjGlBO%2BWZYUNO9%2FDXGlnn7fesJodDNw2mPljrf74%2Fq9PQcAI2G6tVjwLQmvpLgxo98eRSs7GQERM%2Fe3a7Oy5Fp2WVkFs8a7Sa%2BLCMJLMbzJ9DKSAAENjGIoqjRDZI0XVp3jxToco1gj2p8NXuFCDUd0bZxEtN1E101T%2BtCGis%2FqZzx3GcDO3GVqIXZMII7lVhUFG82XpaqCPyEUQF9x36s1%2FhbpHJ5VocFUa7R18ZVa5vuGMHYX2xntVElpf4R9lBOV8pYnANMWjbVlCkEDQ5mcVJDa0Yh9hvRfllWV7Hwg18qNKUa9Hko1kUOPxo5uh8QnuOFhEd6R27iTDG9c42h%2Bgiz3Iof0UodjCsw9%2FJBjqkAczJ9CwwsbXfRPAl6iXW%2BECoahzPGjbT07YPztEBfES3p6gkrYu8ul%2Bm8q6oZGkoAr4hhJ%2BlSTZMsU4KNJxsZ4IANi5mxPbPFbwg4VgDOfn3faDu5ZEyQuNEXnZVPvkrXocG2vzavswj9BgQI8LkZ8CDDYal076iIXHwkqkcfnLgfYuAvI28OsEgP2kNOTKZ0TrGU0bah42J1PEvcLFa1AHgKBWG&X-Amz-Signature=838d6d61ef8139caaefba5e8270cc968735817eef1146d2e6714bb61b8e0e075&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URTHAC7F%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T101235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBqyAymsjQDOOnB%2BeRKkLg1fQEB%2Bpxcx4JCKFnnsjKuAIhAJzUt31GV0ekCBeKZRzeNebnmPQBN6xmVan30kHD0deLKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydTLQ5SE67BfvFMh8q3AMjeWbtqN7X0Z1ZHmw51P%2BfHnXznfAlv4WwRHwqeBJDlHA6rxzm0nOTbPwKYjCHiXeMKRf5Q0Ky4JDmkmZjySuk%2FrfkpbMpaD2TIKUvbLVVa5z3oQ7gwKX3kJfJtMsEG%2FDSAl9JPvGrgBvgDv3jKFzolUdEu5AUlRfDvUAOry4qPoEsq3yb%2B6UTVApAtK2VlHOkQN81Teng9ar2vVLs3cT6uC30DZYGVHqY69Af1WDp%2FGjkJzy75s2bZDKdotpuhMvS0sSkGI3TzB%2BerCIYJnWix%2FSLjGlBO%2BWZYUNO9%2FDXGlnn7fesJodDNw2mPljrf74%2Fq9PQcAI2G6tVjwLQmvpLgxo98eRSs7GQERM%2Fe3a7Oy5Fp2WVkFs8a7Sa%2BLCMJLMbzJ9DKSAAENjGIoqjRDZI0XVp3jxToco1gj2p8NXuFCDUd0bZxEtN1E101T%2BtCGis%2FqZzx3GcDO3GVqIXZMII7lVhUFG82XpaqCPyEUQF9x36s1%2FhbpHJ5VocFUa7R18ZVa5vuGMHYX2xntVElpf4R9lBOV8pYnANMWjbVlCkEDQ5mcVJDa0Yh9hvRfllWV7Hwg18qNKUa9Hko1kUOPxo5uh8QnuOFhEd6R27iTDG9c42h%2Bgiz3Iof0UodjCsw9%2FJBjqkAczJ9CwwsbXfRPAl6iXW%2BECoahzPGjbT07YPztEBfES3p6gkrYu8ul%2Bm8q6oZGkoAr4hhJ%2BlSTZMsU4KNJxsZ4IANi5mxPbPFbwg4VgDOfn3faDu5ZEyQuNEXnZVPvkrXocG2vzavswj9BgQI8LkZ8CDDYal076iIXHwkqkcfnLgfYuAvI28OsEgP2kNOTKZ0TrGU0bah42J1PEvcLFa1AHgKBWG&X-Amz-Signature=47689cbc227aaa1db7ed4eabf0f639414a174b8bc8d639aae57145ac84258d79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
