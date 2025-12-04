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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDURM53T%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T091808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIGhRIdAG49hAHEW65YTBFpprLjnvN%2BuJ44R1nY73AqnAAiEAiyYLHCQYxLmKa0mIDV5uCmogLMZ21h44DCClN12CMtwq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDLE9wiU8dFqrRQvAnyrcA05BK0CmZrkZXr0chglaQeeN4vQvG3T4qaPnUR%2Fqv0B6lcv3u7tWUAE4qa6WnajZvg98z5YkHMxZycY6jEftaDfs%2BW%2FIcBctD%2FDZENOpuWWR%2BI6vfvVpVaRksCTqadURrh3NJv%2FW%2Fr8mawdVtubs5MrTs5OoCQSaaWhEHi5LYrT18NIbGIhiYgDGg7GoJUdOn1M34H%2BKlB4LO6pLvKpPq35YEEN4FPpbYRnykb5oQJrsKXZ1nIW6VsHpgE6Q9M5TDrXu6uM3HAy0enUoiTvJzTu7KO%2BKhQFgiczq8%2FXFA3yJSzwkY8uZkR4GS89XT6YbAPEMEx4xS%2F%2FIqiLviGHZTq7ZUX5w%2FS9IbjhyXCunvULrfD%2Bl%2BG9NlBmIWu0BFjQjzOjDk8gwZUEvTepnEyNTFJEwaw4Vsbp9q9Az6mJ1h6lio3KIexlW%2FnXww%2B6gzSZ5ooisSOKzK9k3vITY1B6fV9Pin7yKwPXN5ErzIF%2FQl2VWeeq89P1yVGifuQql6a6CdWArMPHFLzAk7M8dnm9ocqiunaxmbxAKfRrD4LGm%2FTY%2Fob8Aj%2F92DwltHCbjiKceJIk7VMUV86b5uvmwAVf3h15BePUyv0bWAldwbx2DqMcgAmMU8mTlywBgCjLSMP2FxckGOqUBVXDNnQoKGuvz%2F1isBeC7CI%2F4UT3dGz9gdfpXhNyEqdDlHEeG1c1himY7PYU8BR5SLm7NJWkbHiWaOgcm47oX9zL3G5x%2F1C0ueVPHitX07wgl1NCTmsZjegj3dOCTVFGziWTJDNrxHNPpd3lWveYENryAO7dE%2BYmBZwwIMyRPSEeCoyW%2BySEeL7xS59S%2FbkDu16%2BeZcVhJ3%2BWFvzzajn%2Fvcq7SYBx&X-Amz-Signature=2494927ed0c5c2b245a95008bc235a83d5a0eef521d7ea274d6f018593f1ed5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDURM53T%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T091808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIGhRIdAG49hAHEW65YTBFpprLjnvN%2BuJ44R1nY73AqnAAiEAiyYLHCQYxLmKa0mIDV5uCmogLMZ21h44DCClN12CMtwq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDLE9wiU8dFqrRQvAnyrcA05BK0CmZrkZXr0chglaQeeN4vQvG3T4qaPnUR%2Fqv0B6lcv3u7tWUAE4qa6WnajZvg98z5YkHMxZycY6jEftaDfs%2BW%2FIcBctD%2FDZENOpuWWR%2BI6vfvVpVaRksCTqadURrh3NJv%2FW%2Fr8mawdVtubs5MrTs5OoCQSaaWhEHi5LYrT18NIbGIhiYgDGg7GoJUdOn1M34H%2BKlB4LO6pLvKpPq35YEEN4FPpbYRnykb5oQJrsKXZ1nIW6VsHpgE6Q9M5TDrXu6uM3HAy0enUoiTvJzTu7KO%2BKhQFgiczq8%2FXFA3yJSzwkY8uZkR4GS89XT6YbAPEMEx4xS%2F%2FIqiLviGHZTq7ZUX5w%2FS9IbjhyXCunvULrfD%2Bl%2BG9NlBmIWu0BFjQjzOjDk8gwZUEvTepnEyNTFJEwaw4Vsbp9q9Az6mJ1h6lio3KIexlW%2FnXww%2B6gzSZ5ooisSOKzK9k3vITY1B6fV9Pin7yKwPXN5ErzIF%2FQl2VWeeq89P1yVGifuQql6a6CdWArMPHFLzAk7M8dnm9ocqiunaxmbxAKfRrD4LGm%2FTY%2Fob8Aj%2F92DwltHCbjiKceJIk7VMUV86b5uvmwAVf3h15BePUyv0bWAldwbx2DqMcgAmMU8mTlywBgCjLSMP2FxckGOqUBVXDNnQoKGuvz%2F1isBeC7CI%2F4UT3dGz9gdfpXhNyEqdDlHEeG1c1himY7PYU8BR5SLm7NJWkbHiWaOgcm47oX9zL3G5x%2F1C0ueVPHitX07wgl1NCTmsZjegj3dOCTVFGziWTJDNrxHNPpd3lWveYENryAO7dE%2BYmBZwwIMyRPSEeCoyW%2BySEeL7xS59S%2FbkDu16%2BeZcVhJ3%2BWFvzzajn%2Fvcq7SYBx&X-Amz-Signature=3e6bd4c9e3a76794f69b06b87c1119bc1818717a5a94c88f850f246be60eaa30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
