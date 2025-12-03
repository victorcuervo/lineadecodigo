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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NPVNENP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T082503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQD1%2FpeavuU8zl809c6zLwFNCqznKcp%2FdPVsJH8Sc33AewIhAIE89TwViOwrodphZqbVvLadhHgFd1EdmQ%2Fm6lCo63nTKv8DCCkQABoMNjM3NDIzMTgzODA1IgwBe2vuwY8JmtJ6w5Eq3APhJL5ECnpRenSWudEbJmLuo%2BHzdWn23kN2XVJz6IAtbkYxuF0WT60j%2B9D0k0djr%2B5Kia1Jxjn0xKqjtEdsue8Cr9ssKRvzbxiFcQE%2F8JA2d8V4MYqkh0P0HclAIXdLE3Ti4vbiojUWKyhM3dolny0YB4y9MI7yy2lF7N%2Fyv9WxztiLwJ0Mn2YeJ6sr2kzBt5B79gdFH9IVu29gY3x7svmqrir%2Fx3whnVJQel9%2BH6VUwPdRpinEC%2FBplErRQE9%2FjTb82epsg1mo5ZxmTx08OHlVuRBvBoWuW8aTBk1TOLpLLTuE2A9sVhfzf6a%2Fov54XtGOGWph8KGenOMDOzlrmIDePcI9GaoQ%2B0dhW%2FMMTuWnrQG9CEu8kQDjHA5Zfp4Fjsolg7sueFWmQeH8UDmOEZMgk04hPGWMXd5pu8JpruuAOhC%2FB48S1JDgLMTx3KzCE3s2QvORS4tWNw6knrFbPgs9zLpK96dw7mR4VgTR3704lou7aNfyQkO0Xve9Wa3TVCbbXy1Mp0YktaYS7BErb%2BLr9fJrn17rHXjY8uPj9QDgUAAt1D1oGlZXmgAQ30%2F9x64P3gCJkP151jA3ifB6tzEBlUZUq%2BahjbpFGDIqFRpynWLtKRGDQg4aESgiJjD71b%2FJBjqkASqz6zg%2BbPw4nLfS%2FetnYrV33dO7Tq4Y02Z6%2F0g9DNMCvXZyumgFhYe5d%2Bki%2F2dMxfb0RFkS1D5D5zv1j4hX1XO5xNCPcNC2ccOoK49gaSXT3dSqg8p4mdU%2FpErmaPQZhuyB9%2BLMPOPXjLb60CcsOJ2JfBMUk%2BMgQo1z8x%2BHyHDsDeRt5Q5gD80Zzxagc2OQIegGZk6hHUV1dk5QYNtkN6fLfuP4&X-Amz-Signature=c8a8fab4b12bed0eca4567507da25c7300ae894eec0325336b20e1e7af1cde0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NPVNENP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T082503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQD1%2FpeavuU8zl809c6zLwFNCqznKcp%2FdPVsJH8Sc33AewIhAIE89TwViOwrodphZqbVvLadhHgFd1EdmQ%2Fm6lCo63nTKv8DCCkQABoMNjM3NDIzMTgzODA1IgwBe2vuwY8JmtJ6w5Eq3APhJL5ECnpRenSWudEbJmLuo%2BHzdWn23kN2XVJz6IAtbkYxuF0WT60j%2B9D0k0djr%2B5Kia1Jxjn0xKqjtEdsue8Cr9ssKRvzbxiFcQE%2F8JA2d8V4MYqkh0P0HclAIXdLE3Ti4vbiojUWKyhM3dolny0YB4y9MI7yy2lF7N%2Fyv9WxztiLwJ0Mn2YeJ6sr2kzBt5B79gdFH9IVu29gY3x7svmqrir%2Fx3whnVJQel9%2BH6VUwPdRpinEC%2FBplErRQE9%2FjTb82epsg1mo5ZxmTx08OHlVuRBvBoWuW8aTBk1TOLpLLTuE2A9sVhfzf6a%2Fov54XtGOGWph8KGenOMDOzlrmIDePcI9GaoQ%2B0dhW%2FMMTuWnrQG9CEu8kQDjHA5Zfp4Fjsolg7sueFWmQeH8UDmOEZMgk04hPGWMXd5pu8JpruuAOhC%2FB48S1JDgLMTx3KzCE3s2QvORS4tWNw6knrFbPgs9zLpK96dw7mR4VgTR3704lou7aNfyQkO0Xve9Wa3TVCbbXy1Mp0YktaYS7BErb%2BLr9fJrn17rHXjY8uPj9QDgUAAt1D1oGlZXmgAQ30%2F9x64P3gCJkP151jA3ifB6tzEBlUZUq%2BahjbpFGDIqFRpynWLtKRGDQg4aESgiJjD71b%2FJBjqkASqz6zg%2BbPw4nLfS%2FetnYrV33dO7Tq4Y02Z6%2F0g9DNMCvXZyumgFhYe5d%2Bki%2F2dMxfb0RFkS1D5D5zv1j4hX1XO5xNCPcNC2ccOoK49gaSXT3dSqg8p4mdU%2FpErmaPQZhuyB9%2BLMPOPXjLb60CcsOJ2JfBMUk%2BMgQo1z8x%2BHyHDsDeRt5Q5gD80Zzxagc2OQIegGZk6hHUV1dk5QYNtkN6fLfuP4&X-Amz-Signature=c6d60b4f5f42ae8e799d4879bf612da0afeb128648c2f2ceb56817c83755ff7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

