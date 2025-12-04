---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ2RI2UI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBGuWUrM7UXf9KcmTavSU%2FeYawOYy8mILgsXooWoF70pAiEAtjbsRcWtZjMBQO2l9oBfQ8ERc%2BjfqD5KKnrNR%2Bn%2FsIEq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDOhf1r7V8ZqQe3hUIyrcA%2F8n8t1ADOxjVIaHzn1punjOTvl%2FUFvtcllsHsoKx9YwtHVVnz8KtF2z9K1y1%2Bul2PbLs0HoVA%2FMYUUvmNcmG9QCqTE%2B24S%2Fh9KAwdeJmB%2Fw0mRduSsWjGobpPPD6rbIopN5Yc%2BZ3FgleWudBgyk4NlzL%2BFbCjhgchFaJ%2BXAcWvVYEJ%2BOS5uFeT%2B07udgcOuAbldSpYotD1%2F%2FrKsDQ1ugVdI9ckK5gxMqsgbWp07usTRbmiZrWIMyfFWdJ3SjF7vLCJHVdZwOWIc8oJeeuWOkA51O7MHxQAP%2Bg0v%2Bj3%2BXQFhngtmwMQwLOY0ARfIltF5Kp4kFb8YmQQTmT%2BKS9SCljBOvhzZXbcZ8oEXtcqhHzq4SDsEdyXCZpjJQIVUHvwCEiteA%2B6tA%2BSwjWyFxp5CQ0c1UmSIbrruwdRd391nzBa7GcTHpZ7kMDbyHCEHkc8PvrZBi7pdeJpyPtSQA1P6a6DNxl8TMSvMsO3DSXWgG2k3Gfhumjxj0sPzOqro5paJRxPbro47QUytlFojIJVvpRJitrm1crBYChEIToDNkZ3S%2FvLVgfYV98gWnrJrggU3CzaWh3xVs%2B9sXGe4ol2Plg30CVYGxlBgYvcfYk9IeAQAA%2FNsIWrWBC11pIh0MI2QxMkGOqUBJ3BT24GYxbZ1QriYcRhL1%2FtKQoycL0kj2uqsbqrU6Zaow2nNA3TmoupmNVL%2BSa1jldzq55EHX5A3Ug8nkwt6uRCVZMNPLASLzj1ADr7VAc2%2FyEY31tOJDmXElQ79PWmNxb9zrkGlrr4I2uMYJEMoGEGBX2s2PehJQjWFoRtayHpjcqf8cqplm6tyK3yicd7jUGwnYHFZrkcXx9uPYOy0f8YS1lcC&X-Amz-Signature=014be70d91c16b4510028afb5c07e688aa47d1080e2330aae224e2d0c92e3551&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ2RI2UI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBGuWUrM7UXf9KcmTavSU%2FeYawOYy8mILgsXooWoF70pAiEAtjbsRcWtZjMBQO2l9oBfQ8ERc%2BjfqD5KKnrNR%2Bn%2FsIEq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDOhf1r7V8ZqQe3hUIyrcA%2F8n8t1ADOxjVIaHzn1punjOTvl%2FUFvtcllsHsoKx9YwtHVVnz8KtF2z9K1y1%2Bul2PbLs0HoVA%2FMYUUvmNcmG9QCqTE%2B24S%2Fh9KAwdeJmB%2Fw0mRduSsWjGobpPPD6rbIopN5Yc%2BZ3FgleWudBgyk4NlzL%2BFbCjhgchFaJ%2BXAcWvVYEJ%2BOS5uFeT%2B07udgcOuAbldSpYotD1%2F%2FrKsDQ1ugVdI9ckK5gxMqsgbWp07usTRbmiZrWIMyfFWdJ3SjF7vLCJHVdZwOWIc8oJeeuWOkA51O7MHxQAP%2Bg0v%2Bj3%2BXQFhngtmwMQwLOY0ARfIltF5Kp4kFb8YmQQTmT%2BKS9SCljBOvhzZXbcZ8oEXtcqhHzq4SDsEdyXCZpjJQIVUHvwCEiteA%2B6tA%2BSwjWyFxp5CQ0c1UmSIbrruwdRd391nzBa7GcTHpZ7kMDbyHCEHkc8PvrZBi7pdeJpyPtSQA1P6a6DNxl8TMSvMsO3DSXWgG2k3Gfhumjxj0sPzOqro5paJRxPbro47QUytlFojIJVvpRJitrm1crBYChEIToDNkZ3S%2FvLVgfYV98gWnrJrggU3CzaWh3xVs%2B9sXGe4ol2Plg30CVYGxlBgYvcfYk9IeAQAA%2FNsIWrWBC11pIh0MI2QxMkGOqUBJ3BT24GYxbZ1QriYcRhL1%2FtKQoycL0kj2uqsbqrU6Zaow2nNA3TmoupmNVL%2BSa1jldzq55EHX5A3Ug8nkwt6uRCVZMNPLASLzj1ADr7VAc2%2FyEY31tOJDmXElQ79PWmNxb9zrkGlrr4I2uMYJEMoGEGBX2s2PehJQjWFoRtayHpjcqf8cqplm6tyK3yicd7jUGwnYHFZrkcXx9uPYOy0f8YS1lcC&X-Amz-Signature=edbd4b3022f3ba688991042247f5d3d7e5dbcfa0c409defa15da3a8e3f22b9db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
