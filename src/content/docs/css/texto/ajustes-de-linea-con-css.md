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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSWEVFCH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEhaBuhNyNgqeDITAImdVO7R8%2BH%2FmQ%2BdvQa4XXPJZW62AiA7%2BDKA5uzfmKxc8iAy2lFGDOmKZLZPymHs%2BO47%2Fkp0wCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM79huZ2oGoL%2BaXSLHKtwDJRVID1wrQlpeZwUjvGgH%2FscS3nCYS6VR%2B9iBIabRJqgT77lF5CaOS604pyrMqFfk7oErm7LaSn5%2FGeOVfFFBOqlAJNahU5U%2FPecVa0u0nvsfBIiW%2BCPILLCVX96Z5LxafbIXZGdA6NpsNrarN3GW4ckRBnqpndH5MOAXpbFDD%2FKQijYbAtIekCUpXNUJNgE083MKIW1CG88NrtQdr15PrAML%2Fb0VahxeVOf2HDkkR2LbujW6%2FWCSiKdEMp%2BaPMXjoJJmrcnvU7h2iirXKMgW8QqyP1Ym95Iuep1QbzXqXUxyxiFDPGeVnmvP5xi8U0xF%2FP0%2BscjHkbCbO6WBkr17eMO%2FtArE8DYqyT%2B8u8e00aZy8DXHxJ0aK4eeFF2vAgdPnMnaj92v%2FjMsmtqXqNmR87x6Pv6nO4MC13AzahmtC5nC6fSSjXYCfGkCiizIaYNCkktPAsuDB69KQPQ1PcShZMoKORwkwnO56VO63DWMPngM7TyIJfnLjawP3YTXCUTaVdD6niMD6Yo0ZEbVevAwL7HZCQg%2FtDgFB%2BV8Pe03eCReLeAKivFV4hNMehbIYJipwEXT04R9fAoCc9i8FofCbI70Mc9R7pi9OLzq029FNn3viUf85MEBICypdXAwkbiJygY6pgE%2FJBB2oWOFUxyYFAl8QNOWHYQLN31%2FTojWkt7WBK%2FkHTe9BT63%2FhGVct1yYx%2B510gwi3Nnjz8UFweQpE5jynje6L0ZqvISMuQrDz6WtV7LJ8DqtWhU3s71WmdibmrPirAuAs2tc9h3MlsQa6oA7vbDF%2FT0d2b4yL1ER95mrPIk%2FkUL%2FKYKBPnS1Onya7nrloVyB4RcxmdEwyWsi0Wkj%2B%2BW7QWMK4pf&X-Amz-Signature=505def57c9fc5a0ce170bb3537c0a2c4ba6e5d70d29807eae165ca485171c5c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSWEVFCH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEhaBuhNyNgqeDITAImdVO7R8%2BH%2FmQ%2BdvQa4XXPJZW62AiA7%2BDKA5uzfmKxc8iAy2lFGDOmKZLZPymHs%2BO47%2Fkp0wCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM79huZ2oGoL%2BaXSLHKtwDJRVID1wrQlpeZwUjvGgH%2FscS3nCYS6VR%2B9iBIabRJqgT77lF5CaOS604pyrMqFfk7oErm7LaSn5%2FGeOVfFFBOqlAJNahU5U%2FPecVa0u0nvsfBIiW%2BCPILLCVX96Z5LxafbIXZGdA6NpsNrarN3GW4ckRBnqpndH5MOAXpbFDD%2FKQijYbAtIekCUpXNUJNgE083MKIW1CG88NrtQdr15PrAML%2Fb0VahxeVOf2HDkkR2LbujW6%2FWCSiKdEMp%2BaPMXjoJJmrcnvU7h2iirXKMgW8QqyP1Ym95Iuep1QbzXqXUxyxiFDPGeVnmvP5xi8U0xF%2FP0%2BscjHkbCbO6WBkr17eMO%2FtArE8DYqyT%2B8u8e00aZy8DXHxJ0aK4eeFF2vAgdPnMnaj92v%2FjMsmtqXqNmR87x6Pv6nO4MC13AzahmtC5nC6fSSjXYCfGkCiizIaYNCkktPAsuDB69KQPQ1PcShZMoKORwkwnO56VO63DWMPngM7TyIJfnLjawP3YTXCUTaVdD6niMD6Yo0ZEbVevAwL7HZCQg%2FtDgFB%2BV8Pe03eCReLeAKivFV4hNMehbIYJipwEXT04R9fAoCc9i8FofCbI70Mc9R7pi9OLzq029FNn3viUf85MEBICypdXAwkbiJygY6pgE%2FJBB2oWOFUxyYFAl8QNOWHYQLN31%2FTojWkt7WBK%2FkHTe9BT63%2FhGVct1yYx%2B510gwi3Nnjz8UFweQpE5jynje6L0ZqvISMuQrDz6WtV7LJ8DqtWhU3s71WmdibmrPirAuAs2tc9h3MlsQa6oA7vbDF%2FT0d2b4yL1ER95mrPIk%2FkUL%2FKYKBPnS1Onya7nrloVyB4RcxmdEwyWsi0Wkj%2B%2BW7QWMK4pf&X-Amz-Signature=4364bc66e210c0dbf6d87b4f99f7f7ec3815611c6410bd797e3dc5b9b2e1a26c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

