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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PYAGJQR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc2kfJ%2FiMM%2FsblQ8IOktWTpib7%2BjtVIlY4wL5m9K9pmwIhANqk9k6uYnyBmFP%2F%2BV4%2BxYzy5KKDTs6pKIMAfA5MyyC0Kv8DCH0QABoMNjM3NDIzMTgzODA1IgxBdFB0k6savs8gBPMq3AMhKVLHbeJfVBbS7tHtW7fEUZQOIoeOhSlBILZXwsyZrLMqxLqemqHGnvheA%2FhoeeLf8cv%2B1nMyDM2OqhzZypziLUKvJrBQTHuojgP%2FNA%2BGZ4xQF8wBokzUMk21ifhkbLdHKKt0jHnXPQy%2Fupyja5tDS4bQkz5QsOkWTp35l2kb0ff8llsUIV4pLo0cb5Z9jlPR08h773fUMtovg71NJrReDTMNVyOFn%2FrFyPlG%2BoOwdlYmkt%2BW7QFpTbQAyItwtsT1WbaoPWtcekvUsUqe6IhjQn%2BJeucpLsRC0y%2FeKSdfg9yp8HNcaIk1kHzUGYV8Va9GII1ijjxTnIvfwW9KLrKD2m0hu7ZZasnJEKxZLt141ubuu9mdXJU0ZYpn4VQADnLrzh3M60vz6g%2B5McQn4h4OaBy0OTbZVmcgFDcY%2BC98ibqo53qtKneEqYfonCIXR8gMYkGfCod6iLpE28oCQK7fj93GcPAlMWhb29Gs9%2FaiZW5Q7MsMwkHYdB7sqT10mEuau6N5AFD7iHAcIfZSNmnFsQMVIAqLTs%2Fk4due%2FDlbyRk%2BtTrz%2FIqSLMXFglyFxQ8WI4wzOTSSj8wKVilFGivfN4SKHhX8qHGVr3UVxMDbvRplI3XTAGB75JLfaDDYqorKBjqkAYr6%2FGFDT0e5iJ2hB1PjdthKdX9jWjr3J9xHsLeSDUxw51A5EQbH3TnyzzTJ7oZ0xPP7lV5nbkkWEn43fqqwAxxqSm0AhT1LQ%2BejmQf46OnP9FpKbCehFOgn3%2B2mTgRybXo8kEXeHN1aPExvgcbmzE29ZbTCLDutmzGyhsa%2BVrhcyk0N5RtQm1EyAf1afAb6Z6Efl6EpdVuLm46Ge69Yfmk5xUmj&X-Amz-Signature=e0ee8d24074c22076f0f7c4c7377f839f41e2d677bb1a589cef70d45ac387d57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PYAGJQR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc2kfJ%2FiMM%2FsblQ8IOktWTpib7%2BjtVIlY4wL5m9K9pmwIhANqk9k6uYnyBmFP%2F%2BV4%2BxYzy5KKDTs6pKIMAfA5MyyC0Kv8DCH0QABoMNjM3NDIzMTgzODA1IgxBdFB0k6savs8gBPMq3AMhKVLHbeJfVBbS7tHtW7fEUZQOIoeOhSlBILZXwsyZrLMqxLqemqHGnvheA%2FhoeeLf8cv%2B1nMyDM2OqhzZypziLUKvJrBQTHuojgP%2FNA%2BGZ4xQF8wBokzUMk21ifhkbLdHKKt0jHnXPQy%2Fupyja5tDS4bQkz5QsOkWTp35l2kb0ff8llsUIV4pLo0cb5Z9jlPR08h773fUMtovg71NJrReDTMNVyOFn%2FrFyPlG%2BoOwdlYmkt%2BW7QFpTbQAyItwtsT1WbaoPWtcekvUsUqe6IhjQn%2BJeucpLsRC0y%2FeKSdfg9yp8HNcaIk1kHzUGYV8Va9GII1ijjxTnIvfwW9KLrKD2m0hu7ZZasnJEKxZLt141ubuu9mdXJU0ZYpn4VQADnLrzh3M60vz6g%2B5McQn4h4OaBy0OTbZVmcgFDcY%2BC98ibqo53qtKneEqYfonCIXR8gMYkGfCod6iLpE28oCQK7fj93GcPAlMWhb29Gs9%2FaiZW5Q7MsMwkHYdB7sqT10mEuau6N5AFD7iHAcIfZSNmnFsQMVIAqLTs%2Fk4due%2FDlbyRk%2BtTrz%2FIqSLMXFglyFxQ8WI4wzOTSSj8wKVilFGivfN4SKHhX8qHGVr3UVxMDbvRplI3XTAGB75JLfaDDYqorKBjqkAYr6%2FGFDT0e5iJ2hB1PjdthKdX9jWjr3J9xHsLeSDUxw51A5EQbH3TnyzzTJ7oZ0xPP7lV5nbkkWEn43fqqwAxxqSm0AhT1LQ%2BejmQf46OnP9FpKbCehFOgn3%2B2mTgRybXo8kEXeHN1aPExvgcbmzE29ZbTCLDutmzGyhsa%2BVrhcyk0N5RtQm1EyAf1afAb6Z6Efl6EpdVuLm46Ge69Yfmk5xUmj&X-Amz-Signature=6ec7c41d620143ee98d425afe874ec1aacf47b520296f34a5109e0a32d944b9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

