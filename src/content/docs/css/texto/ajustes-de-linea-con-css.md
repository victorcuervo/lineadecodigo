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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RGWS5EU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV7%2FuJlqTgun7UP4QJmIGFJDgDYQFOKSfrUphY0KkvuQIhAJqQZtilBXwQYdIdtKuolpRgF74Ce3YmxIqxV8MSB8TBKv8DCH4QABoMNjM3NDIzMTgzODA1Igx4ilJ6WodnbCC1qPIq3AP%2BtPWbL7Pb%2BKmXP3AHy5NM%2FLC38V5VoVDYxj3upSf7nhjcdwh%2BV3C%2FyW24emfobIVse6ppnepOA%2FM5YaBOarcUhQaKtKbU611zySEd01NW6jCFFk%2FpQBC48a3O8NMyfNPzal18gNw%2FjH0RSTyy67Emxk1ggqEmE56zs452nCHGM%2FTF3MSw%2FQZvikB0V7FgAMAqnRGLP%2BRcXQ%2FOgTOeuN1uYUWrU82MHDElr5Dw8yWukY4jQYgUiqCKg1FXi60EmOGHVY1D3ZaqBQ%2F0ZPrrS1EMadghc1mbccicVoJTsHiHl58agkPEsp%2BUOk8QofYntUy3zp%2B6amACL3TSyzRE02CkZ5L93UnsOTqAdpWpggVdnYEFaG3jVzgNQorYZafvdHrRjUCgeAjA8es2CDf4PuN2BaJkO3cgg0xGBcG%2FTKN8axZ8qZpdSPBigtOpDaTeMBSqoQM7xgF%2Fw%2BBZhIoCBgma1u7Vm9gsFXxovvabwGgjBUgFpJXNEEO%2FqeAcOimOVLBn%2BGiAb9N0Z4hu5IiWPkfpEfXn56WN0R01JW5zz%2FL7Od87DX1d%2FEpjDt3M8%2BkW4iIPdLzhXXMp0vnoCfNw8ZBH%2BOJfViC9XPUmHsuc5mjU15SKgaimyO0htxtiMTDoxYrKBjqkAWJ4Z73jGKOUgdz5evv3CFXIs062elMnzhhkWOYLuNYC%2FqkMYAmi5ZKzZek%2FNdwxAGBUYlJifJppOqi4TchcuX8eVTa%2Bnn4z10s9YgUBAHAa1NtieHI4DiHrebGq6RQ4u2bA6hl88Fp2%2BJyFV5xQUVGHZThccYUsdMWsi9ti9mgmtMJLzEMTRkhGM000fFOw74tXLhz2ut52JNaXuDvUAfPVrNfN&X-Amz-Signature=61d029512d42c76ae846a0cd356b33911cf47c26d414d1fcd84af9fabb21408d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RGWS5EU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV7%2FuJlqTgun7UP4QJmIGFJDgDYQFOKSfrUphY0KkvuQIhAJqQZtilBXwQYdIdtKuolpRgF74Ce3YmxIqxV8MSB8TBKv8DCH4QABoMNjM3NDIzMTgzODA1Igx4ilJ6WodnbCC1qPIq3AP%2BtPWbL7Pb%2BKmXP3AHy5NM%2FLC38V5VoVDYxj3upSf7nhjcdwh%2BV3C%2FyW24emfobIVse6ppnepOA%2FM5YaBOarcUhQaKtKbU611zySEd01NW6jCFFk%2FpQBC48a3O8NMyfNPzal18gNw%2FjH0RSTyy67Emxk1ggqEmE56zs452nCHGM%2FTF3MSw%2FQZvikB0V7FgAMAqnRGLP%2BRcXQ%2FOgTOeuN1uYUWrU82MHDElr5Dw8yWukY4jQYgUiqCKg1FXi60EmOGHVY1D3ZaqBQ%2F0ZPrrS1EMadghc1mbccicVoJTsHiHl58agkPEsp%2BUOk8QofYntUy3zp%2B6amACL3TSyzRE02CkZ5L93UnsOTqAdpWpggVdnYEFaG3jVzgNQorYZafvdHrRjUCgeAjA8es2CDf4PuN2BaJkO3cgg0xGBcG%2FTKN8axZ8qZpdSPBigtOpDaTeMBSqoQM7xgF%2Fw%2BBZhIoCBgma1u7Vm9gsFXxovvabwGgjBUgFpJXNEEO%2FqeAcOimOVLBn%2BGiAb9N0Z4hu5IiWPkfpEfXn56WN0R01JW5zz%2FL7Od87DX1d%2FEpjDt3M8%2BkW4iIPdLzhXXMp0vnoCfNw8ZBH%2BOJfViC9XPUmHsuc5mjU15SKgaimyO0htxtiMTDoxYrKBjqkAWJ4Z73jGKOUgdz5evv3CFXIs062elMnzhhkWOYLuNYC%2FqkMYAmi5ZKzZek%2FNdwxAGBUYlJifJppOqi4TchcuX8eVTa%2Bnn4z10s9YgUBAHAa1NtieHI4DiHrebGq6RQ4u2bA6hl88Fp2%2BJyFV5xQUVGHZThccYUsdMWsi9ti9mgmtMJLzEMTRkhGM000fFOw74tXLhz2ut52JNaXuDvUAfPVrNfN&X-Amz-Signature=4ae84df046f5413e8d7f2cbeec7925237da9ddb6ddee107cff2a68b0a1e0277c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

