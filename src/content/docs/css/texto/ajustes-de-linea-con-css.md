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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QMP2EQT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIAPziXfDo8d%2FxsMMhtn504k0pjQrtfASGBbM1wHWFlfwAh8OUNEKejL5%2BgV2UX6yKbgOUq6tLOqP2sQvMmqC3%2BusKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFf29k%2BxNcR6xM63sq3AN%2BHoAslA5MRAku4vTle%2BZLJ%2F5WjlJRdUOvTbB8ZqVVmwR4y3TNId1VbpDd0VepndckqTMa5yhavqxxSwNXTjaPyWu892PkAEHiV1sAmM9ixX7t71H8j7B5oVv0x9XZsFMJcGqy7iw%2FX6uuWdrsAD%2FO%2BCrz6NH3s4mnJBwOwOtiI6s3%2FGzHDpNKYDXa6H6eh6P1omsP5WtmRVWbF%2BRIJ93Z6AlTU1vl5T1qzKj1kkbX4Ou%2BRMMUDexsTlriWz8mGVDSJsCXsREf8nkUEVWKpUstOzAf8WdYIhNLoSwhVl8EDPp0j20vCHYkhyJl0IYGaMXMwlNRxn7K0rZYq5dq13OUviIn8qs0rJqLd1ZAOs4%2BrpMhz%2B7Bhh4nSRJGoRXDeY%2BldI4du1RrE1m3e8obfGbj7Rvpmbt4oEyX8RLEHkIxdzJgCURJwIWiUjd%2FHTAahmNOlkCDUkYOh%2BkNDgZvsHi1%2BpH37%2F%2B2WjSb0KuZOl1JwyVOCi1R45ZPwPLmGg3GvK44AyJb4YXH3c3reBLvxlUe5ltTW%2BrqD%2FJnbDpcnQ1qvOeR8CYYVUuynlfClc0kg9XKjqBwxlrlRGzlYzwhvBUt5qgCSsOBJDLJG3fJzxPFdX12FZOihFbud8ggIzCMgYvKBjqnAdXxQYGlq%2FFQr0uNyj5s%2BLnRgsD%2BH3I0GHYCgsnRSzHbH2tndDiOb8%2FypifPOKU5tKzgajWGJZiwPa30aUHA0uI1kvL%2FaEtLy3Dcp%2FDhSJ6bmNxWdM2uwXySvprUc%2BspPY%2Fv00qef1A%2BMie6x9JCqUCDRUKipEuj6%2BkqYs2JZJNXVyqBEWoOcFtpNNnGmpn8upzVV5V4OpKfVnCVGdlmnJEGa8QROP%2BV&X-Amz-Signature=5b8cb322b7410e33a90b076ea88fdb6d3638836ab7f052cc447bd7a7f5595260&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QMP2EQT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIAPziXfDo8d%2FxsMMhtn504k0pjQrtfASGBbM1wHWFlfwAh8OUNEKejL5%2BgV2UX6yKbgOUq6tLOqP2sQvMmqC3%2BusKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFf29k%2BxNcR6xM63sq3AN%2BHoAslA5MRAku4vTle%2BZLJ%2F5WjlJRdUOvTbB8ZqVVmwR4y3TNId1VbpDd0VepndckqTMa5yhavqxxSwNXTjaPyWu892PkAEHiV1sAmM9ixX7t71H8j7B5oVv0x9XZsFMJcGqy7iw%2FX6uuWdrsAD%2FO%2BCrz6NH3s4mnJBwOwOtiI6s3%2FGzHDpNKYDXa6H6eh6P1omsP5WtmRVWbF%2BRIJ93Z6AlTU1vl5T1qzKj1kkbX4Ou%2BRMMUDexsTlriWz8mGVDSJsCXsREf8nkUEVWKpUstOzAf8WdYIhNLoSwhVl8EDPp0j20vCHYkhyJl0IYGaMXMwlNRxn7K0rZYq5dq13OUviIn8qs0rJqLd1ZAOs4%2BrpMhz%2B7Bhh4nSRJGoRXDeY%2BldI4du1RrE1m3e8obfGbj7Rvpmbt4oEyX8RLEHkIxdzJgCURJwIWiUjd%2FHTAahmNOlkCDUkYOh%2BkNDgZvsHi1%2BpH37%2F%2B2WjSb0KuZOl1JwyVOCi1R45ZPwPLmGg3GvK44AyJb4YXH3c3reBLvxlUe5ltTW%2BrqD%2FJnbDpcnQ1qvOeR8CYYVUuynlfClc0kg9XKjqBwxlrlRGzlYzwhvBUt5qgCSsOBJDLJG3fJzxPFdX12FZOihFbud8ggIzCMgYvKBjqnAdXxQYGlq%2FFQr0uNyj5s%2BLnRgsD%2BH3I0GHYCgsnRSzHbH2tndDiOb8%2FypifPOKU5tKzgajWGJZiwPa30aUHA0uI1kvL%2FaEtLy3Dcp%2FDhSJ6bmNxWdM2uwXySvprUc%2BspPY%2Fv00qef1A%2BMie6x9JCqUCDRUKipEuj6%2BkqYs2JZJNXVyqBEWoOcFtpNNnGmpn8upzVV5V4OpKfVnCVGdlmnJEGa8QROP%2BV&X-Amz-Signature=c6000042895886518854e7c861353a966fb9243312c30d85bb69496ca11e9aa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

