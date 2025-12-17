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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDR3J7SR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T201443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkfwj8tlmQIUjmaq8prswd7YNCDULnWOmhhq7U9S7PVgIgfgGGgJ8Q3FZFBNVJ%2B4QHXpy77YOIWF36g%2Bde1QacqiUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrav0PuzSeZGfJPcSrcA6KsMbbQmGRbe51NPB%2BT1ogRRIHDe0nljcaAP%2F3srCn%2BziR%2BUeW5KWUf9hl5A8Vi1lyeIjAupFFeOXT%2FfK4N5uZQ%2BFcAFW%2FTa9oYvdr21fWVvvt7BnaxJbOCis2%2FGDsVBlHELu9hbYUx4hNNMsReOuE3K%2FAqFiQBuu8c52%2FNQsVQxbvn%2BHaQMyFIsyjP%2BC2J9RqOz%2FCvN5tu9VbCJKWYg0T3wuS3Xs%2FM3FxcVr5VJNatJMC8Ue7nyo2m%2B2iaWMQEmmvj6hwhamum%2F1t2VkY3tCQHIrvKGqahtteKcvSfm%2FjqWQWqZkLrm8p6P4oE%2FSZ1rFclnPbKhGUf9aBq0fPb7kTwaQ1s8O6sU0lqWdv1%2Bw9fzKSp1l0NP3oUAksbQDptSDhJIVLxiRfAmSkKwnLVYVAX%2Bem6eHbDTcyKhzpuyafzwAqYCLgB7IwZ7Ks2hVzoWR10QTvqhkIPFH4ZySGrqLPpTpW%2Fw74a7GRlXqase8pWQ3HbimTKXcb1eNZa%2Bq6lyjHp6y%2BS1kpKQh9H00bDi9KMGKVPNpWl6mVoXCEEnCu4hpxNVSggorhVK0K3z1jWKui8liDyAc9lcbZUBdwUafzYjmdtBgdz%2FqMIh8u%2F7lSQYODEgcOrcKZhQoDHMP2KjMoGOqUBgPhnckK%2FwRkea4sCeZW8dT0cidv9Bi70gZSCHvJifhLeJSlydtIWMXhHCz5NzzxQxxiVV58PUQadYrhbwNY5e3Rd9dyWRmlc%2BEQ%2BUlJ7GJnbq6G%2B5IpxL9lFad6Pw4WEObbHFFgF6MUZ7Ipwt1ZXe7sA6knHKSh7Qban5bdGJd5ZUJLGB5UgQrk3reMjYcNzYc6WuQvgB57ItyBaqji2iU82V2SP&X-Amz-Signature=3e7be8f4686f4c9081242f0908ec5095d7bd41c9cbfe5b6e768db97d58e33adf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDR3J7SR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T201443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkfwj8tlmQIUjmaq8prswd7YNCDULnWOmhhq7U9S7PVgIgfgGGgJ8Q3FZFBNVJ%2B4QHXpy77YOIWF36g%2Bde1QacqiUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrav0PuzSeZGfJPcSrcA6KsMbbQmGRbe51NPB%2BT1ogRRIHDe0nljcaAP%2F3srCn%2BziR%2BUeW5KWUf9hl5A8Vi1lyeIjAupFFeOXT%2FfK4N5uZQ%2BFcAFW%2FTa9oYvdr21fWVvvt7BnaxJbOCis2%2FGDsVBlHELu9hbYUx4hNNMsReOuE3K%2FAqFiQBuu8c52%2FNQsVQxbvn%2BHaQMyFIsyjP%2BC2J9RqOz%2FCvN5tu9VbCJKWYg0T3wuS3Xs%2FM3FxcVr5VJNatJMC8Ue7nyo2m%2B2iaWMQEmmvj6hwhamum%2F1t2VkY3tCQHIrvKGqahtteKcvSfm%2FjqWQWqZkLrm8p6P4oE%2FSZ1rFclnPbKhGUf9aBq0fPb7kTwaQ1s8O6sU0lqWdv1%2Bw9fzKSp1l0NP3oUAksbQDptSDhJIVLxiRfAmSkKwnLVYVAX%2Bem6eHbDTcyKhzpuyafzwAqYCLgB7IwZ7Ks2hVzoWR10QTvqhkIPFH4ZySGrqLPpTpW%2Fw74a7GRlXqase8pWQ3HbimTKXcb1eNZa%2Bq6lyjHp6y%2BS1kpKQh9H00bDi9KMGKVPNpWl6mVoXCEEnCu4hpxNVSggorhVK0K3z1jWKui8liDyAc9lcbZUBdwUafzYjmdtBgdz%2FqMIh8u%2F7lSQYODEgcOrcKZhQoDHMP2KjMoGOqUBgPhnckK%2FwRkea4sCeZW8dT0cidv9Bi70gZSCHvJifhLeJSlydtIWMXhHCz5NzzxQxxiVV58PUQadYrhbwNY5e3Rd9dyWRmlc%2BEQ%2BUlJ7GJnbq6G%2B5IpxL9lFad6Pw4WEObbHFFgF6MUZ7Ipwt1ZXe7sA6knHKSh7Qban5bdGJd5ZUJLGB5UgQrk3reMjYcNzYc6WuQvgB57ItyBaqji2iU82V2SP&X-Amz-Signature=efa5c97d2f53e755fed0871f622384bd7037cb0d4b6b52f4e4ee58c61c9d77a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

