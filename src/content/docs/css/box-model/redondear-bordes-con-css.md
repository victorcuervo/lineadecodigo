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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U775QUSM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCuyt7M9x86SeQPuSGsxIURmxIaaT%2FKs6gigt3f1KwDwIhAIoqjP2a3iuoXEX8iWLBhJJaedVgY8GF5a9xdfcPSLwVKv8DCHEQABoMNjM3NDIzMTgzODA1IgyOaSiJ32BkugOEvsMq3AOmBauyXcGqAtF40sCIo7zdvnVkJ0Ss3VFiAlwlMOpB1Iac2j86LtrqLOp27bdeql8mpWnWMgGNnz61XHckQBmfbdFrGga1t8ZNLj95GTuWqUfNKrnWwAe9TZ7MRx3dkilPoP6OiFmG3rT0G4LjAHdQF9L74ZVTES81WoBDPyNuCfuoPa%2F%2FzXuQyFHWiIZa6diAFtKUFUtogOfo7k6iLYpUL0qmcTO9lseFJaZ%2F%2FXjwiuBZJkKX6%2FhR1jacLrMAljmt0ePxLV7%2FZzZ2vX1HVzFZ%2FdzhFJctgw77daQ1cfvX2tajveGUQoBumQmjOOSQkm40aNq03VxGWNckkZFhzudPJXroUm6WTCxFbeqm%2BSvfIjqr%2BlznQ8zS0yHii%2BKh1pHD9ZiVN9L%2BZiL2P8SXne9IVwEsTj%2B0QWeGbgoo6V542CRQpTNs2GUWMATgFVHQSwdkjEYMP8IJprPoribsbmGRM5lA2CPZz%2BpBBMCCOw7gPqqyjnoEUT%2B%2FlQN3RF9vjAJv%2FRVBFEV1N1FUx32%2FYISd269cF39RzAiJu7NgVC6LbpdXxiIp%2BaNMNgnd3ffteLJOndDmbPZAJl1lh5vSGOmBqreZEpczWrL%2FJQRsOQnUKSdaXsjD05TUD7fdcjCw34fKBjqkASb4sBJZXg3qH7FwiM0kpPE6WGCfR2sJuf0dwecegskOY2hdT2BYtEE4wdPzHbq1opfNCXBAw2CFx1SkJRdq1CkM9Q2zMOAlmcJa8UY9T%2Fi9BpX2O%2F3JTifD1J%2Bwv3599qAKMZ2luawc%2FGi50zyJ3zSkkryIgY2Fr7WZYgjqtyWj7PODVOl9rx03Q%2BQD1hWDt%2F%2BC0dxuynZVJbM0NbLhiWpzadT%2B&X-Amz-Signature=6eb45c383013b75367a97f2a588484cd9c42b335e26fe8065c1ecb5f878a880f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U775QUSM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCuyt7M9x86SeQPuSGsxIURmxIaaT%2FKs6gigt3f1KwDwIhAIoqjP2a3iuoXEX8iWLBhJJaedVgY8GF5a9xdfcPSLwVKv8DCHEQABoMNjM3NDIzMTgzODA1IgyOaSiJ32BkugOEvsMq3AOmBauyXcGqAtF40sCIo7zdvnVkJ0Ss3VFiAlwlMOpB1Iac2j86LtrqLOp27bdeql8mpWnWMgGNnz61XHckQBmfbdFrGga1t8ZNLj95GTuWqUfNKrnWwAe9TZ7MRx3dkilPoP6OiFmG3rT0G4LjAHdQF9L74ZVTES81WoBDPyNuCfuoPa%2F%2FzXuQyFHWiIZa6diAFtKUFUtogOfo7k6iLYpUL0qmcTO9lseFJaZ%2F%2FXjwiuBZJkKX6%2FhR1jacLrMAljmt0ePxLV7%2FZzZ2vX1HVzFZ%2FdzhFJctgw77daQ1cfvX2tajveGUQoBumQmjOOSQkm40aNq03VxGWNckkZFhzudPJXroUm6WTCxFbeqm%2BSvfIjqr%2BlznQ8zS0yHii%2BKh1pHD9ZiVN9L%2BZiL2P8SXne9IVwEsTj%2B0QWeGbgoo6V542CRQpTNs2GUWMATgFVHQSwdkjEYMP8IJprPoribsbmGRM5lA2CPZz%2BpBBMCCOw7gPqqyjnoEUT%2B%2FlQN3RF9vjAJv%2FRVBFEV1N1FUx32%2FYISd269cF39RzAiJu7NgVC6LbpdXxiIp%2BaNMNgnd3ffteLJOndDmbPZAJl1lh5vSGOmBqreZEpczWrL%2FJQRsOQnUKSdaXsjD05TUD7fdcjCw34fKBjqkASb4sBJZXg3qH7FwiM0kpPE6WGCfR2sJuf0dwecegskOY2hdT2BYtEE4wdPzHbq1opfNCXBAw2CFx1SkJRdq1CkM9Q2zMOAlmcJa8UY9T%2Fi9BpX2O%2F3JTifD1J%2Bwv3599qAKMZ2luawc%2FGi50zyJ3zSkkryIgY2Fr7WZYgjqtyWj7PODVOl9rx03Q%2BQD1hWDt%2F%2BC0dxuynZVJbM0NbLhiWpzadT%2B&X-Amz-Signature=4d332f3d7f6876b9ebcca1af39c7d126b282c8f5775747102f24d3cc023aa792&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
