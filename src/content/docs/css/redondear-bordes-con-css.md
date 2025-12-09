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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLPNIGDG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T034817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGrVbUfH5tofWxmCq9Ueli6ygFyb7k8PfAGzVf4WdGM0AiBrpp8WpygCcG4UW55uaHmyeWWqttDkG3%2FgJTq64Ksr2yqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5PIPgjoLdoTel4QhKtwDrePkuW%2BkDe1aELy8y16Y8iDceav%2BsUnVCV%2FgKAh32e%2FDkm1SXIuBGNx%2BjtE6Eca8%2Bs3aufYJJEVM45yR9NnCxr%2BadD7VtobkvSwH97K7uTcKhp2FVuFsY8YOvZirPFm7sgT7mn7y9KQ8YrNsLAfE6BtUBp3vhy09pXx9PH7ETx2aYAWW%2FR%2FW8RjHCypfM3i4y5i%2Flzr%2F0XTE%2B0VnkXULTBJv6JDmI%2Fvvt%2BTkJ2AotxNylR%2FrhvgwEzB1ZwCdhY7ALDDVuwGa3Jil47PEsAJuyF5IDDLJUqFmVaFBQIwt3bTs0p7HEh9Jhx4uW%2FlNHckIkmS66Dw%2BRby0dPLsMweKMp9WsAyPdTm9HtX8v%2FSpTM13krg39XcW1jtZQVYOH3nxztIpqo%2FzsKP%2FihVMEIUPtTGFmxwTbT6XuvQ%2BRODj5MDG7BUT6xSTMwqbVG5Hm2K2I3Ptuit8mZTEXZpf%2B%2FG8M%2FtfUaNkRjZUt8%2FdOJ8QVo3Ln7t1iQhT5jej9x%2F710xbsWTJKYSORA1krK7oXd%2BgE%2FBh4vFcVIYk%2FsQf1n8phUIyRjcz2aHS14YxUdkG24XTYyr5taSnQ4FvCeprtEiXcb7utr4fA4C2bMNfv%2FJrAv6fKu%2BCSO3n8IWcOu4wx63eyQY6pgGILhQvH%2Fr5XLeBYvWW43nDhwEcwrbcZrWzIy0AIay0Xvf0NA%2B0ALWOXtgjU%2FB8RFCS9ABkDwpa993ZT8WMvT%2FXb7COk6l3b4XdH5yxwPW0R0YaH4XVufb0t8yRlhP%2FQzVPM%2BqhLd9otKPd46CT7N4dAubIKwaM99G2Bgo4XFGqR8QKNAJvectLy4%2BO5%2FPWAKZTsh7k3qaGYYMTN1rMdC%2F7R1UtYkj%2B&X-Amz-Signature=4fc3b23e55d8b8f0382138bf911972fbba5976a4081858a8e57a569a769543a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLPNIGDG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T034817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGrVbUfH5tofWxmCq9Ueli6ygFyb7k8PfAGzVf4WdGM0AiBrpp8WpygCcG4UW55uaHmyeWWqttDkG3%2FgJTq64Ksr2yqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5PIPgjoLdoTel4QhKtwDrePkuW%2BkDe1aELy8y16Y8iDceav%2BsUnVCV%2FgKAh32e%2FDkm1SXIuBGNx%2BjtE6Eca8%2Bs3aufYJJEVM45yR9NnCxr%2BadD7VtobkvSwH97K7uTcKhp2FVuFsY8YOvZirPFm7sgT7mn7y9KQ8YrNsLAfE6BtUBp3vhy09pXx9PH7ETx2aYAWW%2FR%2FW8RjHCypfM3i4y5i%2Flzr%2F0XTE%2B0VnkXULTBJv6JDmI%2Fvvt%2BTkJ2AotxNylR%2FrhvgwEzB1ZwCdhY7ALDDVuwGa3Jil47PEsAJuyF5IDDLJUqFmVaFBQIwt3bTs0p7HEh9Jhx4uW%2FlNHckIkmS66Dw%2BRby0dPLsMweKMp9WsAyPdTm9HtX8v%2FSpTM13krg39XcW1jtZQVYOH3nxztIpqo%2FzsKP%2FihVMEIUPtTGFmxwTbT6XuvQ%2BRODj5MDG7BUT6xSTMwqbVG5Hm2K2I3Ptuit8mZTEXZpf%2B%2FG8M%2FtfUaNkRjZUt8%2FdOJ8QVo3Ln7t1iQhT5jej9x%2F710xbsWTJKYSORA1krK7oXd%2BgE%2FBh4vFcVIYk%2FsQf1n8phUIyRjcz2aHS14YxUdkG24XTYyr5taSnQ4FvCeprtEiXcb7utr4fA4C2bMNfv%2FJrAv6fKu%2BCSO3n8IWcOu4wx63eyQY6pgGILhQvH%2Fr5XLeBYvWW43nDhwEcwrbcZrWzIy0AIay0Xvf0NA%2B0ALWOXtgjU%2FB8RFCS9ABkDwpa993ZT8WMvT%2FXb7COk6l3b4XdH5yxwPW0R0YaH4XVufb0t8yRlhP%2FQzVPM%2BqhLd9otKPd46CT7N4dAubIKwaM99G2Bgo4XFGqR8QKNAJvectLy4%2BO5%2FPWAKZTsh7k3qaGYYMTN1rMdC%2F7R1UtYkj%2B&X-Amz-Signature=72d7b6f3256778ebbb4844cb4b2b12eb0058a1060e48c76a2854f1298aa31121&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
