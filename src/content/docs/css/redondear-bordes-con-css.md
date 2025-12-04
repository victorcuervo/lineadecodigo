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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662MB3MQJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T011936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQC92r%2BWIbsgA13WvS45LjnpD%2B96YZ9lBEY8QXEsAvUtXwIhANwt6ZGGxKewwSWHUcIkJt92t7TYT1zmIkkIVTgCbIHcKv8DCDoQABoMNjM3NDIzMTgzODA1IgylDCFirjC0pqD6X%2FMq3AMmMU%2B34ekuEKJZxaw5rIkixoTeZks4tXRFuYezjelw1Z2Q9LFm9I0hKVijDxNkE4f7d6lhjFOSL%2Bga4iwvO%2BIllIhTn8JZpmvVslpDL7FBMGqcsaWq7co3gCLF5RHmYDz7o8qgMYVx2btwGCBBbNe%2FsA%2F8fwCUdODcQzlixJaFjbUd8hPHREqfdeR4lbz8bq%2BeqyFvaBV83MBHzcNK2EsMU3IVPYrVVLCquDBFc%2FVqYzPINyaXv6L6B%2BJbCX1%2FQrISEKzt6uYkYu7jQw0TSx96vmL36lWYol8oqNzDkGwy3UzjYBmqIzt%2FjRKIYhO%2BbsgyGt9beElxAU0huf0MnHgWpbOh6xelDOW2VO%2F2hHN7i50%2FZ6X1lf4DMSvDzy8KWQYhxjXhfywRMxJG5gXiA1ADLcAABbhAjTVWr3BYlZLUqFbrPNfrr%2FBu534BviV4JGOV%2Fk1R%2B7pkRibOv62BcHGj7b56MXQSopTjL0Pvc3gi1gpuUzKfTjw1Nf1dJ7s30SjsCEBG%2F24WzuHlX%2BvNBrh2OGl9S9%2BoTYFi3%2B%2BCqq5YEqs2voWmp3I7vKPkzGSX0yOO3no8FT3CYGTWC8XUzb0niHngNSEYYvy7nRNkGCN9K%2FY8P2q2HRLSO%2F9FnzCitcPJBjqkAQTTGQ1CvmQf6BH0j6%2F6VzyliiAOjHpkkgYzFIwh7PgoO%2Bsq7GeOd2yIMVyfpiC%2FWoyxqilo%2BLsaHETaqqP39IUY68B2B6RqYh9zSezRFWELvGZx9QEF253jztFVfn0QjuEPhNWxbXTSAx5GSEQ9mwMGl%2FpsA0Ul5qFHkYW5aZ4PQ9qYO2%2FCtaRnr77mUUhilLTqaEGxe7TtL33T5PECOdVvnVdM&X-Amz-Signature=d92ae2d8f15bb5793060a9782f97f0f006d8dd4e1bd357775bc38c5b99f4ffde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662MB3MQJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T011936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQC92r%2BWIbsgA13WvS45LjnpD%2B96YZ9lBEY8QXEsAvUtXwIhANwt6ZGGxKewwSWHUcIkJt92t7TYT1zmIkkIVTgCbIHcKv8DCDoQABoMNjM3NDIzMTgzODA1IgylDCFirjC0pqD6X%2FMq3AMmMU%2B34ekuEKJZxaw5rIkixoTeZks4tXRFuYezjelw1Z2Q9LFm9I0hKVijDxNkE4f7d6lhjFOSL%2Bga4iwvO%2BIllIhTn8JZpmvVslpDL7FBMGqcsaWq7co3gCLF5RHmYDz7o8qgMYVx2btwGCBBbNe%2FsA%2F8fwCUdODcQzlixJaFjbUd8hPHREqfdeR4lbz8bq%2BeqyFvaBV83MBHzcNK2EsMU3IVPYrVVLCquDBFc%2FVqYzPINyaXv6L6B%2BJbCX1%2FQrISEKzt6uYkYu7jQw0TSx96vmL36lWYol8oqNzDkGwy3UzjYBmqIzt%2FjRKIYhO%2BbsgyGt9beElxAU0huf0MnHgWpbOh6xelDOW2VO%2F2hHN7i50%2FZ6X1lf4DMSvDzy8KWQYhxjXhfywRMxJG5gXiA1ADLcAABbhAjTVWr3BYlZLUqFbrPNfrr%2FBu534BviV4JGOV%2Fk1R%2B7pkRibOv62BcHGj7b56MXQSopTjL0Pvc3gi1gpuUzKfTjw1Nf1dJ7s30SjsCEBG%2F24WzuHlX%2BvNBrh2OGl9S9%2BoTYFi3%2B%2BCqq5YEqs2voWmp3I7vKPkzGSX0yOO3no8FT3CYGTWC8XUzb0niHngNSEYYvy7nRNkGCN9K%2FY8P2q2HRLSO%2F9FnzCitcPJBjqkAQTTGQ1CvmQf6BH0j6%2F6VzyliiAOjHpkkgYzFIwh7PgoO%2Bsq7GeOd2yIMVyfpiC%2FWoyxqilo%2BLsaHETaqqP39IUY68B2B6RqYh9zSezRFWELvGZx9QEF253jztFVfn0QjuEPhNWxbXTSAx5GSEQ9mwMGl%2FpsA0Ul5qFHkYW5aZ4PQ9qYO2%2FCtaRnr77mUUhilLTqaEGxe7TtL33T5PECOdVvnVdM&X-Amz-Signature=54af411e8339613d9cc54fce5622a8f5f974d6ab4315ee411b9103eb8f29110e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
