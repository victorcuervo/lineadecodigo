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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDK5ZB7K%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T223730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFD1LXSei%2BIIBGP%2Fs%2Fw%2FfgJiPZx1uLWGI85eHp8v87uuAiBhU9875wHRxhQ4nR2FX%2BU8ufT6aa1T%2FAfGebsJ%2BNkkkCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM6vVKEFS3uHfSw0hjKtwDWLNixzDS8wNJY%2BxfAcaZNU%2F0jULE3phNjRVx0iEO%2BuaJdLumh0sw5ATX%2BSJ1E60f%2F78FXqZHQCVsEEweYfIr0y%2F%2Fh6GuHlsrIrT%2BwFyeHPddl8rcodt1D0p1XxSPtJ5FBe7C81Um8O8QH8KuaYpQIv03EPznJM6wauajn%2FfUZhBjJ7Q94ivwA8W7eH%2Bn6KHQC0WMrYmTE57FviVAMaqeoP9RQO3haqlPRX8wlZsS5%2BGzzxzg0WbAc7I7QF65Etewl1AzQBXfRYukWZlz4cGLIjmkZFWPoYS5TkhrPwVoIcySLIqbjmWQ7BHdOV8WnoWi75LBokpanrM2DypUg2OjzpR0L1WyPLvsLCzDdrTrdmPptbaK33uH%2B2MSJbkF%2BS8r%2BeChMuvKtr0pq1GNB%2FjVsMcFbtwDMkUXUibx6GZ%2FBp4FmO8FkWmFxEMAjbhl3Q9kCv9ffd9qK15v4tbiKK7w2WY6w%2F9TRLW%2FuIrZmk5hVOg2GsNmbsuA2HDT%2FW4Vhuvm%2B0stmodS0zjYFxbALIC9ctyh7OQqjvs0lOy4LL%2FkODRM7XE29oxA02MqDCQAgbOSoPh0q6hQjtsvQM26diOZWyh0aDQjINaOaQPfTApSCSn4ieqlu8f0LTFmGcAwqdTSyQY6pgG2Gb9kmBCEFUFKbeKAR4qconcR4DtNmWQlSwjeAdmsBBDbFRUHnt3rUTyVXOdpIWDnZlQcaoG1dTsTF10SQwOXfAnSAipcDilAsPxbqdFivZ6xU9XM%2BXRElEuu0xHTCdsrMVk0K978Gg%2Bx0buPEQ5yYGMrK%2FFvNzIZrFx7iSVub1k4lCFWh%2BHPGoz33HRMAA3yEXMt%2BsVOa6QE%2FVhN75NbWoiGIWeK&X-Amz-Signature=35cdb2494ff19efca2b68466beea728feb7acaa5f479b1b86cb45819e0abae57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDK5ZB7K%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T223730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFD1LXSei%2BIIBGP%2Fs%2Fw%2FfgJiPZx1uLWGI85eHp8v87uuAiBhU9875wHRxhQ4nR2FX%2BU8ufT6aa1T%2FAfGebsJ%2BNkkkCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM6vVKEFS3uHfSw0hjKtwDWLNixzDS8wNJY%2BxfAcaZNU%2F0jULE3phNjRVx0iEO%2BuaJdLumh0sw5ATX%2BSJ1E60f%2F78FXqZHQCVsEEweYfIr0y%2F%2Fh6GuHlsrIrT%2BwFyeHPddl8rcodt1D0p1XxSPtJ5FBe7C81Um8O8QH8KuaYpQIv03EPznJM6wauajn%2FfUZhBjJ7Q94ivwA8W7eH%2Bn6KHQC0WMrYmTE57FviVAMaqeoP9RQO3haqlPRX8wlZsS5%2BGzzxzg0WbAc7I7QF65Etewl1AzQBXfRYukWZlz4cGLIjmkZFWPoYS5TkhrPwVoIcySLIqbjmWQ7BHdOV8WnoWi75LBokpanrM2DypUg2OjzpR0L1WyPLvsLCzDdrTrdmPptbaK33uH%2B2MSJbkF%2BS8r%2BeChMuvKtr0pq1GNB%2FjVsMcFbtwDMkUXUibx6GZ%2FBp4FmO8FkWmFxEMAjbhl3Q9kCv9ffd9qK15v4tbiKK7w2WY6w%2F9TRLW%2FuIrZmk5hVOg2GsNmbsuA2HDT%2FW4Vhuvm%2B0stmodS0zjYFxbALIC9ctyh7OQqjvs0lOy4LL%2FkODRM7XE29oxA02MqDCQAgbOSoPh0q6hQjtsvQM26diOZWyh0aDQjINaOaQPfTApSCSn4ieqlu8f0LTFmGcAwqdTSyQY6pgG2Gb9kmBCEFUFKbeKAR4qconcR4DtNmWQlSwjeAdmsBBDbFRUHnt3rUTyVXOdpIWDnZlQcaoG1dTsTF10SQwOXfAnSAipcDilAsPxbqdFivZ6xU9XM%2BXRElEuu0xHTCdsrMVk0K978Gg%2Bx0buPEQ5yYGMrK%2FFvNzIZrFx7iSVub1k4lCFWh%2BHPGoz33HRMAA3yEXMt%2BsVOa6QE%2FVhN75NbWoiGIWeK&X-Amz-Signature=763c981776957b7438385135a7aa15751f926eb4d34658ce13663f3cc261fc54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
