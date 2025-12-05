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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BUS5F4F%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T042106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyW4tLPzLjTlC33iO7Bync0JjXKzP%2Br5xwanmokGwWvAiAfxreJjuwpA0giNLc88ymA7qRnov9yuyeZ2urxEVi7jCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMl%2Bkh%2BsF%2Beo3fx2WeKtwDKhUTcr38R1j5cxBxs%2B7c5JIw394rF6B9reXMSkNApo2H0I1Cp3Wbzf8qAQMxS1zwDQbG%2BtwqR%2BswHC3cBtw6nqNeG%2BQM69X4buTCr%2FXa6fh8sGPmg%2F1fayUQpPaRhLknCjmssAMzc7pek3ezTDAKHfSm0m4bz2%2BqEUGaLDCbTOk3vRnART3vpxCIW7%2F01mTakfeRpPofv7Bidq4dM%2BJ2ayUqK7nU5UG%2F8b0uWsLQ8fZUcT%2B3jnSunVvzoe%2FgaJOdJEtZt0AHwljVtIguTgVxNnM9Wq%2BxKFEw%2BDxwGd12cNKO98zWj2er8JsnVCJcl0vQvOJjLr1wDmfF1x63ftx3UIAYMmv7SNHN4IbO8UjWXCHK58RZCVQync1Ux%2FPZV9w54OnDHOvPZO5qrBau0T9HkcXgtcbbrw4%2FxVIL2i2GxKHgQ7B3K%2F0Gf8FJ6mDszt4XgOk%2FmezJe%2B4M5MibNLv0eD5etTsNeRRzcOx3KWx9ZzzUu%2FJ5sLHkunue8g%2BcMSu3c9m1GvxKmvC%2BN2LKpynlCPLzms8k6T%2FQXLDAzXIva0Cffd7HhpZXRy13JqULjqwouatpvSeiN2r4kRxNqKu8aBf26serItRtBH4ySjaA%2BJRqRkfgF3PR4TR75FQw6qrJyQY6pgFD9qGcPsrNDQqQd6vmWCGTnQN2xpJMttijHiWayHDXpFIn9BEmz74mEiqrd28FQCd9ajLlI4JE8exgbQ8BV5XTG7sziu7%2Btjwe%2B6MfSymx7R%2B3h90iJPSbuU849YjweXm4t%2Fts5qLfnD0Fguo9S5pPYvGS%2FM%2BCIr5WJIMmXJhu0Dklzr356q6U01e7xBUFfJC0gx%2Bnm0YsktTdqxsuJ8nab%2FARv0hl&X-Amz-Signature=6edf857b1df75116f8b3614db1b9269c7b889853c57bcec191f02c7bbb3efc62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BUS5F4F%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T042106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyW4tLPzLjTlC33iO7Bync0JjXKzP%2Br5xwanmokGwWvAiAfxreJjuwpA0giNLc88ymA7qRnov9yuyeZ2urxEVi7jCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMl%2Bkh%2BsF%2Beo3fx2WeKtwDKhUTcr38R1j5cxBxs%2B7c5JIw394rF6B9reXMSkNApo2H0I1Cp3Wbzf8qAQMxS1zwDQbG%2BtwqR%2BswHC3cBtw6nqNeG%2BQM69X4buTCr%2FXa6fh8sGPmg%2F1fayUQpPaRhLknCjmssAMzc7pek3ezTDAKHfSm0m4bz2%2BqEUGaLDCbTOk3vRnART3vpxCIW7%2F01mTakfeRpPofv7Bidq4dM%2BJ2ayUqK7nU5UG%2F8b0uWsLQ8fZUcT%2B3jnSunVvzoe%2FgaJOdJEtZt0AHwljVtIguTgVxNnM9Wq%2BxKFEw%2BDxwGd12cNKO98zWj2er8JsnVCJcl0vQvOJjLr1wDmfF1x63ftx3UIAYMmv7SNHN4IbO8UjWXCHK58RZCVQync1Ux%2FPZV9w54OnDHOvPZO5qrBau0T9HkcXgtcbbrw4%2FxVIL2i2GxKHgQ7B3K%2F0Gf8FJ6mDszt4XgOk%2FmezJe%2B4M5MibNLv0eD5etTsNeRRzcOx3KWx9ZzzUu%2FJ5sLHkunue8g%2BcMSu3c9m1GvxKmvC%2BN2LKpynlCPLzms8k6T%2FQXLDAzXIva0Cffd7HhpZXRy13JqULjqwouatpvSeiN2r4kRxNqKu8aBf26serItRtBH4ySjaA%2BJRqRkfgF3PR4TR75FQw6qrJyQY6pgFD9qGcPsrNDQqQd6vmWCGTnQN2xpJMttijHiWayHDXpFIn9BEmz74mEiqrd28FQCd9ajLlI4JE8exgbQ8BV5XTG7sziu7%2Btjwe%2B6MfSymx7R%2B3h90iJPSbuU849YjweXm4t%2Fts5qLfnD0Fguo9S5pPYvGS%2FM%2BCIr5WJIMmXJhu0Dklzr356q6U01e7xBUFfJC0gx%2Bnm0YsktTdqxsuJ8nab%2FARv0hl&X-Amz-Signature=cfc3aeaee09d9d1933e2a4f3c8aaf59f4c2a6ab273f6c17394f7b6f63031f29f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
