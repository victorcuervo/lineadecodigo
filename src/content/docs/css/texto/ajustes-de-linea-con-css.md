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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HJMP66H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMu6E%2FMP5PdXw7jPFNQMi4zQGT0AoJ%2F291rs%2BbI1CVOgIgHIiPnGgSIpJVUjU32Dw%2FnzVu0NE0NGLLUP6uveGo10sq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGcvmZx23sQn2QtSPircAztM77VTlFK9nx3JxmLO9nBRJh7xTxV220z8KK6wlcLbJe0x0j3F468Bh7GbBzbNL1V4ZU2QF%2FY7IpbpjZSBZetaI%2FjPPMZbRhHYPUnbhxBKNvKndIM40QPG%2B%2FkWqBd6d2sQcn03Rz3JJHbRL3awn05kq9xjS439HgmpTXYa3Col60dphlp5IGKZj2YxqwuRGib26sIP%2FfwqlU4Ob7Umw3BdnRQJ1k1WQlhp%2BD4%2BqunNXlABV5ULX1wfX%2BCdBt2lp9ntVY2cW1CHzl9OY1jUtTw5bU9%2BDKX89%2BSPPgmjxxcTOaXW3EdY3MXlQX8n6ROV6x2AnpLE4LDApkPGgFBW2k3VcS5FBroKL6M8JPkrugoDfhJXxp%2BuvOfDTRRI7nUB6T9NatNFqn9v3q4OnJvqyU3yY6t2FLgLyHfAwuyc8cZq%2BLXWYZtLw39xbiKZ%2BOvN9dUsI8IkJZ6cKjCVDQGsuefvDQMhc1MV3Ni%2F%2Bq1%2FXaIVIHl8XQR0BWf6aOa%2BVxLzGWd3Fn0dZFi7FtpV8vYmMFsX1ReSqN5LqRSw85aTO%2BGFRRDogZPyx8DUu%2BEwoUgQ7nmkL8hhq2EUAXl9SUoy%2FVgF1WK2tUk0sipxwCsiSExKldL%2BGXwKsj2D3dskMMz7h8oGOqUBINJpWCi4BolfZj%2FK80slbwRFpzZWj85IBeQ6iPr%2Fr%2BqOt%2B45V%2BICy1nMC3I5fJWCP8%2BBtSsMKHfFemqbBPzqHSydX4QVFzol9tgweRg4yN43fATaHPxJJ4Z25bjLYqYLPsYejJtFnos1fFbaa0IOFf7fvw4U3RKl%2Bu9eeKccW1c53fE7wkgJ7WEjtQeDHVCmGPC%2BU%2BfnI2uo1KTlw24w5LSkIdUM&X-Amz-Signature=e6b5256b38b29d5a05be4fcb99d5d4369a645692cd2940c458ce30ac17d1677c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HJMP66H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMu6E%2FMP5PdXw7jPFNQMi4zQGT0AoJ%2F291rs%2BbI1CVOgIgHIiPnGgSIpJVUjU32Dw%2FnzVu0NE0NGLLUP6uveGo10sq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGcvmZx23sQn2QtSPircAztM77VTlFK9nx3JxmLO9nBRJh7xTxV220z8KK6wlcLbJe0x0j3F468Bh7GbBzbNL1V4ZU2QF%2FY7IpbpjZSBZetaI%2FjPPMZbRhHYPUnbhxBKNvKndIM40QPG%2B%2FkWqBd6d2sQcn03Rz3JJHbRL3awn05kq9xjS439HgmpTXYa3Col60dphlp5IGKZj2YxqwuRGib26sIP%2FfwqlU4Ob7Umw3BdnRQJ1k1WQlhp%2BD4%2BqunNXlABV5ULX1wfX%2BCdBt2lp9ntVY2cW1CHzl9OY1jUtTw5bU9%2BDKX89%2BSPPgmjxxcTOaXW3EdY3MXlQX8n6ROV6x2AnpLE4LDApkPGgFBW2k3VcS5FBroKL6M8JPkrugoDfhJXxp%2BuvOfDTRRI7nUB6T9NatNFqn9v3q4OnJvqyU3yY6t2FLgLyHfAwuyc8cZq%2BLXWYZtLw39xbiKZ%2BOvN9dUsI8IkJZ6cKjCVDQGsuefvDQMhc1MV3Ni%2F%2Bq1%2FXaIVIHl8XQR0BWf6aOa%2BVxLzGWd3Fn0dZFi7FtpV8vYmMFsX1ReSqN5LqRSw85aTO%2BGFRRDogZPyx8DUu%2BEwoUgQ7nmkL8hhq2EUAXl9SUoy%2FVgF1WK2tUk0sipxwCsiSExKldL%2BGXwKsj2D3dskMMz7h8oGOqUBINJpWCi4BolfZj%2FK80slbwRFpzZWj85IBeQ6iPr%2Fr%2BqOt%2B45V%2BICy1nMC3I5fJWCP8%2BBtSsMKHfFemqbBPzqHSydX4QVFzol9tgweRg4yN43fATaHPxJJ4Z25bjLYqYLPsYejJtFnos1fFbaa0IOFf7fvw4U3RKl%2Bu9eeKccW1c53fE7wkgJ7WEjtQeDHVCmGPC%2BU%2BfnI2uo1KTlw24w5LSkIdUM&X-Amz-Signature=4a03399c5dc9e631dee25a8ae82820c4d3a016091827b21585dcfeabe1ff51e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

