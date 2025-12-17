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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS3VVEYT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2BJrBoF6E0GOsjna2ST7XiZ8V41qw7SxtZmBD1Qk4JVAiAhxcT1uYD6712DzHVxejmF%2B5dgbxkYC2wvWSTXdwPuTSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMVn9V%2FWfRT5IiO3QMKtwDXDeFbk84Dnqe2CIHRQo9wrWy%2BKzbj3dktg9amFtG57YdK7csZAzkNrrx9zjOBefDKK3jXhryNIfm7Duse3yBeA6P4cJMb89mLoLf55FArLUdiVolmfTrJEcoVPALwQFNbIfdfC37FSq9uYvXsY%2B2he%2BiiypxvONrKQHJ8n8DXGv9tESzEeUd3hZX6FN80D3w3Mho6dfS00JEu5EllrEIrhuw2EmNT%2FBtJFbqBDdxXRz3wfsxFcOfRSt%2FjwmUPiwNDOlZEVTa8zi%2FB%2B1R0Eo5fHXRQEibHZdonoh5SClc%2Bn8YBZL6EXXVljZ%2FOL%2BNWj7OzL7nRmMBfd9q0LJnkIupAF0nDQ32ZWswSbcl%2F5hfXp%2FEM%2Fm8NiPbL2CftAYWue6M%2FGGS05rtg98zU3aKJNmtF15R3xwvjZlOhH3wBnkX5rm1dafxAWxwmMaWnVnAz57R%2F4KyEUfEGTHjRjcQTvSQh0qm5wJBAB2LzlC%2FpVoVmx76UfM%2BQorQUmAxc5HgByoniREFzBN90h19Tus%2F%2FVBFKVAoRmN9te2o2uHO07ucSvHaj5aAg8P0OlNGf80Q0AOEDaEen%2F4Jbr%2F%2F7gSxbwR%2FrptEnkQ2g39rTy8ROhHy5ibtiTje2U0PhjzCnCwwvd6HygY6pgHoTdAFT9Y1262Zews8UfADkleaEQjeATAgG69WNMXQ8p1KWMBeh9EyGqEI3YnX9rMk1ibZAEtqDo5lr628u6%2FzGE%2FQnhgz2G2f0Omhz8HXjiQjxBo5vZrdhHs7SlL0NJ5Tx1onzC54rS1cku3QwRyR3PMX9PTuyVorJi%2FTDTDpFDXsTGAdgYC5tW76vJJuGbum3FrAs3d3%2BwgsqLb3BnwDj30VqzJr&X-Amz-Signature=618c1fc09e8d4b4134d519405d44242f3571b33e6a3acfe889c40faed3f25161&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS3VVEYT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2BJrBoF6E0GOsjna2ST7XiZ8V41qw7SxtZmBD1Qk4JVAiAhxcT1uYD6712DzHVxejmF%2B5dgbxkYC2wvWSTXdwPuTSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMVn9V%2FWfRT5IiO3QMKtwDXDeFbk84Dnqe2CIHRQo9wrWy%2BKzbj3dktg9amFtG57YdK7csZAzkNrrx9zjOBefDKK3jXhryNIfm7Duse3yBeA6P4cJMb89mLoLf55FArLUdiVolmfTrJEcoVPALwQFNbIfdfC37FSq9uYvXsY%2B2he%2BiiypxvONrKQHJ8n8DXGv9tESzEeUd3hZX6FN80D3w3Mho6dfS00JEu5EllrEIrhuw2EmNT%2FBtJFbqBDdxXRz3wfsxFcOfRSt%2FjwmUPiwNDOlZEVTa8zi%2FB%2B1R0Eo5fHXRQEibHZdonoh5SClc%2Bn8YBZL6EXXVljZ%2FOL%2BNWj7OzL7nRmMBfd9q0LJnkIupAF0nDQ32ZWswSbcl%2F5hfXp%2FEM%2Fm8NiPbL2CftAYWue6M%2FGGS05rtg98zU3aKJNmtF15R3xwvjZlOhH3wBnkX5rm1dafxAWxwmMaWnVnAz57R%2F4KyEUfEGTHjRjcQTvSQh0qm5wJBAB2LzlC%2FpVoVmx76UfM%2BQorQUmAxc5HgByoniREFzBN90h19Tus%2F%2FVBFKVAoRmN9te2o2uHO07ucSvHaj5aAg8P0OlNGf80Q0AOEDaEen%2F4Jbr%2F%2F7gSxbwR%2FrptEnkQ2g39rTy8ROhHy5ibtiTje2U0PhjzCnCwwvd6HygY6pgHoTdAFT9Y1262Zews8UfADkleaEQjeATAgG69WNMXQ8p1KWMBeh9EyGqEI3YnX9rMk1ibZAEtqDo5lr628u6%2FzGE%2FQnhgz2G2f0Omhz8HXjiQjxBo5vZrdhHs7SlL0NJ5Tx1onzC54rS1cku3QwRyR3PMX9PTuyVorJi%2FTDTDpFDXsTGAdgYC5tW76vJJuGbum3FrAs3d3%2BwgsqLb3BnwDj30VqzJr&X-Amz-Signature=7e0820083cff1f3b95ba9c51365e9b9fb23c7a6c73fdbc4fb3b28186f6af6221&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

