---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ESYRA7E%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T002705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA2HKFtV848xkXom0vQ7OJ%2BVH6gZ%2B8xJjKB%2BLzWvvKvQAiEAjofvdonYPWYKJjwlPDGSFk22m7IF8H59hHucKJmtaToqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNPTXRTq5LHwi8uaCrcA6iFbKFd8Keo8glLgk%2FeDKpfbJZQAtME1X2aHSe1jQ0NShvqPtK3K5B3bsMl25ClMuZmYPNm0nUyVYuv8%2BJW0ySYfjdPlrV6hWrAedWedGu4OPFQHyYVH8jxGqoKxuPj3O4DEGyJBSa51GM3YDzaedcwzwds8yt%2F0OC%2FO8vLJ6EfEADy5pVLs3q1SHznL080lC5xIrbrNOaqzb8ZV6bUf7y9%2BaaugM%2FLvkP5MIxVrVRgbY9Y2fLP1J7OTNX85QeJPbxBBVEkxWH%2FxvrARx9w540%2FvG3PJFLGvwCEo9R84%2BBG6gFo9Jhh06VKOdQxlmJ%2BNkSommAWu%2Bqu9yMioyb1vypfQMCtVv2JufdUIiDMRfKLFkGwLzYLBUT5VNH2lGkrWGx56MLIGqOAfMBH1dZUMuAaR9olxSm6vA0fUlTj3BogU8ar6JGn3SK82goCa5XTikyV0wi8Q3ehBKESQbZzrxLQ6cNQts72ndnN0UzHnm9K6pel36tlYQVHPckd54JTjm5zTBry05K63LRYUUoUWHqJ8gURSS34bEHVabbZ%2BiV7zhOhHEwm%2B5jF1BK34CUD1Rfsi6rrsfGNNPY4UoXcabQI%2F%2Bo1WSOFXo4lojroqL%2BO8hJYYZpO6%2BS2JXjyMJr90skGOqUBaqJXWrxtFuUPCnz9%2BbmakQaHjD2l0qdXk65POd8hkzkCaPEU4PqzHFVMzgyHkbImxvYMXbLRZpgho93afs9vGUWsIhXREDZ1PH6ZL6Wnm6hyG7KVgYuXqct6wHXLp9lo98Attz8bWPdO5hg28rBffgYHWft7olAREmUzm%2FS7ioI9dskks049P%2Ft0CbrHLGIgzFAhF0681X4uh4G1GAErrwYnw77F&X-Amz-Signature=c28d66bda9d399da9000140be972dbfe1ecd67f0274b3803266b8eee876dbcc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ESYRA7E%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T002705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA2HKFtV848xkXom0vQ7OJ%2BVH6gZ%2B8xJjKB%2BLzWvvKvQAiEAjofvdonYPWYKJjwlPDGSFk22m7IF8H59hHucKJmtaToqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNPTXRTq5LHwi8uaCrcA6iFbKFd8Keo8glLgk%2FeDKpfbJZQAtME1X2aHSe1jQ0NShvqPtK3K5B3bsMl25ClMuZmYPNm0nUyVYuv8%2BJW0ySYfjdPlrV6hWrAedWedGu4OPFQHyYVH8jxGqoKxuPj3O4DEGyJBSa51GM3YDzaedcwzwds8yt%2F0OC%2FO8vLJ6EfEADy5pVLs3q1SHznL080lC5xIrbrNOaqzb8ZV6bUf7y9%2BaaugM%2FLvkP5MIxVrVRgbY9Y2fLP1J7OTNX85QeJPbxBBVEkxWH%2FxvrARx9w540%2FvG3PJFLGvwCEo9R84%2BBG6gFo9Jhh06VKOdQxlmJ%2BNkSommAWu%2Bqu9yMioyb1vypfQMCtVv2JufdUIiDMRfKLFkGwLzYLBUT5VNH2lGkrWGx56MLIGqOAfMBH1dZUMuAaR9olxSm6vA0fUlTj3BogU8ar6JGn3SK82goCa5XTikyV0wi8Q3ehBKESQbZzrxLQ6cNQts72ndnN0UzHnm9K6pel36tlYQVHPckd54JTjm5zTBry05K63LRYUUoUWHqJ8gURSS34bEHVabbZ%2BiV7zhOhHEwm%2B5jF1BK34CUD1Rfsi6rrsfGNNPY4UoXcabQI%2F%2Bo1WSOFXo4lojroqL%2BO8hJYYZpO6%2BS2JXjyMJr90skGOqUBaqJXWrxtFuUPCnz9%2BbmakQaHjD2l0qdXk65POd8hkzkCaPEU4PqzHFVMzgyHkbImxvYMXbLRZpgho93afs9vGUWsIhXREDZ1PH6ZL6Wnm6hyG7KVgYuXqct6wHXLp9lo98Attz8bWPdO5hg28rBffgYHWft7olAREmUzm%2FS7ioI9dskks049P%2Ft0CbrHLGIgzFAhF0681X4uh4G1GAErrwYnw77F&X-Amz-Signature=266aceede36f914843e044ca393baf54e7f058901ab626508d570edb39b55a9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

