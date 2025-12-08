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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WEYS5GS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T210904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0Heve3jXnTKMNha08agvOXYE8bJG8Iaidy2DHSI1muQIgE3PtO4zXBNxxzkzdzqA1FR8yXIA2bjnr0zjepEwt6vEqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL36i3bbQMnT2jPofyrcA%2BCXklGl5KtEpFmSz4QQ9ejRujRWk1HAd5T4aW1Kx4pO0Yd8uIFqiG6JgKxzGf4iJwVHNHHU7D7nYJQjx3bxc%2F1jMnpuLGB%2Bt1U3PHDQ2rXGV8v4pHWffbFOyyaNGqmIzHXvVcLjT7Y7PMDPlRtUfYAqKVHkzBOi4zFVEV%2BQYAsr3hpX3QuLPfzFZ3z8ofc%2FelIN%2FT4SYHCEUEYKvCFTGERYcbq4UhfAubnCi6vjE00as9gXTS8faqjaPl5XQfc2PNjO7ZuT2acdXTx2Oe0zL7OhRJuSV851ysSqO58Qde7ZuXt7M%2BcGZjG0ze%2BkhHQAr6OoTv4kevATuIiSNjnSXSiILeEmAXh5mvo%2BnvObEW%2Bb%2FVvzFkTcJOUzGZ7BFxl42YCIklyvf9YTZupDdqdJgdMaR%2BN8gbVUoibXswplkFPzST2GHWtP6Jqre9UjQ%2Bq0JEAgvY%2BBO9PunA07Q1Wn2HQS%2BgJ1KPggvVolA6cBAeXqRXA%2FiLFpd8yNXle4nfaLHz6IPggEZuRzmkCElKYL%2BVltansm37ITzaF0BaWlBXjIlnIsEuTZUDjBVzM7erxGaTMkGNIAlDdki98xgCbbrBgAez%2FybI3x2r%2BVjfDXyLmRekF6H65OkW%2F2j8WgML7c3MkGOqUBHQqTgnieQP4mwYrK1flpH%2F3QOgaA%2BIGefUhT8hPu5%2BRjd0fTeeW%2Bnf%2FsrW%2FFI9DAU9vyzgm7pk4mgelRoR4TyGj%2Bk1Psa3gfqxm7YdpYelQtuBXsL2vqAlH2HTpmvclw%2BCEWeuYLCook%2BbAZnpsqcHnWk3l3tLXLeEhMLyfqPFSqS6p%2BntlYxt7JfIsAmVTvB3QTucPBCvxhHWUhlBLTYVWTzc%2BQ&X-Amz-Signature=317bc99f60a61c298e13971d5e2590f16cb6f9393c029925ff428d8b89cadef2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WEYS5GS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T210904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0Heve3jXnTKMNha08agvOXYE8bJG8Iaidy2DHSI1muQIgE3PtO4zXBNxxzkzdzqA1FR8yXIA2bjnr0zjepEwt6vEqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL36i3bbQMnT2jPofyrcA%2BCXklGl5KtEpFmSz4QQ9ejRujRWk1HAd5T4aW1Kx4pO0Yd8uIFqiG6JgKxzGf4iJwVHNHHU7D7nYJQjx3bxc%2F1jMnpuLGB%2Bt1U3PHDQ2rXGV8v4pHWffbFOyyaNGqmIzHXvVcLjT7Y7PMDPlRtUfYAqKVHkzBOi4zFVEV%2BQYAsr3hpX3QuLPfzFZ3z8ofc%2FelIN%2FT4SYHCEUEYKvCFTGERYcbq4UhfAubnCi6vjE00as9gXTS8faqjaPl5XQfc2PNjO7ZuT2acdXTx2Oe0zL7OhRJuSV851ysSqO58Qde7ZuXt7M%2BcGZjG0ze%2BkhHQAr6OoTv4kevATuIiSNjnSXSiILeEmAXh5mvo%2BnvObEW%2Bb%2FVvzFkTcJOUzGZ7BFxl42YCIklyvf9YTZupDdqdJgdMaR%2BN8gbVUoibXswplkFPzST2GHWtP6Jqre9UjQ%2Bq0JEAgvY%2BBO9PunA07Q1Wn2HQS%2BgJ1KPggvVolA6cBAeXqRXA%2FiLFpd8yNXle4nfaLHz6IPggEZuRzmkCElKYL%2BVltansm37ITzaF0BaWlBXjIlnIsEuTZUDjBVzM7erxGaTMkGNIAlDdki98xgCbbrBgAez%2FybI3x2r%2BVjfDXyLmRekF6H65OkW%2F2j8WgML7c3MkGOqUBHQqTgnieQP4mwYrK1flpH%2F3QOgaA%2BIGefUhT8hPu5%2BRjd0fTeeW%2Bnf%2FsrW%2FFI9DAU9vyzgm7pk4mgelRoR4TyGj%2Bk1Psa3gfqxm7YdpYelQtuBXsL2vqAlH2HTpmvclw%2BCEWeuYLCook%2BbAZnpsqcHnWk3l3tLXLeEhMLyfqPFSqS6p%2BntlYxt7JfIsAmVTvB3QTucPBCvxhHWUhlBLTYVWTzc%2BQ&X-Amz-Signature=218d0d612d1c991861da45a47b69f995c95bd8dbbb04845bdc198fd8ec5afe77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
