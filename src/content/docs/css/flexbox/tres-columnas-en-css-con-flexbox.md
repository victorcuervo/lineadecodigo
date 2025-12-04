---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A3WIGPC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T162228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCya7cdYIONBVXYG2pD0yYto1L7KAxCxPI%2BKphnBv1higIgD1Iw8z1F4t3y1tumz%2FP3Kz4i5%2F2ieqQ2Y1ahIKM6Ng8q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDAV67TtjCKm4Zs6lmCrcA%2FJkLD%2B%2B1wOoIlh6qM0Se8tEiBqj9TT%2B1hjzWoVkksONvT%2BbPqVyV5vbLGcm5v1vbFIi2R0L4FxVbUNNE2l63YLkMOMAt1dKK%2BKle%2Fio8MeTuLYwdZ5NVyt9q17lcgFaQlEVLTcRwduQIfBKlHMh69gJDabpfx9417RrEHeQUcvwZb49Y6f9YEDUvEsd5bhgaHaiBBXUOqrJJFQsIgaLWe7rkFNNvgKztS4Zjldk%2BwJ%2Bma9MSL0%2BUU7zqkLMgjnKSxbflB8Pun%2B5bvQjriOVFT%2FG5NO7hL%2FaupMxB%2FCd%2BjIHh6SxCe9L7T%2BL1Iof0Hj8cpXRO%2B6MDEwvRP0Laqy7nQmUNh4aCjo5RSzGwOjE4GNXWAG9Zu%2FU4wFlE%2BI2XqSJxRYpfweg1WNH1xk7ytOTGeYyA%2Fog7TtlQpBpcH3IbMNnz%2BH2npx5ArxBhqaW1Oz0DCg79p9zcEYxdmB6iQ9plpXl5U%2FUwFrrCFs8EyHGLa2Ie9BWZlXXtv%2B9EDJCx7yT5kxyrcH0D3uAz56X8xGg7fhmyqYAXXXCEo%2BB%2B8Y3BAQF%2FNbm6CIE0yvyFu%2FEd0mQ127%2B1tHx7b%2BBMc6Rmc3HuJs6ssxYSUXauzxfu0W4dasE6VVuBodeuE32STEbMNTbxskGOqUBjW9eX1FOCG8DfYZnUBsvGXhoh3ESEhI7bW6QGtgacArex216VSiXP1w1J2Wv9Q3RvugYe712uVDFvxxKoOj%2B%2BczwioILDeBMQNf90SjpWhfXb3ATpjUzGLCQXRCMkmGAvCsNjwG6TR674A0xGphX%2FOXeyjKsFIN8fL0YoJPqiEqnNcivrxBjSUaQ1oWLAq597L1T9Id191isoTMAmH0KY4s6VMzN&X-Amz-Signature=f608dad25f67740219e69dfe319e8196dab1b81502e57d1713912505b705f1e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A3WIGPC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T162228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCya7cdYIONBVXYG2pD0yYto1L7KAxCxPI%2BKphnBv1higIgD1Iw8z1F4t3y1tumz%2FP3Kz4i5%2F2ieqQ2Y1ahIKM6Ng8q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDAV67TtjCKm4Zs6lmCrcA%2FJkLD%2B%2B1wOoIlh6qM0Se8tEiBqj9TT%2B1hjzWoVkksONvT%2BbPqVyV5vbLGcm5v1vbFIi2R0L4FxVbUNNE2l63YLkMOMAt1dKK%2BKle%2Fio8MeTuLYwdZ5NVyt9q17lcgFaQlEVLTcRwduQIfBKlHMh69gJDabpfx9417RrEHeQUcvwZb49Y6f9YEDUvEsd5bhgaHaiBBXUOqrJJFQsIgaLWe7rkFNNvgKztS4Zjldk%2BwJ%2Bma9MSL0%2BUU7zqkLMgjnKSxbflB8Pun%2B5bvQjriOVFT%2FG5NO7hL%2FaupMxB%2FCd%2BjIHh6SxCe9L7T%2BL1Iof0Hj8cpXRO%2B6MDEwvRP0Laqy7nQmUNh4aCjo5RSzGwOjE4GNXWAG9Zu%2FU4wFlE%2BI2XqSJxRYpfweg1WNH1xk7ytOTGeYyA%2Fog7TtlQpBpcH3IbMNnz%2BH2npx5ArxBhqaW1Oz0DCg79p9zcEYxdmB6iQ9plpXl5U%2FUwFrrCFs8EyHGLa2Ie9BWZlXXtv%2B9EDJCx7yT5kxyrcH0D3uAz56X8xGg7fhmyqYAXXXCEo%2BB%2B8Y3BAQF%2FNbm6CIE0yvyFu%2FEd0mQ127%2B1tHx7b%2BBMc6Rmc3HuJs6ssxYSUXauzxfu0W4dasE6VVuBodeuE32STEbMNTbxskGOqUBjW9eX1FOCG8DfYZnUBsvGXhoh3ESEhI7bW6QGtgacArex216VSiXP1w1J2Wv9Q3RvugYe712uVDFvxxKoOj%2B%2BczwioILDeBMQNf90SjpWhfXb3ATpjUzGLCQXRCMkmGAvCsNjwG6TR674A0xGphX%2FOXeyjKsFIN8fL0YoJPqiEqnNcivrxBjSUaQ1oWLAq597L1T9Id191isoTMAmH0KY4s6VMzN&X-Amz-Signature=a7f777de6d5e1e5c1b59b55bd78c091a1da60a8e4bd29b2093007b1b371ebb80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

