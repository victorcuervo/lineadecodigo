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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSZHZPTH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICtmGfK1A5fl1oBm1Gkz%2FjcGLBMqgx1T%2FU%2FoadPVkWkEAiAFFFbR6J5TAbg021tfhZC9sPmORBt5ExnC8UXfBVezqCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMDt3q4pV3Env3JcabKtwDfyFQ41zrrM8HyrGnQnbkPu9M5uBYaZvEVRVxAWUweNRRQ6%2Fl9sBlnhA09z76p2cTMxGHjVq%2BUM0keOgaT%2FXUTFT%2BMJP%2BbXE6bMZMxgoC%2Fsep0cVJDa7EAbhidNwd8%2BaRHWxIqAwRxkPgwtQIFCkQoBdBwWyHWAKxysk9c4zVW8C0VMzQt8q6YqQrxx5%2BydEJss7PuKDkabPahNLUNwWCodrriXMjl34tNc0NsZJCqDOuqz34HiX7GjoD3cn5LtJM%2BHNKRz76uzae%2F5%2FXrkbkBtaxRVjdR75HBWJ18g9%2B1jRT4G7t%2BhK5ON9VeeSDHJwkpq%2BM3FexmYAhaiHfMEVovaQ8QnGGrxLuWtBF6UCf84rFkDMo9p3XLZ3yOFTd7x23D4LSUY2P9KSJ9GQEORHd30d5oH%2FDJ%2F8wGb0R%2BfbLY%2BjUzX5u8KNYKYGxL9QH6XcBjokVGTK6tmA4AdpG0n8F7HHcnw7WvixI8HtiK9LAJKBpwhprPldI5J8J9xmdZvtfTx65ajKDUWLSJajJ9HaOV5fVP%2Fn2HclCYeCycb74HAT58kJm8DJ92MfNUtWIDfgIDsYBhaFImE%2BXf%2B5ciiejbni6vZSrFEKdjPsvUj%2FNjUJCmrznTbt0a5xyE1AwoPCJygY6pgEP7weCB8o4y2LwiYA4XGy91e0JyOs2mrcdc7fV9eXjEbZD8mKI6%2BtuLWXqtstvK8OnFrzGg4%2BjD%2BiraWvurIKpphboHb5CL%2B0Z4WCoIEGAtv7BYukJMLtyuQ3i%2FiyJpmQJVT3C8rv29VBvk42v1ZD3msoGaQg4Mbhzc5W5Hdkqpibf%2F0W6zLFmjbXnDGTqN7Ylj8UcmG5v1drTvJpcZssf9g4BwafJ&X-Amz-Signature=b150e7de1d54012610950f458997916ecc40217e66caf37d94ec6af5c635c000&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSZHZPTH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICtmGfK1A5fl1oBm1Gkz%2FjcGLBMqgx1T%2FU%2FoadPVkWkEAiAFFFbR6J5TAbg021tfhZC9sPmORBt5ExnC8UXfBVezqCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMDt3q4pV3Env3JcabKtwDfyFQ41zrrM8HyrGnQnbkPu9M5uBYaZvEVRVxAWUweNRRQ6%2Fl9sBlnhA09z76p2cTMxGHjVq%2BUM0keOgaT%2FXUTFT%2BMJP%2BbXE6bMZMxgoC%2Fsep0cVJDa7EAbhidNwd8%2BaRHWxIqAwRxkPgwtQIFCkQoBdBwWyHWAKxysk9c4zVW8C0VMzQt8q6YqQrxx5%2BydEJss7PuKDkabPahNLUNwWCodrriXMjl34tNc0NsZJCqDOuqz34HiX7GjoD3cn5LtJM%2BHNKRz76uzae%2F5%2FXrkbkBtaxRVjdR75HBWJ18g9%2B1jRT4G7t%2BhK5ON9VeeSDHJwkpq%2BM3FexmYAhaiHfMEVovaQ8QnGGrxLuWtBF6UCf84rFkDMo9p3XLZ3yOFTd7x23D4LSUY2P9KSJ9GQEORHd30d5oH%2FDJ%2F8wGb0R%2BfbLY%2BjUzX5u8KNYKYGxL9QH6XcBjokVGTK6tmA4AdpG0n8F7HHcnw7WvixI8HtiK9LAJKBpwhprPldI5J8J9xmdZvtfTx65ajKDUWLSJajJ9HaOV5fVP%2Fn2HclCYeCycb74HAT58kJm8DJ92MfNUtWIDfgIDsYBhaFImE%2BXf%2B5ciiejbni6vZSrFEKdjPsvUj%2FNjUJCmrznTbt0a5xyE1AwoPCJygY6pgEP7weCB8o4y2LwiYA4XGy91e0JyOs2mrcdc7fV9eXjEbZD8mKI6%2BtuLWXqtstvK8OnFrzGg4%2BjD%2BiraWvurIKpphboHb5CL%2B0Z4WCoIEGAtv7BYukJMLtyuQ3i%2FiyJpmQJVT3C8rv29VBvk42v1ZD3msoGaQg4Mbhzc5W5Hdkqpibf%2F0W6zLFmjbXnDGTqN7Ylj8UcmG5v1drTvJpcZssf9g4BwafJ&X-Amz-Signature=37d6893120fc80f6ffad9f38240d76ef659a75d9d8986ea70f991644ba706192&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

