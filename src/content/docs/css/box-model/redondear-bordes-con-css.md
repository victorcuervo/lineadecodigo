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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AFPAOJ3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBc9X27paTpo6fnzporIehHmvwOTZYdkoQZLwPUyJl6MAiA9EjAwBensCu18PVKqncXOIABpSnj1rthHIX8XGqBpDSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMe2mdYTtQeN9BgOmzKtwDyb4D454h4ibGOimhs6ElFrJ2FD1V47mMhAATSsSaY8UpZL5VZ%2BgZIQrBA6DTEZKX5nXS9uzjR5yYz1KshWhLJqxGg2YYxpHZ%2BW3tpv73oL16kCPp5S%2Bc%2Fa9pWWFlegzdkOCtWlP7ojF0VWBSykEV%2Bs7TMRM8E1Ch51fsFqvGSrxIWek8pwSvW3w00Rw%2FylD9999TLGCI5zyyfp2UQ221D%2B5gkdJ%2BUfjejB7s2cX%2F04V%2FO%2BTIqJiok1IbxJpebSTxk4V03QBoQTMgNaFGbGqqdjF96dxz%2BVF8Kbcesyanem2jKq8m%2BJCiMErOAtQR0s5sjOcqSgITiJ95nu8%2B8bGz2Iuo6LSbo4l%2BTO1mhAaiBE%2FyNYey%2F8Jdyn%2B%2Fz04eTuMRtmlsk79tk%2F7xXISmwE3359hPN2qc7HsZzisVQdnmaflbnzsoEyG3ynmRmy9vrXPgD6F8%2FA4tdaTnFw%2FqXVLoa0SEpTWGKJPMyG04loXAyOkXsqLYCXjUU%2FYAgav%2FiG2TIvtW%2BKyJhr8lYbuNO7O202DlNOqtiHltXmE0PiHj8TO7e1tuMKbWW3HNKXDJYcxjW0DB1oKwm%2B8GBKmi%2FXmU%2FqCK2h6AC%2FSdPplETtLBqV7lktv5WWExuma6Cl0wnsaKygY6pgHBfi%2ByKaspXCjJBnhMwcD9SVA%2BbqHK5GINloORygCEuSmxI5X9j3EAWIfyAxLEcniaxwaodlrZ7mTSWZl7vfnVfpjXHpTs81C1XV4VHV9P5nqUtY3agJ47T%2FN3ubD9ODMccHzxZyzttoqNmmD3b2nMfZ6ftNKUSEAXnXfCOLSPodpa6kZbY4PTDcIESFoCn1UO74yA7hYYPPmR4eCK%2FksUI%2BxrhjJB&X-Amz-Signature=266cca819b475897693d58ec38747b6d0e9ca9828ec228599dc3f25b3a34b00e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AFPAOJ3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBc9X27paTpo6fnzporIehHmvwOTZYdkoQZLwPUyJl6MAiA9EjAwBensCu18PVKqncXOIABpSnj1rthHIX8XGqBpDSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMe2mdYTtQeN9BgOmzKtwDyb4D454h4ibGOimhs6ElFrJ2FD1V47mMhAATSsSaY8UpZL5VZ%2BgZIQrBA6DTEZKX5nXS9uzjR5yYz1KshWhLJqxGg2YYxpHZ%2BW3tpv73oL16kCPp5S%2Bc%2Fa9pWWFlegzdkOCtWlP7ojF0VWBSykEV%2Bs7TMRM8E1Ch51fsFqvGSrxIWek8pwSvW3w00Rw%2FylD9999TLGCI5zyyfp2UQ221D%2B5gkdJ%2BUfjejB7s2cX%2F04V%2FO%2BTIqJiok1IbxJpebSTxk4V03QBoQTMgNaFGbGqqdjF96dxz%2BVF8Kbcesyanem2jKq8m%2BJCiMErOAtQR0s5sjOcqSgITiJ95nu8%2B8bGz2Iuo6LSbo4l%2BTO1mhAaiBE%2FyNYey%2F8Jdyn%2B%2Fz04eTuMRtmlsk79tk%2F7xXISmwE3359hPN2qc7HsZzisVQdnmaflbnzsoEyG3ynmRmy9vrXPgD6F8%2FA4tdaTnFw%2FqXVLoa0SEpTWGKJPMyG04loXAyOkXsqLYCXjUU%2FYAgav%2FiG2TIvtW%2BKyJhr8lYbuNO7O202DlNOqtiHltXmE0PiHj8TO7e1tuMKbWW3HNKXDJYcxjW0DB1oKwm%2B8GBKmi%2FXmU%2FqCK2h6AC%2FSdPplETtLBqV7lktv5WWExuma6Cl0wnsaKygY6pgHBfi%2ByKaspXCjJBnhMwcD9SVA%2BbqHK5GINloORygCEuSmxI5X9j3EAWIfyAxLEcniaxwaodlrZ7mTSWZl7vfnVfpjXHpTs81C1XV4VHV9P5nqUtY3agJ47T%2FN3ubD9ODMccHzxZyzttoqNmmD3b2nMfZ6ftNKUSEAXnXfCOLSPodpa6kZbY4PTDcIESFoCn1UO74yA7hYYPPmR4eCK%2FksUI%2BxrhjJB&X-Amz-Signature=c87c529eeedca66b6f9df48b7c6996339541b9db727909b7efea1d58bb38de18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
