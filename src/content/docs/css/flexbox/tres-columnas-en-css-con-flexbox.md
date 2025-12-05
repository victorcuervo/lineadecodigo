---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX5OVL2F%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T061120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECMwPTgLUFB8pdvjmfIll3MHNOYmltawWNHDw9nVi7OAiAMkoxIgGL1sxOPJLdciw7nK%2Bk2x0BEGjTWfFTcRzbLNyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMxOq3Kn5DAvSnG9W7KtwDleXhJwQV8lYzXF1plk8YLIwnJDiWUMGtZ%2BEm2Qsw0dL7oL33BQU40PqdayiEQFepHIxNSkYG4nRKRmVCT%2Fy0FgBFi67ULTBnRvKiRujoiYnRvRGg6AMdVvVo%2F20n6u8SKjYaBqmSkBYGoL2XmsnqkuqtW3LKR8VLnvSMHv3QpiJ3%2FXB4CKMHuPfUJ7uADmBPZlDltBX3YI0dTl0iZc7O5siSWPYxKyP3sQh43BlnB6fss6vRQCH26E0TqKuG9YWlOMhy6gSPjkwIaTfrWYrKcbHMksN2hy1IVlWl%2BF8G%2FFpxCzuGZAyaaJoYhxa80T%2FasdpXdH25I00Gssd5uJvr0LJJ1cuI3ymQE7UgiwAjldo3vpZdkyQpIyk6KFTnxUfWeJBzpynzrrpMBKsp9M6CyorbH%2FwNNmCJKK9WPckWafZM%2F3FOAtJVfynzeZXI3PldV%2F57nam3HM9HEhNgjld5RIAdX6IMvrI92d1FzBkMLraqi9LkzvpwSnovvcT%2BwgtkVjDQYKqJERlsRcnbvLfJ%2BFDy2MJsPP64YpJSQp2cQgjy7viaPWZI8oXxB2z3sfjLPXiH8TL9K32PfuhF2dZEa%2FkemIqhDL7PafEVEzD%2FwF6xHbdOrpJlarCzgQcw3K3JyQY6pgEcyulgOnQJ3xRRjqo8LjYOvoEUridvUCPb1sh8YhZNeWY8mlfsQz0bwlellkQ3z2q2YCLDAo%2BGuaevqRW69Vfo5fSrDsTiaPuZ%2F4Wevben8WoJxAwnpjeswyIZ6iztw5DkjL4Bh3yGTZNDy4zqtF3l6GIogTRmGwdhIEh1T8iYVkLeUtSjP7vmhnUHCR0ahFxcnS95BriMdMcg1DJ8uC1vJ5M8a4os&X-Amz-Signature=be482149202fec318ad90a465eea5414364aca4c12cefa4209f69e97ee413101&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX5OVL2F%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T061120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECMwPTgLUFB8pdvjmfIll3MHNOYmltawWNHDw9nVi7OAiAMkoxIgGL1sxOPJLdciw7nK%2Bk2x0BEGjTWfFTcRzbLNyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMxOq3Kn5DAvSnG9W7KtwDleXhJwQV8lYzXF1plk8YLIwnJDiWUMGtZ%2BEm2Qsw0dL7oL33BQU40PqdayiEQFepHIxNSkYG4nRKRmVCT%2Fy0FgBFi67ULTBnRvKiRujoiYnRvRGg6AMdVvVo%2F20n6u8SKjYaBqmSkBYGoL2XmsnqkuqtW3LKR8VLnvSMHv3QpiJ3%2FXB4CKMHuPfUJ7uADmBPZlDltBX3YI0dTl0iZc7O5siSWPYxKyP3sQh43BlnB6fss6vRQCH26E0TqKuG9YWlOMhy6gSPjkwIaTfrWYrKcbHMksN2hy1IVlWl%2BF8G%2FFpxCzuGZAyaaJoYhxa80T%2FasdpXdH25I00Gssd5uJvr0LJJ1cuI3ymQE7UgiwAjldo3vpZdkyQpIyk6KFTnxUfWeJBzpynzrrpMBKsp9M6CyorbH%2FwNNmCJKK9WPckWafZM%2F3FOAtJVfynzeZXI3PldV%2F57nam3HM9HEhNgjld5RIAdX6IMvrI92d1FzBkMLraqi9LkzvpwSnovvcT%2BwgtkVjDQYKqJERlsRcnbvLfJ%2BFDy2MJsPP64YpJSQp2cQgjy7viaPWZI8oXxB2z3sfjLPXiH8TL9K32PfuhF2dZEa%2FkemIqhDL7PafEVEzD%2FwF6xHbdOrpJlarCzgQcw3K3JyQY6pgEcyulgOnQJ3xRRjqo8LjYOvoEUridvUCPb1sh8YhZNeWY8mlfsQz0bwlellkQ3z2q2YCLDAo%2BGuaevqRW69Vfo5fSrDsTiaPuZ%2F4Wevben8WoJxAwnpjeswyIZ6iztw5DkjL4Bh3yGTZNDy4zqtF3l6GIogTRmGwdhIEh1T8iYVkLeUtSjP7vmhnUHCR0ahFxcnS95BriMdMcg1DJ8uC1vJ5M8a4os&X-Amz-Signature=2d724f3c504898c0987a662ee29cf9bd0097b25263acd737f6e9716b91ecc7a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

