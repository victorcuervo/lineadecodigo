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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTURV4BO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDDKaJLTTseWwKkxDXlAUeA3gWcyUVDI6GAnQkMVO8a6AiEAzWN%2FPDxRUs0EDrBaZL4cKUKo%2Fy4M%2FusKWY2aoyb656cqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNaG68R8WdNXN3jZyCrcAzN%2F%2BBbYfFticiZs0ciK%2BBLOl3IIkejXbxGOEGsA3gdMgdES3ZM41Myv4B2XzXdm6bkVbYvs3dyqpguspNTHSTsWuuLFn02uMe9unrcG363toDfpLkzG4p4N3jeU1O%2BOVjqBujCmGjRF6wsdMskSFRM5zldkUDVwddhzJJP%2BbmRHK1i4sxL2gIxk9kKNU87jj2YegKtuHnX6koCwuOwXqurKH71oyecjYXW0xSKi5bb%2FtmMMwifNZ4G%2FDaCY4H9P%2FqvCAwg9itNfWW42RZVqgLgPNUqzcNa80a%2BUyWWqHXj8TmNGtmXpBHHFo8p5t5gfE9diYUOLfz%2BxGye5SmkdeBcOE8i8X4qiUL20a5q3ucsYkY2V0%2FHF3YRIg3zzCjrW5RUdw%2B35HAhxAS0QYjGJsJwKw2FDBBGRFvcQfC%2BmZLIhRkzLFA2ob0yna%2Fp3NLi3K8JLZnuBSaNaGX6ARm%2B%2FQp7%2FIIxzCknasSGn7bvt4StWzor0htKPhdIwbrDaZkjWUUCfAeZqQFlh8GS4KmQQNTHrtqKWZd%2F33L4mtoabrT7q2Uf1%2FIwqYlzJ%2FwQTmuq%2FUzA%2BT6LrsKLnZvWYIlDq7n9JfKBc1sFWbGMyt%2FFTJZGKTI6dzPnVwPSUVbwpMJSujMoGOqUBMcwq7zedYpmhjDHP8N3YqXDgaZ008VzF6ztK%2B36fzXtRL5nMsoqn17p536bfJfDsFqtT1YjvdlfxAV6a2G45RWw6j%2FxtoqaWDu7S%2F9xchu8hlPYZltdbUR3LNxRDNd0AlY%2F5isvDyR%2Be5NgBfDNq5DE1%2B12H3XOl7NGBugGzVmERbu49cZDqef10UIrTniV%2B4VAT41l%2BOMCs07nrWZ53CLggCLl3&X-Amz-Signature=e1aae9d657743bf16fd614caeeca5210e42a1ce9e0cc702712fe368565aa127b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTURV4BO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDDKaJLTTseWwKkxDXlAUeA3gWcyUVDI6GAnQkMVO8a6AiEAzWN%2FPDxRUs0EDrBaZL4cKUKo%2Fy4M%2FusKWY2aoyb656cqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNaG68R8WdNXN3jZyCrcAzN%2F%2BBbYfFticiZs0ciK%2BBLOl3IIkejXbxGOEGsA3gdMgdES3ZM41Myv4B2XzXdm6bkVbYvs3dyqpguspNTHSTsWuuLFn02uMe9unrcG363toDfpLkzG4p4N3jeU1O%2BOVjqBujCmGjRF6wsdMskSFRM5zldkUDVwddhzJJP%2BbmRHK1i4sxL2gIxk9kKNU87jj2YegKtuHnX6koCwuOwXqurKH71oyecjYXW0xSKi5bb%2FtmMMwifNZ4G%2FDaCY4H9P%2FqvCAwg9itNfWW42RZVqgLgPNUqzcNa80a%2BUyWWqHXj8TmNGtmXpBHHFo8p5t5gfE9diYUOLfz%2BxGye5SmkdeBcOE8i8X4qiUL20a5q3ucsYkY2V0%2FHF3YRIg3zzCjrW5RUdw%2B35HAhxAS0QYjGJsJwKw2FDBBGRFvcQfC%2BmZLIhRkzLFA2ob0yna%2Fp3NLi3K8JLZnuBSaNaGX6ARm%2B%2FQp7%2FIIxzCknasSGn7bvt4StWzor0htKPhdIwbrDaZkjWUUCfAeZqQFlh8GS4KmQQNTHrtqKWZd%2F33L4mtoabrT7q2Uf1%2FIwqYlzJ%2FwQTmuq%2FUzA%2BT6LrsKLnZvWYIlDq7n9JfKBc1sFWbGMyt%2FFTJZGKTI6dzPnVwPSUVbwpMJSujMoGOqUBMcwq7zedYpmhjDHP8N3YqXDgaZ008VzF6ztK%2B36fzXtRL5nMsoqn17p536bfJfDsFqtT1YjvdlfxAV6a2G45RWw6j%2FxtoqaWDu7S%2F9xchu8hlPYZltdbUR3LNxRDNd0AlY%2F5isvDyR%2Be5NgBfDNq5DE1%2B12H3XOl7NGBugGzVmERbu49cZDqef10UIrTniV%2B4VAT41l%2BOMCs07nrWZ53CLggCLl3&X-Amz-Signature=23ff45b1215f4f58f6323197f41e8f926a213123f7c461a23f269d245607b4d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

