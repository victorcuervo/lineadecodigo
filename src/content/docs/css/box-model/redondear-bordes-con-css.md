---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CNGCNKN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC1qlPfRqwmpRfuarBBXhleOnd1wGYpyUM9rk4KlM0vcAiEA5iNzQnn3YVi0onOgw%2BBzRBexT1L4IoHDOx8TY7%2FA5Ekq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDSO%2FH1k85WynjoFICrcA%2FNLehWr2x1E1BLrCotDlmGKTkzCHEJEMX9uDn%2F3DjB24uSdJW7ax4UYstKJCntgzhcBtAOB%2B3b9mD%2FpTKR1grOubjH%2BEEBYw1pQeafpmC6KvQ3kDa7ppciOR2531mglTYySNDmt5Lai3HKs0AhaL80P2mZR9MxQMMlE73yJl3YImq0rhziUQuefS%2FpGr%2BN6r5KWylN2J13s1CmUrcoT8hdZaui8fPdlDggq%2BTeL6gK26Kj%2BiLIDFR7nJ5x9qhpbm9Layz9P40zrpXxlnGYX8KH19Jq%2FTPoo9LA481ODzVXouOE8nwkc7kstYCl9x5NwjM5s4vVLC8ACTcVxmAeLRqB1YV1S0%2BO5da%2FPzuhpmovoLQwb2e7q97ILstYuP%2FxeQH%2FesTGoL4%2BzeMEPv6nNYvm0ECK5MYHeFiNi8QQJA2xzIZlyDO01mwc8anwxZpoKAiqIPkhD0y6F2rLw1ATHlp9%2BVVYC5r%2Fc%2FQS3RauQB1zgNqjvIzJ6ZYuyB5Y9h4FAyekadtU5o%2FkvhmDp18YSF4o7gi%2Fm6oyLcKhSb8Z4SDTUJLHgwiSTLA7hi%2B884B%2BciKcBzsM%2Ff6WXvR984uhpOTMYY4BhnZLiXIOgfXdMhPhdXzGSlPvrC1xs0w6VMO7vicoGOqUByCsCt8GAy4wUbwkTArHd2lu2Nbh%2BVI76hhaS9QRyrM8rzVQQBvPKTlh8zEb3T1ezxlaXGuBUrUChvAGRyam8Nd6aLjIWxkFHb3oPTUiy2ijvsbQ%2BA%2Fq8Ef5oLdIHi1uIlk9EIp0Paw3tWpPhrW12xr79j%2Bt36un4foU7cVj8Rr4qnQzZ3%2Fr8SBb%2BenkgiLgPE7GAOzgCVN6yUKnAhtN9%2Fi2yOgMo&X-Amz-Signature=c146037f76f8a6a8e6c8f6839f3c27e62b1d4a54de934ee0d84d09e3d6aefa33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CNGCNKN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC1qlPfRqwmpRfuarBBXhleOnd1wGYpyUM9rk4KlM0vcAiEA5iNzQnn3YVi0onOgw%2BBzRBexT1L4IoHDOx8TY7%2FA5Ekq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDSO%2FH1k85WynjoFICrcA%2FNLehWr2x1E1BLrCotDlmGKTkzCHEJEMX9uDn%2F3DjB24uSdJW7ax4UYstKJCntgzhcBtAOB%2B3b9mD%2FpTKR1grOubjH%2BEEBYw1pQeafpmC6KvQ3kDa7ppciOR2531mglTYySNDmt5Lai3HKs0AhaL80P2mZR9MxQMMlE73yJl3YImq0rhziUQuefS%2FpGr%2BN6r5KWylN2J13s1CmUrcoT8hdZaui8fPdlDggq%2BTeL6gK26Kj%2BiLIDFR7nJ5x9qhpbm9Layz9P40zrpXxlnGYX8KH19Jq%2FTPoo9LA481ODzVXouOE8nwkc7kstYCl9x5NwjM5s4vVLC8ACTcVxmAeLRqB1YV1S0%2BO5da%2FPzuhpmovoLQwb2e7q97ILstYuP%2FxeQH%2FesTGoL4%2BzeMEPv6nNYvm0ECK5MYHeFiNi8QQJA2xzIZlyDO01mwc8anwxZpoKAiqIPkhD0y6F2rLw1ATHlp9%2BVVYC5r%2Fc%2FQS3RauQB1zgNqjvIzJ6ZYuyB5Y9h4FAyekadtU5o%2FkvhmDp18YSF4o7gi%2Fm6oyLcKhSb8Z4SDTUJLHgwiSTLA7hi%2B884B%2BciKcBzsM%2Ff6WXvR984uhpOTMYY4BhnZLiXIOgfXdMhPhdXzGSlPvrC1xs0w6VMO7vicoGOqUByCsCt8GAy4wUbwkTArHd2lu2Nbh%2BVI76hhaS9QRyrM8rzVQQBvPKTlh8zEb3T1ezxlaXGuBUrUChvAGRyam8Nd6aLjIWxkFHb3oPTUiy2ijvsbQ%2BA%2Fq8Ef5oLdIHi1uIlk9EIp0Paw3tWpPhrW12xr79j%2Bt36un4foU7cVj8Rr4qnQzZ3%2Fr8SBb%2BenkgiLgPE7GAOzgCVN6yUKnAhtN9%2Fi2yOgMo&X-Amz-Signature=da2a1022fbf16639b04b1c3c09e482a7ce4fedc284d1f016918a97d9b2a8f5fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
