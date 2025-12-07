---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKBGHX54%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T034531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNJo8e2AD6847yuIHgrrDjKeM9MUMlcGrwIMh2uIr5KAIgDjUt51cmaRxhyQ9Bse%2Fqobe37XSr6j83D25K4RnvnD8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFtAZR0kf%2FhNvDqnRSrcA4eSngLCQhk3nB3Yn21YLXGgaDBbELf9VdiP%2BPxMHWDvXuOpnX65VjNn0%2FC8XcWNga6nylgfeJiqJCcSjPTRMYC3szYlml4KePexDlniCeiqyo%2B%2B8ChtQ6pL3MgF%2BY%2BuL9U8Vx2jud%2Be1fN57v%2FVxC6zGQcNmHmsxaGIDWRJK4JXGo6bEYYB8AiL6ywUCUNwEv3BQj3eT%2BgRXAEP93P8GIuu1Axm9dpMlRoNYWq6Vpb6Th7mZntzHHbuldEgrMxGXtzLKSH1jsa5ohDgMnvY6BQ9ZgYgc8zy4jl21j%2BLMFBviebnYqS33STMIwZcutcyBPsC75oxUHxh5%2Bh7n30QZFe2jBfIzukK2QyXmqyfVKOgH%2F1mlB4xC%2BGGWfqO%2FFpjUELkf%2FPfO0UGwpx9b8tC3nrS%2Bs2DUFc%2BzVgdHHRrcJbRqXkVgAF9%2BbmBapzAFrORHItOSzdgj1JHpyRQqwD57oQyAxhY%2FwifMZqvu9J24JUeYsqzj7ndx9wHpIF4wqRl%2FRDXVBTwJfAmLBZDOmDT7rIPelVCZjLtTsmm45c5L%2FS8b4wAqJbr0tK%2F3v3RhgrE9SOlwHDwSENfUsNCLzjRDDNH430aBTUIQEc4LfSdk7XAAVsNENZpvZc0GCX4MOj90skGOqUB1EhJMhDSSAFN%2BHzgE%2BIAsmMPX0iNgiobkKQLW4NXQnOurpL%2FQHbzTWrvPzwOOeC4eB9fhH1QerBC0CCz6oewChXjL7iKooYXFqTwwGW77dYHxEQTo953zdV%2FL3p4IrkVhwl4mbUxLfZENcE4f8UmrHDH1pIfjU9HqU%2F1L30WI%2BwGr%2F6E%2Fm8uWRRTq%2F%2FR1nWTrrTnW3tQZHvuxNjCNpe%2BKeS6qmlX&X-Amz-Signature=f92726c4e81d02f68654f7c35acfdf96180e666898f984bf284dcb78a5afc46f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKBGHX54%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T034531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNJo8e2AD6847yuIHgrrDjKeM9MUMlcGrwIMh2uIr5KAIgDjUt51cmaRxhyQ9Bse%2Fqobe37XSr6j83D25K4RnvnD8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFtAZR0kf%2FhNvDqnRSrcA4eSngLCQhk3nB3Yn21YLXGgaDBbELf9VdiP%2BPxMHWDvXuOpnX65VjNn0%2FC8XcWNga6nylgfeJiqJCcSjPTRMYC3szYlml4KePexDlniCeiqyo%2B%2B8ChtQ6pL3MgF%2BY%2BuL9U8Vx2jud%2Be1fN57v%2FVxC6zGQcNmHmsxaGIDWRJK4JXGo6bEYYB8AiL6ywUCUNwEv3BQj3eT%2BgRXAEP93P8GIuu1Axm9dpMlRoNYWq6Vpb6Th7mZntzHHbuldEgrMxGXtzLKSH1jsa5ohDgMnvY6BQ9ZgYgc8zy4jl21j%2BLMFBviebnYqS33STMIwZcutcyBPsC75oxUHxh5%2Bh7n30QZFe2jBfIzukK2QyXmqyfVKOgH%2F1mlB4xC%2BGGWfqO%2FFpjUELkf%2FPfO0UGwpx9b8tC3nrS%2Bs2DUFc%2BzVgdHHRrcJbRqXkVgAF9%2BbmBapzAFrORHItOSzdgj1JHpyRQqwD57oQyAxhY%2FwifMZqvu9J24JUeYsqzj7ndx9wHpIF4wqRl%2FRDXVBTwJfAmLBZDOmDT7rIPelVCZjLtTsmm45c5L%2FS8b4wAqJbr0tK%2F3v3RhgrE9SOlwHDwSENfUsNCLzjRDDNH430aBTUIQEc4LfSdk7XAAVsNENZpvZc0GCX4MOj90skGOqUB1EhJMhDSSAFN%2BHzgE%2BIAsmMPX0iNgiobkKQLW4NXQnOurpL%2FQHbzTWrvPzwOOeC4eB9fhH1QerBC0CCz6oewChXjL7iKooYXFqTwwGW77dYHxEQTo953zdV%2FL3p4IrkVhwl4mbUxLfZENcE4f8UmrHDH1pIfjU9HqU%2F1L30WI%2BwGr%2F6E%2Fm8uWRRTq%2F%2FR1nWTrrTnW3tQZHvuxNjCNpe%2BKeS6qmlX&X-Amz-Signature=bf184e72402080a4aef1f2a93eae894d89fe0310af1bbab3bba5790513a470ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

