---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4F2GCUH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T124159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIFOCyfb1bCxv8LoK90tpSVV%2FFcbv95I%2BPGs8DjVK%2Bb0qAiEAlx2fkF1xkPx3qkatw38s7PzlKNCb5WXnyEepJahuzBkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDH0FGtMRUdCCxifmZSrcA7lmFq6H%2FT0al%2Bl%2BumFYbS4GLhteqKohEOK0j2mZAiT6sy4%2BAfzlddFfa4Va%2BImcTA9nPc1hdABWzvwu%2Brg3AKQ4qsG730kV%2FhG2zjDgEAopLjTNCoTWEhGdYgFEQIKKwFVGYI%2BSSz33Vno7s050Gt%2Bk%2FCDwadIy%2FheV0HTeSR1RmHqIpp4Rs0EYLuzxzhBrQHMHfMAusTrnMemiK3QJmxd54MBFdLWUHoyv5ey79nCZBCyfLKWmrtuRwOqmnRKIKyDEN718CQXXJlc0ekr07EmY0qPMRbi81EOFhwM3BxoXyvsAhNG1vdKkXlg7JkiMEDwgnVbSu%2FlNJdVuHYk2WRJl%2B7YTPXxVBfAKoYpDDMdnREbh6CYEqY%2FUqIw%2BNCeA77GsuG2ZYdZZYY7GRqHH36SV6mdzdfj5zFa4wzGg4itjzLFnENirLOmALzCizl4ViYYiHzZKIgEP5Yr9FQzlI2NTWnFNQj5%2BV%2Be%2BkaTAvfenS3o6BZ5g4PkT4AC7AnqgsrT6YUcJF9vlgf827yqsUdBJnustxCbQ6Nye7giovNuaNJzUbDx%2BxkJ0yUnp9PdHl3jEaZJODsceE9mp1S5RfkF%2FuB7yvUKX6OHV3hWaqGlUM0heaFJIWSxGBfc%2BMMHMwMkGOqUBQK98n88On8qLOpeuCrd5JZLDzGs7WpU4%2FfeUz%2FqiTlgSCKFaOuSSrFNwP68q%2BO3jj%2FqM6zJGbf2F9esd4LdfORsSJSvjQVImHSr3vXAW36R5mnegiIiph0z%2F75muse03bG%2Blx7el%2B4wx7LlWzFB%2FK1v6Y39IGnjrngar5lmLU%2FU4p0e3giw3bLFInUQTAd0QQlmiiNHIFqJPqjC%2FKs9dQrbJdYkU&X-Amz-Signature=a1bc58416fb92bc79bb2f2a449e245c673a5040789c2ca4d5339f69b60962bf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4F2GCUH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T124159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIFOCyfb1bCxv8LoK90tpSVV%2FFcbv95I%2BPGs8DjVK%2Bb0qAiEAlx2fkF1xkPx3qkatw38s7PzlKNCb5WXnyEepJahuzBkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDH0FGtMRUdCCxifmZSrcA7lmFq6H%2FT0al%2Bl%2BumFYbS4GLhteqKohEOK0j2mZAiT6sy4%2BAfzlddFfa4Va%2BImcTA9nPc1hdABWzvwu%2Brg3AKQ4qsG730kV%2FhG2zjDgEAopLjTNCoTWEhGdYgFEQIKKwFVGYI%2BSSz33Vno7s050Gt%2Bk%2FCDwadIy%2FheV0HTeSR1RmHqIpp4Rs0EYLuzxzhBrQHMHfMAusTrnMemiK3QJmxd54MBFdLWUHoyv5ey79nCZBCyfLKWmrtuRwOqmnRKIKyDEN718CQXXJlc0ekr07EmY0qPMRbi81EOFhwM3BxoXyvsAhNG1vdKkXlg7JkiMEDwgnVbSu%2FlNJdVuHYk2WRJl%2B7YTPXxVBfAKoYpDDMdnREbh6CYEqY%2FUqIw%2BNCeA77GsuG2ZYdZZYY7GRqHH36SV6mdzdfj5zFa4wzGg4itjzLFnENirLOmALzCizl4ViYYiHzZKIgEP5Yr9FQzlI2NTWnFNQj5%2BV%2Be%2BkaTAvfenS3o6BZ5g4PkT4AC7AnqgsrT6YUcJF9vlgf827yqsUdBJnustxCbQ6Nye7giovNuaNJzUbDx%2BxkJ0yUnp9PdHl3jEaZJODsceE9mp1S5RfkF%2FuB7yvUKX6OHV3hWaqGlUM0heaFJIWSxGBfc%2BMMHMwMkGOqUBQK98n88On8qLOpeuCrd5JZLDzGs7WpU4%2FfeUz%2FqiTlgSCKFaOuSSrFNwP68q%2BO3jj%2FqM6zJGbf2F9esd4LdfORsSJSvjQVImHSr3vXAW36R5mnegiIiph0z%2F75muse03bG%2Blx7el%2B4wx7LlWzFB%2FK1v6Y39IGnjrngar5lmLU%2FU4p0e3giw3bLFInUQTAd0QQlmiiNHIFqJPqjC%2FKs9dQrbJdYkU&X-Amz-Signature=2da698f362da97b1ff6c0ec9ae1e2ac5366090b21241d5edb155f4a85fed56e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

