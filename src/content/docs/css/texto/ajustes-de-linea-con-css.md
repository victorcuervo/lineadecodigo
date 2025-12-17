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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFRPESO3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBItK1Zpv%2BhVbKNN6TxozSXeTp0NkFTYiiUlXqLWLIyGAiBE4Vi9SupV7UwaxyEQTUalTx4L1CxLLZ8FL1QKKOCjTir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMqeCH3BKvvjFsE8zgKtwD6SdU%2F0UB9P30dULqBZzkKUGerMjG3QHTqO3sFUBlhxGkMeIipxeon2Zcpf6BkQgkEdUmkX89SSiiUmN0UWhtEPgIZ5pGRars5kCIFiBiuutGDWwqZ2Buc9Yr4AHGQ%2FlZB870978bWaUaGZF6hlCboj1Q%2B70PVEwuk%2FP7%2BRQKdUWfrbuMG21Kemm5Rmk8oKGNjwduapuMiYEDLSK43R1FHmelY7sZYe4Lv7fnMqaixInaJKuaxaO257cwmu5XpMq1qC9cMBrEbnx0mS5qST1dfg6E7XZIxrIoSX6w8ydb0grPclMyvTGdMZwej1kukiyOxpCSIqAMeFHEZBDdSluce6pOSGNmvdfYbi3xi69TxML6Doswn9e0yko7NXV5T0d0vwqBX0cnMokRJDgapatULqOo8GJ%2Bf2anhU1P1nZBljDognFpqdP8Cip04dzZdm4cKRvU28g1XOt%2F88sG83BQrz3mpgn2dHOdtlhMa9cVFN9Baj2xwM4FKuhfpJmZfxRCLc6G%2B0KQmYqJf00%2FSqWdx%2B%2BGAo%2BB0SIKyAhd8nThWP1g%2Be76GAHmk7mKTUXbNfIP00z4ncs4MHGMPgGNDA3hMogucar33sOAxZCD9Moc8ftq2CuLwXR7eh%2Bp6t0wzo6KygY6pgFUsTPVNwqyvqjN66ME0XUbZ1f8j06QKJgHdJSiIK38xwsoCKnIyfDvdSGFcS2ckjf%2FGtvtX1v04eaZ4%2FPHxqEs6iQLU4VhUT4ShXtQO5bPNjXbDSvhUTq2NkkN12IdK1nSgKHKkv6%2Bdc9VOt9dGQw40zj4oia31w2Ajcc9XlhNrVy6yKr6N%2BO8gRRn8L%2Bqng%2BLSLeXc0O7Gip9ffOP5cKJGD5qDX8H&X-Amz-Signature=303c3714d45f9b0e7c1791bcb9d9e57a0522319f920c43c6e24ede7e095d1932&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFRPESO3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBItK1Zpv%2BhVbKNN6TxozSXeTp0NkFTYiiUlXqLWLIyGAiBE4Vi9SupV7UwaxyEQTUalTx4L1CxLLZ8FL1QKKOCjTir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMqeCH3BKvvjFsE8zgKtwD6SdU%2F0UB9P30dULqBZzkKUGerMjG3QHTqO3sFUBlhxGkMeIipxeon2Zcpf6BkQgkEdUmkX89SSiiUmN0UWhtEPgIZ5pGRars5kCIFiBiuutGDWwqZ2Buc9Yr4AHGQ%2FlZB870978bWaUaGZF6hlCboj1Q%2B70PVEwuk%2FP7%2BRQKdUWfrbuMG21Kemm5Rmk8oKGNjwduapuMiYEDLSK43R1FHmelY7sZYe4Lv7fnMqaixInaJKuaxaO257cwmu5XpMq1qC9cMBrEbnx0mS5qST1dfg6E7XZIxrIoSX6w8ydb0grPclMyvTGdMZwej1kukiyOxpCSIqAMeFHEZBDdSluce6pOSGNmvdfYbi3xi69TxML6Doswn9e0yko7NXV5T0d0vwqBX0cnMokRJDgapatULqOo8GJ%2Bf2anhU1P1nZBljDognFpqdP8Cip04dzZdm4cKRvU28g1XOt%2F88sG83BQrz3mpgn2dHOdtlhMa9cVFN9Baj2xwM4FKuhfpJmZfxRCLc6G%2B0KQmYqJf00%2FSqWdx%2B%2BGAo%2BB0SIKyAhd8nThWP1g%2Be76GAHmk7mKTUXbNfIP00z4ncs4MHGMPgGNDA3hMogucar33sOAxZCD9Moc8ftq2CuLwXR7eh%2Bp6t0wzo6KygY6pgFUsTPVNwqyvqjN66ME0XUbZ1f8j06QKJgHdJSiIK38xwsoCKnIyfDvdSGFcS2ckjf%2FGtvtX1v04eaZ4%2FPHxqEs6iQLU4VhUT4ShXtQO5bPNjXbDSvhUTq2NkkN12IdK1nSgKHKkv6%2Bdc9VOt9dGQw40zj4oia31w2Ajcc9XlhNrVy6yKr6N%2BO8gRRn8L%2Bqng%2BLSLeXc0O7Gip9ffOP5cKJGD5qDX8H&X-Amz-Signature=e5bcc0c77371fb5ad66e8cb07a4eb1d7222356a88d7a3373096c0fd5a449e156&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

