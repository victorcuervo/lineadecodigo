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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBDD5YMN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T180115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXakQHSvNk9ZHpBhl77qvfY0AoiVhNV5IIWiWapDsCrgIhAOLZXpBcX4OI%2FhMdjWYaX0TFSSti32qPx9YF0Lsl5LoDKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWPcn3YlbJghn3Ydkq3AMpVQp7RXqfJdlyXd8AHPintW4fVWCPZA0KYVq1Ki%2BC7F73pwSKl3bV3X3pWaEhchWND8pVxitEBr9p3z0h%2FzVZaEByltgjhkGcohr%2BLY843mZrONr2LaZ04d7%2Fg6LwyZtoUvbHfGM32Q4bIz%2F6TR3H3A%2BelowOPI4UNBkQJKxq9qnVMqlEZxRA6r92sYJ0Moaqeu7g06UJO4fbCsbeYO5XRy9jMGOXVA0CdY%2Ft9utU9ZdmFiHrCjt0punMUebEBriRfdNySraW9441rcaInXFbyVcCmpuwMjYTMhwf0f2fxszOLtNYn3l8aw%2FKYJIaYX6kJuBPOjwwRzUdCsZjIQvHZtrVpRUdmGsX5Hxr3YZKFsHSS%2B519JueTXQ5vepdwx8ADNgMgDTTQDHb02nTeZZVr1DNHmIwHG2RVUoBJXu0Xlzadfin2vf3b1E9QlTRLtsCRwbUvaGEfX3j7IEIlcPXV2ZNvt5uCWLoXR7edq9EnTxunQtfLM6RezJyRNU1ZdjxzNmSe2Hoy6PTxX1aLFWGvzywXUM37cGGOwqlf0wvcTiqpAgqyA7adR%2B875Y4JJ1VxAF8Q8BrInmfM%2FP16B1h5GRbwJ4Ya18nxW8FFLlYbCHTLHfJsC9ziLUGRjCpoIvKBjqkASmX77P7nFqVRn58LvWiahfJOB8sVFgZKV01CJ3YssxYU9GAVhjCytTlYhDBYmblKGozP0su88K5h2wIEljUEhUeiiArEOV6JrVKrra%2FkbEIRd4Z6FpxUOqgcV13wru8zea3q4SlfYwsQtrT73fgVQtwTD6Kcm5HCQqeJxiVX8%2B2r3uQNTKHEv1LgmbaKBMqIFwq2fJBFzxLHFRYr1bQT6%2FuCGun&X-Amz-Signature=f7ec9f2b56cae32c5a452abb9d8e95bb0c610e7454e59100716573cd96c55e0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBDD5YMN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T180115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXakQHSvNk9ZHpBhl77qvfY0AoiVhNV5IIWiWapDsCrgIhAOLZXpBcX4OI%2FhMdjWYaX0TFSSti32qPx9YF0Lsl5LoDKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWPcn3YlbJghn3Ydkq3AMpVQp7RXqfJdlyXd8AHPintW4fVWCPZA0KYVq1Ki%2BC7F73pwSKl3bV3X3pWaEhchWND8pVxitEBr9p3z0h%2FzVZaEByltgjhkGcohr%2BLY843mZrONr2LaZ04d7%2Fg6LwyZtoUvbHfGM32Q4bIz%2F6TR3H3A%2BelowOPI4UNBkQJKxq9qnVMqlEZxRA6r92sYJ0Moaqeu7g06UJO4fbCsbeYO5XRy9jMGOXVA0CdY%2Ft9utU9ZdmFiHrCjt0punMUebEBriRfdNySraW9441rcaInXFbyVcCmpuwMjYTMhwf0f2fxszOLtNYn3l8aw%2FKYJIaYX6kJuBPOjwwRzUdCsZjIQvHZtrVpRUdmGsX5Hxr3YZKFsHSS%2B519JueTXQ5vepdwx8ADNgMgDTTQDHb02nTeZZVr1DNHmIwHG2RVUoBJXu0Xlzadfin2vf3b1E9QlTRLtsCRwbUvaGEfX3j7IEIlcPXV2ZNvt5uCWLoXR7edq9EnTxunQtfLM6RezJyRNU1ZdjxzNmSe2Hoy6PTxX1aLFWGvzywXUM37cGGOwqlf0wvcTiqpAgqyA7adR%2B875Y4JJ1VxAF8Q8BrInmfM%2FP16B1h5GRbwJ4Ya18nxW8FFLlYbCHTLHfJsC9ziLUGRjCpoIvKBjqkASmX77P7nFqVRn58LvWiahfJOB8sVFgZKV01CJ3YssxYU9GAVhjCytTlYhDBYmblKGozP0su88K5h2wIEljUEhUeiiArEOV6JrVKrra%2FkbEIRd4Z6FpxUOqgcV13wru8zea3q4SlfYwsQtrT73fgVQtwTD6Kcm5HCQqeJxiVX8%2B2r3uQNTKHEv1LgmbaKBMqIFwq2fJBFzxLHFRYr1bQT6%2FuCGun&X-Amz-Signature=bb60dc16be2693bedea6aed5ba1d2dc856b8d6f579c1e46132e0b3c92573b374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
