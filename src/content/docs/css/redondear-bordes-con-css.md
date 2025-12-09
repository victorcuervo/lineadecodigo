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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPSMHC32%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T062945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEzKUaMk0dHUothlLiBG4%2FE0%2BfdXUOAej%2Fd6f%2FsCgl5AiAMr9oTaZKJPqJwL7SLLHurxU0oideDaiDIknDCmoe%2B%2ByqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNtHGkCvm9H%2F6IPEpKtwDSjajW7YGxv1lFgMGsT38chN5b2Jqu1Oher6ApyYkStVEpP4ErWcb4qSKp08hx%2F%2FOT7sc%2F1kOvji4PdW%2Fu2ZhBeaaZWd0mJvgZQLRzMtVf7Hg2GHax0hw3Zq2S7Y8coV399GEbKDWZSpOkiVEmWEUISZbE4nHC0watdyF3z6whskwC2UkosASubuC47%2FrlyYkTxdHCcdbXusmLlpIH1SxmF04OZxmPxEL7tz01WBg8oJzPtLooN%2Fc24oVhYk9%2FTRLKGSO%2Bhz9T6FuSTpCAwFEaMhhAl5WVCw9OKiZ%2FLI9r%2BdxaIhmtIty1f9B9dXU2Mn7UjCALd0oFOZm6EPEG%2B0lzFf2C8zC8lbEgiNw1b8cYvwdh8lxJLfL814zV8kFhZHpAAT1ys6NQWN7noQXynY%2F51KtjbyWLX%2FDOCkUQoRpYIR1azp%2Fk%2B0JHWGvvuJihWTOrF950Q2HwAdQs5M%2B3uQ%2BxpoJP%2BWH27427xiDHVLRafWVcI3vg7MR7PE4t81IEB5OwHmU2VNPUAqr078MZs2E2BiyfwFq%2Blj6XGU1LgQeGEP%2FA%2FrhINgmTH1O8AG47CbkQ0tu5JLhCahRPdtYRyp5xGo%2FeX8zQHbWzG%2BJt7kkjtzCVBFV95dedmdTmCsws%2BXeyQY6pgEJKBQKSq9%2FJfD%2F%2FHEMHYA%2B9AIJFxPnWOFf7JtALYNMvHpKwWSEWuUTQf%2Bt5wjNgeTkSCTpIwPEvzeEXusGd6QMqr9QJmkW0byogj9YvvHshJMAR8DBL8JarNRs6ik%2BA6BMkxH84jJ0pTpgRwE%2BlA2iWR%2BBQxC9%2BIQ6roG9Pn0L0U4v85dxX4LP3VwrgAZMqHYhOzKPxQY%2BHJskrFjFsHrjXHAghTyl&X-Amz-Signature=ff585918ff1f09a1ac9ed08dd3f76ce03b90f91acb030d21aa298207452d92ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPSMHC32%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T062945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEzKUaMk0dHUothlLiBG4%2FE0%2BfdXUOAej%2Fd6f%2FsCgl5AiAMr9oTaZKJPqJwL7SLLHurxU0oideDaiDIknDCmoe%2B%2ByqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNtHGkCvm9H%2F6IPEpKtwDSjajW7YGxv1lFgMGsT38chN5b2Jqu1Oher6ApyYkStVEpP4ErWcb4qSKp08hx%2F%2FOT7sc%2F1kOvji4PdW%2Fu2ZhBeaaZWd0mJvgZQLRzMtVf7Hg2GHax0hw3Zq2S7Y8coV399GEbKDWZSpOkiVEmWEUISZbE4nHC0watdyF3z6whskwC2UkosASubuC47%2FrlyYkTxdHCcdbXusmLlpIH1SxmF04OZxmPxEL7tz01WBg8oJzPtLooN%2Fc24oVhYk9%2FTRLKGSO%2Bhz9T6FuSTpCAwFEaMhhAl5WVCw9OKiZ%2FLI9r%2BdxaIhmtIty1f9B9dXU2Mn7UjCALd0oFOZm6EPEG%2B0lzFf2C8zC8lbEgiNw1b8cYvwdh8lxJLfL814zV8kFhZHpAAT1ys6NQWN7noQXynY%2F51KtjbyWLX%2FDOCkUQoRpYIR1azp%2Fk%2B0JHWGvvuJihWTOrF950Q2HwAdQs5M%2B3uQ%2BxpoJP%2BWH27427xiDHVLRafWVcI3vg7MR7PE4t81IEB5OwHmU2VNPUAqr078MZs2E2BiyfwFq%2Blj6XGU1LgQeGEP%2FA%2FrhINgmTH1O8AG47CbkQ0tu5JLhCahRPdtYRyp5xGo%2FeX8zQHbWzG%2BJt7kkjtzCVBFV95dedmdTmCsws%2BXeyQY6pgEJKBQKSq9%2FJfD%2F%2FHEMHYA%2B9AIJFxPnWOFf7JtALYNMvHpKwWSEWuUTQf%2Bt5wjNgeTkSCTpIwPEvzeEXusGd6QMqr9QJmkW0byogj9YvvHshJMAR8DBL8JarNRs6ik%2BA6BMkxH84jJ0pTpgRwE%2BlA2iWR%2BBQxC9%2BIQ6roG9Pn0L0U4v85dxX4LP3VwrgAZMqHYhOzKPxQY%2BHJskrFjFsHrjXHAghTyl&X-Amz-Signature=98d4b3247ddcceb5231237c588b317f192cde5f686f781b2ebc66289fa5b5e4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
