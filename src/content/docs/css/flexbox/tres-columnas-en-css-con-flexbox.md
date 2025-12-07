---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MHV6NC2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T002142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhTUaeVV9AgsP6y1LIYi8bU5F8Y1DOCdSpfSO6jOLmCgIgMhO65GlwOadkIs3CWWwH9h0HE%2BZkgNJvL9Zezer%2BnYsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJQebaATRt44whVhyrcAw2chYfz1Te%2BFwUo5v%2FUro5bratkRJVvduGcY1F2KgejVgtI9WUZeRMO9XedmwHYeIfFfOVG0DJ1bIEd%2BRYOlLbdKkD5Qqfo9%2Bob0rJMIQk%2B5TY6JIWLUdcg0rcNs%2Fc8or7eDToHxyO1FucfjnuJ2wmRgEbjR1c0FLaquX3fYUaAhbfqmAjOYDAY1i7xEZI%2BLkDMdD3G%2B6y0oj8pQ%2Bp9x%2F0vuTnbxP1QLLTRVczACaWDilRL%2FreyWTiNd%2Fvf2XGn2ErH0TdsSX3tH0eOMqt2hVqoEc0xSR1rzJvHmUSrPPhJwDTdIwMB3K952iWZhpHgHZGu6MAs7IOlZIWtI7oVe%2FiEM8nesYg4t4%2BsWMjFAZaVkoM%2BfkVbDEF9Fm3Ftrvjyz%2BHbCzr2sk%2Bh%2FYcQHHMi73OWwpvTucMW0QRsSxFZg6vsFgMSHsq8Z3q5U1F7m8sE3XNFe%2B8ilcd%2F8KlN5gTMr1Nns3rdkOrKxWhTTj%2Bxz9wleKPfNbzeb2qNlFLgpRaIxmYxdhL%2FFrRQQCCBmf21nqRyjZVCngPGlKjDdm4Z5JeHR720OV7e7RYRe4%2Bmj9HoneqHL58SJXJHh1cElyN2Y%2B71LVGFVzXBYIJDXyDeuzKpCPoSWlIsgqAgUoZMJr90skGOqUBOScVsS2vT6bLVCuVOv7MzzBqE9pGcJE2RCdRWteTijqu91RQKg1inC5s7cXrnVhblp%2BbCxGFYOw2fkUAGYNytggV4Q2L0V8sDT2rONAACxa%2Fk5%2BLz4S%2Bem97u%2BjsajSbfA4knHdt5Uim2AAqRwuiqAwkZaSZT23nMqn33p31zBKNcY%2FZaPh1AiYzL2c0OHc16%2FWimQBKEbDsA9QbqMzzRqVqEoWV&X-Amz-Signature=091413e4903abdf2ca19dd526a53bd8f1b21c042ea772895daf271b3b8d64322&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MHV6NC2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T002142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhTUaeVV9AgsP6y1LIYi8bU5F8Y1DOCdSpfSO6jOLmCgIgMhO65GlwOadkIs3CWWwH9h0HE%2BZkgNJvL9Zezer%2BnYsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJQebaATRt44whVhyrcAw2chYfz1Te%2BFwUo5v%2FUro5bratkRJVvduGcY1F2KgejVgtI9WUZeRMO9XedmwHYeIfFfOVG0DJ1bIEd%2BRYOlLbdKkD5Qqfo9%2Bob0rJMIQk%2B5TY6JIWLUdcg0rcNs%2Fc8or7eDToHxyO1FucfjnuJ2wmRgEbjR1c0FLaquX3fYUaAhbfqmAjOYDAY1i7xEZI%2BLkDMdD3G%2B6y0oj8pQ%2Bp9x%2F0vuTnbxP1QLLTRVczACaWDilRL%2FreyWTiNd%2Fvf2XGn2ErH0TdsSX3tH0eOMqt2hVqoEc0xSR1rzJvHmUSrPPhJwDTdIwMB3K952iWZhpHgHZGu6MAs7IOlZIWtI7oVe%2FiEM8nesYg4t4%2BsWMjFAZaVkoM%2BfkVbDEF9Fm3Ftrvjyz%2BHbCzr2sk%2Bh%2FYcQHHMi73OWwpvTucMW0QRsSxFZg6vsFgMSHsq8Z3q5U1F7m8sE3XNFe%2B8ilcd%2F8KlN5gTMr1Nns3rdkOrKxWhTTj%2Bxz9wleKPfNbzeb2qNlFLgpRaIxmYxdhL%2FFrRQQCCBmf21nqRyjZVCngPGlKjDdm4Z5JeHR720OV7e7RYRe4%2Bmj9HoneqHL58SJXJHh1cElyN2Y%2B71LVGFVzXBYIJDXyDeuzKpCPoSWlIsgqAgUoZMJr90skGOqUBOScVsS2vT6bLVCuVOv7MzzBqE9pGcJE2RCdRWteTijqu91RQKg1inC5s7cXrnVhblp%2BbCxGFYOw2fkUAGYNytggV4Q2L0V8sDT2rONAACxa%2Fk5%2BLz4S%2Bem97u%2BjsajSbfA4knHdt5Uim2AAqRwuiqAwkZaSZT23nMqn33p31zBKNcY%2FZaPh1AiYzL2c0OHc16%2FWimQBKEbDsA9QbqMzzRqVqEoWV&X-Amz-Signature=4ba29fb9dd394f2f784113f2b04b28c377c107510572ca0a393f9a385b7188eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

