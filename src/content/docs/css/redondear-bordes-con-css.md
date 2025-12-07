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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MXOO3AY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T233451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0czEU%2F6gacCZ1gh49goXCFAfcgcatptj%2FwHjTbpnkrAiAC9jMyzLeU%2FhVqlRm9jLo1KNHambnmtfQ4Ra2xiiLBwiqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMVcwGYq7CxTe4rbOKtwDUwP%2BDtb829uUeXm3J%2BT%2BEoLwjlYHSw4IcOkC17TXRtCYr3MP78ibZNIJIcdv5d5faophLxUVr%2BCk1cYp3SgeOkwUKKxA8l1AEKF0vt%2FPhPtT4LG0aS1qSDHknjSdFSzPEHfEdG5jlViyuOdHhdYOJVQhHgn2WK%2BMiqw%2FamZvr9Uw5ovQ0QTnyFEIdb%2FhlCo1NCF46JrrgtiSoolueTUfoQBQIia93y08pBRCOFjjX5JDtH%2Bc7d4msV62qmBZDxL1vqmOMg%2FhEaiHXGL1gxs4xWFzA3psUdlXCpgt55wfnAtd2K%2F3493g0rkbtlMf0McfPDOusxh0zpV5QQB3GW7O2IixpcKXErFmKN4JNPzQ07NQz1f6KBgNY1qI5EvvAUOEDWptXu%2BnKYVjzQtA5Kar1wy3UonwLXJDrKhgBgLXMxwrwOuWPINESVbSHj4SdttptfWGDAv4rk5koqw6nz7fku%2BrFc7P4zsBX9fdbtkOiStuqY3ftpVP2JijG94%2BOj51czhpVCfwK41YPud1d2bOQSqL6kvxLsCn0%2Bf7uGIehX6Xlb4MicRm5tkrOIIXLZB0%2Blzx52BYqlLafNo2fFPeIrtGLNw3wAWYXGrA2wjUMvQ47hQgOjlDLrMLmRkwwoXYyQY6pgGAsS726GKIJ2g9IIfkQmiec%2FjNFeOnOGvKLYI%2FAReuvWaSZ4XGhL%2B4wPRKklAvok4GNkNr1k2mzV7s5%2FmeXw6RfhZWZ732%2BSa0QUIJ6CBGb2uJkjfQRtC47O5fSyOjRkzT5hyj07Y305asyfMvqU%2BXdZHUPGiKvxcKTyqwqvLsCWUiRhNRWHs1TR3aL5AtF48vYHSNYPuMW0Ge0JtkkU%2BbT5bZOqHl&X-Amz-Signature=c5263ab489be4fd15eafc51826e96e863d04d91881c5ff697ab957a2e7be2cd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MXOO3AY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T233451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0czEU%2F6gacCZ1gh49goXCFAfcgcatptj%2FwHjTbpnkrAiAC9jMyzLeU%2FhVqlRm9jLo1KNHambnmtfQ4Ra2xiiLBwiqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMVcwGYq7CxTe4rbOKtwDUwP%2BDtb829uUeXm3J%2BT%2BEoLwjlYHSw4IcOkC17TXRtCYr3MP78ibZNIJIcdv5d5faophLxUVr%2BCk1cYp3SgeOkwUKKxA8l1AEKF0vt%2FPhPtT4LG0aS1qSDHknjSdFSzPEHfEdG5jlViyuOdHhdYOJVQhHgn2WK%2BMiqw%2FamZvr9Uw5ovQ0QTnyFEIdb%2FhlCo1NCF46JrrgtiSoolueTUfoQBQIia93y08pBRCOFjjX5JDtH%2Bc7d4msV62qmBZDxL1vqmOMg%2FhEaiHXGL1gxs4xWFzA3psUdlXCpgt55wfnAtd2K%2F3493g0rkbtlMf0McfPDOusxh0zpV5QQB3GW7O2IixpcKXErFmKN4JNPzQ07NQz1f6KBgNY1qI5EvvAUOEDWptXu%2BnKYVjzQtA5Kar1wy3UonwLXJDrKhgBgLXMxwrwOuWPINESVbSHj4SdttptfWGDAv4rk5koqw6nz7fku%2BrFc7P4zsBX9fdbtkOiStuqY3ftpVP2JijG94%2BOj51czhpVCfwK41YPud1d2bOQSqL6kvxLsCn0%2Bf7uGIehX6Xlb4MicRm5tkrOIIXLZB0%2Blzx52BYqlLafNo2fFPeIrtGLNw3wAWYXGrA2wjUMvQ47hQgOjlDLrMLmRkwwoXYyQY6pgGAsS726GKIJ2g9IIfkQmiec%2FjNFeOnOGvKLYI%2FAReuvWaSZ4XGhL%2B4wPRKklAvok4GNkNr1k2mzV7s5%2FmeXw6RfhZWZ732%2BSa0QUIJ6CBGb2uJkjfQRtC47O5fSyOjRkzT5hyj07Y305asyfMvqU%2BXdZHUPGiKvxcKTyqwqvLsCWUiRhNRWHs1TR3aL5AtF48vYHSNYPuMW0Ge0JtkkU%2BbT5bZOqHl&X-Amz-Signature=cfc4e0b1956332239ea0997ad2160cac379a3bafe7105d6f219f25c9daa9ff81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
