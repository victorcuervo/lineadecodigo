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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H65MXKW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWZVUG1dbxhY4F5T%2FDeF7FOQXkpYzArv6wq70XavRdYQIgPe2mGQKCqs0%2FDFVIM4lGHKj%2Ft46zUyO5RTBfoBJDRbgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9KTijEKBtPO1ZcLircAwNXNAdk10UwxBK0ywFIZhqxm6odQ23AsKsKBKU03Op3XQNLlqjuQOpoBD%2FFdTs1vbHaucJatL8fzJHDlts0zjhOohzIZOhL%2BXhmvbLKhGNKOgCcpo7Yubn0iYs1usf7tRH1U8UhrW4fHh6uLMKFJQO4D4gVelQ0IoQnLwwus5yHdFTns4LT%2BkXvlGTXo3UIdk3%2BWmkGMknHLJpdgrpZ1P8WSiaJP6%2BwjZxfCPy%2Bu6Rtp2Wi1swwl7zD846VTPKA9mw1OcW8wwbeAF%2FWS%2BGj54ELdi1wvEwKLbFSkiMEfPEoP8NcQnM7drrb2m5V0EmS7pWNkzSlOLXP7cYbe0WyniLI0gVngynx5GkB5pFbpo8KUg4YL8YCrifs575XysHyD31XRzvYNmvrCzRa5CsQjgZ67Ms8JnEA4I%2B8GrnKQaOumsrj2NDSF3hFF%2FfyiiwoX2DCWmpwmJvJbm3FTYTNxojIOfKsuBDxmKnFfIGoXVKgqaFcc7loLzz7bXmsWOzZdc4Dzb3t7hxlDps8df%2FvTRUnaYV9%2FnSMZ2ybuO5c11rjzm5PFPkkM%2BtaWGSqCXRmav1AMaBNpML1spF7U7s8Yo2SkuYY8tw6zioc2AY198dfrufFaCl5HCEV6%2BZCMKOfi8oGOqUBditFoeElaTx1%2FR4SXl6vJ7nmfAhp2GobNAFRnFYt3Yin3pyDDIsx8XmniwpRDyqbQ32Q8Kl2W6GVJMw1sMGD9ZkKp0gCxxrglLJ%2FBI95or1Vi6r2HRV6dsNke9M3fTFVH1RXSvZmD5cRBpkE9Pb11jvALBt%2F42SMr4GNzZiaPQ%2B8cwr38UEiLE7SCXOXYyTHE%2BBqgi8ziQLPf1Ainvs%2FQ%2Faxl9PK&X-Amz-Signature=d196cfc0337d86be5ea6e7fa41f011fc1a60ebe50ce57cdea6afb44f5293f1d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H65MXKW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWZVUG1dbxhY4F5T%2FDeF7FOQXkpYzArv6wq70XavRdYQIgPe2mGQKCqs0%2FDFVIM4lGHKj%2Ft46zUyO5RTBfoBJDRbgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9KTijEKBtPO1ZcLircAwNXNAdk10UwxBK0ywFIZhqxm6odQ23AsKsKBKU03Op3XQNLlqjuQOpoBD%2FFdTs1vbHaucJatL8fzJHDlts0zjhOohzIZOhL%2BXhmvbLKhGNKOgCcpo7Yubn0iYs1usf7tRH1U8UhrW4fHh6uLMKFJQO4D4gVelQ0IoQnLwwus5yHdFTns4LT%2BkXvlGTXo3UIdk3%2BWmkGMknHLJpdgrpZ1P8WSiaJP6%2BwjZxfCPy%2Bu6Rtp2Wi1swwl7zD846VTPKA9mw1OcW8wwbeAF%2FWS%2BGj54ELdi1wvEwKLbFSkiMEfPEoP8NcQnM7drrb2m5V0EmS7pWNkzSlOLXP7cYbe0WyniLI0gVngynx5GkB5pFbpo8KUg4YL8YCrifs575XysHyD31XRzvYNmvrCzRa5CsQjgZ67Ms8JnEA4I%2B8GrnKQaOumsrj2NDSF3hFF%2FfyiiwoX2DCWmpwmJvJbm3FTYTNxojIOfKsuBDxmKnFfIGoXVKgqaFcc7loLzz7bXmsWOzZdc4Dzb3t7hxlDps8df%2FvTRUnaYV9%2FnSMZ2ybuO5c11rjzm5PFPkkM%2BtaWGSqCXRmav1AMaBNpML1spF7U7s8Yo2SkuYY8tw6zioc2AY198dfrufFaCl5HCEV6%2BZCMKOfi8oGOqUBditFoeElaTx1%2FR4SXl6vJ7nmfAhp2GobNAFRnFYt3Yin3pyDDIsx8XmniwpRDyqbQ32Q8Kl2W6GVJMw1sMGD9ZkKp0gCxxrglLJ%2FBI95or1Vi6r2HRV6dsNke9M3fTFVH1RXSvZmD5cRBpkE9Pb11jvALBt%2F42SMr4GNzZiaPQ%2B8cwr38UEiLE7SCXOXYyTHE%2BBqgi8ziQLPf1Ainvs%2FQ%2Faxl9PK&X-Amz-Signature=f846dde00b527b674e2beda6d164f59746323dd49ac07f9767d371bbc0384a36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

