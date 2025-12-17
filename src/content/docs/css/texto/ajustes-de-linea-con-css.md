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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EHYKFSD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICO9sxcTx%2FjFsoOp%2Bqj5cijc9diEtVavoDm15vOrgRDbAiEAnSN9yGVz91z%2BlEDg02bbKKA5vfGrGfHRMoJDSEmDgqYqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0FxJS6S7hodDK5eCrcAwWJkebcSXOLwy9%2FiprhzzfHyX5aYISCemoJt9J0Txum4D%2FEu4PHC5SdnWgettP%2Bzy33NNiSs32jdqsocmA1Gi7iFQZTlAiR92vV5iVjIE9nCa2no11gmKFkUTI6R%2BVjWqAf5LABgFRr4sale%2BachNCyFkp1HgpZjUD7kTNXm%2B6%2Fh6vW4a2BmKOgDrWWxQhk04NmhhSrcemBAff8gct5DixjQ%2FrgHgf8GmULl7omd8wgmYedmeTQMstf8OdvWFKAa5lxUxQX1E44GM2D6mqTphLDqSUy0jtXUWQOqkUWUiyDzv%2FmA%2Fn%2Br8GaoSIHAMJNUudFJGCm89W5ZUDvfX88Fw3HDORVNeYK3AQqnTky4VKH0kKl4A28wM7%2BzT8ANokRjT3C9r%2FkhgZnAK510Se2AWUfDK8wJrq0V2m7NcBj55wwvJ4DFfKbk%2BMP8HJnEhySfSE4Fo6AZ4J4Q1XgT9CN8kjPPuk52XL71OYhk59wqV05ZXsm5ndejeCBy%2BTp5fiZSw0efpKKd1qxfRHrJoo9WhIbzORukjZVGSWWqR%2F0ST1whOqFRfBh2jDCCSFAFnKzvZUUX8w%2Bue00304SwtSdphnV%2FfAQtc%2FtL8ffn1zGFGRF4KVMp25hieMLI0DQMKuAi8oGOqUBoXbpO2ImCwON4r%2FLR3Piwv94xA35%2FYGPjhbbM6TW4c%2BKVMF9ugFmeDY4pcAhRLB29FyfafpXAlcDwmH3WqKFzY%2BTKXJe0cplqMzyc6wZnypjGu2%2Ft5rmzitJMF7Loq5D9AqpDbOQYzGz1ct1HaT0YXgmeTetERwGsvkQHKW93Y0XQMU8h1Ap1XCCRTCPt2iHE958vso61w7I8sNz5v%2BwXwXQBbHb&X-Amz-Signature=591e13812fc345f047c91fd0c4eaf730ed49ced7c9f85e06b0c0793d5a2d5a5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EHYKFSD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICO9sxcTx%2FjFsoOp%2Bqj5cijc9diEtVavoDm15vOrgRDbAiEAnSN9yGVz91z%2BlEDg02bbKKA5vfGrGfHRMoJDSEmDgqYqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0FxJS6S7hodDK5eCrcAwWJkebcSXOLwy9%2FiprhzzfHyX5aYISCemoJt9J0Txum4D%2FEu4PHC5SdnWgettP%2Bzy33NNiSs32jdqsocmA1Gi7iFQZTlAiR92vV5iVjIE9nCa2no11gmKFkUTI6R%2BVjWqAf5LABgFRr4sale%2BachNCyFkp1HgpZjUD7kTNXm%2B6%2Fh6vW4a2BmKOgDrWWxQhk04NmhhSrcemBAff8gct5DixjQ%2FrgHgf8GmULl7omd8wgmYedmeTQMstf8OdvWFKAa5lxUxQX1E44GM2D6mqTphLDqSUy0jtXUWQOqkUWUiyDzv%2FmA%2Fn%2Br8GaoSIHAMJNUudFJGCm89W5ZUDvfX88Fw3HDORVNeYK3AQqnTky4VKH0kKl4A28wM7%2BzT8ANokRjT3C9r%2FkhgZnAK510Se2AWUfDK8wJrq0V2m7NcBj55wwvJ4DFfKbk%2BMP8HJnEhySfSE4Fo6AZ4J4Q1XgT9CN8kjPPuk52XL71OYhk59wqV05ZXsm5ndejeCBy%2BTp5fiZSw0efpKKd1qxfRHrJoo9WhIbzORukjZVGSWWqR%2F0ST1whOqFRfBh2jDCCSFAFnKzvZUUX8w%2Bue00304SwtSdphnV%2FfAQtc%2FtL8ffn1zGFGRF4KVMp25hieMLI0DQMKuAi8oGOqUBoXbpO2ImCwON4r%2FLR3Piwv94xA35%2FYGPjhbbM6TW4c%2BKVMF9ugFmeDY4pcAhRLB29FyfafpXAlcDwmH3WqKFzY%2BTKXJe0cplqMzyc6wZnypjGu2%2Ft5rmzitJMF7Loq5D9AqpDbOQYzGz1ct1HaT0YXgmeTetERwGsvkQHKW93Y0XQMU8h1Ap1XCCRTCPt2iHE958vso61w7I8sNz5v%2BwXwXQBbHb&X-Amz-Signature=c2673c4b9290210d2febb7fdc81ce98d2a7389505214fce894baf45314709008&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

