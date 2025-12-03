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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6S7B32D%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T025310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQD5NdKqoCJl%2FzmsMtxLiIcdlZWY1DGWEHqYE2Eq4y9OEgIhAIJm2FEzC5isRXMfWATCEZfB9ENJNJpaZEqj42pidLDAKv8DCCIQABoMNjM3NDIzMTgzODA1IgyQGMfseBJoqT%2BzgToq3ANivhlwwVjSRfdpg4MtAr3Tbj%2F3vLnDkdznQhwbmyExnXSs88JnsR5s5VwZi%2BN4XWKxcwzwrn6YXK8jHrcBvLTAlP7bnNprei0OiWQDRW4WhEj5TIimw5bTRfDQ8jqtKgn7242zMJ7u%2Fco5eJ8ndYSF1rJqQa9SY91IPro7AsQZ8I%2FfUGVQrZnBbPgDEe6KoJKsgXoj5iXT2W8%2F9FUsSQC8dgXrpvXh9trj24hhrDrM29MzwXJx5JdJD56cMo7xfddmKKs99tlUaJpgcxmsX9Xl50Kn%2FvT6LZ5WgvxyscPQc6SV%2BK%2BPI2qvu9IhfAlRwF1GtbG3poYL5R8vhm51CUlvOcZ1QpmRxBtzDyIXNhDaBIoXeQdBrVC3N4A3MZSQJraf8ddLcyFzNVzTE2Q2V9GQ1DPgJzpHMv27J4yfrTNzA3FWK7uavs1qInrHPGUdAuAWIYumE0sj%2BdDjWDqjsDw3yxaUaFVARGQ7DYCV50eysEZJj7k%2FNg5Cr2m%2FiYkZ8uGuAbU88CMfgfyXtOqdVmGQ8xCB8O9W97Lq2OvrlAnDbRX6qSp0zXNAYFbyM1sGC7hfhth0ZfuuzQ%2Fyi7eR4qoThG9PnYgwTj%2F4K%2FzZa2wfUuzAg2el9FEodUthDzDjlb7JBjqkAT%2BW9YOqx0vr5PMFXz8sLCcEHZDch45espnL7Gn3bAChQ6iznvnY8UIrBNlLPJnBtdmHNRqdtS6Uryf2nUdP7klvFLfxzhjHfEM4DcB7fHjryXXuVGQ%2BytZfUz3Tr1yYjrJtfhNB7NES3Phh8O72dlF8Bl4F8AT9vkfiWsoCIpRQy3b90ifVpXhB3wXQF3AQRF%2FkcVl3kzNG5NTe%2FnAHEhp%2BtPx6&X-Amz-Signature=9f9c8aa5e56711e2b8d1085d5946e86c42483f4a7bb1309e2c31af84c864aaa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6S7B32D%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T025310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQD5NdKqoCJl%2FzmsMtxLiIcdlZWY1DGWEHqYE2Eq4y9OEgIhAIJm2FEzC5isRXMfWATCEZfB9ENJNJpaZEqj42pidLDAKv8DCCIQABoMNjM3NDIzMTgzODA1IgyQGMfseBJoqT%2BzgToq3ANivhlwwVjSRfdpg4MtAr3Tbj%2F3vLnDkdznQhwbmyExnXSs88JnsR5s5VwZi%2BN4XWKxcwzwrn6YXK8jHrcBvLTAlP7bnNprei0OiWQDRW4WhEj5TIimw5bTRfDQ8jqtKgn7242zMJ7u%2Fco5eJ8ndYSF1rJqQa9SY91IPro7AsQZ8I%2FfUGVQrZnBbPgDEe6KoJKsgXoj5iXT2W8%2F9FUsSQC8dgXrpvXh9trj24hhrDrM29MzwXJx5JdJD56cMo7xfddmKKs99tlUaJpgcxmsX9Xl50Kn%2FvT6LZ5WgvxyscPQc6SV%2BK%2BPI2qvu9IhfAlRwF1GtbG3poYL5R8vhm51CUlvOcZ1QpmRxBtzDyIXNhDaBIoXeQdBrVC3N4A3MZSQJraf8ddLcyFzNVzTE2Q2V9GQ1DPgJzpHMv27J4yfrTNzA3FWK7uavs1qInrHPGUdAuAWIYumE0sj%2BdDjWDqjsDw3yxaUaFVARGQ7DYCV50eysEZJj7k%2FNg5Cr2m%2FiYkZ8uGuAbU88CMfgfyXtOqdVmGQ8xCB8O9W97Lq2OvrlAnDbRX6qSp0zXNAYFbyM1sGC7hfhth0ZfuuzQ%2Fyi7eR4qoThG9PnYgwTj%2F4K%2FzZa2wfUuzAg2el9FEodUthDzDjlb7JBjqkAT%2BW9YOqx0vr5PMFXz8sLCcEHZDch45espnL7Gn3bAChQ6iznvnY8UIrBNlLPJnBtdmHNRqdtS6Uryf2nUdP7klvFLfxzhjHfEM4DcB7fHjryXXuVGQ%2BytZfUz3Tr1yYjrJtfhNB7NES3Phh8O72dlF8Bl4F8AT9vkfiWsoCIpRQy3b90ifVpXhB3wXQF3AQRF%2FkcVl3kzNG5NTe%2FnAHEhp%2BtPx6&X-Amz-Signature=10f06924f8672d6b6880fdd9553274e1cb9bb43820b4368e1f0433ca358d7a6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

