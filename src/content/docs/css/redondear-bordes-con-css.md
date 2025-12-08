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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJFQ45ZH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T195527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC71mND5dhgnsV%2BN9PpLzz5QsbyzdalN%2ByTHa%2FPT5A6bQIhAL1q5b%2FHs4wzKv8qEkiBukaX1Y143aSNC1j9D040KlTsKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJThTvawc6VlNhmQwq3AMaJjWYStz4A5%2FT20LRExPWjuHSPcLgrIzgBmA7LPor3mLdye0Vt%2Bd301dXOBPQRf1CLT3aCfasAZLFvBRgExLXeJJ07%2F9MTdnHO8waYamUAT8SglPvAGJPPdeUEm5co0ZyKO5j0yP5g8EQFyM3e%2FEnQ3dHEBJY1buJVA1tIS8jXBpbr5XT9wwx%2BipzsR%2FZaY%2FvyQhk0n9R1KAgdxZrt71i2yVddnc7TtGl3KoxqwBPaqZ1QcYcqFpa7eTPFcsL7Imq7zbPUnSujz3X0KZ9tiQqFmN97sjuYczfUGE3HslFciJMaLvYYot%2F%2Bb83O6NZRrPR7%2FMgraTkDpn%2FxY6%2FP79UdVoGm80IK2c9YupFyrrFSx%2BDBI6cb948KfN%2FEAJsYzzdtHi80neKk8Y1DB0Q6r38s3gHU4KZclPaxYNVhsQkHXFsOxR%2BK%2BO5KZczY%2BPG22yRaFSmexkEX7HQp2ZyntIHSsCjV1rR9Jq9tUWBTF9rOeW7O6zjQGpBt%2B6DerilfYNnckFdajdNGzMnAEQfQn6sSXZyMFCVNPv3kt5LzEojlg2qgUG7GcKS2vZgXsrC%2Fln60RW1BjZYiXYeeJ4L%2BC4R5q8G5f6DsZcCLXo%2BDYBtk8yjJmngAkUa2%2FDNdjCgtNzJBjqkAbre%2BAdisg%2BLu740rNTSs2C16sYD34o%2FNci4RlWIfAWKOuLzDdIHwzhE70iqmvYZvfgzf03mX%2F5oLIUA38QpgKJ4x3PUlUcFuNTN68bu8e0RBEmStqWrQEE82lMsF9FyYkpTLhYJzJKNepoIbBg2m3GJW7gmb0ZbyN5hhnGXBwwmfFsND5b0RtCQ86CUFZkeyPWCtmYoMktbhUvmQetv3D%2FBkv4F&X-Amz-Signature=a63b5da03d95bc36798a22c9dcac796d6dafe11487162a31e6dcfa4c460539c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJFQ45ZH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T195527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC71mND5dhgnsV%2BN9PpLzz5QsbyzdalN%2ByTHa%2FPT5A6bQIhAL1q5b%2FHs4wzKv8qEkiBukaX1Y143aSNC1j9D040KlTsKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJThTvawc6VlNhmQwq3AMaJjWYStz4A5%2FT20LRExPWjuHSPcLgrIzgBmA7LPor3mLdye0Vt%2Bd301dXOBPQRf1CLT3aCfasAZLFvBRgExLXeJJ07%2F9MTdnHO8waYamUAT8SglPvAGJPPdeUEm5co0ZyKO5j0yP5g8EQFyM3e%2FEnQ3dHEBJY1buJVA1tIS8jXBpbr5XT9wwx%2BipzsR%2FZaY%2FvyQhk0n9R1KAgdxZrt71i2yVddnc7TtGl3KoxqwBPaqZ1QcYcqFpa7eTPFcsL7Imq7zbPUnSujz3X0KZ9tiQqFmN97sjuYczfUGE3HslFciJMaLvYYot%2F%2Bb83O6NZRrPR7%2FMgraTkDpn%2FxY6%2FP79UdVoGm80IK2c9YupFyrrFSx%2BDBI6cb948KfN%2FEAJsYzzdtHi80neKk8Y1DB0Q6r38s3gHU4KZclPaxYNVhsQkHXFsOxR%2BK%2BO5KZczY%2BPG22yRaFSmexkEX7HQp2ZyntIHSsCjV1rR9Jq9tUWBTF9rOeW7O6zjQGpBt%2B6DerilfYNnckFdajdNGzMnAEQfQn6sSXZyMFCVNPv3kt5LzEojlg2qgUG7GcKS2vZgXsrC%2Fln60RW1BjZYiXYeeJ4L%2BC4R5q8G5f6DsZcCLXo%2BDYBtk8yjJmngAkUa2%2FDNdjCgtNzJBjqkAbre%2BAdisg%2BLu740rNTSs2C16sYD34o%2FNci4RlWIfAWKOuLzDdIHwzhE70iqmvYZvfgzf03mX%2F5oLIUA38QpgKJ4x3PUlUcFuNTN68bu8e0RBEmStqWrQEE82lMsF9FyYkpTLhYJzJKNepoIbBg2m3GJW7gmb0ZbyN5hhnGXBwwmfFsND5b0RtCQ86CUFZkeyPWCtmYoMktbhUvmQetv3D%2FBkv4F&X-Amz-Signature=3de18c76ce92f82ce3be42202ed5876a41f0f5562bf98b3fddb6c68da8ce00e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
