---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUPQNIMH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T012231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAW7AXJ3vuHWiVxNk1f2Is5O10qo7YAlGqC%2FObGqGQagAiEA2MtR5aW2BMH5HoqbNmQg6%2FbR76CSUN%2F%2Fp0VGByXD3wsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDGdHlefLVsyVtXUpLCrcA01GzfhToYxOym8hDAtNnTtJVqWtnujj7GKGFxmuFmR2%2F5hv0aRf0Cp26tXsHwc74COdtHRwioVUSuwwCLJgNZIbJcQ%2Fzl6oYtSIRS15keBYeNCudi2BRis39jLv5NRdoC0kPNhS0IOhKEAKHw6BQ5%2FnNsd7aEu3yfXy%2BJsD9nw4iRCojoSYPy13tWPcwv6MPzKXpTgDmk6UyBceJLO9daieeeMjNze5dW0sODfjlJPHOwJTE1vKHr8Dc0eoZiQYJImsW%2BnJ2DE3zLh7bEIZrly%2B8Oy3VF5lYTh7otFSiRRgmpBsDf%2F8LGOEhk9E11xMEHUcMYXrsOyIcOdlEl6plSknfHht5aVLawJ5KhRzeiddwmtJgTnLfA4fONsI5kO1C%2Bs4WMmO4twD6Ky7AO2LpeZFaXvm2MkZEfhpzg3QYsbV9173eJ0BmVwOPoZViPakH%2BohsH5g9UNqj3zcSqUsH3PWInqxwRJQyQPUVRZSAeIdpHygY4ei9R9N0J4zf6K2vI0l24u1dBYzbNjUGzFzq9YlOxrjxS%2FdgSRcf%2B%2BWq57zBno55zTIvt50gNIjZ0uORI3Lwi4cl5EO4%2FVbUgG0ROXrs%2BnQrVwCiy30kMEvFlpcrZj6UVP7ysQLVfefMPOLyMkGOqUBv3gPUGkPCtPHjvJ2n82rXA0taxOQdEB5DXvlTcdcVFsa%2FMY%2BiXdVyjCSJoEVPFFb8xBoTxuC6bxx4UdOrnXVB0qwbXVWMbACIdypsbiR%2Bjmq%2FrUMPxG40rDueeaCLUgwxCU5uSpVZUffqE0CbbN37jeikvtt%2BKjZ%2FV5Lfgn4BbLxIAEFd6p%2BAvtGGtLalMhNIiK%2F2KKHCW0cD2qfd92T8ANVEw%2F5&X-Amz-Signature=cd970ea441d8afba678a2bf6aaec04dc9e8b05c17d825dde4e4b60f42475f31f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUPQNIMH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T012231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAW7AXJ3vuHWiVxNk1f2Is5O10qo7YAlGqC%2FObGqGQagAiEA2MtR5aW2BMH5HoqbNmQg6%2FbR76CSUN%2F%2Fp0VGByXD3wsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDGdHlefLVsyVtXUpLCrcA01GzfhToYxOym8hDAtNnTtJVqWtnujj7GKGFxmuFmR2%2F5hv0aRf0Cp26tXsHwc74COdtHRwioVUSuwwCLJgNZIbJcQ%2Fzl6oYtSIRS15keBYeNCudi2BRis39jLv5NRdoC0kPNhS0IOhKEAKHw6BQ5%2FnNsd7aEu3yfXy%2BJsD9nw4iRCojoSYPy13tWPcwv6MPzKXpTgDmk6UyBceJLO9daieeeMjNze5dW0sODfjlJPHOwJTE1vKHr8Dc0eoZiQYJImsW%2BnJ2DE3zLh7bEIZrly%2B8Oy3VF5lYTh7otFSiRRgmpBsDf%2F8LGOEhk9E11xMEHUcMYXrsOyIcOdlEl6plSknfHht5aVLawJ5KhRzeiddwmtJgTnLfA4fONsI5kO1C%2Bs4WMmO4twD6Ky7AO2LpeZFaXvm2MkZEfhpzg3QYsbV9173eJ0BmVwOPoZViPakH%2BohsH5g9UNqj3zcSqUsH3PWInqxwRJQyQPUVRZSAeIdpHygY4ei9R9N0J4zf6K2vI0l24u1dBYzbNjUGzFzq9YlOxrjxS%2FdgSRcf%2B%2BWq57zBno55zTIvt50gNIjZ0uORI3Lwi4cl5EO4%2FVbUgG0ROXrs%2BnQrVwCiy30kMEvFlpcrZj6UVP7ysQLVfefMPOLyMkGOqUBv3gPUGkPCtPHjvJ2n82rXA0taxOQdEB5DXvlTcdcVFsa%2FMY%2BiXdVyjCSJoEVPFFb8xBoTxuC6bxx4UdOrnXVB0qwbXVWMbACIdypsbiR%2Bjmq%2FrUMPxG40rDueeaCLUgwxCU5uSpVZUffqE0CbbN37jeikvtt%2BKjZ%2FV5Lfgn4BbLxIAEFd6p%2BAvtGGtLalMhNIiK%2F2KKHCW0cD2qfd92T8ANVEw%2F5&X-Amz-Signature=88ee207ab082ce80a5e8aa402ea62cd2227dd546bfc12c92299def22c00c7b8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

