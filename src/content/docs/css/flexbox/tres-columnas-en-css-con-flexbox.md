---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VINX3QA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T204153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBtmg9Ob%2F%2BaFiib7D43HMZCFGmW4i8Tk9qZBgiY8kQKsAiEA882H25mIZ6E0hNzhvuoqv8poGs7IJN%2BhfYt27E1xYIYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFrfKGggQw1u7D3MSrcA%2FzkpP6gIsG7cAVokLBXiEgKnVJmy9sA%2BfzNUa2K2tK6hvGNRX0LuKs%2BjdQpp8y6yDwFX12Gs4Ad%2BSZow2jpa635iMpOMVi1cGqhPJdAKe9GL3Rfuaw3WdAv5jEXG83BLgUm5WQunvc9%2BWI7txj1PeFYBkVhzC0zoNvjMGSmyJdIiAAVtJY6IY3EGgT8r9FOF3TVc7OPwPmZrfb%2B3ZftCkbhG1bEtBEaccFndSK1wv8Ogm0iLV8VE25VlbEzIaHmGgJJdJdB2dt%2BYxucEtkJQkmAl6FjF3kXMjI40yIurc7bPH5SbkZKOmi1xz%2Bh3wYbiJ%2BxWhp7BTubfu%2BR33ZclWM3KlIHc1Z%2B2q5VX9bmn%2BK1hGfq1qMQxkdmHw3iUymHaYAqdYO9%2F7%2BRQQZN0k7ulqgAr2OeCOYKN96%2BYjytLEOS6PDYxjqheHA0O5Lcm6XwRx7L7YVkDxKa%2BTxUfPdje%2BrghGTQ8ZoFTChZaFTCdbrL7RvoLYJ7Hg74%2FgpzWmCkvPzCUMkPSfWEBcLSJK68hoUbchTCrkzK6QmTbLROMoq%2BiX09kfq%2FR6ZFa%2F7zK%2FoOItWwH4n%2FAsfo8Hz2LgYBw61ldSRhEmSmZAke8S7yJGhcd7bOj4n5jDr8JQqtMKLc3MkGOqUBNH8DV11%2FmjJtlGlNepcpl1%2FJRFN1kKPwpJhJL3V7ZvqVsvmeY88g%2FwKukP2VTQVoPi8HZzkTzjUJoCwdp2jNoHJ4xaS24%2B0PhchJKvFoGOk6fnBWeOytzyKJ9DShJTMmmJoG5ox6W%2BjO%2BUkl8zhw52hqVOB8EBhHbN3OAzVDtEHycJC3%2BotqYnmM%2BX%2FlDhWtCPqKjl%2BFqja5%2FGw6hHnx1sPNIuS6&X-Amz-Signature=b31e11acbb55d219a517a9fa3cc28dea1df98461fd10373320dde0e4d50f82a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VINX3QA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T204153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBtmg9Ob%2F%2BaFiib7D43HMZCFGmW4i8Tk9qZBgiY8kQKsAiEA882H25mIZ6E0hNzhvuoqv8poGs7IJN%2BhfYt27E1xYIYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFrfKGggQw1u7D3MSrcA%2FzkpP6gIsG7cAVokLBXiEgKnVJmy9sA%2BfzNUa2K2tK6hvGNRX0LuKs%2BjdQpp8y6yDwFX12Gs4Ad%2BSZow2jpa635iMpOMVi1cGqhPJdAKe9GL3Rfuaw3WdAv5jEXG83BLgUm5WQunvc9%2BWI7txj1PeFYBkVhzC0zoNvjMGSmyJdIiAAVtJY6IY3EGgT8r9FOF3TVc7OPwPmZrfb%2B3ZftCkbhG1bEtBEaccFndSK1wv8Ogm0iLV8VE25VlbEzIaHmGgJJdJdB2dt%2BYxucEtkJQkmAl6FjF3kXMjI40yIurc7bPH5SbkZKOmi1xz%2Bh3wYbiJ%2BxWhp7BTubfu%2BR33ZclWM3KlIHc1Z%2B2q5VX9bmn%2BK1hGfq1qMQxkdmHw3iUymHaYAqdYO9%2F7%2BRQQZN0k7ulqgAr2OeCOYKN96%2BYjytLEOS6PDYxjqheHA0O5Lcm6XwRx7L7YVkDxKa%2BTxUfPdje%2BrghGTQ8ZoFTChZaFTCdbrL7RvoLYJ7Hg74%2FgpzWmCkvPzCUMkPSfWEBcLSJK68hoUbchTCrkzK6QmTbLROMoq%2BiX09kfq%2FR6ZFa%2F7zK%2FoOItWwH4n%2FAsfo8Hz2LgYBw61ldSRhEmSmZAke8S7yJGhcd7bOj4n5jDr8JQqtMKLc3MkGOqUBNH8DV11%2FmjJtlGlNepcpl1%2FJRFN1kKPwpJhJL3V7ZvqVsvmeY88g%2FwKukP2VTQVoPi8HZzkTzjUJoCwdp2jNoHJ4xaS24%2B0PhchJKvFoGOk6fnBWeOytzyKJ9DShJTMmmJoG5ox6W%2BjO%2BUkl8zhw52hqVOB8EBhHbN3OAzVDtEHycJC3%2BotqYnmM%2BX%2FlDhWtCPqKjl%2BFqja5%2FGw6hHnx1sPNIuS6&X-Amz-Signature=125005d1087645b8a33e8e04cd9b5a2913171d73c6703a94ec2b2f2c40825835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

