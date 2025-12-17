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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RWRP5K2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2B3iGHvekBFdmA%2F8RzpLsf9QNPGdg2awucuzsPCTjjlgIhAMnPEbhwyHLaxJ1dOdnoJy0Vn0dJInKGicmDJypsJPsuKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRqgCfilS0a0qax1cq3AOs9SM3cEgDVeFG%2Bx%2FmZfV1ZEKHX8vKdQ6oejKmtos43DFWU5Cf1l6KXJFd05vMo%2Btx4xCe8UmK2gEIyqrRR2piGCU9H68CawnI70z44yXA13uDAuSi5PahTYMUIKPVl1OwynUTf%2B7iovWFYvpAct3a2EHh9QbrsBNUf2tGj78eQAgsJ6O58ujvtfgEGYyH%2BATiYWRa6iLzUnvwlFeK5f%2F7q8bGM9uWnRXjTqm%2FA7ptqjGby%2FJFc6RQ%2FPg8kwHGcmzwOeCCOFs5FeHsV6l7L3vs8oB6EjB%2FReSTjWRtnQ5vJ0Ckhc%2FfFB7KCW1qNxE80xMKqkyn8EOBqxBT%2Bm0H7gY16SRLVCvA%2BUPXvV16XYHFVxgHcPhE0b8hitJX3I%2FU3drphTd4fr8bJrsiN2jZOT76rngklhP9Bf2Zxklv%2BU7zv9TsfMPN7zsmhHgEFRSVfZhQwdLl3uvIq%2BSPd%2FyVqS4%2Fpd7eTdMXREPElnuR%2BtUC2XSyvvh%2Fv4VO51cYVMhxJAeIWdFPKexya6aqlZ5TdDYAZ06%2BXFivuY1k0OxIOGLKB5V139ZdwzKCmIIr70lMwvOPH1i4r7U%2ByLcuM72stvetxkY%2Fd2Pj4Zr7u8z2hQjoAkDDwKAb1uzEfgxo1TDKoIvKBjqkAW8py8f1kGMHSV6olrv3MEuHigkkE6wS2T%2FbWlI%2BkgejF3MkWa4RPWa379RovmDopLy6CG%2F5y52UOBkiu%2Fiv9SAO21Ev%2BsiHqyJ2uZlA9Esc5AimdAhfY%2BmSwYDkfwFgFK3CdORsbGGIGsTz2fpRjBLEirrG%2BJgszW12AsCIrAa6UUvL%2B9zaVEsw6ie042C7RO4TBqv6iGbaVbivzmohRW0TqsXF&X-Amz-Signature=cc15aba85b72363c5d330348cb90014c5442ce0f38f3b04d8aeef31509b7aa73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RWRP5K2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2B3iGHvekBFdmA%2F8RzpLsf9QNPGdg2awucuzsPCTjjlgIhAMnPEbhwyHLaxJ1dOdnoJy0Vn0dJInKGicmDJypsJPsuKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRqgCfilS0a0qax1cq3AOs9SM3cEgDVeFG%2Bx%2FmZfV1ZEKHX8vKdQ6oejKmtos43DFWU5Cf1l6KXJFd05vMo%2Btx4xCe8UmK2gEIyqrRR2piGCU9H68CawnI70z44yXA13uDAuSi5PahTYMUIKPVl1OwynUTf%2B7iovWFYvpAct3a2EHh9QbrsBNUf2tGj78eQAgsJ6O58ujvtfgEGYyH%2BATiYWRa6iLzUnvwlFeK5f%2F7q8bGM9uWnRXjTqm%2FA7ptqjGby%2FJFc6RQ%2FPg8kwHGcmzwOeCCOFs5FeHsV6l7L3vs8oB6EjB%2FReSTjWRtnQ5vJ0Ckhc%2FfFB7KCW1qNxE80xMKqkyn8EOBqxBT%2Bm0H7gY16SRLVCvA%2BUPXvV16XYHFVxgHcPhE0b8hitJX3I%2FU3drphTd4fr8bJrsiN2jZOT76rngklhP9Bf2Zxklv%2BU7zv9TsfMPN7zsmhHgEFRSVfZhQwdLl3uvIq%2BSPd%2FyVqS4%2Fpd7eTdMXREPElnuR%2BtUC2XSyvvh%2Fv4VO51cYVMhxJAeIWdFPKexya6aqlZ5TdDYAZ06%2BXFivuY1k0OxIOGLKB5V139ZdwzKCmIIr70lMwvOPH1i4r7U%2ByLcuM72stvetxkY%2Fd2Pj4Zr7u8z2hQjoAkDDwKAb1uzEfgxo1TDKoIvKBjqkAW8py8f1kGMHSV6olrv3MEuHigkkE6wS2T%2FbWlI%2BkgejF3MkWa4RPWa379RovmDopLy6CG%2F5y52UOBkiu%2Fiv9SAO21Ev%2BsiHqyJ2uZlA9Esc5AimdAhfY%2BmSwYDkfwFgFK3CdORsbGGIGsTz2fpRjBLEirrG%2BJgszW12AsCIrAa6UUvL%2B9zaVEsw6ie042C7RO4TBqv6iGbaVbivzmohRW0TqsXF&X-Amz-Signature=6d070e8b00c6f072055c22e6627cbc522a1f979a08f6614578779d282c73b18b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
