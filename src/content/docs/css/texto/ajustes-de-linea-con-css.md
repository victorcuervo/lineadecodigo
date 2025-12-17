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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB7LF3UK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfB8CRCmcLrTWU6xEnX8gZvJhP9WusbobvR6qdBPnuDQIhANnQf08XPaHINEIUQfAisZ69RufR5Yf%2F1qGq6HN9XyYCKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznJdCyinPUelXmPi4q3AOJf5Zaj62g0Um4Gv4lhMBfd6IkRUa%2Fp6fcDarg68HpQM390RpIRfm6%2BugiFKdvBgRA6%2FHeydZ1u4n%2BHPiX4WqDwYXZ1GzfccItc3FTz0rurDJyDEBEEBVkl%2Fe4HqV2GD36MFbkmN%2FJtxdHjAMImhkrFevJbxEmtxNecbWAbbcgU1KYnFvunwQZ3HjnIT4VRn9Ss1UtPNe8MRU6Pm4EAGJVQq6mE177Mi%2FcTIcUKH034p8ex9ZXVgKAEUI%2BlRf349s7bKNlS5hQ6MU55JSJN2BQtRz8ED1dE1znrqLp25HNoav%2BKugCchBy90Il5RATuNA7luubUY61wbVEtUx66hY41ypZ%2BI4WcBR0vnCjOeWGVuLLPcat0VLfRRT1zoVlK2aGyZVwtmZ5v4p%2Fwd9nBu2uWcd0PErtdb2wRhu6hQ5HkEEpsYV3zo2lHl9Buw%2BeHDXtdQGa0hDAhTdX4jCxp6BehM352UnFwJOzu7Kp5L%2FKR91IypayjXSrGZc0q2OV1U5ZFY5fgnp6BZgJLDqspaasgNIvBSuhJbjHmYnZqqlhFMeAogKtIIsrprBUHBcu1euQVBJMX9Yrv%2BqPLfS2xVlC62MI0SHKRu07IEJP9L0fNaFyx5Yqx9N2lNR6LDDpnovKBjqkAVYA%2BtdsOZ3L7yoGrY7WHK7b7O6CVB8MVnudh6W7Coo1SQIhOeHKtMCGJvzOGIv5EFpNZAaIB4q6bQOWZJgL7PKd5%2B8ZzRF%2BQgBp1ErF5m62bDycE8SWWkwjzzWcmQTdPO6hFFvpBLjK9IRBxjYyi4pjLYe2OUs%2FZtGAdpYpJtj6%2Bk9f5%2Bv3viAM3R0gAsA1fLbTaXwV3HYPNLOryEQUawrUH2Kr&X-Amz-Signature=3eb497353ab130578035a3da18378c940047c2ffa0acb913e4a413cb63358a40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB7LF3UK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfB8CRCmcLrTWU6xEnX8gZvJhP9WusbobvR6qdBPnuDQIhANnQf08XPaHINEIUQfAisZ69RufR5Yf%2F1qGq6HN9XyYCKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznJdCyinPUelXmPi4q3AOJf5Zaj62g0Um4Gv4lhMBfd6IkRUa%2Fp6fcDarg68HpQM390RpIRfm6%2BugiFKdvBgRA6%2FHeydZ1u4n%2BHPiX4WqDwYXZ1GzfccItc3FTz0rurDJyDEBEEBVkl%2Fe4HqV2GD36MFbkmN%2FJtxdHjAMImhkrFevJbxEmtxNecbWAbbcgU1KYnFvunwQZ3HjnIT4VRn9Ss1UtPNe8MRU6Pm4EAGJVQq6mE177Mi%2FcTIcUKH034p8ex9ZXVgKAEUI%2BlRf349s7bKNlS5hQ6MU55JSJN2BQtRz8ED1dE1znrqLp25HNoav%2BKugCchBy90Il5RATuNA7luubUY61wbVEtUx66hY41ypZ%2BI4WcBR0vnCjOeWGVuLLPcat0VLfRRT1zoVlK2aGyZVwtmZ5v4p%2Fwd9nBu2uWcd0PErtdb2wRhu6hQ5HkEEpsYV3zo2lHl9Buw%2BeHDXtdQGa0hDAhTdX4jCxp6BehM352UnFwJOzu7Kp5L%2FKR91IypayjXSrGZc0q2OV1U5ZFY5fgnp6BZgJLDqspaasgNIvBSuhJbjHmYnZqqlhFMeAogKtIIsrprBUHBcu1euQVBJMX9Yrv%2BqPLfS2xVlC62MI0SHKRu07IEJP9L0fNaFyx5Yqx9N2lNR6LDDpnovKBjqkAVYA%2BtdsOZ3L7yoGrY7WHK7b7O6CVB8MVnudh6W7Coo1SQIhOeHKtMCGJvzOGIv5EFpNZAaIB4q6bQOWZJgL7PKd5%2B8ZzRF%2BQgBp1ErF5m62bDycE8SWWkwjzzWcmQTdPO6hFFvpBLjK9IRBxjYyi4pjLYe2OUs%2FZtGAdpYpJtj6%2Bk9f5%2Bv3viAM3R0gAsA1fLbTaXwV3HYPNLOryEQUawrUH2Kr&X-Amz-Signature=dc830908b1230adab412b2f8565172641692820ccaa28465c7e0254779774bb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

