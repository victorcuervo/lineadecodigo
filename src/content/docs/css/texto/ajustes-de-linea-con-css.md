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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWHM3AE5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZ30MJrg3f8jtCuhWFMB9OS0z1pkaC%2FuVPCrs0kKVhjAiEArAXEd2P9iE0Bu0kF6%2FW4dE12RUeq87N%2FS6cHrSAaTCwq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDBdL1%2FIOkqJbf3kMhircAwnldTrIjnlJ5RLNbu0PEwepXMN5LBscGHSWz9LjeKwdkh33mNMa8ndiYdl5WsqmDt4eiIx8CYwNF1zG%2BibbV%2FAAHcHBxtL0LN47C4io75XFIAIbNbRwjakGpkvp7bDlrNxpi7fwo9dXQylaFsvxQ5mj4rnbnVV7DFCV%2BUIQFo3MRW%2BmcO7vaaosrBrdRoBIuFTmM1GC0cgEQ4V1Jax1rA2RMP57%2ByFEn7X2W2GpTddzYAfrlSgr5VHLCXK2jIUzEJ295MVz%2BuP%2BKcSiH2%2Bb84cGehmnTEvejjFBCdYTYTjZJDoMwoEHb%2BN3EwmXUEiHXrc9jfDwCGlnhWWx3mI4Lkw9GzRWqaGJ1%2Fk%2FvTpvOxaTtcA53HltLQ5H3EanFDGuwTpa4sGT22T1nGEuLbSc5WOBFcn2b9kPbUp7FqeSAFHxxdoPD5kQUYPGKxe39bak9f%2Fo6b0U9H%2Fc08r6lHAE6YmwsaA44kAtOppwQWa6DoGeOvrm8oIEIjw0vBzY6TIkWRPm7zmisPIqhp5rz%2Fl0%2BZJT201ZbU9BwloO5iy5M8tIuUvNBW3NHb%2FWAQUZpsrTlbDeG0wueStVVA5LxevER1ni2t1cmCgOSwDVatGhw1WDhXu35DhBXtlMN%2BuuMJTHisoGOqUBLsygmFu%2Fy8M2G214ToZOIrEDEFJ4cbzNLVCYVb2%2BHF1rARx68WCoxKQaPjpO5WML8wQlYNXVWAIxV%2B%2Bw9W6aACQsVL3jzRtfRaCSMMOIQKQhF6iHAMBVs9zLyiCzAqexZBhf2ReB1gyoTfzppQ5%2F3jkC72oc%2Fvx7ARZQazHyLVPhEpGfRLpaD3DlPGSLBFnIUDBGsZWJdGFrPl15VjSYN28fz2ZA&X-Amz-Signature=9b96c6fd1b99338234956e4ee77311911cd80bdaaa67c1e2b9a1208172571348&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWHM3AE5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZ30MJrg3f8jtCuhWFMB9OS0z1pkaC%2FuVPCrs0kKVhjAiEArAXEd2P9iE0Bu0kF6%2FW4dE12RUeq87N%2FS6cHrSAaTCwq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDBdL1%2FIOkqJbf3kMhircAwnldTrIjnlJ5RLNbu0PEwepXMN5LBscGHSWz9LjeKwdkh33mNMa8ndiYdl5WsqmDt4eiIx8CYwNF1zG%2BibbV%2FAAHcHBxtL0LN47C4io75XFIAIbNbRwjakGpkvp7bDlrNxpi7fwo9dXQylaFsvxQ5mj4rnbnVV7DFCV%2BUIQFo3MRW%2BmcO7vaaosrBrdRoBIuFTmM1GC0cgEQ4V1Jax1rA2RMP57%2ByFEn7X2W2GpTddzYAfrlSgr5VHLCXK2jIUzEJ295MVz%2BuP%2BKcSiH2%2Bb84cGehmnTEvejjFBCdYTYTjZJDoMwoEHb%2BN3EwmXUEiHXrc9jfDwCGlnhWWx3mI4Lkw9GzRWqaGJ1%2Fk%2FvTpvOxaTtcA53HltLQ5H3EanFDGuwTpa4sGT22T1nGEuLbSc5WOBFcn2b9kPbUp7FqeSAFHxxdoPD5kQUYPGKxe39bak9f%2Fo6b0U9H%2Fc08r6lHAE6YmwsaA44kAtOppwQWa6DoGeOvrm8oIEIjw0vBzY6TIkWRPm7zmisPIqhp5rz%2Fl0%2BZJT201ZbU9BwloO5iy5M8tIuUvNBW3NHb%2FWAQUZpsrTlbDeG0wueStVVA5LxevER1ni2t1cmCgOSwDVatGhw1WDhXu35DhBXtlMN%2BuuMJTHisoGOqUBLsygmFu%2Fy8M2G214ToZOIrEDEFJ4cbzNLVCYVb2%2BHF1rARx68WCoxKQaPjpO5WML8wQlYNXVWAIxV%2B%2Bw9W6aACQsVL3jzRtfRaCSMMOIQKQhF6iHAMBVs9zLyiCzAqexZBhf2ReB1gyoTfzppQ5%2F3jkC72oc%2Fvx7ARZQazHyLVPhEpGfRLpaD3DlPGSLBFnIUDBGsZWJdGFrPl15VjSYN28fz2ZA&X-Amz-Signature=9d0466a62685207519502ae1b6fced24143884d5191906610080e643830ccc1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

