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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UELMK6XD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUo%2F%2FBGGsfCNG7N6QnUC2W%2FsL1TRmzXOZ4FB%2FrYj4hJAiAtOIEFGm%2FHKkks5P3a5OU8nighOWR4EHM9fB0ygD3i3iqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHGlxfid%2B%2F%2B%2FDjGwYKtwD%2FQ%2BvOtlv%2FxpUr32KL2ddo6RXAO06f2HRGZcA%2Bqa3PcMv5e0HOoTxxuy%2Bi7llt%2FtLCQdI1VyBVnfnbnGe13L1ZBs7KBjm3mfVldirS2HKidvCU%2FXxntFejVJZJ4tkchuXNEHyTrN62Uf2D1keqOQF1sMQftMQCv1fsTXhD6gRi031Ht15y9Ief5WiOXM%2B6c8fOgO2VsmhMNIeiccKwWRHBiBaDlgSUuMV4bZvwPwkTPs8f%2BPMs%2BbjzsXDV4zm6fLMp8Z1goPIm3WPIZDW1noJXC1jYXwQ%2B%2FDMIyERBvFR5OWde7DZBNwc68gY1WX2OFUmvo3xVPGYptj7WuZp4WQXSg9c%2BdK6OlLEDjWJwzPz82cvwj9Buq40v%2FTQi9595Mhz4vwlx3xtvuXNFAirBTgIM8qBgWDter1ksEaoMuzn%2FyD%2Fz39N%2BwwuF5tPLYWBmCEyTr0MnldbgmPcxc8PKAMVLNhHQuJ9b3Mz8DCpDYWpyXf%2BZccxFNEgpiP54y%2B4cknuZBHKP6zy7AkIVHVcjoNjMqvu%2B28TOQpOG6fBgjO59E%2FJccdcVj9%2BOjrG61nI%2BWOmywhYI6ypGCanBYpwAwklOFhyTH7Fs4WjUpMS1LCzG3NjEEOczQfp4CeMDPsw34uMygY6pgGHxraqdjdBX3gLfnTOo0JPL7EOyd0sTQFWl%2BCSTyNpbzJIILxVztCmduyubQxTK1MmAwy6GlEsb%2Fj0HbEky74%2FuQOLgdGrcSnWLNc8xj1VBp6U8Gg%2F3cx9nBnzOodYazumBVUNEuuNEn2JA8RQpoBqxkpNN5DR719z0p4fN%2FF1lIJKJTAzyuTnJYGPnHWQ3dNwjJLzmxDCEM3Iumyb3MSnRDcNwNlQ&X-Amz-Signature=464644ec2be6b5fce06d65cb4738bbf1879aa19ea0c6206ddb918b2fa0ed7b38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UELMK6XD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUo%2F%2FBGGsfCNG7N6QnUC2W%2FsL1TRmzXOZ4FB%2FrYj4hJAiAtOIEFGm%2FHKkks5P3a5OU8nighOWR4EHM9fB0ygD3i3iqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHGlxfid%2B%2F%2B%2FDjGwYKtwD%2FQ%2BvOtlv%2FxpUr32KL2ddo6RXAO06f2HRGZcA%2Bqa3PcMv5e0HOoTxxuy%2Bi7llt%2FtLCQdI1VyBVnfnbnGe13L1ZBs7KBjm3mfVldirS2HKidvCU%2FXxntFejVJZJ4tkchuXNEHyTrN62Uf2D1keqOQF1sMQftMQCv1fsTXhD6gRi031Ht15y9Ief5WiOXM%2B6c8fOgO2VsmhMNIeiccKwWRHBiBaDlgSUuMV4bZvwPwkTPs8f%2BPMs%2BbjzsXDV4zm6fLMp8Z1goPIm3WPIZDW1noJXC1jYXwQ%2B%2FDMIyERBvFR5OWde7DZBNwc68gY1WX2OFUmvo3xVPGYptj7WuZp4WQXSg9c%2BdK6OlLEDjWJwzPz82cvwj9Buq40v%2FTQi9595Mhz4vwlx3xtvuXNFAirBTgIM8qBgWDter1ksEaoMuzn%2FyD%2Fz39N%2BwwuF5tPLYWBmCEyTr0MnldbgmPcxc8PKAMVLNhHQuJ9b3Mz8DCpDYWpyXf%2BZccxFNEgpiP54y%2B4cknuZBHKP6zy7AkIVHVcjoNjMqvu%2B28TOQpOG6fBgjO59E%2FJccdcVj9%2BOjrG61nI%2BWOmywhYI6ypGCanBYpwAwklOFhyTH7Fs4WjUpMS1LCzG3NjEEOczQfp4CeMDPsw34uMygY6pgGHxraqdjdBX3gLfnTOo0JPL7EOyd0sTQFWl%2BCSTyNpbzJIILxVztCmduyubQxTK1MmAwy6GlEsb%2Fj0HbEky74%2FuQOLgdGrcSnWLNc8xj1VBp6U8Gg%2F3cx9nBnzOodYazumBVUNEuuNEn2JA8RQpoBqxkpNN5DR719z0p4fN%2FF1lIJKJTAzyuTnJYGPnHWQ3dNwjJLzmxDCEM3Iumyb3MSnRDcNwNlQ&X-Amz-Signature=52f231756bdf6426781fbf78f38f0b5081e31afe9a90a3778a106edfbd7f1533&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

