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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PXBTQVV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T052934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmjE0kFWLVf99tW%2FPgOArULnJmRnmgIh%2BQTzK7GR4HhAIhAKRXLNO1Zpt%2B0nCMXslb%2F%2FPC0lgAxxvf47MfhUfvnrJ0Kv8DCFUQABoMNjM3NDIzMTgzODA1IgwGPTfYaWYKZNAvEYoq3APBqVrDOJxr8bqQtUqMotiXhy16AA3dTWVcwQgBBWL%2FwG6B0hflyqExypred5Wv%2F3T9%2B2fc%2Fl9ruNvDXIIvUEg8AQFmOM5kq%2FEeq373nlUgGuV%2B%2B%2Bngh6DFsRjY8sLbkIG%2Fd988PiRTNIAvNdz0IVyYf6M2hEIUBgRf8rs21yTgXO1TymHMRIA9dqU2GNSkunoIyBIgQP%2By9VB0%2FJmvjBabuQTG6qA7Igw4mgDeiC%2F5EDZND0QO0manoYStBBFQ4ItR8czTHOf18iYtoyjfsmiUQMddp3RvVLkzrQfjcsoPHAPmsVQvQp3kpFI6ETt%2BSI3KgHNTQD%2FgDtFnBu2OhfNhADZ2dxaFyby5ud5qjTZhva39pjr53sl%2Big%2Fnvgnk%2F%2FZfM42eS1iwDXIVij5YVYvF%2FyBZCOwrxBD0fZPzaXOVJOzVVJUG6ebEPJXR3kkNZiMKUHzXKysY60qLhTBPcy9u6p32FTSkUdOvdmcnjB1k%2BEcUinjCCwGA2PsLHnthullKHqcA3ZopVffidX%2Fce%2BdAXVpSOTRmuvC%2FTY0UBsZhN5IHfEXRQUnosXQuTh5qf5wkdf5eX4VSha3UgfsyYc3MiSibICUXGy%2Fc5cDn1EMdM5chkHm90%2FAVpH8SMzDWr8nJBjqkAZLbEXOmsa79qm59uXqC3POjhbSSFwSjqHfENjyknDk9tabWglsi37ZA2%2FNFuU0wPO%2BbqRrGtKri23AER7FJe4x59bBGbfBHqLyH920it%2F3LYfgn%2By3GL%2B3jdAjucUwzPDvedxPYS9uMGhgVAOrRBWfWuiWsVI2C4p2gxs867uYqgRhnGdCViSan%2B6tTfUzCIJ%2BEOuPaT4oZDGfxTnIxVenkn%2FSi&X-Amz-Signature=0ac3a5fa059dd3637c666c49eaea809b1355da73a127eee9b642f36737b9df0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PXBTQVV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T052934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmjE0kFWLVf99tW%2FPgOArULnJmRnmgIh%2BQTzK7GR4HhAIhAKRXLNO1Zpt%2B0nCMXslb%2F%2FPC0lgAxxvf47MfhUfvnrJ0Kv8DCFUQABoMNjM3NDIzMTgzODA1IgwGPTfYaWYKZNAvEYoq3APBqVrDOJxr8bqQtUqMotiXhy16AA3dTWVcwQgBBWL%2FwG6B0hflyqExypred5Wv%2F3T9%2B2fc%2Fl9ruNvDXIIvUEg8AQFmOM5kq%2FEeq373nlUgGuV%2B%2B%2Bngh6DFsRjY8sLbkIG%2Fd988PiRTNIAvNdz0IVyYf6M2hEIUBgRf8rs21yTgXO1TymHMRIA9dqU2GNSkunoIyBIgQP%2By9VB0%2FJmvjBabuQTG6qA7Igw4mgDeiC%2F5EDZND0QO0manoYStBBFQ4ItR8czTHOf18iYtoyjfsmiUQMddp3RvVLkzrQfjcsoPHAPmsVQvQp3kpFI6ETt%2BSI3KgHNTQD%2FgDtFnBu2OhfNhADZ2dxaFyby5ud5qjTZhva39pjr53sl%2Big%2Fnvgnk%2F%2FZfM42eS1iwDXIVij5YVYvF%2FyBZCOwrxBD0fZPzaXOVJOzVVJUG6ebEPJXR3kkNZiMKUHzXKysY60qLhTBPcy9u6p32FTSkUdOvdmcnjB1k%2BEcUinjCCwGA2PsLHnthullKHqcA3ZopVffidX%2Fce%2BdAXVpSOTRmuvC%2FTY0UBsZhN5IHfEXRQUnosXQuTh5qf5wkdf5eX4VSha3UgfsyYc3MiSibICUXGy%2Fc5cDn1EMdM5chkHm90%2FAVpH8SMzDWr8nJBjqkAZLbEXOmsa79qm59uXqC3POjhbSSFwSjqHfENjyknDk9tabWglsi37ZA2%2FNFuU0wPO%2BbqRrGtKri23AER7FJe4x59bBGbfBHqLyH920it%2F3LYfgn%2By3GL%2B3jdAjucUwzPDvedxPYS9uMGhgVAOrRBWfWuiWsVI2C4p2gxs867uYqgRhnGdCViSan%2B6tTfUzCIJ%2BEOuPaT4oZDGfxTnIxVenkn%2FSi&X-Amz-Signature=cb1ba88eb83e71524411b2ae2dbb4755e98bbc185fbf24cec72f823d72123860&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
