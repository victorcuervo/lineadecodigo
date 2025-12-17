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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYSCPRMN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6WvmrQJiW1hDLIplIAnZJGIBE3zDd3j6OSCxpUS9U2AiEA%2FGCxgo70uW65w7CvWM0DlqqXC0GAPDf85oznyDSpBToq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDFYhktqi3fg4ge8cTSrcA7RS93u3quknSV6I9Co8OghN18cWg%2FbvYF1EiXbnHI2%2FGIGwNI%2FS9ngv0tXuL7JgV5a%2Bi%2BSlzOD2LqYM5cN4uz%2FcnSb4BiERbDnsb2sP4wBDlUAcSAf6kh6023cRBXwhMX5pL6TJ8hz5zzFfp%2B1seR1T2zvr7IiMga3nsCE0g1%2FWW3gAtjn2AtOdIGGUr3hZUvSOEmhKlKz5vQJSI9h6P2EDz9UPzf%2FKA9%2BmCCuu51ic7k0%2FpDp7%2B4INIowBpDO9zBT%2Br0JEtdChuCKqv5%2FdQdQoevTBDVUIn1svJImXbsRsK%2BZBvUbHpPBj4l6Na7P4nRuhLNi3%2FfNFh8VTTrCxrEHnN1gWS6lb8wibmWzvUYadfoJE%2FfgJ6rnlJ5yPlN%2BjIcZiRjA9K3B7NEaurpoyEL5gUqRE72IwTasej9NuF6LIIJMXLG6pUXoquBO5sje7bYrzPBlkKmmJFJIEDC4IY99z7jWaL0mCiwCXfOdiY3OM%2B2YLEAXlnJfJq4Olkis9aDjveKC2B05P7qzt11pY%2BA1jqOyeALi8YXkeFIclC9bajoP1OVHHrYRAi12z4DuwaHVkfJlQrXxgiRMw0XR8glYB0QiLeJAiQ9WqsX7gN0uECi4i%2FXceWR3jOsdZMMeqisoGOqUBS4dCKl%2Flm%2Fmeqkx7ZVApE7bFhSKSMLVuYXumS1h0n%2F29SMxmN1i%2FFYdo%2BaiuveAimk1JpAEzrtyR1ybkIOKpPPwWpC%2BAY3iUYe%2FW9crTyEdEUyNuG9mkcWTYm3pLAqTKV7FisrmF7APkCB8ciaq%2BUroY0e4uSJknyvK0ImCs4TeUQde4LLtI4Z4KIxbJNjZ1%2Bfzw54si4aagaDwlIkR06G8l0G%2Fo&X-Amz-Signature=d7d8dcf6172f09d7b8dacdbf0bc267ad4d9306759943f0f7a0f05ff6c25b32ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYSCPRMN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6WvmrQJiW1hDLIplIAnZJGIBE3zDd3j6OSCxpUS9U2AiEA%2FGCxgo70uW65w7CvWM0DlqqXC0GAPDf85oznyDSpBToq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDFYhktqi3fg4ge8cTSrcA7RS93u3quknSV6I9Co8OghN18cWg%2FbvYF1EiXbnHI2%2FGIGwNI%2FS9ngv0tXuL7JgV5a%2Bi%2BSlzOD2LqYM5cN4uz%2FcnSb4BiERbDnsb2sP4wBDlUAcSAf6kh6023cRBXwhMX5pL6TJ8hz5zzFfp%2B1seR1T2zvr7IiMga3nsCE0g1%2FWW3gAtjn2AtOdIGGUr3hZUvSOEmhKlKz5vQJSI9h6P2EDz9UPzf%2FKA9%2BmCCuu51ic7k0%2FpDp7%2B4INIowBpDO9zBT%2Br0JEtdChuCKqv5%2FdQdQoevTBDVUIn1svJImXbsRsK%2BZBvUbHpPBj4l6Na7P4nRuhLNi3%2FfNFh8VTTrCxrEHnN1gWS6lb8wibmWzvUYadfoJE%2FfgJ6rnlJ5yPlN%2BjIcZiRjA9K3B7NEaurpoyEL5gUqRE72IwTasej9NuF6LIIJMXLG6pUXoquBO5sje7bYrzPBlkKmmJFJIEDC4IY99z7jWaL0mCiwCXfOdiY3OM%2B2YLEAXlnJfJq4Olkis9aDjveKC2B05P7qzt11pY%2BA1jqOyeALi8YXkeFIclC9bajoP1OVHHrYRAi12z4DuwaHVkfJlQrXxgiRMw0XR8glYB0QiLeJAiQ9WqsX7gN0uECi4i%2FXceWR3jOsdZMMeqisoGOqUBS4dCKl%2Flm%2Fmeqkx7ZVApE7bFhSKSMLVuYXumS1h0n%2F29SMxmN1i%2FFYdo%2BaiuveAimk1JpAEzrtyR1ybkIOKpPPwWpC%2BAY3iUYe%2FW9crTyEdEUyNuG9mkcWTYm3pLAqTKV7FisrmF7APkCB8ciaq%2BUroY0e4uSJknyvK0ImCs4TeUQde4LLtI4Z4KIxbJNjZ1%2Bfzw54si4aagaDwlIkR06G8l0G%2Fo&X-Amz-Signature=92070bbfbdfe7b9ecf326e0c3232e1cbeec13bae0ace07967cd0d14b57c88b88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
