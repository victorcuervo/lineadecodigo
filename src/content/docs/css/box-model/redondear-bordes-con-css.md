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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O4AMJQG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTUY8xx4lgtwfEqb8k4k0g98HIVN304TSOfPDjd9Z3tQIgJVXb0AxQyWlqi0e%2BaaylwzcW650iTtaSTOcQjEKor5gqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIi3qUY6TjO9G%2BaWcircA1azr06mqJGv45hsnJUkmBoXNvtWKjzbJhDtoDku91x3SLQqrtiyjP%2FkzXf8SJuovM5xvYWZECIFqjoYeDcxtDrdT4IdSq%2FPN%2BS5xeFEh26ZerZTVZO5cF1ttZlTxv87xJp%2FHChu0%2Bw0XKOL9S7emlRr3KgZBLwqmyhRcv7X3jvMSiHa%2Fn00YKbNTx%2FbHOLDteziB7FvD9n9%2BH%2BS8oXJ7VrDGsBi9uvlHmhYOFD0b6ciC9BcItLDocSE9UOYa3p6oVzd1Q2uu4n0YOTWASMB9Ios%2BcVor0GC1cqoNPt%2B8O9k5xc2SRsoIjIKMRZ29PYdiu%2BnOZ5iRtyicySpgTnJWQPYJOtvqBimkpzNF1zYN7K6G9snxKaiNJgFG5xKm0jQgjoW9gQ09obAWqo14fuEzAKZuj8BCyzExMYGCj%2B4Wx7349YaN%2Bd7uCt8LigBYtndDPTlkG7v5kL03xydSIulBDgB8DieoUaol98Jm%2FnsYRdHo9Lw007L6P7mmIhy9%2FmqExYKv7G3PyY7zdz3FPIwIsP%2BWqSB3tS19ntj%2BU75mg7vgK4EycN1RI1zyUxy3zjWZhYmXc7uo%2Bprb94%2Fumn93NfGML9lM2XYgaCK%2By19ICYunxg1eTcbsy6EbF9XMKiujMoGOqUB%2F59kwtYy%2Fx8a3nOmeVzWhX6BW9Em2q3J%2FcOC47RLc3SB5wg6TPZUHXoONCy30oqGFlmnLpQrFAPZcPRCfwT%2FK0k3b%2Bf423F4xcMwnMFLjgRpU08xXGY1iju%2BUqJGB5RA1svWhT6hYePk3OQhAY%2BT0B3Lf7CAvpwMiRjvbwXzcbTUqnBqJuWdDzpc4DlYlvIhY%2Flg2tl5JIc%2FKtKBdW%2FmdS9%2BrPsO&X-Amz-Signature=185d05e4b395b8b7c81d7705582fca678349817ae094686a16d33fbba0c9f87e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O4AMJQG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTUY8xx4lgtwfEqb8k4k0g98HIVN304TSOfPDjd9Z3tQIgJVXb0AxQyWlqi0e%2BaaylwzcW650iTtaSTOcQjEKor5gqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIi3qUY6TjO9G%2BaWcircA1azr06mqJGv45hsnJUkmBoXNvtWKjzbJhDtoDku91x3SLQqrtiyjP%2FkzXf8SJuovM5xvYWZECIFqjoYeDcxtDrdT4IdSq%2FPN%2BS5xeFEh26ZerZTVZO5cF1ttZlTxv87xJp%2FHChu0%2Bw0XKOL9S7emlRr3KgZBLwqmyhRcv7X3jvMSiHa%2Fn00YKbNTx%2FbHOLDteziB7FvD9n9%2BH%2BS8oXJ7VrDGsBi9uvlHmhYOFD0b6ciC9BcItLDocSE9UOYa3p6oVzd1Q2uu4n0YOTWASMB9Ios%2BcVor0GC1cqoNPt%2B8O9k5xc2SRsoIjIKMRZ29PYdiu%2BnOZ5iRtyicySpgTnJWQPYJOtvqBimkpzNF1zYN7K6G9snxKaiNJgFG5xKm0jQgjoW9gQ09obAWqo14fuEzAKZuj8BCyzExMYGCj%2B4Wx7349YaN%2Bd7uCt8LigBYtndDPTlkG7v5kL03xydSIulBDgB8DieoUaol98Jm%2FnsYRdHo9Lw007L6P7mmIhy9%2FmqExYKv7G3PyY7zdz3FPIwIsP%2BWqSB3tS19ntj%2BU75mg7vgK4EycN1RI1zyUxy3zjWZhYmXc7uo%2Bprb94%2Fumn93NfGML9lM2XYgaCK%2By19ICYunxg1eTcbsy6EbF9XMKiujMoGOqUB%2F59kwtYy%2Fx8a3nOmeVzWhX6BW9Em2q3J%2FcOC47RLc3SB5wg6TPZUHXoONCy30oqGFlmnLpQrFAPZcPRCfwT%2FK0k3b%2Bf423F4xcMwnMFLjgRpU08xXGY1iju%2BUqJGB5RA1svWhT6hYePk3OQhAY%2BT0B3Lf7CAvpwMiRjvbwXzcbTUqnBqJuWdDzpc4DlYlvIhY%2Flg2tl5JIc%2FKtKBdW%2FmdS9%2BrPsO&X-Amz-Signature=9488f69cc1007ee7401826f0cdaecc4760d5801a6978a192ac424b7fab98171f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
