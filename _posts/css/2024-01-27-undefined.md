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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRQG4MNI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T070109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIAlhLYMihKbb9rEBa6quoG1%2Bi1Asy5TPOfvz8ruEQU%2FgAiAsBHsUn6WFIc7qOHmX0nQYaMf2ZyAAqz%2BbaiDurN%2FLoyr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMIzEl5XILDBOLN24ZKtwDA3FdajZRXTvqPy6HVLhQZqI4w%2BLihoQ6JTf0vEMSwrRfT3xSQXLQQH4MXBgW5u%2BalItwbWap0Z9CBC3tHDXIX91ONi%2BCTKFASCvRWLaACZ4qxyVX1yudC9G7B7M1aeM0Ln8BP6QMAsBXCkxDl3Qgrq1Bmsug1DQbEn5153bx1Vhc7AfFTdudtyo6u%2Fr50ou5ntXg7Z5G2HH%2B1Kumi6PpGr8y6uTlsrWE9ao65mmuRTsNO3gVrndXJ%2F29wa6E0gstUhXaDeB90ByXTK%2Fx6Dc5HxP4FKKxTZzy2oesTbNrPXUvq3Kgv7z7h39pZeRJNUwqfxmKGZVoAMhaQvAacwRiNFUKoEwX3iuV%2FAtJDtAIWOa5pjXBocDvWHPvE7IuEVwmq1JmsnU01ott8xbd9QcyACu%2FLSwoPWI1pz19YeCR0Ntr0oAoWRtATX8mYBM%2FO5dC6%2F8lM1V6pX543tbdO2ksRpG5DheivTYvZwXN%2BmDlCl89M8Nk1xCR0D6Mz4%2Bx6BV0MDk%2BD84OWWAZF4NYqlFg6Q%2FMYqav5Mhi8iKIuJWsmcxEy4%2FwyiHkXDu0heF%2FcFNYfxqCks93ZQHpELHUkCCJp7Yvf5eCpBkNh7k17FhUEkNDP2Z5cW4WEIUoqfEw2rm%2FyQY6pgGM25r6i0Ej1Bwn0kVPYXTH5LgvHeNoBqL%2BArPzF1hCmcBqBC9YOWv%2BC3GFKxOICyP9B7Q8eBENQ603pPmm3xJMqwXiNF%2BuptKZQ16VZeuewKiZ7y8UXu64P8CQaxWynt6gGL9iWMjGTeKmTb2Wk%2BbezM3EBOH6ETsp1b9hyGwL7QXaNVaHEkUIFyJpdKmNNDUBNqct4k6ytQa5X1nyWu21ZzVgZyTf&X-Amz-Signature=9ceb79b4ca43b8d0a4906e5328867adcda539edb9ee9ec8e550e7e3f7dae48a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRQG4MNI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T070109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIAlhLYMihKbb9rEBa6quoG1%2Bi1Asy5TPOfvz8ruEQU%2FgAiAsBHsUn6WFIc7qOHmX0nQYaMf2ZyAAqz%2BbaiDurN%2FLoyr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMIzEl5XILDBOLN24ZKtwDA3FdajZRXTvqPy6HVLhQZqI4w%2BLihoQ6JTf0vEMSwrRfT3xSQXLQQH4MXBgW5u%2BalItwbWap0Z9CBC3tHDXIX91ONi%2BCTKFASCvRWLaACZ4qxyVX1yudC9G7B7M1aeM0Ln8BP6QMAsBXCkxDl3Qgrq1Bmsug1DQbEn5153bx1Vhc7AfFTdudtyo6u%2Fr50ou5ntXg7Z5G2HH%2B1Kumi6PpGr8y6uTlsrWE9ao65mmuRTsNO3gVrndXJ%2F29wa6E0gstUhXaDeB90ByXTK%2Fx6Dc5HxP4FKKxTZzy2oesTbNrPXUvq3Kgv7z7h39pZeRJNUwqfxmKGZVoAMhaQvAacwRiNFUKoEwX3iuV%2FAtJDtAIWOa5pjXBocDvWHPvE7IuEVwmq1JmsnU01ott8xbd9QcyACu%2FLSwoPWI1pz19YeCR0Ntr0oAoWRtATX8mYBM%2FO5dC6%2F8lM1V6pX543tbdO2ksRpG5DheivTYvZwXN%2BmDlCl89M8Nk1xCR0D6Mz4%2Bx6BV0MDk%2BD84OWWAZF4NYqlFg6Q%2FMYqav5Mhi8iKIuJWsmcxEy4%2FwyiHkXDu0heF%2FcFNYfxqCks93ZQHpELHUkCCJp7Yvf5eCpBkNh7k17FhUEkNDP2Z5cW4WEIUoqfEw2rm%2FyQY6pgGM25r6i0Ej1Bwn0kVPYXTH5LgvHeNoBqL%2BArPzF1hCmcBqBC9YOWv%2BC3GFKxOICyP9B7Q8eBENQ603pPmm3xJMqwXiNF%2BuptKZQ16VZeuewKiZ7y8UXu64P8CQaxWynt6gGL9iWMjGTeKmTb2Wk%2BbezM3EBOH6ETsp1b9hyGwL7QXaNVaHEkUIFyJpdKmNNDUBNqct4k6ytQa5X1nyWu21ZzVgZyTf&X-Amz-Signature=6499e36fd587072bc94c727ea38908cf26170a56c4933bdf01c0caf1cff1c195&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

