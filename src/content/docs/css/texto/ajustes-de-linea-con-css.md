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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWN6FWNA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx%2FjVWIKi4d%2BL2uGjExrpRK93V18LVoZ%2FaZ9o1ArL55AIgd34nCmUUIlnZQAbPaWDOsvPJtkiM550581WLS1GLKwoq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDBl7iNIB4EffQ5n5fircAzpchKRT3DKhneRAoyr7r1WFsm55WTF00%2BNa1Y3qBYyNwF8cGJ%2Bb2aGHi44eYq3NKOHLmhkLbJZqShA0UbdK%2Fk2JG0nMpnsIqnlj%2BbWLD8zChstcgR7tjs85nAJitb89amZF6HriOJnvYFIoD6o0kLbotiyZS6mH3x9C%2BqXSDxfPwdtlvBYqFB6Od7tckFyzGR62TipiQKWZtCkgMIQ7xC5hwHqq2eiliutUAvBq4aGW4I6eG0Clv5VwS%2FWmRizadAYt9NaI7pwrscrclC31mTJBGqXVN23hJrWe1FlrNC24q%2BPnT7ie6fvIk3acD7PrYsr8GzDZtd2tsRbRHRUE9VTHnVtS%2BaC3IZ0plvNvnKLl5D%2Fwal8dTYHoXwmuznYTRjCDPVViH0ueMRr%2BLN452QRL%2B1HhRp4FOCqwVwOZNNzKLjlAkrFyxG2YOaV3Bwlvz2B63hyyLDW7q%2B4DlK5ztvynSXr675pfuqOcpDiktFCCfRImN7a0MU0dtYQGBjB0wrP9urNT9RL%2BJtfIvEPCmW%2FHRQX4NWsC%2FH9GqHq%2BRMFX%2BFVuDIje5dS3%2FLlBQlEl59%2BRVTQAarSdZf3GFhQuSHnKak2UVi5GiEYvWg5Rg6rmuObjDR7ACrFhvJqgMIKziMoGOqUBt8V5teu77l5MKT%2FS4fCQsPvZPxViSXhGsO8oUl49BWYF%2BCfL65SB2ZQO4B%2BV8ms9H8l6C%2Bv7scW5bQuRk1sm%2BhiR99ewc%2B60AbKrdxDTUkt0lYfxAfp7Q04NcAtg%2BV8FxcgVIy31NPiM%2BfOzy2hFkZXhGszhRlibFoX3XKpn5Fy5gWj2ENMKsaZSPNrtVJ3wep9KyQYuAis95CKz3MLvJZQOdMHP&X-Amz-Signature=47761012d4e7acc3013a348acc2c96f7e9e3878ce9d853d8032ce713877f3c70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWN6FWNA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx%2FjVWIKi4d%2BL2uGjExrpRK93V18LVoZ%2FaZ9o1ArL55AIgd34nCmUUIlnZQAbPaWDOsvPJtkiM550581WLS1GLKwoq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDBl7iNIB4EffQ5n5fircAzpchKRT3DKhneRAoyr7r1WFsm55WTF00%2BNa1Y3qBYyNwF8cGJ%2Bb2aGHi44eYq3NKOHLmhkLbJZqShA0UbdK%2Fk2JG0nMpnsIqnlj%2BbWLD8zChstcgR7tjs85nAJitb89amZF6HriOJnvYFIoD6o0kLbotiyZS6mH3x9C%2BqXSDxfPwdtlvBYqFB6Od7tckFyzGR62TipiQKWZtCkgMIQ7xC5hwHqq2eiliutUAvBq4aGW4I6eG0Clv5VwS%2FWmRizadAYt9NaI7pwrscrclC31mTJBGqXVN23hJrWe1FlrNC24q%2BPnT7ie6fvIk3acD7PrYsr8GzDZtd2tsRbRHRUE9VTHnVtS%2BaC3IZ0plvNvnKLl5D%2Fwal8dTYHoXwmuznYTRjCDPVViH0ueMRr%2BLN452QRL%2B1HhRp4FOCqwVwOZNNzKLjlAkrFyxG2YOaV3Bwlvz2B63hyyLDW7q%2B4DlK5ztvynSXr675pfuqOcpDiktFCCfRImN7a0MU0dtYQGBjB0wrP9urNT9RL%2BJtfIvEPCmW%2FHRQX4NWsC%2FH9GqHq%2BRMFX%2BFVuDIje5dS3%2FLlBQlEl59%2BRVTQAarSdZf3GFhQuSHnKak2UVi5GiEYvWg5Rg6rmuObjDR7ACrFhvJqgMIKziMoGOqUBt8V5teu77l5MKT%2FS4fCQsPvZPxViSXhGsO8oUl49BWYF%2BCfL65SB2ZQO4B%2BV8ms9H8l6C%2Bv7scW5bQuRk1sm%2BhiR99ewc%2B60AbKrdxDTUkt0lYfxAfp7Q04NcAtg%2BV8FxcgVIy31NPiM%2BfOzy2hFkZXhGszhRlibFoX3XKpn5Fy5gWj2ENMKsaZSPNrtVJ3wep9KyQYuAis95CKz3MLvJZQOdMHP&X-Amz-Signature=872b31a239a4df4998f80a28e88fd6e1a2451328350c953223fdb4ea01b6b609&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

