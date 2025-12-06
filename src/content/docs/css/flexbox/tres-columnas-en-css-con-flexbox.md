---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T4Y35V4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T063020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy7EYRHenNjBNr2WalHWtPrX62QNJVj3SNhG2OOzVJ3AIgOQCRRm61xMzE%2FlRsTo3RTXNyhdoFucB0xc5OOvn4i4kq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDOADfEyV23CaDuw9JCrcA1bQN12Tk3TtqN9JG%2FQC%2B9bE%2FcBcZaA1qS4LE%2F3QFTfaibsMxRZAJ5jsSCKbF1koF3JVh9BqoV2KpsWVIexn9RL2%2FoyMlWEhSo6aLMyfUC%2FfVixERuPimYpGmshc8tmpNHUVv9R7jeQHymUfcOmL7jGHplUiS7S8UPQeiJwINSuGVplzXC7tlsOU49SPiw6xvcRMrMGjXw9F2ODnSmCUO0m26n2ztLhe3AXITCiE43UMiEqY2i%2BCtMtoT95%2FvoOwE6OmLaaLvI%2FGJa1J35gBMS9l%2BNd99e8Qgh0aT%2BE3JYDMDuARdyREsTGbCwNgA8R%2B0G05fb2dxvhenbN%2Fqv6vOhuspOAHKBf3R%2B%2FEENwmiA7wyVlImlA8naj6f69oeXr9WgHSURvxRaZUidtZD9LH8lEANjPZFqK0lFYuRSzCzCWw2eg0GX43ODlctRQjAli5Cx9wnovsFh2qCYCxPOUlNQ1%2BehNWLKWuE%2BB4FgLwcG8rICFWm0RBaUJ5Uai%2BHKKl3BSVSGR%2BcF6B4LnXD4fFJPZ%2Bzcc6iXdf80chF8MUp772ZIwUSMZFMVWMNG3%2FGCQSwUl9jJGt3RbPQqE3QlK2Q%2FaUnRZMOzEY3%2B5Q2bqmC7%2BHoedjCyq%2F1NVeOY7PMJH9zskGOqUBfna6S68UkLFSHvGCsqEw%2FY2nAYRIcteccfGTnbI%2FxNiD9Ti%2FiAyHrfR0gmp55lKbvX%2FOy2Wysh5j%2F6tbceaIw3O7sY5xthlWMvhMq4na5IAYFP%2BPbN50%2BboJBitVyZDfk7gLvG0BtIn42rBV%2F8p%2FpZyVc%2B%2F03hXy%2B0vamhCf7u2rcyq%2FkUdL6M3FNr4cGlJvKa7tEjuJtnUh%2BP7jJ%2FSbgqZkpzJj&X-Amz-Signature=3bb2fba64ffd52263ca526f06d2a6f1dcf5ce1567cbecb5346ef1f7d61731a99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T4Y35V4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T063020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy7EYRHenNjBNr2WalHWtPrX62QNJVj3SNhG2OOzVJ3AIgOQCRRm61xMzE%2FlRsTo3RTXNyhdoFucB0xc5OOvn4i4kq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDOADfEyV23CaDuw9JCrcA1bQN12Tk3TtqN9JG%2FQC%2B9bE%2FcBcZaA1qS4LE%2F3QFTfaibsMxRZAJ5jsSCKbF1koF3JVh9BqoV2KpsWVIexn9RL2%2FoyMlWEhSo6aLMyfUC%2FfVixERuPimYpGmshc8tmpNHUVv9R7jeQHymUfcOmL7jGHplUiS7S8UPQeiJwINSuGVplzXC7tlsOU49SPiw6xvcRMrMGjXw9F2ODnSmCUO0m26n2ztLhe3AXITCiE43UMiEqY2i%2BCtMtoT95%2FvoOwE6OmLaaLvI%2FGJa1J35gBMS9l%2BNd99e8Qgh0aT%2BE3JYDMDuARdyREsTGbCwNgA8R%2B0G05fb2dxvhenbN%2Fqv6vOhuspOAHKBf3R%2B%2FEENwmiA7wyVlImlA8naj6f69oeXr9WgHSURvxRaZUidtZD9LH8lEANjPZFqK0lFYuRSzCzCWw2eg0GX43ODlctRQjAli5Cx9wnovsFh2qCYCxPOUlNQ1%2BehNWLKWuE%2BB4FgLwcG8rICFWm0RBaUJ5Uai%2BHKKl3BSVSGR%2BcF6B4LnXD4fFJPZ%2Bzcc6iXdf80chF8MUp772ZIwUSMZFMVWMNG3%2FGCQSwUl9jJGt3RbPQqE3QlK2Q%2FaUnRZMOzEY3%2B5Q2bqmC7%2BHoedjCyq%2F1NVeOY7PMJH9zskGOqUBfna6S68UkLFSHvGCsqEw%2FY2nAYRIcteccfGTnbI%2FxNiD9Ti%2FiAyHrfR0gmp55lKbvX%2FOy2Wysh5j%2F6tbceaIw3O7sY5xthlWMvhMq4na5IAYFP%2BPbN50%2BboJBitVyZDfk7gLvG0BtIn42rBV%2F8p%2FpZyVc%2B%2F03hXy%2B0vamhCf7u2rcyq%2FkUdL6M3FNr4cGlJvKa7tEjuJtnUh%2BP7jJ%2FSbgqZkpzJj&X-Amz-Signature=da07251c4ec9fc2d6da2017f52ff8b92c13a741531930c0879b07986d0f8bf39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

