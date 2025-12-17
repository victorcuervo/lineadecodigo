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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y44W3R4L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSSsLBtw%2Bjik6d7s%2FVYYkwsjBjPZ9vb2YQMWZYhgLPCgIhANLSWSXj471WMUiKjJvG394OOLLYjA3voledSqZs%2F2h7Kv8DCHgQABoMNjM3NDIzMTgzODA1Igw3cYElR7nTU0r67JIq3AOYG5jvEke2Qpo6Sjc4M77Kc%2Bc5azcAeYmq6pO2NRmiT3601O217JTPjtXVn79XIbubTrDA%2B2O7ckhdiOq158NxIhqjaFh2%2BVpYyK%2F14mW%2FOhK3Lf5%2F2Jo4RmkrItPtdaNkDsl%2BctatGnsdZc%2BboWwLlQv%2FUJ2TrtGRHuuIHCWTvuN%2FO9FOGp5UoXicpH%2BnKnoUb1B79TPtXAu2BfHnTWwBvsBiitrffW85bFjy%2BFDFuYXjN2mrRJ1BpdEeN7EwOiox9E0pEx%2Fzu6UD3Fc1F%2FteC5SxVrqRadsw0b%2F3U1LU7s0j9hWwREOzG1qQQ9ninc5vRUDnY5cG97SukP8hClwcwBPOtKV%2FlcpJ3ytAJc%2B1shoNiTuRowRan9iYPg4phg7XyAgp4Y%2B0YnExcm8XaycKaZ9ys0BIyDJ1ENldLVuapqgmOkM4fL8ak4hecRYIiXD5hu0eS2EZgiAhqFUIIyE12Uwry83dos3ecNo26IRDvDPhm7kZviimTRKZvznek8dmyVKinBpAlh6ZEF9XrtJyBTfA0Mp45CEEtMBNUg1CU9nWgFnaI7Ol85s4CXJfcUBO1pMQH5YUqxyEHUDcN5IC52Gvk%2FSYz8YGClEno2AzEqdsGbKDlKjeRLnPUTCsnInKBjqkAd85BQun7e44apxgVsezDditP4dSLyF4EmLRmNgLGHACl8W1s6NQHo7dGS9gma9FfS9F1Z4TiKvnRQzjEsQHsNeWAMuSBVVSRNAideY3HVdOhjdpq4I00pfiOhW127kalXTVMoPTRvTcYz4JXUOqLPW2FKKKiTGOTof7FNZALLH%2FbCCkXYw%2Fx4kZWwQcg1JMIzUw%2BRU6VcBPXraJHAy6sWqnGo4P&X-Amz-Signature=f74bdd34988fb906b60b2eaa898e79e0d0d6fad973f483277fa5ad2dcffbb09d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y44W3R4L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSSsLBtw%2Bjik6d7s%2FVYYkwsjBjPZ9vb2YQMWZYhgLPCgIhANLSWSXj471WMUiKjJvG394OOLLYjA3voledSqZs%2F2h7Kv8DCHgQABoMNjM3NDIzMTgzODA1Igw3cYElR7nTU0r67JIq3AOYG5jvEke2Qpo6Sjc4M77Kc%2Bc5azcAeYmq6pO2NRmiT3601O217JTPjtXVn79XIbubTrDA%2B2O7ckhdiOq158NxIhqjaFh2%2BVpYyK%2F14mW%2FOhK3Lf5%2F2Jo4RmkrItPtdaNkDsl%2BctatGnsdZc%2BboWwLlQv%2FUJ2TrtGRHuuIHCWTvuN%2FO9FOGp5UoXicpH%2BnKnoUb1B79TPtXAu2BfHnTWwBvsBiitrffW85bFjy%2BFDFuYXjN2mrRJ1BpdEeN7EwOiox9E0pEx%2Fzu6UD3Fc1F%2FteC5SxVrqRadsw0b%2F3U1LU7s0j9hWwREOzG1qQQ9ninc5vRUDnY5cG97SukP8hClwcwBPOtKV%2FlcpJ3ytAJc%2B1shoNiTuRowRan9iYPg4phg7XyAgp4Y%2B0YnExcm8XaycKaZ9ys0BIyDJ1ENldLVuapqgmOkM4fL8ak4hecRYIiXD5hu0eS2EZgiAhqFUIIyE12Uwry83dos3ecNo26IRDvDPhm7kZviimTRKZvznek8dmyVKinBpAlh6ZEF9XrtJyBTfA0Mp45CEEtMBNUg1CU9nWgFnaI7Ol85s4CXJfcUBO1pMQH5YUqxyEHUDcN5IC52Gvk%2FSYz8YGClEno2AzEqdsGbKDlKjeRLnPUTCsnInKBjqkAd85BQun7e44apxgVsezDditP4dSLyF4EmLRmNgLGHACl8W1s6NQHo7dGS9gma9FfS9F1Z4TiKvnRQzjEsQHsNeWAMuSBVVSRNAideY3HVdOhjdpq4I00pfiOhW127kalXTVMoPTRvTcYz4JXUOqLPW2FKKKiTGOTof7FNZALLH%2FbCCkXYw%2Fx4kZWwQcg1JMIzUw%2BRU6VcBPXraJHAy6sWqnGo4P&X-Amz-Signature=40a2908c481ca9924bfb1ee67041490d3e2bfff4a01e9b16be9cc6c5e07d9b27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

