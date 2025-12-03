---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4COTZ3I%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIDw4HT8wjlRPzvK%2BFz56tbPeaDlrI4C9kgdYssxQOjFJAiB5ZR4lSOhIb8jJh%2FO6zM5jYpic8uUYuECcCI0OLR%2BK6yr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMHVbv1LzIhEt9DIjgKtwDkJZFjXTp0WrnSpbiF%2B%2Flonz7Hf2rvd0Got3FqdViNRIweyDHEzVcyKBmV0d8gJniN51PYJiVEY9FbVaPiYwA6JBA2i7j%2FLMdVDrZiJHSrO1R%2BC1b%2FPVv7g1TNgG9NMQLtJeouILOxMZwyuBRRsBsdtDaQxYh80pUPTDJdeWQo5zWD9wM5WK24vs4Gbj3JsoV6%2FUXIEIuxL%2BIA6GK%2FdAs8Cv1M5jUnrFUpTsXoivvxRtvTk5gRml5yY8uy4cBno5K9KgAbkQbbOc4z34WLrdMUcljPNBX1zMxVz6BqaxTACiAJoPtQIxvtFWkJZ7jJxhzbQ3Ph4qoyqBW%2BIfii%2F5p3aw8XkSVxFGUHc6Xt4w3DkQcuzEoW9tgOFbiFkwK40n%2Bx3zJAJpc4DGQeuZIpc9Q0jqtpfeehIhWojJGEtVDbNrA6Fe9XyaFhH%2BYk5QAHOPOiK%2BOJkY%2F9K2LEqKRtdoBP5MkjlKhUhhmd2QQnJBub2o132AE%2FX0r2v4d4ASq%2BOYQQlIF6hU8b%2FgNb9H6QXystKLoFVa0D4FO8sKLv2ZIeiMIjEJ9jerB2ahIL4GZ%2FgId4REPlQUbdMaJ2DgaZkjiq9NPPVXuxlzYgTRai1iQLnSoxoBA%2BEKsmqIbsl4wiL7CyQY6pgHSCh3L4EK1WLaZzfj1FxmzGV0K2Ev%2BN8EmLFQ8ZbEY8GwpnAqDwy%2Fza88iHlmBATQDyoCuUzSCkLn6nehDAdRhs1Fn7Uhd%2BaSHMOoMc2IfGWTX3nK9Cnncg%2FcytBSZVOPcCXtZgd7GLwpi08mlDFiRd9my43h9Ii4iq%2BQtKktxQGsRJ78OXHiGzTCYiP5WlWsW8gS%2BDvG15VINMxBHIvJbGi4rTogd&X-Amz-Signature=74618b9fdd5ddd55256c6b689f9361d0b94a0f978ab7a2fa636affc08a1de5fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4COTZ3I%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIDw4HT8wjlRPzvK%2BFz56tbPeaDlrI4C9kgdYssxQOjFJAiB5ZR4lSOhIb8jJh%2FO6zM5jYpic8uUYuECcCI0OLR%2BK6yr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMHVbv1LzIhEt9DIjgKtwDkJZFjXTp0WrnSpbiF%2B%2Flonz7Hf2rvd0Got3FqdViNRIweyDHEzVcyKBmV0d8gJniN51PYJiVEY9FbVaPiYwA6JBA2i7j%2FLMdVDrZiJHSrO1R%2BC1b%2FPVv7g1TNgG9NMQLtJeouILOxMZwyuBRRsBsdtDaQxYh80pUPTDJdeWQo5zWD9wM5WK24vs4Gbj3JsoV6%2FUXIEIuxL%2BIA6GK%2FdAs8Cv1M5jUnrFUpTsXoivvxRtvTk5gRml5yY8uy4cBno5K9KgAbkQbbOc4z34WLrdMUcljPNBX1zMxVz6BqaxTACiAJoPtQIxvtFWkJZ7jJxhzbQ3Ph4qoyqBW%2BIfii%2F5p3aw8XkSVxFGUHc6Xt4w3DkQcuzEoW9tgOFbiFkwK40n%2Bx3zJAJpc4DGQeuZIpc9Q0jqtpfeehIhWojJGEtVDbNrA6Fe9XyaFhH%2BYk5QAHOPOiK%2BOJkY%2F9K2LEqKRtdoBP5MkjlKhUhhmd2QQnJBub2o132AE%2FX0r2v4d4ASq%2BOYQQlIF6hU8b%2FgNb9H6QXystKLoFVa0D4FO8sKLv2ZIeiMIjEJ9jerB2ahIL4GZ%2FgId4REPlQUbdMaJ2DgaZkjiq9NPPVXuxlzYgTRai1iQLnSoxoBA%2BEKsmqIbsl4wiL7CyQY6pgHSCh3L4EK1WLaZzfj1FxmzGV0K2Ev%2BN8EmLFQ8ZbEY8GwpnAqDwy%2Fza88iHlmBATQDyoCuUzSCkLn6nehDAdRhs1Fn7Uhd%2BaSHMOoMc2IfGWTX3nK9Cnncg%2FcytBSZVOPcCXtZgd7GLwpi08mlDFiRd9my43h9Ii4iq%2BQtKktxQGsRJ78OXHiGzTCYiP5WlWsW8gS%2BDvG15VINMxBHIvJbGi4rTogd&X-Amz-Signature=b94a1cf873dd63bfdc556fff1f1ea2e590c60412c02d42186186926acd786001&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

