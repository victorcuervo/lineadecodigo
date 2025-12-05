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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOXQILNG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T195100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDecdU0jhFhpTh%2BTzgDGEZBYC40KsiOWfmInEOpJYtWpgIhANLnsJEtE%2FXRk%2BK9EXcZtETshR2KU8hVOZa%2Bvz1B5f9XKv8DCGAQABoMNjM3NDIzMTgzODA1Igxmpiix1CUp9XLNus4q3AMgFjU3w4H077t8k6rVwcxFqp2TkC8U7pp8IT7yUXyXeFNmrp8APNRfjGvtnKpFdKOQrusWiBw32VRlq91qFtB9Uq2%2BcazkL5bMn3%2BgCatbPW1xMCRE5yg8atymMQeTC6Yfg9HKYi6PY1VUXXmNuhS9uIMlptdKCMxt6K5b4i2gp3avSRwYNXzE8RbIOV%2Fh%2FnpdSgyxCIjl9y4ktfEg02DvHyAqrBYIvqm%2BaxlpODw2uPbhyAcCmDU75lMbCy2WXYj0tVB8DkzehsOwCky%2BY564Qsp2DcgmTGmkgnj59ebi02K8xspQLJlt3kHFpBs7e6F3FDcs8YtvcVuIVwnhUw4MhrvFbp7cmnS7rZkY8WCKupHrdQZi2aLIigHvOcYElFqy50nunQMNkZKZwPtij0ytPhYmhyd6uYQUUmTRlM9wK2P3Tdx4ohj34tQYShOV6B62T98hAdqArHhpD1Zrjk%2BlbCI61duiLZxePRT20YxwZinnqgiRgXgcC75Ws%2F%2B%2FHQKcJQV4B48qx%2BMGrlMfONaoLAy3vW6DPgTaSMODj1%2B8lip6fq5WBd%2F2IMVsuj15Ldfx6Uf21YYIHA6Ldr%2Bp4KB9SP9Yxn40Mz1QDGeGR83qfNj4HypZo%2FqH%2FpWpGDC58MvJBjqkAebTQUoZPyRmIYdVw%2BA4eYjO1m1A1FRSM1h0WdIjR0zirKXMakKiItTPeAqZqOu8Yztv1TxF7KEFkgnVqOL%2Ba9VjesgwDLNDC30KoorH7v%2FjKsIvxFGOFHilpxccsi3kGhO3KAsuwthXJwpPfTitn%2B7L2lv6BiNBmtJ8ewKKDzLXs5gBQ2Dm03K3SPXH6CezhQy4V%2FiL0NOT%2F98Vn6t0%2FpzMuHsf&X-Amz-Signature=84f144b8c8989b0db9d64f1ed5df18a397bda95ed8a0445307cf1bb20bcb4c1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOXQILNG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T195100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDecdU0jhFhpTh%2BTzgDGEZBYC40KsiOWfmInEOpJYtWpgIhANLnsJEtE%2FXRk%2BK9EXcZtETshR2KU8hVOZa%2Bvz1B5f9XKv8DCGAQABoMNjM3NDIzMTgzODA1Igxmpiix1CUp9XLNus4q3AMgFjU3w4H077t8k6rVwcxFqp2TkC8U7pp8IT7yUXyXeFNmrp8APNRfjGvtnKpFdKOQrusWiBw32VRlq91qFtB9Uq2%2BcazkL5bMn3%2BgCatbPW1xMCRE5yg8atymMQeTC6Yfg9HKYi6PY1VUXXmNuhS9uIMlptdKCMxt6K5b4i2gp3avSRwYNXzE8RbIOV%2Fh%2FnpdSgyxCIjl9y4ktfEg02DvHyAqrBYIvqm%2BaxlpODw2uPbhyAcCmDU75lMbCy2WXYj0tVB8DkzehsOwCky%2BY564Qsp2DcgmTGmkgnj59ebi02K8xspQLJlt3kHFpBs7e6F3FDcs8YtvcVuIVwnhUw4MhrvFbp7cmnS7rZkY8WCKupHrdQZi2aLIigHvOcYElFqy50nunQMNkZKZwPtij0ytPhYmhyd6uYQUUmTRlM9wK2P3Tdx4ohj34tQYShOV6B62T98hAdqArHhpD1Zrjk%2BlbCI61duiLZxePRT20YxwZinnqgiRgXgcC75Ws%2F%2B%2FHQKcJQV4B48qx%2BMGrlMfONaoLAy3vW6DPgTaSMODj1%2B8lip6fq5WBd%2F2IMVsuj15Ldfx6Uf21YYIHA6Ldr%2Bp4KB9SP9Yxn40Mz1QDGeGR83qfNj4HypZo%2FqH%2FpWpGDC58MvJBjqkAebTQUoZPyRmIYdVw%2BA4eYjO1m1A1FRSM1h0WdIjR0zirKXMakKiItTPeAqZqOu8Yztv1TxF7KEFkgnVqOL%2Ba9VjesgwDLNDC30KoorH7v%2FjKsIvxFGOFHilpxccsi3kGhO3KAsuwthXJwpPfTitn%2B7L2lv6BiNBmtJ8ewKKDzLXs5gBQ2Dm03K3SPXH6CezhQy4V%2FiL0NOT%2F98Vn6t0%2FpzMuHsf&X-Amz-Signature=e8fd8c313dca435d775c2b6bb4bb56778431cd8c2544614d262524c99240edc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
