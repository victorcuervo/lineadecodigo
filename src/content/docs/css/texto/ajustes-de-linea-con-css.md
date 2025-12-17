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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG34AOLF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGC8OdKQYFEz9Mxbr4A0g0wtky%2BDyWNb35YxlT14UWxEAiEAiddDdwZp5zyHL10wpi%2BM0xai0k%2B52huotNQLrCxRKvEq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDGY1s33VVLKSfPGWRircA0F4frEaqTKfub6DlsN9N6%2FO7wixfmkniswwGP9hAFdZiF%2FMM1bIr%2B%2Fm5cS6TmNH264FIa4T6rxV33mGwPXLsDT13%2Fz%2BWq6LOF%2Bc1vqFe9ZObBCqdrgCDkSLhipLKiadxFXM1FxMlQN7COMwKa2VymJRYiePTAJVttpQ7bQhrx4kngEyhsQahsCjeVKtn2gJ1LfiZW2H%2F2l4jnaj1YOz%2B1M61aD39S25uyoObI%2BZ73uWQWhqxxJph%2Bsnw1SChw0GaNKrwZdGiHJ8v2D0w2aCU%2BNd%2BK6%2BSmcr2f%2FoGmgO2orR%2F5v%2F0%2Fg4T95fK7%2FxrKzTorGv2P68dLw92Fua5rydfz7Zs4HabirNTB5SRy%2BuLxbkB5PK9Dll9fzeuNEKvZGtWjptb%2BfyEaB7Wq09rXFMXQa81Lk%2FLOhN4DnoM5m2EV4QQ1du%2BO8axLwmTCyC4PTrHa9kPN3ECfg9ejX2w4CJJ5XHL5%2BxBtu5X%2BsnFbnyVuMChyxF5p%2F6%2B1fnm2q6C4odxewmVh9qFVreBqtQh4%2BnvPFf%2BPwTzPNlT3Egr4eFiU4ReVxsArlajwhm67nLeXbKvEGdWK%2FdeKLyRZlkPU4RbNzNFtUpiCy9d%2FAWY1xxo0fb0%2Bp7d4HzV7UH%2FGwfMKbSicoGOqUB789KHKGM4aVwmZw44YLglIAvEMUnfXwImpVyZndOw%2FzDvwtDradL8acbXMZOlSKSS0ivfVglb%2FT9sDB0ONv3yDsop0vzKbR0ImwE8ug76ujUI4zhsH9YT96M8hZ%2BVqQ2VYLSwbjYU6u0wj5aGIh%2FtMblDzkfJ9uKMTpYuJerGQBa3CHx6IfqlIBAC3YBS8jfqKIMxY0Gx1iJPdFlrtOfgfnKwNOC&X-Amz-Signature=ba587ce9b6eecf90fa2ab417e1541f3c4f980bdfd40e90c6303e5f6fa4455c6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG34AOLF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGC8OdKQYFEz9Mxbr4A0g0wtky%2BDyWNb35YxlT14UWxEAiEAiddDdwZp5zyHL10wpi%2BM0xai0k%2B52huotNQLrCxRKvEq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDGY1s33VVLKSfPGWRircA0F4frEaqTKfub6DlsN9N6%2FO7wixfmkniswwGP9hAFdZiF%2FMM1bIr%2B%2Fm5cS6TmNH264FIa4T6rxV33mGwPXLsDT13%2Fz%2BWq6LOF%2Bc1vqFe9ZObBCqdrgCDkSLhipLKiadxFXM1FxMlQN7COMwKa2VymJRYiePTAJVttpQ7bQhrx4kngEyhsQahsCjeVKtn2gJ1LfiZW2H%2F2l4jnaj1YOz%2B1M61aD39S25uyoObI%2BZ73uWQWhqxxJph%2Bsnw1SChw0GaNKrwZdGiHJ8v2D0w2aCU%2BNd%2BK6%2BSmcr2f%2FoGmgO2orR%2F5v%2F0%2Fg4T95fK7%2FxrKzTorGv2P68dLw92Fua5rydfz7Zs4HabirNTB5SRy%2BuLxbkB5PK9Dll9fzeuNEKvZGtWjptb%2BfyEaB7Wq09rXFMXQa81Lk%2FLOhN4DnoM5m2EV4QQ1du%2BO8axLwmTCyC4PTrHa9kPN3ECfg9ejX2w4CJJ5XHL5%2BxBtu5X%2BsnFbnyVuMChyxF5p%2F6%2B1fnm2q6C4odxewmVh9qFVreBqtQh4%2BnvPFf%2BPwTzPNlT3Egr4eFiU4ReVxsArlajwhm67nLeXbKvEGdWK%2FdeKLyRZlkPU4RbNzNFtUpiCy9d%2FAWY1xxo0fb0%2Bp7d4HzV7UH%2FGwfMKbSicoGOqUB789KHKGM4aVwmZw44YLglIAvEMUnfXwImpVyZndOw%2FzDvwtDradL8acbXMZOlSKSS0ivfVglb%2FT9sDB0ONv3yDsop0vzKbR0ImwE8ug76ujUI4zhsH9YT96M8hZ%2BVqQ2VYLSwbjYU6u0wj5aGIh%2FtMblDzkfJ9uKMTpYuJerGQBa3CHx6IfqlIBAC3YBS8jfqKIMxY0Gx1iJPdFlrtOfgfnKwNOC&X-Amz-Signature=04b3720ab51ef3de9b8ec3dd3936207df9257f0074defbd1c1b4edd8608d4b90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

