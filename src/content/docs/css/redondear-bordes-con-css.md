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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPWFQI57%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T024823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdANQtIi2bWby57S4OKX6wHXvhGiS%2FMVWBp70NXawPDwIhANN%2BJYsW%2BmMX9mhgFrlw3kZe1F8ZEmkPY8Tbq9W2GncZKv8DCE8QABoMNjM3NDIzMTgzODA1Igzwvln%2Bwx9CeAz%2F%2Brwq3AO6ocWeiJOJeSZK0BSyvGLjVoA0xmNZ%2FF%2BGuju8WWdk8a9%2BIw1sNZuJ2GMIX0%2Fl6hKKfCdfKZ%2FAbqtdVUcxFyg3Iuh7CbONutidSCpNxk6Q5dIqQlnvvYaQ0YLPL5F2V3uZqRU%2B5LQbHssGKTg5hXHstjRDdc3K9u4Jei3R%2BgvyU6NlRxpA17Pff%2BJIGioHqFUbd3w9ViTveoxKy%2BKLi0XBHkw8wB3kE03ZxsSprvvMFJyCTsQ2yBNmGrrSJ4FzBCGS0bImVMcZiRBTMyHmC354RGLwAi9y76L%2F5PspLRD5ZS9akWzypMlbx5cFw1dYbrdRDTxcGXXYTz27h5yK784PlzTrFERQMvkzG46kf1LCzND7QuMmK5ugbZo3Jml1ISh5RPyRRIu1smUIBtJSmQeFsGAnfq79E6kph6fAqtRSwP935BP3QZk%2F3R5L9qwvLQroesRNVCvep2bgDkhQxwvlb%2BA3oXb34tTVjGTUngLzLx2CLA95wmomLgvn7up4qH7SDkW%2BSCqx3WaPuecgg4R%2FicKhbEY5nkjydrsmGktcJMpgjT9QLly0Bdc0k%2F6FJS5jY6XyIRP6ZD5wP3EcKm3Wbo8wi1z2iD%2BFdw1fTnKWHvp8STyV1hnyAd4WzDCgjMjJBjqkAW56%2BJKVfsiI0M5Ol3fiFGIob2Ne3Sa4aDPZ%2BAtfEC5gMK0fvgnRvrJ%2Bqha1o0ZxdfInEr2mFbNt2jk4PA6jFrYfllTFpaMs6hA65F8jdnrCtESB13rXAm93vZDuIika8NBsvz6FcCLTS6avx%2FFqhf2RWq9Vm%2FUyFg9kJg0Glz2RYIC6W5r38nAoVF1BRu4KFLS9AZNYjklMooJS9jG9IXyM4ul0&X-Amz-Signature=45ebc6722695e5dd4c02dd538a901fdbd16ba355a049443fbdfb2befc8fc83c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPWFQI57%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T024823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdANQtIi2bWby57S4OKX6wHXvhGiS%2FMVWBp70NXawPDwIhANN%2BJYsW%2BmMX9mhgFrlw3kZe1F8ZEmkPY8Tbq9W2GncZKv8DCE8QABoMNjM3NDIzMTgzODA1Igzwvln%2Bwx9CeAz%2F%2Brwq3AO6ocWeiJOJeSZK0BSyvGLjVoA0xmNZ%2FF%2BGuju8WWdk8a9%2BIw1sNZuJ2GMIX0%2Fl6hKKfCdfKZ%2FAbqtdVUcxFyg3Iuh7CbONutidSCpNxk6Q5dIqQlnvvYaQ0YLPL5F2V3uZqRU%2B5LQbHssGKTg5hXHstjRDdc3K9u4Jei3R%2BgvyU6NlRxpA17Pff%2BJIGioHqFUbd3w9ViTveoxKy%2BKLi0XBHkw8wB3kE03ZxsSprvvMFJyCTsQ2yBNmGrrSJ4FzBCGS0bImVMcZiRBTMyHmC354RGLwAi9y76L%2F5PspLRD5ZS9akWzypMlbx5cFw1dYbrdRDTxcGXXYTz27h5yK784PlzTrFERQMvkzG46kf1LCzND7QuMmK5ugbZo3Jml1ISh5RPyRRIu1smUIBtJSmQeFsGAnfq79E6kph6fAqtRSwP935BP3QZk%2F3R5L9qwvLQroesRNVCvep2bgDkhQxwvlb%2BA3oXb34tTVjGTUngLzLx2CLA95wmomLgvn7up4qH7SDkW%2BSCqx3WaPuecgg4R%2FicKhbEY5nkjydrsmGktcJMpgjT9QLly0Bdc0k%2F6FJS5jY6XyIRP6ZD5wP3EcKm3Wbo8wi1z2iD%2BFdw1fTnKWHvp8STyV1hnyAd4WzDCgjMjJBjqkAW56%2BJKVfsiI0M5Ol3fiFGIob2Ne3Sa4aDPZ%2BAtfEC5gMK0fvgnRvrJ%2Bqha1o0ZxdfInEr2mFbNt2jk4PA6jFrYfllTFpaMs6hA65F8jdnrCtESB13rXAm93vZDuIika8NBsvz6FcCLTS6avx%2FFqhf2RWq9Vm%2FUyFg9kJg0Glz2RYIC6W5r38nAoVF1BRu4KFLS9AZNYjklMooJS9jG9IXyM4ul0&X-Amz-Signature=860a152ead698d380621b6f3aad1887e559d689df57053ce51ac5870737a02a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
