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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633TNZ3FX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDj2Vkx%2FNcVB8JYV3ULOK%2FI%2Bqy%2FFZLRR4LflTr4sGTCaQIhALfEm5KSoeANFex9iTPA9fRdbcdstElaP6YbBc3D6czOKv8DCH8QABoMNjM3NDIzMTgzODA1IgydFrZVL1Y41bj1N3sq3APPASzshspBIiSdCsTNGjqtiFpnkzZOAnL8vSjmX%2FzjmwyjFk0V3XXB5wgIXGzjDXH%2BylTST1rdc4S9UDfl1hrRIv9bwfs%2BXfbHJV3HYm6avhGSR8m9N3cYN7GJb0NPXzDzPfuyp5jd4ShE0yxMmeAm6PreBlMoQGqDaktuP1QgCQ%2BM9KYYl925uHx3l%2FoYgBBwtomrUJtjegbtqtQ473LItWmOGkLgb3%2FZtfAb2jqNQ%2BtZAXuVn6PTDohLD4OwNM876RaPW5i2d%2BBPBSwYkgD2dhkZShUdt5Gl3bstwh6SdMKsCEN5lJY1IkjvLd4EVpZ6kvQmaKpgT964WuxjIDXgXuOTbTb1thE2FT4t2osOoxNg6qSQ6JibLEbwg0pZ%2F3ahvAj%2BmA4v%2FUZouKqIOBX7rdmbiRqufk1uu8cwhSP0nO%2BAN35RlV6InPrlr5lmcr%2FJIC%2FP5HvL4oprkVDAWo0r5z%2F%2FsjSkogz84cosmMK99VufIvs5o%2FCqGZs3TcAaEP2Vg604jAYhGCa6llEXj5A0yqQoG2eN7uImpv%2BQ37mXOjMZ4ywQ%2BYfumj%2FFJTGuc281doa37X2O%2F5AcYUQIDBHpz7y4g%2BC7WQpriESxnveQYDeyooJoru%2BnzT9mqjDA4YrKBjqkAdKcehlhW8R5ohrFq8jpUMT08ciGb2p%2FmWcO0UJPdBHHvZd5ePGPs35LcDmncZvKEA3IuC7WglX%2FMGap96EkfM4FiKiGZIDj4Cmu3ossIBtY7ECmSNcDKq4SduYAJlUacjv2R3GB%2FZvqRasSpPMPlgGH%2BE2svaCtQRfI0rDO9Orc2yqNK18YR6pRY3Hugtrs%2FEQ4srIFtV%2Ba%2B4%2B2RIpxy0fwar10&X-Amz-Signature=a2893d77e956ee0441d75df0cbdd3306fc25b5293ec772e181d393c6b4131083&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633TNZ3FX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDj2Vkx%2FNcVB8JYV3ULOK%2FI%2Bqy%2FFZLRR4LflTr4sGTCaQIhALfEm5KSoeANFex9iTPA9fRdbcdstElaP6YbBc3D6czOKv8DCH8QABoMNjM3NDIzMTgzODA1IgydFrZVL1Y41bj1N3sq3APPASzshspBIiSdCsTNGjqtiFpnkzZOAnL8vSjmX%2FzjmwyjFk0V3XXB5wgIXGzjDXH%2BylTST1rdc4S9UDfl1hrRIv9bwfs%2BXfbHJV3HYm6avhGSR8m9N3cYN7GJb0NPXzDzPfuyp5jd4ShE0yxMmeAm6PreBlMoQGqDaktuP1QgCQ%2BM9KYYl925uHx3l%2FoYgBBwtomrUJtjegbtqtQ473LItWmOGkLgb3%2FZtfAb2jqNQ%2BtZAXuVn6PTDohLD4OwNM876RaPW5i2d%2BBPBSwYkgD2dhkZShUdt5Gl3bstwh6SdMKsCEN5lJY1IkjvLd4EVpZ6kvQmaKpgT964WuxjIDXgXuOTbTb1thE2FT4t2osOoxNg6qSQ6JibLEbwg0pZ%2F3ahvAj%2BmA4v%2FUZouKqIOBX7rdmbiRqufk1uu8cwhSP0nO%2BAN35RlV6InPrlr5lmcr%2FJIC%2FP5HvL4oprkVDAWo0r5z%2F%2FsjSkogz84cosmMK99VufIvs5o%2FCqGZs3TcAaEP2Vg604jAYhGCa6llEXj5A0yqQoG2eN7uImpv%2BQ37mXOjMZ4ywQ%2BYfumj%2FFJTGuc281doa37X2O%2F5AcYUQIDBHpz7y4g%2BC7WQpriESxnveQYDeyooJoru%2BnzT9mqjDA4YrKBjqkAdKcehlhW8R5ohrFq8jpUMT08ciGb2p%2FmWcO0UJPdBHHvZd5ePGPs35LcDmncZvKEA3IuC7WglX%2FMGap96EkfM4FiKiGZIDj4Cmu3ossIBtY7ECmSNcDKq4SduYAJlUacjv2R3GB%2FZvqRasSpPMPlgGH%2BE2svaCtQRfI0rDO9Orc2yqNK18YR6pRY3Hugtrs%2FEQ4srIFtV%2Ba%2B4%2B2RIpxy0fwar10&X-Amz-Signature=be46ad6c5ae849b04dc266e1ad7da4cc2a2f8f6d7aa38dc17809e3ae07493c9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
