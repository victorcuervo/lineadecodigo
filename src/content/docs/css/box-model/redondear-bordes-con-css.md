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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQBUUHRL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T181827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8cFG6Ds3q5nEcyCfeXw4npgJ%2FJReqkP%2Bp3dOzJaNY4AiBqqW0dVyTVHSxUBuYq8hXFiKi5lnLrCLRMys%2FQEI3%2FoCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbzhrx2XN0Skk29OSKtwDYxrC772n%2F6jkXmKLw7OkPxntJlD3YE4h5Y%2BMotE4Tzh0vnaIehO%2BDQ7pcyUKscjxd9Qcven7v%2BUnG9jIa0B6mHJaZ0o84l4%2BPPWCx9O2ap59eJc0SRd0hk%2FzjvArUSDQ4Mdg6Y%2FGbDSNOGtBBRZPCM%2BZv7qCeWK4rG2GhxkRUo3HpCAfHMcdNM%2BgvQwMUgoOyAoIdMWHPO%2F4%2F9OPAl%2FGMo6cBZXKm6GSWaOA1VnLLRANKJSR10XmXYPkg9%2BKW2ovLfy6F2lXcuUqwkwawN9ZhzE8%2BfOwMxpHAecVPW0UTP%2BvaeymvrBfTXDyXbFqUZGchpu7XXWX1MHPwFxXzxK8PSvhEhmKGhhSPH4nLkcqz2jyK5QNPvGCLglG%2BAUQf6s8y%2FR%2BIhjpGB%2BKo3SXyxhA4GAeOC7dhBrOCBaJPKessvimSq%2F434361YxT6UpXtaEpRsZhy12%2FlOvDv0I64ajrcX25Y7%2BJUZ2f%2BYhyQB1ZDdl9P4P%2FF60H%2B3QDswgnJFSRMdBWiXhIShjjmhwy3So3e%2FoGq%2Fqyj2GkdVEQcahV5%2BO7OlXpEU6cYXb7nRwjG8aH56pRmMTZaYmbvPQ7oPXIo70AqBhhbUQWJQhwO4dTVMImQu7YlCDfKANS5FQw1Z%2BLygY6pgGvfCW0VgHxjMm2mXpH0ZU0YmO9JThXMjCC9ztLIURIaNt8gq4RVeHFF%2Fo%2FZtjl2KG4ODfEH0gsL7mYmMWf9osQJ171vX54DAmNT8IL%2BnWJKuXaXTeZTTQjJgiqvALMQHfcpVx3DTbpkPaD1mB84zFSwlKRExF%2FJWbc4NjZGVCZM5ZcPmI883eNAPHyK3QGWqofht%2BMAmpzjJcgBqTqFpvpX3ypM8FU&X-Amz-Signature=81ccd87050cce8fb31ce693ca311f23625be7d0335cf5f29c2668bb4af02d39f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQBUUHRL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T181827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8cFG6Ds3q5nEcyCfeXw4npgJ%2FJReqkP%2Bp3dOzJaNY4AiBqqW0dVyTVHSxUBuYq8hXFiKi5lnLrCLRMys%2FQEI3%2FoCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbzhrx2XN0Skk29OSKtwDYxrC772n%2F6jkXmKLw7OkPxntJlD3YE4h5Y%2BMotE4Tzh0vnaIehO%2BDQ7pcyUKscjxd9Qcven7v%2BUnG9jIa0B6mHJaZ0o84l4%2BPPWCx9O2ap59eJc0SRd0hk%2FzjvArUSDQ4Mdg6Y%2FGbDSNOGtBBRZPCM%2BZv7qCeWK4rG2GhxkRUo3HpCAfHMcdNM%2BgvQwMUgoOyAoIdMWHPO%2F4%2F9OPAl%2FGMo6cBZXKm6GSWaOA1VnLLRANKJSR10XmXYPkg9%2BKW2ovLfy6F2lXcuUqwkwawN9ZhzE8%2BfOwMxpHAecVPW0UTP%2BvaeymvrBfTXDyXbFqUZGchpu7XXWX1MHPwFxXzxK8PSvhEhmKGhhSPH4nLkcqz2jyK5QNPvGCLglG%2BAUQf6s8y%2FR%2BIhjpGB%2BKo3SXyxhA4GAeOC7dhBrOCBaJPKessvimSq%2F434361YxT6UpXtaEpRsZhy12%2FlOvDv0I64ajrcX25Y7%2BJUZ2f%2BYhyQB1ZDdl9P4P%2FF60H%2B3QDswgnJFSRMdBWiXhIShjjmhwy3So3e%2FoGq%2Fqyj2GkdVEQcahV5%2BO7OlXpEU6cYXb7nRwjG8aH56pRmMTZaYmbvPQ7oPXIo70AqBhhbUQWJQhwO4dTVMImQu7YlCDfKANS5FQw1Z%2BLygY6pgGvfCW0VgHxjMm2mXpH0ZU0YmO9JThXMjCC9ztLIURIaNt8gq4RVeHFF%2Fo%2FZtjl2KG4ODfEH0gsL7mYmMWf9osQJ171vX54DAmNT8IL%2BnWJKuXaXTeZTTQjJgiqvALMQHfcpVx3DTbpkPaD1mB84zFSwlKRExF%2FJWbc4NjZGVCZM5ZcPmI883eNAPHyK3QGWqofht%2BMAmpzjJcgBqTqFpvpX3ypM8FU&X-Amz-Signature=23cf6645dd8a5a937468f0810f00693fa3d38a5f83846b662ed4e4601f5fc175&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
