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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCQZGBQF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F936N5rUUSa3QtAYasOARUYA%2FiTeJd3cXLxCHU%2BIMDgIhALE4B%2BFCQX2nr5D8vIYPHr6sjqfaDxhCLaJfzJcMZGASKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgoNL1HbuNaa4SJW0q3ANzg9FtdsusUEistO6E17qn9Mw3o7ikYZsYdpqRw0pxOJqN6ZH9a0R8JZedQ1S2gr7plH2SUb332uree%2FqCiTB5ZrzMST5V15osxz3S2l0a34znUiQBQ739YWM44kxH1v58RJ%2BUtKeDNzkmQDZ7At5dTkpxD0a247vplUQaLFCzzIqsT%2FvFsZshWpEP7HpfaDHEKdA81tUZYyaAnPknAoGU3MAxdI5cDizoVo2XuRH387D05tWwoKnQqXCHhUsvFv9oNh7KsoyMGnn1eW%2BF6AaVQPMHjWTNCDoc%2FIdPXNBhPFsch66wFxIdW%2BKXrgxALgZjz8FCpjtWntAestyXA5zhgtDhvwHMw5CwY0SxvLbIeBF6Zyg7dC7MWzjBLpPIRSsj%2FE283E242cr4KWaCvg9lHKgUtamqQFFrOPOOuP00rgXeZVsMkEp1vGUOTmTVfqoY3xsrS90siFWid%2FTqany80Y2v4Wmi3qcVluVydHBeB2xSLfwj7dCWfslnPd3Fgq7M3lbYFn2nfb1oF4qCwEHERDAqtCPR55zLpWqqawQ1w2uOwxZIGHUsOzzDai4%2FyUgfvXaJjG6LUJquaqyoG7%2FWHuD2AtXGkr18iBOkmgn7MUtLemrqjRhO82FyQzCdgYvKBjqkAbYt2oItFYBogybvRyppS6eROrYhfOFHvELiAG0SaS1wr5ggeCOHoNR1oa0Evq8uhOrGg24PkPr3YA4PQWmdMqk0DlEfjWxIu8NLSnLxD78y6yeDmoo1e51xz1117SQBKIAQs0OkDRnVZlN4uK9JBoMk8Qr%2BWDiFGfNsREstabijO81YcwLrkxLEw1FCGbIgT2ILfibmI9k%2BFgUUgqEsbfMVQ9eU&X-Amz-Signature=9ef2b20fc20b84588b4aa05968ccf57e75bf8407d48b63286a1fe067ff96399a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCQZGBQF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F936N5rUUSa3QtAYasOARUYA%2FiTeJd3cXLxCHU%2BIMDgIhALE4B%2BFCQX2nr5D8vIYPHr6sjqfaDxhCLaJfzJcMZGASKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgoNL1HbuNaa4SJW0q3ANzg9FtdsusUEistO6E17qn9Mw3o7ikYZsYdpqRw0pxOJqN6ZH9a0R8JZedQ1S2gr7plH2SUb332uree%2FqCiTB5ZrzMST5V15osxz3S2l0a34znUiQBQ739YWM44kxH1v58RJ%2BUtKeDNzkmQDZ7At5dTkpxD0a247vplUQaLFCzzIqsT%2FvFsZshWpEP7HpfaDHEKdA81tUZYyaAnPknAoGU3MAxdI5cDizoVo2XuRH387D05tWwoKnQqXCHhUsvFv9oNh7KsoyMGnn1eW%2BF6AaVQPMHjWTNCDoc%2FIdPXNBhPFsch66wFxIdW%2BKXrgxALgZjz8FCpjtWntAestyXA5zhgtDhvwHMw5CwY0SxvLbIeBF6Zyg7dC7MWzjBLpPIRSsj%2FE283E242cr4KWaCvg9lHKgUtamqQFFrOPOOuP00rgXeZVsMkEp1vGUOTmTVfqoY3xsrS90siFWid%2FTqany80Y2v4Wmi3qcVluVydHBeB2xSLfwj7dCWfslnPd3Fgq7M3lbYFn2nfb1oF4qCwEHERDAqtCPR55zLpWqqawQ1w2uOwxZIGHUsOzzDai4%2FyUgfvXaJjG6LUJquaqyoG7%2FWHuD2AtXGkr18iBOkmgn7MUtLemrqjRhO82FyQzCdgYvKBjqkAbYt2oItFYBogybvRyppS6eROrYhfOFHvELiAG0SaS1wr5ggeCOHoNR1oa0Evq8uhOrGg24PkPr3YA4PQWmdMqk0DlEfjWxIu8NLSnLxD78y6yeDmoo1e51xz1117SQBKIAQs0OkDRnVZlN4uK9JBoMk8Qr%2BWDiFGfNsREstabijO81YcwLrkxLEw1FCGbIgT2ILfibmI9k%2BFgUUgqEsbfMVQ9eU&X-Amz-Signature=392bb7863e5a760d1bc319d65523a4ae295eec3009416d1632f70c88fd019265&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
