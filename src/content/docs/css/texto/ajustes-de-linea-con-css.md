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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV6UCMU3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtN02df%2BztRGk8k2lPb7F5IVLa%2FqMkaCK2YU8fL6EZ0AiEAg1845TclxcHqxJ1Vqqs%2FynWTBFFOfkj55pKr4F36yXwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvJpSvpIc0Nduy3%2FyrcAwU9%2BToGxIcYtrofLhpKlvt3QiUR48chIxJ5sur5PvM%2FmG%2FWF9emlgAMhMg0LjiGSmh%2B4xWwKapqWgpKf%2FZFUgb%2FByc9fhkKipTcnpYVeRRUXoQNB%2BS1nDKEqgsxIQB5KCCYgkCTf5lbjh2X%2B0PvmV%2FxipOxQ%2Fhehad8nfu4GSEtYsDZN5FGcDUB94BLGR4dpvTz88NxI5MPYWNMibjgW2sDaGCJDQR3TScegB%2BPYqpCExkGm6WetqtDppt2%2BqLdqco3VR3HidLyJ8hzRxLaOvB9gZCzmkDDafChycuYq8sFPQnayQ4qeg55LsGzcM9SRIen00I0xpdRTwxdK5hskE%2Ffc%2FgQuRBMjYBM1xvfKsKhV5SgQThULRjso%2FEnMjGl4l80NLpfdGRY1swaSHge9mav1%2BLVL3UwgiDdzaJUj491ongJI3ARG%2BxS14sm32C%2Fw2gm4JBTWA8XKdrEXe059BOk1rkP2zTET6CdvLF6gZXXOcg0dll5CaA%2FpjIx1DZo9p%2Bo90pXEfgNP%2FxXqaPaXvxgbFC%2FHzGJMv6zz0yRdXB%2B2nvdWNvfTsdbDQdgarrUfDOeVsIP97TifzGKf3b5m116qnMUqeui1UI4KHxj6RcdPZqBvUETTlR6eP7xMIOgi8oGOqUB8CeZggoUvlE%2BMXp9KcoIRTJdmKUVDFCVrnzJJ1fPZzeIvZE%2FQWl01oTVi%2BbX1Z96VpnD7FjqReXqUxaOGyBjaSEmU0WmavPREnI6CFm9FSFDn%2B%2BCKx6YzdZLiwEkdGfhaZh0YSqb5bxZtIAwRtDaPFdM5sBzoxFF563w%2F%2B3%2BMJc2uQjj9mmO4sIiMn5aqcWQs6d6tXMnhMUPgjuagiie8uvEDSTF&X-Amz-Signature=1eb11b73b7235868095381e577d4ac53109ea479e20d7395d5c82bcb11cc4bb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV6UCMU3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtN02df%2BztRGk8k2lPb7F5IVLa%2FqMkaCK2YU8fL6EZ0AiEAg1845TclxcHqxJ1Vqqs%2FynWTBFFOfkj55pKr4F36yXwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvJpSvpIc0Nduy3%2FyrcAwU9%2BToGxIcYtrofLhpKlvt3QiUR48chIxJ5sur5PvM%2FmG%2FWF9emlgAMhMg0LjiGSmh%2B4xWwKapqWgpKf%2FZFUgb%2FByc9fhkKipTcnpYVeRRUXoQNB%2BS1nDKEqgsxIQB5KCCYgkCTf5lbjh2X%2B0PvmV%2FxipOxQ%2Fhehad8nfu4GSEtYsDZN5FGcDUB94BLGR4dpvTz88NxI5MPYWNMibjgW2sDaGCJDQR3TScegB%2BPYqpCExkGm6WetqtDppt2%2BqLdqco3VR3HidLyJ8hzRxLaOvB9gZCzmkDDafChycuYq8sFPQnayQ4qeg55LsGzcM9SRIen00I0xpdRTwxdK5hskE%2Ffc%2FgQuRBMjYBM1xvfKsKhV5SgQThULRjso%2FEnMjGl4l80NLpfdGRY1swaSHge9mav1%2BLVL3UwgiDdzaJUj491ongJI3ARG%2BxS14sm32C%2Fw2gm4JBTWA8XKdrEXe059BOk1rkP2zTET6CdvLF6gZXXOcg0dll5CaA%2FpjIx1DZo9p%2Bo90pXEfgNP%2FxXqaPaXvxgbFC%2FHzGJMv6zz0yRdXB%2B2nvdWNvfTsdbDQdgarrUfDOeVsIP97TifzGKf3b5m116qnMUqeui1UI4KHxj6RcdPZqBvUETTlR6eP7xMIOgi8oGOqUB8CeZggoUvlE%2BMXp9KcoIRTJdmKUVDFCVrnzJJ1fPZzeIvZE%2FQWl01oTVi%2BbX1Z96VpnD7FjqReXqUxaOGyBjaSEmU0WmavPREnI6CFm9FSFDn%2B%2BCKx6YzdZLiwEkdGfhaZh0YSqb5bxZtIAwRtDaPFdM5sBzoxFF563w%2F%2B3%2BMJc2uQjj9mmO4sIiMn5aqcWQs6d6tXMnhMUPgjuagiie8uvEDSTF&X-Amz-Signature=7bc4ae6156bd0de7404fe852e620fed7d17aca67b3bd52f9451b2340e6c35d4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

