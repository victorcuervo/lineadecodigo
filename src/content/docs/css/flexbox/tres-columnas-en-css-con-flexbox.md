---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WGQJZFS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T065052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBTe35j87pbNxPYA5BoKLYLT4zVMxWcd86A%2BGFCxGUXkAiEA%2B3EtkrYh3fn%2BTAT1hS%2FQwgLWjD%2BJsBaPbMEC1rQgnFMqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHU5IHozG%2B8Kvk8T1yrcAzKXXUze9GMpGXFTMAqzT0pmJGqIYYMSKMSEK8rGyYN1yZD7X6qGLmYDO3bpHiqKTbKTgTy6jKvKukT8zP3G3axcZybhF7h0NOne7GudMLz5%2BGdXFhLfV47aQzuILry855H9s2aDg5DF2rzeqQwvLDoZRgdT9kWEP9aZH%2FxE3g7%2FxYdZp0zft%2BAf0XX%2FCe2bz8gTiRZlDJU7Cb96J3hoFbnWmYky34I9WADdXTON0KNcKHTaOEdS6%2F15WjANXxORaESwq4ZV2zmx25vbMxCcDWpJZ9z30yqT7E6ZkjoObEdH09tu%2BXLVgDgKHslYp28QFuH4ECaqIjdNsLy4uHcfftYnf%2F4K3EdNmBLhT3xcd83bt9A8K9jCG4e5vCGoJq2RrFH7Sp82f3iItc7ySCdrsm2kAOLvNSmUb9VdQb25GD7qwLt7E%2F8y7YdB%2B4tRH8Bw0u%2BHrufQ1SugDn0vkVEvB2OWZ%2BawRqNcpMCHOh3zOrm2Ccf2UrO91e6JYhL0BxFJhIZPKAcsKC7pU5U9xeeYxyS9aSAwHwHuZgWOm2kr8%2FLqkh0kFV6dfoc8LYbBx0cG4AKXx%2F%2BF%2BCR1JHqmLfbcoeAPO1ktUasZTtzfW4vj%2Bfaak%2FVJr8%2Bda1St5QTKMKPQ2ckGOqUB9P7k%2Fepb87kqboIe3kUVr4C0RaX1EJLfOhI0ALZIF2vlO%2BTUP%2FP78hI88g5Ix5%2FCeuWQCNuvonn7guBQ0ILgSPVXYRaFiKpoKY7Z0JzX34wC3yR%2BQS6G8PQ5m7mrnZ0STmUxA2DZjEhUzOOR7qCaK7m%2BbLgdpmQFRceLbI4g22TmF%2FD%2F824Q3eCQlglnXyEHOulQQYyEahySm7TPtu2YVbIqf%2Fjv&X-Amz-Signature=293413bb9fe4568dacf1d7498cdb2f33531cf7df01424d0ae12bdd2bfa9d3ac6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WGQJZFS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T065052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBTe35j87pbNxPYA5BoKLYLT4zVMxWcd86A%2BGFCxGUXkAiEA%2B3EtkrYh3fn%2BTAT1hS%2FQwgLWjD%2BJsBaPbMEC1rQgnFMqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHU5IHozG%2B8Kvk8T1yrcAzKXXUze9GMpGXFTMAqzT0pmJGqIYYMSKMSEK8rGyYN1yZD7X6qGLmYDO3bpHiqKTbKTgTy6jKvKukT8zP3G3axcZybhF7h0NOne7GudMLz5%2BGdXFhLfV47aQzuILry855H9s2aDg5DF2rzeqQwvLDoZRgdT9kWEP9aZH%2FxE3g7%2FxYdZp0zft%2BAf0XX%2FCe2bz8gTiRZlDJU7Cb96J3hoFbnWmYky34I9WADdXTON0KNcKHTaOEdS6%2F15WjANXxORaESwq4ZV2zmx25vbMxCcDWpJZ9z30yqT7E6ZkjoObEdH09tu%2BXLVgDgKHslYp28QFuH4ECaqIjdNsLy4uHcfftYnf%2F4K3EdNmBLhT3xcd83bt9A8K9jCG4e5vCGoJq2RrFH7Sp82f3iItc7ySCdrsm2kAOLvNSmUb9VdQb25GD7qwLt7E%2F8y7YdB%2B4tRH8Bw0u%2BHrufQ1SugDn0vkVEvB2OWZ%2BawRqNcpMCHOh3zOrm2Ccf2UrO91e6JYhL0BxFJhIZPKAcsKC7pU5U9xeeYxyS9aSAwHwHuZgWOm2kr8%2FLqkh0kFV6dfoc8LYbBx0cG4AKXx%2F%2BF%2BCR1JHqmLfbcoeAPO1ktUasZTtzfW4vj%2Bfaak%2FVJr8%2Bda1St5QTKMKPQ2ckGOqUB9P7k%2Fepb87kqboIe3kUVr4C0RaX1EJLfOhI0ALZIF2vlO%2BTUP%2FP78hI88g5Ix5%2FCeuWQCNuvonn7guBQ0ILgSPVXYRaFiKpoKY7Z0JzX34wC3yR%2BQS6G8PQ5m7mrnZ0STmUxA2DZjEhUzOOR7qCaK7m%2BbLgdpmQFRceLbI4g22TmF%2FD%2F824Q3eCQlglnXyEHOulQQYyEahySm7TPtu2YVbIqf%2Fjv&X-Amz-Signature=7f9a81499101a04c415e27a134ec00b5430b2a34d11f6e93bc1bf31914385cbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

