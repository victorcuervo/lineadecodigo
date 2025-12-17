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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCIIIKC6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2FLNniG6Y12K4PljaAl%2FlzpRdCkOq89QJkBUD6jI0v3AiBVjVQY6NvgcvgZz%2Bo76KsxJW7%2BkHSAkI0%2BSh0Ne9%2BfGCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIM%2FK96quA1xMtQaqutKtwD7kv5Tv9sPFdOX3Lbc3vpZkgzRZCPXygvi7J8%2FTmeIlRgjvkiMkxJgn3Pmsy1oA2ADvJyMSMou6cD5HbtqDkwhi4IWJ10POWWQ%2F6Np7VpwO4o1zbsspPDH7Kpvol9PYHkrE%2BhPpLqC98Wz5GYbm6Jih9%2F6yniLnEUkbRYqGnXvzYlex0FYOl3rCdGuTtMeIJc2LM2%2BgBj0egrfUHOnnkmyhbyhxXvZ7JmHxRDjlRcfkyHyC1EIMEukyiH5Q6H1LumCfB6JLjRM0Zz1tc6hNn8WPT1OT135BgKdJjuA%2BPSF3Cokm0LfACO%2FzAfOiuDNAv3XkEbEORB2XGZO3w9mfEf5FjtLd7F0WM%2FOrhPERFV02LBpTSenB3aOAmv48t2OJXwdHY3r3oB2%2F9gOzlmLFtALHfKrZRE8wZg7g5jyvgl8JmxIs%2B5uzlGSxChzf7Omg0quGyti96bJQLtVM1jHpaBxPk5FHyiQzh7EbaBPSCBJ%2FOUSNHb62kQ86g5tGGvIu68ZY10tY2KW3H5fs8fzspJJrTwVDjhIRfTwwlDvd78zYqtezi79RrXyPUiPkHP6lgA4PfQ%2FASLZ%2FlkhVClpQ063JOQSQXogm0il8XLcKphtr7tLKzNeE2V4qiiZ2swsI%2BKygY6pgHIS9cgMCXEWXsPm03tEeN%2BOZwzOFAxyy9AZauO9MIYu9Cobijhev91UTlZUpouOzh2%2BJRHPqspdI2OSOozsCn1lIepykZe26yTdYYJYwRj0NLbpYEan3zNIjnQzvXYqYq98rtfxOXr%2F350zz0xbtyf1ffDXqv5eyorGlIH2jISctXTYN%2Fo0lT3CfGcQju8k4xHuHoSp3FXSdkOldtVF7Lx7hqkZC4%2B&X-Amz-Signature=1a3b6213fa2083ff2f06b672c121b53f846f04161c6a7fe2e92b84850bbef369&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCIIIKC6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2FLNniG6Y12K4PljaAl%2FlzpRdCkOq89QJkBUD6jI0v3AiBVjVQY6NvgcvgZz%2Bo76KsxJW7%2BkHSAkI0%2BSh0Ne9%2BfGCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIM%2FK96quA1xMtQaqutKtwD7kv5Tv9sPFdOX3Lbc3vpZkgzRZCPXygvi7J8%2FTmeIlRgjvkiMkxJgn3Pmsy1oA2ADvJyMSMou6cD5HbtqDkwhi4IWJ10POWWQ%2F6Np7VpwO4o1zbsspPDH7Kpvol9PYHkrE%2BhPpLqC98Wz5GYbm6Jih9%2F6yniLnEUkbRYqGnXvzYlex0FYOl3rCdGuTtMeIJc2LM2%2BgBj0egrfUHOnnkmyhbyhxXvZ7JmHxRDjlRcfkyHyC1EIMEukyiH5Q6H1LumCfB6JLjRM0Zz1tc6hNn8WPT1OT135BgKdJjuA%2BPSF3Cokm0LfACO%2FzAfOiuDNAv3XkEbEORB2XGZO3w9mfEf5FjtLd7F0WM%2FOrhPERFV02LBpTSenB3aOAmv48t2OJXwdHY3r3oB2%2F9gOzlmLFtALHfKrZRE8wZg7g5jyvgl8JmxIs%2B5uzlGSxChzf7Omg0quGyti96bJQLtVM1jHpaBxPk5FHyiQzh7EbaBPSCBJ%2FOUSNHb62kQ86g5tGGvIu68ZY10tY2KW3H5fs8fzspJJrTwVDjhIRfTwwlDvd78zYqtezi79RrXyPUiPkHP6lgA4PfQ%2FASLZ%2FlkhVClpQ063JOQSQXogm0il8XLcKphtr7tLKzNeE2V4qiiZ2swsI%2BKygY6pgHIS9cgMCXEWXsPm03tEeN%2BOZwzOFAxyy9AZauO9MIYu9Cobijhev91UTlZUpouOzh2%2BJRHPqspdI2OSOozsCn1lIepykZe26yTdYYJYwRj0NLbpYEan3zNIjnQzvXYqYq98rtfxOXr%2F350zz0xbtyf1ffDXqv5eyorGlIH2jISctXTYN%2Fo0lT3CfGcQju8k4xHuHoSp3FXSdkOldtVF7Lx7hqkZC4%2B&X-Amz-Signature=54896885da4ac69df588851d0b8c547a63755351f1543141a1e4ab7bdf023ce9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

