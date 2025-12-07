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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC4URWXO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T161530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNVeoDYHuD5ziPbf6bh7GbgUbnNkF5v1graM%2Flz1dXRAIgcYks%2BWpNxxN1I54LykJ8oL35%2F0%2BznlLz5esqR88PrVMqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHx7OgrEhK%2BEba7pryrcA%2B78AxknacJOnjzw%2FUhMvbxyJ9iER%2BmzTh1abfIeplh1RgOZpoCfzpgWMd9fL9yJcXh1LWMFVdkVNGHc%2FgraD8MIpaqTou%2BaeSgLLVt89Pou7432ju6YMcAbKO%2BiYuYUOUXsl8dIz0habe49m0lrrFJeJw9gOdAHs2yhwszzUK1LbWrYsphqp9SyXVDzZf1TjglwwOBYrnhQDorPMxmt8TxnSxse5GoRfsuXxjW8iCpD%2Fkm5YDlKUH3PBX4lbW%2BIkQYTVqqOJt1pY650kkaVi%2BwbYqLYpUah4hzlcasExPoZInQH%2FnmXheOELkslp28S2FCsbf7cDBOSgx70XujbTwOdYJo5QfXHm0mOwm%2BF1uyzQNHOdmpUMtd7JDUudlsLWhGz3KlzmrBkx1c0K%2FAq0%2BrgiaxYp%2BC0KtoClduM5QhqmwcfEaKCq3ATeNfgRFANXSlpmmluUpeHSFmpab9D8p2J9QkhhkMp%2BffpIvimC3Y5as0mXnJpE%2F3EcWEbui%2FYii%2BzEP9i5T%2F90DZZ%2BsinLh7%2BxQi2T045GRFfhFblq6%2FTtckyGDgnIrqIQBdkY2zfbTCdiM4jM3lC0Q%2BIRQ%2ByNfLXMTZE5TPAsrhapPLFhBhV%2Bf0z7%2FEsPqIpCWb6MI%2B41skGOqUBZiE8mME3awKWv6LandvD6unCa2%2BHAlHoON1hZBibumBYtuFdBt%2BOpDS0rz7H7dbDq%2FD0S2%2Bp0mpN2vnFJmtyGi9WHf1gSFG19lX71E0ZJn%2FXmriaDTQdeN%2BltcMEjTY5YOaKR8Rn3RQWjTnYrFhM0Pg8mt4omh0CMMTeqnkMlgtcorUQuqUi%2FTYBfEdufvDjj%2FnJHxNh2eP8AgD2zarHCU3eEBlV&X-Amz-Signature=266d174064ba48c8de89daf762c5f2da3eec8817504d506b1726fefcae5a879c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC4URWXO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T161530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNVeoDYHuD5ziPbf6bh7GbgUbnNkF5v1graM%2Flz1dXRAIgcYks%2BWpNxxN1I54LykJ8oL35%2F0%2BznlLz5esqR88PrVMqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHx7OgrEhK%2BEba7pryrcA%2B78AxknacJOnjzw%2FUhMvbxyJ9iER%2BmzTh1abfIeplh1RgOZpoCfzpgWMd9fL9yJcXh1LWMFVdkVNGHc%2FgraD8MIpaqTou%2BaeSgLLVt89Pou7432ju6YMcAbKO%2BiYuYUOUXsl8dIz0habe49m0lrrFJeJw9gOdAHs2yhwszzUK1LbWrYsphqp9SyXVDzZf1TjglwwOBYrnhQDorPMxmt8TxnSxse5GoRfsuXxjW8iCpD%2Fkm5YDlKUH3PBX4lbW%2BIkQYTVqqOJt1pY650kkaVi%2BwbYqLYpUah4hzlcasExPoZInQH%2FnmXheOELkslp28S2FCsbf7cDBOSgx70XujbTwOdYJo5QfXHm0mOwm%2BF1uyzQNHOdmpUMtd7JDUudlsLWhGz3KlzmrBkx1c0K%2FAq0%2BrgiaxYp%2BC0KtoClduM5QhqmwcfEaKCq3ATeNfgRFANXSlpmmluUpeHSFmpab9D8p2J9QkhhkMp%2BffpIvimC3Y5as0mXnJpE%2F3EcWEbui%2FYii%2BzEP9i5T%2F90DZZ%2BsinLh7%2BxQi2T045GRFfhFblq6%2FTtckyGDgnIrqIQBdkY2zfbTCdiM4jM3lC0Q%2BIRQ%2ByNfLXMTZE5TPAsrhapPLFhBhV%2Bf0z7%2FEsPqIpCWb6MI%2B41skGOqUBZiE8mME3awKWv6LandvD6unCa2%2BHAlHoON1hZBibumBYtuFdBt%2BOpDS0rz7H7dbDq%2FD0S2%2Bp0mpN2vnFJmtyGi9WHf1gSFG19lX71E0ZJn%2FXmriaDTQdeN%2BltcMEjTY5YOaKR8Rn3RQWjTnYrFhM0Pg8mt4omh0CMMTeqnkMlgtcorUQuqUi%2FTYBfEdufvDjj%2FnJHxNh2eP8AgD2zarHCU3eEBlV&X-Amz-Signature=731a1638dff3e92f29c44fc3a450aae6ab3e11bb3f479f85d55fdf09c505bd5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
