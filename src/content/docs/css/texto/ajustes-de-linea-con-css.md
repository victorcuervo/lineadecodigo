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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NDDS3DP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICV1TcEP7QN%2BzHeXTveHrrj2dy4qYn2tJmstjTU0zvs%2BAiBvdjbpprKY0RZ8JIs74E%2FH%2FvFengxWcgL2A01GBP72iSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMg%2BIQA8RKKJMH5DcKKtwDlf10FZstPT9q25FlzJV5lwc%2Fqf1RWiJg45IS7jNupOHCwQ0roCLq4LqTKU35qo4unoWloM%2FDCZx8H2SeqmnLXZNxNigM6URpmTmfJL6WwtRKRTFA%2FXNcBnmlWUAb0TmMMIvnp%2BvoTnjZGk6nGbv9nsXMTqGH7AtR3wiT%2BM7w%2F%2BAnoe%2FkGGureXPfKS2DJhxA1Hpl764EK34MOjydZKGcSE18Dwz4wnbAjASGnxeNzVpzbEsoIYpsST%2BsyQc%2B4Chr1RQbs3s2ox0%2BeDGjDwhD5jpclpmdn8nh6JWNVOrc1kNPuf43D29u%2BiWENFQiF6GwzxExzFToRg9%2BtZsG%2FDvyCW0zrbu0fBJMSikLgsnoPIlg%2BfnUKz%2FCkThGD91F9RXWTcASwtgnD%2BnCZd2fg7Xi2n1qI9Pes1OkuaSOnz%2BjI0mOiN75rql%2BoZx1QsL9YmC33o5Hp0C4mB44Bzk9%2FafLQujVVTj3BIx5x7wyvlNyfJy9wekxmPOsaYU%2FzJKEcbw%2B9ezNNy8b03biTfdzYm8NEKszwFfcsC6Ies6Tp1uJDi1Or2X3g9Cgogb9G1fFfZnOr8Q2D%2BOTRypylHv9%2Fg6KF95pm2f0823gQID%2B8NEI6c0sHPxzHo73eV2ImkcwmoKJygY6pgFSuXeojqThuTYP8k%2FD%2BJurF%2BICjXRdgJnfcNrjqGbfBICcaho%2BuHyShmo24ARBemgLQq7OP95qIQgP5W3u0VHFjG5E4A5SpK8sfZM9itnTBNhWFBughyZPtQLtprOK%2Fwt%2BRmbNkwEm5%2Ba1%2BEENt1ZFIBAoiN7O%2FhzhKdICXZaWkQxOUmSnJqf7ePGSMCh21%2F74NWwX5ezlr8matYlLeeyxkaOftVlJ&X-Amz-Signature=b4108311adda9376ffeec8a312807ca24cba7748201db5b4260c0e19d92f3465&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NDDS3DP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICV1TcEP7QN%2BzHeXTveHrrj2dy4qYn2tJmstjTU0zvs%2BAiBvdjbpprKY0RZ8JIs74E%2FH%2FvFengxWcgL2A01GBP72iSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMg%2BIQA8RKKJMH5DcKKtwDlf10FZstPT9q25FlzJV5lwc%2Fqf1RWiJg45IS7jNupOHCwQ0roCLq4LqTKU35qo4unoWloM%2FDCZx8H2SeqmnLXZNxNigM6URpmTmfJL6WwtRKRTFA%2FXNcBnmlWUAb0TmMMIvnp%2BvoTnjZGk6nGbv9nsXMTqGH7AtR3wiT%2BM7w%2F%2BAnoe%2FkGGureXPfKS2DJhxA1Hpl764EK34MOjydZKGcSE18Dwz4wnbAjASGnxeNzVpzbEsoIYpsST%2BsyQc%2B4Chr1RQbs3s2ox0%2BeDGjDwhD5jpclpmdn8nh6JWNVOrc1kNPuf43D29u%2BiWENFQiF6GwzxExzFToRg9%2BtZsG%2FDvyCW0zrbu0fBJMSikLgsnoPIlg%2BfnUKz%2FCkThGD91F9RXWTcASwtgnD%2BnCZd2fg7Xi2n1qI9Pes1OkuaSOnz%2BjI0mOiN75rql%2BoZx1QsL9YmC33o5Hp0C4mB44Bzk9%2FafLQujVVTj3BIx5x7wyvlNyfJy9wekxmPOsaYU%2FzJKEcbw%2B9ezNNy8b03biTfdzYm8NEKszwFfcsC6Ies6Tp1uJDi1Or2X3g9Cgogb9G1fFfZnOr8Q2D%2BOTRypylHv9%2Fg6KF95pm2f0823gQID%2B8NEI6c0sHPxzHo73eV2ImkcwmoKJygY6pgFSuXeojqThuTYP8k%2FD%2BJurF%2BICjXRdgJnfcNrjqGbfBICcaho%2BuHyShmo24ARBemgLQq7OP95qIQgP5W3u0VHFjG5E4A5SpK8sfZM9itnTBNhWFBughyZPtQLtprOK%2Fwt%2BRmbNkwEm5%2Ba1%2BEENt1ZFIBAoiN7O%2FhzhKdICXZaWkQxOUmSnJqf7ePGSMCh21%2F74NWwX5ezlr8matYlLeeyxkaOftVlJ&X-Amz-Signature=3cb8354ad32ba4078f0bfa79f476f0d4d29a5fe8acda73568cff702fcf5a0100&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

