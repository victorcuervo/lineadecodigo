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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VZEMU3Q%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T071923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlJzuVHZNbnO8Ih9c2J5l3YnI5b1KELjje5%2B%2BW9qlqwAiBNcAptiy%2FdZl7RKAJiJxWFKwnvYGnyfA71R4frD0I4ZyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhARilOmcSZ2fMzRbKtwDWKtBT46q0PnzpvzpomeWTU06SghoxRFATexHV0E%2Fjkng3bmjPw73etD5lYHr7nH%2BOEGnm4hHJMKM6tkpDtoexbK19n0P8o%2BD94cjZ4z0IoA4NlOCBhopaWWkyPFhugkwpLQEeQK27ZD3eJys0aHSYiB%2B31loNjTgXdd3Qro2hINDPAkzaC7uFr2MyqRb1Zy%2BGYTl4iB0Y0lFhLR%2FZPUFjpLHlA99OGvh2ZxOOF7aHYjnQu21lHu7f6Pvr%2BYZSt1WQ6%2BAy7dVL86H68EDxjQJBoxqwlKwrRKcCP33yYOruhze70D%2BNOcSJdMsY%2FaiyU3ERE6qIuUpu2pDcnChEL%2BvwyrxGLiKcAz7k%2BYpSAYmGRc%2FFtqFqfl26lTzOCivgt5Prvo2yV7MAG3gkpZbABVDcKgbw%2B5Lyt5657%2FL4rq5zvKDAclSn1FnW3NJq9ysSfhwR%2Fy3beXbpcXreM3jfcqdGxHG2W70ptNAeAXAsuFX3HmClNjJOAb%2Fnp1BURma%2BDHXKj3b9SWNNiCVEq153sAMGdkehKaJ1XMQoUrAh8PImIxmP8ckHJb6GWlX%2B%2BNopyWDwp7kGduhk2Pr1bSHFYXv0pt%2FqBDTiJKReAHyXJnwmsGi1yYKJ3V6hhUoypQw9e3ZyQY6pgHbABErDO%2FFkJ4xsFLvEZbUJthtNVe8%2Bfb3uF00pmfBK3sx3cx0ykFBYQQEg3M7JQYtOF3Ur8Lvuox%2Bt0Ih3kGc1uYBk7p%2Bk6TO1HrGT1ryJqtyGOIdYoG3d7vfuaoTuuZuzCrA09iaiRgImgmP1QnCGYnj7LUdKZ2mTyO8W5%2FRgQUe20e8JB9%2BuNAHUxpgvgU5AOOXBMVoPLLmOeuOz3nme5Zumc%2BY&X-Amz-Signature=87f02806f5587558b36e475f49fb698b1bad5f557173f1cdfbc0ead7525e47f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VZEMU3Q%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T071923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlJzuVHZNbnO8Ih9c2J5l3YnI5b1KELjje5%2B%2BW9qlqwAiBNcAptiy%2FdZl7RKAJiJxWFKwnvYGnyfA71R4frD0I4ZyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhARilOmcSZ2fMzRbKtwDWKtBT46q0PnzpvzpomeWTU06SghoxRFATexHV0E%2Fjkng3bmjPw73etD5lYHr7nH%2BOEGnm4hHJMKM6tkpDtoexbK19n0P8o%2BD94cjZ4z0IoA4NlOCBhopaWWkyPFhugkwpLQEeQK27ZD3eJys0aHSYiB%2B31loNjTgXdd3Qro2hINDPAkzaC7uFr2MyqRb1Zy%2BGYTl4iB0Y0lFhLR%2FZPUFjpLHlA99OGvh2ZxOOF7aHYjnQu21lHu7f6Pvr%2BYZSt1WQ6%2BAy7dVL86H68EDxjQJBoxqwlKwrRKcCP33yYOruhze70D%2BNOcSJdMsY%2FaiyU3ERE6qIuUpu2pDcnChEL%2BvwyrxGLiKcAz7k%2BYpSAYmGRc%2FFtqFqfl26lTzOCivgt5Prvo2yV7MAG3gkpZbABVDcKgbw%2B5Lyt5657%2FL4rq5zvKDAclSn1FnW3NJq9ysSfhwR%2Fy3beXbpcXreM3jfcqdGxHG2W70ptNAeAXAsuFX3HmClNjJOAb%2Fnp1BURma%2BDHXKj3b9SWNNiCVEq153sAMGdkehKaJ1XMQoUrAh8PImIxmP8ckHJb6GWlX%2B%2BNopyWDwp7kGduhk2Pr1bSHFYXv0pt%2FqBDTiJKReAHyXJnwmsGi1yYKJ3V6hhUoypQw9e3ZyQY6pgHbABErDO%2FFkJ4xsFLvEZbUJthtNVe8%2Bfb3uF00pmfBK3sx3cx0ykFBYQQEg3M7JQYtOF3Ur8Lvuox%2Bt0Ih3kGc1uYBk7p%2Bk6TO1HrGT1ryJqtyGOIdYoG3d7vfuaoTuuZuzCrA09iaiRgImgmP1QnCGYnj7LUdKZ2mTyO8W5%2FRgQUe20e8JB9%2BuNAHUxpgvgU5AOOXBMVoPLLmOeuOz3nme5Zumc%2BY&X-Amz-Signature=45b7b12f6d7eefe1726793a779dd70a6eff34f162b7e3255d73f10bbc565d5e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
