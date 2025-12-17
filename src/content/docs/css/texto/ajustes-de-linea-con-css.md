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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXSYBUD7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCx0%2F9gJkLBiWP0bqSloeRBF%2B71%2FNS%2FS%2B0cloTbo4A2rgIhAPHP4qW8xB2BPZ69wq%2Fw6aGI3m3mi8tFxa9Gx1r5XozVKv8DCH8QABoMNjM3NDIzMTgzODA1IgyMN94yg7AZCQSZL%2Fkq3AMR%2FecElUyS323wsI4tF9%2FnN36tMUCrT4LOBlFeFC%2BgKwtO4zNF4aiQXOPTACsalnrrL2H2inHqyHSLYkHyMqDLsCnMmWkUoDxP480lkwgnH2WdcuMYEZGOlzVQVBirgFiXn7aU4M%2BYVCdTiSe7yf8TI%2FC2E68VV1UOsXVHcrp7kz643gcbf%2BtVMEl2ljHVV6k2aRU5SbBFR0hZUvrJKyZOJRWuZwSfi8o4dZKMkO82IO0qrD9u5PXbbuerh0FHaF0mpkFnb9V11bbEs%2BUv%2F7lMERUxXkYWxw64F5IEV0HhDxZvbUzzUX7seDh0CgiWWpmTL18rbPtAZICRfwEhZ74b%2BgpYE39Gs8tzNxYd6HpOZB3W4fVf6rL3%2BleizaXh9bYzkjSaOFjTA6qbM0527W87myU9JxEH%2FUZhjaDFf1J%2FezZXd3h5xIDWiPmaP3uAdiIOA0o2VTaQarNKx5MvCuUauK7lA8gIiLGB%2BwEMp5zV%2FRxyao6oFAI0hosLPpGUuigjvjhfnnZbwy%2BVP03zEfNrmaJrRgs8%2FV47Fig8cAgG8i67PNQSPhs0X5RE%2FlQHHIC5%2FQ5cbrga9bwc8VhHSkHN%2B6v%2BqOIZCCnenW4LLnhv12XHSxwBT9rO9pgsyjDB4YrKBjqkAaQnmvgOd7Je%2B5I0v3gcKc5DRTPKJHYuJSg%2FmE2t5CGbhEtz0nfYgeKDN8uK5tO%2BzgzuTtjQ%2Fy33zbyfbJcM9%2BRKr5CPgKkK6Dqg%2BcVqytFXzymM%2F6kgKPw9Wzav6n1M1FonTgwi22JEmX1fVIpxOOT0CPxoISJsEwyzPNqRsw7vHB9NBH1yKNHnitiBwsqXKeOEmfeVg3bw1CeBBBzWSGkkzXAn&X-Amz-Signature=cb44d8c36a40801d25dcdc3f8f991391ce64f4ef87daaa33131cd5a09a582951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXSYBUD7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCx0%2F9gJkLBiWP0bqSloeRBF%2B71%2FNS%2FS%2B0cloTbo4A2rgIhAPHP4qW8xB2BPZ69wq%2Fw6aGI3m3mi8tFxa9Gx1r5XozVKv8DCH8QABoMNjM3NDIzMTgzODA1IgyMN94yg7AZCQSZL%2Fkq3AMR%2FecElUyS323wsI4tF9%2FnN36tMUCrT4LOBlFeFC%2BgKwtO4zNF4aiQXOPTACsalnrrL2H2inHqyHSLYkHyMqDLsCnMmWkUoDxP480lkwgnH2WdcuMYEZGOlzVQVBirgFiXn7aU4M%2BYVCdTiSe7yf8TI%2FC2E68VV1UOsXVHcrp7kz643gcbf%2BtVMEl2ljHVV6k2aRU5SbBFR0hZUvrJKyZOJRWuZwSfi8o4dZKMkO82IO0qrD9u5PXbbuerh0FHaF0mpkFnb9V11bbEs%2BUv%2F7lMERUxXkYWxw64F5IEV0HhDxZvbUzzUX7seDh0CgiWWpmTL18rbPtAZICRfwEhZ74b%2BgpYE39Gs8tzNxYd6HpOZB3W4fVf6rL3%2BleizaXh9bYzkjSaOFjTA6qbM0527W87myU9JxEH%2FUZhjaDFf1J%2FezZXd3h5xIDWiPmaP3uAdiIOA0o2VTaQarNKx5MvCuUauK7lA8gIiLGB%2BwEMp5zV%2FRxyao6oFAI0hosLPpGUuigjvjhfnnZbwy%2BVP03zEfNrmaJrRgs8%2FV47Fig8cAgG8i67PNQSPhs0X5RE%2FlQHHIC5%2FQ5cbrga9bwc8VhHSkHN%2B6v%2BqOIZCCnenW4LLnhv12XHSxwBT9rO9pgsyjDB4YrKBjqkAaQnmvgOd7Je%2B5I0v3gcKc5DRTPKJHYuJSg%2FmE2t5CGbhEtz0nfYgeKDN8uK5tO%2BzgzuTtjQ%2Fy33zbyfbJcM9%2BRKr5CPgKkK6Dqg%2BcVqytFXzymM%2F6kgKPw9Wzav6n1M1FonTgwi22JEmX1fVIpxOOT0CPxoISJsEwyzPNqRsw7vHB9NBH1yKNHnitiBwsqXKeOEmfeVg3bw1CeBBBzWSGkkzXAn&X-Amz-Signature=52017c41c54da509369b27a1bfca93503655a1331aaac989b2ca4937818259c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

