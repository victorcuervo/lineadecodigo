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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZNOZVUK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmtuK2E5ZzkSj%2Ff%2FtNmrLO9eWQdEHnvRzo7euX4Jf9KAIgab8EyIUlkDU555SHSijjOww09aEMVhO06NOM%2Fn17SiIq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDCtDH5AjoIzRq3uk4yrcA7rkvlJGnC9cBPNgF35osrJgdu2Zjgmjoz72uxL9aJCPfY89SUg7Ef2OyF5Q1t43%2FFidovL2PH1TRqbM6cTjAU6q1WMCJizcRgzRxq4Xy3miYu%2FUSaId2GCje3UfJogbBNKugrsLuUBorEh1R6xy5WnxiWb3uPV4F0Kk1veijKWezBRcx8vvvruGiyz70UM%2FGlAgIDB3q7Za7SEnrd161bQmxjaqtwsjz5g%2BtRuWcKbickM8jsJpzKjoqspg8nheUjAcPAO3Mj9reHpbHQ%2Be%2Blplzd45v9esmIpugsNbKa%2FfgN5NSZ0yZ0nmqALtn%2B96g%2FONA2vR2CNfvCkDnEjmFlDtk2TRYxrQK8aiG0%2FiEqf3lcpID%2FFwhnOorFMBvCnD%2BglhYtGusqmGqdr%2BNXWqhX5%2FkBACbBA2TCIf6qoGeu03CAgU8FHdIYb75%2BAJMi5ec0uZG6kx3jqJgYUV%2BO5k5r7FpMLkfEqQoNrTGZbNWP5Gezaza4B%2FQlZAawXSn2aG8kDl5wUifagwr6SXdasuxUR8iNr7fxWCFnhR2ywsK4PgRdpWJ8ul84u0fsr%2BG3DwvSKSW%2Fn9IbIxNK2UBRBZxY3cVtkhdf5TZbcGs2EINC1V7QQTmrYmhlj9guQAMIq3icoGOqUBQEIz5%2BncnAFwN77kE0TgAyBFHP3FdcrFCuyDCn39M1NIf6QoFxQnaQn5URkUpASs0AcRou59X0kBSkK67etNbpycVlKXbpAgUFUaSQisbNhaNebZcnNRfFTLw2mBZPp8YxZu4tuMfrh0LW%2F4kZhTlB7fDA5V57SLINaOx242akZ8rKciicmn7quDV4ORJhyM6w3yrsI%2BC6uToqasM%2B%2FvmMuN%2BOf%2B&X-Amz-Signature=ad74a83189e38eab96f9ccb84b51b4e4889ce8aae4d04088a27a1d66e6d353ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZNOZVUK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmtuK2E5ZzkSj%2Ff%2FtNmrLO9eWQdEHnvRzo7euX4Jf9KAIgab8EyIUlkDU555SHSijjOww09aEMVhO06NOM%2Fn17SiIq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDCtDH5AjoIzRq3uk4yrcA7rkvlJGnC9cBPNgF35osrJgdu2Zjgmjoz72uxL9aJCPfY89SUg7Ef2OyF5Q1t43%2FFidovL2PH1TRqbM6cTjAU6q1WMCJizcRgzRxq4Xy3miYu%2FUSaId2GCje3UfJogbBNKugrsLuUBorEh1R6xy5WnxiWb3uPV4F0Kk1veijKWezBRcx8vvvruGiyz70UM%2FGlAgIDB3q7Za7SEnrd161bQmxjaqtwsjz5g%2BtRuWcKbickM8jsJpzKjoqspg8nheUjAcPAO3Mj9reHpbHQ%2Be%2Blplzd45v9esmIpugsNbKa%2FfgN5NSZ0yZ0nmqALtn%2B96g%2FONA2vR2CNfvCkDnEjmFlDtk2TRYxrQK8aiG0%2FiEqf3lcpID%2FFwhnOorFMBvCnD%2BglhYtGusqmGqdr%2BNXWqhX5%2FkBACbBA2TCIf6qoGeu03CAgU8FHdIYb75%2BAJMi5ec0uZG6kx3jqJgYUV%2BO5k5r7FpMLkfEqQoNrTGZbNWP5Gezaza4B%2FQlZAawXSn2aG8kDl5wUifagwr6SXdasuxUR8iNr7fxWCFnhR2ywsK4PgRdpWJ8ul84u0fsr%2BG3DwvSKSW%2Fn9IbIxNK2UBRBZxY3cVtkhdf5TZbcGs2EINC1V7QQTmrYmhlj9guQAMIq3icoGOqUBQEIz5%2BncnAFwN77kE0TgAyBFHP3FdcrFCuyDCn39M1NIf6QoFxQnaQn5URkUpASs0AcRou59X0kBSkK67etNbpycVlKXbpAgUFUaSQisbNhaNebZcnNRfFTLw2mBZPp8YxZu4tuMfrh0LW%2F4kZhTlB7fDA5V57SLINaOx242akZ8rKciicmn7quDV4ORJhyM6w3yrsI%2BC6uToqasM%2B%2FvmMuN%2BOf%2B&X-Amz-Signature=1dd94ba514e551d8e7211e53c9452beaf7469cbd3d6d9ffde80fac1424bfc8dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

