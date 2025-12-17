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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UHC3ZGK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOd17fwoGxHaYiCif%2BsXCIXK7B4p0ZXclHKHWQ84zSNQIhAJzzf6H7GRAGbAXSjHYT47eep1ws2fPQpH9IqEsgiqP0Kv8DCHcQABoMNjM3NDIzMTgzODA1IgwwvH9ei9SlI5ZhoJ0q3AM7mMu6sHP61dUmSMTtigobvuQ3BQZEX1w0PDlKhRy2VUPEQjJxEJ1KcroyW%2B2aIuvcPn5%2B0k5bHIaFh7ebAPmDlCkzcwaIMP6CA10mf09NPNE5wfy5P%2FUEdGi1bInE1jxrD%2Fi%2Fj2JR3d%2B2syvO6i2M%2FkBbj%2Fo2M50sG7TnsXmqVAGFTA%2FdwjOpoPmSsOyuOeabkNAStIcSUG8gtMLk%2Fy4hRnQTDMpugLxivp%2B00OtJDLsrgjueqd0GgYam4g0s7aLK25aPcE%2FeJNJ2LmfPi3nFvxAaxubDiZGdRJnP1pqTq5cLzrL9laT30inMDBBbh6wzezOro8n3BvX%2Fs%2Fj0vSCk%2FXAYmjyYaqLkWDx7td%2BYzVvKGh0mvDhjm0RAAGbHlapoEI33hq9ExYg1kZknQIl05oay29S5sIyOmYIyXL0Ikfoj6oOmakd2ZToVbA0yvMt2O84Xaev2VY3SO5OlpCmyUEIHUn1HH%2BMZRfXMDlZsD3zdg9xcSVtlKlngjWhKJQZWfl3kX0ZpMVViVYT7fpZAUb8R7jKGs3ha%2FL%2F8Cy3uBhpvzPHPPnz3jdkBZbbm1o%2BdeBRV7S1GGKvS4%2Bi8UpAHadR3ntGPf%2F1DGfOHM%2FLIbK6f82vZtFWdII6MmjDAgonKBjqkAdtUbhfHHAsVrRPCXnwfZI4YSvwOKZP8jbqBHo0q1VZsJIW4qkOxvlXjImKmQmahE4dfIL7hqyc2v%2BPmdo%2BFlKgGKFXFmZjrExQNCzzitJsgQpyRikLMF1uXfapCHdroYApIrv6J7CeI0rfq4KwK5a2uD81JnWWhkMVWnWpoRLrJNyeXw7G8HGb6tZZnD97imjZBDOD4eUgOql%2BwUU0KuOhzMGnR&X-Amz-Signature=decbc31c16da6b8f8050499d103bc3935fe806a809ac34a1ab0d67389a63628b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UHC3ZGK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOd17fwoGxHaYiCif%2BsXCIXK7B4p0ZXclHKHWQ84zSNQIhAJzzf6H7GRAGbAXSjHYT47eep1ws2fPQpH9IqEsgiqP0Kv8DCHcQABoMNjM3NDIzMTgzODA1IgwwvH9ei9SlI5ZhoJ0q3AM7mMu6sHP61dUmSMTtigobvuQ3BQZEX1w0PDlKhRy2VUPEQjJxEJ1KcroyW%2B2aIuvcPn5%2B0k5bHIaFh7ebAPmDlCkzcwaIMP6CA10mf09NPNE5wfy5P%2FUEdGi1bInE1jxrD%2Fi%2Fj2JR3d%2B2syvO6i2M%2FkBbj%2Fo2M50sG7TnsXmqVAGFTA%2FdwjOpoPmSsOyuOeabkNAStIcSUG8gtMLk%2Fy4hRnQTDMpugLxivp%2B00OtJDLsrgjueqd0GgYam4g0s7aLK25aPcE%2FeJNJ2LmfPi3nFvxAaxubDiZGdRJnP1pqTq5cLzrL9laT30inMDBBbh6wzezOro8n3BvX%2Fs%2Fj0vSCk%2FXAYmjyYaqLkWDx7td%2BYzVvKGh0mvDhjm0RAAGbHlapoEI33hq9ExYg1kZknQIl05oay29S5sIyOmYIyXL0Ikfoj6oOmakd2ZToVbA0yvMt2O84Xaev2VY3SO5OlpCmyUEIHUn1HH%2BMZRfXMDlZsD3zdg9xcSVtlKlngjWhKJQZWfl3kX0ZpMVViVYT7fpZAUb8R7jKGs3ha%2FL%2F8Cy3uBhpvzPHPPnz3jdkBZbbm1o%2BdeBRV7S1GGKvS4%2Bi8UpAHadR3ntGPf%2F1DGfOHM%2FLIbK6f82vZtFWdII6MmjDAgonKBjqkAdtUbhfHHAsVrRPCXnwfZI4YSvwOKZP8jbqBHo0q1VZsJIW4qkOxvlXjImKmQmahE4dfIL7hqyc2v%2BPmdo%2BFlKgGKFXFmZjrExQNCzzitJsgQpyRikLMF1uXfapCHdroYApIrv6J7CeI0rfq4KwK5a2uD81JnWWhkMVWnWpoRLrJNyeXw7G8HGb6tZZnD97imjZBDOD4eUgOql%2BwUU0KuOhzMGnR&X-Amz-Signature=bed07f5843161cc1a194cd9226d3e86a3903f1a9f8123b1c05047036175f8ee2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

