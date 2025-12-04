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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4UCSPCB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzIbePrKMZNYSh7MPkw7M4MA%2BRvJnaESjuq0uOkE49VAIhAJ2RKjVwAt%2FBDR%2BdabQ2VyuQ7aG79%2BYb6dpg8PX6NzkmKv8DCEkQABoMNjM3NDIzMTgzODA1IgxxWQkGhjI46HLPRwsq3APxogLxhpibII2pW54h8U5NqsGy%2BlLlXEfnlTLUnVwA%2BtMS5uIj6iNTB%2BAFVP%2BCvZqO%2BrBLAozz4AcKb1ahVQEYZ%2FfP35rnQl4nPG5tUjR6hTTYSUH8mhqNLvI%2BOJOYHhcMcmor1V%2BaDUr%2FUVTu8f%2FrGkoZft9P%2Fkws1wiDxtfR9Cq7mJfbGAwVAnWl5b3HUq8%2Ff4yJrz7vzLpvEay4U11q5O3YSjeTr%2B9strh74pm1lje5ast17e6XXV3qQjxsoeDF%2F87HtMwKGJ7es5iWgOEVtfveN8QCyGVRG85Kg5jHaG%2FVR26Z3DBByPYc%2F6VWj%2FoZcz2xLwszv9UAsQu%2Fbc3Z3IjmKwizdTC2R6yGeKfPUnmbHjksLYKf%2Fqw%2BTVUGzUXi5NokjrEj8w9IPfWpSIaZrujBEffSodPYVSBV87smy4smIUP0xTxd8pCX0%2BRk%2B9ux7jyijViDRT5EEZhkpzeYAuD%2FSj%2Fk%2FRE3lmHFhu9bjOexfriQTwWF4rHCDbW2AbHpFbD9436bLOoPdMDIinlOu3%2B3Jz0zoF2XsQOxpOxTbYZ144Yk8W3g3HQFFnEvxd1RoH%2F8hBNoFOhzDyPO3FwPOvg27A3ECInYjDunEwvGVRuYNOl0DAL%2FMRJcMDD53MbJBjqkAQBrPFxR85saS96%2Byt8ZvCgLKJjcMGsuPb0suheqXHVcGZX2lKi3EWdXt105QUZlJrtkdlWK2%2BC5HBoGfYimojYVI8ttyRYe%2Fuypz6tGYry0EInEZsbB1%2BFkh2No0dw%2F0gE2jtyEuM%2F%2BECxXnyWQ3f1gHkiqy99ATd8bY%2B6fPuHJUZp3cY9NcU%2BRFdr%2BrBJbbsFO9tMY%2Fx24mP%2FGs8tJCsZ%2B9F6c&X-Amz-Signature=0dc6aae928ac1dddfe42eb2c32895e62aa203afaca2bb1358a7d84423619fbdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4UCSPCB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzIbePrKMZNYSh7MPkw7M4MA%2BRvJnaESjuq0uOkE49VAIhAJ2RKjVwAt%2FBDR%2BdabQ2VyuQ7aG79%2BYb6dpg8PX6NzkmKv8DCEkQABoMNjM3NDIzMTgzODA1IgxxWQkGhjI46HLPRwsq3APxogLxhpibII2pW54h8U5NqsGy%2BlLlXEfnlTLUnVwA%2BtMS5uIj6iNTB%2BAFVP%2BCvZqO%2BrBLAozz4AcKb1ahVQEYZ%2FfP35rnQl4nPG5tUjR6hTTYSUH8mhqNLvI%2BOJOYHhcMcmor1V%2BaDUr%2FUVTu8f%2FrGkoZft9P%2Fkws1wiDxtfR9Cq7mJfbGAwVAnWl5b3HUq8%2Ff4yJrz7vzLpvEay4U11q5O3YSjeTr%2B9strh74pm1lje5ast17e6XXV3qQjxsoeDF%2F87HtMwKGJ7es5iWgOEVtfveN8QCyGVRG85Kg5jHaG%2FVR26Z3DBByPYc%2F6VWj%2FoZcz2xLwszv9UAsQu%2Fbc3Z3IjmKwizdTC2R6yGeKfPUnmbHjksLYKf%2Fqw%2BTVUGzUXi5NokjrEj8w9IPfWpSIaZrujBEffSodPYVSBV87smy4smIUP0xTxd8pCX0%2BRk%2B9ux7jyijViDRT5EEZhkpzeYAuD%2FSj%2Fk%2FRE3lmHFhu9bjOexfriQTwWF4rHCDbW2AbHpFbD9436bLOoPdMDIinlOu3%2B3Jz0zoF2XsQOxpOxTbYZ144Yk8W3g3HQFFnEvxd1RoH%2F8hBNoFOhzDyPO3FwPOvg27A3ECInYjDunEwvGVRuYNOl0DAL%2FMRJcMDD53MbJBjqkAQBrPFxR85saS96%2Byt8ZvCgLKJjcMGsuPb0suheqXHVcGZX2lKi3EWdXt105QUZlJrtkdlWK2%2BC5HBoGfYimojYVI8ttyRYe%2Fuypz6tGYry0EInEZsbB1%2BFkh2No0dw%2F0gE2jtyEuM%2F%2BECxXnyWQ3f1gHkiqy99ATd8bY%2B6fPuHJUZp3cY9NcU%2BRFdr%2BrBJbbsFO9tMY%2Fx24mP%2FGs8tJCsZ%2B9F6c&X-Amz-Signature=91a63de14eeb9feb4cdf53265cb72ed94a74aa2f64e4f7c6ec2740194fcdb729&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
