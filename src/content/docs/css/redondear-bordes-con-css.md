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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNKN5BRD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T195824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAgUIUM4qN1WxnYnqfoYqAoTITgXLwtAT9%2BXKp9XKcLqAiEA7vKLPY3sEgJFCwcoV4tqig6wFkiEw%2FY4xlKl3rXCCF8qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGZyrjJvpFV5PcZVCrcA2qBC5XEsBCzp7NdhDkEt4yVShJlesvwYk%2FW%2BYbINZ7jfursxwjefwJHp4VbdRHYErRi3wLRd6cP9hIVcP%2F3cLZUaLy0QJbkWhPVpmoS2pQ%2BpY5ws6NnhFosrDiuBKoDq7FG9rbPiSDuhbOtYzKJzKl3hd%2FxtP8zj%2B1sjzbc0p39bfM4JpdR64umi2ZZBGWxn3kYlylahfL%2Bj%2FNIp0vhD9hwiTnIBgM%2B3iUvaGuAlsS6dBomcyk5XXxlb%2FG3fiLiOehfVsNrWdd%2FtMrtr90RFubiwkLlTNn20oOcPOQmhNF5qETmI2Lhql1uy0KKGsymI9GrjJRXuQqg1Ab7kWSOJvPkQFj2lmoPkNKJTBHz4Y0TyRsDqqQk3D8FvxLliVditxcO0y6hRs%2F%2BcQ%2FGSQsw04Zc9%2FbYrK9880xhpLsP5WaGFpTUG1u5KNXE9q%2BkkGK7g01QrNuO1fLVwrBtgK3oaa%2BgDnrWdL5Z9mHm6sD5JWhAPIxpws6DjrFowjDmHPXQgEayqJq3CUf96sIoZo600GLB4qriFg5wvu%2B7ctrbjQYtAzBjlwcz2V23%2BOSx%2FqQT7wh1DhjZRmGRiGWY%2B0G3WOSDb2bqFx12DTw9NBJlgrctLvhO1IS4Gj%2FDalIzMMKz3MkGOqUBcyaoI8bnH1K9IheMt5yRtqU25gaqSNGxN0jsPBEtwKoRiLUn19ezoABjXpd2j1v7hXBY3t4BUMdvjKOPk%2FOa3iHdGgH0VeSa5gbtvE0hwIQgjmhNHaeQnl5p%2BAHLdpaR2wcXLEVdrylwld%2By9hzlPIsH7nl4Yg%2B5M%2FAMdJtt%2FIEW3Or9AylOJOmSChZb5hjkvMzzC3qYxWJR0TBoMZf1dUG5%2BleU&X-Amz-Signature=33c4d9e87e0e2280f0abc4a9dbc8f5d6f23c052ecc4ce9fd0eb98ad76bd1881a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNKN5BRD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T195824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAgUIUM4qN1WxnYnqfoYqAoTITgXLwtAT9%2BXKp9XKcLqAiEA7vKLPY3sEgJFCwcoV4tqig6wFkiEw%2FY4xlKl3rXCCF8qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGZyrjJvpFV5PcZVCrcA2qBC5XEsBCzp7NdhDkEt4yVShJlesvwYk%2FW%2BYbINZ7jfursxwjefwJHp4VbdRHYErRi3wLRd6cP9hIVcP%2F3cLZUaLy0QJbkWhPVpmoS2pQ%2BpY5ws6NnhFosrDiuBKoDq7FG9rbPiSDuhbOtYzKJzKl3hd%2FxtP8zj%2B1sjzbc0p39bfM4JpdR64umi2ZZBGWxn3kYlylahfL%2Bj%2FNIp0vhD9hwiTnIBgM%2B3iUvaGuAlsS6dBomcyk5XXxlb%2FG3fiLiOehfVsNrWdd%2FtMrtr90RFubiwkLlTNn20oOcPOQmhNF5qETmI2Lhql1uy0KKGsymI9GrjJRXuQqg1Ab7kWSOJvPkQFj2lmoPkNKJTBHz4Y0TyRsDqqQk3D8FvxLliVditxcO0y6hRs%2F%2BcQ%2FGSQsw04Zc9%2FbYrK9880xhpLsP5WaGFpTUG1u5KNXE9q%2BkkGK7g01QrNuO1fLVwrBtgK3oaa%2BgDnrWdL5Z9mHm6sD5JWhAPIxpws6DjrFowjDmHPXQgEayqJq3CUf96sIoZo600GLB4qriFg5wvu%2B7ctrbjQYtAzBjlwcz2V23%2BOSx%2FqQT7wh1DhjZRmGRiGWY%2B0G3WOSDb2bqFx12DTw9NBJlgrctLvhO1IS4Gj%2FDalIzMMKz3MkGOqUBcyaoI8bnH1K9IheMt5yRtqU25gaqSNGxN0jsPBEtwKoRiLUn19ezoABjXpd2j1v7hXBY3t4BUMdvjKOPk%2FOa3iHdGgH0VeSa5gbtvE0hwIQgjmhNHaeQnl5p%2BAHLdpaR2wcXLEVdrylwld%2By9hzlPIsH7nl4Yg%2B5M%2FAMdJtt%2FIEW3Or9AylOJOmSChZb5hjkvMzzC3qYxWJR0TBoMZf1dUG5%2BleU&X-Amz-Signature=f7d5a5db965d413b6cbd2dc260cfdac9366ff61b11dde08f068664687b60e5ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
