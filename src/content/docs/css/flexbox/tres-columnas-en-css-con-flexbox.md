---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PWBASNE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T234429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwpRlAj7rQe%2Fm9QB4GBdPg10AmnEbhiSy%2FMjFQsROoHAiEAiQEFUovh1rb6kxnqRS2tY3yw7ud%2BUr6ocJqwZ13dWYkqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMuVLb5a%2BgIjr%2Bg2UCrcA%2BiqY7%2BE0i3Ab9VHiUuhyOa4Cu6YhYiHW9fL8DKfh4kIIqzci%2F8AnjfRyJFLi3nEb3U09eYxGXrJwWXZWe5mHjOIjMCxkSxodkNmhAYLosFtrvxWvHd7%2FBGPF5Tp3oezOnqT7GFpzoSdVYzQe1N5%2FHmy%2Fx05Vx7cPyCGss68ovtN8dPT20Av74qkSzhhhhAIZRSroroQaGB26l2MlXdP7nfWnDKukspCdEnSPTIHwcQz4Ag9QoQ0WsJJn4wTGTGlP2z5CQHQK5vuBzWSv6FmzZHhZfBBwHym2b6iT6g9FHthdEMZOM6nYr%2B%2BePnMDE3LkGhhfBMkQAf3L1tZeWB6iT42TNupE%2FXXN%2B%2BQXB8gh5iZk0u%2BWJO8Q%2F8S0KyTCBRp14RXOz73ZpjUO4g4MCT4tAJ7qoc5EdP9A9GygqZANk9nP5VCWu22GHhRZAhtEuxqBEWBUwkyB2Uab%2FTOHPP7hBmji2kCLVqoZx7HP8SgFBVomhKx%2FfI4ZcCd38JfVrRVHcfFs0vcXHlVVyyl7TW13XLCMiqHuzlXbmsdzCWx4nkdfbVmmsbbo1b3glepnYMBsimgh5xHIxQeTZbp3ew1xYGORCt4nsPnNZaKIrXDY4gGlXxtFeqXRFDFHVIYMP3C3ckGOqUBZyIjy1OUJE7ssMA1%2Bbgd5zkQdk98scExJgwU8u%2B2uT94pnYhGMl%2FR%2Fv4pOSo8rOjNWWXqMayvRBfrnrt19%2FYsthdpK%2BbSaGkXojZthalZWfHWm5XQQ%2BYw00Qmd1KC2r68hYljctwpyeakqhp5sa87ZGrOXUwTXfJgnWhvPk9DVFEnihSrYxNMlrQBu7BQnJ7qYRN%2BkUTKDbVgiMwWZOFy%2Fklm%2BGP&X-Amz-Signature=ef5e1f3536773f9fdb07616a739ee51e243b9ed534de7f24ea182e10b26293ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PWBASNE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T234429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwpRlAj7rQe%2Fm9QB4GBdPg10AmnEbhiSy%2FMjFQsROoHAiEAiQEFUovh1rb6kxnqRS2tY3yw7ud%2BUr6ocJqwZ13dWYkqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMuVLb5a%2BgIjr%2Bg2UCrcA%2BiqY7%2BE0i3Ab9VHiUuhyOa4Cu6YhYiHW9fL8DKfh4kIIqzci%2F8AnjfRyJFLi3nEb3U09eYxGXrJwWXZWe5mHjOIjMCxkSxodkNmhAYLosFtrvxWvHd7%2FBGPF5Tp3oezOnqT7GFpzoSdVYzQe1N5%2FHmy%2Fx05Vx7cPyCGss68ovtN8dPT20Av74qkSzhhhhAIZRSroroQaGB26l2MlXdP7nfWnDKukspCdEnSPTIHwcQz4Ag9QoQ0WsJJn4wTGTGlP2z5CQHQK5vuBzWSv6FmzZHhZfBBwHym2b6iT6g9FHthdEMZOM6nYr%2B%2BePnMDE3LkGhhfBMkQAf3L1tZeWB6iT42TNupE%2FXXN%2B%2BQXB8gh5iZk0u%2BWJO8Q%2F8S0KyTCBRp14RXOz73ZpjUO4g4MCT4tAJ7qoc5EdP9A9GygqZANk9nP5VCWu22GHhRZAhtEuxqBEWBUwkyB2Uab%2FTOHPP7hBmji2kCLVqoZx7HP8SgFBVomhKx%2FfI4ZcCd38JfVrRVHcfFs0vcXHlVVyyl7TW13XLCMiqHuzlXbmsdzCWx4nkdfbVmmsbbo1b3glepnYMBsimgh5xHIxQeTZbp3ew1xYGORCt4nsPnNZaKIrXDY4gGlXxtFeqXRFDFHVIYMP3C3ckGOqUBZyIjy1OUJE7ssMA1%2Bbgd5zkQdk98scExJgwU8u%2B2uT94pnYhGMl%2FR%2Fv4pOSo8rOjNWWXqMayvRBfrnrt19%2FYsthdpK%2BbSaGkXojZthalZWfHWm5XQQ%2BYw00Qmd1KC2r68hYljctwpyeakqhp5sa87ZGrOXUwTXfJgnWhvPk9DVFEnihSrYxNMlrQBu7BQnJ7qYRN%2BkUTKDbVgiMwWZOFy%2Fklm%2BGP&X-Amz-Signature=e07f00d868e95a44fad241b671682abb542e0c32f9ed65d8b11f40cbc5a705b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

