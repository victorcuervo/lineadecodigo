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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP7ID5PO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFc1HyygHjFBvw51sZu8HCzqhInPO2HxEzVKBbLTl3BYAiBQBWHjUI2uHUFm4Z1COS6Q7tkxK1m9AqjZc1shYf0hoSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMZVQehE3yGaL5uXQlKtwDBB39W0hkUgtZ3AZ%2BQ3SHkwkldWGtA2yZc7SigLOVDLRmaOS%2F5nFJTVNCxWifdR0iVQOJJsJOWR5SSxI94gBuiKvA5RnEoye%2FjqlgZ57bCf0nr2vCRJU8uGSKhd%2BUtO6zW%2FUV1tDjUIRnEJLcHfDdKKXYMV60AMDUe2AwL15TtOmqAcAND%2BHPI0xLjcBcCZ6q9%2Fe%2FZs%2FyTtSuh4tl4xWbAfH%2FWxWYYEq1RPF7GbBeQqr1wcLtUTfmzKThLBPw4bvgTxnydoBGS%2FE97dmd4lAqU1zBg8uCsrKnV3g5Zi6kfrrFNWXUe%2FqpwNjk1RxXbhdpNYPCRRWgK5TXLYyWXXFVJ%2FpRWq%2BK%2Fk0C4koqh7HmOoF54Yq8x3bR4s011pl3oe1TF1lM%2FkYZ%2Bn3g8hvliwr5borj2O%2BXe8e0bfzIc%2BeL8VXDD3zqqp6wH4dKeQSgp8MtB9d63YL25fjBQT%2BXDNjGz3qcJS9OAh0C1FicF%2FTCBzXWfq5BmYfot8reFgriuxpCYoVh%2FXMh5i0HvkwTL6%2B9pfx%2Bb8BsdlszAhmOHu2o1Vv8n4gxDfjhjyNCL3pnVEQtmbzJ5mhfiEVS2RblojySojT3l%2FNAhJ9emAXRpGo4VZ8SA2GMsTjlVJTufLgwvcaKygY6pgGormMvwJpX%2Bop3dT3GGxG6OXPHgPgCeEqhEZtXiz%2FXGF9Ejz4SvqTS%2Bs2Dw5AaarCrBmisw%2B3bErd9rhwMNqZc1VMQ%2BWm1H3a20t%2FFv1pYMnP390BV5fI25Z%2FICDlaTaBM1patSIm1eS9RxdEIi8OgFsPog8Ri10ZTyaieuyw4uqkd31nrSsc2qIJ6RHQSidymEivatmhX8y2YrBEDOyiyhieNtUh7&X-Amz-Signature=fcd588e15295510f6835d68f7ea0ac3675993dd2e9bc7148046ef40a646d838f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP7ID5PO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFc1HyygHjFBvw51sZu8HCzqhInPO2HxEzVKBbLTl3BYAiBQBWHjUI2uHUFm4Z1COS6Q7tkxK1m9AqjZc1shYf0hoSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMZVQehE3yGaL5uXQlKtwDBB39W0hkUgtZ3AZ%2BQ3SHkwkldWGtA2yZc7SigLOVDLRmaOS%2F5nFJTVNCxWifdR0iVQOJJsJOWR5SSxI94gBuiKvA5RnEoye%2FjqlgZ57bCf0nr2vCRJU8uGSKhd%2BUtO6zW%2FUV1tDjUIRnEJLcHfDdKKXYMV60AMDUe2AwL15TtOmqAcAND%2BHPI0xLjcBcCZ6q9%2Fe%2FZs%2FyTtSuh4tl4xWbAfH%2FWxWYYEq1RPF7GbBeQqr1wcLtUTfmzKThLBPw4bvgTxnydoBGS%2FE97dmd4lAqU1zBg8uCsrKnV3g5Zi6kfrrFNWXUe%2FqpwNjk1RxXbhdpNYPCRRWgK5TXLYyWXXFVJ%2FpRWq%2BK%2Fk0C4koqh7HmOoF54Yq8x3bR4s011pl3oe1TF1lM%2FkYZ%2Bn3g8hvliwr5borj2O%2BXe8e0bfzIc%2BeL8VXDD3zqqp6wH4dKeQSgp8MtB9d63YL25fjBQT%2BXDNjGz3qcJS9OAh0C1FicF%2FTCBzXWfq5BmYfot8reFgriuxpCYoVh%2FXMh5i0HvkwTL6%2B9pfx%2Bb8BsdlszAhmOHu2o1Vv8n4gxDfjhjyNCL3pnVEQtmbzJ5mhfiEVS2RblojySojT3l%2FNAhJ9emAXRpGo4VZ8SA2GMsTjlVJTufLgwvcaKygY6pgGormMvwJpX%2Bop3dT3GGxG6OXPHgPgCeEqhEZtXiz%2FXGF9Ejz4SvqTS%2Bs2Dw5AaarCrBmisw%2B3bErd9rhwMNqZc1VMQ%2BWm1H3a20t%2FFv1pYMnP390BV5fI25Z%2FICDlaTaBM1patSIm1eS9RxdEIi8OgFsPog8Ri10ZTyaieuyw4uqkd31nrSsc2qIJ6RHQSidymEivatmhX8y2YrBEDOyiyhieNtUh7&X-Amz-Signature=69bad2880ea90cff6325b095abe2332d784ddfac0ac9781cc1f3c79129dab119&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

