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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GHTAE4M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvvS0qLTb1V%2BcLPVQhs6nXdF8qiazCimYf3IePHR5QvgIhAMY2vzoMyiZWqO%2Fbm6ctwX%2BlzLrZs%2B9mQg5JVEf%2BUlGtKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9HS8LUkhvfegKuOAq3AOk%2FXVIAbq3UN6N9j79IxV00qof1rSIKpeRhCQIEMFCVA2RSw353pIYvDpss7%2BAErU4JeYjLR5v8zwKxFLEeYkkpRstI7OxTsVQrg0RE%2BtkOhXiRvkilBZIO1YOJFqywKbeBakM4umcJJFfyEZDAkNIMCr0pDaGZSfvFJ3SVk3zUF1bLArfosdrnrTFLTXcADCAF0THOES7WLJQoFdap1VgSPv0OluTxf4ZkwZkoEDbyJlGBmeNG2LgZVTcIS4huk8NIJi%2Frqa%2BBwgK9zbOA5KYPYsfD9h706oU0gzi9arc5dTD1O5p7aZTTzeSR%2Bl16SuUt1Yxog0G%2F8WMz3ZWqmZ9r8mcI65k7SStwUjf0M9QhsgjQMs%2FyXyo7ykehzJbHupvziCXyviAqiP2qEagx3Rz91S%2FOCParOYsLBnJKHQvcOsktGx3bzJpJo7iqCNGOWk3emD4qnaLPq9rOR8vfu2pY93gurP9G%2BeG8tAa3lTb5NsHygscykRJCQPd9sIBTD24tU7BNupExrsHsiTLbqXe8cBsC0oeygosFOfot2gZ5smncykKErPCG7QK6Yqs95nx7pgECBic%2FSIS0mZ5b%2BHPvU1o%2BsrDyMN3zhogCpU1JBZN5hu2PBmrAFzCMDDo%2F4rKBjqkAXESPwV5y4HoED82%2BAUmnB%2FW7sofU7JwmYbtyPjaIKTL4PQ8%2Ff0Mp2B53wlYqsbK%2BiLvRoA9YuYJlgkBHZGwkR40D9WrAQe3Nl6%2BxiYXmjCA8Uv99p%2BejUBNnsG7jgJLhMzSzwZDD4NJCSHjQTC4wSXuNl8RpNOiYW9hArJabqqaIQNO2b%2BSEXL5KqFxttArKg6ohuhvuGDh0dynMONEPLHKTzjM&X-Amz-Signature=48d150b6bb294b7582be021f360907f1601f74e1f9bb013a17288512123495b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GHTAE4M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvvS0qLTb1V%2BcLPVQhs6nXdF8qiazCimYf3IePHR5QvgIhAMY2vzoMyiZWqO%2Fbm6ctwX%2BlzLrZs%2B9mQg5JVEf%2BUlGtKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9HS8LUkhvfegKuOAq3AOk%2FXVIAbq3UN6N9j79IxV00qof1rSIKpeRhCQIEMFCVA2RSw353pIYvDpss7%2BAErU4JeYjLR5v8zwKxFLEeYkkpRstI7OxTsVQrg0RE%2BtkOhXiRvkilBZIO1YOJFqywKbeBakM4umcJJFfyEZDAkNIMCr0pDaGZSfvFJ3SVk3zUF1bLArfosdrnrTFLTXcADCAF0THOES7WLJQoFdap1VgSPv0OluTxf4ZkwZkoEDbyJlGBmeNG2LgZVTcIS4huk8NIJi%2Frqa%2BBwgK9zbOA5KYPYsfD9h706oU0gzi9arc5dTD1O5p7aZTTzeSR%2Bl16SuUt1Yxog0G%2F8WMz3ZWqmZ9r8mcI65k7SStwUjf0M9QhsgjQMs%2FyXyo7ykehzJbHupvziCXyviAqiP2qEagx3Rz91S%2FOCParOYsLBnJKHQvcOsktGx3bzJpJo7iqCNGOWk3emD4qnaLPq9rOR8vfu2pY93gurP9G%2BeG8tAa3lTb5NsHygscykRJCQPd9sIBTD24tU7BNupExrsHsiTLbqXe8cBsC0oeygosFOfot2gZ5smncykKErPCG7QK6Yqs95nx7pgECBic%2FSIS0mZ5b%2BHPvU1o%2BsrDyMN3zhogCpU1JBZN5hu2PBmrAFzCMDDo%2F4rKBjqkAXESPwV5y4HoED82%2BAUmnB%2FW7sofU7JwmYbtyPjaIKTL4PQ8%2Ff0Mp2B53wlYqsbK%2BiLvRoA9YuYJlgkBHZGwkR40D9WrAQe3Nl6%2BxiYXmjCA8Uv99p%2BejUBNnsG7jgJLhMzSzwZDD4NJCSHjQTC4wSXuNl8RpNOiYW9hArJabqqaIQNO2b%2BSEXL5KqFxttArKg6ohuhvuGDh0dynMONEPLHKTzjM&X-Amz-Signature=56cdc9ca75d6c5bd7e90c598447421707ce3c82383b382de5e8e7a2b7079d6cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

