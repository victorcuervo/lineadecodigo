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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634JET3CU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDGf3aAMg0%2FYzxPbXrbhGUIkrWc4xuX91XhQw05zaHDAiBexCBYYZs9yxd3CAQoYPD8L5xt0ZdWQErkNOnc5yMeuCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM4CDRobsTkNoX1cwAKtwD3rBZkkeR1lXBcgXzfApoJJCSIUbcKIRpkT8E6vDH5waCs19cdX5%2B9LQlvzOT1MDmoOL%2Bo1Q7b%2Bh%2BZLl3SDlxado81geSDnR2fTdBbA4Vx67bY0Om7%2F%2FwrQ%2BPA2IKNJ0mUWm1otnqykergzJmab%2BVEDt3941XDKHf2blGgDJl6k6FgFymURg%2BOVi6YlyjRCLyVlEPQWGO3EbsyCE3zyEVCjKZyMRWSwftPEb29lud7vzdeDu%2FgCwhYsgOFKrpjnWZV%2BQgRG9XvXFmcDXAGMMRjOg%2FFNrR8ATuDHDDyVSW8Zm1TsmHEVb5EYruYC3ux8ofJr9fyy4kWC3vkhJJROGM8qSYodh0MIx2TEX%2BMwnHGlzKNv2Tpw7uvJivnyaWBrC9mMfp63U48tH4VgSqDH943kBx4g3OBAUfzC2Ag2RKJ46P28kTkhocNbmAd6x%2F5KLYAlmU4p35YVjTg9%2BzrRuBGQ6QUm1ZHLZU9EMhJH8Sk1xwYI4q0%2FE%2FOUF8zC9%2BTQhEqWnFUoVFJPMN21oZZhrM5Co6sElM6eQTRknNRAkPL4o34JyRMvDuPOMViEbd6KpFUDQ9vFPMTmQhfIbaonGOltT1LdIMw46p33C0KNaIHCjuUD7Qd%2FfsGCrc%2Fh4w2M6IygY6pgH8hdI5i5XqJ3%2BdS2cKAsFiHUeRtGOUNsBNOcjCr3mJchcRoj23MBYqIGtH0XCzCD3cgk12HE7Xu9ugfzrE7iyTTjDb5g143fyk5XpefLcACMj%2FA%2Bbm0gtoA4AjdgGX%2FZeNOVGE7UrM8DtEWPKiKDYIPWs%2F8UsdtBqp1NvJONvvjnA%2Blp9t48Hvq0%2BP39d%2F4IANeFs%2F2d4tdj0UmLmcsQ1mA3SnuOU0&X-Amz-Signature=399d25a273b704c5b60a9982628a4753216b6c9b219a7e3eedaaa60f614aba00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634JET3CU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDGf3aAMg0%2FYzxPbXrbhGUIkrWc4xuX91XhQw05zaHDAiBexCBYYZs9yxd3CAQoYPD8L5xt0ZdWQErkNOnc5yMeuCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM4CDRobsTkNoX1cwAKtwD3rBZkkeR1lXBcgXzfApoJJCSIUbcKIRpkT8E6vDH5waCs19cdX5%2B9LQlvzOT1MDmoOL%2Bo1Q7b%2Bh%2BZLl3SDlxado81geSDnR2fTdBbA4Vx67bY0Om7%2F%2FwrQ%2BPA2IKNJ0mUWm1otnqykergzJmab%2BVEDt3941XDKHf2blGgDJl6k6FgFymURg%2BOVi6YlyjRCLyVlEPQWGO3EbsyCE3zyEVCjKZyMRWSwftPEb29lud7vzdeDu%2FgCwhYsgOFKrpjnWZV%2BQgRG9XvXFmcDXAGMMRjOg%2FFNrR8ATuDHDDyVSW8Zm1TsmHEVb5EYruYC3ux8ofJr9fyy4kWC3vkhJJROGM8qSYodh0MIx2TEX%2BMwnHGlzKNv2Tpw7uvJivnyaWBrC9mMfp63U48tH4VgSqDH943kBx4g3OBAUfzC2Ag2RKJ46P28kTkhocNbmAd6x%2F5KLYAlmU4p35YVjTg9%2BzrRuBGQ6QUm1ZHLZU9EMhJH8Sk1xwYI4q0%2FE%2FOUF8zC9%2BTQhEqWnFUoVFJPMN21oZZhrM5Co6sElM6eQTRknNRAkPL4o34JyRMvDuPOMViEbd6KpFUDQ9vFPMTmQhfIbaonGOltT1LdIMw46p33C0KNaIHCjuUD7Qd%2FfsGCrc%2Fh4w2M6IygY6pgH8hdI5i5XqJ3%2BdS2cKAsFiHUeRtGOUNsBNOcjCr3mJchcRoj23MBYqIGtH0XCzCD3cgk12HE7Xu9ugfzrE7iyTTjDb5g143fyk5XpefLcACMj%2FA%2Bbm0gtoA4AjdgGX%2FZeNOVGE7UrM8DtEWPKiKDYIPWs%2F8UsdtBqp1NvJONvvjnA%2Blp9t48Hvq0%2BP39d%2F4IANeFs%2F2d4tdj0UmLmcsQ1mA3SnuOU0&X-Amz-Signature=07ee04949ca8f746ed36d04796b03f7daad8bfd0388126c5e52998a47c1ca25d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

