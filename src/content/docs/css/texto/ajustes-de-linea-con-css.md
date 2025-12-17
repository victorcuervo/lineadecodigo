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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMK7TPMV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCySm26shqbIa5hPm8gVc54f79p5wQyGyL%2BpoQ7%2BrU73AIhAJMGgqTnxziVvAQArGi4Tvw%2BiSmZHi%2Ba2Y3Aa2axEatYKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrG8pouH95xriABRoq3APCiwWIF9eLk0yvI0XtkBuJ%2Fwu0BqhorBTxsBO3Wz1GAmaq5Rcbl0l0gm3%2FV8qgl%2FGLOOXbBVFwlkMIOlG%2Fpl3UIAWBPiLR9yXKDx0CHWhPNTrQU8GLfdCuEUFUdAu4RE%2BQDbdL6QfecRcYXi2XRX9WzjzYea0hpzO3JFCVZjetfWmK077ouTMQvfOvy64awzdTcdE%2ByuNQT1i%2B5SEGC7h0jx7G4AkG4xP77noHmnBhUUPLS7RSLKGEE2hP6errLEut7o9eoAvo07MZC8rzE%2BwpQ74gKoQ33EUQ0o3B3xQf6F604KqbF8QpslUA4pN6or4H%2Fk6zAaZylt%2Fakei7nS5%2FRChko43BAaBhQ0ke4hs00tbi7mPcd%2Bom64bv2NP4Ltpny92mRq2g63KFccRUZU2MBp2xNaHy9ZdPaKwU1zZqGcdQpn5OTpRqlyb7RdJpNYO%2F%2F4IOkSSVSP2PJZUC9stBTdRqMBtO6oCYXfRAjbsw5ZbKFYAwX%2FzKmm%2BOf0ctDp4jHipgiKGfgMc1MH2xoEa3QCkgg1cMjcxMiwFGU32VF%2F7zvWYwFkUe%2BJ3ge4vSQZNATjPgVHO6rXajV2qFBv2yXgPWzNw7RSkLO6y2BD4MMcvAiiSRkk3qxu1HLTCerozKBjqkAVXkCZFckpxqdBWbn9rKofjZqBeUQ%2BI1E%2BKoniS2%2Bgzbq6LV3b2sF%2F8sdAJq8fWK0z19eTi8KvY86mAoALeg7XhtTBbB%2FN8Z4YPZCBy%2Fn1orG5Hdi9NMH4mZ0B2ppaPW%2BiMjYqFlilABGLMYHy%2FoTW8p3XBu4KFvC%2Fy3RTW1xXbu3kj7rhAsCc69%2FePiJ2PdheM1TtN0qH%2FxnVLJGod1Bhb8dyjQ&X-Amz-Signature=b0399ddd73a6938b05f8789c72a24f571728ed980d9c4a1b8357650cb7b10cd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMK7TPMV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCySm26shqbIa5hPm8gVc54f79p5wQyGyL%2BpoQ7%2BrU73AIhAJMGgqTnxziVvAQArGi4Tvw%2BiSmZHi%2Ba2Y3Aa2axEatYKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrG8pouH95xriABRoq3APCiwWIF9eLk0yvI0XtkBuJ%2Fwu0BqhorBTxsBO3Wz1GAmaq5Rcbl0l0gm3%2FV8qgl%2FGLOOXbBVFwlkMIOlG%2Fpl3UIAWBPiLR9yXKDx0CHWhPNTrQU8GLfdCuEUFUdAu4RE%2BQDbdL6QfecRcYXi2XRX9WzjzYea0hpzO3JFCVZjetfWmK077ouTMQvfOvy64awzdTcdE%2ByuNQT1i%2B5SEGC7h0jx7G4AkG4xP77noHmnBhUUPLS7RSLKGEE2hP6errLEut7o9eoAvo07MZC8rzE%2BwpQ74gKoQ33EUQ0o3B3xQf6F604KqbF8QpslUA4pN6or4H%2Fk6zAaZylt%2Fakei7nS5%2FRChko43BAaBhQ0ke4hs00tbi7mPcd%2Bom64bv2NP4Ltpny92mRq2g63KFccRUZU2MBp2xNaHy9ZdPaKwU1zZqGcdQpn5OTpRqlyb7RdJpNYO%2F%2F4IOkSSVSP2PJZUC9stBTdRqMBtO6oCYXfRAjbsw5ZbKFYAwX%2FzKmm%2BOf0ctDp4jHipgiKGfgMc1MH2xoEa3QCkgg1cMjcxMiwFGU32VF%2F7zvWYwFkUe%2BJ3ge4vSQZNATjPgVHO6rXajV2qFBv2yXgPWzNw7RSkLO6y2BD4MMcvAiiSRkk3qxu1HLTCerozKBjqkAVXkCZFckpxqdBWbn9rKofjZqBeUQ%2BI1E%2BKoniS2%2Bgzbq6LV3b2sF%2F8sdAJq8fWK0z19eTi8KvY86mAoALeg7XhtTBbB%2FN8Z4YPZCBy%2Fn1orG5Hdi9NMH4mZ0B2ppaPW%2BiMjYqFlilABGLMYHy%2FoTW8p3XBu4KFvC%2Fy3RTW1xXbu3kj7rhAsCc69%2FePiJ2PdheM1TtN0qH%2FxnVLJGod1Bhb8dyjQ&X-Amz-Signature=1594980f08d31eca95daed85b8a2715f431cce771b9c0c2b24215fe55bdc8374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

