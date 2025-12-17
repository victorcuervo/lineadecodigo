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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHPJJYAJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqRB%2BwwhK2pITde%2FQCqi6maZdD4CZGIiH4TRb%2F1yA0qwIhAM9S4u9lGAX%2BeFAqrzCGZR5YCMTkmPF4BATbXgwUy%2BfbKv8DCHUQABoMNjM3NDIzMTgzODA1IgyW4F1%2F4xp5%2BVW4HPcq3AOlU4JssQhzkZmCT472iyrNCVhicwFS%2FuNPd4dLC2jaXSs7pxkr1j1oJZIsAimF2lGFH1FarOVnnyCQwRT%2FPKYGA3zmXVW6t%2FLcUQdzdXoaFW8F0QM7ywzrVhz5rkaFEP0fQy1F8IIauYmOgCpfsVI%2Fbz0AZ1WvHpQx43GPmfcWU8hwv8Kwz%2FQQhYY5VcXKL8JdLvzcjwgJP21xV0fuUWF%2FY1btdb6sJgc6KL8EkJPC3DpxjLeWEKr1oQ25VMZFpxF2Ri8gdaLoWtu8cxZfMdPQjcPemp9OgYiPT2lffWx2W6axnYYRvvYyxkFaHIlhCU0KPPpNVSvc5NAPoNkXBUCzIj9xBOi%2FsR2%2B3RTaDvXKQK4Ujh6lQsekMV4PpgTLAhPFSeyLdCCoGT42eFyP3J5yUpr%2Fg9McYLUodEbTjs1zOzV89KiAZVydnO2b6Dj31KdeVZ%2FO%2BMAIOBBhby%2FLYE7SCflVK9YKM7LUXlGITGbg31DK0tb0ajiVp2zCfeZNyZOjqf%2FQb1kOXiSDIx5aqXQVbj%2Bi0wJxEeDSIp%2BA%2Fun64KYa6Hhzl%2FXQsiS6SHqMWLKic1r%2BqiwNZZLM8Hyoq5dx679hlMdwCLAphrdVBZNaT8TyBSnfr4QbN1rkOTCyzojKBjqkAflpSB2v3LipG3iF1w2UpzSvNptlEDENmuKabfynewSPzXiq2CtLq1TKfCKR5CPDoZ%2Ff98p%2F7igKAq34W43EyFIKNM21aSvFJYTA%2BMK8qURDtnXAneIsZEP%2Bcb337Vc5Rm6e03XzhtLBJCgFlb9BiCNAYC5Zmajyxtc%2FIwQNX4mkPdHXxmhGxaWtKwjOqD82QY1k%2B6N3g1I7QM1CqDzfa3vme3Ok&X-Amz-Signature=9945a1ca5ddb81b2bd0be16af91b8d8537b7f91adbb40bce41e0edffd9cfa133&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHPJJYAJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqRB%2BwwhK2pITde%2FQCqi6maZdD4CZGIiH4TRb%2F1yA0qwIhAM9S4u9lGAX%2BeFAqrzCGZR5YCMTkmPF4BATbXgwUy%2BfbKv8DCHUQABoMNjM3NDIzMTgzODA1IgyW4F1%2F4xp5%2BVW4HPcq3AOlU4JssQhzkZmCT472iyrNCVhicwFS%2FuNPd4dLC2jaXSs7pxkr1j1oJZIsAimF2lGFH1FarOVnnyCQwRT%2FPKYGA3zmXVW6t%2FLcUQdzdXoaFW8F0QM7ywzrVhz5rkaFEP0fQy1F8IIauYmOgCpfsVI%2Fbz0AZ1WvHpQx43GPmfcWU8hwv8Kwz%2FQQhYY5VcXKL8JdLvzcjwgJP21xV0fuUWF%2FY1btdb6sJgc6KL8EkJPC3DpxjLeWEKr1oQ25VMZFpxF2Ri8gdaLoWtu8cxZfMdPQjcPemp9OgYiPT2lffWx2W6axnYYRvvYyxkFaHIlhCU0KPPpNVSvc5NAPoNkXBUCzIj9xBOi%2FsR2%2B3RTaDvXKQK4Ujh6lQsekMV4PpgTLAhPFSeyLdCCoGT42eFyP3J5yUpr%2Fg9McYLUodEbTjs1zOzV89KiAZVydnO2b6Dj31KdeVZ%2FO%2BMAIOBBhby%2FLYE7SCflVK9YKM7LUXlGITGbg31DK0tb0ajiVp2zCfeZNyZOjqf%2FQb1kOXiSDIx5aqXQVbj%2Bi0wJxEeDSIp%2BA%2Fun64KYa6Hhzl%2FXQsiS6SHqMWLKic1r%2BqiwNZZLM8Hyoq5dx679hlMdwCLAphrdVBZNaT8TyBSnfr4QbN1rkOTCyzojKBjqkAflpSB2v3LipG3iF1w2UpzSvNptlEDENmuKabfynewSPzXiq2CtLq1TKfCKR5CPDoZ%2Ff98p%2F7igKAq34W43EyFIKNM21aSvFJYTA%2BMK8qURDtnXAneIsZEP%2Bcb337Vc5Rm6e03XzhtLBJCgFlb9BiCNAYC5Zmajyxtc%2FIwQNX4mkPdHXxmhGxaWtKwjOqD82QY1k%2B6N3g1I7QM1CqDzfa3vme3Ok&X-Amz-Signature=44b25b0c3175ef188829242d9795305a1e79bb388948f49ddfad8f351a443626&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

