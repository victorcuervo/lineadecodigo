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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTNHLUNN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE5RYWaZyerCg%2Bzz7Wj2NSfw%2B9M7FTI6rbC7htr1WC01AiAhrfN1AhO2%2Bm3t2YWp%2BBHlAVbRV4qQX%2F1YHDlbbuR3Dyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMIz5SvAlfqhkDwS1YKtwDvi5YmulUgjiGck7G2iUJA8GKJfRGbiH1VQL6QqQodE6XsGvmf%2FS5Gm0lv6EK6K3Doa4%2BWz6hL49EuU2P55MJECPZUtIFIjHdRYQusNUA4x1KmNdESK1WAOGFMRhclNIqw3aORKPuCBB0Qs8IS3IR2L73SVTIJrWG70%2BM%2Fc2bAtj2anzP74bUs%2FZIZoovJ1Yy5em%2BM%2BH6hSYO19Da6LTU8bOF22LGKcbg2ZZr9wDbzbdvEroSA5VgQXY6KBoPWU8gMNCOJ87leYnfyQPtvW51EaV5vYcvnXIG8hsEgZ4Fj2W3rumXKMyg2K30dIpKt8CvtPUddQf2NhWrxzj%2Ff0qmf9abRrNcB8oUmPWmYlw8RQzrN2l7FF1aYzE3gDSwWki%2BUpk9cSGD1RdCKQJwpxWIPAHuJ256vDh8tKI2vm4pcivCZY2PxVr2u%2Bkpz%2FAXfKhX4z2EjSfSLbiA2dZLEU%2Ffm6xpdAMcAcXqJs%2Fn3HwstnIHzOr2nTB8QsC3gIpQ5%2F2UVfNQNTxpl4%2FRcFe7IT4y%2B4RZskQomr1hMTFtHlCc%2FQomAt9QX8tisTXC%2FaHVwlMoZ1SYd4qqBZOTyE6Uws9xuJEMwrqktK7%2BKX29h1VkxQSr%2Bmp77ie%2FK0%2BGQjcwhNGJygY6pgG4Pr1lOblrhc9xwuw1QGanoGM1rLF66%2FT1YUh3qUsUVmIN6X4eNrWKqldaZzvm2PE%2FTFV69zYum6BwS%2FgHOEI3GwL3g1DCpbFjNTm8Cb6mXKmTNcomA2e4Dk%2FSuuCj2huD5gCKAfJS%2BT6fJg4CLp20VOy33jBIptKSmrGI%2FB%2Bl%2FTvrW4PhmB%2B2GHOOC5JLbPbdT3HAoKxs%2F7gUVdLhIymcVGApLq9M&X-Amz-Signature=a8ff063f8cf9e8fc47dfb6c3d1599ab45ca392bd9c3eb85d2f60a43de76c65ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTNHLUNN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE5RYWaZyerCg%2Bzz7Wj2NSfw%2B9M7FTI6rbC7htr1WC01AiAhrfN1AhO2%2Bm3t2YWp%2BBHlAVbRV4qQX%2F1YHDlbbuR3Dyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMIz5SvAlfqhkDwS1YKtwDvi5YmulUgjiGck7G2iUJA8GKJfRGbiH1VQL6QqQodE6XsGvmf%2FS5Gm0lv6EK6K3Doa4%2BWz6hL49EuU2P55MJECPZUtIFIjHdRYQusNUA4x1KmNdESK1WAOGFMRhclNIqw3aORKPuCBB0Qs8IS3IR2L73SVTIJrWG70%2BM%2Fc2bAtj2anzP74bUs%2FZIZoovJ1Yy5em%2BM%2BH6hSYO19Da6LTU8bOF22LGKcbg2ZZr9wDbzbdvEroSA5VgQXY6KBoPWU8gMNCOJ87leYnfyQPtvW51EaV5vYcvnXIG8hsEgZ4Fj2W3rumXKMyg2K30dIpKt8CvtPUddQf2NhWrxzj%2Ff0qmf9abRrNcB8oUmPWmYlw8RQzrN2l7FF1aYzE3gDSwWki%2BUpk9cSGD1RdCKQJwpxWIPAHuJ256vDh8tKI2vm4pcivCZY2PxVr2u%2Bkpz%2FAXfKhX4z2EjSfSLbiA2dZLEU%2Ffm6xpdAMcAcXqJs%2Fn3HwstnIHzOr2nTB8QsC3gIpQ5%2F2UVfNQNTxpl4%2FRcFe7IT4y%2B4RZskQomr1hMTFtHlCc%2FQomAt9QX8tisTXC%2FaHVwlMoZ1SYd4qqBZOTyE6Uws9xuJEMwrqktK7%2BKX29h1VkxQSr%2Bmp77ie%2FK0%2BGQjcwhNGJygY6pgG4Pr1lOblrhc9xwuw1QGanoGM1rLF66%2FT1YUh3qUsUVmIN6X4eNrWKqldaZzvm2PE%2FTFV69zYum6BwS%2FgHOEI3GwL3g1DCpbFjNTm8Cb6mXKmTNcomA2e4Dk%2FSuuCj2huD5gCKAfJS%2BT6fJg4CLp20VOy33jBIptKSmrGI%2FB%2Bl%2FTvrW4PhmB%2B2GHOOC5JLbPbdT3HAoKxs%2F7gUVdLhIymcVGApLq9M&X-Amz-Signature=5cbd7d68c1dbc711ae0270d926c02f40540eee1251df48a1ec76521ad62fe5c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

