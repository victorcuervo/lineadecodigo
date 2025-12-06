---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIK3RFTA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T191045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH7f%2F9atnzmGbpq%2FbYkd9GHFmHl7EmJ%2BsDaSxIef1Ct%2BAiAHFdv0wJcS1uv2WQ%2BPevKw7q8QHu%2B%2BcVsdegNpDu4otyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMT74qNEZbnCun1%2BHgKtwDQ%2B0%2FiGc4vpzrCLF%2F7Pl9PW7mC79CE9sQmN7z4IRQ13RMKj1qNs9SvC2ucEh2LWLWMxTRrsOJQMNQVBYXefOHmgPZedWpSegxA7JjoLa3KGvbYVV0BrTlrpu9kA9gNqUkualNaZyyscLwIM9%2FuWHMPUutdGc1Igv4%2FHWIsjAKMD49m6ViVP0RvEeSEJ%2BxshXeDciuINiwcTGbYMhXUw1a6gkUNrufWIKP%2B7SpHc%2Fu1vcO0S3u4d20kcynKzP%2FgX5HeMEM%2BUw6TENAGkX7tNF4eqyKNywLfRwNR5iDYMtoc4qgupykpbMibb3c75PR4x3ni%2FjJ3w71LK74tgX6peUGEblwoyyD%2BF0K%2FS%2BVzCmuibV57X8%2FT2%2BcLeOF89sMjxQ4%2FEgCmHCwEBYm7i1mQgRnxJAsZb5WyMewmuI7Sj9iaMZ4J7ZaXJI3TAau38V9VycEQzf6EuLavoFmd1cbPoVxb10gdLWafofVW4CcCtC8c82csZIZeN4N4cC15nTJ0yAY9vnAskKdJYn46VaaRrXY1ffarJoYVjLU1ngledtRwBSrruH3jJmzdT5je7%2Fjwqi2IXpkRmVoqen4tlMpol5y3X2OUsr3iMV3O97Ekd%2BSDP39F%2Bahc9K3LAxopjowjMfRyQY6pgFKxOKBsPGWS36jESgePume2oTYVDlTf066hCeuLr6CViRtslgZGoRRadW%2FZgfQF7UaLVR%2F6sCtw3g0hPvNPULncTyHUA8FUULuFLxUxOvVYl0Ma9x%2F07ylCv%2BhIvJFaYBvs09XU84XiKvRrDnZHFg2qDOhSsLny2pq4ZfkyZ7%2Bh%2BXPcLz5H%2F594AUFg0RFeUSlroDgbNXCzuoY4YNXq6CDs5e2Wvp5&X-Amz-Signature=58a1d670fc683913487c8f6c781dd385e3d76eb5824ea670505f96034b042b84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIK3RFTA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T191045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH7f%2F9atnzmGbpq%2FbYkd9GHFmHl7EmJ%2BsDaSxIef1Ct%2BAiAHFdv0wJcS1uv2WQ%2BPevKw7q8QHu%2B%2BcVsdegNpDu4otyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMT74qNEZbnCun1%2BHgKtwDQ%2B0%2FiGc4vpzrCLF%2F7Pl9PW7mC79CE9sQmN7z4IRQ13RMKj1qNs9SvC2ucEh2LWLWMxTRrsOJQMNQVBYXefOHmgPZedWpSegxA7JjoLa3KGvbYVV0BrTlrpu9kA9gNqUkualNaZyyscLwIM9%2FuWHMPUutdGc1Igv4%2FHWIsjAKMD49m6ViVP0RvEeSEJ%2BxshXeDciuINiwcTGbYMhXUw1a6gkUNrufWIKP%2B7SpHc%2Fu1vcO0S3u4d20kcynKzP%2FgX5HeMEM%2BUw6TENAGkX7tNF4eqyKNywLfRwNR5iDYMtoc4qgupykpbMibb3c75PR4x3ni%2FjJ3w71LK74tgX6peUGEblwoyyD%2BF0K%2FS%2BVzCmuibV57X8%2FT2%2BcLeOF89sMjxQ4%2FEgCmHCwEBYm7i1mQgRnxJAsZb5WyMewmuI7Sj9iaMZ4J7ZaXJI3TAau38V9VycEQzf6EuLavoFmd1cbPoVxb10gdLWafofVW4CcCtC8c82csZIZeN4N4cC15nTJ0yAY9vnAskKdJYn46VaaRrXY1ffarJoYVjLU1ngledtRwBSrruH3jJmzdT5je7%2Fjwqi2IXpkRmVoqen4tlMpol5y3X2OUsr3iMV3O97Ekd%2BSDP39F%2Bahc9K3LAxopjowjMfRyQY6pgFKxOKBsPGWS36jESgePume2oTYVDlTf066hCeuLr6CViRtslgZGoRRadW%2FZgfQF7UaLVR%2F6sCtw3g0hPvNPULncTyHUA8FUULuFLxUxOvVYl0Ma9x%2F07ylCv%2BhIvJFaYBvs09XU84XiKvRrDnZHFg2qDOhSsLny2pq4ZfkyZ7%2Bh%2BXPcLz5H%2F594AUFg0RFeUSlroDgbNXCzuoY4YNXq6CDs5e2Wvp5&X-Amz-Signature=1ddde5f30dd972b8d9d6dd21f9fbec64dce9851ff43797201158b213e61aa33a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

