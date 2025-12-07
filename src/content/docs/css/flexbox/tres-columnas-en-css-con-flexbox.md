---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KE7I7K4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T153431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQNL3jkgyZPmcM4%2BipvuxCkq6Atc0BuktLp88S%2Fr42JAIhANoYcy6OX7P78nDMO%2B7ZPJeHO6yeAXnX8zi5m6%2BrBJhGKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxe5qGb7813rjfCk4sq3AMfjRY8EBmhfzyiFkZUDmMI6bYLkBTF%2FJoYeaq1FiBHfr6Vvs3tsEWW7qekMnMVk6S42lUf0AfZBEbvFI6AoH3GxuLlRxtvxeckrs8D0Yy7JgYg8KPyUW%2BKcD1HyKA4Cmt94u6Wsls0oDbAmFatCB9NjD%2BafjoAIiBRb%2B9SbaT8BYRNMTt1W3SsCctULhXJRnQVHTre0aFI3RvzgeREvfumqe3w551ymaw2Yb5w2ae%2F0Q4tdVlWUaE1uJEq0pUAT6IlwVFKwOmyMiNl8ko2MLXIPMk6T39ju2syvfZhwldmb8hWfH9HXBjJKA21zbnUa3P565OdJwslJgg5hQ%2FmP8ove8o4cLUutf3VqTZUIVGVgdkPFukKI0zm6W1DhfG7JlVnadkIMICAh0slrdNTLvz78GtYCHtTulC%2B%2Bdl8LkvCJcjfVUbzPqAInCMbH43IH%2BYkGfNSbS5j4mb%2F4crnCmCPCzGLwrryYwADMXIWS2YJoRwZ8hc6yde7JRhhOHuCl9E6kiHD5Aor4P4J6P53NvLRDA2RxflgDM%2BPiVYn%2FJ6QwWsSKRC%2B2Ciz%2Fo339GzfZtIHwlTC7MzD3Ev9SAFELgyjAaBLr%2BzrZwYtKgCMUAX28sKJXXgisctki%2BgrjDCxmtXJBjqkAXmxTcTv0H6X8MQEjnVg9WOnQs6ydUNfXTiqjdmx9LAhUcnHY6X5MSp4dhwSNTnCQcvNgJDmVDQpRo4TkkRab6fKb2uL%2FJd%2BadfNkKQvR6aJGbYDIBZVBjeu7fhF2Utu3oz28AGOeOaExpqNxuevLZTtlFDY9J3CvWUy5Z2jjA5ozOd67br1inrqVDeOJZZNO5rY4YkxuCtbLzhHZUZKuBJsiS0T&X-Amz-Signature=fe7b7954281376a99ce55af5fae960df61ffbbc84dbba0778ba3811484b95517&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KE7I7K4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T153431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQNL3jkgyZPmcM4%2BipvuxCkq6Atc0BuktLp88S%2Fr42JAIhANoYcy6OX7P78nDMO%2B7ZPJeHO6yeAXnX8zi5m6%2BrBJhGKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxe5qGb7813rjfCk4sq3AMfjRY8EBmhfzyiFkZUDmMI6bYLkBTF%2FJoYeaq1FiBHfr6Vvs3tsEWW7qekMnMVk6S42lUf0AfZBEbvFI6AoH3GxuLlRxtvxeckrs8D0Yy7JgYg8KPyUW%2BKcD1HyKA4Cmt94u6Wsls0oDbAmFatCB9NjD%2BafjoAIiBRb%2B9SbaT8BYRNMTt1W3SsCctULhXJRnQVHTre0aFI3RvzgeREvfumqe3w551ymaw2Yb5w2ae%2F0Q4tdVlWUaE1uJEq0pUAT6IlwVFKwOmyMiNl8ko2MLXIPMk6T39ju2syvfZhwldmb8hWfH9HXBjJKA21zbnUa3P565OdJwslJgg5hQ%2FmP8ove8o4cLUutf3VqTZUIVGVgdkPFukKI0zm6W1DhfG7JlVnadkIMICAh0slrdNTLvz78GtYCHtTulC%2B%2Bdl8LkvCJcjfVUbzPqAInCMbH43IH%2BYkGfNSbS5j4mb%2F4crnCmCPCzGLwrryYwADMXIWS2YJoRwZ8hc6yde7JRhhOHuCl9E6kiHD5Aor4P4J6P53NvLRDA2RxflgDM%2BPiVYn%2FJ6QwWsSKRC%2B2Ciz%2Fo339GzfZtIHwlTC7MzD3Ev9SAFELgyjAaBLr%2BzrZwYtKgCMUAX28sKJXXgisctki%2BgrjDCxmtXJBjqkAXmxTcTv0H6X8MQEjnVg9WOnQs6ydUNfXTiqjdmx9LAhUcnHY6X5MSp4dhwSNTnCQcvNgJDmVDQpRo4TkkRab6fKb2uL%2FJd%2BadfNkKQvR6aJGbYDIBZVBjeu7fhF2Utu3oz28AGOeOaExpqNxuevLZTtlFDY9J3CvWUy5Z2jjA5ozOd67br1inrqVDeOJZZNO5rY4YkxuCtbLzhHZUZKuBJsiS0T&X-Amz-Signature=b1f6752c8ceb1964bf93b98a8c9aea4b526f199e04175ca8eaf42b8327f54692&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

