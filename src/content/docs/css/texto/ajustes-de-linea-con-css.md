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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QJYFG5H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEiPogMEr6%2Ff6SPZaCdFDtgdCwuSoXjAV67rtFwEparMAiBldOE1%2FMRnptUcDlOM%2Bnp8gpzhTDt00p9uvkzXjy1XDSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMAG4MKlsEuvJ72VDoKtwDXD19fE0MRotL2Dw8Bnr9QVTTjFrUVqIicwby0HwBgUw9tkJRUHkd4JnYS3%2BcuduyU6E%2Bt6Y%2FrUOxDo7SD5qov5pLOb%2FcZPmf1P6teVUdCFwZr3zfo27E7c70xE2g7QMz2JnPSVdZMt%2BGW4KMrV%2FV4FhNO%2B%2BMeoasJkkWLAsUQhorVVWsZuGHtEyNMiJsOsiT3cq5ps3hW2SkVAuu68uL04J%2B1IkwK0k2QxZe1vFFsgyhlmbLaXarN0f9ho%2FYVvSHbSIbBekS%2FOlVOTrLOjtEMjWqSp1t92J0uZClHwvunZHBA597NaHr5XVRElJNowL1XvXixUh0iNu4p58eicwX2CHJLUat5BMd47EcGOZbGNjEwtijgLp0gwVodZbRSbZvwqWSr9xET%2FoKJzCRdEDezdHuTKtdhwTGPeBWP6AaTz%2FnIn4gFdNeB6t060CZbygHBJsd3OQGzbBcw6t5P8jOr25DiAQhsUZcVm7Y1%2BAQvhJkE3Xh9%2By60s0G9vXgvxpslYpm8%2B7sTf9lIWZDeYkeyCONB%2B0I%2BODvgOEKe2fvKFyMnfzhR7dknU9YKgtPMISIf8z8qkOa8%2F9smrbPNLwXQeAcqciciQ%2FBvyw%2Fd7%2BSEc5A8msAlVlCOXhRJI0w7e%2BJygY6pgGWMHo%2B%2FUQY8WIicA%2F3Vv6Wx7PdvnwuGnCgLONzthA7YFzqxQeTuCQ%2FeoWxJufDV5jiPZdzayRKf9Q7POj4bnlCaDLk128iS%2FQoFZQDP96pVXyV1etTeLNAAq%2FE0zyI%2FVyBf8NvG7vflUUAZhMVEc1MrKB97bA8E3xiTsozrjmeU%2FcllwalOsqHzbC3c4%2F4K6F7twX2GsNoAWYv96DjQltrZNzh3w%2Fv&X-Amz-Signature=468159b54b8f5770d6442ac0edb0a867956293a35fb5a9044665299e52466ddf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QJYFG5H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEiPogMEr6%2Ff6SPZaCdFDtgdCwuSoXjAV67rtFwEparMAiBldOE1%2FMRnptUcDlOM%2Bnp8gpzhTDt00p9uvkzXjy1XDSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMAG4MKlsEuvJ72VDoKtwDXD19fE0MRotL2Dw8Bnr9QVTTjFrUVqIicwby0HwBgUw9tkJRUHkd4JnYS3%2BcuduyU6E%2Bt6Y%2FrUOxDo7SD5qov5pLOb%2FcZPmf1P6teVUdCFwZr3zfo27E7c70xE2g7QMz2JnPSVdZMt%2BGW4KMrV%2FV4FhNO%2B%2BMeoasJkkWLAsUQhorVVWsZuGHtEyNMiJsOsiT3cq5ps3hW2SkVAuu68uL04J%2B1IkwK0k2QxZe1vFFsgyhlmbLaXarN0f9ho%2FYVvSHbSIbBekS%2FOlVOTrLOjtEMjWqSp1t92J0uZClHwvunZHBA597NaHr5XVRElJNowL1XvXixUh0iNu4p58eicwX2CHJLUat5BMd47EcGOZbGNjEwtijgLp0gwVodZbRSbZvwqWSr9xET%2FoKJzCRdEDezdHuTKtdhwTGPeBWP6AaTz%2FnIn4gFdNeB6t060CZbygHBJsd3OQGzbBcw6t5P8jOr25DiAQhsUZcVm7Y1%2BAQvhJkE3Xh9%2By60s0G9vXgvxpslYpm8%2B7sTf9lIWZDeYkeyCONB%2B0I%2BODvgOEKe2fvKFyMnfzhR7dknU9YKgtPMISIf8z8qkOa8%2F9smrbPNLwXQeAcqciciQ%2FBvyw%2Fd7%2BSEc5A8msAlVlCOXhRJI0w7e%2BJygY6pgGWMHo%2B%2FUQY8WIicA%2F3Vv6Wx7PdvnwuGnCgLONzthA7YFzqxQeTuCQ%2FeoWxJufDV5jiPZdzayRKf9Q7POj4bnlCaDLk128iS%2FQoFZQDP96pVXyV1etTeLNAAq%2FE0zyI%2FVyBf8NvG7vflUUAZhMVEc1MrKB97bA8E3xiTsozrjmeU%2FcllwalOsqHzbC3c4%2F4K6F7twX2GsNoAWYv96DjQltrZNzh3w%2Fv&X-Amz-Signature=b4c1709ec6839177a17136cef85fc70e8242d9735970b6092bc94d93eebc14c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

