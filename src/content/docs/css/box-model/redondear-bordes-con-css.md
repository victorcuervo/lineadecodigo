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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH57SHWO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3424t2En5fAZRVmYDvkySaZF6S6q1f56kAvv0XAareAIgHuiBYlxCIBMoUUHTqzUMXyJL%2BlNDmY2zN5TODEEgshsq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDP4TFBM0FN8lpeTwqCrcA4k6DLr3xtjgy5OLKB9GZMx7L8TFTSHVy07jUc0p1HKdkdfWUv6fz0xPIryOGJ3hIoxQBoEoMYPsAhcCwqXQ%2BUi7ILY%2F3MpJJau4m7CDGmMC5p1cPP9T9gV1%2F43vPXE4eT2w2KDJEH77Mrdbbe5%2BO%2Bc3WTKhm623TOI6VrM1kZp8Lgb1qwYTbA6%2BdA27%2FUhruJfsCG%2Fo0kaDNDy%2B7IKeWMThHfDHfqKGDEivN5qmEVd3A0IW5udqDxFXxjm3elmtXdBBH28KV95AbRV8UUJITvSahcBKWXlQVQH188ETfGjBoi3yvG7vtvPZL%2B9JJeEpJaTpVQH6AVVc7%2BO1F%2BmMiB1BKtHcSS6E2XNaX8YDVi7bwvpqunNoONI9%2FSTyRRK3Ee7hdv9rRBuSESQIWe1Uy%2BzfuD5FReuy2NKexWXPTS7y6VzaXejJJBuiKVvBr6EPOS7EUSB9G5pgXQhPHhNTNdOR49SjWmDxPwtPJshHL8L6YuA7O3ZQX5KDH%2BwGon%2BKeiNFDh00HtVAAdF2oLA41TzzTzYqdO1Op%2F%2FRy9h0cEM4PxzvyZEGEjE6S33OdK1yTWKSygAsUAvSXtr1sZBf%2BF94vw%2B7KEGuoCJByi9njftYWQQi7WQ7bvMKibMiMKr7h8oGOqUB6F77e1526jP%2BTUav5%2BaWSCBzhnauonHckYsuIVfUKTuKFYcCsFan6f7mAmwNIXQUHPOP1g2pI%2B8Gbvor35crtN1%2BWSuxlMqcA%2BP%2F6ljb%2FTk8GbfyAUwdNvlTGjS%2F9zCm%2F4vAznxtmne88uEI1LXI0Pv1V2cFjbqb5z1eKj3vzO7lLt2hM1C7f6duTGjPe%2FTw%2BVy0WKvCu0P4dChyb6YOoAtLDk4k&X-Amz-Signature=0605b30ae9e6727995330573ee9a6201397a9df31c20e7167dc1c9dca7c5c1fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH57SHWO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3424t2En5fAZRVmYDvkySaZF6S6q1f56kAvv0XAareAIgHuiBYlxCIBMoUUHTqzUMXyJL%2BlNDmY2zN5TODEEgshsq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDP4TFBM0FN8lpeTwqCrcA4k6DLr3xtjgy5OLKB9GZMx7L8TFTSHVy07jUc0p1HKdkdfWUv6fz0xPIryOGJ3hIoxQBoEoMYPsAhcCwqXQ%2BUi7ILY%2F3MpJJau4m7CDGmMC5p1cPP9T9gV1%2F43vPXE4eT2w2KDJEH77Mrdbbe5%2BO%2Bc3WTKhm623TOI6VrM1kZp8Lgb1qwYTbA6%2BdA27%2FUhruJfsCG%2Fo0kaDNDy%2B7IKeWMThHfDHfqKGDEivN5qmEVd3A0IW5udqDxFXxjm3elmtXdBBH28KV95AbRV8UUJITvSahcBKWXlQVQH188ETfGjBoi3yvG7vtvPZL%2B9JJeEpJaTpVQH6AVVc7%2BO1F%2BmMiB1BKtHcSS6E2XNaX8YDVi7bwvpqunNoONI9%2FSTyRRK3Ee7hdv9rRBuSESQIWe1Uy%2BzfuD5FReuy2NKexWXPTS7y6VzaXejJJBuiKVvBr6EPOS7EUSB9G5pgXQhPHhNTNdOR49SjWmDxPwtPJshHL8L6YuA7O3ZQX5KDH%2BwGon%2BKeiNFDh00HtVAAdF2oLA41TzzTzYqdO1Op%2F%2FRy9h0cEM4PxzvyZEGEjE6S33OdK1yTWKSygAsUAvSXtr1sZBf%2BF94vw%2B7KEGuoCJByi9njftYWQQi7WQ7bvMKibMiMKr7h8oGOqUB6F77e1526jP%2BTUav5%2BaWSCBzhnauonHckYsuIVfUKTuKFYcCsFan6f7mAmwNIXQUHPOP1g2pI%2B8Gbvor35crtN1%2BWSuxlMqcA%2BP%2F6ljb%2FTk8GbfyAUwdNvlTGjS%2F9zCm%2F4vAznxtmne88uEI1LXI0Pv1V2cFjbqb5z1eKj3vzO7lLt2hM1C7f6duTGjPe%2FTw%2BVy0WKvCu0P4dChyb6YOoAtLDk4k&X-Amz-Signature=44d57b579b39a7148e2204aa5d6362a38cca70ac3ed14910fa2df016583e01ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
