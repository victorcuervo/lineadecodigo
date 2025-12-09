---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZDM7BTW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T003847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4rDdPGQPJoOwx%2BOlQJuL5r6s6otgLyCnHR%2F%2FpZEgRpQIgZcTnUfB2alltNkLgfG01JpZ0uwTQR3u5oqRneG1%2Fs44qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpBFxBMFTuphiFmwircA0IHMzyNIa7mGQJLsYzPjfTm9fw0qXvee5aBoOAuL7wVOVUxE%2FydGM3w81yEhWBnq8StYw34%2FakRFJqKKOqpESjBwDO7nh0S%2Bmg0UqYKC4%2BJraootSoPkvk%2F0kKaeQjgTgJCOQiwt3EbhTCSYtd3r1MaolLTnZpLS7jiCP3kKQVQiLqH0O08TbTRPAs5uQ5cmu7PuYRANC%2FEKwjUzDHpyzw28Aasu95yA7P8D5cIryvOuqOx0XMzeof2rVJthThADK5OVp2Ni6rCETd%2BQvSaD3IgPxUaCpsvFFB04uWWnZvxN9kmzTxgtle3W5nBJsQpeKk%2FcZF1Og140NbWI2gvTPOfeBmqj9scrDRBkCLqBRu3ECyU05Jm0K7cnxHSra9q%2FZrGz8Nh6%2BCr9iZnjpk7LnT3Bpxo9jj3ctD%2BkvOw68LcoMAr5snzIJOEP3OMmQxhOJbdM5egeGHhU444o00SOapxeMf4BgkPqLK4uBjsmtzd8UMYvH0IOwRblphbPmRJXbCdV3CBQu1xm4DMB8FO1AtvH8qcDkA4VY0dsOD1uFUDpi%2FIUjsJdu39LEsFdWm6AAzTj5urGjHZOvPyLG74LpnFDn%2BKhpobOHtdjkgzQAEFBT5pHimHnrFUzhS4MLzC3ckGOqUBjKZQEc4NOFy%2FlZs5kbhZR4Fl9tePPEbdUtmukNtUh5k36RTj1nifY6HNbWEkdbao8fMhp0DVYQCqTakB0UzKhRo2esSkqPoZVXe8LHCZt3mHVJ7%2BEEPaWk1V7TAxboFEVMnN9RHMG10TUqwkey4e%2FlOsOs4MRBFwnoMJdWq%2FX7h5UYTEtGHwaLHDpPdHmIK5JRR%2BifB8fnrvu5ZrM%2FNvLNXW9sPR&X-Amz-Signature=f46a25e49014273e61d917bb1a089637f374156afb17e1796e0460333dc88748&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZDM7BTW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T003847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4rDdPGQPJoOwx%2BOlQJuL5r6s6otgLyCnHR%2F%2FpZEgRpQIgZcTnUfB2alltNkLgfG01JpZ0uwTQR3u5oqRneG1%2Fs44qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpBFxBMFTuphiFmwircA0IHMzyNIa7mGQJLsYzPjfTm9fw0qXvee5aBoOAuL7wVOVUxE%2FydGM3w81yEhWBnq8StYw34%2FakRFJqKKOqpESjBwDO7nh0S%2Bmg0UqYKC4%2BJraootSoPkvk%2F0kKaeQjgTgJCOQiwt3EbhTCSYtd3r1MaolLTnZpLS7jiCP3kKQVQiLqH0O08TbTRPAs5uQ5cmu7PuYRANC%2FEKwjUzDHpyzw28Aasu95yA7P8D5cIryvOuqOx0XMzeof2rVJthThADK5OVp2Ni6rCETd%2BQvSaD3IgPxUaCpsvFFB04uWWnZvxN9kmzTxgtle3W5nBJsQpeKk%2FcZF1Og140NbWI2gvTPOfeBmqj9scrDRBkCLqBRu3ECyU05Jm0K7cnxHSra9q%2FZrGz8Nh6%2BCr9iZnjpk7LnT3Bpxo9jj3ctD%2BkvOw68LcoMAr5snzIJOEP3OMmQxhOJbdM5egeGHhU444o00SOapxeMf4BgkPqLK4uBjsmtzd8UMYvH0IOwRblphbPmRJXbCdV3CBQu1xm4DMB8FO1AtvH8qcDkA4VY0dsOD1uFUDpi%2FIUjsJdu39LEsFdWm6AAzTj5urGjHZOvPyLG74LpnFDn%2BKhpobOHtdjkgzQAEFBT5pHimHnrFUzhS4MLzC3ckGOqUBjKZQEc4NOFy%2FlZs5kbhZR4Fl9tePPEbdUtmukNtUh5k36RTj1nifY6HNbWEkdbao8fMhp0DVYQCqTakB0UzKhRo2esSkqPoZVXe8LHCZt3mHVJ7%2BEEPaWk1V7TAxboFEVMnN9RHMG10TUqwkey4e%2FlOsOs4MRBFwnoMJdWq%2FX7h5UYTEtGHwaLHDpPdHmIK5JRR%2BifB8fnrvu5ZrM%2FNvLNXW9sPR&X-Amz-Signature=99bb65ee11b156fc0c486144da038d733e7a641dcf7a50478f33aeffccfa7fa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

