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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXYOAWCE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T181446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfXCP1H6yRoHr5Owxe2vAijsnpy3LFoV8gPHvtDZUMCwIhAPyMm1X%2FcLwkXaLAV4iqHIU6u3biFR%2BjDPiFJjT110mGKv8DCGAQABoMNjM3NDIzMTgzODA1IgxdLsMVbXgIKhEePisq3AOg1YQIHAlPR6LywzOhf32zPghqvWNedjWynoS%2BCP2FyPAJ6uPHf3wxzGWLAi00aQroRvWc18%2BWjyJ34AKqqfltxoeHOT8HShRdX1ST7P2DbZbX%2FUEm9cDRgh%2BceWb0kXuUhvbAhILUe5qsutZ%2BkQe2Si%2BYYe1nuecXWMz0aBHItq8SplpDnV8CB6hX2%2BlEu4MlUfwtp8o3fxB%2BspyyPM%2BbkflP9r3Kcjm%2FX%2Fv3U%2B2UJ2LweOO%2BUD26igk1oS%2FoTeqbmsgq3LrnDkfATuiXPNSQzeBBMq8hqpjn5OXPwxRPVffrpQFSIkRmDGOpYrUk5s%2B75to5fJXVqLczIqTCjlIsNWpPQ6OSbcpR4zG%2FcnL2sfQEIOKkg2RIVbNiBorqkhed42pKMtDvMhPgxTIr3Q2L4Om%2FlSYvwfhDIRtnEPvixuPfvvBTKFIQTMv0uOTkCFfAHpkYX9pDz0oR04gDIjz884N7Q40xreDCPzzTXt5195b7sfYG8vSHqwmUlryQbNhAJdlASJDlJbExrpMS6B728bNKZrE401RucLSnC%2BREWEwNB2pEX5lQyZjhOZLSNJytyyKlMIlzp%2FUbAgjRf5zoqzQz78CajM0wS1FQk5QiPtXng0o5PmXNoKTfvTDQ7MvJBjqkAe%2BquRf0%2FERv19Upq7%2Fi0LttLZcLmIWdJBYI%2FZg5GNlKcCPCgcV9ekJe%2FH05KGGOyJz%2F9Hk4NHm3HW7NmGxE5bP0nx0QrFRBZ1twIlvqFLYS2gVUbEM2IX3RnWEnB7nrkK1Gy5%2FTO9RQr2vGu0jz7gucz27r048UpNWRe5QhrZCjWv1NBxdm76YbfCAeylFzFf5G1mMRTYoIQ5DgWkIKqR1ucJFU&X-Amz-Signature=1c8b52830a39eaac5cfb8b24b7726ec5547f766ebaeff58cce0afa09e9e79023&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXYOAWCE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T181446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfXCP1H6yRoHr5Owxe2vAijsnpy3LFoV8gPHvtDZUMCwIhAPyMm1X%2FcLwkXaLAV4iqHIU6u3biFR%2BjDPiFJjT110mGKv8DCGAQABoMNjM3NDIzMTgzODA1IgxdLsMVbXgIKhEePisq3AOg1YQIHAlPR6LywzOhf32zPghqvWNedjWynoS%2BCP2FyPAJ6uPHf3wxzGWLAi00aQroRvWc18%2BWjyJ34AKqqfltxoeHOT8HShRdX1ST7P2DbZbX%2FUEm9cDRgh%2BceWb0kXuUhvbAhILUe5qsutZ%2BkQe2Si%2BYYe1nuecXWMz0aBHItq8SplpDnV8CB6hX2%2BlEu4MlUfwtp8o3fxB%2BspyyPM%2BbkflP9r3Kcjm%2FX%2Fv3U%2B2UJ2LweOO%2BUD26igk1oS%2FoTeqbmsgq3LrnDkfATuiXPNSQzeBBMq8hqpjn5OXPwxRPVffrpQFSIkRmDGOpYrUk5s%2B75to5fJXVqLczIqTCjlIsNWpPQ6OSbcpR4zG%2FcnL2sfQEIOKkg2RIVbNiBorqkhed42pKMtDvMhPgxTIr3Q2L4Om%2FlSYvwfhDIRtnEPvixuPfvvBTKFIQTMv0uOTkCFfAHpkYX9pDz0oR04gDIjz884N7Q40xreDCPzzTXt5195b7sfYG8vSHqwmUlryQbNhAJdlASJDlJbExrpMS6B728bNKZrE401RucLSnC%2BREWEwNB2pEX5lQyZjhOZLSNJytyyKlMIlzp%2FUbAgjRf5zoqzQz78CajM0wS1FQk5QiPtXng0o5PmXNoKTfvTDQ7MvJBjqkAe%2BquRf0%2FERv19Upq7%2Fi0LttLZcLmIWdJBYI%2FZg5GNlKcCPCgcV9ekJe%2FH05KGGOyJz%2F9Hk4NHm3HW7NmGxE5bP0nx0QrFRBZ1twIlvqFLYS2gVUbEM2IX3RnWEnB7nrkK1Gy5%2FTO9RQr2vGu0jz7gucz27r048UpNWRe5QhrZCjWv1NBxdm76YbfCAeylFzFf5G1mMRTYoIQ5DgWkIKqR1ucJFU&X-Amz-Signature=79453717f3cb89a757e3c2bf90b619f37df4802a1ea186dd7c5ce9a9629a61e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
