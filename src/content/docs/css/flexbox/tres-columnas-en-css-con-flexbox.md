---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5BYQYBE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T174917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhXeyCwb%2BFUrv244GJT37B3KSXbuZCWSp5bPwCK9i0BwIgWZV0Mi%2F8pLRCaBW5bkzkN61y70yY3aZmHu4FDj0LqQUq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDEf%2F9uzgZ68oVAac5SrcA99vcXa%2FEB0rolfECus7CAPWEotOL%2BH5GJnQ%2BWu912h9OI4QY60W6g%2BY37Hp2yLptZ07d%2FCdezpmWhLfV1RoswfTSOxuY%2FNponPy6PNKjcNPbdm7z%2BPLX7GxmhQRrOfFNTbpolDqJzyy6bsVC4lo1x63kwqxDP%2F0aBhSRnUb1GOwVQm%2BtGoPt1j5KsBMrfHZfoS0CgGPbaQxWghsDBurYm8UO3vQB902wRpJXweSYlPAhoYIFzucXw7uUYEbo294nUpqVJTDiNWVdWcaGG1rj48y3sJIO9FocIUZjePlJuxAI7gzctzlG7AJoaOCkfaxP28CalaNS%2Fas%2FdQMDRnoGp%2BCZoYosYHC3YGgDZZg86E2d37zDO5SkMDgLQvRBlE2o0Nw1rRqji%2BA5yrpQe5yUdHenD4aC%2BCa0Fzv9e7JpEoh9og3pynd4XlTgdCUADk073XUpjZlfjDX3bCUfky1iKyddU2NoDVdqRaC0F%2BnIeJyDom%2Flf7xHn%2Fa580UynhNpnr6bSG1J4ifB35bv2ycA0tKu6Bx%2Bep5fNbKG0pS6sO5t2oxNxBd3Hv0woMdNjr5jebfKyDpyaYMzyAh5Bn%2F4xh79Mv0eG%2BKTpSM6ZmlYU9XjQ8l%2F8aj8rlDhRB8MJzry8kGOqUBmmMTR7eIUMiCWdd0rWCQkw%2B3C7d7fK4f5DDI5sR05DR5Yjo29O4DJ6VtyxsUw6YKrCI%2FaepXRWhP3h1aOxig6X3TNDWegdSF9OQ5kIrlVE1dgYMRT%2Fd5umbaQ8XZx2mLWbtSmG0vWpRKppuK2hVfUFAjxeU0kmGgIdDMo7LqJ0R%2BFzUvGoyGgOMuPvzH7YIszcj1s8Offy8M5%2BvlkBncHfdirQtk&X-Amz-Signature=d45d7d3f76a6fab50a767bca5328794993461eac679b3e2d7039033b92214a2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5BYQYBE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T174917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhXeyCwb%2BFUrv244GJT37B3KSXbuZCWSp5bPwCK9i0BwIgWZV0Mi%2F8pLRCaBW5bkzkN61y70yY3aZmHu4FDj0LqQUq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDEf%2F9uzgZ68oVAac5SrcA99vcXa%2FEB0rolfECus7CAPWEotOL%2BH5GJnQ%2BWu912h9OI4QY60W6g%2BY37Hp2yLptZ07d%2FCdezpmWhLfV1RoswfTSOxuY%2FNponPy6PNKjcNPbdm7z%2BPLX7GxmhQRrOfFNTbpolDqJzyy6bsVC4lo1x63kwqxDP%2F0aBhSRnUb1GOwVQm%2BtGoPt1j5KsBMrfHZfoS0CgGPbaQxWghsDBurYm8UO3vQB902wRpJXweSYlPAhoYIFzucXw7uUYEbo294nUpqVJTDiNWVdWcaGG1rj48y3sJIO9FocIUZjePlJuxAI7gzctzlG7AJoaOCkfaxP28CalaNS%2Fas%2FdQMDRnoGp%2BCZoYosYHC3YGgDZZg86E2d37zDO5SkMDgLQvRBlE2o0Nw1rRqji%2BA5yrpQe5yUdHenD4aC%2BCa0Fzv9e7JpEoh9og3pynd4XlTgdCUADk073XUpjZlfjDX3bCUfky1iKyddU2NoDVdqRaC0F%2BnIeJyDom%2Flf7xHn%2Fa580UynhNpnr6bSG1J4ifB35bv2ycA0tKu6Bx%2Bep5fNbKG0pS6sO5t2oxNxBd3Hv0woMdNjr5jebfKyDpyaYMzyAh5Bn%2F4xh79Mv0eG%2BKTpSM6ZmlYU9XjQ8l%2F8aj8rlDhRB8MJzry8kGOqUBmmMTR7eIUMiCWdd0rWCQkw%2B3C7d7fK4f5DDI5sR05DR5Yjo29O4DJ6VtyxsUw6YKrCI%2FaepXRWhP3h1aOxig6X3TNDWegdSF9OQ5kIrlVE1dgYMRT%2Fd5umbaQ8XZx2mLWbtSmG0vWpRKppuK2hVfUFAjxeU0kmGgIdDMo7LqJ0R%2BFzUvGoyGgOMuPvzH7YIszcj1s8Offy8M5%2BvlkBncHfdirQtk&X-Amz-Signature=d39610abbbc3f3c8116124156cb440c085069fcf762116d5db4f39f905abf618&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

