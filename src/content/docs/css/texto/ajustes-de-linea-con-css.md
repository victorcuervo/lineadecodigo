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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPMX2WYD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4ApISWLbbKiOa9V02LG1I7Wr5%2F9%2BQUNtUu0p5AxvvyAiA6MQQFuMooxtyQd3ZuX9z3uN%2FYrbaIGWC2%2BJRofx8F%2ByqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3amUH4bkh2lajSETKtwDihIEZkkZXcAtvHEwdNrKw%2FFLqYSvKnM5RwIGYI4oNV%2Fy1jv1vuQ5EDrMHZ9sjwC4AfLn%2FcTfkIcQESv3rbyx70Evw35LLjD2nQGlNoVCRa8vUC6%2B1BAlBn1BMZCErG%2FGH5KZdVW8XiNmjjbImg0aSQ%2FYgWWeFXxB%2BAW0BAypf26u2LK4Z9d4q8laImKvrDDsscgZNAyepiP72eZQaggPbtZYmBz6Awp0tKUhyc7so1quPwz2iDGjFe4AQ90TmyFe4dfCxgLaeF0dQ5BiTQ1xHN4JmD0GJFVlaxcqgU95CS5uhEFCKXIKAMHA%2BifiMJ9crFPzngt%2FZwLKf%2Bi3PSw6Upevk0bgxedMfyYWrtdB2nxp756IuRt%2BYBQU%2FduLjg7iXDxh1tzVoSJo4Eo7GtzsZl9f2eeSRddVbh1aOJE6%2Fi5Y0HB2jQW9Zyl0LBoMnITuB9sKEJ%2BfJzV9pnjiKfLP21qaC32KF3%2FsarQAzh8idytTjToMHI%2FqaVYZBGVNv0kf3K5YTzxAOarQAzMosdRgPH4dNF1Z5aW5uq2lkLooOTGFcOUGQ6LBqofYm06Bv85POLFQSd0%2Bemzx0sTXHNOQzMbNMjRhN9BBlH6mTIXHxlxJ1Rj7nPL%2FsmapziUwy62MygY6pgF7TlrQ1X%2BnY6kCfZOdQkHDYWbQd4R5ayHiAhk2Mkw4KRsO9h1UPz7%2B8v3Y%2BfWfkOuDlPNWZxd18yj%2FNzlu%2Fsd6bsk%2BhWJ6ItHrfVvfSR47nQfU1OzIbbIAiy7P9cYxQD5eAUY6iNHrnCPAyRaXusPXiQlw2xstJkfKIUR2ye1Ho195CIQ9JVXwqiKPIXwpFG%2BFhYJK5oQyZF77ny5OgnoC0w53z2E5&X-Amz-Signature=b7cb92d8e035d5e84aed3cdb475d081c4dfaa040c346b788cb71febbf9cdf3df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPMX2WYD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4ApISWLbbKiOa9V02LG1I7Wr5%2F9%2BQUNtUu0p5AxvvyAiA6MQQFuMooxtyQd3ZuX9z3uN%2FYrbaIGWC2%2BJRofx8F%2ByqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3amUH4bkh2lajSETKtwDihIEZkkZXcAtvHEwdNrKw%2FFLqYSvKnM5RwIGYI4oNV%2Fy1jv1vuQ5EDrMHZ9sjwC4AfLn%2FcTfkIcQESv3rbyx70Evw35LLjD2nQGlNoVCRa8vUC6%2B1BAlBn1BMZCErG%2FGH5KZdVW8XiNmjjbImg0aSQ%2FYgWWeFXxB%2BAW0BAypf26u2LK4Z9d4q8laImKvrDDsscgZNAyepiP72eZQaggPbtZYmBz6Awp0tKUhyc7so1quPwz2iDGjFe4AQ90TmyFe4dfCxgLaeF0dQ5BiTQ1xHN4JmD0GJFVlaxcqgU95CS5uhEFCKXIKAMHA%2BifiMJ9crFPzngt%2FZwLKf%2Bi3PSw6Upevk0bgxedMfyYWrtdB2nxp756IuRt%2BYBQU%2FduLjg7iXDxh1tzVoSJo4Eo7GtzsZl9f2eeSRddVbh1aOJE6%2Fi5Y0HB2jQW9Zyl0LBoMnITuB9sKEJ%2BfJzV9pnjiKfLP21qaC32KF3%2FsarQAzh8idytTjToMHI%2FqaVYZBGVNv0kf3K5YTzxAOarQAzMosdRgPH4dNF1Z5aW5uq2lkLooOTGFcOUGQ6LBqofYm06Bv85POLFQSd0%2Bemzx0sTXHNOQzMbNMjRhN9BBlH6mTIXHxlxJ1Rj7nPL%2FsmapziUwy62MygY6pgF7TlrQ1X%2BnY6kCfZOdQkHDYWbQd4R5ayHiAhk2Mkw4KRsO9h1UPz7%2B8v3Y%2BfWfkOuDlPNWZxd18yj%2FNzlu%2Fsd6bsk%2BhWJ6ItHrfVvfSR47nQfU1OzIbbIAiy7P9cYxQD5eAUY6iNHrnCPAyRaXusPXiQlw2xstJkfKIUR2ye1Ho195CIQ9JVXwqiKPIXwpFG%2BFhYJK5oQyZF77ny5OgnoC0w53z2E5&X-Amz-Signature=e7535a91cc6d9651990213828fe1525b2744fdc5bfe0873f5dbb18ca1ac07ccc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

