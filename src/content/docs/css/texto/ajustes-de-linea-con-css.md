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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLS34JU6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC0lmhY6dQo8UY4v8UKx3C1vUJJnaAub%2F7cSdaPBXsQYAiEAg3DYkJBuhzzccMU6bheeiIRRqfKFTUq1pLSjdrBUrFEq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDL7kvABSmmEwbYu9qCrcA7aJDRboBtNwPUH3iUPCXiyFAyZTUlB8um%2B14pWKQo63C6gWzTUTtTKWTs77yXKeC0GeiiCYveACKS5gGd51P%2Blpa6zUQZRKSKtZapbT6gE0%2FUI99WTUSFjiF8rdnG%2FeR4RYv6%2F2zdJeyhiLf%2BdIMrf4%2FHIcePuBx1DNDS038zFSSL1hHqOyBACl%2F%2BcujqC0EkOb9sN%2BUlSXxgNt7SKd2%2BOTDDzyHW0Z7dOHEreSWiugWgiDvdEmgrJYS8BQXZKzFTedqj5gRX86a3u02dJSXan5GasvsBEd7oNMDkg4NXtOhmAd3wwOGGVJNW1X0nTUGrDI5LUY%2BNjF66zRwfqYkWJTQ026E0HzWpdgK%2FsHcCvfz2ZVx3bHNgkexUiQyoYP%2F3IcXFy1awG4HfwPuRGIfRY9YEMPmtqVee8%2FZ%2FlrpJr0UH5oVEQzLHFJMNRi22pQN2UNf0NLqfv4IG%2FPgo00RoOO1byNTTZgpFZDKvUzrzDq7RLIKGA5eYzmdFvefNAXqQO9GIZ0B7V1Hw%2BM0IgGaC4Tl3yLA6HzHY7yUQkz%2FM5N0prDtzbhwdIrxY1Ui3RixHz31A57wWn7yD5SlfLRMWx6f527KzeljTuIO3YOtaQFIWsqF2vckY%2BUVIOuMNGDiMoGOqUB6ZtLtel%2BFJL2YPrWGBxkZnTR2i%2F2%2BwwedEkGFA2bjFo%2BjOAwHREPZNsKPw150Qht6rDFNWgZI6AF9rgla6V5hA5qqeL%2BRr5Xrx680%2FlL7NgU71QmqWyAN6hDi22qMSoQQqZmDUI6SfkCUX9MSEEE%2BR%2F2NQdJzPUM8GJQt9ccIfZc63%2B%2BbyNY%2B6z%2BMqCI%2BPbTcRxXXXygTFfuO%2Be2NxEKUoPZgJ7g&X-Amz-Signature=8d31223f515bf09714998c3e22ae3149357af6d289921ac3b5daea3a47e996c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLS34JU6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC0lmhY6dQo8UY4v8UKx3C1vUJJnaAub%2F7cSdaPBXsQYAiEAg3DYkJBuhzzccMU6bheeiIRRqfKFTUq1pLSjdrBUrFEq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDL7kvABSmmEwbYu9qCrcA7aJDRboBtNwPUH3iUPCXiyFAyZTUlB8um%2B14pWKQo63C6gWzTUTtTKWTs77yXKeC0GeiiCYveACKS5gGd51P%2Blpa6zUQZRKSKtZapbT6gE0%2FUI99WTUSFjiF8rdnG%2FeR4RYv6%2F2zdJeyhiLf%2BdIMrf4%2FHIcePuBx1DNDS038zFSSL1hHqOyBACl%2F%2BcujqC0EkOb9sN%2BUlSXxgNt7SKd2%2BOTDDzyHW0Z7dOHEreSWiugWgiDvdEmgrJYS8BQXZKzFTedqj5gRX86a3u02dJSXan5GasvsBEd7oNMDkg4NXtOhmAd3wwOGGVJNW1X0nTUGrDI5LUY%2BNjF66zRwfqYkWJTQ026E0HzWpdgK%2FsHcCvfz2ZVx3bHNgkexUiQyoYP%2F3IcXFy1awG4HfwPuRGIfRY9YEMPmtqVee8%2FZ%2FlrpJr0UH5oVEQzLHFJMNRi22pQN2UNf0NLqfv4IG%2FPgo00RoOO1byNTTZgpFZDKvUzrzDq7RLIKGA5eYzmdFvefNAXqQO9GIZ0B7V1Hw%2BM0IgGaC4Tl3yLA6HzHY7yUQkz%2FM5N0prDtzbhwdIrxY1Ui3RixHz31A57wWn7yD5SlfLRMWx6f527KzeljTuIO3YOtaQFIWsqF2vckY%2BUVIOuMNGDiMoGOqUB6ZtLtel%2BFJL2YPrWGBxkZnTR2i%2F2%2BwwedEkGFA2bjFo%2BjOAwHREPZNsKPw150Qht6rDFNWgZI6AF9rgla6V5hA5qqeL%2BRr5Xrx680%2FlL7NgU71QmqWyAN6hDi22qMSoQQqZmDUI6SfkCUX9MSEEE%2BR%2F2NQdJzPUM8GJQt9ccIfZc63%2B%2BbyNY%2B6z%2BMqCI%2BPbTcRxXXXygTFfuO%2Be2NxEKUoPZgJ7g&X-Amz-Signature=ac60588865294203d41d1d4ff6f8522d2a89ff49417f492b3794721db8d7cb74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

