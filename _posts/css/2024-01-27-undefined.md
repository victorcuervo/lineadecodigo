---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDERV42C%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T083821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIHuIjOUAhAw%2FUxVuG5p067HgejFpoPMy4bLL3ySR8kSEAiEAo0JUecDmr5odvErJg77c%2F0oZVfh%2BLQ%2BSQCvmoSTEICYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDNOLVD5IzSYQIaeCwCrcA9iBe6p0WEs9KzBOM81wIIGM%2BDvfPQAXbx6fFH5ennnPCzSluo%2FRAyycFJMBCD1t3u%2FGoqkx2MzbQxzAPb7exhW8r444zbZnzs7f7aMz59oqNj8HZz7QlkAtIH6%2BO%2F%2BqiF68rUH8M%2B8d%2BHjFueLVz53zHI39nAhYFUi92dWksd3GuBW5gW5zU3NlY%2FsK6ZqndTDlbWQV9JOM%2Bhr7mJXWUbiUG6colxhs0%2BUIhdDAV6LnVi7XGqtEtQQW3LVXVWnKOwrAH0RLs7jMC%2BWKQlcyOo2mXtpjTOTg4C2J%2BfZOj6U2BYVeo7H3pl2xfvD%2FDNxoDr8HutX%2F3hjx%2F2rmqxhk2%2BAPRQEHYkiD%2FsFBCiOSLjtN%2F8taGCEfhgHZg24%2F7i6DCb7ZYQY%2FMA83q3T0Q%2FF9mdxYNCo39Nyz0UcZVJ7cRWeHjf%2F4u1qphUek%2F8Y50v8dx27is%2B%2F9%2BH8wSXShGjt4DOHFFP%2FJfYfvVTz4PB6k7eGCKtoL2KUS9fIOWdBGIAk%2FkdevESrJJzyzXefk9iYo6iRsNunY71dPWOY12fVzLkze0l%2FX1bNLtjM%2FewKdwtErgBpGXNkq6Zgoe%2FIU%2BIhChP%2FlHtDESabJgyMxMZ5Hw9rGJrvElUdVC%2FL9%2F2Z5MM3Uv8kGOqUBjYXA6zUvcFCLGux5uezVrIegEj2BlTf%2BeENY4G%2BNhsToHGUHbX9gXJ8JSZX9yFhVrCBEKhL%2Fp%2FZCmn2o78ShlzRvvZsZer32ar%2FcywEinOwSPyB1JswWCJD9uXqZMeBnKGuaYjA5%2FPqwq8%2FsoHJ81wDmQPH5WKwJ2QUiaYkQ6KIAlPrwL%2F25Fu8GOaKcCeIaXm8uhfvSm4DUG3YgHjHqfzkVmY7D&X-Amz-Signature=4ea3fa9dc34cb635fc3b000fea36b3d67ff0a122f7dfb7628abaf6a90ed13d5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDERV42C%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T083821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIHuIjOUAhAw%2FUxVuG5p067HgejFpoPMy4bLL3ySR8kSEAiEAo0JUecDmr5odvErJg77c%2F0oZVfh%2BLQ%2BSQCvmoSTEICYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDNOLVD5IzSYQIaeCwCrcA9iBe6p0WEs9KzBOM81wIIGM%2BDvfPQAXbx6fFH5ennnPCzSluo%2FRAyycFJMBCD1t3u%2FGoqkx2MzbQxzAPb7exhW8r444zbZnzs7f7aMz59oqNj8HZz7QlkAtIH6%2BO%2F%2BqiF68rUH8M%2B8d%2BHjFueLVz53zHI39nAhYFUi92dWksd3GuBW5gW5zU3NlY%2FsK6ZqndTDlbWQV9JOM%2Bhr7mJXWUbiUG6colxhs0%2BUIhdDAV6LnVi7XGqtEtQQW3LVXVWnKOwrAH0RLs7jMC%2BWKQlcyOo2mXtpjTOTg4C2J%2BfZOj6U2BYVeo7H3pl2xfvD%2FDNxoDr8HutX%2F3hjx%2F2rmqxhk2%2BAPRQEHYkiD%2FsFBCiOSLjtN%2F8taGCEfhgHZg24%2F7i6DCb7ZYQY%2FMA83q3T0Q%2FF9mdxYNCo39Nyz0UcZVJ7cRWeHjf%2F4u1qphUek%2F8Y50v8dx27is%2B%2F9%2BH8wSXShGjt4DOHFFP%2FJfYfvVTz4PB6k7eGCKtoL2KUS9fIOWdBGIAk%2FkdevESrJJzyzXefk9iYo6iRsNunY71dPWOY12fVzLkze0l%2FX1bNLtjM%2FewKdwtErgBpGXNkq6Zgoe%2FIU%2BIhChP%2FlHtDESabJgyMxMZ5Hw9rGJrvElUdVC%2FL9%2F2Z5MM3Uv8kGOqUBjYXA6zUvcFCLGux5uezVrIegEj2BlTf%2BeENY4G%2BNhsToHGUHbX9gXJ8JSZX9yFhVrCBEKhL%2Fp%2FZCmn2o78ShlzRvvZsZer32ar%2FcywEinOwSPyB1JswWCJD9uXqZMeBnKGuaYjA5%2FPqwq8%2FsoHJ81wDmQPH5WKwJ2QUiaYkQ6KIAlPrwL%2F25Fu8GOaKcCeIaXm8uhfvSm4DUG3YgHjHqfzkVmY7D&X-Amz-Signature=50141adec68258fc97a85d18e7e9053cf703e7c3dd1b9d17cde0e1baece07d07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

