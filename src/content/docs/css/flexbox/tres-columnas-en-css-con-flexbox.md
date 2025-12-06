---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUGF4B6J%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T045341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICL1j6%2FTa41XpIM1JlWiSeLj57Tue2N1wvhfPkcxB0EfAiEAoaSWvKG7IP4klqsWRy8272XCIkz0NFubyQY3w%2Brbs60q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDOOeFSa6MoG%2BA5qm7SrcA4K6KTNh9x1PL0oaDgRMk4TXvWgwHjvhLOaFnxFyzEVzNqSZ%2BBDJdiQ0icfDY6yaraBvdB5EasOPr4R3scRbllgUhud9c94YckJ9w6FRtqh0cKRqTDaUe%2BOnR9E046LswrAKd4iOZ7vQ9YZnOuWv7YKnyT4UJp9bKeQYQN832xKK90VnvGZvT7bhsXoiYUKc51urcOb0RFqoZWnNeySPmeRP2SOiErpcCH8uvb%2FH4LDuoOlx%2B3FSp0r%2B0fbqOld9G3GRCk8jYP1ck%2BNLlNwtfhxyfIPo2BGAQL6HEcgP18Z8J2O9gCHRpzvOvC9Y0JaKZUmnQhpM9SNm8DIxPzeyN6YNYNiDe9scHM26ZE0Q7YiGhtfEfFhh1MxvgvQ5IUu9eW%2B2zORw27%2Bkpzc3KwPBcurSPH1LOTW4MWjhzPGaJPKawFv6P1AT9HDIjTSle8eGaTnkDU6GbVeyr5oLWqv30bs8h%2B%2FbCrh%2BChY6E88E39A5SoB100HZqcVzKTLJ3Mqa6VTa4L6R23Y7M98CqnFUHh52HS56yoYmTeCmzqL8XMNnvT%2BjTvVSI0KYSVpfHiU3%2B9lcLhWBHlip0L73oE5BxhawuR9Ua2SOu53mFXed24MnBhIycdT9QSHNjrzFMKfezskGOqUB%2Buqp0RMO2hS6xXz8MgUyxUeTqLp2dL%2BX3aByfiFE3tPzM%2BUnyiU30%2BRQYKmjJrPz4ZKtRapA3ZPGQ8WME91dB5%2FdyKpkTBauRa5JPfZomM55xIfpNJCTRWbRcsULImIOyBPdPRgrjgf8iPpuI3a%2B%2BLhQwCI3YxUuc4mCjE4gd8eP5dRlPYpvAxhaHbLmVFNeaZiinZ3RX%2BcntkBEI%2BDDvWVdvuFc&X-Amz-Signature=67840cb164f4644b84f72674a48e5ce3f0ee7af814a6b0bd8b8dfa4c6c34099b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUGF4B6J%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T045341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICL1j6%2FTa41XpIM1JlWiSeLj57Tue2N1wvhfPkcxB0EfAiEAoaSWvKG7IP4klqsWRy8272XCIkz0NFubyQY3w%2Brbs60q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDOOeFSa6MoG%2BA5qm7SrcA4K6KTNh9x1PL0oaDgRMk4TXvWgwHjvhLOaFnxFyzEVzNqSZ%2BBDJdiQ0icfDY6yaraBvdB5EasOPr4R3scRbllgUhud9c94YckJ9w6FRtqh0cKRqTDaUe%2BOnR9E046LswrAKd4iOZ7vQ9YZnOuWv7YKnyT4UJp9bKeQYQN832xKK90VnvGZvT7bhsXoiYUKc51urcOb0RFqoZWnNeySPmeRP2SOiErpcCH8uvb%2FH4LDuoOlx%2B3FSp0r%2B0fbqOld9G3GRCk8jYP1ck%2BNLlNwtfhxyfIPo2BGAQL6HEcgP18Z8J2O9gCHRpzvOvC9Y0JaKZUmnQhpM9SNm8DIxPzeyN6YNYNiDe9scHM26ZE0Q7YiGhtfEfFhh1MxvgvQ5IUu9eW%2B2zORw27%2Bkpzc3KwPBcurSPH1LOTW4MWjhzPGaJPKawFv6P1AT9HDIjTSle8eGaTnkDU6GbVeyr5oLWqv30bs8h%2B%2FbCrh%2BChY6E88E39A5SoB100HZqcVzKTLJ3Mqa6VTa4L6R23Y7M98CqnFUHh52HS56yoYmTeCmzqL8XMNnvT%2BjTvVSI0KYSVpfHiU3%2B9lcLhWBHlip0L73oE5BxhawuR9Ua2SOu53mFXed24MnBhIycdT9QSHNjrzFMKfezskGOqUB%2Buqp0RMO2hS6xXz8MgUyxUeTqLp2dL%2BX3aByfiFE3tPzM%2BUnyiU30%2BRQYKmjJrPz4ZKtRapA3ZPGQ8WME91dB5%2FdyKpkTBauRa5JPfZomM55xIfpNJCTRWbRcsULImIOyBPdPRgrjgf8iPpuI3a%2B%2BLhQwCI3YxUuc4mCjE4gd8eP5dRlPYpvAxhaHbLmVFNeaZiinZ3RX%2BcntkBEI%2BDDvWVdvuFc&X-Amz-Signature=cea55497f5b7572238af1e757db32cb6b51322819e17626ede5e171589889e46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

