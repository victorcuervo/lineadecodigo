---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN6XXFL3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T184649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGeMzSGBvQIfVSSeVrrMspTsgNUm816nfvFbS24m15eyAiEAi%2FOIxGsOXeK3kvNieq15OTvBjPlN6D%2FZI%2FuCWeYWZlkq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDCcsiyAA1TZwB5m%2BayrcA8BXAfyy3T0cqNLlGrfhiyIZaDQIYfhmyyEITx98o8G1JOcjZniuDu6zmhRoKbpE1ivDljk9PGwdll%2F8v8rRsumwO6a%2BoHf%2Bz59xlG9kmJXHUPIfIuq%2BQCdG0CZ4AKSEu2Ds5ImYanOnYCKKtI4QcKLjSQifHtnZkeOjiBj6FnzTERWrBnEBGi3PXmeeOFsL76fClp%2B30bk7tWAR1wAhOizWWHGc45Rz1wOBn3DDGr38WmPIhudZM1197W%2FEDYHu4scFUG0cD%2BdJ5AiR6GcdJXQQeTOMIra%2Bk7LLBudK6pURuu1xqT50d6UpbZLU2EZDzv5t1Ec%2FXsvpFvHzB4RFbWuYrxKXjBQT9zPQ70u6c1TfhPiiedNNqdf06RXyR3gxNa6RjHonpfGCQIMvVW3O3yknwIGcYwSQUeRazbVX4Jp4kSOrV219yaWjv9wzg1ldCH9C22zhPwqCuusNGsmng6T6AypHTKVelPOha0JsHzGrOhh9kvJgk5Xm6AWq%2Bhav3KrZtStYsY%2F7tKzpi8k9ZooP4ITcQn5Px%2Bkb4Ez7rn2a8%2FwjsZtAyaDExc6hKErzt80JIpWl4A710SjzUzVPoClpcIygj2GY9dQfKMlicjuAWx6d7Gfhv0iU4FG1ML%2Fhy8kGOqUB%2Fr49rcqB0ZjzGHJ2IYzOqZ7GetxiiY0hwsEYCHYQtI%2FnqHkvOczooDsif03C6jdsfO4GMwAp%2FLJ3ZgMpT5RDljsyVl%2BuBwR1U8XNEjqPqmQntuurS%2BbXT8zmQzvUGLmktgkcNvm4J0cSCVcyWSCBtFeZ7gHVruK5Db72KDG5aicFpIbHS9%2BouZUYvXOpfnmI5drm7Q5D3l064XfdBwjITMxfWNwD&X-Amz-Signature=4f7b9b38f8fb2cc6764810df7271332ed34750ca83ecf24a4a91c03f5f3954d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN6XXFL3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T184649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGeMzSGBvQIfVSSeVrrMspTsgNUm816nfvFbS24m15eyAiEAi%2FOIxGsOXeK3kvNieq15OTvBjPlN6D%2FZI%2FuCWeYWZlkq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDCcsiyAA1TZwB5m%2BayrcA8BXAfyy3T0cqNLlGrfhiyIZaDQIYfhmyyEITx98o8G1JOcjZniuDu6zmhRoKbpE1ivDljk9PGwdll%2F8v8rRsumwO6a%2BoHf%2Bz59xlG9kmJXHUPIfIuq%2BQCdG0CZ4AKSEu2Ds5ImYanOnYCKKtI4QcKLjSQifHtnZkeOjiBj6FnzTERWrBnEBGi3PXmeeOFsL76fClp%2B30bk7tWAR1wAhOizWWHGc45Rz1wOBn3DDGr38WmPIhudZM1197W%2FEDYHu4scFUG0cD%2BdJ5AiR6GcdJXQQeTOMIra%2Bk7LLBudK6pURuu1xqT50d6UpbZLU2EZDzv5t1Ec%2FXsvpFvHzB4RFbWuYrxKXjBQT9zPQ70u6c1TfhPiiedNNqdf06RXyR3gxNa6RjHonpfGCQIMvVW3O3yknwIGcYwSQUeRazbVX4Jp4kSOrV219yaWjv9wzg1ldCH9C22zhPwqCuusNGsmng6T6AypHTKVelPOha0JsHzGrOhh9kvJgk5Xm6AWq%2Bhav3KrZtStYsY%2F7tKzpi8k9ZooP4ITcQn5Px%2Bkb4Ez7rn2a8%2FwjsZtAyaDExc6hKErzt80JIpWl4A710SjzUzVPoClpcIygj2GY9dQfKMlicjuAWx6d7Gfhv0iU4FG1ML%2Fhy8kGOqUB%2Fr49rcqB0ZjzGHJ2IYzOqZ7GetxiiY0hwsEYCHYQtI%2FnqHkvOczooDsif03C6jdsfO4GMwAp%2FLJ3ZgMpT5RDljsyVl%2BuBwR1U8XNEjqPqmQntuurS%2BbXT8zmQzvUGLmktgkcNvm4J0cSCVcyWSCBtFeZ7gHVruK5Db72KDG5aicFpIbHS9%2BouZUYvXOpfnmI5drm7Q5D3l064XfdBwjITMxfWNwD&X-Amz-Signature=376bd707b2818b71c5f195a8469cb36beb7e663ba35c3cd019e069945caf0987&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

