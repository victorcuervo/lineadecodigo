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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTJ6G6NP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOLaX2yuhNw0to%2BHGvRRbtXdiJFK4%2BRjbmUFa5qvQOSAIgCQ4H6e9ghO28FY8bJpdXvr0xDe2aGGw6jgGzil%2F3HNEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbxxEHEXn9ZVV8woCrcA4mlMMfLMB1Tdqtb2foqXN29%2BZMwslePhpXue5nBz36U4mrMc%2BzI%2BFrBDZXJC3zLDVAae2itzK53gQ%2B6DtVaBg2ldxGf%2F4Nmb9l4SZlYm44vRqBQwUdAzqrtQ4biAanCAKHuT8cgt41rnTFhtBZy3ZI9ezXcjr4xOOGayqsUT8a75vtX2Tdn7dBoBXID0wp52WbW3OhhNF6wIbv11F6OozKWeuQIg1Vnp%2F%2Bm2grpFzCZYZzWgH%2Bo2paUDXaImLBrqhS0o5E2xKs7wOnFpIueDbjE5A7JVWy0BZCOshi5nMB4s1vRgHkUPRM%2FsohETno7O42mJDeozbipkeNVM17loDvBJZ%2F1zCiXoDc111KAhls1cxUhvTPgfd3KOaM9j4WIg8Nj3Xlne%2FQRULpCWR7CMQWzC8ZUCEA7pdtl%2F6ttwcIng4dSMJw7arn8CsywWIhN%2BD4vA0ZCKRDw6qzDy7wbCq6KDV%2BYEeI0dTssnMWlkno3Ic9EnvY%2BpKSbccSa%2Bco3ahMz5VWAhjy5oU3KXnhNY256GKd3iramLX%2FzFe0E%2FHw5y6cq4TqLAeNlY6RjKN%2FRG4PXUFUF6OJDwlVDmbnPL6QC2qGMOJT9JAaV5nT52T6MOarIBHYGzBK%2F364GMOqei8oGOqUBV7R%2F%2FFVUr55FP6FumXC%2BnxFjurjcblv1dEhb7O193DrKjfHRpC9%2Fuj3U9geNTqmcrtob5pEqiStwRvULW5RFpEyNTJNvuT182G6T5hvi1mnIyTPeWs15KMV8W8thfToYAOsN3DW0jjqbeQxUj0XSuBBwC5z6utdJtywV6XMleSLprf2KvbxnzekJUtGLrKiw2ujj2fkGvATNv2sdkptkziAh8val&X-Amz-Signature=3626963ac19ff7e80db7b8739c72ae484cdec822c50e27c268bd3e7f91b2d574&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTJ6G6NP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOLaX2yuhNw0to%2BHGvRRbtXdiJFK4%2BRjbmUFa5qvQOSAIgCQ4H6e9ghO28FY8bJpdXvr0xDe2aGGw6jgGzil%2F3HNEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbxxEHEXn9ZVV8woCrcA4mlMMfLMB1Tdqtb2foqXN29%2BZMwslePhpXue5nBz36U4mrMc%2BzI%2BFrBDZXJC3zLDVAae2itzK53gQ%2B6DtVaBg2ldxGf%2F4Nmb9l4SZlYm44vRqBQwUdAzqrtQ4biAanCAKHuT8cgt41rnTFhtBZy3ZI9ezXcjr4xOOGayqsUT8a75vtX2Tdn7dBoBXID0wp52WbW3OhhNF6wIbv11F6OozKWeuQIg1Vnp%2F%2Bm2grpFzCZYZzWgH%2Bo2paUDXaImLBrqhS0o5E2xKs7wOnFpIueDbjE5A7JVWy0BZCOshi5nMB4s1vRgHkUPRM%2FsohETno7O42mJDeozbipkeNVM17loDvBJZ%2F1zCiXoDc111KAhls1cxUhvTPgfd3KOaM9j4WIg8Nj3Xlne%2FQRULpCWR7CMQWzC8ZUCEA7pdtl%2F6ttwcIng4dSMJw7arn8CsywWIhN%2BD4vA0ZCKRDw6qzDy7wbCq6KDV%2BYEeI0dTssnMWlkno3Ic9EnvY%2BpKSbccSa%2Bco3ahMz5VWAhjy5oU3KXnhNY256GKd3iramLX%2FzFe0E%2FHw5y6cq4TqLAeNlY6RjKN%2FRG4PXUFUF6OJDwlVDmbnPL6QC2qGMOJT9JAaV5nT52T6MOarIBHYGzBK%2F364GMOqei8oGOqUBV7R%2F%2FFVUr55FP6FumXC%2BnxFjurjcblv1dEhb7O193DrKjfHRpC9%2Fuj3U9geNTqmcrtob5pEqiStwRvULW5RFpEyNTJNvuT182G6T5hvi1mnIyTPeWs15KMV8W8thfToYAOsN3DW0jjqbeQxUj0XSuBBwC5z6utdJtywV6XMleSLprf2KvbxnzekJUtGLrKiw2ujj2fkGvATNv2sdkptkziAh8val&X-Amz-Signature=d43713ab178488dae1e5b5d1dd24ae745a06c10d265f0dbf1ff8dfc2715fd382&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

