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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PNARKYA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDshy5hCWb9PQhe6m7WtCG1gA7UCeYqV%2B%2FvQ%2FAJNpX9lgIgJoW7rNGP3r34IciZW7twnSa4AUWYLJdw34Ob%2FyAS%2FiIq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDIW7%2B8uvs2IQUeCLTCrcA865PH0gTXdyRBK%2BhXDGwD%2Bm23DeKECR2aAVveoBdKXJCOhcL0zHOG2OF2lwqqTxTyWmKhSOOHcvbznQazFZeBuXKGRP8gTjd2bd479SvCOZOgwKBWAQrIWSvF%2FWmkmBUDawSRWgLvkrv7egotPart5BP4VDtCFIigX6SSf4hjXR3xmttcjx2XH3Z5Vp653DwtvwPMSd2oOQFMCJovh9YpOw%2B1P9ZcTsbO0Kg1zvEKZ5fnNbpcnjboVYy4ytR%2B%2FsEm06QTZ6UIHWqz3u4tv49L11u1kJWuA0zm0Yil6fPm1dW53hRrsYvuPdeKay8vjZX38a0StoQg2T2DMaWgkBxTSVS8cXafEknqsjJTC%2FMLXGf017IXaRHlfwc9SLC2D7BJuloYlG%2BU8f1UHdXFRw8%2FOmNGtG9Iky1vWG0s2f2Srk%2F61E16T3QQOPMZ9spkwq7suVmWKCjzO%2BXsoTZMJvxvWKlWWiBbtML1OhhPpnyYrpF4y88sG4xMt4r20f1tsd%2FXlA7LyaIGga1NmYxiet4%2BUZoRZG2ydHxF5Okjkr3wBq4ZxsBDiJkd%2BrPnq%2FJT9nvfvj1xSo3OneghJkEMx3FUJHqwXcQh%2FXn5%2Fl%2F5QMGS6sHYgMHs2xuvLNsiM5MOeWiMoGOqUB9LvllVeuub6xwDkm1XUrD5Q%2BxU5ly%2FWsgOY3yFdG4W5WBk1jdPaRrVMbPGqw0UOIwy%2F7dqVAMD1fIleLLXEZkjx3j03wk0jFjXDpsPuFtIdVTX1W28GaKnCQjiwi4QPbAHD3gmMKiIUILP%2BkCdQsrVrMuWRarK4bmYMwUStbmDXJ7GFhFdda4HNuTaCIyWekjrN%2FJKF81BBmaruvLmZ6o2AiEjaC&X-Amz-Signature=dc84ff0682325337364b747a418ffbf679245f1c0b74f559474a5185e3ec43f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PNARKYA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDshy5hCWb9PQhe6m7WtCG1gA7UCeYqV%2B%2FvQ%2FAJNpX9lgIgJoW7rNGP3r34IciZW7twnSa4AUWYLJdw34Ob%2FyAS%2FiIq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDIW7%2B8uvs2IQUeCLTCrcA865PH0gTXdyRBK%2BhXDGwD%2Bm23DeKECR2aAVveoBdKXJCOhcL0zHOG2OF2lwqqTxTyWmKhSOOHcvbznQazFZeBuXKGRP8gTjd2bd479SvCOZOgwKBWAQrIWSvF%2FWmkmBUDawSRWgLvkrv7egotPart5BP4VDtCFIigX6SSf4hjXR3xmttcjx2XH3Z5Vp653DwtvwPMSd2oOQFMCJovh9YpOw%2B1P9ZcTsbO0Kg1zvEKZ5fnNbpcnjboVYy4ytR%2B%2FsEm06QTZ6UIHWqz3u4tv49L11u1kJWuA0zm0Yil6fPm1dW53hRrsYvuPdeKay8vjZX38a0StoQg2T2DMaWgkBxTSVS8cXafEknqsjJTC%2FMLXGf017IXaRHlfwc9SLC2D7BJuloYlG%2BU8f1UHdXFRw8%2FOmNGtG9Iky1vWG0s2f2Srk%2F61E16T3QQOPMZ9spkwq7suVmWKCjzO%2BXsoTZMJvxvWKlWWiBbtML1OhhPpnyYrpF4y88sG4xMt4r20f1tsd%2FXlA7LyaIGga1NmYxiet4%2BUZoRZG2ydHxF5Okjkr3wBq4ZxsBDiJkd%2BrPnq%2FJT9nvfvj1xSo3OneghJkEMx3FUJHqwXcQh%2FXn5%2Fl%2F5QMGS6sHYgMHs2xuvLNsiM5MOeWiMoGOqUB9LvllVeuub6xwDkm1XUrD5Q%2BxU5ly%2FWsgOY3yFdG4W5WBk1jdPaRrVMbPGqw0UOIwy%2F7dqVAMD1fIleLLXEZkjx3j03wk0jFjXDpsPuFtIdVTX1W28GaKnCQjiwi4QPbAHD3gmMKiIUILP%2BkCdQsrVrMuWRarK4bmYMwUStbmDXJ7GFhFdda4HNuTaCIyWekjrN%2FJKF81BBmaruvLmZ6o2AiEjaC&X-Amz-Signature=54d3f480483744e3f094356fbc04f31617a53e646d3d9868b73c0f0859446667&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

