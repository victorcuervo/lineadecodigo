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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672CPKZMT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T180048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlrPMFBakULkpvGhj6zLV%2FtvvfI9pJ825SNzY0puvNAAiBww%2Bq0J3et1fMMO8YQFJiQTA4h3tRy7Y2iR29Li5Ep4CqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVmE2cHsyDKC19WGXKtwDdDFeql8h4n%2B40hmMkMC%2F1yCjjFxeGRiakmG5lohf04Zmq90MYBa%2BvS70EKDYwVO%2Bf5e34S1rY9X629kG8QdDqEpMnSnh7iy1ZVM1eyTIED60PgtIX%2FLrTQlpNfyIHzIb0MvMtHcNCD8IjBSSc%2FpP%2BDHZeXAEx9kxqoh5h6OR2YeJPjgBJ113vs805t%2FEHlS4kCHkkSV7ojTdyxffb4cHyUcYyckR5QGXMijyEZgcU9LIw2reix0%2B9B%2FqEQiFruGC6Gk5QXitc0le3%2BMA5tyav7tYipoW2Ungufzr88VorwzDiVBkzimKTR99OPsFEEGt3Jup3uj8UGlcG3HMm3UIMkU5%2BFz3dlBKHdjxGuZhqs7NcE0BdnxE84ErdrGWE67E3YnJZkhjTyzY3X4nXlZYGA1MfqflITJ9E4U%2Fk1247G2%2F2%2BNcEyzu2pxK9EB6VUdF6EJEVmfP10IdA5HJ1JbXS0cGwk5wOgBwwBD0zLzGdrTkS6wLQ2KbzOpMZxWOV0WvDFsCWNOZJLSavAtLUo2%2Fz%2Bdmna3803p76VOGQQZvCKSoLXVeXG18lvHEnHmRzeFV1yVnKRauC2kCEisGzDKTCbrO%2FN9Ta1aOV91Sluq3uR1niTb8Ovt%2FaTGST8wwyp6LygY6pgEgFcTR9%2FEeRVS8ql%2F%2FgVFYsm72lJjhTgcuQhOXSOeLI3nzswUXawqDrnEVXdcDtDqQsTv6xbMC%2B4C9PXiWDL15GYjDUGn54PUKtmu9UVkLEdwt%2Bxw%2BsCi4wcJWStu3K0ggQcu9bwoOR%2BFCPrkfX2bMZUMJFZZCPDWPDpzFBewBVDFeKnLKOZ4vOYKbyauzL%2BAzbSlG09c9F%2FGNyBYdDigA0zarfkiO&X-Amz-Signature=da3d0f19f3b1ff7089e998b76286a78f758f96e69577ecda7f9f15e8df57e239&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672CPKZMT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T180048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlrPMFBakULkpvGhj6zLV%2FtvvfI9pJ825SNzY0puvNAAiBww%2Bq0J3et1fMMO8YQFJiQTA4h3tRy7Y2iR29Li5Ep4CqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVmE2cHsyDKC19WGXKtwDdDFeql8h4n%2B40hmMkMC%2F1yCjjFxeGRiakmG5lohf04Zmq90MYBa%2BvS70EKDYwVO%2Bf5e34S1rY9X629kG8QdDqEpMnSnh7iy1ZVM1eyTIED60PgtIX%2FLrTQlpNfyIHzIb0MvMtHcNCD8IjBSSc%2FpP%2BDHZeXAEx9kxqoh5h6OR2YeJPjgBJ113vs805t%2FEHlS4kCHkkSV7ojTdyxffb4cHyUcYyckR5QGXMijyEZgcU9LIw2reix0%2B9B%2FqEQiFruGC6Gk5QXitc0le3%2BMA5tyav7tYipoW2Ungufzr88VorwzDiVBkzimKTR99OPsFEEGt3Jup3uj8UGlcG3HMm3UIMkU5%2BFz3dlBKHdjxGuZhqs7NcE0BdnxE84ErdrGWE67E3YnJZkhjTyzY3X4nXlZYGA1MfqflITJ9E4U%2Fk1247G2%2F2%2BNcEyzu2pxK9EB6VUdF6EJEVmfP10IdA5HJ1JbXS0cGwk5wOgBwwBD0zLzGdrTkS6wLQ2KbzOpMZxWOV0WvDFsCWNOZJLSavAtLUo2%2Fz%2Bdmna3803p76VOGQQZvCKSoLXVeXG18lvHEnHmRzeFV1yVnKRauC2kCEisGzDKTCbrO%2FN9Ta1aOV91Sluq3uR1niTb8Ovt%2FaTGST8wwyp6LygY6pgEgFcTR9%2FEeRVS8ql%2F%2FgVFYsm72lJjhTgcuQhOXSOeLI3nzswUXawqDrnEVXdcDtDqQsTv6xbMC%2B4C9PXiWDL15GYjDUGn54PUKtmu9UVkLEdwt%2Bxw%2BsCi4wcJWStu3K0ggQcu9bwoOR%2BFCPrkfX2bMZUMJFZZCPDWPDpzFBewBVDFeKnLKOZ4vOYKbyauzL%2BAzbSlG09c9F%2FGNyBYdDigA0zarfkiO&X-Amz-Signature=fc88f4ce0f35a374b87cb790c7f46aac1aff451ec8bb469e5c69555be312094f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

