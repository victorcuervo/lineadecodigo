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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEQIBFYV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T001359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu5L%2FwDdw6biAMs09X3yH0Uo8c6xU2Yxn9UpvA%2FZyNAgIgTzA5qTwFlWzID2BYj5wvfz3VZsa5%2F5HB0MT4y8gT96YqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCK67RhozBQRJ%2BhEircA4rULXZ3Vj3K6BFA0abDME3YBnYuPO0b03DWP5790HnwBDblaWAyg4qF5QjDnPqQNyRIIH1iF61HztMdC7EqnDq2IbHTz8DP7V5P3JmpW7WxuiZgZWWp2iUbSXGLi531OaxJxwE%2BW3JBQSVQveXQwfzfgekbnLWGGaf6icpYlDMsz2znnnSEeQWxp9jtLtjDwVQgUFy7h%2FApe4vFi71GOJ4Z4MRxLZWHNIRe6L60Z1IltWwGqBbJiFqrCOHTGbkun9iI2cP3jQz4P3e4lFx58HXDlO%2BOlZ6i1PFxXaPDHC%2BA0QZJe4n3WSUTPq6LbNBGM3uUhtmt67%2FA8hsJ4IQoZFSQmVUhk4ge66jVReox0szPg046SO36y%2BxdmBuBCPj52Om%2Fiu1yU9jYz%2FtaTr1HF%2FA2btWaXdz8eewvLxo3lQxqNK8D2Xq%2B9BnTFaUs478%2BD%2BvfLtNVtfGCtyR0fsW4LUJwW8M%2F0kyiR22DUOrFwWzpRX2JIP4FkHrEtNBwPpMF9vh9oTqZaN%2BC08mZRkbIRDYp%2Fq33ARMp3cYICBMLsfoUxbohP8juVi%2Byu5sqBS5fsNs1OU3Tm4kJb%2FFto69P4sdpXI06TXOG8%2BVHsND1nFe4gsDYPT%2BP4GAyKshyMOzC3ckGOqUBlw%2BPE0gPx2cmWfJ70wvF3%2BoocIPz6oUTYTQG99MuXEpPEaAYgSczdOoF%2F8lwJC7iqB8qxxgr4zgkVR5RbgzEDBkyj%2Bmi3WlGdwjB54w%2BCD8e4JYNxKHg6m2Z15%2FByzAZ6RTrIbftygjIwwzY0HVCwA8DI4govHrzK45pDMuW2lyzspv%2BR2fkkEnf%2BLzMnD7Qv4zj2Uk3TQ5M4O9EQD2IPQQ3MG9H&X-Amz-Signature=066a4e764429d4c66a315a9753b689fc87dd92ae3f204ea94ed544a13008b86f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEQIBFYV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T001359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu5L%2FwDdw6biAMs09X3yH0Uo8c6xU2Yxn9UpvA%2FZyNAgIgTzA5qTwFlWzID2BYj5wvfz3VZsa5%2F5HB0MT4y8gT96YqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCK67RhozBQRJ%2BhEircA4rULXZ3Vj3K6BFA0abDME3YBnYuPO0b03DWP5790HnwBDblaWAyg4qF5QjDnPqQNyRIIH1iF61HztMdC7EqnDq2IbHTz8DP7V5P3JmpW7WxuiZgZWWp2iUbSXGLi531OaxJxwE%2BW3JBQSVQveXQwfzfgekbnLWGGaf6icpYlDMsz2znnnSEeQWxp9jtLtjDwVQgUFy7h%2FApe4vFi71GOJ4Z4MRxLZWHNIRe6L60Z1IltWwGqBbJiFqrCOHTGbkun9iI2cP3jQz4P3e4lFx58HXDlO%2BOlZ6i1PFxXaPDHC%2BA0QZJe4n3WSUTPq6LbNBGM3uUhtmt67%2FA8hsJ4IQoZFSQmVUhk4ge66jVReox0szPg046SO36y%2BxdmBuBCPj52Om%2Fiu1yU9jYz%2FtaTr1HF%2FA2btWaXdz8eewvLxo3lQxqNK8D2Xq%2B9BnTFaUs478%2BD%2BvfLtNVtfGCtyR0fsW4LUJwW8M%2F0kyiR22DUOrFwWzpRX2JIP4FkHrEtNBwPpMF9vh9oTqZaN%2BC08mZRkbIRDYp%2Fq33ARMp3cYICBMLsfoUxbohP8juVi%2Byu5sqBS5fsNs1OU3Tm4kJb%2FFto69P4sdpXI06TXOG8%2BVHsND1nFe4gsDYPT%2BP4GAyKshyMOzC3ckGOqUBlw%2BPE0gPx2cmWfJ70wvF3%2BoocIPz6oUTYTQG99MuXEpPEaAYgSczdOoF%2F8lwJC7iqB8qxxgr4zgkVR5RbgzEDBkyj%2Bmi3WlGdwjB54w%2BCD8e4JYNxKHg6m2Z15%2FByzAZ6RTrIbftygjIwwzY0HVCwA8DI4govHrzK45pDMuW2lyzspv%2BR2fkkEnf%2BLzMnD7Qv4zj2Uk3TQ5M4O9EQD2IPQQ3MG9H&X-Amz-Signature=c363b63612f2368ea099a906acb2e346390c7cde49d81547411e5615de3f8ed1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
