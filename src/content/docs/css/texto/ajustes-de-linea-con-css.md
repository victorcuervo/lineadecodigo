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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DADTEYX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzOIqgjTqF93aNMNCUcO63CBL45QYuA7ELofrJxH9bhAIhALOA17xmMon67baztA0Rry5K9ng8WYbYxDTdMtRTdJWXKv8DCHQQABoMNjM3NDIzMTgzODA1IgwztxYHWJbOydrUHMwq3AMSH7MYJCn8RXXOtvwYhPo0T8RRC7kyObL8BTesMTdj8pWCLpHQCudtkW7COzs9zl%2FHlEVnG1Ua5HkQsqtX79zF6gqc6WYJLL8D25oXT3eKVYmFSJLViQSrU3ou0YCLtkZNvOQz8d1FfDCKh%2FbDE2rAReEGVO8V3j%2F8YMEunslf8kubuYk8A5gK4zJL0WcPUYLfXgihW8yQ%2BGvc8z7uYPq45BAp1Y3f8%2FRa76GifSUWRn1gowa83RVjVKVfoG6zyNNzSYeUgAyJVgUBN6RY9I%2FDCdxh8m%2BmiwXGGpjlIlATd3%2BcxohUIqVdH7K21K8NMT%2FwCELxmNcx%2BGzC8A2KXtvhI7jyRk%2FrqEZN4yAc2p8vL7B6cdKw4fDz%2F84y6gggVDBmpT%2Fb%2BuXfFW%2BHpM3%2Bt7vLzH%2BuTBIwXqXuy3XdWw5DcFu3OP77JOU8Bn9aHviYNF1dfj1MFlketMdpT0xA9rlgZJ0R5oTHJ1L3pBxEy%2FqXsU0VzzuaNItQEqygrZa00MIhl%2BbP%2F4kdVy1qCd1c%2B5NFlA9tCFhVPvaHISAmxXpR8Zgied6p57Kn%2BL8tuXF8XpUXi89GzhUidOoiRGuowVX1WhTDVM45JyNX0Wjeexgwr7IFbWIFVgvNYB6hdjDZsojKBjqkAY2e74FLR5tjIV8Eehd21fiprRdIaCFI1b5vHw1mJMtt%2FoG12rYVsvCl94dVp0buwaZBzpbPXeyLt%2BaoOpGSi0UFQjJSWHW02%2Bdjm4VybT7YeoFQCsfxypQpqeDo1iJgscNdpzmfHQ3Rq6wQ%2FIWDckSB%2BpbGuYNiCClhYI7G57hCZntkb2wcK5UAYlHHnUfSh5Ytk5Adm0mS9b4VMS2hiKLdlagH&X-Amz-Signature=8a658ca03e49905f32aa2155596d7df6dee474043969e1cfa21f02042edf42f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DADTEYX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzOIqgjTqF93aNMNCUcO63CBL45QYuA7ELofrJxH9bhAIhALOA17xmMon67baztA0Rry5K9ng8WYbYxDTdMtRTdJWXKv8DCHQQABoMNjM3NDIzMTgzODA1IgwztxYHWJbOydrUHMwq3AMSH7MYJCn8RXXOtvwYhPo0T8RRC7kyObL8BTesMTdj8pWCLpHQCudtkW7COzs9zl%2FHlEVnG1Ua5HkQsqtX79zF6gqc6WYJLL8D25oXT3eKVYmFSJLViQSrU3ou0YCLtkZNvOQz8d1FfDCKh%2FbDE2rAReEGVO8V3j%2F8YMEunslf8kubuYk8A5gK4zJL0WcPUYLfXgihW8yQ%2BGvc8z7uYPq45BAp1Y3f8%2FRa76GifSUWRn1gowa83RVjVKVfoG6zyNNzSYeUgAyJVgUBN6RY9I%2FDCdxh8m%2BmiwXGGpjlIlATd3%2BcxohUIqVdH7K21K8NMT%2FwCELxmNcx%2BGzC8A2KXtvhI7jyRk%2FrqEZN4yAc2p8vL7B6cdKw4fDz%2F84y6gggVDBmpT%2Fb%2BuXfFW%2BHpM3%2Bt7vLzH%2BuTBIwXqXuy3XdWw5DcFu3OP77JOU8Bn9aHviYNF1dfj1MFlketMdpT0xA9rlgZJ0R5oTHJ1L3pBxEy%2FqXsU0VzzuaNItQEqygrZa00MIhl%2BbP%2F4kdVy1qCd1c%2B5NFlA9tCFhVPvaHISAmxXpR8Zgied6p57Kn%2BL8tuXF8XpUXi89GzhUidOoiRGuowVX1WhTDVM45JyNX0Wjeexgwr7IFbWIFVgvNYB6hdjDZsojKBjqkAY2e74FLR5tjIV8Eehd21fiprRdIaCFI1b5vHw1mJMtt%2FoG12rYVsvCl94dVp0buwaZBzpbPXeyLt%2BaoOpGSi0UFQjJSWHW02%2Bdjm4VybT7YeoFQCsfxypQpqeDo1iJgscNdpzmfHQ3Rq6wQ%2FIWDckSB%2BpbGuYNiCClhYI7G57hCZntkb2wcK5UAYlHHnUfSh5Ytk5Adm0mS9b4VMS2hiKLdlagH&X-Amz-Signature=3b37d5f1fc3bc887605bac3d78d57463df65e9e9cfa22415d0c48fe78370162a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

