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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXO2YZX2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBEafkfNUInGwXyqJba3XmO%2BIHI6D5LnEI9HR5VB%2FpcAIgf7ZflxktlHRanvZ%2FxAYQzaniYCF3n6f9myXluxiCaVUq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDA9ve2dDU2w9xZWo3CrcA%2BBIzViRLufI76Hoacg414o3SiPviUFz3iMa1IVpJa%2F8W7fjCiCmIGg1nGfYIoxke5B4vIYLpjraynpkHCF5tMz%2FnScQG80q014e96Ezjvn9eA55zu55zSguupc8h9iV89dnY6O7regRzN7X1xVAHF4RWN7tZcQ0kRv0OfF%2Fl%2F2%2FqCCXwcMUes%2BzmMt9FqLGrWYt1%2BNOiQhqY5PCdX7t35eqizMOKu1imsx2Si6bloELq7%2FdH0XW9tVvWWN60LOTVXFme7pZmX7ZJP5Jfxf8UcbzLjkOJT78x4Cdr18MpQElKGQyeqSfQZexX5XSB%2FUJMSex2tnhrNxXHh53Ip7dXk3tGM%2FKle%2BolTKZ%2F2Vm5suiQ5tiVVYzmtfFD7t0OGgrmGL3Gdai8TQ0NPk8XFQ75mWbTasDTfaFM1X6NP4MZoIMR3yFIlxfWyNnwhrKBUe%2FaNX27dPE2rC6kb4HHQx49AI%2Ftvj5hpf8m%2FbRjeUXtd99EmtZloNa11U9hPcUhB1wg7N8%2BfELFYsklyW1rqYm7e%2B8iZ%2Fk2wx7%2BHXB8RJq6hX8nEjODxVNYAWGuABO8zJhidtJ68HTkv2CP1T1j%2F4jvKl1lQX4HpEeq6rLpfHKEDADQ%2BvBOPukInIdO%2FlzMIDwicoGOqUBjaKIwneMJ12QLh8pvTxzNl50Lzoz4AZR8gJfY4SEnAMqvkFrNPXg5%2Bzl8WxzaMAoJGKt%2Bul7gaiB0%2Fue1zqyoTEibGcTvmS7pZuX5RRMGX2mdAEyJGE1VkMsB%2Feb%2B7ofUjAexCRTSW6Lz3BUDknwkLsQCWYuzJBE0rRSxDoj%2FGeBccbnRN0%2BAZ7W5eSlOdsgemlarEQzaPg6G7C5fFZ7ORXIoR%2FE&X-Amz-Signature=c07f94d8de6287233d26b761af2415e78574e754e9f394c6be11d16d53a79cad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXO2YZX2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBEafkfNUInGwXyqJba3XmO%2BIHI6D5LnEI9HR5VB%2FpcAIgf7ZflxktlHRanvZ%2FxAYQzaniYCF3n6f9myXluxiCaVUq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDA9ve2dDU2w9xZWo3CrcA%2BBIzViRLufI76Hoacg414o3SiPviUFz3iMa1IVpJa%2F8W7fjCiCmIGg1nGfYIoxke5B4vIYLpjraynpkHCF5tMz%2FnScQG80q014e96Ezjvn9eA55zu55zSguupc8h9iV89dnY6O7regRzN7X1xVAHF4RWN7tZcQ0kRv0OfF%2Fl%2F2%2FqCCXwcMUes%2BzmMt9FqLGrWYt1%2BNOiQhqY5PCdX7t35eqizMOKu1imsx2Si6bloELq7%2FdH0XW9tVvWWN60LOTVXFme7pZmX7ZJP5Jfxf8UcbzLjkOJT78x4Cdr18MpQElKGQyeqSfQZexX5XSB%2FUJMSex2tnhrNxXHh53Ip7dXk3tGM%2FKle%2BolTKZ%2F2Vm5suiQ5tiVVYzmtfFD7t0OGgrmGL3Gdai8TQ0NPk8XFQ75mWbTasDTfaFM1X6NP4MZoIMR3yFIlxfWyNnwhrKBUe%2FaNX27dPE2rC6kb4HHQx49AI%2Ftvj5hpf8m%2FbRjeUXtd99EmtZloNa11U9hPcUhB1wg7N8%2BfELFYsklyW1rqYm7e%2B8iZ%2Fk2wx7%2BHXB8RJq6hX8nEjODxVNYAWGuABO8zJhidtJ68HTkv2CP1T1j%2F4jvKl1lQX4HpEeq6rLpfHKEDADQ%2BvBOPukInIdO%2FlzMIDwicoGOqUBjaKIwneMJ12QLh8pvTxzNl50Lzoz4AZR8gJfY4SEnAMqvkFrNPXg5%2Bzl8WxzaMAoJGKt%2Bul7gaiB0%2Fue1zqyoTEibGcTvmS7pZuX5RRMGX2mdAEyJGE1VkMsB%2Feb%2B7ofUjAexCRTSW6Lz3BUDknwkLsQCWYuzJBE0rRSxDoj%2FGeBccbnRN0%2BAZ7W5eSlOdsgemlarEQzaPg6G7C5fFZ7ORXIoR%2FE&X-Amz-Signature=e2a45e45351775a591fcac8c71fb6808e1754430be7fdbc577abf91b5fab2723&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

