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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USFXPBA4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDq0SijnuVcbDJKac8kGqoshXa%2FgPemYmMI93lAF%2F3nJQIhAOGjySDsYuy7%2Ft9bfgvD1x2JUDhVwQ72nwt0bYVIOx0JKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySMH2EA0%2B%2F4%2BdTfCgq3ANQUPHWZ5f6VRKlU6Jlj9C47S21v4wMWaDPDx6biqYg4G%2BPp80gC4K5AYe0K4NlP97Yn16CmbLJduqCt%2BHQEkaCET%2FjEL9qSpJMqQv1u%2BzDuJEP5uYhgrplfkRhCnWaYP3oV4ctRBrIYASAD9X1nOmw%2B9mCbud2TOO1Xwn0z8HXuBZ1EQQCNfY%2FK1ZxqHVz2LKtNfrG8z%2FDLnznDCfNbkdLyoIy6BPfF5uZHNWr0AqShR3SECxA%2BrxvSOnclIs8N%2BPv9iZsppp4uAc7Eb9xIrxnlzc0%2B85jrhJiaj0fBiX5wgG64CMdzkqmVTcBWSIxykOJqedUtnGvuQ8%2F7rQRss%2BMIclt44Hf4HrQTg5%2BtojN3ckBq5YvNNXLnhi1oTa7iolxYDWSedb%2Fd1HMu5Al3O5bItOVe9XWwWfq1D8Znfqws%2BdQ6KatUTsmSRYVTUJQ40mewI0S890P6BJE54BkOMVLVkvO5lGM10eZXMLHC%2BpthDWd%2BczcAJemyTyPjMIAvCn6NBsyQxFHYRDv4v2O0lAoN9H6KRI7%2Ftu1n1aP8qwL1wZUP8H2gnZukgETq5HlULnuWI1dqbYuVGZ77CSmqgjT7LrOpwQbPRr8%2FJ91hHCWZRpobJHDKC0x8UNV9jDTrozKBjqkAQo%2BLhjWgB1s32%2FOnv9uKMJQPZL9ehcDmbpyF9PzHk6N8Ws2pAO4g4qnY3bRP6MPHfgZhSZzcK55OwCbbnRpaI7CIM7ERid4ClUe%2BNIF2QWp8SvQ9vvEUCXSYcccPZ8tvlT6M%2F2vxwK8KYMk2WxYUxVCL1KtdN1OA%2FexPhY%2FA3%2FDJEdX0YMaPB5%2FDPy7KaYC8oQvfFej5UT67kdGO60TsyRegeRK&X-Amz-Signature=28a6384171b02b74b2de6fec3b2f100345c076c938c7f977f0b3fe29375761d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USFXPBA4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDq0SijnuVcbDJKac8kGqoshXa%2FgPemYmMI93lAF%2F3nJQIhAOGjySDsYuy7%2Ft9bfgvD1x2JUDhVwQ72nwt0bYVIOx0JKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySMH2EA0%2B%2F4%2BdTfCgq3ANQUPHWZ5f6VRKlU6Jlj9C47S21v4wMWaDPDx6biqYg4G%2BPp80gC4K5AYe0K4NlP97Yn16CmbLJduqCt%2BHQEkaCET%2FjEL9qSpJMqQv1u%2BzDuJEP5uYhgrplfkRhCnWaYP3oV4ctRBrIYASAD9X1nOmw%2B9mCbud2TOO1Xwn0z8HXuBZ1EQQCNfY%2FK1ZxqHVz2LKtNfrG8z%2FDLnznDCfNbkdLyoIy6BPfF5uZHNWr0AqShR3SECxA%2BrxvSOnclIs8N%2BPv9iZsppp4uAc7Eb9xIrxnlzc0%2B85jrhJiaj0fBiX5wgG64CMdzkqmVTcBWSIxykOJqedUtnGvuQ8%2F7rQRss%2BMIclt44Hf4HrQTg5%2BtojN3ckBq5YvNNXLnhi1oTa7iolxYDWSedb%2Fd1HMu5Al3O5bItOVe9XWwWfq1D8Znfqws%2BdQ6KatUTsmSRYVTUJQ40mewI0S890P6BJE54BkOMVLVkvO5lGM10eZXMLHC%2BpthDWd%2BczcAJemyTyPjMIAvCn6NBsyQxFHYRDv4v2O0lAoN9H6KRI7%2Ftu1n1aP8qwL1wZUP8H2gnZukgETq5HlULnuWI1dqbYuVGZ77CSmqgjT7LrOpwQbPRr8%2FJ91hHCWZRpobJHDKC0x8UNV9jDTrozKBjqkAQo%2BLhjWgB1s32%2FOnv9uKMJQPZL9ehcDmbpyF9PzHk6N8Ws2pAO4g4qnY3bRP6MPHfgZhSZzcK55OwCbbnRpaI7CIM7ERid4ClUe%2BNIF2QWp8SvQ9vvEUCXSYcccPZ8tvlT6M%2F2vxwK8KYMk2WxYUxVCL1KtdN1OA%2FexPhY%2FA3%2FDJEdX0YMaPB5%2FDPy7KaYC8oQvfFej5UT67kdGO60TsyRegeRK&X-Amz-Signature=889b75aed600301d8307807581303ed3ccd9614be2772a335145ec106ee50f9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

