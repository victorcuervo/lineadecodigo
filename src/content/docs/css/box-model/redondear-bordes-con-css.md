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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF7CHHLL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo2MbnRilKkvCs8SC9KshBJGWij1AHSsk0fnD5WPVyZwIgCGMk8L8HApu%2BZ0xW6zH7T5v04fhN1DnZtReq0CKf7mkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMV8A9WYdTO36Ep4hCrcAx2DmlHRksiDT56B%2FGaO37Xjy7kwBBE7cxqbOKg8uDRa5whXi%2FPF%2BxvbSBGp3FS7wnmwpMsJo7vJCU3M5P2zxgsrLNC2JIclZtAzNPhLD4X4cuqRBuRMqNzjzQecdXqHMc1KehCrgWicMNs1y2poyek3AaM8PMFUxWMC%2Bg4OOwquY3qU3yh9ewAiEPr7hAIVvwSiUIANKhHr6lc0vlSEcbB9fRlmc3gK1uzQ4tf4gSaOUyTZaFkP%2FmCmngBb%2BKOiDr4Z5NbmDVF1T99%2FIwvpY1jRP0AOIXw15aXL4fA1WYBGevwbeZQzyzT2VQVWxyV%2BLyd%2BE3rnaPZ8HA5n9ZB81cSpwOirscYvR1xfCdRnM8SOgJG3EbqChZ5wTIW9M34VEXn2cwmIE0hIMNsTHc6uYag1LnaAhfDUdNpDSf%2BV7d4SVGRbqevW5BsyCraNS9wb8ChOVbCEVWvYZNNKELIrJ%2FfUu0qae70LitfMNw5%2BlMGcnUomplCKf3CDlnitKKgyaXBxxBquTZA3ipTGfdytx97aKthLJqRNd8T9dVsEdOe7uJbfZWziA7fOVq7jtmykHGHQUuXjLhSr%2B9dhb%2BkvzDswNCNxx7XMuTj9%2FbfImMrPrc1ix5m7TmUVlYT9MKmfi8oGOqUB2dXbHbYIsj5YS89Szc%2FbBZ2DjTHi%2FAV71FhPMmI1B8%2BtCJnopiD9TrHvkeZXWdE8lqQbVp5IUCSxfUyzBut7NcLu2mWE%2Brlnh9Xl4wMq4PIbWT%2Bx9Uh43usE%2BTYQtP9RW3RRfhmTTgvwJF034kPuIvwq9uHHvqqeQcBMUDzKhAuc%2BkgKlrFYlOeQ6DJDcZWZKi3%2F0CsEKvrKM4etuLIZ3scS%2ByP6&X-Amz-Signature=8277b8da62eceb9d5e8f479bd37db822d058f9e617ebc55bac8a8acc3a17f233&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF7CHHLL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo2MbnRilKkvCs8SC9KshBJGWij1AHSsk0fnD5WPVyZwIgCGMk8L8HApu%2BZ0xW6zH7T5v04fhN1DnZtReq0CKf7mkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMV8A9WYdTO36Ep4hCrcAx2DmlHRksiDT56B%2FGaO37Xjy7kwBBE7cxqbOKg8uDRa5whXi%2FPF%2BxvbSBGp3FS7wnmwpMsJo7vJCU3M5P2zxgsrLNC2JIclZtAzNPhLD4X4cuqRBuRMqNzjzQecdXqHMc1KehCrgWicMNs1y2poyek3AaM8PMFUxWMC%2Bg4OOwquY3qU3yh9ewAiEPr7hAIVvwSiUIANKhHr6lc0vlSEcbB9fRlmc3gK1uzQ4tf4gSaOUyTZaFkP%2FmCmngBb%2BKOiDr4Z5NbmDVF1T99%2FIwvpY1jRP0AOIXw15aXL4fA1WYBGevwbeZQzyzT2VQVWxyV%2BLyd%2BE3rnaPZ8HA5n9ZB81cSpwOirscYvR1xfCdRnM8SOgJG3EbqChZ5wTIW9M34VEXn2cwmIE0hIMNsTHc6uYag1LnaAhfDUdNpDSf%2BV7d4SVGRbqevW5BsyCraNS9wb8ChOVbCEVWvYZNNKELIrJ%2FfUu0qae70LitfMNw5%2BlMGcnUomplCKf3CDlnitKKgyaXBxxBquTZA3ipTGfdytx97aKthLJqRNd8T9dVsEdOe7uJbfZWziA7fOVq7jtmykHGHQUuXjLhSr%2B9dhb%2BkvzDswNCNxx7XMuTj9%2FbfImMrPrc1ix5m7TmUVlYT9MKmfi8oGOqUB2dXbHbYIsj5YS89Szc%2FbBZ2DjTHi%2FAV71FhPMmI1B8%2BtCJnopiD9TrHvkeZXWdE8lqQbVp5IUCSxfUyzBut7NcLu2mWE%2Brlnh9Xl4wMq4PIbWT%2Bx9Uh43usE%2BTYQtP9RW3RRfhmTTgvwJF034kPuIvwq9uHHvqqeQcBMUDzKhAuc%2BkgKlrFYlOeQ6DJDcZWZKi3%2F0CsEKvrKM4etuLIZ3scS%2ByP6&X-Amz-Signature=a3c520d78d44845364efd914eefadc112a42117ae5cf68a5243e8ebf1f7cd5e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
