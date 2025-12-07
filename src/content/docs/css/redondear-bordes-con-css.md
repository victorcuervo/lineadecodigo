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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOHETJEN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T165119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCESNk%2BtBlip1GoRp0PUwfqhuZR9cnLEzgZt1K0ELPk3AIhAJuOkR%2Fm06fexdlJXxBxh2W6aa1tDr7sc4WEGEwXLqMjKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwhxzdc%2FW5w%2BV%2FYBkgq3APUQxqE9y%2FDj7HSL7EvvhXklnSGvguFSohE8R70SPW%2B6OpZKQp713yq4Dyv2tm5ADZeGpsPZ8RARkQDHtho4ifsX644%2Fypyt8mXRB%2FDgUa8YNyZaVzEK97N9lK3GfMpbkUQrLhlEF%2BSMi3iiN%2FELAYsCegVRTapnNwgmCi%2Fy%2FyljNitM4wwN5bkkbsGpXJ3qdU5QRKXWD2HPvYwAmBBOG7MBpVKGEFGwNsAuTeUhC6TbwJKGYs6WFasoT4tblECPPxxqQxe94D0ME0zeErY491F05T2ZCXyolEFeQvqNhhLTmOw1KUhY7p02eZG06huOLRnRoi%2F1XkaKZ8a0Ln%2FsNjM9FA8oa3OV%2FJf72F8cQzbA96zEh8lWTVV8xQeVE6lS1A5AFNsMRwyD5IiAct5rlZMMkPmpGb%2BS%2Boh%2BeEUElayVOk%2BLQZxyOEm6rRUTh5HA3MYgFhQ3eEy6PJNM7x4FMCScPCG08bcfNZQUiMo4LUYkUrqWe9p5nhQG0lNEMSRug%2FGzZNjQ4a1sGfJ%2Fb1hS4xpJ5PcCwk75R%2B0aMOh4sI7EEZ0YoazhSVeRkPh8njE0DSCmdK2TmW813noZwpcrCorynI3IfQd1VA2hWQ5x8J6thmPPYXITfLpexxO5TDvt9bJBjqkARKE723f%2ByUoj7TjZi5SiU9DGi7m71Ub2Y7M%2F%2BbAKZnMxJLAuoVW0ibyjEfuhSm4IdtwpkbWQSfwRGlLjU%2BEWhVlhkPUkid6klXU8NTJAg2kA7OcCL%2FcZXAfqBlJJ8S%2BCEfitxGpA%2B5ic7EfAfQnBjbndIW2enVqlB%2FfF10sHTcxYy7%2F%2FAeED3xYvaaURX%2BrTtGX7a0ITAW3RWfWAcldMNBfjODj&X-Amz-Signature=56cb01bee7e373c5d82598bb0fe60d8aa47298538eb57fc3e0a72c5da9b54a81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOHETJEN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T165119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCESNk%2BtBlip1GoRp0PUwfqhuZR9cnLEzgZt1K0ELPk3AIhAJuOkR%2Fm06fexdlJXxBxh2W6aa1tDr7sc4WEGEwXLqMjKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwhxzdc%2FW5w%2BV%2FYBkgq3APUQxqE9y%2FDj7HSL7EvvhXklnSGvguFSohE8R70SPW%2B6OpZKQp713yq4Dyv2tm5ADZeGpsPZ8RARkQDHtho4ifsX644%2Fypyt8mXRB%2FDgUa8YNyZaVzEK97N9lK3GfMpbkUQrLhlEF%2BSMi3iiN%2FELAYsCegVRTapnNwgmCi%2Fy%2FyljNitM4wwN5bkkbsGpXJ3qdU5QRKXWD2HPvYwAmBBOG7MBpVKGEFGwNsAuTeUhC6TbwJKGYs6WFasoT4tblECPPxxqQxe94D0ME0zeErY491F05T2ZCXyolEFeQvqNhhLTmOw1KUhY7p02eZG06huOLRnRoi%2F1XkaKZ8a0Ln%2FsNjM9FA8oa3OV%2FJf72F8cQzbA96zEh8lWTVV8xQeVE6lS1A5AFNsMRwyD5IiAct5rlZMMkPmpGb%2BS%2Boh%2BeEUElayVOk%2BLQZxyOEm6rRUTh5HA3MYgFhQ3eEy6PJNM7x4FMCScPCG08bcfNZQUiMo4LUYkUrqWe9p5nhQG0lNEMSRug%2FGzZNjQ4a1sGfJ%2Fb1hS4xpJ5PcCwk75R%2B0aMOh4sI7EEZ0YoazhSVeRkPh8njE0DSCmdK2TmW813noZwpcrCorynI3IfQd1VA2hWQ5x8J6thmPPYXITfLpexxO5TDvt9bJBjqkARKE723f%2ByUoj7TjZi5SiU9DGi7m71Ub2Y7M%2F%2BbAKZnMxJLAuoVW0ibyjEfuhSm4IdtwpkbWQSfwRGlLjU%2BEWhVlhkPUkid6klXU8NTJAg2kA7OcCL%2FcZXAfqBlJJ8S%2BCEfitxGpA%2B5ic7EfAfQnBjbndIW2enVqlB%2FfF10sHTcxYy7%2F%2FAeED3xYvaaURX%2BrTtGX7a0ITAW3RWfWAcldMNBfjODj&X-Amz-Signature=16b7c03dfda24abdac6755fe2a1610c04ff8490a78393e6eb75c72353137340f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
