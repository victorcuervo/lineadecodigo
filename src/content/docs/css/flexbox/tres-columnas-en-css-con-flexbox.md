---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKACIXY5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T103445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYWEQEEWgjVcES3tyagCXu7mJ0bEa97t5IJ0WuEV3rqgIhAIoz50WfQMKrjOzsdTds9LiQdPjNhFqjM1saZpvKloa%2FKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysYtBVthsWO3%2Bjxhkq3AOq9cHrWurtDMAZZgERXoKB0rS2SAdEgM5UNu6RXv1I0qR6pLdJakLx6ey8o8y99fvuSoXN%2BNqThU5jO%2FV8ctYjJlvtninZxQkwiZaAEPpUdCMZ72F3ZGbFjdawAHhCqmQeJ4NOh7e80d5GJe0LrhYVs5S7lPW9EAgm43TZIAU%2BZJNLlhOylswy7RxWtAlB1uKjH5Qpuq4W425yvZbql3rQjIMYXdPBWpjRfz0oJWIJAveneehsOJAp2Il1fkEkFZxnGokHXRtMPDlhJ5B5sm1u6e47yfbEByEnOrFwXVNHmyq%2FZo1Kl0m7FdwehldlMJ2iPhWO%2BODJZSS5%2FoctyYiBVRoURyqJjsodlAMyoo1bTYHIZ5WMPVoFn1T3wseNlBCXGeWWrVG3khE94m11iyGI70tVSiP7%2BPAhFVo%2F96tlBv0JIC%2FnXlheSKGc8JuUXrwrVyEYIEG1dbP%2BXbB4ilgbmzRaiXs8TPtCW%2B7oHoL8mN2BYwN%2FjejaneFDDxYGkICCiSYYIOMhS68Y91eY4OyY1P4pbTqn%2BitpYkHR8pMlQkDphSpKdlfNAubm2tCTfhd95FWK4tngyKIqoNchxpuKbemOehS6p381VBNudGtmfK1EyKxmNEVCD0tLyTDh7dnJBjqkAdE4y8An9n8Qk263BKzxQUlTXCW7ueVmBtDHPak5ZSAdLAytG66WNInhVdRw9x8tzu5o4nzXmC7irirJ7mmt9Ixb1nx2qRkRO5KXPIGB5WFk%2B6ZT%2F3KVLjYF0n70E%2FM6uN7%2BVFV9LzBVhOxN%2BkLqBvm7ldWYsQiU8CFuzRyfrTnPUz78DkQ30T0fTv4smr18qXL89pwk9K%2FSgVadfaVGKhLxUjCN&X-Amz-Signature=d179703e2453fc6bb6b2ab903ba1d15fe7327a26e7bf85c8b00f6e5dbbe8c3c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKACIXY5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T103445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYWEQEEWgjVcES3tyagCXu7mJ0bEa97t5IJ0WuEV3rqgIhAIoz50WfQMKrjOzsdTds9LiQdPjNhFqjM1saZpvKloa%2FKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysYtBVthsWO3%2Bjxhkq3AOq9cHrWurtDMAZZgERXoKB0rS2SAdEgM5UNu6RXv1I0qR6pLdJakLx6ey8o8y99fvuSoXN%2BNqThU5jO%2FV8ctYjJlvtninZxQkwiZaAEPpUdCMZ72F3ZGbFjdawAHhCqmQeJ4NOh7e80d5GJe0LrhYVs5S7lPW9EAgm43TZIAU%2BZJNLlhOylswy7RxWtAlB1uKjH5Qpuq4W425yvZbql3rQjIMYXdPBWpjRfz0oJWIJAveneehsOJAp2Il1fkEkFZxnGokHXRtMPDlhJ5B5sm1u6e47yfbEByEnOrFwXVNHmyq%2FZo1Kl0m7FdwehldlMJ2iPhWO%2BODJZSS5%2FoctyYiBVRoURyqJjsodlAMyoo1bTYHIZ5WMPVoFn1T3wseNlBCXGeWWrVG3khE94m11iyGI70tVSiP7%2BPAhFVo%2F96tlBv0JIC%2FnXlheSKGc8JuUXrwrVyEYIEG1dbP%2BXbB4ilgbmzRaiXs8TPtCW%2B7oHoL8mN2BYwN%2FjejaneFDDxYGkICCiSYYIOMhS68Y91eY4OyY1P4pbTqn%2BitpYkHR8pMlQkDphSpKdlfNAubm2tCTfhd95FWK4tngyKIqoNchxpuKbemOehS6p381VBNudGtmfK1EyKxmNEVCD0tLyTDh7dnJBjqkAdE4y8An9n8Qk263BKzxQUlTXCW7ueVmBtDHPak5ZSAdLAytG66WNInhVdRw9x8tzu5o4nzXmC7irirJ7mmt9Ixb1nx2qRkRO5KXPIGB5WFk%2B6ZT%2F3KVLjYF0n70E%2FM6uN7%2BVFV9LzBVhOxN%2BkLqBvm7ldWYsQiU8CFuzRyfrTnPUz78DkQ30T0fTv4smr18qXL89pwk9K%2FSgVadfaVGKhLxUjCN&X-Amz-Signature=219deb6f3fdda37d1effb5eee4cd8d8ddcd66d36c3f18b5fe1fe4b3deecb16b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

