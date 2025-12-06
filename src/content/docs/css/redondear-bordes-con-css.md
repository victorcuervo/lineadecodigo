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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HAFSLL4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T235411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBC6ycPRUehot9Wh6JU1eQqvvNMV0AzTGrEZeWv04HiFAiBcNDx8af%2Bez7LQrro%2FfbfM6mue1K3hIlosWKLyEVM5ISqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQZX3Gvw4PskiScgqKtwDSz%2FUgFr4zTV2qkm%2BOR0wlsvr%2BFQYmPJlHYzkS7rvHKdT6CsHOCNSV4IHvWc6%2FaROaASctxsC2wdRpA%2Bt6v%2FQYt%2BrGl8dk5WpE7mEtIkVlOBD1ja%2BGVz%2FWZPoDdMCXhEz9Kh%2B3Lp5H15z0B0K5r6g27%2BjyohZqv5F%2BOqqF%2F%2BSpLQ6%2B30YbWBe5Oluq0e99lGfid4UKlIsZ%2Fi17MNHWvuao08qA07S09B8RSMurYq82WdXxAYjOMu5BkL%2FPKEGZWW0%2Fxauekm27oq4fLE30ys%2BaLownevDw2yYBiC5YOrDRRqfQ%2FMjDK%2Bj4CCVqndva4kKAplT88kvvdvKadV9vvR862P4fE8lyV81%2FtOlVQSA24lg8bROJgS9Kw3aqo5QbEHU82xCDSIxj1DjdybAp%2FEcFQNA9uMhC8p88yeeUH6mJseoGNPAQyvvtmziNW02i%2B8fvd2AI6oX3gz6fe4gpY3XSznLE%2FYAXnNqEbdY5d7aPTFR%2B4Hg%2BVdPjES3X48Na7dCh2NBADWzKShrOLgN3VMRzjxwPT%2BLYLGVts9mijhB3Fc3a72LR2syxdOqUjwDayy7wSqQ8k9MLRQhMhlHx6Ok4NRc3vLZLm8gp4WI%2FNVvu1NJtJFWJp1foBEkVyYwov3SyQY6pgHlpX1hSfCCrstbTpwsRThc%2BT0PkL8aofLkE3e%2FSKBrdOVEIx47VJiXskEMLhF90MMvzko%2FSnPWHxQSopuCfeW36HBAKPZqTpdVFnI7kkA4%2BGo%2BsG1f2AA0bG8tNQRfyma7ixXE5QuNHuGnLzt84wz0wZdaSr%2FJxuzplP7DojLXyzqjJA5MyAuOQpBo3Wq7FxPE%2F4DbknRigaDHRKhQ2jc87wFp3a5m&X-Amz-Signature=0fea515ea14f6a012f7a516edef01cf859f50186f09566d9fb074b38abbebd11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HAFSLL4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T235411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBC6ycPRUehot9Wh6JU1eQqvvNMV0AzTGrEZeWv04HiFAiBcNDx8af%2Bez7LQrro%2FfbfM6mue1K3hIlosWKLyEVM5ISqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQZX3Gvw4PskiScgqKtwDSz%2FUgFr4zTV2qkm%2BOR0wlsvr%2BFQYmPJlHYzkS7rvHKdT6CsHOCNSV4IHvWc6%2FaROaASctxsC2wdRpA%2Bt6v%2FQYt%2BrGl8dk5WpE7mEtIkVlOBD1ja%2BGVz%2FWZPoDdMCXhEz9Kh%2B3Lp5H15z0B0K5r6g27%2BjyohZqv5F%2BOqqF%2F%2BSpLQ6%2B30YbWBe5Oluq0e99lGfid4UKlIsZ%2Fi17MNHWvuao08qA07S09B8RSMurYq82WdXxAYjOMu5BkL%2FPKEGZWW0%2Fxauekm27oq4fLE30ys%2BaLownevDw2yYBiC5YOrDRRqfQ%2FMjDK%2Bj4CCVqndva4kKAplT88kvvdvKadV9vvR862P4fE8lyV81%2FtOlVQSA24lg8bROJgS9Kw3aqo5QbEHU82xCDSIxj1DjdybAp%2FEcFQNA9uMhC8p88yeeUH6mJseoGNPAQyvvtmziNW02i%2B8fvd2AI6oX3gz6fe4gpY3XSznLE%2FYAXnNqEbdY5d7aPTFR%2B4Hg%2BVdPjES3X48Na7dCh2NBADWzKShrOLgN3VMRzjxwPT%2BLYLGVts9mijhB3Fc3a72LR2syxdOqUjwDayy7wSqQ8k9MLRQhMhlHx6Ok4NRc3vLZLm8gp4WI%2FNVvu1NJtJFWJp1foBEkVyYwov3SyQY6pgHlpX1hSfCCrstbTpwsRThc%2BT0PkL8aofLkE3e%2FSKBrdOVEIx47VJiXskEMLhF90MMvzko%2FSnPWHxQSopuCfeW36HBAKPZqTpdVFnI7kkA4%2BGo%2BsG1f2AA0bG8tNQRfyma7ixXE5QuNHuGnLzt84wz0wZdaSr%2FJxuzplP7DojLXyzqjJA5MyAuOQpBo3Wq7FxPE%2F4DbknRigaDHRKhQ2jc87wFp3a5m&X-Amz-Signature=8b98f7525fe17f79f23b07041480be308d4bcdb77a8d48358a8a8b51ce4557e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
