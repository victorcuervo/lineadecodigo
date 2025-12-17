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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWH2HQL5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwGHSWpyC8nFR0Ir1otXEUBchG1Oba7Erz7SRCccxp2wIgaLCjorxUe27iDx8%2FTkEy2FbUpcrQ5t0YCkbyvJUVh1cqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNJFXPnGriVwGwzE4ircA4gdlCSH1MfeQRQ%2FUv4trPnwcl5M9ClG79NiteP8QrT0hJ0GUuYA2N5OhLo6A1j95uf3ApWEyFEBimKhNwGholQ2EJKi8mN1Bf3CiGtRorbZyuLDBKNULJMSYCQ%2Fmz6pkkkmpUGHI6W6ky%2FALB7Xb2akSnibQ%2BPtNL1rVLnGOLPfknfQzpR2PHlX8lIqkxfI7oCXLVAgyNosVCcz7KwxaQrV8%2BBixvEKzhpJYOluZeVYUOsNsLWp2GLv%2BNKkJQfmLPf%2FaVG3W4bXQvolVdkhrzPx8NxJ29oF76RyF06wc0Ztd3iP57mGJpIiPuA78%2B5rBZEFs%2FglwyZZWMuWtJPfQWbD7b9dUI5RTGbZYxs8b99OTyQg%2BohHYP7kUBxY%2BU%2FOxb5ovABK3e2nPKdxMuJ4WD7VlAAzPr50Ubo7coNGGcs5qExNHD44YQ1airsHrYpO1joiL9dyFvbtpNRU7VSYlbiqE%2FPBiTfRacnIVvBkf9b0pJvjjKvptjJvyiDbsBjsGwxlxTuG2G6JH0J5qyDnQMFvCISqg0zJnu3JVSDjAoOfkvwAVx8Zq6zqTvd6vtqTjspNa5pDcWvVxlSDT%2BLq9NFSKyPaqtUSPzC%2FFiAgRkDVvqoeP9yIXuN%2BQ3HDMKeujMoGOqUBWlugZ2vThwxx%2FEeiGj%2BjLpuWgmoP328OtdWYzYgyKpCc2PhLz9BwPz5xMPtl1Y7%2FM04DXmlW0dT%2FD5ud3un%2FJNtFJHoaI9rbVG%2BCQxQYRfkgvilYksCNKJkd%2F%2FQUpzhw1OhnROCc6a%2BXUmm7nRf6RMM9NxQBWZi6B%2F0L4j3lOPkRPLMXyas%2FjItF0qZ3SlwptY70RzJs3rq0hIF3RhDVEd3AWCuB&X-Amz-Signature=cbe539723597439b7de5f160cfe5f967a14eeba482bbc1eb21384382119047b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWH2HQL5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwGHSWpyC8nFR0Ir1otXEUBchG1Oba7Erz7SRCccxp2wIgaLCjorxUe27iDx8%2FTkEy2FbUpcrQ5t0YCkbyvJUVh1cqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNJFXPnGriVwGwzE4ircA4gdlCSH1MfeQRQ%2FUv4trPnwcl5M9ClG79NiteP8QrT0hJ0GUuYA2N5OhLo6A1j95uf3ApWEyFEBimKhNwGholQ2EJKi8mN1Bf3CiGtRorbZyuLDBKNULJMSYCQ%2Fmz6pkkkmpUGHI6W6ky%2FALB7Xb2akSnibQ%2BPtNL1rVLnGOLPfknfQzpR2PHlX8lIqkxfI7oCXLVAgyNosVCcz7KwxaQrV8%2BBixvEKzhpJYOluZeVYUOsNsLWp2GLv%2BNKkJQfmLPf%2FaVG3W4bXQvolVdkhrzPx8NxJ29oF76RyF06wc0Ztd3iP57mGJpIiPuA78%2B5rBZEFs%2FglwyZZWMuWtJPfQWbD7b9dUI5RTGbZYxs8b99OTyQg%2BohHYP7kUBxY%2BU%2FOxb5ovABK3e2nPKdxMuJ4WD7VlAAzPr50Ubo7coNGGcs5qExNHD44YQ1airsHrYpO1joiL9dyFvbtpNRU7VSYlbiqE%2FPBiTfRacnIVvBkf9b0pJvjjKvptjJvyiDbsBjsGwxlxTuG2G6JH0J5qyDnQMFvCISqg0zJnu3JVSDjAoOfkvwAVx8Zq6zqTvd6vtqTjspNa5pDcWvVxlSDT%2BLq9NFSKyPaqtUSPzC%2FFiAgRkDVvqoeP9yIXuN%2BQ3HDMKeujMoGOqUBWlugZ2vThwxx%2FEeiGj%2BjLpuWgmoP328OtdWYzYgyKpCc2PhLz9BwPz5xMPtl1Y7%2FM04DXmlW0dT%2FD5ud3un%2FJNtFJHoaI9rbVG%2BCQxQYRfkgvilYksCNKJkd%2F%2FQUpzhw1OhnROCc6a%2BXUmm7nRf6RMM9NxQBWZi6B%2F0L4j3lOPkRPLMXyas%2FjItF0qZ3SlwptY70RzJs3rq0hIF3RhDVEd3AWCuB&X-Amz-Signature=5c9d6389336ea62a89a01959bb109d9e5706257b6f594f3e9a3283c493a32c88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

