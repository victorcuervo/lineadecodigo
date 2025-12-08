---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZCGPXFZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T153244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeVkYRVGfsCcPiVQ2L7wDrpYiadStKZNS5Qa6pUtzJGAIgbSxOYDy63%2FuEIX9%2BpSzJEmVMkas1X0%2BDEbmw2IzF04YqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH9px7BcZgF9qzKEEircA3K5sw9YqPffKU%2BLbijWWV7q3S%2BUeQ9YTY8LKjcsAeQClv6PI1%2BU0o6oltSE6VRXjwp5lilYNHQ4%2Bq%2BUtXuDk8r%2BzAJ7fwRafKFPFZyF1QtIoxEEoLySNUiST%2BDfYwFzhb1HUORXZK05RabeMJGd%2BoB5X9uT2opZ2wZF76YPY0D%2F2rG8w2XTYPG4UN6bo7S3m8WogojgL%2BP%2B8%2FxxpqwA1zbCIkLpSZgw6ecjRt2xghNSO4Xt7dULXsL5GFSxhZaqHvH7IA2kNuh%2FTDk5LrUJv7JHOFtMeTXUYnfslkzOdKYy5Fn79SFROO7tAaX8cIaS7GryOb%2FuOcdvwOkjyMWFUbKHxe06UHTiplf%2FQfuzXlqKAgWWgn9ZkWCgj6pRBSTjShnB7FMcigW8%2B%2F2MqY6yDWYp31%2B6X4vXafM7aLoYWNYnU%2FkwvvDbxgaIFAp5YhrpoDFWBAuaRSvhvC%2FMfL5OdSonVV8XUGaH%2FMTJGPrt4bW1b5xMCmIS974reWDqkSvyrxQL%2Bjqf3CKkws6lKuB3OK%2Bqyqp9dpq9IcCJmkZanDZq3ERsRO%2BiwcL6cM%2BwHc8qMAKBbyDXc%2BReLOaCJxYvvtbOfQNjX2TYzzUGqKyPcHGbYj4C9AbbXYfGn5vjMNrB28kGOqUBhZmzISl9q0JD2xnLI%2BpLJkwJpro5l51u%2BVgUnCXbISeYcV3b2fS%2Ff%2BJUZmvM4jBS0kvz1vFoYpUAsTYR%2BNVJCQ6%2BEM8kj7rk75djQMw%2FSD2ejCX7IqE8GSiBiGq1UwoGjmJtMJwrO6%2FfjtlGGLYr4ZSe5jmQeDcqi3n2lMe5d43RCtsITJf26Y5ODOF3%2BlngueCElOX4oCT%2FpQkyJGUHXPnmvv%2FF&X-Amz-Signature=2eaa995f427f95869ee03f76ac29b4046714fb95cf75ba3b971c3f238ddde66c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZCGPXFZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T153244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeVkYRVGfsCcPiVQ2L7wDrpYiadStKZNS5Qa6pUtzJGAIgbSxOYDy63%2FuEIX9%2BpSzJEmVMkas1X0%2BDEbmw2IzF04YqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH9px7BcZgF9qzKEEircA3K5sw9YqPffKU%2BLbijWWV7q3S%2BUeQ9YTY8LKjcsAeQClv6PI1%2BU0o6oltSE6VRXjwp5lilYNHQ4%2Bq%2BUtXuDk8r%2BzAJ7fwRafKFPFZyF1QtIoxEEoLySNUiST%2BDfYwFzhb1HUORXZK05RabeMJGd%2BoB5X9uT2opZ2wZF76YPY0D%2F2rG8w2XTYPG4UN6bo7S3m8WogojgL%2BP%2B8%2FxxpqwA1zbCIkLpSZgw6ecjRt2xghNSO4Xt7dULXsL5GFSxhZaqHvH7IA2kNuh%2FTDk5LrUJv7JHOFtMeTXUYnfslkzOdKYy5Fn79SFROO7tAaX8cIaS7GryOb%2FuOcdvwOkjyMWFUbKHxe06UHTiplf%2FQfuzXlqKAgWWgn9ZkWCgj6pRBSTjShnB7FMcigW8%2B%2F2MqY6yDWYp31%2B6X4vXafM7aLoYWNYnU%2FkwvvDbxgaIFAp5YhrpoDFWBAuaRSvhvC%2FMfL5OdSonVV8XUGaH%2FMTJGPrt4bW1b5xMCmIS974reWDqkSvyrxQL%2Bjqf3CKkws6lKuB3OK%2Bqyqp9dpq9IcCJmkZanDZq3ERsRO%2BiwcL6cM%2BwHc8qMAKBbyDXc%2BReLOaCJxYvvtbOfQNjX2TYzzUGqKyPcHGbYj4C9AbbXYfGn5vjMNrB28kGOqUBhZmzISl9q0JD2xnLI%2BpLJkwJpro5l51u%2BVgUnCXbISeYcV3b2fS%2Ff%2BJUZmvM4jBS0kvz1vFoYpUAsTYR%2BNVJCQ6%2BEM8kj7rk75djQMw%2FSD2ejCX7IqE8GSiBiGq1UwoGjmJtMJwrO6%2FfjtlGGLYr4ZSe5jmQeDcqi3n2lMe5d43RCtsITJf26Y5ODOF3%2BlngueCElOX4oCT%2FpQkyJGUHXPnmvv%2FF&X-Amz-Signature=ffe5dac594c1ba4408a0b3793aa380317d859def10703d73b5f1d957ac045835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

