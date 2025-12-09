---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7IG7PYG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T045646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFG47D97CIeQLgfyK4pJPlddeDlSSBc9JvTGzDeZBNgVAiEAlnosqYv4G8Ian93XErUrm98Lutq4KhP9CjaP7gWZhOQqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGG5ZZVefU9GFimv%2FCrcA5e0PnefAtkHUz2fzK%2BAXpegv8bZgvRwczQoDxrfz3kEDOkq%2BdK4rBbsccTpc9HhUN5CoYvvGBC%2FwWt8ky7HOKdkHRz7OeM0bpFhcfnjvJc7CYYLqTzesasUX0XVpORs0DYQw%2FOMLk0yXw8Iv0nhUUTolZkMzMJqr1o26YDaHaMzDxpNeeyod5en8kaVb2qMpf9N5BW3bjBGV6e5F3YBt2eJTR3X3d%2Bb2SVLWhliXT%2Ba4W5qXQ8hIpyoZcr5fIdWy5EEaVgfmuSD%2B4dTIDHBDomjImTo6gelUeQwqXcVseY5GHLDoLuK1mqcxNoZ%2FLJEzINBa0%2FyxGQsiYH%2B1OzYpzr9FMZVPbi5lI88JHEccXPMyZMZCaAd0fQmJgF2TpTjxl31s0GYu1jiI5vRatGk644gSjoj%2B3Ar6sWzHJ6Gi4Pq1QHyKVQ1BiIqybEu8QBIDJBYfGUGL3GMz213RHMz8FkTBQVVj1FGgKMYbnstn1JXQYcOpgXGF3XuWziltbWCKAuki9ppXv217oeArHySa%2BZmb9jhyNamakzX%2FKunou9myCEjpxTfNkQ4ZRIindbHjsLbXZHWU4ktu7kZYA%2FgeSkKY0wb2NkFdJPwCqsCDzyH0IIsFo2jopj6Ifq7ML3J3skGOqUBNUOij6JEpesMIIQUGiw8GXKHjY3cRD9y6oT3ICkvc7bp%2BkZfHRGEYvlp7WOYMYEUo%2FwyUpRiC8sq0IrmOn5KVBRxxKnaBTLlzYGZTLEQBAElCZ3MSQuFt9ANukIaJhUMxMhoCkvYz%2FQYwa4KfMioiIriOKPdQfQ%2BNj9%2BbJUzc84Yb6nKrxhjarcD5608JMSAah9ERmSi0tYtQWEneQn5mztYPUR5&X-Amz-Signature=1ffa7427658fbf088c447c554213cb43bb7a3db1ea6192caafafbacaa69e72fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7IG7PYG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T045646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFG47D97CIeQLgfyK4pJPlddeDlSSBc9JvTGzDeZBNgVAiEAlnosqYv4G8Ian93XErUrm98Lutq4KhP9CjaP7gWZhOQqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGG5ZZVefU9GFimv%2FCrcA5e0PnefAtkHUz2fzK%2BAXpegv8bZgvRwczQoDxrfz3kEDOkq%2BdK4rBbsccTpc9HhUN5CoYvvGBC%2FwWt8ky7HOKdkHRz7OeM0bpFhcfnjvJc7CYYLqTzesasUX0XVpORs0DYQw%2FOMLk0yXw8Iv0nhUUTolZkMzMJqr1o26YDaHaMzDxpNeeyod5en8kaVb2qMpf9N5BW3bjBGV6e5F3YBt2eJTR3X3d%2Bb2SVLWhliXT%2Ba4W5qXQ8hIpyoZcr5fIdWy5EEaVgfmuSD%2B4dTIDHBDomjImTo6gelUeQwqXcVseY5GHLDoLuK1mqcxNoZ%2FLJEzINBa0%2FyxGQsiYH%2B1OzYpzr9FMZVPbi5lI88JHEccXPMyZMZCaAd0fQmJgF2TpTjxl31s0GYu1jiI5vRatGk644gSjoj%2B3Ar6sWzHJ6Gi4Pq1QHyKVQ1BiIqybEu8QBIDJBYfGUGL3GMz213RHMz8FkTBQVVj1FGgKMYbnstn1JXQYcOpgXGF3XuWziltbWCKAuki9ppXv217oeArHySa%2BZmb9jhyNamakzX%2FKunou9myCEjpxTfNkQ4ZRIindbHjsLbXZHWU4ktu7kZYA%2FgeSkKY0wb2NkFdJPwCqsCDzyH0IIsFo2jopj6Ifq7ML3J3skGOqUBNUOij6JEpesMIIQUGiw8GXKHjY3cRD9y6oT3ICkvc7bp%2BkZfHRGEYvlp7WOYMYEUo%2FwyUpRiC8sq0IrmOn5KVBRxxKnaBTLlzYGZTLEQBAElCZ3MSQuFt9ANukIaJhUMxMhoCkvYz%2FQYwa4KfMioiIriOKPdQfQ%2BNj9%2BbJUzc84Yb6nKrxhjarcD5608JMSAah9ERmSi0tYtQWEneQn5mztYPUR5&X-Amz-Signature=d041aeb34399ca417b4aac76a9c0cb7c868484f532eaa4e750c2ef3e06bc0c5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

