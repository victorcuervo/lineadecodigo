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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYDBPNDH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVoYy%2B%2BgTsLz4s%2BUWAovN7YhX%2BOAsdc%2BE4FqIf2byIPAIhANIN2TivFiSUXO%2BcDuxdRSf%2BEyZkOzdaUgLkJjwyBNbwKv8DCHkQABoMNjM3NDIzMTgzODA1IgyJcToXLAKYsL7UvK8q3AMDN510m07cjL7e91KgMGLCmBwYUECLd8ZWPo0bytDvUYDdNV3eC%2BX97lolcPQTv3hxUrq2AwIUIOv5SeCF4I49xGzwIpdIiwF3nzZypHRt86Lpn6u5dXEufyUVjoV%2B5XEcolbAvZH%2BMIq2k%2FOH8KiFKmG0XTGJzQcP4OMaoRypxuXL%2B4JHm%2B5gkwFxx9%2BV9siWNCK%2FHaDPHO5DJTHf%2F1FocS%2Fq1RywekXPIBpp0mIJ9q%2FRP%2FMGRdB6l01ALQF1TDBRlcb2dlyw2ADzh%2Bg9lz5kRHLiW7M0CxrYmCFnO2OelaQgruS%2F7GK%2FyuJCT6UZ%2Bv%2BV93z12Z8rRgjctcknoajN0X0gCnIk368qbsqdeiWZPMLaPqC3G6nLlXRj2H9j3Qg3mqVa6AWnILm1Ku6wMtN7R3tLIvQgQQICWpTy88fWspZavfhYnLUfHhAAdvAyscjtgW8mc%2FSpI%2B%2F9Thus8C8tXX%2FxcMZCuZU0V5HoI2vP%2FbNQb881Y98BXefDpymDxVqk83to475FCnIegI9LH8EXoyq2jMUaxm4fspky80jwMwkQBhiGtSBr2NKmsK3N7oga8TKstrX43nymROTOrYg5GUop4DUU5IypsbLfDNNickOmM5O85GRL58aTOTCfuInKBjqkAaT4q1XYJ%2Fe8wEkMngs2TlDRahEqf6PrPg3%2BG35ZtvgIRE%2F863M%2BNclt%2Bna4wVslC%2FASpiKPg5V%2FTcdiDNDUGg%2F6b8TogV4aGmmPifSYcrTcvbUrffTdJyceqbnGVADIifGw47tmoJXdcDNlCIjIbnXFyyzM0QuD6fVki2LfLwHQdgQ7rI5AODpb9dBKkSv7Pz4yXOMccNshblEyHGqu3Qt1TONj&X-Amz-Signature=eebb4b575ee8cfeee03af28e91ff4405c54370a915f02aa3feb9ebf2ba899805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYDBPNDH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVoYy%2B%2BgTsLz4s%2BUWAovN7YhX%2BOAsdc%2BE4FqIf2byIPAIhANIN2TivFiSUXO%2BcDuxdRSf%2BEyZkOzdaUgLkJjwyBNbwKv8DCHkQABoMNjM3NDIzMTgzODA1IgyJcToXLAKYsL7UvK8q3AMDN510m07cjL7e91KgMGLCmBwYUECLd8ZWPo0bytDvUYDdNV3eC%2BX97lolcPQTv3hxUrq2AwIUIOv5SeCF4I49xGzwIpdIiwF3nzZypHRt86Lpn6u5dXEufyUVjoV%2B5XEcolbAvZH%2BMIq2k%2FOH8KiFKmG0XTGJzQcP4OMaoRypxuXL%2B4JHm%2B5gkwFxx9%2BV9siWNCK%2FHaDPHO5DJTHf%2F1FocS%2Fq1RywekXPIBpp0mIJ9q%2FRP%2FMGRdB6l01ALQF1TDBRlcb2dlyw2ADzh%2Bg9lz5kRHLiW7M0CxrYmCFnO2OelaQgruS%2F7GK%2FyuJCT6UZ%2Bv%2BV93z12Z8rRgjctcknoajN0X0gCnIk368qbsqdeiWZPMLaPqC3G6nLlXRj2H9j3Qg3mqVa6AWnILm1Ku6wMtN7R3tLIvQgQQICWpTy88fWspZavfhYnLUfHhAAdvAyscjtgW8mc%2FSpI%2B%2F9Thus8C8tXX%2FxcMZCuZU0V5HoI2vP%2FbNQb881Y98BXefDpymDxVqk83to475FCnIegI9LH8EXoyq2jMUaxm4fspky80jwMwkQBhiGtSBr2NKmsK3N7oga8TKstrX43nymROTOrYg5GUop4DUU5IypsbLfDNNickOmM5O85GRL58aTOTCfuInKBjqkAaT4q1XYJ%2Fe8wEkMngs2TlDRahEqf6PrPg3%2BG35ZtvgIRE%2F863M%2BNclt%2Bna4wVslC%2FASpiKPg5V%2FTcdiDNDUGg%2F6b8TogV4aGmmPifSYcrTcvbUrffTdJyceqbnGVADIifGw47tmoJXdcDNlCIjIbnXFyyzM0QuD6fVki2LfLwHQdgQ7rI5AODpb9dBKkSv7Pz4yXOMccNshblEyHGqu3Qt1TONj&X-Amz-Signature=040661e81297b9bc7060fc0b9c9e31e0adc66ed2afe0483671e1ffd9fb2dbcbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

