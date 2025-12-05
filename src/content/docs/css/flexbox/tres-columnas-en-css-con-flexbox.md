---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QSK3NNX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T030336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9kpYi%2FkZw304QS%2Bt11d9pudVrwbb2CLtPe5iIT84LyQIhAIUI8UfP5dhCjHgmBWov3rdYK1zXtpAjOOyqnvnPpLqFKv8DCE8QABoMNjM3NDIzMTgzODA1Igzz3tTTuQMy9FlMlbsq3ANehq60r5Pn1I0x7%2BvaPxu08HeIeQD%2BG6wn8DGodpU%2FUfiqN%2BhK69j95%2BF9uAjy0LIiI0J2rwc%2BuDWm3iJ1yFlN4w3eXMqtF3xJBzIZeVeuPejLWRNgPwB4W19vMfv59OgzIBEr%2Fo7Ls%2BLbdrwS6Um%2FI6s7DAGfT0WhCrSEcKfl7ZJ%2BEDZFg3sE8nUlif7wQRHCzi6FatCGzLGd98%2Fbt6PAtoS9vVVoJeAMNZvB%2FGNkOeWwjuCsH0iWkQaxwhSqc7k1ayJa4UTlZmrbirtN2HisJ9o3Ob0uZqY%2Bw1%2BXHc0ebjlOwry%2BOe23F8JGCrFYxGSvE%2BYNvlcZYC2KLTZjoT8GbB0bR3imtUMZthfYm7geBuwgM0JnDlAGGUbqhDGACL2xB%2F07nYdyZYDV4xi3y7Grb0%2BylgptS%2FKjYd96SIF6JtsZyuEt0zi0kLXHgk4LXoygVhx%2BucyLiulBlB8LavCVwBz78KHF4w3BpQM5sz8XGCm30UMk087biBbR5jmGRgEFgkGclTXqLAzFaOnxJpuh8y5l6V1huuK587V1zqEPzdjcJelkztvEMYV2gL6yLPs8tLMndRV4zY6bpq01t%2B6HtYUsFL%2FKii23nWZ7hAiiavi2zPaV1kHFQsLKFjC2jMjJBjqkAbWVc4vI5Ihonmf28Mc6O4lqOdwm47I3MMygqnWuKau0gowxdH%2BdrYHW%2FXyvJnL2Z3ZTTBCdsxXWUThWG6YSEVZaAY%2FKT8lv4TfdKDlHr9EtQ%2Fqh6dcNrl4QPZHmT%2B8vVE7DJrVRTmrJlhguxXixNuCYxi%2BVE891OIY4c1zAWM%2BrR83KafxHKxsJXcQzBuZpYNcI5%2FSZVzKzU6QoDQs4MCVghL9J&X-Amz-Signature=ec82a2b772f792d104f02b7a2a97ecf7177cdc64353d1ad4d3143221903646ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QSK3NNX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T030336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9kpYi%2FkZw304QS%2Bt11d9pudVrwbb2CLtPe5iIT84LyQIhAIUI8UfP5dhCjHgmBWov3rdYK1zXtpAjOOyqnvnPpLqFKv8DCE8QABoMNjM3NDIzMTgzODA1Igzz3tTTuQMy9FlMlbsq3ANehq60r5Pn1I0x7%2BvaPxu08HeIeQD%2BG6wn8DGodpU%2FUfiqN%2BhK69j95%2BF9uAjy0LIiI0J2rwc%2BuDWm3iJ1yFlN4w3eXMqtF3xJBzIZeVeuPejLWRNgPwB4W19vMfv59OgzIBEr%2Fo7Ls%2BLbdrwS6Um%2FI6s7DAGfT0WhCrSEcKfl7ZJ%2BEDZFg3sE8nUlif7wQRHCzi6FatCGzLGd98%2Fbt6PAtoS9vVVoJeAMNZvB%2FGNkOeWwjuCsH0iWkQaxwhSqc7k1ayJa4UTlZmrbirtN2HisJ9o3Ob0uZqY%2Bw1%2BXHc0ebjlOwry%2BOe23F8JGCrFYxGSvE%2BYNvlcZYC2KLTZjoT8GbB0bR3imtUMZthfYm7geBuwgM0JnDlAGGUbqhDGACL2xB%2F07nYdyZYDV4xi3y7Grb0%2BylgptS%2FKjYd96SIF6JtsZyuEt0zi0kLXHgk4LXoygVhx%2BucyLiulBlB8LavCVwBz78KHF4w3BpQM5sz8XGCm30UMk087biBbR5jmGRgEFgkGclTXqLAzFaOnxJpuh8y5l6V1huuK587V1zqEPzdjcJelkztvEMYV2gL6yLPs8tLMndRV4zY6bpq01t%2B6HtYUsFL%2FKii23nWZ7hAiiavi2zPaV1kHFQsLKFjC2jMjJBjqkAbWVc4vI5Ihonmf28Mc6O4lqOdwm47I3MMygqnWuKau0gowxdH%2BdrYHW%2FXyvJnL2Z3ZTTBCdsxXWUThWG6YSEVZaAY%2FKT8lv4TfdKDlHr9EtQ%2Fqh6dcNrl4QPZHmT%2B8vVE7DJrVRTmrJlhguxXixNuCYxi%2BVE891OIY4c1zAWM%2BrR83KafxHKxsJXcQzBuZpYNcI5%2FSZVzKzU6QoDQs4MCVghL9J&X-Amz-Signature=8f7cf19524faa26ffb5f205c22f9657ab5e9ab0839ae397db332a9ad0f2850f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

