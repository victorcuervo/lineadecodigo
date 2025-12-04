---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIQOHVVW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T164035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrA%2BMmy88tRQPZJG6FR%2FUrk1d2gsNYZsXCw5%2Ba%2B%2BB%2FkAIhAPeFqvi7LWQELbASTcZtRyyNtGvGxMCFg0GTQhqbavVOKv8DCEkQABoMNjM3NDIzMTgzODA1IgwXdzLh%2BJRFpXE85uEq3AOQqOZ%2FPLj48BFF8x3jEGa6A9yaGSCW17mXK9uIrtKn4nDXREvUu%2FNRIYFBwCo4wkDXpi%2FWgjEG8HnHgx%2BX6l7lUfEzbptDJ2pwSmn6fYNaxcArjmXMgPbqWBmQqnEilWda4iHStQrzF2BB%2BG%2BSeMe5ksXxa7fGstEewsp16xQKkpbhBhEzsN1XdBgDfsFZLd229I0JOyUzXn1z9d8Gop3F4Zckd4zBseebvdKGvk9Tw7x0WME0UfCiFayREUmfeGvLgPL9ttna9xSdHXk5X4uQw%2BweWMreVLexDynPqO6tKxraDFSreu5okTiuC6dGNwV14pbp%2BD0WJuxvEoFIVcSSjg4sQchSNXHklHZwzkbOkrTynmMMhyd%2BehyNsp1dyFvrkVCGxZP0CLPmyVsL19psLazfy2eBn2trCcQCAZHxCo6%2BZ4k0MLvOAWWCrrVoa97ZxuaWUMCKI3HrItuhYKZRjNw%2FcQeJfHoytEZeH9q1hUfDperHrKfMm94PpRdGovklmUy0M6cblJF1Ag%2FoZPqC88PuiJLNV5pbAcy52Sfvh0tR7KW%2F63rXzjorA61CjdLDbrABqMrUxgm%2BENd%2F8cx%2FZuEgqfDbeBKJUk43nGRpgrkz7KVfsbt9xX0WVDD83MbJBjqkAfdEjhe2XdKvgYBZxpfoX%2BLFL%2FkBpUe%2FkuuJL7%2FUTUxGoIQgfT3tY3tMmmFAAYWclEM10zuc3FGGvyJfuSlpO2jV2zWkDERXp1cNgvGNmmsWDMGsnKYuXPC%2FzXnaYhML7ZUwaogXM%2BsmHdJmFARtmDmV25smVpfCDzqgbsc4mnfi%2F88KYFsgHXuyNNi5XjUc94fpAiIINJ3OEDm5s1j0J%2BrmmKgv&X-Amz-Signature=6071e77b3c2c39bc57a5108d0a96ea853ffb5b299fe599a7264e68cb98740126&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIQOHVVW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T164035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrA%2BMmy88tRQPZJG6FR%2FUrk1d2gsNYZsXCw5%2Ba%2B%2BB%2FkAIhAPeFqvi7LWQELbASTcZtRyyNtGvGxMCFg0GTQhqbavVOKv8DCEkQABoMNjM3NDIzMTgzODA1IgwXdzLh%2BJRFpXE85uEq3AOQqOZ%2FPLj48BFF8x3jEGa6A9yaGSCW17mXK9uIrtKn4nDXREvUu%2FNRIYFBwCo4wkDXpi%2FWgjEG8HnHgx%2BX6l7lUfEzbptDJ2pwSmn6fYNaxcArjmXMgPbqWBmQqnEilWda4iHStQrzF2BB%2BG%2BSeMe5ksXxa7fGstEewsp16xQKkpbhBhEzsN1XdBgDfsFZLd229I0JOyUzXn1z9d8Gop3F4Zckd4zBseebvdKGvk9Tw7x0WME0UfCiFayREUmfeGvLgPL9ttna9xSdHXk5X4uQw%2BweWMreVLexDynPqO6tKxraDFSreu5okTiuC6dGNwV14pbp%2BD0WJuxvEoFIVcSSjg4sQchSNXHklHZwzkbOkrTynmMMhyd%2BehyNsp1dyFvrkVCGxZP0CLPmyVsL19psLazfy2eBn2trCcQCAZHxCo6%2BZ4k0MLvOAWWCrrVoa97ZxuaWUMCKI3HrItuhYKZRjNw%2FcQeJfHoytEZeH9q1hUfDperHrKfMm94PpRdGovklmUy0M6cblJF1Ag%2FoZPqC88PuiJLNV5pbAcy52Sfvh0tR7KW%2F63rXzjorA61CjdLDbrABqMrUxgm%2BENd%2F8cx%2FZuEgqfDbeBKJUk43nGRpgrkz7KVfsbt9xX0WVDD83MbJBjqkAfdEjhe2XdKvgYBZxpfoX%2BLFL%2FkBpUe%2FkuuJL7%2FUTUxGoIQgfT3tY3tMmmFAAYWclEM10zuc3FGGvyJfuSlpO2jV2zWkDERXp1cNgvGNmmsWDMGsnKYuXPC%2FzXnaYhML7ZUwaogXM%2BsmHdJmFARtmDmV25smVpfCDzqgbsc4mnfi%2F88KYFsgHXuyNNi5XjUc94fpAiIINJ3OEDm5s1j0J%2BrmmKgv&X-Amz-Signature=6ed56dc53f84d32e5e12b248b5e557b4020afb7378a7a4fb19a0a3aa5df3bf3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

