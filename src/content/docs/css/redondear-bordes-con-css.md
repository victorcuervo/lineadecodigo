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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW46O2VC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T041126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAsRUclltOsz%2FICMBNKwm92JTGsCZXXL9F%2F8QacqRrAAAiA397JxGMccG5aPShjwB38tshrbguKEtdd2xh7V8RhVLSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXjfvTVLJmmQ3rzrYKtwDFL6fKcGKKidbhK7NthkNciN8K%2BzwltRw3Q7fXDTBDDfb9w3ENIh5mqAZhtyHoBY9J%2ByHfWUD2M0xxfSnhOet2QkZlSNxd5TDGkKqnOPYAL%2B9J%2FI4u1F5dmMFX%2B6m9ZGt3FQgQYCFCr4RROphl2wSzqyQxrbLJPdy0zkI5Ml10%2FYJFgt9k0tKJl2CIiAx%2FG9UUmsJ0fOvpx0SOoH7ge5lfnvUNH%2Bxi5L9pTk8Lnfm9yrwz7T573nNZ%2BqQiaD5EJ2Mu6dS5fuALaXCs8QlarMLiosl99KPAogFY77PsF4451qYSHfeqHAwCzizxCGitHnXLn6HUOQE6vl5nIMGa%2BBFqqWP6%2B45IHlqooVIiOgJViZULtHWNHXMtOPHf%2F8FGSUdfj1ELO5UIyBI4hzBbdI%2B9Ev8MEDIm0RD4BAqJ1gl2DFrCKxjCc%2B5wtuRShKQCHK2wevHZb6srMncTIEA%2FgsSrXGcQjtcKzEIurzZpnGqjrvuM38ZXmx9JT6cHpN6SVhW%2FVEgT5W2ah1V0yRrWBVYhpwK2e%2Fzf4noRgICBd3%2B%2BGebzArKYb9%2BT1QPbp0WgyfA6y5pIiBhtcSvVl30Zx%2BFxtMGuMhQxsLOAreMOfGl%2BMQgCY6Ml2LJWvDNsXgwzJTZyQY6pgHrBX3LsaN%2FQFhczY6o19Wz3dc2xZwP7UMmAViYf1e8aBSfil%2Bqvge%2B6TyXuT6lfTiEtj4tAuFh3mP6gV513uqY89KT0MUFAiaQ%2F6B9rZvcJtQTmNrFEO4X47dN9%2BMyOllQ3SkhUf9RvDxfYUTP270lWBqF26qPvtW%2BJyJ9rT299Sokc4w0GZ4Md6WqdUEvIvQPpwnAsAoJFfieDW3%2FP4EmqI2p5D3s&X-Amz-Signature=f37dcc32b065c4496359adc5d5f46cae7115eaa9ad7439b28174aa43d5113ecb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW46O2VC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T041126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAsRUclltOsz%2FICMBNKwm92JTGsCZXXL9F%2F8QacqRrAAAiA397JxGMccG5aPShjwB38tshrbguKEtdd2xh7V8RhVLSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXjfvTVLJmmQ3rzrYKtwDFL6fKcGKKidbhK7NthkNciN8K%2BzwltRw3Q7fXDTBDDfb9w3ENIh5mqAZhtyHoBY9J%2ByHfWUD2M0xxfSnhOet2QkZlSNxd5TDGkKqnOPYAL%2B9J%2FI4u1F5dmMFX%2B6m9ZGt3FQgQYCFCr4RROphl2wSzqyQxrbLJPdy0zkI5Ml10%2FYJFgt9k0tKJl2CIiAx%2FG9UUmsJ0fOvpx0SOoH7ge5lfnvUNH%2Bxi5L9pTk8Lnfm9yrwz7T573nNZ%2BqQiaD5EJ2Mu6dS5fuALaXCs8QlarMLiosl99KPAogFY77PsF4451qYSHfeqHAwCzizxCGitHnXLn6HUOQE6vl5nIMGa%2BBFqqWP6%2B45IHlqooVIiOgJViZULtHWNHXMtOPHf%2F8FGSUdfj1ELO5UIyBI4hzBbdI%2B9Ev8MEDIm0RD4BAqJ1gl2DFrCKxjCc%2B5wtuRShKQCHK2wevHZb6srMncTIEA%2FgsSrXGcQjtcKzEIurzZpnGqjrvuM38ZXmx9JT6cHpN6SVhW%2FVEgT5W2ah1V0yRrWBVYhpwK2e%2Fzf4noRgICBd3%2B%2BGebzArKYb9%2BT1QPbp0WgyfA6y5pIiBhtcSvVl30Zx%2BFxtMGuMhQxsLOAreMOfGl%2BMQgCY6Ml2LJWvDNsXgwzJTZyQY6pgHrBX3LsaN%2FQFhczY6o19Wz3dc2xZwP7UMmAViYf1e8aBSfil%2Bqvge%2B6TyXuT6lfTiEtj4tAuFh3mP6gV513uqY89KT0MUFAiaQ%2F6B9rZvcJtQTmNrFEO4X47dN9%2BMyOllQ3SkhUf9RvDxfYUTP270lWBqF26qPvtW%2BJyJ9rT299Sokc4w0GZ4Md6WqdUEvIvQPpwnAsAoJFfieDW3%2FP4EmqI2p5D3s&X-Amz-Signature=21eca5d3a51f6b4474f4c5a5c0847dc11272db668d4449bf6ca7ea705c35d501&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
