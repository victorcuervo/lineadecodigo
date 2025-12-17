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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNJNPBX6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMutRotDtK3YT4uMpOpKWVT0TVaMb8137cB2rkHv4gHAIhAMw22RZTi7pk%2F4tZi3ZMpWM7BaqnjThKVR5MBFMSxrvkKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywDoB9FECzQc0syeAq3AMVDyk1uAHl0z8Mu1cEBVUW5Jc6SxPPG7ed%2BcMMuPYOTod%2BhCqWokOS6bPhCuGWsJlYq4Vmyt4YcmT6VtndXqVMXfvTzCDPmM34IaqzZpfoSM6%2Bk4gYD3la8K%2BZv%2BRJWSHkOdDTwK48y%2FnOmZhqIgGVYtvopbWRdnU1BGb63QaZf%2FVw0iQvxndQHzsiXF%2Bxl3CQzfAPqqZP2iV9IpOwb7NEd5v%2BOd0iFNH5wGyTMJ%2BQMxp%2FVCsS3F6MlSeCk%2BFhXRDMWy0HCEznsbmP%2FbLa3XjwU%2Bz4hqKhjQgFYrAqlPYJwdSRh8TkroNhHLDfnP%2FLz8MIgAThG%2BqJgS7RGPQTZb3ZGyOVtuDmwDc1jiEfnUEcKM%2FNOdi7fkc7YdBw371JM6qc9Rzt1lW12d2Bsxkg15sekV%2B13SnK0uKDn9feVZXRSQGhEAVDcrpeDU2qPuDiu5OUAZINtXN18PIvu9JrhA0RkCs9CenXE%2F7aRCHpGV%2FcfVNt3Bnu%2BExf3%2F2E8SEqSPiM6L1ciaw9oAc5XkX52LlEGV5VvArDIulyqgB1vR8FqyxxuU7%2FMXdfrgNAjKnRoGPqn0mv%2FO%2Fmo3hbwQp1ijtRauAKYB41c8Rg0Pxo6D7oUePrj2MwXm6titrjETD8%2F4rKBjqkARoHqR7CHx1GClJDjvvX3BhivK1TxK%2FxaBsYVpZ5pq0MxRgxWwhRyLJpfVLaH3hsIzHlaKZCl12VppEuIf%2BL%2BJfk1L8Ww7p8TBknqOsfvgMZEtQpxh4Z8tFJ8fHY8wj4Ng6bK32VYvfi9xrh2lgUT%2BlAKkgKmE14mIRqVJQV7eK0bMzr4oNzB%2FArMbxfuSLJs3jAYTRQb9qXgONkqC8VlnZ%2BdhKl&X-Amz-Signature=9dd1c60264f14590aae3f074d78352f5780f954fbebf6a0644293ad90674a9cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNJNPBX6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMutRotDtK3YT4uMpOpKWVT0TVaMb8137cB2rkHv4gHAIhAMw22RZTi7pk%2F4tZi3ZMpWM7BaqnjThKVR5MBFMSxrvkKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywDoB9FECzQc0syeAq3AMVDyk1uAHl0z8Mu1cEBVUW5Jc6SxPPG7ed%2BcMMuPYOTod%2BhCqWokOS6bPhCuGWsJlYq4Vmyt4YcmT6VtndXqVMXfvTzCDPmM34IaqzZpfoSM6%2Bk4gYD3la8K%2BZv%2BRJWSHkOdDTwK48y%2FnOmZhqIgGVYtvopbWRdnU1BGb63QaZf%2FVw0iQvxndQHzsiXF%2Bxl3CQzfAPqqZP2iV9IpOwb7NEd5v%2BOd0iFNH5wGyTMJ%2BQMxp%2FVCsS3F6MlSeCk%2BFhXRDMWy0HCEznsbmP%2FbLa3XjwU%2Bz4hqKhjQgFYrAqlPYJwdSRh8TkroNhHLDfnP%2FLz8MIgAThG%2BqJgS7RGPQTZb3ZGyOVtuDmwDc1jiEfnUEcKM%2FNOdi7fkc7YdBw371JM6qc9Rzt1lW12d2Bsxkg15sekV%2B13SnK0uKDn9feVZXRSQGhEAVDcrpeDU2qPuDiu5OUAZINtXN18PIvu9JrhA0RkCs9CenXE%2F7aRCHpGV%2FcfVNt3Bnu%2BExf3%2F2E8SEqSPiM6L1ciaw9oAc5XkX52LlEGV5VvArDIulyqgB1vR8FqyxxuU7%2FMXdfrgNAjKnRoGPqn0mv%2FO%2Fmo3hbwQp1ijtRauAKYB41c8Rg0Pxo6D7oUePrj2MwXm6titrjETD8%2F4rKBjqkARoHqR7CHx1GClJDjvvX3BhivK1TxK%2FxaBsYVpZ5pq0MxRgxWwhRyLJpfVLaH3hsIzHlaKZCl12VppEuIf%2BL%2BJfk1L8Ww7p8TBknqOsfvgMZEtQpxh4Z8tFJ8fHY8wj4Ng6bK32VYvfi9xrh2lgUT%2BlAKkgKmE14mIRqVJQV7eK0bMzr4oNzB%2FArMbxfuSLJs3jAYTRQb9qXgONkqC8VlnZ%2BdhKl&X-Amz-Signature=eed42ccc379be176c3dfd696958cc9436ccd2e4e862bc2c00465c31f2b89eba7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

