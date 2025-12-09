---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GJMJHPO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T064822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6bQAFgLLIUfCOerFWBgFT7M0jApMm5hYuLwc7mhzSRAiEA6TdgvapQPKnAI0lCQDwfmwXdiuXGJMuh9I3yZqZFUL0qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFtxjzQWWqLvOaCgOSrcA6AL8K7ZZ1qsqNZBXEW4fNsJBnXbBp9xF0WokVkjw1HFw4xvRga4m77fB7mYOITfpIJL6h7t6nIS%2BdlXpknJu4lo6FmtjlBnHvc5tyxBE%2Fp9YeQvkxSljQa60IXi89QBXNYmPHmH9Sa4w6ApXiFmkM0wsRSNgtR9QaE5oSaygBnRZdZZBYbdyAhNkOLAKvzDG2aHx5e0IGcu3agKyWvofEB%2FNkoS4vUHMwZ0vZXnzOf%2FWSRJTzYqTuGXmIE9Rq0fVG6cHFUOXV0lVZsb%2BsLGTm9eojVUo%2F1HYGbUgXVQLI2ZkmtDbof1aSBQxGwg0TdGtnLzCVk%2FF32zTJvHAwEqyFSL%2BTMAKm5FnPPLc7P%2B4posEW4UBiu9Jl7%2BJ5mM8kpzJzt4HvCIjSOAMqo4GBzlRhl4zpCkwTkPVK%2FPLnfCmvU1vbJiio7T%2BX3AMgsxVXYFa9x6gMf%2BPF1UtIHeKVJVUUAZgOmtHqozS7N%2Fu7SXlkDDA0pVGqSrpjqw6LebG9OszGJsF4zdDtkZVuYXtYxMF%2FdixQfOgr%2F6aA5jUbGNcnKHsVH0v%2Fdk9ImVwOL4aso1l%2BCkRihNvPdeCq%2BHkzR7Z37a8QdoDuJZft8pNXyFHYm2QMvZogzRZ1gFHoQJMLmI38kGOqUBzD5AJKwNClQn0Jaot9zhr6X8nEd0dmGBDr6DNumBb5YwY2SfMd5d3Hggs7ia84gOpvc9faDWdAaqYxbraUrR1hNpy9%2F4eejcGYZHbNbiV4TcpMpWMhQk2rXeEiCjC1FzojXP%2BzRqRpn1rIzHRHfZAXtU%2FMtQ8vnWsOMviRGyvH1isHtF1EUAv9%2BVrhFe0OXIfLGyElpYHGrrpxtY8zeLafZCpKIb&X-Amz-Signature=90a1270b5d69d288d85806b89ca038102f719c4bccfc4c1e19bf6a3c490f27bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GJMJHPO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T064822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6bQAFgLLIUfCOerFWBgFT7M0jApMm5hYuLwc7mhzSRAiEA6TdgvapQPKnAI0lCQDwfmwXdiuXGJMuh9I3yZqZFUL0qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFtxjzQWWqLvOaCgOSrcA6AL8K7ZZ1qsqNZBXEW4fNsJBnXbBp9xF0WokVkjw1HFw4xvRga4m77fB7mYOITfpIJL6h7t6nIS%2BdlXpknJu4lo6FmtjlBnHvc5tyxBE%2Fp9YeQvkxSljQa60IXi89QBXNYmPHmH9Sa4w6ApXiFmkM0wsRSNgtR9QaE5oSaygBnRZdZZBYbdyAhNkOLAKvzDG2aHx5e0IGcu3agKyWvofEB%2FNkoS4vUHMwZ0vZXnzOf%2FWSRJTzYqTuGXmIE9Rq0fVG6cHFUOXV0lVZsb%2BsLGTm9eojVUo%2F1HYGbUgXVQLI2ZkmtDbof1aSBQxGwg0TdGtnLzCVk%2FF32zTJvHAwEqyFSL%2BTMAKm5FnPPLc7P%2B4posEW4UBiu9Jl7%2BJ5mM8kpzJzt4HvCIjSOAMqo4GBzlRhl4zpCkwTkPVK%2FPLnfCmvU1vbJiio7T%2BX3AMgsxVXYFa9x6gMf%2BPF1UtIHeKVJVUUAZgOmtHqozS7N%2Fu7SXlkDDA0pVGqSrpjqw6LebG9OszGJsF4zdDtkZVuYXtYxMF%2FdixQfOgr%2F6aA5jUbGNcnKHsVH0v%2Fdk9ImVwOL4aso1l%2BCkRihNvPdeCq%2BHkzR7Z37a8QdoDuJZft8pNXyFHYm2QMvZogzRZ1gFHoQJMLmI38kGOqUBzD5AJKwNClQn0Jaot9zhr6X8nEd0dmGBDr6DNumBb5YwY2SfMd5d3Hggs7ia84gOpvc9faDWdAaqYxbraUrR1hNpy9%2F4eejcGYZHbNbiV4TcpMpWMhQk2rXeEiCjC1FzojXP%2BzRqRpn1rIzHRHfZAXtU%2FMtQ8vnWsOMviRGyvH1isHtF1EUAv9%2BVrhFe0OXIfLGyElpYHGrrpxtY8zeLafZCpKIb&X-Amz-Signature=d700ac3f2ed3fbec8c082930902fb7854b26b6c9bab4ecbbde020f6f083a438e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

