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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XU5AYPI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFnVC%2FK%2FmceYiijqM3f1EXQfcvvYRt36okKza3vy%2BnafAiBRQQ6NUDpHJLtsz3mTqAXOoBQFZeYHVW23fz491BCDpir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMAKqmsqu5n0H9roOSKtwDhpBJUI%2FmbXuigPWLaMlUdk%2FZk1lYF9%2BuA68ZH%2BaoDtbD9MDrNLzd%2FqhiGVhPYgmi7tjTFvTPkZqOUTnZg7BMkfMMBAk405Ae9ZsNHxm6yGPmtC4bRTTYlxGgZ1Rt8bo2T%2BgYVLIMmDoZdhRLV6n8yRUBBB%2FBRj6MmiBwdq%2BUZSSzXksCwqpS942aRPYvpYhelGrQW0Inh%2FmOYplddq3QfIvI5KML5RzQjyBkB%2FW8Ygg0XW%2F48G4Keh79YRcJ9bpbGBtifAZ7rWNTGz6r0bUXpctpx6LcgZws0%2F74uki1ehEsXNz8aQvDMVPOd3YCFEUbuLRWLTXXXZhtUAUiBfcnnJFjv1QN6D1sSBKweBBo%2FrjBJ2ugbdGETS%2BMFBNoxuJCUQ%2FXXv6OduMnDGQVYGJRRnG%2FKGAxsUIMTV478SDTetv0FSv7WP06fiiMNnJ0a0c1ZVzUpSA2tv57ZQiy57VQb91H4rR%2BmXyHA%2BpHAdwGabndsEEFNDpes1zpB%2F1IiBxw%2F5fjkfLS%2Br6AdTRbFdF1ylbDg2ORZcaWiPWGIdINBKZia8NitHSEgSWpJojIPFEaSYywf2I8IioiD88%2Frxx0SJIw%2FaoXdkhAjnISUDFiGzTQyVQRWaRSi3qfLvAwn%2FCJygY6pgFH9kRFXjn75lC5OHQfIwRddUEqekmEd7P7ZiFDmfjONHT79NEEBPn0HzSkcPpteIvg9Zcq6WUFTv9UXYMRlmO1rpo7AMxrX1A5tp0i2t28QkUuOclcQKLLWoV9Pu5s9gc9CHCkiir7lK0vhfwsbJ0hftcsEtRbQBT0G4vc856sBfE1OIDQCfi5VQICZ6wz1rIMp5h%2BrXz8zhaZb59MpTcoFEuwdAhD&X-Amz-Signature=d581c83bc692a662e67822e5268a5e178e1cb35678e9ad084dd26ba620773f6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XU5AYPI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFnVC%2FK%2FmceYiijqM3f1EXQfcvvYRt36okKza3vy%2BnafAiBRQQ6NUDpHJLtsz3mTqAXOoBQFZeYHVW23fz491BCDpir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMAKqmsqu5n0H9roOSKtwDhpBJUI%2FmbXuigPWLaMlUdk%2FZk1lYF9%2BuA68ZH%2BaoDtbD9MDrNLzd%2FqhiGVhPYgmi7tjTFvTPkZqOUTnZg7BMkfMMBAk405Ae9ZsNHxm6yGPmtC4bRTTYlxGgZ1Rt8bo2T%2BgYVLIMmDoZdhRLV6n8yRUBBB%2FBRj6MmiBwdq%2BUZSSzXksCwqpS942aRPYvpYhelGrQW0Inh%2FmOYplddq3QfIvI5KML5RzQjyBkB%2FW8Ygg0XW%2F48G4Keh79YRcJ9bpbGBtifAZ7rWNTGz6r0bUXpctpx6LcgZws0%2F74uki1ehEsXNz8aQvDMVPOd3YCFEUbuLRWLTXXXZhtUAUiBfcnnJFjv1QN6D1sSBKweBBo%2FrjBJ2ugbdGETS%2BMFBNoxuJCUQ%2FXXv6OduMnDGQVYGJRRnG%2FKGAxsUIMTV478SDTetv0FSv7WP06fiiMNnJ0a0c1ZVzUpSA2tv57ZQiy57VQb91H4rR%2BmXyHA%2BpHAdwGabndsEEFNDpes1zpB%2F1IiBxw%2F5fjkfLS%2Br6AdTRbFdF1ylbDg2ORZcaWiPWGIdINBKZia8NitHSEgSWpJojIPFEaSYywf2I8IioiD88%2Frxx0SJIw%2FaoXdkhAjnISUDFiGzTQyVQRWaRSi3qfLvAwn%2FCJygY6pgFH9kRFXjn75lC5OHQfIwRddUEqekmEd7P7ZiFDmfjONHT79NEEBPn0HzSkcPpteIvg9Zcq6WUFTv9UXYMRlmO1rpo7AMxrX1A5tp0i2t28QkUuOclcQKLLWoV9Pu5s9gc9CHCkiir7lK0vhfwsbJ0hftcsEtRbQBT0G4vc856sBfE1OIDQCfi5VQICZ6wz1rIMp5h%2BrXz8zhaZb59MpTcoFEuwdAhD&X-Amz-Signature=67d20352df89f4750020a145a1ad23d28c067ec86b882689a2a0fae610356608&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

