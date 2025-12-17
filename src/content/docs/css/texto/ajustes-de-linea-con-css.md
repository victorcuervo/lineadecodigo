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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZDZPXWU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXx%2BhaXQEKiqtUJ47M7jRBH1LBU4CgbFSZAtSzsLvSUAiBloeyFx4SMRj%2BfSBmAs8RG2EFCKwsGJViuNVB1l1mhPyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMJTTuV1ThIdldwUsGKtwDH%2B47%2BufQVZaO%2BTZtJMOQbEBPm%2FnI6JBv6vrWnBMahLay54OZcO8rFllmG24r5fK75%2B%2BIVnCD%2BQZjy9EGU1UaYJLSbYs79GbUDztWW76A%2BudfB%2F%2BOkRfXE%2BdCE7rQyNikSRV%2F63%2FwQx6%2FZ9SYSUBxP8nKe8XM8eIX%2Bc0TmG0SJwqQ%2BCMBcGmkCa3qMZXsste%2BNr%2FTCbsHFcZqaeg69FyGcbZuHIpFzsjn4xjmBB7idHOwYgbjKb359oaV9LiifMH%2B7dZZLs5Qt2zu9%2BOzAfP2pQ8qS%2FsV1f0xRGwX6ECuAQ2hx8SzrlUtRgvi036CQNEUUVP1uZZfwq09ohotvvprx%2FUXW95fdLjJZ2imk6E9Jxv6%2FegdBHXTk%2BP2u28XqzyQXC4KOY0%2FtkXK%2BsnwqJ5hxCYWz0ocFItVgv2%2FDZ7GJ4sW2ELqAyHn9RHiLqQHByO1ZNHxa8BKwMtX3cJhraAZkhcoCsVVdE3NRGmrtz3sJKVTc2klgKPNcG3LXFtUntFhM3HYy7pPcA0AVAFVbFYD%2BmTIkXVkytgnuXoCMz06fKViz757252toIHKiiZy49cpWX6V%2FWMGHuR48pKPUeJtnTowMMArBj7JAu0PkSEk2erfdNHIXZWfwItf4VUwtKqKygY6pgHM2jtM%2F2inES1ShMdB%2FpW%2Fj%2FpYY7fp0MAwDTPi6CcidcKvp0FUow5OBsoimIAnpQlw3dpBOpwHXR10IrvVETm%2B1owAyp9YBhDdzEavE8thRP0fm%2B5ZwOhpJvaisQTL5VyCWpJeOrk5NZjdrCVZRNBUZB0TwVhTgc6Cjh%2FehaW9gjGC4vgx283%2FD59CUTS5EeuGniPOoff1%2BZbeYU83G5DV2mfiFbFi&X-Amz-Signature=83d9b3de2f6690596dcbb593879e7e2f8468051bd9f1b2da8cd45ede812d700c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZDZPXWU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXx%2BhaXQEKiqtUJ47M7jRBH1LBU4CgbFSZAtSzsLvSUAiBloeyFx4SMRj%2BfSBmAs8RG2EFCKwsGJViuNVB1l1mhPyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMJTTuV1ThIdldwUsGKtwDH%2B47%2BufQVZaO%2BTZtJMOQbEBPm%2FnI6JBv6vrWnBMahLay54OZcO8rFllmG24r5fK75%2B%2BIVnCD%2BQZjy9EGU1UaYJLSbYs79GbUDztWW76A%2BudfB%2F%2BOkRfXE%2BdCE7rQyNikSRV%2F63%2FwQx6%2FZ9SYSUBxP8nKe8XM8eIX%2Bc0TmG0SJwqQ%2BCMBcGmkCa3qMZXsste%2BNr%2FTCbsHFcZqaeg69FyGcbZuHIpFzsjn4xjmBB7idHOwYgbjKb359oaV9LiifMH%2B7dZZLs5Qt2zu9%2BOzAfP2pQ8qS%2FsV1f0xRGwX6ECuAQ2hx8SzrlUtRgvi036CQNEUUVP1uZZfwq09ohotvvprx%2FUXW95fdLjJZ2imk6E9Jxv6%2FegdBHXTk%2BP2u28XqzyQXC4KOY0%2FtkXK%2BsnwqJ5hxCYWz0ocFItVgv2%2FDZ7GJ4sW2ELqAyHn9RHiLqQHByO1ZNHxa8BKwMtX3cJhraAZkhcoCsVVdE3NRGmrtz3sJKVTc2klgKPNcG3LXFtUntFhM3HYy7pPcA0AVAFVbFYD%2BmTIkXVkytgnuXoCMz06fKViz757252toIHKiiZy49cpWX6V%2FWMGHuR48pKPUeJtnTowMMArBj7JAu0PkSEk2erfdNHIXZWfwItf4VUwtKqKygY6pgHM2jtM%2F2inES1ShMdB%2FpW%2Fj%2FpYY7fp0MAwDTPi6CcidcKvp0FUow5OBsoimIAnpQlw3dpBOpwHXR10IrvVETm%2B1owAyp9YBhDdzEavE8thRP0fm%2B5ZwOhpJvaisQTL5VyCWpJeOrk5NZjdrCVZRNBUZB0TwVhTgc6Cjh%2FehaW9gjGC4vgx283%2FD59CUTS5EeuGniPOoff1%2BZbeYU83G5DV2mfiFbFi&X-Amz-Signature=bd845d9c9a2c77627ce5c1413284fb387639c2e03310b95d037488dd80fcebbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

