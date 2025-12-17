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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYXWA5KW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFPpEHirtpHiFwvBOJREZgPNGeRYLDfEk4sR3ZOEKkSwIgFSggCPqo5Mw0JgZZgzM2ANqB1V%2Fb8TrkHQEAODjEN2Yq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDKWYj7aI7H5erlV6byrcA5r%2FBoIZaT%2BS4M9qnnXNskzYceWfcq6v%2FYD%2BgEcRNAWsVSGi6wubsqlpNsQa8C3TeW%2BryvVnp%2BYX%2BF96FkkQDu6fOvdY8jixMUapJy6SqMbu9a4iUja%2FPHrvYhOKKVX61CsooqYRzr2zpU85yEOAmK7BPCRlOTypXLfbLMgdhh8tbaLyGdd7IeoVEyy%2FErqlgE2mMH7YqzZ5%2F3DQiGMRFhfS9za1F8UnsMWdq6TF5cGNbLozVzpXAQv3nLwzjjjxho9YrQRio8ZZXJKiixNcbHmLyyu%2Bz3sMKDa4EEXr5aMJmyQ3IawvaGyv3A9FVxRiyAETMHEu4ZPHTDVseoQ3uaBVfsRhZ3p9%2BAgq57I8vAO72sEZXoQzjH8snPOprvm7y%2BYkEqPJYqkft9yDeuCmW9cnxyophODPS98yU7uwkl2K2qY00pJx%2BnVxqcLJv%2Bu3eHphWhhIwgndcQ4evOfEthDyCsCyETl8oyUJjF5eZjZyk2qQP7s%2BXPhJyaWEohVBQZTyLcCBLrxb1AshZNHO6g69hASbGZ9ql3hPvtrFM7ExtZ%2FOSpSiBsSF8bjR7xcnnzgP4UDLEpPkA7NplPUwSRIU%2FNUI%2Fr0LQUN14DBBwCMeJjOGsNOJc5K2oAYJMLThisoGOqUBlhYEELpQUU165zooEs7%2BbdVsrvPkutoLKZCSQCcuOkBNb2oHgOa2RwWj7u0Egp06EIv40cy3N5VJazbW%2BiV703ymPaWGznhA6dHkSKU6deURzXsu7YuTIXvaCpt5%2BPdhd8IeQFF3V4M5%2FbV3CeOEMy92Lv5cQSeTSvsDQy6VBHdHMWGpQwpsLjldjPqkvjD40Egr1VOVmpa3kfpsE4epTYuqVGn9&X-Amz-Signature=84c286b9fe81e07536d5bec8c8a23cc1dd093fa80478a78a9ea6affbc3c007f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYXWA5KW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFPpEHirtpHiFwvBOJREZgPNGeRYLDfEk4sR3ZOEKkSwIgFSggCPqo5Mw0JgZZgzM2ANqB1V%2Fb8TrkHQEAODjEN2Yq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDKWYj7aI7H5erlV6byrcA5r%2FBoIZaT%2BS4M9qnnXNskzYceWfcq6v%2FYD%2BgEcRNAWsVSGi6wubsqlpNsQa8C3TeW%2BryvVnp%2BYX%2BF96FkkQDu6fOvdY8jixMUapJy6SqMbu9a4iUja%2FPHrvYhOKKVX61CsooqYRzr2zpU85yEOAmK7BPCRlOTypXLfbLMgdhh8tbaLyGdd7IeoVEyy%2FErqlgE2mMH7YqzZ5%2F3DQiGMRFhfS9za1F8UnsMWdq6TF5cGNbLozVzpXAQv3nLwzjjjxho9YrQRio8ZZXJKiixNcbHmLyyu%2Bz3sMKDa4EEXr5aMJmyQ3IawvaGyv3A9FVxRiyAETMHEu4ZPHTDVseoQ3uaBVfsRhZ3p9%2BAgq57I8vAO72sEZXoQzjH8snPOprvm7y%2BYkEqPJYqkft9yDeuCmW9cnxyophODPS98yU7uwkl2K2qY00pJx%2BnVxqcLJv%2Bu3eHphWhhIwgndcQ4evOfEthDyCsCyETl8oyUJjF5eZjZyk2qQP7s%2BXPhJyaWEohVBQZTyLcCBLrxb1AshZNHO6g69hASbGZ9ql3hPvtrFM7ExtZ%2FOSpSiBsSF8bjR7xcnnzgP4UDLEpPkA7NplPUwSRIU%2FNUI%2Fr0LQUN14DBBwCMeJjOGsNOJc5K2oAYJMLThisoGOqUBlhYEELpQUU165zooEs7%2BbdVsrvPkutoLKZCSQCcuOkBNb2oHgOa2RwWj7u0Egp06EIv40cy3N5VJazbW%2BiV703ymPaWGznhA6dHkSKU6deURzXsu7YuTIXvaCpt5%2BPdhd8IeQFF3V4M5%2FbV3CeOEMy92Lv5cQSeTSvsDQy6VBHdHMWGpQwpsLjldjPqkvjD40Egr1VOVmpa3kfpsE4epTYuqVGn9&X-Amz-Signature=4b492a1fe0f56017e75cb61c378bb1acd9c5a0ec7e59701fd166de685856035f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

