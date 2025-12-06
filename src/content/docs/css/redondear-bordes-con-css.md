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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XAL3ZWV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T102917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKM4NbQjzlNRYDN0oWL%2Fj2Thzu4PkKVCVo%2FLZ0kkIDlgIhAOTQycPlbndzc20%2Bi71f5quNPSjjmua46200TmJPszRyKv8DCHQQABoMNjM3NDIzMTgzODA1IgzlN%2BGtYElu8FkjdkMq3AP4%2BVnam5tWwfqND5LRfatq0bE1L5zx9tYz6AGHPjifdEGU8of78uhRz83gqHH%2FJLK%2BS5ltLoOF5YBHEpUVprJjLFTh4EmdVN0jKyh%2FJviaGpuGSZ1zADz3Y1uixP%2FTA7%2BScfa1%2BF4H9aTM%2F%2FKvMjEIFuyCJXSq%2F8BAq%2FoLHzt7EsqkXEMBohsyDejGw76XI4YM1NnErPhL9FLXiwV93zF1CkM4kWP4OiLX4TQ7P97KRoGQ%2B8UV9X0HRgUICkAZM5hbtzVVsTynWgVy5Ip6xv1mZv3mRsn1TO33kLcZlts%2Fkdv96UZSXSBGz6gRacxKia2%2BIuOYLBZvLQkghf%2F2RITeaTJtEW5CB33BzegzQ5Dw8OC8fpsPnD2SFJFpZsUijvYONWtpFvAU1qQwG6Z73bSyVaiBCajnFQyPKw7tqXhQWVAFPrjKArLJKrVzv3P1tL1SG2BxkZC1E0MenfcLmAyBQp4Yy15hEQ0NubDYjzaWr4LgtS1x%2B98skh%2BGQ0GL5OilpX65bnoliPLm84yjueKtUv0Xccc5snsuFM%2B7MpDsk56sUyy67Be1y24rQLzUqLemiqvdzItVsbC25pLC4kGWtqmkxk3ZmmI2LWSJOiJH7pzgj50UJlR%2FTaNQsTCPidDJBjqkAdff9SF5iuvSDizBk9dqL1XA50K41mfqw5sxV0gfwd%2BoQ7GZfEBN30KJWrAfcHjXeXtR1Dc5t%2Fzuq8UNfT4kfLZ5F0D8WmGSrEpbD5Y3JeymIvp3Xm9OeBlYveuE5TxQ%2Ba10pzjj9KX0fGA7gPGKIDvuaLrCaQLiPyFAR2nlVUM2Scdz4uj1x31rG%2F%2Bsk5lnNgfd5Wm4UYkCuWsTvwfzvGkO2VQm&X-Amz-Signature=8fdd88be2335d76ad2060a0bc85462597186bb2d15594cb4af93ea1767d82077&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XAL3ZWV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T102917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKM4NbQjzlNRYDN0oWL%2Fj2Thzu4PkKVCVo%2FLZ0kkIDlgIhAOTQycPlbndzc20%2Bi71f5quNPSjjmua46200TmJPszRyKv8DCHQQABoMNjM3NDIzMTgzODA1IgzlN%2BGtYElu8FkjdkMq3AP4%2BVnam5tWwfqND5LRfatq0bE1L5zx9tYz6AGHPjifdEGU8of78uhRz83gqHH%2FJLK%2BS5ltLoOF5YBHEpUVprJjLFTh4EmdVN0jKyh%2FJviaGpuGSZ1zADz3Y1uixP%2FTA7%2BScfa1%2BF4H9aTM%2F%2FKvMjEIFuyCJXSq%2F8BAq%2FoLHzt7EsqkXEMBohsyDejGw76XI4YM1NnErPhL9FLXiwV93zF1CkM4kWP4OiLX4TQ7P97KRoGQ%2B8UV9X0HRgUICkAZM5hbtzVVsTynWgVy5Ip6xv1mZv3mRsn1TO33kLcZlts%2Fkdv96UZSXSBGz6gRacxKia2%2BIuOYLBZvLQkghf%2F2RITeaTJtEW5CB33BzegzQ5Dw8OC8fpsPnD2SFJFpZsUijvYONWtpFvAU1qQwG6Z73bSyVaiBCajnFQyPKw7tqXhQWVAFPrjKArLJKrVzv3P1tL1SG2BxkZC1E0MenfcLmAyBQp4Yy15hEQ0NubDYjzaWr4LgtS1x%2B98skh%2BGQ0GL5OilpX65bnoliPLm84yjueKtUv0Xccc5snsuFM%2B7MpDsk56sUyy67Be1y24rQLzUqLemiqvdzItVsbC25pLC4kGWtqmkxk3ZmmI2LWSJOiJH7pzgj50UJlR%2FTaNQsTCPidDJBjqkAdff9SF5iuvSDizBk9dqL1XA50K41mfqw5sxV0gfwd%2BoQ7GZfEBN30KJWrAfcHjXeXtR1Dc5t%2Fzuq8UNfT4kfLZ5F0D8WmGSrEpbD5Y3JeymIvp3Xm9OeBlYveuE5TxQ%2Ba10pzjj9KX0fGA7gPGKIDvuaLrCaQLiPyFAR2nlVUM2Scdz4uj1x31rG%2F%2Bsk5lnNgfd5Wm4UYkCuWsTvwfzvGkO2VQm&X-Amz-Signature=dd22f65ed2dfd8046acc530ab78a2f266306ffccb01e6a77b2989d56bb917747&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
