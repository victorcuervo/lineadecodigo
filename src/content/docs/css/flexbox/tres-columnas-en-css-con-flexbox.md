---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MUWKCS2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T015158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAEaODFF21AXVpF%2FqqJURE%2Bn0eFEBg3rB0q6WyFMI1RcAiEArRhytwhKy7SbKxCKviNaGrp%2Ffvmcyaz%2BRFCpWGEA%2B%2BAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkUEwmQTcd1VnVq%2FCrcAyqLhXiPAr6O%2BsZFWHnNvapqwbIlJ%2B9rdG4pTX6Zg22rzM9s7n7koOwuBXyFRMuBhgs4srrxzNpksm0G7cgTM9GaJd%2BGh8fZ8qR8lAAqWg5jZJG2uptm1qiXM7teYuBQ9HoyOFnP9QRh6jGsU2BPplYDP6qRChuceRzZtn%2BT%2BnFl22tIacgLR%2FnHkkqtdSjVUCPM4tbUb08qE9h3zBnLuQrSmt2u3owyEegfLL24bSAmmCIcKHZFh3US%2FcvQMflM4mPQ%2FakuPgAN6zox7%2FqXWO6vnq9HPIq%2FQz5BGYLV3qFQ6BCvbvBf%2F9igZMGD5jKGUkU7%2F%2FyOmst%2FHU31%2B4oRacNEu9G%2FAF6k70rA2UPm4lZJiE0FZtQ%2FubaizYVN5WK7AnSkKvOvE7pOXGYor%2FaQMysx5PstGtLQo5Vz%2F8GNLpYVb0hP1PlpKeCHcVrVggumwmUbBPoD%2BYKspRQpOMpUVQhvD1anhsSzo5IZW6MGRafFej202efXBdC%2FPO7EY%2FJzpu%2FBKRdJczfLk5rq9TTk0NTg5daEqbr3SEOqbOhzr1dYakST4nL4ITf24OvqevmOe9FStNKrlKndac6j%2FThT%2F9NC6v3Ux%2FfJmmY1LZHWfs8Tszqr0%2BXuhNbDw4dbMMvQ2MkGOqUBDLQJUC7gZuC5N7u9wr6BCK5M3ceGSWC5LFqI3ASzCpcPv4Yufs0crQUYIE2iAJSY2fyI9j7y9%2ByNO8RbqaFRERJpLJwR9hBKxmAQqG5QcDA6ELtCCxcTmz%2Fs%2BsvCtBbLsz%2FyAMPUYt6sBz1khIew3FOW%2BOLy%2BlOJtob35Bw1h0jZlNrrQ2nI5qnwG%2FPtKifWU%2F6eOtRCs312HnephEduvtHWSfQq&X-Amz-Signature=96a5636f1b76d33b0e1e44dfe2ab88c97af1874dec6a0132dc17ceff5b8e6558&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MUWKCS2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T015158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAEaODFF21AXVpF%2FqqJURE%2Bn0eFEBg3rB0q6WyFMI1RcAiEArRhytwhKy7SbKxCKviNaGrp%2Ffvmcyaz%2BRFCpWGEA%2B%2BAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkUEwmQTcd1VnVq%2FCrcAyqLhXiPAr6O%2BsZFWHnNvapqwbIlJ%2B9rdG4pTX6Zg22rzM9s7n7koOwuBXyFRMuBhgs4srrxzNpksm0G7cgTM9GaJd%2BGh8fZ8qR8lAAqWg5jZJG2uptm1qiXM7teYuBQ9HoyOFnP9QRh6jGsU2BPplYDP6qRChuceRzZtn%2BT%2BnFl22tIacgLR%2FnHkkqtdSjVUCPM4tbUb08qE9h3zBnLuQrSmt2u3owyEegfLL24bSAmmCIcKHZFh3US%2FcvQMflM4mPQ%2FakuPgAN6zox7%2FqXWO6vnq9HPIq%2FQz5BGYLV3qFQ6BCvbvBf%2F9igZMGD5jKGUkU7%2F%2FyOmst%2FHU31%2B4oRacNEu9G%2FAF6k70rA2UPm4lZJiE0FZtQ%2FubaizYVN5WK7AnSkKvOvE7pOXGYor%2FaQMysx5PstGtLQo5Vz%2F8GNLpYVb0hP1PlpKeCHcVrVggumwmUbBPoD%2BYKspRQpOMpUVQhvD1anhsSzo5IZW6MGRafFej202efXBdC%2FPO7EY%2FJzpu%2FBKRdJczfLk5rq9TTk0NTg5daEqbr3SEOqbOhzr1dYakST4nL4ITf24OvqevmOe9FStNKrlKndac6j%2FThT%2F9NC6v3Ux%2FfJmmY1LZHWfs8Tszqr0%2BXuhNbDw4dbMMvQ2MkGOqUBDLQJUC7gZuC5N7u9wr6BCK5M3ceGSWC5LFqI3ASzCpcPv4Yufs0crQUYIE2iAJSY2fyI9j7y9%2ByNO8RbqaFRERJpLJwR9hBKxmAQqG5QcDA6ELtCCxcTmz%2Fs%2BsvCtBbLsz%2FyAMPUYt6sBz1khIew3FOW%2BOLy%2BlOJtob35Bw1h0jZlNrrQ2nI5qnwG%2FPtKifWU%2F6eOtRCs312HnephEduvtHWSfQq&X-Amz-Signature=8b7bd90096fcf72a75337d154db1c8f1a83fb4e79cc355df782ae5be8c837988&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

