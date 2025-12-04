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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E727WIA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCVGgHcGPq8qsldQQHu0PXRs8sCWgjxerRkSfTsyASgowIhAJvn2ZCsQ%2BKOW6d8b6bJeIhzi81GZGQOZHcrETZdw7HfKv8DCEQQABoMNjM3NDIzMTgzODA1IgzeQ2D6YQ29dEy2E9wq3AMDc3f4nxtogJTPAvWN6lI1gl5Qr3dy3PtLh2fUwd5YQnUfMJ6WJ7NEcPbocnHPjIls9aoEG0r1ed9njfYA1gT4q76AU6svKKvgWv1nB50EmI8wvh4D2rmK%2ByoAcHOx5wJ7JpdBnVULMJUOhAIO41YjqCo9zOHse0KYLN%2BJD9cukvO5fOyQaW029ZMa41b9%2BjcHrtE%2FVgsxzQVZCAc5QnBfaf6vYDZYO%2FFTeKNrT2fnK2P6L1DOF0MND1pQuSzuubKXiyL5HUS2iCm23EkjtdQhJRJwGWXdMvx44hBR9QJN0WR9jDJ3PUEaQFBQHvFXyiB795INdWyFeq7TxoiwS49UpQgoHLdbQ8rGBFBnupWdWyZW1IYmvkcJYujbBfCvdIQ%2B%2BCTYRrDV4fFlk4Sa28aOXLUwyB4zfqPHqjt5og7ElvCUIgPCNEMjyu%2FvkAoTutgXJ5I9CLe%2FoOwf0MNbhDEAiEx06%2FIL%2FVSZ%2BB0b%2FzJUvqO1o1yDHrm3TQ6qYw%2BMl4rRRzZ5fa4OeZjgR1KCUyBS9DV5uZnn%2F7xpAfg1EnGwfmP%2B1GwYrKnpGFP6yTkOpEtiwLEXZ2I4Mimi5m5F2HHxB176BsBMKYApjLB%2FF8%2BOe7V%2FAcxF%2B6y1rw6oJDDeycXJBjqkAbf7FMjZsbHObb%2BCkRwB8VJT6O4PB3DamFNDMVLz6BsCRyvha1u7ROuuhE%2FJowTHWHABCgUiptt3Kc2k%2BMNECLdqBKyYInvQCdl6fM7JQx3Yi2kZZgsVmECvFWhgQqYW7YLhr6ADFUbNfqZLHfQbUXLyZmlamY4AjcUfTNaLF3roqyciRXlV%2Beqk7WcM%2FAIdFvTF%2Fc%2B3eP0okRo7TfoaBAUczGOF&X-Amz-Signature=91231927d68684b4cbfbc0bc3bb7594f5987a2eeecebf5bdc7ce15aa2719863d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E727WIA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCVGgHcGPq8qsldQQHu0PXRs8sCWgjxerRkSfTsyASgowIhAJvn2ZCsQ%2BKOW6d8b6bJeIhzi81GZGQOZHcrETZdw7HfKv8DCEQQABoMNjM3NDIzMTgzODA1IgzeQ2D6YQ29dEy2E9wq3AMDc3f4nxtogJTPAvWN6lI1gl5Qr3dy3PtLh2fUwd5YQnUfMJ6WJ7NEcPbocnHPjIls9aoEG0r1ed9njfYA1gT4q76AU6svKKvgWv1nB50EmI8wvh4D2rmK%2ByoAcHOx5wJ7JpdBnVULMJUOhAIO41YjqCo9zOHse0KYLN%2BJD9cukvO5fOyQaW029ZMa41b9%2BjcHrtE%2FVgsxzQVZCAc5QnBfaf6vYDZYO%2FFTeKNrT2fnK2P6L1DOF0MND1pQuSzuubKXiyL5HUS2iCm23EkjtdQhJRJwGWXdMvx44hBR9QJN0WR9jDJ3PUEaQFBQHvFXyiB795INdWyFeq7TxoiwS49UpQgoHLdbQ8rGBFBnupWdWyZW1IYmvkcJYujbBfCvdIQ%2B%2BCTYRrDV4fFlk4Sa28aOXLUwyB4zfqPHqjt5og7ElvCUIgPCNEMjyu%2FvkAoTutgXJ5I9CLe%2FoOwf0MNbhDEAiEx06%2FIL%2FVSZ%2BB0b%2FzJUvqO1o1yDHrm3TQ6qYw%2BMl4rRRzZ5fa4OeZjgR1KCUyBS9DV5uZnn%2F7xpAfg1EnGwfmP%2B1GwYrKnpGFP6yTkOpEtiwLEXZ2I4Mimi5m5F2HHxB176BsBMKYApjLB%2FF8%2BOe7V%2FAcxF%2B6y1rw6oJDDeycXJBjqkAbf7FMjZsbHObb%2BCkRwB8VJT6O4PB3DamFNDMVLz6BsCRyvha1u7ROuuhE%2FJowTHWHABCgUiptt3Kc2k%2BMNECLdqBKyYInvQCdl6fM7JQx3Yi2kZZgsVmECvFWhgQqYW7YLhr6ADFUbNfqZLHfQbUXLyZmlamY4AjcUfTNaLF3roqyciRXlV%2Beqk7WcM%2FAIdFvTF%2Fc%2B3eP0okRo7TfoaBAUczGOF&X-Amz-Signature=dd62f8b69bbbc194fa323d10b1683c3846394447fbe6402b8cbcc1fc419c7756&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
