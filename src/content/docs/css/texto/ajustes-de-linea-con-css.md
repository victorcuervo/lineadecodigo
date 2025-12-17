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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EFKMYW7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ%2FZ%2FPQsB9YYRbAY3raGE7SqbjvO%2BzmHkrz6kLKrWxRgIgb5EnsCP5nmhkQktF1KSyTurqQW6Wcn38foyWFHU5HRoq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDD2inmCbOlt4dVhfwSrcA%2FqcB3Uk6DIA%2BdKkG2SpSrCHw1PPk9s%2BN%2Bhns%2FArJGL4RuGKDclvDGATnmy7IwWVsVSG%2B9Xq8ccyLk%2FKbTstjgSW6QPRpGk2qTrv8Yp7ohjm3DY5k3CL8PmWDY1R6KSFe2oqijyChww3PNDnbcUUyilWKmqMe%2BUWo%2FizAqsguj1HO7OTHT35RHataMP4%2FekSaky1b7%2B1c22RWgzjZMNGlTcJg5ptenN0bLliG5qBzEKZcnFoG6ICykxKH4tI97nE8Jj%2BlzyeYo5o7EAvH5cX1BQ%2BnGET9npPunba1KZLHuz4C2WGbnLjBRnkL2x4GelEdRwHY4xztSKUH4u%2BZsVzozdbKxCI8%2Fqf9ZfFdZtKELdtH%2Bb3SUXdhKJ14uZqmLLNMI%2BY%2BmXV6lcjuqrG0KMSdpIrap1zBGAr%2FMJQWG3ZP%2BPLw7NcYE2N23%2BXVh9LDuoWZUjVyiv7dCyUf3dq%2Fb8Pv%2BvtLXmz9pPmaM2QaZtjKO6DRyOPTcInH%2FTgYO%2FOQZSWwEC5Ul5w4XbF%2FSXnzpw9wtHixM5ZeSJcogIgPK3H2GtRy9RYRZy1ISfKc283pF3ANymbvs5lY8gvu9nY0EzOM72oKlDHQXsg%2Fz%2Bzggckidn0wj5JFCLv%2FfYeeRS%2BMJv7h8oGOqUBpEp5NcOnzO5z2AxwRHSMBjuU01UemeKCAMW7oPxC5WKRAa9OZGdaCUDLH9N5XDc5mmQd1OwKDmGsZhlSNSuoHQO0b8hporTrAdcspGfH8vHn9IPXDzoo7P05eTI7pE8ACJngK%2BtoPLHVm%2BoOWyxxUXAKN1O93gwFGohlaFqsGs0L7APJgMbV5BQq1EaBBFXYl5iwCxivuz%2F%2F9fbTVGrOIgHRUJ2c&X-Amz-Signature=a97137226be913dc1d888007fc8016b947e73f44baa4c1240ec70cde18d03f82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EFKMYW7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ%2FZ%2FPQsB9YYRbAY3raGE7SqbjvO%2BzmHkrz6kLKrWxRgIgb5EnsCP5nmhkQktF1KSyTurqQW6Wcn38foyWFHU5HRoq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDD2inmCbOlt4dVhfwSrcA%2FqcB3Uk6DIA%2BdKkG2SpSrCHw1PPk9s%2BN%2Bhns%2FArJGL4RuGKDclvDGATnmy7IwWVsVSG%2B9Xq8ccyLk%2FKbTstjgSW6QPRpGk2qTrv8Yp7ohjm3DY5k3CL8PmWDY1R6KSFe2oqijyChww3PNDnbcUUyilWKmqMe%2BUWo%2FizAqsguj1HO7OTHT35RHataMP4%2FekSaky1b7%2B1c22RWgzjZMNGlTcJg5ptenN0bLliG5qBzEKZcnFoG6ICykxKH4tI97nE8Jj%2BlzyeYo5o7EAvH5cX1BQ%2BnGET9npPunba1KZLHuz4C2WGbnLjBRnkL2x4GelEdRwHY4xztSKUH4u%2BZsVzozdbKxCI8%2Fqf9ZfFdZtKELdtH%2Bb3SUXdhKJ14uZqmLLNMI%2BY%2BmXV6lcjuqrG0KMSdpIrap1zBGAr%2FMJQWG3ZP%2BPLw7NcYE2N23%2BXVh9LDuoWZUjVyiv7dCyUf3dq%2Fb8Pv%2BvtLXmz9pPmaM2QaZtjKO6DRyOPTcInH%2FTgYO%2FOQZSWwEC5Ul5w4XbF%2FSXnzpw9wtHixM5ZeSJcogIgPK3H2GtRy9RYRZy1ISfKc283pF3ANymbvs5lY8gvu9nY0EzOM72oKlDHQXsg%2Fz%2Bzggckidn0wj5JFCLv%2FfYeeRS%2BMJv7h8oGOqUBpEp5NcOnzO5z2AxwRHSMBjuU01UemeKCAMW7oPxC5WKRAa9OZGdaCUDLH9N5XDc5mmQd1OwKDmGsZhlSNSuoHQO0b8hporTrAdcspGfH8vHn9IPXDzoo7P05eTI7pE8ACJngK%2BtoPLHVm%2BoOWyxxUXAKN1O93gwFGohlaFqsGs0L7APJgMbV5BQq1EaBBFXYl5iwCxivuz%2F%2F9fbTVGrOIgHRUJ2c&X-Amz-Signature=557d6e0a95462b8966c4c5b0959fbc2ffddd9549ee700ed6775503ffb13a4527&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

