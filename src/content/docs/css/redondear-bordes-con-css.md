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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN7QYONJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIAWAw%2BWL3ZSEpJEjDnSCPlDbmR8VItfvQ%2BWyjjpEM24yAiEA11osHrue4gPe%2BSB4a1LDaL89m2ZXhUVTWhYYRibQv2Uq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDDaH9t0zVPZ1iw0bzircA%2FgWLjPTIO543nbHX1Mre4Mkf9A1i70WrcnQ%2FMkA9tbTrOsx8uPcNj4LVggvHmqfEMct7m%2F4mouzjZ%2Bn08L2iaWnOjpCtdR4Yr5vOZz17fc0MU7xUEhTcZ9rIuJanWAfxFl0LLmK5Y%2FfDKClQV3fMY81cDxXvUW4zBuLugVKAKDi1y%2BxDk73KTkMvUXu%2Fsl%2Fze%2B2%2FiyJQoxw66hT3QseNnY921Pxsj3XCAyuqY%2FlpWohefRNcvzn%2BjiVjoL%2BoWjK8thBEfNaJKe2%2BR2IUHjFRMkxXIL2wSGSZQpM8hvkk5nUn4V%2BHaPClminslDShdPiaWMMr%2FJuIuTUen4d1KxICgAETF9nzlNSS1X9nzsiYosEAlAAi5RxunebrVXDP%2Bf8og%2Fq8iSWTq%2BsACVqT4XHnZmvje6G5GwHqaJsbE3X2VnXu%2Fo%2B0IDhtAgL4JFEgOXtX6TU7wp3ZNKh8Kjq9L%2BtXM54cXN0VdLR7jqD8YLbmoykNBhFNASbGTp1hU6TtGojvHuYvXJ7BIFnBeZnb%2FLGnsiq2tgqhJ5NEBEtdpsQdcZk3ANDlyNozN30GbdjP5W2HoWawuL0OGJqjlNPLb1PPNfw%2FjoZvRWAXP3rCOj5%2Fabq6ajAtQ7b%2BdGT7vp3MLPKxckGOqUBTSdlFebXKr0VEEB6p5%2Bo8DK2EtKPCAZSpOaa3mB%2FCCEE5NxiXVfjCPA3oPwsbhn8y1OstVBIKpSg3u3F29bK9hDQO3Gu7x%2F5SKMPuxOe7KhsoIZXG8PWkyPi2YRvtx0WJ9ghnFZH0AoMVsM1jjjAKAqAvyvdIU0B1sw%2FkHfskubzvdhnOJotdmcXHLOif43%2FLN%2BskdN6%2Ba2Os4U4xhoH%2B53XfqOM&X-Amz-Signature=f29487a32818a4e874baf37f88317f55cf1748098d131fa07915a0cbfa8c3465&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN7QYONJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIAWAw%2BWL3ZSEpJEjDnSCPlDbmR8VItfvQ%2BWyjjpEM24yAiEA11osHrue4gPe%2BSB4a1LDaL89m2ZXhUVTWhYYRibQv2Uq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDDaH9t0zVPZ1iw0bzircA%2FgWLjPTIO543nbHX1Mre4Mkf9A1i70WrcnQ%2FMkA9tbTrOsx8uPcNj4LVggvHmqfEMct7m%2F4mouzjZ%2Bn08L2iaWnOjpCtdR4Yr5vOZz17fc0MU7xUEhTcZ9rIuJanWAfxFl0LLmK5Y%2FfDKClQV3fMY81cDxXvUW4zBuLugVKAKDi1y%2BxDk73KTkMvUXu%2Fsl%2Fze%2B2%2FiyJQoxw66hT3QseNnY921Pxsj3XCAyuqY%2FlpWohefRNcvzn%2BjiVjoL%2BoWjK8thBEfNaJKe2%2BR2IUHjFRMkxXIL2wSGSZQpM8hvkk5nUn4V%2BHaPClminslDShdPiaWMMr%2FJuIuTUen4d1KxICgAETF9nzlNSS1X9nzsiYosEAlAAi5RxunebrVXDP%2Bf8og%2Fq8iSWTq%2BsACVqT4XHnZmvje6G5GwHqaJsbE3X2VnXu%2Fo%2B0IDhtAgL4JFEgOXtX6TU7wp3ZNKh8Kjq9L%2BtXM54cXN0VdLR7jqD8YLbmoykNBhFNASbGTp1hU6TtGojvHuYvXJ7BIFnBeZnb%2FLGnsiq2tgqhJ5NEBEtdpsQdcZk3ANDlyNozN30GbdjP5W2HoWawuL0OGJqjlNPLb1PPNfw%2FjoZvRWAXP3rCOj5%2Fabq6ajAtQ7b%2BdGT7vp3MLPKxckGOqUBTSdlFebXKr0VEEB6p5%2Bo8DK2EtKPCAZSpOaa3mB%2FCCEE5NxiXVfjCPA3oPwsbhn8y1OstVBIKpSg3u3F29bK9hDQO3Gu7x%2F5SKMPuxOe7KhsoIZXG8PWkyPi2YRvtx0WJ9ghnFZH0AoMVsM1jjjAKAqAvyvdIU0B1sw%2FkHfskubzvdhnOJotdmcXHLOif43%2FLN%2BskdN6%2Ba2Os4U4xhoH%2B53XfqOM&X-Amz-Signature=76543563be1e021c9e427b390d0738835f2b5fb3c731e144069509421641a76b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
