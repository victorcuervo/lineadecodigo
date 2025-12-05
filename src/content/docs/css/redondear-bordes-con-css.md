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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MAIQOY5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T002650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy%2Fv2dnu%2FJD3al%2Fb8IlGGYOmUt2ijT2uSk3mQnlXGH6AIhAMGWw4CSUvYFjcWMKVD44XfOaZ7q6bIR0tlGR22p3R5fKv8DCE8QABoMNjM3NDIzMTgzODA1IgwzVs8xMwD2pAISw40q3APbbDy6xzPeHEw%2BYW5WnGAj7ViB1BkYHB11VmoCPPmapXAFo8gWncDNP%2BWcGAT6ybADZY58CRZBTWcsQ%2F4KEFkzJmvllq7raP9nSRpj6lUvnandzrCOoYkNUsJ2Uvo70u7CsTTnKbIWIdmPN6FtUGO6%2Fqltk%2BVhjTl%2BHkl6Wr7Jqtt1SPjhGSxqi0T%2BjMiyiUrsAdZZhfm34ug8LGEmTUnKw4eSK%2BqJlg2QEkOh3rLkGOtKMqZF0mACbd2DLWZ5EhZS6t1%2BdTaqCJcunVi4Z%2FruVeuGi%2BaQ8pCSSemgccanrGxIl4lDX3mUyhO6meBksQGjxVRHfmUA13JJojYllbsAQGEheY%2Ft6kacANe9fqVzCOczV2t%2FLWW32FP6h2dXsbjGfOWxXXPmgp%2BzBjsQoQVvRerYxNj%2B4KN2m401kFy4TtMda0N3%2Bq%2FHSWmjxhKj2rZF%2BSgn%2FI6E4ZPdZr42j%2F7bkZhekpQFB6kDe2LE6R%2FkLH25Jx8LEftxxTBt1oz838xIfh7w1moTEmF0rhRMiNPNtNZJ1LlFX43MeOswzYK8JiPmHed%2FdZyJH3XTaHnvI%2BkO1aMfwhRuT1LL%2B2LFykKOjS2nNKB3q75X7HBYUVc69Mi4uhsFUbY3T5GTxzD3i8jJBjqkAcz0em2nvdBTNTaHlzJ9aSaDKtCvAy4HPB68mn26Ro0oYTxk76rc5AItUIn7rpasVQUoUxfUvjFiah5ypVShTrhMY7gf1EFSyE18S9oqu9q0qv8ryU%2FRefIeHskAaBuPUTx5ch91bT4Qmh%2F6d2aZjdJA4MFoU2hYYWI1Bu%2BgL%2Fsm9DKSiOoa7QYPefFBQOMsdPyHGtYKUBRk%2BujMMXX9ViOPsJJ2&X-Amz-Signature=79c23ae83b036b9791892f89d13217fb3df2d54de65006f3300eb1892ee5cd7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MAIQOY5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T002650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy%2Fv2dnu%2FJD3al%2Fb8IlGGYOmUt2ijT2uSk3mQnlXGH6AIhAMGWw4CSUvYFjcWMKVD44XfOaZ7q6bIR0tlGR22p3R5fKv8DCE8QABoMNjM3NDIzMTgzODA1IgwzVs8xMwD2pAISw40q3APbbDy6xzPeHEw%2BYW5WnGAj7ViB1BkYHB11VmoCPPmapXAFo8gWncDNP%2BWcGAT6ybADZY58CRZBTWcsQ%2F4KEFkzJmvllq7raP9nSRpj6lUvnandzrCOoYkNUsJ2Uvo70u7CsTTnKbIWIdmPN6FtUGO6%2Fqltk%2BVhjTl%2BHkl6Wr7Jqtt1SPjhGSxqi0T%2BjMiyiUrsAdZZhfm34ug8LGEmTUnKw4eSK%2BqJlg2QEkOh3rLkGOtKMqZF0mACbd2DLWZ5EhZS6t1%2BdTaqCJcunVi4Z%2FruVeuGi%2BaQ8pCSSemgccanrGxIl4lDX3mUyhO6meBksQGjxVRHfmUA13JJojYllbsAQGEheY%2Ft6kacANe9fqVzCOczV2t%2FLWW32FP6h2dXsbjGfOWxXXPmgp%2BzBjsQoQVvRerYxNj%2B4KN2m401kFy4TtMda0N3%2Bq%2FHSWmjxhKj2rZF%2BSgn%2FI6E4ZPdZr42j%2F7bkZhekpQFB6kDe2LE6R%2FkLH25Jx8LEftxxTBt1oz838xIfh7w1moTEmF0rhRMiNPNtNZJ1LlFX43MeOswzYK8JiPmHed%2FdZyJH3XTaHnvI%2BkO1aMfwhRuT1LL%2B2LFykKOjS2nNKB3q75X7HBYUVc69Mi4uhsFUbY3T5GTxzD3i8jJBjqkAcz0em2nvdBTNTaHlzJ9aSaDKtCvAy4HPB68mn26Ro0oYTxk76rc5AItUIn7rpasVQUoUxfUvjFiah5ypVShTrhMY7gf1EFSyE18S9oqu9q0qv8ryU%2FRefIeHskAaBuPUTx5ch91bT4Qmh%2F6d2aZjdJA4MFoU2hYYWI1Bu%2BgL%2Fsm9DKSiOoa7QYPefFBQOMsdPyHGtYKUBRk%2BujMMXX9ViOPsJJ2&X-Amz-Signature=95740b11af15f6a356464d5ca5153525a3639cc8cfa4039d26edeb74074105b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
