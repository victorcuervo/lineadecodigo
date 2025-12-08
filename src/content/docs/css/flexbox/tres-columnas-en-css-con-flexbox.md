---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4SFPY7L%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T160350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmbS0w8jFoffAcnnt1n0sPMjltu4UlSoxdulVytK%2FQPAIgDdz9FqccW2T4Z8YGndfHSYxZftAJTLmM%2Fm%2F7rH8kpgsqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOUh%2F58YL%2FcGXcDZlCrcA%2BZIdYkIwSFznKyzULelY2FiLoAQUzC0qAzO4EOCecDLEtLQB3y%2F%2BMCMCQYYgd6DuqHYm8RKYk7dyVLIUjZoEHflQOSRgqpw0LMmCoaEpVdlB33zgAmzD4G9MBJRkiHMqJ0kIv6cmJ4GHX2Sx%2FDO%2FjaFwItm8cAWiiaqTdf7NDxrBhHGghrYOI9%2BwRnBZ1XPe18japrZC6VmuEyyFe0I1HqLY3slPQiUBzzUcWAsn7a7QGrmx1N5Cbb25kdb3UoQR49WFMdels63eZRpd%2FxiBA27v5%2FERV7pILRJrDIM0lQQn%2Bv0%2FtDc7mlbofikurAFrlzxKhkJjHn3RMIeLX%2BHDfaA64ZvQ7Wwlt4llrUxtZSCz6KWlnx%2FxDail9LttSlVlpAiixJDjlVUT35g2Pvga34Z8PZThmo2DS7%2BbKphJENE8GfO1V4MBFLS0byrE1L4QyV20Gqvra1vPEGcAwPicSgV5OVd2Pk6LOnGuAMQpH%2B8rfQAUe%2BfJ%2FaZG1Bc6mXMcV6MmE%2Fu50deWwXNiNrJDwWGtRyZaciIMrE9Puz0k3NtNvauTNtBXXnHWEk0jDkkcmpwxHK4HhvG1fKIRV%2FO4sKyr4jYRjIJRMK2OMMux1kcqtrGpWYG1%2Blgx8nzMJPl28kGOqUBwCKJl7Q%2BMIZFJGlabSY53paaAU4JeOQ6yaa%2FNwZ56l4thV2SsZBcleq%2BgHJvWl4Qt6Bl8AHcC%2BklPwQ6Kodv7J0tYSgsUxduJAJMuw2tW79C4Phw3XeeaONig9VrYAO5vuDAeU8A1lEQPTir8WYR44kWAAb6RtbLDtNiq8CXZUCzHDLc6XbNnPsfQ0R5F8CWE7QYkxvawwL1b3CFLo9ALi%2F8YLYF&X-Amz-Signature=3a68f739f006595c33290a613994c4031ed676f03f056c4f3e1ec676fa111c79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4SFPY7L%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T160350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmbS0w8jFoffAcnnt1n0sPMjltu4UlSoxdulVytK%2FQPAIgDdz9FqccW2T4Z8YGndfHSYxZftAJTLmM%2Fm%2F7rH8kpgsqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOUh%2F58YL%2FcGXcDZlCrcA%2BZIdYkIwSFznKyzULelY2FiLoAQUzC0qAzO4EOCecDLEtLQB3y%2F%2BMCMCQYYgd6DuqHYm8RKYk7dyVLIUjZoEHflQOSRgqpw0LMmCoaEpVdlB33zgAmzD4G9MBJRkiHMqJ0kIv6cmJ4GHX2Sx%2FDO%2FjaFwItm8cAWiiaqTdf7NDxrBhHGghrYOI9%2BwRnBZ1XPe18japrZC6VmuEyyFe0I1HqLY3slPQiUBzzUcWAsn7a7QGrmx1N5Cbb25kdb3UoQR49WFMdels63eZRpd%2FxiBA27v5%2FERV7pILRJrDIM0lQQn%2Bv0%2FtDc7mlbofikurAFrlzxKhkJjHn3RMIeLX%2BHDfaA64ZvQ7Wwlt4llrUxtZSCz6KWlnx%2FxDail9LttSlVlpAiixJDjlVUT35g2Pvga34Z8PZThmo2DS7%2BbKphJENE8GfO1V4MBFLS0byrE1L4QyV20Gqvra1vPEGcAwPicSgV5OVd2Pk6LOnGuAMQpH%2B8rfQAUe%2BfJ%2FaZG1Bc6mXMcV6MmE%2Fu50deWwXNiNrJDwWGtRyZaciIMrE9Puz0k3NtNvauTNtBXXnHWEk0jDkkcmpwxHK4HhvG1fKIRV%2FO4sKyr4jYRjIJRMK2OMMux1kcqtrGpWYG1%2Blgx8nzMJPl28kGOqUBwCKJl7Q%2BMIZFJGlabSY53paaAU4JeOQ6yaa%2FNwZ56l4thV2SsZBcleq%2BgHJvWl4Qt6Bl8AHcC%2BklPwQ6Kodv7J0tYSgsUxduJAJMuw2tW79C4Phw3XeeaONig9VrYAO5vuDAeU8A1lEQPTir8WYR44kWAAb6RtbLDtNiq8CXZUCzHDLc6XbNnPsfQ0R5F8CWE7QYkxvawwL1b3CFLo9ALi%2F8YLYF&X-Amz-Signature=ecdb4ac9fc68f4fe70ef999b92f8ed00816781f9baf6cbb3b6fc9afabe5594e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

