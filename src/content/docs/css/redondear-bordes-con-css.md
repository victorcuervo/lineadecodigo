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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643MRP2BJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T164459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FYtQbV5P3QR8jm5YsagYGVL47eZhMChdyQ5f0xlcWqwIgar1NbjYT3Enwtm%2FaE3GL1zGGXH3%2FVVSZhZJi5QTSWXoq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMF2AjXwzvcxWa7i9SrcA7NSuiAV3Ao67S0bYEgpNe8hVSQiwsKPTLsg9LQpiOG2LDukBK8wpLWV2NUfzINirtVoMGACPggTfGZ44HWijimSuxuUia8rx2d21yfk%2BO1X20W9w9qhAM5I8wVZDNMlsDGK3%2F%2BudrxRoJYmjRDQXZb4STV5j%2BnVGWBV06dIDY5MUjcr%2FaHZGaejUcrqXU93%2BhfyilLcOUYkMLcV1ohafjdKjQko%2B9FG%2FpIXhktj5NMC5xYnv5Jh3AH35b9LLKwCMHgFBf8EPr16c8BvkUGvTVLH9VduXHtg2EGkDHHHXoCqPD1C7jMBruGMrWizB6Pk6bXgBAijBEqXTw0PlletVPYWcXTFkaMB15ui%2B5xwREHQJBtFOkoYDagVuC13opqFZHJNApgAQZk%2FWNvo1BmlsrgTcefNFCN3xXgIvVnUHY8EiGw6CRSOnkX8cRlAswvmwXLfJkWNtO8SufD1wrEx%2B9z2JnY37qH%2Fs7yhgkdnCrieueV5NkC%2FlRpzE1rH%2FzK1ubthXB1LCkvFmS8AAR%2FUkcGVrkqLnqe9yUXpkL63fz1%2FOAgrrsRXqKXwgrpUEl7LPx0CLsp%2FO%2FcG0xWFQwDFZvtr2YGMXGrpP7%2Bhg7P%2BfVrWwRiMq0vtCa3Uhl5VMOmm0MkGOqUBiH7AcvB%2BrDx9bev02bF3YQY8dlftixW%2FBgu7A0NXCYpJahyDHY%2FCFX6B5hTWWxe7aDNVhuSvDc1dmLGHZvDNWlUdvoJeH2NigUpUGMpluD71pOHQcGIM2DoHAZ2hf1jjPBEM3%2FYAgL0oV0CIUDT3PzwVsLCaO3FpFSJFkzPAbccPyeyEwQQFUc04a8%2BlFOOi4OD7GZDqmlj6rhx6ripCloOpzq2A&X-Amz-Signature=be782d35a2414c292e6acc575818585b85100b866f57cc3805d02c21bf0a3171&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643MRP2BJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T164459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FYtQbV5P3QR8jm5YsagYGVL47eZhMChdyQ5f0xlcWqwIgar1NbjYT3Enwtm%2FaE3GL1zGGXH3%2FVVSZhZJi5QTSWXoq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMF2AjXwzvcxWa7i9SrcA7NSuiAV3Ao67S0bYEgpNe8hVSQiwsKPTLsg9LQpiOG2LDukBK8wpLWV2NUfzINirtVoMGACPggTfGZ44HWijimSuxuUia8rx2d21yfk%2BO1X20W9w9qhAM5I8wVZDNMlsDGK3%2F%2BudrxRoJYmjRDQXZb4STV5j%2BnVGWBV06dIDY5MUjcr%2FaHZGaejUcrqXU93%2BhfyilLcOUYkMLcV1ohafjdKjQko%2B9FG%2FpIXhktj5NMC5xYnv5Jh3AH35b9LLKwCMHgFBf8EPr16c8BvkUGvTVLH9VduXHtg2EGkDHHHXoCqPD1C7jMBruGMrWizB6Pk6bXgBAijBEqXTw0PlletVPYWcXTFkaMB15ui%2B5xwREHQJBtFOkoYDagVuC13opqFZHJNApgAQZk%2FWNvo1BmlsrgTcefNFCN3xXgIvVnUHY8EiGw6CRSOnkX8cRlAswvmwXLfJkWNtO8SufD1wrEx%2B9z2JnY37qH%2Fs7yhgkdnCrieueV5NkC%2FlRpzE1rH%2FzK1ubthXB1LCkvFmS8AAR%2FUkcGVrkqLnqe9yUXpkL63fz1%2FOAgrrsRXqKXwgrpUEl7LPx0CLsp%2FO%2FcG0xWFQwDFZvtr2YGMXGrpP7%2Bhg7P%2BfVrWwRiMq0vtCa3Uhl5VMOmm0MkGOqUBiH7AcvB%2BrDx9bev02bF3YQY8dlftixW%2FBgu7A0NXCYpJahyDHY%2FCFX6B5hTWWxe7aDNVhuSvDc1dmLGHZvDNWlUdvoJeH2NigUpUGMpluD71pOHQcGIM2DoHAZ2hf1jjPBEM3%2FYAgL0oV0CIUDT3PzwVsLCaO3FpFSJFkzPAbccPyeyEwQQFUc04a8%2BlFOOi4OD7GZDqmlj6rhx6ripCloOpzq2A&X-Amz-Signature=028cd91a8078ea62147ac5252f289c9ec8c42539633b4343b40bf2fab7a96ac5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
