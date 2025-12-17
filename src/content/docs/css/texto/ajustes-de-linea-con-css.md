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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4LCEMWT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBSEI00x1dbxuBLoIIUYoomj5VnCF76fZYL%2F2Wk0t9uAIgC11dIbRS3FX%2BCuYiEyqjLg8HU9%2BHHb27K%2B4m0MRM93oqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FoSF0REY7tIj%2FWgCrcA8oykDHDdnNbRQC6N3cF3Ts5TSwg7xG6bVRcDlfzFqJhbaR3LwvMFWmN6Lt1xi8pYEZDROTCclhkJkHyznax0y2TJ%2Bb%2BSxvdmUpeSpf6OY%2F8Tx6Teg9Lxw9eZlk7wbbEIzlUuROatpcMkRp2hxsSVLE6ymH%2F70ppCWDhZAljjydxR6IKQ5TXrk8dasoXf9eELNhkNbcNLbzNTHhrmbgA1sjkSEWKfgAL5ZiTnxIca97ptBxzQb8tsHsaODo4bxZw0JsETqj%2F08rt5CVOBYPdh6X6oEN7Z11hNGVjTvn5taBDO1WeNlFP7lOyLQiCFKTCGnz37xvbuFylRI94DIEgBl%2FkR6p%2FtHQSO3dJAypV0kkbB11b8vUjq6YfHUdLAk9rmdwv46i7TasopLp4OwpXhr1yf2IgAMdD3A5DuGQJ%2BVW3R3E6i5OT0FRkDA%2BI8nEfezdzrjUBJTbZPsQVcAP74A8g4qiIKL5nETRNHKRmi83UAYc2WqlTsHvQIvp9R0Tdb5TW8qZD8nJzCiYJScwNfUJCUGYbiyW46ODjxfpROm2o1ZaAnENknlE9z54ihHZ%2FIGKfXhB4LWE4l0xi0qAO%2B5ocFjAkgX%2BT3nqgdbPJ3m8cOJilPF%2BSAPQaiJa6MMSKjMoGOqUBhrZDabbs35jwgG%2BjCphVK3WOs%2BZ8ATGEqJFVwmk1cqXHeKxsY1CBsuYy5zcfPwMRBVSCk2KRnikhJoTueQPyML3wI%2Fu3XzOlcPxXnQ275VxKbNLJ%2F4HGq92pDlzuTwE%2BZyhV8PiV5JQu%2FoL4CsCyoMl3cbRwqSeqQC6h5gbrWlsZnZHT8mdD0fcrotOuJi1EV7ZQIKoQs6rGILYgsOIUjIWi7k8S&X-Amz-Signature=b44ea4f6d449e56d3cf16f4479640f315c03d5bccc144cd49244f2f6472ab54d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4LCEMWT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBSEI00x1dbxuBLoIIUYoomj5VnCF76fZYL%2F2Wk0t9uAIgC11dIbRS3FX%2BCuYiEyqjLg8HU9%2BHHb27K%2B4m0MRM93oqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FoSF0REY7tIj%2FWgCrcA8oykDHDdnNbRQC6N3cF3Ts5TSwg7xG6bVRcDlfzFqJhbaR3LwvMFWmN6Lt1xi8pYEZDROTCclhkJkHyznax0y2TJ%2Bb%2BSxvdmUpeSpf6OY%2F8Tx6Teg9Lxw9eZlk7wbbEIzlUuROatpcMkRp2hxsSVLE6ymH%2F70ppCWDhZAljjydxR6IKQ5TXrk8dasoXf9eELNhkNbcNLbzNTHhrmbgA1sjkSEWKfgAL5ZiTnxIca97ptBxzQb8tsHsaODo4bxZw0JsETqj%2F08rt5CVOBYPdh6X6oEN7Z11hNGVjTvn5taBDO1WeNlFP7lOyLQiCFKTCGnz37xvbuFylRI94DIEgBl%2FkR6p%2FtHQSO3dJAypV0kkbB11b8vUjq6YfHUdLAk9rmdwv46i7TasopLp4OwpXhr1yf2IgAMdD3A5DuGQJ%2BVW3R3E6i5OT0FRkDA%2BI8nEfezdzrjUBJTbZPsQVcAP74A8g4qiIKL5nETRNHKRmi83UAYc2WqlTsHvQIvp9R0Tdb5TW8qZD8nJzCiYJScwNfUJCUGYbiyW46ODjxfpROm2o1ZaAnENknlE9z54ihHZ%2FIGKfXhB4LWE4l0xi0qAO%2B5ocFjAkgX%2BT3nqgdbPJ3m8cOJilPF%2BSAPQaiJa6MMSKjMoGOqUBhrZDabbs35jwgG%2BjCphVK3WOs%2BZ8ATGEqJFVwmk1cqXHeKxsY1CBsuYy5zcfPwMRBVSCk2KRnikhJoTueQPyML3wI%2Fu3XzOlcPxXnQ275VxKbNLJ%2F4HGq92pDlzuTwE%2BZyhV8PiV5JQu%2FoL4CsCyoMl3cbRwqSeqQC6h5gbrWlsZnZHT8mdD0fcrotOuJi1EV7ZQIKoQs6rGILYgsOIUjIWi7k8S&X-Amz-Signature=fdadb87de846aeaa3386c1c06968dcb8a5cb123a9a23ede53611c5599deec0d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

