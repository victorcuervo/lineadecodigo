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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JITMJPO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T074704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqcRW4cSS%2BJc2kII5MpoPwJY74b5y4FNP6CyHVV%2FaJ4AiEA0XrNZvxgO9wQ8pwzsujHdANaebRXU0pbD%2FEhrovH%2BxYqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEQfC9%2Bh%2FPK7KEKsSrcA0I64eQASN3mM31jVAxpvMcrUSkE6jYWSzMiB3PaDvyE0C6D%2BUmfgEeHkEQ%2B2BuIxpDlblsVGCYj8urmkzijUyW0s7KZ3Zvdp9imGTh6B5%2BAOZ%2Fs5fUO3Mbex5UA7aN6pkriavKOFodDdVKksRMIBrttxlvKWEEHsnVXWttauu5BhSVBr12JbVNi8m0MvMg3O5SmJjS2IGYSTNC1RX3pD%2FhjPEipIWZagwmqtLkaBhK0vKV%2FT9Et%2Bu8ADM9%2BLQPJHrbaITHMxrR7UvWDsuN9ao8gHerxEt6ipZUE4tT%2B1jkxD63MKhvaM%2Bn1H73k5kzBfcNtRqJD8Q4TBc4I7gO7t1GFKZ4lAttcjR1ujhLVzuoqiHOUyNww1kK1E843lmwk8SATZfg2PLTYDhhrlJyd1zquE5d9hOmOkJhSh%2FJAdprvEyLtoJWjHJYCJkCPD7X3%2FGkt6DmpiTz75RWwTHkFpcaYnm6xVBtUYwIbEK6BZJTfMIda0MCHrmWwMNpsW4GhHPqy91kghQcSaHd9KlCZU3csefL5PaGWaiAZmzi7rNSggpOqAyBWc%2BF92rLUzINVBpL7No%2FdtsMnMIO9bxi5tbiG3odC4CYnlwE%2B935Xn3MUUXIcBeb31jH0cOyJMLqk38kGOqUBF6P0KSK1dsaBU0UQlD%2FYzJBfUDR7ZfA2pclco4B2%2BMBtKkeOM9RT9immoZSeuUyXddsafPmfbmg%2FE9vPoypFXx0Kt%2BvQZVDzKfDTabeAa9%2F%2BqF7BSyIMYnrbO2V%2FutPJWo5R%2BnIx6JStB5bH6nZw12EqcbOqMCBhqw1%2Bu452M05NtQcAnm97mhAkPudsU4vqtxET3MiatJpJH%2BNxMLIJWd8jXtVO&X-Amz-Signature=8a54b76c1b07ce8ae8b74d5b1c415966ba8628f3ea02424e8e2f0baca17c63a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JITMJPO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T074704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqcRW4cSS%2BJc2kII5MpoPwJY74b5y4FNP6CyHVV%2FaJ4AiEA0XrNZvxgO9wQ8pwzsujHdANaebRXU0pbD%2FEhrovH%2BxYqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEQfC9%2Bh%2FPK7KEKsSrcA0I64eQASN3mM31jVAxpvMcrUSkE6jYWSzMiB3PaDvyE0C6D%2BUmfgEeHkEQ%2B2BuIxpDlblsVGCYj8urmkzijUyW0s7KZ3Zvdp9imGTh6B5%2BAOZ%2Fs5fUO3Mbex5UA7aN6pkriavKOFodDdVKksRMIBrttxlvKWEEHsnVXWttauu5BhSVBr12JbVNi8m0MvMg3O5SmJjS2IGYSTNC1RX3pD%2FhjPEipIWZagwmqtLkaBhK0vKV%2FT9Et%2Bu8ADM9%2BLQPJHrbaITHMxrR7UvWDsuN9ao8gHerxEt6ipZUE4tT%2B1jkxD63MKhvaM%2Bn1H73k5kzBfcNtRqJD8Q4TBc4I7gO7t1GFKZ4lAttcjR1ujhLVzuoqiHOUyNww1kK1E843lmwk8SATZfg2PLTYDhhrlJyd1zquE5d9hOmOkJhSh%2FJAdprvEyLtoJWjHJYCJkCPD7X3%2FGkt6DmpiTz75RWwTHkFpcaYnm6xVBtUYwIbEK6BZJTfMIda0MCHrmWwMNpsW4GhHPqy91kghQcSaHd9KlCZU3csefL5PaGWaiAZmzi7rNSggpOqAyBWc%2BF92rLUzINVBpL7No%2FdtsMnMIO9bxi5tbiG3odC4CYnlwE%2B935Xn3MUUXIcBeb31jH0cOyJMLqk38kGOqUBF6P0KSK1dsaBU0UQlD%2FYzJBfUDR7ZfA2pclco4B2%2BMBtKkeOM9RT9immoZSeuUyXddsafPmfbmg%2FE9vPoypFXx0Kt%2BvQZVDzKfDTabeAa9%2F%2BqF7BSyIMYnrbO2V%2FutPJWo5R%2BnIx6JStB5bH6nZw12EqcbOqMCBhqw1%2Bu452M05NtQcAnm97mhAkPudsU4vqtxET3MiatJpJH%2BNxMLIJWd8jXtVO&X-Amz-Signature=6ad139c502dac2292866b41b424e8d3939a805ae7e339fc77411f9f202b5cd06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
