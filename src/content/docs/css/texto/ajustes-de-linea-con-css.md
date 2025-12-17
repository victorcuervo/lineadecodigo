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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTWUYFLU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhAuW814N6Q9z9H2tpE5xMj9uZr7KvhAPfL6YTylcwFAiEAq39ZTiw1OMgP5VEvirTPmJoUdgoIe1nPfYgEBzMIOx8q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDEKkLEuehZlf522h8CrcA5FRx%2Fvun%2FqlDzTbxm1RW65R9%2FJfITW2VFinVH4bfEd83%2BTm%2BIE1cCd5jYe9KkmeetSirttLXoT9KVFz6myLcZrYKAh1LKIZVbKeP%2FHAARXyUDQ4Tr8niCMhr1oamkEF92nImKCwkHbeRKnCFllaXCZz0tO2EWd%2FtLTbo8AxuSDf3hKu9s8HFaRIR81g6S5%2FaEoFv3BD1dqqPvZ99Ge%2FHJQ%2BrCkC4GX0qMp9Z1qnn0lPyeGIRsGCx8dl2luhRRqEmWoB8iXT%2BWr2P8NOm4C8NNxnyCAQxBo%2Fp%2B%2B2lotiC6sbdgA5BSf9Yb1cb9CAiB3qTKdII%2BdH9xBl%2BvbBcuB%2FACoPApPMUWLCnFR0uQabBsYHIi7pPTNdTXub%2BNgMqhL6gUpApCLz5UvNT1w13V%2FPk7XYfJqDNCi08VdnJkEqm77IGK3pV4O4bZLgpELhweGcO5vLTG7IeM%2BtASorViQhCeBV4YT%2FWYsO7vmzj14xco0ZDpEpaZXl9%2BfSLNqcD7UX0EjT2Rhaki1gBLir1G2mHL4TNDDdHHoowb3FjVgcZZCPIQQjoH6KAKS4rrNp6syxKjPrFf79kULaY99uT%2Fj5%2BvmzYIt0dCYTsyEodIQ6oxzKUouO%2BN7pN00MinUIMIKziMoGOqUBA6uWP%2FUo7KyUFse6j4k6JGJ94OXdapkJBErA7xLBHCLkZ%2Ft4SsJY3hcUe%2FaUycXguDAhs1r%2F9ZFBvY%2FJ10u5COrrE09Qv4TQj%2BdaZa1kQUy06s7E8Pxm4VvQ1Kr4OOGwi7qJti5p%2Bz0NdoOZekNq02QM68o7b1rl7Bsyp06BJSTMsG%2F9RhbnhwIsvPcEl9qqZ%2BtAwj1RcAneVwWEXBd39ZBV7I3F&X-Amz-Signature=c3ccbff0c5dd32a2bb197d47c0b76ec3367064cdb5211b3427e46fcaf222bff6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTWUYFLU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhAuW814N6Q9z9H2tpE5xMj9uZr7KvhAPfL6YTylcwFAiEAq39ZTiw1OMgP5VEvirTPmJoUdgoIe1nPfYgEBzMIOx8q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDEKkLEuehZlf522h8CrcA5FRx%2Fvun%2FqlDzTbxm1RW65R9%2FJfITW2VFinVH4bfEd83%2BTm%2BIE1cCd5jYe9KkmeetSirttLXoT9KVFz6myLcZrYKAh1LKIZVbKeP%2FHAARXyUDQ4Tr8niCMhr1oamkEF92nImKCwkHbeRKnCFllaXCZz0tO2EWd%2FtLTbo8AxuSDf3hKu9s8HFaRIR81g6S5%2FaEoFv3BD1dqqPvZ99Ge%2FHJQ%2BrCkC4GX0qMp9Z1qnn0lPyeGIRsGCx8dl2luhRRqEmWoB8iXT%2BWr2P8NOm4C8NNxnyCAQxBo%2Fp%2B%2B2lotiC6sbdgA5BSf9Yb1cb9CAiB3qTKdII%2BdH9xBl%2BvbBcuB%2FACoPApPMUWLCnFR0uQabBsYHIi7pPTNdTXub%2BNgMqhL6gUpApCLz5UvNT1w13V%2FPk7XYfJqDNCi08VdnJkEqm77IGK3pV4O4bZLgpELhweGcO5vLTG7IeM%2BtASorViQhCeBV4YT%2FWYsO7vmzj14xco0ZDpEpaZXl9%2BfSLNqcD7UX0EjT2Rhaki1gBLir1G2mHL4TNDDdHHoowb3FjVgcZZCPIQQjoH6KAKS4rrNp6syxKjPrFf79kULaY99uT%2Fj5%2BvmzYIt0dCYTsyEodIQ6oxzKUouO%2BN7pN00MinUIMIKziMoGOqUBA6uWP%2FUo7KyUFse6j4k6JGJ94OXdapkJBErA7xLBHCLkZ%2Ft4SsJY3hcUe%2FaUycXguDAhs1r%2F9ZFBvY%2FJ10u5COrrE09Qv4TQj%2BdaZa1kQUy06s7E8Pxm4VvQ1Kr4OOGwi7qJti5p%2Bz0NdoOZekNq02QM68o7b1rl7Bsyp06BJSTMsG%2F9RhbnhwIsvPcEl9qqZ%2BtAwj1RcAneVwWEXBd39ZBV7I3F&X-Amz-Signature=305ef17d1e4cbd2b1130688ef04373621f6b5154a26d2253d8f44885bac53c18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

