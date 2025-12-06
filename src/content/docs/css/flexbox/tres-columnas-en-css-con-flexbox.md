---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMIWI4K3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T135109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbescj%2BQNwfJ3jVuZ%2F7Otxhj87IH%2FME1JZi9D31bz0HAIhAIg7nJwN0eYx3SjLJ4itvVmqGwc%2B%2FDxxV5cmHhy67uieKv8DCHUQABoMNjM3NDIzMTgzODA1Igz8iBL7C1rUlzEZKOEq3ANIe20KbCz6Hoo3KIlbi9aJc9%2FK8SnsUiFxPPaTZyuc36gx0eGRkUfrsbhXg7iOnNhbv2AVYLUv7LjGyCEojCiSBeM2oZwhRMzh7sN43I%2BzhLP9wY3cCJdjVyCV0hy0SXQWyVPn%2B7PsS6SkU3MwU%2Bj6IHXpQWJ5iuAO4BfU2ZERiPF%2BCpzCfuD2XyQoRZzagr%2FzNnzxDIzjWHDEn1peWhC9IZzSHedVviIbiI%2B3Ba2agXrmYGsVwmRn9IFeMTC8pTIdtD%2BU6t1O6JeAb3WmiGveV1SabuHzK2RJ21SbQnSt8OW7BfVuPKgLpOVKvRkWrfrg0KpkwIgW6mWRFhtuUdntBUqrndp2fcvyI7W6uPZD2SbU%2BkX%2F0L8t7LuzQwj9jM2sYfwSc01BbbMiaWiK%2F787EaqQz1wiiktqmo3l%2FyLe%2Bez%2FCDJZr8j6kAUZXl8QxqA4GE4JzV15bCOIzayx9oQa1Q%2F0OqUQnj74WJjEpgQ32vg837nu4jNl8WuhFMCbXxfv719i5tMO20mlEGTWJgZIplRAuqrXK4wJKeFSFuafczRr4%2FoSGSxMhQyM%2BtzrJtdHCZdgCojgBKLRTEcHQrqb3aqJqDrsIUv4sluOXV0d%2Bedj%2FMdi4ih0dL9xqjDjptDJBjqkAQih9MS%2BQD8YwOUjsxfmqKgeUDOD5eSeUiS38ycM8HA8fns1Klk%2B%2Fw8OcJU6iFT3kX0f6BE6bj6HF5sDn4fwADDtFepCx%2Fy9ZwHfM47%2FPearrUMaBU4CfIbcx9vaz7uL8I3yMCcjLcfAeb6tA2tfl6RimkkunCXcI2EP71y8cbQl2RKMnT4vya1Jqo5f0W%2BKgF8W%2FXbreJz3846AMPBvCuDWn%2BsB&X-Amz-Signature=550f49cbb169b8ac5e5871a037c6b5abd8275ae6b5fb9dcf570667c0e02a5016&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMIWI4K3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T135109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbescj%2BQNwfJ3jVuZ%2F7Otxhj87IH%2FME1JZi9D31bz0HAIhAIg7nJwN0eYx3SjLJ4itvVmqGwc%2B%2FDxxV5cmHhy67uieKv8DCHUQABoMNjM3NDIzMTgzODA1Igz8iBL7C1rUlzEZKOEq3ANIe20KbCz6Hoo3KIlbi9aJc9%2FK8SnsUiFxPPaTZyuc36gx0eGRkUfrsbhXg7iOnNhbv2AVYLUv7LjGyCEojCiSBeM2oZwhRMzh7sN43I%2BzhLP9wY3cCJdjVyCV0hy0SXQWyVPn%2B7PsS6SkU3MwU%2Bj6IHXpQWJ5iuAO4BfU2ZERiPF%2BCpzCfuD2XyQoRZzagr%2FzNnzxDIzjWHDEn1peWhC9IZzSHedVviIbiI%2B3Ba2agXrmYGsVwmRn9IFeMTC8pTIdtD%2BU6t1O6JeAb3WmiGveV1SabuHzK2RJ21SbQnSt8OW7BfVuPKgLpOVKvRkWrfrg0KpkwIgW6mWRFhtuUdntBUqrndp2fcvyI7W6uPZD2SbU%2BkX%2F0L8t7LuzQwj9jM2sYfwSc01BbbMiaWiK%2F787EaqQz1wiiktqmo3l%2FyLe%2Bez%2FCDJZr8j6kAUZXl8QxqA4GE4JzV15bCOIzayx9oQa1Q%2F0OqUQnj74WJjEpgQ32vg837nu4jNl8WuhFMCbXxfv719i5tMO20mlEGTWJgZIplRAuqrXK4wJKeFSFuafczRr4%2FoSGSxMhQyM%2BtzrJtdHCZdgCojgBKLRTEcHQrqb3aqJqDrsIUv4sluOXV0d%2Bedj%2FMdi4ih0dL9xqjDjptDJBjqkAQih9MS%2BQD8YwOUjsxfmqKgeUDOD5eSeUiS38ycM8HA8fns1Klk%2B%2Fw8OcJU6iFT3kX0f6BE6bj6HF5sDn4fwADDtFepCx%2Fy9ZwHfM47%2FPearrUMaBU4CfIbcx9vaz7uL8I3yMCcjLcfAeb6tA2tfl6RimkkunCXcI2EP71y8cbQl2RKMnT4vya1Jqo5f0W%2BKgF8W%2FXbreJz3846AMPBvCuDWn%2BsB&X-Amz-Signature=5600afec480d5bc84fd15ee936dcbd8e6149df2be3e8f28660ee7fc6533cbf7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

