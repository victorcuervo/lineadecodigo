---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDTRWNDC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCnLO23ssNBzN%2BfqNoycNsWFaApGCUzstVQhF6VDuzvVAIgfYgkQgk9Bydb4GNwkjsqfKW8MMXHbJsp3OSM5Nrfq6Aq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDIc86vQe5wcawBODmircA%2B3fcIXoe5jzpToX1H%2FzbM0lXBL7q3FgqZCYGDhV7Sfkzt2IubdMwYLiLprYLOEqrHd%2FIFpFmBFHD%2B%2F3DaNCIPj6we9noie7%2FSt0K4JUt54zODEO%2Bn5n%2BW%2ByrZ5BGzK5h8isEqnR3vsn6KpWbE6xyee2iFMRrk0xWpBHkneYkSOEO1HM0o5IpzqEUIE14%2BlQ1XrYUc%2FNnaahzmmmw8tGUJWWhmTExvNJJyAb1JyQdlP4utYnDiZq8aNZhmUPQSjdXTPFuIPLxKzVnASa789%2BrM3AF8j6sTLOXhDQwswmuqGK%2FfJovSwF%2B9Tkkrj5i%2FZSdse%2BwaQwEItV6ssD2Qex1%2BKC7yAVkcLcuPNDeSw1FrgSTuGS3AaME%2BXKG3WpVCgUrPphf%2Fvx2eqqh3OlAPW%2Bf2qAC%2FvU9E9T74ZcpN%2FIRssHtw7dfZcAWWsmm%2FtkbI4apydNWNFXjbMcM7STzMtij38B4lCFx7tqvo4cG3vVgdD3pajBVcL1Nr%2FtSpehY%2BXxsWeHJiq7I2d9FlgxosYpxeiJLI%2BZDvfRebKXCriAFflovsnjkAKEYzxpfnF9tzEO8CXRRGxfchkU7gw1H%2BA43Bo%2FZNs%2BLK7O6r7Wp0BEXuZSkjV3jhMl0IrNzdlWMM6Uw8kGOqUBi4NzTfOo8xPS8NlgV91xcRYTEf880nuCCspLfQ2nPKdZ7Ub2saUO9bVZOP69aUgX1q59UopPVPCMZQVNWZOCnbMSs%2FSOmTf8x9nrtcfaLCYHEyE0NmO5xW0hciPr9Rl2PmJ9XOTTY%2BFKAgtiTjeIdH63HpKZXnEkoat88FeG%2BctK02PAfgsqFhq6KDpbS34ZG6cVWk1pqhQlBdGU%2BhWlK%2BGGGjem&X-Amz-Signature=01e906ee04ae0095bfb26c9b7a24786b3ee8a53060ad01fe18f667db9703d4fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDTRWNDC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCnLO23ssNBzN%2BfqNoycNsWFaApGCUzstVQhF6VDuzvVAIgfYgkQgk9Bydb4GNwkjsqfKW8MMXHbJsp3OSM5Nrfq6Aq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDIc86vQe5wcawBODmircA%2B3fcIXoe5jzpToX1H%2FzbM0lXBL7q3FgqZCYGDhV7Sfkzt2IubdMwYLiLprYLOEqrHd%2FIFpFmBFHD%2B%2F3DaNCIPj6we9noie7%2FSt0K4JUt54zODEO%2Bn5n%2BW%2ByrZ5BGzK5h8isEqnR3vsn6KpWbE6xyee2iFMRrk0xWpBHkneYkSOEO1HM0o5IpzqEUIE14%2BlQ1XrYUc%2FNnaahzmmmw8tGUJWWhmTExvNJJyAb1JyQdlP4utYnDiZq8aNZhmUPQSjdXTPFuIPLxKzVnASa789%2BrM3AF8j6sTLOXhDQwswmuqGK%2FfJovSwF%2B9Tkkrj5i%2FZSdse%2BwaQwEItV6ssD2Qex1%2BKC7yAVkcLcuPNDeSw1FrgSTuGS3AaME%2BXKG3WpVCgUrPphf%2Fvx2eqqh3OlAPW%2Bf2qAC%2FvU9E9T74ZcpN%2FIRssHtw7dfZcAWWsmm%2FtkbI4apydNWNFXjbMcM7STzMtij38B4lCFx7tqvo4cG3vVgdD3pajBVcL1Nr%2FtSpehY%2BXxsWeHJiq7I2d9FlgxosYpxeiJLI%2BZDvfRebKXCriAFflovsnjkAKEYzxpfnF9tzEO8CXRRGxfchkU7gw1H%2BA43Bo%2FZNs%2BLK7O6r7Wp0BEXuZSkjV3jhMl0IrNzdlWMM6Uw8kGOqUBi4NzTfOo8xPS8NlgV91xcRYTEf880nuCCspLfQ2nPKdZ7Ub2saUO9bVZOP69aUgX1q59UopPVPCMZQVNWZOCnbMSs%2FSOmTf8x9nrtcfaLCYHEyE0NmO5xW0hciPr9Rl2PmJ9XOTTY%2BFKAgtiTjeIdH63HpKZXnEkoat88FeG%2BctK02PAfgsqFhq6KDpbS34ZG6cVWk1pqhQlBdGU%2BhWlK%2BGGGjem&X-Amz-Signature=f082330205a0a5c1e6ab9f80bedee9f44619680994d615b8c3942a74116156ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
