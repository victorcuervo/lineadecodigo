---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652SEDC6N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIENS3yki56Nwg6eqtqBM1VjphFgqQ5vJrQKXOFXT%2FfqAAiAD3RVshxdTa0jqtToX0TkOXtfzJW1cSil831mI3aFgPyr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMCXu6h38bp3umSUjxKtwDpiFC3R%2BnDyIvGtHpZLbGIMrbNiaSze1yV3s7L15jbldEQBHzw62R6DE5cZK1g9XABtxVAwxn8xfOFXFPxS0H77zrVyOF3Lq%2B07tZasV4sbgZT2TE1BcbqO40FeiHoziI47jYVUuFN%2Bv9JMqJWqg%2Bf331yiEGcBJNnozCrmjPal2%2BPa5YCEtPUYMq1S9ymS8C%2BeG6yfg8K5Y%2FEmK23xaqsCWnUMWY3KM2%2F%2FRhCVzXirg3qOKThIdoEGaCfSFJhVih%2BRzCyKC0xybsNNFCMPHr5F6P833K6j1A7sOHphtyv2UO2NBZAbnY4WanS8DtLrGH3cxaYeZieRHPOsGaIakVtEZA2BZz%2FM08oxtLZWypiXEG2y%2BlXjzpZAdhCJGoIZk2u4PYompGssEFUwlfk%2B9hfmK4MXaCU0V7TEqVTXQqOcYPK%2BjnOpaqYN4ZAe8AoLsXOK39%2B156g1nt%2BiDYE75NdoMbyaLxL2FfYoykOtmEfb%2BlYhU%2BfLcqP4QXvkVDo%2FmK8jFdm6G0neJ1BZbMPKKGYSao37GLUhG94KcARK%2Fg5eSeDJLzP7rkndZOBzgBq6KbAJbnmJEqLZDjxuqA2CiyBh%2FbPGpkw5RhdCs7YgnRhgONwWJ4cKl1f41JR14w5qqKygY6pgGfHB74zyqo04r0cStV2AdEUFQ%2FynOaY3D3NIfRTLvgC%2Fp9Qh5%2BbNBfTtvnv%2F5PaMXeI%2Fkc4%2BZ3pw3tzHHcf%2FGtOQ74ZJxH8%2FfTDL%2BoRbEdoWvw2%2BIyrLXG7ZGYtNMwRnk2wkjNfUi3qQluV4T8dZ8uUCnH8KZpjc0lxVoBPBTgp2vYGsicnv%2FuqgqZWFY5cZ3noDTF6DfVBgO4K5dUTaads40rXV5p&X-Amz-Signature=bf04fd773036104cf55bee3c36622a5ae5bbe9b2d56bec52e824a35ab6520d7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652SEDC6N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIENS3yki56Nwg6eqtqBM1VjphFgqQ5vJrQKXOFXT%2FfqAAiAD3RVshxdTa0jqtToX0TkOXtfzJW1cSil831mI3aFgPyr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMCXu6h38bp3umSUjxKtwDpiFC3R%2BnDyIvGtHpZLbGIMrbNiaSze1yV3s7L15jbldEQBHzw62R6DE5cZK1g9XABtxVAwxn8xfOFXFPxS0H77zrVyOF3Lq%2B07tZasV4sbgZT2TE1BcbqO40FeiHoziI47jYVUuFN%2Bv9JMqJWqg%2Bf331yiEGcBJNnozCrmjPal2%2BPa5YCEtPUYMq1S9ymS8C%2BeG6yfg8K5Y%2FEmK23xaqsCWnUMWY3KM2%2F%2FRhCVzXirg3qOKThIdoEGaCfSFJhVih%2BRzCyKC0xybsNNFCMPHr5F6P833K6j1A7sOHphtyv2UO2NBZAbnY4WanS8DtLrGH3cxaYeZieRHPOsGaIakVtEZA2BZz%2FM08oxtLZWypiXEG2y%2BlXjzpZAdhCJGoIZk2u4PYompGssEFUwlfk%2B9hfmK4MXaCU0V7TEqVTXQqOcYPK%2BjnOpaqYN4ZAe8AoLsXOK39%2B156g1nt%2BiDYE75NdoMbyaLxL2FfYoykOtmEfb%2BlYhU%2BfLcqP4QXvkVDo%2FmK8jFdm6G0neJ1BZbMPKKGYSao37GLUhG94KcARK%2Fg5eSeDJLzP7rkndZOBzgBq6KbAJbnmJEqLZDjxuqA2CiyBh%2FbPGpkw5RhdCs7YgnRhgONwWJ4cKl1f41JR14w5qqKygY6pgGfHB74zyqo04r0cStV2AdEUFQ%2FynOaY3D3NIfRTLvgC%2Fp9Qh5%2BbNBfTtvnv%2F5PaMXeI%2Fkc4%2BZ3pw3tzHHcf%2FGtOQ74ZJxH8%2FfTDL%2BoRbEdoWvw2%2BIyrLXG7ZGYtNMwRnk2wkjNfUi3qQluV4T8dZ8uUCnH8KZpjc0lxVoBPBTgp2vYGsicnv%2FuqgqZWFY5cZ3noDTF6DfVBgO4K5dUTaads40rXV5p&X-Amz-Signature=69a0759dc43b27faa029d54764b860d5172c11417f8fc48facc1effc091e38f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
