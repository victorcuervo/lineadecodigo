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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z36CGNB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FGDC4GkCH3O3Xv84XadxrxYT0O%2F4kByxq8ueHloandAiA9JFrbmHO3oovmfNs%2FWMKJbWhF5vAdvZTYhJKdrYhlmCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMbRLxc2ylGpm89x6OKtwDe79XKLFvMoWorhwfVUHUDWkwrt8Txn4jYn1Kr35MLibz4tGF4koaOKkVe3yMZLgHOAhZEP4wY6iB2OtE%2FWZdE%2BmGbNALwsBQAyGEibt4MQ94XWBwbhP64EMe8grKXT0NFI3A%2BWzNeY7iS8xzhdDpt8QBzI7%2FpoKxBCR3wwt%2BE%2F8Cc5MSWHQI24Sb3oKZ3GQPph56242SYmPSqLlQIv7RQOfpgkUMV9mCqN7x3cfHZ5DK6%2FOZLWqmMN5n8ngPwb8HxNYZT0WIa45xU4jHaxm5xV7etBs6MJE%2BuvdXxOxI6F%2FfBJgiLR%2FfhNB5pYL4FcbsROndAUexcCrpUYVBcdPv0uLZYp8ze%2F5R50RfeaVILXRUGpditWesjfLb%2BzP%2BdCqVAL3vKNA0hZi5dTC%2BGoxG%2BHqp42051BLQ%2B1P8k6aQFaMKII%2BO7luxOCH4ox5w3fEVUSlqvZoBR5yggaH5rtjWDhSEsSpsAB7pbFFcXaRHiH4zwyF6G%2BY84bq3A1ZukWAyGUWXkGuZLoL2sVXxCGXCI11Xy5QeDNl25DIqD3T72jZ%2BXyWXQjSbOFgqO%2BD8lGs0IbQP8c%2FJxvk%2FDBSrAgIQ%2B0EAdZgKVDx91sqtDOWZj6xFmT7ZGH4h%2BsfZwdUwl9%2BHygY6pgHwLtjEshGmoPF0Q1F%2B6FBZtLVvit5%2FXp4BJCL5jCLjCGlEj1XsbxAf5e7%2Bu7ZQw3aXCnwaUm%2Fam%2B3TJwfl5pJJMcj%2BBHis3KJeSWNjKwMsJp%2FfLws9fBBtQ7d8SBQkPV86FB1ZMmh6sOtxeeUSdg6UGWGE%2B9jYHBm3DrMkE1a6ijBGj6HsUyIshn0tmXbAD7nVE2EBtm%2BDHGIbnj3PflC4oBSJNFZU&X-Amz-Signature=5abd2a6a2cc70d265480efcad28af58515bed6ee37857f8bb6b90c7263ffc65f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z36CGNB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FGDC4GkCH3O3Xv84XadxrxYT0O%2F4kByxq8ueHloandAiA9JFrbmHO3oovmfNs%2FWMKJbWhF5vAdvZTYhJKdrYhlmCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMbRLxc2ylGpm89x6OKtwDe79XKLFvMoWorhwfVUHUDWkwrt8Txn4jYn1Kr35MLibz4tGF4koaOKkVe3yMZLgHOAhZEP4wY6iB2OtE%2FWZdE%2BmGbNALwsBQAyGEibt4MQ94XWBwbhP64EMe8grKXT0NFI3A%2BWzNeY7iS8xzhdDpt8QBzI7%2FpoKxBCR3wwt%2BE%2F8Cc5MSWHQI24Sb3oKZ3GQPph56242SYmPSqLlQIv7RQOfpgkUMV9mCqN7x3cfHZ5DK6%2FOZLWqmMN5n8ngPwb8HxNYZT0WIa45xU4jHaxm5xV7etBs6MJE%2BuvdXxOxI6F%2FfBJgiLR%2FfhNB5pYL4FcbsROndAUexcCrpUYVBcdPv0uLZYp8ze%2F5R50RfeaVILXRUGpditWesjfLb%2BzP%2BdCqVAL3vKNA0hZi5dTC%2BGoxG%2BHqp42051BLQ%2B1P8k6aQFaMKII%2BO7luxOCH4ox5w3fEVUSlqvZoBR5yggaH5rtjWDhSEsSpsAB7pbFFcXaRHiH4zwyF6G%2BY84bq3A1ZukWAyGUWXkGuZLoL2sVXxCGXCI11Xy5QeDNl25DIqD3T72jZ%2BXyWXQjSbOFgqO%2BD8lGs0IbQP8c%2FJxvk%2FDBSrAgIQ%2B0EAdZgKVDx91sqtDOWZj6xFmT7ZGH4h%2BsfZwdUwl9%2BHygY6pgHwLtjEshGmoPF0Q1F%2B6FBZtLVvit5%2FXp4BJCL5jCLjCGlEj1XsbxAf5e7%2Bu7ZQw3aXCnwaUm%2Fam%2B3TJwfl5pJJMcj%2BBHis3KJeSWNjKwMsJp%2FfLws9fBBtQ7d8SBQkPV86FB1ZMmh6sOtxeeUSdg6UGWGE%2B9jYHBm3DrMkE1a6ijBGj6HsUyIshn0tmXbAD7nVE2EBtm%2BDHGIbnj3PflC4oBSJNFZU&X-Amz-Signature=303c2eaf02d0ff0c3cef91109a10b2c9f12fe7d765645705f9c18f2fda260d03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

