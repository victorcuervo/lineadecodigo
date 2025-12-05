---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z73XCSO5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T025712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7Nz8z77kQfZMda6rRR3GDWR%2Fh1clbQPX2jau2%2Fl20MgIhAIY9BuNBaMQpnr9vXhYdNW%2F4CeurvvMH6f2HB0O05MKiKv8DCE8QABoMNjM3NDIzMTgzODA1IgwPLmVkTlVwENojLKgq3AOcJo0vXJfZTgGVBfLSsAqo7hZ6bXYB5qSjBHuIHdwBn6evWFrn%2BOYmorOq8Vu5QwQa8gg%2FlNzhgEIoK1r6XM%2FQntOnNvaPsAtRMcHMFjmQTDtP2zxg1sH%2BItIPnJBxSC7S5f4HYxWp04KbhqJJyb73OlexfX0RuhH0O8qm5Ccg7uSFkoJUxW6ID26Hh90D3J44enb8WNmoNtqsAPajbPlMEY73wJMXVRCBQ2f93mTb9gqtzdO8gzAyleqxPZ5ouCZMOOsD1rXVcfJ7MZWak8ISR7B1B6cl6%2BLavcnOmsu5Kyb2rquMsSIS1REdG8NlSdwk9D7VEk6Vf1p%2FxtE%2BfEtZ5Lq3w5e%2FZCYrnnoVUQzRU0C5q0Z0WZ9OGHLc%2F1YDbJa%2BFZDfN25bHGg8H4Vu47Z2LKE3cAAEyeHH7JiLIm%2Fpbwdaz72gFSWUj11vbMRKb7f0zuRsWah8jvnVpmlyrIvNhMGMELL%2Fpq5WwAUqKc5dlgTxy9d63WEDzI3aquZRhdpdATDIurOOQBHgmEIIHNWF5pB%2BuWEdc9bEcBC%2BKxYBGUwefsZS4If6nJH8yjjCsxfHtr%2F2Y1epOO7wfAvopeLV1iNoS1FC4rQ%2B2tAhYGIsn3RalqP4wC8HGf0pXTCrjMjJBjqkAcB68PRAANcRLP1AFWehZV5OYxN53cilQWJjZa47EzBt3TSO0f4ysNuQt8FYOqqTsuH7oQLZit1mma9Yc8VSlR%2B%2FxKO%2B2sb%2F%2Bc7XHD0pP3tH71ZMiBNb8RcfDDew6tuULYEwol%2BbHxr5rzS2eV3voDc8ibZgMhxa7HvgswOjzQ9AgKVLeTPyo%2FiHKH8AkBhldW7izOxxkHwg4UWa1ciE93Nqgmow&X-Amz-Signature=bbf4a276a26e497cd8e41e1b793053ed5d608e3035b168be486c2450fcc46599&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z73XCSO5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T025712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7Nz8z77kQfZMda6rRR3GDWR%2Fh1clbQPX2jau2%2Fl20MgIhAIY9BuNBaMQpnr9vXhYdNW%2F4CeurvvMH6f2HB0O05MKiKv8DCE8QABoMNjM3NDIzMTgzODA1IgwPLmVkTlVwENojLKgq3AOcJo0vXJfZTgGVBfLSsAqo7hZ6bXYB5qSjBHuIHdwBn6evWFrn%2BOYmorOq8Vu5QwQa8gg%2FlNzhgEIoK1r6XM%2FQntOnNvaPsAtRMcHMFjmQTDtP2zxg1sH%2BItIPnJBxSC7S5f4HYxWp04KbhqJJyb73OlexfX0RuhH0O8qm5Ccg7uSFkoJUxW6ID26Hh90D3J44enb8WNmoNtqsAPajbPlMEY73wJMXVRCBQ2f93mTb9gqtzdO8gzAyleqxPZ5ouCZMOOsD1rXVcfJ7MZWak8ISR7B1B6cl6%2BLavcnOmsu5Kyb2rquMsSIS1REdG8NlSdwk9D7VEk6Vf1p%2FxtE%2BfEtZ5Lq3w5e%2FZCYrnnoVUQzRU0C5q0Z0WZ9OGHLc%2F1YDbJa%2BFZDfN25bHGg8H4Vu47Z2LKE3cAAEyeHH7JiLIm%2Fpbwdaz72gFSWUj11vbMRKb7f0zuRsWah8jvnVpmlyrIvNhMGMELL%2Fpq5WwAUqKc5dlgTxy9d63WEDzI3aquZRhdpdATDIurOOQBHgmEIIHNWF5pB%2BuWEdc9bEcBC%2BKxYBGUwefsZS4If6nJH8yjjCsxfHtr%2F2Y1epOO7wfAvopeLV1iNoS1FC4rQ%2B2tAhYGIsn3RalqP4wC8HGf0pXTCrjMjJBjqkAcB68PRAANcRLP1AFWehZV5OYxN53cilQWJjZa47EzBt3TSO0f4ysNuQt8FYOqqTsuH7oQLZit1mma9Yc8VSlR%2B%2FxKO%2B2sb%2F%2Bc7XHD0pP3tH71ZMiBNb8RcfDDew6tuULYEwol%2BbHxr5rzS2eV3voDc8ibZgMhxa7HvgswOjzQ9AgKVLeTPyo%2FiHKH8AkBhldW7izOxxkHwg4UWa1ciE93Nqgmow&X-Amz-Signature=1f0c3437feff4c0b2ace5726b34069ab74437bb89409b98fee5e06cc49d34e6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

