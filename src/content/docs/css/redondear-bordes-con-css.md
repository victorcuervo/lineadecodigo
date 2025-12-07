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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS2SK327%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T140718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2B%2FnHCdZlbI6hRcq1DqWu5PCxShBueFiprl0mRdwaexgIgMVGLOvNfbmNqnhltVlVSz%2BrP5hnDzVsVcLPhBgoiHuIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6sBqoW1ikPbX1nhircAzGNC8WPkTHq31D4YHg%2FtyIaywOJFn5ZHDp7EWuPoTCtqcL6PlYnFgX7gPqg6kw5z1dAwl2Kvlpy%2Byc42uRn%2Ffwy2SyElscgUgllebWXkRK8gaKRsvwi2%2FtR4p1G7hEQKRe4CMtLn8UM3q8WfJ6n3OUNCYXSkzx2KpsnxyxsUyUABTfTWuX%2FJDiIQSpzTHiIViCfh%2BmplxUusnvduPfPDREi6Z%2BGK5EdBNN1uLJ5v1G4R2LrhsJsWGUHWpU8XAuzWjlFtsfQ7HD14uKevKBztCoPe86zwxSiRn6Ji4PhKTlGBODeFFeOjQ7POVN4%2BugMjXLr28TuNdcREHzlj3%2BBRhfj7xTSzMz0L1CEM4SOqCYR%2Bfb4rxcF5Lkf3flREdSx7u130jGihp6IXyeZg1Sl5Tf%2BGd2E8EqscOsWd9rGjNqlU4zDh12H7yhg7lSYJ%2BdUECGVUZifcUtgNf48n8fewA6sEUPi8xvB7rMmGPtKnXt45NMI7RQxlhYx50s0OpJFflrqwX8gwagltrqGtMIHI9OR%2FiEQ23kHT16X%2BNUJTg5SRHzeOqyE974UX%2F5nDbEHBAYATULqDu3MOLo9QnTZVF%2B4r2Zz5M3kXZfn01rgwfbCiFerr5Z2vftB1ANuMLOa1ckGOqUBjKsS9uT6ukoPVqxrqJHOS6PqJzTSA8TWc562sxsP9FvyR%2FTj%2BmLRPFSI6NgXuTfZqVG71yJxjpz6vFb7HM%2Bj0roCacEWD3UqlE%2FeLubVxBFFuv8E910CKmfh3vZjZx8jxstzRrnqH3m9EsxdRbJ%2FiuFmgTy%2BPb8K5lUJVFWAtioP%2BKS5cF8uA5Xq8jHdXF%2BDHbYrveqlw%2BHQfggFm6kF3QPjdM7b&X-Amz-Signature=0f74417db4ad66714e9d265045c196d565487046f1f2d1f082934082ecca61ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS2SK327%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T140718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2B%2FnHCdZlbI6hRcq1DqWu5PCxShBueFiprl0mRdwaexgIgMVGLOvNfbmNqnhltVlVSz%2BrP5hnDzVsVcLPhBgoiHuIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6sBqoW1ikPbX1nhircAzGNC8WPkTHq31D4YHg%2FtyIaywOJFn5ZHDp7EWuPoTCtqcL6PlYnFgX7gPqg6kw5z1dAwl2Kvlpy%2Byc42uRn%2Ffwy2SyElscgUgllebWXkRK8gaKRsvwi2%2FtR4p1G7hEQKRe4CMtLn8UM3q8WfJ6n3OUNCYXSkzx2KpsnxyxsUyUABTfTWuX%2FJDiIQSpzTHiIViCfh%2BmplxUusnvduPfPDREi6Z%2BGK5EdBNN1uLJ5v1G4R2LrhsJsWGUHWpU8XAuzWjlFtsfQ7HD14uKevKBztCoPe86zwxSiRn6Ji4PhKTlGBODeFFeOjQ7POVN4%2BugMjXLr28TuNdcREHzlj3%2BBRhfj7xTSzMz0L1CEM4SOqCYR%2Bfb4rxcF5Lkf3flREdSx7u130jGihp6IXyeZg1Sl5Tf%2BGd2E8EqscOsWd9rGjNqlU4zDh12H7yhg7lSYJ%2BdUECGVUZifcUtgNf48n8fewA6sEUPi8xvB7rMmGPtKnXt45NMI7RQxlhYx50s0OpJFflrqwX8gwagltrqGtMIHI9OR%2FiEQ23kHT16X%2BNUJTg5SRHzeOqyE974UX%2F5nDbEHBAYATULqDu3MOLo9QnTZVF%2B4r2Zz5M3kXZfn01rgwfbCiFerr5Z2vftB1ANuMLOa1ckGOqUBjKsS9uT6ukoPVqxrqJHOS6PqJzTSA8TWc562sxsP9FvyR%2FTj%2BmLRPFSI6NgXuTfZqVG71yJxjpz6vFb7HM%2Bj0roCacEWD3UqlE%2FeLubVxBFFuv8E910CKmfh3vZjZx8jxstzRrnqH3m9EsxdRbJ%2FiuFmgTy%2BPb8K5lUJVFWAtioP%2BKS5cF8uA5Xq8jHdXF%2BDHbYrveqlw%2BHQfggFm6kF3QPjdM7b&X-Amz-Signature=50c7a303ae73c71191fd2b5209f392e52b7ea7fa9711588c3d916b7827b7de94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
