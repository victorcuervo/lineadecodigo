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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRRYNFQS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkB3tUZH%2BlVpclrTPJBkMgdNkvlk3p7l%2Bq1dH2nzE5NAiEA6mZs%2FlkKWhWnjln7ne9xhyn5OmnGWGE1MBJQzADo5IIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPpZb4OfQcAQPit2SrcA7BzzGXg9GcPp77uukJxXuvCtBQC4NM%2BQy50ihbVqgXZKUJdzGLrQvHlzSX4m8bDdsZSW4bsYRzXTA2gaZQ05zoZj3asruIpx6qVIqYVmqx8l42dBQ7CpQcUjFth6fBF%2FMhR5sodFDI75Ox91Xc%2B2JjRxDN0mTUyvmF1wkSttKSnQAn5iaR68zND1qpPG8o8zn7aMMO9yyG%2BUhCyC%2FsoKg%2FwD2En233k5H73Fmzn4%2FHwFqkZphb%2Bo7dyL%2F3NQ1YgojQAvhV7l74cLipa9QH0Qce%2B%2Bs2zBk8TLC%2FCBcLh%2FYhhWzqABuWocR04U%2B9PB5vIIwFdkhGpEDjH54hjK1HyUnib58PF4mL%2F47J7CeujsgmxaX5H%2BHlnVtMXcQJuvpZf2vVd4boiSDp3npUWyNIJc29eYqpzG7glraLuWu3bxK64wA50wNm02dvxqXdlkMftXxerBX7%2Ba2RhSXOFdOjE%2Beim%2FtyszgTCVTcPeQymFoVs2YmTXb6eggaUFSxpQSIqZAABc%2BLxlOzaFBHCfOmQ0B4B7GKugBXNEsMfYM1xtLb6BNTNitt%2F43JmT1R3nMm6yi9XXFLu0ZPA%2B6lvf%2Fbq0zqak1jYEnHrkjCIzFgG4GaH4SK1fyBrW5a4I5vAMN%2Bgi8oGOqUBWiJkHlv4VG%2BNa6Fo0r8QPkZyuBvVIC3FNFygHHRSst0CU4s5dR9k0Q2Hebfn6OIvzG0OPZ4ES5yWsfBWMiimyADvEF9nrtx0lA%2B66%2Fix%2BvmPCuNjVUkxOxisSQmVy6kqxVDosRm8iexgdflgPYgEgqFNC%2F809VRtHt4Kvq1VEhdYTntwRKOnOssSpEZwhGbKmFORDvlMNTjrgH1rf8YN1j78rHv3&X-Amz-Signature=78dde2687bb75d8a20cbc2314b992210991b8b50b5eb2075d776329c2de134f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRRYNFQS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkB3tUZH%2BlVpclrTPJBkMgdNkvlk3p7l%2Bq1dH2nzE5NAiEA6mZs%2FlkKWhWnjln7ne9xhyn5OmnGWGE1MBJQzADo5IIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPpZb4OfQcAQPit2SrcA7BzzGXg9GcPp77uukJxXuvCtBQC4NM%2BQy50ihbVqgXZKUJdzGLrQvHlzSX4m8bDdsZSW4bsYRzXTA2gaZQ05zoZj3asruIpx6qVIqYVmqx8l42dBQ7CpQcUjFth6fBF%2FMhR5sodFDI75Ox91Xc%2B2JjRxDN0mTUyvmF1wkSttKSnQAn5iaR68zND1qpPG8o8zn7aMMO9yyG%2BUhCyC%2FsoKg%2FwD2En233k5H73Fmzn4%2FHwFqkZphb%2Bo7dyL%2F3NQ1YgojQAvhV7l74cLipa9QH0Qce%2B%2Bs2zBk8TLC%2FCBcLh%2FYhhWzqABuWocR04U%2B9PB5vIIwFdkhGpEDjH54hjK1HyUnib58PF4mL%2F47J7CeujsgmxaX5H%2BHlnVtMXcQJuvpZf2vVd4boiSDp3npUWyNIJc29eYqpzG7glraLuWu3bxK64wA50wNm02dvxqXdlkMftXxerBX7%2Ba2RhSXOFdOjE%2Beim%2FtyszgTCVTcPeQymFoVs2YmTXb6eggaUFSxpQSIqZAABc%2BLxlOzaFBHCfOmQ0B4B7GKugBXNEsMfYM1xtLb6BNTNitt%2F43JmT1R3nMm6yi9XXFLu0ZPA%2B6lvf%2Fbq0zqak1jYEnHrkjCIzFgG4GaH4SK1fyBrW5a4I5vAMN%2Bgi8oGOqUBWiJkHlv4VG%2BNa6Fo0r8QPkZyuBvVIC3FNFygHHRSst0CU4s5dR9k0Q2Hebfn6OIvzG0OPZ4ES5yWsfBWMiimyADvEF9nrtx0lA%2B66%2Fix%2BvmPCuNjVUkxOxisSQmVy6kqxVDosRm8iexgdflgPYgEgqFNC%2F809VRtHt4Kvq1VEhdYTntwRKOnOssSpEZwhGbKmFORDvlMNTjrgH1rf8YN1j78rHv3&X-Amz-Signature=f9ed6a4a11df96c241d7a2481ee7bd56efa24ababab0283c4020a2d0ee64eed9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

