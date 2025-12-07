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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRJJH53I%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T195903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjhOFM%2BSzTjzNTMSswoatLTDHsZhXl3iLCn7Qd1SKcOAIhAK213iE28%2B%2F88ixDU1no7KjIDoDDU0HEhvNlqRBVHc0VKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6AlAl6YB47HKvZ7sq3APr22i7dlJ2SvzHTro5NaRn3C23q4FbOP3g%2F6jtxRB8tz%2FLseMsJ9J9Z4tqixtGI2CgE4UuQRqqb3O%2FjjSTv7Z7mGD3Asddnmc0iU%2F8nhOfdbNAkGG1WLcU6gXuPy423wm34ZzS5A3ikrk4%2Ba1mCVtFuBngtbvTrSE9f7w786oGKaTf3ADcVNL%2BvppuDHk01vW4GcnhK5oNzrGVs4Mu09PvKUj2ko0xaDf1tXpZvrpHeDXS1Sbush2GZS3Tpdg8JGnihudmNBa0rr37eN2FcWKm8zUXNTuzCacEy1QAFH%2FqgOT0uMuEsxvCdGNqdkLAIbxbaaIoS8ykCjbkN9%2B938JsH0IR6WfNh0qrxIYa%2BOSYehuSQXJIcAvcXibUh32DbM6AC4ANs%2FEdLpMIY%2Fxxr8bwECroHSFgXcE3x0BSthq7xhs4IN8xZynRrSAjZZ0grj6Ez%2B8vwK%2Fn%2B%2F1R%2Brbrsa5M1rHLqrYTInWPKbVRwaZacCx2tY8BlhxDP%2BhdSWQJp0%2B4FF2tj12mR9s0xiqKrKYPStdsNwqz5XFPLAsHavKZYTKGpEzZoNcj%2FXThBu2UgTtZUcjaI2POC%2BOC4b%2BwG%2BokgobMTvlW4crwMX6kcXbNIn%2F7KzCWG7%2B41r1KzDDiqNfJBjqkAS1b0YyFtosaNlBFHPczzzHYzjczlBD6Y5RKuxRdd5JK5yngsqZWuQ5Svz9U7o07j%2F3MXu4E45t421NRGFyCcujl7AXffGyT6vQ%2F8Hsal%2FGzrKP6yathi3Vnhs6RK%2Fl2BNQc3PZq1OK%2Bg7h3g4Q5hztxmy3LAze1CiXsy2MEvKYAgln4YtrIYGrYtZXkxRVtUyfUJL%2B7cYxxrdtCrD7UkV2yio%2F1&X-Amz-Signature=cca3a04d9a734e469eac9e947872b2bb431987686a49824fc3d26135c318aeff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRJJH53I%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T195903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjhOFM%2BSzTjzNTMSswoatLTDHsZhXl3iLCn7Qd1SKcOAIhAK213iE28%2B%2F88ixDU1no7KjIDoDDU0HEhvNlqRBVHc0VKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6AlAl6YB47HKvZ7sq3APr22i7dlJ2SvzHTro5NaRn3C23q4FbOP3g%2F6jtxRB8tz%2FLseMsJ9J9Z4tqixtGI2CgE4UuQRqqb3O%2FjjSTv7Z7mGD3Asddnmc0iU%2F8nhOfdbNAkGG1WLcU6gXuPy423wm34ZzS5A3ikrk4%2Ba1mCVtFuBngtbvTrSE9f7w786oGKaTf3ADcVNL%2BvppuDHk01vW4GcnhK5oNzrGVs4Mu09PvKUj2ko0xaDf1tXpZvrpHeDXS1Sbush2GZS3Tpdg8JGnihudmNBa0rr37eN2FcWKm8zUXNTuzCacEy1QAFH%2FqgOT0uMuEsxvCdGNqdkLAIbxbaaIoS8ykCjbkN9%2B938JsH0IR6WfNh0qrxIYa%2BOSYehuSQXJIcAvcXibUh32DbM6AC4ANs%2FEdLpMIY%2Fxxr8bwECroHSFgXcE3x0BSthq7xhs4IN8xZynRrSAjZZ0grj6Ez%2B8vwK%2Fn%2B%2F1R%2Brbrsa5M1rHLqrYTInWPKbVRwaZacCx2tY8BlhxDP%2BhdSWQJp0%2B4FF2tj12mR9s0xiqKrKYPStdsNwqz5XFPLAsHavKZYTKGpEzZoNcj%2FXThBu2UgTtZUcjaI2POC%2BOC4b%2BwG%2BokgobMTvlW4crwMX6kcXbNIn%2F7KzCWG7%2B41r1KzDDiqNfJBjqkAS1b0YyFtosaNlBFHPczzzHYzjczlBD6Y5RKuxRdd5JK5yngsqZWuQ5Svz9U7o07j%2F3MXu4E45t421NRGFyCcujl7AXffGyT6vQ%2F8Hsal%2FGzrKP6yathi3Vnhs6RK%2Fl2BNQc3PZq1OK%2Bg7h3g4Q5hztxmy3LAze1CiXsy2MEvKYAgln4YtrIYGrYtZXkxRVtUyfUJL%2B7cYxxrdtCrD7UkV2yio%2F1&X-Amz-Signature=c934d91c683b816301975320da080c9d4dc58b76ffc0744f542d8f2156a10e9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
