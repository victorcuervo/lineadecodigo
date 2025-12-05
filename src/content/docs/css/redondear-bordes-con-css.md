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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAIGM55X%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T175844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5d1bdiLTFeb1NkTtzEW1K8%2B%2FWTHaDfVnGvboxFAd4kAIgC7RHDh0VSIXJJBFpwZf83CX1%2FIIdRnkPIJxHt1kccQgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDBoF1SSE6ZM%2BHwiNKSrcA6nwBrf2Luy8wE8XdkAehioOIHt7JJRU5%2FtfE8caa71AxQ1cr7INhAl2XirKyDDWQfgSXQd8I%2BTe6LxqRbuKTziz2VpYHTUqfPEURJbTPtf0BvxMoPlcjWbbgdqvdlBxEew7vDm7l3jzzJUzL%2BqQAEcec7qLj2XccTbUQf%2FQP1YTDLlJUl7jpwOiOA2wlj5MGZEQci0rShBbE%2BZDQuPa3Db8KbBfw%2FS8rghMKyCTkaY3Q7xVnBX%2BQByYuK42eHCKwJIWQ%2F5agKXA1KcWlBph5jkAKavfjtV4b0M9eRpOMrfv%2BIPRaGs2w%2FiTcAO4OgbZELrrVxiqu%2F9rfEDrOk6cr2SjR4PX16K6kM9BYLP2%2BlGbozVBwxrEpxrFVJSabkBxjfTolPaLSJKXyPDj4vkqmjwBKlo938N7AgYo2DJZ9V9KWqIEWpmBMtC0yUFyzirqqqUPHXgl5DYIRw7h%2F1TIkD1XGMn09Wr0h%2FScAv1499S4lahNt9D6tjLtSrBf5mgZb8fC76HWVRNLoZrh1qePoHGANMIIxLa2lCDGRzRm7F5xtrKXdqkbxvK5RM6KIj5MZMUXhu1rG7Efy%2BLSiP1cMvvcI91Z8JmLHcvu8amzjZ5TgnH%2BX4OJ3boFgx1oMLvty8kGOqUBn%2BKF3F8jiWjaDiM3Tl3uB4AMkARbveFNm9cwR%2FpLMkTSqhn14GG9NjIZxgq7tAgk664ISNKn%2FwDY0PBK33WHeR%2FI%2FQJQTS3YQD6prHHcAnFlMxmFeu6ymE9YXf7VzByGsfTWcdwnqmdyKV%2FxQFhzaOFYJp8TAtbyv465F0mc8cL0nXFMcSUFmA3fvDO8QNOneKt%2BCIGAKbryjZnFRUrAVMSUksbQ&X-Amz-Signature=45b56f399b9a1b6e1d0ca58cfbb99a75d9248050ae5da78af391c64d4162f8af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAIGM55X%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T175844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5d1bdiLTFeb1NkTtzEW1K8%2B%2FWTHaDfVnGvboxFAd4kAIgC7RHDh0VSIXJJBFpwZf83CX1%2FIIdRnkPIJxHt1kccQgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDBoF1SSE6ZM%2BHwiNKSrcA6nwBrf2Luy8wE8XdkAehioOIHt7JJRU5%2FtfE8caa71AxQ1cr7INhAl2XirKyDDWQfgSXQd8I%2BTe6LxqRbuKTziz2VpYHTUqfPEURJbTPtf0BvxMoPlcjWbbgdqvdlBxEew7vDm7l3jzzJUzL%2BqQAEcec7qLj2XccTbUQf%2FQP1YTDLlJUl7jpwOiOA2wlj5MGZEQci0rShBbE%2BZDQuPa3Db8KbBfw%2FS8rghMKyCTkaY3Q7xVnBX%2BQByYuK42eHCKwJIWQ%2F5agKXA1KcWlBph5jkAKavfjtV4b0M9eRpOMrfv%2BIPRaGs2w%2FiTcAO4OgbZELrrVxiqu%2F9rfEDrOk6cr2SjR4PX16K6kM9BYLP2%2BlGbozVBwxrEpxrFVJSabkBxjfTolPaLSJKXyPDj4vkqmjwBKlo938N7AgYo2DJZ9V9KWqIEWpmBMtC0yUFyzirqqqUPHXgl5DYIRw7h%2F1TIkD1XGMn09Wr0h%2FScAv1499S4lahNt9D6tjLtSrBf5mgZb8fC76HWVRNLoZrh1qePoHGANMIIxLa2lCDGRzRm7F5xtrKXdqkbxvK5RM6KIj5MZMUXhu1rG7Efy%2BLSiP1cMvvcI91Z8JmLHcvu8amzjZ5TgnH%2BX4OJ3boFgx1oMLvty8kGOqUBn%2BKF3F8jiWjaDiM3Tl3uB4AMkARbveFNm9cwR%2FpLMkTSqhn14GG9NjIZxgq7tAgk664ISNKn%2FwDY0PBK33WHeR%2FI%2FQJQTS3YQD6prHHcAnFlMxmFeu6ymE9YXf7VzByGsfTWcdwnqmdyKV%2FxQFhzaOFYJp8TAtbyv465F0mc8cL0nXFMcSUFmA3fvDO8QNOneKt%2BCIGAKbryjZnFRUrAVMSUksbQ&X-Amz-Signature=989cb96542a67f984aca8b87ffc20cb02bfd9aa47be33dbf357d78401e8035e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
