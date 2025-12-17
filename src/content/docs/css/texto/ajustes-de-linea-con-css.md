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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HKJD5XY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSUuCU4Axcd8lHWVPYgHHMIyPzX0JY%2B%2Fjf0A4jHnBwAAiArkBWSPvaK3vO%2BZbb8%2Bfo50jmK%2BVE%2Bp3cgsTkC7FJvMSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMGhU5nmV6bCori8sbKtwDVHcB%2F6G0nHY3F%2FK7WRCuHLeEiim%2BXrTLI5a9FdMkvTn8dyIUFlBII9iZdabzF4ECZ5DF2cQ%2Br4mQ%2FQydAe1i0AyZ%2B7V2LVnDtCghbL2lnsUZd0ip35jRMjRb7KZygmtAcvLBvMtSOhmJ%2FqQ%2FSukanBnGLl66LSDtAA5wTnUsgpZWfUamtLYFoyGyPR4YHBA7TQ5ZBoo6PB9mKkl%2FkxEF6IWk4ZKgFZy0PMlPCCEHTS1ErVuFl%2F9sfzU0MQFqQ%2FCvDIIsLGpPbGTjnjMcAGSswmS5n4cv6dx90SOrx0aDoOFxgnCU4L8e7vK9hkhRsF8EVEGv3HbMg28Caxo1VqNZiYMo8pUvOCLDUmv4jD8aR%2FfnRxWxE0oahrrVavywmQLXU%2Fk6daWseICiuCnROBnesca0%2FWWgrVn92b3wNb8D3QJ5yv6StdAuuk9A9yjJnsrpip8rRkIY5mtDQ%2FSHnyDLP6wVpmSOW%2BFdRmO%2B3HwYlvd70j2z%2BSPT%2Fbrtn7uEcG2t3%2BXrZUYwQATapSYR2EEGpbxr7JZZFwtKQe2I0W6ZcYDqDwtx8vxmtbsv9DghKRgvz6r%2B%2BDRCXGjzRZitQY23akizH6m0XQENStFhvDuue0dP1wIO92imlBM44tIw8%2FCJygY6pgHGVk4wHlycdN%2FgQffLEvxaUXothquzz%2FpQVn0MFYmMTLDzOdV1f87vi2QdRIb5hbhlRw9PACkJj5z0%2FQI9fT9lFFpDxSo57C%2FZxBtXU6%2B%2BbR3ukAcWvBldCovCv3HuStBJeHXiwExV9kxXchqBWL%2Bo%2FCSo%2FyfEPXRNxA%2FIA980xNpXze8bgRefXtWguKkBVweIhQGfNasMYkhRsKdN28Zm8bBfJ7Hv&X-Amz-Signature=eb67ffdde18a53ab0170955e0a31ffae31bf45e9af2f2d8207ac21cf086ee1a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HKJD5XY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSUuCU4Axcd8lHWVPYgHHMIyPzX0JY%2B%2Fjf0A4jHnBwAAiArkBWSPvaK3vO%2BZbb8%2Bfo50jmK%2BVE%2Bp3cgsTkC7FJvMSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMGhU5nmV6bCori8sbKtwDVHcB%2F6G0nHY3F%2FK7WRCuHLeEiim%2BXrTLI5a9FdMkvTn8dyIUFlBII9iZdabzF4ECZ5DF2cQ%2Br4mQ%2FQydAe1i0AyZ%2B7V2LVnDtCghbL2lnsUZd0ip35jRMjRb7KZygmtAcvLBvMtSOhmJ%2FqQ%2FSukanBnGLl66LSDtAA5wTnUsgpZWfUamtLYFoyGyPR4YHBA7TQ5ZBoo6PB9mKkl%2FkxEF6IWk4ZKgFZy0PMlPCCEHTS1ErVuFl%2F9sfzU0MQFqQ%2FCvDIIsLGpPbGTjnjMcAGSswmS5n4cv6dx90SOrx0aDoOFxgnCU4L8e7vK9hkhRsF8EVEGv3HbMg28Caxo1VqNZiYMo8pUvOCLDUmv4jD8aR%2FfnRxWxE0oahrrVavywmQLXU%2Fk6daWseICiuCnROBnesca0%2FWWgrVn92b3wNb8D3QJ5yv6StdAuuk9A9yjJnsrpip8rRkIY5mtDQ%2FSHnyDLP6wVpmSOW%2BFdRmO%2B3HwYlvd70j2z%2BSPT%2Fbrtn7uEcG2t3%2BXrZUYwQATapSYR2EEGpbxr7JZZFwtKQe2I0W6ZcYDqDwtx8vxmtbsv9DghKRgvz6r%2B%2BDRCXGjzRZitQY23akizH6m0XQENStFhvDuue0dP1wIO92imlBM44tIw8%2FCJygY6pgHGVk4wHlycdN%2FgQffLEvxaUXothquzz%2FpQVn0MFYmMTLDzOdV1f87vi2QdRIb5hbhlRw9PACkJj5z0%2FQI9fT9lFFpDxSo57C%2FZxBtXU6%2B%2BbR3ukAcWvBldCovCv3HuStBJeHXiwExV9kxXchqBWL%2Bo%2FCSo%2FyfEPXRNxA%2FIA980xNpXze8bgRefXtWguKkBVweIhQGfNasMYkhRsKdN28Zm8bBfJ7Hv&X-Amz-Signature=84245795b4643150b28cdecd49370df1a2a20c77f581446d3d4a2bed90f4be5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

