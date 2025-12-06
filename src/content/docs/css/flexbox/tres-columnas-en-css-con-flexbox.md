---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A7QTOCQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T205325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGI%2BOzlTJzFRXreEM7sR57r9ZkejKmh1oNGuOrkGwob1AiAcMpsbpDP%2FsxlwDV1orXp1uxJXoEQCJsj1MY2IlaC0USr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM26JpwJ%2Fkh4ToScFFKtwDefNJJURA8WwKrvw0H9mr2qc2lWYPamYqIqozj0MgxpIuJRKcYHNilHr8GnNRkyqphw4%2FzGCrUIWkCDASlroOBzOKztNTHVzDVGyECzbNC2WfJ4tQ2jEF%2BLAIXDyYS0NBq7YmWvIxXW3GJE6D%2FByL0G7w3icaXfBR1Keac%2B5EzEU0WiGKVKqe%2FW%2BqLNgs1E8Fq3lyk6xHo%2BPsgi8QGg6YomOB87SYRy0vzB7%2BRzeeRKLY95L1Vv6Nl3OlPeyPzc2O89%2BJR0VnaxDTuATG0ESAr4BpZmv1jQrOhahr01YMviE1RZGA%2ByXrJycBAlj1qbhBCozbcjfr3CYn3dGAvrx3S2wiXsLpmvou4ntjAUGxt4d2dMGK%2BjvOSgd9BETw0IY%2ByAB5It6ay2E9hi3JGfveXErs%2FlRhv%2FOAwuW4ct1Cu%2F02gBwj2uEUZraRofkpmZvCO82%2BaDDmzpAPOOgfsmyJyajizMROHWLaEaLTMIepTrjjcTD5vPlsfG4ontchAQLx5TbWE9d%2Bb%2BsQtKvW2dq7NJnmFen9CaUGl%2BR2yCuEv7DzjsENKkJy9nKVWpIWkLtLSHYDUyzcgMpZWFhrPVkTfEUjnYYKH1G0lSM41HJaL1m9A%2BxtRLE2LrkmrO8wlcfRyQY6pgE2dR2kf1OU%2B1XEJf%2BY9KiV76FbdoyqFYoHFDIL6u%2FGufYw6EKEYLRNi%2FUpEcZEWrMB8NQqJ4Sa3Fc%2BViV%2FzqoBkN%2Boyb97sooDiOnyVNa1C56X3QjmwVuq36%2B5gz3OUszp02JzF0QuXP%2F9gwSQmQvTSsiAcwrZMc6f7t8r3%2BObAjpuOpHduB84cqiw7RyT8ztqmAZYcaa1tylHPNUkbI1Dv%2BMk1h5t&X-Amz-Signature=d73c22a3a06eb8f9e8671e2448b494d30096c3cc11c529f68ac8a21452fa48a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A7QTOCQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T205325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGI%2BOzlTJzFRXreEM7sR57r9ZkejKmh1oNGuOrkGwob1AiAcMpsbpDP%2FsxlwDV1orXp1uxJXoEQCJsj1MY2IlaC0USr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM26JpwJ%2Fkh4ToScFFKtwDefNJJURA8WwKrvw0H9mr2qc2lWYPamYqIqozj0MgxpIuJRKcYHNilHr8GnNRkyqphw4%2FzGCrUIWkCDASlroOBzOKztNTHVzDVGyECzbNC2WfJ4tQ2jEF%2BLAIXDyYS0NBq7YmWvIxXW3GJE6D%2FByL0G7w3icaXfBR1Keac%2B5EzEU0WiGKVKqe%2FW%2BqLNgs1E8Fq3lyk6xHo%2BPsgi8QGg6YomOB87SYRy0vzB7%2BRzeeRKLY95L1Vv6Nl3OlPeyPzc2O89%2BJR0VnaxDTuATG0ESAr4BpZmv1jQrOhahr01YMviE1RZGA%2ByXrJycBAlj1qbhBCozbcjfr3CYn3dGAvrx3S2wiXsLpmvou4ntjAUGxt4d2dMGK%2BjvOSgd9BETw0IY%2ByAB5It6ay2E9hi3JGfveXErs%2FlRhv%2FOAwuW4ct1Cu%2F02gBwj2uEUZraRofkpmZvCO82%2BaDDmzpAPOOgfsmyJyajizMROHWLaEaLTMIepTrjjcTD5vPlsfG4ontchAQLx5TbWE9d%2Bb%2BsQtKvW2dq7NJnmFen9CaUGl%2BR2yCuEv7DzjsENKkJy9nKVWpIWkLtLSHYDUyzcgMpZWFhrPVkTfEUjnYYKH1G0lSM41HJaL1m9A%2BxtRLE2LrkmrO8wlcfRyQY6pgE2dR2kf1OU%2B1XEJf%2BY9KiV76FbdoyqFYoHFDIL6u%2FGufYw6EKEYLRNi%2FUpEcZEWrMB8NQqJ4Sa3Fc%2BViV%2FzqoBkN%2Boyb97sooDiOnyVNa1C56X3QjmwVuq36%2B5gz3OUszp02JzF0QuXP%2F9gwSQmQvTSsiAcwrZMc6f7t8r3%2BObAjpuOpHduB84cqiw7RyT8ztqmAZYcaa1tylHPNUkbI1Dv%2BMk1h5t&X-Amz-Signature=52f55894dd49463abf416a8d01e39df124eb4d4fa62919e4f85e47045de0684b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

