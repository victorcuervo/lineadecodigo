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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX2JSKA2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLNGzBIecOeZRvtVt1nLQY4ruZy3MbyTTULxbXSsn5SwIgVa6Qc0is5RR5xW6o8MIDl1%2BcVQaUAIH%2FHM99%2BARZgYkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDNznJGeNuaQB94DWoSrcA9DuOrihZQESfBUq84vvDqxv0DSAHS8ooerfkyrIqzo4%2FwLvDVIQVwWpbgaiS6rYteX%2Bz%2FkbSZRVlccTgxMHvyOGBpFuVt9udk0dR%2BcxzTZACZcC2GoyYUrCvwbzz3PmBXYpcnh9fInL%2FOMJIWiM%2BrgXDYwa7q0T3Y2GSj8JOr%2BRi1N7TQ1Ycg7hiicuQyxpyeQld9OUUCDmnYf8CR4qqHluS3R819upc1MU0pw51qjawQCLx6utUwWcsQDfbI3Zr87ORudyEhajHAxAuoT26Xo3QMQAUgaRT0jUUCtuIR7A%2B7BYbxhhdzjwoqULq16Te7ut4Zl5qRxQd5HVxkucu8jYTMgoi3%2Bc3A00%2FteFbOH2QK8h9E8oHUD3mlMcukTlEw%2BrntNP7JK9p%2B%2Bzd6qFpYQNRidHErTmVEsK3AsXYWxkqdGAwyhXwyCs5q7H6HGT7yikzmD5maZ6h0Bzup1PBQdWPBVp7X7HuCXUlgvvVsD6YGECtEp%2FR%2Fk1tMEgjGcZ8oL6Bx4UUvIEHEsIyMxTXs4FiT75aEhPWunJE3xRvS5RXxYL33xTCtvgKsI%2BrVHmlbXGK%2F%2Bs34oYYpwkgHn8nPRYG7eZytCKtRXoiBviiJu40pW799rPkcpmXWC%2BMJfOiMoGOqUBnVYAl1sCl3aGrA%2F%2Fbq5BxtLzYiEkgfiC%2BBokGT8t%2BJOmdCute9Q%2BOgtxOE9PHOneemNk2Zj%2FTt%2FsOXMSy31MuNJLNtx8SOsEpMYOfLK9ICC6SEvLmo6trQsV8VEngi%2FQ5zvKSbleXlcul7v3929IYuCSWXm4Auwq4o8ASbjnaNoGHPruArs3tI%2Bv1b0oZAYPXPiRM5Y5dca87nFREHp9DoDmbCBO&X-Amz-Signature=441c12f35c6e34ca1a49ef4e1d17a2cd605d276f445012b207842978fae23be2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX2JSKA2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLNGzBIecOeZRvtVt1nLQY4ruZy3MbyTTULxbXSsn5SwIgVa6Qc0is5RR5xW6o8MIDl1%2BcVQaUAIH%2FHM99%2BARZgYkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDNznJGeNuaQB94DWoSrcA9DuOrihZQESfBUq84vvDqxv0DSAHS8ooerfkyrIqzo4%2FwLvDVIQVwWpbgaiS6rYteX%2Bz%2FkbSZRVlccTgxMHvyOGBpFuVt9udk0dR%2BcxzTZACZcC2GoyYUrCvwbzz3PmBXYpcnh9fInL%2FOMJIWiM%2BrgXDYwa7q0T3Y2GSj8JOr%2BRi1N7TQ1Ycg7hiicuQyxpyeQld9OUUCDmnYf8CR4qqHluS3R819upc1MU0pw51qjawQCLx6utUwWcsQDfbI3Zr87ORudyEhajHAxAuoT26Xo3QMQAUgaRT0jUUCtuIR7A%2B7BYbxhhdzjwoqULq16Te7ut4Zl5qRxQd5HVxkucu8jYTMgoi3%2Bc3A00%2FteFbOH2QK8h9E8oHUD3mlMcukTlEw%2BrntNP7JK9p%2B%2Bzd6qFpYQNRidHErTmVEsK3AsXYWxkqdGAwyhXwyCs5q7H6HGT7yikzmD5maZ6h0Bzup1PBQdWPBVp7X7HuCXUlgvvVsD6YGECtEp%2FR%2Fk1tMEgjGcZ8oL6Bx4UUvIEHEsIyMxTXs4FiT75aEhPWunJE3xRvS5RXxYL33xTCtvgKsI%2BrVHmlbXGK%2F%2Bs34oYYpwkgHn8nPRYG7eZytCKtRXoiBviiJu40pW799rPkcpmXWC%2BMJfOiMoGOqUBnVYAl1sCl3aGrA%2F%2Fbq5BxtLzYiEkgfiC%2BBokGT8t%2BJOmdCute9Q%2BOgtxOE9PHOneemNk2Zj%2FTt%2FsOXMSy31MuNJLNtx8SOsEpMYOfLK9ICC6SEvLmo6trQsV8VEngi%2FQ5zvKSbleXlcul7v3929IYuCSWXm4Auwq4o8ASbjnaNoGHPruArs3tI%2Bv1b0oZAYPXPiRM5Y5dca87nFREHp9DoDmbCBO&X-Amz-Signature=75e8ab1c4e2788748d03f9ae8105939de8ea754a7ff16d3489e9e037b89c62a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

