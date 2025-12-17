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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RHI64VY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBpeUlFOMrFnDBu2aJP7BzrJ308C0CJGXxDjNdbBDwluAiBvx6ndBHg0Lt8uWqARC%2Btbquy6rZEGJmzZYRPuy7EKuir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMdFFxjgJ3KCv89ETiKtwDRDRGwYq0AaXa992%2BshBikGfEGtzmPhuRG6VRaRqiMjEQUMNE3%2F4y56v0QDVNp6YLgFTYb93F2fjEqC%2F1Xb6HjrEvPGLVX81wnlV0T%2Fp8AERUYEA2q8aBexRzyfZSsSxcEKDG6NVHLPPvo0ATZGhpgzaINsPf1M2sW9QsRGSua5F%2FPcwOUbvcHtTlg%2BqC6zz1igTFSw3wHe5RC7tifBAg38i%2BrJT4LqsBj1iXny4yGcDfCjbdNJ3KN%2FchZCRLKkHFLw92Z9jd5UBfX5jYhn8qdaLik4mnOODdnV81wOuLLc5%2BYnbYEmLxlQ2K1rKO4q%2FcHoWIVS4JrQJXnuiCAWqChPifKhi5vIOXODktu%2BYxV0yo09LVFOwm01WrRPkKO%2BtMVUssDl17pWbDmwVzRt2hdqBBkNLsL%2BMzABhTTfg4RRWxKsUaYwbd92wO43o23OOvFVHicl%2FzXBQv%2BxcEH5HULjJ6ebGQkBB3VzN%2BdAmwDYhmZHmIscF7%2BP1kHKPUn%2BXYXNElqGF%2BtLSJ5w7v5mFFJI5y6pCal2MKE9U%2BDiVS6B7%2FITXG2ue1TpfCaqpe6RMyZLt40WNbmZXIhchXhqmWY2X4YAnczpfqrBdZ41UtM5ss1tT8jgcPGFkC0OIwno%2BKygY6pgGawZxoJ6kq6kwzSMyakiYvlryj%2F6aoYKXQ%2FNx0Lry7OVVCXAXrhmAwGpWT%2BVP4xstnBRy5pE9nLemb1X3W%2BUyKpEMuJfzni7niBCDlbqOa096ekxOk05rB6kWnmccjgHoeunf9PhnLfeln3lGA%2FlU6VnaW%2B%2FAk4fHNPokVCpdqXiUOcMnisb7d%2FnJheSgu57v9x9%2FbAxfm42LWl1%2B%2Bo80QR%2BwcF8yi&X-Amz-Signature=3b19ff791b70fc7f3c8b7db652ed545f5554c6fb134ff073e5c8382a44fab806&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RHI64VY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBpeUlFOMrFnDBu2aJP7BzrJ308C0CJGXxDjNdbBDwluAiBvx6ndBHg0Lt8uWqARC%2Btbquy6rZEGJmzZYRPuy7EKuir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMdFFxjgJ3KCv89ETiKtwDRDRGwYq0AaXa992%2BshBikGfEGtzmPhuRG6VRaRqiMjEQUMNE3%2F4y56v0QDVNp6YLgFTYb93F2fjEqC%2F1Xb6HjrEvPGLVX81wnlV0T%2Fp8AERUYEA2q8aBexRzyfZSsSxcEKDG6NVHLPPvo0ATZGhpgzaINsPf1M2sW9QsRGSua5F%2FPcwOUbvcHtTlg%2BqC6zz1igTFSw3wHe5RC7tifBAg38i%2BrJT4LqsBj1iXny4yGcDfCjbdNJ3KN%2FchZCRLKkHFLw92Z9jd5UBfX5jYhn8qdaLik4mnOODdnV81wOuLLc5%2BYnbYEmLxlQ2K1rKO4q%2FcHoWIVS4JrQJXnuiCAWqChPifKhi5vIOXODktu%2BYxV0yo09LVFOwm01WrRPkKO%2BtMVUssDl17pWbDmwVzRt2hdqBBkNLsL%2BMzABhTTfg4RRWxKsUaYwbd92wO43o23OOvFVHicl%2FzXBQv%2BxcEH5HULjJ6ebGQkBB3VzN%2BdAmwDYhmZHmIscF7%2BP1kHKPUn%2BXYXNElqGF%2BtLSJ5w7v5mFFJI5y6pCal2MKE9U%2BDiVS6B7%2FITXG2ue1TpfCaqpe6RMyZLt40WNbmZXIhchXhqmWY2X4YAnczpfqrBdZ41UtM5ss1tT8jgcPGFkC0OIwno%2BKygY6pgGawZxoJ6kq6kwzSMyakiYvlryj%2F6aoYKXQ%2FNx0Lry7OVVCXAXrhmAwGpWT%2BVP4xstnBRy5pE9nLemb1X3W%2BUyKpEMuJfzni7niBCDlbqOa096ekxOk05rB6kWnmccjgHoeunf9PhnLfeln3lGA%2FlU6VnaW%2B%2FAk4fHNPokVCpdqXiUOcMnisb7d%2FnJheSgu57v9x9%2FbAxfm42LWl1%2B%2Bo80QR%2BwcF8yi&X-Amz-Signature=c279ab6bd20766b644e5a219cf25acf04962e78c22b637d321c454fa03a2c803&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

