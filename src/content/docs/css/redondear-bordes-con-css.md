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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIX66T6L%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T065403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDYTeyFZ3v9OIGg0yUNGzR7hJVeVxxezHDlj2A2n9pEAiEA13Q9lTyHjPpcraUMRfRiPo%2BJdP6Qas7r3YTkTUfP5TAq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDA0iwIVR62Z3iRiJ3ircAyifpAyP8QGdkXd8riPi2XDkVXb0RXE0aAK%2B8Ywql7Xu1ZNaPD2F9Y59hICtzoLUdHG1ed8e7GocOd%2BZvnrltk4G4WLEBPq2wbqNyRLAR7dzhUV3Tdo8IkGTZ2iJt4wrREVYxJrmpgccDmStaCyt8x9W385f10%2Fmqc3vqoQ9sqLFTOj%2Blfn3lfdKTETRiKvJrSCNAM9ZAXnUZIEbsBldmG11lrC5kur6jkic5BhX51unhlewY6Uy4c9crCGINJUYNAsVf7lx5Yo%2FrFEH7WDGcicjHrHHYxVXVqFSDxFiyaZopbzJ9lnla5Bi%2BwK9VGP9sI5RxxXtfaMaqAcPRyrjY9wVHb1h2dNcERbWTxJCn7ORfnIR58itJmEXGqLoktvGT7a%2Fzni4Jo%2Fz7rHMb2M0kjBeE4%2BJknrpM0poEcgMH0VbURz%2BIQ%2BAJQ3YQ%2BUZs1sUKWL1a%2BsBqltdSzy4Feym7Ka9k8m7G0RxDTYNPNkGcj7whFucrnpXtymGqreUSa7vJgRyfjdnq%2BngxdkYj9tuQlLGCbkYIcCxWocZZGykimpqzNKQdpRM%2B%2FQrsycPpJlCUtPCffgoBIugdRqPW264WomuGwsjW%2B8Bm8eD1w2KzxR%2BUrrTy7LWkcoE%2BTCBMLOsyckGOqUBHGJEzOTn%2BEiqiOCUBo29Q%2Fi6r%2FMMonrVhPe6I8gHz62QkGi8npDpgm0Dhjrl0o6rVuYGJKql5Y2HdeGqLN758xhKuz%2F83uvr04E2%2FdqBUL4LTsypyzgiq0IzNaqy2puqBYsMPbr0c3%2FgJ7ridKhXUQ5HHDGTID%2F5E84WQDhP0Lh2FMk%2Fmw5Whd4n0t7MwDUI61OjhxyC%2F2sr3RSFrtzLLSdWg8C7&X-Amz-Signature=7fabfbbb6a616a5e21778479adf8db0dd75cbab7e4226baa0160cb2807419380&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIX66T6L%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T065403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDYTeyFZ3v9OIGg0yUNGzR7hJVeVxxezHDlj2A2n9pEAiEA13Q9lTyHjPpcraUMRfRiPo%2BJdP6Qas7r3YTkTUfP5TAq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDA0iwIVR62Z3iRiJ3ircAyifpAyP8QGdkXd8riPi2XDkVXb0RXE0aAK%2B8Ywql7Xu1ZNaPD2F9Y59hICtzoLUdHG1ed8e7GocOd%2BZvnrltk4G4WLEBPq2wbqNyRLAR7dzhUV3Tdo8IkGTZ2iJt4wrREVYxJrmpgccDmStaCyt8x9W385f10%2Fmqc3vqoQ9sqLFTOj%2Blfn3lfdKTETRiKvJrSCNAM9ZAXnUZIEbsBldmG11lrC5kur6jkic5BhX51unhlewY6Uy4c9crCGINJUYNAsVf7lx5Yo%2FrFEH7WDGcicjHrHHYxVXVqFSDxFiyaZopbzJ9lnla5Bi%2BwK9VGP9sI5RxxXtfaMaqAcPRyrjY9wVHb1h2dNcERbWTxJCn7ORfnIR58itJmEXGqLoktvGT7a%2Fzni4Jo%2Fz7rHMb2M0kjBeE4%2BJknrpM0poEcgMH0VbURz%2BIQ%2BAJQ3YQ%2BUZs1sUKWL1a%2BsBqltdSzy4Feym7Ka9k8m7G0RxDTYNPNkGcj7whFucrnpXtymGqreUSa7vJgRyfjdnq%2BngxdkYj9tuQlLGCbkYIcCxWocZZGykimpqzNKQdpRM%2B%2FQrsycPpJlCUtPCffgoBIugdRqPW264WomuGwsjW%2B8Bm8eD1w2KzxR%2BUrrTy7LWkcoE%2BTCBMLOsyckGOqUBHGJEzOTn%2BEiqiOCUBo29Q%2Fi6r%2FMMonrVhPe6I8gHz62QkGi8npDpgm0Dhjrl0o6rVuYGJKql5Y2HdeGqLN758xhKuz%2F83uvr04E2%2FdqBUL4LTsypyzgiq0IzNaqy2puqBYsMPbr0c3%2FgJ7ridKhXUQ5HHDGTID%2F5E84WQDhP0Lh2FMk%2Fmw5Whd4n0t7MwDUI61OjhxyC%2F2sr3RSFrtzLLSdWg8C7&X-Amz-Signature=39c76677505301eef0206cf39fa3b961203ec8d380e7f7ce8ded5600ff6d5a5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
