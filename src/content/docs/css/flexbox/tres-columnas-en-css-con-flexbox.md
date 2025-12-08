---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HPSDI6W%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T154238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXQFS0O2W33iiF7eo9DsfbwXboYHG462MoDLf6q%2F4IjAiEAxN%2FA1IoDDYzDUzJO8Lb4H%2BG2Olei2JX5t3ym0%2FeQQ2EqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNdpt3B84ZqBBwJfZyrcA8CjWruoLM9cO9cXGsbvP3lji%2FfVfaV%2FFiCgaZ3WPQW2rBf2RROczA%2B5RFb0yaJneh2Vi4UckFLJ7W9OTXHW5f%2FkVRi6JctdqJH5HT%2B%2FYCVi81wRfnp6TY69%2F4z6kb5pir3QWox0hDrOb5LVho4tRKtgYKaiQ17kDvBADwaj27j3RNbSVqTIosQp5RQdHnLfqWbGG3hhV75IwL5MIOetHIEmmGFBgyYBe8ysKI1agEeEpHwIImytHKEehnMLeXMRwJeRV3j0pm2180%2FuYuzniu%2B%2Br5Dpdb2uIAgfnEcUHVqwAV%2FJoovcZGrCQHa5eIgdcs8zAQ0uVkQN0a6NQa8iuf8HJHp2zFyvc5db9ljwN6Ik2tuWBaAc2fka4x8R4rjoZNDdLr%2BkDZsVWVefu7VomYWlXC3kAL9%2Bio00ytCIvqVjxjGNCnfjkR4LUCTN%2FgmCP1U25zKYk9LMfcrfIuC7zfPmhySu4xrlGYHevfGfL9wW1T%2BHbFn9bJPQk4G4yX9OerLwt7uM8BhhLsyvnWfGeHBY8cQTGCor52jCOtAKczR2MSrvkQVvmNf%2BZapkOOtPTRXwiXXTzL0A8JHRhCW9IDBRpCJQQ7OZFqkNnkF3eOHLKN1MWjuf1gB9Fz5tMJrB28kGOqUB%2B1S63Jv8DDQNNXzyTChmYict473BpJ0i0oBULEg8exHE7Rkg7FwEeRh18X9u%2FoLkBR74ufY%2FqlZR8Ff%2BNSTinR3uPLcBAKUXFtIt9LqeRQ%2BRUkChQnwfbjuYXX6R4KA83LaId29NRDhL0uF7V76Jrp1Pkk9wbUmtIxOsp5HEmx4tttGTqU8xtiOuL51DsRiKznSs1vrB05DOXGCxC6TuL7qnAHb1&X-Amz-Signature=5a08ce2f5d722e645ce38f224448c7c85a6645b50ecfa4956ec0cf34ee1660ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HPSDI6W%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T154238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXQFS0O2W33iiF7eo9DsfbwXboYHG462MoDLf6q%2F4IjAiEAxN%2FA1IoDDYzDUzJO8Lb4H%2BG2Olei2JX5t3ym0%2FeQQ2EqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNdpt3B84ZqBBwJfZyrcA8CjWruoLM9cO9cXGsbvP3lji%2FfVfaV%2FFiCgaZ3WPQW2rBf2RROczA%2B5RFb0yaJneh2Vi4UckFLJ7W9OTXHW5f%2FkVRi6JctdqJH5HT%2B%2FYCVi81wRfnp6TY69%2F4z6kb5pir3QWox0hDrOb5LVho4tRKtgYKaiQ17kDvBADwaj27j3RNbSVqTIosQp5RQdHnLfqWbGG3hhV75IwL5MIOetHIEmmGFBgyYBe8ysKI1agEeEpHwIImytHKEehnMLeXMRwJeRV3j0pm2180%2FuYuzniu%2B%2Br5Dpdb2uIAgfnEcUHVqwAV%2FJoovcZGrCQHa5eIgdcs8zAQ0uVkQN0a6NQa8iuf8HJHp2zFyvc5db9ljwN6Ik2tuWBaAc2fka4x8R4rjoZNDdLr%2BkDZsVWVefu7VomYWlXC3kAL9%2Bio00ytCIvqVjxjGNCnfjkR4LUCTN%2FgmCP1U25zKYk9LMfcrfIuC7zfPmhySu4xrlGYHevfGfL9wW1T%2BHbFn9bJPQk4G4yX9OerLwt7uM8BhhLsyvnWfGeHBY8cQTGCor52jCOtAKczR2MSrvkQVvmNf%2BZapkOOtPTRXwiXXTzL0A8JHRhCW9IDBRpCJQQ7OZFqkNnkF3eOHLKN1MWjuf1gB9Fz5tMJrB28kGOqUB%2B1S63Jv8DDQNNXzyTChmYict473BpJ0i0oBULEg8exHE7Rkg7FwEeRh18X9u%2FoLkBR74ufY%2FqlZR8Ff%2BNSTinR3uPLcBAKUXFtIt9LqeRQ%2BRUkChQnwfbjuYXX6R4KA83LaId29NRDhL0uF7V76Jrp1Pkk9wbUmtIxOsp5HEmx4tttGTqU8xtiOuL51DsRiKznSs1vrB05DOXGCxC6TuL7qnAHb1&X-Amz-Signature=0ef66dee8f45f59feb7375463d974c3cefffba1eec7b32495a81e94aca8c5217&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

