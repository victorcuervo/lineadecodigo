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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFE2XJKD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUV9Egowe63gf8DjxuQj2fjei2Pm5p1UIlL0FZApiLRwIhAMSSo8dPI8%2FayrOylQ9DlWpKKjb32H0RzZjgeEn96mbEKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwH6a3inG0one7eneUq3AOlJTARPzkCA8Ei8EjO0ZrJpwpUy5%2B0h6x2Z1Zxlvs4wGRnxoP1XsxoNbhTqx0W3jOjLwcu6dxsvvAi5%2FIw5fs%2F2aMfp%2FSuX9wXNffvBGmaU8FHzoVL6UlSvej6%2Bp8tOV%2F29nQoUyvm6UZryZJCVDpGCC08HMPztiynJILIe5G21chU1dwm8YH5NHdL3F2zepmumkj3pRV2tXfHn7ScFvsg3%2BRqJOhGVpF%2B1pJ2S%2BcRiOQHdWC8BAyEw5xKWGJN1sws2C5%2BVXP4%2BbdNG6tlGVOvBboFmH0ggna447yXHfuMyR5S5Q%2B%2FoTm6VVyIFQjASZimwxqSlEz%2B0aXuH4aB0S1pb57uL23it1XRB8f9xgqzCtvDCPwIVDfmjOv9uy%2BiUOzRHjx5rKyUDMVlX33d5XkwHxOacZhiNAKSDmu6xdmQanes%2B47t0x3%2FOGD2rib81x9daFpGCw1ny2RnkJAdXZeZYnk0Lj%2FtogQf41a379QynfPrWK%2F2zqVNTngtEU31pyBLObcQMeg%2FfkHPvK4oDOwcg70AYBr%2FWC%2Bw7J%2BSNU3GxT1iFZ69dGDwC%2BzQ%2Bj%2Fq8dY%2FA1eDQQUZKlQ4PGMMPzywAXUyTmO4U4C6rWE014%2Firfq2v9O%2FWtyT7VgjYTCkn4vKBjqkAfXrb3mGMdw27MA2oMEV5ibIMhwCZshgZyyo2niMvyeRjqcLy9AD4Ee6utRW6JHP6ekCuDwXbiANBB5EWy0lSCTuPxH1MtD7TlVUTiDcJspXoTpaXq4yNjH3KhZqVG8oWr2pO7Je6C99ebX%2BTnWYlh6E5%2FlaqGu0db%2B6ho%2F0VhKXGy8myAjY%2B6pW3pY%2Fa2yc7ynvwTli7pBZIOMC8ncXANvsndHp&X-Amz-Signature=bcbc6cf98a1c2c548f9e6b8a13c5f061c17f58b957bc630f033862caa2326e21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFE2XJKD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUV9Egowe63gf8DjxuQj2fjei2Pm5p1UIlL0FZApiLRwIhAMSSo8dPI8%2FayrOylQ9DlWpKKjb32H0RzZjgeEn96mbEKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwH6a3inG0one7eneUq3AOlJTARPzkCA8Ei8EjO0ZrJpwpUy5%2B0h6x2Z1Zxlvs4wGRnxoP1XsxoNbhTqx0W3jOjLwcu6dxsvvAi5%2FIw5fs%2F2aMfp%2FSuX9wXNffvBGmaU8FHzoVL6UlSvej6%2Bp8tOV%2F29nQoUyvm6UZryZJCVDpGCC08HMPztiynJILIe5G21chU1dwm8YH5NHdL3F2zepmumkj3pRV2tXfHn7ScFvsg3%2BRqJOhGVpF%2B1pJ2S%2BcRiOQHdWC8BAyEw5xKWGJN1sws2C5%2BVXP4%2BbdNG6tlGVOvBboFmH0ggna447yXHfuMyR5S5Q%2B%2FoTm6VVyIFQjASZimwxqSlEz%2B0aXuH4aB0S1pb57uL23it1XRB8f9xgqzCtvDCPwIVDfmjOv9uy%2BiUOzRHjx5rKyUDMVlX33d5XkwHxOacZhiNAKSDmu6xdmQanes%2B47t0x3%2FOGD2rib81x9daFpGCw1ny2RnkJAdXZeZYnk0Lj%2FtogQf41a379QynfPrWK%2F2zqVNTngtEU31pyBLObcQMeg%2FfkHPvK4oDOwcg70AYBr%2FWC%2Bw7J%2BSNU3GxT1iFZ69dGDwC%2BzQ%2Bj%2Fq8dY%2FA1eDQQUZKlQ4PGMMPzywAXUyTmO4U4C6rWE014%2Firfq2v9O%2FWtyT7VgjYTCkn4vKBjqkAfXrb3mGMdw27MA2oMEV5ibIMhwCZshgZyyo2niMvyeRjqcLy9AD4Ee6utRW6JHP6ekCuDwXbiANBB5EWy0lSCTuPxH1MtD7TlVUTiDcJspXoTpaXq4yNjH3KhZqVG8oWr2pO7Je6C99ebX%2BTnWYlh6E5%2FlaqGu0db%2B6ho%2F0VhKXGy8myAjY%2B6pW3pY%2Fa2yc7ynvwTli7pBZIOMC8ncXANvsndHp&X-Amz-Signature=0e11397317174cdd48afc455f4702f420e3b8fbb9e4e9a63365007a647b035b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

