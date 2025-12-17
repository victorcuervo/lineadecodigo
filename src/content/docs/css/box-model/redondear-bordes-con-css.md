---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZZWEIF2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6YcKySngMG5IJzG9dml4F%2BiEelZr8rofsWc00z%2BvSTAIhAIMuyE2Np89603bXn9JZFKbvFevP9bPja%2FsLYK1TwaYpKv8DCHcQABoMNjM3NDIzMTgzODA1IgwQHnqHRqwl%2FAVGqFgq3AOyjB72BRM0Yb8WNYlrS6rQJnWOL%2F5%2FgfTKTU999D372r7nVMPUyoFKFySWp8uTeG3KNats3KU33TjuTVewcVBiU7Lr2os3rJ4sgJ25bobrQbpnp6gfMXwkRSj47OOpNoDvADZo5kcmA1EyhhgeT5mNI5yYXqascvB%2FZDKu2BeKOZkcM36ogxd9skpYOCSVIAeGPYhS1pPMzzzEyr7J4MaJouziOnxQRh4cJDtAOJlJMYvQ%2FuE5BS5nf7VRiSuUXtzcqWdWOOz8YILehN6NCyRvMUg4e3OpDqgPxrx%2BkUCEJHTHrCUSgQw4a2jpQXWNEUp8DPYzfCloPxVJ7p%2Fbi9JtVyFEg8Y2btgA6uapoceDrT6an8KokzvP0j3Vqn%2FD6TKUF8LSKFy3fOeMf3A%2Fo8IbPcPlgKl%2BVKqU2VbEBa41%2FnbjI%2FUQt%2BJR49tw8BJ90D%2FnhUbJmLyzu%2Fz%2FvbGuT8UBsbjUrPH9OrQECCcd1%2BW0m76aMjw5yAKkDmx7cYH8rqgaDOmVfLafFr5aCxU1eeYOyTFznCFh9pAqY6pGexSb9xI8upznAsTs0QF1E2gWbeMxk%2BiiRV6OlIQpnQ8nalVLeJ1iucgxF3NQsOZf4E16FTRVCje5gM3Kk7QRojCeg4nKBjqkAf6QWTf%2Fk%2B7sRgtJFmj%2FMTWbhgNCIh5pwC36ib9dxE559Y7qwut6ttJpqag0o5EeVJSxFFSU8E5woz66E38CJ9%2F0Mx%2BszGd4i9%2F6v1uJnoGpoCHhTcT5ScEEDFQ9rN%2Fec1rHdeuAc9V11cxGXAnv6KHgVpDn3O9s07g2TQEfSLKkAW9qSnwk1Yuc4qf6hj6S0X88%2FwS5uBpx2eUVUeQWyN%2BRSX0C&X-Amz-Signature=4137297f521afd91914fa879cb7bac34013bf163ff5551a28cc90f273ef1e7e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZZWEIF2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6YcKySngMG5IJzG9dml4F%2BiEelZr8rofsWc00z%2BvSTAIhAIMuyE2Np89603bXn9JZFKbvFevP9bPja%2FsLYK1TwaYpKv8DCHcQABoMNjM3NDIzMTgzODA1IgwQHnqHRqwl%2FAVGqFgq3AOyjB72BRM0Yb8WNYlrS6rQJnWOL%2F5%2FgfTKTU999D372r7nVMPUyoFKFySWp8uTeG3KNats3KU33TjuTVewcVBiU7Lr2os3rJ4sgJ25bobrQbpnp6gfMXwkRSj47OOpNoDvADZo5kcmA1EyhhgeT5mNI5yYXqascvB%2FZDKu2BeKOZkcM36ogxd9skpYOCSVIAeGPYhS1pPMzzzEyr7J4MaJouziOnxQRh4cJDtAOJlJMYvQ%2FuE5BS5nf7VRiSuUXtzcqWdWOOz8YILehN6NCyRvMUg4e3OpDqgPxrx%2BkUCEJHTHrCUSgQw4a2jpQXWNEUp8DPYzfCloPxVJ7p%2Fbi9JtVyFEg8Y2btgA6uapoceDrT6an8KokzvP0j3Vqn%2FD6TKUF8LSKFy3fOeMf3A%2Fo8IbPcPlgKl%2BVKqU2VbEBa41%2FnbjI%2FUQt%2BJR49tw8BJ90D%2FnhUbJmLyzu%2Fz%2FvbGuT8UBsbjUrPH9OrQECCcd1%2BW0m76aMjw5yAKkDmx7cYH8rqgaDOmVfLafFr5aCxU1eeYOyTFznCFh9pAqY6pGexSb9xI8upznAsTs0QF1E2gWbeMxk%2BiiRV6OlIQpnQ8nalVLeJ1iucgxF3NQsOZf4E16FTRVCje5gM3Kk7QRojCeg4nKBjqkAf6QWTf%2Fk%2B7sRgtJFmj%2FMTWbhgNCIh5pwC36ib9dxE559Y7qwut6ttJpqag0o5EeVJSxFFSU8E5woz66E38CJ9%2F0Mx%2BszGd4i9%2F6v1uJnoGpoCHhTcT5ScEEDFQ9rN%2Fec1rHdeuAc9V11cxGXAnv6KHgVpDn3O9s07g2TQEfSLKkAW9qSnwk1Yuc4qf6hj6S0X88%2FwS5uBpx2eUVUeQWyN%2BRSX0C&X-Amz-Signature=6d8d540ba9e394b7af42d791d6c7878d1ead11c50c11396c3f7759a72a29b32b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
