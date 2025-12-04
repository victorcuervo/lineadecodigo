---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBGQFN2W%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T040608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCICaLsRxJsedihT%2FyJ2YjMWSl0ByZFe6WqeYDSzi2XlpQAiBq0o0PlxnfhtYsKFKHaIR5jiDj97ybR6J9IZifRkQAqir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM2YUEosLabEf%2FO6WxKtwDR%2BffG7p1VuiDHk7gj7sHmtIpoVlsZbsJk6icF2TzfkGlqDevP%2B0NxIcYQGxzQoAZotiUR%2FzhN166904NuIa8PROgGwkxostnXCEA5q2xRCbwc201RTggwO0J9aUzKmqRv4J0zQlJAQEduhqjf4aM%2BvTgrAow03gaqDFss9%2FXOZCNUQnOE0trV%2BGxl22WHfKUITJHRHT%2BHKgXsIaxmrNxEhYmIGfSSKIJ6to%2BTqOg1XdQTYlJHXEOh6D4%2FROZaEcunTIIVFXO7RfNA3%2FxHVEohEZcEKcFH1AdgmIedj3XWBMKLbfl6i8m%2Fg5zH1tTEAd%2F9CgKyoR4gEIEQ7ho%2FwJXPQPD2M2vEHX%2BGP3IG%2Fi79j4oxU8WumtcwaoV5TWX6PV3OijB4NM5mVeWU%2BxQjDmNiXQYdZK%2BxruRZP8hgabmGbUDkC7%2F4z0gJIo%2FHhobWDpnJk4AqavYqtxqJ7QhNCcc9m8w25veVU%2BoNKTzOjjUIBYRmhMNljvsyELj2OFG1QNZMokuGptkeDxcaZUMQK%2BysbD9lcRrkxUE5aACMepCYwWM%2Fnej6KNFJLI2ErUIUggRHQuWo09j304RBklhXJBOtC52Ge25jBI7b%2FruEKgmFHT7oXcTmuSna5GKhpUwufLDyQY6pgFNSkK7QM0hMSQbata8ESzg2AjnF%2FI75m0svtaTdbRzEMGTnbSgp5WtZPq4denZ3CUSagk2%2FNJzkIAfBBmiSnMiotce0iNT31b0iiolKY4mZzCPUJZggYbUbYKEV69zt%2F8RGbGiOPaE2CmFhU29zJlY42MDO8Bcrj2bZ2hSstS03nb1mx3TLbcIC5mQs9GzTjIWoTx2uokPfWv6kyO3HDp8OOQDr0Yd&X-Amz-Signature=58b1c03eb95c2749b9bbd0aaefdfbbbb25e3a68692bc10bc4a33820f7e035da0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBGQFN2W%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T040608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCICaLsRxJsedihT%2FyJ2YjMWSl0ByZFe6WqeYDSzi2XlpQAiBq0o0PlxnfhtYsKFKHaIR5jiDj97ybR6J9IZifRkQAqir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM2YUEosLabEf%2FO6WxKtwDR%2BffG7p1VuiDHk7gj7sHmtIpoVlsZbsJk6icF2TzfkGlqDevP%2B0NxIcYQGxzQoAZotiUR%2FzhN166904NuIa8PROgGwkxostnXCEA5q2xRCbwc201RTggwO0J9aUzKmqRv4J0zQlJAQEduhqjf4aM%2BvTgrAow03gaqDFss9%2FXOZCNUQnOE0trV%2BGxl22WHfKUITJHRHT%2BHKgXsIaxmrNxEhYmIGfSSKIJ6to%2BTqOg1XdQTYlJHXEOh6D4%2FROZaEcunTIIVFXO7RfNA3%2FxHVEohEZcEKcFH1AdgmIedj3XWBMKLbfl6i8m%2Fg5zH1tTEAd%2F9CgKyoR4gEIEQ7ho%2FwJXPQPD2M2vEHX%2BGP3IG%2Fi79j4oxU8WumtcwaoV5TWX6PV3OijB4NM5mVeWU%2BxQjDmNiXQYdZK%2BxruRZP8hgabmGbUDkC7%2F4z0gJIo%2FHhobWDpnJk4AqavYqtxqJ7QhNCcc9m8w25veVU%2BoNKTzOjjUIBYRmhMNljvsyELj2OFG1QNZMokuGptkeDxcaZUMQK%2BysbD9lcRrkxUE5aACMepCYwWM%2Fnej6KNFJLI2ErUIUggRHQuWo09j304RBklhXJBOtC52Ge25jBI7b%2FruEKgmFHT7oXcTmuSna5GKhpUwufLDyQY6pgFNSkK7QM0hMSQbata8ESzg2AjnF%2FI75m0svtaTdbRzEMGTnbSgp5WtZPq4denZ3CUSagk2%2FNJzkIAfBBmiSnMiotce0iNT31b0iiolKY4mZzCPUJZggYbUbYKEV69zt%2F8RGbGiOPaE2CmFhU29zJlY42MDO8Bcrj2bZ2hSstS03nb1mx3TLbcIC5mQs9GzTjIWoTx2uokPfWv6kyO3HDp8OOQDr0Yd&X-Amz-Signature=c6a3f19e13abb926e07d44bcd65d3def9425d400d92e8537b6d76cea3854327d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
