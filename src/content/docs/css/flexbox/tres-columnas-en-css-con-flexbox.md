---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO634ECY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T184928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMsY%2Bm1HYChZg0uK%2FAh4YN1whgJwHS%2Bol7G5vUSAf1oAIhALB3v1NxQ1OkddsCiXxm%2Bo3FaEMEUPpHzWMUHGQnG%2FZiKv8DCF4QABoMNjM3NDIzMTgzODA1Igy7gQFe1Dtet2226Goq3ANB%2Fm7shJQoEVULJnOx%2BoHIsjfw3Er7ZwMwpakE2amRvdegWgL9ARlOjQwKjHhY4jenGxAKKzMxX7A5z9Idu7wOOkt%2B1lNcrJg7y45cVBhTpTLja%2Bq2Vbh8nsNA%2BScqw5amqOnjVHD1Df4szsP8DSlVm4KJ9JBnScfwe05Di4vuwCjOUbc4fCjV147AszwXwERYDCItdUOmgcoxRouY5D838WyvatWKGsVdB%2BT97iRwSd36ICx3HITk7ohFcFEtFvTZKLk85eRem2GNQ63NZjMfvb5FTXzlrgYdYjUW2mYcn%2BU9J7hUh0r2zznOKkWiQ9bRBHNS73wippb7jiYLpXtZJ1RbbmnYkBk%2FNGdlqAZO3nFY3kqd5wt6zkVxlO1srAGydrUq5UI9G7UMtuflwoX%2BgPpbQ4tlHAdvW9YYJYADD3ImSiqyzrTLZKCTT2HPYY2aM2M8tJQ9TZpMbpm%2B39ewZsJCjifkLMY3wrtMhh5PWdvzawKdJPimG6ngw2VK47H0MGozF9wzL2ZhWJnwGhnQ79IVimo%2B5xQ7tBXBGRqBeFw7G94UPatP9huaMV2t0W7DOrxJgaeBl%2Fm3QHavfPqZbD9mbPbWWhFI4mwbROKIRP1foUgLGDeZXxwWRjClscvJBjqkAepI5KrPfzF%2BbCvwMnWtfiauwqaOuqlkLHi7yLyyW1%2BFURmsM3Jn5TBiG0Kq3wm61fS2LJsQZ%2Bgvwcmp0NAo86%2FcKNVJgrLrX08ZaLiwg%2B7QuA5g4%2BAm%2B0iGFWMuEotwCNvCChbA8SLpBKB7WVeG56jGN2m%2F83ua2RWhEzSo8hA9yVaY0UDKPtZVNtHsknF1Lie1QdLICkMPY3K6SWRG7g1c44fG&X-Amz-Signature=75ae02c6334dde3e262a68eff2642f8c6ce037381ace996afc488efc03f080fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO634ECY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T184928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMsY%2Bm1HYChZg0uK%2FAh4YN1whgJwHS%2Bol7G5vUSAf1oAIhALB3v1NxQ1OkddsCiXxm%2Bo3FaEMEUPpHzWMUHGQnG%2FZiKv8DCF4QABoMNjM3NDIzMTgzODA1Igy7gQFe1Dtet2226Goq3ANB%2Fm7shJQoEVULJnOx%2BoHIsjfw3Er7ZwMwpakE2amRvdegWgL9ARlOjQwKjHhY4jenGxAKKzMxX7A5z9Idu7wOOkt%2B1lNcrJg7y45cVBhTpTLja%2Bq2Vbh8nsNA%2BScqw5amqOnjVHD1Df4szsP8DSlVm4KJ9JBnScfwe05Di4vuwCjOUbc4fCjV147AszwXwERYDCItdUOmgcoxRouY5D838WyvatWKGsVdB%2BT97iRwSd36ICx3HITk7ohFcFEtFvTZKLk85eRem2GNQ63NZjMfvb5FTXzlrgYdYjUW2mYcn%2BU9J7hUh0r2zznOKkWiQ9bRBHNS73wippb7jiYLpXtZJ1RbbmnYkBk%2FNGdlqAZO3nFY3kqd5wt6zkVxlO1srAGydrUq5UI9G7UMtuflwoX%2BgPpbQ4tlHAdvW9YYJYADD3ImSiqyzrTLZKCTT2HPYY2aM2M8tJQ9TZpMbpm%2B39ewZsJCjifkLMY3wrtMhh5PWdvzawKdJPimG6ngw2VK47H0MGozF9wzL2ZhWJnwGhnQ79IVimo%2B5xQ7tBXBGRqBeFw7G94UPatP9huaMV2t0W7DOrxJgaeBl%2Fm3QHavfPqZbD9mbPbWWhFI4mwbROKIRP1foUgLGDeZXxwWRjClscvJBjqkAepI5KrPfzF%2BbCvwMnWtfiauwqaOuqlkLHi7yLyyW1%2BFURmsM3Jn5TBiG0Kq3wm61fS2LJsQZ%2Bgvwcmp0NAo86%2FcKNVJgrLrX08ZaLiwg%2B7QuA5g4%2BAm%2B0iGFWMuEotwCNvCChbA8SLpBKB7WVeG56jGN2m%2F83ua2RWhEzSo8hA9yVaY0UDKPtZVNtHsknF1Lie1QdLICkMPY3K6SWRG7g1c44fG&X-Amz-Signature=f46f57e50f48d88d63d761ff159587244fa132f9193d604485e10dfa45303518&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

