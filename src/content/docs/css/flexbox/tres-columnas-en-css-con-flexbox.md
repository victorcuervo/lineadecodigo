---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXHFFTYH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T172940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz5mtJbcjz5JKOTo%2B%2FeMPDdkSCu%2BK%2BSnlgD9A12sK%2FrAIhAOL6I4%2F%2FegebmRm7i58bQziLtyrHkw7Zfi7TFs8NJMY3Kv8DCGEQABoMNjM3NDIzMTgzODA1Igz9zj0pdUJiPicBtCMq3APpsLYb2ePeEFMkGVwyyPxNpc8MfxYDj%2FYoUV7w%2BXFTqwJAK8XRUma%2BxJ0%2FEFFDKIgnBJcww5mFrUXucP0BWWxhydAubFcYlmYVE3N8Ekj6ab3gjMZL8CEzTfqYmdoseHS%2FTaOHIA7or1zj7vpiMnAguBOibz0BnXzI47aHEJAMGp0g55O%2FPei%2F52OyO%2FbIZX%2FnzjXSQLd75o91eLR78l2wUXVJKN2OD4GPjz3lZt%2BwOMdvfzu6vpKKLHO2z61dXQP%2BmmGfinR4kjSkdZ8T4gwQ4xi2gaom27DHEhwWhTuufOa7EMGmk5tEu2f50rtk5IU92xp8hzfLrPoRPudAN1j6GZ%2FnoUOK8cBYeYcM8QUH6EFZ0RJCd2e%2FOO%2BuCW6WnhaxnnyyGmEhNacY0bfhkaSI2KTx7pbpYSJM9pdp3ulwEUKUvGylU8IKNb47D06WBzzOvT5btZjyzq2T6MPPhKPXK9vjrlKb861zxJ11gD8Ey64%2FS5CL1TO4nZ60Acaznd6P6ygR8Aa%2Bftqg8uz3SXiA2Or46NYO5JOe8WWyWkwB1VfEmq6QI%2Fku2On3hjOtPv6O8iiQuU3bxANrnHye3Fubqm7oLzip12p%2FvcCSeat68dBlQ01f6QOUvJrU5jCR9MvJBjqkASgHFqRlXOPaNPhqh%2FfF2m6GA7nEvgNi4HiD%2BG7Ft9acwMTr%2BeI6XCA0Cl6hlM9EfPwVznlvnBubweEy2NbW8gK7u2idKsW3xutO%2F0INVUN%2Be1Yhm12TGvzLcyhPhLaQn7PpyHW1XIA96wi0I5BwkQAs5IHzG80fHGqYXlCSwFJCSznQdcPjRyj%2FFvY8KKkWgYBsqroui3NtEfPzHQT6Z1a5yBgO&X-Amz-Signature=051fa8e3cac6438f4c7bee6b1bace5ea8a35035e72d69e8f2961c85d30b9a9c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXHFFTYH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T172940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz5mtJbcjz5JKOTo%2B%2FeMPDdkSCu%2BK%2BSnlgD9A12sK%2FrAIhAOL6I4%2F%2FegebmRm7i58bQziLtyrHkw7Zfi7TFs8NJMY3Kv8DCGEQABoMNjM3NDIzMTgzODA1Igz9zj0pdUJiPicBtCMq3APpsLYb2ePeEFMkGVwyyPxNpc8MfxYDj%2FYoUV7w%2BXFTqwJAK8XRUma%2BxJ0%2FEFFDKIgnBJcww5mFrUXucP0BWWxhydAubFcYlmYVE3N8Ekj6ab3gjMZL8CEzTfqYmdoseHS%2FTaOHIA7or1zj7vpiMnAguBOibz0BnXzI47aHEJAMGp0g55O%2FPei%2F52OyO%2FbIZX%2FnzjXSQLd75o91eLR78l2wUXVJKN2OD4GPjz3lZt%2BwOMdvfzu6vpKKLHO2z61dXQP%2BmmGfinR4kjSkdZ8T4gwQ4xi2gaom27DHEhwWhTuufOa7EMGmk5tEu2f50rtk5IU92xp8hzfLrPoRPudAN1j6GZ%2FnoUOK8cBYeYcM8QUH6EFZ0RJCd2e%2FOO%2BuCW6WnhaxnnyyGmEhNacY0bfhkaSI2KTx7pbpYSJM9pdp3ulwEUKUvGylU8IKNb47D06WBzzOvT5btZjyzq2T6MPPhKPXK9vjrlKb861zxJ11gD8Ey64%2FS5CL1TO4nZ60Acaznd6P6ygR8Aa%2Bftqg8uz3SXiA2Or46NYO5JOe8WWyWkwB1VfEmq6QI%2Fku2On3hjOtPv6O8iiQuU3bxANrnHye3Fubqm7oLzip12p%2FvcCSeat68dBlQ01f6QOUvJrU5jCR9MvJBjqkASgHFqRlXOPaNPhqh%2FfF2m6GA7nEvgNi4HiD%2BG7Ft9acwMTr%2BeI6XCA0Cl6hlM9EfPwVznlvnBubweEy2NbW8gK7u2idKsW3xutO%2F0INVUN%2Be1Yhm12TGvzLcyhPhLaQn7PpyHW1XIA96wi0I5BwkQAs5IHzG80fHGqYXlCSwFJCSznQdcPjRyj%2FFvY8KKkWgYBsqroui3NtEfPzHQT6Z1a5yBgO&X-Amz-Signature=cbbe1c0890da09c15d03b51c3b81404fe636e5db673718228d750c5379cf7704&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

