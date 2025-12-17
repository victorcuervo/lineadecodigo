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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGIQRWDD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqMMAWZ0b1bkaVVkGmBl7fzaLuRO%2B279d1drwDtLldogIgDDDWyChBx71YZ8nAfgs%2BVlVaitQz66PC96jALASUpwcq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHi%2B7CS0nG4LwpkXVyrcA3xiJ3Lg%2FetmVGqy3QDN%2FA3LQcaU1Xhl%2FYNLgXSmu05yqF66Q8hxhdJfA36D%2B93rWZqsizKMGcG2cQT3vtVsfBeIwrIsjV1fatEHtRlS0LRAd%2BBOP8wsiDhKM%2FiMYthnAIuTlW%2FOdmSJJQppwkP9KMSA%2Fqhk6TTV89CL8YWA9ON4bamlywcirLXAz4sQm3bD0KvtvaAIAGUephDetmq%2F3oA5qjyxRgKi9SKA6cUrB60gqhOz9ygpw%2B7qSsz2FGx5ud6kFACFsjHWKSCBIR%2BBCvYG6MHTpT8sFEavHo4%2B7oMm7CsMqVDl%2BgEdB3WhJoIhZH%2BmZaElmfrSmu0iAp%2FjHw4uflfiW2qotAYgp06aQOA%2Bquvs58M9pli30vvIdlMFLJvz8yEqQ0R0T8OFay%2BxEhbk7rNqGt%2FVMfAiFBFoKpdhFSMjF68%2FDIcSI0CW3D1N0BE96HYchVXjgUiQyymKNCJxCSHYPjTAp87mdHLOV3HB2gzwWLh%2FxlAX83UG76Xs5ERZRXQv0BbM9MQOKG2u207ncrqiSkGOuwdJzUJebAJFbIJlibvCk0qXu1ey2STMYU8YpshNGiW9%2B3zEki39MBJDtGLYTcZCalwdKI1xDVIKhlfwEI6ZV%2BB955x%2BMJ%2BDicoGOqUB5juR5NjLaAH7AyYIteJe0JToBDxSaV7nMyy9yssuajsdy986DGAcaaf7is9tw4vxVsxW5pcld3TsnalUdPMAyDzI4bZLutbqL6Y4NaOA2C5Rgrj5vUe20TvEtemBZVdtOQx3qnsvGHc4EXflmJaXudZpQLPgMOKWSbxDiyO0y6OqRrtroolFhnL%2F6TH07MiLAHT1sIClP21jQ%2BEucFl%2BBawWdgML&X-Amz-Signature=5e99d14abb6f5a90a6e0ad4a19473eabb1393e91c70260f9eea4f5f999042d82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGIQRWDD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqMMAWZ0b1bkaVVkGmBl7fzaLuRO%2B279d1drwDtLldogIgDDDWyChBx71YZ8nAfgs%2BVlVaitQz66PC96jALASUpwcq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHi%2B7CS0nG4LwpkXVyrcA3xiJ3Lg%2FetmVGqy3QDN%2FA3LQcaU1Xhl%2FYNLgXSmu05yqF66Q8hxhdJfA36D%2B93rWZqsizKMGcG2cQT3vtVsfBeIwrIsjV1fatEHtRlS0LRAd%2BBOP8wsiDhKM%2FiMYthnAIuTlW%2FOdmSJJQppwkP9KMSA%2Fqhk6TTV89CL8YWA9ON4bamlywcirLXAz4sQm3bD0KvtvaAIAGUephDetmq%2F3oA5qjyxRgKi9SKA6cUrB60gqhOz9ygpw%2B7qSsz2FGx5ud6kFACFsjHWKSCBIR%2BBCvYG6MHTpT8sFEavHo4%2B7oMm7CsMqVDl%2BgEdB3WhJoIhZH%2BmZaElmfrSmu0iAp%2FjHw4uflfiW2qotAYgp06aQOA%2Bquvs58M9pli30vvIdlMFLJvz8yEqQ0R0T8OFay%2BxEhbk7rNqGt%2FVMfAiFBFoKpdhFSMjF68%2FDIcSI0CW3D1N0BE96HYchVXjgUiQyymKNCJxCSHYPjTAp87mdHLOV3HB2gzwWLh%2FxlAX83UG76Xs5ERZRXQv0BbM9MQOKG2u207ncrqiSkGOuwdJzUJebAJFbIJlibvCk0qXu1ey2STMYU8YpshNGiW9%2B3zEki39MBJDtGLYTcZCalwdKI1xDVIKhlfwEI6ZV%2BB955x%2BMJ%2BDicoGOqUB5juR5NjLaAH7AyYIteJe0JToBDxSaV7nMyy9yssuajsdy986DGAcaaf7is9tw4vxVsxW5pcld3TsnalUdPMAyDzI4bZLutbqL6Y4NaOA2C5Rgrj5vUe20TvEtemBZVdtOQx3qnsvGHc4EXflmJaXudZpQLPgMOKWSbxDiyO0y6OqRrtroolFhnL%2F6TH07MiLAHT1sIClP21jQ%2BEucFl%2BBawWdgML&X-Amz-Signature=6cd4604ba0f4758c3ef9cad667ac7026668fb88a9c497ffd648ff7149af3ab95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

