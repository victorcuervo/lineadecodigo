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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645Q5QYX4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T161553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBqBBHpbgPy2RLZebpmJ%2BZ23IODQiQQ%2BvgpdRMOef7LIAiBUySY044dNDo9qkUpYQ2AMM4GSMsjtMVEwhzeZInqsSSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1T87Y3fLqdtTg0X1KtwDxQoG56v1sY3yxUvflCLYOhVpqV7SyN5eWBMOzf%2BiL2VxS%2FYXEOlB6jSEjvpSZuXrzJFiMEz6p9%2F0JL2Pu8aWXCHjuL3iK0AutxC7fu9JHfUsqfYIgURVUNojApN9Vl12%2BSdfxIySlZqsDOiWIUE0o4aCh1Hq1dTTIWsF3Tj%2F06dGXwtWwIHvJsUVwRV4qgxZjcGD2W%2FjVcE0%2BuN1fPGr8T3%2FYaEfOsWs6mVF28ar2%2Bk6uPH7wKiUns39g%2FJgfZeVvdxBKnW9dlJ6nIHIaEB%2BLxov0OLMLiMV7TX2BHgjosKDaovQukpiLk%2FM1vLigwMWeHhvIhWUj%2FNUbP%2FeuAyAWgHEtScgp6jDIVkctHlQWizCL7bdm5H0vCNUHzru43gTfS0w5TXON%2BQu%2BN37%2BlITzo7lqDCkDeGD43WOlb0as8aTrp6F8vAHS2A9Ooz%2FWBeQm9AAssAUOnQZ4VFiiiamr8IeZoWwtznEkPKAVkTDdKXL3mQI4wD3uxN3xep%2F4IUcb%2FXVL6V3F5aNzWy6%2FlRdzbJ4Zku3Lc7%2Bf%2FG3UIhh5zxCTWn3QAngmvEaQt76kH6LlkhioHNGl5fGGyeZudJt%2FVG5mk5%2BMyfCSpxz2ETp1ii%2FDp%2FNlVUGaS8Gjt4wqaCLygY6pgHOXIF3S%2FL1iLJ3PebSMhVlY4IFJSBcF6fiIPbI%2Bnih%2FQAtXlF9GKrgLCXWxJKIPwlyDtlbVz%2FSJ1cw6RMY2ctMC6t2vgWOIp9WmOFrK%2BaqVepQT9%2BvgBsPQGG00YBGTpiW8AqEI6bS7iMi%2Fb6iH75dZE6cNE%2FipywPFvg%2B79f%2B1YAYylhDNTGSQffs6UdSPlFJvqIqvtCN6rXM0xp1oEqF6fAHilHS&X-Amz-Signature=7642ca76c3ae220cf97e446c7e78d2988ffb435091cf5517626c92336712d2b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645Q5QYX4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T161553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBqBBHpbgPy2RLZebpmJ%2BZ23IODQiQQ%2BvgpdRMOef7LIAiBUySY044dNDo9qkUpYQ2AMM4GSMsjtMVEwhzeZInqsSSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1T87Y3fLqdtTg0X1KtwDxQoG56v1sY3yxUvflCLYOhVpqV7SyN5eWBMOzf%2BiL2VxS%2FYXEOlB6jSEjvpSZuXrzJFiMEz6p9%2F0JL2Pu8aWXCHjuL3iK0AutxC7fu9JHfUsqfYIgURVUNojApN9Vl12%2BSdfxIySlZqsDOiWIUE0o4aCh1Hq1dTTIWsF3Tj%2F06dGXwtWwIHvJsUVwRV4qgxZjcGD2W%2FjVcE0%2BuN1fPGr8T3%2FYaEfOsWs6mVF28ar2%2Bk6uPH7wKiUns39g%2FJgfZeVvdxBKnW9dlJ6nIHIaEB%2BLxov0OLMLiMV7TX2BHgjosKDaovQukpiLk%2FM1vLigwMWeHhvIhWUj%2FNUbP%2FeuAyAWgHEtScgp6jDIVkctHlQWizCL7bdm5H0vCNUHzru43gTfS0w5TXON%2BQu%2BN37%2BlITzo7lqDCkDeGD43WOlb0as8aTrp6F8vAHS2A9Ooz%2FWBeQm9AAssAUOnQZ4VFiiiamr8IeZoWwtznEkPKAVkTDdKXL3mQI4wD3uxN3xep%2F4IUcb%2FXVL6V3F5aNzWy6%2FlRdzbJ4Zku3Lc7%2Bf%2FG3UIhh5zxCTWn3QAngmvEaQt76kH6LlkhioHNGl5fGGyeZudJt%2FVG5mk5%2BMyfCSpxz2ETp1ii%2FDp%2FNlVUGaS8Gjt4wqaCLygY6pgHOXIF3S%2FL1iLJ3PebSMhVlY4IFJSBcF6fiIPbI%2Bnih%2FQAtXlF9GKrgLCXWxJKIPwlyDtlbVz%2FSJ1cw6RMY2ctMC6t2vgWOIp9WmOFrK%2BaqVepQT9%2BvgBsPQGG00YBGTpiW8AqEI6bS7iMi%2Fb6iH75dZE6cNE%2FipywPFvg%2B79f%2B1YAYylhDNTGSQffs6UdSPlFJvqIqvtCN6rXM0xp1oEqF6fAHilHS&X-Amz-Signature=2e381348aaf5cf0f23b8025f8786bb33967e5d892ea64c710146c5a4dd0574ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

