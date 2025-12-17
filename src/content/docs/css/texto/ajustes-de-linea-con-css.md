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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUL76S7H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvoI87n614JFIXhSWL3nuZ%2FmuX7cYebPkSKN%2FIMbTSbQIgTjfrCFB76vg%2ByS5gDnvGisSlWkDfJJBbWC2jS8vCiMIq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDfXAFZo3KpgnZ%2FzPyrcA1Oz6qNTZ5u8on5ZNqpVCCBgLmYa9iEb9Hb0R3poVnLKjHDWD482jgoB8CHVdCKr6qM2PmqFtc8cQ%2FbOKrPKHwznyUvQHHoAtxjFaERA5hLCtIfFDHrMBn57CSY4c66rAxXNN1tja2R0gt2dFuDtpuxvC2oe5oBYbU5TINXP4yuMRA4O1GYD%2FIDhcxkY5xSKsiPjlTLJdiKu3zpP7V%2BnJQpmctFLYBqwFWnMYE2wkh8q5XspiGRGXt5KPrUsbu6xqM3aB2ZfRp7TvvDwPIdw96Womm%2BOuJamKB1AR2mgyovLu3mXfARm%2BsVRUrRXJc9bjFGI7R9jZdlsYKGVVyLQmCHDWrGEtCQ2GA%2FfWLlmh9ynJCbbBsfDHj1jaFOiNnzBWlrmG6p7s8VZ2UvN4eX7ibG6P46yjzmWk8BM8wiUBOnrWpRWmv4UhWE1ZD6BKik%2BTv0QHIumGQbBWkKCZs5M%2BCz0xiQ6G54sfs%2BOvrLNptEd95qbg%2F7IO5cWUfamznSi3M6DBPu3qvddWStQr2kpgJhsKVelip4UxqovCcwjQaVxMu65nnOIIymS4OQQ9AzwVFYNXzXNvLDUDdI62Ux5Gbi2TNeR8m3zC%2Fn4pwbf58EcO4yheEALJg1FcpsEMNXwicoGOqUBHsQgAEXrT9DUHQ3acf7yogSNix2NovPm9vQKN5FvfQLFfg9qz1TqvzubgLn4Wub60JZMNwty9Fjlg%2BV6HyimCbh6N5hWjir%2Fss2kUj44u%2FEAJepLHfeCcR4v0LUrV5tcft2RTG84awnc1SHFUkizTAx5vADsdPkxMWATYWWBS5h6oekClxKe4uNrfv1gRXGLjiOccZwt7MrXim5JF0oC8sxTJCNh&X-Amz-Signature=bdd4899bdd3147242c4f6d0e0b0f7eb9ae8b1b7c632ffc44dad7942e26339f01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUL76S7H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvoI87n614JFIXhSWL3nuZ%2FmuX7cYebPkSKN%2FIMbTSbQIgTjfrCFB76vg%2ByS5gDnvGisSlWkDfJJBbWC2jS8vCiMIq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDfXAFZo3KpgnZ%2FzPyrcA1Oz6qNTZ5u8on5ZNqpVCCBgLmYa9iEb9Hb0R3poVnLKjHDWD482jgoB8CHVdCKr6qM2PmqFtc8cQ%2FbOKrPKHwznyUvQHHoAtxjFaERA5hLCtIfFDHrMBn57CSY4c66rAxXNN1tja2R0gt2dFuDtpuxvC2oe5oBYbU5TINXP4yuMRA4O1GYD%2FIDhcxkY5xSKsiPjlTLJdiKu3zpP7V%2BnJQpmctFLYBqwFWnMYE2wkh8q5XspiGRGXt5KPrUsbu6xqM3aB2ZfRp7TvvDwPIdw96Womm%2BOuJamKB1AR2mgyovLu3mXfARm%2BsVRUrRXJc9bjFGI7R9jZdlsYKGVVyLQmCHDWrGEtCQ2GA%2FfWLlmh9ynJCbbBsfDHj1jaFOiNnzBWlrmG6p7s8VZ2UvN4eX7ibG6P46yjzmWk8BM8wiUBOnrWpRWmv4UhWE1ZD6BKik%2BTv0QHIumGQbBWkKCZs5M%2BCz0xiQ6G54sfs%2BOvrLNptEd95qbg%2F7IO5cWUfamznSi3M6DBPu3qvddWStQr2kpgJhsKVelip4UxqovCcwjQaVxMu65nnOIIymS4OQQ9AzwVFYNXzXNvLDUDdI62Ux5Gbi2TNeR8m3zC%2Fn4pwbf58EcO4yheEALJg1FcpsEMNXwicoGOqUBHsQgAEXrT9DUHQ3acf7yogSNix2NovPm9vQKN5FvfQLFfg9qz1TqvzubgLn4Wub60JZMNwty9Fjlg%2BV6HyimCbh6N5hWjir%2Fss2kUj44u%2FEAJepLHfeCcR4v0LUrV5tcft2RTG84awnc1SHFUkizTAx5vADsdPkxMWATYWWBS5h6oekClxKe4uNrfv1gRXGLjiOccZwt7MrXim5JF0oC8sxTJCNh&X-Amz-Signature=83949678da2b5f69ffb45549ef6f33ead960df4d83d3b82b907c122a78a27f6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

