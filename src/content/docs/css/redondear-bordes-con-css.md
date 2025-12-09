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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IKEZQM3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T032756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4mYfnWJQAA0i0dOz7sVuPD7vO66PdBAw2ntBG%2FtdCmAiA4lpHa9MLYglAtwlxlgFsnlbkQpylPxAH7ZiYR%2BYZVJyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIR%2BTiQe2uG7krVMQKtwDMDHX5789O5zJpIS7YJl4I7rm3R0ca7Zzzy73r8Qs%2BEclKs8hS6L%2F0XSHMGEFBFWpg%2Fm%2FY5Oe21U5UQps2bQs1gmH6VB7DT53nrkoRZJNB9cRhQajl4Ri%2BMnTgKrFjt0LsuZe86rlraJzWutH%2BRGolHMWSXpgPqco7mo%2FLHaeu2bbg5iLeod5%2BL6tdj%2FGgNVZm6hdZrP%2FFMtPiTGRe4WAv15QLqQkOAqoFG136aGyE8u32IcUe%2FX0EdIcxxaDgxhg8Ip2FOd8AwgWQA6AcYU%2BYktK1tJ6QGLCRBqFOhNLOj7PVd96qrCh34IrRkkWTVcw0xC1UIBi0kwuqYCyFahD3NYcMSV5WXFrlQJKSPbEt%2ByGngIjP3D%2FhaDAtzCD7mOWoJ2rzIUpjm0VVuTKpMXBqX2n2OP1BzEoxFGPK00W%2BN8zhGtzUgsUJLWaL2AjTuJDp7kJsmN%2F2lcZqTq355FeXCacd5xYOmh%2F4Q27IjoLKyak%2BKuwiVSXUlGizQPiWDctdpPfwc%2BmtC1XR0s8yLwGW2a503v%2FtvnIC4tx3495zW7Npvd%2Bo%2BkX%2FtT7Q7JPwn%2Fl%2F6eBaoHBBomMGF4DhWhSTyR2mk4BWIqWtX3XHz9AmAkWv4UPMuWNZ1A1Fbowv5DeyQY6pgEHKU%2FKqoXi8Osx2OyIim0bGwQD%2BR99%2FDix4Ztf9wGe73q3UzUdpLHGXmhEsWpg5948FwdJxWwt8amgv6i1ooIFFraVBZXzX75sHB2gQi0WtH%2Bu0rBaebEZuhIUDrZqzGdgdO6iugmzitnkZdTykLN2gF1rxeNBRo5ks8eXLgN5YjutgNCA2gEn6jm1Z4fIXa3G6cqpS%2BoHCYkdQJ500oXWmQo9MeYS&X-Amz-Signature=a99a186fbee4eca4d58884791d246226ead47d0e3fa7fd21171d5a3ec33f4e59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IKEZQM3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T032756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4mYfnWJQAA0i0dOz7sVuPD7vO66PdBAw2ntBG%2FtdCmAiA4lpHa9MLYglAtwlxlgFsnlbkQpylPxAH7ZiYR%2BYZVJyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIR%2BTiQe2uG7krVMQKtwDMDHX5789O5zJpIS7YJl4I7rm3R0ca7Zzzy73r8Qs%2BEclKs8hS6L%2F0XSHMGEFBFWpg%2Fm%2FY5Oe21U5UQps2bQs1gmH6VB7DT53nrkoRZJNB9cRhQajl4Ri%2BMnTgKrFjt0LsuZe86rlraJzWutH%2BRGolHMWSXpgPqco7mo%2FLHaeu2bbg5iLeod5%2BL6tdj%2FGgNVZm6hdZrP%2FFMtPiTGRe4WAv15QLqQkOAqoFG136aGyE8u32IcUe%2FX0EdIcxxaDgxhg8Ip2FOd8AwgWQA6AcYU%2BYktK1tJ6QGLCRBqFOhNLOj7PVd96qrCh34IrRkkWTVcw0xC1UIBi0kwuqYCyFahD3NYcMSV5WXFrlQJKSPbEt%2ByGngIjP3D%2FhaDAtzCD7mOWoJ2rzIUpjm0VVuTKpMXBqX2n2OP1BzEoxFGPK00W%2BN8zhGtzUgsUJLWaL2AjTuJDp7kJsmN%2F2lcZqTq355FeXCacd5xYOmh%2F4Q27IjoLKyak%2BKuwiVSXUlGizQPiWDctdpPfwc%2BmtC1XR0s8yLwGW2a503v%2FtvnIC4tx3495zW7Npvd%2Bo%2BkX%2FtT7Q7JPwn%2Fl%2F6eBaoHBBomMGF4DhWhSTyR2mk4BWIqWtX3XHz9AmAkWv4UPMuWNZ1A1Fbowv5DeyQY6pgEHKU%2FKqoXi8Osx2OyIim0bGwQD%2BR99%2FDix4Ztf9wGe73q3UzUdpLHGXmhEsWpg5948FwdJxWwt8amgv6i1ooIFFraVBZXzX75sHB2gQi0WtH%2Bu0rBaebEZuhIUDrZqzGdgdO6iugmzitnkZdTykLN2gF1rxeNBRo5ks8eXLgN5YjutgNCA2gEn6jm1Z4fIXa3G6cqpS%2BoHCYkdQJ500oXWmQo9MeYS&X-Amz-Signature=4663dd0e0de0013f575aef22cdf0b53927f14864232f1510af5364753120ae02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
