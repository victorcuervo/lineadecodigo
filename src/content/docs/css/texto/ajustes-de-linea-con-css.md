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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2SOA6PB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWRJDrp%2F6f2IAdln1281m7e%2BxIx%2BXueIoiiapu9gCOYwIgXPi3gSFyACElkDuNTJoRBni14SfZ3QVVwKPoRC8itqkq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDM1BL5h2IX68NbBgBircA9pOIxtmjkeoE1mOMbG34ulxD%2FSL5h%2BSAXFoct%2Ftzh%2FTCPtlJfx2o9fJuVbKyXJ9WD%2FxwdLbtaBred0MbZL%2BhR8OlMwCjAVZt3lDWnoXYcsHE3vyNH%2Fr0Hs%2FzrbTNKBOmaBhRKwNQvzZtamnmRzHt79RlUAp4%2BnIePamByeO%2Bd6M9BoL%2BeaX%2FxRH1MZyfJxOEEPQLsHiz5HiysXn5ob2yxX2rr4GXhrrjkhCgeLBzSgGfQJDXeoUGd9FDZnTrpbvR%2F%2BvDKU%2BKIrXfIsMXYhsMVnyCDNiMgSFHEih42PIHudovAUi01rPTkB53w79ILKi8xSkPWZHoRPGV%2Fgr21qDajOespdz9SJd9fGMghecdpETkXQrj2gZa40gxOQba1Yckgazujw3sFjrCOpHL40CH0JsIkzx6c7d9r4P%2B4JpCLpmGJ3SN0DTnHPNx4qqV0gpPDsl2xzUe9BrgZH5yQuNAYjuJLMeFeUUrFLqKDf%2FCGX%2BRIinEEdRYP8Q9buUydoH8ZAvxHU4tc7STwj2Wzudv9scTmjOyrZZh352bLQQL4j7nF8qO9410QQAeuc2a4KF6afMyh0x6JyukcBm1Z%2FmoPhTmL%2F2MxCKqhkeMoEVz9A7pVnzeFxOyKekyOq5MI23icoGOqUBtW%2B9ldtSPLWbsbl%2FFxw8mNH%2Blm8fyK1u%2FoRGlkqU9qCrUSxZA85LyWRE5%2Fc4lP5Zrs7lYFKcmrbSW9AW%2BMuRxULoa04v5uN%2FhywzztcQYp4fV5eA%2Bd1x5uZ5FAngjDlkMgc2YlVH9lecdQ%2B4a3%2BPiapZ3s0R2YNq%2BihgLczsawuLPlBxSX5mEXMEkqmVkYL4HgLOx5fwzDdsjkE2A%2BfrMmpJeG2G&X-Amz-Signature=49851731901fec261875b7925f23b187ccba6930089ea16c9fd63282a956b956&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2SOA6PB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWRJDrp%2F6f2IAdln1281m7e%2BxIx%2BXueIoiiapu9gCOYwIgXPi3gSFyACElkDuNTJoRBni14SfZ3QVVwKPoRC8itqkq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDM1BL5h2IX68NbBgBircA9pOIxtmjkeoE1mOMbG34ulxD%2FSL5h%2BSAXFoct%2Ftzh%2FTCPtlJfx2o9fJuVbKyXJ9WD%2FxwdLbtaBred0MbZL%2BhR8OlMwCjAVZt3lDWnoXYcsHE3vyNH%2Fr0Hs%2FzrbTNKBOmaBhRKwNQvzZtamnmRzHt79RlUAp4%2BnIePamByeO%2Bd6M9BoL%2BeaX%2FxRH1MZyfJxOEEPQLsHiz5HiysXn5ob2yxX2rr4GXhrrjkhCgeLBzSgGfQJDXeoUGd9FDZnTrpbvR%2F%2BvDKU%2BKIrXfIsMXYhsMVnyCDNiMgSFHEih42PIHudovAUi01rPTkB53w79ILKi8xSkPWZHoRPGV%2Fgr21qDajOespdz9SJd9fGMghecdpETkXQrj2gZa40gxOQba1Yckgazujw3sFjrCOpHL40CH0JsIkzx6c7d9r4P%2B4JpCLpmGJ3SN0DTnHPNx4qqV0gpPDsl2xzUe9BrgZH5yQuNAYjuJLMeFeUUrFLqKDf%2FCGX%2BRIinEEdRYP8Q9buUydoH8ZAvxHU4tc7STwj2Wzudv9scTmjOyrZZh352bLQQL4j7nF8qO9410QQAeuc2a4KF6afMyh0x6JyukcBm1Z%2FmoPhTmL%2F2MxCKqhkeMoEVz9A7pVnzeFxOyKekyOq5MI23icoGOqUBtW%2B9ldtSPLWbsbl%2FFxw8mNH%2Blm8fyK1u%2FoRGlkqU9qCrUSxZA85LyWRE5%2Fc4lP5Zrs7lYFKcmrbSW9AW%2BMuRxULoa04v5uN%2FhywzztcQYp4fV5eA%2Bd1x5uZ5FAngjDlkMgc2YlVH9lecdQ%2B4a3%2BPiapZ3s0R2YNq%2BihgLczsawuLPlBxSX5mEXMEkqmVkYL4HgLOx5fwzDdsjkE2A%2BfrMmpJeG2G&X-Amz-Signature=b4750402f9cd4a48e285546c47bc64595b65ddccbed94e6e50ba33a2af1b6f6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

