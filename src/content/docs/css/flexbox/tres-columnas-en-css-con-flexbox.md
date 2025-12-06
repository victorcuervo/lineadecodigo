---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627J5SI7Y%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T103224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD27c7a0FwTHcU2ZFqrltrLVaZC5AA5UWFkxeEEpxQ3cAIhAMeskHDSHnzr%2FJHXOmrBsEQATVB%2FV%2BpDWs3qbkICYGABKv8DCHQQABoMNjM3NDIzMTgzODA1IgzXoo3tS%2Fkd2XiRRNkq3AMT9ZdSuEQUeeEzuT9USMd7TN6p65WD4uPk9NGsxjRmKEt1dwzmwzzGQIrA%2BU9uN2FCR2541N61t8wya4n2vLpMkzr6cJQ9eFmsj6WHNObOUnxAGpnaeyTzj0O9MOwyR7kTwql0F63BYzPBvFTKhjNBaj8z7smS3HNI5Lbwp4nCTGdH%2FzGgxHUcN8fdkcWIPFFiWcpKBQHH3jRRsmLOG4GJjmf6rT5GaxP4bn1WGoVpRfzpyrhgx3zXHbqEztTYw2eV8sFoyMH4vAXddd38T1dHNY%2BxvCvzw%2BAPmWS%2BjRxXJBK5%2Fy%2BArylO94Ehdya2i2stm7P4Yo5K961pxwey6OBnnV6hKkTX2CHNd25dcTdw10I7E6Sp5mvQ1Muk9xpb9OIENjMA9aYDoBIeYIGMKebVHVumM6rfI45NMHwkSN5i2v7eoghgAoXIXtLveezF%2Fj3FEnMRHbBrXBbY2BuxOtoZI6T68yDh0%2FNxriBzLd4BT0SebfbysmsGlE8IDfUg9xhZy2%2Fgp9iNW5fD5p%2B%2FM7rlzSaO4m92VLnJp0Bb05C%2BQot77yM5EE3NlOSurG5deNiBpV%2BuzPEhZ%2FFnUdIqveMvF2Vi2qMUKZlhBfmwaSa7OxRKQsATrTy5GsRuUjC4itDJBjqkAZNtJNl%2BAuKoYYHz3g86bKarNJK9EEOxIYEDG6YkgY5NRSQKLpJOv21Qkftgt0Arhy5IPi%2FASqiIn69rUhboADM1WrSjLNxk1cdo50AGN63NKRnyti%2B5Awb%2FHT7r%2FXvaorVfTOEBd35pqBdKgqPktWJ6gYtEknxIuS2YOpPGOju05SgpyvlaeOnhYnYTRabjibF6R7Q1PbAM3XBo2jtfjPal2VFb&X-Amz-Signature=ac857ae1212e63ef8915a59e2565caebc34da5ca30242b25387c911a8339a3aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627J5SI7Y%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T103224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD27c7a0FwTHcU2ZFqrltrLVaZC5AA5UWFkxeEEpxQ3cAIhAMeskHDSHnzr%2FJHXOmrBsEQATVB%2FV%2BpDWs3qbkICYGABKv8DCHQQABoMNjM3NDIzMTgzODA1IgzXoo3tS%2Fkd2XiRRNkq3AMT9ZdSuEQUeeEzuT9USMd7TN6p65WD4uPk9NGsxjRmKEt1dwzmwzzGQIrA%2BU9uN2FCR2541N61t8wya4n2vLpMkzr6cJQ9eFmsj6WHNObOUnxAGpnaeyTzj0O9MOwyR7kTwql0F63BYzPBvFTKhjNBaj8z7smS3HNI5Lbwp4nCTGdH%2FzGgxHUcN8fdkcWIPFFiWcpKBQHH3jRRsmLOG4GJjmf6rT5GaxP4bn1WGoVpRfzpyrhgx3zXHbqEztTYw2eV8sFoyMH4vAXddd38T1dHNY%2BxvCvzw%2BAPmWS%2BjRxXJBK5%2Fy%2BArylO94Ehdya2i2stm7P4Yo5K961pxwey6OBnnV6hKkTX2CHNd25dcTdw10I7E6Sp5mvQ1Muk9xpb9OIENjMA9aYDoBIeYIGMKebVHVumM6rfI45NMHwkSN5i2v7eoghgAoXIXtLveezF%2Fj3FEnMRHbBrXBbY2BuxOtoZI6T68yDh0%2FNxriBzLd4BT0SebfbysmsGlE8IDfUg9xhZy2%2Fgp9iNW5fD5p%2B%2FM7rlzSaO4m92VLnJp0Bb05C%2BQot77yM5EE3NlOSurG5deNiBpV%2BuzPEhZ%2FFnUdIqveMvF2Vi2qMUKZlhBfmwaSa7OxRKQsATrTy5GsRuUjC4itDJBjqkAZNtJNl%2BAuKoYYHz3g86bKarNJK9EEOxIYEDG6YkgY5NRSQKLpJOv21Qkftgt0Arhy5IPi%2FASqiIn69rUhboADM1WrSjLNxk1cdo50AGN63NKRnyti%2B5Awb%2FHT7r%2FXvaorVfTOEBd35pqBdKgqPktWJ6gYtEknxIuS2YOpPGOju05SgpyvlaeOnhYnYTRabjibF6R7Q1PbAM3XBo2jtfjPal2VFb&X-Amz-Signature=a148ee354d95a4c2241dc446182e088c12719b9556d778c447d102cd4198ff2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

