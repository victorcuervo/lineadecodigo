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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5IV2M2F%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T071956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIAD3lYHuZjlZuAb%2BT2HTnCGX62ory9Iink59WFLZFnA5AiAvvWORmAOhG%2FmDeNC08RY09AmUvzP7Uc1IkZy4Vf97LSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMrCcEFx7LnUobz8bXKtwDk7gG%2B0OOknYyyFH65EAcy2vd7tn16TF1oinD2H8DZkI91yd03XBjXGf7xYC%2BexZYd9p9aPxpY0j8Hk1KnSoQVkdtN1qW19pCU2%2Bn9N4FrKwcBg0wvji4Y6BpPU6MGLOlKZUnhla7c6r%2Bzvv6GE63okqHcGGHOnPw2oqHemh8t%2BufNrbnp4v0BjEGANtVC6MC8y9CYDvPhmUDyRvXMEo8v9ilo%2BzXpczKtYvbKMQH%2BlZf9FhIc1bE%2FAwuvQH8uFXbweCPHlGuGk%2ByBWogX8GM4qAKKN7zwW4sYGYlGHIHbNGU8m2nlxcNABASti%2BtUmVYQiH0xBmAsYwA9K3X5ZT77cWOVR%2FTa6R11fMDxQ8oELzUZwygnVZKIIzWHG83B0qf%2FGo7ntbZmtiz9WhqyKh%2FgtbiaTWSgqY14dKlf8shr0t6H94LLlDYKWZ4lrXSK7SEFhtvOHAONd4Jupw5lumUGgpzvmQnrXomjdQRbdTh9XzorzXqYNPL5lblrosrmqTBVr%2FCEQb9BzipeX5QwFMdWrsWkGA6utTFXjUuD%2FIk%2BQf754AVTLjD5%2Fu2m54%2FeU%2FOjxGwA8B5BoV9P4zcGykTaTF%2FutaVcjgTXSed79HCrgPTeg27GfiwyCAzvogwh7m%2FyQY6pgHGGbxGXwLnprbMPXNeDrPm0Ej0oLGQ0HTDTU%2BCUzCNZ7bRL6%2FgyuZUNMpy8goxu2qKtUU%2FiStju6mHltOyBWpgUz46Bnp8fZazAAu4A8LGf4QqDDDNL5GhbOE9Ty5ZHaMrdFo6dalZ6DPQMvMTxADb6hapvaO5xy9y3OA1LWRvg05saoBPOLpOmOAUHXB0xVe5p66u0GwW0Bard8ooJXCXZMVyQhov&X-Amz-Signature=3dc2e5ff51cb83f770da9ae711e6fbc9768fecdfdf3a7e9787a0605eb3694bfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5IV2M2F%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T071956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIAD3lYHuZjlZuAb%2BT2HTnCGX62ory9Iink59WFLZFnA5AiAvvWORmAOhG%2FmDeNC08RY09AmUvzP7Uc1IkZy4Vf97LSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMrCcEFx7LnUobz8bXKtwDk7gG%2B0OOknYyyFH65EAcy2vd7tn16TF1oinD2H8DZkI91yd03XBjXGf7xYC%2BexZYd9p9aPxpY0j8Hk1KnSoQVkdtN1qW19pCU2%2Bn9N4FrKwcBg0wvji4Y6BpPU6MGLOlKZUnhla7c6r%2Bzvv6GE63okqHcGGHOnPw2oqHemh8t%2BufNrbnp4v0BjEGANtVC6MC8y9CYDvPhmUDyRvXMEo8v9ilo%2BzXpczKtYvbKMQH%2BlZf9FhIc1bE%2FAwuvQH8uFXbweCPHlGuGk%2ByBWogX8GM4qAKKN7zwW4sYGYlGHIHbNGU8m2nlxcNABASti%2BtUmVYQiH0xBmAsYwA9K3X5ZT77cWOVR%2FTa6R11fMDxQ8oELzUZwygnVZKIIzWHG83B0qf%2FGo7ntbZmtiz9WhqyKh%2FgtbiaTWSgqY14dKlf8shr0t6H94LLlDYKWZ4lrXSK7SEFhtvOHAONd4Jupw5lumUGgpzvmQnrXomjdQRbdTh9XzorzXqYNPL5lblrosrmqTBVr%2FCEQb9BzipeX5QwFMdWrsWkGA6utTFXjUuD%2FIk%2BQf754AVTLjD5%2Fu2m54%2FeU%2FOjxGwA8B5BoV9P4zcGykTaTF%2FutaVcjgTXSed79HCrgPTeg27GfiwyCAzvogwh7m%2FyQY6pgHGGbxGXwLnprbMPXNeDrPm0Ej0oLGQ0HTDTU%2BCUzCNZ7bRL6%2FgyuZUNMpy8goxu2qKtUU%2FiStju6mHltOyBWpgUz46Bnp8fZazAAu4A8LGf4QqDDDNL5GhbOE9Ty5ZHaMrdFo6dalZ6DPQMvMTxADb6hapvaO5xy9y3OA1LWRvg05saoBPOLpOmOAUHXB0xVe5p66u0GwW0Bard8ooJXCXZMVyQhov&X-Amz-Signature=beee7b79b43c0f90b3eeeae62e6ca9f8e0cd027b150fda97e47f382d3875b045&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

