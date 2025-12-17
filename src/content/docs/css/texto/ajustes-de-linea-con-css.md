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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBQPQGRS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7HaT8FEqmJOfP2a86iPr0BsM%2FXfr4MGJTEJHYJPTt0AiAwD49bKvjHwPaxo%2FQjZe11r0LOsug9loIFyieDo0DSZyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRo5NtWzji6jwbWkOKtwDAPFBHLKaePIoeDAZ9B%2B%2B%2BisUu%2BQHBY9BF7oLmRfL%2BYwEEWTemjJsL7om%2FDYDrPHE8ovEyZyhO0%2F4SopDUskpeKjwSbIXy9Qs6RUytvEHb8UzCHdo6tGCHidj7dIuQ48NmabIZSc%2BgtQFSc7yf1k%2FOW9DhJhe2bZ4I89%2BSA5tXoeA3HJZIOjeGfLaamXpa%2FQ9A8O7UpUqNFGr13WoNE%2BvehcQ6uhXx%2FtfIFRcxzuF8u5wYq4jIoU4xadNZZqMy4O6nseqIAdOz2iqFEPYdr%2FoCbNutgx6sYWZWzGu7kMb9Bmo4fAHpVH0pADJwtJ%2Bu8serVaev8ScfqquIZqnqLjv6KUdSpo6UDoh3%2FVyPlXEAH4oHzCVrAhoqWxkjfnwZigxmmT1e9%2Fy6%2FZfv1DJONA%2BJ3tsO7Vveay4ywSGy5bq9JeLG0ue9W2uI5AbdD6CwbqcujHYIt3E2zrgIIPl6LoXWrej4PrUf%2F7Wy56rvzLORpCazRvs3FyNiha1zo0R16%2FZGrfqnGFZ%2B14ulApflZay9oJwjtsC9o8OAUrrcmUNpTcNCBfCPIGNZ891SlXA%2BNgxcZ9sptxrK6mz%2FG86nuMzc8HfhpekKIX2BPH7GsiBN96WADQp2ZJv4M2a5j4wzp6LygY6pgF%2FqmBuZ9jL78278qsJoYz74cXubqaxBpdGWGTFtX2WG7fPjEVbV0kanK3P%2BVDY1YZ0fldkd2pavTNEyc9u7m8ZPzmBSrCd9Lhu8Rfx22vxTbjIOjmC743SFu%2FR%2FrKvyzbnnLeYHv65Ctboqcdz6OpA%2BEM31l7N6%2BoVPkhafWG9DwI%2BfBxCVahMvg1IylsCHq3%2FlA2Xr%2FsSzGtwWVthltm3%2BSjcqQsP&X-Amz-Signature=46113181f0617cb9e41c446a138b2f0452b5ea57070b5daedaacafbfa952533d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBQPQGRS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7HaT8FEqmJOfP2a86iPr0BsM%2FXfr4MGJTEJHYJPTt0AiAwD49bKvjHwPaxo%2FQjZe11r0LOsug9loIFyieDo0DSZyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRo5NtWzji6jwbWkOKtwDAPFBHLKaePIoeDAZ9B%2B%2B%2BisUu%2BQHBY9BF7oLmRfL%2BYwEEWTemjJsL7om%2FDYDrPHE8ovEyZyhO0%2F4SopDUskpeKjwSbIXy9Qs6RUytvEHb8UzCHdo6tGCHidj7dIuQ48NmabIZSc%2BgtQFSc7yf1k%2FOW9DhJhe2bZ4I89%2BSA5tXoeA3HJZIOjeGfLaamXpa%2FQ9A8O7UpUqNFGr13WoNE%2BvehcQ6uhXx%2FtfIFRcxzuF8u5wYq4jIoU4xadNZZqMy4O6nseqIAdOz2iqFEPYdr%2FoCbNutgx6sYWZWzGu7kMb9Bmo4fAHpVH0pADJwtJ%2Bu8serVaev8ScfqquIZqnqLjv6KUdSpo6UDoh3%2FVyPlXEAH4oHzCVrAhoqWxkjfnwZigxmmT1e9%2Fy6%2FZfv1DJONA%2BJ3tsO7Vveay4ywSGy5bq9JeLG0ue9W2uI5AbdD6CwbqcujHYIt3E2zrgIIPl6LoXWrej4PrUf%2F7Wy56rvzLORpCazRvs3FyNiha1zo0R16%2FZGrfqnGFZ%2B14ulApflZay9oJwjtsC9o8OAUrrcmUNpTcNCBfCPIGNZ891SlXA%2BNgxcZ9sptxrK6mz%2FG86nuMzc8HfhpekKIX2BPH7GsiBN96WADQp2ZJv4M2a5j4wzp6LygY6pgF%2FqmBuZ9jL78278qsJoYz74cXubqaxBpdGWGTFtX2WG7fPjEVbV0kanK3P%2BVDY1YZ0fldkd2pavTNEyc9u7m8ZPzmBSrCd9Lhu8Rfx22vxTbjIOjmC743SFu%2FR%2FrKvyzbnnLeYHv65Ctboqcdz6OpA%2BEM31l7N6%2BoVPkhafWG9DwI%2BfBxCVahMvg1IylsCHq3%2FlA2Xr%2FsSzGtwWVthltm3%2BSjcqQsP&X-Amz-Signature=1bc55670923e92fc78ade511017ef86537deca02c7f3d7fa68e1cae27871b954&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

