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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHCRM427%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArXcIeFK10%2F3QaBNwGl7grOgpwxF%2BaxQ%2B5VOJLambFLAiEA9NULK3QkLzcz2zKpM8p7feJwpiImWcbZBnzGSpEvQvwqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMYzjg4C%2BoeUOEQvoyrcAz%2BDvzyJlPjxHy4KEv2tbSTqSGEnaEXNx%2F4cbylBrCIQhEXFzD%2FmXS73Durc%2B80qQRpuxXWFpA0Nfq2%2FyFT5UOR%2BN5Au2S3yQhezEAdsRTdpvHyDQ9nhhTDALkMx2EykN4c1jR2S0FU9JGkIQ97ATrE1KCmg1Fj17aW%2Be77N2LtPJZHq8mhrMaA6Z0ZZuWMqciasVFs4KrI91bqLPwC9O02eb0i8yCVd%2FWudZjVVPSOVW%2BNVDzCZvQe8HZEcP18axetcT%2BmCxFf4RUJEnoyYSr%2Fx5s72toyqg2eDjDYDl01AZ8H%2FOOOfhKf8E%2F2Ub47FGNKgs1mOMUGlHfGWkCb5is5OumoRRIRMQJQm1MG9tgwWi%2F76OwSBz5dxt9dTdyKxYMyJtXyLjBVk5Vvp4PT1fcEZQx%2F9jWVRnD5ifUNRV%2BaFDDrOzJX9XyI2Ym8OHMFUCOBZ%2FHelSJ5y31uyqnTVfCx%2B0llDfDfUdMdcYvnc89ShhdmlukcKEJCGbvZx8ByAlDNZzksmZSlT6nTbKXnsAXPYW2qmX8HVWJYsxn7A%2B5yNYgkwNUWJd1kepHdd2jm4pVEM6gGxSyJnmP3lMOMHh2QcxGxG1e63WZpjCZwUzJQhveL%2B6Yu4LOpZSVbDMIiAi8oGOqUBsJt3Ye4PV4Sv7S2WVT6jroS%2FKP0iK%2FkKWLrWgKe7r3E2RW3Muplwfi4%2B5kqVm7oBF7Bog%2BfKRq3JZF%2BQVXhdZAdXgomuFzkJmxvWLxsDMabUSEFtNloN8ESPNtRc9%2B1TR9dMpt%2Bi1CFrFRRGZ9zPqGxqHnq4Qbzm2jpMjDy2sWyBqGA05H7K3JwcI8eNkH187f9fFtin4tTUAukU6O93pjCZzqWv&X-Amz-Signature=58f898de2219f1a175adb719ecd249ef8e6632c1ace38cf6724659674d0090c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHCRM427%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArXcIeFK10%2F3QaBNwGl7grOgpwxF%2BaxQ%2B5VOJLambFLAiEA9NULK3QkLzcz2zKpM8p7feJwpiImWcbZBnzGSpEvQvwqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMYzjg4C%2BoeUOEQvoyrcAz%2BDvzyJlPjxHy4KEv2tbSTqSGEnaEXNx%2F4cbylBrCIQhEXFzD%2FmXS73Durc%2B80qQRpuxXWFpA0Nfq2%2FyFT5UOR%2BN5Au2S3yQhezEAdsRTdpvHyDQ9nhhTDALkMx2EykN4c1jR2S0FU9JGkIQ97ATrE1KCmg1Fj17aW%2Be77N2LtPJZHq8mhrMaA6Z0ZZuWMqciasVFs4KrI91bqLPwC9O02eb0i8yCVd%2FWudZjVVPSOVW%2BNVDzCZvQe8HZEcP18axetcT%2BmCxFf4RUJEnoyYSr%2Fx5s72toyqg2eDjDYDl01AZ8H%2FOOOfhKf8E%2F2Ub47FGNKgs1mOMUGlHfGWkCb5is5OumoRRIRMQJQm1MG9tgwWi%2F76OwSBz5dxt9dTdyKxYMyJtXyLjBVk5Vvp4PT1fcEZQx%2F9jWVRnD5ifUNRV%2BaFDDrOzJX9XyI2Ym8OHMFUCOBZ%2FHelSJ5y31uyqnTVfCx%2B0llDfDfUdMdcYvnc89ShhdmlukcKEJCGbvZx8ByAlDNZzksmZSlT6nTbKXnsAXPYW2qmX8HVWJYsxn7A%2B5yNYgkwNUWJd1kepHdd2jm4pVEM6gGxSyJnmP3lMOMHh2QcxGxG1e63WZpjCZwUzJQhveL%2B6Yu4LOpZSVbDMIiAi8oGOqUBsJt3Ye4PV4Sv7S2WVT6jroS%2FKP0iK%2FkKWLrWgKe7r3E2RW3Muplwfi4%2B5kqVm7oBF7Bog%2BfKRq3JZF%2BQVXhdZAdXgomuFzkJmxvWLxsDMabUSEFtNloN8ESPNtRc9%2B1TR9dMpt%2Bi1CFrFRRGZ9zPqGxqHnq4Qbzm2jpMjDy2sWyBqGA05H7K3JwcI8eNkH187f9fFtin4tTUAukU6O93pjCZzqWv&X-Amz-Signature=9d29ab0879151430e9f8d92527c44dde887a558f058d1bae6c6004a293510c23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

