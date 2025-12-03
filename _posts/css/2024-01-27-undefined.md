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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLLGK5XJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T093243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIC50%2BHKJkv9Bt7BNqHS4dmOT%2By5zxFyftKZqEZ3V4EJRAiEA%2Fni7pNE65pDlxphoIrTLGNwlb9eplXisqlpflCfIfkIq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDC%2B8AVXNY3V0%2FURVeircA3bbFWIsRnKNxVKTUKrgQjEgQUWJeX4hDZiT%2B3lSs0M5DFaJKvODZ7aKDdrBmMe6rG6oyuhqddQWOSEY%2F%2BtPcmxkfGuwolgXrZut152Q5sXgSaClNuBrUr4%2B0NhG%2FD56JXmLrlpeGKRtIdBrzVEJkKmihUoqRlDAimjsTGr4Lvyqg9i4iLMK12XR6GNVkd0f%2B%2FI1KBu7gEnlVCeUesVahzSAx3sE%2BbBDY52ovlhYG%2FTd70kgWwLOw4bYe0VGbOlyZyXydIu%2BdcYaNC6JtCxcLbFUYjl5ZlMN%2F3wp4Q97a1dOI4XmJpcLRcQLkpunsVrFCdC6CeZAl4lE1xH4sI09I1fRhXGXdTjhJSZfU8wYQxRzFI73g6zKJyoLRG9hB0FRanS7VQ2Rv3e4iFVZl5a%2FCqcgnKbK91b%2FAKLhrwuHJRRATdamGZ%2B28ZBzf4bRH0TdeQph9ukRmozl2aVv1EW6es4fvjlTs%2FmdcWbsbtH1lokbhNTJo1ZzlJdKOXcAWR4blRb0GH%2BDuCGXvLS%2FZkJClJCFC52p10o0hnY6V55cbwvY1Wm9tkA6zXuayl1hQ%2BBJi32%2FTf0mh0twYCS4ALsmb6dQcMpgoZTMn6xvYHIJuCHNTkrpqmi1InISKoqCMNH1v8kGOqUB7PETj8oHvnNTNtT9FaV8NJ6XFSYq2wkcafbuqQhPh0zxmJwcGM3fCn48fH3Iw5DoJf%2Ff3mrH8L1JonuoCdued9HFmgU9lEmq6iGG4twAeLBF1bJht0xkZtzT0YN2MWC%2BxuWm0%2FTwulmyBFv3jknYKlc3bP9PxqyfGC4L2tKV16m5RyN1VZXte%2FMks9QOwrG0tBqnWKnfQfyEZ%2FdC7EIllW1ntvUa&X-Amz-Signature=d8fa33f577b08dd8c4f1deea45ada3fe322657136cd7436362eab4cb4a85a5f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLLGK5XJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T093243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIC50%2BHKJkv9Bt7BNqHS4dmOT%2By5zxFyftKZqEZ3V4EJRAiEA%2Fni7pNE65pDlxphoIrTLGNwlb9eplXisqlpflCfIfkIq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDC%2B8AVXNY3V0%2FURVeircA3bbFWIsRnKNxVKTUKrgQjEgQUWJeX4hDZiT%2B3lSs0M5DFaJKvODZ7aKDdrBmMe6rG6oyuhqddQWOSEY%2F%2BtPcmxkfGuwolgXrZut152Q5sXgSaClNuBrUr4%2B0NhG%2FD56JXmLrlpeGKRtIdBrzVEJkKmihUoqRlDAimjsTGr4Lvyqg9i4iLMK12XR6GNVkd0f%2B%2FI1KBu7gEnlVCeUesVahzSAx3sE%2BbBDY52ovlhYG%2FTd70kgWwLOw4bYe0VGbOlyZyXydIu%2BdcYaNC6JtCxcLbFUYjl5ZlMN%2F3wp4Q97a1dOI4XmJpcLRcQLkpunsVrFCdC6CeZAl4lE1xH4sI09I1fRhXGXdTjhJSZfU8wYQxRzFI73g6zKJyoLRG9hB0FRanS7VQ2Rv3e4iFVZl5a%2FCqcgnKbK91b%2FAKLhrwuHJRRATdamGZ%2B28ZBzf4bRH0TdeQph9ukRmozl2aVv1EW6es4fvjlTs%2FmdcWbsbtH1lokbhNTJo1ZzlJdKOXcAWR4blRb0GH%2BDuCGXvLS%2FZkJClJCFC52p10o0hnY6V55cbwvY1Wm9tkA6zXuayl1hQ%2BBJi32%2FTf0mh0twYCS4ALsmb6dQcMpgoZTMn6xvYHIJuCHNTkrpqmi1InISKoqCMNH1v8kGOqUB7PETj8oHvnNTNtT9FaV8NJ6XFSYq2wkcafbuqQhPh0zxmJwcGM3fCn48fH3Iw5DoJf%2Ff3mrH8L1JonuoCdued9HFmgU9lEmq6iGG4twAeLBF1bJht0xkZtzT0YN2MWC%2BxuWm0%2FTwulmyBFv3jknYKlc3bP9PxqyfGC4L2tKV16m5RyN1VZXte%2FMks9QOwrG0tBqnWKnfQfyEZ%2FdC7EIllW1ntvUa&X-Amz-Signature=0ffdfd8da3d28728829e5963630d81aff0b589efc824c8d21c3611fd5ba4a4fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

