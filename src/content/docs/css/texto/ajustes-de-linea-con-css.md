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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HGCA6Z7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhvMcIWVGwnd00lJjPs1vEOKxA1WIQx1ga61VDBTEuaAiAQ79r8T1%2FhiKpQHNA5A87VIGszC5WsMkWJdjJtlPlxUir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMKMRKi%2BsugLXhrwQeKtwDokEFeToVp%2F8Ed9iX5BdlaYgUj3Jcg1%2Bx35VjqPqbwmFOrYXcS6%2Favyim2RSIWLIhMTUlBUDck%2FZhRaaZgLO2FjhKURfo2vFFv01MYN%2FBQ6QllRjLcayWpi8xuZUSuyar78BNZIPUw0lRjUYTqZ46vnyi7EmrHDnSWSJHh3GMflJFOnuvAalVHbnOOx4Mlf9J336BGzS2ci8J0G19Ne99NUiVA3F6OMPgt7JYbN3HhoWHay7MIrX9JsrnxAHhqhC2qUaPcvV6QfYhbtFf29HdC6hjWmXzvo0OdzhU1W5sSunfAz3EdWtwKYBHRzV6JnqzjSgyUJg3o4YjAIrprqsUkTRNHMKB84t3pqc%2BbGfyxifb7%2F2q%2Bo9Qt6os%2BQXeUDndccEvJ20wltG9QMtBCt02%2Bx9l4%2B10awUMaQ2MwD1L%2Fi6L%2B6PhHNZvpxpGOPretGPBAkd9uQiWwW05e%2BHEUWnMjoLxbDMvhNMxH89lpbu3AoHMeyfgsMdSbV6qkp%2F423GxquNtD%2FMCDwAiL6%2BU9wy6MB%2B1cVX7mNSe0JmQp089dl8SMcSiWkj2s1sq3bJrBsrh4oow2yI%2FeOuJ%2FDQWyz5U1zyJ%2Bq%2B7HApgVnVU422KL%2Bk5IF9NaElqXOPTDwkw9MWKygY6pgHsmsoWFzUhLbMgR%2FK9ynjJ5yKGDjH1Vp7Lmhdtd17UuLrmFO8VygmFhBUNY6yyqXUUHj%2B4dUJw0PUs1FcbTyf4i0i6icD5IfYUG7KlRoH3coOeNmbDU6uoxJzWBsJLO6wdXaj0%2BuLAMe98rwHaW%2BMEVCl19k8n2Fqam5OM3FQk4nV7pmhGiiPlSXD4NY%2B8j%2FXbOpH4hYTg1kHc7aZ0BoNANl0SP2Kp&X-Amz-Signature=f80bfe88950f51559e35925106cf4a20407f791d24d842f1938adf25005c121d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HGCA6Z7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhvMcIWVGwnd00lJjPs1vEOKxA1WIQx1ga61VDBTEuaAiAQ79r8T1%2FhiKpQHNA5A87VIGszC5WsMkWJdjJtlPlxUir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMKMRKi%2BsugLXhrwQeKtwDokEFeToVp%2F8Ed9iX5BdlaYgUj3Jcg1%2Bx35VjqPqbwmFOrYXcS6%2Favyim2RSIWLIhMTUlBUDck%2FZhRaaZgLO2FjhKURfo2vFFv01MYN%2FBQ6QllRjLcayWpi8xuZUSuyar78BNZIPUw0lRjUYTqZ46vnyi7EmrHDnSWSJHh3GMflJFOnuvAalVHbnOOx4Mlf9J336BGzS2ci8J0G19Ne99NUiVA3F6OMPgt7JYbN3HhoWHay7MIrX9JsrnxAHhqhC2qUaPcvV6QfYhbtFf29HdC6hjWmXzvo0OdzhU1W5sSunfAz3EdWtwKYBHRzV6JnqzjSgyUJg3o4YjAIrprqsUkTRNHMKB84t3pqc%2BbGfyxifb7%2F2q%2Bo9Qt6os%2BQXeUDndccEvJ20wltG9QMtBCt02%2Bx9l4%2B10awUMaQ2MwD1L%2Fi6L%2B6PhHNZvpxpGOPretGPBAkd9uQiWwW05e%2BHEUWnMjoLxbDMvhNMxH89lpbu3AoHMeyfgsMdSbV6qkp%2F423GxquNtD%2FMCDwAiL6%2BU9wy6MB%2B1cVX7mNSe0JmQp089dl8SMcSiWkj2s1sq3bJrBsrh4oow2yI%2FeOuJ%2FDQWyz5U1zyJ%2Bq%2B7HApgVnVU422KL%2Bk5IF9NaElqXOPTDwkw9MWKygY6pgHsmsoWFzUhLbMgR%2FK9ynjJ5yKGDjH1Vp7Lmhdtd17UuLrmFO8VygmFhBUNY6yyqXUUHj%2B4dUJw0PUs1FcbTyf4i0i6icD5IfYUG7KlRoH3coOeNmbDU6uoxJzWBsJLO6wdXaj0%2BuLAMe98rwHaW%2BMEVCl19k8n2Fqam5OM3FQk4nV7pmhGiiPlSXD4NY%2B8j%2FXbOpH4hYTg1kHc7aZ0BoNANl0SP2Kp&X-Amz-Signature=abd32f56376ebb60c7214848ced76c17c07fb44488937f4efb5d6ecc0a5a172d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

