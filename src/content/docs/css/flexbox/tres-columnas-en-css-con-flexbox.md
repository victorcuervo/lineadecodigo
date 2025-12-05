---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EGL2NOL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T120415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwxFXoXS7tzBn2NxsHUq85sQkeyiZlna7LBPM9Cfgb3QIgd7ZkctnIz29OGM%2FrN0y5Qb5UAq%2FuFS0nWNZbFzUhXOAq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDCXssQe2qh5LUiROhCrcA%2FvhT7fzYd8l7FO%2Ba5vMqkRNHhJf3gI%2Bvm2D1KW%2BmVlf8UCWeo%2F234s2wFxNX7O38zYIPg7zKOJH8QI0f2P9hPX%2BbGJTLEIqfEc19HVe%2FsY2lQukyeOnl3X93LS3pzK3YNDtO%2BNTMiZCARXm29n1DVtPt3GRUWhAKO5HcVluhI6dkk2rktQYqLprZyyqEmvoExX0roX7aunTUQQHGd8edIzC0MvuO7xPtk4Uxi3sBO7lakfnUgABDLwYHI8XHHUBmXMmqz2Zu9Ikt1Y3b%2B0UGLNyOIuV%2F%2FsdvmU8gUOZOhOdPyKfgpYYO5pW5VDbJRxjbc%2FC1E2TrmRTdGWVEZtvSjNvRYJrYqjc7zLb%2F90wz%2F9QEyl9UhptXaLQnJU6MzTGMfgZk9R%2FX7dfGA51UWGNe79S%2FYJokqe6dgVmxZKY6f6fSC70UMKKwbRh6PFNgJJRUmWgs%2FoUXyD%2BHR%2B3GRs2%2B18hgf2hDHSC%2BuEkj%2BhOCS3FxHMpFyCqTNojGVg3%2FkFg5L6Ev9MRQ%2F%2Bgg%2BJUIR8go%2FENFWSJmMmHG9gCXtCmuI8T4RqWzjNz%2FCU2L%2FWBeh3ZoDb6D%2FN%2F1IYRDsP6xQADoatRdHaL6pSk%2BHXuMDfYphOWuVNxYli0SlZBlueVMLWoyskGOqUB9XoYuClccTib9%2BSlvDdsXeO5HxFcvsFtUxkbHHc2iGESwd3v%2Bl4GseFountuBWIYNwqEnjvRb5psNdhLKRaDzzEpiGYy04DJBUHTM8FqlBPIcGPLl2pyq8h97N%2BIZ%2FQWIjo6EJ6D5knKTnfCUfaEWPprqUSTNRhXy90OWVoZLI5%2BVY7nJM%2BcfZSw0qkv2ZPsm8yTWYQe4uVhIYt3%2F3Dj6Bxz5ARw&X-Amz-Signature=4d22b913f007791908dd5e6aaec51f74854762173b40196d0c6d6687f0c21858&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EGL2NOL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T120415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwxFXoXS7tzBn2NxsHUq85sQkeyiZlna7LBPM9Cfgb3QIgd7ZkctnIz29OGM%2FrN0y5Qb5UAq%2FuFS0nWNZbFzUhXOAq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDCXssQe2qh5LUiROhCrcA%2FvhT7fzYd8l7FO%2Ba5vMqkRNHhJf3gI%2Bvm2D1KW%2BmVlf8UCWeo%2F234s2wFxNX7O38zYIPg7zKOJH8QI0f2P9hPX%2BbGJTLEIqfEc19HVe%2FsY2lQukyeOnl3X93LS3pzK3YNDtO%2BNTMiZCARXm29n1DVtPt3GRUWhAKO5HcVluhI6dkk2rktQYqLprZyyqEmvoExX0roX7aunTUQQHGd8edIzC0MvuO7xPtk4Uxi3sBO7lakfnUgABDLwYHI8XHHUBmXMmqz2Zu9Ikt1Y3b%2B0UGLNyOIuV%2F%2FsdvmU8gUOZOhOdPyKfgpYYO5pW5VDbJRxjbc%2FC1E2TrmRTdGWVEZtvSjNvRYJrYqjc7zLb%2F90wz%2F9QEyl9UhptXaLQnJU6MzTGMfgZk9R%2FX7dfGA51UWGNe79S%2FYJokqe6dgVmxZKY6f6fSC70UMKKwbRh6PFNgJJRUmWgs%2FoUXyD%2BHR%2B3GRs2%2B18hgf2hDHSC%2BuEkj%2BhOCS3FxHMpFyCqTNojGVg3%2FkFg5L6Ev9MRQ%2F%2Bgg%2BJUIR8go%2FENFWSJmMmHG9gCXtCmuI8T4RqWzjNz%2FCU2L%2FWBeh3ZoDb6D%2FN%2F1IYRDsP6xQADoatRdHaL6pSk%2BHXuMDfYphOWuVNxYli0SlZBlueVMLWoyskGOqUB9XoYuClccTib9%2BSlvDdsXeO5HxFcvsFtUxkbHHc2iGESwd3v%2Bl4GseFountuBWIYNwqEnjvRb5psNdhLKRaDzzEpiGYy04DJBUHTM8FqlBPIcGPLl2pyq8h97N%2BIZ%2FQWIjo6EJ6D5knKTnfCUfaEWPprqUSTNRhXy90OWVoZLI5%2BVY7nJM%2BcfZSw0qkv2ZPsm8yTWYQe4uVhIYt3%2F3Dj6Bxz5ARw&X-Amz-Signature=93b759b3a49ea1f199c4eb4060a462871c6132437afacb2febeaf89a2450e931&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

