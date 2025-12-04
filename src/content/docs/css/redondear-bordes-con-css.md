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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI6CMMAQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDIogV8VF21d2J5n6lhzExbjXfgnDXbUBx1m7R%2BTiYOmAIgZQ%2FLfBOIARzpUcrI6ZB1yVtmd440FzFZNcAiUIIs10gq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDP4r4l1WBDyZhQ4BaircAxG8aPOS95y77%2BlR4UG72YvRKLP5kavJVmL8o04rYASL9NOKUVCF3g1TMDgttVLPLVTPv4k2gmPYhRFbSb%2BiFuaOJt%2F9YSajNQekJWhr%2FYuYHv7Kl%2FXXWMIp%2F29XnddB0jsHVdKUtyv9wWhXCC26xzZCQTq2DDBLCHLiyjfbG1wbH8IRzKsJFH%2BsS65SuX%2BwwTWL%2BjZ7t60F8DcAzCqH%2F15GAXe4QmjC7I%2FU8G7LTuo9Ys5h2ojVnPRa2uBHBphNmW%2FJPm%2F7C73bsFknVbFSmU0AEGWNFoGQ5Mfmbf1Oam%2Fv1xltPQqxkfTF415JC6KWb8LDWCXLljb59tgnBU36GDtTqfDaaGO8PXXkbCT6TpYlPqT2HvjdPM5WLDmGQUXeAWR8f2vpznf1KedbxpDxmY1%2BLTgtU8hcTnvddbq%2BU7BhYyY5mZ%2FbULZI%2Bvl2eYyHCEI0i2mDEugpTT7VX%2Brando1IG2lLfUTKo%2BLC%2FFXUVkPqC5kfO1uF1%2FP6DjdziNL9cCyLQornaVJrgYROXlB5gWCuuZcbHPXLx1hY3TzPpWEgDbYm3Pp01Q3auIny9ni9uWNP4tle%2BJdJtEEWlux6BdLofyAGz5xnJ%2BJN%2F2An5iCr3AvvqDfm6GwCTL%2FMMSUw8kGOqUBCEhzVYECfqLy7u2HBqFx8Ai7udm8%2FQyPGGNUV%2B5xMgG5q%2FAmJ0HhrT0n9%2FKWk4XPh3vpY0%2FQL29TkoBkGGT0%2BuMxO3DKETrZ9ptobswKnRKKN20QkY%2F6RxnvgknctS8yF96K6OyO4%2BZgu2Ljr6Qy5urtFH3IRKgi7NfGdCEuwbpsYHMXHEsQDFXeNFS7mrYR9gQ6CwreWvhtjIjik0Dxs5u%2BQwZX&X-Amz-Signature=67fbac0a851862b4dd9855ce30bbdeca450164339ca9908a4dfdb062faed8b6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI6CMMAQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDIogV8VF21d2J5n6lhzExbjXfgnDXbUBx1m7R%2BTiYOmAIgZQ%2FLfBOIARzpUcrI6ZB1yVtmd440FzFZNcAiUIIs10gq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDP4r4l1WBDyZhQ4BaircAxG8aPOS95y77%2BlR4UG72YvRKLP5kavJVmL8o04rYASL9NOKUVCF3g1TMDgttVLPLVTPv4k2gmPYhRFbSb%2BiFuaOJt%2F9YSajNQekJWhr%2FYuYHv7Kl%2FXXWMIp%2F29XnddB0jsHVdKUtyv9wWhXCC26xzZCQTq2DDBLCHLiyjfbG1wbH8IRzKsJFH%2BsS65SuX%2BwwTWL%2BjZ7t60F8DcAzCqH%2F15GAXe4QmjC7I%2FU8G7LTuo9Ys5h2ojVnPRa2uBHBphNmW%2FJPm%2F7C73bsFknVbFSmU0AEGWNFoGQ5Mfmbf1Oam%2Fv1xltPQqxkfTF415JC6KWb8LDWCXLljb59tgnBU36GDtTqfDaaGO8PXXkbCT6TpYlPqT2HvjdPM5WLDmGQUXeAWR8f2vpznf1KedbxpDxmY1%2BLTgtU8hcTnvddbq%2BU7BhYyY5mZ%2FbULZI%2Bvl2eYyHCEI0i2mDEugpTT7VX%2Brando1IG2lLfUTKo%2BLC%2FFXUVkPqC5kfO1uF1%2FP6DjdziNL9cCyLQornaVJrgYROXlB5gWCuuZcbHPXLx1hY3TzPpWEgDbYm3Pp01Q3auIny9ni9uWNP4tle%2BJdJtEEWlux6BdLofyAGz5xnJ%2BJN%2F2An5iCr3AvvqDfm6GwCTL%2FMMSUw8kGOqUBCEhzVYECfqLy7u2HBqFx8Ai7udm8%2FQyPGGNUV%2B5xMgG5q%2FAmJ0HhrT0n9%2FKWk4XPh3vpY0%2FQL29TkoBkGGT0%2BuMxO3DKETrZ9ptobswKnRKKN20QkY%2F6RxnvgknctS8yF96K6OyO4%2BZgu2Ljr6Qy5urtFH3IRKgi7NfGdCEuwbpsYHMXHEsQDFXeNFS7mrYR9gQ6CwreWvhtjIjik0Dxs5u%2BQwZX&X-Amz-Signature=b6f633854630c4a17e2bd98ffbf56f1aea9254bff608adc8c8b823ca72353964&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
