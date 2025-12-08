---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EZMETPW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T004626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BJ4XZZIAh%2FFBxBFNIAtwzCj5vHxHLT2JbWA05qWLoqgIhALOZGRvyH6OrDQOfzGh9XWn%2BdVA7IIt6j5VcrQ5a4mEOKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFk7jKvdeKO%2BbOnxkq3APXLiXf8ys3dvW0zOM87fsFErGEFZpBkw3jOpHZe4OjL3vcZjkR8oJzcmYCTU1kyP7quwdlPsCUwzkyKWiMiFYUkGceWE%2B8SVSgdl1nk%2B8j12LmkY0iJNEWj8p%2BkQ22dTuXX6EbUTNHEpAs4MWQAbqOJJw9WUXkrtJxLJCkrkHcUTxGTNiebZDEjWMMgftEZrMfbA1R4%2B2%2FhYbxgdCQFZ884R4yGRAOKnrYphugc%2F8%2BHzlPvu3KxJIal7L3h6Xb9Mbudp6kuvKBkTW8cKiLyz1l91chjLE06a8D%2Brx48djE8nDWGBXX0PyzgPQq9LJt7bPsw8SaUJJWbI9W7Uo9yBGMQewOMMftZy1ZPN856dXb7k53WnffJJfrntrT4CumuVV58kvxXnamVb9gG6t8N2L9UEgnY6icaXAsiMqAosgHPw8x8a0W5hYux0L5bUuEhaX9j8V6FRH1KcsoQ2ZUXk5Lx05ThdG1VHiAqoJUYl6MZBpAoS7lMEp%2F2urS1nOP5ZIvs04RzWpWOGibdRvkT7aKosLqCfdDV24Luj6ch6HH03oKsNaaXdBod8z5JNQRyB3aTuNudiE68ZZjQ%2FkA0O7dKvImU3u49mFB%2Bmab1c%2BA9a9S0W8LhCj9EXgBQjD0odjJBjqkAaRCRQJ39Pa0SZKH6QuFXMgWun2oq9%2FjxxsfMnpO9xY4ycY%2B4m2UVgZCBY4nDmMkcxjKi%2Bw7Ud5r3VnPyQqOMb9m8TFAWAjhUbKF6yc1JE1Ugpsab2N3V6SPLNFE4qw3dRhwaFEX5wtRV6uSgX9oNHLQ%2FaBGBZB0UyaKQNOdUA8rgNK8oLz55AVgy%2Bft2ozZlf8k0yzhg%2Fxqqe2W%2BaHY242iBb%2FE&X-Amz-Signature=98aa761c93c69bd653e212ee9aef360985aa014311fcb078cf6001ad75c7cf5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EZMETPW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T004626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BJ4XZZIAh%2FFBxBFNIAtwzCj5vHxHLT2JbWA05qWLoqgIhALOZGRvyH6OrDQOfzGh9XWn%2BdVA7IIt6j5VcrQ5a4mEOKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFk7jKvdeKO%2BbOnxkq3APXLiXf8ys3dvW0zOM87fsFErGEFZpBkw3jOpHZe4OjL3vcZjkR8oJzcmYCTU1kyP7quwdlPsCUwzkyKWiMiFYUkGceWE%2B8SVSgdl1nk%2B8j12LmkY0iJNEWj8p%2BkQ22dTuXX6EbUTNHEpAs4MWQAbqOJJw9WUXkrtJxLJCkrkHcUTxGTNiebZDEjWMMgftEZrMfbA1R4%2B2%2FhYbxgdCQFZ884R4yGRAOKnrYphugc%2F8%2BHzlPvu3KxJIal7L3h6Xb9Mbudp6kuvKBkTW8cKiLyz1l91chjLE06a8D%2Brx48djE8nDWGBXX0PyzgPQq9LJt7bPsw8SaUJJWbI9W7Uo9yBGMQewOMMftZy1ZPN856dXb7k53WnffJJfrntrT4CumuVV58kvxXnamVb9gG6t8N2L9UEgnY6icaXAsiMqAosgHPw8x8a0W5hYux0L5bUuEhaX9j8V6FRH1KcsoQ2ZUXk5Lx05ThdG1VHiAqoJUYl6MZBpAoS7lMEp%2F2urS1nOP5ZIvs04RzWpWOGibdRvkT7aKosLqCfdDV24Luj6ch6HH03oKsNaaXdBod8z5JNQRyB3aTuNudiE68ZZjQ%2FkA0O7dKvImU3u49mFB%2Bmab1c%2BA9a9S0W8LhCj9EXgBQjD0odjJBjqkAaRCRQJ39Pa0SZKH6QuFXMgWun2oq9%2FjxxsfMnpO9xY4ycY%2B4m2UVgZCBY4nDmMkcxjKi%2Bw7Ud5r3VnPyQqOMb9m8TFAWAjhUbKF6yc1JE1Ugpsab2N3V6SPLNFE4qw3dRhwaFEX5wtRV6uSgX9oNHLQ%2FaBGBZB0UyaKQNOdUA8rgNK8oLz55AVgy%2Bft2ozZlf8k0yzhg%2Fxqqe2W%2BaHY242iBb%2FE&X-Amz-Signature=e1eb72b395166b923b2dfee4f2f51c758ee88e728ef14461228706d5ec37d8f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

