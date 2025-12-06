---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3NHEIPN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T145857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt5CIgz7O4sS6uyRWk8RX8n01y3pHeLaLZQ%2FPwmOAsNQIhAI9NH58mR3EgOMX30YH66wXHw9auvwAJzTCHFLxeBoBeKv8DCHUQABoMNjM3NDIzMTgzODA1Igx6QfyvxPzCPGQbSA0q3AOhoA%2FBXPmMTuKT8mr0XBYismJXtUTlwPaWPvJyuW%2FT5lUYaFPhC0Id%2FJx40xZibaB8yp938wHxHnqQnctIAhZsw%2Fp2ksAfCOrlAn3WkkxsjBD445y984cfhRk66UBkG8yU7PfMt%2B5EWyLWHF2TgJCijNlizCdDR0oPBCV%2FsdOCfkxVOEprz8r1mfRZD00wEGUCoATOBsOlwB2p%2FqYNe6q8VeXwa%2FAPbBqGCSmjucH26RFwJxgxtA%2FTxDKVJL7KWyGC%2FyUsxPSGosIBr5hmxdw9s4yAOyZ1%2FPLjpx7abqiOCXiqUATESS5342IhWIzMXF8egVg6Boy0rfpaKr3I4qeLNMW%2FNEa1lhG%2FuLdJFPz17unY2QbwOzHlecz6ER4IVqD6p8EBZHnGFkwaUKzuoLKCUE9MxB7IGFLF%2BX%2Bik5yjWeKM5i6b9B6k%2F8w5FkNdJ9nGGk4XfHGP7vcTHIauYngrCJpn8BhSmifJ9cKPyiyl1rOXqIYApV0q5KsrTVup8QVi6KNeQG0zMqxd0vg3A8m9FyWrbWaPVYOSNvun8Te8nA4HtBriS1Lt7Pxa7A875CWrjFbrR9xZNeoJ1rtcCWgzOfUzCL2JD%2BYfuV4l2oKBejPkDQ5j9KOh25CicjDNptDJBjqkAU4vnh8bdcb4qghljhjSkJLia%2B%2FojxN9cDimcEg1CBIpHi6scjoyYN3tpvQVlrVZYyVFuW7mC1By8sacQTvGdiiMxLBrnNbBLZ7NwfNcECZVv8hXuIFmurKGyTV4LVgqBWcvF%2F80y08E1Fk3SE6RtfMhTCL10rJN3H%2F0u7V7x150BnicYDxR1qWP6iWuKZO7vs%2FM1DnQdJeZnTKUyAxhkAlvAzvB&X-Amz-Signature=504afc87f20d1b388ea9467f76ac945411e4131147bfa60d73ddd9da507ff753&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3NHEIPN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T145857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt5CIgz7O4sS6uyRWk8RX8n01y3pHeLaLZQ%2FPwmOAsNQIhAI9NH58mR3EgOMX30YH66wXHw9auvwAJzTCHFLxeBoBeKv8DCHUQABoMNjM3NDIzMTgzODA1Igx6QfyvxPzCPGQbSA0q3AOhoA%2FBXPmMTuKT8mr0XBYismJXtUTlwPaWPvJyuW%2FT5lUYaFPhC0Id%2FJx40xZibaB8yp938wHxHnqQnctIAhZsw%2Fp2ksAfCOrlAn3WkkxsjBD445y984cfhRk66UBkG8yU7PfMt%2B5EWyLWHF2TgJCijNlizCdDR0oPBCV%2FsdOCfkxVOEprz8r1mfRZD00wEGUCoATOBsOlwB2p%2FqYNe6q8VeXwa%2FAPbBqGCSmjucH26RFwJxgxtA%2FTxDKVJL7KWyGC%2FyUsxPSGosIBr5hmxdw9s4yAOyZ1%2FPLjpx7abqiOCXiqUATESS5342IhWIzMXF8egVg6Boy0rfpaKr3I4qeLNMW%2FNEa1lhG%2FuLdJFPz17unY2QbwOzHlecz6ER4IVqD6p8EBZHnGFkwaUKzuoLKCUE9MxB7IGFLF%2BX%2Bik5yjWeKM5i6b9B6k%2F8w5FkNdJ9nGGk4XfHGP7vcTHIauYngrCJpn8BhSmifJ9cKPyiyl1rOXqIYApV0q5KsrTVup8QVi6KNeQG0zMqxd0vg3A8m9FyWrbWaPVYOSNvun8Te8nA4HtBriS1Lt7Pxa7A875CWrjFbrR9xZNeoJ1rtcCWgzOfUzCL2JD%2BYfuV4l2oKBejPkDQ5j9KOh25CicjDNptDJBjqkAU4vnh8bdcb4qghljhjSkJLia%2B%2FojxN9cDimcEg1CBIpHi6scjoyYN3tpvQVlrVZYyVFuW7mC1By8sacQTvGdiiMxLBrnNbBLZ7NwfNcECZVv8hXuIFmurKGyTV4LVgqBWcvF%2F80y08E1Fk3SE6RtfMhTCL10rJN3H%2F0u7V7x150BnicYDxR1qWP6iWuKZO7vs%2FM1DnQdJeZnTKUyAxhkAlvAzvB&X-Amz-Signature=c2e6cf5df71a9c615d8f2a7ac51ba6e3f2fd54d78ebb0de6b7c91d8763fb3070&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

