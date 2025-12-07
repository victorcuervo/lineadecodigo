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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VKJ56SO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T174012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7NVmr%2BKkt3hUKqgh%2BPzkl3BneQQ3OwXY5toVuU4%2FXlAIhAJGSpx8UtQepHuZj%2B8%2BhE0KpB0HTcnVVue2XMa3TPwtNKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyn%2B%2BYUpjzAXz7uFPEq3AN55%2Fi4GKHcp6v%2FBdWO1JNmArSoY4haIyAeL27eCN6boN6Uf8yO%2F%2BzWMC5b5prBzUMPZLDlUZH0KoH4lYTsCsG4OV%2FhDc4ic0G7oQIt6luyOF%2FwaHKMT%2FrU%2FQG8JJmt%2FBB8eQITr5sMEcCyVnySvCRgPdKAwONq9NTTCW4jdG0hiRCx1bKuNIY4dIpjOz93UyzoBqbvJW%2FK7W4zJP%2BHNrXjKmLv7sfV4HIZHUCU5Hv8frWBsxXKvBXP2iJqZvijnNHg6AsL6Do8D1Cvg9DtQq4MX8yQ56Tw2qIeL66WVBh%2F3BIZ%2B0XITW2%2B5S6cXHmwpCkoyVLhJDwLvw85TGcUdF8HwTZT887QPqFPmOL0g9FGiJmJiMSPK3zZItl2jaOiisEGHbYNxxa7icYXV4GVhLh5wcwVWXTIgbXY%2Bhjw3Gh7T%2F0EBihN%2F%2FQ9hZnD2q8gEnRaPK7n7vg7ssS0AHismYoa0csJc8etjOWtLkhgNrB1sAIcVHQZvBWzJRn5ytzSTNnVHTHlb7dAL8hJJ%2B6mvpuPf4l5DmfRnVkyFY%2BKUqNsNX1x41K01cLcm8ak1eXpHfVe4MXaV5D0lTfSzJUrlmEErbvajxbMJT%2BUfcT9QprUB9RKus0IapWVspNSizDPu9bJBjqkAZO1Eqq8fcboIZ7jmtamFLI3VYnpGYJE%2FuzjrFIGIW2nKaGgHMoMEO9KzlJO13j5LrIpAAbXP3uTeQVwPNCxvNkIwwwPKNO7FsxxjMbLXsg4fTqtYOzEMhL4v794zOixVsDlB%2FpIsrYhdgI86KiyWCM%2Bc%2FxL2zLuSobWRzTeRShHjqDXqHIVqcgNw5WcFGTyzC7LtPGoKntND1%2Fac4HZaoje2Tpt&X-Amz-Signature=26fa51712d849068068930472430708927fe3f8149d90568d2adaf42ac9fb428&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VKJ56SO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T174012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7NVmr%2BKkt3hUKqgh%2BPzkl3BneQQ3OwXY5toVuU4%2FXlAIhAJGSpx8UtQepHuZj%2B8%2BhE0KpB0HTcnVVue2XMa3TPwtNKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyn%2B%2BYUpjzAXz7uFPEq3AN55%2Fi4GKHcp6v%2FBdWO1JNmArSoY4haIyAeL27eCN6boN6Uf8yO%2F%2BzWMC5b5prBzUMPZLDlUZH0KoH4lYTsCsG4OV%2FhDc4ic0G7oQIt6luyOF%2FwaHKMT%2FrU%2FQG8JJmt%2FBB8eQITr5sMEcCyVnySvCRgPdKAwONq9NTTCW4jdG0hiRCx1bKuNIY4dIpjOz93UyzoBqbvJW%2FK7W4zJP%2BHNrXjKmLv7sfV4HIZHUCU5Hv8frWBsxXKvBXP2iJqZvijnNHg6AsL6Do8D1Cvg9DtQq4MX8yQ56Tw2qIeL66WVBh%2F3BIZ%2B0XITW2%2B5S6cXHmwpCkoyVLhJDwLvw85TGcUdF8HwTZT887QPqFPmOL0g9FGiJmJiMSPK3zZItl2jaOiisEGHbYNxxa7icYXV4GVhLh5wcwVWXTIgbXY%2Bhjw3Gh7T%2F0EBihN%2F%2FQ9hZnD2q8gEnRaPK7n7vg7ssS0AHismYoa0csJc8etjOWtLkhgNrB1sAIcVHQZvBWzJRn5ytzSTNnVHTHlb7dAL8hJJ%2B6mvpuPf4l5DmfRnVkyFY%2BKUqNsNX1x41K01cLcm8ak1eXpHfVe4MXaV5D0lTfSzJUrlmEErbvajxbMJT%2BUfcT9QprUB9RKus0IapWVspNSizDPu9bJBjqkAZO1Eqq8fcboIZ7jmtamFLI3VYnpGYJE%2FuzjrFIGIW2nKaGgHMoMEO9KzlJO13j5LrIpAAbXP3uTeQVwPNCxvNkIwwwPKNO7FsxxjMbLXsg4fTqtYOzEMhL4v794zOixVsDlB%2FpIsrYhdgI86KiyWCM%2Bc%2FxL2zLuSobWRzTeRShHjqDXqHIVqcgNw5WcFGTyzC7LtPGoKntND1%2Fac4HZaoje2Tpt&X-Amz-Signature=3e602210d7090f0a439cb10a983bb4a174b1a77a3b1f2868f0ce9ab6d8cb60fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
