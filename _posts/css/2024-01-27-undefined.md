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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYXIICXB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T180452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIGcmra%2B5jJw9BzA9Zm9K1olqomfv8wwG1%2FSPvNh7e05nAiEAjFF1XbGKb19WBqI4TnxBdy7K16k4ix%2FOLzlV9l0br90q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLce%2FlGDc60PfvphFCrcA%2B7I5lOtljHmcCklXNY8XuPhlqP7MO9o4VZIZaDsAS85Fk%2FqOVt%2BtZbnX8dQkaZMVsm0Uhhw%2FUA1u3zRjFEig%2B5IDR9Sd4koypqYsACDWAFDXQ1SPWCTGBggiXiDGEfUuarsBVPnp0BvurVOu7%2B5wm8AFe0%2FH3ktlFaNXxRc3uVA7m0TFY3B%2FvR1Njizg6j4X69J1WBm6Xeih1zTTZHg0BQfRRUk21YdI3bCjh7MjA81%2BE%2BUuGT%2BJX6UtJKWbu%2FtZBmvpqAiwdys%2BpDoGDfNnhvjk4bPucDBNmkJDWPAYBtH9IdXCm6N2G5qkDvSciTZtm%2F6DKiUJ8vfblOFHPObA85vxoG%2FX19usxy9vJ%2B64Frsm1kf1U50DVijL57p%2FuF0XZ%2B6YyddlrQ6Hr71mJvwU0rCQEmjOURppiuTNgf%2BbpNqamJElLlCxMgCyeA9W9aPS1FRxqUO5d%2B9gWHZJh5QYyFIGXxR1lX90smP5hP3KTtwdosIm8EL0BK3ysSq0pLPkm5jaCPAHamuMoqVGnzEuisrFM%2F9arzqMdWAdcmi8VIABbYCFu0M7%2F1680Q6c7dWGlUIGiSNCtQlTAwUManXelTKV7MNlq0ZlauQctFi%2BsG6t32dLZG7DtUniLHkMJTawckGOqUBmryYMAOw4s6Ea4qXOGvWIDl51Vc0lNOJ74zZ5g4O0WyDLVz0FzbhN%2BHo%2FET882timatVTQNqLkU%2Bqry4zZuf2il1Dy79kNAFgWoYD81hIgN0lhYG%2BXgJF0pNe%2BvgBa3Mv%2B7XliiC55MJ7rB6RK24KqjSv%2F%2BTOS%2BBt14L2F5FTnQNqq34xJTegZZSvMh6FDOKfDmqIhqtdOXfBoOb%2B6hYDaBMYW7d&X-Amz-Signature=cee0789216a96c242c49ad2c02f89867cae72f15282383707dc1809f17f1d0ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYXIICXB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T180453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIGcmra%2B5jJw9BzA9Zm9K1olqomfv8wwG1%2FSPvNh7e05nAiEAjFF1XbGKb19WBqI4TnxBdy7K16k4ix%2FOLzlV9l0br90q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLce%2FlGDc60PfvphFCrcA%2B7I5lOtljHmcCklXNY8XuPhlqP7MO9o4VZIZaDsAS85Fk%2FqOVt%2BtZbnX8dQkaZMVsm0Uhhw%2FUA1u3zRjFEig%2B5IDR9Sd4koypqYsACDWAFDXQ1SPWCTGBggiXiDGEfUuarsBVPnp0BvurVOu7%2B5wm8AFe0%2FH3ktlFaNXxRc3uVA7m0TFY3B%2FvR1Njizg6j4X69J1WBm6Xeih1zTTZHg0BQfRRUk21YdI3bCjh7MjA81%2BE%2BUuGT%2BJX6UtJKWbu%2FtZBmvpqAiwdys%2BpDoGDfNnhvjk4bPucDBNmkJDWPAYBtH9IdXCm6N2G5qkDvSciTZtm%2F6DKiUJ8vfblOFHPObA85vxoG%2FX19usxy9vJ%2B64Frsm1kf1U50DVijL57p%2FuF0XZ%2B6YyddlrQ6Hr71mJvwU0rCQEmjOURppiuTNgf%2BbpNqamJElLlCxMgCyeA9W9aPS1FRxqUO5d%2B9gWHZJh5QYyFIGXxR1lX90smP5hP3KTtwdosIm8EL0BK3ysSq0pLPkm5jaCPAHamuMoqVGnzEuisrFM%2F9arzqMdWAdcmi8VIABbYCFu0M7%2F1680Q6c7dWGlUIGiSNCtQlTAwUManXelTKV7MNlq0ZlauQctFi%2BsG6t32dLZG7DtUniLHkMJTawckGOqUBmryYMAOw4s6Ea4qXOGvWIDl51Vc0lNOJ74zZ5g4O0WyDLVz0FzbhN%2BHo%2FET882timatVTQNqLkU%2Bqry4zZuf2il1Dy79kNAFgWoYD81hIgN0lhYG%2BXgJF0pNe%2BvgBa3Mv%2B7XliiC55MJ7rB6RK24KqjSv%2F%2BTOS%2BBt14L2F5FTnQNqq34xJTegZZSvMh6FDOKfDmqIhqtdOXfBoOb%2B6hYDaBMYW7d&X-Amz-Signature=d61954e70fc1c5e577e0fadd18fa8c1c846a49cc56e89459bbb2224cb51c7729&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

