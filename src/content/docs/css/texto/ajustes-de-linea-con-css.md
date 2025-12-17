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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFSCEOOU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB63%2Fhxd6zYz3yNqbvS3aE9lRRc8ccES5JFqtIGr5N1rAiAyoolxrLg0Q0DTUyVXoQH0aQpTrXDsDvVYxPaQbvGLQir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMeAu9UsrPaJjO5KR%2BKtwDqY%2B%2BzQ4U4KAIGdY47TzvojCUXKG7pPmubsS6IwF88QyqOaPO8x1JpAX0nGVhTgCUKZuYUlWs0YTth3SbdvctPD%2B4AunC93l4bYevwmJz%2BI19yWrIVfj59IsjO%2FZS%2F%2FVCE8wMJy8GnKq%2Bsi2t5i3ArzpPePcrGLoy%2Bo%2BLZ4pY8FdLVNJiob1pBuR%2FsADTEL7Z9ZpOQdnTA7TgUp5kfG25IdIrmlAmiYdauNQRkWy%2Fx%2BW7s1zxo1JVDRhYP%2BryZQqMC191e1wv1HSUhTLU%2BF%2BCo2qBMdNDrmyLuqhLkfYqNqLpgiMvnu1o%2BHwZ91w%2FHN2ELZrMpmhJv3Z72EkQZKZMK4OEVTj%2Be%2FZyAYrp57nZqE1MVTrdoGsgJ0Pg3iXC9VpvmRV5l3kAOwlL4XLV4b6cgEKg4%2F3n1pmEU0hbw9ApYdXsbu5v7S4lcuMiEcndRcwxJtF1TWEGA%2BWeu1Gik5CFg%2FHafE5k%2BLeXeECmJQEHnJDHLGhEDxsW%2B16LBGlRbd9sboi16me2TygseAswLbwgYttTdmncyTu%2BeJirtflYc25Oxr0hanMk8%2FO4pAkBYtZxTi7jAWP2%2FGt6u5f9pBOx%2BY1UoutYhIJeG6BEG7XkNRWi8b00I8%2BT0Je3Qz4wzY%2BKygY6pgFzsN2v%2BQK20BOEs5CQxHoISVjr%2FzS3rA7zpKk8OFLdmf9cqqIKUNemF9R0R6GTUFHXZK35NyyvnDaVrzoJ30oXnXLl8S%2BVIoHdu1b9H6CczDWSTHpUniilYcMl21%2F45XmjCTjceDqoULk9mNtV1lejOe1NNI29akWfAmmLEDaFz7PlYYRpZOL%2Bt3ejyx38lJAAuiGVFyhUalCk0JM3zDI4JWxixpKe&X-Amz-Signature=7386ebb4da00ed73abde7f0281770fa6c692e3fe367cdb996c4fb5226263bc17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFSCEOOU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB63%2Fhxd6zYz3yNqbvS3aE9lRRc8ccES5JFqtIGr5N1rAiAyoolxrLg0Q0DTUyVXoQH0aQpTrXDsDvVYxPaQbvGLQir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMeAu9UsrPaJjO5KR%2BKtwDqY%2B%2BzQ4U4KAIGdY47TzvojCUXKG7pPmubsS6IwF88QyqOaPO8x1JpAX0nGVhTgCUKZuYUlWs0YTth3SbdvctPD%2B4AunC93l4bYevwmJz%2BI19yWrIVfj59IsjO%2FZS%2F%2FVCE8wMJy8GnKq%2Bsi2t5i3ArzpPePcrGLoy%2Bo%2BLZ4pY8FdLVNJiob1pBuR%2FsADTEL7Z9ZpOQdnTA7TgUp5kfG25IdIrmlAmiYdauNQRkWy%2Fx%2BW7s1zxo1JVDRhYP%2BryZQqMC191e1wv1HSUhTLU%2BF%2BCo2qBMdNDrmyLuqhLkfYqNqLpgiMvnu1o%2BHwZ91w%2FHN2ELZrMpmhJv3Z72EkQZKZMK4OEVTj%2Be%2FZyAYrp57nZqE1MVTrdoGsgJ0Pg3iXC9VpvmRV5l3kAOwlL4XLV4b6cgEKg4%2F3n1pmEU0hbw9ApYdXsbu5v7S4lcuMiEcndRcwxJtF1TWEGA%2BWeu1Gik5CFg%2FHafE5k%2BLeXeECmJQEHnJDHLGhEDxsW%2B16LBGlRbd9sboi16me2TygseAswLbwgYttTdmncyTu%2BeJirtflYc25Oxr0hanMk8%2FO4pAkBYtZxTi7jAWP2%2FGt6u5f9pBOx%2BY1UoutYhIJeG6BEG7XkNRWi8b00I8%2BT0Je3Qz4wzY%2BKygY6pgFzsN2v%2BQK20BOEs5CQxHoISVjr%2FzS3rA7zpKk8OFLdmf9cqqIKUNemF9R0R6GTUFHXZK35NyyvnDaVrzoJ30oXnXLl8S%2BVIoHdu1b9H6CczDWSTHpUniilYcMl21%2F45XmjCTjceDqoULk9mNtV1lejOe1NNI29akWfAmmLEDaFz7PlYYRpZOL%2Bt3ejyx38lJAAuiGVFyhUalCk0JM3zDI4JWxixpKe&X-Amz-Signature=3c5817d148a2b432d92b41d8b21864dfd73dd5051ff88bbbcd25845a7bf875d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

