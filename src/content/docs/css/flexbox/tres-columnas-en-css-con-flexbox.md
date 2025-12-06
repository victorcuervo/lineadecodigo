---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656OCA7VE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T232612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcKVvVS7VTy7BpzWEp6LyQuY1bYUuIFRLhaP6TlydtpwIhAN9C3wfs0GUQFf0xWgsbs4CccJU%2BQZnvLYa9Xoew7C7ZKv8DCH8QABoMNjM3NDIzMTgzODA1IgwnvYCOO87k2wAatNQq3AO%2FYz2rhJ0Agr8zdeNcUrCVKOxD93p%2BYh%2BknH6Qw1xv3kO8EVy%2BaC6avwdQzDTcT0bYRHgMMXJqcyIX0fYAbS81H98korFwaUqdrBY8ZHtjoOOPJhX7YxgD3jULO8m5Q8gf1WCwWgYasRVvHKUTH5K13zNhZ0uKi4olHlAYgUZTEP4Zh0cI3yn0sUCPZ4nB0yUKfU09F7mw9og6zK1OvNL5KhpKHoY2hsHAi8FhEljHlyHGQSpBc7KPIj1NHuOfB0SY5TsFTUYJslXEZxjs1LAAgbI2h0q3zRXJoRVqwONSOUVYmEdhPiwmmkcuP18gS87M9ikP4xdVPCBwEHzSfkPMiUf%2Bb1goVS0hCk3p8EnkgoUD00O9EgkMH90doZo3dmcMkbgD02DH1r71L8AqvNXOStOuC1ZZDuZ49QAGg9wMcqtCTCOeVLAjCDttoRORcr70tDXcRMkLiJdiPQV1HII2k8pOeN5j8BvKQmYdoeCdgntEEWnUKXAShGpVHOe7RR3ZBe%2BR2qStb3xE6%2B2borIbtHopecj6gplz1J1OXLj01FY50gEyfNd%2F1WJsvYaZShDPfKEHZV9VnJbLCyjnukOMMP0CBITEkKKCkFYaqSt4D3%2FO6liEOLUy2jKY3DCT09LJBjqkAcfeEbVx%2B8rWXTo1bN%2BacoAL3O3xfDmA8OhtIL7CGs1ivvKdGpqaBbHJDpQTft7eHgpPR0sfrqSP4tkYr%2Fu9TuVnVLjzmpLFiu1gI16L7oeP8AFQJrFEgOLE0fPuabCSGcNi4Mk3iui5jy1zK3rLpe4dRe24YKMF1bbSlkBMYERaYkWIQSiU6%2B%2FcHc1l91%2BoDJ3yApNsgJXqr%2FP6eT%2BHAAqIUAAC&X-Amz-Signature=f9d8c51046831f4ff673b7c753cea0cb9d2448fb83cd25e9e90f03797e057287&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656OCA7VE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T232612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcKVvVS7VTy7BpzWEp6LyQuY1bYUuIFRLhaP6TlydtpwIhAN9C3wfs0GUQFf0xWgsbs4CccJU%2BQZnvLYa9Xoew7C7ZKv8DCH8QABoMNjM3NDIzMTgzODA1IgwnvYCOO87k2wAatNQq3AO%2FYz2rhJ0Agr8zdeNcUrCVKOxD93p%2BYh%2BknH6Qw1xv3kO8EVy%2BaC6avwdQzDTcT0bYRHgMMXJqcyIX0fYAbS81H98korFwaUqdrBY8ZHtjoOOPJhX7YxgD3jULO8m5Q8gf1WCwWgYasRVvHKUTH5K13zNhZ0uKi4olHlAYgUZTEP4Zh0cI3yn0sUCPZ4nB0yUKfU09F7mw9og6zK1OvNL5KhpKHoY2hsHAi8FhEljHlyHGQSpBc7KPIj1NHuOfB0SY5TsFTUYJslXEZxjs1LAAgbI2h0q3zRXJoRVqwONSOUVYmEdhPiwmmkcuP18gS87M9ikP4xdVPCBwEHzSfkPMiUf%2Bb1goVS0hCk3p8EnkgoUD00O9EgkMH90doZo3dmcMkbgD02DH1r71L8AqvNXOStOuC1ZZDuZ49QAGg9wMcqtCTCOeVLAjCDttoRORcr70tDXcRMkLiJdiPQV1HII2k8pOeN5j8BvKQmYdoeCdgntEEWnUKXAShGpVHOe7RR3ZBe%2BR2qStb3xE6%2B2borIbtHopecj6gplz1J1OXLj01FY50gEyfNd%2F1WJsvYaZShDPfKEHZV9VnJbLCyjnukOMMP0CBITEkKKCkFYaqSt4D3%2FO6liEOLUy2jKY3DCT09LJBjqkAcfeEbVx%2B8rWXTo1bN%2BacoAL3O3xfDmA8OhtIL7CGs1ivvKdGpqaBbHJDpQTft7eHgpPR0sfrqSP4tkYr%2Fu9TuVnVLjzmpLFiu1gI16L7oeP8AFQJrFEgOLE0fPuabCSGcNi4Mk3iui5jy1zK3rLpe4dRe24YKMF1bbSlkBMYERaYkWIQSiU6%2B%2FcHc1l91%2BoDJ3yApNsgJXqr%2FP6eT%2BHAAqIUAAC&X-Amz-Signature=150a2728d595a1402876a16628a61b97dfe22c37eacbc593248f60ce7578bf4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

