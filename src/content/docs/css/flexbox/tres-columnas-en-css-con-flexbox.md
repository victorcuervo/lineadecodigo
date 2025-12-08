---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BI4NJST%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T100123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGg5Hexn2ERx5ECbRyhvex%2FbL7gXcdkIbN0XB0HUQjgBAiA5Obk7CZ6o5erDi6CLyZolgFk0i0t4LgKiCSdAw%2BVoUSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4NXCz8PVo3i6C3yFKtwDQE078rD55lwq9KrnkCywOHtaGSgDAtz6qVAsGiVsBBdkiLWhcKnteweU1Vx8zrYRpwU2ox%2BoMoRjRqFjuZHwfZC%2BJAA%2By6sQRD%2B%2Bppotw9v1UKWoUyfaEg3r1R%2BKKKYujklDwlyZjVQFl65m7UN9ov3E8%2FC6iVt8VbgBrmzfgy3qdqxmyxxkH6iyNqZixt7c02uDGDkqxmq%2FMO6oNdBYFWcRpXDSyeKgniaBdtRUlYYd18v%2FJQVItoS3Ojgzymp6%2B31oqGbDL93ESSALv5dXY9M2L%2B6S1VZDrIwBzQNXQ%2BMa5MeUcd1UQlwqlIFLa9QvJqP9kkd6TE7%2FQE9mTQp08KsTCUxKg1ssh5ukGSnn7g5aAA5SXd1VI0GtTwV3kw4Nd%2FB2o6vIAmi%2F%2BaOMWDA%2BKXoBtKTCeMvzX57BLosLJGboEb%2BkX92WM35g4WqTEkgQWB1awg%2BuvN3em5ZWRoFvnyNwKx1vlEwnRMa8ksethzQoUcpQqQXxw5vE0fLwXJEhRu%2BL0kBfbao2%2Bcpu6JNEhIcwmALkSd8gSfERHQAc9ZObur2UFYIfybSrqJJ0IYmyAa6IrwslxIGw4pe326NYirw%2FdEgQBisu0zBoMRronYqZn7Y4SH0oIcvpO10wxO7ZyQY6pgF7uCusUzOJ%2BTUXL8%2FxXqqHIXzLAHnc3NsqXcYJMUWwttDtGQUpV3aYXMP9qP7XUuK9nGP5evpYfnXuGgfg8X29FcNBO8WjMQy3hgkma0eP8nkqPJ1uAfENmEfRrLiandtX9LFbJSAtvwDE2eQI3avjVwUytMZX4hYg8LCrxGBWsf9F4hSwl73X5xnCRV29kMQdjqT9XQKQcNIHkwpN6AH1nGqMsAKT&X-Amz-Signature=b794e8a86f8738158d74e1025be85e68fbffb94a5a767ffdb4187e7a583c52d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BI4NJST%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T100123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGg5Hexn2ERx5ECbRyhvex%2FbL7gXcdkIbN0XB0HUQjgBAiA5Obk7CZ6o5erDi6CLyZolgFk0i0t4LgKiCSdAw%2BVoUSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4NXCz8PVo3i6C3yFKtwDQE078rD55lwq9KrnkCywOHtaGSgDAtz6qVAsGiVsBBdkiLWhcKnteweU1Vx8zrYRpwU2ox%2BoMoRjRqFjuZHwfZC%2BJAA%2By6sQRD%2B%2Bppotw9v1UKWoUyfaEg3r1R%2BKKKYujklDwlyZjVQFl65m7UN9ov3E8%2FC6iVt8VbgBrmzfgy3qdqxmyxxkH6iyNqZixt7c02uDGDkqxmq%2FMO6oNdBYFWcRpXDSyeKgniaBdtRUlYYd18v%2FJQVItoS3Ojgzymp6%2B31oqGbDL93ESSALv5dXY9M2L%2B6S1VZDrIwBzQNXQ%2BMa5MeUcd1UQlwqlIFLa9QvJqP9kkd6TE7%2FQE9mTQp08KsTCUxKg1ssh5ukGSnn7g5aAA5SXd1VI0GtTwV3kw4Nd%2FB2o6vIAmi%2F%2BaOMWDA%2BKXoBtKTCeMvzX57BLosLJGboEb%2BkX92WM35g4WqTEkgQWB1awg%2BuvN3em5ZWRoFvnyNwKx1vlEwnRMa8ksethzQoUcpQqQXxw5vE0fLwXJEhRu%2BL0kBfbao2%2Bcpu6JNEhIcwmALkSd8gSfERHQAc9ZObur2UFYIfybSrqJJ0IYmyAa6IrwslxIGw4pe326NYirw%2FdEgQBisu0zBoMRronYqZn7Y4SH0oIcvpO10wxO7ZyQY6pgF7uCusUzOJ%2BTUXL8%2FxXqqHIXzLAHnc3NsqXcYJMUWwttDtGQUpV3aYXMP9qP7XUuK9nGP5evpYfnXuGgfg8X29FcNBO8WjMQy3hgkma0eP8nkqPJ1uAfENmEfRrLiandtX9LFbJSAtvwDE2eQI3avjVwUytMZX4hYg8LCrxGBWsf9F4hSwl73X5xnCRV29kMQdjqT9XQKQcNIHkwpN6AH1nGqMsAKT&X-Amz-Signature=40bff09dad8ec84cdce00ea89d4a26467f53ce24d4120537ca19535e2cef59ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

