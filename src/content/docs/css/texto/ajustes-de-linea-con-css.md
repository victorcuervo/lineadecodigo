---
title: Ajustes de línea con CSS
description: "Uso de las propiedades overflow-wrap y word-wrap para poder realizar ajustes de línea con CSS y evitar texto desbordado."
lastUpdated: 2025-12-17
slug: css/ajustes-de-linea-con-css
author: victor_cuervo
---

Cuando estamos trabajando con bloques e insertando texto dentro de ellos, tenemos que estar al tanto de qué sucede con nuestro texto. Saber si nuestro texto se desborda en el bloque, o el contenedor se ajusta al tamaño del texto. Es por ello que vamos a ver cómo podemos controlar los ajustes de línea con [CSS](https://www.manualweb.net/css/).


Pero vayamos por partes. Lo primero es crear un bloque o una capa mediante el típico elemento [`div`](https://www.w3api.com/HTML/div/) de [HTML](https://www.manualweb.net/html/). Dentro del elemento [`div`](https://www.w3api.com/HTML/div/) vamos a colocar el texto que queremos que se visualice.


```html
<div class="columna">
  Puede que la tarea que me he impuesto de escribir una historia completa
  del pueblo romano desde el comienzo mismo de su existencia me recompense
  por el trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


Lo siguiente será darle un tamaño a este bloque. Para ello jugamos con los estilos de CSS y en concreto con la propiedad [`with`](https://www.w3api.com/CSS/width/) la cual utilizaremos para dar un tamaño pequeño a la columna que nos ayude con la visualización del ejemplo.


```css
.columna {
  width: 50px;
  background-color: lightcoral;            
  margin: auto;
}
```


Hemos aprovechado que habíamos definido la clase “columna” mediante el atributo [`class`](https://www.w3api.com/HTML/class/) para poder aplicar el estilo sobre el bloque. De igual manera hemos incorporado otras propiedades dentro de la clase, no necesarias para el ejemplo, pero que nos ayudan para la estética del mismo, como son [`background-color`](https://www.w3api.com/CSS/background-color/) que nos ayuda a poner un color al fondo del bloque y [`margin`](https://www.w3api.com/CSS/margin/) que nos permite ajustar los márgenes alrededor del bloque, en este caso centrándolo.


Si  lo cargamos en el navegador veremos que las líneas, al haber definido un bloque muy pequeño, desbordan el contenido de las palabras fuera del contenedor. Dejando un efecto no deseado.


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ72GNTI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T201110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF8gjFj%2FmtGEoXwxQ4hLWnvzgKr2IBKiLSl6vaUWdb37AiEA%2BUpbCHwPzwZ3lirXEsYUdO0%2B%2BHFdmUHfFkNREkRokmYqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNJyqrc%2FejIB3OxASrcAxAPFD5w53LtbhrrqW%2FvoQlE%2BUPjEKVMFF09%2Bf8Qr9oS0hK6ozOmxhyPUx2CJ7cWzIebmKvzs10RyD8MlrmMNebV1VeRI5v4gA40Ws08m5S0xyqkYpsBN5S7ZNw1HQcsJ8G9Pmswx%2FIIkvgh8GitODcduTz5GIqAlaHtQ2z27ttIeuxM8a6EJRo674TzRgHdYHKREQXY7GYDyqFJNKs2MdN4wrlZg9XrZKn1S9fGf4e8yy4BpAhY2jeUy9LPwCExU9jemrhTzK9OjAnH13zoNHbHCcWnGcXbYF1O6ksn%2FWEAD%2Bm4e2o6Xne8hKV6trJHaFAesK221fICOQksckgLfNn%2Br4MW8u%2BSX3uL0nHAWVJdo8yujv7JaUKb3fLJBExJzdaWPcAQ%2Fnn1VK8gA%2BmUAkLfieDBAKQfVaIxinv4nkObKHHZY1cs1m8xuagOdi0EMIrfPaHZ8jugmtHw2o8G%2BjVrJ86khOODBPufLT1Fz4mz5oqE992OW4mKZIrtfKzBC3VDJN7P3JFKzr1uf17AX03hCAUlfAH%2F9wPEso90fr%2FxY3aDqoyiiJaxCntUW5VQQK8J59okDraMynEfdHiBf0BcFiJ%2FoG8Mwd3hHhpVC0IzthXSoODYMCBc9r%2BSMM%2BLjMoGOqUB3UNzMPUlTb7m%2FS%2BHA9HX9IgDqAWlopIEjeJ0S2c8Iq4R7i6nRwsKlhFn7V6RUs70YVXocJomCX2DswKrLFFytWMdQaEo6vhWNKqxwYkH1wSpe3pqfrJdjyMDEt2jkMDrLHnRgHtBft30p1sL4zTxzBjrH7HzstNJ0LVPVzgaaG9CA6A9J5HIQBxt1a0WnlAMGuN9Esryf3JBwgxLxIb34LRVOHgy&X-Amz-Signature=b15a76ffb18f22243e1258983ec81d9beb630989723d143bd6d6b1ff11d26cbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Para poder solucionar esto tenemos que recurrir a la propiedad [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/), cuyo valor por defecto es **“normal”** y lo que está generando el anterior efecto. Y lo que tenemos que hacer es asignarle un valor de “break-word” que lo que hará será el dividir las palabras (cortarlas) cuando lleguen al borde de nuestro bloque.


Puede ser que el efecto sea raro en las palabras, pero gráficamente no veremos que se desbordan las líneas por fuera del contenedor.


Para ello definimos una nueva clase que la hemos llamado “texto-ajustado” de la siguiente forma:


```css
.texto-ajustado {
  overflow-wrap: break-word;
}

.texto-sinajustar {
  overflow-wrap: normal;
}
```


Ahora aplicamos estas clases sobre el bloque de texto, asignado la nueva clase en el atributo [`class`](https://www.w3api.com/HTML/class/) :


```html
<div class="columna texto-sin-ajustar">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>

<div class="columna texto-ajustado">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


El efecto que veremos en el navegador será el siguiente:


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ72GNTI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T201110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF8gjFj%2FmtGEoXwxQ4hLWnvzgKr2IBKiLSl6vaUWdb37AiEA%2BUpbCHwPzwZ3lirXEsYUdO0%2B%2BHFdmUHfFkNREkRokmYqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNJyqrc%2FejIB3OxASrcAxAPFD5w53LtbhrrqW%2FvoQlE%2BUPjEKVMFF09%2Bf8Qr9oS0hK6ozOmxhyPUx2CJ7cWzIebmKvzs10RyD8MlrmMNebV1VeRI5v4gA40Ws08m5S0xyqkYpsBN5S7ZNw1HQcsJ8G9Pmswx%2FIIkvgh8GitODcduTz5GIqAlaHtQ2z27ttIeuxM8a6EJRo674TzRgHdYHKREQXY7GYDyqFJNKs2MdN4wrlZg9XrZKn1S9fGf4e8yy4BpAhY2jeUy9LPwCExU9jemrhTzK9OjAnH13zoNHbHCcWnGcXbYF1O6ksn%2FWEAD%2Bm4e2o6Xne8hKV6trJHaFAesK221fICOQksckgLfNn%2Br4MW8u%2BSX3uL0nHAWVJdo8yujv7JaUKb3fLJBExJzdaWPcAQ%2Fnn1VK8gA%2BmUAkLfieDBAKQfVaIxinv4nkObKHHZY1cs1m8xuagOdi0EMIrfPaHZ8jugmtHw2o8G%2BjVrJ86khOODBPufLT1Fz4mz5oqE992OW4mKZIrtfKzBC3VDJN7P3JFKzr1uf17AX03hCAUlfAH%2F9wPEso90fr%2FxY3aDqoyiiJaxCntUW5VQQK8J59okDraMynEfdHiBf0BcFiJ%2FoG8Mwd3hHhpVC0IzthXSoODYMCBc9r%2BSMM%2BLjMoGOqUB3UNzMPUlTb7m%2FS%2BHA9HX9IgDqAWlopIEjeJ0S2c8Iq4R7i6nRwsKlhFn7V6RUs70YVXocJomCX2DswKrLFFytWMdQaEo6vhWNKqxwYkH1wSpe3pqfrJdjyMDEt2jkMDrLHnRgHtBft30p1sL4zTxzBjrH7HzstNJ0LVPVzgaaG9CA6A9J5HIQBxt1a0WnlAMGuN9Esryf3JBwgxLxIb34LRVOHgy&X-Amz-Signature=84ba997e985f0c98f45bdd634076874042998e2deef80a62bbfa078691eb719a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

