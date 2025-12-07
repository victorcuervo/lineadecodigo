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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647DR5JMC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T000620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7bsci5FOXy9tNFfejuW62fKgiOR4q%2BYG1W7Ic2i7qvAiA6qcUO9cqJ5PbUJwfYb14KE9ptPwVbKIE%2FtzUfhUm0%2BSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWNXcHLAKsBVkbzo5KtwDS1d5OcrMnq6g5RtOoED91aJHEdA3Z7vXfnQaV90eAroLsgtlnOqwLLwiMcGBHBWuvBsv%2FJVKZvffCPPQMaf0SzZtTUAoNYJ5Qtmmg%2FxDAKHGQiGta0fDr84gDj8e6B9XUsg444TnnlAEiY%2BYk0avP2URca1C9k5FktrhFkjszBO7f8q0kEzYCdDupqWIqxs%2F%2F5raF6%2F77qsgXdSKkTYn2TAl%2FGH%2F2iOYWmdYTr1L7b4pAPE9JtzbS%2BoidLkwBGExURpPjELrW0HB9RZ9MpY25yfqcr%2FnBv%2Fy6HRCkpN9%2FnlWwdx8KeJi1HUHCmHjVIcxQ%2FwTKqu%2B3eKQLdgdIkx5e1TjKlstl9U9xrvG1Tk9QVSoUcg4qehP%2B%2FRINY3T0mtxk3QJtFRzalDn3wgwpeMHiWM9x0SxWIOE3AGg5YFhXLFxvwQZD5qFoAMeqYONATYJ8SRy2ikGxgv7UvTv8Y3kYyuwID90R0tr2AqEBTqanYwbwliq%2Bhvq3DcO6sHdWbSIwa5nAVIhNKAtk4kGkDCAsuQKGOsuq2mRgjJTPyiklVZNU2r0L%2FHSeujAKiyq1KewoIc%2BIM2pjttPqsENrwLeHaqXX2JZB2CO5H82xsFjizsDZl2mKQ0FlLuFn%2Fsw6f3SyQY6pgHJSKYGmlouxzkF4LO1DolA52JCodIa5S%2BVszZ45KgOeAg6TbjDYrxnu29W414UTc1QFO4fI65JqDoVakxKvi90yqiRc8QevCOnyMlzqNnM6Mh2X5IF%2Fklezyy%2Bbcqjw3JFOytkwkK5kd70TngbliOZ5xFCfh%2FsMvSST3v1svSAkyICU%2FZ9zgrUNeiRYmc9szBJhOfNP5j6aadWTrkVCNeTcWmX8am9&X-Amz-Signature=38f67c1303429e87aae9ea3b6b49b1ed80a8ecd3fe58e57590dafd2474c47e34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647DR5JMC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T000620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7bsci5FOXy9tNFfejuW62fKgiOR4q%2BYG1W7Ic2i7qvAiA6qcUO9cqJ5PbUJwfYb14KE9ptPwVbKIE%2FtzUfhUm0%2BSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWNXcHLAKsBVkbzo5KtwDS1d5OcrMnq6g5RtOoED91aJHEdA3Z7vXfnQaV90eAroLsgtlnOqwLLwiMcGBHBWuvBsv%2FJVKZvffCPPQMaf0SzZtTUAoNYJ5Qtmmg%2FxDAKHGQiGta0fDr84gDj8e6B9XUsg444TnnlAEiY%2BYk0avP2URca1C9k5FktrhFkjszBO7f8q0kEzYCdDupqWIqxs%2F%2F5raF6%2F77qsgXdSKkTYn2TAl%2FGH%2F2iOYWmdYTr1L7b4pAPE9JtzbS%2BoidLkwBGExURpPjELrW0HB9RZ9MpY25yfqcr%2FnBv%2Fy6HRCkpN9%2FnlWwdx8KeJi1HUHCmHjVIcxQ%2FwTKqu%2B3eKQLdgdIkx5e1TjKlstl9U9xrvG1Tk9QVSoUcg4qehP%2B%2FRINY3T0mtxk3QJtFRzalDn3wgwpeMHiWM9x0SxWIOE3AGg5YFhXLFxvwQZD5qFoAMeqYONATYJ8SRy2ikGxgv7UvTv8Y3kYyuwID90R0tr2AqEBTqanYwbwliq%2Bhvq3DcO6sHdWbSIwa5nAVIhNKAtk4kGkDCAsuQKGOsuq2mRgjJTPyiklVZNU2r0L%2FHSeujAKiyq1KewoIc%2BIM2pjttPqsENrwLeHaqXX2JZB2CO5H82xsFjizsDZl2mKQ0FlLuFn%2Fsw6f3SyQY6pgHJSKYGmlouxzkF4LO1DolA52JCodIa5S%2BVszZ45KgOeAg6TbjDYrxnu29W414UTc1QFO4fI65JqDoVakxKvi90yqiRc8QevCOnyMlzqNnM6Mh2X5IF%2Fklezyy%2Bbcqjw3JFOytkwkK5kd70TngbliOZ5xFCfh%2FsMvSST3v1svSAkyICU%2FZ9zgrUNeiRYmc9szBJhOfNP5j6aadWTrkVCNeTcWmX8am9&X-Amz-Signature=5dabe01ea24579ecf6afba5971edaae0e60b24dd7bae03e31da8d9afa16a02e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
