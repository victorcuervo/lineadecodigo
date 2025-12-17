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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIBU5NUJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMleL1Wmh1Glg7bTbjnyk8VcjNjbK635yPsxuJc%2ByCxAIgCLHBfSw6n6uWDgw7FaVnW%2FRpnp1fn1aorveCTiAbMtMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGc2ZyZeJRut0NBlircA5y8urHAIikatIfBNKZ3EzLeEUMzXu6SF2865DBz%2Bx7dHdqDoewEQEmv7clIySCELI%2FuqeOOALuRlheK7adDRL1rLsLoB3wdiBfD9%2BymyKioRvBBzvWhZ%2BjkpEKlkk8SBCWa3hckyYIrvU7mPvbXD6ibX2EPjcxTSVvUQ%2FweFVkMqxf%2B83Oy0prcp3W009PXxHYWc3uFCKVDdxhlN1tECGmS0TO3TgD%2FOr3ZZBQOK4wTkpWJJUICLhNXKJC%2Fkcwf7yV4hi%2BX48vDNPXqA0YRSvAQ%2FykZuKyi%2BVUNjXFh1ijfzVq0zUZBkUqYvGM4aVjhrCECrrGQkClTa4zQChj38BZO1QswS8jllB%2Bcck1I7xuyGQw4N2vbgS%2Fx%2B009Bw7F%2FuurNmT1o%2FqX%2Fn5TroUX3wCi%2FQMOFyioQDtI1Eoa5QGoAm0K3bBX2fhM4XZKM7SlN8UpNduOye%2BjgQ0Vhwpe1At2RZ7jHjmPzIc1ao81bAFeNx3k23P3%2Bh2NXPkf7JdQBtZ8NAJf%2BnPOO7GanEzgxZrDglsoX5ERMVO0zhpHOUR44xhL%2FE77XGFQfc1aFUw1lFxTzPPc5ChpPv5d4%2FXc1DeWUwmCGG3fmQJcNoK7OHmwKAknzthKfDNUWRjdMPiujMoGOqUBfntDS9zRpbPoLEQVuunDSAkTVnZTfw%2F4d1w7Jg7YVxZshxw16shHMx7TpuRAye37aUmZfmEuqD1NSngmU6mpNjhvicm9JLpgX0MkSAZvbnaSSKFIbpnGtTzgteyDGQJ0dZmBCQhF%2BtPibV5p5hxFbn2sDJ1caUWi6c7DBZspiR7QXew2%2BeVTPyHUtQEzpFAu8Occ9T49PQNWqPEvb7fFzqx%2BBZXY&X-Amz-Signature=bd7431fafc0497c5471cb1bd945194374dc6a1edeebab783b9bd0afba6acab9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIBU5NUJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMleL1Wmh1Glg7bTbjnyk8VcjNjbK635yPsxuJc%2ByCxAIgCLHBfSw6n6uWDgw7FaVnW%2FRpnp1fn1aorveCTiAbMtMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGc2ZyZeJRut0NBlircA5y8urHAIikatIfBNKZ3EzLeEUMzXu6SF2865DBz%2Bx7dHdqDoewEQEmv7clIySCELI%2FuqeOOALuRlheK7adDRL1rLsLoB3wdiBfD9%2BymyKioRvBBzvWhZ%2BjkpEKlkk8SBCWa3hckyYIrvU7mPvbXD6ibX2EPjcxTSVvUQ%2FweFVkMqxf%2B83Oy0prcp3W009PXxHYWc3uFCKVDdxhlN1tECGmS0TO3TgD%2FOr3ZZBQOK4wTkpWJJUICLhNXKJC%2Fkcwf7yV4hi%2BX48vDNPXqA0YRSvAQ%2FykZuKyi%2BVUNjXFh1ijfzVq0zUZBkUqYvGM4aVjhrCECrrGQkClTa4zQChj38BZO1QswS8jllB%2Bcck1I7xuyGQw4N2vbgS%2Fx%2B009Bw7F%2FuurNmT1o%2FqX%2Fn5TroUX3wCi%2FQMOFyioQDtI1Eoa5QGoAm0K3bBX2fhM4XZKM7SlN8UpNduOye%2BjgQ0Vhwpe1At2RZ7jHjmPzIc1ao81bAFeNx3k23P3%2Bh2NXPkf7JdQBtZ8NAJf%2BnPOO7GanEzgxZrDglsoX5ERMVO0zhpHOUR44xhL%2FE77XGFQfc1aFUw1lFxTzPPc5ChpPv5d4%2FXc1DeWUwmCGG3fmQJcNoK7OHmwKAknzthKfDNUWRjdMPiujMoGOqUBfntDS9zRpbPoLEQVuunDSAkTVnZTfw%2F4d1w7Jg7YVxZshxw16shHMx7TpuRAye37aUmZfmEuqD1NSngmU6mpNjhvicm9JLpgX0MkSAZvbnaSSKFIbpnGtTzgteyDGQJ0dZmBCQhF%2BtPibV5p5hxFbn2sDJ1caUWi6c7DBZspiR7QXew2%2BeVTPyHUtQEzpFAu8Occ9T49PQNWqPEvb7fFzqx%2BBZXY&X-Amz-Signature=7de4bc751603b2f079b16ffd73ff74bbbc0d031d1f2be66bcb267597f606bbb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

