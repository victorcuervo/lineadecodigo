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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL42XF2R%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZN3FHL30YYkH27EIq870p%2FVtNy%2B5HKPPQkFNWtfrRJAiEAtLIQGlwrTqK1uh7PnJ3V9DpthZMU7I5dxNsokJlDAgcq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDJ%2Bb3VksBt6kNt9wBSrcA2367K8ikKy7P96QL7KVQgxIbTunawkR%2B%2FebXB5rOPmiMFLquAoSgIfk9A5wA9qHJIThmyADaSdWDwt8MVOFlWUchocqArGpzdMgbks9DUcX6TBzRpqPVyFtjvQL5InnftKs1Ga3Od9wQ4%2Bj6Nwug5lbS0%2B2%2FtSYvmks3%2BMsP2nIwbmBVnqHZmF0lRG6jgs4Q3tzpWbc7Bby4dSouRxBEujnY7xNpLOyPJhEIZnf5P9VBr8EaGYh%2BXmhgq3%2B14DUy9wSWMspVp0KDKJDQerfeIe18Xweuu2UGYkDqutUP9BajcJvpxaRaqeOQMGz4I6yPR44xJMeO8l0l7Ltb%2BtyR4dP9G%2Fdq5wbf7u5GO1QaQLRyLHr4nyjuDOy7YzjQv7JOYd3yN3EObCnd6V4lkKDLa26K%2BxJOfmt%2BXCkz%2F0p6ovP9f0Ssg%2F2kdLB0ondhs1R1%2F%2F0XXdueRlpmyWwGQLdXSgAct6dXVM5OG%2BQugDtxkX8IlW700FPSkK%2F0gnxEAlTLuad50nqaUg6avsDtOeclii9eFUndNwMKJ5esoYfpW97FWiyGZ5AtK%2FnhbD0KoRQrXyG89yDh63rzq2uAzvpTiBbOrmsoVMISSkvpLPZspA95ey4LK6VAzMPX8cHMOKdicoGOqUBSoc09E25GGbAmQNVoMNgTmjzLo3%2BJaru34%2B09Wy105A4fQfjzureoUt72V4q2Fqa5fyBQBFKmqYRvg1dUEXJNjSOjhk%2FVodPH0iY8rmUPt57upKMrWSdBo4HgV9FO4%2BM8ZiJrpJ07UJZxxsL2pTvtXxWcpQVvyvYega36PDcmqiEHjAqavdttfNRGa8T3Dpy07DAajQZNlC1dOUCv2Pw52GlCowK&X-Amz-Signature=3cbc613bf79069539b955694076d3af701cd926f766afb633f105a597e27ba02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL42XF2R%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZN3FHL30YYkH27EIq870p%2FVtNy%2B5HKPPQkFNWtfrRJAiEAtLIQGlwrTqK1uh7PnJ3V9DpthZMU7I5dxNsokJlDAgcq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDJ%2Bb3VksBt6kNt9wBSrcA2367K8ikKy7P96QL7KVQgxIbTunawkR%2B%2FebXB5rOPmiMFLquAoSgIfk9A5wA9qHJIThmyADaSdWDwt8MVOFlWUchocqArGpzdMgbks9DUcX6TBzRpqPVyFtjvQL5InnftKs1Ga3Od9wQ4%2Bj6Nwug5lbS0%2B2%2FtSYvmks3%2BMsP2nIwbmBVnqHZmF0lRG6jgs4Q3tzpWbc7Bby4dSouRxBEujnY7xNpLOyPJhEIZnf5P9VBr8EaGYh%2BXmhgq3%2B14DUy9wSWMspVp0KDKJDQerfeIe18Xweuu2UGYkDqutUP9BajcJvpxaRaqeOQMGz4I6yPR44xJMeO8l0l7Ltb%2BtyR4dP9G%2Fdq5wbf7u5GO1QaQLRyLHr4nyjuDOy7YzjQv7JOYd3yN3EObCnd6V4lkKDLa26K%2BxJOfmt%2BXCkz%2F0p6ovP9f0Ssg%2F2kdLB0ondhs1R1%2F%2F0XXdueRlpmyWwGQLdXSgAct6dXVM5OG%2BQugDtxkX8IlW700FPSkK%2F0gnxEAlTLuad50nqaUg6avsDtOeclii9eFUndNwMKJ5esoYfpW97FWiyGZ5AtK%2FnhbD0KoRQrXyG89yDh63rzq2uAzvpTiBbOrmsoVMISSkvpLPZspA95ey4LK6VAzMPX8cHMOKdicoGOqUBSoc09E25GGbAmQNVoMNgTmjzLo3%2BJaru34%2B09Wy105A4fQfjzureoUt72V4q2Fqa5fyBQBFKmqYRvg1dUEXJNjSOjhk%2FVodPH0iY8rmUPt57upKMrWSdBo4HgV9FO4%2BM8ZiJrpJ07UJZxxsL2pTvtXxWcpQVvyvYega36PDcmqiEHjAqavdttfNRGa8T3Dpy07DAajQZNlC1dOUCv2Pw52GlCowK&X-Amz-Signature=a0da41f33f779f2bb13ea208943c01c23a7374139d7fc1f56ae91ae7417c29ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

