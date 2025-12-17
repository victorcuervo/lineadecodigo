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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCVVMO3L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYDJcc86nMQ3x2aJaccST9kO1SXKFf%2Fzpab2SKWnmUYAIhAJyAjoqq2Dbtq%2Bm7r0OeKij%2F80%2BN4cGxm7DktCH9WjRVKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0XfLR61%2BvjOLSR9Aq3AP8zEkIIRy3a9ag8A4AuiAuraf1TiHi7%2F0HFUE0zk8v480JSIPyCQ7tzwLxi8rOPn3JnOpHbP2Cpffh60aC3aTG7g2EQSkpoJCzdkQtJOfb5vWOGJAtJ1uLI33qAhadMBiP5wfELDKZkOjxgtfq7%2FtedT%2Fu4SNFJCJaKM9akbo%2B4UUht46OIwsjAnyFONnot4qt5fd6vX%2BMi9taMGzMIFXWvwJfSpysfKxuhKGyPEjuuAaX%2BWrFiOm4VBgfz%2FLg1aYf0NxlxOK5TQG2PA5PkFEl8PxeDEbmwKerj7WvBLtVu9B1rVshzgk%2FV6f90JLziJAC5DCMN7Wr8mBppyjCmIMjpGu0oHnsO8cU0PeBOsBG4%2Fe3NF4gfB352ctU2zgEFp8KLo8Uyu3IY86YEnHVWw1wNFZD%2BUFDrcI2AlNONa2cIu9lmD%2BxrOe6MeuWNP8bfvuwE81M7IEKjV0d%2FOyTQm59HMEw9lHlteiOjEKwcrVSfDUUfUpzzPk2fyb5eAYhmlsMS5iJBi2eIzlKtzEhZ7ovkXwsOmoQmjpD8zsafu9p%2FMCwpi4dwvaapJ8DPHGKdpSzTZh6Vb1POLTzC6iQVOYxkZiyBMX0hbCZMvk2lysIDVoqmDq65YxTo5QwkDC3n4vKBjqkAY3DibgnAU7%2B3Y7MdssZd%2BYV33qodO7XKS0kneZmTNTxWVpfqPn2a%2BE%2Fmqo33YGiCBaNHnUKTgPOBR0%2FAVg9hBhUrwak4PsQ3u35wAwT8sgB0mg0WHb4iRUlVLmL%2FgqQ56IpgxvPH%2FgoRCME5gT2BPg7nwND07XSw9yIKZvHAYXRe1t%2BGK3YNlfoFGnfWZZJX9RGc3icSm2Ht8xemVlio0gCxhoN&X-Amz-Signature=f795dd3ccf1baf1878c06867d872e673f6485a37bec192ff079f9dd3129a0307&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCVVMO3L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYDJcc86nMQ3x2aJaccST9kO1SXKFf%2Fzpab2SKWnmUYAIhAJyAjoqq2Dbtq%2Bm7r0OeKij%2F80%2BN4cGxm7DktCH9WjRVKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0XfLR61%2BvjOLSR9Aq3AP8zEkIIRy3a9ag8A4AuiAuraf1TiHi7%2F0HFUE0zk8v480JSIPyCQ7tzwLxi8rOPn3JnOpHbP2Cpffh60aC3aTG7g2EQSkpoJCzdkQtJOfb5vWOGJAtJ1uLI33qAhadMBiP5wfELDKZkOjxgtfq7%2FtedT%2Fu4SNFJCJaKM9akbo%2B4UUht46OIwsjAnyFONnot4qt5fd6vX%2BMi9taMGzMIFXWvwJfSpysfKxuhKGyPEjuuAaX%2BWrFiOm4VBgfz%2FLg1aYf0NxlxOK5TQG2PA5PkFEl8PxeDEbmwKerj7WvBLtVu9B1rVshzgk%2FV6f90JLziJAC5DCMN7Wr8mBppyjCmIMjpGu0oHnsO8cU0PeBOsBG4%2Fe3NF4gfB352ctU2zgEFp8KLo8Uyu3IY86YEnHVWw1wNFZD%2BUFDrcI2AlNONa2cIu9lmD%2BxrOe6MeuWNP8bfvuwE81M7IEKjV0d%2FOyTQm59HMEw9lHlteiOjEKwcrVSfDUUfUpzzPk2fyb5eAYhmlsMS5iJBi2eIzlKtzEhZ7ovkXwsOmoQmjpD8zsafu9p%2FMCwpi4dwvaapJ8DPHGKdpSzTZh6Vb1POLTzC6iQVOYxkZiyBMX0hbCZMvk2lysIDVoqmDq65YxTo5QwkDC3n4vKBjqkAY3DibgnAU7%2B3Y7MdssZd%2BYV33qodO7XKS0kneZmTNTxWVpfqPn2a%2BE%2Fmqo33YGiCBaNHnUKTgPOBR0%2FAVg9hBhUrwak4PsQ3u35wAwT8sgB0mg0WHb4iRUlVLmL%2FgqQ56IpgxvPH%2FgoRCME5gT2BPg7nwND07XSw9yIKZvHAYXRe1t%2BGK3YNlfoFGnfWZZJX9RGc3icSm2Ht8xemVlio0gCxhoN&X-Amz-Signature=1973f5db232784e7958b949075cd47db954210adea21e80f0ccfa35ccb23a47f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

