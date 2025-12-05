---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F5JLBNI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T055949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID85cpidvz12%2FSdU2eyqTQEUgtiP8ZAWxuBycBcw8z2sAiBXdFFNmEBqPck9O8%2ByuwVJj1p3rGn00cYHK%2BsyJLYkvir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMv6Jpv55dEeitelRYKtwD2WIzphPoit5mGXteyPhBY8BGUVsg3z0BLjQAzwjQgnsNAXWL2NpDnmbbbhKEc4cdMoXBuS4itjfZwH62VeUwP4ChvHp%2FKLbwEck%2BG6gZ4G71GPDLadq3tItl30PDsJC3c9kEOgAOpIlLQnhfd4pYbTu78u3VD%2Bs16U%2Fuqz1enBdNEswGNDD%2FNmI9oOr6iemrBdIatM4ijsNp3oYY49sJX3fj32Yh9rI4NmXhOCWmLMZNaSbZUPIxlxcZJpDGtrRRTiouLXxYfRx9G3h%2F5r%2FgOGLvtqASjxYWxs2YXGgt6lWHZB8MnMHD3fiavnbnHhqDu6FTskTH58IRq1SOVZzF38j7uupAFHHw6OTBIYg0SPe9PReIT8yP%2BMWISDAy9n6zqNdyXvwNP%2FeRoL3RRsOt0yc3jhD00moZMo4%2FsTdU5krTkzfqEjx9d3MisivgT2VsC6kwY8Cz8vNlAUonLcUwDErfx2pjv81%2B7O9MtPbL7zapYUvajq2k%2Fr9w%2FqQaJdV%2BwXzNwcSENsol3l2CCO0ydSuA5iNAkYGXJwaPp4jrkj7F8DwjCPQ%2BkqF7AumMmYsFIOyRHGkfpTf2xaGTZ%2F7FdKcKQPaPt9sJmMjG1JczVw6svleEFNNqEBNT6DEwgarJyQY6pgGPBaWhd%2BPfVFu8e2IAl8ohIMSzFXqpe4Z%2Fd2GDWUpCGHZHjQbeqfit5nUU64LaEkVMMzdidMTzha05SxyWwUKTvB%2FrSWcIIN9CJOYYDwCPTVlDhdcGYNeTVSeqwbDeQdtsegeP07xqPM5OV6l3tR2SC5a9p8MqhqIvhp%2BNrV1VOsrm4Ffb7j8yXi2whusLzLKWVlbuH8ErwFKmUN%2FKAYN0fTjAroNW&X-Amz-Signature=60977c0f9bc769466c9448386a86a088d2a4638741d593ec35d4ca32f2b5302e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F5JLBNI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T055949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID85cpidvz12%2FSdU2eyqTQEUgtiP8ZAWxuBycBcw8z2sAiBXdFFNmEBqPck9O8%2ByuwVJj1p3rGn00cYHK%2BsyJLYkvir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMv6Jpv55dEeitelRYKtwD2WIzphPoit5mGXteyPhBY8BGUVsg3z0BLjQAzwjQgnsNAXWL2NpDnmbbbhKEc4cdMoXBuS4itjfZwH62VeUwP4ChvHp%2FKLbwEck%2BG6gZ4G71GPDLadq3tItl30PDsJC3c9kEOgAOpIlLQnhfd4pYbTu78u3VD%2Bs16U%2Fuqz1enBdNEswGNDD%2FNmI9oOr6iemrBdIatM4ijsNp3oYY49sJX3fj32Yh9rI4NmXhOCWmLMZNaSbZUPIxlxcZJpDGtrRRTiouLXxYfRx9G3h%2F5r%2FgOGLvtqASjxYWxs2YXGgt6lWHZB8MnMHD3fiavnbnHhqDu6FTskTH58IRq1SOVZzF38j7uupAFHHw6OTBIYg0SPe9PReIT8yP%2BMWISDAy9n6zqNdyXvwNP%2FeRoL3RRsOt0yc3jhD00moZMo4%2FsTdU5krTkzfqEjx9d3MisivgT2VsC6kwY8Cz8vNlAUonLcUwDErfx2pjv81%2B7O9MtPbL7zapYUvajq2k%2Fr9w%2FqQaJdV%2BwXzNwcSENsol3l2CCO0ydSuA5iNAkYGXJwaPp4jrkj7F8DwjCPQ%2BkqF7AumMmYsFIOyRHGkfpTf2xaGTZ%2F7FdKcKQPaPt9sJmMjG1JczVw6svleEFNNqEBNT6DEwgarJyQY6pgGPBaWhd%2BPfVFu8e2IAl8ohIMSzFXqpe4Z%2Fd2GDWUpCGHZHjQbeqfit5nUU64LaEkVMMzdidMTzha05SxyWwUKTvB%2FrSWcIIN9CJOYYDwCPTVlDhdcGYNeTVSeqwbDeQdtsegeP07xqPM5OV6l3tR2SC5a9p8MqhqIvhp%2BNrV1VOsrm4Ffb7j8yXi2whusLzLKWVlbuH8ErwFKmUN%2FKAYN0fTjAroNW&X-Amz-Signature=775d2733eb5385e1ac5e2d650a2d23b22d33c420f3ddaeed47c537da8ac8c7ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

