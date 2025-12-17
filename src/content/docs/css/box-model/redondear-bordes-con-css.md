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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRSH2IOO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBXtX3%2BTbBbTwYCQT7ut9YFdL1ogpM0cJ%2FBjno%2F5sn4IAiEAoP%2FI%2FJn1WjdtvkUxtyp87J8vJbIUNfZUygSzmFZSbdMq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDOZhmmRpqf1T%2BDvlQCrcAwh9j4SaJy0qYeaZqkOQCNQpGAEtRa5%2BaRuklojX1T8ycEaLxBr2rPm0UKECquFx5Jlhwx%2BnuUuZpktpEeq8eExN7AU59x7GZ%2FxfGAllYdbv%2Bj4N5xdAw9MyumeR%2BxTp4Hso46v7%2Bv8aOTnTGqchR70XPgRe5VcOSOmDANmL68hUA8V4nKK217kUl27Vqzc2gb%2FPhr9o9aMmhib4k%2FZ%2Fg%2F8I14IegCVbxy8DtwVO84kCpR3Koc%2BVGPJkYfk9Oj8TtFkaixuRKvWhcLnEjn6%2Bg2W2wkyhq%2FoJMRzrdJ7bAIESouRYajwbcEx33NEln3FdlmzCOuUGXKxNzLYfRI%2B08GS6OqgGgKkc0ETx8AZKeOsmSTbdZKb8EqxJIpeiG9%2FcaKD%2FYYhxBxS4F2BNv1uaOAsVHQsFbeH2lzxUHf5ZA3G%2Bb9epP4jDHomsqs8qVzzABziOMX5gX6L6zWHghiVLdOPS21Z6kI2DhtmbgQSCre143OZeJjNV2pjW3h2A7PYGldb03N0F4UaGBrZlvYHv8wfunL6zsSx2JG5QE7dtsTk17EPH5V3LdgwfZXc8AYcpc8oIyVYC1Xc38CdHW4uhcfGyEO391te0IQCMUd2tnf6i9eXYRBDk3bU0FKv4ML7hisoGOqUBl86KR4YuurS72XiQnAfEF7qhjyERHB%2FjKTX7S3fODOKSzh0eIL1hQwcRVAMgcvCBT3nb4Re8%2BIEVXmyMJwflGDnysK%2Fe80dl5r3MZrcc1REgCk%2BRmBXVS9lYeasO8fnpMDnoKWEvPP0irHk3XD5QJamRTxpmGac8zs7Dc%2BOB17SmrqUgc4cGWARuHgvcakfDTKaX75TAvcUgRXpc9C2PXx7P%2BBJm&X-Amz-Signature=3e60a28397f88e0b0104affae9333c96afeb6c4c605be63ffb8a3f7bae05ffaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRSH2IOO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBXtX3%2BTbBbTwYCQT7ut9YFdL1ogpM0cJ%2FBjno%2F5sn4IAiEAoP%2FI%2FJn1WjdtvkUxtyp87J8vJbIUNfZUygSzmFZSbdMq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDOZhmmRpqf1T%2BDvlQCrcAwh9j4SaJy0qYeaZqkOQCNQpGAEtRa5%2BaRuklojX1T8ycEaLxBr2rPm0UKECquFx5Jlhwx%2BnuUuZpktpEeq8eExN7AU59x7GZ%2FxfGAllYdbv%2Bj4N5xdAw9MyumeR%2BxTp4Hso46v7%2Bv8aOTnTGqchR70XPgRe5VcOSOmDANmL68hUA8V4nKK217kUl27Vqzc2gb%2FPhr9o9aMmhib4k%2FZ%2Fg%2F8I14IegCVbxy8DtwVO84kCpR3Koc%2BVGPJkYfk9Oj8TtFkaixuRKvWhcLnEjn6%2Bg2W2wkyhq%2FoJMRzrdJ7bAIESouRYajwbcEx33NEln3FdlmzCOuUGXKxNzLYfRI%2B08GS6OqgGgKkc0ETx8AZKeOsmSTbdZKb8EqxJIpeiG9%2FcaKD%2FYYhxBxS4F2BNv1uaOAsVHQsFbeH2lzxUHf5ZA3G%2Bb9epP4jDHomsqs8qVzzABziOMX5gX6L6zWHghiVLdOPS21Z6kI2DhtmbgQSCre143OZeJjNV2pjW3h2A7PYGldb03N0F4UaGBrZlvYHv8wfunL6zsSx2JG5QE7dtsTk17EPH5V3LdgwfZXc8AYcpc8oIyVYC1Xc38CdHW4uhcfGyEO391te0IQCMUd2tnf6i9eXYRBDk3bU0FKv4ML7hisoGOqUBl86KR4YuurS72XiQnAfEF7qhjyERHB%2FjKTX7S3fODOKSzh0eIL1hQwcRVAMgcvCBT3nb4Re8%2BIEVXmyMJwflGDnysK%2Fe80dl5r3MZrcc1REgCk%2BRmBXVS9lYeasO8fnpMDnoKWEvPP0irHk3XD5QJamRTxpmGac8zs7Dc%2BOB17SmrqUgc4cGWARuHgvcakfDTKaX75TAvcUgRXpc9C2PXx7P%2BBJm&X-Amz-Signature=a47d7b480dc5853dd75b7306b94f0928143acb7dfb587e27e119655225e09ea8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
