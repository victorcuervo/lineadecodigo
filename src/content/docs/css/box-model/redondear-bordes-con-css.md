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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S332Y54E%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCZRWzowR%2F8%2B%2Bh%2FXJsBn31adjMMgCTGiXl4yoBwpgT%2FAiByjXYrcs6eXI7i0xUU6IihpTzCDzWss79s1r%2FLUf9azSr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMe1GGRcjJ1hEocJPIKtwDwocLbXskeRtWj3GQbH3fKrIXb%2FS4iax3TYesBMa2qbK%2FcsSHJz9e8q1FnJxH%2BtZ4KXM0WXFw275ybnV4RJ9LshfeRM%2Fg1yI3A5zoO4%2BKvgu2CByuwUlcNOZfl06wW6aStSSolMfPjG6d0uKy2KAQOc9p4281uat80DKuhTF%2FFIIVfDN26scnmjB03o0DpGMIZosWgnYBgshppFHYUur0m9t2ey86y7mjlqHODyqRMFAGN5Rv7a%2FoqXMdSPapwbXsBHm0ardxVTr%2Fl9TuBEGOLuFhB6wWB9l7nasNjjCwxAxuA7mb6pQEHg3yzazC0O2Q7LE1B%2Bm4gaTK87BS04H9J7pKeTxVB9HknaPV1Pu2qIsMOYeDWyKe4qzg2Jv3uvoOqFBYSYtWYr%2FXiZM6U1Z3p4k1Di696sx%2BCjPJ9RKRAFXPXNd1E37uu6i1GQcUOB%2FaDiQ8SQDqiAl%2F%2BloQ49HIcVwp5uhDkPQhQSl0blEnheuDXNY0ESQ8NoqmFEi84VXWc4xG%2FwrBHblWlTiFWLByrTFfYi6BL%2FbHceZxgmvy760v12UqnmUnpx%2Fpg51fO69Oy3dtRNgbGPt11Ur7URk%2BBfVZCczOkBrO7oirOqbnGfDrFoeTzw6FIXf%2F5dswnuqIygY6pgHYf1ChovXvl%2F44PxnUKk6GWdfwSt%2FS7It5Gdibp5vmEyx6yUmnm8iLmow1GTwf4cS8TbZ6Hh768%2BbUWvpvNNyd3O9o6WiYP2vcQemm%2F%2FzoknRAZIWGkXy5jMmXUwYPbHTifr5sV%2FevFkvNvIJ3G9tl6M%2BTnA9gF4YkjrLJKYJZxs5n08O96ECElFwFL47PMkbCmoSZaBW4cZ1GkXRJIpsQCNdjXUkF&X-Amz-Signature=5b984bc2f18b211e0745865c300bf318e7869f5af6ebbdd929293e61681b258e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S332Y54E%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCZRWzowR%2F8%2B%2Bh%2FXJsBn31adjMMgCTGiXl4yoBwpgT%2FAiByjXYrcs6eXI7i0xUU6IihpTzCDzWss79s1r%2FLUf9azSr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMe1GGRcjJ1hEocJPIKtwDwocLbXskeRtWj3GQbH3fKrIXb%2FS4iax3TYesBMa2qbK%2FcsSHJz9e8q1FnJxH%2BtZ4KXM0WXFw275ybnV4RJ9LshfeRM%2Fg1yI3A5zoO4%2BKvgu2CByuwUlcNOZfl06wW6aStSSolMfPjG6d0uKy2KAQOc9p4281uat80DKuhTF%2FFIIVfDN26scnmjB03o0DpGMIZosWgnYBgshppFHYUur0m9t2ey86y7mjlqHODyqRMFAGN5Rv7a%2FoqXMdSPapwbXsBHm0ardxVTr%2Fl9TuBEGOLuFhB6wWB9l7nasNjjCwxAxuA7mb6pQEHg3yzazC0O2Q7LE1B%2Bm4gaTK87BS04H9J7pKeTxVB9HknaPV1Pu2qIsMOYeDWyKe4qzg2Jv3uvoOqFBYSYtWYr%2FXiZM6U1Z3p4k1Di696sx%2BCjPJ9RKRAFXPXNd1E37uu6i1GQcUOB%2FaDiQ8SQDqiAl%2F%2BloQ49HIcVwp5uhDkPQhQSl0blEnheuDXNY0ESQ8NoqmFEi84VXWc4xG%2FwrBHblWlTiFWLByrTFfYi6BL%2FbHceZxgmvy760v12UqnmUnpx%2Fpg51fO69Oy3dtRNgbGPt11Ur7URk%2BBfVZCczOkBrO7oirOqbnGfDrFoeTzw6FIXf%2F5dswnuqIygY6pgHYf1ChovXvl%2F44PxnUKk6GWdfwSt%2FS7It5Gdibp5vmEyx6yUmnm8iLmow1GTwf4cS8TbZ6Hh768%2BbUWvpvNNyd3O9o6WiYP2vcQemm%2F%2FzoknRAZIWGkXy5jMmXUwYPbHTifr5sV%2FevFkvNvIJ3G9tl6M%2BTnA9gF4YkjrLJKYJZxs5n08O96ECElFwFL47PMkbCmoSZaBW4cZ1GkXRJIpsQCNdjXUkF&X-Amz-Signature=4758f7094acbf6bd348cd4b65d4944c1c90d46890e8196e2f18222a2b2e8ce66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
