---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOBR6YXM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T133713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDHMFEnmYJIH0ovLCI1WWQeVSD38WezeNjOQKQYCmXPAIgJtCz6TEdnLgZsnrjMGkysjVlhnBbXam5ckYZ4ETIWcMqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNNsuJst4TxvfpIl4ircA1FxELZUi8MX4%2FYRZUtKMVeqr0B2W%2BHOd49a30DIyjr3YgXCZcVyupeMkUIWneeky3vvCQ8lqjqYQ182RF6lfG9bBZZh%2FZO%2FtRbvZDDPgGKO2K6Um%2FtPihSes2jB5A35p5GjgN1zuGdn4yfA6IDXXy%2FvKK5cbFZEW9ipDzuCTdVE91UHAmTqKcceONPYxpdRPHphZbhRaxvA74FJhHAIMeluXL9hPVH8dJyjhAqev%2BfZPThEm43oN%2Bqq57ceFoJL%2Fd8y5n8gSkfJKgUU1ZyKh%2F2N9HCvE7opIae7e%2FGQ3lphS6I3KMfvwuRNgz5%2BNYjC1IXqMQfKR3%2FjTVKVJwI4jz3rprNRT1h1L4JHbwrB5KKWszArGgvCaW1TO03gykj%2F%2Be8%2FoWL2nGU%2FEXscTgeBchR87xapdhQ2m157sovBwUquKxr0e1%2BNRTpNSczECLM97aJNYyhi0IaaX6rdmBMS4TFCwH0GStWWboI5%2FSBTYvvzT0U3Y6jnz7JqHIEc70J%2Bz2NC8jFihaI2xWaMQBPnJO3nmY8tLWwuG5QFVJsviJIE4HqqyfXHObS9PexvxGBu%2FLbumTn3t%2B2fNoytyWhvAlAzWq4GWfmeQMihBqBnSFvNUu91SmAo6cvKKrSVMPqP28kGOqUBrsK6JkgcejJ%2F9at1rJf%2Bv08vyO4BJcBmnJ3P03izos1FYnlU72Q11I6h5S0XBi5WB1XTiH%2BALcij53zLKsXaWgTpwDeDMKziLPSz08O6FmI%2FdOFcz7qyid0UJDeuaVgNDA9OYQaBehSc623o4iwtvuo4caDXZXt41vZhazYGG3DJHZgwhvZEWjvJDe2CC3fPAnBsNH%2BQJEqyqmB8MaiJFiP5IY0l&X-Amz-Signature=5daa110b36f45d1973cf1f2b1981da603cf6a65f84b5305536dc5663acfa207b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOBR6YXM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T133713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDHMFEnmYJIH0ovLCI1WWQeVSD38WezeNjOQKQYCmXPAIgJtCz6TEdnLgZsnrjMGkysjVlhnBbXam5ckYZ4ETIWcMqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNNsuJst4TxvfpIl4ircA1FxELZUi8MX4%2FYRZUtKMVeqr0B2W%2BHOd49a30DIyjr3YgXCZcVyupeMkUIWneeky3vvCQ8lqjqYQ182RF6lfG9bBZZh%2FZO%2FtRbvZDDPgGKO2K6Um%2FtPihSes2jB5A35p5GjgN1zuGdn4yfA6IDXXy%2FvKK5cbFZEW9ipDzuCTdVE91UHAmTqKcceONPYxpdRPHphZbhRaxvA74FJhHAIMeluXL9hPVH8dJyjhAqev%2BfZPThEm43oN%2Bqq57ceFoJL%2Fd8y5n8gSkfJKgUU1ZyKh%2F2N9HCvE7opIae7e%2FGQ3lphS6I3KMfvwuRNgz5%2BNYjC1IXqMQfKR3%2FjTVKVJwI4jz3rprNRT1h1L4JHbwrB5KKWszArGgvCaW1TO03gykj%2F%2Be8%2FoWL2nGU%2FEXscTgeBchR87xapdhQ2m157sovBwUquKxr0e1%2BNRTpNSczECLM97aJNYyhi0IaaX6rdmBMS4TFCwH0GStWWboI5%2FSBTYvvzT0U3Y6jnz7JqHIEc70J%2Bz2NC8jFihaI2xWaMQBPnJO3nmY8tLWwuG5QFVJsviJIE4HqqyfXHObS9PexvxGBu%2FLbumTn3t%2B2fNoytyWhvAlAzWq4GWfmeQMihBqBnSFvNUu91SmAo6cvKKrSVMPqP28kGOqUBrsK6JkgcejJ%2F9at1rJf%2Bv08vyO4BJcBmnJ3P03izos1FYnlU72Q11I6h5S0XBi5WB1XTiH%2BALcij53zLKsXaWgTpwDeDMKziLPSz08O6FmI%2FdOFcz7qyid0UJDeuaVgNDA9OYQaBehSc623o4iwtvuo4caDXZXt41vZhazYGG3DJHZgwhvZEWjvJDe2CC3fPAnBsNH%2BQJEqyqmB8MaiJFiP5IY0l&X-Amz-Signature=231748f2dcda9e3e5b3d2ba2d6a07271e5a36a614c8739f13f1d3c7b4f240507&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

