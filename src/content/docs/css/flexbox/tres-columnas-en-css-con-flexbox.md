---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZH6HWNT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T131436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8hLvYDFSYAFI3k2lolKQzcQDwN1vcPaLLP5L6%2BtogSAIhANIlVqK7ZTlK0RnyOS5wHrbrykgs0UeYc2Q34rNy9KYgKv8DCFoQABoMNjM3NDIzMTgzODA1Igz8xG1oWzGVKGbyISgq3AP9rvw9deYFlAKtN1IbP38tjNZwPsY7SMWaJzNl2r0hOq%2BfRDxfCkWEwzJ5a45ykV2RLyQTh2rCSvmBcnKTyoUpnLfx%2F2ol4m7bTSuRf%2BNJgmqXqlcO520gqyHa%2F5aT81wKvT5uIOtWETB9rAIUlBeNUxthvQ4rCbPeinWOegPwUfYcBx3kYb8gnEav6SoWY3gxPfGo1Ub2J5pUMAUcSoukgVhNpTRMm8%2F3R1G9FvBjfAKvrjLl516LuE7kFVAm3PVSe5mouyk1hf1B0cypOLeNa3L98c96FjqV6k25FBJhPSsKLmrqP5rrOYwxb0YZLMcSaGMm%2Bpqnt0VmOaoIRn0Oda529CYkRdzS8IqJzVmeF53mtZdsvyPp5eLnSJbElPAMwjfpbBH6Ds4MADaXmV%2Bg7tB7AcKIj2D%2BztOxGUJCAQfWFWZgkHmNqMebJxY0qMFdifa3YhXVexFN7uX4LITjF1xX2J7s7Z4hHqSylCBuaBKPkrOxH7djezj4iKaz9O4D7hUDBonO9XXSNpzY1YIcpWPA8MVopVswU2mPAr%2BOd07B5057ZdweY85bHWlS1ugPsZotlJeNtbv0z6eP2cDtdgZ%2BDZjIbgfsOXB46X2whkFmtjknrsBuPt%2BOlTDqw8rJBjqkAXAUD2OUoYP32Jr6Nbfz60AVi%2F%2BfKpWvEFL0Ni4qxLcTchok%2FGX4lR7Cj8GGO4ezVwgGqZ1yA9frUGvFfV0CQH7CpIyR%2BYpoDfuCvryOQaGh8mnw5%2FJjUhbS9Mb6kVgTX39a%2FM8Dpf6IhUo4YVK63o%2FXABAw475fWXjPfpqv4kinv02rcis17NxoxDz8317hDnC3vVkt%2Fq9WdeBJH8Blop1%2B%2BqyD&X-Amz-Signature=8b499f35f6bdfb386dca28a1e1e143381c0a9e31f78eb5ef34004459f2108734&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZH6HWNT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T131436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8hLvYDFSYAFI3k2lolKQzcQDwN1vcPaLLP5L6%2BtogSAIhANIlVqK7ZTlK0RnyOS5wHrbrykgs0UeYc2Q34rNy9KYgKv8DCFoQABoMNjM3NDIzMTgzODA1Igz8xG1oWzGVKGbyISgq3AP9rvw9deYFlAKtN1IbP38tjNZwPsY7SMWaJzNl2r0hOq%2BfRDxfCkWEwzJ5a45ykV2RLyQTh2rCSvmBcnKTyoUpnLfx%2F2ol4m7bTSuRf%2BNJgmqXqlcO520gqyHa%2F5aT81wKvT5uIOtWETB9rAIUlBeNUxthvQ4rCbPeinWOegPwUfYcBx3kYb8gnEav6SoWY3gxPfGo1Ub2J5pUMAUcSoukgVhNpTRMm8%2F3R1G9FvBjfAKvrjLl516LuE7kFVAm3PVSe5mouyk1hf1B0cypOLeNa3L98c96FjqV6k25FBJhPSsKLmrqP5rrOYwxb0YZLMcSaGMm%2Bpqnt0VmOaoIRn0Oda529CYkRdzS8IqJzVmeF53mtZdsvyPp5eLnSJbElPAMwjfpbBH6Ds4MADaXmV%2Bg7tB7AcKIj2D%2BztOxGUJCAQfWFWZgkHmNqMebJxY0qMFdifa3YhXVexFN7uX4LITjF1xX2J7s7Z4hHqSylCBuaBKPkrOxH7djezj4iKaz9O4D7hUDBonO9XXSNpzY1YIcpWPA8MVopVswU2mPAr%2BOd07B5057ZdweY85bHWlS1ugPsZotlJeNtbv0z6eP2cDtdgZ%2BDZjIbgfsOXB46X2whkFmtjknrsBuPt%2BOlTDqw8rJBjqkAXAUD2OUoYP32Jr6Nbfz60AVi%2F%2BfKpWvEFL0Ni4qxLcTchok%2FGX4lR7Cj8GGO4ezVwgGqZ1yA9frUGvFfV0CQH7CpIyR%2BYpoDfuCvryOQaGh8mnw5%2FJjUhbS9Mb6kVgTX39a%2FM8Dpf6IhUo4YVK63o%2FXABAw475fWXjPfpqv4kinv02rcis17NxoxDz8317hDnC3vVkt%2Fq9WdeBJH8Blop1%2B%2BqyD&X-Amz-Signature=2e8fd28f4f35a83d226508bb751088b54a13da47a89099bb6e1aeac5c8ad9e35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

