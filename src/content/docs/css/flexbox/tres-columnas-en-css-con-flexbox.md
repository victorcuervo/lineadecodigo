---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3YGYSYU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbdfMO2d80mPQc%2BcBUKbC6OgDupVod48g1tTiN%2FPyJHAiEAsDCsovJxKK%2FORR%2F6rghqR1D5FGxOl7236StzIQ7D3w0q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMS1aJiXY6VSje9z0ircAx9b62DRwGg7vwO6ZgMANhsrbC%2ByVbkosqTLBm%2BXw%2FZrTLERFEyiminyec9n0klBO6r1%2FXkmyk%2Bla4f8UHRAH0cSEoEZP%2F2pyVmjjSUMHexnEYhvDkg38aj1jdEWNlQ9CZCplfEFX47eM8uFzf3F%2FESsJy0WAb%2Flj3hiJZsCoJoC3aq5m5KZcU1lqKoTsPUbcopTRhqpbDLHBzXG%2FpGemYa%2B9XDVtr9hcNh6P%2FOGfzYQ9ymt%2FGzslL2wfc6f7K%2F1lsmY7VzodNaiWbjm1BJWSPCZTu6R5YJF39%2BfnVgKcfEX8lZPaudF8zS7fzXbirR%2FrJ2lwUPJOba9SGGYugD12QLPvECqcnlmbeJOFhpRcP5gskPjTOdF%2Bjriv2uKqjC%2BaS4q0wQ52IXcJ5JLt17JBq%2FR6CIVvOLjZVZRZaTADV0H9LJgHfl7Ivj6OkwyNJmNvSuSPmmKLFmz0bDNqMvv9RZPmD9CP8ze7f98qWCPtEDD6cp8ldDSkrmZSsXG5uZ4TvJTOnPYJHVe36lra9b4M6O7YzcUhO7LSH4iQ0%2BQSlUFe82oS6qkEHqfeC0TIl%2FWLIPjDuEfP7yznEW60ZvtITjploKrKIOa5oFguaUrv7rRNhWz3sYwMo049t%2BMMJ7ezskGOqUBNgji4mEKo4pbqblMtZeXFBpWX%2Fib0GGp9yQOqJC%2BzNkQHE0HewsqnyenK2bIpc0RzIKhwtqL%2FPPK%2FPs%2BFYbyronxY1xqUq4tECwH88XnKxupV9AlMN50SwkmpfodiW5F8iucWc6imDOXtX%2FJ8bGKVeUxURPvrZCP1BGflfdHt9BE42OMfC%2Fdwoo7pJrs%2BNxmUE%2Fryky4COmO3tb01DEKmoZa7wbo&X-Amz-Signature=fc5c2981fbfa80405f0c055336bc50c6b388f4677e0559559b794951e052fead&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3YGYSYU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbdfMO2d80mPQc%2BcBUKbC6OgDupVod48g1tTiN%2FPyJHAiEAsDCsovJxKK%2FORR%2F6rghqR1D5FGxOl7236StzIQ7D3w0q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMS1aJiXY6VSje9z0ircAx9b62DRwGg7vwO6ZgMANhsrbC%2ByVbkosqTLBm%2BXw%2FZrTLERFEyiminyec9n0klBO6r1%2FXkmyk%2Bla4f8UHRAH0cSEoEZP%2F2pyVmjjSUMHexnEYhvDkg38aj1jdEWNlQ9CZCplfEFX47eM8uFzf3F%2FESsJy0WAb%2Flj3hiJZsCoJoC3aq5m5KZcU1lqKoTsPUbcopTRhqpbDLHBzXG%2FpGemYa%2B9XDVtr9hcNh6P%2FOGfzYQ9ymt%2FGzslL2wfc6f7K%2F1lsmY7VzodNaiWbjm1BJWSPCZTu6R5YJF39%2BfnVgKcfEX8lZPaudF8zS7fzXbirR%2FrJ2lwUPJOba9SGGYugD12QLPvECqcnlmbeJOFhpRcP5gskPjTOdF%2Bjriv2uKqjC%2BaS4q0wQ52IXcJ5JLt17JBq%2FR6CIVvOLjZVZRZaTADV0H9LJgHfl7Ivj6OkwyNJmNvSuSPmmKLFmz0bDNqMvv9RZPmD9CP8ze7f98qWCPtEDD6cp8ldDSkrmZSsXG5uZ4TvJTOnPYJHVe36lra9b4M6O7YzcUhO7LSH4iQ0%2BQSlUFe82oS6qkEHqfeC0TIl%2FWLIPjDuEfP7yznEW60ZvtITjploKrKIOa5oFguaUrv7rRNhWz3sYwMo049t%2BMMJ7ezskGOqUBNgji4mEKo4pbqblMtZeXFBpWX%2Fib0GGp9yQOqJC%2BzNkQHE0HewsqnyenK2bIpc0RzIKhwtqL%2FPPK%2FPs%2BFYbyronxY1xqUq4tECwH88XnKxupV9AlMN50SwkmpfodiW5F8iucWc6imDOXtX%2FJ8bGKVeUxURPvrZCP1BGflfdHt9BE42OMfC%2Fdwoo7pJrs%2BNxmUE%2Fryky4COmO3tb01DEKmoZa7wbo&X-Amz-Signature=97963550b6f697dae68430bc5ea2b3b6afc2b5e0c8c26081b5801ee930c7b554&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

