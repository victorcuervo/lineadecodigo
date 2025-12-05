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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JIGYPZ3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T065126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgh2up5wMB4X%2FPknakxKaej5JqoHembzw97xRwSRsWEAIgMT%2FkmGPIeqWV18Oq3CF0xiVWHmt0nzgWRfjl0b08MNwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAUMqll7w3VY279xGSrcA%2Fy83s7JKgSf4qC%2Fr6f13taNGR2%2Baq2aQWi683xOYfk%2FJ60sC61sXBPHmO8ztltmjgKroRL77Y46yrx1IIY24kUaZo0pZz9%2BxPSbLWPhhfYzEQNssl0Enppj1B6OLxrpxWz6KGaSjsqFLkuybZgeWPyQFcdGEd1Sm9L3Xi8JPzlEXmQjSM77vSXHznVh7o7OjZCCh41jd6W8bXt6ve0ZhgQiyNM5WxBaWiW4OkfoQEFS0o7IxqKA25c07HQGhzZbbfnyqC9zGmMP9TG7QVkErHZBeVhHSPcfutB1ijsd8Z8%2B%2BT%2FsfFgCYymdQW89Eis3%2B7%2FloqdnZG9fl0vfVX8QP5pgO4XoH1ieVna14MxdFWVuTE8c314QpNfjo1l%2BUQRhyxuIS2KuukL%2BphdLuaLqNr4L9DTx5v1GsoLPgOhjMnZ593HsjZrh2rTUngd8WL0gGzZ98%2BmebWip1YbK6fhCnVdPmNNUSpa6cOa9Rur32BycPyvnZOI2eHqtdeOLTKECUZYXtIU7kgtsOPgwHx78QUCZJxg5ytOl0KDu0KDHuzUTd2Z%2F7mvjL4yzv4OC0PCoQdBg5Klz8uSCq7P4st7mzslpwmOV362k1S%2FiTb9za9UPAKbZcB4iCwt3O3t4MJusyckGOqUBi7vGUJ6cNZGsjS84FSDLsDfRtceQpdq0a1YSR55sQR4OvNAAK%2BVo83zSDz4pH2lS8eHSbJ8f4gvGn%2FP9t9IKlJK%2B69C1XV94w2NNdePpea%2Fh1W815Xwl7SDYUMczrGNxaJUbHhH9rRbC1%2BuQyYKq2OLNUJCJXbK8HucVi8D63sYRCpAyZN6q6W4FikeHp74%2FNudNAtudMQL4P0eQaqGLr58%2FtdCH&X-Amz-Signature=fe9ccfa09337e92937e355c3179f5929d0480134655de1aac12214f933f557af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JIGYPZ3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T065126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgh2up5wMB4X%2FPknakxKaej5JqoHembzw97xRwSRsWEAIgMT%2FkmGPIeqWV18Oq3CF0xiVWHmt0nzgWRfjl0b08MNwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAUMqll7w3VY279xGSrcA%2Fy83s7JKgSf4qC%2Fr6f13taNGR2%2Baq2aQWi683xOYfk%2FJ60sC61sXBPHmO8ztltmjgKroRL77Y46yrx1IIY24kUaZo0pZz9%2BxPSbLWPhhfYzEQNssl0Enppj1B6OLxrpxWz6KGaSjsqFLkuybZgeWPyQFcdGEd1Sm9L3Xi8JPzlEXmQjSM77vSXHznVh7o7OjZCCh41jd6W8bXt6ve0ZhgQiyNM5WxBaWiW4OkfoQEFS0o7IxqKA25c07HQGhzZbbfnyqC9zGmMP9TG7QVkErHZBeVhHSPcfutB1ijsd8Z8%2B%2BT%2FsfFgCYymdQW89Eis3%2B7%2FloqdnZG9fl0vfVX8QP5pgO4XoH1ieVna14MxdFWVuTE8c314QpNfjo1l%2BUQRhyxuIS2KuukL%2BphdLuaLqNr4L9DTx5v1GsoLPgOhjMnZ593HsjZrh2rTUngd8WL0gGzZ98%2BmebWip1YbK6fhCnVdPmNNUSpa6cOa9Rur32BycPyvnZOI2eHqtdeOLTKECUZYXtIU7kgtsOPgwHx78QUCZJxg5ytOl0KDu0KDHuzUTd2Z%2F7mvjL4yzv4OC0PCoQdBg5Klz8uSCq7P4st7mzslpwmOV362k1S%2FiTb9za9UPAKbZcB4iCwt3O3t4MJusyckGOqUBi7vGUJ6cNZGsjS84FSDLsDfRtceQpdq0a1YSR55sQR4OvNAAK%2BVo83zSDz4pH2lS8eHSbJ8f4gvGn%2FP9t9IKlJK%2B69C1XV94w2NNdePpea%2Fh1W815Xwl7SDYUMczrGNxaJUbHhH9rRbC1%2BuQyYKq2OLNUJCJXbK8HucVi8D63sYRCpAyZN6q6W4FikeHp74%2FNudNAtudMQL4P0eQaqGLr58%2FtdCH&X-Amz-Signature=c171a31c01374d0ed51efbc025099e74e4da6869a84b54b91afb03c76b101717&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
