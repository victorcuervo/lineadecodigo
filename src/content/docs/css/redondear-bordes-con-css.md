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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLALDGGO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T173406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0lPzkhU18FrrPygrGWAFDwKgIWW86wS0ErvB9Xmk2LgIhAIU49%2FO4cJHhTrOZTy0%2B8MBF4nohxgJ2VMtn44lNC5JBKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIGiaHi7Zsh8I2JeIq3AO8IzjnIXwVM39PPnyK2EnY6mtsGP5BtdpsluMmFc0hvFqDPay3%2BdZgz18O%2FUeBi5wZ7nt%2Fkfu7aTD90vSAd2IEadpdlPZt0Xxl3Zl%2BByCb1g%2ByDxaHsgEYIHcMzEjNgLottGrGiiJKm68AxT5WbT%2ByMC9ky91Ej8arLJIHSBBp%2FR%2BRS9OZj7J5kchwGtjn9%2BiiymtFFt6OBSKmSJ37L7cXZkGH0oDNERtgSHijOYq9gU1aRKtskFuG1lMSz5sXGa%2FnF6L5MISe1NxIgo9WhjaF8vu%2Bvks9qKrXO0tMy%2B0oJx5RCZkoDcPOKkGSV8Y%2BAPUx1eU3Kyb2%2BkbtVHeeTJWM5%2B0%2FxDPmoYv08WnwoeUrRftTAFVzmaugu%2Bhf5sVTl5MtDPyGdjyq3N6WyVBMZoS%2B57SmUqExt6uvV5ewQ1eeeeuF1PG7FcdzKXiH4BeXUm1Jpg0Sl%2F%2B5KJ7wETJJb9k4aIJOCffbA6ypMgZsEfr1juPWHIQQwr7EZNjjuzb%2FIRegozVf%2FfvxcDs55HWA5rATpnSOyKl1RTzXYByGQY3LU3LL7OHJ64jfLCHKIE%2BhVxk1cVmGG529vBntW4JOKax8Z7%2BGrEgL84BM7oF1Zz37vXE9nZq06XJv%2FZiK6zDPutbJBjqkAc3w2PwhZlQ4nrCXiP3lVnLXlrnHEHY2%2BmKdTlYGjMkRayF1HzMs%2BZjv%2B%2BnkvmSuGUjtchghoqHtyDuqCLJuqFqQtqGndpWRI8x3F6CKUmcehagqxUVqIzUE%2BVw%2BzjPMkJQvpEvk%2FwpmLdJgSLCJ249lLs8HW%2F0THKZRNmt8kCZNEu%2FxChSTJeQDs2zvCXzC967KOdg%2FM2%2FBMAefxA2%2BZdCctoi%2B&X-Amz-Signature=10d3fb3d659242d29af50a399acde0c06bba63ed0b36abe4e0e382a6e5716c80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLALDGGO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T173406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0lPzkhU18FrrPygrGWAFDwKgIWW86wS0ErvB9Xmk2LgIhAIU49%2FO4cJHhTrOZTy0%2B8MBF4nohxgJ2VMtn44lNC5JBKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIGiaHi7Zsh8I2JeIq3AO8IzjnIXwVM39PPnyK2EnY6mtsGP5BtdpsluMmFc0hvFqDPay3%2BdZgz18O%2FUeBi5wZ7nt%2Fkfu7aTD90vSAd2IEadpdlPZt0Xxl3Zl%2BByCb1g%2ByDxaHsgEYIHcMzEjNgLottGrGiiJKm68AxT5WbT%2ByMC9ky91Ej8arLJIHSBBp%2FR%2BRS9OZj7J5kchwGtjn9%2BiiymtFFt6OBSKmSJ37L7cXZkGH0oDNERtgSHijOYq9gU1aRKtskFuG1lMSz5sXGa%2FnF6L5MISe1NxIgo9WhjaF8vu%2Bvks9qKrXO0tMy%2B0oJx5RCZkoDcPOKkGSV8Y%2BAPUx1eU3Kyb2%2BkbtVHeeTJWM5%2B0%2FxDPmoYv08WnwoeUrRftTAFVzmaugu%2Bhf5sVTl5MtDPyGdjyq3N6WyVBMZoS%2B57SmUqExt6uvV5ewQ1eeeeuF1PG7FcdzKXiH4BeXUm1Jpg0Sl%2F%2B5KJ7wETJJb9k4aIJOCffbA6ypMgZsEfr1juPWHIQQwr7EZNjjuzb%2FIRegozVf%2FfvxcDs55HWA5rATpnSOyKl1RTzXYByGQY3LU3LL7OHJ64jfLCHKIE%2BhVxk1cVmGG529vBntW4JOKax8Z7%2BGrEgL84BM7oF1Zz37vXE9nZq06XJv%2FZiK6zDPutbJBjqkAc3w2PwhZlQ4nrCXiP3lVnLXlrnHEHY2%2BmKdTlYGjMkRayF1HzMs%2BZjv%2B%2BnkvmSuGUjtchghoqHtyDuqCLJuqFqQtqGndpWRI8x3F6CKUmcehagqxUVqIzUE%2BVw%2BzjPMkJQvpEvk%2FwpmLdJgSLCJ249lLs8HW%2F0THKZRNmt8kCZNEu%2FxChSTJeQDs2zvCXzC967KOdg%2FM2%2FBMAefxA2%2BZdCctoi%2B&X-Amz-Signature=2a76a6b192e009264f0380a7e32d518b2253779a8368c430561f63ef3e2ac899&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
