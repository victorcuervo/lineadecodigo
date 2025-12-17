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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632NCYOEP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOejvswcv%2BtDREXLBb6xSuRr%2F0rkYy5zPEyLLxmMwURwIgPpNeez%2FUMfrBfTyJzRi%2Br0qCIg7MWFCdpxC53q1VhNUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1G6V7EiyLT16SjfyrcA1C91C8r3%2F4OWmk%2FafvFUKhiKAC745I%2BB50MVfcPryHcImF4zyFohgadjKHVyWbcaD6SeuJ2QOc2ATb3%2FImiu4ShmOC4EQ2W769m9wAdN9LQJdzSz%2BHUyGiqlkewkYVWW4pX%2F71ythlGZVQL6E%2BwH8EmW4H8i1Vocrh7JOKm9Qq1DDZLG6B%2BvEFlQWPywUZxsbGjyOVn93LlbkXFV7cInryn89htnWVaTjXWI1GSR4avct2HiHcL570ZzieBQB6B3bhciVfskm2holnTEPLi41SMZ3Rd8ZOCDtbqVQZH3psZm1SA3SipfA8XlCRz%2FEJzlBeZKriS2vnNoyf8k%2FhBVr7AywB02of8j1%2Fz2qyXeeFDDv2AuBuva0mdfc%2FhpPJT5gVZb%2Fp%2BK4pV0AD4x%2BvLjsiU6SBln%2BDH4%2F%2FB3Q2goFTRcCv7RBwWX4R5rbdEbjlQ5M4%2FDdQRP%2BBZzA2TeHIILoumy%2FB3a9LBWDVe8bt%2BOuZplF%2F%2BsmvkcI4wP6sZvNJcNqJChx2Z7ymemTGni2NTJ1lefyeJRTHDYwkdWmoqkI3K%2BT36m1LPI3lHII7L1%2F8DW%2FnHTOxB9G3%2FtrQHi47uFHq0CQtmWgh93SlZ7E0EUC3DdLOZErFYGKwg8NDkMKmgi8oGOqUBrKvzifO%2Fh0q%2FV3r4QktJm%2BZzzTRp2EkubYi%2BvtNbrw4rB49reWipZoNO1TmfVbjZE0xxLANlW%2F0ER5UoJuiZDR%2B5kzaOG23djNPcSpeO4OJ9yeotyFXGXFp4rDmFGAjICMg%2FYVj2Re8R0gDVOiSCbxjZZH7Wsre1kXWniXQ5gdtUhHpW1ImEY8tZJ0%2FHV7ia87Wd%2BYPcFwV1PMmRXeXXe%2BflNPqr&X-Amz-Signature=8ba3e627b9c85b66e425e6ccaecc873ecd691d61cb69cde848bf8233f40d5b34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632NCYOEP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOejvswcv%2BtDREXLBb6xSuRr%2F0rkYy5zPEyLLxmMwURwIgPpNeez%2FUMfrBfTyJzRi%2Br0qCIg7MWFCdpxC53q1VhNUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1G6V7EiyLT16SjfyrcA1C91C8r3%2F4OWmk%2FafvFUKhiKAC745I%2BB50MVfcPryHcImF4zyFohgadjKHVyWbcaD6SeuJ2QOc2ATb3%2FImiu4ShmOC4EQ2W769m9wAdN9LQJdzSz%2BHUyGiqlkewkYVWW4pX%2F71ythlGZVQL6E%2BwH8EmW4H8i1Vocrh7JOKm9Qq1DDZLG6B%2BvEFlQWPywUZxsbGjyOVn93LlbkXFV7cInryn89htnWVaTjXWI1GSR4avct2HiHcL570ZzieBQB6B3bhciVfskm2holnTEPLi41SMZ3Rd8ZOCDtbqVQZH3psZm1SA3SipfA8XlCRz%2FEJzlBeZKriS2vnNoyf8k%2FhBVr7AywB02of8j1%2Fz2qyXeeFDDv2AuBuva0mdfc%2FhpPJT5gVZb%2Fp%2BK4pV0AD4x%2BvLjsiU6SBln%2BDH4%2F%2FB3Q2goFTRcCv7RBwWX4R5rbdEbjlQ5M4%2FDdQRP%2BBZzA2TeHIILoumy%2FB3a9LBWDVe8bt%2BOuZplF%2F%2BsmvkcI4wP6sZvNJcNqJChx2Z7ymemTGni2NTJ1lefyeJRTHDYwkdWmoqkI3K%2BT36m1LPI3lHII7L1%2F8DW%2FnHTOxB9G3%2FtrQHi47uFHq0CQtmWgh93SlZ7E0EUC3DdLOZErFYGKwg8NDkMKmgi8oGOqUBrKvzifO%2Fh0q%2FV3r4QktJm%2BZzzTRp2EkubYi%2BvtNbrw4rB49reWipZoNO1TmfVbjZE0xxLANlW%2F0ER5UoJuiZDR%2B5kzaOG23djNPcSpeO4OJ9yeotyFXGXFp4rDmFGAjICMg%2FYVj2Re8R0gDVOiSCbxjZZH7Wsre1kXWniXQ5gdtUhHpW1ImEY8tZJ0%2FHV7ia87Wd%2BYPcFwV1PMmRXeXXe%2BflNPqr&X-Amz-Signature=a7effed3f52a7f6f47dba84a115c60af82a683c3749bb093c0ac9bdf853c4509&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
