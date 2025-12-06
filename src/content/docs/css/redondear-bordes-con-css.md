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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QTLOUBS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T184452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FlOe0%2BFY72awgIyuZPnfAA8juBgcp7QgbiP2C2uVwMQIgFNGfPZhK63F3Zgt7jo8HDcuweCabL%2FIxuNPVbw0%2FkQUq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDCnSRm8Y%2B8C6dH%2BfjircA3clW5sdyGw4c2mUIKI%2BqHGmGPA%2FE6omv0f4MHZJEXDuGUdWwUfxqyLqaLm%2B7ExWRLoI2ErH6Wc1X64jVrTgZ9Q1rqvx5KzWatiSsVUDygvZOudEUqgsGg52%2F%2BwUMC6pOFu6yANUBr%2B5XhSsZbj%2Bodoa7UeV8U0LuAS2Ttygv1%2FKF%2BtTpeuEYXsYTpfzXgzg5yZOUTu4mn5KRRZd141SmHaFhsofVk0btvnUSIizqqRllg7Iq%2BVg2G5NRjccYjluWz1Icf7nDX0NwiHzaAAssvjeayaQdyDjafN%2B0%2Bmjqu%2FZLh8VigKMlzxKKg2RSMYeNMEzfb8tFePflZjNXImTKwv0i8lXm%2B1RqLM94lcQW2Arl2j9YkGI5%2BC2JRgsKetkv60HokJPVvqH5hj9zCy6sI%2BpNO7owN1HdOi9JYXsctCbhEcKDthu4vuBJbWPznuz4ojE%2BJMzzA1zs4HCyMiJjKFeeY2DPdoTOVr3%2F4jWpqf2Z3P%2FhDhjbf2LEvArZkIokpKMKOlJvXXlAZXXMnFHqBNKfmh%2ByhAX2pG0amGAsok9d020jrog0XZrJZUFAqJ5kfUhGBTFOHYvCorSssELqNF2aH15tMrg%2B%2B0aqrN%2BkYk%2F4mrVTSVLcebzdKUrMI7H0ckGOqUBDcaqACGui6z2tOOUqTW6rnilMPTnPRl6nVYNNEQQ9YgnZIpzgU4WJdkdPWHMGpS8gQd9ONfheuCB8WsJQal%2FIKBGgrpcI0P7dOEhB3re%2BnKPNSOdogFaA25qmEufy9lN55HKQLP7RhR%2F4Ri6Yg0o2s4z9X5POnMg%2FDmGEAANrsabiz6IQpbKrYyo3moxe76PpsfLNNgHpG6g%2BnlPVLn9e5keubGT&X-Amz-Signature=86f4852e46bb8dbb458147408a8b08cf988527d20a8cabdc8ce9b2bebdfe0fc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QTLOUBS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T184452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FlOe0%2BFY72awgIyuZPnfAA8juBgcp7QgbiP2C2uVwMQIgFNGfPZhK63F3Zgt7jo8HDcuweCabL%2FIxuNPVbw0%2FkQUq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDCnSRm8Y%2B8C6dH%2BfjircA3clW5sdyGw4c2mUIKI%2BqHGmGPA%2FE6omv0f4MHZJEXDuGUdWwUfxqyLqaLm%2B7ExWRLoI2ErH6Wc1X64jVrTgZ9Q1rqvx5KzWatiSsVUDygvZOudEUqgsGg52%2F%2BwUMC6pOFu6yANUBr%2B5XhSsZbj%2Bodoa7UeV8U0LuAS2Ttygv1%2FKF%2BtTpeuEYXsYTpfzXgzg5yZOUTu4mn5KRRZd141SmHaFhsofVk0btvnUSIizqqRllg7Iq%2BVg2G5NRjccYjluWz1Icf7nDX0NwiHzaAAssvjeayaQdyDjafN%2B0%2Bmjqu%2FZLh8VigKMlzxKKg2RSMYeNMEzfb8tFePflZjNXImTKwv0i8lXm%2B1RqLM94lcQW2Arl2j9YkGI5%2BC2JRgsKetkv60HokJPVvqH5hj9zCy6sI%2BpNO7owN1HdOi9JYXsctCbhEcKDthu4vuBJbWPznuz4ojE%2BJMzzA1zs4HCyMiJjKFeeY2DPdoTOVr3%2F4jWpqf2Z3P%2FhDhjbf2LEvArZkIokpKMKOlJvXXlAZXXMnFHqBNKfmh%2ByhAX2pG0amGAsok9d020jrog0XZrJZUFAqJ5kfUhGBTFOHYvCorSssELqNF2aH15tMrg%2B%2B0aqrN%2BkYk%2F4mrVTSVLcebzdKUrMI7H0ckGOqUBDcaqACGui6z2tOOUqTW6rnilMPTnPRl6nVYNNEQQ9YgnZIpzgU4WJdkdPWHMGpS8gQd9ONfheuCB8WsJQal%2FIKBGgrpcI0P7dOEhB3re%2BnKPNSOdogFaA25qmEufy9lN55HKQLP7RhR%2F4Ri6Yg0o2s4z9X5POnMg%2FDmGEAANrsabiz6IQpbKrYyo3moxe76PpsfLNNgHpG6g%2BnlPVLn9e5keubGT&X-Amz-Signature=92dbaa3672639b0cf8a4a45365ff81cd2e006edc08ad02c2156ace8935714eaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
