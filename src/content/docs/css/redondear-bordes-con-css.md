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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZM6SZXE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T013648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCclVJHqxmoOluqv%2BhHagniGUoVUHTpRMe9JrEVp%2Ft9tQIhAP2wYasBngPvZR708dX3dBYtiDe6r29JSW%2Bh9ovAvDwDKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJdF79z9Z4OsVEEFsq3AN3sosL9caOmLzoYHykTwLeGtj95h80dZP8dKIGh8Zo7dHs0W5%2BP020JB2DcbZj%2FQD6VNfNfk%2FVM2RZ10XbObjCRIR1VcRLitnsEsUU92I1vd%2Fa%2BqSnzsfRgXclprSTjWpk76YuaYW3ggallIlK570155PwBRiDnIqP6xzgxpnlyWdOx%2BGvj7qnMRba6vdwvOrtz4L2%2B9M3UjQm%2BD%2BMYDNIPBLk9FIPNHl1Kytoqkaz4Ytx4Xu5JgveX2t%2F8oUWtZ2U4nCU1c1Agz%2Fg6fA7Z3KMxQGAwXx1ygpcH6HJksfs0f4pfPi%2BlLLeadgjoEfFyIWivA6hR7YF6J8gB7nbI62ERavpP4tH3tVmqhktyRd3lMMNrNtJt1kveiev4aZbesaTCX8QwDt4yz5WOiin7Tf7w69mAcoU9PySqgiOyJ8whVsSkF91meXMsUlaRATDXUa%2BkVu4aMEFD9O40rhc1VM1Uq90RTwqXiMexizJPapCQypO0NJUO0MvJcsiO%2BKv0cTrbSANZzQ0f5HHvgW1dPwpmoXkqHsNRmwlu4A3wLB4z9tOdxljTMrkR4CV69XcR0OUUtHt3%2Bjw4zrQGBk64XtwKMHN6AagpaqVEAQa1z8os762V0kSe5SeZZRsnDDf0djJBjqkAeHtb%2BswNgAaw7dH9DTHIkHESwSR9keB8vtSY6YOqBVDwSMM1VCs5TWRDWrpZqi6aU1fwpPU9hVaOQZSF12rMhg4w%2F7TtDm5HJ%2FmbPX6ObM36K1MZXRYHHa3feHHbi4TDBVkTpPqngHg3LjeOhO6V7x8bJY%2Fd9aZu3GQKoxBfe6sqeSGZAQ0RoS%2Fgcow1Q3HXn%2FPg%2BpQLdGzJ%2ByHLYYCFALwI4nq&X-Amz-Signature=4a606e7ac7a447906fa825ac6d45d26d0c22e0aa882f6de33277b4d25d4c0ad2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZM6SZXE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T013648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCclVJHqxmoOluqv%2BhHagniGUoVUHTpRMe9JrEVp%2Ft9tQIhAP2wYasBngPvZR708dX3dBYtiDe6r29JSW%2Bh9ovAvDwDKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJdF79z9Z4OsVEEFsq3AN3sosL9caOmLzoYHykTwLeGtj95h80dZP8dKIGh8Zo7dHs0W5%2BP020JB2DcbZj%2FQD6VNfNfk%2FVM2RZ10XbObjCRIR1VcRLitnsEsUU92I1vd%2Fa%2BqSnzsfRgXclprSTjWpk76YuaYW3ggallIlK570155PwBRiDnIqP6xzgxpnlyWdOx%2BGvj7qnMRba6vdwvOrtz4L2%2B9M3UjQm%2BD%2BMYDNIPBLk9FIPNHl1Kytoqkaz4Ytx4Xu5JgveX2t%2F8oUWtZ2U4nCU1c1Agz%2Fg6fA7Z3KMxQGAwXx1ygpcH6HJksfs0f4pfPi%2BlLLeadgjoEfFyIWivA6hR7YF6J8gB7nbI62ERavpP4tH3tVmqhktyRd3lMMNrNtJt1kveiev4aZbesaTCX8QwDt4yz5WOiin7Tf7w69mAcoU9PySqgiOyJ8whVsSkF91meXMsUlaRATDXUa%2BkVu4aMEFD9O40rhc1VM1Uq90RTwqXiMexizJPapCQypO0NJUO0MvJcsiO%2BKv0cTrbSANZzQ0f5HHvgW1dPwpmoXkqHsNRmwlu4A3wLB4z9tOdxljTMrkR4CV69XcR0OUUtHt3%2Bjw4zrQGBk64XtwKMHN6AagpaqVEAQa1z8os762V0kSe5SeZZRsnDDf0djJBjqkAeHtb%2BswNgAaw7dH9DTHIkHESwSR9keB8vtSY6YOqBVDwSMM1VCs5TWRDWrpZqi6aU1fwpPU9hVaOQZSF12rMhg4w%2F7TtDm5HJ%2FmbPX6ObM36K1MZXRYHHa3feHHbi4TDBVkTpPqngHg3LjeOhO6V7x8bJY%2Fd9aZu3GQKoxBfe6sqeSGZAQ0RoS%2Fgcow1Q3HXn%2FPg%2BpQLdGzJ%2ByHLYYCFALwI4nq&X-Amz-Signature=c57f786cdd4b2280c28158f69e3b9f71dc050d367d7d5abf669dc5c7ccc05541&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
