---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QKTERGW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDuDnqflNhvIwNJOSfV9VkbhrIyYZ0vIKIp%2Boi0jrx8lAIhAIilF1X87J3XoxxzcBGhapKPaYXaI6fAwqZaCD2QM%2B%2FzKv8DCEAQABoMNjM3NDIzMTgzODA1IgyyxJDV5dDfxX%2FBL1Uq3ANU0olJOaug6wUvWzpX7xVtd%2F1a6LjLjpZLWMgsQmQDPIe6WIhIhy0%2BX8oXprLB6MtwZWilHIvC2uRdk%2FVvbtZyhzeu6gHW82CFA7z5huQBAMim%2FvhO61DyryeuZC9mrjKPPFCwv7LaALuyrPS3Ttm8yYlPHY%2BDXgGvmVXRGUkS1Ok6zttyLrozV9S3i6h82L4Vnfp3rSERahYd75AfJtfbqLkRVLM8RlexAXP2gZDmaCSkzQ9GrPkkB0Sbzksk6RMaqLpzUU68kPGq%2B1Aj2v7jRX4cewMem%2FFsBohPgerRNeuEXGVweE1odic5HvgUeL32rfkImGbf1U5xECsf2VFplrLTKqzK9%2B1Ua6TENLYcEE%2FftMwqZayvrUfD3Gg4IWe2PTaF88fbpZeER4W9GkGhQrZf6khlp%2BGYPvheU0yF5a7XeyuZNWVLBooVGLyf9lMbJV%2BUT9%2BuslkVUr7RDd6jnW9oF3mvrSkUHnF2LRECnuPBC45fffD9icKjFEmkNyGJUyP%2FF9eyUFGWrmbgn1vJfBAHNoUmK%2BhD89Z%2FMD5chdJK8LzZjDTXy47akNKXPOuSsg%2FE7QUo%2FmKcIeO5%2Fo8tqUkADmsGciJxUfMUS4%2B%2FZBZABhnoDFwMZMi9MTDw58TJBjqkAUToKAHjPRQTmUXt9XE8NxpJPknILHGTWzDz1JhX%2Bb5gqo1VQsn1DmicKBdVMs309pku3NosYPzBCrlXKvg0sfE2NFxjDOvnGx%2FVjI8OgPsaPWTYd7snOsqfnD8AiVh%2B2xpGVv8rkT7W71G6%2Fa8woIgQ9%2F74qQiwTQo6K1z%2F8nBG1gPYV90%2FGqTCGAiU%2BVoDdZiA1kxZzDATq68XijnBRfwWcQJb&X-Amz-Signature=b74b87ff56c65517ada6b2757fdcbf1b1288ce8914eb414aff092bd90e7633c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QKTERGW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDuDnqflNhvIwNJOSfV9VkbhrIyYZ0vIKIp%2Boi0jrx8lAIhAIilF1X87J3XoxxzcBGhapKPaYXaI6fAwqZaCD2QM%2B%2FzKv8DCEAQABoMNjM3NDIzMTgzODA1IgyyxJDV5dDfxX%2FBL1Uq3ANU0olJOaug6wUvWzpX7xVtd%2F1a6LjLjpZLWMgsQmQDPIe6WIhIhy0%2BX8oXprLB6MtwZWilHIvC2uRdk%2FVvbtZyhzeu6gHW82CFA7z5huQBAMim%2FvhO61DyryeuZC9mrjKPPFCwv7LaALuyrPS3Ttm8yYlPHY%2BDXgGvmVXRGUkS1Ok6zttyLrozV9S3i6h82L4Vnfp3rSERahYd75AfJtfbqLkRVLM8RlexAXP2gZDmaCSkzQ9GrPkkB0Sbzksk6RMaqLpzUU68kPGq%2B1Aj2v7jRX4cewMem%2FFsBohPgerRNeuEXGVweE1odic5HvgUeL32rfkImGbf1U5xECsf2VFplrLTKqzK9%2B1Ua6TENLYcEE%2FftMwqZayvrUfD3Gg4IWe2PTaF88fbpZeER4W9GkGhQrZf6khlp%2BGYPvheU0yF5a7XeyuZNWVLBooVGLyf9lMbJV%2BUT9%2BuslkVUr7RDd6jnW9oF3mvrSkUHnF2LRECnuPBC45fffD9icKjFEmkNyGJUyP%2FF9eyUFGWrmbgn1vJfBAHNoUmK%2BhD89Z%2FMD5chdJK8LzZjDTXy47akNKXPOuSsg%2FE7QUo%2FmKcIeO5%2Fo8tqUkADmsGciJxUfMUS4%2B%2FZBZABhnoDFwMZMi9MTDw58TJBjqkAUToKAHjPRQTmUXt9XE8NxpJPknILHGTWzDz1JhX%2Bb5gqo1VQsn1DmicKBdVMs309pku3NosYPzBCrlXKvg0sfE2NFxjDOvnGx%2FVjI8OgPsaPWTYd7snOsqfnD8AiVh%2B2xpGVv8rkT7W71G6%2Fa8woIgQ9%2F74qQiwTQo6K1z%2F8nBG1gPYV90%2FGqTCGAiU%2BVoDdZiA1kxZzDATq68XijnBRfwWcQJb&X-Amz-Signature=73d66d67c126683262d388caabc36b96a7376edf0cd14a2333c130853a9019b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

