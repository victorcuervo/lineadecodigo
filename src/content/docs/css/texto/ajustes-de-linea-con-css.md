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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2WPWC4E%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxV0yHG3t1d4LntulMK9RFfr6oc3nIRUuwclL0RK7R1AiEApxTyb46SjQB3hPHVYrlyWay6ihFYJLPudOZkbJDzazIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDM1KPwJ7gM5zQQOYRSrcA50yhHMHZAjPr9azSmSwoKVTxp1b2n5zDpb8pKjTfPLrCBn9HwuQU1xDUwVbEdWel2OrX%2BNT2ZY1%2BxYLP21ZHfYCijvMB03RbObcg0A0bwypGLnDFue5asuM%2BGUWbfB86ifFv47ETPqaDA4FW93t%2BKconmOAi7iS59%2Fdn3A6At%2FQRE%2FrMzJPWsMhXghv82WBzDy0CptmTif0zJiC%2F5%2FMWkX0885pXWAW6t26vo%2BhASVXQAVlnv4xQjdhTz9PLjkVR6mJ%2BStfmth1jCizWmSWuZkUxryS0dBpIEbj3RaWry0UYBO46ggZ93qPcqr92XqQ3tcxtQPkT1zIILVUaTwMcJduponxKSo1Nb7s%2FvVDvfEEz2xQ6gqSbcnvqFsVu9yRlSsip7%2BGnF48WqP61HgihRJZ29lE1Z4msbI8oULcB4TFTSZygWGIxV8VMHqUiEHR5ICVcfCtcVRkqIgu8%2BXbM%2ByHRkPAqvHpnoGjFp4usaIfGH4PMBXCd7yuApoMLfmMKYVKkmcps3k8E6xZoocdpbt%2BzetTiM%2FesU%2BAtHpsOiTJoS5PpW0%2Bs0QOZJdCBHdYcKj3gpMvzMeyPCCPcsxvJXVt%2BTY5jg0GoBF9EDINNdOXIw%2B1xf1fjdmIYvfFML6qisoGOqUBPJPH9EjAizzPe5B54dj%2BZPVpGC7ZJviTLZKRik%2FETUcIIEFSC2sm5mUrIdE%2FPT3c%2BltQ9P0tQK5UpCrmDtoHW%2FfYGFfsjOD%2BSJl5KguTkGBGdmY5Tro4xZxExrchiaxOq%2B0OqQa9u8yhVMKBzWo%2Bxy%2Fzw87kIVO4%2BKcwf3zWhl%2FEVoK31jbWpeHnFjEsV2yeh7F2oQJnLjQQIJvAllY7BQyWHoO8&X-Amz-Signature=6b7b7ab3875fb8e91dd53ce46aa4300d5f7f993bca74361fc626393db989f9ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2WPWC4E%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxV0yHG3t1d4LntulMK9RFfr6oc3nIRUuwclL0RK7R1AiEApxTyb46SjQB3hPHVYrlyWay6ihFYJLPudOZkbJDzazIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDM1KPwJ7gM5zQQOYRSrcA50yhHMHZAjPr9azSmSwoKVTxp1b2n5zDpb8pKjTfPLrCBn9HwuQU1xDUwVbEdWel2OrX%2BNT2ZY1%2BxYLP21ZHfYCijvMB03RbObcg0A0bwypGLnDFue5asuM%2BGUWbfB86ifFv47ETPqaDA4FW93t%2BKconmOAi7iS59%2Fdn3A6At%2FQRE%2FrMzJPWsMhXghv82WBzDy0CptmTif0zJiC%2F5%2FMWkX0885pXWAW6t26vo%2BhASVXQAVlnv4xQjdhTz9PLjkVR6mJ%2BStfmth1jCizWmSWuZkUxryS0dBpIEbj3RaWry0UYBO46ggZ93qPcqr92XqQ3tcxtQPkT1zIILVUaTwMcJduponxKSo1Nb7s%2FvVDvfEEz2xQ6gqSbcnvqFsVu9yRlSsip7%2BGnF48WqP61HgihRJZ29lE1Z4msbI8oULcB4TFTSZygWGIxV8VMHqUiEHR5ICVcfCtcVRkqIgu8%2BXbM%2ByHRkPAqvHpnoGjFp4usaIfGH4PMBXCd7yuApoMLfmMKYVKkmcps3k8E6xZoocdpbt%2BzetTiM%2FesU%2BAtHpsOiTJoS5PpW0%2Bs0QOZJdCBHdYcKj3gpMvzMeyPCCPcsxvJXVt%2BTY5jg0GoBF9EDINNdOXIw%2B1xf1fjdmIYvfFML6qisoGOqUBPJPH9EjAizzPe5B54dj%2BZPVpGC7ZJviTLZKRik%2FETUcIIEFSC2sm5mUrIdE%2FPT3c%2BltQ9P0tQK5UpCrmDtoHW%2FfYGFfsjOD%2BSJl5KguTkGBGdmY5Tro4xZxExrchiaxOq%2B0OqQa9u8yhVMKBzWo%2Bxy%2Fzw87kIVO4%2BKcwf3zWhl%2FEVoK31jbWpeHnFjEsV2yeh7F2oQJnLjQQIJvAllY7BQyWHoO8&X-Amz-Signature=5636f450ad1a4cc3c5cb857367ff71c8b94c5cd90707c363dc066e987bec0253&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

