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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRXFOFEP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBM0SLfk%2B6CAehKwm3V0IuITJHOGqc9rd4JwuATtZIdvAiA6%2F9JpMJiRuvIzw8THt5N9MXEx8IttAb9ulHF%2BaRaKFir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMbJGc3h3Q7BWYOge0KtwDucNna5F6VQ8hK6Y45SCciGwHhTNxuFv2f0lnA7E6xMF5sYIcvQE3yF%2FxclGCzPd%2BjwIr01SxXhl5muAlLj4kGz1JT%2Ffo15VYaC3ue3fEneVARBGMnRiPV4QONx1FMnb3y61HYzpRDSavVxz6ZL%2FwshHJM55gEUdzTsI28OHBwpR4eqMzthbxTlezLeK2MQOUQ1vBUU7M0F66l4J4OssuN7s1Ip6ipI6i8nAnMx6jL6imY4fUILdX6KyTjjquYHG9hZt%2FqvfMemXp7kShl0RJP7PeBRcQ7AoZkiBIENi3Jlfm5fCqCjNR%2B%2BCgncnYHCLUm5JVaRSghQoibS687nVFa%2BByChdfnKYeZR3h%2BLOO0SYhUi69%2B1Hg8KtTA38ol0dkHTEMg8tl5eWbDW2QC9AQUJOzn4%2BD608mtoFdmG1Q%2Bl8%2B3mghgJxb9w0v0kMyrM2vnvpcrx8myhqm5dz%2FSYFSY1I9ES4xue9WNP1ev%2FZy7AwlFk2BAbSG8ztZRyYB1kKqolFLxv6867eaDG7CuG7yFdyDYwjlLL0sHJg%2F8FCRn%2BQMKItMq2gfGdQDgx14KFpeEjyP4FoCwub0n%2Bd%2FV7BtWfelJE34QfXV91wOptcV2aqWCW%2B%2FhGpwAzf5XVIw8uCKygY6pgHUKP0cMVTiljEzG5ToFV5hwoOU8qUKHlmqr9fRJVzlPQAAPkhZu12hgWLol%2FtMris0BwExLhZG%2FfiY085RDpC1WA44Fw%2FPbVXdPKy7rCRQQKD0JyP5bpXKX3aLQrp763HbbQWb9nQSJaYNtp%2FO7QMt0CJHas%2Bvm3TlZzJHthWFXAznaOBTHzgsjgkMxUoPJRzPBFgWheHS3LzdSBxAAWEgl6uu95VS&X-Amz-Signature=1e4d386cd79acdc5e8e9b74f054c96cb19b6e9fea4769d5e5301223d4476cbc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRXFOFEP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBM0SLfk%2B6CAehKwm3V0IuITJHOGqc9rd4JwuATtZIdvAiA6%2F9JpMJiRuvIzw8THt5N9MXEx8IttAb9ulHF%2BaRaKFir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMbJGc3h3Q7BWYOge0KtwDucNna5F6VQ8hK6Y45SCciGwHhTNxuFv2f0lnA7E6xMF5sYIcvQE3yF%2FxclGCzPd%2BjwIr01SxXhl5muAlLj4kGz1JT%2Ffo15VYaC3ue3fEneVARBGMnRiPV4QONx1FMnb3y61HYzpRDSavVxz6ZL%2FwshHJM55gEUdzTsI28OHBwpR4eqMzthbxTlezLeK2MQOUQ1vBUU7M0F66l4J4OssuN7s1Ip6ipI6i8nAnMx6jL6imY4fUILdX6KyTjjquYHG9hZt%2FqvfMemXp7kShl0RJP7PeBRcQ7AoZkiBIENi3Jlfm5fCqCjNR%2B%2BCgncnYHCLUm5JVaRSghQoibS687nVFa%2BByChdfnKYeZR3h%2BLOO0SYhUi69%2B1Hg8KtTA38ol0dkHTEMg8tl5eWbDW2QC9AQUJOzn4%2BD608mtoFdmG1Q%2Bl8%2B3mghgJxb9w0v0kMyrM2vnvpcrx8myhqm5dz%2FSYFSY1I9ES4xue9WNP1ev%2FZy7AwlFk2BAbSG8ztZRyYB1kKqolFLxv6867eaDG7CuG7yFdyDYwjlLL0sHJg%2F8FCRn%2BQMKItMq2gfGdQDgx14KFpeEjyP4FoCwub0n%2Bd%2FV7BtWfelJE34QfXV91wOptcV2aqWCW%2B%2FhGpwAzf5XVIw8uCKygY6pgHUKP0cMVTiljEzG5ToFV5hwoOU8qUKHlmqr9fRJVzlPQAAPkhZu12hgWLol%2FtMris0BwExLhZG%2FfiY085RDpC1WA44Fw%2FPbVXdPKy7rCRQQKD0JyP5bpXKX3aLQrp763HbbQWb9nQSJaYNtp%2FO7QMt0CJHas%2Bvm3TlZzJHthWFXAznaOBTHzgsjgkMxUoPJRzPBFgWheHS3LzdSBxAAWEgl6uu95VS&X-Amz-Signature=d788b7a8e04764f653abc431c8f6eeac86d8a9478b4b94d53aa06ed4a3f6d567&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

