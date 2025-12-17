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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJP5L7CK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAMFn0Gyne4bqSChv9bpi9vP7gcHUHUMBvNtUh6tfepAIgNSYPyxVeCJtQHDcXwUpPAU55JzS0eUWiCwm1kyEtt4Aq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKeZ8SqQHLa7%2Bdd7mSrcA9QujzGL45vxEoI%2FLc85npTom2Xeo%2FX50q9tikSaiSo6UMogc6pJXGxZyqFRgvpiFSLtog74e07WTAMddpcR7l%2FE1rGrITNrhPY4D%2FhvJjtzxU0G3%2Fkc6fYIDwhQ8kT3RqJy68LISq2Jr78dTqSOuDAa4YpPMxPjK5RzAw5MLnoT0FvcFJ2qWHPaG53Xh73mNfmHoPOUsgPL8fjjx6tQUJmxmjwEmDbyEGuyM640mqu15PsnKoh9XHKUyH4LR3py3iCN2mW6NCnoeyFh9XRk8i3hjNskwVGnvyPLQ6o8XGcSFs5aj9ZwkqZbHDY1mnf7oeLWN1YILJqNOHxpT%2F3qaEo0r0%2BUOltY79l33DOG4e8q7kQ8jY9TJfiw4THXCOQ7nS%2FG4Vhit7YfGCpXNaD31x%2BIoiwVYhCIaI9c9duIMAiaDP6lSuX2uOIB%2F2eCiX5EjMfgasyb7gD%2BdIIjrG%2B%2FYJnlWVQss0GQza0G0WZK3ZWiYXRwzj4bA0xCAcVTf9drA0rvrs%2FWNJ%2FIjptRVpjoSI4TF%2BUXPq7z3WAjDFbmbxMKWGa595JOwjnv%2BbyMdqfXoRDebfDCjMWXieIpRpJ%2B2BfGsSKbpJqQPbe0C2XIHmbujugX%2BPRFmeVkvDRmMIjfh8oGOqUBsYP2akBYfgYWNLIgZEX259BAJedlA%2FBuiv3A6YufzjZLl7Psx8bEYwqdo%2BrDaSzWebbArFytDKjPtfNn3bMNigj1NpymhYBDgzEHQaejvvWkYDAgi7NvAsSErqMHWJniki5vfIJmMBaukGsF7hjF3BM8d2ZDy4HQrFHRARGh02ZvcKflzb7EvaXyVupNybXLoJAnWDDGF%2FGLJ3Sh8s6uZWrQt6JJ&X-Amz-Signature=27244bc3f4e825a8a3c06e4ce3039858d010bd41d8f6aebd6f7a288d112505c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJP5L7CK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAMFn0Gyne4bqSChv9bpi9vP7gcHUHUMBvNtUh6tfepAIgNSYPyxVeCJtQHDcXwUpPAU55JzS0eUWiCwm1kyEtt4Aq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKeZ8SqQHLa7%2Bdd7mSrcA9QujzGL45vxEoI%2FLc85npTom2Xeo%2FX50q9tikSaiSo6UMogc6pJXGxZyqFRgvpiFSLtog74e07WTAMddpcR7l%2FE1rGrITNrhPY4D%2FhvJjtzxU0G3%2Fkc6fYIDwhQ8kT3RqJy68LISq2Jr78dTqSOuDAa4YpPMxPjK5RzAw5MLnoT0FvcFJ2qWHPaG53Xh73mNfmHoPOUsgPL8fjjx6tQUJmxmjwEmDbyEGuyM640mqu15PsnKoh9XHKUyH4LR3py3iCN2mW6NCnoeyFh9XRk8i3hjNskwVGnvyPLQ6o8XGcSFs5aj9ZwkqZbHDY1mnf7oeLWN1YILJqNOHxpT%2F3qaEo0r0%2BUOltY79l33DOG4e8q7kQ8jY9TJfiw4THXCOQ7nS%2FG4Vhit7YfGCpXNaD31x%2BIoiwVYhCIaI9c9duIMAiaDP6lSuX2uOIB%2F2eCiX5EjMfgasyb7gD%2BdIIjrG%2B%2FYJnlWVQss0GQza0G0WZK3ZWiYXRwzj4bA0xCAcVTf9drA0rvrs%2FWNJ%2FIjptRVpjoSI4TF%2BUXPq7z3WAjDFbmbxMKWGa595JOwjnv%2BbyMdqfXoRDebfDCjMWXieIpRpJ%2B2BfGsSKbpJqQPbe0C2XIHmbujugX%2BPRFmeVkvDRmMIjfh8oGOqUBsYP2akBYfgYWNLIgZEX259BAJedlA%2FBuiv3A6YufzjZLl7Psx8bEYwqdo%2BrDaSzWebbArFytDKjPtfNn3bMNigj1NpymhYBDgzEHQaejvvWkYDAgi7NvAsSErqMHWJniki5vfIJmMBaukGsF7hjF3BM8d2ZDy4HQrFHRARGh02ZvcKflzb7EvaXyVupNybXLoJAnWDDGF%2FGLJ3Sh8s6uZWrQt6JJ&X-Amz-Signature=539d2f048372532111af70e434050cb772e3d4271f2651145bd7257feb0b442b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

