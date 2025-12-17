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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYAOVSFR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGj%2BF2a9GDx7I2ULi654zbgTL43GZX4oDT%2FhZpbP1hxcAiEAxZfa6Ibjlhswf3e9LQBJ2ZYFUHK70fQ2gkEU4CZtRdoq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDNZ1Csnbi1HQVAjjPyrcAywvXwx1t4JjpQOLUV8hIBtge8rvgQEyx7SgmW2jkMae4WsaUOwFMEfApeo7RFCRho8dRotpWCxehxr7f9jGBPG8jAMBt5IEYl6%2BnkOsTB0eOQt34PTKCyOdWwDTgEbIhuRZufUGQeEKOBDdB22qh5HuE7lVLehp%2F3Oho5KUBldcvVxptf5VeOYycCK8b%2FA4wp%2Fs0kg0l3BLKnR6Spc5nIpMIGEjhs%2F5V9xQBrRfq8lAWOdea3T%2BtVRcD7agdl1IUZ3DiqeqsMCIVTPmzwJVRuHE57U%2BBRQpS%2BHfdIaHjrj%2B%2BVOspvoTuCpn534KjRBbRFmy51ij371dYrkbTr0jYU1D%2Bo2Tp3yz3oJ0M51QiTw%2FxP3p%2BGh99hG9iTcZwL2ieVoS%2B4Q9ouTslhQ1pnpos7wu2JmCaWXuhVXFkYWroy8jKmWK1zUwsCp0WsX4O1hRLpcQSf9p4Ew8azuiNj3Qf3Bhbz2dnI7RvOLGS56LUdl4xRlNxZPUF75toFXKK95OvBhB06NzBQgWe9EZsZRC%2BP3TM70I280zlMQ%2BZGsW%2F%2FvNOuTSG2fJVSDhDGQYlpUh1LTHH12u2Ul2CuNlTYUKfAseC04Hbot4aAH6bnEY%2F2IdExTf9cZrxIGgpFmWMLrSicoGOqUBVZLaMtXZui%2Fnh3DICQuBoof4t0XDAkIWy0i2eT%2BZZZg6A1UwsqlQQBGl8mb6bMCSUtef8zM4hNCKKJdM1g02Rl6P2YyaoTRW1jWwQ%2Bjn5xxzqutAvu2hGKBJoaW0%2BtSp39oN29rKmovqtnZXz5hJtHE%2Fm9sOoUkvWERTeYpooHH%2BJEywSFSl5G40boIBfwnhvSBNdYfNYXuRs4po3jzM5DAvs3f1&X-Amz-Signature=293ce718d1fa1360ef1e6e7d2a73452f92c0a908d9c7fd4671af5f756dba0d00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYAOVSFR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGj%2BF2a9GDx7I2ULi654zbgTL43GZX4oDT%2FhZpbP1hxcAiEAxZfa6Ibjlhswf3e9LQBJ2ZYFUHK70fQ2gkEU4CZtRdoq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDNZ1Csnbi1HQVAjjPyrcAywvXwx1t4JjpQOLUV8hIBtge8rvgQEyx7SgmW2jkMae4WsaUOwFMEfApeo7RFCRho8dRotpWCxehxr7f9jGBPG8jAMBt5IEYl6%2BnkOsTB0eOQt34PTKCyOdWwDTgEbIhuRZufUGQeEKOBDdB22qh5HuE7lVLehp%2F3Oho5KUBldcvVxptf5VeOYycCK8b%2FA4wp%2Fs0kg0l3BLKnR6Spc5nIpMIGEjhs%2F5V9xQBrRfq8lAWOdea3T%2BtVRcD7agdl1IUZ3DiqeqsMCIVTPmzwJVRuHE57U%2BBRQpS%2BHfdIaHjrj%2B%2BVOspvoTuCpn534KjRBbRFmy51ij371dYrkbTr0jYU1D%2Bo2Tp3yz3oJ0M51QiTw%2FxP3p%2BGh99hG9iTcZwL2ieVoS%2B4Q9ouTslhQ1pnpos7wu2JmCaWXuhVXFkYWroy8jKmWK1zUwsCp0WsX4O1hRLpcQSf9p4Ew8azuiNj3Qf3Bhbz2dnI7RvOLGS56LUdl4xRlNxZPUF75toFXKK95OvBhB06NzBQgWe9EZsZRC%2BP3TM70I280zlMQ%2BZGsW%2F%2FvNOuTSG2fJVSDhDGQYlpUh1LTHH12u2Ul2CuNlTYUKfAseC04Hbot4aAH6bnEY%2F2IdExTf9cZrxIGgpFmWMLrSicoGOqUBVZLaMtXZui%2Fnh3DICQuBoof4t0XDAkIWy0i2eT%2BZZZg6A1UwsqlQQBGl8mb6bMCSUtef8zM4hNCKKJdM1g02Rl6P2YyaoTRW1jWwQ%2Bjn5xxzqutAvu2hGKBJoaW0%2BtSp39oN29rKmovqtnZXz5hJtHE%2Fm9sOoUkvWERTeYpooHH%2BJEywSFSl5G40boIBfwnhvSBNdYfNYXuRs4po3jzM5DAvs3f1&X-Amz-Signature=1f8d02d5d72f9fee8222cbc0b87ef95cfb1af51abace111ff5bcc5c3c4dc42b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

