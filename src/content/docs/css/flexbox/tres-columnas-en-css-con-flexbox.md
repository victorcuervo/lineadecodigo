---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKGZT5HR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T214042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEZuM43RgMJ4Tn9lBUmBOfnZa5rOSodxzCmDZP8eH07AiEAkj1D5xzQs7pqzc0sDYejV3fLK2srE9z8hRXBMT8tle0q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFlSZF6Z%2FRc7a9cjIyrcA6gHNwC4QO6sEWHtUpxkJ%2FTVqM4mODQQ7%2FJakf2%2BtgFEFNlo3yLdr12%2Bm2bybBrcdQQSZl9OrFfAEPB%2Bqz4q1jWlazfkNP0Lq79YwbhuF%2F6s0ULAZNLa%2B8L21%2FP6FWvftgS%2B5O0yBLmVy7Pnz5JqmVh8TPPKn6DHYQt1vT8D7mKojDzA89LwmlP3IVfYY79Ve0TWpmPpwWYF442AP8TIm52Wr64mBQ2xBGVm5J%2BUTmqhn3s2PgIsw0ORVYbiv%2Fz08rleMys3sP665sqpMzXT0QrCPwRpVVuvFeOfj%2FZ13%2BoLi56HnX7vSRZBNLsVbwIGbpm%2FCLkxCx2UAtCcsuxvHIzCw0Gcl%2FxHGVZzyVrzppwo5BSQTdwr3d0PERa3%2FdjrDtABmOgnx3as%2F9moqHLE%2BmC1EBzWFV9m8cBlZyYiCIpQBhK3HYZ5DMVRMksnX8iizueyIWmQpyZnm5QxD7LRG7N8%2BbdANG%2FgepAXz%2F6bUuWgC2DzNeTRXcHeYfwKoxV4AmpgDIolteMrk62M1Me%2BhTxm%2B5PV%2FLj0Mzv5UvFayeLxqEaKriYQkZWrfwZPmTNyy2Bir%2FkUarax%2FT4pllbgj7eEWhdWmY8V9cHfyRSqg%2BED3Wk1eZdlDi6ooEARMImbzckGOqUB72FNb4Ee1C5CuNWN2vLBvNZmx9Pp9yj5SR9WZnsEg1w3EMwY1XpSnlzrOgyOdCHVQAjhDqpJK3qYNpg0Paf5p2DyAEU97lGRTduffuxd1rYaAUqj4j8vLgyOqMGZ2jlFNajhXuMjCjz%2BfVa5vLfqx77V94CUTgkHVSZ%2BsGUK7U9rgKx5kwlLB6c%2BzcO3g5wZyRy6IcyoiQriWPpsxgLlfNR6aVMZ&X-Amz-Signature=0e1b1439f093fa5d1733b84aa16fbf71cc29497d1ed1c0ac55b1d9d53b8d9baf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKGZT5HR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T214042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEZuM43RgMJ4Tn9lBUmBOfnZa5rOSodxzCmDZP8eH07AiEAkj1D5xzQs7pqzc0sDYejV3fLK2srE9z8hRXBMT8tle0q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFlSZF6Z%2FRc7a9cjIyrcA6gHNwC4QO6sEWHtUpxkJ%2FTVqM4mODQQ7%2FJakf2%2BtgFEFNlo3yLdr12%2Bm2bybBrcdQQSZl9OrFfAEPB%2Bqz4q1jWlazfkNP0Lq79YwbhuF%2F6s0ULAZNLa%2B8L21%2FP6FWvftgS%2B5O0yBLmVy7Pnz5JqmVh8TPPKn6DHYQt1vT8D7mKojDzA89LwmlP3IVfYY79Ve0TWpmPpwWYF442AP8TIm52Wr64mBQ2xBGVm5J%2BUTmqhn3s2PgIsw0ORVYbiv%2Fz08rleMys3sP665sqpMzXT0QrCPwRpVVuvFeOfj%2FZ13%2BoLi56HnX7vSRZBNLsVbwIGbpm%2FCLkxCx2UAtCcsuxvHIzCw0Gcl%2FxHGVZzyVrzppwo5BSQTdwr3d0PERa3%2FdjrDtABmOgnx3as%2F9moqHLE%2BmC1EBzWFV9m8cBlZyYiCIpQBhK3HYZ5DMVRMksnX8iizueyIWmQpyZnm5QxD7LRG7N8%2BbdANG%2FgepAXz%2F6bUuWgC2DzNeTRXcHeYfwKoxV4AmpgDIolteMrk62M1Me%2BhTxm%2B5PV%2FLj0Mzv5UvFayeLxqEaKriYQkZWrfwZPmTNyy2Bir%2FkUarax%2FT4pllbgj7eEWhdWmY8V9cHfyRSqg%2BED3Wk1eZdlDi6ooEARMImbzckGOqUB72FNb4Ee1C5CuNWN2vLBvNZmx9Pp9yj5SR9WZnsEg1w3EMwY1XpSnlzrOgyOdCHVQAjhDqpJK3qYNpg0Paf5p2DyAEU97lGRTduffuxd1rYaAUqj4j8vLgyOqMGZ2jlFNajhXuMjCjz%2BfVa5vLfqx77V94CUTgkHVSZ%2BsGUK7U9rgKx5kwlLB6c%2BzcO3g5wZyRy6IcyoiQriWPpsxgLlfNR6aVMZ&X-Amz-Signature=5526dec8579881f0b08b16cdd9b5826892fce016a9f73f444dbc0ac4732aa91e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

