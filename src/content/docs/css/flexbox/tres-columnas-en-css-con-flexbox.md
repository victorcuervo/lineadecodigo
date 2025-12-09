---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KJOQ2ZF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T044856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLPK%2BRHjkh6kAV9UkynOyEF9sP0AynrVJncoBaTfnjmwIhAIzqldF%2By2FbL%2FKJcQoJndhkssWLlxeHrnxvO0J2au%2B7KogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL3spUikxJ5rA39poq3AN9LKHM%2BVXRzyALK4vTwrSCXo56zvI696i5Tewt8ZnH8RrN%2F02u24%2BhKStRyR9X3euSP%2Fr%2FdX1rBBsL6bMFkgbffd5XBHsvrmxfDXdtE0e9tzU1p%2F8ZmqtGfTjCZLgYTWY%2BokL%2FpANr%2FnNP7VEzuoMHbaMWRqKTPmnbtVvn%2B5iuGjhHyT4%2FId%2F%2BThH1nHPSaYF4LjttYa9FqfS5aavUH9Dtk7Uhe%2Fe712gao2%2BZfmV3jMNLdpOZkN7kA6UGYBEEktNmnOvLkKXym9JtKjFvpubaIFJw3wNaix5B%2Fo6eO5tm%2BRANylb723G1mTQz7hbsFRGiZHajVOQYRP2UEejl%2Bl8L4hzCLEQiupdvYLDIAUoaOMmVrBKfPZVCPbaCyBNyL9ieM%2Fj4%2BnUdvTFDc4%2BGu%2BFjUqvQrhAUwYd8kO2Mn08E7nWxOFfDR7S7NufpZ7YV389b0E0hL8%2Bx1MljMPMwyk4zHLu96oj4cegS7%2BhXlrGx%2FLKYvve65bOr1AA72lvDLUuYxW7OMujxZjJmfEajgEsb21UKfwpdu0Mv1SZZ2XBYTT1hmgodDqoa99pUpADnCoXoHfyZemniqfOX53NE3cwRNmJZ4jFZHE5ygYGhVTFwNWMlV10QZFxaHhIX4TCkyt7JBjqkAfhSotPHbuu0yeo%2FVoQ8kMpIwCaPFOy5OokOnHd1%2BQprRv8MM2%2BPQxHjQJKjr309lSX7XB%2BqzbXcuOcQ2br%2FMGrQjzXNGKAtN2B%2FD0qt2OSieTx4nEjpaTJKYRFvVl5H09SOTH27wjnaFnoRQRCpW4UcnE%2BSBXvFl7%2Frgv%2B0M0AvPAw%2Bt7e9vKY7SZPPIl5di4k1G7ooDeT%2FLW%2BXBG%2FytQTRFh53&X-Amz-Signature=6f748cbeecc0ffd465da82c8ceceab6fb1704cf4a9bb5ce3f4a6aef9e4e2193e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KJOQ2ZF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T044856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLPK%2BRHjkh6kAV9UkynOyEF9sP0AynrVJncoBaTfnjmwIhAIzqldF%2By2FbL%2FKJcQoJndhkssWLlxeHrnxvO0J2au%2B7KogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL3spUikxJ5rA39poq3AN9LKHM%2BVXRzyALK4vTwrSCXo56zvI696i5Tewt8ZnH8RrN%2F02u24%2BhKStRyR9X3euSP%2Fr%2FdX1rBBsL6bMFkgbffd5XBHsvrmxfDXdtE0e9tzU1p%2F8ZmqtGfTjCZLgYTWY%2BokL%2FpANr%2FnNP7VEzuoMHbaMWRqKTPmnbtVvn%2B5iuGjhHyT4%2FId%2F%2BThH1nHPSaYF4LjttYa9FqfS5aavUH9Dtk7Uhe%2Fe712gao2%2BZfmV3jMNLdpOZkN7kA6UGYBEEktNmnOvLkKXym9JtKjFvpubaIFJw3wNaix5B%2Fo6eO5tm%2BRANylb723G1mTQz7hbsFRGiZHajVOQYRP2UEejl%2Bl8L4hzCLEQiupdvYLDIAUoaOMmVrBKfPZVCPbaCyBNyL9ieM%2Fj4%2BnUdvTFDc4%2BGu%2BFjUqvQrhAUwYd8kO2Mn08E7nWxOFfDR7S7NufpZ7YV389b0E0hL8%2Bx1MljMPMwyk4zHLu96oj4cegS7%2BhXlrGx%2FLKYvve65bOr1AA72lvDLUuYxW7OMujxZjJmfEajgEsb21UKfwpdu0Mv1SZZ2XBYTT1hmgodDqoa99pUpADnCoXoHfyZemniqfOX53NE3cwRNmJZ4jFZHE5ygYGhVTFwNWMlV10QZFxaHhIX4TCkyt7JBjqkAfhSotPHbuu0yeo%2FVoQ8kMpIwCaPFOy5OokOnHd1%2BQprRv8MM2%2BPQxHjQJKjr309lSX7XB%2BqzbXcuOcQ2br%2FMGrQjzXNGKAtN2B%2FD0qt2OSieTx4nEjpaTJKYRFvVl5H09SOTH27wjnaFnoRQRCpW4UcnE%2BSBXvFl7%2Frgv%2B0M0AvPAw%2Bt7e9vKY7SZPPIl5di4k1G7ooDeT%2FLW%2BXBG%2FytQTRFh53&X-Amz-Signature=a1e8df620fbe702da11ac59e4613665e8d67a3898182207f66cff39332825213&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

