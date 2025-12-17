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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDYHD64T%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGIR4ZQGjwb7XocMPM8lk0x2mfWqpxLrqWKNcOIzkBGBAiEAynBlb0mRwqYn1Pl2EksK1eBCwWOsm1zJlLVr9duTTsYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMLiCKaXS%2Ff6b%2FHi7yrcA1NcU%2BVM7EcaE3T2xAOKVqDuo3sGRP%2F5O7g45OY%2FhM2W3LjzJvtn8g6cyVLnr4n1%2F96bgBQO9vJ4ZYjq10qYqSr3rtO2LYlfttwiuUTRFMnQh3vW57J8sBzmQRBroMk%2FYzIHC%2BT4XuXMuiYPpJeQu5S4wZdp1cftnHJlJ7CkcgJnxsYY1uGugsd6AQfxwRtmHifh0pM9Tl4Xhx6buIOLTHzdS0Q3D8O0tH5BY4wLSP2iNGJlcfFXbVByGYARRKBhE6Gd6ZsZYfqJS4tcmvddxx1P%2BIO25LAv5P%2BXxZRciweqypM809%2BhiMsRdSjyhrDrXqPEjRNFnVgGttffUzxNZJlh9jqc7bROvax%2FehsLLxUBZ%2Faf5QMNOzsppvc5ic33ebbe2Wz0E%2B8nhRWWaGZnf2UxAODkn4COMlDla9H6m9TRiScMQ%2FffD9zR0szVhHD9g%2BjpYQDjBgu8VONzExw6RYuPCIN1yOIuFP1BQweT%2FQnnpn6Icctz0pWYWghD1xnAytIYT1uzTDSvBAhpp0cRiD%2FK%2Fj5LZVy896wCM%2Bu1eyTp8XrQDs%2BLvbzfQR0E3iZ679VbczirhKlS58tJgdLHr6pdrEEBg%2FJ2B%2BEcLhfn8kWuVCBB2gzwR03MvYziMJODicoGOqUBgM%2FEVwlxD9AvrjOzVEL%2FJU5Dlx7F7RyGmUgpBI4qKS1wKtfaxUNX0C2Zy1go8%2BjsPrrlX%2FqBXthUSdj98oMl9eIqATe3UDofHwMCC6uIzqOz9W4o2dxj2AfofznIMpNezsnroUMlxAwKiOmlnmwnrGgg%2FN8B9CoJIa3UwFEwR%2B4kdeZ%2BNUjbrbYtPDJeqLL2wEBy47EGM3TCFxOtjplobTTY4Hw%2B&X-Amz-Signature=59479e969432125dacedb3f73dd11af45bdbedee7edd7f6f6c3f3e8029741e65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDYHD64T%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGIR4ZQGjwb7XocMPM8lk0x2mfWqpxLrqWKNcOIzkBGBAiEAynBlb0mRwqYn1Pl2EksK1eBCwWOsm1zJlLVr9duTTsYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMLiCKaXS%2Ff6b%2FHi7yrcA1NcU%2BVM7EcaE3T2xAOKVqDuo3sGRP%2F5O7g45OY%2FhM2W3LjzJvtn8g6cyVLnr4n1%2F96bgBQO9vJ4ZYjq10qYqSr3rtO2LYlfttwiuUTRFMnQh3vW57J8sBzmQRBroMk%2FYzIHC%2BT4XuXMuiYPpJeQu5S4wZdp1cftnHJlJ7CkcgJnxsYY1uGugsd6AQfxwRtmHifh0pM9Tl4Xhx6buIOLTHzdS0Q3D8O0tH5BY4wLSP2iNGJlcfFXbVByGYARRKBhE6Gd6ZsZYfqJS4tcmvddxx1P%2BIO25LAv5P%2BXxZRciweqypM809%2BhiMsRdSjyhrDrXqPEjRNFnVgGttffUzxNZJlh9jqc7bROvax%2FehsLLxUBZ%2Faf5QMNOzsppvc5ic33ebbe2Wz0E%2B8nhRWWaGZnf2UxAODkn4COMlDla9H6m9TRiScMQ%2FffD9zR0szVhHD9g%2BjpYQDjBgu8VONzExw6RYuPCIN1yOIuFP1BQweT%2FQnnpn6Icctz0pWYWghD1xnAytIYT1uzTDSvBAhpp0cRiD%2FK%2Fj5LZVy896wCM%2Bu1eyTp8XrQDs%2BLvbzfQR0E3iZ679VbczirhKlS58tJgdLHr6pdrEEBg%2FJ2B%2BEcLhfn8kWuVCBB2gzwR03MvYziMJODicoGOqUBgM%2FEVwlxD9AvrjOzVEL%2FJU5Dlx7F7RyGmUgpBI4qKS1wKtfaxUNX0C2Zy1go8%2BjsPrrlX%2FqBXthUSdj98oMl9eIqATe3UDofHwMCC6uIzqOz9W4o2dxj2AfofznIMpNezsnroUMlxAwKiOmlnmwnrGgg%2FN8B9CoJIa3UwFEwR%2B4kdeZ%2BNUjbrbYtPDJeqLL2wEBy47EGM3TCFxOtjplobTTY4Hw%2B&X-Amz-Signature=becd23df29163c5e79c6bf788ab6b388644dd2821d48a136ab2e434e3457de8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

