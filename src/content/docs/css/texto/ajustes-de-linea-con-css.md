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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BHK4HGH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4JRoo8fl%2Bb72BkCP9GzfzCV81ItXKj9XmG1LAZ8XGbgIgQ6Dj1Sxg5I2w6yEYyUlaHKICLB6mz%2F3NH9PpRGXNwaQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDBAfYMs7CrPspYarwyrcA6yq5USF5vfXoI6HiX17oHWdD2scnbv6XLVbP0GKbjEiMhXhyPKrygevd4UbGGFPfFQ7uy2IztaaLHEP3W7UtCXydFP5hsIoOsl6LIO890X9G%2BjPSEP6s76OyFDt6o2jRWXDyOQGw1%2BQsQaD7pDZ0HdiJyqZs0K7rEHSqxth2cyE2dbiFZkcUJSncZvAr56fF8CcD%2FZAo6hlnaJHgFdbXhs2%2FIiEDT1ACm1mRPBI6BpKLcPVsPqTuT5a8R91fERRwcmSoGkRb9LgTkpX3YsMXEX6iZSaG1CKeM%2FynKSqaIUiZE8q52v%2FS67OEXXjVS2VNdmRmKTJJWmfE3SyQElIIVtYmJ6m%2FnV5cSDgCjxa8WG3nHzFaia%2F%2FOJTTPlMSviYLkkiG4jIIiy1%2BCg4bKNxpOGsaDVc9U%2B47qFYSsWQRHftQPHfO9SlFihEEP9W0qpfttqaThsZb740z3jKOtg%2F%2BVcHA%2BHZxS8XMSMAm3woem2gVoWL3R5Qk9SwXahD2pLxF0Y3oGcBSaLGt%2F%2B5UHBYxkLe5pYFoorg3hIP%2B3ix7uQ65amdoE1oQU9kOX2v6%2B%2FUHuuLSHY1lu4tL5zK7gRp5o7oYm%2F1xXmO%2FjzjKpF6cGs0vIC2NonBKnaUXMMJMJj7h8oGOqUBHXsjimu6NtAIuJKwBZYnWH7jYQFN959OMKG7NQTvH1Ltt9c9THQOX4qsJixq3ikmEr2kH0onNKluttSFqIGSS%2FkLcjcKX6NHsQMO9LR4ohCNpajNC8zK38DpIO27gC2ETVjinN%2FI9azDE5UR0FVYsZpumA9gBvO62nJNFWveWBM8fykuMexKSUa7R3%2BhHFTHXZwm9iTov%2B5ltSKxHExWf%2FHam7q0&X-Amz-Signature=1b4e2d44389391f4a956a2eae682db22c0366d9ed60a710d196a1dfe0e875b81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BHK4HGH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4JRoo8fl%2Bb72BkCP9GzfzCV81ItXKj9XmG1LAZ8XGbgIgQ6Dj1Sxg5I2w6yEYyUlaHKICLB6mz%2F3NH9PpRGXNwaQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDBAfYMs7CrPspYarwyrcA6yq5USF5vfXoI6HiX17oHWdD2scnbv6XLVbP0GKbjEiMhXhyPKrygevd4UbGGFPfFQ7uy2IztaaLHEP3W7UtCXydFP5hsIoOsl6LIO890X9G%2BjPSEP6s76OyFDt6o2jRWXDyOQGw1%2BQsQaD7pDZ0HdiJyqZs0K7rEHSqxth2cyE2dbiFZkcUJSncZvAr56fF8CcD%2FZAo6hlnaJHgFdbXhs2%2FIiEDT1ACm1mRPBI6BpKLcPVsPqTuT5a8R91fERRwcmSoGkRb9LgTkpX3YsMXEX6iZSaG1CKeM%2FynKSqaIUiZE8q52v%2FS67OEXXjVS2VNdmRmKTJJWmfE3SyQElIIVtYmJ6m%2FnV5cSDgCjxa8WG3nHzFaia%2F%2FOJTTPlMSviYLkkiG4jIIiy1%2BCg4bKNxpOGsaDVc9U%2B47qFYSsWQRHftQPHfO9SlFihEEP9W0qpfttqaThsZb740z3jKOtg%2F%2BVcHA%2BHZxS8XMSMAm3woem2gVoWL3R5Qk9SwXahD2pLxF0Y3oGcBSaLGt%2F%2B5UHBYxkLe5pYFoorg3hIP%2B3ix7uQ65amdoE1oQU9kOX2v6%2B%2FUHuuLSHY1lu4tL5zK7gRp5o7oYm%2F1xXmO%2FjzjKpF6cGs0vIC2NonBKnaUXMMJMJj7h8oGOqUBHXsjimu6NtAIuJKwBZYnWH7jYQFN959OMKG7NQTvH1Ltt9c9THQOX4qsJixq3ikmEr2kH0onNKluttSFqIGSS%2FkLcjcKX6NHsQMO9LR4ohCNpajNC8zK38DpIO27gC2ETVjinN%2FI9azDE5UR0FVYsZpumA9gBvO62nJNFWveWBM8fykuMexKSUa7R3%2BhHFTHXZwm9iTov%2B5ltSKxHExWf%2FHam7q0&X-Amz-Signature=d7e79896c222cb4e8edf8d3d8af63bf2e4746c882b97b1fe3d19c90ddf753892&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

