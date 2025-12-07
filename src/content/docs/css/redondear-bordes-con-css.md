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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDNTSILW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T213033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH23mD6hqODhMqARdBrzQR620m4MsOwAUTtXJvZpR3aCAiEAywl1DG9VMcCr4mOqG3b%2BYmCBk%2FnOhne8qyXoRBKyjT4qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHR7rYO15Nmo4%2FpIHSrcA2Wr8uBO43VC7aV690mBM%2B6K%2BpquWy5BICqnmyIkeE045iyPSSkUQWuy204hxGbU8YeKDELwaRIkC4RyeFHkEZnfavL31vdBTaqmYX%2Bu9jMRKNsOhGksSf5DjhCKuvXBJNDOHBVIs6CuTuCRmH0309H8czKYYmWlJEIoNUHta5yDK4pEQVg73QnfsriY8Fm9ieA1SKQksmAfFYf0WQ%2BLnXU9d3gPMIMjxb1UWSDOyyJLBAi%2Fn2ECXuU6erVrev0KTjyAT%2BgbrFkC9IvVg50R1s1%2Bgw5sZ3PmtF6Iu%2BOnE7ZFhgeKF7hbcvcUN8cUjpY1gMx%2F%2B4cMUIVhUoT5sgslyqjiZdQlqml04hDh9QRI8e1%2F4bpMSTP6aJlFAIkfRCTTVIdJMYDWGw1QQD8DzTPYaUeIG%2FqIBf3m4vaP5PA7kO2Sqysz7j8cjZLpxxPJY6%2Bf7xVIb0dqwd%2BbN3fui7HTcqJuOgnDYkKkd%2FqppSHvT8yl0x8xSry0NhXaaFOOOoicdZLCep7m%2F%2BKixNxb19RE6TE08PiSei25fCa131zVrTBpLckmlq3dIgAJn%2BpWi2nXNf7qSHGd8FtNj8pgnlLWPJK8zeL0T8bJy8CdNk5EXFV7m7Oc5wZgktTwQxNRMITI18kGOqUBMWhfP1Y%2BWLdEdrbMfzIZ%2F02OiU1lq9NXLZ9J97opaIGIToPZDJRFZGTS%2Fa7P%2FhH3Bsz9%2FfWnexFc0R%2FcSxDZ3mhuO3xUFoP8n21GbM6B5bcMkCa%2F3HDrXR9hPrzIWF1jJXJuthltlPpVPn7i5kpjHxtxGcur3ekPVjpBSDYbVsoRNQb6Uz3jwb6bMSWgF1opjCKkJHN62zp31WPT5Y%2Bh9Rz58Dfr&X-Amz-Signature=18cd2b9d33e644abac3dec46571a0396d88aec2f705816893547c936cd0c05bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDNTSILW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T213033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH23mD6hqODhMqARdBrzQR620m4MsOwAUTtXJvZpR3aCAiEAywl1DG9VMcCr4mOqG3b%2BYmCBk%2FnOhne8qyXoRBKyjT4qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHR7rYO15Nmo4%2FpIHSrcA2Wr8uBO43VC7aV690mBM%2B6K%2BpquWy5BICqnmyIkeE045iyPSSkUQWuy204hxGbU8YeKDELwaRIkC4RyeFHkEZnfavL31vdBTaqmYX%2Bu9jMRKNsOhGksSf5DjhCKuvXBJNDOHBVIs6CuTuCRmH0309H8czKYYmWlJEIoNUHta5yDK4pEQVg73QnfsriY8Fm9ieA1SKQksmAfFYf0WQ%2BLnXU9d3gPMIMjxb1UWSDOyyJLBAi%2Fn2ECXuU6erVrev0KTjyAT%2BgbrFkC9IvVg50R1s1%2Bgw5sZ3PmtF6Iu%2BOnE7ZFhgeKF7hbcvcUN8cUjpY1gMx%2F%2B4cMUIVhUoT5sgslyqjiZdQlqml04hDh9QRI8e1%2F4bpMSTP6aJlFAIkfRCTTVIdJMYDWGw1QQD8DzTPYaUeIG%2FqIBf3m4vaP5PA7kO2Sqysz7j8cjZLpxxPJY6%2Bf7xVIb0dqwd%2BbN3fui7HTcqJuOgnDYkKkd%2FqppSHvT8yl0x8xSry0NhXaaFOOOoicdZLCep7m%2F%2BKixNxb19RE6TE08PiSei25fCa131zVrTBpLckmlq3dIgAJn%2BpWi2nXNf7qSHGd8FtNj8pgnlLWPJK8zeL0T8bJy8CdNk5EXFV7m7Oc5wZgktTwQxNRMITI18kGOqUBMWhfP1Y%2BWLdEdrbMfzIZ%2F02OiU1lq9NXLZ9J97opaIGIToPZDJRFZGTS%2Fa7P%2FhH3Bsz9%2FfWnexFc0R%2FcSxDZ3mhuO3xUFoP8n21GbM6B5bcMkCa%2F3HDrXR9hPrzIWF1jJXJuthltlPpVPn7i5kpjHxtxGcur3ekPVjpBSDYbVsoRNQb6Uz3jwb6bMSWgF1opjCKkJHN62zp31WPT5Y%2Bh9Rz58Dfr&X-Amz-Signature=1626354a500f454c536dd6412874ec48281778b8048111dfaf65519dd94d8e71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
