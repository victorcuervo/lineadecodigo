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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEL6BYBE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T050703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIElwgv50bnhxPH%2FfwskFzTRjilqZ%2BrtC7CUYqnsVNSQ7AiAR%2BdfkZ4B1OsC5cxLpV4KdPvPpL%2BZ9vZLO9GPxschrHSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMfCc%2FApjDNjJShB4uKtwDe%2B52cXn2uH9wNvujZnYtrk9LQPD6eitJNjJ0rj3uAe%2F4F%2BfhpCJILPufqDFIdRqwIvtzWYZn6km0DxqS%2FtKeBpq3JwAOx%2FqxFpXkRn%2FYM5eF%2B8pIqsSLUNN0Z0B0E8CEVnlEL18l5TWl8WNuMThSeKEkkOfIdtvgapEVQtoBJD133D8rvrW4%2BWPceSJtKe2QuCykkwtRsxvJlTiMlRHNy056OEYntMZJ7f%2FGoyWwyDvHY0ZSSWYuMCS3koz3wayQUQQ6%2FZizI6wUcDHfjsPhxzpjmFuuM1m67SGv3bp0CWZGyU9%2BokCWUL53PjbZE1nwAIs7GvuxOtvvsDllnNdBRlJlD5imF3s6GtUyVAjsZiQCeW%2F5Bfu3hZsOmA3tOmHgAPrPkvnrAgPRfItxup38ZLKJ%2B%2Byoj50WdDGK8GYADFsfPQqyIGZkBqs0A4aHoPfTgsN5iePGmYstxifjYxODjdBvFWa%2FzGHd9F%2Fj%2FJ%2FfF0AyY0CA3r%2FxiI0UscGjl0QicQ8wcCFRVOxWORZsjhAIwtPWD8OG7neNTIWxH1QynxusBFxgTOReXJg0xE2pVOBcm7JvIkC99gGHvuQHt%2Fboq8ygVZMUFaze3CiRujkaf9a1aWPm3yE7B7DGAnIwl5a%2ByQY6pgF9qbpCGzgZOvTO1xL58PXAw%2FbYh4wIWk3Jn25eD9FZX4E1Tm9qbCufdKlfgKkMCg9oX7MyH9AkyE872EuCuREXa7OeHyAWEcl0OnJ6ZH03dNEJZu7rSll0bv6iqhlTUUOAmFqGzSrmDGdB2KprEdPPxNq5iTbkvDgZaQpxMaH3JFaIR7Qc44mUzlSYmW%2B5kKMGfYUQZHYIOYeNSL%2BzZukk%2FUvDt0EV&X-Amz-Signature=6f10a6f189db57ed4e2b7cd9dc88f570a16e7cdef2914c7da9abaeeccab6aff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEL6BYBE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T050703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIElwgv50bnhxPH%2FfwskFzTRjilqZ%2BrtC7CUYqnsVNSQ7AiAR%2BdfkZ4B1OsC5cxLpV4KdPvPpL%2BZ9vZLO9GPxschrHSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMfCc%2FApjDNjJShB4uKtwDe%2B52cXn2uH9wNvujZnYtrk9LQPD6eitJNjJ0rj3uAe%2F4F%2BfhpCJILPufqDFIdRqwIvtzWYZn6km0DxqS%2FtKeBpq3JwAOx%2FqxFpXkRn%2FYM5eF%2B8pIqsSLUNN0Z0B0E8CEVnlEL18l5TWl8WNuMThSeKEkkOfIdtvgapEVQtoBJD133D8rvrW4%2BWPceSJtKe2QuCykkwtRsxvJlTiMlRHNy056OEYntMZJ7f%2FGoyWwyDvHY0ZSSWYuMCS3koz3wayQUQQ6%2FZizI6wUcDHfjsPhxzpjmFuuM1m67SGv3bp0CWZGyU9%2BokCWUL53PjbZE1nwAIs7GvuxOtvvsDllnNdBRlJlD5imF3s6GtUyVAjsZiQCeW%2F5Bfu3hZsOmA3tOmHgAPrPkvnrAgPRfItxup38ZLKJ%2B%2Byoj50WdDGK8GYADFsfPQqyIGZkBqs0A4aHoPfTgsN5iePGmYstxifjYxODjdBvFWa%2FzGHd9F%2Fj%2FJ%2FfF0AyY0CA3r%2FxiI0UscGjl0QicQ8wcCFRVOxWORZsjhAIwtPWD8OG7neNTIWxH1QynxusBFxgTOReXJg0xE2pVOBcm7JvIkC99gGHvuQHt%2Fboq8ygVZMUFaze3CiRujkaf9a1aWPm3yE7B7DGAnIwl5a%2ByQY6pgF9qbpCGzgZOvTO1xL58PXAw%2FbYh4wIWk3Jn25eD9FZX4E1Tm9qbCufdKlfgKkMCg9oX7MyH9AkyE872EuCuREXa7OeHyAWEcl0OnJ6ZH03dNEJZu7rSll0bv6iqhlTUUOAmFqGzSrmDGdB2KprEdPPxNq5iTbkvDgZaQpxMaH3JFaIR7Qc44mUzlSYmW%2B5kKMGfYUQZHYIOYeNSL%2BzZukk%2FUvDt0EV&X-Amz-Signature=c359c65a58809978c0e7ffff1001464072778d47e5a598eac3a18ba6a41757ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

