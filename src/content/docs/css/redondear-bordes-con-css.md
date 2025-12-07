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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627LUWCU3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T215458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgWYV%2FhBhQ3hBDVkw7HDjGftns%2Fnw8KRPy%2FEY5hisLBwIgGBF2xHeaodRVyuC0yLWVkrerm1cW%2BPkdE6Iox48v%2F6IqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMfauZl3a%2BJbvPpg1CrcA4cR1pFK%2F1ZTQHvTyzXWv0efHjIIhu6Fwkr4oJSkh4TxLExqumqTmUzhn1CsD%2FcFYwnKel9h3XaX52OpYgirmT2Sjyttn%2B1pMtFFdb7P20uKO2DJxYD9uOy%2FrjYsdnTCIYNK8F1lejvC2T1TqObBbHEcBSEEftI5jW%2Ft12Bnh2HGhRTBgn%2BX5JKhTngMYZQoBnLjebSfSJF6f5X%2FlMijcLaecxD8cD%2BF4xqcrVq6400lG2fb9dDgTb7hRldUupocMfUZitjCyUApzP5kTG0EKn2wWRmeKWyN7kDHaUB1zZv5YfH%2BsRqP3e%2FO5BL54QfUATaMcWMEmCzmggp0%2FIdBh4dz7%2Ba1cmQvou3%2FUL3T%2FIzyZGTkfLUJS%2B2ow59ofobzu%2BvO4kcqb99p%2FDgJ8vitZHvzAJtnFqEkHJR9IrVpwcb8k%2FVcBvDqkkUjgiZ88GuS3IUGBrVwryGBo0xLeAo4eVFN4w9Ab6IAuFIMk88kVGK1wLKyL4%2FOpju4GD14SQWjWwra1Oj00iaEaeHu%2FkE%2F1jHbXVEdc7Dzxjq6hJLNGut7sqRcWyBjWEHXXHVNfpZFHIs0cKDX08QFXNJu6SjUYMl%2BvrHCq2DDyrmue9a8I4AGpys4HTl0BQ59pBxpMPTH18kGOqUBPx1fMFecej42JLN0k4giOumYVSvqKA4bgqFia%2FXeIixPdu6kE69GKVz0lXKRzEQJVN6zlCWRHe1TTEHP%2B%2FSXsKCSwr69EwF8qb%2FnyulpERd66VsnZP%2BVBXwLve7ZCAmiwx4uFeNAtdiA22a6uP49Sp%2BdH6MUKqZGGZsXwfuKTFTQF1eDyUYAmCnVXeNrnqfl6oHYGBjBJ%2B8uEDZAn0Ph3FJOdkCU&X-Amz-Signature=95dc946a44b6d1349fcc9d47acfce887178272983d2ae7febfec89a74e9e45d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627LUWCU3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T215458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgWYV%2FhBhQ3hBDVkw7HDjGftns%2Fnw8KRPy%2FEY5hisLBwIgGBF2xHeaodRVyuC0yLWVkrerm1cW%2BPkdE6Iox48v%2F6IqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMfauZl3a%2BJbvPpg1CrcA4cR1pFK%2F1ZTQHvTyzXWv0efHjIIhu6Fwkr4oJSkh4TxLExqumqTmUzhn1CsD%2FcFYwnKel9h3XaX52OpYgirmT2Sjyttn%2B1pMtFFdb7P20uKO2DJxYD9uOy%2FrjYsdnTCIYNK8F1lejvC2T1TqObBbHEcBSEEftI5jW%2Ft12Bnh2HGhRTBgn%2BX5JKhTngMYZQoBnLjebSfSJF6f5X%2FlMijcLaecxD8cD%2BF4xqcrVq6400lG2fb9dDgTb7hRldUupocMfUZitjCyUApzP5kTG0EKn2wWRmeKWyN7kDHaUB1zZv5YfH%2BsRqP3e%2FO5BL54QfUATaMcWMEmCzmggp0%2FIdBh4dz7%2Ba1cmQvou3%2FUL3T%2FIzyZGTkfLUJS%2B2ow59ofobzu%2BvO4kcqb99p%2FDgJ8vitZHvzAJtnFqEkHJR9IrVpwcb8k%2FVcBvDqkkUjgiZ88GuS3IUGBrVwryGBo0xLeAo4eVFN4w9Ab6IAuFIMk88kVGK1wLKyL4%2FOpju4GD14SQWjWwra1Oj00iaEaeHu%2FkE%2F1jHbXVEdc7Dzxjq6hJLNGut7sqRcWyBjWEHXXHVNfpZFHIs0cKDX08QFXNJu6SjUYMl%2BvrHCq2DDyrmue9a8I4AGpys4HTl0BQ59pBxpMPTH18kGOqUBPx1fMFecej42JLN0k4giOumYVSvqKA4bgqFia%2FXeIixPdu6kE69GKVz0lXKRzEQJVN6zlCWRHe1TTEHP%2B%2FSXsKCSwr69EwF8qb%2FnyulpERd66VsnZP%2BVBXwLve7ZCAmiwx4uFeNAtdiA22a6uP49Sp%2BdH6MUKqZGGZsXwfuKTFTQF1eDyUYAmCnVXeNrnqfl6oHYGBjBJ%2B8uEDZAn0Ph3FJOdkCU&X-Amz-Signature=de9ef0391a5c13c895631011bbeed6481294c3b2812ff4dc62c96aa7b9db3655&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
