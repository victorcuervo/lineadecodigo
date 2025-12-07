---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJSC5VLG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T202703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSpTgxbdiPPqcQId8XVUyjQFgk1h3O5cawzmiaqlimdwIgRHUYsCy7jE5d4otfZk3fi%2BoUrM4drypFF1m%2BFirkdWEqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK11%2Bbj9czhDwRvftSrcA77qYYr3%2FKyVBr8CsFZQnQjmlEXrQXWXFh%2B0bRSnY56Fo%2BMWWhG%2FkT7p%2B84M6yBCV9FgDu4PAfNbXcgSJuN7xEKUH9WYLL5gFcXGgF7%2F0%2FqwJiAd52bWU%2FqdG9FHENhsOoDd7%2Fb%2BcjWrfXYZ1DoTtsVcgpUBQoHQbqJzTN5EFz605%2FatpSjUOhkD0Hp%2Bvc%2BjXXGBkeiUJuyaZmJzi%2BTfZLLcvSlLAm3DrMEapNy717s0oRH%2FRv64Ss%2BjYaDrYPaIkTMuZBL0pcGIiABsYGZsc%2BwsZw%2Fxb%2Fprg%2FzzoBCAmB1wcMw5S6WNQmZS1r0ox9NLPiEwfjWSgKBv1Nuf1hKUAjxt4VaTfx5SHlyfbLweb0VVC2STY4GeKqYfeJK0qKKKil3pquIgwsHe9RhgiVwQaAva1PtX7wS6wUP38gD10hR3SeOcSX2GoDjVpeWXJIknMXBR4ow0csiY35F7JXXZG%2BkHc8QZd2I639D3o96J9g1bqLNhVOTRGBfyivVh83gogW5yziVa7sFpD%2Brao4sUIeMWkB51Z9BBBLE123O17Dlj6HzjHHpTJP6rRr6JBeY%2B4YtP6%2FSLzmsXEpqf3CH3xzY0zgwyUufRJguaMKEdVuoxB%2BmYckBTT1cN8LLsMOun18kGOqUByI4FyJKUI7ejE9RcdoXyE9wXay5%2BF2gbZGb%2FP%2BqtUGCckXA0xReJhjfUz%2Fmzh0PaG%2FlKPPI%2Fb2D7nXZxI4OOlhZ6bBdDenqv%2BC28BIFNEbgfvjWIWm%2BGU1CoLnOeu8Kmjn4ziJp49T1EW6vhzwc07KOXg6JB11qUkApSq94pb8AvwRdxnb5anGKwbYJthutCmvY9uq8npUdStZ7O2ivWSjaIiy1D&X-Amz-Signature=a98bc7eb1d45c0eaa53b486ff52abe9e604b12b92067ca1523d8bf32fabaacbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJSC5VLG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T202703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSpTgxbdiPPqcQId8XVUyjQFgk1h3O5cawzmiaqlimdwIgRHUYsCy7jE5d4otfZk3fi%2BoUrM4drypFF1m%2BFirkdWEqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK11%2Bbj9czhDwRvftSrcA77qYYr3%2FKyVBr8CsFZQnQjmlEXrQXWXFh%2B0bRSnY56Fo%2BMWWhG%2FkT7p%2B84M6yBCV9FgDu4PAfNbXcgSJuN7xEKUH9WYLL5gFcXGgF7%2F0%2FqwJiAd52bWU%2FqdG9FHENhsOoDd7%2Fb%2BcjWrfXYZ1DoTtsVcgpUBQoHQbqJzTN5EFz605%2FatpSjUOhkD0Hp%2Bvc%2BjXXGBkeiUJuyaZmJzi%2BTfZLLcvSlLAm3DrMEapNy717s0oRH%2FRv64Ss%2BjYaDrYPaIkTMuZBL0pcGIiABsYGZsc%2BwsZw%2Fxb%2Fprg%2FzzoBCAmB1wcMw5S6WNQmZS1r0ox9NLPiEwfjWSgKBv1Nuf1hKUAjxt4VaTfx5SHlyfbLweb0VVC2STY4GeKqYfeJK0qKKKil3pquIgwsHe9RhgiVwQaAva1PtX7wS6wUP38gD10hR3SeOcSX2GoDjVpeWXJIknMXBR4ow0csiY35F7JXXZG%2BkHc8QZd2I639D3o96J9g1bqLNhVOTRGBfyivVh83gogW5yziVa7sFpD%2Brao4sUIeMWkB51Z9BBBLE123O17Dlj6HzjHHpTJP6rRr6JBeY%2B4YtP6%2FSLzmsXEpqf3CH3xzY0zgwyUufRJguaMKEdVuoxB%2BmYckBTT1cN8LLsMOun18kGOqUByI4FyJKUI7ejE9RcdoXyE9wXay5%2BF2gbZGb%2FP%2BqtUGCckXA0xReJhjfUz%2Fmzh0PaG%2FlKPPI%2Fb2D7nXZxI4OOlhZ6bBdDenqv%2BC28BIFNEbgfvjWIWm%2BGU1CoLnOeu8Kmjn4ziJp49T1EW6vhzwc07KOXg6JB11qUkApSq94pb8AvwRdxnb5anGKwbYJthutCmvY9uq8npUdStZ7O2ivWSjaIiy1D&X-Amz-Signature=8625007982877d898e2e3ec0eb602057fc56c53caab3c720eb9b833a2aeeca0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

