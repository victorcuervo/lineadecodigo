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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626F75CMB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T022754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZAZks%2BRtD3Uvrq0K0NBPEff6ILH3CNW%2BoaPMJPSLL1AiEAjKOQeVhPQxK%2BX%2Fba%2B0wYpfMI0bLisGZXwKMJgdQOJIYqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9KWj1L79leYfrvjCrcAzxo8%2B6w7VpVkVGdQRNIYjbftpZDRO%2FPNTq6e9srpUtW8H3YBxuUAb4xrrixjVFx9IjaAe3BjGPAkT%2B9s017Djf0Se0qDLYlEsHMisnp2rcP%2FilUIBtDzILpkh86LIvaEfuhdA8XC3AB%2FHeAi1AsG5bsIlRmPYKeQabYvve3kYOLCcbJURjnqeE9mLvGrhxY1QnHmsWOal4ykJ3MlWITr%2BKtfYbUvOUuNxi1MCllRYbkKxvfKn8tUeTnUclphDDkQuvMrpvm%2B8sZzrue8eRPvcpzjmv44AjDwnsThVUhxqvx0Ijs52p5LLzm9nEP71LmO6cqpUuJIVRc7rWgXut1f1wK4V03ieDPt1FI6NQ2FIyj6IZB%2FsjR8qw0yLHT0rEv1ErhAcf0XaCTcP9Tsjg5QEsFediJo%2FGyZl3t75%2FJg9xIlN5i9CyQk5Ef4xuzwUA5BhBopA9761Q3x921N1erW2CiWQebd8738L3nl4MZIeA9FSQ5K1KBF8Gled4hGLexgO1R4UsFj47YDRdx82eEaHXplJqGeIOQrHKOyulc4yj9iAEzRwUaYOhvdNZi8LI%2BPWCsl14w0YryCS%2FvPVurebP68XWzLbzOYM8OuSP7hq6FaizFgH0au0IBr8pNMMGQ3skGOqUBl%2FG31YBcoLo6Sy%2BUHSCDfiJIk%2BUhVJYjsRrekChafl764ie4H9Ht2Ylk6s%2FZv9RaFUA6TdYuTrt3u6kakUdYN849%2F0%2FFgEuYJ%2BUV2YMnB165JywC7WDkxgKh1lojKqCrlhq12d1uUwm0HDWL%2BUMftLfkmhIGJioBkKcSYURw9g1lxMqqrUFqgpvsYhtbvvN2sTMoQ6vfBQe1ZOv7Bae237OMDM%2Bo&X-Amz-Signature=2523508eb139825a7fa5ac71a1a2d4223c2db2ed7b2773854c801db17d696722&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626F75CMB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T022754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZAZks%2BRtD3Uvrq0K0NBPEff6ILH3CNW%2BoaPMJPSLL1AiEAjKOQeVhPQxK%2BX%2Fba%2B0wYpfMI0bLisGZXwKMJgdQOJIYqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9KWj1L79leYfrvjCrcAzxo8%2B6w7VpVkVGdQRNIYjbftpZDRO%2FPNTq6e9srpUtW8H3YBxuUAb4xrrixjVFx9IjaAe3BjGPAkT%2B9s017Djf0Se0qDLYlEsHMisnp2rcP%2FilUIBtDzILpkh86LIvaEfuhdA8XC3AB%2FHeAi1AsG5bsIlRmPYKeQabYvve3kYOLCcbJURjnqeE9mLvGrhxY1QnHmsWOal4ykJ3MlWITr%2BKtfYbUvOUuNxi1MCllRYbkKxvfKn8tUeTnUclphDDkQuvMrpvm%2B8sZzrue8eRPvcpzjmv44AjDwnsThVUhxqvx0Ijs52p5LLzm9nEP71LmO6cqpUuJIVRc7rWgXut1f1wK4V03ieDPt1FI6NQ2FIyj6IZB%2FsjR8qw0yLHT0rEv1ErhAcf0XaCTcP9Tsjg5QEsFediJo%2FGyZl3t75%2FJg9xIlN5i9CyQk5Ef4xuzwUA5BhBopA9761Q3x921N1erW2CiWQebd8738L3nl4MZIeA9FSQ5K1KBF8Gled4hGLexgO1R4UsFj47YDRdx82eEaHXplJqGeIOQrHKOyulc4yj9iAEzRwUaYOhvdNZi8LI%2BPWCsl14w0YryCS%2FvPVurebP68XWzLbzOYM8OuSP7hq6FaizFgH0au0IBr8pNMMGQ3skGOqUBl%2FG31YBcoLo6Sy%2BUHSCDfiJIk%2BUhVJYjsRrekChafl764ie4H9Ht2Ylk6s%2FZv9RaFUA6TdYuTrt3u6kakUdYN849%2F0%2FFgEuYJ%2BUV2YMnB165JywC7WDkxgKh1lojKqCrlhq12d1uUwm0HDWL%2BUMftLfkmhIGJioBkKcSYURw9g1lxMqqrUFqgpvsYhtbvvN2sTMoQ6vfBQe1ZOv7Bae237OMDM%2Bo&X-Amz-Signature=7c3c0a4102fc9ab179c6adc8c63fb5e731844decb2e4f6f04ccc30f476a6ce90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
