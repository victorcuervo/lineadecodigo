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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCXFJ7VX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcxq27fpB4v%2BfeQlXRLZZsTUBVKUAH8lt8qMvFBOQgyAiA13AHC8kg6NMnHTZnh%2FbUrGdCt7WLgEF818JETlYXIciqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5%2FvnPl7y5TDMn58NKtwDWDDExgn0tREjRYqN0AOk%2Bemy8Rjo9tYq%2FAKopgIsW0vWBwaBQlyvqJcMGeh38Iwo7LibxPnVomdJw6U%2Fucec%2B7qsEXpDMUbmokmZQIBBCQ%2BULkoC502D8r62y6Ct72peKPwfWqEsiHKoxfMGa2wp4%2FewpPm1OAzSYa7ViLLT5oiqMU6C%2FUymNHwzyeS4PYBmaS41eZzhC8Dkyy51efNCYNwufgdQ9WSJ2KcOHoMNHTn6dThlOvWIM0Teok3dgS28hTmk7P29GbsRcgAmk8hp9nlZYHAyhdc0%2FuequTpzXYkujmMod80LdEePfe4yG2wEyJ74T4LzNAMZBXWBh1S83iFqB35SJWh8uJ0lxjSksZgBQcZ21rOcO9lUT14HcgoSfF52k9ORVCbfOKG%2FV5PEzLO7JSFXI6udjM9AzviGYFC4IUR%2FpqTWSQIrIUFYVlXH24WAWh69FBY3tNFOxGlSA41TBCxMdrU6nFaW0oGJw2PIbrncg1uYXMaefidEYMz%2B07Fhoxg8yA1JRmE75DSjqKyx4k5ebYx0J41v0K95nwKNqtf9VDru55C1kUuIdA8svX3GSBHKOilRC9aT1pOsTWWoYdzMqtulkQNqJsywkM%2Ber5NnKlhrGDUPQr4wp6CLygY6pgHY4lCuDMBT8RmL6by01urVM8e3bm0mW6Juixk%2Bs61M7d%2FhWjpDtIVLBNJ0Zalf0Fy4JFe1JJh9YhTKVWOTUU8DQE1OSy4LQkokyuAtcXtQ9%2BBIKXKgqbKLnSECkon%2FdIoC7LfMgnwIBjdoaGdL8cazO4mPXv%2FOgcNurK3tkdY12F0O3fgN8gy3HR3o0ugTXPKdo7uwZO6%2BDNw9Xv0hTr9kWKR1I8c0&X-Amz-Signature=2d4779b112ee35730d4bc92ace25e7c8bcb866e6f1c5a68d806e71216a5fd06d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCXFJ7VX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcxq27fpB4v%2BfeQlXRLZZsTUBVKUAH8lt8qMvFBOQgyAiA13AHC8kg6NMnHTZnh%2FbUrGdCt7WLgEF818JETlYXIciqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5%2FvnPl7y5TDMn58NKtwDWDDExgn0tREjRYqN0AOk%2Bemy8Rjo9tYq%2FAKopgIsW0vWBwaBQlyvqJcMGeh38Iwo7LibxPnVomdJw6U%2Fucec%2B7qsEXpDMUbmokmZQIBBCQ%2BULkoC502D8r62y6Ct72peKPwfWqEsiHKoxfMGa2wp4%2FewpPm1OAzSYa7ViLLT5oiqMU6C%2FUymNHwzyeS4PYBmaS41eZzhC8Dkyy51efNCYNwufgdQ9WSJ2KcOHoMNHTn6dThlOvWIM0Teok3dgS28hTmk7P29GbsRcgAmk8hp9nlZYHAyhdc0%2FuequTpzXYkujmMod80LdEePfe4yG2wEyJ74T4LzNAMZBXWBh1S83iFqB35SJWh8uJ0lxjSksZgBQcZ21rOcO9lUT14HcgoSfF52k9ORVCbfOKG%2FV5PEzLO7JSFXI6udjM9AzviGYFC4IUR%2FpqTWSQIrIUFYVlXH24WAWh69FBY3tNFOxGlSA41TBCxMdrU6nFaW0oGJw2PIbrncg1uYXMaefidEYMz%2B07Fhoxg8yA1JRmE75DSjqKyx4k5ebYx0J41v0K95nwKNqtf9VDru55C1kUuIdA8svX3GSBHKOilRC9aT1pOsTWWoYdzMqtulkQNqJsywkM%2Ber5NnKlhrGDUPQr4wp6CLygY6pgHY4lCuDMBT8RmL6by01urVM8e3bm0mW6Juixk%2Bs61M7d%2FhWjpDtIVLBNJ0Zalf0Fy4JFe1JJh9YhTKVWOTUU8DQE1OSy4LQkokyuAtcXtQ9%2BBIKXKgqbKLnSECkon%2FdIoC7LfMgnwIBjdoaGdL8cazO4mPXv%2FOgcNurK3tkdY12F0O3fgN8gy3HR3o0ugTXPKdo7uwZO6%2BDNw9Xv0hTr9kWKR1I8c0&X-Amz-Signature=8ad2d04ea4333b1d20df0637ac52478bcb75316b767d9781e0df377a4d3dfaf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

