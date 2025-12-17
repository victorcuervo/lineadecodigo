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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ES5GRLD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLg3fW1J4RxrvxVwmT4Kf1tvspR8AnEAcfroduLS8KGgIhAN3Z9JyMEf4QXrIznW3wPVmvCxiL4y5vTPFT6e701ygMKv8DCH4QABoMNjM3NDIzMTgzODA1IgywNVG3zMqU6O6nV1cq3ANDKyqP5WxCTd2xrgOXgLdclnwKjMv3a1kdozIVNpGY3QIDSw%2F7KaxBDlmWCvhy59TsP7rkJhPkH5tbCjHoZLG2m006HPtwfgvwDT6a6ynWrTX6ek7o3XJ%2FhD9BIvwtRXrwixebH5%2B2aQsHlgfUahYwATqVJK4lu5rYla2KvADmvinkMQXI9P0At4O%2FFmJxz1zTT4l8DbBiUjFpy43CzRWAR1iSktcKL1UsSgB62x7bPCPuPpUl9TJ13hgXPR7UwGKIkQx6vfzoiq2JNOgHD7Gjr336%2BMdpU46TwfA37C%2BMj9eHyA7IQry9FPCGF2eTx7HoRLi4R%2Fyx%2F2NycadNStq9UBVounNr%2FuZuGAiauc2Q7jYHt%2FMXvOKQ3lE%2BZGdpVNq2XwgFUq2MERxuF52T1uItcRK50LDXJVx8x25vHdYWsWCdeOXYLiGL8ppfaaFCw2ZMZf8LP6TkNe2YtSVMzuu8FAI8WLOcDJZnJG2IctRFybWuaNu%2Fm1guOw04oDm274DlQhaYEKP%2BZdwGn1dq9GHkQcbVAf2%2FgHfQqBy9kXG6%2BHlxc8ysYwbO2uYF%2Fa1y1LF6vqDciZFBrNh04fZYhpX2XmCfmPbwlnq%2FGmbV5M%2F4F0WgGkmfEebSf5sAJjDoxYrKBjqkARoqGssadHhtuzO1ROf7zw54pnVbh4762qXKxMgVcwic%2BtFXD%2F8fl93DIKpH3f%2B1IfMPWJ5wUi2sXZYCX1pA%2BJ0Bmo3jzVFl%2FLRnYbnjKLmItNJXwdLgR4pPrkbSS%2BmmqfHuiKd6eX7MYDGXYrhRIsRLiARd9xASEPKsDtUFqZXJ309PoNAS%2FAlKAcE6T8ssbFEz5T2%2FQ9%2B9ZELSItvfuphO%2FsjQ&X-Amz-Signature=f757f7593b2d1431fc19a2e8d87a5a05051e0db8b9b55a8811f1ee02ff76c385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ES5GRLD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLg3fW1J4RxrvxVwmT4Kf1tvspR8AnEAcfroduLS8KGgIhAN3Z9JyMEf4QXrIznW3wPVmvCxiL4y5vTPFT6e701ygMKv8DCH4QABoMNjM3NDIzMTgzODA1IgywNVG3zMqU6O6nV1cq3ANDKyqP5WxCTd2xrgOXgLdclnwKjMv3a1kdozIVNpGY3QIDSw%2F7KaxBDlmWCvhy59TsP7rkJhPkH5tbCjHoZLG2m006HPtwfgvwDT6a6ynWrTX6ek7o3XJ%2FhD9BIvwtRXrwixebH5%2B2aQsHlgfUahYwATqVJK4lu5rYla2KvADmvinkMQXI9P0At4O%2FFmJxz1zTT4l8DbBiUjFpy43CzRWAR1iSktcKL1UsSgB62x7bPCPuPpUl9TJ13hgXPR7UwGKIkQx6vfzoiq2JNOgHD7Gjr336%2BMdpU46TwfA37C%2BMj9eHyA7IQry9FPCGF2eTx7HoRLi4R%2Fyx%2F2NycadNStq9UBVounNr%2FuZuGAiauc2Q7jYHt%2FMXvOKQ3lE%2BZGdpVNq2XwgFUq2MERxuF52T1uItcRK50LDXJVx8x25vHdYWsWCdeOXYLiGL8ppfaaFCw2ZMZf8LP6TkNe2YtSVMzuu8FAI8WLOcDJZnJG2IctRFybWuaNu%2Fm1guOw04oDm274DlQhaYEKP%2BZdwGn1dq9GHkQcbVAf2%2FgHfQqBy9kXG6%2BHlxc8ysYwbO2uYF%2Fa1y1LF6vqDciZFBrNh04fZYhpX2XmCfmPbwlnq%2FGmbV5M%2F4F0WgGkmfEebSf5sAJjDoxYrKBjqkARoqGssadHhtuzO1ROf7zw54pnVbh4762qXKxMgVcwic%2BtFXD%2F8fl93DIKpH3f%2B1IfMPWJ5wUi2sXZYCX1pA%2BJ0Bmo3jzVFl%2FLRnYbnjKLmItNJXwdLgR4pPrkbSS%2BmmqfHuiKd6eX7MYDGXYrhRIsRLiARd9xASEPKsDtUFqZXJ309PoNAS%2FAlKAcE6T8ssbFEz5T2%2FQ9%2B9ZELSItvfuphO%2FsjQ&X-Amz-Signature=6cf48224873eac6629f3a342448335a21dfad283ae582a53d358d54038c1a6cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
