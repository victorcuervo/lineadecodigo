---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6VEDAZJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T204358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkr9FmhVGV4vP9VyCsaLm1ViyWEnoFnpFLRqDqGQ6AwAiEAiVhP8Qu2GXqDkpCYu%2BiL9uyVjDf4q3T%2B0m%2B9KBGFYDMq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDGnSp4%2BZSCPripxefyrcA64LAtypY1bwFPW3kiGa6YaU5o2p3Cv5b0g%2FmmI5d7PCKZ1uI9Zw8KvKRAKSYLQ7zifjzS4RaAAt2GBuqY1RZxgD%2F%2BdInuUFRBnPGbFhApphcJKUquSLIcp3qwUOzl3YsEa5gVOVWG8g71fFZyHDdJeJUvVIgK5KPb0WLlwi%2FQ0h8TwpFbPg%2FDZhWeXziYc3C5ul7Rf6lYDqhHluVQaziO%2Bo7Necm731htG%2ByQ8xSsHQN%2FMGpJqlpnIYDaAJALET956sddS6BE9cmMVi1tpEPMeihht%2F6G8yP4L515yCFdH7VzJ209USV1pA92f1PJVETNqHsjR2wFMD0%2FODIekxEi0cuS7uaVnT3nVLcCWCyuVbuiyblQSdQ%2Fp1ybuq%2F1mjA2ddbbMlO41uE2kdbrOe5xG%2FaakdqManeMpwK3vVuLViCAu3RZRYb1aqrgjvOgrBrv%2BPgEb9SZgUpjvqn9t6bRFey88hCqAYPi9yfUct8Z042oDz6JPX7j8QhRWGzzVcBIy5PaZy2t3IHKwqqecIO67gXHcheURmd87z64iB9WLiIDMz9%2FOFE2KbIDCZHVkWPYVaxAUrNJPtmhMROL7sIr0qKRkqofPsns2t1nFqIQb7mIP%2BEdLVHaKXAFy4MLHuzMkGOqUBkw%2FvQZxFx4pbEfA%2Fa3UfC4TwNMSjz0F7lmHBGOe1jng4CDKpzp4Y2lwCoFRJuyEYsVv%2BMpuag34QjFAWtR%2Fa9c9OPym%2FoL%2BZ8pbmN7n3k3kxhGFcxrWF2VDTNzkWmmvvDyQy663lLBkfjb7CCL4J%2Bd%2BnrMI3jWJIRb2Cte%2BhyNXKVKX2NqmXRUWxqz%2FGctJUlerUNkH3DfNGAqo3v7BKuPGeuTwN&X-Amz-Signature=325829f6f7ddbdc5a8abb5462e423902ff505827496de365c8128a91cfdee48a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6VEDAZJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T204358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkr9FmhVGV4vP9VyCsaLm1ViyWEnoFnpFLRqDqGQ6AwAiEAiVhP8Qu2GXqDkpCYu%2BiL9uyVjDf4q3T%2B0m%2B9KBGFYDMq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDGnSp4%2BZSCPripxefyrcA64LAtypY1bwFPW3kiGa6YaU5o2p3Cv5b0g%2FmmI5d7PCKZ1uI9Zw8KvKRAKSYLQ7zifjzS4RaAAt2GBuqY1RZxgD%2F%2BdInuUFRBnPGbFhApphcJKUquSLIcp3qwUOzl3YsEa5gVOVWG8g71fFZyHDdJeJUvVIgK5KPb0WLlwi%2FQ0h8TwpFbPg%2FDZhWeXziYc3C5ul7Rf6lYDqhHluVQaziO%2Bo7Necm731htG%2ByQ8xSsHQN%2FMGpJqlpnIYDaAJALET956sddS6BE9cmMVi1tpEPMeihht%2F6G8yP4L515yCFdH7VzJ209USV1pA92f1PJVETNqHsjR2wFMD0%2FODIekxEi0cuS7uaVnT3nVLcCWCyuVbuiyblQSdQ%2Fp1ybuq%2F1mjA2ddbbMlO41uE2kdbrOe5xG%2FaakdqManeMpwK3vVuLViCAu3RZRYb1aqrgjvOgrBrv%2BPgEb9SZgUpjvqn9t6bRFey88hCqAYPi9yfUct8Z042oDz6JPX7j8QhRWGzzVcBIy5PaZy2t3IHKwqqecIO67gXHcheURmd87z64iB9WLiIDMz9%2FOFE2KbIDCZHVkWPYVaxAUrNJPtmhMROL7sIr0qKRkqofPsns2t1nFqIQb7mIP%2BEdLVHaKXAFy4MLHuzMkGOqUBkw%2FvQZxFx4pbEfA%2Fa3UfC4TwNMSjz0F7lmHBGOe1jng4CDKpzp4Y2lwCoFRJuyEYsVv%2BMpuag34QjFAWtR%2Fa9c9OPym%2FoL%2BZ8pbmN7n3k3kxhGFcxrWF2VDTNzkWmmvvDyQy663lLBkfjb7CCL4J%2Bd%2BnrMI3jWJIRb2Cte%2BhyNXKVKX2NqmXRUWxqz%2FGctJUlerUNkH3DfNGAqo3v7BKuPGeuTwN&X-Amz-Signature=5f45325f3edffd74fe09405a3c02802d7675255b9edb589f5e455c81a50500e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

