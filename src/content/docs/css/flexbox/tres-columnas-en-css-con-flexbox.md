---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWEOJK6A%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T110315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXQi2xOdyGj8gzMsNDyeG%2BFsbEHOuNc0h99s4jKp7pswIhANxT4XDc0OmysD6hQaIdkjZflVGXpBJxqZ9uNabX2jJAKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyc4W%2B3ls8ZnkksvsYq3AO1oZzU0DBV1B4UtGu0edrx1tnkIyimI8LzLT%2Frew%2Bol9VKGbR25QiPbjP2Mt6xRiyScFhfAHvG%2FbPj2wpV8EVR5ckaFWhQgQ%2FL5zP2gfIhm1lydRUT8RUK7AySJQfevF1%2FAiX7PiVUUzFiSE45gPLT3HMyG8aRtWb3wiP2bVzztKYWv2r6nr47jcq0ZJl7Qi%2FGhggpDybuz2SvdX1iW1y6vnvoNjjxjqn4I2nFp2aupQxWrs%2F0%2F%2Fj1dveCGwHLNKF41pe2u5TJC56%2BIrD%2B%2FlgFgc1%2F49NwzCYtk4qzHYSrfJldmFGhiXk%2BqWvYNaoP1OqK7NtrRzVAMqZHOw39%2B42qeucZElKK9eztg5KMP12S%2Fg3OH02Nrj273A5zxPlgLT7Qusz4odQiKDrfzTbf4zAxUm%2FkBy9Ae4g8Ss9ZapPB06yz9D9iqpMBidwH3ZKO4KtQNP3Sutne7hlCCxbqDqXJcNkxAwrjnWcx3NDq3mdAMfFEZblEh9zmw7c51973hJlQ8u%2BBVaToWwki49Yz1Zii%2BuGcTCFZ%2FCnsR0ablbAZwWPZ0uBy58NXD4bxgWGh46f9MVQdYpcP8CKjMKXP89tEYxoqx1WkoMTGXCF5OZWoFKgtC5Rh6%2BDDi0gIuzCsmdXJBjqkATpc814XO09nICaK%2BQhkfQsf4yIpH0iffTIQHJ8qkpSPlGSNR0B9fDmx65PcuNhmGpEAbl29VbGEX1OSA37MJphXYXIgVt16pb6IBFbF4fgdfzt7%2FYl5gC%2Fr2FCG%2BGYzFSzzpI802W4F3f9oLTfR4YsVAW%2FUMJbU9PTyOfegq%2FZJwYRIzjMBpbac5LjbHQCpN3%2FXdj8QdEmtVDsaB2uhKMDf2vJZ&X-Amz-Signature=017d693ed74c2270f8af017413b83e5600c6c0ea4770ea4e1390c6ab16736d49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWEOJK6A%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T110315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXQi2xOdyGj8gzMsNDyeG%2BFsbEHOuNc0h99s4jKp7pswIhANxT4XDc0OmysD6hQaIdkjZflVGXpBJxqZ9uNabX2jJAKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyc4W%2B3ls8ZnkksvsYq3AO1oZzU0DBV1B4UtGu0edrx1tnkIyimI8LzLT%2Frew%2Bol9VKGbR25QiPbjP2Mt6xRiyScFhfAHvG%2FbPj2wpV8EVR5ckaFWhQgQ%2FL5zP2gfIhm1lydRUT8RUK7AySJQfevF1%2FAiX7PiVUUzFiSE45gPLT3HMyG8aRtWb3wiP2bVzztKYWv2r6nr47jcq0ZJl7Qi%2FGhggpDybuz2SvdX1iW1y6vnvoNjjxjqn4I2nFp2aupQxWrs%2F0%2F%2Fj1dveCGwHLNKF41pe2u5TJC56%2BIrD%2B%2FlgFgc1%2F49NwzCYtk4qzHYSrfJldmFGhiXk%2BqWvYNaoP1OqK7NtrRzVAMqZHOw39%2B42qeucZElKK9eztg5KMP12S%2Fg3OH02Nrj273A5zxPlgLT7Qusz4odQiKDrfzTbf4zAxUm%2FkBy9Ae4g8Ss9ZapPB06yz9D9iqpMBidwH3ZKO4KtQNP3Sutne7hlCCxbqDqXJcNkxAwrjnWcx3NDq3mdAMfFEZblEh9zmw7c51973hJlQ8u%2BBVaToWwki49Yz1Zii%2BuGcTCFZ%2FCnsR0ablbAZwWPZ0uBy58NXD4bxgWGh46f9MVQdYpcP8CKjMKXP89tEYxoqx1WkoMTGXCF5OZWoFKgtC5Rh6%2BDDi0gIuzCsmdXJBjqkATpc814XO09nICaK%2BQhkfQsf4yIpH0iffTIQHJ8qkpSPlGSNR0B9fDmx65PcuNhmGpEAbl29VbGEX1OSA37MJphXYXIgVt16pb6IBFbF4fgdfzt7%2FYl5gC%2Fr2FCG%2BGYzFSzzpI802W4F3f9oLTfR4YsVAW%2FUMJbU9PTyOfegq%2FZJwYRIzjMBpbac5LjbHQCpN3%2FXdj8QdEmtVDsaB2uhKMDf2vJZ&X-Amz-Signature=ec8eb790585ed9dac689fd98e60386e6c69d20a4cda72ad172b29cb771476a16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

