---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5DEQXRL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T101220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCTvv5UQ5hRur9a%2FYtI%2FfzAG9rcMfkiSa23QXK%2BN%2B79%2FgIhAOnNpqTjX9ZcMLf0Rgq0NZ0yuP%2F%2BGMnHuvnKxwGo3ttEKv8DCEIQABoMNjM3NDIzMTgzODA1IgwRO0WM2HnFgFFR1YIq3APYA5RCcyB2TnOU2Vl8opf1zQIrEqk29KQQiEPEKo1Oi%2FFfgsE25VjaO7ESIFBUVm%2Bh4WsXT%2B3lkCfHqlx38xJN4fkhWX%2B1g6vup4uIU0S5%2BLFo5kbgya9Wt5NRR38HW14yJeRYpcotEXb5L%2FD98aW0oZKlfFs6zxIKOmIsFvW0A%2BlbBL7LHSir2ZHGKoFueDmZFpqu%2BuI04awb0%2F6V%2BSD2TErGgBbCd7qu3qUdHCLSDkM%2FCLtOWyzlRvjEByZyzyEh2LlOGGRop%2Ff56R1lCAGRfJnwHK4HiMdga1%2BCy35ENmfmqCICYM6TLcIpnsv5ownfkNM59o1jFyDfXm0BJ%2BVz8tz%2BG5Hkn%2FJ%2BwqqhDw37KzDVizITwmnLZh44jYQMKYOeeJZf7wESt2ywYTlx12oZyH1EVJqfKnRYAhyk0yuxtktoKb4c3Pgac5qnoOxGd6u%2F%2B4M9yAYhRIRelJRZHV6EFJ%2Fq4KUFfJUXOjxuF3zqHKr1XwOjyvgs9fzgHHORbmQL4coC5oo02aOiWS6B%2BPh07NuEzjmioW9c%2BaCwKTVwBJ%2FUDxVb%2BiT0emjpMzIeTcpQNqNmYP%2Byv8EqIShlVIpxImCIXvjVeilmIsN63QomBzt0%2FOg1z0PUj3p9FDD1q8XJBjqkAaaIGu8cm1L3EgjvdOGqcgxlwGYK5XxrY7DmFAeBffkyKWmVSTahNhEPsroBftJmHnbKRP%2B%2BSfV5dwugequuhSCusmM3s%2BbGv%2BXyZEze%2FEXN4tSn0hb5fWFig4OaaUCz5SuFlFg22Y6Tdr%2F6%2BnnlckxKcNEjBzXOiZxiGG%2BnmKkUp082oYOMesNV1EBKpXxrAO5cIE2DLTeMPyEKC7XNNE%2Bu3hYI&X-Amz-Signature=c1ca76153a1af1e2b7046d89ef7063df17c5f09a6344481b7b8eb2313e0304bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5DEQXRL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T101220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCTvv5UQ5hRur9a%2FYtI%2FfzAG9rcMfkiSa23QXK%2BN%2B79%2FgIhAOnNpqTjX9ZcMLf0Rgq0NZ0yuP%2F%2BGMnHuvnKxwGo3ttEKv8DCEIQABoMNjM3NDIzMTgzODA1IgwRO0WM2HnFgFFR1YIq3APYA5RCcyB2TnOU2Vl8opf1zQIrEqk29KQQiEPEKo1Oi%2FFfgsE25VjaO7ESIFBUVm%2Bh4WsXT%2B3lkCfHqlx38xJN4fkhWX%2B1g6vup4uIU0S5%2BLFo5kbgya9Wt5NRR38HW14yJeRYpcotEXb5L%2FD98aW0oZKlfFs6zxIKOmIsFvW0A%2BlbBL7LHSir2ZHGKoFueDmZFpqu%2BuI04awb0%2F6V%2BSD2TErGgBbCd7qu3qUdHCLSDkM%2FCLtOWyzlRvjEByZyzyEh2LlOGGRop%2Ff56R1lCAGRfJnwHK4HiMdga1%2BCy35ENmfmqCICYM6TLcIpnsv5ownfkNM59o1jFyDfXm0BJ%2BVz8tz%2BG5Hkn%2FJ%2BwqqhDw37KzDVizITwmnLZh44jYQMKYOeeJZf7wESt2ywYTlx12oZyH1EVJqfKnRYAhyk0yuxtktoKb4c3Pgac5qnoOxGd6u%2F%2B4M9yAYhRIRelJRZHV6EFJ%2Fq4KUFfJUXOjxuF3zqHKr1XwOjyvgs9fzgHHORbmQL4coC5oo02aOiWS6B%2BPh07NuEzjmioW9c%2BaCwKTVwBJ%2FUDxVb%2BiT0emjpMzIeTcpQNqNmYP%2Byv8EqIShlVIpxImCIXvjVeilmIsN63QomBzt0%2FOg1z0PUj3p9FDD1q8XJBjqkAaaIGu8cm1L3EgjvdOGqcgxlwGYK5XxrY7DmFAeBffkyKWmVSTahNhEPsroBftJmHnbKRP%2B%2BSfV5dwugequuhSCusmM3s%2BbGv%2BXyZEze%2FEXN4tSn0hb5fWFig4OaaUCz5SuFlFg22Y6Tdr%2F6%2BnnlckxKcNEjBzXOiZxiGG%2BnmKkUp082oYOMesNV1EBKpXxrAO5cIE2DLTeMPyEKC7XNNE%2Bu3hYI&X-Amz-Signature=d81b4cf387b8dbdc577d226ca3640410d029d99479d013548f6bbede1859087c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

