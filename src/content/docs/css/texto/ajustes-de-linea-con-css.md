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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2FU25NC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmVcSYiIli7Sd76PfYOlBDbIRkTGAZWBvYHfMgR%2Fd48AiEAtp9MAATwvLS%2Be3yiSqYzMwZ4j4ZcYPwEAdD3ZEEm3eIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjFoOhPmpybL%2BkP4SrcA1iVtNhs0r7Q4CbAt4Tt0%2FKNvfbRsh5W9daYGDO0FXcdIT6aFK4XU%2FtYGul3fhN1pXfWaoK5Hd9T2WxYjQ%2Bp71t9tnB3Zq1EuVsTirn7yp9%2FwrKU5mQVcNMzlbfYui%2BqqJVki6MkzGaYDsEgqzv5KVM47GhG%2F2Xit7J%2FGqbNMW%2FkhQx%2FZCw51cQ2%2BgLc7Eybx4YRaA1WBAvfDfDWMnyDKMiC%2F5PQB2UUs5Ze6IZ0ffz9wJzWfq6smDD9gyRLyOBGLR5ID5DK%2FWOrW%2FvXdzJWai06FLhy3oU1R8mAmBPYFRS1iF97cn35L9suGsGhTkiQh9i7Lnow%2FYevHAFmhrwFdHEmrUBay8Fl%2Bp6Q%2BH8cqLxMorPX3zCKkpFK9KMTnhxh0ejRcUfczOHGo7KKIgqYtIcYymgso%2FYj1E3dltc6ilvnTPOQFxwpguAwKr%2FbWShpji169tTuK%2BVs8VuYh6E3dPBYgaMMrIktDqn72kqV%2FY0lt2ixQtPLQ3ilkake4fZrUrL8KNlsDMjIdcWahCRkiljvE6BY8DJFEkuO%2FifaCMnj7Dscjq8ylaPs6LlmHUYqO%2BxXNl0ONrlWWGJYfLHNzR28VGM0pqme%2B1W5LO4udcZa0nuDIKB9J0GUHY%2F4MOSgi8oGOqUBY0WOV5eNS915%2FIPPEvM6Ccw3crNb%2FnyAEwAGiFw4tyxDvwU1LCjY5pqukQRgptcuMs0ru4VHp6JWsUetKFL1MnRrznVZnt%2Bl%2FcGZXWTDU15HB%2FTBon940K9fRRHr4UI23ngxuKOB6oiU4rFojkq2I6uEaM%2FFeusl5jSMRrqrrwoDzmVx4R57lZkukcvamECd7fK%2FTvTm9d4wX2nzJf4VEyEYFAVF&X-Amz-Signature=1053e6c3081c0699173264228dd0b885a57a23d6106d089db5cd83854039cc40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2FU25NC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmVcSYiIli7Sd76PfYOlBDbIRkTGAZWBvYHfMgR%2Fd48AiEAtp9MAATwvLS%2Be3yiSqYzMwZ4j4ZcYPwEAdD3ZEEm3eIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjFoOhPmpybL%2BkP4SrcA1iVtNhs0r7Q4CbAt4Tt0%2FKNvfbRsh5W9daYGDO0FXcdIT6aFK4XU%2FtYGul3fhN1pXfWaoK5Hd9T2WxYjQ%2Bp71t9tnB3Zq1EuVsTirn7yp9%2FwrKU5mQVcNMzlbfYui%2BqqJVki6MkzGaYDsEgqzv5KVM47GhG%2F2Xit7J%2FGqbNMW%2FkhQx%2FZCw51cQ2%2BgLc7Eybx4YRaA1WBAvfDfDWMnyDKMiC%2F5PQB2UUs5Ze6IZ0ffz9wJzWfq6smDD9gyRLyOBGLR5ID5DK%2FWOrW%2FvXdzJWai06FLhy3oU1R8mAmBPYFRS1iF97cn35L9suGsGhTkiQh9i7Lnow%2FYevHAFmhrwFdHEmrUBay8Fl%2Bp6Q%2BH8cqLxMorPX3zCKkpFK9KMTnhxh0ejRcUfczOHGo7KKIgqYtIcYymgso%2FYj1E3dltc6ilvnTPOQFxwpguAwKr%2FbWShpji169tTuK%2BVs8VuYh6E3dPBYgaMMrIktDqn72kqV%2FY0lt2ixQtPLQ3ilkake4fZrUrL8KNlsDMjIdcWahCRkiljvE6BY8DJFEkuO%2FifaCMnj7Dscjq8ylaPs6LlmHUYqO%2BxXNl0ONrlWWGJYfLHNzR28VGM0pqme%2B1W5LO4udcZa0nuDIKB9J0GUHY%2F4MOSgi8oGOqUBY0WOV5eNS915%2FIPPEvM6Ccw3crNb%2FnyAEwAGiFw4tyxDvwU1LCjY5pqukQRgptcuMs0ru4VHp6JWsUetKFL1MnRrznVZnt%2Bl%2FcGZXWTDU15HB%2FTBon940K9fRRHr4UI23ngxuKOB6oiU4rFojkq2I6uEaM%2FFeusl5jSMRrqrrwoDzmVx4R57lZkukcvamECd7fK%2FTvTm9d4wX2nzJf4VEyEYFAVF&X-Amz-Signature=3bde62a9e8d30f102f1912f1240294a45ee7dccebb79451740323b0aa85dcf71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

