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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7EBIMPU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T033316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBHzuAQwd4XbSBWB5ywgdpJ64am6mi9aUHlGrrTBUSmnAiALw5uyT6NCIt2RQkNHJ%2BqbibsFhqAb4JiIrM193kAu1Cr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMTlkchKmxEc5wa%2B0eKtwDkJNRiHb%2FIvLILqiUJ3qeADpjj6rVarRoYoIM85UABl1io6M3Rc%2B4N6RX93yy5TEqRKVaKVGufwGa2OtTPbEOqW%2Fs0CKtaqapuMze2hOrtARlFqKAI5dL8AXKPuQ6G4qX5Na3mQIjuOFBMBBeznmP0QH3Id9OlpBoUOlawqjCgKvdrbo32hDUgOi9XXFjoqYEhpJ8t2pexrcmh7LBLONfFnDBNr9ZIFsoJ0ayMdRKQiGVGecwys%2FSD7ylDYXcaKBUcKJGQw4Of5Y%2B8y6EjGwb2qnhOotzvT2qFXQOK5ch9X%2FjdlrzHCLSajwa9vCwopgEpIb78Dj66WUbnuNwG74Mua4b37j5Z7rJOfz%2FYpLHqNawe37xoRzrWoU%2FRax2eHUrIrdKrvDShyVZXiLNy4o42%2FkOP3KkWjP8a1nOiDBTlhAEUVGxjWBjtp6E1zfO%2BXbI%2B%2FZCiM330A%2FWVnNwFIkcTPzPKLebV2Tfjdl5Ej8OsjVYIUsmHAkRJsCw3wQARopBkbc%2Fl3CiXqPUB81jONhoKqJZboAHEZb%2Fuljp1KoXi4q2hGUJ2kU44xvQpxchAC3A0POmxMXSb4dJKgHp7KROaCkaZ7NWFnD314P7K0qLv4VioFtZZNh33e6wPUQwqozIyQY6pgFmzzcWcuVnwPQaovRoIBPbp0%2Fzjo25CjEMYJFVcOB5y1cHY2fyVoiSm89dQRciWSngIwPDAwSc8k4xl%2FdpJ%2Bc6kHBp3k4BUgsv05OIhKZ%2FM6HEMo3iUXYtOXh59iT%2Fl%2BHJUHUB0CBgpwjFwRXVTVffX5i47DqETQYrakJT58JiQx9Nzx7WPrSW4sagLjSxfhn7CZ9oR6belepe9MgXuOqHLtm%2FfPoK&X-Amz-Signature=8ecdab5c5990b40159494bd1ccca9e57a8ca0ad730e468f9b20af8905eaee904&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7EBIMPU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T033316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBHzuAQwd4XbSBWB5ywgdpJ64am6mi9aUHlGrrTBUSmnAiALw5uyT6NCIt2RQkNHJ%2BqbibsFhqAb4JiIrM193kAu1Cr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMTlkchKmxEc5wa%2B0eKtwDkJNRiHb%2FIvLILqiUJ3qeADpjj6rVarRoYoIM85UABl1io6M3Rc%2B4N6RX93yy5TEqRKVaKVGufwGa2OtTPbEOqW%2Fs0CKtaqapuMze2hOrtARlFqKAI5dL8AXKPuQ6G4qX5Na3mQIjuOFBMBBeznmP0QH3Id9OlpBoUOlawqjCgKvdrbo32hDUgOi9XXFjoqYEhpJ8t2pexrcmh7LBLONfFnDBNr9ZIFsoJ0ayMdRKQiGVGecwys%2FSD7ylDYXcaKBUcKJGQw4Of5Y%2B8y6EjGwb2qnhOotzvT2qFXQOK5ch9X%2FjdlrzHCLSajwa9vCwopgEpIb78Dj66WUbnuNwG74Mua4b37j5Z7rJOfz%2FYpLHqNawe37xoRzrWoU%2FRax2eHUrIrdKrvDShyVZXiLNy4o42%2FkOP3KkWjP8a1nOiDBTlhAEUVGxjWBjtp6E1zfO%2BXbI%2B%2FZCiM330A%2FWVnNwFIkcTPzPKLebV2Tfjdl5Ej8OsjVYIUsmHAkRJsCw3wQARopBkbc%2Fl3CiXqPUB81jONhoKqJZboAHEZb%2Fuljp1KoXi4q2hGUJ2kU44xvQpxchAC3A0POmxMXSb4dJKgHp7KROaCkaZ7NWFnD314P7K0qLv4VioFtZZNh33e6wPUQwqozIyQY6pgFmzzcWcuVnwPQaovRoIBPbp0%2Fzjo25CjEMYJFVcOB5y1cHY2fyVoiSm89dQRciWSngIwPDAwSc8k4xl%2FdpJ%2Bc6kHBp3k4BUgsv05OIhKZ%2FM6HEMo3iUXYtOXh59iT%2Fl%2BHJUHUB0CBgpwjFwRXVTVffX5i47DqETQYrakJT58JiQx9Nzx7WPrSW4sagLjSxfhn7CZ9oR6belepe9MgXuOqHLtm%2FfPoK&X-Amz-Signature=c861e616c4626e615762a1b5b4fee5860fed3fedf25a39311a548304afa20f7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
