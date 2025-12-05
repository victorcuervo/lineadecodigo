---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJVBVVVG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T180941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2B1ewo1UIWLK%2FKlSVYTd%2FjKket61udf57hmJpHhsDApAiA4WnWrClOUFUtpwKoXjQiI3CDcwb%2B%2B16jvxKvRndI8MSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMf3m2eF5LayE4WNEuKtwDRCpS8h2aj85EliXqUCuVvCvSTFPtU%2FfxHcFBcC5EMSK2a9cQw7UvjZkmIOIswbDDe%2F4FEo5IKujLH1mPfTEfXNZGKp964tnmYs%2Bmq0muQFVUrwS7rc0WBzYCI2glYRs6U5XmsJPSaGkMQVYfrwMsnbguAI2sW8sm2WClUbWGz51eLvQk1TMu%2B5yrwzy8NqCMsj7gRBAkQxK4iyJNq2fj2Rb9vWVYy7wsoLRY6N2oe7g0RmAgFG0fR643zR0ij7Hgbfg%2FWVI5dgXkdVOBgUtDQO0tTmpwYD9xs%2F%2B6yFU8dMnGCQBdgEx7RPgzXqKKhv1GEVS4Rxr7J%2BYxUC0FKNUNJOPomy9RjxqYndpa66k6JWi49ZfAUnuE%2FPZSaYEWOoAakEYaUGqruzzckhAJQ7qS1wLo%2B7SKHOM%2FSy7dFoeYAqYQVtFDh0GMTkdLSeSg58YaCIo41AIillQRNliMVJagjCzTf6yo%2FyBWEyXiOrWFDGz2IZ%2BysjdFcvInx8HYSBUYyp%2B53gx5RHmMHQt08W2gdzupYiIQ%2BaQjNw6F8DQpIkBrVKWJExmGgJmE%2BjnHf5li%2B21CpwoG1dFsFNQ21LtzDQqE20lkl%2F4szkf6epFWsEdS9gCWun8%2F%2FuIdUZow5erLyQY6pgGvyFk7MeTNxI57Hh4xxtVXXrmwGqnd9Iq6EQaKsGvZsmQ%2FDqC2VdpYCoqDhJGQW0pp%2BNsWbsLiS%2FdvZ%2FkusqPHj7XNhh34sTACfpsHBNe5GhxCKzWlgqKZiUcSew3RGEqaYp7WyUyyYtVqBBzOXKAOMaJe9LBSmEKnChoWWdhDaLruypEu3c7Iqjce116Pm0Kpli238ixWw%2F%2FqJHjY3XxdVtnRczqp&X-Amz-Signature=d51368b3a037138627cadc869736e9ab2f2a8cb22f35d5924b67d87820fead73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJVBVVVG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T180941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2B1ewo1UIWLK%2FKlSVYTd%2FjKket61udf57hmJpHhsDApAiA4WnWrClOUFUtpwKoXjQiI3CDcwb%2B%2B16jvxKvRndI8MSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMf3m2eF5LayE4WNEuKtwDRCpS8h2aj85EliXqUCuVvCvSTFPtU%2FfxHcFBcC5EMSK2a9cQw7UvjZkmIOIswbDDe%2F4FEo5IKujLH1mPfTEfXNZGKp964tnmYs%2Bmq0muQFVUrwS7rc0WBzYCI2glYRs6U5XmsJPSaGkMQVYfrwMsnbguAI2sW8sm2WClUbWGz51eLvQk1TMu%2B5yrwzy8NqCMsj7gRBAkQxK4iyJNq2fj2Rb9vWVYy7wsoLRY6N2oe7g0RmAgFG0fR643zR0ij7Hgbfg%2FWVI5dgXkdVOBgUtDQO0tTmpwYD9xs%2F%2B6yFU8dMnGCQBdgEx7RPgzXqKKhv1GEVS4Rxr7J%2BYxUC0FKNUNJOPomy9RjxqYndpa66k6JWi49ZfAUnuE%2FPZSaYEWOoAakEYaUGqruzzckhAJQ7qS1wLo%2B7SKHOM%2FSy7dFoeYAqYQVtFDh0GMTkdLSeSg58YaCIo41AIillQRNliMVJagjCzTf6yo%2FyBWEyXiOrWFDGz2IZ%2BysjdFcvInx8HYSBUYyp%2B53gx5RHmMHQt08W2gdzupYiIQ%2BaQjNw6F8DQpIkBrVKWJExmGgJmE%2BjnHf5li%2B21CpwoG1dFsFNQ21LtzDQqE20lkl%2F4szkf6epFWsEdS9gCWun8%2F%2FuIdUZow5erLyQY6pgGvyFk7MeTNxI57Hh4xxtVXXrmwGqnd9Iq6EQaKsGvZsmQ%2FDqC2VdpYCoqDhJGQW0pp%2BNsWbsLiS%2FdvZ%2FkusqPHj7XNhh34sTACfpsHBNe5GhxCKzWlgqKZiUcSew3RGEqaYp7WyUyyYtVqBBzOXKAOMaJe9LBSmEKnChoWWdhDaLruypEu3c7Iqjce116Pm0Kpli238ixWw%2F%2FqJHjY3XxdVtnRczqp&X-Amz-Signature=fb198fa4a049280bbd1e0d6d79e393389ca7817996ab364544c1dc7d52262727&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

