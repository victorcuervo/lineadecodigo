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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4IKVNRQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BWr%2BphpH%2F8gWazN3uf8H3uDmvWWpX656T%2F55TavOfYwIhAJH%2BQpB9Hiw0QMvFC23dAz5AnPxVhANiJb4H39Nv3cmKKv8DCHwQABoMNjM3NDIzMTgzODA1IgyJQIIj6hJkQ3Z7f0Iq3ANXuqwKft5LP7ghOsMj59A%2BhSeDAi3uILdm1EMdgh4ny4BSOpmXEhB4FRO7F2o1s0rV3oBa0mfYP4ZYRqdPwiB4qNq%2FL3p7uc6mLcmOEbwOSBMgPY8iLBcRaFx24rzcXlsaD6G5aEJ%2FuGKX7swu6QrKV6qHDyDOJRCOPtLsqE6dEF5A2dfyouXxpp%2Bf0ATZyO8ueNxABkZOapyGKJHhwg69flILtfd2yNXr2dyy0ED6apcRKZy2%2FXiFusJt4oiyj%2B6fkBNodgImYg02FGoWdAT7LdD%2BclNI9ps23kkY%2BfY1vDLO0DddnpnEvh7yGJLUUYnmu2jY%2FTCgLVCSSgu%2FE249KGYz7%2FNBVgSOUIGiAzOAvDgke88L2yb5RXH371xMrOiE9UyNT6XWVGt%2F%2BNS1ToHCTIMN%2B6e3DsCBCrKtOmC3lLuLOwAc46FlD17wWdqNNPAp5XzaYFPL99haPxCSqtDkXUw5ZbjkPjpFkJhyFNIAInIhAJElO3LHZWeQiBMPga1D%2Bolm7ysckChxlv%2Bkwt9fCWPEAQog0AW5Acu8iswlif5yIgiK%2BlqiO3iwKxteiMEreht%2Bh3xNPQFZLx%2Bx5h%2FdbX1xAD%2BIV1y6rUF3KPcJq6lBDxs6mtK%2ByuKp7jD4jorKBjqkAQ4anH7azlu%2FcglKU9IASC2enRBzvV9iKK1p2KWvd1cRKnZ6BhSbNaOwdZK8Xqf9bpNKagCLMulJDVjncWHJuqnN3MUla0rxbBicU1uip844eQLFmEti9VwA%2FgKAEcDUku88yw0b3Pmj5QKwaYpzfy1QFUEnQVX%2Fq%2BcGe3eC7UKoKh8QgsqLfwIOUhotODlHgkw2IHWrlkZku%2BkC25%2Bicbt5OVRj&X-Amz-Signature=e545af87d47e940809b83958d63d6f4c5ab68dab5c52b3cbe575c971cfaedf3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4IKVNRQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BWr%2BphpH%2F8gWazN3uf8H3uDmvWWpX656T%2F55TavOfYwIhAJH%2BQpB9Hiw0QMvFC23dAz5AnPxVhANiJb4H39Nv3cmKKv8DCHwQABoMNjM3NDIzMTgzODA1IgyJQIIj6hJkQ3Z7f0Iq3ANXuqwKft5LP7ghOsMj59A%2BhSeDAi3uILdm1EMdgh4ny4BSOpmXEhB4FRO7F2o1s0rV3oBa0mfYP4ZYRqdPwiB4qNq%2FL3p7uc6mLcmOEbwOSBMgPY8iLBcRaFx24rzcXlsaD6G5aEJ%2FuGKX7swu6QrKV6qHDyDOJRCOPtLsqE6dEF5A2dfyouXxpp%2Bf0ATZyO8ueNxABkZOapyGKJHhwg69flILtfd2yNXr2dyy0ED6apcRKZy2%2FXiFusJt4oiyj%2B6fkBNodgImYg02FGoWdAT7LdD%2BclNI9ps23kkY%2BfY1vDLO0DddnpnEvh7yGJLUUYnmu2jY%2FTCgLVCSSgu%2FE249KGYz7%2FNBVgSOUIGiAzOAvDgke88L2yb5RXH371xMrOiE9UyNT6XWVGt%2F%2BNS1ToHCTIMN%2B6e3DsCBCrKtOmC3lLuLOwAc46FlD17wWdqNNPAp5XzaYFPL99haPxCSqtDkXUw5ZbjkPjpFkJhyFNIAInIhAJElO3LHZWeQiBMPga1D%2Bolm7ysckChxlv%2Bkwt9fCWPEAQog0AW5Acu8iswlif5yIgiK%2BlqiO3iwKxteiMEreht%2Bh3xNPQFZLx%2Bx5h%2FdbX1xAD%2BIV1y6rUF3KPcJq6lBDxs6mtK%2ByuKp7jD4jorKBjqkAQ4anH7azlu%2FcglKU9IASC2enRBzvV9iKK1p2KWvd1cRKnZ6BhSbNaOwdZK8Xqf9bpNKagCLMulJDVjncWHJuqnN3MUla0rxbBicU1uip844eQLFmEti9VwA%2FgKAEcDUku88yw0b3Pmj5QKwaYpzfy1QFUEnQVX%2Fq%2BcGe3eC7UKoKh8QgsqLfwIOUhotODlHgkw2IHWrlkZku%2BkC25%2Bicbt5OVRj&X-Amz-Signature=4da8ffd729d322f18d1dcf958ebdcdea6fb14f44135de552ab74e54d58735e46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
