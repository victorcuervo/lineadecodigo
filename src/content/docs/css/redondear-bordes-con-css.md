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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA5HEFOG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T012443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAcEgSyOH%2FHJWGU68GGEWe1WV01B6hMkmTQC%2B7GuulgEAiEAz5ODwdvaaII3FEUvlIBuCS1hbCKBzSwgbZ4LgY7ll3AqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFCyn1eiu7he0pOfACrcA1F4FwL3ua3FkCxCAMuOLrHznMRDfEg8WiYO4xGmb2qdaE8Ymd4x%2FC8Df7YgNjoTnAZLVC5jqCL2NfsLy78HS7WbgCT1HW4z5FNU1n2fulvNHO9mfa0sruXcZw7ukGeQ25OpKghbtGYsS55bANK85UK0JgdvItUirdcvSjmNlgrhr3RzGH6D00Xy25jlaGDs2H3oP%2Frusa2owIunJsVtXRjs04nP4e5YImQb3VEG2KQFaad6x3o7zLtdinAuuFQkOCG4Uk8q1Wu0bJ58OmUigx0bUSZjn6cnfGoEJUpqYV6%2FHjoJmveCyk6Zre2FzLVi39ttGGbl4%2BZxRAktrzyDP41JoIZJ%2BGBJKSjkOPbewEJimTqQ%2B8mUQcVj%2BaEGXSISpi6Dj3NfpZbIrNgRTrL3cGLr%2FX8jLHmshOS2IC1y%2B0ZTYTofWlUMjImJQyUrbadVvNlVkXD491T7FwPeyipaGGJj3tp2gLo4GpNRfc97jVfzKWe77tRrDCgoz%2BSL9gG46Ihuj7wxts4mBxELarA%2BulCtP%2FB%2FOwIkcdli2MnMarNkr56LLHCtzWMRIn6Q3nL7Tmn2w7kz5zFvOJw6qIYxONk%2BB%2BzoN9hkjxTlS9TL5rvonoE3fEl4f6FCS1KkMPHp3ckGOqUBhkwZpjrRz%2Be1osVqdvO8DuxmKBaQdq%2BkDH9ZHMMqrwoQGFDec9bCaUHzQLjDg4tuBLtES2UN6srapKErnslESmZ7swzOPi5cPhvUI4E5PcvOdFNed6RxOdxbVY3o3UnsA0jzh2%2F3QrQQGn4JFEZcc1CKXS4BtS3U0YCb1lIFBzDdNGTMuTbd%2FEQcmWfKNrTckKoVoXwX%2BwqjmetNUb4KWDKSinkq&X-Amz-Signature=8c510c35e61e0a17cf0c8556ffda2c9621bdbb36fe5e87d323fd45984ec79778&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA5HEFOG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T012443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAcEgSyOH%2FHJWGU68GGEWe1WV01B6hMkmTQC%2B7GuulgEAiEAz5ODwdvaaII3FEUvlIBuCS1hbCKBzSwgbZ4LgY7ll3AqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFCyn1eiu7he0pOfACrcA1F4FwL3ua3FkCxCAMuOLrHznMRDfEg8WiYO4xGmb2qdaE8Ymd4x%2FC8Df7YgNjoTnAZLVC5jqCL2NfsLy78HS7WbgCT1HW4z5FNU1n2fulvNHO9mfa0sruXcZw7ukGeQ25OpKghbtGYsS55bANK85UK0JgdvItUirdcvSjmNlgrhr3RzGH6D00Xy25jlaGDs2H3oP%2Frusa2owIunJsVtXRjs04nP4e5YImQb3VEG2KQFaad6x3o7zLtdinAuuFQkOCG4Uk8q1Wu0bJ58OmUigx0bUSZjn6cnfGoEJUpqYV6%2FHjoJmveCyk6Zre2FzLVi39ttGGbl4%2BZxRAktrzyDP41JoIZJ%2BGBJKSjkOPbewEJimTqQ%2B8mUQcVj%2BaEGXSISpi6Dj3NfpZbIrNgRTrL3cGLr%2FX8jLHmshOS2IC1y%2B0ZTYTofWlUMjImJQyUrbadVvNlVkXD491T7FwPeyipaGGJj3tp2gLo4GpNRfc97jVfzKWe77tRrDCgoz%2BSL9gG46Ihuj7wxts4mBxELarA%2BulCtP%2FB%2FOwIkcdli2MnMarNkr56LLHCtzWMRIn6Q3nL7Tmn2w7kz5zFvOJw6qIYxONk%2BB%2BzoN9hkjxTlS9TL5rvonoE3fEl4f6FCS1KkMPHp3ckGOqUBhkwZpjrRz%2Be1osVqdvO8DuxmKBaQdq%2BkDH9ZHMMqrwoQGFDec9bCaUHzQLjDg4tuBLtES2UN6srapKErnslESmZ7swzOPi5cPhvUI4E5PcvOdFNed6RxOdxbVY3o3UnsA0jzh2%2F3QrQQGn4JFEZcc1CKXS4BtS3U0YCb1lIFBzDdNGTMuTbd%2FEQcmWfKNrTckKoVoXwX%2BwqjmetNUb4KWDKSinkq&X-Amz-Signature=a281308c6321262ea4563403b5a5e596fb9152f019a07c4fdc0aa08ad901328d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
