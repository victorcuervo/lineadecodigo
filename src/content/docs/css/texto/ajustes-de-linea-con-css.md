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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUCTDS5B%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV1WmwZTf4Nn47ygzlOK6ix8aMESMNVSmIyWwnI%2BfrPAIhAOLulLwrlU9juXjvtry2PkvEduB3dHF0Of1rSZRh9TntKv8DCHwQABoMNjM3NDIzMTgzODA1IgylYuyLDGNmGpx%2Ft%2Fkq3AMPMBdRH%2B5Cbr7MPbYh9F7mlCXOtUZmhq61hrMFn%2FYfqQKS3SeW4u7eWIrTR6bjAzxDnfzTHddTnNcaMwZS8ecAME7xJG6ZTNuclpyrcGonXSp4fbot%2BaSYSJ6KwcIhz04zlKAjy2HVyBgWce%2F%2F%2FDzEtbfYbA637YN2CV633P0SmLSpLIAHmrQK33x4sKhQx5FFcRJI9UDT4SxJ0Z6JjW4xEaFffdTnNGlqVT2mljTBU6dE31mbLnpPLQPPqQWTU77Lci7NvrLhFH%2F1jiV%2Bn6ME36FQ1xxpKQ8QUNp5%2FtBG%2FqTpTcBLvlBwegl1T5P56%2BXomUY%2Faeapna7j5gjnWPf72tsUTG2%2Bma4IVW7Eo1NYHE2KSDhYTs5Me12vDiSDc6dh3LKfv8vp60EjZyTxl5P70Kx%2B0yefu%2F8usRh9lJgzJUhWkYiHoOy0aM%2Fb6BBWHGmRrdjVg9W8m4L1MB94yJiyjpSj4LsNNQ4Yiu32aanqlAiJUKe6b59DSJ%2BaGMkaRH3U7KuR78bJs4FDR%2BNn2kRRtkd7HSjeB9U6wb9TRGLG1A9HCNhEo82hUPfc%2B1w3xwY7hZGlzSy2FppDfYp4Mb7PLPHnNijAecqyOg4wDWxJdDwAKXh1HCCPStqVCjDEjorKBjqkAanjBBTLSk3HzpJ6x2aRxUWCpdFD3Nl2EvtOxtiOz16cL2usKrJp2wTHXC2IDIC5SvcVhGkHa0h3t54jg0CJhCCXGPWDZBAeRJ0nhLFoRvsS9auR%2Fhh1C%2Bf%2B5r%2FjkqrDSdL4TuYQA0zrxYFxSx1%2BhlQzwm1pae2YVjcSItHIThQZJdjkoY3hAVXTNqB2NcP8h3qpTnvXTCE%2F%2FKX0hYEYCvpZZxS%2B&X-Amz-Signature=eef7c61102d93232aa1940d3d0b53f2a8d4e794e86a8a61d40d93f1d88509e1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUCTDS5B%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV1WmwZTf4Nn47ygzlOK6ix8aMESMNVSmIyWwnI%2BfrPAIhAOLulLwrlU9juXjvtry2PkvEduB3dHF0Of1rSZRh9TntKv8DCHwQABoMNjM3NDIzMTgzODA1IgylYuyLDGNmGpx%2Ft%2Fkq3AMPMBdRH%2B5Cbr7MPbYh9F7mlCXOtUZmhq61hrMFn%2FYfqQKS3SeW4u7eWIrTR6bjAzxDnfzTHddTnNcaMwZS8ecAME7xJG6ZTNuclpyrcGonXSp4fbot%2BaSYSJ6KwcIhz04zlKAjy2HVyBgWce%2F%2F%2FDzEtbfYbA637YN2CV633P0SmLSpLIAHmrQK33x4sKhQx5FFcRJI9UDT4SxJ0Z6JjW4xEaFffdTnNGlqVT2mljTBU6dE31mbLnpPLQPPqQWTU77Lci7NvrLhFH%2F1jiV%2Bn6ME36FQ1xxpKQ8QUNp5%2FtBG%2FqTpTcBLvlBwegl1T5P56%2BXomUY%2Faeapna7j5gjnWPf72tsUTG2%2Bma4IVW7Eo1NYHE2KSDhYTs5Me12vDiSDc6dh3LKfv8vp60EjZyTxl5P70Kx%2B0yefu%2F8usRh9lJgzJUhWkYiHoOy0aM%2Fb6BBWHGmRrdjVg9W8m4L1MB94yJiyjpSj4LsNNQ4Yiu32aanqlAiJUKe6b59DSJ%2BaGMkaRH3U7KuR78bJs4FDR%2BNn2kRRtkd7HSjeB9U6wb9TRGLG1A9HCNhEo82hUPfc%2B1w3xwY7hZGlzSy2FppDfYp4Mb7PLPHnNijAecqyOg4wDWxJdDwAKXh1HCCPStqVCjDEjorKBjqkAanjBBTLSk3HzpJ6x2aRxUWCpdFD3Nl2EvtOxtiOz16cL2usKrJp2wTHXC2IDIC5SvcVhGkHa0h3t54jg0CJhCCXGPWDZBAeRJ0nhLFoRvsS9auR%2Fhh1C%2Bf%2B5r%2FjkqrDSdL4TuYQA0zrxYFxSx1%2BhlQzwm1pae2YVjcSItHIThQZJdjkoY3hAVXTNqB2NcP8h3qpTnvXTCE%2F%2FKX0hYEYCvpZZxS%2B&X-Amz-Signature=f1371db8cbc81ceb501b6d58823619c8c6e678566965702bf55c392c9a12cbd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

