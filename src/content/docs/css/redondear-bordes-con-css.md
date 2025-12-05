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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRZS5IN2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T212833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDues%2Fd6qGuwHPihOuznWTtoNwtR%2BVW8OIt1%2B7KlfeI4wIgbPZ4kxPR9JaFXEgE%2FA6qo%2FC6Y%2FcV6796l%2BMROuyccggq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDK9%2Fu9RAxnvagopOEyrcA%2F9I3p5Z%2B7AqcAhy2ePSchfNbqSZI0vfrWfd65NyTtbSJ0ZJAeg%2BDZHxwwOp%2FIT4rFp9DfUoNhiGwPGMZT4Gd75pWW9iW1Em0QvdlD3vA0JMxMrK2FlI7bhZjK3LdLf%2BOxVNo6ucJZGpn5rAQeQ%2FCH2WuFQ7E3zMsmX5WmAxBjElWS2VZIT%2BMdE0ki7mW9T4PnFcMqRo1mAgmdd0NgikcTMzyUPH4ATQZN2WXMG44Fx0vXUgllmhTpvdiUqkUUZqYBQzWn48h6Sme9jYLfZZT1OFWjwoU4oBAc5SMIY7N8F7MAMdNZO1X17Ey1dgox8MNrMUXVnckUlX3DjTaBoAafXPvu9D4pTWIe1N%2FnKROa65u4R5mHuSe08z1gL%2BYRzcDcxSQC0Ej5FCKSmBxK%2BhbCmUfIjO8LadzWaw%2BW4RUW5bQypPWnjFOwmSeSzh7Zo9hUoXr6Zie%2F86oH2GIzSLWa5uvvfNWMUJuwvRfZ6NWJvHAx%2Btn0gIILaOiNvVkkP6quLR820nZNLkyPzR%2BmESyhfxdraFYzvofFZNuuEJmFPNBGZeF82rvzYmtvWaV%2FtIl1HUKfDKVs2GHzEp8qEmiUk5XPqBEqNm3MmKCxUGMQxHQX6Y0Hk2U9OXTikjMIGWzckGOqUBAr76RjOFvHkVZ1WLckcro5wDYhOlDvi1162jzT4AtM9uz4Ela7M0Xg6vzt0Kuoz3d9FmB2zvKyahD6%2F%2BrTkXFklz6IoCbMtiThOCQOjcoNziAm4mqrlDwOf8PSB5ILyjoFlhVYV%2FlAzn%2BSNODELMCDz0dskLNFb6f5zcRl5bOVr5iUwmGuE9CflAVqqb9GjBh3tnKl2nQjvg8OTkqIWHAxQHkAGN&X-Amz-Signature=db6bd623299b1e50c784f5eed9dba9031d3dd260e315d30bfefb8d150fb30421&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRZS5IN2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T212833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDues%2Fd6qGuwHPihOuznWTtoNwtR%2BVW8OIt1%2B7KlfeI4wIgbPZ4kxPR9JaFXEgE%2FA6qo%2FC6Y%2FcV6796l%2BMROuyccggq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDK9%2Fu9RAxnvagopOEyrcA%2F9I3p5Z%2B7AqcAhy2ePSchfNbqSZI0vfrWfd65NyTtbSJ0ZJAeg%2BDZHxwwOp%2FIT4rFp9DfUoNhiGwPGMZT4Gd75pWW9iW1Em0QvdlD3vA0JMxMrK2FlI7bhZjK3LdLf%2BOxVNo6ucJZGpn5rAQeQ%2FCH2WuFQ7E3zMsmX5WmAxBjElWS2VZIT%2BMdE0ki7mW9T4PnFcMqRo1mAgmdd0NgikcTMzyUPH4ATQZN2WXMG44Fx0vXUgllmhTpvdiUqkUUZqYBQzWn48h6Sme9jYLfZZT1OFWjwoU4oBAc5SMIY7N8F7MAMdNZO1X17Ey1dgox8MNrMUXVnckUlX3DjTaBoAafXPvu9D4pTWIe1N%2FnKROa65u4R5mHuSe08z1gL%2BYRzcDcxSQC0Ej5FCKSmBxK%2BhbCmUfIjO8LadzWaw%2BW4RUW5bQypPWnjFOwmSeSzh7Zo9hUoXr6Zie%2F86oH2GIzSLWa5uvvfNWMUJuwvRfZ6NWJvHAx%2Btn0gIILaOiNvVkkP6quLR820nZNLkyPzR%2BmESyhfxdraFYzvofFZNuuEJmFPNBGZeF82rvzYmtvWaV%2FtIl1HUKfDKVs2GHzEp8qEmiUk5XPqBEqNm3MmKCxUGMQxHQX6Y0Hk2U9OXTikjMIGWzckGOqUBAr76RjOFvHkVZ1WLckcro5wDYhOlDvi1162jzT4AtM9uz4Ela7M0Xg6vzt0Kuoz3d9FmB2zvKyahD6%2F%2BrTkXFklz6IoCbMtiThOCQOjcoNziAm4mqrlDwOf8PSB5ILyjoFlhVYV%2FlAzn%2BSNODELMCDz0dskLNFb6f5zcRl5bOVr5iUwmGuE9CflAVqqb9GjBh3tnKl2nQjvg8OTkqIWHAxQHkAGN&X-Amz-Signature=8994dc8dfc0f22a4328b8ddee09e5559d1f539976162791b19003af4f203281f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
