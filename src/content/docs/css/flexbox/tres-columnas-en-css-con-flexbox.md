---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THJ43ICX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T101757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPGHeAfNdF2nzJJLYui%2FoiWQiyTwAXOccwIqY%2BMUMuywIgJo1HrUou8EIt%2F1zVdkiIGuwObx%2BvsvuwyG8KfF0xz1gq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDDziasesJF%2B2yTvLtSrcAwd8zBJG2lkVuOcrKpWdOlDBhlDN5pjjhZQuCTTgc%2F6G5pGFy%2FTEqNdgIdDoLBJ73B1rpWTiyxr7miw66kv6IFBuZTc0Ulz9UQGDvOt%2FTPZCm3IvUwatTnewXQ7EuEpO7VDKkcqfcrs1xt7FdJTlgu8KhRLJLFmN9bdXhpvNimbh1X6EcPzI5zwtgy%2B6KSxbWkwd%2Fl5cn7famaXsvxJJvnZsCVWKAXudFq%2FyL702Z4%2FRHl5%2FZJZdyJy5GQVeOkCjHmzPHd1nqb5jo2pvbCRPHmxFnZo2%2BhH8jHXkdUlPWnOJSYVP9nXJhCJjw0lnUKHuaqIW%2FC6F3aE8%2FG1gImK6fyFSgRe8L1KXyf3D3etB2VROlHQ89K92PciyNE4lC5FmpZo65g0z669F8E3rrB3Z9TqKKrQyC1H%2Fok%2FKDOBaO2gbLTEhLiJD1jIirZKFmYZAJYjPUgczGxVjwRk0V5CTjPDf6MEXv%2BXfOnSmlA7hLFKoSTL6zkjKTYHmE9OfTQySlK5wMjrCU8bwLKs2uQUzgkH2GCTtF638L69aezUVuMhebglZ5%2FN3uKeaIw%2FGNXXH%2F8UwKx%2FWaOqsGiLmBbcZr1vK8eTh7EseBUW%2BfT3VMNxUe5OdF191luPeotBRMOrGyskGOqUBxBwcmCkFess31tzGNFjmx380b677FTpk75HNfzRuD%2FWaSu2tHYhqK0pXOpi%2Ff58JZq2eaTL6t7%2FP5q%2Br8ZcNY%2B61pRYbXUDp7%2FKgoWAcQa8pjTp1I07xmxXvPOmgh7X3Vjw8%2B7ps6XKABlPB%2B8VOr0%2BUF7U44QyRqSCdTXnxG3YveEtWAms1WIz48wh6XeJiDElBYQel6Ca2kGK8S024ANmek8lN&X-Amz-Signature=86ca4db5287459beaa879376aa81a24a78a311f3e23439adcd75a6aaa0f8392b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THJ43ICX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T101757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPGHeAfNdF2nzJJLYui%2FoiWQiyTwAXOccwIqY%2BMUMuywIgJo1HrUou8EIt%2F1zVdkiIGuwObx%2BvsvuwyG8KfF0xz1gq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDDziasesJF%2B2yTvLtSrcAwd8zBJG2lkVuOcrKpWdOlDBhlDN5pjjhZQuCTTgc%2F6G5pGFy%2FTEqNdgIdDoLBJ73B1rpWTiyxr7miw66kv6IFBuZTc0Ulz9UQGDvOt%2FTPZCm3IvUwatTnewXQ7EuEpO7VDKkcqfcrs1xt7FdJTlgu8KhRLJLFmN9bdXhpvNimbh1X6EcPzI5zwtgy%2B6KSxbWkwd%2Fl5cn7famaXsvxJJvnZsCVWKAXudFq%2FyL702Z4%2FRHl5%2FZJZdyJy5GQVeOkCjHmzPHd1nqb5jo2pvbCRPHmxFnZo2%2BhH8jHXkdUlPWnOJSYVP9nXJhCJjw0lnUKHuaqIW%2FC6F3aE8%2FG1gImK6fyFSgRe8L1KXyf3D3etB2VROlHQ89K92PciyNE4lC5FmpZo65g0z669F8E3rrB3Z9TqKKrQyC1H%2Fok%2FKDOBaO2gbLTEhLiJD1jIirZKFmYZAJYjPUgczGxVjwRk0V5CTjPDf6MEXv%2BXfOnSmlA7hLFKoSTL6zkjKTYHmE9OfTQySlK5wMjrCU8bwLKs2uQUzgkH2GCTtF638L69aezUVuMhebglZ5%2FN3uKeaIw%2FGNXXH%2F8UwKx%2FWaOqsGiLmBbcZr1vK8eTh7EseBUW%2BfT3VMNxUe5OdF191luPeotBRMOrGyskGOqUBxBwcmCkFess31tzGNFjmx380b677FTpk75HNfzRuD%2FWaSu2tHYhqK0pXOpi%2Ff58JZq2eaTL6t7%2FP5q%2Br8ZcNY%2B61pRYbXUDp7%2FKgoWAcQa8pjTp1I07xmxXvPOmgh7X3Vjw8%2B7ps6XKABlPB%2B8VOr0%2BUF7U44QyRqSCdTXnxG3YveEtWAms1WIz48wh6XeJiDElBYQel6Ca2kGK8S024ANmek8lN&X-Amz-Signature=b01e0d4daae69530fddb839225b0325e04d91a18f5621e6d8934048bf5c0454d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

