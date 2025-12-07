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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTBPM3EP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T023947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1orRdctrkJNriKSIwHiXK6io%2Bne%2BVyhA0dz9Lho1uiAiByuuf7%2FCpAzWogXSMh608180TIVX7ioqEEdhkdjLbspCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxH9b1X%2BTiesoiMDgKtwDlJckQSZQd24%2F19jg62N8aT0qnaaGR7Wnoqt%2BxosDl0MZso07TXCnIRF7WIvJdOsDHzP5UWlTsz%2BsjlmpO7x5VfF5VMt2PbjviOSscs1qZ6Kbh8t2h0rA%2FG%2FTENscb4Y3GzHtFci3A%2FgpcFJaistZneqxKRsVOJtfgLRu4ThJKyWPKl9i6Va4MfclOWbuR%2F%2BsGcCQrrC%2BIrQIv47HhfBrAAKrFUy4yxRTSnNWotQSwbn2sD4s83IxGx2htXXHCmzZZp6s0tIkujknPyEhQ9SiPNN6a%2BBc7%2BOdjndr2esoTJZlsmLKDBH6NAOqscw7Y8ppI%2FMtgTby8U4hrEyHQmWjfF0nEnKX7IYchVhZn9yLeQx0lMkeeKSKy%2FiRS%2BJCNjWrzxaczC0toghQgP6s1D99Nx0f3SvOVNhR6zv9Kc%2F%2B2IHDRjVblp%2BFxyJmJ2OQmjuij1fv4rAC6HNh%2BDH%2B6B8t7KlTjP%2FWWRc8A4WyeZoRsUKLeDgJ0ndEGw0XW68KpjGltYqCE6jALVWa5ewedzKpqfgJidPEJHjq62oFq%2F873tlZ6hcXbOnwOcCFEYJSAfcko9R1druXxH10wTNHT5vzZn5aVJtdBY45P38d6rxwV3RYA6UENBvOiJSGFngwjf7SyQY6pgGHl7s2PjbPJ1T2WZyuBw92YWuGVKiKAjxo8VKQ0gqCf79W%2BgLvJDsBEufWam6xhStHx%2FmXKSCAV7Sk7sGrwnvNF31%2BOeiPHv5y74hM6jyjLWKiH3i%2B9Oxt%2FrmUvONVG9tpDmVYm3SUS%2BqvlGJyz2ybuITAOBCrsZiKAivcNd%2BdunwfaFsv6Wx6w2GnTM9MOt3x22BcINfoL94gnzb7f%2F9VlWl4dBNZ&X-Amz-Signature=97edf5e9bda5e4815f505afa41e56f963f94b55520790266883a3e5130948cd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTBPM3EP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T023947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1orRdctrkJNriKSIwHiXK6io%2Bne%2BVyhA0dz9Lho1uiAiByuuf7%2FCpAzWogXSMh608180TIVX7ioqEEdhkdjLbspCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxH9b1X%2BTiesoiMDgKtwDlJckQSZQd24%2F19jg62N8aT0qnaaGR7Wnoqt%2BxosDl0MZso07TXCnIRF7WIvJdOsDHzP5UWlTsz%2BsjlmpO7x5VfF5VMt2PbjviOSscs1qZ6Kbh8t2h0rA%2FG%2FTENscb4Y3GzHtFci3A%2FgpcFJaistZneqxKRsVOJtfgLRu4ThJKyWPKl9i6Va4MfclOWbuR%2F%2BsGcCQrrC%2BIrQIv47HhfBrAAKrFUy4yxRTSnNWotQSwbn2sD4s83IxGx2htXXHCmzZZp6s0tIkujknPyEhQ9SiPNN6a%2BBc7%2BOdjndr2esoTJZlsmLKDBH6NAOqscw7Y8ppI%2FMtgTby8U4hrEyHQmWjfF0nEnKX7IYchVhZn9yLeQx0lMkeeKSKy%2FiRS%2BJCNjWrzxaczC0toghQgP6s1D99Nx0f3SvOVNhR6zv9Kc%2F%2B2IHDRjVblp%2BFxyJmJ2OQmjuij1fv4rAC6HNh%2BDH%2B6B8t7KlTjP%2FWWRc8A4WyeZoRsUKLeDgJ0ndEGw0XW68KpjGltYqCE6jALVWa5ewedzKpqfgJidPEJHjq62oFq%2F873tlZ6hcXbOnwOcCFEYJSAfcko9R1druXxH10wTNHT5vzZn5aVJtdBY45P38d6rxwV3RYA6UENBvOiJSGFngwjf7SyQY6pgGHl7s2PjbPJ1T2WZyuBw92YWuGVKiKAjxo8VKQ0gqCf79W%2BgLvJDsBEufWam6xhStHx%2FmXKSCAV7Sk7sGrwnvNF31%2BOeiPHv5y74hM6jyjLWKiH3i%2B9Oxt%2FrmUvONVG9tpDmVYm3SUS%2BqvlGJyz2ybuITAOBCrsZiKAivcNd%2BdunwfaFsv6Wx6w2GnTM9MOt3x22BcINfoL94gnzb7f%2F9VlWl4dBNZ&X-Amz-Signature=f25b7c185373b96c7815408cf7d62fa40da008733772d7778b9a47a3e72d1b0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
