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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2DUOZLX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAqhc%2BcXsSh7t4D%2BgwpGNzag4L0v22%2FJBhHhCDaNfeVAiEA2s%2Bx9F29JnnvNQoYXDJnP6%2FmAO8l0f7%2FUXx6iM7IX6kq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDK3LZ2MSktRjHU7roCrcAwA4wf6%2BWZitKlJWiKjhIaLERWGae33yQYbammPuXnRBn4QURU8E%2F92rmVEXmt6b1OTk1JtqegDagOJLHXxMUkS%2FPYjzxKjNfHuhPJLtcCl6rD2rskGCtAqZggHxeMfcDHr0ZemX1IV1vRLuqcwHbWnxOXNycpQybwcmUaVnSjDmywXhUdQIB0pTxKltqK5UAL%2BqjiFtcpUcND0CxHorpzQhBqjYa5EFpjAyCS2BpKpcYL1SI%2BswelR68IWecwM%2FABd72WfwwUvUHkW9EwNbsxsRGAGM1r1GrMv6MjF%2BJEYBB%2BhOZbYPhzJPOqGd7Fx0yawmwwVyWoO6vulMr8hxiiihEOi%2FZYi4Ue3nSdRdlY22CBePYZ4gtV0rMyhVdl8tEjL53WFRi%2BZ5V4LT4bJ5%2F0bbdDO3eU28ncPBU3TxKngHppfrE%2BikldOKJePIWqPAptBAGsZqrb8xyqGBUo426UoWtD9OUV2WW5vw4J8Xost4cJP39OJc1sjERbK6%2BRQ%2BsJdSDbF1kJE10NABUgukXQEFcabcad2iwu8EkFtqJXWMTCq7cGU9TVgV5IRylvPQRTffJ8Qlyjx4hXv8T1bAdlyqkCjwCPIlFI7U6mbNfu20RQSeUFdQLXvxV%2BZ4MILwicoGOqUBjQ7RPUr6fu%2FCG3VZcIwNvUBDOjtxsShm0bkoynCqJjtYhQz3He6%2F7gn06qh%2BFKhddScfUiN4JbzbgcZ5m7cvKm4mqm6TPpzkHfljuJRrl43FM1obOrMPHr9cVxIZU5YnV9qgPI%2Btu4ZOT9Ps6gd6G1%2BlJb%2FexDuAhaqOfDoy62ZnJG3cMToFAwMopRbOAKRFExqwBkqGKp6ZI%2BGYmYbHn1AIUtb%2F&X-Amz-Signature=b08119741054f5a736ccb11770aeba0d49456e42ff75f7c1c33cfc969b02db5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2DUOZLX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAqhc%2BcXsSh7t4D%2BgwpGNzag4L0v22%2FJBhHhCDaNfeVAiEA2s%2Bx9F29JnnvNQoYXDJnP6%2FmAO8l0f7%2FUXx6iM7IX6kq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDK3LZ2MSktRjHU7roCrcAwA4wf6%2BWZitKlJWiKjhIaLERWGae33yQYbammPuXnRBn4QURU8E%2F92rmVEXmt6b1OTk1JtqegDagOJLHXxMUkS%2FPYjzxKjNfHuhPJLtcCl6rD2rskGCtAqZggHxeMfcDHr0ZemX1IV1vRLuqcwHbWnxOXNycpQybwcmUaVnSjDmywXhUdQIB0pTxKltqK5UAL%2BqjiFtcpUcND0CxHorpzQhBqjYa5EFpjAyCS2BpKpcYL1SI%2BswelR68IWecwM%2FABd72WfwwUvUHkW9EwNbsxsRGAGM1r1GrMv6MjF%2BJEYBB%2BhOZbYPhzJPOqGd7Fx0yawmwwVyWoO6vulMr8hxiiihEOi%2FZYi4Ue3nSdRdlY22CBePYZ4gtV0rMyhVdl8tEjL53WFRi%2BZ5V4LT4bJ5%2F0bbdDO3eU28ncPBU3TxKngHppfrE%2BikldOKJePIWqPAptBAGsZqrb8xyqGBUo426UoWtD9OUV2WW5vw4J8Xost4cJP39OJc1sjERbK6%2BRQ%2BsJdSDbF1kJE10NABUgukXQEFcabcad2iwu8EkFtqJXWMTCq7cGU9TVgV5IRylvPQRTffJ8Qlyjx4hXv8T1bAdlyqkCjwCPIlFI7U6mbNfu20RQSeUFdQLXvxV%2BZ4MILwicoGOqUBjQ7RPUr6fu%2FCG3VZcIwNvUBDOjtxsShm0bkoynCqJjtYhQz3He6%2F7gn06qh%2BFKhddScfUiN4JbzbgcZ5m7cvKm4mqm6TPpzkHfljuJRrl43FM1obOrMPHr9cVxIZU5YnV9qgPI%2Btu4ZOT9Ps6gd6G1%2BlJb%2FexDuAhaqOfDoy62ZnJG3cMToFAwMopRbOAKRFExqwBkqGKp6ZI%2BGYmYbHn1AIUtb%2F&X-Amz-Signature=73b2dcaa9606476744d86d898870413cb4c9ae00a59137c4ae56466a7e258d59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

