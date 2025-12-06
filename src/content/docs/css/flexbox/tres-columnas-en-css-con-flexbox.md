---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJV6QFI2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T154712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBjtgbnac2m8Kq%2BF4MinwFtpaw%2BFFtrS7z%2BgAZLCL5vfAiEAqF0P%2BvOGKS2kTr%2FFYPLETPEihKqh2aaYCjJuAjsU0eYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKxyYOaImui1EtLbVyrcA%2FHHBX5I99BoHC33SnECiAs3C2s%2BgL7%2BH2J7JZKUbb9eqSm6z6lxcXXAqDf8%2FfgnnHCBKhRj02g%2BpI%2BhExB53sq72KE2KSge%2FrRHJioM7RvZpnCJM%2Bk%2BMH4PCA3cD%2BljszBz17YwTid%2FGeXwkE9WwhssjUz8SeSyMURan8LRSu7A124MR3KLPpYT3U43vbz7OYU1nTYnP8Pd8M6lQoOhLecO1cnGw%2BqQem6Rq%2FmQGsyB%2BOEwTEBWa22sYNCTSxj6gL42QushufcXHw9TRr%2FAbFco9Q8CLunsXUiqZDisgpXg7FIjXYsNh0Iv68JqPvzFMztPwq4odM%2BCAsQsRnmIxv5dBeoKOGRAYRi1AoK4qv23%2FJYB35nm8josSedRiJ3b%2F0KNZFSbvvH8Bvs%2FGsC5cZVDZh3jFjSXdUxY73brcUaLOwX8y7Tt5mlUkNBTESSChyRLOPMHgGjZkqpJWyrBG2BFI6bW8ynsBjgEm%2Bwxtayds961P8ZyU6Ed2BCSCFkfIu9df2N%2BG8KoOho1ALAf0ALfwHIEbw0vf3Q%2F6NdPXDS4k54OkP%2BYtGbNXslb42QOCcvG4NNawhOoxoohVVvfkXd6jHboEu%2F%2BrM811jb%2BPwa1Lge19Ob3sIZfQqQxMJCn0MkGOqUB%2Fd5KuTCxOHTUmHSRqd2X%2FNVOf6YedJl8LyF6opDzL%2FG42Q8aUbhYAzYdPP7BV8rYX%2FElscd5pZBXyGprjf5fJk833xV3WhN6bTt7HLmPJ9hgNBC4ZeNG5D0SLTKqZsL7nWHFGLh%2FHJHWeIdVj31ApW9KVMq8AVAPhMbKX9hvO48I%2BP0LHkMFBxJ5h8eR3g1cxfR5pLsCMXzN4pG8cbh8UA%2Baq7k9&X-Amz-Signature=ff2aa89662f44e5b16e3df109e77fd437098a91d883094df69a3a51c5d1feaf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJV6QFI2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T154712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBjtgbnac2m8Kq%2BF4MinwFtpaw%2BFFtrS7z%2BgAZLCL5vfAiEAqF0P%2BvOGKS2kTr%2FFYPLETPEihKqh2aaYCjJuAjsU0eYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKxyYOaImui1EtLbVyrcA%2FHHBX5I99BoHC33SnECiAs3C2s%2BgL7%2BH2J7JZKUbb9eqSm6z6lxcXXAqDf8%2FfgnnHCBKhRj02g%2BpI%2BhExB53sq72KE2KSge%2FrRHJioM7RvZpnCJM%2Bk%2BMH4PCA3cD%2BljszBz17YwTid%2FGeXwkE9WwhssjUz8SeSyMURan8LRSu7A124MR3KLPpYT3U43vbz7OYU1nTYnP8Pd8M6lQoOhLecO1cnGw%2BqQem6Rq%2FmQGsyB%2BOEwTEBWa22sYNCTSxj6gL42QushufcXHw9TRr%2FAbFco9Q8CLunsXUiqZDisgpXg7FIjXYsNh0Iv68JqPvzFMztPwq4odM%2BCAsQsRnmIxv5dBeoKOGRAYRi1AoK4qv23%2FJYB35nm8josSedRiJ3b%2F0KNZFSbvvH8Bvs%2FGsC5cZVDZh3jFjSXdUxY73brcUaLOwX8y7Tt5mlUkNBTESSChyRLOPMHgGjZkqpJWyrBG2BFI6bW8ynsBjgEm%2Bwxtayds961P8ZyU6Ed2BCSCFkfIu9df2N%2BG8KoOho1ALAf0ALfwHIEbw0vf3Q%2F6NdPXDS4k54OkP%2BYtGbNXslb42QOCcvG4NNawhOoxoohVVvfkXd6jHboEu%2F%2BrM811jb%2BPwa1Lge19Ob3sIZfQqQxMJCn0MkGOqUB%2Fd5KuTCxOHTUmHSRqd2X%2FNVOf6YedJl8LyF6opDzL%2FG42Q8aUbhYAzYdPP7BV8rYX%2FElscd5pZBXyGprjf5fJk833xV3WhN6bTt7HLmPJ9hgNBC4ZeNG5D0SLTKqZsL7nWHFGLh%2FHJHWeIdVj31ApW9KVMq8AVAPhMbKX9hvO48I%2BP0LHkMFBxJ5h8eR3g1cxfR5pLsCMXzN4pG8cbh8UA%2Baq7k9&X-Amz-Signature=8ecf33394621c5179d6e9b211827db90e886104ff3a8cfad67aa94c27c2b4f29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

