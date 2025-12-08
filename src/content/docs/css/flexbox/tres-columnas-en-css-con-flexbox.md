---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSGJFVQ2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T144857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6uR85a8S0pEWYnFtfvlI9kTAQQ%2FguiR%2Fe3L%2FinY2wFAiEAhoVMWvK6eGeYLpclWFTmF%2BP%2F%2B9Udv8XUxBcTF9oKJe8qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgKMvYzIal9UIMRIyrcA7pmxMrAKNzanu2yOPyru%2BDQlvxMwC3NnJLBRbaktyFXL4%2FNiS6JV96tsURSgSkGAwzjueoWaQHICZeGA6UrytV2Tlp1UtUEzQG491umq9TngV2qUP8b%2FHhuL7QXkDGjhkdAkeiLMAlIfgTvu1GRq3jPG4Beg6PMwESwp2XUeX3ndE9nnn%2BX7VTt61f1fppBCP84bBVZSLQWcVtjvox7R21zCSDog6rasaNcqjOHNkC0xQYrCVU6iEGuU%2FzjefY1iVo%2FeVLFaQIZDbvhvhXJq7Afg4kXH6UJ2lCsjOyK0dksyjKLirY%2F%2BGlOt143F9SRKYN2dsB9rB0xPSGlSQcIiFIxhUPR%2Fm%2FxeVWpWfawFrks%2FTjI8RO%2BvG59ScEMVQCnLpJBdOnZIA%2FnGkZoGFfqQXdwmJVlsCEF0C5F5fimdvxh6qlGFynZnBkqju3oJCh8HQiBlpred9zilus8U2cWXs371K0YDZTtOz6oTdwtD7XsjSQMpKiXwxgQ0rF1Gvv6vBbM%2Fb9iaZ8WbRZiNZBsVnzY9cCwOL31sVGCr3BSyEPyvsHOo9b4aYnh7WLSy8L2l6qOdjI3%2FAO4i1JBA826SHYIPQj3HZUNdBi%2FWRJrpmui2jaA59hvg5Xi8UjeMNjD28kGOqUB0IDrmexIYqLHIjdvuWKphZGpBdeM9LchTLXzTkqBLWc49RtEwA7xt2TiUR7efhw%2Be6E0dkKxo2VEDu8nsRzop%2BZPqsoTOkO1qvODgpvM1KX012Rb4HcoGIp3VpQZ8nqkefsYqO7R2BC6nrWkEDV2%2B6jCXK6UmfOOw8lfPX9HZpFYosuDeOQTl2tCOWd5FFiqOOU2PNQEtrcpWs1B9BknucoH8GGl&X-Amz-Signature=238ee6303b45386f255c718eefc91b44e96f2b1995b9a8cb292961eed55007c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSGJFVQ2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T144857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6uR85a8S0pEWYnFtfvlI9kTAQQ%2FguiR%2Fe3L%2FinY2wFAiEAhoVMWvK6eGeYLpclWFTmF%2BP%2F%2B9Udv8XUxBcTF9oKJe8qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgKMvYzIal9UIMRIyrcA7pmxMrAKNzanu2yOPyru%2BDQlvxMwC3NnJLBRbaktyFXL4%2FNiS6JV96tsURSgSkGAwzjueoWaQHICZeGA6UrytV2Tlp1UtUEzQG491umq9TngV2qUP8b%2FHhuL7QXkDGjhkdAkeiLMAlIfgTvu1GRq3jPG4Beg6PMwESwp2XUeX3ndE9nnn%2BX7VTt61f1fppBCP84bBVZSLQWcVtjvox7R21zCSDog6rasaNcqjOHNkC0xQYrCVU6iEGuU%2FzjefY1iVo%2FeVLFaQIZDbvhvhXJq7Afg4kXH6UJ2lCsjOyK0dksyjKLirY%2F%2BGlOt143F9SRKYN2dsB9rB0xPSGlSQcIiFIxhUPR%2Fm%2FxeVWpWfawFrks%2FTjI8RO%2BvG59ScEMVQCnLpJBdOnZIA%2FnGkZoGFfqQXdwmJVlsCEF0C5F5fimdvxh6qlGFynZnBkqju3oJCh8HQiBlpred9zilus8U2cWXs371K0YDZTtOz6oTdwtD7XsjSQMpKiXwxgQ0rF1Gvv6vBbM%2Fb9iaZ8WbRZiNZBsVnzY9cCwOL31sVGCr3BSyEPyvsHOo9b4aYnh7WLSy8L2l6qOdjI3%2FAO4i1JBA826SHYIPQj3HZUNdBi%2FWRJrpmui2jaA59hvg5Xi8UjeMNjD28kGOqUB0IDrmexIYqLHIjdvuWKphZGpBdeM9LchTLXzTkqBLWc49RtEwA7xt2TiUR7efhw%2Be6E0dkKxo2VEDu8nsRzop%2BZPqsoTOkO1qvODgpvM1KX012Rb4HcoGIp3VpQZ8nqkefsYqO7R2BC6nrWkEDV2%2B6jCXK6UmfOOw8lfPX9HZpFYosuDeOQTl2tCOWd5FFiqOOU2PNQEtrcpWs1B9BknucoH8GGl&X-Amz-Signature=4bb5a3f37d09048c8306545c896399fac7199a380fbfba9e83d848e338e32606&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

