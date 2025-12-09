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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKSCHH2E%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T044222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPrARbhhBkYypNR86GtG7OJpWghw6%2B2QwbpA61bT9w8AiEAviJIc%2FRIjR5fJcfsJn3dyajI9OI5SPPDrGdEhLNgyzAqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhSsRUwB1mLlBItbCrcAyg3QpAeGMfbTCn%2Bne15e6D1eOeY58Ogq%2BTEHgCGW2eTAIQHXk1HGiMfIvcv7%2BbPR6qevQbHTFY%2FN4dW%2BmQC%2FpVH9OU%2FZYozZeUWE2Hup5kHOGbc9kdrFOc9BFckPZgQ75WPHdXjz7Zi9fa3O8PvT4oJgL0IlPManH0L8qpRg%2FO1R75jpCjJSzRprQaYXIS3rbAmLcNoLlvwLBkHttuf7gYZDPVGXyKUZdEoVPgbNAUJWLQUy5MfWGHzanJNRJ2RM6Y3bce7NxmcERlz18a1docn0%2FxjPiIUTFgaTDPRv3cmxLsy5Zq7PXKeCYdt0CP58fxq0PCWaHt7k5jbivv7%2B3K0Ve1V8I2ABFB1JshKgLUScObLFZWSDhaNZbFOENO0baqEn0cGgnQ9mp%2BvxbJ1ENfK64BYx8Y2ArE6mllnHNtnZETM4G8%2FtlZa9DNtVPJ0d1HluDZm01%2FbXnuAA0wxBVDrk9wPvw7oP9DUjy%2BtpxPc3q8z%2Fmbe11WI0lTLQuyT4IxGmg0BmgKDRrdJmtqPyPdtBLTnbwQvpLR4DsJpEDLv9tCUSxmP0sNWuZkKd3Tv7dGWejVnGI%2B%2BepM7HMHO60alnp%2FyNZczNOaZwBMomyuWT04rUoP3PyCsXDG%2BMLXK3skGOqUBO%2FWbUWsFL6cdQ5smv9oJZn9rwqfSsbjjdEDI%2BFDSHJv%2F1zZzmiRu24k4upLjxwcnxlHVx61BF7YY685jgTCwYUqCJTkqBob2yKSrsw4kq4dQ78i%2FJdEhG%2FZI7R7LD0QkwSsw9v7i3OI%2FfUfsdnRpUpCPCzcs3w2yVKVW3sAPz6LfV9z5SqBhZXbu2pJB8N%2BBXUvat%2BZPg88uAqAMQdkIwuIKXi2X&X-Amz-Signature=9d64d30335a1f9fd660caa141570e90fec196548b6f0c1aa21ded0539b71cd04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKSCHH2E%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T044222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPrARbhhBkYypNR86GtG7OJpWghw6%2B2QwbpA61bT9w8AiEAviJIc%2FRIjR5fJcfsJn3dyajI9OI5SPPDrGdEhLNgyzAqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhSsRUwB1mLlBItbCrcAyg3QpAeGMfbTCn%2Bne15e6D1eOeY58Ogq%2BTEHgCGW2eTAIQHXk1HGiMfIvcv7%2BbPR6qevQbHTFY%2FN4dW%2BmQC%2FpVH9OU%2FZYozZeUWE2Hup5kHOGbc9kdrFOc9BFckPZgQ75WPHdXjz7Zi9fa3O8PvT4oJgL0IlPManH0L8qpRg%2FO1R75jpCjJSzRprQaYXIS3rbAmLcNoLlvwLBkHttuf7gYZDPVGXyKUZdEoVPgbNAUJWLQUy5MfWGHzanJNRJ2RM6Y3bce7NxmcERlz18a1docn0%2FxjPiIUTFgaTDPRv3cmxLsy5Zq7PXKeCYdt0CP58fxq0PCWaHt7k5jbivv7%2B3K0Ve1V8I2ABFB1JshKgLUScObLFZWSDhaNZbFOENO0baqEn0cGgnQ9mp%2BvxbJ1ENfK64BYx8Y2ArE6mllnHNtnZETM4G8%2FtlZa9DNtVPJ0d1HluDZm01%2FbXnuAA0wxBVDrk9wPvw7oP9DUjy%2BtpxPc3q8z%2Fmbe11WI0lTLQuyT4IxGmg0BmgKDRrdJmtqPyPdtBLTnbwQvpLR4DsJpEDLv9tCUSxmP0sNWuZkKd3Tv7dGWejVnGI%2B%2BepM7HMHO60alnp%2FyNZczNOaZwBMomyuWT04rUoP3PyCsXDG%2BMLXK3skGOqUBO%2FWbUWsFL6cdQ5smv9oJZn9rwqfSsbjjdEDI%2BFDSHJv%2F1zZzmiRu24k4upLjxwcnxlHVx61BF7YY685jgTCwYUqCJTkqBob2yKSrsw4kq4dQ78i%2FJdEhG%2FZI7R7LD0QkwSsw9v7i3OI%2FfUfsdnRpUpCPCzcs3w2yVKVW3sAPz6LfV9z5SqBhZXbu2pJB8N%2BBXUvat%2BZPg88uAqAMQdkIwuIKXi2X&X-Amz-Signature=6959952e18a53dddf3d5706df1b738932ab9b12e2c1974a69ecc74fef3c7e95d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
