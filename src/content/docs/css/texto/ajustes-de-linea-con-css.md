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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IA356B7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAJBpuPdh8d%2FdPeSGu4IMhfXOditd5fcKbmHFBIgdIMqAiEA532UqA1h2ojOtl4GATMD%2F2cYBPHeDgf77O99lGwst%2Fkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDD21H70io3kRm3bddCrcA682p16by7cqRPrIrUP%2BtFU9DMqPlCbxxXHsLko0x%2BR0nXb0mcO3mL%2FJbVKbthdKNPIm6VlNb6z754zBLIfBSfI0Op2QaIZA3OLjymfsM3ymF4986sciaOhcTptCzmI7tdCebyDXuQV0IG8ToqUcRnAqaugIDz%2BgVu8oZ40EYElp0eUa0nvhjZH4uNS7RGfvDOXBKbzS6ZYNGUryH00BYZ5Ij3mbXXT2ZtHdL35m1zcvHMkBttv6cyW8r5bT5YuyWJCIrypAaPSd18z%2FHK9hc%2BsYmJjgWABGfexzANkXREYTnvP%2FyHGR0Bm7Z6z4oiMSksoy%2BPAepsV81T1OFXafgTwtjkl70eOS3lXcnz4NdOEUjO3%2FOR%2FbaaIr97x5j5IJs3nHU0lSjbZ3dxgHIc7IfuONeNd%2F9LYyMvelksQHXKMUkQcW7ty%2BRjYP08kQMBz4VAKSgruEdNvHfswdUXm1bPC3i3UKEjgjmCGVyQ1jeCxzumNlnvNzZ9Ood7EYK%2BRkWvZUmp%2Byl6Q45i2xwdD8FvePcnoMzfY4hBAtkB%2BmPiCR8lTWw%2Bl0n2zML9x81FyHBLQ9C4UKc7Ue82mT00D6hphy%2B7JGt3ePK6k%2Bs%2BWoy%2BObchJ0P0BEHHhB4nzFMK76h8oGOqUBdR5xevazqhWXRUgnqIUSIp%2FeC5Wv7%2BU%2BawVZa8T%2BOO9pHZH1LK77ngSrN6K5F%2F%2BTNt9YkuQZUXSCofl6p0puBMEgaSOEFfSVsEzgF5G8ze2dUth%2BflPFT4%2FIAWj3PqBnCGg0ynWZZMMhxv42mo02yGTjx6XL9V%2BEVEeGklCz8vgC35K3BtwLrwXbwoPU3X%2FB%2BHk9PlszBdHjXQZeOzgkvJZE7uEI&X-Amz-Signature=ee7630206d9fdc7f80337445db08e1bad9ec13abff46183757f2b272e2a1e947&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IA356B7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAJBpuPdh8d%2FdPeSGu4IMhfXOditd5fcKbmHFBIgdIMqAiEA532UqA1h2ojOtl4GATMD%2F2cYBPHeDgf77O99lGwst%2Fkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDD21H70io3kRm3bddCrcA682p16by7cqRPrIrUP%2BtFU9DMqPlCbxxXHsLko0x%2BR0nXb0mcO3mL%2FJbVKbthdKNPIm6VlNb6z754zBLIfBSfI0Op2QaIZA3OLjymfsM3ymF4986sciaOhcTptCzmI7tdCebyDXuQV0IG8ToqUcRnAqaugIDz%2BgVu8oZ40EYElp0eUa0nvhjZH4uNS7RGfvDOXBKbzS6ZYNGUryH00BYZ5Ij3mbXXT2ZtHdL35m1zcvHMkBttv6cyW8r5bT5YuyWJCIrypAaPSd18z%2FHK9hc%2BsYmJjgWABGfexzANkXREYTnvP%2FyHGR0Bm7Z6z4oiMSksoy%2BPAepsV81T1OFXafgTwtjkl70eOS3lXcnz4NdOEUjO3%2FOR%2FbaaIr97x5j5IJs3nHU0lSjbZ3dxgHIc7IfuONeNd%2F9LYyMvelksQHXKMUkQcW7ty%2BRjYP08kQMBz4VAKSgruEdNvHfswdUXm1bPC3i3UKEjgjmCGVyQ1jeCxzumNlnvNzZ9Ood7EYK%2BRkWvZUmp%2Byl6Q45i2xwdD8FvePcnoMzfY4hBAtkB%2BmPiCR8lTWw%2Bl0n2zML9x81FyHBLQ9C4UKc7Ue82mT00D6hphy%2B7JGt3ePK6k%2Bs%2BWoy%2BObchJ0P0BEHHhB4nzFMK76h8oGOqUBdR5xevazqhWXRUgnqIUSIp%2FeC5Wv7%2BU%2BawVZa8T%2BOO9pHZH1LK77ngSrN6K5F%2F%2BTNt9YkuQZUXSCofl6p0puBMEgaSOEFfSVsEzgF5G8ze2dUth%2BflPFT4%2FIAWj3PqBnCGg0ynWZZMMhxv42mo02yGTjx6XL9V%2BEVEeGklCz8vgC35K3BtwLrwXbwoPU3X%2FB%2BHk9PlszBdHjXQZeOzgkvJZE7uEI&X-Amz-Signature=334c19966138174f2133485f5eca1b0c3da066557f8e1568f6fd9804a8c7a98f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

