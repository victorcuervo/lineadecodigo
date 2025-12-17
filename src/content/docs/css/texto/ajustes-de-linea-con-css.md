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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH5BR46Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FvCRULD71A9%2BkGT7s9%2BOS5z9Db9WvPRGJ%2BqRteu22WwIgIN51ZL7rFYojI1QSVE8oRJA4yuNmWCoqc%2FckNrtJCuoq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDIVmhdIH8MP7H1cwYircA%2BGrKurhulEzXoiC06mW6gKK0tKXSnUEkfwhQzD8Yw0me%2FNbkUrvXJyiBy%2Fms1L%2BS74G6Vezl6Kzr%2FjFEhwwm24iHY9zQg02NfbNTLqhuULVEh%2BBCEqqEQnAn4hOp8w8cF5Hr%2BL9CeddBjItVUiLxxmpu1iR7ijGW6eXXPd%2Bc4CKdgeoURyUROi%2FT%2Ff%2BdTuW1fAjwdtYnrMey3iM0zIXh%2FsJAGtpuFWVZgOWwUlIGM2EFwkpZpAt0%2FI07PP1vjqrmQXuRmdLybC2RL0H%2BIID5Ivy1vPa0mFbLl1HTfQTbKn%2F2%2FAYme2kC5jwmsJEPsBIgEi3b6iAAgBGOz6XYTl%2Ba3DVS%2BSCovHMF8NrtmM6%2BJnCAj7oByarioHT0PQt0%2BpW1l9msGmMWyd%2FmoSLDR7stt69Ld1DyCVL2R9mm6XPvSGD1xI7Ix5JHDhvZ2m0%2BZVguNOKWnFOaDYMp6u%2BmoQNNCxlUbJib%2BLjVzbBNZ8zPhfcj4OuCuTCh3ZL5VxZ8%2FPxr%2FkcgFAtCdZ5UuygpYra%2Fr4Vszl0ZIzAwvunpAi5nCEMiKgKn2n5Khtj12rwuMohagGRdiSjcQikjKvO1FztZlIXvnTzxsAMsSCwFjkkUNZurkz673nAwW4e2835MPHhisoGOqUBG7Tr1559%2Ft6LY9tIBOFyhmJDb9D4aSsdMsptJ%2BpwZn7nVzyM5hDcQ6J3zx%2FE1To7TQ0Y%2FXpXxXb4HEw2PmsYiI2AEM%2FbFo3aZK9GLEoK6n47bA5BAcWyeOtOUrC5%2FMvUdbNrJZEfT6vhj3QBNlMLLDMZ%2BQtFOq%2FxslWz9WF6L%2F9tTmEfsyINM8Z69oDNYTeIZv2yUMUCh0iQgQByR7Kx5pYKxE2B&X-Amz-Signature=53b1f160677cd2612e9b1c8f81847165b046bd922052ae732517133555132dcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH5BR46Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FvCRULD71A9%2BkGT7s9%2BOS5z9Db9WvPRGJ%2BqRteu22WwIgIN51ZL7rFYojI1QSVE8oRJA4yuNmWCoqc%2FckNrtJCuoq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDIVmhdIH8MP7H1cwYircA%2BGrKurhulEzXoiC06mW6gKK0tKXSnUEkfwhQzD8Yw0me%2FNbkUrvXJyiBy%2Fms1L%2BS74G6Vezl6Kzr%2FjFEhwwm24iHY9zQg02NfbNTLqhuULVEh%2BBCEqqEQnAn4hOp8w8cF5Hr%2BL9CeddBjItVUiLxxmpu1iR7ijGW6eXXPd%2Bc4CKdgeoURyUROi%2FT%2Ff%2BdTuW1fAjwdtYnrMey3iM0zIXh%2FsJAGtpuFWVZgOWwUlIGM2EFwkpZpAt0%2FI07PP1vjqrmQXuRmdLybC2RL0H%2BIID5Ivy1vPa0mFbLl1HTfQTbKn%2F2%2FAYme2kC5jwmsJEPsBIgEi3b6iAAgBGOz6XYTl%2Ba3DVS%2BSCovHMF8NrtmM6%2BJnCAj7oByarioHT0PQt0%2BpW1l9msGmMWyd%2FmoSLDR7stt69Ld1DyCVL2R9mm6XPvSGD1xI7Ix5JHDhvZ2m0%2BZVguNOKWnFOaDYMp6u%2BmoQNNCxlUbJib%2BLjVzbBNZ8zPhfcj4OuCuTCh3ZL5VxZ8%2FPxr%2FkcgFAtCdZ5UuygpYra%2Fr4Vszl0ZIzAwvunpAi5nCEMiKgKn2n5Khtj12rwuMohagGRdiSjcQikjKvO1FztZlIXvnTzxsAMsSCwFjkkUNZurkz673nAwW4e2835MPHhisoGOqUBG7Tr1559%2Ft6LY9tIBOFyhmJDb9D4aSsdMsptJ%2BpwZn7nVzyM5hDcQ6J3zx%2FE1To7TQ0Y%2FXpXxXb4HEw2PmsYiI2AEM%2FbFo3aZK9GLEoK6n47bA5BAcWyeOtOUrC5%2FMvUdbNrJZEfT6vhj3QBNlMLLDMZ%2BQtFOq%2FxslWz9WF6L%2F9tTmEfsyINM8Z69oDNYTeIZv2yUMUCh0iQgQByR7Kx5pYKxE2B&X-Amz-Signature=3b3df44a2d197c2d0a66d71bb0647d91c37acc21e8971c62643fe3ae23a9f2db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

