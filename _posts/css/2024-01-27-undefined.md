---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFWKGTIR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T174024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIH%2FMIzJA3KNtN%2B%2F72cL6g2XKF0kcFmYEnudDdg4HuQYvAiEA3qjOXdiNrKUk7IjsLvkc6w1Wx3XBX%2BS%2BdndfeZKB8HUq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDFjOEGmiLNS3%2BcPmqCrcA1ev1bB2%2F%2FrdiukJd1SBgVFD%2F80rbcglN4Q3hxPbl011LfwgZv1bXiu3vfXH%2Bj%2FE6fFtTlmcaSM7ZiIswgAa6ypeFn%2FzXQ878D9dZlLAsEj2sgiSAtEUcBea2vBPKN%2B1w2n4TqY5DK8%2F2Ptk8h26nR1yeb6M3%2B47OaXgLIROPG2sne%2BcvlOUKSmepyrjS5zySaxRXGBLV6hXsIDywJywwT6mGt7BGCsFMpQhrZuo08%2B%2FvYj9mhEU%2F5PQDcs2arFiaaFCdRNq7mFqOa2PlcrNssoTuIOBPjyaNZgFAhA2Q%2FGiAuzhiqalNT0SprPqeqjrOYbt1XZ3RYU0n9dDFvZ%2BlSp%2FhpuIn7p47Snym83zUFV%2BOlwcrEthTXyFdXDaURFZDBdBWtF60Ws1FEy6krIxPy4jBNsgBLHIUFSZefj0fNlWpQtFOaPsUwESn61jnrze64evgdEbFUlxvlRdjyW5yQPJf4rJEAkGlSUOiJojY78wD2aBKSM%2FLuKb4xjO%2FldCQCdvSkmRwbEvjlZ%2FteTZLyinfwg%2FpKh8UOI5Psr4b8MSSlZWc088JJ9no2JlPmxY8cs9DZhUNBOZrh%2FeoVMTWT%2BNcN9YufiXxYO3Ugwlg2qZfVdpiFlaOdiHSQKrMJfbwckGOqUBae97iQCUeVjLlyVK%2B3hKiFXBd2Wvb1Vr46yWghnEkbQwcOwJKGYbeqnZZ0ydrYtItKdoqfHFkOWzNQjA3FtXMW4k8or1Y7yAIamhhfyJ4ZZj2KbdZWh6GsC99%2BvNJ4%2Fhu1s%2BGa3xeUzAAfMJr1RoU1A1igY2xPeASv9Sz7R75tzxWcqx8la%2B1XzJY9T4V7XzNIno0x7XePTKdGxJDFy1LKe5QwGv&X-Amz-Signature=e652b0dec254dfd5a1d6fe018d165fc443e6aa75b69a97cb4104a0734464c18f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFWKGTIR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T174024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIH%2FMIzJA3KNtN%2B%2F72cL6g2XKF0kcFmYEnudDdg4HuQYvAiEA3qjOXdiNrKUk7IjsLvkc6w1Wx3XBX%2BS%2BdndfeZKB8HUq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDFjOEGmiLNS3%2BcPmqCrcA1ev1bB2%2F%2FrdiukJd1SBgVFD%2F80rbcglN4Q3hxPbl011LfwgZv1bXiu3vfXH%2Bj%2FE6fFtTlmcaSM7ZiIswgAa6ypeFn%2FzXQ878D9dZlLAsEj2sgiSAtEUcBea2vBPKN%2B1w2n4TqY5DK8%2F2Ptk8h26nR1yeb6M3%2B47OaXgLIROPG2sne%2BcvlOUKSmepyrjS5zySaxRXGBLV6hXsIDywJywwT6mGt7BGCsFMpQhrZuo08%2B%2FvYj9mhEU%2F5PQDcs2arFiaaFCdRNq7mFqOa2PlcrNssoTuIOBPjyaNZgFAhA2Q%2FGiAuzhiqalNT0SprPqeqjrOYbt1XZ3RYU0n9dDFvZ%2BlSp%2FhpuIn7p47Snym83zUFV%2BOlwcrEthTXyFdXDaURFZDBdBWtF60Ws1FEy6krIxPy4jBNsgBLHIUFSZefj0fNlWpQtFOaPsUwESn61jnrze64evgdEbFUlxvlRdjyW5yQPJf4rJEAkGlSUOiJojY78wD2aBKSM%2FLuKb4xjO%2FldCQCdvSkmRwbEvjlZ%2FteTZLyinfwg%2FpKh8UOI5Psr4b8MSSlZWc088JJ9no2JlPmxY8cs9DZhUNBOZrh%2FeoVMTWT%2BNcN9YufiXxYO3Ugwlg2qZfVdpiFlaOdiHSQKrMJfbwckGOqUBae97iQCUeVjLlyVK%2B3hKiFXBd2Wvb1Vr46yWghnEkbQwcOwJKGYbeqnZZ0ydrYtItKdoqfHFkOWzNQjA3FtXMW4k8or1Y7yAIamhhfyJ4ZZj2KbdZWh6GsC99%2BvNJ4%2Fhu1s%2BGa3xeUzAAfMJr1RoU1A1igY2xPeASv9Sz7R75tzxWcqx8la%2B1XzJY9T4V7XzNIno0x7XePTKdGxJDFy1LKe5QwGv&X-Amz-Signature=f364e1ad1b122d9d9ced31ec90f5bb49ca8f090965f74ebd9f19c19e00ab328b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

