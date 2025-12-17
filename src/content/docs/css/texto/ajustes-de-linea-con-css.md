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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7R54FY6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqpiON%2BIn1FmP50w9WeFUHnuyey3reBkue3LUg6gmZbwIhANvC2LvizW8xAXP2Uu2n6q1d3hdpnqitMHmsRpIGmzIAKv8DCH8QABoMNjM3NDIzMTgzODA1IgzfEWtsQlzMe9Y25ckq3AOymwroqzaUTDs85C0NfyIbmmxYOlUaWDJVyPWp9M%2FT6ghON1DUMnAr3WSULyjtrvLHHPNQ6zebieeCYpI6lWy2u29KFJJUjjDQJA9jgD6BxOhQo6hKkH6iNI6U3VDu4cnI%2BC%2FOZC5BxnX278ns4kJ4FFkOkGGNYz2fXNscSZXA8ij1hV1Qghr0760gfkjSPewlO6KlxIsKBsfCG3CMB7EMqUbDtmasu%2Fy3lg98aUiJ3PL2QavOdvYNvLWDzvY7HtohKduucYWMEP2l35mM83KUfLLiLRS938U9D4ZKeL%2BVt9IWClXF4ENbzLFLGIbg7Cfv7SiUbTnGuTfFjvd0dOIkb8Z2sEzxP3o3ZaPtA8OTxfXmh7VWNqSVcUqfQ%2FsODc10wFpgc35braKDQFzbV%2BbAud8cTjSvoUyYlae2PwycJ7YjywaTMgHyPh%2F3A6RilQ7tbkA3EwhVxlq4zcMx2WM761S1SwTANx4E2i17DgRdeKHO3jTZXe%2FlS%2BKFTQyOdr8aYNTZN6T%2Fq3%2Bqjg9SyRHbY%2BEoPbAnnqRHjWG%2B0HKXzDuX2oTGA%2B2WtwyTdw%2Bhw27wx2RCY%2BrKzOokPJc9VnfjZ3u%2F%2BnoHecuEzxUBVfrp8MDup8AkwiMQyeHdpTCk4YrKBjqkAc%2Fd48xAV79aLRGOZ2Mox7es%2FHVDyI4f3UMmkKNCebjBdu4ih6AQq%2Fq6YeBMQQi60ZFDrf3mBybl1DeBX7QcIATu3kmNDkDzJxJ8c9JJJduEqPXht2ezYUINuqdDA2XTVZdfovtYClmDX2f1LSklVYqNV%2FTNfVCfi0LgLo4fZiHl6hYwpwMSGL%2FOKNrZF0DrskD5xQ9lJ7WBKb%2B3hBTERfJ9qJ2X&X-Amz-Signature=e3f33a2e7e98c33b044f3c96bbf1a26a298fb2c20656461f21fad22a7557eb27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7R54FY6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqpiON%2BIn1FmP50w9WeFUHnuyey3reBkue3LUg6gmZbwIhANvC2LvizW8xAXP2Uu2n6q1d3hdpnqitMHmsRpIGmzIAKv8DCH8QABoMNjM3NDIzMTgzODA1IgzfEWtsQlzMe9Y25ckq3AOymwroqzaUTDs85C0NfyIbmmxYOlUaWDJVyPWp9M%2FT6ghON1DUMnAr3WSULyjtrvLHHPNQ6zebieeCYpI6lWy2u29KFJJUjjDQJA9jgD6BxOhQo6hKkH6iNI6U3VDu4cnI%2BC%2FOZC5BxnX278ns4kJ4FFkOkGGNYz2fXNscSZXA8ij1hV1Qghr0760gfkjSPewlO6KlxIsKBsfCG3CMB7EMqUbDtmasu%2Fy3lg98aUiJ3PL2QavOdvYNvLWDzvY7HtohKduucYWMEP2l35mM83KUfLLiLRS938U9D4ZKeL%2BVt9IWClXF4ENbzLFLGIbg7Cfv7SiUbTnGuTfFjvd0dOIkb8Z2sEzxP3o3ZaPtA8OTxfXmh7VWNqSVcUqfQ%2FsODc10wFpgc35braKDQFzbV%2BbAud8cTjSvoUyYlae2PwycJ7YjywaTMgHyPh%2F3A6RilQ7tbkA3EwhVxlq4zcMx2WM761S1SwTANx4E2i17DgRdeKHO3jTZXe%2FlS%2BKFTQyOdr8aYNTZN6T%2Fq3%2Bqjg9SyRHbY%2BEoPbAnnqRHjWG%2B0HKXzDuX2oTGA%2B2WtwyTdw%2Bhw27wx2RCY%2BrKzOokPJc9VnfjZ3u%2F%2BnoHecuEzxUBVfrp8MDup8AkwiMQyeHdpTCk4YrKBjqkAc%2Fd48xAV79aLRGOZ2Mox7es%2FHVDyI4f3UMmkKNCebjBdu4ih6AQq%2Fq6YeBMQQi60ZFDrf3mBybl1DeBX7QcIATu3kmNDkDzJxJ8c9JJJduEqPXht2ezYUINuqdDA2XTVZdfovtYClmDX2f1LSklVYqNV%2FTNfVCfi0LgLo4fZiHl6hYwpwMSGL%2FOKNrZF0DrskD5xQ9lJ7WBKb%2B3hBTERfJ9qJ2X&X-Amz-Signature=761b8df9f9267df20c7023ff337b493d212b609a13e7120921df1d6cdabb4bdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

