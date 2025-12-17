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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ5FRJ4Y%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC2MW3mbVK3wdziUeL5y376CjzrPSuyQt0caqImKu5CQIgC07PndQqoe%2B0gEAOHKwbQNjLQkaZyhdOU18EvLvKI10q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDFRxV0PRwaSYrct4GCrcA3GZqunDyt7HQvB0Nav0J%2Bs73A2Gk41K1sIIcADeKii6z6f7f7oHXcOpNyvkJmmL7Hm97Ocge90CqUXE1bhq0R3mFliO%2BlUgQxHXgz1GQcNwRVYzxxvPcg15SC04Ab9w1dHL5vOyS6ZOnSxcHsJNpAIme5M5KZUR1H6fX6krj1VVo%2BaMt%2BRJuddv7ydWMal0nfDz7fCA2GJPhuj5GFEq5dVbkFOum5QdFvdAvP8u3Iga70E6L6g05TsqL7svNusrGkRPbXVmuPch7aCEOVpRUS0Osuj5e5aQKUCor4zZVHgNq%2BYW3u42yOEeww1TCiB8h4h%2BhLLkjgEs7kQEWYms0zJL%2FEwkweG0lN4Jj%2FyURp015SQnghN1QPWxnVMimb9%2F7C7fd3eJMuwDE1VNDCaY%2FOP6adJE2S0YSXaw62OhHEysqnlZx7ofLSTiWJPspspeceKQP6OXsRGEadPy2NxOvkIKeKKdDw1BC889kwGnvuW5CTky%2FTVn1EYL0DbMbOMrkWNMkQhy%2Bq%2FS%2BAPEgkjyaRRoiVnsEu3yZ1HZ4%2FdQnIVROXY7oWvUqHMWhfY%2Bsmr1CSsqIqhzMkMZDzInM1j2ukRmVp%2BncPQsgYAxXeDZWOzMrvDPG00Y3I4SWk6IMPqdicoGOqUBb4PVeKMzcnVTohCFcVbS36LYSgOpsaEFxboj0M5K5RD%2Bdejwo4YK0BzhU76xoBer2aLz0eeX1my9TgEHVDI%2BaIzpRmdALSfN4ddcbeYpbepv1WGIJ7wknVYRYpvjYAqodl8idO7E7luHDVi2vQAB0C%2BVrW0x2cBPQU3rhqHIPSZNCLJZXi7iVRmQY7bS7nzn3rrSMx8xKexFjcYAkWRay4EijdZF&X-Amz-Signature=d467e8faa8a2c3f2b9bfcba77ec1a8136ee5d8dbfdd728bee4e1c3c1e6ca46d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ5FRJ4Y%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC2MW3mbVK3wdziUeL5y376CjzrPSuyQt0caqImKu5CQIgC07PndQqoe%2B0gEAOHKwbQNjLQkaZyhdOU18EvLvKI10q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDFRxV0PRwaSYrct4GCrcA3GZqunDyt7HQvB0Nav0J%2Bs73A2Gk41K1sIIcADeKii6z6f7f7oHXcOpNyvkJmmL7Hm97Ocge90CqUXE1bhq0R3mFliO%2BlUgQxHXgz1GQcNwRVYzxxvPcg15SC04Ab9w1dHL5vOyS6ZOnSxcHsJNpAIme5M5KZUR1H6fX6krj1VVo%2BaMt%2BRJuddv7ydWMal0nfDz7fCA2GJPhuj5GFEq5dVbkFOum5QdFvdAvP8u3Iga70E6L6g05TsqL7svNusrGkRPbXVmuPch7aCEOVpRUS0Osuj5e5aQKUCor4zZVHgNq%2BYW3u42yOEeww1TCiB8h4h%2BhLLkjgEs7kQEWYms0zJL%2FEwkweG0lN4Jj%2FyURp015SQnghN1QPWxnVMimb9%2F7C7fd3eJMuwDE1VNDCaY%2FOP6adJE2S0YSXaw62OhHEysqnlZx7ofLSTiWJPspspeceKQP6OXsRGEadPy2NxOvkIKeKKdDw1BC889kwGnvuW5CTky%2FTVn1EYL0DbMbOMrkWNMkQhy%2Bq%2FS%2BAPEgkjyaRRoiVnsEu3yZ1HZ4%2FdQnIVROXY7oWvUqHMWhfY%2Bsmr1CSsqIqhzMkMZDzInM1j2ukRmVp%2BncPQsgYAxXeDZWOzMrvDPG00Y3I4SWk6IMPqdicoGOqUBb4PVeKMzcnVTohCFcVbS36LYSgOpsaEFxboj0M5K5RD%2Bdejwo4YK0BzhU76xoBer2aLz0eeX1my9TgEHVDI%2BaIzpRmdALSfN4ddcbeYpbepv1WGIJ7wknVYRYpvjYAqodl8idO7E7luHDVi2vQAB0C%2BVrW0x2cBPQU3rhqHIPSZNCLJZXi7iVRmQY7bS7nzn3rrSMx8xKexFjcYAkWRay4EijdZF&X-Amz-Signature=d4f6e20dcb0330fdcde340ad5bed5ee5818c1ada697f18e4640681722ca5a041&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

