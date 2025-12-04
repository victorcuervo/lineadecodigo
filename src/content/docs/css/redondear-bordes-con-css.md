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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRS5GJHL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T063528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGCWj%2F0%2BPX77a8L0lwUgimPHnd8sKYBemcwyiEM6bqonAiEAgcxf5Fw6ls6jNXcHW5aK%2FjB9YLuCdzZU9s%2Bu%2FhJhQdAq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDH53lVmWwYlMzUe%2FOircA24%2FQ10iFJMEbfXq%2F1chhgncgn4wFbg9gA2CDNZQ2spkERq3YnODdWpnt0sDLZVQ9vknfCqsJXbGuQEf3BCC1eaNsnb1T9BsRrHWW%2BhVDBc0BRFx4D%2FeVjZMp%2BqnDa3xCFGLwWLn%2BTlAjVEkRLxhSkxoAg80MHJtQMS5FMXOpr57DN5HsSHAn4tHB%2FlXHU8VIdD6IfE%2FHsAOpnUaU08dVCqlUwZroIpdp6c0SZJJJpAx4wDuzPKFWlo5HhFXqcGdvRFULTRQkHbHdZaXVTX80SJxukuuHMPAS9iyCZpxvv%2BhQ0e%2B0O4Le1YiIWLnqoB4OadkYiJqV9breIAeQbFSDbk544GbAzaOkO9HwvoLu%2F1C4HU4dPvRMXubQjUBRzDWi78wJyGSNv01IxG4Wo7%2BQiKLSWd6D%2BnnsZHlaqAAH0Ab9Tj1sbNUq74ZjV18PBmaFR93qP%2FAi113ePH0vVj1Trngap9r54JemQoQhIdrX%2BH8B6gFGM%2BaJvSYJ5GEdtrbaZSdTEBNmvOAjkBRY2fqfpfVZTPmisftw2dH4u%2BEGeJ2FcVKV%2FvHztfP01qHk%2BjSTfYj9aO%2F8uuZl9bstRYl213yfe79rlNiZBkXDwIIdadoUjZqwH%2FPTunHwHDcMNHJxMkGOqUBxPCDkTSLUb%2Fq25wJM0Xph33h%2FoqXq1VvhhXlBmUyxriyewjymVti4zcLtHHUPqI2yfcynuqd8%2FOg45T3JaKAcSpQNgiMV9W1Rf2HcsyHSCOWdzLtdaubmsAo4pBymrWg2H%2BIjd4Ni2kNI3Is%2BZ0buIn500Ue0AZX7IiWcW%2FIRY0J3bERSLPCTIyIR2Uf0%2FCqZ9CUR20JLHkgB%2BNube5dLnjyIUoT&X-Amz-Signature=24f642b80493a8ecf9096e64d6af17192685a6a05a9ca031e681f242676ecc2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRS5GJHL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T063528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGCWj%2F0%2BPX77a8L0lwUgimPHnd8sKYBemcwyiEM6bqonAiEAgcxf5Fw6ls6jNXcHW5aK%2FjB9YLuCdzZU9s%2Bu%2FhJhQdAq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDH53lVmWwYlMzUe%2FOircA24%2FQ10iFJMEbfXq%2F1chhgncgn4wFbg9gA2CDNZQ2spkERq3YnODdWpnt0sDLZVQ9vknfCqsJXbGuQEf3BCC1eaNsnb1T9BsRrHWW%2BhVDBc0BRFx4D%2FeVjZMp%2BqnDa3xCFGLwWLn%2BTlAjVEkRLxhSkxoAg80MHJtQMS5FMXOpr57DN5HsSHAn4tHB%2FlXHU8VIdD6IfE%2FHsAOpnUaU08dVCqlUwZroIpdp6c0SZJJJpAx4wDuzPKFWlo5HhFXqcGdvRFULTRQkHbHdZaXVTX80SJxukuuHMPAS9iyCZpxvv%2BhQ0e%2B0O4Le1YiIWLnqoB4OadkYiJqV9breIAeQbFSDbk544GbAzaOkO9HwvoLu%2F1C4HU4dPvRMXubQjUBRzDWi78wJyGSNv01IxG4Wo7%2BQiKLSWd6D%2BnnsZHlaqAAH0Ab9Tj1sbNUq74ZjV18PBmaFR93qP%2FAi113ePH0vVj1Trngap9r54JemQoQhIdrX%2BH8B6gFGM%2BaJvSYJ5GEdtrbaZSdTEBNmvOAjkBRY2fqfpfVZTPmisftw2dH4u%2BEGeJ2FcVKV%2FvHztfP01qHk%2BjSTfYj9aO%2F8uuZl9bstRYl213yfe79rlNiZBkXDwIIdadoUjZqwH%2FPTunHwHDcMNHJxMkGOqUBxPCDkTSLUb%2Fq25wJM0Xph33h%2FoqXq1VvhhXlBmUyxriyewjymVti4zcLtHHUPqI2yfcynuqd8%2FOg45T3JaKAcSpQNgiMV9W1Rf2HcsyHSCOWdzLtdaubmsAo4pBymrWg2H%2BIjd4Ni2kNI3Is%2BZ0buIn500Ue0AZX7IiWcW%2FIRY0J3bERSLPCTIyIR2Uf0%2FCqZ9CUR20JLHkgB%2BNube5dLnjyIUoT&X-Amz-Signature=e00ac27c975b5bb542c3d7d2c1862db0c76e9e998135e687a8f70b58b3beab9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
