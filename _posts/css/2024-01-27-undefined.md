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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OUB2ADZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T015551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHuvgZtWSq22O6OrsVFHOKD%2BWu%2FvjacLrEA9uojVImHlAiAZevuZwTZ0d4noz0DF1IFejZghAVQaD3%2FlqnqA3X2b2ir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM8W5BISxmqow3lm5IKtwD1dq932YIqJhtOgAH9bTGl79pO3WvgBjT57dD%2FvIN16nl%2BiALhY5pnUipdF4jHpOWuUXd%2FIesMwVa4Bh5Z5EkI3dYtx%2B6QBEZIWoDEVsWgzvq5QZHWSZkJGd00HyGmodLpURSPQOwdBIDfvmElZU%2BFrQ%2F3FEcZtjYeu9vSNnwqwDR00xmS49FmFkTZml26G06qMhVA8It1gm%2FDe7rxQoPXLWijqnsEA2PazmNvtS0DxY80J3%2BZ6O1IBxTjbBukQqhiKfgwqeaygjlQCkVc0K%2F48gSIaBuch%2BYrQUu5dnxNu7uru8igNa%2FpVOrT%2FEjeg4gEXD7bqyLRGlsMSkyd1O7ABVT8%2FKxI%2FdN5K1yeWa7s685T0qRtRV%2FrEuC24kMykWDfqn%2BN9nojEA0%2FwHcpiSsoqjBuYRwwqVF1KWqWNiyDwanP%2FQhKzV1C7wxrXjY2sU6PSRjvuVLm%2FR4CUNgddpvBKn%2BXy41GfJOaxY8rXsKXKjbF8HFy6Ak7b0la2%2FfMBf626yGdq3eIh8dPBQP%2FIzeuxHPOW6FUj2lrKaT7bFP1sGp5Ob6bU02d8UfRZbuX0axkZ4JdbeuU86Vu2AsG9j1gVwWjtDLIjFhOb%2BuUCjA22tgTIciTpHbs0o84Zwwi5W%2ByQY6pgGq9p%2FGh0gk9AsL4uHQ99rKlrBuVUIjsTGFkDlGkErnRWI5EvK9JvmvDA0qnz43LUx1eKoly0n5ufIVo9n0pzn7oENr1EZBf3Codb4OV7KqS%2FchI9WuqNicWapS9cPTJe98GGZyZfJn30FneK7euUMaP1yYuefQQojeQVV1hnWy6xobioQkjD7Km6dhbH3oB36GAItH6INdXNIfJ3p9QskzCs4Je2uz&X-Amz-Signature=57ae4eedef1469cd5c2c262b20d0add6537bcb413c4521f326071f6f2a93b3a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OUB2ADZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T015551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHuvgZtWSq22O6OrsVFHOKD%2BWu%2FvjacLrEA9uojVImHlAiAZevuZwTZ0d4noz0DF1IFejZghAVQaD3%2FlqnqA3X2b2ir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM8W5BISxmqow3lm5IKtwD1dq932YIqJhtOgAH9bTGl79pO3WvgBjT57dD%2FvIN16nl%2BiALhY5pnUipdF4jHpOWuUXd%2FIesMwVa4Bh5Z5EkI3dYtx%2B6QBEZIWoDEVsWgzvq5QZHWSZkJGd00HyGmodLpURSPQOwdBIDfvmElZU%2BFrQ%2F3FEcZtjYeu9vSNnwqwDR00xmS49FmFkTZml26G06qMhVA8It1gm%2FDe7rxQoPXLWijqnsEA2PazmNvtS0DxY80J3%2BZ6O1IBxTjbBukQqhiKfgwqeaygjlQCkVc0K%2F48gSIaBuch%2BYrQUu5dnxNu7uru8igNa%2FpVOrT%2FEjeg4gEXD7bqyLRGlsMSkyd1O7ABVT8%2FKxI%2FdN5K1yeWa7s685T0qRtRV%2FrEuC24kMykWDfqn%2BN9nojEA0%2FwHcpiSsoqjBuYRwwqVF1KWqWNiyDwanP%2FQhKzV1C7wxrXjY2sU6PSRjvuVLm%2FR4CUNgddpvBKn%2BXy41GfJOaxY8rXsKXKjbF8HFy6Ak7b0la2%2FfMBf626yGdq3eIh8dPBQP%2FIzeuxHPOW6FUj2lrKaT7bFP1sGp5Ob6bU02d8UfRZbuX0axkZ4JdbeuU86Vu2AsG9j1gVwWjtDLIjFhOb%2BuUCjA22tgTIciTpHbs0o84Zwwi5W%2ByQY6pgGq9p%2FGh0gk9AsL4uHQ99rKlrBuVUIjsTGFkDlGkErnRWI5EvK9JvmvDA0qnz43LUx1eKoly0n5ufIVo9n0pzn7oENr1EZBf3Codb4OV7KqS%2FchI9WuqNicWapS9cPTJe98GGZyZfJn30FneK7euUMaP1yYuefQQojeQVV1hnWy6xobioQkjD7Km6dhbH3oB36GAItH6INdXNIfJ3p9QskzCs4Je2uz&X-Amz-Signature=e32a0fa49a4ef524584c7661bb5c1409d124a4e1eab36b2993e0acc8c93386e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

