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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQFD3S7V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8P8mVcXpYmXrqNCrWHDQyvDA36kbAiDQ1u7KIuHhakAiEA2ujIHFWV2HhdYvSyhcsHFv%2BtdF90rhpFx%2Fdk%2BK9JW9Yq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOAR5Aeymk2GJz3rsSrcA0i%2FHDB3fy31LWW7YzaEUa58rkvcAO3Re8uNrbJm9gt%2FsZcpxIMLlq29N4kLsii9ZZds1l8EfNNRqnXGXicN3tNrjwVNQJCbT4hNywk1KNyQ7rm%2B48QG2wzxGnJ2m51Vaf6xwNEcON8LQN6OfuI4ZSrzxbbbHMUUTB5sF9weDTQ21MVtY2G91%2FHVnaMToQrCHwhXHVng4JN2kE%2F8sTKLSI7C%2BnxnU0xG1%2B7s82HxWvbRb3BYN48exFcYvkiMBoWUMZUGl99ZzUf2xGOax2MLlPLEC8fQWsIgDA4FKVykNSCzzozCBmONmp1ftGH8%2BCVPtsvgKRfVoULc8hMsMtG9i4VF1PG3w%2FE%2Fu0qGt1bhsikjdj8p2P7xNR9FN9m7AW5NQOfaRIF%2FkGkNwEObWEBYd9%2BvMiHCSBQzU3p9mo16xClpZrA5M0SMQONryQP%2FVbQoc5HH%2BhOxvuEB%2F%2Bvd%2B4qc1k3xebXH5eRRtwJRuv9KeAZxqQTGstX9MiLnsYG9GzESwerxAsm%2F9cyZYaGHd4HnVepI15pZGnfzlZSlZgiBthqVdNK8lYI%2F2ocS7FY1mZLsl%2FQ%2BUIEHo1urthTtBIqD%2BFyVou0kHXAwdxa4iU6Zh57a%2FJeeqaLHbuZQ%2FvCoMIvOiMoGOqUBQK3qUJ7YFV5SAqYkxVA5FlUsd9luoK5eUcl0yE1ygrVoZ1GnZXnWpbTeEu0SMPRqZgXJVBK6lBHp81PDzysYHlEVf%2BF55s447mX8Hy1tPH1P5HS5ckVCm8JR0guU75m%2BAqk9oyIGhZvqm5S1ffymVivDhu3ELXkSTnLD3a3%2FIaCYL%2B9rwkIXOCjSoBVsBY4%2FZNPeA5%2BxgtrU54rqpQ5GILlxIJrg&X-Amz-Signature=7222f02512075d2061774b7032983da1a68d13fcede5b084ab7b409dcea13bde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQFD3S7V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8P8mVcXpYmXrqNCrWHDQyvDA36kbAiDQ1u7KIuHhakAiEA2ujIHFWV2HhdYvSyhcsHFv%2BtdF90rhpFx%2Fdk%2BK9JW9Yq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOAR5Aeymk2GJz3rsSrcA0i%2FHDB3fy31LWW7YzaEUa58rkvcAO3Re8uNrbJm9gt%2FsZcpxIMLlq29N4kLsii9ZZds1l8EfNNRqnXGXicN3tNrjwVNQJCbT4hNywk1KNyQ7rm%2B48QG2wzxGnJ2m51Vaf6xwNEcON8LQN6OfuI4ZSrzxbbbHMUUTB5sF9weDTQ21MVtY2G91%2FHVnaMToQrCHwhXHVng4JN2kE%2F8sTKLSI7C%2BnxnU0xG1%2B7s82HxWvbRb3BYN48exFcYvkiMBoWUMZUGl99ZzUf2xGOax2MLlPLEC8fQWsIgDA4FKVykNSCzzozCBmONmp1ftGH8%2BCVPtsvgKRfVoULc8hMsMtG9i4VF1PG3w%2FE%2Fu0qGt1bhsikjdj8p2P7xNR9FN9m7AW5NQOfaRIF%2FkGkNwEObWEBYd9%2BvMiHCSBQzU3p9mo16xClpZrA5M0SMQONryQP%2FVbQoc5HH%2BhOxvuEB%2F%2Bvd%2B4qc1k3xebXH5eRRtwJRuv9KeAZxqQTGstX9MiLnsYG9GzESwerxAsm%2F9cyZYaGHd4HnVepI15pZGnfzlZSlZgiBthqVdNK8lYI%2F2ocS7FY1mZLsl%2FQ%2BUIEHo1urthTtBIqD%2BFyVou0kHXAwdxa4iU6Zh57a%2FJeeqaLHbuZQ%2FvCoMIvOiMoGOqUBQK3qUJ7YFV5SAqYkxVA5FlUsd9luoK5eUcl0yE1ygrVoZ1GnZXnWpbTeEu0SMPRqZgXJVBK6lBHp81PDzysYHlEVf%2BF55s447mX8Hy1tPH1P5HS5ckVCm8JR0guU75m%2BAqk9oyIGhZvqm5S1ffymVivDhu3ELXkSTnLD3a3%2FIaCYL%2B9rwkIXOCjSoBVsBY4%2FZNPeA5%2BxgtrU54rqpQ5GILlxIJrg&X-Amz-Signature=d30fe619d406fe49d268848a3fa9e9e1c044184286fb07089b0598912daba975&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

