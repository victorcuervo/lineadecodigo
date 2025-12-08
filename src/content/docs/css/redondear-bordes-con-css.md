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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6T25BUG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T095955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2FPyECLtT7Z8zFMS8GeYK0NKvrH8vKJC9GGk7ZyMV6JAiADc%2FehufAdA2zOYlSvdg%2F6SznkH88FoOz2KZxSzCqcTiqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpCPvM0x%2B%2BlNVrflxKtwDGuJ3RMbAMcIv70sbxD0t4kWkQLdTzLFmpO4MGcSBZ5MolSWdvF3wcHwsZUc3HjQibHq0LotCC6PdNWfJfEbwmbNCY0ZnYuaRnOY3KXhKYPuy%2FyOxMFiwm3NYwtUji3yeDSniCbeO2m%2BMY1TfB2DSCQzkZbcctBAaqDFoav3X9jYpATcO7J%2FuOiVqKDyNgN0FjdkJVzvtGCD7t0oho4Bytx%2BvL%2BW2CkCXxUX56%2FqvTBI3z2aF7xW4vmkU99Fw5OHZG3CFxGCDgUf%2BvKGnD8dpRXnoVhBhb7U25JdS7h8AUW7R%2BNw4z0%2FRy4h5qA6TTvMDttF3Pteq%2FXOouKdkpGQX3x0aaINSc2FDhGYZ5hmafAV27CS%2B5iZp66tXrZzn%2F0p2LyhR041EPJYFur30kkB0KSkrQCS994Thny6Gn38kCPvatdOWhHyrBT4Eh8h05WEwUBkEBfUtOhMR3rp4x0S4um2B3v4GHwEijon96cU0hX%2BC7t1YdCpsX3ypez8bektPArwPFcHCiK9zEfBNlD8Tqtnu1SBVQbSsvIBKamxDJpR5YNmBtJxgdb%2FeqepBuNrihcLpqVErOpVnz6AukgwUTMIfPTF6KSpIc3fi2oKRKQG38fxwriDA6h%2B02TQw7e3ZyQY6pgF%2B3%2BRs6%2BChjwiCSTbkb30mNYvfbwKDHsbmWc3lS38s4wvF%2FEOvaj7%2BStOISHO70xoE9u0qDqtNooH%2FK47wEMre5cLmu5VM3o5O%2BegsFi5g1SnipVodIxuGN21hP3K3qRa%2BkuX%2FwTi8GgvQEQFYSS1GeV9NT125Ukxu59UfuJC5VmryDU%2FGQ%2BiBL2xzBh7PRvMbzVoR7gSh2PI5AtY5APDlUJVIUYH6&X-Amz-Signature=c90c08edf0bd641b2217dd44cc64cadd20947597b96c03251acbb099936e21ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6T25BUG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T095955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2FPyECLtT7Z8zFMS8GeYK0NKvrH8vKJC9GGk7ZyMV6JAiADc%2FehufAdA2zOYlSvdg%2F6SznkH88FoOz2KZxSzCqcTiqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpCPvM0x%2B%2BlNVrflxKtwDGuJ3RMbAMcIv70sbxD0t4kWkQLdTzLFmpO4MGcSBZ5MolSWdvF3wcHwsZUc3HjQibHq0LotCC6PdNWfJfEbwmbNCY0ZnYuaRnOY3KXhKYPuy%2FyOxMFiwm3NYwtUji3yeDSniCbeO2m%2BMY1TfB2DSCQzkZbcctBAaqDFoav3X9jYpATcO7J%2FuOiVqKDyNgN0FjdkJVzvtGCD7t0oho4Bytx%2BvL%2BW2CkCXxUX56%2FqvTBI3z2aF7xW4vmkU99Fw5OHZG3CFxGCDgUf%2BvKGnD8dpRXnoVhBhb7U25JdS7h8AUW7R%2BNw4z0%2FRy4h5qA6TTvMDttF3Pteq%2FXOouKdkpGQX3x0aaINSc2FDhGYZ5hmafAV27CS%2B5iZp66tXrZzn%2F0p2LyhR041EPJYFur30kkB0KSkrQCS994Thny6Gn38kCPvatdOWhHyrBT4Eh8h05WEwUBkEBfUtOhMR3rp4x0S4um2B3v4GHwEijon96cU0hX%2BC7t1YdCpsX3ypez8bektPArwPFcHCiK9zEfBNlD8Tqtnu1SBVQbSsvIBKamxDJpR5YNmBtJxgdb%2FeqepBuNrihcLpqVErOpVnz6AukgwUTMIfPTF6KSpIc3fi2oKRKQG38fxwriDA6h%2B02TQw7e3ZyQY6pgF%2B3%2BRs6%2BChjwiCSTbkb30mNYvfbwKDHsbmWc3lS38s4wvF%2FEOvaj7%2BStOISHO70xoE9u0qDqtNooH%2FK47wEMre5cLmu5VM3o5O%2BegsFi5g1SnipVodIxuGN21hP3K3qRa%2BkuX%2FwTi8GgvQEQFYSS1GeV9NT125Ukxu59UfuJC5VmryDU%2FGQ%2BiBL2xzBh7PRvMbzVoR7gSh2PI5AtY5APDlUJVIUYH6&X-Amz-Signature=0072e07edcce1067c60a7094d135e09b099e777aeb03efcb01965562493f7b84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
