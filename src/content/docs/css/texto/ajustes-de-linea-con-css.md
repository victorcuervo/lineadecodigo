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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C5I5NV4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBgBGS31YyB1wZ1IS0Rcqw7T3KV%2FgeX14RsfzRyQJOPAiEA%2BssGNBhAGb8KXzXdj6E%2F4ecHhKgOPwmuU5VlvJoLU0Qq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDM1KKKBiPL5wLOnhBircA3ZpGEEGHMNASuksD5p1T%2FBJZsBS1MHdZCc1VV%2FRf1RKPCg5QQ9j8paihCHJ4LcLJOPIwyajBoOLxp2TtpIkoK7t%2Fh%2FYLHIEdJl3vfL2IOVMGEmobw0ql8VknLR6hyWShKC7t3tlNLD%2BU2rts5%2F2RecPVcXJ%2BDIJsqzX8O%2F8DTJnHJ2FJwFfALHdzoLGruvfZfYsBxGhZuV3RJGluSNkoniwzfVOuoWuxvfdwQUG7MOf3aYBLbxgo98rxRg0tdfEhyWMYdhu0xK00O1AjGnyMlX19onqxM7uY2UOGf9FobIj8eu5bDutpeyMrWzGjdcrXVmJz0PixlWW6SkZNepWImLXwGbXLdLuJqB3%2FVh0Vn4MrUoiDAOaejByfLCyM4f9B7LalRrEOQp10264OENiT92MyrsVIFbtkItYbB3ibrbxSfL5coc%2FamoXAMQPC7rl84VqJjhQym7aADUJ6vbWARp8cVMWIQBkQzC2cfcvuE50Y0CbRBNj61e2ZU1wqabfeVhmlWEzJP%2BX3R1CRUeOp5fGtS3m%2Fk6%2FPk1G1lSHpJpqqh87alObo8%2FyRwPI8zWj7KtYdmnj7fKz4HTwIiyhtB8nkAxT4xtwJrqKgvcuv9fAjlPmQ%2BkQYnBeUheQMI%2FPiMoGOqUBfjxVWfUQUrj0vXHkBec7euXWWdMhjzWlboyHXt0%2FMwXNQw2%2B1xF62IY65S04kCKxaCsZ7dnsf94ZQiR2ODCAi3qQJV6IwgvQ%2Be7k76dNE66MbquZyZ1itLjNBQFJeAGRPZCp8smUHyRkLSDytDBLh5IhquL%2Fdgl5EGvuE4H4jF4qksGPtgiwNlQ7zhIjL4kUyzrSvc5Z0I8VtAjvafHpKzeeFAh4&X-Amz-Signature=f7f15f5d14f20aadf1d4e2395ea740b4c2690bf8ae98db4354ac288dac5be03e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C5I5NV4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBgBGS31YyB1wZ1IS0Rcqw7T3KV%2FgeX14RsfzRyQJOPAiEA%2BssGNBhAGb8KXzXdj6E%2F4ecHhKgOPwmuU5VlvJoLU0Qq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDM1KKKBiPL5wLOnhBircA3ZpGEEGHMNASuksD5p1T%2FBJZsBS1MHdZCc1VV%2FRf1RKPCg5QQ9j8paihCHJ4LcLJOPIwyajBoOLxp2TtpIkoK7t%2Fh%2FYLHIEdJl3vfL2IOVMGEmobw0ql8VknLR6hyWShKC7t3tlNLD%2BU2rts5%2F2RecPVcXJ%2BDIJsqzX8O%2F8DTJnHJ2FJwFfALHdzoLGruvfZfYsBxGhZuV3RJGluSNkoniwzfVOuoWuxvfdwQUG7MOf3aYBLbxgo98rxRg0tdfEhyWMYdhu0xK00O1AjGnyMlX19onqxM7uY2UOGf9FobIj8eu5bDutpeyMrWzGjdcrXVmJz0PixlWW6SkZNepWImLXwGbXLdLuJqB3%2FVh0Vn4MrUoiDAOaejByfLCyM4f9B7LalRrEOQp10264OENiT92MyrsVIFbtkItYbB3ibrbxSfL5coc%2FamoXAMQPC7rl84VqJjhQym7aADUJ6vbWARp8cVMWIQBkQzC2cfcvuE50Y0CbRBNj61e2ZU1wqabfeVhmlWEzJP%2BX3R1CRUeOp5fGtS3m%2Fk6%2FPk1G1lSHpJpqqh87alObo8%2FyRwPI8zWj7KtYdmnj7fKz4HTwIiyhtB8nkAxT4xtwJrqKgvcuv9fAjlPmQ%2BkQYnBeUheQMI%2FPiMoGOqUBfjxVWfUQUrj0vXHkBec7euXWWdMhjzWlboyHXt0%2FMwXNQw2%2B1xF62IY65S04kCKxaCsZ7dnsf94ZQiR2ODCAi3qQJV6IwgvQ%2Be7k76dNE66MbquZyZ1itLjNBQFJeAGRPZCp8smUHyRkLSDytDBLh5IhquL%2Fdgl5EGvuE4H4jF4qksGPtgiwNlQ7zhIjL4kUyzrSvc5Z0I8VtAjvafHpKzeeFAh4&X-Amz-Signature=cf0cf72734fc32e1c8d23c26c774a428185d90b6121f58380c46dcebaac24eca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

