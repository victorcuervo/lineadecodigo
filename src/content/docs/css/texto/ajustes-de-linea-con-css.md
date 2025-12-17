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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVBLDM2G%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXYZ%2F1WqjnoD85PxNK8EOiULDicEnPdNAEqBK50vfliAiEAuV1gPqvGKdl6booQXFdNkDmkm%2BrtS6ByAf3t0JWW0cgq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDF04SaKNBRy9sj9QeCrcA8Jb4JynRsj56bFonhz2NICZdZttC02WEE8NkugY7ajRLJ0tDuMm8%2BtMUvYzP518J8wv0Uffb2OhyZq3WCRxzqX5swcHV0Qouhlto7MImxtREP4AXYdXlTWaVO8LvyPJh%2BpfV86Gt2r6ODpcH9k0SaD9gHFHgKJRMyiuhQpKaHniyNJowdtAPoI2zaWiWoiYLvadsRhztTCeodGF8m4QnZiih7nr%2FHtPTTqdTzEsrfg0xlVTzqrJdBQxmBELML6nWOK3kQtgT0UfvqMN8D2fiCB6yP8MAlqHtXio3W0%2BGNmIx9pEDklyWRG3KdGKzKJVkojYueqsafX4Fbw7vTih%2Fb0IozElWIdA2u3dhO9d6NI4NBuysOx23rovvi3m9LJfFB2uJKQDzxYMfgjcQoI8ZkBA1d0XLrtleLr4X0SwgvOfqnKhPyBpMrVfHC3xreFCUAPb1coRrMAWg1WtEmrcAsJ1Klh%2BDa2oIgNEDUrEV3Ll8c2JFGdYIaNvLSgeb3Sn31adlINDDo%2B5gDyZL8Fo%2FeWPCIlhxX3s2ZxQkyTRTIFJxBdrxBH1EyNvSTWauAOQZMpoIRGM52J%2BexpbjZ%2F863SefH5%2F5pxmEUq45v0FEL%2BzwuXWruu%2FPJcGaTlsMJacicoGOqUB1ppfbNR6HUU7eVvvm7JVCVRdyeIOmDgmslZNdb645XgJeR8pWiK3SQfMXX54gN6GKdDfKwnOQTvgltlD81zxUDQabQWK1iw4ph%2BCiun72k7hdBogBhgevroc%2BiWLulHXwqPUaA69SCxhXKKaEMk6WmOG%2B4aY4N0eNPD8uwUy0GcUwzBSzEYbOQV8vUNGwg1IFD6kCrnVcioRCFPsjoM7elJp3lG3&X-Amz-Signature=7a54c3572fb2dcffce0a36d7b33896c06c63508c22c624797059b27e5d8c1ec9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVBLDM2G%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXYZ%2F1WqjnoD85PxNK8EOiULDicEnPdNAEqBK50vfliAiEAuV1gPqvGKdl6booQXFdNkDmkm%2BrtS6ByAf3t0JWW0cgq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDF04SaKNBRy9sj9QeCrcA8Jb4JynRsj56bFonhz2NICZdZttC02WEE8NkugY7ajRLJ0tDuMm8%2BtMUvYzP518J8wv0Uffb2OhyZq3WCRxzqX5swcHV0Qouhlto7MImxtREP4AXYdXlTWaVO8LvyPJh%2BpfV86Gt2r6ODpcH9k0SaD9gHFHgKJRMyiuhQpKaHniyNJowdtAPoI2zaWiWoiYLvadsRhztTCeodGF8m4QnZiih7nr%2FHtPTTqdTzEsrfg0xlVTzqrJdBQxmBELML6nWOK3kQtgT0UfvqMN8D2fiCB6yP8MAlqHtXio3W0%2BGNmIx9pEDklyWRG3KdGKzKJVkojYueqsafX4Fbw7vTih%2Fb0IozElWIdA2u3dhO9d6NI4NBuysOx23rovvi3m9LJfFB2uJKQDzxYMfgjcQoI8ZkBA1d0XLrtleLr4X0SwgvOfqnKhPyBpMrVfHC3xreFCUAPb1coRrMAWg1WtEmrcAsJ1Klh%2BDa2oIgNEDUrEV3Ll8c2JFGdYIaNvLSgeb3Sn31adlINDDo%2B5gDyZL8Fo%2FeWPCIlhxX3s2ZxQkyTRTIFJxBdrxBH1EyNvSTWauAOQZMpoIRGM52J%2BexpbjZ%2F863SefH5%2F5pxmEUq45v0FEL%2BzwuXWruu%2FPJcGaTlsMJacicoGOqUB1ppfbNR6HUU7eVvvm7JVCVRdyeIOmDgmslZNdb645XgJeR8pWiK3SQfMXX54gN6GKdDfKwnOQTvgltlD81zxUDQabQWK1iw4ph%2BCiun72k7hdBogBhgevroc%2BiWLulHXwqPUaA69SCxhXKKaEMk6WmOG%2B4aY4N0eNPD8uwUy0GcUwzBSzEYbOQV8vUNGwg1IFD6kCrnVcioRCFPsjoM7elJp3lG3&X-Amz-Signature=f13d7bb338a5152e9acc484e0095b8df0b5a9ccc0c82600430ee0a2702b2d4e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

