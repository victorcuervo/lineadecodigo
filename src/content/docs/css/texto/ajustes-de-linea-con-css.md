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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676BYA74C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV%2FqPzcH4OHQ%2BHAtZWJztFLFnSIVAadpieUWnEUoHY4gIgeKJH%2B7sTYUwFVG6mNAmqHPpBLsSQD0RuhyxwtD%2F3WVsq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDI2ySM4d4NFYtPky0yrcAyCfaKSGfVSxsGvX4kZqlFbB1YHv05YPm2Lni6Wf9qkUlDBv2bLW5cIXNjfcbLOxOlDEvhBc47j40vN14%2BPY5Eznj%2FKfzNPw8mZbg9r2LuJqjBitXizHJMyD4SfKPFacSLX4hZC46WSy7O%2Fi2GJdrVe2%2FkY5RGY2crDQQcw149HjI%2BpiY5V35lZ3p9cpLv5tFH5LsZw%2B4a0F9CuR35SQrRCkn055DYuvr%2F7HYViE%2BSpkTgOIXqRtZ4g%2FMqjbwUOBdIalwBalkchD4uxNrVwCSg2Atf73TVYwzfGEz%2BLXUJ808mgxT3tOdHzulDt8qZp7%2FUWoC6bnPtzdZx2tAwUk3T%2FZlKLSZHtP4gC%2F9LxVOdLQ7q1C6ieZ6EkBGXp6EaVBmkI6VHvOlnlv29OyxgLLxiWkx14wE6WqTpvoKKsq4rKfOBZ3LionClKEBlptBC9uqNcDvTD5VntF%2Fw4yiTJWvQchXBhZcNJf0oEB%2FOTvzNx1DlqKk6P6MCds9Lp8eYXdtzwdi4T%2FSt07euQV0YUXDP%2FVSkQBQCvcwEFRp0yf2DM27Eo8R%2Bf%2BSsEumJ6Uqa4DwuTEaLB3WVC4UDez4Wyr68ORoLzzCVArL39s9g5wrXB9c6urtQMLh%2BvjZIWFMLSWiMoGOqUBNUoVp%2BoZ2PFpDrNSrJZ98HpO6Mow3jOlSsyla3znuPea%2BV%2FCHgXEZgDKbtDeUZ3UKZyUCJXjD2YEYKKUylcj870j6n29QUeIgCkIjll19PoUsOcQwG6bgy9VnRC%2BE0LlckAsEQxnq%2Bch7A29%2BQT3lkUeHZb%2FiOsxizVKGAYeh1KEFAh9ENRP3sc7U0npzNrv%2BBGM3F0nerRomA%2Fr7RfMa0nhcrA7&X-Amz-Signature=c26367696a32373c9a65d37f035bad000ffc1a480121f867f875aa54af6bb069&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676BYA74C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV%2FqPzcH4OHQ%2BHAtZWJztFLFnSIVAadpieUWnEUoHY4gIgeKJH%2B7sTYUwFVG6mNAmqHPpBLsSQD0RuhyxwtD%2F3WVsq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDI2ySM4d4NFYtPky0yrcAyCfaKSGfVSxsGvX4kZqlFbB1YHv05YPm2Lni6Wf9qkUlDBv2bLW5cIXNjfcbLOxOlDEvhBc47j40vN14%2BPY5Eznj%2FKfzNPw8mZbg9r2LuJqjBitXizHJMyD4SfKPFacSLX4hZC46WSy7O%2Fi2GJdrVe2%2FkY5RGY2crDQQcw149HjI%2BpiY5V35lZ3p9cpLv5tFH5LsZw%2B4a0F9CuR35SQrRCkn055DYuvr%2F7HYViE%2BSpkTgOIXqRtZ4g%2FMqjbwUOBdIalwBalkchD4uxNrVwCSg2Atf73TVYwzfGEz%2BLXUJ808mgxT3tOdHzulDt8qZp7%2FUWoC6bnPtzdZx2tAwUk3T%2FZlKLSZHtP4gC%2F9LxVOdLQ7q1C6ieZ6EkBGXp6EaVBmkI6VHvOlnlv29OyxgLLxiWkx14wE6WqTpvoKKsq4rKfOBZ3LionClKEBlptBC9uqNcDvTD5VntF%2Fw4yiTJWvQchXBhZcNJf0oEB%2FOTvzNx1DlqKk6P6MCds9Lp8eYXdtzwdi4T%2FSt07euQV0YUXDP%2FVSkQBQCvcwEFRp0yf2DM27Eo8R%2Bf%2BSsEumJ6Uqa4DwuTEaLB3WVC4UDez4Wyr68ORoLzzCVArL39s9g5wrXB9c6urtQMLh%2BvjZIWFMLSWiMoGOqUBNUoVp%2BoZ2PFpDrNSrJZ98HpO6Mow3jOlSsyla3znuPea%2BV%2FCHgXEZgDKbtDeUZ3UKZyUCJXjD2YEYKKUylcj870j6n29QUeIgCkIjll19PoUsOcQwG6bgy9VnRC%2BE0LlckAsEQxnq%2Bch7A29%2BQT3lkUeHZb%2FiOsxizVKGAYeh1KEFAh9ENRP3sc7U0npzNrv%2BBGM3F0nerRomA%2Fr7RfMa0nhcrA7&X-Amz-Signature=bb91d6842fe9618ef40ec6da97719bcb29c18d656ac75bb83cfbf5aac02fc8bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

