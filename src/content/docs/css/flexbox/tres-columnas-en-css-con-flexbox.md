---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ2SDMFO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T201954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG9xye7QXaA%2FsW%2BVC5DwrChb6Lqf0kbrXTRipdNon%2FuwIhAPjXpF4gNu%2FOaB10LCf39HAoGhwoo4ozUoW%2BRn8AECtJKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXLNylZvelxaa60pQq3AOAE%2Bh%2BMfLjKAj1aad%2B%2BJQqAlQVbHOTewbLAklvI9yEFY41yJ4aB2bm%2BI%2B7sTWk0yTWt5XHgJhvL4T1Gl9sbfPuA1A8oRFwQb81PsNA9ZdzFBdtm8x%2BzUyoSYGpxcC1HhEBD8zuGZe3CYnfSB%2Bk9uuN58dKqnFv0q6BX6x8rvh2UF3OeP9lt%2BSzBHfyAg17hlTpaCXx8oV%2FDNEkZd5%2FIprj4kTf5wslRauNamjdqz3VrraH9jm2mZGpxjm4wEv2ISqnnpZAgbG3ZY6TcYSPYVJpna%2BcwrojGhkj2cUfzt8jD3wE%2Blwkkyfo94FT1B8gHbYySnYF%2Fp9X2ZWJyQ1nLHQhRQu9rIKWGVMUuc2Mx1PPcH%2FzIiiHyt6i7H%2FtB%2BEFbUzXn%2BvBkAZu4GyzhqRZeRIuiqB0jFpIkc4vI8on%2Fu%2FCQh%2BIJilnOYXQLCepSPPA8z5xHPTyZfhTvPev4BjUrhDqfbAbkatPySbgSIS%2BLoZnOVdfKhuDuGRqqZJM4Vn6QeCEeo%2Bd4iMst3NDZO0m%2Fpe0EfTqxWwSUogiXAVw0N5Iz81NTRY8LPrsNMOVAsv9I415Z5V8UNI653Ku103qPD6DCk6DKXyDKYRkW4tDWKpfMFjkp1VtVhDYyBCQETCr3dzJBjqkAVUyI5qREcIekcsVz%2FXa3j0QWUKerFSM7na9C%2BOR3MEBJD1%2FmD949eSRdwYWeHnFl63Au%2BHlf%2BqJlctF89k3waexeAoEUGhWBU1U6g5JgRn8Qc07r0c0KA919u2dQgrr%2BDHM%2BWhLG0uUnAiiLtk7VCJ9If7OSNqW2ToiDKdax8CEQAwn1q0090zv%2Fmk4YP15j5oUmcLvxItCqU4Bq4Z%2BEBiO10TV&X-Amz-Signature=8031bfa7bdb2aa83e9287819079e6590f5a5028668259cbd0f082d8570380835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ2SDMFO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T201954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG9xye7QXaA%2FsW%2BVC5DwrChb6Lqf0kbrXTRipdNon%2FuwIhAPjXpF4gNu%2FOaB10LCf39HAoGhwoo4ozUoW%2BRn8AECtJKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXLNylZvelxaa60pQq3AOAE%2Bh%2BMfLjKAj1aad%2B%2BJQqAlQVbHOTewbLAklvI9yEFY41yJ4aB2bm%2BI%2B7sTWk0yTWt5XHgJhvL4T1Gl9sbfPuA1A8oRFwQb81PsNA9ZdzFBdtm8x%2BzUyoSYGpxcC1HhEBD8zuGZe3CYnfSB%2Bk9uuN58dKqnFv0q6BX6x8rvh2UF3OeP9lt%2BSzBHfyAg17hlTpaCXx8oV%2FDNEkZd5%2FIprj4kTf5wslRauNamjdqz3VrraH9jm2mZGpxjm4wEv2ISqnnpZAgbG3ZY6TcYSPYVJpna%2BcwrojGhkj2cUfzt8jD3wE%2Blwkkyfo94FT1B8gHbYySnYF%2Fp9X2ZWJyQ1nLHQhRQu9rIKWGVMUuc2Mx1PPcH%2FzIiiHyt6i7H%2FtB%2BEFbUzXn%2BvBkAZu4GyzhqRZeRIuiqB0jFpIkc4vI8on%2Fu%2FCQh%2BIJilnOYXQLCepSPPA8z5xHPTyZfhTvPev4BjUrhDqfbAbkatPySbgSIS%2BLoZnOVdfKhuDuGRqqZJM4Vn6QeCEeo%2Bd4iMst3NDZO0m%2Fpe0EfTqxWwSUogiXAVw0N5Iz81NTRY8LPrsNMOVAsv9I415Z5V8UNI653Ku103qPD6DCk6DKXyDKYRkW4tDWKpfMFjkp1VtVhDYyBCQETCr3dzJBjqkAVUyI5qREcIekcsVz%2FXa3j0QWUKerFSM7na9C%2BOR3MEBJD1%2FmD949eSRdwYWeHnFl63Au%2BHlf%2BqJlctF89k3waexeAoEUGhWBU1U6g5JgRn8Qc07r0c0KA919u2dQgrr%2BDHM%2BWhLG0uUnAiiLtk7VCJ9If7OSNqW2ToiDKdax8CEQAwn1q0090zv%2Fmk4YP15j5oUmcLvxItCqU4Bq4Z%2BEBiO10TV&X-Amz-Signature=140f39a0aa9b8291eec0d29a6f2d48a6a59d3c0089bf0bedb3a8213a5edf6dcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

