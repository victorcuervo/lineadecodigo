---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ4N6CNC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T125255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7dnvXa%2Bo76JBtCtl5l4%2Bi5xOf3TYVrPFDZ8%2FTvc8oaAiEAwcFvkW8eMXUqqFCzzKm5z8HoDZygHAf78pjVEHA%2BkhYq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJyOrJ3sdF6GLYy4RyrcAw0Vi7Q7BXHNCPJifeZwfCYRr%2FYl%2BE4TYMyULVQzA1TxtDchq48L2%2Fs3P7rH4uH3J8ylyqyOST%2BGOdrCbEinI4qJYc5dyUcmG41cRoz5DOl10UWzet5B0DOK5Ns2vfsw9p1HqVSUHv6IYoHxQydQDHxiqXBTUu1c9bNv4hpftiJ5cZFVKa02HggTtJnT9%2BuOJhvy0EFNbh8uDs8N%2B48CE9ozO5bY6RqROmoR383vYTKhKiZrwvSQwCm1jnbBfJTXoKPrKw48YbTAHjT1kJhzNmokB6QC7S9QH0H5NJic1%2FTnvqZLowlRuMD6zPwsJkaOsDRDiYSKUw6dAoWuyV8zUmKGqEBH6MyFL%2FSOW2FeeDOlluarQ%2BfyG52KObx%2FjoculaChBeATrJz7Udls4iflypHJlk1YSLuZ8zMPVEUT2OiARSHeI5X%2FPvcaRVpiagD1nrToxsrg3RRk%2FU1bjeuzq4h%2FVSfgoTTLWzI6rfxHAhczhsdRvEV0Kr5yTP%2B2lu5ZXFydwVspcI%2FBuM%2BNnilWf13WphjjXElre8CIs55xTLJipSDWiabYuhUo6%2FsN5ZBuCZjnTp%2Fj3nqdIo%2BaToc0MbKuUeDl2BgrgmlRbmojGNMLT%2BGlXhCr1sBvUIS1MN3TyskGOqUBzwNWDsZ1fHnIYRL7q3Vw55KcThBsT2sM%2FYIZmd7EvzewxMYgB4J7WVAhOgYpP76Gsr9iyE4Rhdg9y%2BXR%2FxewER8Yg3FNbSqj%2Fcg1QHLftgT8YTCIxeNMjLZp%2BFCQJZMhqXneijXVG6Ma%2FxTY%2Feacc0kYko2YSx%2Bqc%2F8aLwfo6AL81YuZiuXNAk8a%2FCSHG0cXIlWTHEaxkGWT8jwNBHZfN7qL%2Fdmm&X-Amz-Signature=80d354ba4eea0c89679cd9e190f4fa0a20d7fb9469684c0083cbda350c748a88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ4N6CNC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T125255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7dnvXa%2Bo76JBtCtl5l4%2Bi5xOf3TYVrPFDZ8%2FTvc8oaAiEAwcFvkW8eMXUqqFCzzKm5z8HoDZygHAf78pjVEHA%2BkhYq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJyOrJ3sdF6GLYy4RyrcAw0Vi7Q7BXHNCPJifeZwfCYRr%2FYl%2BE4TYMyULVQzA1TxtDchq48L2%2Fs3P7rH4uH3J8ylyqyOST%2BGOdrCbEinI4qJYc5dyUcmG41cRoz5DOl10UWzet5B0DOK5Ns2vfsw9p1HqVSUHv6IYoHxQydQDHxiqXBTUu1c9bNv4hpftiJ5cZFVKa02HggTtJnT9%2BuOJhvy0EFNbh8uDs8N%2B48CE9ozO5bY6RqROmoR383vYTKhKiZrwvSQwCm1jnbBfJTXoKPrKw48YbTAHjT1kJhzNmokB6QC7S9QH0H5NJic1%2FTnvqZLowlRuMD6zPwsJkaOsDRDiYSKUw6dAoWuyV8zUmKGqEBH6MyFL%2FSOW2FeeDOlluarQ%2BfyG52KObx%2FjoculaChBeATrJz7Udls4iflypHJlk1YSLuZ8zMPVEUT2OiARSHeI5X%2FPvcaRVpiagD1nrToxsrg3RRk%2FU1bjeuzq4h%2FVSfgoTTLWzI6rfxHAhczhsdRvEV0Kr5yTP%2B2lu5ZXFydwVspcI%2FBuM%2BNnilWf13WphjjXElre8CIs55xTLJipSDWiabYuhUo6%2FsN5ZBuCZjnTp%2Fj3nqdIo%2BaToc0MbKuUeDl2BgrgmlRbmojGNMLT%2BGlXhCr1sBvUIS1MN3TyskGOqUBzwNWDsZ1fHnIYRL7q3Vw55KcThBsT2sM%2FYIZmd7EvzewxMYgB4J7WVAhOgYpP76Gsr9iyE4Rhdg9y%2BXR%2FxewER8Yg3FNbSqj%2Fcg1QHLftgT8YTCIxeNMjLZp%2BFCQJZMhqXneijXVG6Ma%2FxTY%2Feacc0kYko2YSx%2Bqc%2F8aLwfo6AL81YuZiuXNAk8a%2FCSHG0cXIlWTHEaxkGWT8jwNBHZfN7qL%2Fdmm&X-Amz-Signature=5e082b898ac593b76ec085e2264b726ef268205224b9bb81f3fe463550cf623e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

