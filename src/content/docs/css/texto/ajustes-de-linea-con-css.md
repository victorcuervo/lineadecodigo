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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX6ZBLA7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Fmm3Cji%2FEikQeKEWI6kSNNfpFCWRwFp5oQCln%2BVhXNQIgIGZUqFh460kjRiRfV1%2Bju35pG%2F7swW4XsFqigTNUXRMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDERc%2BlqHzLu2NRovbircA%2BBP0%2BX8MvY%2F3cqUPqsTTkRinrbWZVfpoKtsNX3gY68lP5a83WrSvQDeJRuWL9%2BbDuBh9moyMVsYWmAgsJAhObeConHA6IDUZWfVCrORoGcKil%2BWuqBhbArcN%2BSgUMx%2FlaFMujHfTRQBnk%2Fig3w%2FnwTJ8lykla1w4azTHLN6pnLy9SXULTDMYYp6AqUVBkcVpl%2Ba%2FTXSuLJXgzXXCSXvBbAimQvcKww4HWH8GxsXTzq5b6SwQfuUdvcbcmsxuUhrkElmgi1kWEhIMADSteFQR%2Bv14FaTEYHcWmQx1IjWzyyTh0Abb1g7yWCvt0%2FgazgLbTYEa5e0M0LdGIb%2FddXW%2F5jaJt%2Bl8rbSMVEmLe5LsP%2BUzlQtsqhxpNcjn0f4x3GgpQhPQTcTaHqL1NTtMgsaifZQ8ger4b4nXA7BwykkPDnRIeRzb5%2BdkTMd%2FIhpKXgdU8Gt6pXsUgRmDIcuXP6%2B8pvKTAt%2FzEfqSoR8VyFwejizvRgj2dLV2R5tAOkuFbM6Dfw12N7vxP6deAH9u%2F3wqgUTUkBqUPOf2lePRI5GlDv3QJ%2Fl9a%2Fs1WQyOb6XIJ66zuRunK8YzmrqIUwXdurvndvNusmjDSkgL%2FrWtUsDgqihOuCCraK2OmNei8UnMKG4icoGOqUB3JuI5%2BquR3px%2FK0AppzR2ymelmDo6iDBfPumH969fuVpnkhFepk00TCeTvCXoJ8bo4XaGjQy%2FLI5F9fWbObtgfrUHOZqyrdBCZB1O0wU0tOyVkq0SzGvZsLyoOiwe%2F9v074h8sEPnGhucV0mFPdzzxBF0LeF69NrsjPP2DF7O34bE6q4nWwHiXarjbSjymNPjlg3c5%2BbJqEDI%2BnfzdL3q2CKBEy6&X-Amz-Signature=e581bd820e6ed5ec59e206af410ede5d7a73aa87fb59ea95251b730a737a9fa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX6ZBLA7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Fmm3Cji%2FEikQeKEWI6kSNNfpFCWRwFp5oQCln%2BVhXNQIgIGZUqFh460kjRiRfV1%2Bju35pG%2F7swW4XsFqigTNUXRMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDERc%2BlqHzLu2NRovbircA%2BBP0%2BX8MvY%2F3cqUPqsTTkRinrbWZVfpoKtsNX3gY68lP5a83WrSvQDeJRuWL9%2BbDuBh9moyMVsYWmAgsJAhObeConHA6IDUZWfVCrORoGcKil%2BWuqBhbArcN%2BSgUMx%2FlaFMujHfTRQBnk%2Fig3w%2FnwTJ8lykla1w4azTHLN6pnLy9SXULTDMYYp6AqUVBkcVpl%2Ba%2FTXSuLJXgzXXCSXvBbAimQvcKww4HWH8GxsXTzq5b6SwQfuUdvcbcmsxuUhrkElmgi1kWEhIMADSteFQR%2Bv14FaTEYHcWmQx1IjWzyyTh0Abb1g7yWCvt0%2FgazgLbTYEa5e0M0LdGIb%2FddXW%2F5jaJt%2Bl8rbSMVEmLe5LsP%2BUzlQtsqhxpNcjn0f4x3GgpQhPQTcTaHqL1NTtMgsaifZQ8ger4b4nXA7BwykkPDnRIeRzb5%2BdkTMd%2FIhpKXgdU8Gt6pXsUgRmDIcuXP6%2B8pvKTAt%2FzEfqSoR8VyFwejizvRgj2dLV2R5tAOkuFbM6Dfw12N7vxP6deAH9u%2F3wqgUTUkBqUPOf2lePRI5GlDv3QJ%2Fl9a%2Fs1WQyOb6XIJ66zuRunK8YzmrqIUwXdurvndvNusmjDSkgL%2FrWtUsDgqihOuCCraK2OmNei8UnMKG4icoGOqUB3JuI5%2BquR3px%2FK0AppzR2ymelmDo6iDBfPumH969fuVpnkhFepk00TCeTvCXoJ8bo4XaGjQy%2FLI5F9fWbObtgfrUHOZqyrdBCZB1O0wU0tOyVkq0SzGvZsLyoOiwe%2F9v074h8sEPnGhucV0mFPdzzxBF0LeF69NrsjPP2DF7O34bE6q4nWwHiXarjbSjymNPjlg3c5%2BbJqEDI%2BnfzdL3q2CKBEy6&X-Amz-Signature=53a298e020c45d2700bb06c6a6e1dab0348a238deee2ce96b16cbd3f4ebbdb87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

