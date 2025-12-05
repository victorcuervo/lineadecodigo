---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IATODCA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T204854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFi2iBTbkZqr%2FRgnBJAkRRLlblgwgWkoesA6myKy8tmQIhAOJ0BiC5R%2BK%2BHTzxZvy0l3NL9U6lfLNU2AeNB86rn%2FhpKv8DCGAQABoMNjM3NDIzMTgzODA1IgzTZkzfXbWQ2a4AmW4q3AM%2Bss7WyQqISh4mw8lYwKr72uo23gjh%2Bkf3EkFTedWy841MoMQexFz8IkdKFKKMjMBAgU%2BnAEhfxMJNRkppAoaa64lXmZEcBxnHVNYWoquJGDdjs3Qe8400H2LyDRKcLUNeiW0HBa7M1xBKBHP8rn3ddiOCHXo2l5B3dg7wW6CRXbH4MNXQxTnPgJwg4rGFvdOnv9gMv91R1iQ1EIyGWnyykW9hPwRJ4ixrcOdbJu6DJ2bU8SBGgw4zjqI%2BToVmpKVP0AKqCJ2d9FZ%2FRiMHpqpO9zlfno0wUYIu3iT%2FD98PwAbQc%2FVleiGyQMOw%2FZUwlEerivzEGg6FeRfQus93vZJWY0yWaX%2FUoEcZzzACG4aKlu%2BXM86gXmvsKg%2FaahRfCbcFrMoHIMh%2FhpOembeZpoSfzHFilhZJDTcL9WwOtq9YS9GC0RTypV3tD6KZhRVb%2FHSiYU5U0edKLcV53H9c82yCdOZm6fabSkAHtByReWj9wYK6rIqNm%2FlpqiMdsk%2Fnp5C6ILcuEZVIknLZiU1Ei1%2FH9XVZQggVorgmmQbiLYZfFELDQaUWhOc4YGl0lCeZqH5CLYPljwq1CXqt8jew6M9A6nLOn5vzphx6CWSSIY3qDuiS203IGrp1Y3bFrDC978vJBjqkASitZ5qwOh6kqizKKr3POj5rIaN84zm4qhLMBA0SX0LJ3QYzzJIetIFgYSeY08dF8gTUS0%2BjV5NoSi9PFPcfvTgXG7PYC09t0wmijAYEWc1ZCYn52v27YWh9vd6cnf7kawzm%2B6ltgkJGRrSkYoMg1rYc0jCCJZxT3XV9GexDbefjjNem6bYOMaLShJgSxg9zKKwR7ZYdvqgF52EX15rl1ETVwnMG&X-Amz-Signature=1b0f37e3812b2a1f2a288c68faaf227ad7eaace4c75e4f8dd7eaaf11bf583805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IATODCA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T204854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFi2iBTbkZqr%2FRgnBJAkRRLlblgwgWkoesA6myKy8tmQIhAOJ0BiC5R%2BK%2BHTzxZvy0l3NL9U6lfLNU2AeNB86rn%2FhpKv8DCGAQABoMNjM3NDIzMTgzODA1IgzTZkzfXbWQ2a4AmW4q3AM%2Bss7WyQqISh4mw8lYwKr72uo23gjh%2Bkf3EkFTedWy841MoMQexFz8IkdKFKKMjMBAgU%2BnAEhfxMJNRkppAoaa64lXmZEcBxnHVNYWoquJGDdjs3Qe8400H2LyDRKcLUNeiW0HBa7M1xBKBHP8rn3ddiOCHXo2l5B3dg7wW6CRXbH4MNXQxTnPgJwg4rGFvdOnv9gMv91R1iQ1EIyGWnyykW9hPwRJ4ixrcOdbJu6DJ2bU8SBGgw4zjqI%2BToVmpKVP0AKqCJ2d9FZ%2FRiMHpqpO9zlfno0wUYIu3iT%2FD98PwAbQc%2FVleiGyQMOw%2FZUwlEerivzEGg6FeRfQus93vZJWY0yWaX%2FUoEcZzzACG4aKlu%2BXM86gXmvsKg%2FaahRfCbcFrMoHIMh%2FhpOembeZpoSfzHFilhZJDTcL9WwOtq9YS9GC0RTypV3tD6KZhRVb%2FHSiYU5U0edKLcV53H9c82yCdOZm6fabSkAHtByReWj9wYK6rIqNm%2FlpqiMdsk%2Fnp5C6ILcuEZVIknLZiU1Ei1%2FH9XVZQggVorgmmQbiLYZfFELDQaUWhOc4YGl0lCeZqH5CLYPljwq1CXqt8jew6M9A6nLOn5vzphx6CWSSIY3qDuiS203IGrp1Y3bFrDC978vJBjqkASitZ5qwOh6kqizKKr3POj5rIaN84zm4qhLMBA0SX0LJ3QYzzJIetIFgYSeY08dF8gTUS0%2BjV5NoSi9PFPcfvTgXG7PYC09t0wmijAYEWc1ZCYn52v27YWh9vd6cnf7kawzm%2B6ltgkJGRrSkYoMg1rYc0jCCJZxT3XV9GexDbefjjNem6bYOMaLShJgSxg9zKKwR7ZYdvqgF52EX15rl1ETVwnMG&X-Amz-Signature=485eee27bde4add1779b48a67ebac9c53160cbaf1802fd2dfd2132816e41b05f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

