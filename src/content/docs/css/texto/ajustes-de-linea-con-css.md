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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN4OIWNH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T155614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNC%2BFq1FMD%2Fk%2BY%2BT92nuoagVrNUrT5MvBWprDRBu0JFwIhAPBt5W5AIpgjA1Zq5jf8CqLnalWH4fF0yPyg9kdkv%2BFrKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2F1uZqMmQPp58GcDcq3ANebEOZfaULbB0J%2BTSYc1eOKuzpkNt%2FkPy74fAMjciSy5Lf6UXCQ2e3Npxpw%2B85Db9NYO5tF2c%2ByRBFi0eB00jkG7o%2BQKkY2XUfuqYtBpbu1RNd68DtzO%2F5p0FOY3hMKfHwxcQ1BS4e5c7QwdtBhBdt2kxlflZjYdQqdPaqi00JdKlCpdT4b8up68Z1DueBhAh%2Fj5e%2B7U%2F9GwTXugbmeXm1VfEh%2BDDt9jnEB2TSFOCR0vP2UKM6I9V8DFmu1Ajhh8i0zd0fPGmmf07Z93Vp6%2Fn2e0XLP1t2jj%2FkvPw2DdcQmq6PgjeiRF1L1SowETEHE7VogeM7gkWhbaZycFAl9tRRmnHze0J9idUAjozdQ6jtJ7uBSrKKGDsPgl6kjK78yf5ee%2F2%2FphTLWmu9D6k%2F2H3%2FDL2mvcg8nl4oekL45TCmZ7ixSvQx8LFfL%2BU8jrlaaWfvFhNZW98YTueKYsvrIBdYMVk5ZXsgrRAzmZ%2F%2BSeC%2BSE%2BL2bqPCRyKCTsxSd2l8TT5hyZa78sVP%2Bds1cdD5XH3%2FXP5uVgdOQwFs%2BbrF1AB2ox75jIX8E7M4wVzQ4ffzJmhTVfJ4pUuD7oIerFYN2%2B7HhcsU%2FXCTRTTV82Yc3kMTbjotehh3zXUrq06rTDfoIvKBjqkAV42XWR5f7waUwQkTAq4ztGygg70L6%2FolTx8iM2xDE%2FfqzyE%2BPb%2BTxL8S%2FxoxPXGjn8TsDlN0mhnv%2F6BcTcgfx5iNcwVK%2BKxjL%2FixnsU%2FjjiQVjd99mmKpb%2Fku77uQE3R9kHYBf7hQ0cWZnd5LeSTBc7lsQQcgi53QXOo4mKY5e%2FfYRvW4EsFONIGYvlMGIFKGFtA8Qk3r0jiyzpJFG3N77PktPp&X-Amz-Signature=c5b937c3c0d69050e2d0ba15f43c565483a344a5d730a4564ad309241b0e6297&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN4OIWNH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T155614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNC%2BFq1FMD%2Fk%2BY%2BT92nuoagVrNUrT5MvBWprDRBu0JFwIhAPBt5W5AIpgjA1Zq5jf8CqLnalWH4fF0yPyg9kdkv%2BFrKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2F1uZqMmQPp58GcDcq3ANebEOZfaULbB0J%2BTSYc1eOKuzpkNt%2FkPy74fAMjciSy5Lf6UXCQ2e3Npxpw%2B85Db9NYO5tF2c%2ByRBFi0eB00jkG7o%2BQKkY2XUfuqYtBpbu1RNd68DtzO%2F5p0FOY3hMKfHwxcQ1BS4e5c7QwdtBhBdt2kxlflZjYdQqdPaqi00JdKlCpdT4b8up68Z1DueBhAh%2Fj5e%2B7U%2F9GwTXugbmeXm1VfEh%2BDDt9jnEB2TSFOCR0vP2UKM6I9V8DFmu1Ajhh8i0zd0fPGmmf07Z93Vp6%2Fn2e0XLP1t2jj%2FkvPw2DdcQmq6PgjeiRF1L1SowETEHE7VogeM7gkWhbaZycFAl9tRRmnHze0J9idUAjozdQ6jtJ7uBSrKKGDsPgl6kjK78yf5ee%2F2%2FphTLWmu9D6k%2F2H3%2FDL2mvcg8nl4oekL45TCmZ7ixSvQx8LFfL%2BU8jrlaaWfvFhNZW98YTueKYsvrIBdYMVk5ZXsgrRAzmZ%2F%2BSeC%2BSE%2BL2bqPCRyKCTsxSd2l8TT5hyZa78sVP%2Bds1cdD5XH3%2FXP5uVgdOQwFs%2BbrF1AB2ox75jIX8E7M4wVzQ4ffzJmhTVfJ4pUuD7oIerFYN2%2B7HhcsU%2FXCTRTTV82Yc3kMTbjotehh3zXUrq06rTDfoIvKBjqkAV42XWR5f7waUwQkTAq4ztGygg70L6%2FolTx8iM2xDE%2FfqzyE%2BPb%2BTxL8S%2FxoxPXGjn8TsDlN0mhnv%2F6BcTcgfx5iNcwVK%2BKxjL%2FixnsU%2FjjiQVjd99mmKpb%2Fku77uQE3R9kHYBf7hQ0cWZnd5LeSTBc7lsQQcgi53QXOo4mKY5e%2FfYRvW4EsFONIGYvlMGIFKGFtA8Qk3r0jiyzpJFG3N77PktPp&X-Amz-Signature=d3fe5c89e8fbd0500742e96ff86bcaa7c33dd2839e7248589f4d42409ec9e976&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

