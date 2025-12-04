---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXTYGLVN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDsR0pY7wQmTsmDGNiMqCto4WFHYbveReQMFPInkhJDsQIhAPGb04nXLpYgBOg3bPBhw0eiRsvQ4fcVgMIpbEewN6PAKv8DCEAQABoMNjM3NDIzMTgzODA1IgzF%2FVilaB2XUwmbAzsq3AMEZ3hTDMIWQps2yDcwQl4ramrGn6BEPSdTxk%2FVQKDr9zTLO%2FWMbFgr7KOX2TNiJ493SaEj%2FZB4k4xwTwwoZcei03LJ9F2kxc5aGKECwZTAacXhfJwj05jSD4MTS%2B3TwS2yWRFG09S6Zpk4ZMbRgVyquSVlsj%2Bg9YsZiOlqS450Au3vP3eWsR20lMVbgb9LZOWCeZfJYed4EkRNl5AAaFkj%2FCxYLbS%2BwW15XN2JaLIkXWYoJjOXWKv%2FI24DxAMsvkn1bGAnzaOujn%2FRuf8jl%2BdNZYvfOF4dbfx8dKNXTkfVXTd%2FtYcDYDxI%2FV41WDE%2FZ8pMFK%2Fc6jH6Dso8itkMpv%2BCnZUKw80IUuYkEE7gJlBemGXicRsqcVJT4rBjZ8Riu2Ccl2BTlCZ5eIe3zarsjOjq103GnztwJOSiCcfWRimzHzfKaQlNbA2yTgGTYoVuO%2FIrnzsIu%2BB1Wg%2B9xNye32EKgd6dOxQSlsHomlj6Y1%2FFyICBzoEvBtnVgJOL2YxLZ2q45h7JltanYOrpgo9a5Sv6yacXacsk1i%2F%2FSvBbjbxssV0SQyYsir8w%2FXlPAA0A%2FIWYHYX7iw4tgbt3cJTrqXWpPjelRtb4A8vOAr1vqSM%2B8e7Ci%2FZ6uXjXyAHfeTC358TJBjqkAbyJPr5Di7rF8WzdhvVZQkYeR2Bw2rTfruJ0xLgW7uuXSpFIcSv8CK3sWgB4%2FpR42ZfRl3WjMhTQqlJhhkHBTk1l1It7KwV1PMR8kxnJqf9kKGH7LPns4mH%2FbeIZJkWnyqv%2FEMW%2F2dxKAkqzLSYFYnmdnB0IiwpyZmA8DuGEtLWPL3gDMpxbNKShGVwyzuPK91Yejkq3EAvU9QgVPjF59zcr4coP&X-Amz-Signature=aa41f4d95ed8fb1dfb30c6659c635ec727017ca4a729691852e3f04b0ec5fdb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXTYGLVN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDsR0pY7wQmTsmDGNiMqCto4WFHYbveReQMFPInkhJDsQIhAPGb04nXLpYgBOg3bPBhw0eiRsvQ4fcVgMIpbEewN6PAKv8DCEAQABoMNjM3NDIzMTgzODA1IgzF%2FVilaB2XUwmbAzsq3AMEZ3hTDMIWQps2yDcwQl4ramrGn6BEPSdTxk%2FVQKDr9zTLO%2FWMbFgr7KOX2TNiJ493SaEj%2FZB4k4xwTwwoZcei03LJ9F2kxc5aGKECwZTAacXhfJwj05jSD4MTS%2B3TwS2yWRFG09S6Zpk4ZMbRgVyquSVlsj%2Bg9YsZiOlqS450Au3vP3eWsR20lMVbgb9LZOWCeZfJYed4EkRNl5AAaFkj%2FCxYLbS%2BwW15XN2JaLIkXWYoJjOXWKv%2FI24DxAMsvkn1bGAnzaOujn%2FRuf8jl%2BdNZYvfOF4dbfx8dKNXTkfVXTd%2FtYcDYDxI%2FV41WDE%2FZ8pMFK%2Fc6jH6Dso8itkMpv%2BCnZUKw80IUuYkEE7gJlBemGXicRsqcVJT4rBjZ8Riu2Ccl2BTlCZ5eIe3zarsjOjq103GnztwJOSiCcfWRimzHzfKaQlNbA2yTgGTYoVuO%2FIrnzsIu%2BB1Wg%2B9xNye32EKgd6dOxQSlsHomlj6Y1%2FFyICBzoEvBtnVgJOL2YxLZ2q45h7JltanYOrpgo9a5Sv6yacXacsk1i%2F%2FSvBbjbxssV0SQyYsir8w%2FXlPAA0A%2FIWYHYX7iw4tgbt3cJTrqXWpPjelRtb4A8vOAr1vqSM%2B8e7Ci%2FZ6uXjXyAHfeTC358TJBjqkAbyJPr5Di7rF8WzdhvVZQkYeR2Bw2rTfruJ0xLgW7uuXSpFIcSv8CK3sWgB4%2FpR42ZfRl3WjMhTQqlJhhkHBTk1l1It7KwV1PMR8kxnJqf9kKGH7LPns4mH%2FbeIZJkWnyqv%2FEMW%2F2dxKAkqzLSYFYnmdnB0IiwpyZmA8DuGEtLWPL3gDMpxbNKShGVwyzuPK91Yejkq3EAvU9QgVPjF59zcr4coP&X-Amz-Signature=72724978ab04943c1877ec12fd4338c842c242313ef70e22b1fdc7568b3d0a86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

