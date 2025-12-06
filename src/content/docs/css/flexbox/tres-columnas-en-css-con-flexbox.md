---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUQCSVYN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T131053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUFLUeWHt43H8lfbgwR7NQKBiN6JcxzLf0wmA2rYQhMgIgEXXwumK5ea1ci03lHwBpVHXpOU9P7FjGk5cdEQPwNdAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIYd7kT8MBOYt%2B9kMircA5FguUCpENgEg6yiMrZiRdon15GhYJYGFj32BNFD68R2mYXck2HefjacMnkZwDBPb6yQP496Cp%2B25RByePcbWj4eJrNG1u4Adho9BEKMakfsNrlOCWEM8bt6%2FHPdyp75W4TkVjXKnF%2BNMhQZ8NVYQFVCjToOtzeNpYsSiUIEI7quRs0OSzYQfGcDIMSHkM5Uwr2fFHgorGVlrHICQippK5uxAEd%2FE06%2FrlCzAOXMZvK1lGIkKca%2FBV6vUGkbYzPzp%2FVtU1xLnnqhbYHVtZmdFpAct5wDER2HKay40ETf1vh0reltvb0N3DaSu%2FrmiTN14FwRLSPEOh0Cmz0WCygS%2FWEsKo%2FbAr%2BS7fBXcwueUXtBsWKmMRVMPt883PJ7uQi4w7E5lehTCHZVIfafRbfGmezjfG44dzXJ0NKQSasJ5ttd0o2RLWLpC%2BkhfCL8EttYcnHCQlnkyTjldiqa23jno6pBcPdZZ%2F6N7vzdx5cpHxp4jh5zNi7Guy%2B%2FOmzjNIFhNK9pCkb2KISmElZShTcWCcLMTrQtSnHPlOUB9i%2FGIiPCk1Gx0KcgFwT4OhdLCXGvrnXPAlVuSljJa%2BBuvxT6rJJZ8uiZlT9okGPBzGKR9M9dKy9KZbVn2qInXWAQMJ%2Bm0MkGOqUBgAg8VK4aEM1AA1FsgFovXv90qoZIhnZKUNtorO6Vm4Lf6E2ls2C78T9QDatPUJ8X5mFegDdFVWr9tTPmJ43mB4CI5TGoIhcQ7RkpHwpeh9HYlXNZxXMw2SO46Ki%2F4OZgQXGMyjTkSCiNix1Z%2BKIESZe6lAaS9Mt6mymrjTWKkJKIkuOg%2FFBMw4EMSGLrCMtkwji0gJ2L5H%2B3ui0tcl80xLrBr1hi&X-Amz-Signature=34ef4965c7e5adff93383c49e62b07a8e369799ec8e3154f92409e5553091ac0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUQCSVYN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T131053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUFLUeWHt43H8lfbgwR7NQKBiN6JcxzLf0wmA2rYQhMgIgEXXwumK5ea1ci03lHwBpVHXpOU9P7FjGk5cdEQPwNdAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIYd7kT8MBOYt%2B9kMircA5FguUCpENgEg6yiMrZiRdon15GhYJYGFj32BNFD68R2mYXck2HefjacMnkZwDBPb6yQP496Cp%2B25RByePcbWj4eJrNG1u4Adho9BEKMakfsNrlOCWEM8bt6%2FHPdyp75W4TkVjXKnF%2BNMhQZ8NVYQFVCjToOtzeNpYsSiUIEI7quRs0OSzYQfGcDIMSHkM5Uwr2fFHgorGVlrHICQippK5uxAEd%2FE06%2FrlCzAOXMZvK1lGIkKca%2FBV6vUGkbYzPzp%2FVtU1xLnnqhbYHVtZmdFpAct5wDER2HKay40ETf1vh0reltvb0N3DaSu%2FrmiTN14FwRLSPEOh0Cmz0WCygS%2FWEsKo%2FbAr%2BS7fBXcwueUXtBsWKmMRVMPt883PJ7uQi4w7E5lehTCHZVIfafRbfGmezjfG44dzXJ0NKQSasJ5ttd0o2RLWLpC%2BkhfCL8EttYcnHCQlnkyTjldiqa23jno6pBcPdZZ%2F6N7vzdx5cpHxp4jh5zNi7Guy%2B%2FOmzjNIFhNK9pCkb2KISmElZShTcWCcLMTrQtSnHPlOUB9i%2FGIiPCk1Gx0KcgFwT4OhdLCXGvrnXPAlVuSljJa%2BBuvxT6rJJZ8uiZlT9okGPBzGKR9M9dKy9KZbVn2qInXWAQMJ%2Bm0MkGOqUBgAg8VK4aEM1AA1FsgFovXv90qoZIhnZKUNtorO6Vm4Lf6E2ls2C78T9QDatPUJ8X5mFegDdFVWr9tTPmJ43mB4CI5TGoIhcQ7RkpHwpeh9HYlXNZxXMw2SO46Ki%2F4OZgQXGMyjTkSCiNix1Z%2BKIESZe6lAaS9Mt6mymrjTWKkJKIkuOg%2FFBMw4EMSGLrCMtkwji0gJ2L5H%2B3ui0tcl80xLrBr1hi&X-Amz-Signature=de4106198bfaa44a66b0350405a40e4344ece3694f42127155d77e85f6fe1387&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

