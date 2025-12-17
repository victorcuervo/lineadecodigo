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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT7VHASJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmuGB7H2zrQA4Zwre%2BCWwVksKVncNBAEjyziW6oDDlGAiEA96%2BCnk6ZcBILyFJKU3hsKVN5rRDST9oy6D%2BHtdEiLKgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOKWHP0emp1GFZsXLircA4pSgrMZ%2BzcA%2FZHCXbDRRQoaYkTGQ9f0E5o66CzlZV0nlsTTO5Dx8OhXW6zF93D%2FaSaD%2Bue7Wl72lb8pq1OaTFHNxItEF81XN2%2Ff4OxrvBFfwhX%2FLAsrAcsMHNX3rWzCXly%2Bp0QRjOlg4fF6I28uNhikCLAES%2FB4q2jvD8wJr5jodlHCY1jr4U1IMAoWY2gt6CuKw0qD9W2%2FUkV%2FNA291ELWXjmAAwvMDph7kUkchZpjaBbPN7Uz%2B1JXE5pB%2BkiAG7Jy07UFqzyxSxlGCAyRbpavVOq6DyRRybU9iLg4Qh2i2OwFviOUM0G7IbpV9JJk5vhxmZHnJvylJeLGw%2BH6UcSz3xt69bcnxoNs8kAmRAayA%2BlSxfK31izasSlIs2P2fH%2B6358Oar89eRqy4KKcqv9bYyE9t8nIZd%2F57jJs1kZ%2FzApRFLq0kuHsgIDKErZWhyn%2BrN8Tzx%2FCwPo7OH%2Bp6v9DL3YKPOOa8URmle5Rv8xs4DQpnWm9z%2FRV2JOPw8Knu0qojmRxnIsAaAHsge7vnpTUkn7LBISVjkmXvM15olIiPoyKA7ZDYIJa%2B7SlkF5pmTBsGPZMGDV6%2BAEXhoBZldw4owwbpdUa4FYiKc3VL%2FowhUsFVWSfg%2BhPj8PxMOuei8oGOqUBHHCAT6h96HYJDwIcgEDvuNyC%2Bw8LOQo4z37VXiThDcHOQ8e0g9Rfa0%2B02IP8Vcp6dwlOLFeMd49heR9regmn%2BWYZtsx9Y6yUVHMOGapd4QuUYrE9bG8AaMMLniCB9CP6kAc8n6Pi49OyqqnU1DzSje8%2F24BVvIlDnXemKPBGbt9dlt9GsszHqlrnLJKfWpaGSS8Z%2Ba42WQh3lpfa7T9Uii%2Bu2ghf&X-Amz-Signature=0e31156537c3a7ab75c892dcacddbb82a32c64dfd56e0b59699d4ff35bf55be5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT7VHASJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmuGB7H2zrQA4Zwre%2BCWwVksKVncNBAEjyziW6oDDlGAiEA96%2BCnk6ZcBILyFJKU3hsKVN5rRDST9oy6D%2BHtdEiLKgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOKWHP0emp1GFZsXLircA4pSgrMZ%2BzcA%2FZHCXbDRRQoaYkTGQ9f0E5o66CzlZV0nlsTTO5Dx8OhXW6zF93D%2FaSaD%2Bue7Wl72lb8pq1OaTFHNxItEF81XN2%2Ff4OxrvBFfwhX%2FLAsrAcsMHNX3rWzCXly%2Bp0QRjOlg4fF6I28uNhikCLAES%2FB4q2jvD8wJr5jodlHCY1jr4U1IMAoWY2gt6CuKw0qD9W2%2FUkV%2FNA291ELWXjmAAwvMDph7kUkchZpjaBbPN7Uz%2B1JXE5pB%2BkiAG7Jy07UFqzyxSxlGCAyRbpavVOq6DyRRybU9iLg4Qh2i2OwFviOUM0G7IbpV9JJk5vhxmZHnJvylJeLGw%2BH6UcSz3xt69bcnxoNs8kAmRAayA%2BlSxfK31izasSlIs2P2fH%2B6358Oar89eRqy4KKcqv9bYyE9t8nIZd%2F57jJs1kZ%2FzApRFLq0kuHsgIDKErZWhyn%2BrN8Tzx%2FCwPo7OH%2Bp6v9DL3YKPOOa8URmle5Rv8xs4DQpnWm9z%2FRV2JOPw8Knu0qojmRxnIsAaAHsge7vnpTUkn7LBISVjkmXvM15olIiPoyKA7ZDYIJa%2B7SlkF5pmTBsGPZMGDV6%2BAEXhoBZldw4owwbpdUa4FYiKc3VL%2FowhUsFVWSfg%2BhPj8PxMOuei8oGOqUBHHCAT6h96HYJDwIcgEDvuNyC%2Bw8LOQo4z37VXiThDcHOQ8e0g9Rfa0%2B02IP8Vcp6dwlOLFeMd49heR9regmn%2BWYZtsx9Y6yUVHMOGapd4QuUYrE9bG8AaMMLniCB9CP6kAc8n6Pi49OyqqnU1DzSje8%2F24BVvIlDnXemKPBGbt9dlt9GsszHqlrnLJKfWpaGSS8Z%2Ba42WQh3lpfa7T9Uii%2Bu2ghf&X-Amz-Signature=e1571ac9a01b7a45b31e88aa09dc0bab2dad4e3b20d3448a0c37e1124084b2ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

