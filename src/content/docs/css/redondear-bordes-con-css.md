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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE52NLLB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T050413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCiOrK59lGxUTeCao4mUjhL3MwPGElnEoe4Nmdk7%2B1m5QIgRyR%2FqScWPKgoyeg1%2BFnC4CzMsl9F6YOpmMP6d%2BUFXlQq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDKR6CqsFFvjL7ga6pyrcA%2BECs%2Bb4sOVvXy2YQCSkbSqbJKQHFh%2FbYMmabJ5pdiwkkZORP2FbbCL0Jogb6SFYf6QZ1bwDWe592MIAGCaDGqpbOuIvY%2B8sm2sZN%2B728EmGESNcryL19OdKInhJR1Ph%2FK2vUXy7Vb83LnG%2FFtaH93fs1kjLA4J8dZVSV%2Bzj92Ww5J%2B5bkb%2FThQy9gN0tIWF10Cp%2FS05a%2FoX02IDIgeBAiXiYJZr1ySnSez5G%2FQYyNH8Nn4yIYtXMggWUxHRiwhWOk1bbjOiq3pZg3ztGRL0JTvmmKWNT5pNYf1VQG1zODv7I024LZKfQ2tyLQwfNIZcNDXIRtKIAVShUzxdokq617eMMkciC1SWjHdhTQFttWAsNqYcXVlGCiO0V7yl6m7cm70dzipYr3ltDFBr5xzBzak%2BH9S3yuMDaZn6%2BNT0piktT0sMAC9aql3mmVIUcHFHxVDpfxfMjFkKitJWs0eAZUMv7zYMBJhomuviNlP%2Fkf3M6lRYwyfgmfMFwix8uuZh4O9UdGq5KJnXbIJ75Kmf%2FWdwiNMkZQN5mRhgBBVmK%2BjcEKIqICKkf3HjEvZuwAy759MMuaV4N5wgmGQMHT%2FGTPT95KjGB7c8QVXEM%2BvFeN0AdFdRuoRhsZpT0OyVMLOQxMkGOqUBhBcvL7Y8i%2BQQg5w0ViUz89RyXyeWiD7Deh4FPmdV%2B3B9wGom3MnVKUluZohml9vBbWbOsrUgGzVlmYFwzwzmEdA%2Fe297z3RVs1aGTp6f3zWXWJ7zTnI33uLQstcZSEDDYgasxgsVqlpSdCSg4a9Zza7z%2FeltGvnulZjeUToa0L6j9m2F0cx1nRcsdSH3kjeAdPqoUaA9GS0QxZAXfiedgIeWKD5u&X-Amz-Signature=ca13f7caacadc8524b3f5f783af05164f178dfac22b3b9d2a799ad67276d629a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE52NLLB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T050413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCiOrK59lGxUTeCao4mUjhL3MwPGElnEoe4Nmdk7%2B1m5QIgRyR%2FqScWPKgoyeg1%2BFnC4CzMsl9F6YOpmMP6d%2BUFXlQq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDKR6CqsFFvjL7ga6pyrcA%2BECs%2Bb4sOVvXy2YQCSkbSqbJKQHFh%2FbYMmabJ5pdiwkkZORP2FbbCL0Jogb6SFYf6QZ1bwDWe592MIAGCaDGqpbOuIvY%2B8sm2sZN%2B728EmGESNcryL19OdKInhJR1Ph%2FK2vUXy7Vb83LnG%2FFtaH93fs1kjLA4J8dZVSV%2Bzj92Ww5J%2B5bkb%2FThQy9gN0tIWF10Cp%2FS05a%2FoX02IDIgeBAiXiYJZr1ySnSez5G%2FQYyNH8Nn4yIYtXMggWUxHRiwhWOk1bbjOiq3pZg3ztGRL0JTvmmKWNT5pNYf1VQG1zODv7I024LZKfQ2tyLQwfNIZcNDXIRtKIAVShUzxdokq617eMMkciC1SWjHdhTQFttWAsNqYcXVlGCiO0V7yl6m7cm70dzipYr3ltDFBr5xzBzak%2BH9S3yuMDaZn6%2BNT0piktT0sMAC9aql3mmVIUcHFHxVDpfxfMjFkKitJWs0eAZUMv7zYMBJhomuviNlP%2Fkf3M6lRYwyfgmfMFwix8uuZh4O9UdGq5KJnXbIJ75Kmf%2FWdwiNMkZQN5mRhgBBVmK%2BjcEKIqICKkf3HjEvZuwAy759MMuaV4N5wgmGQMHT%2FGTPT95KjGB7c8QVXEM%2BvFeN0AdFdRuoRhsZpT0OyVMLOQxMkGOqUBhBcvL7Y8i%2BQQg5w0ViUz89RyXyeWiD7Deh4FPmdV%2B3B9wGom3MnVKUluZohml9vBbWbOsrUgGzVlmYFwzwzmEdA%2Fe297z3RVs1aGTp6f3zWXWJ7zTnI33uLQstcZSEDDYgasxgsVqlpSdCSg4a9Zza7z%2FeltGvnulZjeUToa0L6j9m2F0cx1nRcsdSH3kjeAdPqoUaA9GS0QxZAXfiedgIeWKD5u&X-Amz-Signature=3170a9a4af42a672d733a2649393691cf2befe11b6482adff4f4e58ccc5a6761&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
