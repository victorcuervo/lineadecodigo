---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZHKU2SJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T051737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FH8HcX%2BWZANTkrjXJnhJRn0VNbG%2FUjd7EI54gv1zT7wIhAI6KkTdc1lqc%2BNmP9yBx1Sprs%2FaPb3bFaAXYvNCzlPyqKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwlxl4FY2dWK5IG%2BCsq3AMoolGHhp9ocuLfWZm%2BtB2XkbuhaCZ6GYCgAw9bu4yBtyP2d4cJiD1FP42O6hdeAqAaarM%2BUxy6dZ3pQ5B2%2BF2A2cRSEzWlkZjBERH%2FkQorP7N%2BjGwB%2B%2FJ8ukE0OQSB0HPOxfFVbO6%2Bodm8%2B%2FiOMonjPwLpPlxQGWY440LM6YE9MyDGJ6OUP9XKKrYmniXLEMUn4jVvtsFCI4IvkI4MEwHvuS4Qx0LNxk8dBgMdVgcgrt7dMKE1q3nwPKazzxGVZ4vu7m6G0Nc3vrTEBFZJIWyjyq44uGYVrYsAM8XdnmuqMQlZYH1n11Dh4ddVqClf9gm78kRitD0uKuoOnpBa6vGag5BD0%2BGzwCXZ63gZpKvQxXrApQhQNWYtCqJ%2BK7bPKq3Eq%2BfyEV8FImCndfbEEkrMq245oYMumCIyaoYjIcLckoZ6v5NarC8epD%2FxQSXnjLPBnWLnPmHSK%2FKdTfajslutRETUzie7OX0Ek81AkId2BO%2FzqfFgKBDnbAz2kqWAi4RyRSX7SKKwnugg7UZXMPYWLhlc2klxmMqOCasrLMYw4jBMS5Zn%2BQ6XxPt1B%2BatWX83l2OPUHDwJwxwx%2Fj%2Bc6n5n4q03AlQhsfdRBEZk%2FYdJArTW8Jx4yOa%2Fq4hLjDVtNnJBjqkASaDTVYzIcCLzVpSnwOvJaJfyhvqJBqUq0K0B9IVgzt3ewGFuKRY9hspjPQVFXCTkcKgpzfVvZD7X%2BKAthYMBP1ir0L7lGkY5ILWAnEqIXCymgVBFfKn29495niNcG7iqL%2FVh4xIX5QcKJ2IKkSgEUUFGiJwY88PbeLIvp4GoaZGNpGN1pnWWatmR9w0YkvSYilWw2KObGnOwM4zQzhOGL0WrV3y&X-Amz-Signature=f057e869859ac9d0dc38d00fadf28407a97d0a71f652e5ef0b87ccbe75a91706&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZHKU2SJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T051737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FH8HcX%2BWZANTkrjXJnhJRn0VNbG%2FUjd7EI54gv1zT7wIhAI6KkTdc1lqc%2BNmP9yBx1Sprs%2FaPb3bFaAXYvNCzlPyqKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwlxl4FY2dWK5IG%2BCsq3AMoolGHhp9ocuLfWZm%2BtB2XkbuhaCZ6GYCgAw9bu4yBtyP2d4cJiD1FP42O6hdeAqAaarM%2BUxy6dZ3pQ5B2%2BF2A2cRSEzWlkZjBERH%2FkQorP7N%2BjGwB%2B%2FJ8ukE0OQSB0HPOxfFVbO6%2Bodm8%2B%2FiOMonjPwLpPlxQGWY440LM6YE9MyDGJ6OUP9XKKrYmniXLEMUn4jVvtsFCI4IvkI4MEwHvuS4Qx0LNxk8dBgMdVgcgrt7dMKE1q3nwPKazzxGVZ4vu7m6G0Nc3vrTEBFZJIWyjyq44uGYVrYsAM8XdnmuqMQlZYH1n11Dh4ddVqClf9gm78kRitD0uKuoOnpBa6vGag5BD0%2BGzwCXZ63gZpKvQxXrApQhQNWYtCqJ%2BK7bPKq3Eq%2BfyEV8FImCndfbEEkrMq245oYMumCIyaoYjIcLckoZ6v5NarC8epD%2FxQSXnjLPBnWLnPmHSK%2FKdTfajslutRETUzie7OX0Ek81AkId2BO%2FzqfFgKBDnbAz2kqWAi4RyRSX7SKKwnugg7UZXMPYWLhlc2klxmMqOCasrLMYw4jBMS5Zn%2BQ6XxPt1B%2BatWX83l2OPUHDwJwxwx%2Fj%2Bc6n5n4q03AlQhsfdRBEZk%2FYdJArTW8Jx4yOa%2Fq4hLjDVtNnJBjqkASaDTVYzIcCLzVpSnwOvJaJfyhvqJBqUq0K0B9IVgzt3ewGFuKRY9hspjPQVFXCTkcKgpzfVvZD7X%2BKAthYMBP1ir0L7lGkY5ILWAnEqIXCymgVBFfKn29495niNcG7iqL%2FVh4xIX5QcKJ2IKkSgEUUFGiJwY88PbeLIvp4GoaZGNpGN1pnWWatmR9w0YkvSYilWw2KObGnOwM4zQzhOGL0WrV3y&X-Amz-Signature=718c39a13000192fd2fa72bfd4831d20117141ea1ae9110df70bf6da590000e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

