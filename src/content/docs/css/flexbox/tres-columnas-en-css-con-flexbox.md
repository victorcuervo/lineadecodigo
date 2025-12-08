---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXVYFED6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T151453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7xqPvBroirjHqzwQPn7I%2F6JmNWmJfYvH9hcs4yK577gIhAKYTaj3vwyWMzSDCXq80Ce1ON4kqJVEKWOyt%2FkB54eFDKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPviRTkuRpxJCkdNgq3AOALGlzQLMW2d0iDiHJ%2FEKFh8UD57NkyYy9LC9v1PEFfF5XmVd06pRnA2AgIbdSjDOkJL5bw%2FReDOnxRZ9nWVTgAYH9Yg50m7hs3Fq7j%2Fv9rSg7dGkHOUX9y0bAar2ka6rijc2dY9mvpSVdO1KtaYNUaGyLlHm7ktxw9IvrfuA6scbYfEubUUjArjh8YoTdc4%2FbFyz8ND%2BdO%2FzbcgZ6I1OPxiqfVbEuRKbdWGh6j0BUroWzMKzjf4kGGpXqZen65eJJYinJJOpc3ex0R2fnsKmi4oWCTHNPdrp%2Bxc5Yx9tB08ai2jEqVdRhp4BHBEJ7eMrruzDyHjywL2ep17pmgUMzYPQtRDp%2Fl4w1mnolRwKWusqUAejJH6x%2Fpb%2FXJgJtYqQixR7PzR0NbClbT759FFsB1K%2B%2BxpPi46KTbH0%2Fz9LUdTBEgHFdKno7MUCyk%2BQEKhy9zQG4oUEsAuReWrCf1rxTpaoxNnNbqdvOk8beR2qFwnYfbMbPFy%2BKzpi4XTcLsyD7SnmyhU1rkQkVNOM8Xjc0fneMiRSq1ACALMEZURMUWiEuV8ImBdtUeZ0YaLyJRcGIIJdcb%2Bgpl%2FMgLhHYlM3c1bVGtc2P%2BzR5Q9jXXfR8zNLGEb3mykBEXT%2Fq5jD%2BwdvJBjqkAZtitDdxWEtaJNuSVt41Hb%2FsPeOJDCafc23Rk84GmNqSSsfWKEJQLtwms%2FcrEhFdCOXyqKIqE7j1JFxzrApBBzIkXzN3tftPB%2F4DTnOqUa70nOrLZ3aff4Tdi3L3W39v0944M8hXDBI8Lg%2BhoBu8xxP6O%2B3FDtwh2ylmQxLjzXNnPVfzrNtvvjOCSB0rbYuFWgxMmy2imyUW7695Uir8QYVGS%2B7l&X-Amz-Signature=38a4bf85c753a5ea238d19fcc2a6243f5f793d80393d4c5067c7837ff6f1e457&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXVYFED6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T151453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7xqPvBroirjHqzwQPn7I%2F6JmNWmJfYvH9hcs4yK577gIhAKYTaj3vwyWMzSDCXq80Ce1ON4kqJVEKWOyt%2FkB54eFDKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPviRTkuRpxJCkdNgq3AOALGlzQLMW2d0iDiHJ%2FEKFh8UD57NkyYy9LC9v1PEFfF5XmVd06pRnA2AgIbdSjDOkJL5bw%2FReDOnxRZ9nWVTgAYH9Yg50m7hs3Fq7j%2Fv9rSg7dGkHOUX9y0bAar2ka6rijc2dY9mvpSVdO1KtaYNUaGyLlHm7ktxw9IvrfuA6scbYfEubUUjArjh8YoTdc4%2FbFyz8ND%2BdO%2FzbcgZ6I1OPxiqfVbEuRKbdWGh6j0BUroWzMKzjf4kGGpXqZen65eJJYinJJOpc3ex0R2fnsKmi4oWCTHNPdrp%2Bxc5Yx9tB08ai2jEqVdRhp4BHBEJ7eMrruzDyHjywL2ep17pmgUMzYPQtRDp%2Fl4w1mnolRwKWusqUAejJH6x%2Fpb%2FXJgJtYqQixR7PzR0NbClbT759FFsB1K%2B%2BxpPi46KTbH0%2Fz9LUdTBEgHFdKno7MUCyk%2BQEKhy9zQG4oUEsAuReWrCf1rxTpaoxNnNbqdvOk8beR2qFwnYfbMbPFy%2BKzpi4XTcLsyD7SnmyhU1rkQkVNOM8Xjc0fneMiRSq1ACALMEZURMUWiEuV8ImBdtUeZ0YaLyJRcGIIJdcb%2Bgpl%2FMgLhHYlM3c1bVGtc2P%2BzR5Q9jXXfR8zNLGEb3mykBEXT%2Fq5jD%2BwdvJBjqkAZtitDdxWEtaJNuSVt41Hb%2FsPeOJDCafc23Rk84GmNqSSsfWKEJQLtwms%2FcrEhFdCOXyqKIqE7j1JFxzrApBBzIkXzN3tftPB%2F4DTnOqUa70nOrLZ3aff4Tdi3L3W39v0944M8hXDBI8Lg%2BhoBu8xxP6O%2B3FDtwh2ylmQxLjzXNnPVfzrNtvvjOCSB0rbYuFWgxMmy2imyUW7695Uir8QYVGS%2B7l&X-Amz-Signature=0ac4f2b8ff0b824b0b381a8cfda3c057b6600c7e74d02f575fa833efce8b9d66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

