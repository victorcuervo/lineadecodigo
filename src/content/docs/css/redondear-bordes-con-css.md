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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W6Z6AD2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T031645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAAOKjC04qWwLckdBsysyIOrsiqzt0X9BbfzDslUV0cQIgD8g%2Bvv2w0rMD7Gl%2BPrpKWnWtXCMONXY21tCljN1TkDUq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDG%2FCpZM9Saqi4uHulyrcA52b0af%2B0R0Ni8oeh%2F7yHmWEova6NHbeBDW3gA8%2FN7iGgr45FtTqsOfBMMzIt5Zu4bDxcVmyAZB%2FkiPtTp3yHDkkVAvHBv%2BwI3o8v2H3TVC71PxggjQPJBzvpzaD8A55p%2BE%2B1fSEMZ2jkXCXkaBEclyEIWA16%2FsHMR1K%2FN%2FqwO0%2FB4rTXBEhn01xRDDrESQcy0%2FsaL6xYd76WCKdOVUe1Hal6HAiYoDO88YCQV7G%2BFMuRZVdejX9WpkVvm4bI%2B%2BYx0XPjX8H5xqCVew3p2lvYhb2S%2FQfDfacTWncwilr%2BOafaCvXC%2BUXqN3hpuyWPGdc%2Bfs1ESnpvHeG7mFOVRkfziElwsS3QaLktocbaJF0dQIN%2BmA1%2F8FSMJjIAu9S9pTbr%2FKil%2FXjn5S6SNhyWDFFTy7rfyBNpHFAcNp8cA0zghVPXoNanx5bd3yh%2FbLdNUF3UpmzOcK1YyhxjVu%2FFWAXhYzZtHiC7z1lT0HpSiA%2B4iNz%2F5JKRrdw47prvK4OBWzwuSEYcUeZ9nfD5SDgt0l6Jq53YKXLPkWhV2eHDZm3rPtina%2Fk%2Fy%2BbXpQBO5ypgVDG0Cs19%2BptS839PRvaf3ud3MNZ7%2FHaPgsBnJTKBTfzy2kHBj5jz2CWzJmA9%2BGoMNaMyMkGOqUBjS%2FFBwRXOQKV8Bv2SkGP7su7rMh2tGK74UVf9ahejlkVJn6slxRt8hrKkTHX2A7qURlSyCw3iXAk%2F%2FgV2I8jApxsMmg%2Bki3STCjSjTFOffNTmjt9HT6Eo9dXexcC2JJmbQcSSVwxiZPfXY4T4TbnDR%2BXCxlLHN6Re0fwoxO9mqMRBOeDOCXEgLYkmx85TixHtu4KwN1Vb32fTQrIynLBfVUx9qFM&X-Amz-Signature=7054d7ef1bce7cab52a3abc78ad13c98361935dde3de57b1d6f670a6b4b64999&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W6Z6AD2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T031645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAAOKjC04qWwLckdBsysyIOrsiqzt0X9BbfzDslUV0cQIgD8g%2Bvv2w0rMD7Gl%2BPrpKWnWtXCMONXY21tCljN1TkDUq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDG%2FCpZM9Saqi4uHulyrcA52b0af%2B0R0Ni8oeh%2F7yHmWEova6NHbeBDW3gA8%2FN7iGgr45FtTqsOfBMMzIt5Zu4bDxcVmyAZB%2FkiPtTp3yHDkkVAvHBv%2BwI3o8v2H3TVC71PxggjQPJBzvpzaD8A55p%2BE%2B1fSEMZ2jkXCXkaBEclyEIWA16%2FsHMR1K%2FN%2FqwO0%2FB4rTXBEhn01xRDDrESQcy0%2FsaL6xYd76WCKdOVUe1Hal6HAiYoDO88YCQV7G%2BFMuRZVdejX9WpkVvm4bI%2B%2BYx0XPjX8H5xqCVew3p2lvYhb2S%2FQfDfacTWncwilr%2BOafaCvXC%2BUXqN3hpuyWPGdc%2Bfs1ESnpvHeG7mFOVRkfziElwsS3QaLktocbaJF0dQIN%2BmA1%2F8FSMJjIAu9S9pTbr%2FKil%2FXjn5S6SNhyWDFFTy7rfyBNpHFAcNp8cA0zghVPXoNanx5bd3yh%2FbLdNUF3UpmzOcK1YyhxjVu%2FFWAXhYzZtHiC7z1lT0HpSiA%2B4iNz%2F5JKRrdw47prvK4OBWzwuSEYcUeZ9nfD5SDgt0l6Jq53YKXLPkWhV2eHDZm3rPtina%2Fk%2Fy%2BbXpQBO5ypgVDG0Cs19%2BptS839PRvaf3ud3MNZ7%2FHaPgsBnJTKBTfzy2kHBj5jz2CWzJmA9%2BGoMNaMyMkGOqUBjS%2FFBwRXOQKV8Bv2SkGP7su7rMh2tGK74UVf9ahejlkVJn6slxRt8hrKkTHX2A7qURlSyCw3iXAk%2F%2FgV2I8jApxsMmg%2Bki3STCjSjTFOffNTmjt9HT6Eo9dXexcC2JJmbQcSSVwxiZPfXY4T4TbnDR%2BXCxlLHN6Re0fwoxO9mqMRBOeDOCXEgLYkmx85TixHtu4KwN1Vb32fTQrIynLBfVUx9qFM&X-Amz-Signature=fef81a332eaa8418136d0508aa9fe8c7978f6baa999db28a799d8b4cafb57594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
