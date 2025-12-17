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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKMIL7LP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr%2FJelrAzVc9B4%2FWu9v8J1V9vc0u%2B14d7tWz64dGHhEwIhALdUUoCmr6Lt2ixFekN4gDizuoJNm9gnPsimOsCsv0YzKv8DCHEQABoMNjM3NDIzMTgzODA1Igxb3zBBodL9eQGSpb0q3ANsmztXcM4XOX8vhA7vq5fa%2FQXQqsj71%2FsrJ%2Bu%2BceH6ATUAVR4Y%2BVDtGwrikwGQ45xcbY8UkgLixIo9vl29T7J%2Fp2%2FxERiFwBsO%2B2stlCgriToZYuEBK7UpkOwVz2vntNnSL3tzuIXarORwpyXQRGt%2FW95Y5DktitwL8Y0klzVgkNt16ZJXVu%2BPwMVpvtevlILgpmUzpaBksg%2FuRovbJsBO4VR0%2FuJ12Qy94GpS658xYLnEN%2BGSZJMZAFO4F%2FVuZAwSx%2BerWv9TElQJLLcXIPOAM0%2F0Dh7AYRv5ciwMT1PNkGcQo6mKQGM3kpZDlXSn3HkiKBBcltZ2ur%2BLP7i%2Bj%2B9VMT%2Fy2V%2FLQdx1Hb77HEgCpX3bvxDlEasT%2FZ50C1wQgFfDjdFbEeH94hpoEu%2BM5EZUjKlg%2BuBRM9UHA6pTf6bFZpQbOV6LI2BogyQV4yF%2Fb3FLrt3RE%2FWdWwvuNZaFDPrcZWD%2FaxXuMxu8R1ZiBKPJhCmeu6xGMJ%2FkOjUlJpKIogx4Yw1RGVKFeLrpM5HNaL1Zgexop2gjQn8z0%2FbPx5HnLvtour5%2BjGt3wkzslYqlJxClK24UICxc%2BhNLlPCLe6kPY9gVaKmieB4I0y10mSD8h7iTJUNCUMWQLj9MKjDL3ofKBjqkAVQP%2BQj%2BI29Pq3Jw31JD6Cy2a6o4Bf6raIbwGfcZMtXrfKtKTBVJ8trYU3yVFcKurdsQNObYOOsbUxvhcA2PlTmZOkKfSehvfoT6POlBgyO6PWgiprAbMgAb%2Fclk%2FOHNZ3wt4GzktA0aJvhrC9Ge65se6pONu8ul1a2z1%2BgA%2FxJm7jUVs6f25FVZC%2Bp9Q5xr9YXYi61pY1Bdjy%2FdNqr9IsZiC5Mg&X-Amz-Signature=4677d4946b6d43944b33c2bb8c9692296f0861aa38d32c56baf7d2d47f39a9de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKMIL7LP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr%2FJelrAzVc9B4%2FWu9v8J1V9vc0u%2B14d7tWz64dGHhEwIhALdUUoCmr6Lt2ixFekN4gDizuoJNm9gnPsimOsCsv0YzKv8DCHEQABoMNjM3NDIzMTgzODA1Igxb3zBBodL9eQGSpb0q3ANsmztXcM4XOX8vhA7vq5fa%2FQXQqsj71%2FsrJ%2Bu%2BceH6ATUAVR4Y%2BVDtGwrikwGQ45xcbY8UkgLixIo9vl29T7J%2Fp2%2FxERiFwBsO%2B2stlCgriToZYuEBK7UpkOwVz2vntNnSL3tzuIXarORwpyXQRGt%2FW95Y5DktitwL8Y0klzVgkNt16ZJXVu%2BPwMVpvtevlILgpmUzpaBksg%2FuRovbJsBO4VR0%2FuJ12Qy94GpS658xYLnEN%2BGSZJMZAFO4F%2FVuZAwSx%2BerWv9TElQJLLcXIPOAM0%2F0Dh7AYRv5ciwMT1PNkGcQo6mKQGM3kpZDlXSn3HkiKBBcltZ2ur%2BLP7i%2Bj%2B9VMT%2Fy2V%2FLQdx1Hb77HEgCpX3bvxDlEasT%2FZ50C1wQgFfDjdFbEeH94hpoEu%2BM5EZUjKlg%2BuBRM9UHA6pTf6bFZpQbOV6LI2BogyQV4yF%2Fb3FLrt3RE%2FWdWwvuNZaFDPrcZWD%2FaxXuMxu8R1ZiBKPJhCmeu6xGMJ%2FkOjUlJpKIogx4Yw1RGVKFeLrpM5HNaL1Zgexop2gjQn8z0%2FbPx5HnLvtour5%2BjGt3wkzslYqlJxClK24UICxc%2BhNLlPCLe6kPY9gVaKmieB4I0y10mSD8h7iTJUNCUMWQLj9MKjDL3ofKBjqkAVQP%2BQj%2BI29Pq3Jw31JD6Cy2a6o4Bf6raIbwGfcZMtXrfKtKTBVJ8trYU3yVFcKurdsQNObYOOsbUxvhcA2PlTmZOkKfSehvfoT6POlBgyO6PWgiprAbMgAb%2Fclk%2FOHNZ3wt4GzktA0aJvhrC9Ge65se6pONu8ul1a2z1%2BgA%2FxJm7jUVs6f25FVZC%2Bp9Q5xr9YXYi61pY1Bdjy%2FdNqr9IsZiC5Mg&X-Amz-Signature=987def8524e10525a156d534a5c547aa696eecd6408ee4e9027e78048c5c638f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
