---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SE435EY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T232248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjFi9y0VaQVOa9ujebMReuG1wSzHiSHOGpRNLQbEUh0AIhAMov02Xtku%2Fsw2eRg4W2pMZ4uIywn98cz5eim6q9ewigKv8DCH8QABoMNjM3NDIzMTgzODA1Igym%2F87cT6dBKxkpVCQq3ANl1rDXSYg%2B%2F1u0B6K1fwqvSPy9S%2Fj1cO95kevJ2cXqC3YaQ2t5O0F3GISRpoxTjER3SP8rfu1kyDI7jAc1upvgpT7GQ8X2uorR8g2cuTr0veItxVDapKqjhkey2dxyFjPG1rs8gg1EEeLOUudyKV8KJHYjAiXkTR6UR61hBIi5D9QXFmL0D%2BSDKVtLXkoI%2Brq9VAiEMWBPZ75x0NCBbCWHsZVrGukHJ3n244UmEKXQCqi%2BqzueVdqUB4ElcCZU25sWY%2Bl1c%2BBqM%2BUGzO3XmJPjEr9AxQwjd6I9q1pDjLdC8WEk8lRMjLtYE6Lbmnr0rGqPLw3MjUmVKwLl0drFjvFgvzi%2BY54z7x3ruOFmk%2B0yLKl0cboz715B5KIo9%2BhiQvhbfzax9MCAmAvs%2BVCL4IDU%2BwPuuNCghPKP8AgrgKgY5nzWGwo2XjJ%2BJgcSkXoDKP2OY%2B%2FiMl5Qqfz6R5NONJ%2FQI6J9%2Fwt98Y4Ven9Kw4pxP%2FSnE77KC14X%2FKWUK9mcMkkpdHdoUpI6IrL6f%2Ff5UyToln81%2BFXEXbB2fYcQkprvLcHxm06oBE8EUpnL9BH0y%2BoB5XomTAchDSmYyY%2B4BiAnF%2FVJu%2BVbKvkGz43cSwIszaIDVFWfiHWzKErRUDC009LJBjqkAdEyPkKGO8%2FTvhM5SqogcY22Z62XsAAdoPrHqchGqypdL5XCmv%2BzL1IsHRO%2FYDWVtIqO%2FaNzokUbmbmQqBFX%2BsUEu7XB%2BqIjIxozKID%2Bz0Hy7xvcu0sIZc25BQkzG8W3Viw%2FZo9jpGBlSeIbWJR8M%2Bj%2FG2BFZXC057TEcg7G3v02AaTuG2QSs9KLKGkZAaIxYhA7Ut6yOyplCMzpqYAGBCptH5LT&X-Amz-Signature=a35551b5bdc36e0d72f08e87ec21123791b57147f4a555109078915885e5afba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SE435EY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T232248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjFi9y0VaQVOa9ujebMReuG1wSzHiSHOGpRNLQbEUh0AIhAMov02Xtku%2Fsw2eRg4W2pMZ4uIywn98cz5eim6q9ewigKv8DCH8QABoMNjM3NDIzMTgzODA1Igym%2F87cT6dBKxkpVCQq3ANl1rDXSYg%2B%2F1u0B6K1fwqvSPy9S%2Fj1cO95kevJ2cXqC3YaQ2t5O0F3GISRpoxTjER3SP8rfu1kyDI7jAc1upvgpT7GQ8X2uorR8g2cuTr0veItxVDapKqjhkey2dxyFjPG1rs8gg1EEeLOUudyKV8KJHYjAiXkTR6UR61hBIi5D9QXFmL0D%2BSDKVtLXkoI%2Brq9VAiEMWBPZ75x0NCBbCWHsZVrGukHJ3n244UmEKXQCqi%2BqzueVdqUB4ElcCZU25sWY%2Bl1c%2BBqM%2BUGzO3XmJPjEr9AxQwjd6I9q1pDjLdC8WEk8lRMjLtYE6Lbmnr0rGqPLw3MjUmVKwLl0drFjvFgvzi%2BY54z7x3ruOFmk%2B0yLKl0cboz715B5KIo9%2BhiQvhbfzax9MCAmAvs%2BVCL4IDU%2BwPuuNCghPKP8AgrgKgY5nzWGwo2XjJ%2BJgcSkXoDKP2OY%2B%2FiMl5Qqfz6R5NONJ%2FQI6J9%2Fwt98Y4Ven9Kw4pxP%2FSnE77KC14X%2FKWUK9mcMkkpdHdoUpI6IrL6f%2Ff5UyToln81%2BFXEXbB2fYcQkprvLcHxm06oBE8EUpnL9BH0y%2BoB5XomTAchDSmYyY%2B4BiAnF%2FVJu%2BVbKvkGz43cSwIszaIDVFWfiHWzKErRUDC009LJBjqkAdEyPkKGO8%2FTvhM5SqogcY22Z62XsAAdoPrHqchGqypdL5XCmv%2BzL1IsHRO%2FYDWVtIqO%2FaNzokUbmbmQqBFX%2BsUEu7XB%2BqIjIxozKID%2Bz0Hy7xvcu0sIZc25BQkzG8W3Viw%2FZo9jpGBlSeIbWJR8M%2Bj%2FG2BFZXC057TEcg7G3v02AaTuG2QSs9KLKGkZAaIxYhA7Ut6yOyplCMzpqYAGBCptH5LT&X-Amz-Signature=07378064266c9b5f758a9efe68383f4c04239fb58ad70984205cef03d81c19d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

