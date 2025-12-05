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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLVOON55%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T233310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9aX%2BQ218pRUruD4SNAS7v1e6HLEtYuk9ESz5SHTKGeAIhAKEUdHJKIdKdUO2COasNerbgUTvv913EDiteYKJjfIDxKv8DCGgQABoMNjM3NDIzMTgzODA1IgwFzn8CwKLxbiNeRo0q3AOBwivgs6DPaQZojgeKSI7leecPTKrNbS2sXIL2t%2F%2F8Llio7cfA8DJbyfHqusTnBrfk2s5eTpeq6holapJHkkmpTV9DynyQo%2F2Q701Mmc9lj%2Fs0XA2TQPBu4ZT%2F7TVfn71rDw9Scu3wlnjWq7edeJlElq8HKoQdmOJ12%2BnJ4Jr0wwvKIKo3AcQhO2ca2zktNauf%2FKEsdNbrbmJDJ3ZZmM39q7guOvfm3CU8JoUfjPCY%2FysP7qw2ouVqymAbW2Hf5AnvWze%2BHy9pbsJCbN5AZby8ys3XfmSV5LkOGy55tSLIW4Wal6dTtA2nagl37Yi8IjxT8mIQmeVhULG3zxGEM83ujnoFtYo0W1eeNaShnb8VeK%2F7S2jdvVjL4utJ%2BHsr2ulMMB4VEqCbAsOem929XOn2wixXD3GnFitlsiTcUy0PQHzBc1kUhXfhwGBl4j9OWYdUhVqWsaw%2FYbizjXXA2QGBnvwNpeTJ1YZ%2BfCET3HokKAuBuJvP%2FpY%2BsdDlSFwZy4zcmeH0YkvteMY4OHBtXekhRDl%2FZYxFS0FXCBT25i5Vl8tqmjMxi5MzFsHkFB2O%2F7kCcc8GNI1B%2B1Jaejjs8epmDUe8%2B68cd9qdrQlFM0wWPUIVjCaiTyCcDe7X2TDoxc3JBjqkAcsQL1tMS7II%2FTh%2FK0xfCKYAfanz%2FWH8V1cqYHvifLAgrAjk6wD50ed4PVo01oYURQrkxIg8a%2BG%2FpLSwJzBGZo2fNfQIGQSaYPRUFLSL3Wz%2Fjmp810b7X9PhiCq%2Bvt3ztTOksiFp7nM6YDFyJngQAbEkljH1ahghz3KSnIcV8SXc9yvgGZgePwETtycD5Tj1dYmxIP8H7BtGgJo%2FQYU8rwbE%2FK4R&X-Amz-Signature=d889609c6fdf6aaec69619d1bac064b5553fcd49ee735c5942540f3735b5ca9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLVOON55%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T233310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9aX%2BQ218pRUruD4SNAS7v1e6HLEtYuk9ESz5SHTKGeAIhAKEUdHJKIdKdUO2COasNerbgUTvv913EDiteYKJjfIDxKv8DCGgQABoMNjM3NDIzMTgzODA1IgwFzn8CwKLxbiNeRo0q3AOBwivgs6DPaQZojgeKSI7leecPTKrNbS2sXIL2t%2F%2F8Llio7cfA8DJbyfHqusTnBrfk2s5eTpeq6holapJHkkmpTV9DynyQo%2F2Q701Mmc9lj%2Fs0XA2TQPBu4ZT%2F7TVfn71rDw9Scu3wlnjWq7edeJlElq8HKoQdmOJ12%2BnJ4Jr0wwvKIKo3AcQhO2ca2zktNauf%2FKEsdNbrbmJDJ3ZZmM39q7guOvfm3CU8JoUfjPCY%2FysP7qw2ouVqymAbW2Hf5AnvWze%2BHy9pbsJCbN5AZby8ys3XfmSV5LkOGy55tSLIW4Wal6dTtA2nagl37Yi8IjxT8mIQmeVhULG3zxGEM83ujnoFtYo0W1eeNaShnb8VeK%2F7S2jdvVjL4utJ%2BHsr2ulMMB4VEqCbAsOem929XOn2wixXD3GnFitlsiTcUy0PQHzBc1kUhXfhwGBl4j9OWYdUhVqWsaw%2FYbizjXXA2QGBnvwNpeTJ1YZ%2BfCET3HokKAuBuJvP%2FpY%2BsdDlSFwZy4zcmeH0YkvteMY4OHBtXekhRDl%2FZYxFS0FXCBT25i5Vl8tqmjMxi5MzFsHkFB2O%2F7kCcc8GNI1B%2B1Jaejjs8epmDUe8%2B68cd9qdrQlFM0wWPUIVjCaiTyCcDe7X2TDoxc3JBjqkAcsQL1tMS7II%2FTh%2FK0xfCKYAfanz%2FWH8V1cqYHvifLAgrAjk6wD50ed4PVo01oYURQrkxIg8a%2BG%2FpLSwJzBGZo2fNfQIGQSaYPRUFLSL3Wz%2Fjmp810b7X9PhiCq%2Bvt3ztTOksiFp7nM6YDFyJngQAbEkljH1ahghz3KSnIcV8SXc9yvgGZgePwETtycD5Tj1dYmxIP8H7BtGgJo%2FQYU8rwbE%2FK4R&X-Amz-Signature=d231f03d152f98001734f62880e322c60321b75c4287d297a0f80330d7248fb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
