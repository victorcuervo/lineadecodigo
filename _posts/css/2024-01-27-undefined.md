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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAQDPBEA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T060212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCpzcahG1VR%2Fcg3fs%2BnvX5eOOkyU4y0bP7FEOQ38y1fMwIgckiKf5emoWUHMbziRUEPBEF3BAiIQhXKzbeYzBJI1l4q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDIun3Oa48TFMEiuy7SrcA6O5I%2FUw4ZlWexUahY0VfyTo1PLOfZLSEau%2FFrGQ3mh7e2X%2BfN%2BI1k56plX5Son6gbjMgtNjI7diSu5qCDBgvl2gSB148IDls%2FYZfemeInQNGDvfqJ61KbKm3Py%2BF2t9SLqZbdHw10wHiGKKoAycq%2Be2mu5cWuHPTF%2Flwc26TtFB1dwprHBTse3lFMXQ%2BZ9vJVklRPHyBRqlb33%2BVVBPfhMVCF1zundapfQ9bLiUQL657cgH0AMiDS%2FpV8CiPRnyBMjsFgECdTtj4gQ0SUMWVphVO0Z1%2FDkZY8fYrXrs%2B3YoV7%2FKDY%2BXMKZdpoQwAUoGnGzZbaDRe4FEAmCnrLuJURyoI1dozHlA9it%2FF32Q%2B8mKwnBAcHbjO5BQ4Vf6kFqIEhJhgsY7aUzKDTBiaAX%2B8YRWAg%2FT8%2BbI0H0q9ewjuOzJ9zJz9bj%2Fz5ZzLukef%2Fy%2Ftn8AaB0it8385vPZxo40xq72V6OvBJeS1R9MOAwYimjgfbKQuiZG3gXJBXR2QIL4n6wtRPPTYho2JT0F9xYimXkqxdY4WVhpGZPWO6djObw7MjlqTdqOiOUXN4iTFDuf0xUXUi3c6Bsaw1l%2F7EUPd2aZivs0ngtO%2BR6IsZ3M16x8gg%2F2aHYUEww5dUDtMJiav8kGOqUBzJVDczJmVleduT%2BDLJVN6Pe76frQzRAjHgDXhc3iKfHu1VXk0mTLgYMmX7BmLRjUipU1zONVwxKKxZsTGOyq6oYiolrmwAXkRbQZQQucFu4ogeeUaxxRFsFQrYt%2FZYftkXb8y%2B%2FkQtXXSsP4WMxkZxaqBJn8Y0vCHgYgcUXryYhIUeBww9dVad7Ze0X5WTNEL4iGxvmwzVxUe%2F2ItN5FIGY%2BoS9V&X-Amz-Signature=407471105ce11d7f5a1a66f72fd425061d715eeb237815d1be01b7b87c3339df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAQDPBEA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T060212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCpzcahG1VR%2Fcg3fs%2BnvX5eOOkyU4y0bP7FEOQ38y1fMwIgckiKf5emoWUHMbziRUEPBEF3BAiIQhXKzbeYzBJI1l4q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDIun3Oa48TFMEiuy7SrcA6O5I%2FUw4ZlWexUahY0VfyTo1PLOfZLSEau%2FFrGQ3mh7e2X%2BfN%2BI1k56plX5Son6gbjMgtNjI7diSu5qCDBgvl2gSB148IDls%2FYZfemeInQNGDvfqJ61KbKm3Py%2BF2t9SLqZbdHw10wHiGKKoAycq%2Be2mu5cWuHPTF%2Flwc26TtFB1dwprHBTse3lFMXQ%2BZ9vJVklRPHyBRqlb33%2BVVBPfhMVCF1zundapfQ9bLiUQL657cgH0AMiDS%2FpV8CiPRnyBMjsFgECdTtj4gQ0SUMWVphVO0Z1%2FDkZY8fYrXrs%2B3YoV7%2FKDY%2BXMKZdpoQwAUoGnGzZbaDRe4FEAmCnrLuJURyoI1dozHlA9it%2FF32Q%2B8mKwnBAcHbjO5BQ4Vf6kFqIEhJhgsY7aUzKDTBiaAX%2B8YRWAg%2FT8%2BbI0H0q9ewjuOzJ9zJz9bj%2Fz5ZzLukef%2Fy%2Ftn8AaB0it8385vPZxo40xq72V6OvBJeS1R9MOAwYimjgfbKQuiZG3gXJBXR2QIL4n6wtRPPTYho2JT0F9xYimXkqxdY4WVhpGZPWO6djObw7MjlqTdqOiOUXN4iTFDuf0xUXUi3c6Bsaw1l%2F7EUPd2aZivs0ngtO%2BR6IsZ3M16x8gg%2F2aHYUEww5dUDtMJiav8kGOqUBzJVDczJmVleduT%2BDLJVN6Pe76frQzRAjHgDXhc3iKfHu1VXk0mTLgYMmX7BmLRjUipU1zONVwxKKxZsTGOyq6oYiolrmwAXkRbQZQQucFu4ogeeUaxxRFsFQrYt%2FZYftkXb8y%2B%2FkQtXXSsP4WMxkZxaqBJn8Y0vCHgYgcUXryYhIUeBww9dVad7Ze0X5WTNEL4iGxvmwzVxUe%2F2ItN5FIGY%2BoS9V&X-Amz-Signature=8682728d683549cb81a06370d345c6f675590454eecb6e275c7b6b7603e11061&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

