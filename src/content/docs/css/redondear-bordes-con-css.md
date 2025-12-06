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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7XEI6IH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T071501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBFzXWzRJuASiuLgl39vrvcHXZiFuPI2Ob2lBw5npIJAiEA3jOs9CpeYuId8Wvz7Ludxk7tkmJtv8l0anQ93yM3%2FvQq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDEp1i%2BY4RUP0ONSfFCrcA66hezkGSazfX21hs9wKGDXBt%2Fd%2BxiVrVh1Ki6ItAKB88V5ks7lv7TctzGkvIxCTi%2FbMweNB8INaQZ5UuGGNiqw0S%2BR1WiIkPaU%2FQ4ZLUOSzokkBzYSxWYEcAIGlW0jX9t0Z0TgXIE0GxMDE0Tx94stG7NUJABeBliGkdd4s0Ak%2Faf9RK3rdgSO1f%2BhKBn7Kq41M5oajYAIyo%2Bx4T1oSqi0ITd%2B7A6hhR%2BlbqezHQvG0K0a9uK42hLJDANe1o%2FM8uLbrzNKrwurP6jTYjxaXCu6Uqm5jjuH7kFml9HgHxIRL1pp%2FlwYzxNMxm1wg%2BpGZWRW0nz2K7QetkYGinhF9N0MoQy07T5nBbgjAR0nC2XEN%2BOunNX3On0d5Kqgl%2BmYOUL3tMkgsNNe2T9VvpvFhK7qY3v8M5XmfXFDMMEdY3R4Nien7b2McMGR6fJUL2Wz9BEJ1e2ebGl6juw24bS0M2WkvIVNQSKiWX8d%2BtpmbvrtwqMvz2tZTRmBGLzUe6Y3wu1erznAC0fJtBzfla2OI0CfxmMfIKY7WjPMs%2FK8hKEc89csXSaGx5IEyf4Kq2tmdQYg5nJ4BjyJNv%2Fwb0HwbdvTlvFtDct6YlRd0MTodZnzS3AYiRO2sDpowOkC3MOuez8kGOqUBqL9NGkklPPGDl1p1aIOjQsLxTAOxzAF2SiHy48dY0Y8GEFPgxIvkMm96fd%2FDAEi5J%2BC3dXo%2BPFeD5zyUc96FOTsElI7VNQ%2Fs%2BzLXCNgpqcnYCE1WDGMyl4pydFn7MUBiBIBa3xWNP5jMmiyD5HoiPYcdtL3D9ArVek6IW2E%2FWTk%2FtzAJmORuzLO%2B46JoaDdX2c1xoJolzlMxnhQ%2Bmo8j9x5FxXn%2B&X-Amz-Signature=ce51789ad806c2e71135916a474ee53f0f737119babf9fa9a5474338e1860389&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7XEI6IH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T071501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBFzXWzRJuASiuLgl39vrvcHXZiFuPI2Ob2lBw5npIJAiEA3jOs9CpeYuId8Wvz7Ludxk7tkmJtv8l0anQ93yM3%2FvQq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDEp1i%2BY4RUP0ONSfFCrcA66hezkGSazfX21hs9wKGDXBt%2Fd%2BxiVrVh1Ki6ItAKB88V5ks7lv7TctzGkvIxCTi%2FbMweNB8INaQZ5UuGGNiqw0S%2BR1WiIkPaU%2FQ4ZLUOSzokkBzYSxWYEcAIGlW0jX9t0Z0TgXIE0GxMDE0Tx94stG7NUJABeBliGkdd4s0Ak%2Faf9RK3rdgSO1f%2BhKBn7Kq41M5oajYAIyo%2Bx4T1oSqi0ITd%2B7A6hhR%2BlbqezHQvG0K0a9uK42hLJDANe1o%2FM8uLbrzNKrwurP6jTYjxaXCu6Uqm5jjuH7kFml9HgHxIRL1pp%2FlwYzxNMxm1wg%2BpGZWRW0nz2K7QetkYGinhF9N0MoQy07T5nBbgjAR0nC2XEN%2BOunNX3On0d5Kqgl%2BmYOUL3tMkgsNNe2T9VvpvFhK7qY3v8M5XmfXFDMMEdY3R4Nien7b2McMGR6fJUL2Wz9BEJ1e2ebGl6juw24bS0M2WkvIVNQSKiWX8d%2BtpmbvrtwqMvz2tZTRmBGLzUe6Y3wu1erznAC0fJtBzfla2OI0CfxmMfIKY7WjPMs%2FK8hKEc89csXSaGx5IEyf4Kq2tmdQYg5nJ4BjyJNv%2Fwb0HwbdvTlvFtDct6YlRd0MTodZnzS3AYiRO2sDpowOkC3MOuez8kGOqUBqL9NGkklPPGDl1p1aIOjQsLxTAOxzAF2SiHy48dY0Y8GEFPgxIvkMm96fd%2FDAEi5J%2BC3dXo%2BPFeD5zyUc96FOTsElI7VNQ%2Fs%2BzLXCNgpqcnYCE1WDGMyl4pydFn7MUBiBIBa3xWNP5jMmiyD5HoiPYcdtL3D9ArVek6IW2E%2FWTk%2FtzAJmORuzLO%2B46JoaDdX2c1xoJolzlMxnhQ%2Bmo8j9x5FxXn%2B&X-Amz-Signature=1c7b293524c9dedb598401e0b0bf29e1ddf072d0d493d5e0259f0539f88c5e7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
