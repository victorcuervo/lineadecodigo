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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EFJPZYL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T061156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7PR7oMLrQnXv%2BZBAlQUDz5P1ZHEmHygUffDBo6Zx4xQIgT1c23Ai7nKG6NwVkUBOu2ogIjg1uxczHXaGH21he7HUqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFBld272QFjLc1S4CrcA2Fw3efDxiXDPZyDyQGKMRfucdJerc91AJGjrAG1zgJzsJmhcxNLFaEq%2BeHFS%2BM7J3MPsb4FQopcc3qJbJKLVDiNuA3SNBtyaeBgQCCcF5Dvc1qmFXgkTmcIwffZbsHJEg52APWqOPzXazbze566PNqYt6ksROdkPlIG7evKAXkZMbnaLXC94bbWO83RH14Dzt5yj4nq6LwvYETVz1gQ3RBN%2FcBlMJtxyb9%2BmtZ9EunbswrcZ1EYddc8rmHMATJQVdjShM7Gqt4MT6RdZVvd9piXEAeHKc19qEdFCbEcpnb6uQ2%2B%2FUqrp1dHDkK%2BslL31INfx4UjSnr1Ye8VU7udzPQb68hRYLo1ubICYmty1CSLW8EUcuXDQ5BVin7v5ieZLvcXmFeFL9j67Pmy%2FiSLmiaeYMRfVdAYo%2Bfka86T42pidHDxq%2FPoVGpFtoqNY9N%2FjrVf1f2FiirsZ7DQptBi16bAj0qJbyvoJJYx2tJJzr0dtBYaHW8mZVT4zXn%2Brn2luGWULR2Fx5Pb7YCyYYxhvQl8Z4iUjoDm70eQysa8eeunA4oRyCaJKRNoykYcgYdmDSEMOdDcwdlAhw3bu9thfSUQpxZPFlyeJGs8nZDN8EJQ7Qfcbf35hW2SmE1PMLnQ2ckGOqUBrDvVZxfRsUzfRojLlcIy9uL1Q7PQFqHf6yJnljvWslPTBOeOeIbWhBjA6nGs8fuDA7xia1BJycvuG%2BrVCgWZmEmTs2D0aQtsskMpLKpn%2BNXD1DJEN0NgE6mMPu8ghRgCqKHBTCNfYX2dAlo85qmiUYvl1aHpy%2BH%2BCp2ATmOV9x6xnXhTB7%2F8UIvb3NkHWaJqh6Yx2n6ld5ifSIYlWBNvrw6kduKL&X-Amz-Signature=b098f7e116272cfd2e2c934e40eb02ad399f78e3d3ac3b68868e58edca144e75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EFJPZYL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T061156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7PR7oMLrQnXv%2BZBAlQUDz5P1ZHEmHygUffDBo6Zx4xQIgT1c23Ai7nKG6NwVkUBOu2ogIjg1uxczHXaGH21he7HUqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFBld272QFjLc1S4CrcA2Fw3efDxiXDPZyDyQGKMRfucdJerc91AJGjrAG1zgJzsJmhcxNLFaEq%2BeHFS%2BM7J3MPsb4FQopcc3qJbJKLVDiNuA3SNBtyaeBgQCCcF5Dvc1qmFXgkTmcIwffZbsHJEg52APWqOPzXazbze566PNqYt6ksROdkPlIG7evKAXkZMbnaLXC94bbWO83RH14Dzt5yj4nq6LwvYETVz1gQ3RBN%2FcBlMJtxyb9%2BmtZ9EunbswrcZ1EYddc8rmHMATJQVdjShM7Gqt4MT6RdZVvd9piXEAeHKc19qEdFCbEcpnb6uQ2%2B%2FUqrp1dHDkK%2BslL31INfx4UjSnr1Ye8VU7udzPQb68hRYLo1ubICYmty1CSLW8EUcuXDQ5BVin7v5ieZLvcXmFeFL9j67Pmy%2FiSLmiaeYMRfVdAYo%2Bfka86T42pidHDxq%2FPoVGpFtoqNY9N%2FjrVf1f2FiirsZ7DQptBi16bAj0qJbyvoJJYx2tJJzr0dtBYaHW8mZVT4zXn%2Brn2luGWULR2Fx5Pb7YCyYYxhvQl8Z4iUjoDm70eQysa8eeunA4oRyCaJKRNoykYcgYdmDSEMOdDcwdlAhw3bu9thfSUQpxZPFlyeJGs8nZDN8EJQ7Qfcbf35hW2SmE1PMLnQ2ckGOqUBrDvVZxfRsUzfRojLlcIy9uL1Q7PQFqHf6yJnljvWslPTBOeOeIbWhBjA6nGs8fuDA7xia1BJycvuG%2BrVCgWZmEmTs2D0aQtsskMpLKpn%2BNXD1DJEN0NgE6mMPu8ghRgCqKHBTCNfYX2dAlo85qmiUYvl1aHpy%2BH%2BCp2ATmOV9x6xnXhTB7%2F8UIvb3NkHWaJqh6Yx2n6ld5ifSIYlWBNvrw6kduKL&X-Amz-Signature=18d419ce92b8c9a112e7f3cca19631795d965fc4039ab04a56734a50ff1a5665&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
