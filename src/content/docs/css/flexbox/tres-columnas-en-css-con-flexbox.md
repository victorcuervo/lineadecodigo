---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6DYATIT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T204341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYLo5LoIxvpH5yUxJlP0Wze4UGTYQrISIJoL9EPlivKAiB0pJUGadUn5CR32Akb2US0UgDdQ8QwYzhpkm6ZX1HfSCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMLTEI9%2BsUfavrTVlBKtwDJcK5GdgC%2FQOhSzxV3IfeB8JjfDPX%2Bh4xw%2FxN9KP7R00i6I%2FjhZbznmIBkgcv%2BG0bOKz88GTqBXUfXhOouHWIyac5b6RqhK0hIRlpYGkg4BVsfKyHpl42FFPo76dnm1SIo4A2pcWqLHq6X5SfbzzLSJZLYuRA84R10Ta0%2Bu1CO8cNJcuIl6NUhJHEZaRfhR26wmm3PfZvj%2FGjU8aByX8AdshqMF36%2BqPTl%2FiLy%2FRG6wmBO3B3lhQe2Bb8aZCYc2Y3QNXOGpaezUijk0Ead74T9Zg4vew8ArYDHEfQr4lsyIhNHaRsVK50f0vb28puQm9Hsk1Ys%2Br71LQEwvIZTKr2rl277DLYDHC6w%2F08b2BOjh4a%2BxM%2FwBILAjxsbUM4Ns0MMOSfpD1k%2BPthu0tNDLr7EP30DadSu6KJGrwfzw2FeT1OTsvRnhvRRWHObwDTj3wlnVbqXPVw9swQnyFNi6eUleSAgOITrb0T3Ofg3XPUL2kXuZSu%2BCMti10Bn0X72tNfJL4v4w8ydS%2Fbd1vJgu1LTQC5e3BEpLYxzPTSr5bqfcfPS3OM1ttA3QysCpF8N0HaGNFsNdGJlcegmN6IfsSFwOhshDbE4px7NmR0yp9sBBYPaWltxij7IhpHEG0wnL%2FRyQY6pgEhVqbWnswEdDC3%2BJA1wZSOoIbTCtX3aUmS0LH3zfRZzKkWT8sX4imxAwr3xdM4mBGLljuSpTwnZWY7u7bEpVq%2BhaCvMp%2Br%2BfdSfj5s29y3bKCQfvwoey2cf0%2Fp7vgsGsgA%2F40e9y36LQBfTSfAo9Ld%2BkZX6ba4v2iggqwy3jKea%2BGsCQZEOrVBJ1nRTul1A5QgGKLKUgB5x9DkrWwipDMWhfileSQw&X-Amz-Signature=37f2a671c2d3a5387fa0c90f418dba36e1a2cb6c07dbb246d3256fc9edb9bdb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6DYATIT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T204341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYLo5LoIxvpH5yUxJlP0Wze4UGTYQrISIJoL9EPlivKAiB0pJUGadUn5CR32Akb2US0UgDdQ8QwYzhpkm6ZX1HfSCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMLTEI9%2BsUfavrTVlBKtwDJcK5GdgC%2FQOhSzxV3IfeB8JjfDPX%2Bh4xw%2FxN9KP7R00i6I%2FjhZbznmIBkgcv%2BG0bOKz88GTqBXUfXhOouHWIyac5b6RqhK0hIRlpYGkg4BVsfKyHpl42FFPo76dnm1SIo4A2pcWqLHq6X5SfbzzLSJZLYuRA84R10Ta0%2Bu1CO8cNJcuIl6NUhJHEZaRfhR26wmm3PfZvj%2FGjU8aByX8AdshqMF36%2BqPTl%2FiLy%2FRG6wmBO3B3lhQe2Bb8aZCYc2Y3QNXOGpaezUijk0Ead74T9Zg4vew8ArYDHEfQr4lsyIhNHaRsVK50f0vb28puQm9Hsk1Ys%2Br71LQEwvIZTKr2rl277DLYDHC6w%2F08b2BOjh4a%2BxM%2FwBILAjxsbUM4Ns0MMOSfpD1k%2BPthu0tNDLr7EP30DadSu6KJGrwfzw2FeT1OTsvRnhvRRWHObwDTj3wlnVbqXPVw9swQnyFNi6eUleSAgOITrb0T3Ofg3XPUL2kXuZSu%2BCMti10Bn0X72tNfJL4v4w8ydS%2Fbd1vJgu1LTQC5e3BEpLYxzPTSr5bqfcfPS3OM1ttA3QysCpF8N0HaGNFsNdGJlcegmN6IfsSFwOhshDbE4px7NmR0yp9sBBYPaWltxij7IhpHEG0wnL%2FRyQY6pgEhVqbWnswEdDC3%2BJA1wZSOoIbTCtX3aUmS0LH3zfRZzKkWT8sX4imxAwr3xdM4mBGLljuSpTwnZWY7u7bEpVq%2BhaCvMp%2Br%2BfdSfj5s29y3bKCQfvwoey2cf0%2Fp7vgsGsgA%2F40e9y36LQBfTSfAo9Ld%2BkZX6ba4v2iggqwy3jKea%2BGsCQZEOrVBJ1nRTul1A5QgGKLKUgB5x9DkrWwipDMWhfileSQw&X-Amz-Signature=816a5178165839c62efb8e83f6780849bcb481aaab0173e64ef02387f682a6e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

