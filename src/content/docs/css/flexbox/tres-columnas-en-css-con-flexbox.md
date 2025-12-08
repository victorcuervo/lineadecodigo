---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YELQJ2YW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T133833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNs4aAwAq74colpfRVuoz1zu2oxmijBLMoWvfwHvO11wIgKdnN%2FY95DSxhUs6MSIz3R%2F%2FZ%2Fs%2Fc0kKsHpre0L2766gqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJR2xPhMWCYq4GXMECrcA3fzJl63kwNNhsPycp%2FidR6XBSwQPVnhqVJ6oOAn9qtBvHUglQOn1Uh9o43bakcIr1O8PSsriSq48%2BoDxJ3lvhdxz2WFzuY85d8iNaxgedt0RT5akeTCc327LMHLPb7BVFh%2FS6FUXrpneU1dpPIMMeuggJPuwdUib2QJDTLIikhkjsy1uhyHoG%2BDd6g%2B7JD%2BlxsjdE3Kr4bXt51bXb%2BnRlrIYyjTyigFKffwslC8gtj3OtAEhxRSwQKiL3yYmd1zpEMoZIJD8%2Fwp44wlu7L0NHMEIQcygq8%2Fizhp9Yd1w7xUF%2BrtHSXTMzYic4vMMO1KboCRFYWjgFes7xribU6F27Hhl6JY32DfEOIq42adN8%2BXZhZp7NBJdjim99Lkm8v4%2FDnnLiuYk%2BP8N8COl2L%2FBTN5Xj4ONTfAmiiqf0Wxql%2BIM7U5J%2F8Z1gfYle9s%2F6qm9oNuGg%2BhMmZ5bxm6EroTY%2B%2Fqfv5OpF%2Ba%2FSVeQrZknipB3NDCoGw0Z28IlAv%2BKkpS8mOQwuFbdvmlFMH47eqFYEDRAqZXb90lAlcKqPnI3yhJY3314V%2BDhD0uwREOQ1miW%2F00Og%2Fui4bjJWfocUZDn8n7zaxYzRSztdSMM%2BZ0VN1CCPR0wZ2I4jWC0kCDMPGP28kGOqUBayv%2F2DBFTXzxKrH6LDzrdiuQZNDnb0bk5KeezQ2XTywOlDKuXngmMHERfdPHSp9KtudugBeRbg8nVozoj29j33g5c%2F2PZldc7UqNt4CFyNJDdUjNIvEJBicw%2B89y5CqmcIXhi5xbgwLlVOYY9tLZyobc0OCM9egZx%2BXxxszKtbf%2FdtYu1XcgI1Hc21mE4oLw%2B2FQ8uCWqBtS6Em8MZENpDf68Bt4&X-Amz-Signature=008e7a8d74941b0a9203ae1c3f074196fee18a837cb25023db9f9cfdbe2c886d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YELQJ2YW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T133833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNs4aAwAq74colpfRVuoz1zu2oxmijBLMoWvfwHvO11wIgKdnN%2FY95DSxhUs6MSIz3R%2F%2FZ%2Fs%2Fc0kKsHpre0L2766gqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJR2xPhMWCYq4GXMECrcA3fzJl63kwNNhsPycp%2FidR6XBSwQPVnhqVJ6oOAn9qtBvHUglQOn1Uh9o43bakcIr1O8PSsriSq48%2BoDxJ3lvhdxz2WFzuY85d8iNaxgedt0RT5akeTCc327LMHLPb7BVFh%2FS6FUXrpneU1dpPIMMeuggJPuwdUib2QJDTLIikhkjsy1uhyHoG%2BDd6g%2B7JD%2BlxsjdE3Kr4bXt51bXb%2BnRlrIYyjTyigFKffwslC8gtj3OtAEhxRSwQKiL3yYmd1zpEMoZIJD8%2Fwp44wlu7L0NHMEIQcygq8%2Fizhp9Yd1w7xUF%2BrtHSXTMzYic4vMMO1KboCRFYWjgFes7xribU6F27Hhl6JY32DfEOIq42adN8%2BXZhZp7NBJdjim99Lkm8v4%2FDnnLiuYk%2BP8N8COl2L%2FBTN5Xj4ONTfAmiiqf0Wxql%2BIM7U5J%2F8Z1gfYle9s%2F6qm9oNuGg%2BhMmZ5bxm6EroTY%2B%2Fqfv5OpF%2Ba%2FSVeQrZknipB3NDCoGw0Z28IlAv%2BKkpS8mOQwuFbdvmlFMH47eqFYEDRAqZXb90lAlcKqPnI3yhJY3314V%2BDhD0uwREOQ1miW%2F00Og%2Fui4bjJWfocUZDn8n7zaxYzRSztdSMM%2BZ0VN1CCPR0wZ2I4jWC0kCDMPGP28kGOqUBayv%2F2DBFTXzxKrH6LDzrdiuQZNDnb0bk5KeezQ2XTywOlDKuXngmMHERfdPHSp9KtudugBeRbg8nVozoj29j33g5c%2F2PZldc7UqNt4CFyNJDdUjNIvEJBicw%2B89y5CqmcIXhi5xbgwLlVOYY9tLZyobc0OCM9egZx%2BXxxszKtbf%2FdtYu1XcgI1Hc21mE4oLw%2B2FQ8uCWqBtS6Em8MZENpDf68Bt4&X-Amz-Signature=93f1f8eff62b4400b1979ab483ba0d6e280bf8d968ea442181b91ef5adb1d683&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

