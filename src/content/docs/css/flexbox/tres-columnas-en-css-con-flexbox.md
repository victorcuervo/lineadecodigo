---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BG2IN3W%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T071325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDzg3RRkimLmfRSaqocyshlMwGYVVuuCZOmsFA0vZmrWAiEAgrHO1XA0QQx5yD21qaA86Kzce6z%2BNdAE%2FVfkWSmiVpMq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDDbhlvLG3EOWZOhxbircAyMhdtuMYdZhSG6jPbZWY9B3vT1%2FJoCaYDKOk0yF5ecMNoUZipu1P9z5jjixJp%2B4HupIGGPIfu7gWgaS8LFX4Zp8HiG4vtxFE79Aw7EAI8ijiruRXJ6Nu2q7ucoJGpnF9Ovh2P98MEX3Dxz%2FPAU%2FoJEBSa787RnlQ%2FlYIo0HZDjSjsH2VJTrvQHufqd2MMDYBbnBC6iQIMLo88Ky4sN0d52KbdHPvy50Uc4DB8iY%2BzNGHccHbkR6QPuldhRT5iAAUDC4I6tlzWzIPj3G%2FKwuTi6PVb4ERZ7LvNeg3vjgXxrRS%2F8jCzPFFf%2BxmqNiCX1jszUTRKSfmM%2BVmiJgie6%2Bu4U2Avsqw6vwBr%2BGvrUccEIKqv1dqYRkjtoq%2BHUsk8s5g4SN9LwD%2FM4hzKHpDhLxMNII2X9q3ZPxMLjRa8aKlnLqr2HejAYHva85JElQ8BxTH4AU6QfLP%2B1sZ%2FZlgFCqTr2d%2F69wWGWqNdqyMJs7%2FFZNMfkQZ8qi%2B7owrdM2J5qPc18vQEGsFpJ%2BWefJhrUPzEyAzmtI5oNsL6G%2BXSQ6J9wfZthHxUi7qFk3QK7SipHf9SS66uoKVa6EALHfJOszlE7qT1tmhhTJHp7uI1HkVYeVdSSM3Ca9P8bE4Z7GMIzLxMkGOqUBTZ9BEUIUGX06zwRHZUWU83a175xEPXHHpqecc1pqUnMuG%2B4Ox4DuK%2BzMSj0hJjDGB6OR%2FrGkDKiT99q4N4OxC8hbkfYQKUWwwzriCn9O5YB4lAxCpX30Ev4P%2FtDJmthBl5wuErLG9y3SIo9hR6Z8LOUFZxDQFmF6RL4UUHFlnrCjNbwXe4O4cEMmeyFLYqviJTRspgnIdtfiuxMc8eRXNVC4ZKYT&X-Amz-Signature=7fd15b4c4998305fe481f97979bd91a7481e8e2beb4e842b43e0ac6dc0b125ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BG2IN3W%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T071325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDzg3RRkimLmfRSaqocyshlMwGYVVuuCZOmsFA0vZmrWAiEAgrHO1XA0QQx5yD21qaA86Kzce6z%2BNdAE%2FVfkWSmiVpMq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDDbhlvLG3EOWZOhxbircAyMhdtuMYdZhSG6jPbZWY9B3vT1%2FJoCaYDKOk0yF5ecMNoUZipu1P9z5jjixJp%2B4HupIGGPIfu7gWgaS8LFX4Zp8HiG4vtxFE79Aw7EAI8ijiruRXJ6Nu2q7ucoJGpnF9Ovh2P98MEX3Dxz%2FPAU%2FoJEBSa787RnlQ%2FlYIo0HZDjSjsH2VJTrvQHufqd2MMDYBbnBC6iQIMLo88Ky4sN0d52KbdHPvy50Uc4DB8iY%2BzNGHccHbkR6QPuldhRT5iAAUDC4I6tlzWzIPj3G%2FKwuTi6PVb4ERZ7LvNeg3vjgXxrRS%2F8jCzPFFf%2BxmqNiCX1jszUTRKSfmM%2BVmiJgie6%2Bu4U2Avsqw6vwBr%2BGvrUccEIKqv1dqYRkjtoq%2BHUsk8s5g4SN9LwD%2FM4hzKHpDhLxMNII2X9q3ZPxMLjRa8aKlnLqr2HejAYHva85JElQ8BxTH4AU6QfLP%2B1sZ%2FZlgFCqTr2d%2F69wWGWqNdqyMJs7%2FFZNMfkQZ8qi%2B7owrdM2J5qPc18vQEGsFpJ%2BWefJhrUPzEyAzmtI5oNsL6G%2BXSQ6J9wfZthHxUi7qFk3QK7SipHf9SS66uoKVa6EALHfJOszlE7qT1tmhhTJHp7uI1HkVYeVdSSM3Ca9P8bE4Z7GMIzLxMkGOqUBTZ9BEUIUGX06zwRHZUWU83a175xEPXHHpqecc1pqUnMuG%2B4Ox4DuK%2BzMSj0hJjDGB6OR%2FrGkDKiT99q4N4OxC8hbkfYQKUWwwzriCn9O5YB4lAxCpX30Ev4P%2FtDJmthBl5wuErLG9y3SIo9hR6Z8LOUFZxDQFmF6RL4UUHFlnrCjNbwXe4O4cEMmeyFLYqviJTRspgnIdtfiuxMc8eRXNVC4ZKYT&X-Amz-Signature=84da9260f35eebdc9d28b35eee9f49e7ae3188bc25cc42704d13a2429eb6c0d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

