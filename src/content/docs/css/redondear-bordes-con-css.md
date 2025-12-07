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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLCY2QXG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T153727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMnkW%2BBKoiut9zfiPUQGMgo7y00Ebb3gC4nKYqcVdboAiEA1hqAwPQhW9UWmz5xIbnW6ggCR2XKjQkpcB4cOE5%2B7TMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEBIKbR7zNQXS5HKCrcA8It%2Fn9b%2BdviD1Bj%2B76EEri3Ayb0C9H8EuWIvwkMF%2BATzyZXSWAyotPzSfOd2MF%2BLnSMbk1DEdjL%2Fh3anAIFK4i11yncTwPTbwU0j7m%2BQ9hjxn3SfYzUI2NLptvp1TZqkewvR5I53A%2BtWSQR%2FlkVaGYvYFHJHvAN8UFds2mDHYjSEMdkwehS3maimfiu1YOnk3YUgYYC%2BUK5PsgnyTcjDY2npEx%2BEfKssnliAsJ%2B9hAy6pLIH3YchIM20vgq9eV8W31Zr%2BT3NQjKhxybMy9IboB7Kjvcl%2BhCfPylSF82AxHRGwH8PkGQKmPKFBbzQBNoTbsujjoe4uy30ru9cF0wOn9yw0A1KzWyvTrHSd7Ce6O%2B7Fe%2FYYKnw4vGQd%2BPub%2BwW0FIx%2FWX6Xm4Kn7J9oIhhT873fcZBMc%2F5gqTAo481P75r9IEba9TJ9ICmfJ%2BknJmy5Vfeyp45yCdRwZdzyURmOzm3SukyV2YnJpbaoppmM7svz18kJIw5jpD9CEFZXYekU%2BIl6tzl0gFznk614W5Dj74oaaHKog07%2BDmTJRNz9JfiqdrO%2BghbzARTp%2B8MuOArLlSEUElbrmFBSUaBfxlgfKZHt8rhj8PAO8Ze8m%2FdUeevHORRrrrIOAnNNinMJuZ1ckGOqUBY%2FntVZ5qoDOYNGxopEag3hjQJcPEVkbzP998j4bbWi%2B37QlgItEK5b4H217PiGKM2f9SlrFU4kWe9gjf5vrWAPlnXy%2FITBoeI75Ts6pEhws5oM9fBk7QIhHP0njOSHG8xVpOKFYcxKV7eWGLRnFUuw3E9PijMi%2FxcGeKgaQNCJHdqyt19%2BygdzYUtk2JRJSiax1YIJ1rrNQxJ8IQEcyt7WHh7Z6O&X-Amz-Signature=51049c3357df925fa280452245149877e5d10bdcb8e702269082a5dfbcce7cca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLCY2QXG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T153727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMnkW%2BBKoiut9zfiPUQGMgo7y00Ebb3gC4nKYqcVdboAiEA1hqAwPQhW9UWmz5xIbnW6ggCR2XKjQkpcB4cOE5%2B7TMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEBIKbR7zNQXS5HKCrcA8It%2Fn9b%2BdviD1Bj%2B76EEri3Ayb0C9H8EuWIvwkMF%2BATzyZXSWAyotPzSfOd2MF%2BLnSMbk1DEdjL%2Fh3anAIFK4i11yncTwPTbwU0j7m%2BQ9hjxn3SfYzUI2NLptvp1TZqkewvR5I53A%2BtWSQR%2FlkVaGYvYFHJHvAN8UFds2mDHYjSEMdkwehS3maimfiu1YOnk3YUgYYC%2BUK5PsgnyTcjDY2npEx%2BEfKssnliAsJ%2B9hAy6pLIH3YchIM20vgq9eV8W31Zr%2BT3NQjKhxybMy9IboB7Kjvcl%2BhCfPylSF82AxHRGwH8PkGQKmPKFBbzQBNoTbsujjoe4uy30ru9cF0wOn9yw0A1KzWyvTrHSd7Ce6O%2B7Fe%2FYYKnw4vGQd%2BPub%2BwW0FIx%2FWX6Xm4Kn7J9oIhhT873fcZBMc%2F5gqTAo481P75r9IEba9TJ9ICmfJ%2BknJmy5Vfeyp45yCdRwZdzyURmOzm3SukyV2YnJpbaoppmM7svz18kJIw5jpD9CEFZXYekU%2BIl6tzl0gFznk614W5Dj74oaaHKog07%2BDmTJRNz9JfiqdrO%2BghbzARTp%2B8MuOArLlSEUElbrmFBSUaBfxlgfKZHt8rhj8PAO8Ze8m%2FdUeevHORRrrrIOAnNNinMJuZ1ckGOqUBY%2FntVZ5qoDOYNGxopEag3hjQJcPEVkbzP998j4bbWi%2B37QlgItEK5b4H217PiGKM2f9SlrFU4kWe9gjf5vrWAPlnXy%2FITBoeI75Ts6pEhws5oM9fBk7QIhHP0njOSHG8xVpOKFYcxKV7eWGLRnFUuw3E9PijMi%2FxcGeKgaQNCJHdqyt19%2BygdzYUtk2JRJSiax1YIJ1rrNQxJ8IQEcyt7WHh7Z6O&X-Amz-Signature=9346ff9fa32b91d42d7478e145028b2a20b17d6634baf26d5373d3c0d2a1e4b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
