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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTPO3RQO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T094500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdiJx03CHW9eIjnL8UorYqQwTllci%2FAeTVWG9U57oWewIhAIn3kx%2BTOp5Eqtz94uDTitVjByJ3%2BY6kCNRs%2BTPq7Y9RKv8DCHIQABoMNjM3NDIzMTgzODA1IgwuINjK%2BldGRFFLucgq3AOVj2oUTmhrl5ZeK3SI%2FfSSKqM9d6RJoeEuSzD8twgaiRzQMUhXWmW9W9380huiKOxqtq%2Bzey2OX3h1WAFlQ3DDFkD2BGSWsmVVv2Yh9V4aNk3PNXq%2Fg%2FcSFMufzInGaWNBfEkg3K%2FDaeXW3qSPM9l81Pqp9UPHcWu7KvFoJt%2FUZmoXGHSmUFtmSbfz1IvLNJhe0CRRuQ6zcW7WIo5wMwwPxJBIHj5NxHA1a3lIiKmRlEZf6EoYgI0o3SMYWVnuDQ2Mu%2F1yzMg9uRA4pZBkF7boUx2w%2BdmX3Ny9NcovNKooBVuf2RVgvvqrqXLG%2BVlFuseYvJm14XkEapIIXBU9ibE3qX1fg2309Q9Yb%2BsNv32v8VxCcNNNdYmYA4FEwnpBDQ3kj2F74RjVPCx73G8nEE7htMrA3zhBR1kzksQdro7RUFLJe3A6AQxgwjD4%2FV5JDPx3l85Uq%2FD1FqRt8ZRkjdbZ%2BmkvonH6ZYOBaXJRIMQ0Q5g%2BEpFRpxpPz4WZMnzQ3hrT5azyILV8AEw1b02d8OR5KbPgG4oKqmSNgGuT%2FdM8rec%2B3TR%2Bb0AOIhuGkjN5jep04MkWjIdjGs8279F93D0DrzQPJSHa5VIXTE9LbIj%2BdouHg%2Ba%2BriziKcRUUTCu68%2FJBjqkAUCNHSFRdS9tHH1fPo5GiKQK3OhmWj8QvfZ3AWul5g2qKRjkWRjBkxZaNIvfXuu35UCpvuzCZS%2FPZuwCDQ0CET3upAQRQPJ6B3tivHMRwFmCdqVhp5%2FJkz%2BDwRBsnL2Pria%2BraFELEotYdDT7yUm%2Bonda4QfJ6buJuk3yn3MA23haLZfgH83ogIatac3oC2unzhbuOkVjSDmHLBy64gp1%2FcqNg5y&X-Amz-Signature=ea915c43e98a883270f75e030b366fab295a27ac30c779751a57707592ec9e4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTPO3RQO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T094500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdiJx03CHW9eIjnL8UorYqQwTllci%2FAeTVWG9U57oWewIhAIn3kx%2BTOp5Eqtz94uDTitVjByJ3%2BY6kCNRs%2BTPq7Y9RKv8DCHIQABoMNjM3NDIzMTgzODA1IgwuINjK%2BldGRFFLucgq3AOVj2oUTmhrl5ZeK3SI%2FfSSKqM9d6RJoeEuSzD8twgaiRzQMUhXWmW9W9380huiKOxqtq%2Bzey2OX3h1WAFlQ3DDFkD2BGSWsmVVv2Yh9V4aNk3PNXq%2Fg%2FcSFMufzInGaWNBfEkg3K%2FDaeXW3qSPM9l81Pqp9UPHcWu7KvFoJt%2FUZmoXGHSmUFtmSbfz1IvLNJhe0CRRuQ6zcW7WIo5wMwwPxJBIHj5NxHA1a3lIiKmRlEZf6EoYgI0o3SMYWVnuDQ2Mu%2F1yzMg9uRA4pZBkF7boUx2w%2BdmX3Ny9NcovNKooBVuf2RVgvvqrqXLG%2BVlFuseYvJm14XkEapIIXBU9ibE3qX1fg2309Q9Yb%2BsNv32v8VxCcNNNdYmYA4FEwnpBDQ3kj2F74RjVPCx73G8nEE7htMrA3zhBR1kzksQdro7RUFLJe3A6AQxgwjD4%2FV5JDPx3l85Uq%2FD1FqRt8ZRkjdbZ%2BmkvonH6ZYOBaXJRIMQ0Q5g%2BEpFRpxpPz4WZMnzQ3hrT5azyILV8AEw1b02d8OR5KbPgG4oKqmSNgGuT%2FdM8rec%2B3TR%2Bb0AOIhuGkjN5jep04MkWjIdjGs8279F93D0DrzQPJSHa5VIXTE9LbIj%2BdouHg%2Ba%2BriziKcRUUTCu68%2FJBjqkAUCNHSFRdS9tHH1fPo5GiKQK3OhmWj8QvfZ3AWul5g2qKRjkWRjBkxZaNIvfXuu35UCpvuzCZS%2FPZuwCDQ0CET3upAQRQPJ6B3tivHMRwFmCdqVhp5%2FJkz%2BDwRBsnL2Pria%2BraFELEotYdDT7yUm%2Bonda4QfJ6buJuk3yn3MA23haLZfgH83ogIatac3oC2unzhbuOkVjSDmHLBy64gp1%2FcqNg5y&X-Amz-Signature=9a9d09a11237e77321d28322dd12d81f039a5eade201570133128ecd574e10ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
