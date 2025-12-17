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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W27C4G7Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T171308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP0X09wY31mcnN4a7P43wNxLCHwnRJfyXFD9tsF4fhYgIhAMokCau1B5UOK77XpIgog3yzc307LbqJXhFPvgwBg7nsKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FlY0HhkVF8tU5zUwq3AMCS52%2B0K2g%2B9ydrL9AL1NErOTGWtUSre7zHKmGuJx7wIn6JySHSkk3CB6YfrlWmBCO93VW%2B9DnMg%2BQy9BTp%2B17qWXmCrSJdKzA4uPzmdCnVpJBnUO9kf7v%2BlTGNdwb7aHgeueGz3M45gNep0SCZOb0JuBkvwyRNbWDuEDheeVofVb3Dgb%2BpZkTaygovu6M%2BiC9juSI4EiyaZFRTcGiIrHkzbCyoJ2vuRo%2FhlwXZ8laCtoUkTtKdXiHhEDb3xmV8H0u4BNtxbaiOos4LWhpTE7bypr9RjWmhM4wQ6fbYwzc8yMa6NllfESDfSzYcwCZ9WOXB5V%2BZ4Y461yNqCTL%2BMiiO2Os0COc3Kb00R5woWuRmP19WJjjcIVtL77T98zMQ3MtZ%2FSFGShMlZt3s7sTM7%2FL5F2kcdIee9PiyJIJiXe15nQ5UWIFkOu2OOKD2hG09lh%2FGNZ0OURp0L%2FL5zPek0DI0dqgnScBD4PnOAx5XklfeoN8rdUa7GVs83RaC8B9pjcdH4VqSUS0U12n4Fwm8cNzkGjQ5FJi%2Fu6nLDK1WpviziOrYJceAFXdpNN9QFEl1FyTu2yn40tS3q2lQmPNrznT72cVs4lrtg%2Ffkr%2B%2BZuUqe4soihwz49Af7Bpu7DDToIvKBjqkAThCWm9Qzv4A1xaHjleY7JHZyBDnNULU%2FkCUGtTGIAXBUb3SX07lcLLAPXH%2BTCTP%2FEhd%2BfOeF44H4yh7Vl4jZcaU2n7y6T%2FmgpZluXPlwhdUUXRj76yWLPIq68WJe7orVn85wWbaEYM9anZ12KHANcxf0tFofUV9kE1C1Imb2Ep8fRxS%2F0mkW%2FtXkSoLNs7L4NCFeETjukA%2FAA9DmucBC9Mnx7FX&X-Amz-Signature=c1c1e8644159542cc1d41f9ac7830c243b023f834e646b15cae89513250a5beb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W27C4G7Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T171308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP0X09wY31mcnN4a7P43wNxLCHwnRJfyXFD9tsF4fhYgIhAMokCau1B5UOK77XpIgog3yzc307LbqJXhFPvgwBg7nsKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FlY0HhkVF8tU5zUwq3AMCS52%2B0K2g%2B9ydrL9AL1NErOTGWtUSre7zHKmGuJx7wIn6JySHSkk3CB6YfrlWmBCO93VW%2B9DnMg%2BQy9BTp%2B17qWXmCrSJdKzA4uPzmdCnVpJBnUO9kf7v%2BlTGNdwb7aHgeueGz3M45gNep0SCZOb0JuBkvwyRNbWDuEDheeVofVb3Dgb%2BpZkTaygovu6M%2BiC9juSI4EiyaZFRTcGiIrHkzbCyoJ2vuRo%2FhlwXZ8laCtoUkTtKdXiHhEDb3xmV8H0u4BNtxbaiOos4LWhpTE7bypr9RjWmhM4wQ6fbYwzc8yMa6NllfESDfSzYcwCZ9WOXB5V%2BZ4Y461yNqCTL%2BMiiO2Os0COc3Kb00R5woWuRmP19WJjjcIVtL77T98zMQ3MtZ%2FSFGShMlZt3s7sTM7%2FL5F2kcdIee9PiyJIJiXe15nQ5UWIFkOu2OOKD2hG09lh%2FGNZ0OURp0L%2FL5zPek0DI0dqgnScBD4PnOAx5XklfeoN8rdUa7GVs83RaC8B9pjcdH4VqSUS0U12n4Fwm8cNzkGjQ5FJi%2Fu6nLDK1WpviziOrYJceAFXdpNN9QFEl1FyTu2yn40tS3q2lQmPNrznT72cVs4lrtg%2Ffkr%2B%2BZuUqe4soihwz49Af7Bpu7DDToIvKBjqkAThCWm9Qzv4A1xaHjleY7JHZyBDnNULU%2FkCUGtTGIAXBUb3SX07lcLLAPXH%2BTCTP%2FEhd%2BfOeF44H4yh7Vl4jZcaU2n7y6T%2FmgpZluXPlwhdUUXRj76yWLPIq68WJe7orVn85wWbaEYM9anZ12KHANcxf0tFofUV9kE1C1Imb2Ep8fRxS%2F0mkW%2FtXkSoLNs7L4NCFeETjukA%2FAA9DmucBC9Mnx7FX&X-Amz-Signature=1c2a2fe94894f124cf18982f8b7f9fc3b1199c20a11902d148cb70e0099a8f8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
