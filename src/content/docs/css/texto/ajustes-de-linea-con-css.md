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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMZBVDCA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIeRaBC7zXZimCAYJDCeIor0KItZYbj9HM7la7927ZZwIgcK1tDk2xiTKa7goGKmEkMyIFImBFrpPUm2qqnNsjV5AqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLmBnoysnZxHqG68yrcAzDNY48r3PmzcWRGHcZJRocmnHRkK7eZBjtfmnvZllAasLDnIH2MlEQpjvcEmctVgNRbtE2byy6iQ3IOT%2BXiwsW4uAfn%2FEZPNIVJTowCuFQi%2FNa1yD0ntEGNESegnzqfrH5OtOmPubxNnLVQn2O8YyxgSksqwKET1Y5EOvKFJiVYgXRCm4qM9WIiWjAaAqeaUn54sjJ8ta%2BSwQtWMYZ1T1kQBbXqPGGuN%2BxT4KM2lv5mTrgOGeWKw0PRHd%2B%2FisREhS2w87Udsw64LCsYkRFRFf0M75AwKwS6%2BJcwS52rkKSrbjvODNhsz8TBC9uxQ4JvrmFmtMDvswQsfyzwvwHzaEeMY1THXOs2dfZdrEJ0RTbzk7E9njW8u9VUB5Nzjjsajcd5bC8Am8tGhND2KxjehILILx1ZpSNA4BbqlmGr0%2BGFqDVwmzN71LAWzy5TN45ao%2BZq9gXiHXj1rUs%2B8FQj1JDLV9nUwAhWDAO2a3cCHrmoQH40cd5cWp6P4mun4WN1CuDP2rFFVm7wYegj0UU34xYA5nP%2F5ICxbFJQTp1k8f0gdJpzzHD4I7Hd1zJ8PGK6uDRI33g%2FAZ%2FxeHUQik8twTyvAxX9eykKXguU8CS5C76ZlP25FcJJbTKyiqCeMPSBi8oGOqUBwxoM%2F3SHskzJrNNg6%2FjOeXDunCRL5BiyFjYsWcrbyMPo%2BJJhZ%2FdS4BGtRlZMyZPHVRFbfBWo%2BJEx1tiFWBR3%2BIZGBgfzcLiVFKApvCDIOditEbxIe7Fp1T8q%2F9HSDTWO%2FCOCLsLgCFHuGjrYmWYpBdtYqdeLUnY4DzfcSZLoDetC373p0mxBmgOi%2FFJRbOieS8Y6mS0r9%2BCyVzW48FvEy%2FXw7jWF&X-Amz-Signature=82bf79cdf2f9900a885ef15b6c226d974b765dad0c69b6cb179762d4084635e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMZBVDCA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIeRaBC7zXZimCAYJDCeIor0KItZYbj9HM7la7927ZZwIgcK1tDk2xiTKa7goGKmEkMyIFImBFrpPUm2qqnNsjV5AqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLmBnoysnZxHqG68yrcAzDNY48r3PmzcWRGHcZJRocmnHRkK7eZBjtfmnvZllAasLDnIH2MlEQpjvcEmctVgNRbtE2byy6iQ3IOT%2BXiwsW4uAfn%2FEZPNIVJTowCuFQi%2FNa1yD0ntEGNESegnzqfrH5OtOmPubxNnLVQn2O8YyxgSksqwKET1Y5EOvKFJiVYgXRCm4qM9WIiWjAaAqeaUn54sjJ8ta%2BSwQtWMYZ1T1kQBbXqPGGuN%2BxT4KM2lv5mTrgOGeWKw0PRHd%2B%2FisREhS2w87Udsw64LCsYkRFRFf0M75AwKwS6%2BJcwS52rkKSrbjvODNhsz8TBC9uxQ4JvrmFmtMDvswQsfyzwvwHzaEeMY1THXOs2dfZdrEJ0RTbzk7E9njW8u9VUB5Nzjjsajcd5bC8Am8tGhND2KxjehILILx1ZpSNA4BbqlmGr0%2BGFqDVwmzN71LAWzy5TN45ao%2BZq9gXiHXj1rUs%2B8FQj1JDLV9nUwAhWDAO2a3cCHrmoQH40cd5cWp6P4mun4WN1CuDP2rFFVm7wYegj0UU34xYA5nP%2F5ICxbFJQTp1k8f0gdJpzzHD4I7Hd1zJ8PGK6uDRI33g%2FAZ%2FxeHUQik8twTyvAxX9eykKXguU8CS5C76ZlP25FcJJbTKyiqCeMPSBi8oGOqUBwxoM%2F3SHskzJrNNg6%2FjOeXDunCRL5BiyFjYsWcrbyMPo%2BJJhZ%2FdS4BGtRlZMyZPHVRFbfBWo%2BJEx1tiFWBR3%2BIZGBgfzcLiVFKApvCDIOditEbxIe7Fp1T8q%2F9HSDTWO%2FCOCLsLgCFHuGjrYmWYpBdtYqdeLUnY4DzfcSZLoDetC373p0mxBmgOi%2FFJRbOieS8Y6mS0r9%2BCyVzW48FvEy%2FXw7jWF&X-Amz-Signature=4ff5ab517c7e3c2c6c95b8d033426dbada56c4cb31777d6a3e947c557df92ef3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

