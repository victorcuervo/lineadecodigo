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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B4LUD57%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjRtkfPIf2GoNofp%2BhEvMU0cND4RgZWUuP3X%2BmtkMPKAIhAIkLAkD4Qfdj71LHYG3Ai5Ndipq%2FIGb5kN9%2BkFCQwk3GKv8DCH4QABoMNjM3NDIzMTgzODA1IgyIDXCZaWRdl0Reaf4q3APNvcJUxQWNrL8bN9sYOd2VyQhC4TWuGz8unpfqA7j09e9nn%2Fi7QdwvY6A2JsfdD7c5ZIgq6JUPbGN08a%2Fz86BRSBLT1wglXpbrge%2Fv8%2BKsuHgZoeOiGwXKTxX39lKs7DUbiqgWJOlzAW5Tbc89Y27gtmJEsL9hrxq5bltMzwW%2F571rp%2FNiFA%2FuL9KFKMPraxfYW1yOWpBcEi5WMzOmAmSNcdPeyCLaQ%2BAMzlWpRD5QmlwtRYhxyBNr0mfcTfNGRNBuysFeKpoJl%2FZaYCmEZ9S9OniSCTlwi0GkYQQLi8zfJgFBY9TIiSkZca5a%2Fni2HkKW1o155R5dbxlZiTWb5xL1QtlVPFKmBhehXmmpNb8RZhv6G7Zh%2BY2Ul7SKtuMjaxCdoBOncN8xu3Sk2MZEoF4d0BXhRSPP6ZY4stFOsX8fiegYbQGBdq5%2F546y4u6RYnZnswGA9icEf33e6URK47t4nL%2B6TWeuMEmKl7j1WaYF7stqn5QOWPR1niihiweHWt%2B8Q61y7l4Y%2BMuieF6FeHO8q8rrSosjqa%2BPEU%2FN%2FssufaxUXhZL1a2eNHahSuLGsHWNa9BvztRJLYxUoBK0Pp8Ws7ptqldx7V2JUa4cDYgwYq5egCm%2BaChbUbgEDDDWxYrKBjqkAXjQxhr%2B6uCorU%2BR5y9Hw8oy6R8frbob%2BxW4WiC%2BbHoRXGv1PGe7T44%2Fw2C7l45hVUmVn6sbzCkcZlsy7QO%2FEEWhjgMzATHrl7K2VbJGZTIem2uivrl45ikdr20Aa3rJKcokXvZuw6LophjGvvHx1VPvFIgFZ1hxxOnd722wdGYuF9jlHXG7DEWzK0Ts7RmrwTimEV0cZg64wKLBSCdKjxwmjB9T&X-Amz-Signature=b283ce2fd92cb284472293ddd7f42fb531dcc0bc2e2e1807449315eebe7cd06d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B4LUD57%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjRtkfPIf2GoNofp%2BhEvMU0cND4RgZWUuP3X%2BmtkMPKAIhAIkLAkD4Qfdj71LHYG3Ai5Ndipq%2FIGb5kN9%2BkFCQwk3GKv8DCH4QABoMNjM3NDIzMTgzODA1IgyIDXCZaWRdl0Reaf4q3APNvcJUxQWNrL8bN9sYOd2VyQhC4TWuGz8unpfqA7j09e9nn%2Fi7QdwvY6A2JsfdD7c5ZIgq6JUPbGN08a%2Fz86BRSBLT1wglXpbrge%2Fv8%2BKsuHgZoeOiGwXKTxX39lKs7DUbiqgWJOlzAW5Tbc89Y27gtmJEsL9hrxq5bltMzwW%2F571rp%2FNiFA%2FuL9KFKMPraxfYW1yOWpBcEi5WMzOmAmSNcdPeyCLaQ%2BAMzlWpRD5QmlwtRYhxyBNr0mfcTfNGRNBuysFeKpoJl%2FZaYCmEZ9S9OniSCTlwi0GkYQQLi8zfJgFBY9TIiSkZca5a%2Fni2HkKW1o155R5dbxlZiTWb5xL1QtlVPFKmBhehXmmpNb8RZhv6G7Zh%2BY2Ul7SKtuMjaxCdoBOncN8xu3Sk2MZEoF4d0BXhRSPP6ZY4stFOsX8fiegYbQGBdq5%2F546y4u6RYnZnswGA9icEf33e6URK47t4nL%2B6TWeuMEmKl7j1WaYF7stqn5QOWPR1niihiweHWt%2B8Q61y7l4Y%2BMuieF6FeHO8q8rrSosjqa%2BPEU%2FN%2FssufaxUXhZL1a2eNHahSuLGsHWNa9BvztRJLYxUoBK0Pp8Ws7ptqldx7V2JUa4cDYgwYq5egCm%2BaChbUbgEDDDWxYrKBjqkAXjQxhr%2B6uCorU%2BR5y9Hw8oy6R8frbob%2BxW4WiC%2BbHoRXGv1PGe7T44%2Fw2C7l45hVUmVn6sbzCkcZlsy7QO%2FEEWhjgMzATHrl7K2VbJGZTIem2uivrl45ikdr20Aa3rJKcokXvZuw6LophjGvvHx1VPvFIgFZ1hxxOnd722wdGYuF9jlHXG7DEWzK0Ts7RmrwTimEV0cZg64wKLBSCdKjxwmjB9T&X-Amz-Signature=6299bebc2a75de6fee9bdcc87d9da54d6376cf5a04bcdf9587dcbdf856854168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
