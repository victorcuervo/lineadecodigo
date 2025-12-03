---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CXM4KRR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIHMWm0djYZG2VIiK8H%2Fk9PegqHklkOybKQNEMbabvZgGAiEAudkOpVJlEZJ9wzcnGs53S9PZn68YGAVLctx4Wvvy5cUq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDDAKZSnhaj3uW51uYSrcA3wzLjvG7VJWH9fmlIb5NnBXFR41SqAjUqbpzPbSq1xJLHhZGnB9QfgVAgWvbrGKF4qLJ0%2BD9VHlQQ8d5rd0E0qsSzt7ORRkT4EMmK0X3XjKZsTvPBRutYbVq7IpAGWsrnTFtEyGQXInsAPxAkDcbnl4Q7h%2BrAbZ2gFyYVBLVdYFdcWPiAG1FKW2BHyRdjVOCliYZSRHD6ISRrNlZrnoYOXwpe0lyUsSzqVVxr7DNisK7qE9kj63hwiSrOKTIy7oINldYhhjMfCv1%2FkHal3MaYTn5PGLJVEpmauBZIB0qPCrAAnmMPF6%2FVCdmioeQmjfTo00Y2QTD8KgUMMi%2Fz3zF5MPjBOVo%2FnroHgZTCGlbdapemqY5YTfolH8CCtLOFDslviWAugUjGJuu6F0HRdKVSoWA1KBCnkDqt3nWu7X2bPZVjRg7UAgnc9gKRtDZO8iQMgpf5uPOJKmczZbD%2BIu6o%2Ffr10m%2F%2FJi9QjcGWz18adP%2F%2FUTICP9vuXL05NKWTINHjRJxyWCL5wGrcl9LTg2gRBrfSLG6cte7WEb0Hd%2B2pvSrqNze%2FWaD2sf53VuF3r%2F3Rv2wy%2Fx0P6YoMVIBt4wsqqNBFblmDloKtkaTpMGs6UWcVijC73vggpHiwiPMJ6%2BwskGOqUBoRWPuGblLXb5icShGIczsIuwlSuPyKQNCbO59f2YCC30iPVKRj0ggV9FSwPiMrfxlv6rpULUNZU5Iq5yMokUU6%2BQDJaiAUDFdkO5BsDPSGen%2FS72qNRdm%2FqQLfXE9%2FJdfFOazRFIA%2BJ7RU2ZrF5aykFDk1TAOxJubGniuQQdmstJXvxeDbg4PYCiEtUE5lUj24ixAzu8tCXTLYZaDhzPbszH8o7G&X-Amz-Signature=c4d443662d6d691e3d627056fddf72946d53c3f1e22850e6a74332c5faea936a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CXM4KRR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIHMWm0djYZG2VIiK8H%2Fk9PegqHklkOybKQNEMbabvZgGAiEAudkOpVJlEZJ9wzcnGs53S9PZn68YGAVLctx4Wvvy5cUq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDDAKZSnhaj3uW51uYSrcA3wzLjvG7VJWH9fmlIb5NnBXFR41SqAjUqbpzPbSq1xJLHhZGnB9QfgVAgWvbrGKF4qLJ0%2BD9VHlQQ8d5rd0E0qsSzt7ORRkT4EMmK0X3XjKZsTvPBRutYbVq7IpAGWsrnTFtEyGQXInsAPxAkDcbnl4Q7h%2BrAbZ2gFyYVBLVdYFdcWPiAG1FKW2BHyRdjVOCliYZSRHD6ISRrNlZrnoYOXwpe0lyUsSzqVVxr7DNisK7qE9kj63hwiSrOKTIy7oINldYhhjMfCv1%2FkHal3MaYTn5PGLJVEpmauBZIB0qPCrAAnmMPF6%2FVCdmioeQmjfTo00Y2QTD8KgUMMi%2Fz3zF5MPjBOVo%2FnroHgZTCGlbdapemqY5YTfolH8CCtLOFDslviWAugUjGJuu6F0HRdKVSoWA1KBCnkDqt3nWu7X2bPZVjRg7UAgnc9gKRtDZO8iQMgpf5uPOJKmczZbD%2BIu6o%2Ffr10m%2F%2FJi9QjcGWz18adP%2F%2FUTICP9vuXL05NKWTINHjRJxyWCL5wGrcl9LTg2gRBrfSLG6cte7WEb0Hd%2B2pvSrqNze%2FWaD2sf53VuF3r%2F3Rv2wy%2Fx0P6YoMVIBt4wsqqNBFblmDloKtkaTpMGs6UWcVijC73vggpHiwiPMJ6%2BwskGOqUBoRWPuGblLXb5icShGIczsIuwlSuPyKQNCbO59f2YCC30iPVKRj0ggV9FSwPiMrfxlv6rpULUNZU5Iq5yMokUU6%2BQDJaiAUDFdkO5BsDPSGen%2FS72qNRdm%2FqQLfXE9%2FJdfFOazRFIA%2BJ7RU2ZrF5aykFDk1TAOxJubGniuQQdmstJXvxeDbg4PYCiEtUE5lUj24ixAzu8tCXTLYZaDhzPbszH8o7G&X-Amz-Signature=5b3e71b27c7ac7e78365834eb9b3f76726fa8612d3ddad19413276ceb2a304ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
