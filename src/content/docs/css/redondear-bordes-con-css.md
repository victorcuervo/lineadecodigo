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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N2PLIWK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T035614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2ivHKClTWVQDw3EoCs37xQfoJxVFL3FmwtvF0ShR6sAiEAxawznB7qVG7Bzyd7tGd3PkgnyBrQ3wIuFFFcgBPZV%2BwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNzQH5b3TgCFpyK6QircA82E1K0tfPUgThJX35RHDon%2FmWx%2BroBvbCInx6L2mfR%2B9XffwtUW9oE0sZRwIZmsHoCFY1zosomCFqThpu8jU1rgFSmHvDmA3DsVtSwi%2FE6nJq6Z70UDLiXspQBEe7MOn%2B80x8vwI%2FLP7vA%2B1YfcSI4ZlCIqJH8Ngea%2Fbjiiz79nCvFi8i7EpkyoKzXXquZXJAgv7geMU36%2F8XIXvZWbh7mPgojo9P5FqhIRqbp6Ewz34ZT1D6VeK8CNRsVDeGGWg5DFfbOkr6v3TEpk1qlIEXz5UxPH9Zvxg1uPOsbwhgSgFWMK3l8J803Z9EtltxgUI4HmAdj1M45aOPIflOC93Y8NunkOuxF7Hbvaa4xace2SwKEc1lKkQ%2FkG0GA3C4%2Fhx2qewBYiZfsheK5tdH7OcaJvTR82e%2BfwiI6PQxhXjpOlj1XeIC0cpIPo7KdIGPDDdMhWnMZv0Rba5wO83m4k7OmX3ep3xb%2FPqPfXlSJncICVg%2BJ%2F7ch3pfjaAoRDkDdtJ03ewgkwyNXFEqf%2Fg%2FGgTK%2B%2FoP%2BV63w6fJxw1sntMgBKiyrctxBwlX0W6ty2g0gBlVzDLw8Obwz1pi6ks3XFJikI%2F8bsOl76lQos0%2B1Z0aZPW7IC6UrFNf%2BgbLTsMLX90skGOqUBqT0NxFfA%2BleYxQvxUsP1CTqzgydYTo%2B0Y15cPmVg7O82HgeIcE3Ve19QC8GFNiriXJXcsuRBEdW%2BzE06lGl7Up1G%2FYSPZ1zms%2FNVBZ7s2anjt32g30csOI2URMS8QDLfVbzjqmDAPKDOAg%2FpQ%2B%2FBfNwvc53y3mrS6iIOOJsPmpCmlS1X8%2FJQnyKALPnijhx9UQ0LGh7ybEx3bgmoXn14APzx5MXs&X-Amz-Signature=2a97160f46a7c66a897b7fac427cdcb4a559292c719fd475a8cc0699ac22b690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N2PLIWK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T035614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2ivHKClTWVQDw3EoCs37xQfoJxVFL3FmwtvF0ShR6sAiEAxawznB7qVG7Bzyd7tGd3PkgnyBrQ3wIuFFFcgBPZV%2BwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNzQH5b3TgCFpyK6QircA82E1K0tfPUgThJX35RHDon%2FmWx%2BroBvbCInx6L2mfR%2B9XffwtUW9oE0sZRwIZmsHoCFY1zosomCFqThpu8jU1rgFSmHvDmA3DsVtSwi%2FE6nJq6Z70UDLiXspQBEe7MOn%2B80x8vwI%2FLP7vA%2B1YfcSI4ZlCIqJH8Ngea%2Fbjiiz79nCvFi8i7EpkyoKzXXquZXJAgv7geMU36%2F8XIXvZWbh7mPgojo9P5FqhIRqbp6Ewz34ZT1D6VeK8CNRsVDeGGWg5DFfbOkr6v3TEpk1qlIEXz5UxPH9Zvxg1uPOsbwhgSgFWMK3l8J803Z9EtltxgUI4HmAdj1M45aOPIflOC93Y8NunkOuxF7Hbvaa4xace2SwKEc1lKkQ%2FkG0GA3C4%2Fhx2qewBYiZfsheK5tdH7OcaJvTR82e%2BfwiI6PQxhXjpOlj1XeIC0cpIPo7KdIGPDDdMhWnMZv0Rba5wO83m4k7OmX3ep3xb%2FPqPfXlSJncICVg%2BJ%2F7ch3pfjaAoRDkDdtJ03ewgkwyNXFEqf%2Fg%2FGgTK%2B%2FoP%2BV63w6fJxw1sntMgBKiyrctxBwlX0W6ty2g0gBlVzDLw8Obwz1pi6ks3XFJikI%2F8bsOl76lQos0%2B1Z0aZPW7IC6UrFNf%2BgbLTsMLX90skGOqUBqT0NxFfA%2BleYxQvxUsP1CTqzgydYTo%2B0Y15cPmVg7O82HgeIcE3Ve19QC8GFNiriXJXcsuRBEdW%2BzE06lGl7Up1G%2FYSPZ1zms%2FNVBZ7s2anjt32g30csOI2URMS8QDLfVbzjqmDAPKDOAg%2FpQ%2B%2FBfNwvc53y3mrS6iIOOJsPmpCmlS1X8%2FJQnyKALPnijhx9UQ0LGh7ybEx3bgmoXn14APzx5MXs&X-Amz-Signature=908f1f31923560a58e71f9ed57d8f57a67fe4088c96ead64ba1f653a5b561602&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
