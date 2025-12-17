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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEYKC3OI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6bYn%2Fbldk90a8DjATXZcyhyKtzyisi3KQ%2FI5BzpFsVwIhAPTjRTZPsLlGXRKDjJC7p%2BDb%2Fxm8E2Mf53%2FmWFjCOZ19KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXYHEjZQBu4QE1Dlgq3AP0qm%2BoeKmshTQJ%2F9cGlBe8UOmss5MBA5%2BYAa%2B7g9EwFjca6MiLcVRDaCAN3e7n%2FUN3IxcEQWOqxP%2F8wNDJ9hml2Y4vS%2BnWO%2FKD6K9XsN3wutatfPz9j0%2FMoarvD1Ps%2BOPKxHX0VPxWdpaBKlP0vK8%2BprBcDYHDsNcX1V5bSbQemIHCS1oiSOxphQycI%2BMIq69ngE52dcfKmwSWekPFVc%2Fkja3uGTsLpvpgbvq5FPcNu1wrKjqpYJf%2BdcL3cTkg2POGcVcqtYWw7%2Fvni0I%2FIkmt%2Bcm3b7vVjiDoH6bRXDc34aZvRh06NQXwB2ZVlwicvlAnTnysDxAijmQNRVm1m6tza4a8A9fKKXovt6iutfPUOoJRNMr5objO0sHvLXjc706h9mKR0Ms531xVNSbCb778EGsJfVi6PE1Zs0a7QlozOSXi0t861QQSt9RFET%2BTL0RypKRMnuQSpOXuq7WmzpAIP%2BkaGefgXKwb9TD9ktvxthHnzthh%2F3gsLT7FKNFtq8u%2BV7SOw8rzPDxkz10uSz7Iq05AczgiNwADHJprXgBjPS8nvta9CWKRSgbopS8J5k14ICdGIJWA4DTWkW15rTdsJWHVvZjP0s606YJU6bMhcnTfcMBDukQbOAYSeDDRrYzKBjqkAcGo%2Bn%2B%2B7Yp6zuxReQhdqI4aT%2BeRjw6UiQoyKyQqeN6dlzBIDcjMT5EXrikHu1khg0fTavLcy9d2isJWZfD0WxjKrDKq5%2Bi8YK%2FMu9wsvtd%2FLlfuZajRbVh3S7wUHn7%2BlPEP%2FNlXabpDtoxXj5Ia4lpwFAwFlgvw%2FitukG16HyhjwQzQ1X4tX1A%2Fr%2FodMNKBc0TgMqr6HHZDLKbTG0Kpz9uv9YL%2B&X-Amz-Signature=612df249e6a37270dc4071550546d47d352388e466996b76c1235aa505edfb85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEYKC3OI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6bYn%2Fbldk90a8DjATXZcyhyKtzyisi3KQ%2FI5BzpFsVwIhAPTjRTZPsLlGXRKDjJC7p%2BDb%2Fxm8E2Mf53%2FmWFjCOZ19KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXYHEjZQBu4QE1Dlgq3AP0qm%2BoeKmshTQJ%2F9cGlBe8UOmss5MBA5%2BYAa%2B7g9EwFjca6MiLcVRDaCAN3e7n%2FUN3IxcEQWOqxP%2F8wNDJ9hml2Y4vS%2BnWO%2FKD6K9XsN3wutatfPz9j0%2FMoarvD1Ps%2BOPKxHX0VPxWdpaBKlP0vK8%2BprBcDYHDsNcX1V5bSbQemIHCS1oiSOxphQycI%2BMIq69ngE52dcfKmwSWekPFVc%2Fkja3uGTsLpvpgbvq5FPcNu1wrKjqpYJf%2BdcL3cTkg2POGcVcqtYWw7%2Fvni0I%2FIkmt%2Bcm3b7vVjiDoH6bRXDc34aZvRh06NQXwB2ZVlwicvlAnTnysDxAijmQNRVm1m6tza4a8A9fKKXovt6iutfPUOoJRNMr5objO0sHvLXjc706h9mKR0Ms531xVNSbCb778EGsJfVi6PE1Zs0a7QlozOSXi0t861QQSt9RFET%2BTL0RypKRMnuQSpOXuq7WmzpAIP%2BkaGefgXKwb9TD9ktvxthHnzthh%2F3gsLT7FKNFtq8u%2BV7SOw8rzPDxkz10uSz7Iq05AczgiNwADHJprXgBjPS8nvta9CWKRSgbopS8J5k14ICdGIJWA4DTWkW15rTdsJWHVvZjP0s606YJU6bMhcnTfcMBDukQbOAYSeDDRrYzKBjqkAcGo%2Bn%2B%2B7Yp6zuxReQhdqI4aT%2BeRjw6UiQoyKyQqeN6dlzBIDcjMT5EXrikHu1khg0fTavLcy9d2isJWZfD0WxjKrDKq5%2Bi8YK%2FMu9wsvtd%2FLlfuZajRbVh3S7wUHn7%2BlPEP%2FNlXabpDtoxXj5Ia4lpwFAwFlgvw%2FitukG16HyhjwQzQ1X4tX1A%2Fr%2FodMNKBc0TgMqr6HHZDLKbTG0Kpz9uv9YL%2B&X-Amz-Signature=2ae526c77bc4494c1e92656ca214a570ba6a124293819f4152009cab6b55ba23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

