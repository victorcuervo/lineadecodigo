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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677B34TJO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T091243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNGUuGhrMhIWMcP%2B1C1mEn0xSI060eA6nCeEmzcA9k3gIgKGSahkWtTZ8L3Y3uGtjoGVNGkcSfxoiudk4uzDUJPRIqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB2t9MdAVEP0%2Be8pgyrcAwaXhMOfF0BFjByXmkMmI7yygu42LQAL7oo1yLbokvmbv4sjugqUStMuUgtVbFeaFGD%2FzlYP57889ZH8D8KT5TGl8YMyjfj6sGLXl%2F5CQJd5%2Bd7LsV75JfoTbrPvkubuREDQDeEpfSk19XIp5kQbAgybs2mjWKocKN89BV%2FR%2FoUpgGvYgTOlySZfbzTp0H2SEJnRHbtpO3pLAj1nWaz1mecwhNhM4nQB8ji2G0ohGceC6au3BTBbvGqoYCB8a00d84d4EY7PBEWHlX5hlbVOZW6HgyoOKxBgkZOVfFQ9qrQ2CBLX68D2Gcgms%2FA%2FpJwQu%2F2VjDGTK2qHiiYs1pCA%2B2d5sQgmuaWhjT4wdoEIWGtWWVvM43XE1lt%2Fq5JK%2BLNhZDNz692rXjLU4VGGTYw8KTrw8KmthVRVLjHuikA1vcmHLw6WyV%2F5akQw90%2BlnWrVUp1lAlv7YibHgT5p%2BoZGvB3WE4eUG04uoG859L1mMY9gcpjsRDKSV3IIojn%2BiUr43ikWYewg3NNGQCWTceE%2BceGeMYfm2HueXyxkaoB1FOAHwJ2SLhW9ONvjR5HN7MF3Y9lcA%2B8D1seq2%2FSsxexQnBvN3a24KFclIElC%2BaFiyw%2B1HyoXcoz3OHmiXroNMPHD38kGOqUBm8avDGLpe7Rf6VbTOo0zfHRa12FUqlG4BolVaYX5%2FNSZ6wRgXsU5GsbQIWojt66QQzHfV1vO%2F%2BiR%2Bjo0VF8%2BrPrW8SEEXsGr%2F20epI%2BdNW7LQCUsfCWpnobBh2VGILDIadwuu1P5Wanap0ibfP5zVmIcpQ6Npnxq0d1iKkL7i7%2Ffr1RIAqhwIAHWAcusfnJkGj7L6Ob0onsGa2AxOhhcWaILj6C8&X-Amz-Signature=88d938eb1d86ee700556d3cf61be6d9eef6d5b13092619ee15b2a1ab12c47b8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677B34TJO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T091243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNGUuGhrMhIWMcP%2B1C1mEn0xSI060eA6nCeEmzcA9k3gIgKGSahkWtTZ8L3Y3uGtjoGVNGkcSfxoiudk4uzDUJPRIqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB2t9MdAVEP0%2Be8pgyrcAwaXhMOfF0BFjByXmkMmI7yygu42LQAL7oo1yLbokvmbv4sjugqUStMuUgtVbFeaFGD%2FzlYP57889ZH8D8KT5TGl8YMyjfj6sGLXl%2F5CQJd5%2Bd7LsV75JfoTbrPvkubuREDQDeEpfSk19XIp5kQbAgybs2mjWKocKN89BV%2FR%2FoUpgGvYgTOlySZfbzTp0H2SEJnRHbtpO3pLAj1nWaz1mecwhNhM4nQB8ji2G0ohGceC6au3BTBbvGqoYCB8a00d84d4EY7PBEWHlX5hlbVOZW6HgyoOKxBgkZOVfFQ9qrQ2CBLX68D2Gcgms%2FA%2FpJwQu%2F2VjDGTK2qHiiYs1pCA%2B2d5sQgmuaWhjT4wdoEIWGtWWVvM43XE1lt%2Fq5JK%2BLNhZDNz692rXjLU4VGGTYw8KTrw8KmthVRVLjHuikA1vcmHLw6WyV%2F5akQw90%2BlnWrVUp1lAlv7YibHgT5p%2BoZGvB3WE4eUG04uoG859L1mMY9gcpjsRDKSV3IIojn%2BiUr43ikWYewg3NNGQCWTceE%2BceGeMYfm2HueXyxkaoB1FOAHwJ2SLhW9ONvjR5HN7MF3Y9lcA%2B8D1seq2%2FSsxexQnBvN3a24KFclIElC%2BaFiyw%2B1HyoXcoz3OHmiXroNMPHD38kGOqUBm8avDGLpe7Rf6VbTOo0zfHRa12FUqlG4BolVaYX5%2FNSZ6wRgXsU5GsbQIWojt66QQzHfV1vO%2F%2BiR%2Bjo0VF8%2BrPrW8SEEXsGr%2F20epI%2BdNW7LQCUsfCWpnobBh2VGILDIadwuu1P5Wanap0ibfP5zVmIcpQ6Npnxq0d1iKkL7i7%2Ffr1RIAqhwIAHWAcusfnJkGj7L6Ob0onsGa2AxOhhcWaILj6C8&X-Amz-Signature=a7cad443367219b2996f6b1805207bf7241c1d0d84f212fc0880eae06a7fb2c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
