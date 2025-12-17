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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BKJLDDY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHa%2BsOtKPH4UDu04NrqtT29oFrdLRlUGdKZjiMad8SAgIgWk2lEDx5ukO5SrEwB4LF37rivtxNOGjYcdVDViMrDJ4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDNYQKHh9S1iTMTjA2CrcA7zFfBEn6HJU4eEevwllqC3Z%2BMDd2%2BWIJSO9gemxg%2B25SblJDcHxdJCDQ7p3nS6yFt02lUIn5He9WWMeOUYZuu2gIyc6ghid%2BH6Q7HQetsAE0TSYNY4dYILGiQRyfElmnxaOv8nFN8M3EXFHq28Nq50g6D%2FemkR%2FtcF%2BIydgnTCujF0AwhWYOkuKEQg8eVkgh3mbtVfIR2YPYFjgPAx1KcvY4Vtiub82IzOZS27Wue%2Bt4CHlCP4CSYEwGl8N2x%2B007t9GtF9x4du9YPMAwoRpsIj%2Fv8cp3NA%2FKx3AgNE%2FF9DclXrYZJI2zMpO94%2BdPe5gjCe6l3AkXntVdZzoiBF37RwjD1Pe6egOEAUnLYGnm5yCGpGoxmnSQAm8Th9rSn99ChAZGfIyGBk06pEoUAQexNQt9eVCmSnrNcT1Ghuj2bANemJLR7nhVP5TqS1qMxZeU%2FeVO4WiEcDWifGpx0EGAIfyEvpuhUCl%2Bc58BCt65dY36mRsVh1rY8qi9cSbX5m2f7V5WSe%2FbDljKvN8Y%2FI%2BkqlvGLfBtGr7rmSME7KjltGfMJEVJti22ierBnQI8dELKk7H5nMLh8%2BuUlGxzwyNy1SFkVjYNH5K9vWIsIP5tnXcW73qgxsTPHeZyd%2FMPaqisoGOqUBsEaWT8cyH1zcKiYAWEn4ko%2F6a%2FlXwJPb%2Fups6In8oK1j7BhN%2FYhHSCAV9C3OgZ2QsvHCBSD7CO6I6%2Bas88Tq3PRvd6yaUzzBA2rz8qh%2BO9ewHxI3S6btgc35rjFj%2B5kuI%2B48omah5IWk%2B%2B217aTR3WQMCbU%2BtrrRHjRHlOlmzB1jWWzRS0JYq9T4ey83tGEh0OVrJkEf73DPsuNjXHrPPE97ixRb&X-Amz-Signature=88b851359fcc287900ddec007dd66b3c55fa71ab72c5e18df8bfd6d45a84064e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BKJLDDY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHa%2BsOtKPH4UDu04NrqtT29oFrdLRlUGdKZjiMad8SAgIgWk2lEDx5ukO5SrEwB4LF37rivtxNOGjYcdVDViMrDJ4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDNYQKHh9S1iTMTjA2CrcA7zFfBEn6HJU4eEevwllqC3Z%2BMDd2%2BWIJSO9gemxg%2B25SblJDcHxdJCDQ7p3nS6yFt02lUIn5He9WWMeOUYZuu2gIyc6ghid%2BH6Q7HQetsAE0TSYNY4dYILGiQRyfElmnxaOv8nFN8M3EXFHq28Nq50g6D%2FemkR%2FtcF%2BIydgnTCujF0AwhWYOkuKEQg8eVkgh3mbtVfIR2YPYFjgPAx1KcvY4Vtiub82IzOZS27Wue%2Bt4CHlCP4CSYEwGl8N2x%2B007t9GtF9x4du9YPMAwoRpsIj%2Fv8cp3NA%2FKx3AgNE%2FF9DclXrYZJI2zMpO94%2BdPe5gjCe6l3AkXntVdZzoiBF37RwjD1Pe6egOEAUnLYGnm5yCGpGoxmnSQAm8Th9rSn99ChAZGfIyGBk06pEoUAQexNQt9eVCmSnrNcT1Ghuj2bANemJLR7nhVP5TqS1qMxZeU%2FeVO4WiEcDWifGpx0EGAIfyEvpuhUCl%2Bc58BCt65dY36mRsVh1rY8qi9cSbX5m2f7V5WSe%2FbDljKvN8Y%2FI%2BkqlvGLfBtGr7rmSME7KjltGfMJEVJti22ierBnQI8dELKk7H5nMLh8%2BuUlGxzwyNy1SFkVjYNH5K9vWIsIP5tnXcW73qgxsTPHeZyd%2FMPaqisoGOqUBsEaWT8cyH1zcKiYAWEn4ko%2F6a%2FlXwJPb%2Fups6In8oK1j7BhN%2FYhHSCAV9C3OgZ2QsvHCBSD7CO6I6%2Bas88Tq3PRvd6yaUzzBA2rz8qh%2BO9ewHxI3S6btgc35rjFj%2B5kuI%2B48omah5IWk%2B%2B217aTR3WQMCbU%2BtrrRHjRHlOlmzB1jWWzRS0JYq9T4ey83tGEh0OVrJkEf73DPsuNjXHrPPE97ixRb&X-Amz-Signature=76b10eef4f0a187f0388d307881b0c46e367dbb31c65ed94030bd9924bb7afc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

