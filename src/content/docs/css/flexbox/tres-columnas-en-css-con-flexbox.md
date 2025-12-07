---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TESQTA6B%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T023816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD62gnqKgLu%2BvnQs1HOsqT6Pv2KvFdsMN3FjFTv9oCkugIgBNmK7JX3UxrbObVyhafnd1NGakF02j4BM6ejZUWXkeQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSd4lO5vAB08OWOvCrcA5YCMNW%2BTJtRcTM4zoKSgUdo5rTaiwdnlP7AgkkYHkSTE0QvPmgBGq3lAL9%2FeqjB2ezHPpM3EG%2BHi8rflsUQLHohpnR1p%2BXlwIjMEhfZUj5KQPXoSiF2%2FUXvq9SUlj7Tj7jXF4BFKFrkLkfF%2B85ZLQiZnRSPe7eXIk8uKvk8AppATdvxewqekinHRvrQ5vO2NafUGhfQTzKgFk0SR7KMWJ33ntT5fqLOvM6dVf7Sj%2B9u7y6zE%2BEV%2F9MI%2BU3rsxRs5%2FdTEx%2FyXP4n0aA1Qr%2BeAvsAMUn87NUXEqFiz81hlXEAQ4gUvYw6KSUJxfmFhK2ESJ2jyYpAg978OSA2HYPn3jwA9KOYXmO5p%2BfhFjoB7b76eGJMndn%2BH%2FJ7Si0Nw3GRWcwFWnX9r80PLhi4AdT0eXxZJiCH0xHslfEedqcFHHWqYvtE3h0w04CPM%2BCvjcRrum74mwlQSd0TZDICPuUZfscar4jmVxF%2BG5hFV0ezQY9sPvjKvg3j%2BvFS3ZHQXOncR4arpL4NgmaazxuGzxishHqSpSRomp9hyMBUfWMXZ5B02WQg72%2BonHnBnm3uNjMLn9Hjv%2FbNR56fEcGiUcGItZ4PbwsM77aownqI7kywsoc9us%2BQQ0KZe88eJ3y8MN390skGOqUB8hlosWArDAgbUSuOUH5oLfN37RTA8hRkZyKrbZ3GIobqwiwAcurcWI8%2BHVs9tcZzI1pJoLi5SNFjppChpyT9vmv%2FeTeKivlteOdJWuwQRSSNxoSYBpz%2FJc3mvpsdJwM%2B%2BmPihtlXCKgKrnXcgmkKgxKq%2BpA%2Bl2Z1claj%2BS591J77Fcy234UlGLQ7yvu3RMWJGnPgSLDiiLsBj6KEiFxXgCxgKFI2&X-Amz-Signature=f77a9c11cb82719cd5a99f750a06e742ce1e036a8c86c8bf61d0dd9398c50fce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TESQTA6B%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T023816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD62gnqKgLu%2BvnQs1HOsqT6Pv2KvFdsMN3FjFTv9oCkugIgBNmK7JX3UxrbObVyhafnd1NGakF02j4BM6ejZUWXkeQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSd4lO5vAB08OWOvCrcA5YCMNW%2BTJtRcTM4zoKSgUdo5rTaiwdnlP7AgkkYHkSTE0QvPmgBGq3lAL9%2FeqjB2ezHPpM3EG%2BHi8rflsUQLHohpnR1p%2BXlwIjMEhfZUj5KQPXoSiF2%2FUXvq9SUlj7Tj7jXF4BFKFrkLkfF%2B85ZLQiZnRSPe7eXIk8uKvk8AppATdvxewqekinHRvrQ5vO2NafUGhfQTzKgFk0SR7KMWJ33ntT5fqLOvM6dVf7Sj%2B9u7y6zE%2BEV%2F9MI%2BU3rsxRs5%2FdTEx%2FyXP4n0aA1Qr%2BeAvsAMUn87NUXEqFiz81hlXEAQ4gUvYw6KSUJxfmFhK2ESJ2jyYpAg978OSA2HYPn3jwA9KOYXmO5p%2BfhFjoB7b76eGJMndn%2BH%2FJ7Si0Nw3GRWcwFWnX9r80PLhi4AdT0eXxZJiCH0xHslfEedqcFHHWqYvtE3h0w04CPM%2BCvjcRrum74mwlQSd0TZDICPuUZfscar4jmVxF%2BG5hFV0ezQY9sPvjKvg3j%2BvFS3ZHQXOncR4arpL4NgmaazxuGzxishHqSpSRomp9hyMBUfWMXZ5B02WQg72%2BonHnBnm3uNjMLn9Hjv%2FbNR56fEcGiUcGItZ4PbwsM77aownqI7kywsoc9us%2BQQ0KZe88eJ3y8MN390skGOqUB8hlosWArDAgbUSuOUH5oLfN37RTA8hRkZyKrbZ3GIobqwiwAcurcWI8%2BHVs9tcZzI1pJoLi5SNFjppChpyT9vmv%2FeTeKivlteOdJWuwQRSSNxoSYBpz%2FJc3mvpsdJwM%2B%2BmPihtlXCKgKrnXcgmkKgxKq%2BpA%2Bl2Z1claj%2BS591J77Fcy234UlGLQ7yvu3RMWJGnPgSLDiiLsBj6KEiFxXgCxgKFI2&X-Amz-Signature=1bd59f6420c95d3bb94efe10e7260253b6a4ec5f5ddd1525fd36fae19d820cd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

